// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getuint16
es6id: 24.2.4.11
description: >
  Throws a RangeError if numberIndex ≠ getIndex
info: |
  24.2.4.11 DataView.prototype.getUint16 ( byteOffset [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be false.
  3. Return ? GetViewValue(v, byteOffset, littleEndian, "Uint16").

  24.2.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

  ...
  4. Let numberIndex be ? ToNumber(requestIndex).
  5. Let getIndex be ToInteger(numberIndex).
  6. If numberIndex ≠ getIndex or getIndex < 0, throw a RangeError exception.
  ...
---*/

var buffer = new ArrayBuffer(12);
var sample = new DataView(buffer, 0);

assert.throws(RangeError, function() {
  sample.getUint16();
}, "no args");

assert.throws(RangeError, function() {
  sample.getUint16(undefined);
}, "undefined");

assert.throws(RangeError, function() {
  sample.getUint16(1.1);
}, "floating number");

assert.throws(RangeError, function() {
  sample.getUint16(0.1);
}, "0.1");

assert.throws(RangeError, function() {
  sample.getUint16(NaN);
}, "NaN");

assert.throws(RangeError, function() {
  sample.getUint16(-0.1);
}, "-0.1");

assert.throws(RangeError, function() {
  sample.getUint16(-1.1);
}, "-1.1");
