var minhaVar = 'minha variavel';
function minhaFuncao(x, y) {
    return x + y;
}
// ES 6 ou ES 2015
var num = 2;
var PI = 3.14;
// Arrow Functions 
var numeros = [1, 2, 3, 4, 5, 6];
numeros.map(function (valor) {
    return valor * 2;
});
// isto é um exemplo de Arrow Funciton
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'string';
n1 = 4;
