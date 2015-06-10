// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    In strict mode, if the the assignment target is an unresolvable reference,
    a ReferenceError should be thrown.
es6id: 13.2.3.6
flags: [onlyStrict]
---*/

assert.throws(ReferenceError, function() {
  [ unresolvable ] = [];
});
