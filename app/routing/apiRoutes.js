var friendData = require("./data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function (req, res) {
    var user = req.body;
    for (var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    };

    var closestFriendIndex = 0;
    var minimumDifference = 50;

    for (var i = 0; i < friendData.length; i++) {
      var totalDifference = 0;
      for (var j = 0; j < friendData[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friendData[i].scores[j]);
        totalDifference += difference;
      }

      if (totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    friendData.push(user);

    res.json(friendData[closestFriendIndex]);
  });
};