(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rrule"] = factory();
	else
		root["rrule"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// =============================================================================
// Helper functions
// =============================================================================

Object.defineProperty(exports, "__esModule", { value: true });
exports.isPresent = function (value) {
    return value !== null && value !== undefined;
};
exports.isNumber = function (value) {
    return typeof value === 'number';
};
exports.isArray = Array.isArray;
/**
 * Simplified version of python's range()
 */
exports.range = function (start) {
    var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start;

    if (arguments.length === 1) {
        end = start;
        start = 0;
    }
    var rang = [];
    for (var i = start; i < end; i++) {
        rang.push(i);
    }return rang;
};
exports.clone = function (array) {
    return [].concat(array);
};
exports.repeat = function (value, times) {
    var i = 0;
    var array = [];
    if (exports.isArray(value)) {
        for (; i < times; i++) {
            array[i] = [].concat(value);
        }
    } else {
        for (; i < times; i++) {
            array[i] = value;
        }
    }
    return array;
};
/**
 * Python like split
 */
exports.split = function (str, sep, num) {
    var splits = str.split(sep);
    return num ? splits.slice(0, num).concat([splits.slice(num).join(sep)]) : splits;
};
/**
 * closure/goog/math/math.js:modulo
 * Copyright 2006 The Closure Library Authors.
 * The % operator in JavaScript returns the remainder of a / b, but differs from
 * some other languages in that the result will have the same sign as the
 * dividend. For example, -1 % 8 == -1, whereas in some other languages
 * (such as Python) the result would be 7. This function emulates the more
 * correct modulo behavior, which is useful for certain applications such as
 * calculating an offset index in a circular list.
 *
 * @param {number} a The dividend.
 * @param {number} b The divisor.
 * @return {number} a % b where the result is between 0 and b (either 0 <= x < b
 *     or b < x <= 0, depending on the sign of b).
 */
exports.pymod = function (a, b) {
    var r = a % b;
    // If r and b differ in sign, add b to wrap the result to the correct sign.
    return r * b < 0 ? r + b : r;
};
/**
 * @see: <http://docs.python.org/library/functions.html#divmod>
 */
exports.divmod = function (a, b) {
    return { div: Math.floor(a / b), mod: exports.pymod(a, b) };
};
exports.empty = function (obj) {
    return !exports.isPresent(obj) || obj.length === 0;
};
/**
 * Python-like boolean
 * @return {Boolean} value of an object/primitive, taking into account
 * the fact that in Python an empty list's/tuple's
 * boolean value is False, whereas in JS it's true
 */
exports.notEmpty = function (obj) {
    return !exports.empty(obj);
};
/**
 * Return true if a value is in an array
 */
exports.includes = function (arr, val) {
    return exports.notEmpty(arr) && arr.indexOf(val) !== -1;
};
//# sourceMappingURL=helpers.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(0);
/**
 * General date-related utilities.
 * Also handles several incompatibilities between JavaScript and Python
 *
 */
var dateutil;
(function (dateutil) {
    dateutil.MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    /**
     * Number of milliseconds of one day
     */
    dateutil.ONE_DAY = 1000 * 60 * 60 * 24;
    /**
     * @see: <http://docs.python.org/library/datetime.html#datetime.MAXYEAR>
     */
    dateutil.MAXYEAR = 9999;
    /**
     * Python uses 1-Jan-1 as the base for calculating ordinals but we don't
     * want to confuse the JS engine with milliseconds > Number.MAX_NUMBER,
     * therefore we use 1-Jan-1970 instead
     */
    dateutil.ORDINAL_BASE = new Date(Date.UTC(1970, 0, 1));
    /**
     * Python: MO-SU: 0 - 6
     * JS: SU-SAT 0 - 6
     */
    dateutil.PY_WEEKDAYS = [6, 0, 1, 2, 3, 4, 5];
    /**
     * py_date.timetuple()[7]
     */
    dateutil.getYearDay = function (date) {
        var dateNoTime = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
        return Math.ceil((dateNoTime.valueOf() - new Date(date.getUTCFullYear(), 0, 1).valueOf()) / dateutil.ONE_DAY) + 1;
    };
    dateutil.isLeapYear = function (year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    };
    /**
     * @return {Number} the date's timezone offset in ms
     */
    dateutil.tzOffset = function (date) {
        return date.getTimezoneOffset() * 60 * 1000;
    };
    /**
     * @see: <http://www.mcfedries.com/JavaScript/DaysBetween.asp>
     */
    dateutil.daysBetween = function (date1, date2) {
        // The number of milliseconds in one day
        // Convert both dates to milliseconds
        var date1ms = date1.getTime() - dateutil.tzOffset(date1);
        var date2ms = date2.getTime() - dateutil.tzOffset(date2);
        // Calculate the difference in milliseconds
        var differencems = date1ms - date2ms;
        // Convert back to days and return
        return Math.round(differencems / dateutil.ONE_DAY);
    };
    /**
     * @see: <http://docs.python.org/library/datetime.html#datetime.date.toordinal>
     */
    dateutil.toOrdinal = function (date) {
        return dateutil.daysBetween(date, dateutil.ORDINAL_BASE);
    };
    /**
     * @see - <http://docs.python.org/library/datetime.html#datetime.date.fromordinal>
     */
    dateutil.fromOrdinal = function (ordinal) {
        return new Date(dateutil.ORDINAL_BASE.getTime() + ordinal * dateutil.ONE_DAY);
    };
    dateutil.getMonthDays = function (date) {
        var month = date.getUTCMonth();
        return month === 1 && dateutil.isLeapYear(date.getUTCFullYear()) ? 29 : dateutil.MONTH_DAYS[month];
    };
    /**
     * @return {Number} python-like weekday
     */
    dateutil.getWeekday = function (date) {
        return dateutil.PY_WEEKDAYS[date.getUTCDay()];
    };
    /**
     * @see: <http://docs.python.org/library/calendar.html#calendar.monthrange>
     */
    dateutil.monthRange = function (year, month) {
        var date = new Date(Date.UTC(year, month, 1));
        return [dateutil.getWeekday(date), dateutil.getMonthDays(date)];
    };
    /**
     * @see: <http://docs.python.org/library/datetime.html#datetime.datetime.combine>
     */
    dateutil.combine = function (date, time) {
        time = time || date;
        return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()));
    };
    dateutil.clone = function (date) {
        var dolly = new Date(date.getTime());
        return dolly;
    };
    dateutil.cloneDates = function (dates) {
        var clones = [];
        for (var i = 0; i < dates.length; i++) {
            clones.push(dateutil.clone(dates[i]));
        }
        return clones;
    };
    /**
     * Sorts an array of Date or dateutil.Time objects
     */
    dateutil.sort = function (dates) {
        dates.sort(function (a, b) {
            return a.getTime() - b.getTime();
        });
    };
    dateutil.timeToUntilString = function (time) {
        var comp = void 0;
        var date = new Date(time);
        var comps = [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), 'T', date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), 'Z'];
        for (var i = 0; i < comps.length; i++) {
            comp = comps[i];
            if (!/[TZ]/.test(comp.toString()) && comp < 10) {
                comps[i] = '0' + String(comp);
            }
        }
        return comps.join('');
    };
    dateutil.untilStringToDate = function (until) {
        var re = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
        var bits = re.exec(until);
        if (!bits) throw new Error("Invalid UNTIL value: " + until);
        return new Date(Date.UTC(parseInt(bits[1], 10), parseInt(bits[2], 10) - 1, parseInt(bits[3], 10), parseInt(bits[5], 10) || 0, parseInt(bits[6], 10) || 0, parseInt(bits[7], 10) || 0));
    };

    var Time = function () {
        function Time(hour, minute, second, millisecond) {
            _classCallCheck(this, Time);

            this.hour = hour;
            this.minute = minute;
            this.second = second;
            this.millisecond = millisecond || 0;
        }

        _createClass(Time, [{
            key: "getHours",
            value: function getHours() {
                return this.hour;
            }
        }, {
            key: "getMinutes",
            value: function getMinutes() {
                return this.minute;
            }
        }, {
            key: "getSeconds",
            value: function getSeconds() {
                return this.second;
            }
        }, {
            key: "getMilliseconds",
            value: function getMilliseconds() {
                return this.millisecond;
            }
        }, {
            key: "getTime",
            value: function getTime() {
                return (this.hour * 60 * 60 + this.minute * 60 + this.second) * 1000 + this.millisecond;
            }
        }]);

        return Time;
    }();

    dateutil.Time = Time;

    var DateTime = function (_Time) {
        _inherits(DateTime, _Time);

        function DateTime(year, month, day, hour, minute, second, millisecond) {
            _classCallCheck(this, DateTime);

            var _this = _possibleConstructorReturn(this, (DateTime.__proto__ || Object.getPrototypeOf(DateTime)).call(this, hour, minute, second, millisecond));

            _this.year = year;
            _this.month = month;
            _this.day = day;
            return _this;
        }

        _createClass(DateTime, [{
            key: "getWeekday",
            value: function getWeekday() {
                return dateutil.getWeekday(new Date(this.getTime()));
            }
        }, {
            key: "getTime",
            value: function getTime() {
                return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)).getTime();
            }
        }, {
            key: "getDay",
            value: function getDay() {
                return this.day;
            }
        }, {
            key: "getMonth",
            value: function getMonth() {
                return this.month;
            }
        }, {
            key: "getYear",
            value: function getYear() {
                return this.year;
            }
        }, {
            key: "addYears",
            value: function addYears(years) {
                this.year += years;
            }
        }, {
            key: "addMonths",
            value: function addMonths(months) {
                this.month += months;
                if (this.month > 12) {
                    var yearDiv = Math.floor(this.month / 12);
                    var monthMod = helpers_1.pymod(this.month, 12);
                    this.month = monthMod;
                    this.year += yearDiv;
                    if (this.month === 0) {
                        this.month = 12;
                        --this.year;
                    }
                }
            }
        }, {
            key: "addWeekly",
            value: function addWeekly(days, wkst) {
                if (wkst > this.getWeekday()) {
                    this.day += -(this.getWeekday() + 1 + (6 - wkst)) + days * 7;
                } else {
                    this.day += -(this.getWeekday() - wkst) + days * 7;
                }
                this.fixDay();
            }
        }, {
            key: "addDaily",
            value: function addDaily(days) {
                this.day += days;
                this.fixDay();
            }
        }, {
            key: "addHours",
            value: function addHours(hours, filtered, byhour) {
                var fixday = false;
                if (filtered) {
                    // Jump to one iteration before next day
                    this.hour += Math.floor((23 - this.hour) / hours) * hours;
                }
                while (true) {
                    this.hour += hours;

                    var _helpers_1$divmod = helpers_1.divmod(this.hour, 24),
                        dayDiv = _helpers_1$divmod.div,
                        hourMod = _helpers_1$divmod.mod;

                    if (dayDiv) {
                        this.hour = hourMod;
                        this.addDaily(dayDiv);
                        fixday = true;
                    }
                    if (helpers_1.empty(byhour) || helpers_1.includes(byhour, this.hour)) break;
                }
                return fixday;
            }
        }, {
            key: "addMinutes",
            value: function addMinutes(minutes, filtered, byhour, byminute) {
                var fixday = false;
                if (filtered) {
                    // Jump to one iteration before next day
                    this.minute += Math.floor((1439 - (this.hour * 60 + this.minute)) / minutes) * minutes;
                }
                while (true) {
                    this.minute += minutes;

                    var _helpers_1$divmod2 = helpers_1.divmod(this.minute, 60),
                        hourDiv = _helpers_1$divmod2.div,
                        minuteMod = _helpers_1$divmod2.mod;

                    if (hourDiv) {
                        this.minute = minuteMod;
                        fixday = this.addHours(hourDiv, false, byhour);
                    }
                    if ((helpers_1.empty(byhour) || helpers_1.includes(byhour, this.hour)) && (helpers_1.empty(byminute) || helpers_1.includes(byminute, this.minute))) {
                        break;
                    }
                }
                return fixday;
            }
        }, {
            key: "addSeconds",
            value: function addSeconds(seconds, filtered, byhour, byminute, bysecond) {
                var fixday = false;
                if (filtered) {
                    // Jump to one iteration before next day
                    this.second += Math.floor((86399 - (this.hour * 3600 + this.minute * 60 + this.second)) / seconds) * seconds;
                }
                while (true) {
                    this.second += seconds;

                    var _helpers_1$divmod3 = helpers_1.divmod(this.second, 60),
                        minuteDiv = _helpers_1$divmod3.div,
                        secondMod = _helpers_1$divmod3.mod;

                    if (minuteDiv) {
                        this.second = secondMod;
                        fixday = this.addMinutes(minuteDiv, false, byhour, byminute);
                    }
                    if ((helpers_1.empty(byhour) || helpers_1.includes(byhour, this.hour)) && (helpers_1.empty(byminute) || helpers_1.includes(byminute, this.minute)) && (helpers_1.empty(bysecond) || helpers_1.includes(bysecond, this.second))) {
                        break;
                    }
                }
                return fixday;
            }
        }, {
            key: "fixDay",
            value: function fixDay() {
                if (this.day <= 28) {
                    return;
                }
                var daysinmonth = dateutil.monthRange(this.year, this.month - 1)[1];
                if (this.day <= daysinmonth) {
                    return;
                }
                while (this.day > daysinmonth) {
                    this.day -= daysinmonth;
                    ++this.month;
                    if (this.month === 13) {
                        this.month = 1;
                        ++this.year;
                        if (this.year > dateutil.MAXYEAR) {
                            return;
                        }
                    }
                    daysinmonth = dateutil.monthRange(this.year, this.month - 1)[1];
                }
            }
        }]);

        return DateTime;
    }(Time);

    dateutil.DateTime = DateTime;
})(dateutil = exports.dateutil || (exports.dateutil = {}));
exports.default = dateutil;
//# sourceMappingURL=dateutil.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var dateutil_1 = __webpack_require__(1);
var iterinfo_1 = __webpack_require__(9);
var helpers_1 = __webpack_require__(0);
var iterresult_1 = __webpack_require__(5);
var callbackiterresult_1 = __webpack_require__(11);
var types_1 = __webpack_require__(6);
var parseoptions_1 = __webpack_require__(12);
var parsestring_1 = __webpack_require__(13);
var optionstostring_1 = __webpack_require__(14);
var cache_1 = __webpack_require__(15);
var getnlp = function getnlp() {
    // Lazy, runtime import to avoid circular refs.
    if (!getnlp._nlp) {
        getnlp._nlp = __webpack_require__(16);
    }
    return getnlp._nlp;
};
// =============================================================================
// RRule
// =============================================================================
exports.DEFAULT_OPTIONS = {
    freq: types_1.Frequency.YEARLY,
    dtstart: null,
    interval: 1,
    wkst: types_1.Days.MO,
    count: null,
    until: null,
    bysetpos: null,
    bymonth: null,
    bymonthday: null,
    bynmonthday: null,
    byyearday: null,
    byweekno: null,
    byweekday: null,
    bynweekday: null,
    byhour: null,
    byminute: null,
    bysecond: null,
    byeaster: null
};
exports.defaultKeys = Object.keys(exports.DEFAULT_OPTIONS);
/**
 *
 * @param {Options?} options - see <http://labix.org/python-dateutil/#head-cf004ee9a75592797e076752b2a889c10f445418>
 *        The only required option is `freq`, one of RRule.YEARLY, RRule.MONTHLY, ...
 * @constructor
 */

