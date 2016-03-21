// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 19.2.3.5
description: Function.prototype.toString on a method (object)
---*/

let f = { /* before */f /* a */ ( /* b */ ) /* c */ { /* d */ }/* after */ }.f;
let g = { /* before */[ /* a */ "g" /* b */ ] /* c */ ( /* d */ ) /* e */ { /* f */ }/* after */ }.g;

assert.sameValue(f.toString(), "f /* a */ ( /* b */ ) /* c */ { /* d */ }");
assert.sameValue(g.toString(), "[ /* a */ \"g\" /* b */ ] /* c */ ( /* d */ ) /* e */ { /* f */ }");
