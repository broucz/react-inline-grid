"use strict";

exports.__esModule = true;
exports["default"] = invariant;

function invariant(condition, error) {
  if (!condition) throw new Error(error);
}

module.exports = exports["default"];