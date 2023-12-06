// reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// context vs scope

const object4 = {
  a: function () {
    console.log(this);
  },
};

// instantiation

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduction() {
    console.log(`${this.name}, ${this.type}`);
  }
}

class Wizzerd extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Weee ${this.type}`);
  }
}

const wizard1 = new Wizzerd("San", "Healer");
const wizerd2 = new Wizzerd("ran", "Dark Magic");
