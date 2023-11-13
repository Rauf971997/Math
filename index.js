class Human{
    #name;
    #age;
    constructor(name,age){
        this.#name=name;
        this.#age=age;  
    }

    get name(){
        return this.#name;
    }

    get age(){
        return this.#age;
    }
    
}


class Player extends Human{
     #sportName;
     #inMainTeam;
    constructor(name, age, sportName, inMainTeam){
      super(name,age);
        this.#sportName=sportName;
        this.#inMainTeam=inMainTeam;
    }

    get sportName() {
        return this.#sportName;
    }

    get inMainTeam() {
        return this.#inMainTeam;
    }

}


class FootbalPlayer extends Human{
    constructor(name, age, inMainTeam){
        super(name, age, 'MMA', inMainTeam);
    }
}


class Team {
    #footballPlayers;

    constructor() {
        this.#footballPlayers = [];
    }

    get players() {
        return [...this.#footballPlayers];
    }

    addPlayers(...footballPlayers) {
        this.#footballPlayers.push(...footballPlayers);
    }

    deletePlayer(footballPlayer) {
        const indexOfFootballPlayer = this.#footballPlayers.indexOf(footballPlayer);

        if (indexOfFootballPlayer !== -1) {
            this.#footballPlayers.splice(indexOfFootballPlayer, 1);
        }
    }

    getPlayersSortedByName() {
        return [...this.#footballPlayers].sort(function(a, b) {
            const name1 = a.name.toLowerCase();
            const name2 = b.name.toLowerCase();

            if (name1 > name2) return 1;
            if (name1 < name2) return -1;

            return 0;
        });
    }

    getFilteredPlayers(inMainTeam) {
        return this.#footballPlayers.filter(function(footballPlayer) {
            return footballPlayer.inMainTeam === inMainTeam;
        });
    }
}

