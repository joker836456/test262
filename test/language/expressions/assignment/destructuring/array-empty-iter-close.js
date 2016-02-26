// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Iterator is closed without iterating
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
var returnCount = 0;
var iterable = {};
var iterator = {
  next: function() {
    nextCount += 1;
    return { done: true };
  },
  return: function() {
    returnCount += 1;
    return {};
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};

[] = iterable;

assert.sameValue(nextCount, 0);
assert.sameValue(returnCount, 1);
