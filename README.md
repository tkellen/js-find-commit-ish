# find-commit-ish [![Build Status](https://secure.travis-ci.org/tkellen/node-find-commit-ish.png?branch=master)](http://travis-ci.org/tkellen/node-find-commit-ish)
> Find the commit-ish reference in a git url.

[![NPM](https://nodei.co/npm/find-commit-ish.png)](https://nodei.co/npm/find-commit-ish/)

## Example
```js
const findCommitIsh = require('find-commit-ish');

findCommitIsh('git://github.com/tkellen/find-commmit-ish.git'); // master
findCommitIsh('git+ssh://git@github:find-commmit-ish.git#branch'); // branch
findCommitIsh('git+ssh://git@github/find-commmit-ish.git#tag'); // tag
findCommitIsh('git+http://git@github/tkellen/find-commit-ish.git#d716b2a'); // d716b2a
findCommitIsh('git+https://git@github/tkellen/find-commit-ish.git#d716b2a'); // d716b2a
```

## Release History

* 2014-05-14 - v0.1.0 - initial release
