// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-regular-expressions-patterns
es6id: B1.4
description: Support for UnicodeIDContinue in IdentityEscape
info: |
    IdentityEscape[U] ::
        [+U]SyntaxCharacter
        [+U]/
        [~U]SourceCharacter but not UnicodeIDContinue

    The `u` flag precludes the use of characters in  UnicodeIDContinue
    irrespective of the presence of Annex B extensions.
negative: SyntaxError
---*/

/\M/u;