var RRule = function () {
    function RRule() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var noCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, RRule);

        // RFC string
        this._string = null;
        this._cache = noCache ? null : new cache_1.Cache();
        // used by toString()
        this.origOptions = parseoptions_1.initializeOptions(options);

        var _parseoptions_1$parse = parseoptions_1.parseOptions(options),
            parsedOptions = _parseoptions_1$parse.parsedOptions,
            timeset = _parseoptions_1$parse.timeset;

        this.options = parsedOptions;
        this.timeset = timeset;
    }

    _createClass(RRule, [{
        key: "_cacheGet",
        value: function _cacheGet(what, args) {
            if (!this._cache) return false;
            return this._cache._cacheGet(what, args);
        }
    }, {
        key: "_cacheAdd",
        value: function _cacheAdd(what, value, args) {
            if (!this._cache) return;
            return this._cache._cacheAdd(what, value, args);
        }
        /**
         * @param {Function} iterator - optional function that will be called
         *                   on each date that is added. It can return false
         *                   to stop the iteration.
         * @return Array containing all recurrences.
         */

    }, {
        key: "all",
        value: function all(iterator) {
            if (iterator) {
                return this._iter(new callbackiterresult_1.default('all', {}, iterator));
            } else {
                var result = this._cacheGet('all');
                if (result === false) {
                    result = this._iter(new iterresult_1.default('all', {}));
                    this._cacheAdd('all', result);
                }
                return result;
            }
        }
        /**
         * Returns all the occurrences of the rrule between after and before.
         * The inc keyword defines what happens if after and/or before are
         * themselves occurrences. With inc == True, they will be included in the
         * list, if they are found in the recurrence set.
         * @return Array
         */

    }, {
        key: "between",
        value: function between(after, before) {
            var inc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var iterator = arguments[3];

            var args = {
                before: before,
                after: after,
                inc: inc
            };
            if (iterator) {
                return this._iter(new callbackiterresult_1.default('between', args, iterator));
            }
            var result = this._cacheGet('between', args);
            if (result === false) {
                result = this._iter(new iterresult_1.default('between', args));
                this._cacheAdd('between', result, args);
            }
            return result;
        }
        /**
         * Returns the last recurrence before the given datetime instance.
         * The inc keyword defines what happens if dt is an occurrence.
         * With inc == True, if dt itself is an occurrence, it will be returned.
         * @return Date or null
         */

    }, {
        key: "before",
        value: function before(dt) {
            var inc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var args = { dt: dt, inc: inc };
            var result = this._cacheGet('before', args);
            if (result === false) {
                result = this._iter(new iterresult_1.default('before', args));
                this._cacheAdd('before', result, args);
            }
            return result;
        }
        /**
         * Returns the first recurrence after the given datetime instance.
         * The inc keyword defines what happens if dt is an occurrence.
         * With inc == True, if dt itself is an occurrence, it will be returned.
         * @return Date or null
         */

    }, {
        key: "after",
        value: function after(dt) {
            var inc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var args = { dt: dt, inc: inc };
            var result = this._cacheGet('after', args);
            if (result === false) {
                result = this._iter(new iterresult_1.default('after', args));
                this._cacheAdd('after', result, args);
            }
            return result;
        }
        /**
         * Returns the number of recurrences in this set. It will have go trough
         * the whole recurrence, if this hasn't been done before.
         */

    }, {
        key: "count",
        value: function count() {
            return this.all().length;
        }
        /**
         * Converts the rrule into its string representation
         * @see <http://www.ietf.org/rfc/rfc2445.txt>
         * @return String
         */

    }, {
        key: "toString",
        value: function toString() {
            return optionstostring_1.optionsToString(this.origOptions);
        }
        /**
         * Will convert all rules described in nlp:ToText
         * to text.
         */

    }, {
        key: "toText",
        value: function toText(gettext, language) {
            return getnlp().toText(this, gettext, language);
        }
    }, {
        key: "isFullyConvertibleToText",
        value: function isFullyConvertibleToText() {
            return getnlp().isFullyConvertible(this);
        }
        /**
         * @return a RRule instance with the same freq and options
         *          as this one (cache is not cloned)
         */

    }, {
        key: "clone",
        value: function clone() {
            return new RRule(this.origOptions);
        }
    }, {
        key: "_iter",
        value: function _iter(iterResult) {
            var _RRule$YEARLY$RRule$M;

            /* Since JavaScript doesn't have the python's yield operator (<1.7),
                we use the IterResult object that tells us when to stop iterating.
                 */
            var dtstart = this.options.dtstart;
            var date = new dateutil_1.default.DateTime(dtstart.getUTCFullYear(), dtstart.getUTCMonth() + 1, dtstart.getUTCDate(), dtstart.getUTCHours(), dtstart.getUTCMinutes(), dtstart.getUTCSeconds(), dtstart.valueOf() % 1000);
            // Some local variables to speed things up a bit
            var _options = this.options,
                freq = _options.freq,
                interval = _options.interval,
                wkst = _options.wkst,
                until = _options.until,
                bymonth = _options.bymonth,
                byweekno = _options.byweekno,
                byyearday = _options.byyearday,
                byweekday = _options.byweekday,
                byeaster = _options.byeaster,
                bymonthday = _options.bymonthday,
                bynmonthday = _options.bynmonthday,
                bysetpos = _options.bysetpos,
                byhour = _options.byhour,
                byminute = _options.byminute,
                bysecond = _options.bysecond;

            var ii = new iterinfo_1.default(this);
            ii.rebuild(date.year, date.month);
            var getdayset = (_RRule$YEARLY$RRule$M = {}, _defineProperty(_RRule$YEARLY$RRule$M, RRule.YEARLY, ii.ydayset), _defineProperty(_RRule$YEARLY$RRule$M, RRule.MONTHLY, ii.mdayset), _defineProperty(_RRule$YEARLY$RRule$M, RRule.WEEKLY, ii.wdayset), _defineProperty(_RRule$YEARLY$RRule$M, RRule.DAILY, ii.ddayset), _defineProperty(_RRule$YEARLY$RRule$M, RRule.HOURLY, ii.ddayset), _defineProperty(_RRule$YEARLY$RRule$M, RRule.MINUTELY, ii.ddayset), _defineProperty(_RRule$YEARLY$RRule$M, RRule.SECONDLY, ii.ddayset), _RRule$YEARLY$RRule$M)[freq];
            var timeset = void 0;
            var gettimeset = void 0;
            if (freq < RRule.HOURLY) {
                timeset = this.timeset;
            } else {
                var _RRule$HOURLY$RRule$M;

                gettimeset = (_RRule$HOURLY$RRule$M = {}, _defineProperty(_RRule$HOURLY$RRule$M, RRule.HOURLY, ii.htimeset), _defineProperty(_RRule$HOURLY$RRule$M, RRule.MINUTELY, ii.mtimeset), _defineProperty(_RRule$HOURLY$RRule$M, RRule.SECONDLY, ii.stimeset), _RRule$HOURLY$RRule$M)[freq];
                if (freq >= RRule.HOURLY && helpers_1.notEmpty(byhour) && !helpers_1.includes(byhour, date.hour) || freq >= RRule.MINUTELY && helpers_1.notEmpty(byminute) && !helpers_1.includes(byminute, date.minute) || freq >= RRule.SECONDLY && helpers_1.notEmpty(bysecond) && !helpers_1.includes(bysecond, date.second)) {
                    timeset = [];
                } else {
                    timeset = gettimeset.call(ii, date.hour, date.minute, date.second, date.millisecond);
                }
            }
            var currentDay = void 0;
            var count = this.options.count;
            var pos = void 0;
            while (true) {
                // Get dayset with the right frequency
                var _getdayset$call = getdayset.call(ii, date.year, date.month, date.day),
                    _getdayset$call2 = _slicedToArray(_getdayset$call, 3),
                    dayset = _getdayset$call2[0],
                    start = _getdayset$call2[1],
                    end = _getdayset$call2[2];
                // Do the "hard" work ;-)


                var filtered = false;
                for (var dayCounter = start; dayCounter < end; dayCounter++) {
                    currentDay = dayset[dayCounter];
                    filtered = isFiltered(bymonth, ii, currentDay, byweekno, byweekday, byeaster, bymonthday, bynmonthday, byyearday);
                    if (filtered) dayset[currentDay] = null;
                }
                // Output results
                if (helpers_1.notEmpty(bysetpos) && helpers_1.notEmpty(timeset)) {
                    var daypos = void 0;
                    var timepos = void 0;
                    var poslist = [];
                    for (var j = 0; j < bysetpos.length; j++) {
                        pos = bysetpos[j];
                        if (pos < 0) {
                            daypos = Math.floor(pos / timeset.length);
                            timepos = helpers_1.pymod(pos, timeset.length);
                        } else {
                            daypos = Math.floor((pos - 1) / timeset.length);
                            timepos = helpers_1.pymod(pos - 1, timeset.length);
                        }
                        var tmp = [];
                        for (var k = start; k < end; k++) {
                            var val = dayset[k];
                            if (!helpers_1.isPresent(val)) continue;
                            tmp.push(val);
                        }
                        var i = void 0;
                        if (daypos < 0) {
                            // we're trying to emulate python's aList[-n]
                            i = tmp.slice(daypos)[0];
                        } else {
                            i = tmp[daypos];
                        }
                        var time = timeset[timepos];
                        var _date = dateutil_1.default.fromOrdinal(ii.yearordinal + i);
                        var res = dateutil_1.default.combine(_date, time);
                        // XXX: can this ever be in the array?
                        // - compare the actual date instead?
                        if (!helpers_1.includes(poslist, res)) poslist.push(res);
                    }
                    dateutil_1.default.sort(poslist);
                    for (var _j = 0; _j < poslist.length; _j++) {
                        var _res = poslist[_j];
                        if (until && _res > until) {
                            return this.emitResult(iterResult);
                        }
                        if (_res >= dtstart) {
                            if (!iterResult.accept(_res)) {
                                return this.emitResult(iterResult);
                            }
                            if (count) {
                                --count;
                                if (!count) {
                                    return this.emitResult(iterResult);
                                }
                            }
                        }
                    }
                } else {
                    for (var _j2 = start; _j2 < end; _j2++) {
                        currentDay = dayset[_j2];
                        if (!helpers_1.isPresent(currentDay)) {
                            continue;
                        }
                        var _date2 = dateutil_1.default.fromOrdinal(ii.yearordinal + currentDay);
                        for (var _k = 0; _k < timeset.length; _k++) {
                            var _time = timeset[_k];
                            var _res2 = dateutil_1.default.combine(_date2, _time);
                            if (until && _res2 > until) {
                                return this.emitResult(iterResult);
                            }
                            if (_res2 >= dtstart) {
                                if (!iterResult.accept(_res2)) {
                                    return this.emitResult(iterResult);
                                }
                                if (count) {
                                    --count;
                                    if (!count) {
                                        return this.emitResult(iterResult);
                                    }
                                }
                            }
                        }
                    }
                }
                // Handle frequency and interval
                if (freq === RRule.YEARLY) {
                    date.addYears(interval);
                } else if (freq === RRule.MONTHLY) {
                    date.addMonths(interval);
                } else if (freq === RRule.WEEKLY) {
                    date.addWeekly(interval, wkst);
                } else if (freq === RRule.DAILY) {
                    date.addDaily(interval);
                } else if (freq === RRule.HOURLY) {
                    date.addHours(interval, filtered, byhour);
                    // @ts-ignore
                    timeset = gettimeset.call(ii, date.hour, date.minute, date.second);
                } else if (freq === RRule.MINUTELY) {
                    if (date.addMinutes(interval, filtered, byhour, byminute)) {
                        filtered = false;
                    }
                    // @ts-ignore
                    timeset = gettimeset.call(ii, date.hour, date.minute, date.second);
                } else if (freq === RRule.SECONDLY) {
                    if (date.addSeconds(interval, filtered, byhour, byminute, bysecond)) {
                        filtered = false;
                    }
                    // @ts-ignore
                    timeset = gettimeset.call(ii, date.hour, date.minute, date.second);
                }
                if (date.year > dateutil_1.default.MAXYEAR) {
                    return this.emitResult(iterResult);
                }
                ii.rebuild(date.year, date.month);
            }
        }
    }, {
        key: "emitResult",
        value: function emitResult(iterResult) {
            this._len = iterResult.total;
            return iterResult.getValue();
        }
    }], [{
        key: "parseText",
        value: function parseText(text, language) {
            return getnlp().parseText(text, language);
        }
    }, {
        key: "fromText",
        value: function fromText(text, language) {
            return getnlp().fromText(text, language);
        }
    }, {
        key: "fromString",
        value: function fromString(str) {
            return new RRule(RRule.parseString(str) || undefined);
        }
    }]);

    return RRule;
}();
// RRule class 'constants'


