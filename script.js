//1
function printOdds() {
  for (var i = 1; i < 21; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

//2
function goingDownBy3() {
  for (var i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}

//3
function decimals() {
  for (var i = 4; i >= -3.5; i -= 1.5) {
    console.log(i);
  }
}

//4
function sigma() {
  var sum = 1;
  for (var i = 2; i < 101; i++) {
    sum += i;
  }
  console.log(sum);
}

//5
function factorial() {
  var sum = 1;
  for (var i = 2; i < 13; i++) {
    sum *= i;
  }
  console.log(sum);
}
