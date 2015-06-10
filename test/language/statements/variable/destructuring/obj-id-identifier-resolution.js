// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Evaluation of DestructuringAssignmentTarget.
es6id: 12.14.5.4
---*/

var result, value, w, x, y;

x = null;
value = { x: 1 };
var { x } = value;

assert.sameValue(result, value);
assert.sameValue(x, 1);

x = null;
value = { x: 2 };
var { x, } = value;

assert.sameValue(result, value);
assert.sameValue(x, 2);

x = null;
value = { x: 3 };
var { x, y } = value;

assert.sameValue(result, value);
assert.sameValue(x, 3);

x = null;
value = { x: 4 };
var { w, x } = value;

assert.sameValue(result, value);
assert.sameValue(x, 4);

x = null;
value = { x: 5 };
var { w, x, y } = value;

assert.sameValue(result, value);
assert.sameValue(x, 5);