RRule.FREQUENCIES = ['YEARLY', 'MONTHLY', 'WEEKLY', 'DAILY', 'HOURLY', 'MINUTELY', 'SECONDLY'];
RRule.YEARLY = types_1.Frequency.YEARLY;
RRule.MONTHLY = types_1.Frequency.MONTHLY;
RRule.WEEKLY = types_1.Frequency.WEEKLY;
RRule.DAILY = types_1.Frequency.DAILY;
RRule.HOURLY = types_1.Frequency.HOURLY;
RRule.MINUTELY = types_1.Frequency.MINUTELY;
RRule.SECONDLY = types_1.Frequency.SECONDLY;
RRule.MO = types_1.Days.MO;
RRule.TU = types_1.Days.TU;
RRule.WE = types_1.Days.WE;
RRule.TH = types_1.Days.TH;
RRule.FR = types_1.Days.FR;
RRule.SA = types_1.Days.SA;
RRule.SU = types_1.Days.SU;
RRule.parseString = parsestring_1.parseString;
RRule.optionsToString = optionstostring_1.optionsToString;
exports.default = RRule;
function isFiltered(bymonth, ii, currentDay, byweekno, byweekday, byeaster, bymonthday, bynmonthday, byyearday) {
    return helpers_1.notEmpty(bymonth) && !helpers_1.includes(bymonth, ii.mmask[currentDay]) || helpers_1.notEmpty(byweekno) && !ii.wnomask[currentDay] || helpers_1.notEmpty(byweekday) && !helpers_1.includes(byweekday, ii.wdaymask[currentDay]) || helpers_1.notEmpty(ii.nwdaymask) && !ii.nwdaymask[currentDay] || byeaster !== null && !helpers_1.includes(ii.eastermask, currentDay) || (helpers_1.notEmpty(bymonthday) || helpers_1.notEmpty(bynmonthday)) && !helpers_1.includes(bymonthday, ii.mdaymask[currentDay]) && !helpers_1.includes(bynmonthday, ii.nmdaymask[currentDay]) || helpers_1.notEmpty(byyearday) && (currentDay < ii.yearlen && !helpers_1.includes(byyearday, currentDay + 1) && !helpers_1.includes(byyearday, -ii.yearlen + currentDay) || currentDay >= ii.yearlen && !helpers_1.includes(byyearday, currentDay + 1 - ii.yearlen) && !helpers_1.includes(byyearday, -ii.nextyearlen + currentDay - ii.yearlen));
}
//# sourceMappingURL=rrule.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var WDAYS = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
// =============================================================================
// Weekday
// =============================================================================

var Weekday = function () {
    function Weekday(weekday, n) {
        _classCallCheck(this, Weekday);

        if (n === 0) throw new Error("Can't create weekday with n == 0");
        this.weekday = weekday;
        this.n = n;
    }
    // __call__ - Cannot call the object directly, do it through
    // e.g. RRule.TH.nth(-1) instead,


    _createClass(Weekday, [{
        key: "nth",
        value: function nth(n) {
            return this.n === n ? this : new Weekday(this.weekday, n);
        }
        // __eq__

    }, {
        key: "equals",
        value: function equals(other) {
            return this.weekday === other.weekday && this.n === other.n;
        }
        // __repr__

    }, {
        key: "toString",
        value: function toString() {
            var s = WDAYS[this.weekday];
            if (this.n) s = (this.n > 0 ? '+' : '') + String(this.n) + s;
            return s;
        }
    }, {
        key: "getJsWeekday",
        value: function getJsWeekday() {
            return this.weekday === 6 ? 0 : this.weekday + 1;
        }
    }]);

    return Weekday;
}();

exports.default = Weekday;
//# sourceMappingURL=weekday.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * rrule.js - Library for working with recurrence rules for calendar dates.
 * https://github.com/jakubroztocil/rrule
 *
 * Copyright 2010, Jakub Roztocil and Lars Schoning
 * Licenced under the BSD licence.
 * https://github.com/jakubroztocil/rrule/blob/master/LICENCE
 *
 * Based on:
 * python-dateutil - Extensions to the standard Python datetime module.
 * Copyright (c) 2003-2011 - Gustavo Niemeyer <gustavo@niemeyer.net>
 * Copyright (c) 2012 - Tomi Pieviläinen <tomi.pievilainen@iki.fi>
 * https://github.com/jakubroztocil/rrule/blob/master/LICENCE
 *
 */

Object.defineProperty(exports, "__esModule", { value: true });
var rrule_1 = __webpack_require__(2);
exports.RRule = rrule_1.default;
var rruleset_1 = __webpack_require__(8);
exports.RRuleSet = rruleset_1.default;
var rrulestr_1 = __webpack_require__(19);
var types_1 = __webpack_require__(6);
exports.Frequency = types_1.Frequency;
var weekday_1 = __webpack_require__(3);
exports.Weekday = weekday_1.default;
// =============================================================================
// Export
// =============================================================================
// Only one RRuleStr instance for all rrule string parsing work.
var rruleStr = new rrulestr_1.default();
var rrulestr = function rrulestr() {
  return rruleStr.parse.apply(rruleStr, arguments);
};
exports.rrulestr = rrulestr;
exports.default = rrule_1.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class helps us to emulate python's generators, sorta.
 */

var IterResult = function () {
    function IterResult(method, args) {
        _classCallCheck(this, IterResult);

        this.minDate = null;
        this.maxDate = null;
        this._result = [];
        this.total = 0;
        this.method = method;
        this.args = args;
        if (method === 'between') {
            this.maxDate = args.inc ? args.before : new Date(args.before.getTime() - 1);
            this.minDate = args.inc ? args.after : new Date(args.after.getTime() + 1);
        } else if (method === 'before') {
            this.maxDate = args.inc ? args.dt : new Date(args.dt.getTime() - 1);
        } else if (method === 'after') {
            this.minDate = args.inc ? args.dt : new Date(args.dt.getTime() + 1);
        }
    }
    /**
     * Possibly adds a date into the result.
     *
     * @param {Date} date - the date isn't necessarly added to the result
     *                      list (if it is too late/too early)
     * @return {Boolean} true if it makes sense to continue the iteration
     *                   false if we're done.
     */


    _createClass(IterResult, [{
        key: "accept",
        value: function accept(date) {
            ++this.total;
            var tooEarly = this.minDate && date < this.minDate;
            var tooLate = this.maxDate && date > this.maxDate;
            if (this.method === 'between') {
                if (tooEarly) return true;
                if (tooLate) return false;
            } else if (this.method === 'before') {
                if (tooLate) return false;
            } else if (this.method === 'after') {
                if (tooEarly) return true;
                this.add(date);
                return false;
            }
            return this.add(date);
        }
        /**
         *
         * @param {Date} date that is part of the result.
         * @return {Boolean} whether we are interested in more values.
         */

    }, {
        key: "add",
        value: function add(date) {
            this._result.push(date);
            return true;
        }
        /**
         * 'before' and 'after' return only one date, whereas 'all'
         * and 'between' an array.
         * @return {Date,Array?}
         */

    }, {
        key: "getValue",
        value: function getValue() {
            var res = this._result;
            switch (this.method) {
                case 'all':
                case 'between':
                    return res;
                case 'before':
                case 'after':
                    return res.length ? res[res.length - 1] : null;
            }
        }
    }, {
        key: "clone",
        value: function clone() {
            return new IterResult(this.method, this.args);
        }
    }]);

    return IterResult;
}();

exports.default = IterResult;
//# sourceMappingURL=iterresult.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var weekday_1 = __webpack_require__(3);
var Frequency;
(function (Frequency) {
    Frequency[Frequency["YEARLY"] = 0] = "YEARLY";
    Frequency[Frequency["MONTHLY"] = 1] = "MONTHLY";
    Frequency[Frequency["WEEKLY"] = 2] = "WEEKLY";
    Frequency[Frequency["DAILY"] = 3] = "DAILY";
    Frequency[Frequency["HOURLY"] = 4] = "HOURLY";
    Frequency[Frequency["MINUTELY"] = 5] = "MINUTELY";
    Frequency[Frequency["SECONDLY"] = 6] = "SECONDLY";
})(Frequency = exports.Frequency || (exports.Frequency = {}));
exports.Days = {
    MO: new weekday_1.default(0),
    TU: new weekday_1.default(1),
    WE: new weekday_1.default(2),
    TH: new weekday_1.default(3),
    FR: new weekday_1.default(4),
    SA: new weekday_1.default(5),
    SU: new weekday_1.default(6)
};
//# sourceMappingURL=types.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// =============================================================================
// i18n
// =============================================================================

Object.defineProperty(exports, "__esModule", { value: true });
var ENGLISH = {
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    tokens: {
        'SKIP': /^[ \r\n\t]+|^\.$/,
        'number': /^[1-9][0-9]*/,
        'numberAsText': /^(one|two|three)/i,
        'every': /^every/i,
        'day(s)': /^days?/i,
        'weekday(s)': /^weekdays?/i,
        'week(s)': /^weeks?/i,
        'hour(s)': /^hours?/i,
        'minute(s)': /^minutes?/i,
        'month(s)': /^months?/i,
        'year(s)': /^years?/i,
        'on': /^(on|in)/i,
        'at': /^(at)/i,
        'the': /^the/i,
        'first': /^first/i,
        'second': /^second/i,
        'third': /^third/i,
        'nth': /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
        'last': /^last/i,
        'for': /^for/i,
        'time(s)': /^times?/i,
        'until': /^(un)?til/i,
        'monday': /^mo(n(day)?)?/i,
        'tuesday': /^tu(e(s(day)?)?)?/i,
        'wednesday': /^we(d(n(esday)?)?)?/i,
        'thursday': /^th(u(r(sday)?)?)?/i,
        'friday': /^fr(i(day)?)?/i,
        'saturday': /^sa(t(urday)?)?/i,
        'sunday': /^su(n(day)?)?/i,
        'january': /^jan(uary)?/i,
        'february': /^feb(ruary)?/i,
        'march': /^mar(ch)?/i,
        'april': /^apr(il)?/i,
        'may': /^may/i,
        'june': /^june?/i,
        'july': /^july?/i,
        'august': /^aug(ust)?/i,
        'september': /^sep(t(ember)?)?/i,
        'october': /^oct(ober)?/i,
        'november': /^nov(ember)?/i,
        'december': /^dec(ember)?/i,
        'comma': /^(,\s*|(and|or)\s*)+/i
    }
};
exports.default = ENGLISH;
//# sourceMappingURL=i18n.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var rrule_1 = __webpack_require__(2);
var dateutil_1 = __webpack_require__(1);
var helpers_1 = __webpack_require__(0);
/**
 *
 * @param {Boolean?} noCache
 *  The same stratagy as RRule on cache, default to false
 * @constructor
 */

var RRuleSet = function (_rrule_1$default) {
    _inherits(RRuleSet, _rrule_1$default);

    function RRuleSet() {
        var noCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _classCallCheck(this, RRuleSet);

        var _this = _possibleConstructorReturn(this, (RRuleSet.__proto__ || Object.getPrototypeOf(RRuleSet)).call(this, {}, noCache));

        _this._rrule = [];
        _this._rdate = [];
        _this._exrule = [];
        _this._exdate = [];
        return _this;
    }
    /**
     * Adds an RRule to the set
     *
     * @param {RRule}
     */


    _createClass(RRuleSet, [{
        key: "rrule",
        value: function rrule(_rrule) {
            if (!(_rrule instanceof rrule_1.default)) {
                throw new TypeError(String(_rrule) + ' is not RRule instance');
            }
            if (!helpers_1.includes(this._rrule.map(String), String(_rrule))) {
                this._rrule.push(_rrule);
            }
        }
        /**
         * Adds an RDate to the set
         *
         * @param {Date}
         */

    }, {
        key: "rdate",
        value: function rdate(date) {
            if (!(date instanceof Date)) {
                throw new TypeError(String(date) + ' is not Date instance');
            }
            if (!helpers_1.includes(this._rdate.map(Number), Number(date))) {
                this._rdate.push(date);
                dateutil_1.default.sort(this._rdate);
            }
        }
        /**
         * Adds an EXRULE to the set
         *
         * @param {RRule}
         */

    }, {
        key: "exrule",
        value: function exrule(rrule) {
            if (!(rrule instanceof rrule_1.default)) {
                throw new TypeError(String(rrule) + ' is not RRule instance');
            }
            if (!helpers_1.includes(this._exrule.map(String), String(rrule))) {
                this._exrule.push(rrule);
            }
        }
        /**
         * Adds an EXDATE to the set
         *
         * @param {Date}
         */

    }, {
        key: "exdate",
        value: function exdate(date) {
            if (!(date instanceof Date)) {
                throw new TypeError(String(date) + ' is not Date instance');
            }
            if (!helpers_1.includes(this._exdate.map(Number), Number(date))) {
                this._exdate.push(date);
                dateutil_1.default.sort(this._exdate);
            }
        }
    }, {
        key: "valueOf",
        value: function valueOf() {
            var result = [];
            if (this._rrule.length) {
                this._rrule.forEach(function (rrule) {
                    result.push('RRULE:' + rrule);
                });
            }
            if (this._rdate.length) {
                result.push('RDATE:' + this._rdate.map(function (rdate) {
                    return dateutil_1.default.timeToUntilString(rdate.valueOf());
                }).join(','));
            }
            if (this._exrule.length) {
                this._exrule.forEach(function (exrule) {
                    result.push('EXRULE:' + exrule);
                });
            }
            if (this._exdate.length) {
                result.push('EXDATE:' + this._exdate.map(function (exdate) {
                    return dateutil_1.default.timeToUntilString(exdate.valueOf());
                }).join(','));
            }
            return result;
        }
        /**
         * to generate recurrence field sush as:
         *   ["RRULE:FREQ=YEARLY;COUNT=2;BYDAY=TU;DTSTART=19970902T010000Z","RRULE:FREQ=YEARLY;COUNT=1;BYDAY=TH;DTSTART=19970902T010000Z"]
         */

    }, {
        key: "toString",
        value: function toString() {
            return JSON.stringify(this.valueOf());
        }
    }, {
        key: "_iter",
        value: function _iter(iterResult) {
            var _exdateHash = {};
            var _exrule = this._exrule;
            var _accept = iterResult.accept;
            function evalExdate(after, before) {
                _exrule.forEach(function (rrule) {
                    rrule.between(after, before, true).forEach(function (date) {
                        _exdateHash[Number(date)] = true;
                    });
                });
            }
            this._exdate.forEach(function (date) {
                _exdateHash[Number(date)] = true;
            });
            iterResult.accept = function (date) {
                var dt = Number(date);
                if (!_exdateHash[dt]) {
                    evalExdate(new Date(dt - 1), new Date(dt + 1));
                    if (!_exdateHash[dt]) {
                        _exdateHash[dt] = true;
                        return _accept.call(this, date);
                    }
                }
                return true;
            };
            if (iterResult.method === 'between') {
                evalExdate(iterResult.args.after, iterResult.args.before);
                iterResult.accept = function (date) {
                    var dt = Number(date);
                    if (!_exdateHash[dt]) {
                        _exdateHash[dt] = true;
                        return _accept.call(this, date);
                    }
                    return true;
                };
            }
            for (var i = 0; i < this._rdate.length; i++) {
                if (!iterResult.accept(new Date(this._rdate[i].valueOf()))) break;
            }
            this._rrule.forEach(function (rrule) {
                rrule._iter(iterResult);
            });
            var res = iterResult._result;
            dateutil_1.default.sort(res);
            switch (iterResult.method) {
                case 'all':
                case 'between':
                    return res;
                case 'before':
                    return res.length && res[res.length - 1] || null;
                case 'after':
                    return res.length && res[0] || null;
                default:
                    return null;
            }
        }
        /**
         * Create a new RRuleSet Object completely base on current instance
         */

    }, {
        key: "clone",
        value: function clone() {
            var rrs = new RRuleSet(!!this._cache);
            var i = void 0;
            for (i = 0; i < this._rrule.length; i++) {
                rrs.rrule(this._rrule[i].clone());
            }
            for (i = 0; i < this._rdate.length; i++) {
                rrs.rdate(new Date(this._rdate[i].valueOf()));
            }
            for (i = 0; i < this._exrule.length; i++) {
                rrs.exrule(this._exrule[i].clone());
            }
            for (i = 0; i < this._exdate.length; i++) {
                rrs.exdate(new Date(this._exdate[i].valueOf()));
            }
            return rrs;
        }
    }]);

    return RRuleSet;
}(rrule_1.default);

