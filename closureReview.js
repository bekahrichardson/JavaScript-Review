var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  var myFriend = callFriend();
  myFriend('435-215-9248');



/*

Write a function that accepts a function as it's first argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed N number of times. After the function has been called N number of times, console.log('STAHHP');

*/
function codeLove() {
  return 'I love code';
}
//function codeFriend(func) {
// var counter = 1;
// return function notCodeFriend() {
// if (counter === 1) {
//    counter++;
//    return func();
//   } else {
//   return null;
// }
// }
// }

// var codeEcho = codeFriend(codeLove);
// console.log(codeEcho());
// console.log(codeEcho());

var run = false;

function codeFriend(func) {
  return function() {
    if(!run) {
      run = true;
      return func();
    }
    else {
      return null;
  }
};
}

var codeEcho = codeFriend(codeLove);


// second part of the problem. I am totally going online for these random answers.

function fnCounter(x, N) {
  var counter = 1;
  return function() {
    if (counter <= N) {
      counter++;
      return x();
    } else {
      return 'STAHHP';
    };
  }
}
