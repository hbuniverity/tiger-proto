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
     * ServiceRouteKey enum.
     * @name protob.ServiceRouteKey
     * @enum {number}
     * @property {number} INVALID_PROTO=0 INVALID_PROTO value
     * @property {number} ConnEnter=1 ConnEnter value
     * @property {number} Spin=2 Spin value
     */
    protob.ServiceRouteKey = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INVALID_PROTO"] = 0;
        values[valuesById[1] = "ConnEnter"] = 1;
        values[valuesById[2] = "Spin"] = 2;
        return values;
    })();

    return protob;
})();

module.exports = $root;
