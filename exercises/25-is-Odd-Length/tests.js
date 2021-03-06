const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function isOddLength should exist", function(){
  const file = rewire("./app.js");
  const isOddLength  = file.__get__('isOddLength');
  expect(isOddLength).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });

    it('console.log() function isOddLength should return a value of true if the length of the word is Odd.', function () {
        const file = require("./app.js");
        expect(console.log).toHaveBeenCalledWith(true);
        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(1);
    });
});
 