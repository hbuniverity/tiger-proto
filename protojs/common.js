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

    protob.BaseCommon = (function() {

        /**
         * Properties of a BaseCommon.
         * @memberof protob
         * @interface IBaseCommon
         * @property {number|null} [code] BaseCommon code
         * @property {string|null} [msg] BaseCommon msg
         */

        /**
         * Constructs a new BaseCommon.
         * @memberof protob
         * @classdesc Represents a BaseCommon.
         * @implements IBaseCommon
         * @constructor
         * @param {protob.IBaseCommon=} [properties] Properties to set
         */
        function BaseCommon(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaseCommon code.
         * @member {number} code
         * @memberof protob.BaseCommon
         * @instance
         */
        BaseCommon.prototype.code = 0;

        /**
         * BaseCommon msg.
         * @member {string} msg
         * @memberof protob.BaseCommon
         * @instance
         */
        BaseCommon.prototype.msg = "";

        /**
         * Creates a new BaseCommon instance using the specified properties.
         * @function create
         * @memberof protob.BaseCommon
         * @static
         * @param {protob.IBaseCommon=} [properties] Properties to set
         * @returns {protob.BaseCommon} BaseCommon instance
         */
        BaseCommon.create = function create(properties) {
            return new BaseCommon(properties);
        };

        /**
         * Encodes the specified BaseCommon message. Does not implicitly {@link protob.BaseCommon.verify|verify} messages.
         * @function encode
         * @memberof protob.BaseCommon
         * @static
         * @param {protob.IBaseCommon} message BaseCommon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseCommon.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified BaseCommon message, length delimited. Does not implicitly {@link protob.BaseCommon.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.BaseCommon
         * @static
         * @param {protob.IBaseCommon} message BaseCommon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseCommon.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseCommon message from the specified reader or buffer.
         * @function decode
         * @memberof protob.BaseCommon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.BaseCommon} BaseCommon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseCommon.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.BaseCommon();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
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
         * Decodes a BaseCommon message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.BaseCommon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.BaseCommon} BaseCommon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseCommon.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseCommon message.
         * @function verify
         * @memberof protob.BaseCommon
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseCommon.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a BaseCommon message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.BaseCommon
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.BaseCommon} BaseCommon
         */
        BaseCommon.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.BaseCommon)
                return object;
            var message = new $root.protob.BaseCommon();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a BaseCommon message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.BaseCommon
         * @static
         * @param {protob.BaseCommon} message BaseCommon
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseCommon.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this BaseCommon to JSON.
         * @function toJSON
         * @memberof protob.BaseCommon
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseCommon.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BaseCommon
         * @function getTypeUrl
         * @memberof protob.BaseCommon
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BaseCommon.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.BaseCommon";
        };

        return BaseCommon;
    })();

    protob.GameNoted = (function() {

        /**
         * Properties of a GameNoted.
         * @memberof protob
         * @interface IGameNoted
         * @property {number|null} [gameId] GameNoted gameId
         */

        /**
         * Constructs a new GameNoted.
         * @memberof protob
         * @classdesc Represents a GameNoted.
         * @implements IGameNoted
         * @constructor
         * @param {protob.IGameNoted=} [properties] Properties to set
         */
        function GameNoted(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameNoted gameId.
         * @member {number} gameId
         * @memberof protob.GameNoted
         * @instance
         */
        GameNoted.prototype.gameId = 0;

        /**
         * Creates a new GameNoted instance using the specified properties.
         * @function create
         * @memberof protob.GameNoted
         * @static
         * @param {protob.IGameNoted=} [properties] Properties to set
         * @returns {protob.GameNoted} GameNoted instance
         */
        GameNoted.create = function create(properties) {
            return new GameNoted(properties);
        };

        /**
         * Encodes the specified GameNoted message. Does not implicitly {@link protob.GameNoted.verify|verify} messages.
         * @function encode
         * @memberof protob.GameNoted
         * @static
         * @param {protob.IGameNoted} message GameNoted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameNoted.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified GameNoted message, length delimited. Does not implicitly {@link protob.GameNoted.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.GameNoted
         * @static
         * @param {protob.IGameNoted} message GameNoted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameNoted.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameNoted message from the specified reader or buffer.
         * @function decode
         * @memberof protob.GameNoted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.GameNoted} GameNoted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameNoted.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.GameNoted();
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
         * Decodes a GameNoted message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.GameNoted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.GameNoted} GameNoted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameNoted.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameNoted message.
         * @function verify
         * @memberof protob.GameNoted
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameNoted.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            return null;
        };

        /**
         * Creates a GameNoted message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.GameNoted
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.GameNoted} GameNoted
         */
        GameNoted.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.GameNoted)
                return object;
            var message = new $root.protob.GameNoted();
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameNoted message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.GameNoted
         * @static
         * @param {protob.GameNoted} message GameNoted
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameNoted.toObject = function toObject(message, options) {
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
         * Converts this GameNoted to JSON.
         * @function toJSON
         * @memberof protob.GameNoted
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameNoted.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameNoted
         * @function getTypeUrl
         * @memberof protob.GameNoted
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameNoted.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.GameNoted";
        };

        return GameNoted;
    })();

    return protob;
})();

module.exports = $root;
