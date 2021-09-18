// init cache nodule
const NodeCache = require("node-cache");
const myCache = new NodeCache();

module.exports = {
  get(key) {
    return new Promise((resolve) => {
      const response = {};
      response.data = myCache.get(key);
      resolve(response);
    });
  },

  set(key, value, ttl) {
    return new Promise((resolve, reject) => {
      const success = myCache.set(key, value, ttl);
      if (success) {
        const res = { msg: "Cache stored successfully!" };
        resolve(res);
      } else {
        const err = { msg: "Cache failed to save!" };
        reject(err);
      }
    });
  },
};
