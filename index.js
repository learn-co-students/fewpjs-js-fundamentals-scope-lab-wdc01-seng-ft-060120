const animal = ""

function myAnimal() {
  let pet = "dog"
  return animal + pet;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  let pet = "cat"
  return animal + pet;
}

function add2(n) {
  let two = 2
  return n + two;

  // Feel free to move things around!
}