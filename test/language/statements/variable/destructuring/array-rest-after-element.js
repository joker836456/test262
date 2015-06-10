// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    An AssignmentRestElement following an BindingElement consumes all
    remaining iterable values.
es6id: 13.2.3.6
---*/

var x, y;

[x, ...y] = [1, 2, 3];

assert.sameValue(x, 1);
assert.sameValue(y.length, 2);
assert.sameValue(y[0], 2);
assert.sameValue(y[1], 3);
