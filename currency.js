function but1() {
    document.getElementById("get").value += 1;
    calculator();
  }
  function but2() {
    document.getElementById("get").value += 2;
    calculator();
  }
  function but3() {
    document.getElementById("get").value += 3;
    calculator()
  }
  function but4() {
    document.getElementById("get").value += 4;
    calculator()
  }

  function but5() {
    document.getElementById("get").value += 5;
    calculator()
  }
  function but6() {
    document.getElementById("get").value += 6;
    calculator()
  }
  function but7() {
    document.getElementById("get").value += 7;
    calculator()
  }

  function but8() {
    document.getElementById("get").value += 8;
    calculator()
  }
  function but9() {
    document.getElementById("get").value += 9;
    calculator()
  }
  function but0() {
    document.getElementById("get").value += 0;
    calculator()
  }
  function but11() {
    document.getElementById("get").value += ".";
  }
  function reset() {
    document.getElementById("get").value = null;
    document.getElementById("get2").value = null;
  }
  function backspace() {
    var input = document.getElementById("get");
    input.value = input.value.slice(0, -1);
  }
  function calculator() {
    var currency = parseFloat(document.getElementById("list1").value);
    var currency2 = parseFloat(document.getElementById("list2").value);
    var put = parseFloat(document.getElementById("get").value);
    var result = 1 / currency * put / (1 / currency2);

    document.getElementById("get2").value = result.toFixed(2);
  }