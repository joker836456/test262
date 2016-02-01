// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Statement within statement is not a candidate for tail-call optimization.
id: static-semantics-hasproductionintailposition
flags: [onlyStrict]
features: [tail-call-optimization]
includes: [tco-helper.js]
---*/

var exception;
try {
  (function f(n) {
    if (n === 0) {
      return;
    }
    function x() { return f(n - 1); } x();
  }($MAX_ITERATIONS));
} catch (e) {
  exception = e;
}
assert(exception);
