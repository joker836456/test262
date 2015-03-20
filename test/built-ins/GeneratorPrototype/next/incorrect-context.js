// Copyright (C) Copyright 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 25.3.1.2
description: >
    A TypeError should be thrown from GeneratorValidate (25.3.3.2) if the
    context of `next` does not defined the [[GeneratorState]] internal slot.
---*/

function* g() {}
var iter = g();

assert.throws(TypeError, function() { iter.next.call(1); });
assert.throws(TypeError, function() { iter.next.call(1, 1); });
assert.throws(TypeError, function() { iter.next.call({}); });
assert.throws(TypeError, function() { iter.next.call({}, 1); });
assert.throws(TypeError, function() { iter.next.call(function() {}); });
assert.throws(TypeError, function() { iter.next.call(function() {}, 1); });
assert.throws(TypeError, function() { iter.next.call(g); });
assert.throws(TypeError, function() { iter.next.call(g, 1); });
assert.throws(TypeError, function() { iter.next.call(g.prototype); });
assert.throws(TypeError, function() { iter.next.call(g.prototype, 1); });
