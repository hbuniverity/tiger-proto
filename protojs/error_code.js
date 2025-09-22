/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protob = (function() {

    /**
     * Namespace protob.
     * @exports protob
     * @namespace
     */
    var protob = {};

    /**
     * ErrorCode enum.
     * @name protob.ErrorCode
     * @enum {number}
     * @property {number} ErrorCode_None=0 ErrorCode_None value
     * @property {number} ErrorCode_Successful=200 ErrorCode_Successful value
     * @property {number} ErrorCode_NotPlayer=1 ErrorCode_NotPlayer value
     * @property {number} ErrorCode_LoginFailed=2 ErrorCode_LoginFailed value
     * @property {number} ErrorCode_PlayerNotInGame=3 ErrorCode_PlayerNotInGame value
     * @property {number} ErrorCode_NoSpinCount=4 ErrorCode_NoSpinCount value
     */
    protob.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ErrorCode_None"] = 0;
        values[valuesById[200] = "ErrorCode_Successful"] = 200;
        values[valuesById[1] = "ErrorCode_NotPlayer"] = 1;
        values[valuesById[2] = "ErrorCode_LoginFailed"] = 2;
        values[valuesById[3] = "ErrorCode_PlayerNotInGame"] = 3;
        values[valuesById[4] = "ErrorCode_NoSpinCount"] = 4;
        return values;
    })();

    return protob;
})();

module.exports = $root;
