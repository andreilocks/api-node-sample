const PAGE_SIZE = 10;

module.exports = {
  query({ fields, limit, page }) {
    const query = {
      limit: (limit || PAGE_SIZE) + 1,
      offset: ((page || 1) - 1) * PAGE_SIZE
    };

    if (fields) {
      query.attributes = fields.split(',');
    }

    return query;
  },

  result({ limit, page }, data) {
    const isLast = ((data.splice(limit || PAGE_SIZE).length) === 0);
    
    return {
      data,
      isLast 
    }
  }
}