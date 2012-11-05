function app(cb) {
    var _this = this;
    console.log('Isn\'t it great to have light-weight lambdas?');
    this.answer = 42;
    setTimeout(function () {
        cb(_this.answer);
    }, 0);
}
app(function (answer) {
    console.log('the answer is ', answer);
    giveMadPropsTo('The Queen', 'David Byrne', 'Paul Allen');
});
function giveMadPropsTo() {
    var peeps = [];
    for (var _i = 0; _i < (arguments.length - 0); _i++) {
        peeps[_i] = arguments[_i + 0];
    }
    peeps.forEach(function (peep) {
        console.log('Mad props to ' + peep);
    });
}
