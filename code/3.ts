class Hacker{
  // automatic parameter assignment is pretty neat
  constructor(private fname, private lname) {}
 
  // static properties will be defined on the constructor function
  static public defaultPort = 1337;
 
  // methods are automatically assigned
  get name () {
    return this.fname + ' ' + this.lname;
  }


}

var bob = new Hacker('Bob', 'Bobson');

console.log(bob.name);
console.log(Hacker.defaultPort);

console.log(bob.fname); 
// private members are still accessible - that's how js works, folks
