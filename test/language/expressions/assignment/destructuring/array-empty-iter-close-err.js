// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Abrupt completion returned from IteratorClose
info: |
    ArrayAssignmentPattern : [ ]

    1. Let iterator be GetIterator(value).
    2. ReturnIfAbrupt(iterator).
    3. Return IteratorClose(iterator, NormalCompletion(empty)).
features: [Symbol.iterator]
es6id: 12.14.5.2
esid: sec-runtime-semantics-destructuringassignmentevaluation
---*/

var nextCount = 0;
var iterable = {};
var iterator = {
  next: function() {
    nextCount += 1;
    return { done: true };
  },
  return: function() {
    throw new Test262Error();
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};

assert.throws(Test262Error, function() {
  [] = iterable;
});

assert.sameValue(nextCount, 0);
