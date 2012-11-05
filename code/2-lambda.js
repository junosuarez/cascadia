function app(cb) {
    var _this = this;
    console.log('Isn\'t it great to have light-weight lambdas?');
    this.answer = 42;
    setTimeout(function () {
        cb(_this.answer);
    }, 0);
}
app(function (answer) {
    console.log(answer);
});
