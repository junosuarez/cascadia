function app(cb) {
  console.log('Isn\'t it great to have light-weight lambdas?');
  this.answer = 42;
  setTimeout(() => {
    cb(this.answer);
    // lexically scoped `this` is exactly what we want here
    // check the .js to see that it handles all the 
    // `var _this = this` garbage for you
  }, 0); 
}


app((answer) => {
  console.log('the answer is ', answer);
  // lastly, I wanna
  giveMadPropsTo('The Queen', 'David Byrne', 'Paul Allen');
});

function giveMadPropsTo(...peeps: any[]) {
  peeps.forEach((peep) => {
    console.log('Mad props to ' + peep);
});
}
