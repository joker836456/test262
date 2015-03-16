// Flags: --allow-natives-syntax --harmony-tostring

// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 
description: >
includes: [compareArray.js]
---*/


(function TestMapIterator() {
  var m = new Map;
  var iter = m.values();
  //assertEquals('Map Iterator', %_ClassOf(iter));

  var MapIteratorPrototype = Object.getPrototypeOf(iter);
  assert.sameValue(MapIteratorPrototype.hasOwnProperty('constructor'), false);
  assert.sameValue(Object.getPrototypeOf(MapIteratorPrototype), Object.prototype);

  var propertyNames = Object.getOwnPropertyNames(MapIteratorPrototype);
  assert(compareArray(['next'], propertyNames));

  assert.sameValue(Object.getPrototypeOf(new Map().values()), MapIteratorPrototype);
  assert.sameValue(Object.getPrototypeOf(new Map().keys()), MapIteratorPrototype);
  assert.sameValue(Object.getPrototypeOf(new Map().entries()), MapIteratorPrototype);

  assert.sameValue(Object.prototype.toString.call(iter),
      "[object Map Iterator]");
  assert.sameValue(MapIteratorPrototype[Symbol.toStringTag], "Map Iterator");
  var desc = Object.getOwnPropertyDescriptor(
      MapIteratorPrototype, Symbol.toStringTag);
  assert.sameValue(desc.configurable, true);
  assert.sameValue(desc.writable, false);
  assert.sameValue(desc.value, "Map Iterator");
})();


(function TestMapIteratorValues() {
  var m = new Map;
  m.set(1, 11);
  m.set(2, 22);
  m.set(3, 33);
  var iter = m.values();
  var result;

  result = iter.next();
  assert.sameValue(result.value, 11);
  assert.sameValue(result.done, false);

  result = iter.next();
  assert.sameValue(result.value, 22);
  assert.sameValue(result.done, false);

  result = iter.next();
  assert.sameValue(result.value, 33);
  assert.sameValue(result.done, false);

  result = iter.next();
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, true);

  result = iter.next();
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, true);
})();


(function TestMapIteratorKeys() {
  var m = new Map;
  m.set(1, 11);
  m.set(2, 22);
  m.set(3, 33);
  var iter = m.keys();
  var result;

  result = iter.next();
  assert.sameValue(result.value, 1);
  assert.sameValue(result.done, false);

  result = iter.next();
  assert.sameValue(result.value, 2);
  assert.sameValue(result.done, false);

  result = iter.next();
  assert.sameValue(result.value, 3);
  assert.sameValue(result.done, false);

  result = iter.next();
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, true);

  result = iter.next();
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, true);
})();


(function TestMapIteratorEntries() {
  var m = new Map;
  m.set(1, 11);
  m.set(2, 22);
  m.set(3, 33);
  var iter = m.entries();
  var result;

  result = iter.next();
  assert.sameValue(result.value[0], 1);
  assert.sameValue(result.value[1], 11);
  assert.sameValue(result.value.length, 2);
  assert.sameValue(result.done, false);

  result = iter.next();
  assert.sameValue(result.value[0], 2);
  assert.sameValue(result.value[1], 22);
  assert.sameValue(result.value.length, 2);
  assert.sameValue(result.done, false);

  result = iter.next();
  assert.sameValue(result.value[0], 3);
  assert.sameValue(result.value[1], 33);
  assert.sameValue(result.value.length, 2);
  assert.sameValue(result.done, false);

  result = iter.next();
  assert.sameValue(result.undefined);
  assert.sameValue(result.done, true);

  result = iter.next();
  assert.sameValue(result.undefined);
  assert.sameValue(result.done, true);
})();


(function TestMapInvalidReceiver() {
  assert.throws(TypeError, function() {
    Map.prototype.values.call({});
  });
  assert.throws(TypeError, function() {
    Map.prototype.keys.call({});
  });
  assert.throws(TypeError, function() {
    Map.prototype.entries.call({});
  });
})();


(function TestMapIteratorInvalidReceiver() {
  var iter = new Map().values();
  assert.throws(TypeError, function() {
    iter.next.call({});
  });
})();


(function TestMapIteratorSymbol() {
  assert.sameValue(Map.prototype[Symbol.iterator], Map.prototype.entries);
  assert.sameValue(Map.prototype.hasOwnProperty(Symbol.iterator), true);
  assert.sameValue(Map.prototype.propertyIsEnumerable(Symbol.iterator), false);

  var iter = new Map().values();
  assert.sameValue(iter, iter[Symbol.iterator]());
  assert.sameValue(iter[Symbol.iterator].name, '[Symbol.iterator]');
})();
