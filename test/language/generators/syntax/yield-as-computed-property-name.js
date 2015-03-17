// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      `yield` may be used as a computed property name in an object literal
      within generator function bodies.
  es6id: 12.1.1
 ---*/

function* g() {
  ({ get yield() { return 1 } });
}
