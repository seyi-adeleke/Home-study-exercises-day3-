const test = require("../reverse");

describe("Produce the reverse order of a word: ", function() {
    describe("Case for en empty string", function() {

        it("should return null for empty string", function() {
            expect(test.reverseString('')).toEqual(null);
        });

    });
    describe("Case for a wrong input", function() {

        it("should return null for a number", function() {
            expect(test.reverseString(4)).toEqual(null);
        });
        it("should return null for an object", function() {
            expect(test.reverseString({})).toEqual(null);
        });
        it("should return null for an array", function() {
            expect(test.reverseString(["hello"])).toEqual(null);
        });


    });


    describe("Case for palindromes", function() {

        it("should return true for `anna`", function() {
            expect(test.reverseString('anna')).toEqual(true);
        });

        it("should return true for `NaN`", function() {
            expect(test.reverseString('NaN')).toEqual(true);
        });

        it("should return true for `civic`", function() {
            expect(test.reverseString('civic')).toEqual(true);
        });

    });

    describe("Case for normal words", function() {

        it("should return `skoob` for `books`", function() {
            expect(test.reverseString('books')).toEqual('skoob');
        });

        it("should return `nomolos` for `solomon`", function() {
            expect(test.reverseString('solomon')).toEqual('nomolos');
        });

        it("should return `csim` for `misc`", function() {
            expect(test.reverseString('misc')).toEqual('csim');
        });

    });

});