exports.default = RRuleSet;
//# sourceMappingURL=rruleset.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var masks_1 = __webpack_require__(10);
var rrule_1 = __webpack_require__(2);
var dateutil_1 = __webpack_require__(1);
var helpers_1 = __webpack_require__(0);
// =============================================================================
// Iterinfo
// =============================================================================

var Iterinfo = function () {
    function Iterinfo(rrule) {
        _classCallCheck(this, Iterinfo);

        this.yearlen = 365;
        this.nextyearlen = 365;
        this.rrule = rrule;
        this.mmask = null;
        this.mrange = null;
        this.mdaymask = null;
        this.nmdaymask = null;
        this.wdaymask = null;
        this.wnomask = null;
        this.nwdaymask = null;
        this.eastermask = null;
    }

    _createClass(Iterinfo, [{
        key: "easter",
        value: function easter(y) {
            var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var a = y % 19;
            var b = Math.floor(y / 100);
            var c = y % 100;
            var d = Math.floor(b / 4);
            var e = b % 4;
            var f = Math.floor((b + 8) / 25);
            var g = Math.floor((b - f + 1) / 3);
            var h = Math.floor(19 * a + b - d - g + 15) % 30;
            var i = Math.floor(c / 4);
            var k = c % 4;
            var l = Math.floor(32 + 2 * e + 2 * i - h - k) % 7;
            var m = Math.floor((a + 11 * h + 22 * l) / 451);
            var month = Math.floor((h + l - 7 * m + 114) / 31);
            var day = (h + l - 7 * m + 114) % 31 + 1;
            var date = Date.UTC(y, month - 1, day + offset);
            var yearStart = Date.UTC(y, 0, 1);
            return [Math.ceil((date - yearStart) / (1000 * 60 * 60 * 24))];
        }
    }, {
        key: "rebuild",
        value: function rebuild(year, month) {
            var rr = this.rrule;
            if (year !== this.lastyear) {
                this.rebuildYear(year);
            }
            if (helpers_1.notEmpty(rr.options.bynweekday) && (month !== this.lastmonth || year !== this.lastyear)) {
                this.rebuildMonth(year, month);
            }
            if (helpers_1.isPresent(rr.options.byeaster)) {
                this.eastermask = this.easter(year, rr.options.byeaster);
            }
        }
    }, {
        key: "rebuildYear",
        value: function rebuildYear(year) {
            var rr = this.rrule;
            this.yearlen = dateutil_1.default.isLeapYear(year) ? 366 : 365;
            this.nextyearlen = dateutil_1.default.isLeapYear(year + 1) ? 366 : 365;
            var firstyday = new Date(Date.UTC(year, 0, 1));
            this.yearordinal = dateutil_1.default.toOrdinal(firstyday);
            this.yearweekday = dateutil_1.default.getWeekday(firstyday);
            var wday = dateutil_1.default.getWeekday(firstyday);
            if (this.yearlen === 365) {
                this.mmask = masks_1.M365MASK;
                this.mdaymask = masks_1.MDAY365MASK;
                this.nmdaymask = masks_1.NMDAY365MASK;
                this.wdaymask = masks_1.WDAYMASK.slice(wday);
                this.mrange = masks_1.M365RANGE;
            } else {
                this.mmask = masks_1.M366MASK;
                this.mdaymask = masks_1.MDAY366MASK;
                this.nmdaymask = masks_1.NMDAY366MASK;
                this.wdaymask = masks_1.WDAYMASK.slice(wday);
                this.mrange = masks_1.M366RANGE;
            }
            if (helpers_1.empty(rr.options.byweekno)) {
                this.wnomask = null;
            } else {
                this.wnomask = helpers_1.repeat(0, this.yearlen + 7);
                var no1wkst = void 0;
                var firstwkst = void 0;
                var wyearlen = void 0;
                no1wkst = firstwkst = helpers_1.pymod(7 - this.yearweekday + rr.options.wkst, 7);
                if (no1wkst >= 4) {
                    no1wkst = 0;
                    // Number of days in the year, plus the days we got
                    // from last year.
                    wyearlen = this.yearlen + helpers_1.pymod(this.yearweekday - rr.options.wkst, 7);
                } else {
                    // Number of days in the year, minus the days we
                    // left in last year.
                    wyearlen = this.yearlen - no1wkst;
                }
                var div = Math.floor(wyearlen / 7);
                var mod = helpers_1.pymod(wyearlen, 7);
                var numweeks = Math.floor(div + mod / 4);
                for (var j = 0; j < rr.options.byweekno.length; j++) {
                    var i = void 0;
                    var n = rr.options.byweekno[j];
                    if (n < 0) {
                        n += numweeks + 1;
                    }
                    if (!(n > 0 && n <= numweeks)) {
                        continue;
                    }
                    if (n > 1) {
                        i = no1wkst + (n - 1) * 7;
                        if (no1wkst !== firstwkst) {
                            i -= 7 - firstwkst;
                        }
                    } else {
                        i = no1wkst;
                    }
                    for (var k = 0; k < 7; k++) {
                        this.wnomask[i] = 1;
                        i++;
                        if (this.wdaymask[i] === rr.options.wkst) break;
                    }
                }
                if (helpers_1.includes(rr.options.byweekno, 1)) {
                    // Check week number 1 of next year as well
                    // orig-TODO : Check -numweeks for next year.
                    var _i = no1wkst + numweeks * 7;
                    if (no1wkst !== firstwkst) _i -= 7 - firstwkst;
                    if (_i < this.yearlen) {
                        // If week starts in next year, we
                        // don't care about it.
                        for (var _j = 0; _j < 7; _j++) {
                            this.wnomask[_i] = 1;
                            _i += 1;
                            if (this.wdaymask[_i] === rr.options.wkst) break;
                        }
                    }
                }
                if (no1wkst) {
                    // Check last week number of last year as
                    // well. If no1wkst is 0, either the year
                    // started on week start, or week number 1
                    // got days from last year, so there are no
                    // days from last year's last week number in
                    // this year.
                    var lnumweeks = void 0;
                    if (!helpers_1.includes(rr.options.byweekno, -1)) {
                        var lyearweekday = dateutil_1.default.getWeekday(new Date(Date.UTC(year - 1, 0, 1)));
                        var lno1wkst = helpers_1.pymod(7 - lyearweekday.valueOf() + rr.options.wkst, 7);
                        var lyearlen = dateutil_1.default.isLeapYear(year - 1) ? 366 : 365;
                        if (lno1wkst >= 4) {
                            lno1wkst = 0;
                            lnumweeks = Math.floor(52 + helpers_1.pymod(lyearlen + helpers_1.pymod(lyearweekday - rr.options.wkst, 7), 7) / 4);
                        } else {
                            lnumweeks = Math.floor(52 + helpers_1.pymod(this.yearlen - no1wkst, 7) / 4);
                        }
                    } else {
                        lnumweeks = -1;
                    }
                    if (helpers_1.includes(rr.options.byweekno, lnumweeks)) {
                        for (var _i2 = 0; _i2 < no1wkst; _i2++) {
                            this.wnomask[_i2] = 1;
                        }
                    }
                }
            }
        }
    }, {
        key: "rebuildMonth",
        value: function rebuildMonth(year, month) {
            var rr = this.rrule;
            var ranges = [];
            if (rr.options.freq === rrule_1.default.YEARLY) {
                if (helpers_1.notEmpty(rr.options.bymonth)) {
                    for (var j = 0; j < rr.options.bymonth.length; j++) {
                        month = rr.options.bymonth[j];
                        ranges.push(this.mrange.slice(month - 1, month + 1));
                    }
                } else {
                    ranges = [[0, this.yearlen]];
                }
            } else if (rr.options.freq === rrule_1.default.MONTHLY) {
                ranges = [this.mrange.slice(month - 1, month + 1)];
            }
            if (helpers_1.notEmpty(ranges)) {
                // Weekly frequency won't get here, so we may not
                // care about cross-year weekly periods.
                this.nwdaymask = helpers_1.repeat(0, this.yearlen);
                for (var _j2 = 0; _j2 < ranges.length; _j2++) {
                    var rang = ranges[_j2];
                    var first = rang[0];
                    var last = rang[1];
                    last -= 1;
                    for (var k = 0; k < rr.options.bynweekday.length; k++) {
                        var i = void 0;
                        var wday = rr.options.bynweekday[k][0];
                        var n = rr.options.bynweekday[k][1];
                        if (n < 0) {
                            i = last + (n + 1) * 7;
                            i -= helpers_1.pymod(this.wdaymask[i] - wday, 7);
                        } else {
                            i = first + (n - 1) * 7;
                            i += helpers_1.pymod(7 - this.wdaymask[i] + wday, 7);
                        }
                        if (first <= i && i <= last) this.nwdaymask[i] = 1;
                    }
                }
            }
            this.lastyear = year;
            this.lastmonth = month;
        }
    }, {
        key: "ydayset",
        value: function ydayset() {
            return [helpers_1.range(this.yearlen), 0, this.yearlen];
        }
    }, {
        key: "mdayset",
        value: function mdayset(_, month, __) {
            var start = this.mrange[month - 1];
            var end = this.mrange[month];
            var set = helpers_1.repeat(null, this.yearlen);
            for (var i = start; i < end; i++) {
                set[i] = i;
            }return [set, start, end];
        }
    }, {
        key: "wdayset",
        value: function wdayset(year, month, day) {
            // We need to handle cross-year weeks here.
            var set = helpers_1.repeat(null, this.yearlen + 7);
            var i = dateutil_1.default.toOrdinal(new Date(Date.UTC(year, month - 1, day))) - this.yearordinal;
            var start = i;
            for (var j = 0; j < 7; j++) {
                set[i] = i;
                ++i;
                if (this.wdaymask[i] === this.rrule.options.wkst) break;
            }
            return [set, start, i];
        }
    }, {
        key: "ddayset",
        value: function ddayset(year, month, day) {
            var set = helpers_1.repeat(null, this.yearlen);
            var i = dateutil_1.default.toOrdinal(new Date(Date.UTC(year, month - 1, day))) - this.yearordinal;
            set[i] = i;
            return [set, i, i + 1];
        }
    }, {
        key: "htimeset",
        value: function htimeset(hour, minute, second, millisecond) {
            var set = [];
            var rr = this.rrule;
            for (var i = 0; i < rr.options.byminute.length; i++) {
                minute = rr.options.byminute[i];
                for (var j = 0; j < rr.options.bysecond.length; j++) {
                    second = rr.options.bysecond[j];
                    set.push(new dateutil_1.default.Time(hour, minute, second, millisecond));
                }
            }
            dateutil_1.default.sort(set);
            return set;
        }
    }, {
        key: "mtimeset",
        value: function mtimeset(hour, minute, second, millisecond) {
            var set = [];
            var rr = this.rrule;
            for (var j = 0; j < rr.options.bysecond.length; j++) {
                second = rr.options.bysecond[j];
                set.push(new dateutil_1.default.Time(hour, minute, second, millisecond));
            }
            dateutil_1.default.sort(set);
            return set;
        }
    }, {
        key: "stimeset",
        value: function stimeset(hour, minute, second, millisecond) {
            return [new dateutil_1.default.Time(hour, minute, second, millisecond)];
        }
    }]);

    return Iterinfo;
}();

