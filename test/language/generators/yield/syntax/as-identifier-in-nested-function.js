// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      `yield` is not a reserved keyword within normal function bodies declared
      within generator function bodies.
  es6id: 12.1.1
  flags: [noStrict]
 ---*/

function* g() {
  function h() {
    yield = 1;
  }
}
