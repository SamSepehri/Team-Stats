const team = {
    _players: [
        { firstName: "Lionel", lastName: "Messi", age: 35 },
        { firstName: "Chris", lastName: "Ronaldo", age: 37 },
        { firstName: "Kylian", lastName: "Mbape", age: 22 },
    ],
    _games: [
        { opponent: "Perspolis", teamPoints: 2, opponentPoints: 1 },
        { opponent: "esteghlal", teamPoints: 3, opponentPoints: 3 },
        { opponent: "sepahan", teamPoints: 0, opponentPoints: 1 },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        };
        this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        };
        this.games.push(game);
    },
};

team.addPlayer("Sam", "sepehri", 30);
console.log(team.players);

team.addGame("Naft", 3, 3);
console.log(team.games);
