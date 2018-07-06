const expect = require('chai').expect;
const MergeSort = require('../src/MergeSort');

describe('Merge Sort', () => {
    it('Exists', () => {
        expect(MergeSort).to.be.ok;
    });

    it('Handles an empty array', () => {
        expect(MergeSort([],() => {})).to.eql([]);
    });

    it('sorts array in ascending order', () => {
        expect(MergeSort([2,60,49,-1,0], (first, second) => { return first < second;})).to.eql([-1,0,2,49,60]);
    });

    it('sorts array in descending order', () => {
        expect(MergeSort([2,60,49,-1,0], (first, second) => { return first > second;})).to.eql([60,49,2,0,-1]);
    });

});