const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function removeProperty should exist", function(){
  const file = rewire("./app.js");
  const removeProperty  = file.__get__('removeProperty');
  expect(removeProperty).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function removeProperty should remove the property from object and return undefined', 
    function () {
        const file = require("./app.js");

expect(console.log).toHaveBeenCalledWith(undefined);
expect(console.log.mock.calls.length).toBe(1);
    // expect(_buffer).toEqual(mytest);
    });
});