// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 25.3.1.4
description: >
    Resuming abuptly from a generator in the 'completed' state should honor the
    abrupt completion and remain in the 'completed' state.
---*/

function E() {}
function* G() {}
var iter;

iter = G();
iter.next();

assert.throws(E, function() { iter.throw(new E()); });

result = iter.next();

assert.sameValue(result.value, undefined, 'Result `value`');
assert.sameValue(result.done, true, 'Result `done` flag');