exports.default = Iterinfo;
//# sourceMappingURL=iterinfo.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(0);
// =============================================================================
// Date masks
// =============================================================================
// Every mask is 7 days longer to handle cross-year weekly periods.
var M365MASK = [].concat(_toConsumableArray(helpers_1.repeat(1, 31)), _toConsumableArray(helpers_1.repeat(2, 28)), _toConsumableArray(helpers_1.repeat(3, 31)), _toConsumableArray(helpers_1.repeat(4, 30)), _toConsumableArray(helpers_1.repeat(5, 31)), _toConsumableArray(helpers_1.repeat(6, 30)), _toConsumableArray(helpers_1.repeat(7, 31)), _toConsumableArray(helpers_1.repeat(8, 31)), _toConsumableArray(helpers_1.repeat(9, 30)), _toConsumableArray(helpers_1.repeat(10, 31)), _toConsumableArray(helpers_1.repeat(11, 30)), _toConsumableArray(helpers_1.repeat(12, 31)), _toConsumableArray(helpers_1.repeat(1, 7)));
exports.M365MASK = M365MASK;
var M366MASK = [].concat(_toConsumableArray(helpers_1.repeat(1, 31)), _toConsumableArray(helpers_1.repeat(2, 29)), _toConsumableArray(helpers_1.repeat(3, 31)), _toConsumableArray(helpers_1.repeat(4, 30)), _toConsumableArray(helpers_1.repeat(5, 31)), _toConsumableArray(helpers_1.repeat(6, 30)), _toConsumableArray(helpers_1.repeat(7, 31)), _toConsumableArray(helpers_1.repeat(8, 31)), _toConsumableArray(helpers_1.repeat(9, 30)), _toConsumableArray(helpers_1.repeat(10, 31)), _toConsumableArray(helpers_1.repeat(11, 30)), _toConsumableArray(helpers_1.repeat(12, 31)), _toConsumableArray(helpers_1.repeat(1, 7)));
exports.M366MASK = M366MASK;
var M28 = helpers_1.range(1, 29);
var M29 = helpers_1.range(1, 30);
var M30 = helpers_1.range(1, 31);
var M31 = helpers_1.range(1, 32);
var MDAY366MASK = [].concat(_toConsumableArray(M31), _toConsumableArray(M29), _toConsumableArray(M31), _toConsumableArray(M30), _toConsumableArray(M31), _toConsumableArray(M30), _toConsumableArray(M31), _toConsumableArray(M31), _toConsumableArray(M30), _toConsumableArray(M31), _toConsumableArray(M30), _toConsumableArray(M31), _toConsumableArray(M31.slice(0, 7)));
exports.MDAY366MASK = MDAY366MASK;
var MDAY365MASK = [].concat(_toConsumableArray(M31), _toConsumableArray(M28), _toConsumableArray(M31), _toConsumableArray(M30), _toConsumableArray(M31), _toConsumableArray(M30), _toConsumableArray(M31), _toConsumableArray(M31), _toConsumableArray(M30), _toConsumableArray(M31), _toConsumableArray(M30), _toConsumableArray(M31), _toConsumableArray(M31.slice(0, 7)));
exports.MDAY365MASK = MDAY365MASK;
var NM28 = helpers_1.range(-28, 0);
var NM29 = helpers_1.range(-29, 0);
var NM30 = helpers_1.range(-30, 0);
var NM31 = helpers_1.range(-31, 0);
var NMDAY366MASK = [].concat(_toConsumableArray(NM31), _toConsumableArray(NM29), _toConsumableArray(NM31), _toConsumableArray(NM30), _toConsumableArray(NM31), _toConsumableArray(NM30), _toConsumableArray(NM31), _toConsumableArray(NM31), _toConsumableArray(NM30), _toConsumableArray(NM31), _toConsumableArray(NM30), _toConsumableArray(NM31), _toConsumableArray(NM31.slice(0, 7)));
exports.NMDAY366MASK = NMDAY366MASK;
var NMDAY365MASK = [].concat(_toConsumableArray(NM31), _toConsumableArray(NM28), _toConsumableArray(NM31), _toConsumableArray(NM30), _toConsumableArray(NM31), _toConsumableArray(NM30), _toConsumableArray(NM31), _toConsumableArray(NM31), _toConsumableArray(NM30), _toConsumableArray(NM31), _toConsumableArray(NM30), _toConsumableArray(NM31), _toConsumableArray(NM31.slice(0, 7)));
exports.NMDAY365MASK = NMDAY365MASK;
var M366RANGE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
exports.M366RANGE = M366RANGE;
var M365RANGE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
exports.M365RANGE = M365RANGE;
var WDAYMASK = function () {
    var wdaymask = [];
    for (var i = 0; i < 55; i++) {
        wdaymask = wdaymask.concat(helpers_1.range(7));
    }return wdaymask;
}();
exports.WDAYMASK = WDAYMASK;
//# sourceMappingURL=masks.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var iterresult_1 = __webpack_require__(5);
/**
 * IterResult subclass that calls a callback function on each add,
 * and stops iterating when the callback returns false.
 */

var CallbackIterResult = function (_iterresult_1$default) {
    _inherits(CallbackIterResult, _iterresult_1$default);

    function CallbackIterResult(method, args, iterator) {
        _classCallCheck(this, CallbackIterResult);

        var _this = _possibleConstructorReturn(this, (CallbackIterResult.__proto__ || Object.getPrototypeOf(CallbackIterResult)).call(this, method, args));

        _this.iterator = iterator;
        return _this;
    }

    _createClass(CallbackIterResult, [{
        key: "add",
        value: function add(date) {
            if (this.iterator(date, this._result.length)) {
                this._result.push(date);
                return true;
            }
            return false;
        }
    }]);

    return CallbackIterResult;
}(iterresult_1.default);

exports.default = CallbackIterResult;
//# sourceMappingURL=callbackiterresult.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(0);
var rrule_1 = __webpack_require__(2);
var dateutil_1 = __webpack_require__(1);
var weekday_1 = __webpack_require__(3);
function initializeOptions(options) {
    var invalid = [];
    var keys = Object.keys(options);
    var initializedOptions = {};
    // Shallow copy for options and origOptions and check for invalid
    keys.forEach(function (key) {
        initializedOptions[key] = options[key];
        if (!helpers_1.includes(rrule_1.defaultKeys, key)) invalid.push(key);
    });
    if (invalid.length) {
        throw new Error('Invalid options: ' + invalid.join(', '));
    }
    return initializedOptions;
}
exports.initializeOptions = initializeOptions;
function parseOptions(options) {
    var opts = initializeOptions(options);
    var keys = Object.keys(options);
    // Merge in default options
    rrule_1.defaultKeys.forEach(function (key) {
        if (!helpers_1.includes(keys, key)) opts[key] = rrule_1.DEFAULT_OPTIONS[key];
    });
    if (helpers_1.isPresent(opts.byeaster)) opts.freq = rrule_1.default.YEARLY;
    if (!(helpers_1.isPresent(opts.freq) && rrule_1.default.FREQUENCIES[opts.freq])) {
        throw new Error("Invalid frequency: " + opts.freq);
    }
    if (!opts.dtstart) opts.dtstart = new Date(new Date().setMilliseconds(0));
    var millisecondModulo = opts.dtstart.getTime() % 1000;
    if (!helpers_1.isPresent(opts.wkst)) {
        opts.wkst = rrule_1.default.MO.weekday;
    } else if (helpers_1.isNumber(opts.wkst)) {
        // cool, just keep it like that
    } else {
        opts.wkst = opts.wkst.weekday;
    }
    if (helpers_1.isPresent(opts.bysetpos)) {
        if (helpers_1.isNumber(opts.bysetpos)) opts.bysetpos = [opts.bysetpos];
        for (var i = 0; i < opts.bysetpos.length; i++) {
            var v = opts.bysetpos[i];
            if (v === 0 || !(v >= -366 && v <= 366)) {
                throw new Error('bysetpos must be between 1 and 366,' + ' or between -366 and -1');
            }
        }
    }
    if (!(Boolean(opts.byweekno) || helpers_1.notEmpty(opts.byweekno) || helpers_1.notEmpty(opts.byyearday) || Boolean(opts.bymonthday) || helpers_1.notEmpty(opts.bymonthday) || opts.byweekday !== null || opts.byeaster !== null)) {
        switch (opts.freq) {
            case rrule_1.default.YEARLY:
                if (!opts.bymonth) opts.bymonth = opts.dtstart.getUTCMonth() + 1;
                opts.bymonthday = opts.dtstart.getUTCDate();
                break;
            case rrule_1.default.MONTHLY:
                opts.bymonthday = opts.dtstart.getUTCDate();
                break;
            case rrule_1.default.WEEKLY:
                opts.byweekday = [dateutil_1.default.getWeekday(opts.dtstart)];
                break;
        }
    }
    // bymonth
    if (helpers_1.isPresent(opts.bymonth) && !helpers_1.isArray(opts.bymonth)) {
        opts.bymonth = [opts.bymonth];
    }
    // byyearday
    if (helpers_1.isPresent(opts.byyearday) && !helpers_1.isArray(opts.byyearday) && helpers_1.isNumber(opts.byyearday)) {
        opts.byyearday = [opts.byyearday];
    }
    // bymonthday
    if (!helpers_1.isPresent(opts.bymonthday)) {
        opts.bymonthday = [];
        opts.bynmonthday = [];
    } else if (helpers_1.isArray(opts.bymonthday)) {
        var bymonthday = [];
        var bynmonthday = [];
        for (var _i = 0; _i < opts.bymonthday.length; _i++) {
            var _v = opts.bymonthday[_i];
            if (_v > 0) {
                bymonthday.push(_v);
            } else if (_v < 0) {
                bynmonthday.push(_v);
            }
        }
        opts.bymonthday = bymonthday;
        opts.bynmonthday = bynmonthday;
    } else if (opts.bymonthday < 0) {
        opts.bynmonthday = [opts.bymonthday];
        opts.bymonthday = [];
    } else {
        opts.bynmonthday = [];
        opts.bymonthday = [opts.bymonthday];
    }
    // byweekno
    if (helpers_1.isPresent(opts.byweekno) && !helpers_1.isArray(opts.byweekno)) {
        opts.byweekno = [opts.byweekno];
    }
    // byweekday / bynweekday
    if (!helpers_1.isPresent(opts.byweekday)) {
        opts.bynweekday = null;
    } else if (helpers_1.isNumber(opts.byweekday)) {
        opts.byweekday = [opts.byweekday];
        opts.bynweekday = null;
    } else if (opts.byweekday instanceof weekday_1.default) {
        if (!opts.byweekday.n || opts.freq > rrule_1.default.MONTHLY) {
            opts.byweekday = [opts.byweekday.weekday];
            opts.bynweekday = null;
        } else {
            opts.bynweekday = [[opts.byweekday.weekday, opts.byweekday.n]];
            opts.byweekday = null;
        }
    } else {
        var byweekday = [];
        var bynweekday = [];
        for (var _i2 = 0; _i2 < opts.byweekday.length; _i2++) {
            var wday = opts.byweekday[_i2];
            if (helpers_1.isNumber(wday)) {
                byweekday.push(wday);
                continue;
            }
            var wd = wday;
            if (!wd.n || opts.freq > rrule_1.default.MONTHLY) {
                byweekday.push(wd.weekday);
            } else {
                bynweekday.push([wd.weekday, wd.n]);
            }
        }
        opts.byweekday = helpers_1.notEmpty(byweekday) ? byweekday : null;
        opts.bynweekday = helpers_1.notEmpty(bynweekday) ? bynweekday : null;
    }
    // byhour
    if (!helpers_1.isPresent(opts.byhour)) {
        opts.byhour = opts.freq < rrule_1.default.HOURLY ? [opts.dtstart.getUTCHours()] : null;
    } else if (helpers_1.isNumber(opts.byhour)) {
        opts.byhour = [opts.byhour];
    }
    // byminute
    if (!helpers_1.isPresent(opts.byminute)) {
        opts.byminute = opts.freq < rrule_1.default.MINUTELY ? [opts.dtstart.getUTCMinutes()] : null;
    } else if (helpers_1.isNumber(opts.byminute)) {
        opts.byminute = [opts.byminute];
    }
    // bysecond
    if (!helpers_1.isPresent(opts.bysecond)) {
        opts.bysecond = opts.freq < rrule_1.default.SECONDLY ? [opts.dtstart.getUTCSeconds()] : null;
    } else if (helpers_1.isNumber(opts.bysecond)) {
        opts.bysecond = [opts.bysecond];
    }
    var timeset = void 0;
    if (opts.freq >= rrule_1.default.HOURLY) {
        timeset = null;
    } else {
        timeset = [];
        for (var _i3 = 0; _i3 < opts.byhour.length; _i3++) {
            var hour = opts.byhour[_i3];
            for (var j = 0; j < opts.byminute.length; j++) {
                var minute = opts.byminute[j];
                for (var k = 0; k < opts.bysecond.length; k++) {
                    var second = opts.bysecond[k];
                    // python:
                    // datetime.time(hour, minute, second,
                    // tzinfo=self._tzinfo))
                    timeset.push(new dateutil_1.default.Time(hour, minute, second, millisecondModulo));
                }
            }
        }
        dateutil_1.default.sort(timeset);
    }
    return { parsedOptions: opts, timeset: timeset };
}
exports.parseOptions = parseOptions;
//# sourceMappingURL=parseoptions.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(6);
var weekday_1 = __webpack_require__(3);
var dateutil_1 = __webpack_require__(1);
function parseString(rfcString) {
    rfcString = rfcString.replace(/^\s+|\s+$/, '');
    if (!rfcString.length) return null;
    var attrs = rfcString.split(';');
    var options = {};
    for (var i = 0; i < attrs.length; i++) {
        var attr = attrs[i].split('=');
        var key = attr[0];
        var value = attr[1];
        switch (key) {
            case 'FREQ':
                options.freq = types_1.Frequency[value];
                break;
            case 'WKST':
                options.wkst = types_1.Days[value];
                break;
            case 'COUNT':
            case 'INTERVAL':
            case 'BYSETPOS':
            case 'BYMONTH':
            case 'BYMONTHDAY':
            case 'BYYEARDAY':
            case 'BYWEEKNO':
            case 'BYHOUR':
            case 'BYMINUTE':
            case 'BYSECOND':
                var num = void 0;
                if (value.indexOf(',') !== -1) {
                    var values = value.split(',');
                    num = values.map(function (val) {
                        if (/^[+-]?\d+$/.test(val.toString())) {
                            return Number(val);
                        } else {
                            return val;
                        }
                    });
                } else if (/^[+-]?\d+$/.test(value)) {
                    num = Number(value);
                } else {
                    num = value;
                }
                var optionKey = key.toLowerCase();
                // @ts-ignore
                options[optionKey] = num;
                break;
            case 'BYDAY':
                // => byweekday
                var n = void 0;
                var wday = void 0;
                var day = void 0;
                var days = value.split(',');
                options.byweekday = [];
                for (var j = 0; j < days.length; j++) {
                    day = days[j];
                    if (day.length === 2) {
                        // MO, TU, ...
                        wday = types_1.Days[day]; // wday instanceof Weekday
                        options.byweekday.push(wday);
                    } else {
                        // -1MO, +3FR, 1SO, ...
                        var parts = day.match(/^([+-]?\d)([A-Z]{2})$/);
                        n = Number(parts[1]);
                        var wdaypart = parts[2];
                        wday = types_1.Days[wdaypart].weekday;
                        options.byweekday.push(new weekday_1.default(wday, n));
                    }
                }
                break;
            case 'DTSTART':
                options.dtstart = dateutil_1.default.untilStringToDate(value);
                break;
            case 'UNTIL':
                options.until = dateutil_1.default.untilStringToDate(value);
                break;
            case 'BYEASTER':
                options.byeaster = Number(value);
                break;
            default:
                throw new Error("Unknown RRULE property '" + key + "'");
        }
    }
    return options;
}
exports.parseString = parseString;
//# sourceMappingURL=parsestring.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var rrule_1 = __webpack_require__(2);
var helpers_1 = __webpack_require__(0);
var weekday_1 = __webpack_require__(3);
var dateutil_1 = __webpack_require__(1);
function optionsToString(options) {
    var pairs = [];
    var keys = Object.keys(options);
    var defaultKeys = Object.keys(rrule_1.DEFAULT_OPTIONS);
    for (var i = 0; i < keys.length; i++) {
        if (!helpers_1.includes(defaultKeys, keys[i])) continue;
        var key = keys[i].toUpperCase();
        var value = options[keys[i]];
        var strValues = [];
        if (!helpers_1.isPresent(value) || helpers_1.isArray(value) && !value.length) continue;
        switch (key) {
            case 'FREQ':
                value = rrule_1.default.FREQUENCIES[options.freq];
                break;
            case 'WKST':
                if (helpers_1.isNumber(value)) {
                    value = new weekday_1.default(value);
                }
                break;
            case 'BYWEEKDAY':
                /*
                NOTE: BYWEEKDAY is a special case.
                RRule() deconstructs the rule.options.byweekday array
                into an array of Weekday arguments.
                On the other hand, rule.origOptions is an array of Weekdays.
                We need to handle both cases here.
                It might be worth change RRule to keep the Weekdays.
                       Also, BYWEEKDAY (used by RRule) vs. BYDAY (RFC)
                       */
                key = 'BYDAY';
                if (!helpers_1.isArray(value)) value = [value];
                for (var j = 0; j < value.length; j++) {
                    var wday = value[j];
                    if (wday instanceof weekday_1.default) {
                        // good
                    } else if (helpers_1.isArray(wday)) {
                        wday = new weekday_1.default(wday[0], wday[1]);
                    } else {
                        wday = new weekday_1.default(wday);
                    }
                    strValues[j] = wday.toString();
                }
                value = strValues;
                break;
            case 'DTSTART':
            case 'UNTIL':
                value = dateutil_1.default.timeToUntilString(value);
                break;
            default:
                if (helpers_1.isArray(value)) {
                    for (var _j = 0; _j < value.length; _j++) {
                        strValues[_j] = String(value[_j]);
                    }
                    value = strValues;
                } else {
                    value = String(value);
                }
        }
        pairs.push([key, value]);
    }
    var strings = [];
    for (var _i = 0; _i < pairs.length; _i++) {
        var attr = pairs[_i];
        strings.push(attr[0] + '=' + attr[1].toString());
    }
    return strings.join(';');
}
exports.optionsToString = optionsToString;
//# sourceMappingURL=optionstostring.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var iterresult_1 = __webpack_require__(5);
var dateutil_1 = __webpack_require__(1);
var helpers_1 = __webpack_require__(0);

