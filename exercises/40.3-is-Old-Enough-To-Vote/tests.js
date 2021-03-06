const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function isOldEnoughToVote should exist", function(){
  const file = rewire("./app.js");
  const isOldEnoughToVote  = file.__get__('isOldEnoughToVote');
  expect(isOldEnoughToVote).toBeTruthy();
});



describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function isOldEnoughToVote should returnvalue of true ', function () {
        const file = require("./app.js");
        
expect(console.log).toHaveBeenCalledWith(true);
expect(console.log.mock.calls.length).toBe(1);
    // expect(_buffer).toEqual(mytest);
    });
});
