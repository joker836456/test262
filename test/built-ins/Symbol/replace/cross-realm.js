// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-symbol.replace
es6id: 19.4.2.8
description: Value shared by all realms
info: >
  Unless otherwise specified, well-known symbols values are shared by all
  realms.
features: [Symbol.replace]
includes: [realm.js]
---*/

var OSymbol = $.createRealm().global.Symbol;

assert.sameValue(Symbol.replace, OSymbol.replace);
