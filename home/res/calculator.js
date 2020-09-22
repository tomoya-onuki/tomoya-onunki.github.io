var ans_text = document.getElementById('ans');

function calculator(equation) {
  equation = equation.replace(/\s/g, "");
  chars = equation.split("");

  var ans = 0;
  var flag = false;
  var values = [];

  // 文字列を整数・小数・数学記号に分解する
  for (var i = 0, j = 0; i < chars.length; i++) {
    if(chars[i].match(/[\d\.]/)) {
      if(values[j] === void 0) {
        values[j] = chars[i];
      } else {
        values[j] += chars[i];
      }
    } else if(chars[i].match(/[\+\-\*\/\(\)]/)) {
      values[j+1] = chars[i];
      j+=2;
    }
  }

  ans = parseFloat(values[0]);

  // foq

  // 計算する
  for (var i = 0; i < values.length; i++) {
    if(values[i].match(/[\+\-\*\/]/)) {
      switch (values[i]) {
        case '+':
          ans += parseFloat(values[i+1]);
          break;
        case '-':
          ans -= parseFloat(values[i+1]);
          break;
        case '*':
          ans *= parseFloat(values[i+1]);
          break;
        case '/':
          ans /= parseFloat(values[i+1]);
          break;
        default:
      }
      i++;
    } else {

    }
  }

  ans_text.value = ans;
  console.log("end : "+values+" / "+ans);
}

var calculate = document.getElementById('calculate');
calculate.addEventListener('click',function(){
  var equation = document.getElementById('equation').value;
  calculator(equation);
});
