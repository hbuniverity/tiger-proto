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

    protob.RpcMsgRes = (function() {

        /**
         * Properties of a RpcMsgRes.
         * @memberof protob
         * @interface IRpcMsgRes
         * @property {number|null} [code] RpcMsgRes code
         */

        /**
         * Constructs a new RpcMsgRes.
         * @memberof protob
         * @classdesc Represents a RpcMsgRes.
         * @implements IRpcMsgRes
         * @constructor
         * @param {protob.IRpcMsgRes=} [properties] Properties to set
         */
        function RpcMsgRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RpcMsgRes code.
         * @member {number} code
         * @memberof protob.RpcMsgRes
         * @instance
         */
        RpcMsgRes.prototype.code = 0;

        /**
         * Creates a new RpcMsgRes instance using the specified properties.
         * @function create
         * @memberof protob.RpcMsgRes
         * @static
         * @param {protob.IRpcMsgRes=} [properties] Properties to set
         * @returns {protob.RpcMsgRes} RpcMsgRes instance
         */
        RpcMsgRes.create = function create(properties) {
            return new RpcMsgRes(properties);
        };

        /**
         * Encodes the specified RpcMsgRes message. Does not implicitly {@link protob.RpcMsgRes.verify|verify} messages.
         * @function encode
         * @memberof protob.RpcMsgRes
         * @static
         * @param {protob.IRpcMsgRes} message RpcMsgRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcMsgRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified RpcMsgRes message, length delimited. Does not implicitly {@link protob.RpcMsgRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.RpcMsgRes
         * @static
         * @param {protob.IRpcMsgRes} message RpcMsgRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcMsgRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RpcMsgRes message from the specified reader or buffer.
         * @function decode
         * @memberof protob.RpcMsgRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.RpcMsgRes} RpcMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcMsgRes.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.RpcMsgRes();
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
         * Decodes a RpcMsgRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.RpcMsgRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.RpcMsgRes} RpcMsgRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcMsgRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RpcMsgRes message.
         * @function verify
         * @memberof protob.RpcMsgRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RpcMsgRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates a RpcMsgRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.RpcMsgRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.RpcMsgRes} RpcMsgRes
         */
        RpcMsgRes.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.RpcMsgRes)
                return object;
            var message = new $root.protob.RpcMsgRes();
            if (object.code != null)
                message.code = object.code | 0;
            return message;
        };

        /**
         * Creates a plain object from a RpcMsgRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.RpcMsgRes
         * @static
         * @param {protob.RpcMsgRes} message RpcMsgRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RpcMsgRes.toObject = function toObject(message, options) {
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
         * Converts this RpcMsgRes to JSON.
         * @function toJSON
         * @memberof protob.RpcMsgRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RpcMsgRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RpcMsgRes
         * @function getTypeUrl
         * @memberof protob.RpcMsgRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RpcMsgRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.RpcMsgRes";
        };

        return RpcMsgRes;
    })();

    protob.LoginRes = (function() {

        /**
         * Properties of a LoginRes.
         * @memberof protob
         * @interface ILoginRes
         * @property {protob.IBaseCommon|null} [base] LoginRes base
         * @property {protob.IPlayerInfo|null} [player] LoginRes player
         * @property {protob.IGameInfo|null} [gameInfo] LoginRes gameInfo
         * @property {protob.ITaskInfo|null} [task] LoginRes task
         */

        /**
         * Constructs a new LoginRes.
         * @memberof protob
         * @classdesc Represents a LoginRes.
         * @implements ILoginRes
         * @constructor
         * @param {protob.ILoginRes=} [properties] Properties to set
         */
        function LoginRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRes base.
         * @member {protob.IBaseCommon|null|undefined} base
         * @memberof protob.LoginRes
         * @instance
         */
        LoginRes.prototype.base = null;

        /**
         * LoginRes player.
         * @member {protob.IPlayerInfo|null|undefined} player
         * @memberof protob.LoginRes
         * @instance
         */
        LoginRes.prototype.player = null;

        /**
         * LoginRes gameInfo.
         * @member {protob.IGameInfo|null|undefined} gameInfo
         * @memberof protob.LoginRes
         * @instance
         */
        LoginRes.prototype.gameInfo = null;

        /**
         * LoginRes task.
         * @member {protob.ITaskInfo|null|undefined} task
         * @memberof protob.LoginRes
         * @instance
         */
        LoginRes.prototype.task = null;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @function create
         * @memberof protob.LoginRes
         * @static
         * @param {protob.ILoginRes=} [properties] Properties to set
         * @returns {protob.LoginRes} LoginRes instance
         */
        LoginRes.create = function create(properties) {
            return new LoginRes(properties);
        };

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link protob.LoginRes.verify|verify} messages.
         * @function encode
         * @memberof protob.LoginRes
         * @static
         * @param {protob.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.protob.BaseCommon.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.player != null && Object.hasOwnProperty.call(message, "player"))
                $root.protob.PlayerInfo.encode(message.player, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                $root.protob.GameInfo.encode(message.gameInfo, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.task != null && Object.hasOwnProperty.call(message, "task"))
                $root.protob.TaskInfo.encode(message.task, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link protob.LoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.LoginRes
         * @static
         * @param {protob.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof protob.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.LoginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.protob.BaseCommon.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.player = $root.protob.PlayerInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.gameInfo = $root.protob.GameInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.task = $root.protob.TaskInfo.decode(reader, reader.uint32());
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
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRes message.
         * @function verify
         * @memberof protob.LoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                var error = $root.protob.BaseCommon.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.protob.PlayerInfo.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                var error = $root.protob.GameInfo.verify(message.gameInfo);
                if (error)
                    return "gameInfo." + error;
            }
            if (message.task != null && message.hasOwnProperty("task")) {
                var error = $root.protob.TaskInfo.verify(message.task);
                if (error)
                    return "task." + error;
            }
            return null;
        };

        /**
         * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.LoginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.LoginRes} LoginRes
         */
        LoginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.LoginRes)
                return object;
            var message = new $root.protob.LoginRes();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".protob.LoginRes.base: object expected");
                message.base = $root.protob.BaseCommon.fromObject(object.base);
            }
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".protob.LoginRes.player: object expected");
                message.player = $root.protob.PlayerInfo.fromObject(object.player);
            }
            if (object.gameInfo != null) {
                if (typeof object.gameInfo !== "object")
                    throw TypeError(".protob.LoginRes.gameInfo: object expected");
                message.gameInfo = $root.protob.GameInfo.fromObject(object.gameInfo);
            }
            if (object.task != null) {
                if (typeof object.task !== "object")
                    throw TypeError(".protob.LoginRes.task: object expected");
                message.task = $root.protob.TaskInfo.fromObject(object.task);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.LoginRes
         * @static
         * @param {protob.LoginRes} message LoginRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.base = null;
                object.player = null;
                object.gameInfo = null;
                object.task = null;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.protob.BaseCommon.toObject(message.base, options);
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.protob.PlayerInfo.toObject(message.player, options);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = $root.protob.GameInfo.toObject(message.gameInfo, options);
            if (message.task != null && message.hasOwnProperty("task"))
                object.task = $root.protob.TaskInfo.toObject(message.task, options);
            return object;
        };

        /**
         * Converts this LoginRes to JSON.
         * @function toJSON
         * @memberof protob.LoginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginRes
         * @function getTypeUrl
         * @memberof protob.LoginRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.LoginRes";
        };

        return LoginRes;
    })();

    protob.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof protob
         * @interface IPlayerInfo
         * @property {string|null} [playerId] PlayerInfo playerId
         * @property {string|null} [username] PlayerInfo username
         * @property {string|null} [deviceId] PlayerInfo deviceId
         * @property {number|Long|null} [coin] PlayerInfo coin
         * @property {number|null} [cash] PlayerInfo cash
         * @property {number|Long|null} [spinCount] PlayerInfo spinCount
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof protob
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {protob.IPlayerInfo=} [properties] Properties to set
         */
        function PlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo playerId.
         * @member {string} playerId
         * @memberof protob.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.playerId = "";

        /**
         * PlayerInfo username.
         * @member {string} username
         * @memberof protob.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.username = "";

        /**
         * PlayerInfo deviceId.
         * @member {string} deviceId
         * @memberof protob.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.deviceId = "";

        /**
         * PlayerInfo coin.
         * @member {number|Long} coin
         * @memberof protob.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerInfo cash.
         * @member {number} cash
         * @memberof protob.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.cash = 0;

        /**
         * PlayerInfo spinCount.
         * @member {number|Long} spinCount
         * @memberof protob.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.spinCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof protob.PlayerInfo
         * @static
         * @param {protob.IPlayerInfo=} [properties] Properties to set
         * @returns {protob.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link protob.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof protob.PlayerInfo
         * @static
         * @param {protob.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.deviceId);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.coin);
            if (message.cash != null && Object.hasOwnProperty.call(message, "cash"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.cash);
            if (message.spinCount != null && Object.hasOwnProperty.call(message, "spinCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.spinCount);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link protob.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.PlayerInfo
         * @static
         * @param {protob.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protob.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.PlayerInfo();
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
                        message.username = reader.string();
                        break;
                    }
                case 3: {
                        message.deviceId = reader.string();
                        break;
                    }
                case 4: {
                        message.coin = reader.int64();
                        break;
                    }
                case 5: {
                        message.cash = reader.double();
                        break;
                    }
                case 6: {
                        message.spinCount = reader.int64();
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
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfo message.
         * @function verify
         * @memberof protob.PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (!$util.isInteger(message.coin) && !(message.coin && $util.isInteger(message.coin.low) && $util.isInteger(message.coin.high)))
                    return "coin: integer|Long expected";
            if (message.cash != null && message.hasOwnProperty("cash"))
                if (typeof message.cash !== "number")
                    return "cash: number expected";
            if (message.spinCount != null && message.hasOwnProperty("spinCount"))
                if (!$util.isInteger(message.spinCount) && !(message.spinCount && $util.isInteger(message.spinCount.low) && $util.isInteger(message.spinCount.high)))
                    return "spinCount: integer|Long expected";
            return null;
        };

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.PlayerInfo} PlayerInfo
         */
        PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.PlayerInfo)
                return object;
            var message = new $root.protob.PlayerInfo();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.username != null)
                message.username = String(object.username);
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.coin != null)
                if ($util.Long)
                    (message.coin = $util.Long.fromValue(object.coin)).unsigned = false;
                else if (typeof object.coin === "string")
                    message.coin = parseInt(object.coin, 10);
                else if (typeof object.coin === "number")
                    message.coin = object.coin;
                else if (typeof object.coin === "object")
                    message.coin = new $util.LongBits(object.coin.low >>> 0, object.coin.high >>> 0).toNumber();
            if (object.cash != null)
                message.cash = Number(object.cash);
            if (object.spinCount != null)
                if ($util.Long)
                    (message.spinCount = $util.Long.fromValue(object.spinCount)).unsigned = false;
                else if (typeof object.spinCount === "string")
                    message.spinCount = parseInt(object.spinCount, 10);
                else if (typeof object.spinCount === "number")
                    message.spinCount = object.spinCount;
                else if (typeof object.spinCount === "object")
                    message.spinCount = new $util.LongBits(object.spinCount.low >>> 0, object.spinCount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.PlayerInfo
         * @static
         * @param {protob.PlayerInfo} message PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = "";
                object.username = "";
                object.deviceId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.coin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.coin = options.longs === String ? "0" : 0;
                object.cash = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.spinCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.spinCount = options.longs === String ? "0" : 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (typeof message.coin === "number")
                    object.coin = options.longs === String ? String(message.coin) : message.coin;
                else
                    object.coin = options.longs === String ? $util.Long.prototype.toString.call(message.coin) : options.longs === Number ? new $util.LongBits(message.coin.low >>> 0, message.coin.high >>> 0).toNumber() : message.coin;
            if (message.cash != null && message.hasOwnProperty("cash"))
                object.cash = options.json && !isFinite(message.cash) ? String(message.cash) : message.cash;
            if (message.spinCount != null && message.hasOwnProperty("spinCount"))
                if (typeof message.spinCount === "number")
                    object.spinCount = options.longs === String ? String(message.spinCount) : message.spinCount;
                else
                    object.spinCount = options.longs === String ? $util.Long.prototype.toString.call(message.spinCount) : options.longs === Number ? new $util.LongBits(message.spinCount.low >>> 0, message.spinCount.high >>> 0).toNumber() : message.spinCount;
            return object;
        };

        /**
         * Converts this PlayerInfo to JSON.
         * @function toJSON
         * @memberof protob.PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerInfo
         * @function getTypeUrl
         * @memberof protob.PlayerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.PlayerInfo";
        };

        return PlayerInfo;
    })();

    protob.GameInfo = (function() {

        /**
         * Properties of a GameInfo.
         * @memberof protob
         * @interface IGameInfo
         * @property {protob.IGameJackpot|null} [jackpot] GameInfo jackpot
         * @property {number|null} [AccruedJackpot] GameInfo AccruedJackpot
         */

        /**
         * Constructs a new GameInfo.
         * @memberof protob
         * @classdesc Represents a GameInfo.
         * @implements IGameInfo
         * @constructor
         * @param {protob.IGameInfo=} [properties] Properties to set
         */
        function GameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameInfo jackpot.
         * @member {protob.IGameJackpot|null|undefined} jackpot
         * @memberof protob.GameInfo
         * @instance
         */
        GameInfo.prototype.jackpot = null;

        /**
         * GameInfo AccruedJackpot.
         * @member {number} AccruedJackpot
         * @memberof protob.GameInfo
         * @instance
         */
        GameInfo.prototype.AccruedJackpot = 0;

        /**
         * Creates a new GameInfo instance using the specified properties.
         * @function create
         * @memberof protob.GameInfo
         * @static
         * @param {protob.IGameInfo=} [properties] Properties to set
         * @returns {protob.GameInfo} GameInfo instance
         */
        GameInfo.create = function create(properties) {
            return new GameInfo(properties);
        };

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link protob.GameInfo.verify|verify} messages.
         * @function encode
         * @memberof protob.GameInfo
         * @static
         * @param {protob.IGameInfo} message GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.jackpot != null && Object.hasOwnProperty.call(message, "jackpot"))
                $root.protob.GameJackpot.encode(message.jackpot, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.AccruedJackpot != null && Object.hasOwnProperty.call(message, "AccruedJackpot"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.AccruedJackpot);
            return writer;
        };

        /**
         * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link protob.GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.GameInfo
         * @static
         * @param {protob.IGameInfo} message GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protob.GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.GameInfo} GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.jackpot = $root.protob.GameJackpot.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.AccruedJackpot = reader.double();
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
         * Decodes a GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.GameInfo} GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameInfo message.
         * @function verify
         * @memberof protob.GameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.jackpot != null && message.hasOwnProperty("jackpot")) {
                var error = $root.protob.GameJackpot.verify(message.jackpot);
                if (error)
                    return "jackpot." + error;
            }
            if (message.AccruedJackpot != null && message.hasOwnProperty("AccruedJackpot"))
                if (typeof message.AccruedJackpot !== "number")
                    return "AccruedJackpot: number expected";
            return null;
        };

        /**
         * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.GameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.GameInfo} GameInfo
         */
        GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.GameInfo)
                return object;
            var message = new $root.protob.GameInfo();
            if (object.jackpot != null) {
                if (typeof object.jackpot !== "object")
                    throw TypeError(".protob.GameInfo.jackpot: object expected");
                message.jackpot = $root.protob.GameJackpot.fromObject(object.jackpot);
            }
            if (object.AccruedJackpot != null)
                message.AccruedJackpot = Number(object.AccruedJackpot);
            return message;
        };

        /**
         * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.GameInfo
         * @static
         * @param {protob.GameInfo} message GameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.jackpot = null;
                object.AccruedJackpot = 0;
            }
            if (message.jackpot != null && message.hasOwnProperty("jackpot"))
                object.jackpot = $root.protob.GameJackpot.toObject(message.jackpot, options);
            if (message.AccruedJackpot != null && message.hasOwnProperty("AccruedJackpot"))
                object.AccruedJackpot = options.json && !isFinite(message.AccruedJackpot) ? String(message.AccruedJackpot) : message.AccruedJackpot;
            return object;
        };

        /**
         * Converts this GameInfo to JSON.
         * @function toJSON
         * @memberof protob.GameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameInfo
         * @function getTypeUrl
         * @memberof protob.GameInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.GameInfo";
        };

        return GameInfo;
    })();

    protob.GameJackpot = (function() {

        /**
         * Properties of a GameJackpot.
         * @memberof protob
         * @interface IGameJackpot
         * @property {number|null} [small] GameJackpot small
         * @property {number|null} [winner] GameJackpot winner
         * @property {number|null} [award] GameJackpot award
         * @property {number|null} [prize] GameJackpot prize
         */

        /**
         * Constructs a new GameJackpot.
         * @memberof protob
         * @classdesc Represents a GameJackpot.
         * @implements IGameJackpot
         * @constructor
         * @param {protob.IGameJackpot=} [properties] Properties to set
         */
        function GameJackpot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameJackpot small.
         * @member {number} small
         * @memberof protob.GameJackpot
         * @instance
         */
        GameJackpot.prototype.small = 0;

        /**
         * GameJackpot winner.
         * @member {number} winner
         * @memberof protob.GameJackpot
         * @instance
         */
        GameJackpot.prototype.winner = 0;

        /**
         * GameJackpot award.
         * @member {number} award
         * @memberof protob.GameJackpot
         * @instance
         */
        GameJackpot.prototype.award = 0;

        /**
         * GameJackpot prize.
         * @member {number} prize
         * @memberof protob.GameJackpot
         * @instance
         */
        GameJackpot.prototype.prize = 0;

        /**
         * Creates a new GameJackpot instance using the specified properties.
         * @function create
         * @memberof protob.GameJackpot
         * @static
         * @param {protob.IGameJackpot=} [properties] Properties to set
         * @returns {protob.GameJackpot} GameJackpot instance
         */
        GameJackpot.create = function create(properties) {
            return new GameJackpot(properties);
        };

        /**
         * Encodes the specified GameJackpot message. Does not implicitly {@link protob.GameJackpot.verify|verify} messages.
         * @function encode
         * @memberof protob.GameJackpot
         * @static
         * @param {protob.IGameJackpot} message GameJackpot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameJackpot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.small != null && Object.hasOwnProperty.call(message, "small"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.small);
            if (message.winner != null && Object.hasOwnProperty.call(message, "winner"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.winner);
            if (message.award != null && Object.hasOwnProperty.call(message, "award"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.award);
            if (message.prize != null && Object.hasOwnProperty.call(message, "prize"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.prize);
            return writer;
        };

        /**
         * Encodes the specified GameJackpot message, length delimited. Does not implicitly {@link protob.GameJackpot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.GameJackpot
         * @static
         * @param {protob.IGameJackpot} message GameJackpot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameJackpot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameJackpot message from the specified reader or buffer.
         * @function decode
         * @memberof protob.GameJackpot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.GameJackpot} GameJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameJackpot.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.GameJackpot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.small = reader.double();
                        break;
                    }
                case 2: {
                        message.winner = reader.double();
                        break;
                    }
                case 3: {
                        message.award = reader.double();
                        break;
                    }
                case 4: {
                        message.prize = reader.double();
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
         * Decodes a GameJackpot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.GameJackpot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.GameJackpot} GameJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameJackpot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameJackpot message.
         * @function verify
         * @memberof protob.GameJackpot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameJackpot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.small != null && message.hasOwnProperty("small"))
                if (typeof message.small !== "number")
                    return "small: number expected";
            if (message.winner != null && message.hasOwnProperty("winner"))
                if (typeof message.winner !== "number")
                    return "winner: number expected";
            if (message.award != null && message.hasOwnProperty("award"))
                if (typeof message.award !== "number")
                    return "award: number expected";
            if (message.prize != null && message.hasOwnProperty("prize"))
                if (typeof message.prize !== "number")
                    return "prize: number expected";
            return null;
        };

        /**
         * Creates a GameJackpot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.GameJackpot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.GameJackpot} GameJackpot
         */
        GameJackpot.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.GameJackpot)
                return object;
            var message = new $root.protob.GameJackpot();
            if (object.small != null)
                message.small = Number(object.small);
            if (object.winner != null)
                message.winner = Number(object.winner);
            if (object.award != null)
                message.award = Number(object.award);
            if (object.prize != null)
                message.prize = Number(object.prize);
            return message;
        };

        /**
         * Creates a plain object from a GameJackpot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.GameJackpot
         * @static
         * @param {protob.GameJackpot} message GameJackpot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameJackpot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.small = 0;
                object.winner = 0;
                object.award = 0;
                object.prize = 0;
            }
            if (message.small != null && message.hasOwnProperty("small"))
                object.small = options.json && !isFinite(message.small) ? String(message.small) : message.small;
            if (message.winner != null && message.hasOwnProperty("winner"))
                object.winner = options.json && !isFinite(message.winner) ? String(message.winner) : message.winner;
            if (message.award != null && message.hasOwnProperty("award"))
                object.award = options.json && !isFinite(message.award) ? String(message.award) : message.award;
            if (message.prize != null && message.hasOwnProperty("prize"))
                object.prize = options.json && !isFinite(message.prize) ? String(message.prize) : message.prize;
            return object;
        };

        /**
         * Converts this GameJackpot to JSON.
         * @function toJSON
         * @memberof protob.GameJackpot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameJackpot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameJackpot
         * @function getTypeUrl
         * @memberof protob.GameJackpot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameJackpot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.GameJackpot";
        };

        return GameJackpot;
    })();

    protob.TaskInfo = (function() {

        /**
         * Properties of a TaskInfo.
         * @memberof protob
         * @interface ITaskInfo
         */

        /**
         * Constructs a new TaskInfo.
         * @memberof protob
         * @classdesc Represents a TaskInfo.
         * @implements ITaskInfo
         * @constructor
         * @param {protob.ITaskInfo=} [properties] Properties to set
         */
        function TaskInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new TaskInfo instance using the specified properties.
         * @function create
         * @memberof protob.TaskInfo
         * @static
         * @param {protob.ITaskInfo=} [properties] Properties to set
         * @returns {protob.TaskInfo} TaskInfo instance
         */
        TaskInfo.create = function create(properties) {
            return new TaskInfo(properties);
        };

        /**
         * Encodes the specified TaskInfo message. Does not implicitly {@link protob.TaskInfo.verify|verify} messages.
         * @function encode
         * @memberof protob.TaskInfo
         * @static
         * @param {protob.ITaskInfo} message TaskInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified TaskInfo message, length delimited. Does not implicitly {@link protob.TaskInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.TaskInfo
         * @static
         * @param {protob.ITaskInfo} message TaskInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TaskInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protob.TaskInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.TaskInfo} TaskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.TaskInfo();
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
         * Decodes a TaskInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.TaskInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.TaskInfo} TaskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TaskInfo message.
         * @function verify
         * @memberof protob.TaskInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TaskInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a TaskInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.TaskInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.TaskInfo} TaskInfo
         */
        TaskInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.TaskInfo)
                return object;
            return new $root.protob.TaskInfo();
        };

        /**
         * Creates a plain object from a TaskInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.TaskInfo
         * @static
         * @param {protob.TaskInfo} message TaskInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskInfo.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this TaskInfo to JSON.
         * @function toJSON
         * @memberof protob.TaskInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TaskInfo
         * @function getTypeUrl
         * @memberof protob.TaskInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TaskInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.TaskInfo";
        };

        return TaskInfo;
    })();

    protob.SpinRes = (function() {

        /**
         * Properties of a SpinRes.
         * @memberof protob
         * @interface ISpinRes
         * @property {number|null} [code] SpinRes code
         */

        /**
         * Constructs a new SpinRes.
         * @memberof protob
         * @classdesc Represents a SpinRes.
         * @implements ISpinRes
         * @constructor
         * @param {protob.ISpinRes=} [properties] Properties to set
         */
        function SpinRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpinRes code.
         * @member {number} code
         * @memberof protob.SpinRes
         * @instance
         */
        SpinRes.prototype.code = 0;

        /**
         * Creates a new SpinRes instance using the specified properties.
         * @function create
         * @memberof protob.SpinRes
         * @static
         * @param {protob.ISpinRes=} [properties] Properties to set
         * @returns {protob.SpinRes} SpinRes instance
         */
        SpinRes.create = function create(properties) {
            return new SpinRes(properties);
        };

        /**
         * Encodes the specified SpinRes message. Does not implicitly {@link protob.SpinRes.verify|verify} messages.
         * @function encode
         * @memberof protob.SpinRes
         * @static
         * @param {protob.ISpinRes} message SpinRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpinRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            return writer;
        };

        /**
         * Encodes the specified SpinRes message, length delimited. Does not implicitly {@link protob.SpinRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.SpinRes
         * @static
         * @param {protob.ISpinRes} message SpinRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpinRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpinRes message from the specified reader or buffer.
         * @function decode
         * @memberof protob.SpinRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.SpinRes} SpinRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpinRes.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.SpinRes();
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
         * Decodes a SpinRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.SpinRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.SpinRes} SpinRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpinRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpinRes message.
         * @function verify
         * @memberof protob.SpinRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpinRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            return null;
        };

        /**
         * Creates a SpinRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.SpinRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.SpinRes} SpinRes
         */
        SpinRes.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.SpinRes)
                return object;
            var message = new $root.protob.SpinRes();
            if (object.code != null)
                message.code = object.code | 0;
            return message;
        };

        /**
         * Creates a plain object from a SpinRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.SpinRes
         * @static
         * @param {protob.SpinRes} message SpinRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpinRes.toObject = function toObject(message, options) {
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
         * Converts this SpinRes to JSON.
         * @function toJSON
         * @memberof protob.SpinRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpinRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SpinRes
         * @function getTypeUrl
         * @memberof protob.SpinRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SpinRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.SpinRes";
        };

        return SpinRes;
    })();

    protob.RewardResult = (function() {

        /**
         * Properties of a RewardResult.
         * @memberof protob
         * @interface IRewardResult
         * @property {Array.<number>|null} [results] RewardResult results
         */

        /**
         * Constructs a new RewardResult.
         * @memberof protob
         * @classdesc Represents a RewardResult.
         * @implements IRewardResult
         * @constructor
         * @param {protob.IRewardResult=} [properties] Properties to set
         */
        function RewardResult(properties) {
            this.results = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RewardResult results.
         * @member {Array.<number>} results
         * @memberof protob.RewardResult
         * @instance
         */
        RewardResult.prototype.results = $util.emptyArray;

        /**
         * Creates a new RewardResult instance using the specified properties.
         * @function create
         * @memberof protob.RewardResult
         * @static
         * @param {protob.IRewardResult=} [properties] Properties to set
         * @returns {protob.RewardResult} RewardResult instance
         */
        RewardResult.create = function create(properties) {
            return new RewardResult(properties);
        };

        /**
         * Encodes the specified RewardResult message. Does not implicitly {@link protob.RewardResult.verify|verify} messages.
         * @function encode
         * @memberof protob.RewardResult
         * @static
         * @param {protob.IRewardResult} message RewardResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RewardResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.results != null && message.results.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.results.length; ++i)
                    writer.int32(message.results[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified RewardResult message, length delimited. Does not implicitly {@link protob.RewardResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.RewardResult
         * @static
         * @param {protob.IRewardResult} message RewardResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RewardResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RewardResult message from the specified reader or buffer.
         * @function decode
         * @memberof protob.RewardResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.RewardResult} RewardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RewardResult.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.RewardResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.results && message.results.length))
                            message.results = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.results.push(reader.int32());
                        } else
                            message.results.push(reader.int32());
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
         * Decodes a RewardResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.RewardResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.RewardResult} RewardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RewardResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RewardResult message.
         * @function verify
         * @memberof protob.RewardResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RewardResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (var i = 0; i < message.results.length; ++i)
                    if (!$util.isInteger(message.results[i]))
                        return "results: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a RewardResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.RewardResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.RewardResult} RewardResult
         */
        RewardResult.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.RewardResult)
                return object;
            var message = new $root.protob.RewardResult();
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".protob.RewardResult.results: array expected");
                message.results = [];
                for (var i = 0; i < object.results.length; ++i)
                    message.results[i] = object.results[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a RewardResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.RewardResult
         * @static
         * @param {protob.RewardResult} message RewardResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RewardResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (message.results && message.results.length) {
                object.results = [];
                for (var j = 0; j < message.results.length; ++j)
                    object.results[j] = message.results[j];
            }
            return object;
        };

        /**
         * Converts this RewardResult to JSON.
         * @function toJSON
         * @memberof protob.RewardResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RewardResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RewardResult
         * @function getTypeUrl
         * @memberof protob.RewardResult
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RewardResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.RewardResult";
        };

        return RewardResult;
    })();

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
