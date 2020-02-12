var ballCount = 5 
var xs = []
var ys = []
var speedX = []
var speedY = []
// set up variables

function setup() {
  createCanvas(400, 400)
//   set up canvas

  for (var i = 0; i < ballCount; i = i + 1) {
    xs[i] = Math.random() * width
    ys[i] = Math.random() * height
    speedX[i] = Math.random() * 3
    speedY[i] = Math.random() * 3
  }
//   fill each of the 4 arrays
//  (xs, ys, speedX, speedY) with 5 random values
}

function draw() {
  background(200)

  for (var i = 0; i < ballCount; i = i + 1) {
    xs[i] += speedX[i]
    ys[i] += speedY[i]
    // += means xs[i] = xs[i] + speedX[i]
    // constantly changing xs[i] and ys[i]

    if (xs[i] < 0 || xs[i] > width) {
      speedX[i] = speedX[i] * -1
    }
    if (ys[i] < 0 || ys[i] > height) {
      speedY[i] = speedY[i] * -1
    }
    // if the ball hit a border, let it turn back

    ellipse(xs[i] - 5, ys[i] - 5, 20, 20)
    // draw a circle of radius 20, centered at (xs[i]-5, ys[i]-5)
  }
}
// 1. **How does this code use arrays and loops?**
// It's putting all the variables of the same type in
// one place.

// 1. **Can you think of a way this might cause problems?**
// It takes time to understand what is going on. Not CLEAN!

// In this example, we have several on-screen objects 
// - the balls. In our code, each object is made up of 
// four pieces of information. **What are they?**
// They are xs[i], ys[i], speedX[i], speedY[i]

// | `var alex = {name: 'alex', age: 23, height: 163}`  |  create an object called alex, 
//                                                          it has 3 keys and 3 coresponding values               |               |                      |
// | `alex.name`                                        |  "alex"               |               |                      |
// | `alex.age`                                         |  23               |               |                      |
// | `alex.age = 1000`                                  |  assign 1000 to alex's age               |               |                      |
// | `alex` (use the ▶ to expand the object)            |  now age:1000               |               |                      |
// | `alex.hairColor = 'blue'`                          |  add another key/value pair               |               |                      |
// | `alex`                                             |  it has one more pair in it               |               |                      |
// | `var pet = {name: 'amber', type: 'dog'}`           |                 |               |                      |
// | `pet`                                              |                 |               |                      |
// | `alex.pet = pet`                                   |                 |               |                      |
// | `alex`                                             |                 |               |                      |
// | `pet.name = 'lyla'`                                |                 |               |                      |
// | `alex.pet`                                         |                 |               |                      |
// | `delete alex.pet`                                  |                 |               |                      |
// | `alex.pet`                                         |                 |               |                      |
// | `pet`                                              |                 |               |                      |
// | `alex["name"]`                                     |                 |               |                      |
// | `var someString = 'age'`                           |                 |               |                      |
// | `alex[someString]`                                 |                 |               |                      |
// | `alex[someString] = 23`                            |                 |               |                      |
// | `var weirdObj = {spooky: true}`                    |                 |               |                      |
// | `weirdObj.strange = weirdObj`                      |                 |               |                      |
// | `weirdObj` (use ▶ to expand - how far does it go?) 