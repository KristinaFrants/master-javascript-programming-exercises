const rewire = require('rewire');
const fs = require('fs');

let _buffer = "";
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

test("Function isPersonOldEnoughToVote should exist", function(){
  const file = rewire("./app.js");
  const isPersonOldEnoughToVote  = file.__get__('isPersonOldEnoughToVote');
  expect(isPersonOldEnoughToVote).toBeTruthy();
});

describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });


    it('console.log() function isPersonOldEnoughToVote should return a value of true if person is old enough to vote', function () {
        const file = require("./app.js");
    expect(console.log).toBeCalledWith(true);
        //and I expect the console.log to be already called just one time.
        expect(console.log.mock.calls.length).toBe(1);
    });
});

