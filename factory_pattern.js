function Developer(name) {
  this.name = name;
  this.type = "DEVELOPER";
}

function Tester(name) {
  this.name = name;
  this.type = "TESTER";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch(type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
      default: return new Developer(name);
    }
  }
}


function say()
{
  console.log(`Hi I am ${this.name} and I am a ${this.type}`)
}

const e = new EmployeeFactory();
const employees = [];
employees.push(e.create("Sunny", 1));
employees.push(e.create("Bunny", 2));
employees.push(e.create("Maddy", 1));
employees.push(e.create("Maggie", 2));
employees.push(e.create("Jullie", 1));


employees.forEach( emp => {
  say.call(emp)
});