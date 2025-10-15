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

    protob.Notices = (function() {

        /**
         * Properties of a Notices.
         * @memberof protob
         * @interface INotices
         * @property {protob.ILoginSysNotice|null} [LoginSysNotice] Notices LoginSysNotice
         */

        /**
         * Constructs a new Notices.
         * @memberof protob
         * @classdesc Represents a Notices.
         * @implements INotices
         * @constructor
         * @param {protob.INotices=} [properties] Properties to set
         */
        function Notices(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Notices LoginSysNotice.
         * @member {protob.ILoginSysNotice|null|undefined} LoginSysNotice
         * @memberof protob.Notices
         * @instance
         */
        Notices.prototype.LoginSysNotice = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Notices message.
         * @member {"LoginSysNotice"|undefined} message
         * @memberof protob.Notices
         * @instance
         */
        Object.defineProperty(Notices.prototype, "message", {
            get: $util.oneOfGetter($oneOfFields = ["LoginSysNotice"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Notices instance using the specified properties.
         * @function create
         * @memberof protob.Notices
         * @static
         * @param {protob.INotices=} [properties] Properties to set
         * @returns {protob.Notices} Notices instance
         */
        Notices.create = function create(properties) {
            return new Notices(properties);
        };

        /**
         * Encodes the specified Notices message. Does not implicitly {@link protob.Notices.verify|verify} messages.
         * @function encode
         * @memberof protob.Notices
         * @static
         * @param {protob.INotices} message Notices message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Notices.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LoginSysNotice != null && Object.hasOwnProperty.call(message, "LoginSysNotice"))
                $root.protob.LoginSysNotice.encode(message.LoginSysNotice, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Notices message, length delimited. Does not implicitly {@link protob.Notices.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.Notices
         * @static
         * @param {protob.INotices} message Notices message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Notices.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Notices message from the specified reader or buffer.
         * @function decode
         * @memberof protob.Notices
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.Notices} Notices
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Notices.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.Notices();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.LoginSysNotice = $root.protob.LoginSysNotice.decode(reader, reader.uint32());
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
         * Decodes a Notices message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.Notices
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.Notices} Notices
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Notices.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Notices message.
         * @function verify
         * @memberof protob.Notices
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Notices.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.LoginSysNotice != null && message.hasOwnProperty("LoginSysNotice")) {
                properties.message = 1;
                {
                    var error = $root.protob.LoginSysNotice.verify(message.LoginSysNotice);
                    if (error)
                        return "LoginSysNotice." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Notices message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.Notices
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.Notices} Notices
         */
        Notices.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.Notices)
                return object;
            var message = new $root.protob.Notices();
            if (object.LoginSysNotice != null) {
                if (typeof object.LoginSysNotice !== "object")
                    throw TypeError(".protob.Notices.LoginSysNotice: object expected");
                message.LoginSysNotice = $root.protob.LoginSysNotice.fromObject(object.LoginSysNotice);
            }
            return message;
        };

        /**
         * Creates a plain object from a Notices message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.Notices
         * @static
         * @param {protob.Notices} message Notices
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Notices.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.LoginSysNotice != null && message.hasOwnProperty("LoginSysNotice")) {
                object.LoginSysNotice = $root.protob.LoginSysNotice.toObject(message.LoginSysNotice, options);
                if (options.oneofs)
                    object.message = "LoginSysNotice";
            }
            return object;
        };

        /**
         * Converts this Notices to JSON.
         * @function toJSON
         * @memberof protob.Notices
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Notices.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Notices
         * @function getTypeUrl
         * @memberof protob.Notices
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Notices.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.Notices";
        };

        return Notices;
    })();

    protob.LoginSysNotice = (function() {

        /**
         * Properties of a LoginSysNotice.
         * @memberof protob
         * @interface ILoginSysNotice
         */

        /**
         * Constructs a new LoginSysNotice.
         * @memberof protob
         * @classdesc Represents a LoginSysNotice.
         * @implements ILoginSysNotice
         * @constructor
         * @param {protob.ILoginSysNotice=} [properties] Properties to set
         */
        function LoginSysNotice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LoginSysNotice instance using the specified properties.
         * @function create
         * @memberof protob.LoginSysNotice
         * @static
         * @param {protob.ILoginSysNotice=} [properties] Properties to set
         * @returns {protob.LoginSysNotice} LoginSysNotice instance
         */
        LoginSysNotice.create = function create(properties) {
            return new LoginSysNotice(properties);
        };

        /**
         * Encodes the specified LoginSysNotice message. Does not implicitly {@link protob.LoginSysNotice.verify|verify} messages.
         * @function encode
         * @memberof protob.LoginSysNotice
         * @static
         * @param {protob.ILoginSysNotice} message LoginSysNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginSysNotice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LoginSysNotice message, length delimited. Does not implicitly {@link protob.LoginSysNotice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.LoginSysNotice
         * @static
         * @param {protob.ILoginSysNotice} message LoginSysNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginSysNotice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginSysNotice message from the specified reader or buffer.
         * @function decode
         * @memberof protob.LoginSysNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.LoginSysNotice} LoginSysNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginSysNotice.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.LoginSysNotice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginSysNotice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.LoginSysNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.LoginSysNotice} LoginSysNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginSysNotice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginSysNotice message.
         * @function verify
         * @memberof protob.LoginSysNotice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginSysNotice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LoginSysNotice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.LoginSysNotice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.LoginSysNotice} LoginSysNotice
         */
        LoginSysNotice.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.LoginSysNotice)
                return object;
            return new $root.protob.LoginSysNotice();
        };

        /**
         * Creates a plain object from a LoginSysNotice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.LoginSysNotice
         * @static
         * @param {protob.LoginSysNotice} message LoginSysNotice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginSysNotice.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LoginSysNotice to JSON.
         * @function toJSON
         * @memberof protob.LoginSysNotice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginSysNotice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginSysNotice
         * @function getTypeUrl
         * @memberof protob.LoginSysNotice
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginSysNotice.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.LoginSysNotice";
        };

        return LoginSysNotice;
    })();

    protob.RpcOfflineReq = (function() {

        /**
         * Properties of a RpcOfflineReq.
         * @memberof protob
         * @interface IRpcOfflineReq
         * @property {string|null} [playerId] RpcOfflineReq playerId
         * @property {number|null} [gameId] RpcOfflineReq gameId
         */

        /**
         * Constructs a new RpcOfflineReq.
         * @memberof protob
         * @classdesc Represents a RpcOfflineReq.
         * @implements IRpcOfflineReq
         * @constructor
         * @param {protob.IRpcOfflineReq=} [properties] Properties to set
         */
        function RpcOfflineReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RpcOfflineReq playerId.
         * @member {string} playerId
         * @memberof protob.RpcOfflineReq
         * @instance
         */
        RpcOfflineReq.prototype.playerId = "";

        /**
         * RpcOfflineReq gameId.
         * @member {number} gameId
         * @memberof protob.RpcOfflineReq
         * @instance
         */
        RpcOfflineReq.prototype.gameId = 0;

        /**
         * Creates a new RpcOfflineReq instance using the specified properties.
         * @function create
         * @memberof protob.RpcOfflineReq
         * @static
         * @param {protob.IRpcOfflineReq=} [properties] Properties to set
         * @returns {protob.RpcOfflineReq} RpcOfflineReq instance
         */
        RpcOfflineReq.create = function create(properties) {
            return new RpcOfflineReq(properties);
        };

        /**
         * Encodes the specified RpcOfflineReq message. Does not implicitly {@link protob.RpcOfflineReq.verify|verify} messages.
         * @function encode
         * @memberof protob.RpcOfflineReq
         * @static
         * @param {protob.IRpcOfflineReq} message RpcOfflineReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcOfflineReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified RpcOfflineReq message, length delimited. Does not implicitly {@link protob.RpcOfflineReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.RpcOfflineReq
         * @static
         * @param {protob.IRpcOfflineReq} message RpcOfflineReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcOfflineReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RpcOfflineReq message from the specified reader or buffer.
         * @function decode
         * @memberof protob.RpcOfflineReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.RpcOfflineReq} RpcOfflineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcOfflineReq.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.RpcOfflineReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
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
         * Decodes a RpcOfflineReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.RpcOfflineReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.RpcOfflineReq} RpcOfflineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcOfflineReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RpcOfflineReq message.
         * @function verify
         * @memberof protob.RpcOfflineReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RpcOfflineReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            return null;
        };

        /**
         * Creates a RpcOfflineReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.RpcOfflineReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.RpcOfflineReq} RpcOfflineReq
         */
        RpcOfflineReq.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.RpcOfflineReq)
                return object;
            var message = new $root.protob.RpcOfflineReq();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            return message;
        };

        /**
         * Creates a plain object from a RpcOfflineReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.RpcOfflineReq
         * @static
         * @param {protob.RpcOfflineReq} message RpcOfflineReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RpcOfflineReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = "";
                object.gameId = 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        /**
         * Converts this RpcOfflineReq to JSON.
         * @function toJSON
         * @memberof protob.RpcOfflineReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RpcOfflineReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RpcOfflineReq
         * @function getTypeUrl
         * @memberof protob.RpcOfflineReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RpcOfflineReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.RpcOfflineReq";
        };

        return RpcOfflineReq;
    })();

    protob.RpcRes = (function() {

        /**
         * Properties of a RpcRes.
         * @memberof protob
         * @interface IRpcRes
         * @property {number|null} [code] RpcRes code
         */

        /**
         * Constructs a new RpcRes.
         * @memberof protob
         * @classdesc Represents a RpcRes.
         * @implements IRpcRes
         * @constructor
         * @param {protob.IRpcRes=} [properties] Properties to set
         */
        function RpcRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RpcRes code.
         * @member {number} code
         * @memberof protob.RpcRes
         * @instance
         */
        RpcRes.prototype.code = 0;

        /**
         * Creates a new RpcRes instance using the specified properties.
         * @function create
         * @memberof protob.RpcRes
         * @static
         * @param {protob.IRpcRes=} [properties] Properties to set
         * @returns {protob.RpcRes} RpcRes instance
         */
        RpcRes.create = function create(properties) {
            return new RpcRes(properties);
        };

        /**
         * Encodes the specified RpcRes message. Does not implicitly {@link protob.RpcRes.verify|verify} messages.
         * @function encode
         * @memberof protob.RpcRes
         * @static
         * @param {protob.IRpcRes} message RpcRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified RpcRes message, length delimited. Does not implicitly {@link protob.RpcRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.RpcRes
         * @static
         * @param {protob.IRpcRes} message RpcRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RpcRes message from the specified reader or buffer.
         * @function decode
         * @memberof protob.RpcRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.RpcRes} RpcRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcRes.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.RpcRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
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
         * Decodes a RpcRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.RpcRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.RpcRes} RpcRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RpcRes message.
         * @function verify
         * @memberof protob.RpcRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RpcRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates a RpcRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.RpcRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.RpcRes} RpcRes
         */
        RpcRes.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.RpcRes)
                return object;
            var message = new $root.protob.RpcRes();
            if (object.code != null)
                message.code = object.code | 0;
            return message;
        };

        /**
         * Creates a plain object from a RpcRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.RpcRes
         * @static
         * @param {protob.RpcRes} message RpcRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RpcRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.code = 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this RpcRes to JSON.
         * @function toJSON
         * @memberof protob.RpcRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RpcRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RpcRes
         * @function getTypeUrl
         * @memberof protob.RpcRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RpcRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.RpcRes";
        };

        return RpcRes;
    })();

    return protob;
})();

module.exports = $root;
