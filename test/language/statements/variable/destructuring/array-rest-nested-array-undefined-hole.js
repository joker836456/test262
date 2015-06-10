// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    When DestructuringAssignmentTarget is an array literal and the iterable is
    an array with a "hole", an array with a single `undefined` element should
    be used as the value of the nested DestructuringAssignment.
es6id: 13.2.3.6
---*/

var value = [ , ];
var result, x;

var [...[x]] = value;

assert.sameValue(result, value);
assert.sameValue(x, undefined);