var Cache = function () {
    function Cache() {
        _classCallCheck(this, Cache);

        this.all = false;
        this.before = [];
        this.after = [];
        this.between = [];
    }
    /**
     * @param {String} what - all/before/after/between
     * @param {Array,Date} value - an array of dates, one date, or null
     * @param {Object?} args - _iter arguments
     */


    _createClass(Cache, [{
        key: "_cacheAdd",
        value: function _cacheAdd(what, value, args) {
            if (value) {
                value = value instanceof Date ? dateutil_1.default.clone(value) : dateutil_1.default.cloneDates(value);
            }
            if (what === 'all') {
                this.all = value;
            } else {
                args._value = value;
                this[what].push(args);
            }
        }
        /**
         * @return false - not in the cache
         *         null  - cached, but zero occurrences (before/after)
         *         Date  - cached (before/after)
         *         []    - cached, but zero occurrences (all/between)
         *         [Date1, DateN] - cached (all/between)
         */

    }, {
        key: "_cacheGet",
        value: function _cacheGet(what, args) {
            var cached = false;
            var argsKeys = args ? Object.keys(args) : [];
            var findCacheDiff = function findCacheDiff(item) {
                for (var i = 0; i < argsKeys.length; i++) {
                    var key = argsKeys[i];
                    if (String(args[key]) !== String(item[key])) {
                        return true;
                    }
                }
                return false;
            };
            var cachedObject = this[what];
            if (what === 'all') {
                cached = this.all;
            } else if (helpers_1.isArray(cachedObject)) {
                // Let's see whether we've already called the
                // 'what' method with the same 'args'
                for (var i = 0; i < cachedObject.length; i++) {
                    var item = cachedObject[i];
                    if (argsKeys.length && findCacheDiff(item)) continue;
                    cached = item._value;
                    break;
                }
            }
            if (!cached && this.all) {
                // Not in the cache, but we already know all the occurrences,
                // so we can find the correct dates from the cached ones.
                var iterResult = new iterresult_1.default(what, args);
                for (var _i = 0; _i < this.all.length; _i++) {
                    if (!iterResult.accept(this.all[_i])) break;
                }
                cached = iterResult.getValue();
                this._cacheAdd(what, cached, args);
            }
            return helpers_1.isArray(cached) ? dateutil_1.default.cloneDates(cached) : cached instanceof Date ? dateutil_1.default.clone(cached) : cached;
        }
    }]);

    return Cache;
}();

exports.Cache = Cache;
//# sourceMappingURL=cache.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var totext_1 = __webpack_require__(17);
var parsetext_1 = __webpack_require__(18);
exports.parseText = parsetext_1.default;
var index_1 = __webpack_require__(4);
var i18n_1 = __webpack_require__(7);
/*!
* rrule.js - Library for working with recurrence rules for calendar dates.
* https://github.com/jakubroztocil/rrule
*
* Copyright 2010, Jakub Roztocil and Lars Schoning
* Licenced under the BSD licence.
* https://github.com/jakubroztocil/rrule/blob/master/LICENCE
*
*/
/**
 *
 * Implementation of RRule.fromText() and RRule::toText().
 *
 *
 * On the client side, this file needs to be included
 * when those functions are used.
 *
 */
// =============================================================================
// fromText
// =============================================================================
/**
 * Will be able to convert some of the below described rules from
 * text format to a rule object.
 *
 *
 * RULES
 *
 * Every ([n])
 *       day(s)
 *     | [weekday], ..., (and) [weekday]
 *     | weekday(s)
 *     | week(s)
 *     | month(s)
 *     | [month], ..., (and) [month]
 *     | year(s)
 *
 *
 * Plus 0, 1, or multiple of these:
 *
 * on [weekday], ..., (or) [weekday] the [monthday], [monthday], ... (or) [monthday]
 *
 * on [weekday], ..., (and) [weekday]
 *
 * on the [monthday], [monthday], ... (and) [monthday] (day of the month)
 *
 * on the [nth-weekday], ..., (and) [nth-weekday] (of the month/year)
 *
 *
 * Plus 0 or 1 of these:
 *
 * for [n] time(s)
 *
 * until [date]
 *
 * Plus (.)
 *
 *
 * Definitely no supported for parsing:
 *
 * (for year):
 *     in week(s) [n], ..., (and) [n]
 *
 *     on the [yearday], ..., (and) [n] day of the year
 *     on day [yearday], ..., (and) [n]
 *
 *
 * NON-TERMINALS
 *
 * [n]: 1, 2 ..., one, two, three ..
 * [month]: January, February, March, April, May, ... December
 * [weekday]: Monday, ... Sunday
 * [nth-weekday]: first [weekday], 2nd [weekday], ... last [weekday], ...
 * [monthday]: first, 1., 2., 1st, 2nd, second, ... 31st, last day, 2nd last day, ..
 * [date]:
 *     [month] (0-31(,) ([year])),
 *     (the) 0-31.(1-12.([year])),
 *     (the) 0-31/(1-12/([year])),
 *     [weekday]
 *
 * [year]: 0000, 0001, ... 01, 02, ..
 *
 * Definitely not supported for parsing:
 *
 * [yearday]: first, 1., 2., 1st, 2nd, second, ... 366th, last day, 2nd last day, ..
 *
 * @param {String} text
 * @return {Object, Boolean} the rule, or null.
 */
var fromText = function fromText(text) {
    var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i18n_1.default;

    return new index_1.default(parsetext_1.default(text, language) || undefined);
};
exports.fromText = fromText;
var common = ['count', 'until', 'interval', 'byweekday', 'bymonthday', 'bymonth'];
totext_1.default.IMPLEMENTED = [];
totext_1.default.IMPLEMENTED[index_1.default.HOURLY] = common;
totext_1.default.IMPLEMENTED[index_1.default.MINUTELY] = common;
totext_1.default.IMPLEMENTED[index_1.default.DAILY] = ['byhour'].concat(common);
totext_1.default.IMPLEMENTED[index_1.default.WEEKLY] = common;
totext_1.default.IMPLEMENTED[index_1.default.MONTHLY] = common;
totext_1.default.IMPLEMENTED[index_1.default.YEARLY] = ['byweekno', 'byyearday'].concat(common);
// =============================================================================
// Export
// =============================================================================
var toText = function toText(rrule, gettext, language) {
    return new totext_1.default(rrule, gettext, language).toString();
};
exports.toText = toText;
var isFullyConvertible = totext_1.default.isFullyConvertible;

exports.isFullyConvertible = isFullyConvertible;
//# sourceMappingURL=index.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var i18n_1 = __webpack_require__(7);
var index_1 = __webpack_require__(4);
var helpers_1 = __webpack_require__(0);
// =============================================================================
// Helper functions
// =============================================================================
/**
 * Return true if a value is in an array
 */
var contains = function contains(arr, val) {
    return arr.indexOf(val) !== -1;
};
var defaultGetText = function defaultGetText(id) {
    return id.toString();
};
/**
 *
 * @param {RRule} rrule
 * Optional:
 * @param {Function} gettext function
 * @param {Object} language definition
 * @constructor
 */

