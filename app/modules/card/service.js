const Joi = require('joi');
const pagarme = require('pagarme');
const { PAGARME_API_KEY } = process.env;
const connectConfig = { api_key: PAGARME_API_KEY };
const { validate, parseUserToConsumer } = require('./../../tools');
const { UserCard, UserConsumer } = require('./../../models');

class CardService {
  constructor(user) {
    if (!user) throw new Error('Usuário não encontrado ao montar serviço!');
    this.user = user;
  }

  static on(user) {
    return new CardService(user);
  }

  create(card) {
    return validate(card, {
      card_number: Joi.string().required(),
      card_holder_name: Joi.string().required(),
      card_expiration_date: Joi.string().required(),
      card_cvv: Joi.string().required(),
    }).then(async card => {
      const userId = this.user.id;
      const user = this.user;
      const client = await pagarme.client.connect(connectConfig);
      let consumer = await UserConsumer.findOne({ where: { userId } });

      if (!consumer) {
        const consumerCreated = await client.customers.create(parseUserToConsumer(user));

        await UserConsumer.create({
          userId,
          consumerId: consumerCreated.id
        });

        consumer = consumerCreated;
      }

      const cardCreated = await client.cards.create({
        ...card,
        customer_id: consumer.consumerId
      });

      await UserCard.create({
        userId: userId,
        cardId: cardCreated.id
      });

      return cardCreated;
    });
  }

  async retrieve(options) {
    const userId = this.user.id;
    const client = await pagarme.client.connect(connectConfig);
    const card = await UserCard.findOne({ where: { userId }, order: [['createdAt', 'DESC']] });

    return card ? client.cards.find({ id: card.cardId }) : null;
  }
}

module.exports = CardService;