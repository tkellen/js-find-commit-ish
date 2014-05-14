const findCommitIsh = require('../');
const expect = require('chai').expect;

describe('getCommitIsh', function () {

  it('should find the commit-ish in a git url', function () {
    expect(findCommitIsh('git://github.com/tkellen/find-commmit-ish.git')).to.equal('master');
    expect(findCommitIsh('git+ssh://git@github:find-commmit-ish.git#branch')).to.equal('branch');
    expect(findCommitIsh('git+ssh://git@github/find-commmit-ish.git#tag')).to.equal('tag');
    expect(findCommitIsh('git+http://git@github/tkellen/find-commit-ish.git#d96998c')).to.equal('d96998c');
    expect(findCommitIsh('git+https://git@github/tkellen/find-commit-ish.git#d96998c')).to.equal('d96998c');
  });

});