var ToText = function () {
    function ToText(rrule) {
        var gettext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetText;
        var language = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : i18n_1.default;

        _classCallCheck(this, ToText);

        this.text = [];
        this.language = language || i18n_1.default;
        this.gettext = gettext;
        this.rrule = rrule;
        this.options = rrule.options;
        this.origOptions = rrule.origOptions;
        if (this.origOptions.bymonthday) {
            var bymonthday = [].concat(this.options.bymonthday);
            var bynmonthday = [].concat(this.options.bynmonthday);
            bymonthday.sort();
            bynmonthday.sort();
            bynmonthday.reverse();
            // 1, 2, 3, .., -5, -4, -3, ..
            this.bymonthday = bymonthday.concat(bynmonthday);
            if (!this.bymonthday.length) this.bymonthday = null;
        }
        if (this.origOptions.byweekday) {
            var byweekday = !helpers_1.isArray(this.origOptions.byweekday) ? [this.origOptions.byweekday] : this.origOptions.byweekday;
            var days = String(byweekday);
            this.byweekday = {
                allWeeks: byweekday.filter(function (weekday) {
                    return !weekday.n;
                }),
                someWeeks: byweekday.filter(function (weekday) {
                    return Boolean(weekday.n);
                }),
                isWeekdays: days.indexOf('MO') !== -1 && days.indexOf('TU') !== -1 && days.indexOf('WE') !== -1 && days.indexOf('TH') !== -1 && days.indexOf('FR') !== -1 && days.indexOf('SA') === -1 && days.indexOf('SU') === -1
            };
            var sortWeekDays = function sortWeekDays(a, b) {
                return a.weekday - b.weekday;
            };
            this.byweekday.allWeeks.sort(sortWeekDays);
            this.byweekday.someWeeks.sort(sortWeekDays);
            if (!this.byweekday.allWeeks.length) this.byweekday.allWeeks = null;
            if (!this.byweekday.someWeeks.length) this.byweekday.someWeeks = null;
        } else {
            this.byweekday = null;
        }
    }
    /**
     * Test whether the rrule can be fully converted to text.
     * @param {RRule} rrule
     * @return {Boolean}
     */


    _createClass(ToText, [{
        key: "isFullyConvertible",
        value: function isFullyConvertible() {
            return ToText.isFullyConvertible(this.rrule);
        }
        /**
         * Perform the conversion. Only some of the frequencies are supported.
         * If some of the rrule's options aren't supported, they'll
         * be omitted from the output an "(~ approximate)" will be appended.
         * @return {*}
         */

    }, {
        key: "toString",
        value: function toString() {
            var gettext = this.gettext;
            if (!(this.options.freq in ToText.IMPLEMENTED)) {
                return gettext('RRule error: Unable to fully convert this rrule to text');
            }
            this.text = [gettext('every')];
            // @ts-ignore
            this[index_1.default.FREQUENCIES[this.options.freq]]();
            if (this.options.until) {
                this.add(gettext('until'));
                var until = this.options.until;
                this.add(this.language.monthNames[until.getUTCMonth()]).add(until.getUTCDate() + ',').add(until.getUTCFullYear().toString());
            } else if (this.options.count) {
                this.add(gettext('for')).add(this.options.count.toString()).add(this.plural(this.options.count) ? gettext('times') : gettext('time'));
            }
            if (!this.isFullyConvertible()) this.add(gettext('(~ approximate)'));
            return this.text.join('');
        }
    }, {
        key: "HOURLY",
        value: function HOURLY() {
            var gettext = this.gettext;
            if (this.options.interval !== 1) this.add(this.options.interval.toString());
            this.add(this.plural(this.options.interval) ? gettext('hours') : gettext('hour'));
        }
    }, {
        key: "MINUTELY",
        value: function MINUTELY() {
            var gettext = this.gettext;
            if (this.options.interval !== 1) this.add(this.options.interval.toString());
            this.add(this.plural(this.options.interval) ? gettext('minutes') : gettext('minutes'));
        }
    }, {
        key: "DAILY",
        value: function DAILY() {
            var gettext = this.gettext;
            if (this.options.interval !== 1) this.add(this.options.interval.toString());
            if (this.byweekday && this.byweekday.isWeekdays) {
                this.add(this.plural(this.options.interval) ? gettext('weekdays') : gettext('weekday'));
            } else {
                this.add(this.plural(this.options.interval) ? gettext('days') : gettext('day'));
            }
            if (this.origOptions.bymonth) {
                this.add(gettext('in'));
                this._bymonth();
            }
            if (this.bymonthday) {
                this._bymonthday();
            } else if (this.byweekday) {
                this._byweekday();
            } else if (this.origOptions.byhour) {
                this._byhour();
            }
        }
    }, {
        key: "WEEKLY",
        value: function WEEKLY() {
            var gettext = this.gettext;
            if (this.options.interval !== 1) {
                this.add(this.options.interval.toString()).add(this.plural(this.options.interval) ? gettext('weeks') : gettext('week'));
            }
            if (this.byweekday && this.byweekday.isWeekdays) {
                if (this.options.interval === 1) {
                    this.add(this.plural(this.options.interval) ? gettext('weekdays') : gettext('weekday'));
                } else {
                    this.add(gettext('on')).add(gettext('weekdays'));
                }
            } else {
                if (this.options.interval === 1) this.add(gettext('week'));
                if (this.origOptions.bymonth) {
                    this.add(gettext('in'));
                    this._bymonth();
                }
                if (this.bymonthday) {
                    this._bymonthday();
                } else if (this.byweekday) {
                    this._byweekday();
                }
            }
        }
    }, {
        key: "MONTHLY",
        value: function MONTHLY() {
            var gettext = this.gettext;
            if (this.origOptions.bymonth) {
                if (this.options.interval !== 1) {
                    this.add(this.options.interval.toString()).add(gettext('months'));
                    if (this.plural(this.options.interval)) this.add(gettext('in'));
                } else {
                    // this.add(gettext('MONTH'))
                }
                this._bymonth();
            } else {
                if (this.options.interval !== 1) this.add(this.options.interval.toString());
                this.add(this.plural(this.options.interval) ? gettext('months') : gettext('month'));
            }
            if (this.bymonthday) {
                this._bymonthday();
            } else if (this.byweekday && this.byweekday.isWeekdays) {
                this.add(gettext('on')).add(gettext('weekdays'));
            } else if (this.byweekday) {
                this._byweekday();
            }
        }
    }, {
        key: "YEARLY",
        value: function YEARLY() {
            var gettext = this.gettext;
            if (this.origOptions.bymonth) {
                if (this.options.interval !== 1) {
                    this.add(this.options.interval.toString());
                    this.add(gettext('years'));
                } else {
                    // this.add(gettext('YEAR'))
                }
                this._bymonth();
            } else {
                if (this.options.interval !== 1) this.add(this.options.interval.toString());
                this.add(this.plural(this.options.interval) ? gettext('years') : gettext('year'));
            }
            if (this.bymonthday) {
                this._bymonthday();
            } else if (this.byweekday) {
                this._byweekday();
            }
            if (this.options.byyearday) {
                this.add(gettext('on the')).add(this.list(this.options.byyearday, this.nth, gettext('and'))).add(gettext('day'));
            }
            if (this.options.byweekno) {
                this.add(gettext('in')).add(this.plural(this.options.byweekno.length) ? gettext('weeks') : gettext('week')).add(this.list(this.options.byweekno, undefined, gettext('and')));
            }
        }
    }, {
        key: "_bymonthday",
        value: function _bymonthday() {
            var gettext = this.gettext;
            if (this.byweekday && this.byweekday.allWeeks) {
                this.add(gettext('on')).add(this.list(this.byweekday.allWeeks, this.weekdaytext, gettext('or'))).add(gettext('the')).add(this.list(this.bymonthday, this.nth, gettext('or')));
            } else {
                this.add(gettext('on the')).add(this.list(this.bymonthday, this.nth, gettext('and')));
            }
            // this.add(gettext('DAY'))
        }
    }, {
        key: "_byweekday",
        value: function _byweekday() {
            var gettext = this.gettext;
            if (this.byweekday.allWeeks && !this.byweekday.isWeekdays) {
                this.add(gettext('on')).add(this.list(this.byweekday.allWeeks, this.weekdaytext));
            }
            if (this.byweekday.someWeeks) {
                if (this.byweekday.allWeeks) this.add(gettext('and'));
                this.add(gettext('on the')).add(this.list(this.byweekday.someWeeks, this.weekdaytext, gettext('and')));
            }
        }
    }, {
        key: "_byhour",
        value: function _byhour() {
            var gettext = this.gettext;
            this.add(gettext('at')).add(this.list(this.origOptions.byhour, undefined, gettext('and')));
        }
    }, {
        key: "_bymonth",
        value: function _bymonth() {
            this.add(this.list(this.options.bymonth, this.monthtext, this.gettext('and')));
        }
    }, {
        key: "nth",
        value: function nth(n) {
            n = parseInt(n.toString(), 10);
            var nth = void 0;
            var npos = void 0;
            var gettext = this.gettext;
            if (n === -1) return gettext('last');
            npos = Math.abs(n);
            switch (npos) {
                case 1:
                case 21:
                case 31:
                    nth = npos + gettext('st');
                    break;
                case 2:
                case 22:
                    nth = npos + gettext('nd');
                    break;
                case 3:
                case 23:
                    nth = npos + gettext('rd');
                    break;
                default:
                    nth = npos + gettext('th');
            }
            return n < 0 ? nth + ' ' + gettext('last') : nth;
        }
    }, {
        key: "monthtext",
        value: function monthtext(m) {
            return this.language.monthNames[m - 1];
        }
    }, {
        key: "weekdaytext",
        value: function weekdaytext(wday) {
            var weekday = helpers_1.isNumber(wday) ? (wday + 1) % 7 : wday.getJsWeekday();
            return (wday.n ? this.nth(wday.n) + ' ' : '') + this.language.dayNames[weekday];
        }
    }, {
        key: "plural",
        value: function plural(n) {
            return n % 100 !== 1;
        }
    }, {
        key: "add",
        value: function add(s) {
            this.text.push(' ');
            this.text.push(s);
            return this;
        }
    }, {
        key: "list",
        value: function list(arr, callback, finalDelim) {
            var delim = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ',';

            if (!helpers_1.isArray(arr)) {
                arr = [arr];
            }
            var delimJoin = function delimJoin(array, delimiter, finalDelimiter) {
                var list = '';
                for (var i = 0; i < array.length; i++) {
                    if (i !== 0) {
                        if (i === array.length - 1) {
                            list += ' ' + finalDelimiter + ' ';
                        } else {
                            list += delimiter + ' ';
                        }
                    }
                    list += array[i];
                }
                return list;
            };
            callback = callback || function (o) {
                return o.toString();
            };
            var self = this;
            var realCallback = function realCallback(arg) {
                return callback && callback.call(self, arg);
            };
            if (finalDelim) {
                return delimJoin(arr.map(realCallback), delim, finalDelim);
            } else {
                return arr.map(realCallback).join(delim + ' ');
            }
        }
    }], [{
        key: "isFullyConvertible",
        value: function isFullyConvertible(rrule) {
            var canConvert = true;
            if (!(rrule.options.freq in ToText.IMPLEMENTED)) return false;
            if (rrule.origOptions.until && rrule.origOptions.count) return false;
            for (var key in rrule.origOptions) {
                if (contains(['dtstart', 'wkst', 'freq'], key)) return true;
                if (!contains(ToText.IMPLEMENTED[rrule.options.freq], key)) return false;
            }
            return canConvert;
        }
    }]);

    return ToText;
}();

exports.default = ToText;
//# sourceMappingURL=totext.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var i18n_1 = __webpack_require__(7);
var index_1 = __webpack_require__(4);
// =============================================================================
// Parser
// =============================================================================

var Parser = function () {
    function Parser(rules) {
        _classCallCheck(this, Parser);

        this.done = true;
        this.rules = rules;
    }

    _createClass(Parser, [{
        key: "start",
        value: function start(text) {
            this.text = text;
            this.done = false;
            return this.nextSymbol();
        }
    }, {
        key: "isDone",
        value: function isDone() {
            return this.done && this.symbol === null;
        }
    }, {
        key: "nextSymbol",
        value: function nextSymbol() {
            var best = void 0;
            var bestSymbol = void 0;
            var p = this;
            this.symbol = null;
            this.value = null;
            do {
                if (this.done) return false;
                var rule = void 0;
                best = null;
                for (var name in this.rules) {
                    rule = this.rules[name];
                    var match = rule.exec(p.text);
                    if (match) {
                        if (best === null || match[0].length > best[0].length) {
                            best = match;
                            bestSymbol = name;
                        }
                    }
                }
                if (best != null) {
                    this.text = this.text.substr(best[0].length);
                    if (this.text === '') this.done = true;
                }
                if (best == null) {
                    this.done = true;
                    this.symbol = null;
                    this.value = null;
                    return;
                }
                // @ts-ignore
            } while (bestSymbol === 'SKIP');
            // @ts-ignore
            this.symbol = bestSymbol;
            this.value = best;
            return true;
        }
    }, {
        key: "accept",
        value: function accept(name) {
            if (this.symbol === name) {
                if (this.value) {
                    var v = this.value;
                    this.nextSymbol();
                    return v;
                }
                this.nextSymbol();
                return true;
            }
            return false;
        }
    }, {
        key: "acceptNumber",
        value: function acceptNumber() {
            return this.accept('number');
        }
    }, {
        key: "expect",
        value: function expect(name) {
            if (this.accept(name)) return true;
            throw new Error('expected ' + name + ' but found ' + this.symbol);
        }
    }]);

    return Parser;
}();

function parseText(text) {
    var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i18n_1.default;

    var options = {};
    var ttr = new Parser(language.tokens);
    if (!ttr.start(text)) return null;
    S();
    return options;
    function S() {
        // every [n]
        ttr.expect('every');
        var n = ttr.acceptNumber();
        if (n) options.interval = parseInt(n[0], 10);
        if (ttr.isDone()) throw new Error('Unexpected end');
        switch (ttr.symbol) {
            case 'day(s)':
                options.freq = index_1.default.DAILY;
                if (ttr.nextSymbol()) {
                    AT();
                    F();
                }
                break;
            // FIXME Note: every 2 weekdays != every two weeks on weekdays.
            // DAILY on weekdays is not a valid rule
            case 'weekday(s)':
                options.freq = index_1.default.WEEKLY;
                options.byweekday = [index_1.default.MO, index_1.default.TU, index_1.default.WE, index_1.default.TH, index_1.default.FR];
                ttr.nextSymbol();
                F();
                break;
            case 'week(s)':
                options.freq = index_1.default.WEEKLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'hour(s)':
                options.freq = index_1.default.HOURLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'minute(s)':
                options.freq = index_1.default.MINUTELY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'month(s)':
                options.freq = index_1.default.MONTHLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'year(s)':
                options.freq = index_1.default.YEARLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                options.freq = index_1.default.WEEKLY;
                var key = ttr.symbol.substr(0, 2).toUpperCase();
                options.byweekday = [index_1.default[key]];
                if (!ttr.nextSymbol()) return;
                // TODO check for duplicates
                while (ttr.accept('comma')) {
                    if (ttr.isDone()) throw new Error('Unexpected end');
                    var wkd = decodeWKD();
                    if (!wkd) {
                        throw new Error('Unexpected symbol ' + ttr.symbol + ', expected weekday');
                    }
                    // @ts-ignore
                    options.byweekday.push(index_1.default[wkd]);
                    ttr.nextSymbol();
                }
                MDAYs();
                F();
                break;
            case 'january':
            case 'february':
            case 'march':
            case 'april':
            case 'may':
            case 'june':
            case 'july':
            case 'august':
            case 'september':
            case 'october':
            case 'november':
            case 'december':
                options.freq = index_1.default.YEARLY;
                options.bymonth = [decodeM()];
                if (!ttr.nextSymbol()) return;
                // TODO check for duplicates
                while (ttr.accept('comma')) {
                    if (ttr.isDone()) throw new Error('Unexpected end');
                    var m = decodeM();
                    if (!m) {
                        throw new Error('Unexpected symbol ' + ttr.symbol + ', expected month');
                    }
                    options.bymonth.push(m);
                    ttr.nextSymbol();
                }
                ON();
                F();
                break;
            default:
                throw new Error('Unknown symbol');
        }
    }
    function ON() {
        var on = ttr.accept('on');
        var the = ttr.accept('the');
        if (!(on || the)) return;
        do {
            var nth = decodeNTH();
            var wkd = decodeWKD();
            var m = decodeM();
            // nth <weekday> | <weekday>
            if (nth) {
                // ttr.nextSymbol()
                if (wkd) {
                    ttr.nextSymbol();
                    if (!options.byweekday) options.byweekday = [];
                    // @ts-ignore
                    options.byweekday.push(index_1.default[wkd].nth(nth));
                } else {
                    if (!options.bymonthday) options.bymonthday = [];
                    // @ts-ignore
                    options.bymonthday.push(nth);
                    ttr.accept('day(s)');
                }
                // <weekday>
            } else if (wkd) {
                ttr.nextSymbol();
                if (!options.byweekday) options.byweekday = [];
                // @ts-ignore
                options.byweekday.push(index_1.default[wkd]);
            } else if (ttr.symbol === 'weekday(s)') {
                ttr.nextSymbol();
                if (!options.byweekday) {
                    options.byweekday = [index_1.default.MO, index_1.default.TU, index_1.default.WE, index_1.default.TH, index_1.default.FR];
                }
            } else if (ttr.symbol === 'week(s)') {
                ttr.nextSymbol();
                var n = ttr.acceptNumber();
                if (!n) {
                    throw new Error('Unexpected symbol ' + ttr.symbol + ', expected week number');
                }
                options.byweekno = [parseInt(n[0], 10)];
                while (ttr.accept('comma')) {
                    n = ttr.acceptNumber();
                    if (!n) {
                        throw new Error('Unexpected symbol ' + ttr.symbol + '; expected monthday');
                    }
                    options.byweekno.push(parseInt(n[0], 10));
                }
            } else if (m) {
                ttr.nextSymbol();
                if (!options.bymonth) options.bymonth = [];
                // @ts-ignore
                options.bymonth.push(m);
            } else {
                return;
            }
        } while (ttr.accept('comma') || ttr.accept('the') || ttr.accept('on'));
    }
    function AT() {
        var at = ttr.accept('at');
        if (!at) return;
        do {
            var n = ttr.acceptNumber();
            if (!n) {
                throw new Error('Unexpected symbol ' + ttr.symbol + ', expected hour');
            }
            options.byhour = [parseInt(n[0], 10)];
            while (ttr.accept('comma')) {
                n = ttr.acceptNumber();
                if (!n) {
                    throw new Error('Unexpected symbol ' + ttr.symbol + '; expected hour');
                }
                options.byhour.push(parseInt(n[0], 10));
            }
        } while (ttr.accept('comma') || ttr.accept('at'));
    }
    function decodeM() {
        switch (ttr.symbol) {
            case 'january':
                return 1;
            case 'february':
                return 2;
            case 'march':
                return 3;
            case 'april':
                return 4;
            case 'may':
                return 5;
            case 'june':
                return 6;
            case 'july':
                return 7;
            case 'august':
                return 8;
            case 'september':
                return 9;
            case 'october':
                return 10;
            case 'november':
                return 11;
            case 'december':
                return 12;
            default:
                return false;
        }
    }
    function decodeWKD() {
        switch (ttr.symbol) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                return ttr.symbol.substr(0, 2).toUpperCase();
            default:
                return false;
        }
    }
    function decodeNTH() {
        switch (ttr.symbol) {
            case 'last':
                ttr.nextSymbol();
                return -1;
            case 'first':
                ttr.nextSymbol();
                return 1;
            case 'second':
                ttr.nextSymbol();
                return ttr.accept('last') ? -2 : 2;
            case 'third':
                ttr.nextSymbol();
                return ttr.accept('last') ? -3 : 3;
            case 'nth':
                var v = parseInt(ttr.value[1], 10);
                if (v < -366 || v > 366) throw new Error('Nth out of range: ' + v);
                ttr.nextSymbol();
                return ttr.accept('last') ? -v : v;
            default:
                return false;
        }
    }
    function MDAYs() {
        ttr.accept('on');
        ttr.accept('the');
        var nth = decodeNTH();
        if (!nth) return;
        options.bymonthday = [nth];
        ttr.nextSymbol();
        while (ttr.accept('comma')) {
            nth = decodeNTH();
            if (!nth) {
                throw new Error('Unexpected symbol ' + ttr.symbol + '; expected monthday');
            }
            options.bymonthday.push(nth);
            ttr.nextSymbol();
        }
    }
    function F() {
        if (ttr.symbol === 'until') {
            var date = Date.parse(ttr.text);
            if (!date) throw new Error('Cannot parse until date:' + ttr.text);
            options.until = new Date(date);
        } else if (ttr.accept('for')) {
            options.count = parseInt(ttr.value[0], 10);
            ttr.expect('number');
            // ttr.expect('times')
        }
    }
}
exports.default = parseText;
//# sourceMappingURL=parsetext.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var rrule_1 = __webpack_require__(2);
var rruleset_1 = __webpack_require__(8);
var dateutil_1 = __webpack_require__(1);
var weekday_1 = __webpack_require__(3);
var helpers_1 = __webpack_require__(0);
/**
 * RRuleStr
 *  To parse a set of rrule strings
 */

