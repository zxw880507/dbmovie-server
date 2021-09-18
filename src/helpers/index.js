module.exports = {
  generateCacheKey(queryParams) {
    let arr = [],
      queryStr;
    for (let key in queryParams) {
      queryStr = `${key}=${queryParams[key]}`;
      arr.push(queryStr);
    }
    return arr.join("&");
  },
  generateURL(api_key, query) {
    const { sortBy, direction, page } = query;
    const queryParams = { api_key, sort_by: `${sortBy}.${direction}`, page };
    return this.generateCacheKey(queryParams);
  },
};
