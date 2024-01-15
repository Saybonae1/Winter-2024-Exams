// Count types in an array

// remove

'use strict';

	@@ -13,9 +13,7 @@ const types_ = function (s) {
    const t = typeof i;
    types_[t]++;
  }
  return types_;
};

module.exports = types_;
