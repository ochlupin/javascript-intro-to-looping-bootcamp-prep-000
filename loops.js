function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      array.push("I am a strange loop")
    } else {
      array.push(`I am ${i+1} strange loops.`)
    }
  }
  return array;
};

function whileLoop(n) {
  while (n > 0) {
    console.log(n--)
  }
  return "done";
};


function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue());
  return array;
};