class Fighter {
    constructor({ name, damage, hp, strength, agility }) {
        this.hisName = name;
        this.hisDamage = damage;
        this.hisHp = hp;
        this.hisStrength = strength;
        this.hisAgility = agility;
        this.maxHp = hp;
        this.win = 0;
        this.losses = 0;
    }
    getName() {
        return this.hisName;
    }
    getDamage() {
        return this.hisDamage;
    }
    getStrength() {
        return this.hisStrength;
    }
    getAgility() {
        return this.hisAgility;
    }
    getHealth() {
        return this.hisHp;
    }
    attack(fighter) {
        let succsesDef = 100 - (fighter.getStrength() + fighter.getAgility());
        let procPunch = parseInt(Math.random() * 100);
        if (procPunch > succsesDef) {
            fighter.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} to ${fighter.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }
    logCombatHistory() {
        console.log(`Name: ${this.getName()}, Wins: ${this.win}, Losses: ${this.losses}`);
    }
    heal(hp) {
        this.hisHp = this.hisHp + hp;
        if (this.hisHp > this.maxHp) {
            this.hisHp = this.maxHp;
        }
    }
    dealDamage(damage) {
        this.hisHp = this.hisHp - damage;
        if (this.hisHp < 0) {
            this.hisHp = 0;
            return this.hisHp;
        }
        return this.hisHp;
    }
    addWins() {
        this.win++;
    }
    addLoss() {
        this.losses++;
    }
}

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        for (; ;) {
            // debugger
            fighter1.attack(fighter2);
            if (fighter2.getHealth() <= 0) {
                fighter2.addLoss();
                fighter1.addWins();
                console.log(`${fighter1.getName()} has won!`);
                return;
            }
            fighter2.attack(fighter1);
            if (fighter1.getHealth() <= 0) {
                fighter1.addLoss();
                fighter2.addWins();
                console.log(`${fighter2.getName()} has won!`);
                return;
            }
        }
    } else if (fighter1.getHealth() <= 0) {
        console.log(`${fighter1.getName()} is dead and can\`t fight.`)
    } else if (fighter2.getHealth() <= 0) {
        console.log(`${fighter2.getName()} is dead and can\`t fight.`)
    }
}