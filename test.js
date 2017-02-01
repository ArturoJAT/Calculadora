var lastNum = '0';
var lastOp = '';
var flagOp = 0;

function operacion(operador) {
    if (lastOp=='') {
        flagOp = 1;
        lastOp = operador;
        lastNum = document.getElementById("num").innerHTML;
    } else {
        resolver(lastOp);
        lastOp = operador;
        lastNum = document.getElementById("num").innerHTML;
        flagOp=1;
    }
}

function resolver(operador) {
    var res = 0;
    var num1 = parseFloat(lastNum);
    console.log(num1);
    var num2 = parseFloat(document.getElementById("num").innerHTML);
    console.log(num2);
    if (lastOp == '+') {
        res = num1 + num2;

        document.getElementById("num").innerHTML = res;

    } else if (lastOp == '-') {

        document.getElementById("num").innerHTML = num1 - num2;

    } else if (lastOp == '*') {

        document.getElementById("num").innerHTML = num1 * num2;

    } else if (lastOp == '/') {

        document.getElementById("num").innerHTML = num1 / num2;

    }
    if (operador == '=') {
        lastOp = '';
        flagOp = 1;
        lastNum='0';
    }
}

function addnum(id) {
    if (flagOp == 1) {
        document.getElementById("num").innerHTML = 0;
        flagOp = 0;
    }
    var valor = document.getElementById("num").innerHTML;
    if (valor == 0) {
        valor = "";
    }
    if (!(valor.indexOf('.') > -1 && id == '.')) {
        if (valor.length < 23) {

            valor = valor + id;
            document.getElementById("num").innerHTML = valor;
        }
    }
}