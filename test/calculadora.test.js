const assert = require("assert");
const Calculadora = require('../calculadora.js');

describe("Calculadora", function() {
    let calc;

    beforeEach(function () {
        calc= new Calculadora();
    })

    it("Deve somar dois números corretamente", function(){
        const resultado = calc.somar(5, 3);
        assert.strictEqual(resultado, 8);
    })

    it("Deve subtrair dois número corretamente", function() {
        const resultado = calc.subtrair(8,5);
        assert.strictEqual(resultado, 3);
    })

    it("Deve multiplicar dois número corretamente", function(){
        const resultado = calc.multiplicar(10,10);
        assert.strictEqual(resultado, 100);
    })

    it("Deve dividir dois número corretamente", function() {
        const resultado = calc.dividir(27, 3);
        assert.strictEqual(resultado, 9);
    })

    it("Deve lançar um erro ao tentar dividir por zero", function(){
        assert.throws(() => calc.dividir(10, 0), /Divisão por zero não é permitido/);
    })
})