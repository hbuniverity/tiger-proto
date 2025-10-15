/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = window.protobuf

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

    protob.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof protob
         * @interface ILoginReq
         * @property {string|null} [deviceId] LoginReq deviceId
         * @property {number|null} [gameId] LoginReq gameId
         */

        /**
         * Constructs a new LoginReq.
         * @memberof protob
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {protob.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq deviceId.
         * @member {string} deviceId
         * @memberof protob.LoginReq
         * @instance
         */
        LoginReq.prototype.deviceId = "";

        /**
         * LoginReq gameId.
         * @member {number} gameId
         * @memberof protob.LoginReq
         * @instance
         */
        LoginReq.prototype.gameId = 0;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof protob.LoginReq
         * @static
         * @param {protob.ILoginReq=} [properties] Properties to set
         * @returns {protob.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link protob.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof protob.LoginReq
         * @static
         * @param {protob.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link protob.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.LoginReq
         * @static
         * @param {protob.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof protob.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.deviceId = reader.string();
                        break;
                    }
                case 2: {
                        message.gameId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof protob.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.LoginReq)
                return object;
            var message = new $root.protob.LoginReq();
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.LoginReq
         * @static
         * @param {protob.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.deviceId = "";
                object.gameId = 0;
            }
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof protob.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginReq
         * @function getTypeUrl
         * @memberof protob.LoginReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.LoginReq";
        };

        return LoginReq;
    })();

    protob.SpinReq = (function() {

        /**
         * Properties of a SpinReq.
         * @memberof protob
         * @interface ISpinReq
         * @property {number|null} [gameId] SpinReq gameId
         */

        /**
         * Constructs a new SpinReq.
         * @memberof protob
         * @classdesc Represents a SpinReq.
         * @implements ISpinReq
         * @constructor
         * @param {protob.ISpinReq=} [properties] Properties to set
         */
        function SpinReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpinReq gameId.
         * @member {number} gameId
         * @memberof protob.SpinReq
         * @instance
         */
        SpinReq.prototype.gameId = 0;

        /**
         * Creates a new SpinReq instance using the specified properties.
         * @function create
         * @memberof protob.SpinReq
         * @static
         * @param {protob.ISpinReq=} [properties] Properties to set
         * @returns {protob.SpinReq} SpinReq instance
         */
        SpinReq.create = function create(properties) {
            return new SpinReq(properties);
        };

        /**
         * Encodes the specified SpinReq message. Does not implicitly {@link protob.SpinReq.verify|verify} messages.
         * @function encode
         * @memberof protob.SpinReq
         * @static
         * @param {protob.ISpinReq} message SpinReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpinReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified SpinReq message, length delimited. Does not implicitly {@link protob.SpinReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.SpinReq
         * @static
         * @param {protob.ISpinReq} message SpinReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpinReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpinReq message from the specified reader or buffer.
         * @function decode
         * @memberof protob.SpinReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.SpinReq} SpinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpinReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.SpinReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.gameId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SpinReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.SpinReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.SpinReq} SpinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpinReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpinReq message.
         * @function verify
         * @memberof protob.SpinReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpinReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            return null;
        };

        /**
         * Creates a SpinReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.SpinReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.SpinReq} SpinReq
         */
        SpinReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.SpinReq)
                return object;
            var message = new $root.protob.SpinReq();
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SpinReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.SpinReq
         * @static
         * @param {protob.SpinReq} message SpinReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpinReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.gameId = 0;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        /**
         * Converts this SpinReq to JSON.
         * @function toJSON
         * @memberof protob.SpinReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpinReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SpinReq
         * @function getTypeUrl
         * @memberof protob.SpinReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SpinReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.SpinReq";
        };

        return SpinReq;
    })();

    return protob;
})();

module.exports = $root;
