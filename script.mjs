const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
};

//console.log(adventurer.inventory[0])

// for(let i = 0; i<adventurer.inventory.length; i++) {
//         console.log(adventurer.inventory[i]);
// }

class Character {
  static MAX_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = Character.MAX_HEALTH;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard", "Archer", "Rogue"];

  constructor(name, role) {
    super(name);
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(`Invalid role: ${role}. Must be one of: ${Adventurer.ROLES.join(", ")}`);
    }
    this.role = role;
    this.level = 1;
    this.gold = 50;
    this.quests = [];
    this.skills = [];
    this.inventory.push("bedroll");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  addQuest(quest) {
    this.quests.push(quest);
    console.log(`${this.name} accepted quest: ${quest}`);
  }

  useSkill(skill) {
    if (this.skills.includes(skill)) {
      console.log(`${this.name} uses skill: ${skill}`);
    } else {
      console.log(`${this.name} does not have the skill: ${skill}`);
    }
  }
}

class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
    this.loyalty = 100;
    this.tricks = [];
  }

  performTrick(trick) {
    if (this.tricks.includes(trick)) {
      console.log(`${this.name} the ${this.type} performs: ${trick}!`);
    } else {
      console.log(`${this.name} doesn't know the trick: ${trick}.`);
    }
  }

  increaseLoyalty(amount) {
    this.loyalty += amount;
    console.log(`${this.name}'s loyalty increased to ${this.loyalty}.`);
  }
}

const robin = new Adventurer("Robin", "Archer");
robin.inventory.push("sword", "potion", "artifact");
console.log("Robin's inventory after adding items:", robin.inventory);

robin.companion = new Companion("Leo", "Cat");
console.log("Robin's companion set to:", robin.companion);

robin.companion.companion = new Companion("Frank", "Flea");
console.log("Leo's companion set to:", robin.companion.companion);

robin.companion.companion.inventory.push("small hat", "sunglasses");
console.log("Frank's inventory after adding items:", robin.companion.companion.inventory);

robin.addQuest("Find the lost sword");
console.log("Robin's quests after adding:", robin.quests);

robin.companion.increaseLoyalty(10);
console.log("Leo's loyalty after increase:", robin.companion.loyalty);

robin.companion.companion.performTrick("jump");
robin.companion.companion.tricks.push("jump");
console.log("Frank's tricks after learning 'jump':", robin.companion.companion.tricks);