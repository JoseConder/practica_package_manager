const sumar = require('../index');
const assert = require('assert');

describe("Probar la suma ", ()=>{
    it("cinco mas cinco es 10", ()=> {
        assert.equal(10,sumar(5,5));
    });
    it("cinco mas cinco no es 55", ()=> {
        assert.notEqual(55, sumar(5,5));
    })
} );