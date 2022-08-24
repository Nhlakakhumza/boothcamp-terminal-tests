import assert from 'assert';
import greet from '../greet.js';




// console.log(greet("Ceejay"));
describe("Test my greet function" , function(){
    it("It should return ,'Hello,Ceejay'when called with 'Ceeejay'" , function(){
        
        assert.equal("Hello, Ceejay",greet("Ceejay"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return ,'Hello,Nala'when called with 'Nala'" , function(){
        
        assert.equal("Hello, Nala",greet("Nala"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });1

});
// console.log(greet('Ceejay'))
// var functionToTest = require('../greet.js);