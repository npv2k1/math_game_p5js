var currentBox;

var arrBox = [];
var resBox = [];
let t = 0;
var inp;

// Đặt phạm vi phép tính -> kết quả phép tính bất kỳ luôn nhỏ hơn giá trị này
const mxRange = 10;

// Hàm sinh phép tính
function randomMath(maxRange) {
  var x, y;
  var op = floor(random(0, 4));
  var res = 0;
  var text = "";
  switch (op) {
    // +
    case 0:
      res = floor(random(0, maxRange));
      x = floor(random(0, res));
      y = res - x;
      text = `${x}+${y}`;

      break;
    // -
    case 1:
      x = floor(random(0, maxRange));
      y = floor(random(0, x));
      text = `${x}-${y}`;
      res = x - y;

      break;
    // *
    case 2:
      x = floor(random(0, Math.sqrt(maxRange) + 1));
      y = floor(random(0, Math.sqrt(maxRange) + 1));
      text = `${x}*${y}`;
      res = x * y;
      break;
    // /
    case 3:
      x = floor(random(0, Math.sqrt(maxRange) + 1));
      y = floor(random(1, Math.sqrt(maxRange) + 1));
      x = x * y;
      text = `${x}/${y}`;
      res = x / y;
      break;
  }
  return { text: text, res: res };
}

function setup() {
  createCanvas(400, 400);

  let m = randomMath(mxRange);
  let box = new Box(random(0, width - 100), 0, 100, 50, m.text);
  arrBox.push(box);
  resBox.push(m.res);

  // Tạo input và focus vào input đó
  inp = createInput("");
  inp.id("answer_input");
  document.getElementById("answer_input").focus();
}

// Sự kiện khi nhấn enter
function keyPressed() {
  if (keyCode === ENTER) {
    for (let i = 0; i < resBox.length; i++) {
      if (resBox[i] == inp.value()) {
        console.log(inp.value());
        arrBox.splice(i, 1);
        resBox.splice(i, 1);
        document.getElementById("point").innerText =
          parseInt(document.getElementById("point").innerText) + 1;
        i--;
      }
    }
    inp.value("");
  }
}
function draw() {
  background(220);
  for (let i = 0; i < resBox.length; i++) {
    arrBox[i].show();
    arrBox[i].drop();
    if (arrBox[i].y > height + 50) {
      let index = arrBox.indexOf(arrBox[i]);
      arrBox.splice(index, 1);
      resBox.splice(index, 1);
      console.log(arrBox.length);
      document.getElementById("error").innerText =
        parseInt(document.getElementById("error").innerText) + 1;
      i--;
    }
  }

	// Biến đếm để điểu khiển tốc độ 
  t++;
  if (t % 100 === 0) {
    let m = randomMath(mxRange);
    let box = new Box(random(0, width - 100), 0, 100, 50, m.text);
    arrBox.push(box);
    resBox.push(m.res);
    t = 1;
  }
}
