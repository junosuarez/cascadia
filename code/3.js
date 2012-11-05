var Hacker = (function () {
    function Hacker(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Hacker.defaultPort = 1337;
    Hacker.prototype.name = function () {
        return this.fname + ' ' + this.lname;
    };
    return Hacker;
})();
var bob = new Hacker('Bob', 'Bobson');
console.log(bob.name());
console.log(Hacker.defaultPort);
console.log(bob.fname);
