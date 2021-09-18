const router = require("express").Router();

module.exports = (api_key = null) => {
  router.get("/", (req, res) => {
    res.status(200).json({ success: true, api_key });
  });
  return router;
};
