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

    protob.UnicastMsg = (function() {

        /**
         * Properties of an UnicastMsg.
         * @memberof protob
         * @interface IUnicastMsg
         * @property {string|null} [route] UnicastMsg route
         * @property {Object.<string,protob.INotices>|null} [usersMsg] UnicastMsg usersMsg
         */

        /**
         * Constructs a new UnicastMsg.
         * @memberof protob
         * @classdesc Represents an UnicastMsg.
         * @implements IUnicastMsg
         * @constructor
         * @param {protob.IUnicastMsg=} [properties] Properties to set
         */
        function UnicastMsg(properties) {
            this.usersMsg = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnicastMsg route.
         * @member {string} route
         * @memberof protob.UnicastMsg
         * @instance
         */
        UnicastMsg.prototype.route = "";

        /**
         * UnicastMsg usersMsg.
         * @member {Object.<string,protob.INotices>} usersMsg
         * @memberof protob.UnicastMsg
         * @instance
         */
        UnicastMsg.prototype.usersMsg = $util.emptyObject;

        /**
         * Creates a new UnicastMsg instance using the specified properties.
         * @function create
         * @memberof protob.UnicastMsg
         * @static
         * @param {protob.IUnicastMsg=} [properties] Properties to set
         * @returns {protob.UnicastMsg} UnicastMsg instance
         */
        UnicastMsg.create = function create(properties) {
            return new UnicastMsg(properties);
        };

        /**
         * Encodes the specified UnicastMsg message. Does not implicitly {@link protob.UnicastMsg.verify|verify} messages.
         * @function encode
         * @memberof protob.UnicastMsg
         * @static
         * @param {protob.IUnicastMsg} message UnicastMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnicastMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.route != null && Object.hasOwnProperty.call(message, "route"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.route);
            if (message.usersMsg != null && Object.hasOwnProperty.call(message, "usersMsg"))
                for (var keys = Object.keys(message.usersMsg), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.protob.Notices.encode(message.usersMsg[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified UnicastMsg message, length delimited. Does not implicitly {@link protob.UnicastMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.UnicastMsg
         * @static
         * @param {protob.IUnicastMsg} message UnicastMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnicastMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnicastMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protob.UnicastMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.UnicastMsg} UnicastMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnicastMsg.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.UnicastMsg(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.route = reader.string();
                        break;
                    }
                case 2: {
                        if (message.usersMsg === $util.emptyObject)
                            message.usersMsg = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.protob.Notices.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.usersMsg[key] = value;
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
         * Decodes an UnicastMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.UnicastMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.UnicastMsg} UnicastMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnicastMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnicastMsg message.
         * @function verify
         * @memberof protob.UnicastMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnicastMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.route != null && message.hasOwnProperty("route"))
                if (!$util.isString(message.route))
                    return "route: string expected";
            if (message.usersMsg != null && message.hasOwnProperty("usersMsg")) {
                if (!$util.isObject(message.usersMsg))
                    return "usersMsg: object expected";
                var key = Object.keys(message.usersMsg);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.protob.Notices.verify(message.usersMsg[key[i]]);
                    if (error)
                        return "usersMsg." + error;
                }
            }
            return null;
        };

        /**
         * Creates an UnicastMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.UnicastMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.UnicastMsg} UnicastMsg
         */
        UnicastMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.UnicastMsg)
                return object;
            var message = new $root.protob.UnicastMsg();
            if (object.route != null)
                message.route = String(object.route);
            if (object.usersMsg) {
                if (typeof object.usersMsg !== "object")
                    throw TypeError(".protob.UnicastMsg.usersMsg: object expected");
                message.usersMsg = {};
                for (var keys = Object.keys(object.usersMsg), i = 0; i < keys.length; ++i) {
                    if (typeof object.usersMsg[keys[i]] !== "object")
                        throw TypeError(".protob.UnicastMsg.usersMsg: object expected");
                    message.usersMsg[keys[i]] = $root.protob.Notices.fromObject(object.usersMsg[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UnicastMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.UnicastMsg
         * @static
         * @param {protob.UnicastMsg} message UnicastMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnicastMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.usersMsg = {};
            if (options.defaults)
                object.route = "";
            if (message.route != null && message.hasOwnProperty("route"))
                object.route = message.route;
            var keys2;
            if (message.usersMsg && (keys2 = Object.keys(message.usersMsg)).length) {
                object.usersMsg = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.usersMsg[keys2[j]] = $root.protob.Notices.toObject(message.usersMsg[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this UnicastMsg to JSON.
         * @function toJSON
         * @memberof protob.UnicastMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnicastMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UnicastMsg
         * @function getTypeUrl
         * @memberof protob.UnicastMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UnicastMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.UnicastMsg";
        };

        return UnicastMsg;
    })();

    protob.MulticastMsg = (function() {

        /**
         * Properties of a MulticastMsg.
         * @memberof protob
         * @interface IMulticastMsg
         * @property {string|null} [route] MulticastMsg route
         * @property {Array.<string>|null} [uids] MulticastMsg uids
         * @property {protob.INotices|null} [notice] MulticastMsg notice
         */

        /**
         * Constructs a new MulticastMsg.
         * @memberof protob
         * @classdesc Represents a MulticastMsg.
         * @implements IMulticastMsg
         * @constructor
         * @param {protob.IMulticastMsg=} [properties] Properties to set
         */
        function MulticastMsg(properties) {
            this.uids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MulticastMsg route.
         * @member {string} route
         * @memberof protob.MulticastMsg
         * @instance
         */
        MulticastMsg.prototype.route = "";

        /**
         * MulticastMsg uids.
         * @member {Array.<string>} uids
         * @memberof protob.MulticastMsg
         * @instance
         */
        MulticastMsg.prototype.uids = $util.emptyArray;

        /**
         * MulticastMsg notice.
         * @member {protob.INotices|null|undefined} notice
         * @memberof protob.MulticastMsg
         * @instance
         */
        MulticastMsg.prototype.notice = null;

        /**
         * Creates a new MulticastMsg instance using the specified properties.
         * @function create
         * @memberof protob.MulticastMsg
         * @static
         * @param {protob.IMulticastMsg=} [properties] Properties to set
         * @returns {protob.MulticastMsg} MulticastMsg instance
         */
        MulticastMsg.create = function create(properties) {
            return new MulticastMsg(properties);
        };

        /**
         * Encodes the specified MulticastMsg message. Does not implicitly {@link protob.MulticastMsg.verify|verify} messages.
         * @function encode
         * @memberof protob.MulticastMsg
         * @static
         * @param {protob.IMulticastMsg} message MulticastMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MulticastMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.route != null && Object.hasOwnProperty.call(message, "route"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.route);
            if (message.uids != null && message.uids.length)
                for (var i = 0; i < message.uids.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.uids[i]);
            if (message.notice != null && Object.hasOwnProperty.call(message, "notice"))
                $root.protob.Notices.encode(message.notice, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MulticastMsg message, length delimited. Does not implicitly {@link protob.MulticastMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protob.MulticastMsg
         * @static
         * @param {protob.IMulticastMsg} message MulticastMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MulticastMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MulticastMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protob.MulticastMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protob.MulticastMsg} MulticastMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MulticastMsg.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protob.MulticastMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.route = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.uids && message.uids.length))
                            message.uids = [];
                        message.uids.push(reader.string());
                        break;
                    }
                case 3: {
                        message.notice = $root.protob.Notices.decode(reader, reader.uint32());
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
         * Decodes a MulticastMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protob.MulticastMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protob.MulticastMsg} MulticastMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MulticastMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MulticastMsg message.
         * @function verify
         * @memberof protob.MulticastMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MulticastMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.route != null && message.hasOwnProperty("route"))
                if (!$util.isString(message.route))
                    return "route: string expected";
            if (message.uids != null && message.hasOwnProperty("uids")) {
                if (!Array.isArray(message.uids))
                    return "uids: array expected";
                for (var i = 0; i < message.uids.length; ++i)
                    if (!$util.isString(message.uids[i]))
                        return "uids: string[] expected";
            }
            if (message.notice != null && message.hasOwnProperty("notice")) {
                var error = $root.protob.Notices.verify(message.notice);
                if (error)
                    return "notice." + error;
            }
            return null;
        };

        /**
         * Creates a MulticastMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protob.MulticastMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protob.MulticastMsg} MulticastMsg
         */
        MulticastMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protob.MulticastMsg)
                return object;
            var message = new $root.protob.MulticastMsg();
            if (object.route != null)
                message.route = String(object.route);
            if (object.uids) {
                if (!Array.isArray(object.uids))
                    throw TypeError(".protob.MulticastMsg.uids: array expected");
                message.uids = [];
                for (var i = 0; i < object.uids.length; ++i)
                    message.uids[i] = String(object.uids[i]);
            }
            if (object.notice != null) {
                if (typeof object.notice !== "object")
                    throw TypeError(".protob.MulticastMsg.notice: object expected");
                message.notice = $root.protob.Notices.fromObject(object.notice);
            }
            return message;
        };

        /**
         * Creates a plain object from a MulticastMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protob.MulticastMsg
         * @static
         * @param {protob.MulticastMsg} message MulticastMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MulticastMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.uids = [];
            if (options.defaults) {
                object.route = "";
                object.notice = null;
            }
            if (message.route != null && message.hasOwnProperty("route"))
                object.route = message.route;
            if (message.uids && message.uids.length) {
                object.uids = [];
                for (var j = 0; j < message.uids.length; ++j)
                    object.uids[j] = message.uids[j];
            }
            if (message.notice != null && message.hasOwnProperty("notice"))
                object.notice = $root.protob.Notices.toObject(message.notice, options);
            return object;
        };

        /**
         * Converts this MulticastMsg to JSON.
         * @function toJSON
         * @memberof protob.MulticastMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MulticastMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MulticastMsg
         * @function getTypeUrl
         * @memberof protob.MulticastMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MulticastMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protob.MulticastMsg";
        };

        return MulticastMsg;
    })();

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
