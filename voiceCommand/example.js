let nn;
let data = [
  ["good morning", 0],
  ["good night", 1]
]

let add = [
  ["hello", 0],
  ["bye", 1]
]

let outputF = [
  function(){
    console.log("a greeting");
  },
  function(){
    console.log("a goodbye");
  }
]

function setup(){
  nn = new neuralNetwork([27, 100, 100, 2]);

  nn.setData(data);
  nn.setOutput(outputF);
  nn.addData(add)
  nn.setRecognition(true);
  nn.beginRecognition();

}

function draw(){

}

function keyPressed(){
  nn.beginRecognition(true);
}

function mousePressed(){
  nn.endRecognition();
}