var RRuleStr = function () {
    function RRuleStr() {
        _classCallCheck(this, RRuleStr);

        // tslint:disable:variable-name
        this._handle_BYDAY = this._handle_BYWEEKDAY;
        this._handle_INTERVAL = this._handle_int;
        this._handle_COUNT = this._handle_int;
        this._handle_BYSETPOS = this._handle_int_list;
        this._handle_BYMONTH = this._handle_int_list;
        this._handle_BYMONTHDAY = this._handle_int_list;
        this._handle_BYYEARDAY = this._handle_int_list;
        this._handle_BYEASTER = this._handle_int_list;
        this._handle_BYWEEKNO = this._handle_int_list;
        this._handle_BYHOUR = this._handle_int_list;
        this._handle_BYMINUTE = this._handle_int_list;
        this._handle_BYSECOND = this._handle_int_list;
        // tslint:enable:variable-name
    }
    // tslint:disable-next-line:variable-name


    _createClass(RRuleStr, [{
        key: "_handle_DTSTART",
        value: function _handle_DTSTART(rrkwargs, _, value, __) {
            rrkwargs['dtstart'] = dateutil_1.default.untilStringToDate(value);
        }
    }, {
        key: "_handle_int",
        value: function _handle_int(rrkwargs, name, value) {
            // @ts-ignore
            rrkwargs[name.toLowerCase()] = parseInt(value, 10);
        }
    }, {
        key: "_handle_int_list",
        value: function _handle_int_list(rrkwargs, name, value) {
            // @ts-ignore
            rrkwargs[name.toLowerCase()] = value.split(',').map(function (x) {
                return parseInt(x, 10);
            });
        }
    }, {
        key: "_handle_FREQ",
        value: function _handle_FREQ(rrkwargs, _, value, __) {
            rrkwargs['freq'] = RRuleStr._freq_map[value];
        }
    }, {
        key: "_handle_UNTIL",
        value: function _handle_UNTIL(rrkwargs, _, value, __) {
            try {
                rrkwargs['until'] = dateutil_1.default.untilStringToDate(value);
            } catch (error) {
                throw new Error('invalid until date');
            }
        }
    }, {
        key: "_handle_WKST",
        value: function _handle_WKST(rrkwargs, _, value, __) {
            rrkwargs['wkst'] = RRuleStr._weekday_map[value];
        }
    }, {
        key: "_handle_BYWEEKDAY",
        value: function _handle_BYWEEKDAY(rrkwargs, _, value, __) {
            // Two ways to specify this: +1MO or MO(+1)
            var splt = void 0;
            var i = void 0;
            var j = void 0;
            var n = void 0;
            var w = void 0;
            var wday = void 0;
            var l = [];
            var wdays = value.split(',');
            for (i = 0; i < wdays.length; i++) {
                wday = wdays[i];
                if (wday.indexOf('(') > -1) {
                    // If it's of the form TH(+1), etc.
                    splt = wday.split('(');
                    w = splt[0];
                    n = parseInt(splt.slice(1, -1)[0], 10);
                } else {
                    // # If it's of the form +1MO
                    for (j = 0; j < wday.length; j++) {
                        if ('+-0123456789'.indexOf(wday[j]) === -1) break;
                    }
                    n = wday.slice(0, j) || null;
                    w = wday.slice(j);
                    if (n) n = parseInt(n, 10);
                }
                var weekday = new weekday_1.default(RRuleStr._weekday_map[w], n);
                l.push(weekday);
            }
            rrkwargs['byweekday'] = l;
        }
    }, {
        key: "_parseRfcRRule",
        value: function _parseRfcRRule(line) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            options.dtstart = options.dtstart || null;
            options.cache = options.cache || false;
            var name = void 0;
            var value = void 0;
            var parts = void 0;
            if (line.indexOf(':') !== -1) {
                parts = line.split(':');
                name = parts[0];
                value = parts[1];
                if (name !== 'RRULE') throw new Error('unknown parameter name');
            } else {
                value = line;
            }
            var rrkwargs = {};
            var pairs = value.split(';');
            for (var i = 0; i < pairs.length; i++) {
                parts = pairs[i].split('=');
                name = parts[0].toUpperCase();
                value = parts[1].toUpperCase();
                try {
                    // @ts-ignore
                    this["_handle_" + name](rrkwargs, name, value);
                } catch (error) {
                    throw new Error("unknown parameter '" + name + "':" + value);
                }
            }
            rrkwargs.dtstart = rrkwargs.dtstart || options.dtstart;
            return new rrule_1.default(rrkwargs, !options.cache);
        }
    }, {
        key: "_parseRfc",
        value: function _parseRfc(s, options) {
            if (options.compatible) {
                options.forceset = true;
                options.unfold = true;
            }
            s = s && s.toUpperCase().trim();
            if (!s) throw new Error('Invalid empty string');
            var i = 0;
            var line = void 0;
            var lines = void 0;
            // More info about 'unfold' option
            // Go head to http://www.ietf.org/rfc/rfc2445.txt
            if (options.unfold) {
                lines = s.split('\n');
                while (i < lines.length) {
                    // TODO
                    line = lines[i] = lines[i].replace(/\s+$/g, '');
                    if (!line) {
                        lines.splice(i, 1);
                    } else if (i > 0 && line[0] === ' ') {
                        lines[i - 1] += line.slice(1);
                        lines.splice(i, 1);
                    } else {
                        i += 1;
                    }
                }
            } else {
                lines = s.split(/\s/);
            }
            var rrulevals = [];
            var rdatevals = [];
            var exrulevals = [];
            var exdatevals = [];
            var name = void 0;
            var value = void 0;
            var parts = void 0;
            var dtstart = void 0;
            var rset = void 0;
            var j = void 0;
            var k = void 0;
            var datestrs = void 0;
            var datestr = void 0;
            if (!options.forceset && lines.length === 1 && (s.indexOf(':') === -1 || s.indexOf('RRULE:') === 0)) {
                return this._parseRfcRRule(lines[0], {
                    cache: options.cache,
                    dtstart: options.dtstart
                });
            } else {
                for (var _i = 0; _i < lines.length; _i++) {
                    line = lines[_i];
                    if (!line) continue;
                    if (line.indexOf(':') === -1) {
                        name = 'RRULE';
                        value = line;
                    } else {
                        parts = helpers_1.split(line, ':', 1);
                        name = parts[0];
                        value = parts[1];
                    }
                    var parms = name.split(';');
                    if (!parms) throw new Error('empty property name');
                    name = parms[0];
                    parms = parms.slice(1);
                    if (name === 'RRULE') {
                        for (j = 0; j < parms.length; j++) {
                            var parm = parms[j];
                            throw new Error('unsupported RRULE parm: ' + parm);
                        }
                        rrulevals.push(value);
                    } else if (name === 'RDATE') {
                        for (j = 0; j < parms.length; j++) {
                            var _parm = parms[j];
                            if (_parm !== 'VALUE=DATE-TIME' && _parm !== 'VALUE=DATE') {
                                throw new Error('unsupported RDATE parm: ' + _parm);
                            }
                        }
                        rdatevals.push(value);
                    } else if (name === 'EXRULE') {
                        for (j = 0; j < parms.length; j++) {
                            var _parm2 = parms[j];
                            throw new Error('unsupported EXRULE parm: ' + _parm2);
                        }
                        exrulevals.push(value);
                    } else if (name === 'EXDATE') {
                        for (j = 0; j < parms.length; j++) {
                            var _parm3 = parms[j];
                            if (_parm3 !== 'VALUE=DATE-TIME' && _parm3 !== 'VALUE=DATE') {
                                throw new Error('unsupported EXDATE parm: ' + _parm3);
                            }
                        }
                        exdatevals.push(value);
                    } else if (name === 'DTSTART') {
                        dtstart = dateutil_1.default.untilStringToDate(value);
                    } else {
                        throw new Error('unsupported property: ' + name);
                    }
                }
                if (options.forceset || rrulevals.length > 1 || rdatevals.length || exrulevals.length || exdatevals.length) {
                    rset = new rruleset_1.default(!options.cache);
                    for (j = 0; j < rrulevals.length; j++) {
                        rset.rrule(this._parseRfcRRule(rrulevals[j], {
                            // @ts-ignore
                            dtstart: options.dtstart || dtstart
                        }));
                    }
                    for (j = 0; j < rdatevals.length; j++) {
                        datestrs = rdatevals[j].split(',');
                        for (k = 0; k < datestrs.length; k++) {
                            datestr = datestrs[k];
                            rset.rdate(dateutil_1.default.untilStringToDate(datestr));
                        }
                    }
                    for (j = 0; j < exrulevals.length; j++) {
                        rset.exrule(this._parseRfcRRule(exrulevals[j], {
                            // @ts-ignore
                            dtstart: options.dtstart || dtstart
                        }));
                    }
                    for (j = 0; j < exdatevals.length; j++) {
                        datestrs = exdatevals[j].split(',');
                        for (k = 0; k < datestrs.length; k++) {
                            datestr = datestrs[k];
                            rset.exdate(dateutil_1.default.untilStringToDate(datestr));
                        }
                    }
                    // @ts-ignore
                    if (options.compatible && options.dtstart) rset.rdate(dtstart);
                    return rset;
                } else {
                    return this._parseRfcRRule(rrulevals[0], {
                        // @ts-ignore
                        dtstart: options.dtstart || dtstart,
                        cache: options.cache
                    });
                }
            }
        }
    }, {
        key: "parse",
        value: function parse(s) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var invalid = [];
            var keys = Object.keys(options);
            var defaultKeys = Object.keys(RRuleStr.DEFAULT_OPTIONS);
            keys.forEach(function (key) {
                if (!helpers_1.includes(defaultKeys, key)) invalid.push(key);
            }, this);
            if (invalid.length) {
                throw new Error('Invalid options: ' + invalid.join(', '));
            }
            // Merge in default options
            defaultKeys.forEach(function (key) {
                if (!helpers_1.includes(keys, key)) options[key] = RRuleStr.DEFAULT_OPTIONS[key];
            });
            return this._parseRfc(s, options);
        }
    }]);

    return RRuleStr;
}();
// tslint:disable-next-line:variable-name


RRuleStr._weekday_map = {
    MO: 0,
    TU: 1,
    WE: 2,
    TH: 3,
    FR: 4,
    SA: 5,
    SU: 6
};
// tslint:disable-next-line:variable-name
RRuleStr._freq_map = {
    YEARLY: rrule_1.default.YEARLY,
    MONTHLY: rrule_1.default.MONTHLY,
    WEEKLY: rrule_1.default.WEEKLY,
    DAILY: rrule_1.default.DAILY,
    HOURLY: rrule_1.default.HOURLY,
    MINUTELY: rrule_1.default.MINUTELY,
    SECONDLY: rrule_1.default.SECONDLY
};
RRuleStr.DEFAULT_OPTIONS = {
    dtstart: null,
    cache: false,
    unfold: false,
    forceset: false,
    compatible: false
};
exports.default = RRuleStr;
//# sourceMappingURL=rrulestr.js.map

/***/ })
/******/ ]);
});
//# sourceMappingURL=rrule.js.map