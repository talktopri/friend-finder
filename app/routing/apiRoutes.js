var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        var bestMatch = {
            name: "",
            photo: "",
            friendDif: 1000
        };

        // console.log(req.body);

        var userData = req.body;
        var userScore = userData.scores;

        // console.log(userScore);

        var difference = 0;

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            difference = 0;

            for (var j=0; j < friends[i].scores[j]; j++) {
                difference += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));

                if (difference <= bestMatch.friendDif) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDif = difference; 
                }
            }
        }
        console.log(userData);
        console.log(bestMatch);
        friends.push(userData);
        res.json(bestMatch);
    });
}