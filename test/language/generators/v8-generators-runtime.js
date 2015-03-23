// Copyright (C) Copyright 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 
description: >
includes: [compareArray.js]
---*/
function f() { }
function* g() { yield 1; }
var GeneratorFunctionPrototype = Object.getPrototypeOf(g);
var GeneratorFunction = GeneratorFunctionPrototype.constructor;
var GeneratorObjectPrototype = GeneratorFunctionPrototype.prototype;

// Generators have an additional object interposed in the chain between
// themselves and Function.prototype.
function TestGeneratorFunctionPrototype() {
  assert.sameValue(Object.getPrototypeOf(function* () {}),
             GeneratorFunctionPrototype);
}
TestGeneratorFunctionPrototype();


// Functions that we associate with generator objects are actually defined by
// a common prototype.
function TestGeneratorObjectPrototype() {
  assert.sameValue(Object.getPrototypeOf(GeneratorObjectPrototype),
             Object.prototype);
  assert.sameValue(Object.getPrototypeOf((function*(){yield 1}).prototype),
             GeneratorObjectPrototype);

  var expected_property_names = ["next", "throw", "constructor"];
  var found_property_names =
      Object.getOwnPropertyNames(GeneratorObjectPrototype);

  expected_property_names.sort();
  found_property_names.sort();

  assert(compareArray(expected_property_names, found_property_names));

  iterator_desc = Object.getOwnPropertyDescriptor(GeneratorObjectPrototype,
      Symbol.iterator);
  assert.sameValue(iterator_desc !== undefined, true);
  assert.sameValue(iterator_desc.writable, false);
  assert.sameValue(iterator_desc.enumerable, false);
  assert.sameValue(iterator_desc.configurable, false);

  // The generator object's "iterator" function is just the identity.
  assert.sameValue(42, iterator_desc.value.call(42));
}
TestGeneratorObjectPrototype();


// This tests the object that would be called "GeneratorFunction", if it were
// like "Function".
function TestGeneratorFunction() {
  assert.sameValue(GeneratorFunction.prototype, GeneratorFunctionPrototype);
  assert.sameValue(g instanceof GeneratorFunction, true);

  assert.sameValue(Object.getPrototypeOf(GeneratorFunction), Function);
  assert.sameValue(g instanceof Function, true);

  assert.sameValue(g.toString(), "function* g() { yield 1; }");

  // Not all functions are generators.
  assert.sameValue(f instanceof Function, true);  // Sanity check.
  assert.sameValue(!(f instanceof GeneratorFunction), true);

  assert.sameValue((new GeneratorFunction()) instanceof GeneratorFunction, true);
  assert.sameValue(GeneratorFunction() instanceof GeneratorFunction, true);
}
TestGeneratorFunction();


function TestPerGeneratorPrototype() {
  assert.sameValue((function*(){}).prototype !== (function*(){}).prototype, true);
  assert.sameValue((function*(){}).prototype !== g.prototype, true);
  assert.sameValue(g.prototype instanceof GeneratorFunctionPrototype, true);
  assert.sameValue(Object.getPrototypeOf(g.prototype), GeneratorObjectPrototype);
  assert.sameValue(!(g.prototype instanceof Function), true);
  assert.sameValue("object", typeof (g.prototype));

  assert(compareArray([], Object.getOwnPropertyNames(g.prototype)));
}
TestPerGeneratorPrototype();
