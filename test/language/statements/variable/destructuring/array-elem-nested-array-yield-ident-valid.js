// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    When a `yield` token appears within the DestructuringAssignmentTarget of a
    nested destructuring assignment outside of strict mode, it behaves as an
    IdentifierReference.
es6id: 13.2.3.6
flags: [noStrict]
---*/

var value = [[22]];
var yield = 'prop';
var x = {};
var result;

var [[x[yield]]] = value;

assert.sameValue(result, value);
assert.sameValue(x.prop, 22);
