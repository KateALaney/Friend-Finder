var friendData = require("./data/friends");



module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function (req, res) {
    if (friendData.length < 5) {
      friendData.push(req.body);
      res.json(true);
    }
  });

  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    friendData.length = 0;

    res.json({
      ok: true
    });
  });
};