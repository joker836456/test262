// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluation
es6id: 14.4.14
description: Value received from invocation of generator's `return` method
info: |
  YieldExpression : yield * AssignmentExpression 

  1. Let exprRef be the result of evaluating AssignmentExpression.
  2. Let value be ? GetValue(exprRef).
  3. Let iterator be ? GetIterator(value).
  4. Let received be NormalCompletion(undefined).
  5. Repeat
     a. If received.[[Type]] is normal, then
        [...]
     b. Else if received.[[Type]] is throw, then
        [...]
     c. Else,
        i. Assert: received.[[Type]] is return.
        ii. Let return be ? GetMethod(iterator, "return").
        iii. If return is undefined, return Completion(received).
        iv. Let innerReturnResult be ? Call(return, iterator, «
            received.[[Value]] »).
        v. If Type(innerReturnResult) is not Object, throw a TypeError
           exception.
        vi. Let done be ? IteratorComplete(innerReturnResult).
        vii. If done is true, then
             1. Let value be ? IteratorValue(innerReturnResult).
             2. Return Completion{[[Type]]: return, [[Value]]: value,
                [[Target]]: empty}.
        viii. Let received be GeneratorYield(innerReturnResult).

features: [Symbol.iterator]
---*/

var quickIter = {};
var iter, exprValue, returnReceived;
quickIter[Symbol.iterator] = function() {
  return {
    next: function() {
      return { done: false };
    },
    return: function(x) {
      returnReceived = x;
      return { done: true, value: 3333 };
    }
  };
};
function* g() {
  exprValue = yield * quickIter;
}

iter = g();

iter.next();
iter.return(2222);
assert.sameValue(returnReceived, 2222);
assert.sameValue(exprValue, 3333);
