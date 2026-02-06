var Ys = Object.defineProperty;
var vs = (e, t, s) => t in e ? Ys(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : e[t] = s;
var Oe = (e, t, s) => (vs(e, typeof t != "symbol" ? t + "" : t, s), s);
import {
    b as ne,
    a as xt
} from "./auth.5fc731a5.js";
import {
    b as Os
} from "./store.669f290b.js";
import {
    $ as xs,
    a0 as Ts
} from "./entry.baa6724e.js";
class bs {
    constructor() {
        Oe(this, "_validations", []);
        Oe(this, "errors", {});
        Oe(this, "error", {})
    }
    rule(t) {
        return this._validations.push({
            rule: t,
            error_exist: !1,
            error_message: ""
        }), this
    }
    field(t) {
        return this._validations[this._validations.length - 1].field = t, this.error[t] = !1, this
    }
    retypefield(t) {
        return this._validations[this._validations.length - 1].retypefield = t, this
    }
    min(t) {
        return this._validations[this._validations.length - 1].min = t, this
    }
    max(t) {
        return this._validations[this._validations.length - 1].max = t, this
    }
    message(t) {
        return this._validations[this._validations.length - 1].message = t, this
    }
    retypemessage(t) {
        return this._validations[this._validations.length - 1].retypemessage = t, this
    }
    minMessage(t) {
        return this._validations[this._validations.length - 1].minmessage = t, this
    }
    maxMessage(t) {
        return this._validations[this._validations.length - 1].maxmessage = t, this
    }
    run(t) {
        this._validations.forEach((i, a) => {
            this._validations[a].error_exist = !1, this._validations[a].error_message = ""
        }), Object.keys(this.error).forEach(i => {
            this.error[i] = !1
        }), this._validations.forEach((i, a) => {
            i.rule == "required" && (!i.field || !t[i.field] || t[i.field] == "") && (this._validations[a].error_exist = !0, this._validations[a].error_message = i.message), i.rule == "password" && (i.field && i.retypefield ? t[i.field] != t[i.retypefield] ? (this._validations[a].errorKey = i.retypefield, this._validations[a].error_exist = !0, this._validations[a].error_message = i.retypemessage) : (t[i.field] == "" && (this._validations[a].error_exist = !0, this._validations[a].error_message = i.message), i.min || (i.min = 0), i.max || (i.max = 0), parseInt(i.min) > 0 && t[i.field].length < parseInt(i.min) && (this._validations[a].error_exist = !0, this._validations[a].error_message = i.minmessage), parseInt(i.max) > 0 && t[i.field].length > parseInt(i.max) && (this._validations[a].error_exist = !0, this._validations[a].error_message = i.maxmessage)) : (this._validations[a].error_exist = !0, this._validations[a].error_message = "Password and retype password fields required")), i.rule == "numeric" && i.field && t[i.field] && isNaN(t[i.field]) && (this._validations[a].error_exist = !0, this._validations[a].error_message = i.message), i.rule == "positivenumeric" && i.field && t[i.field] && (isNaN(t[i.field]) || parseFloat(t[i.field]) < 0) && (this._validations[a].error_exist = !0, this._validations[a].error_message = i.message), i.rule == "alphanumeric" && i.field && t[i.field] && !/^[a-zA-Z0-9]*$/g.test(t[i.field]) && (this._validations[a].error_exist = !0, this._validations[a].error_message = i.message), i.rule == "minmax" && i.field && t[i.field] && (i.min || (i.min = 0), i.max || (i.max = 0), parseInt(i.min) > 0 && t[i.field].length < parseInt(i.min) && (this._validations[a].error_exist = !0, this._validations[a].error_message = i.minmessage), parseInt(i.max) > 0 && t[i.field].length > parseInt(i.max) && (this._validations[a].error_exist = !0, this._validations[a].error_message = i.maxmessage)), i.rule == "condition" && i.field && i.condition && (this._validations[a].error_exist = !0, this._validations[a].error_message = i.message)
        });
        let s = "",
            r = {};
        this._validations.forEach((i, a) => {
            i.error_exist == !0 && (r[i.field] || (i.errorKey ? s = i.errorKey : s = i.field, r[s] = i.error_message, this.error[s] = !0, s = ""))
        }), this.errors = r
    }
} //! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Wt;

function l() {
    return Wt.apply(null, arguments)
}

function Rs(e) {
    Wt = e
}

function L(e) {
    return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
}

function ie(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]"
}

function y(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}

function ot(e) {
    if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e)
        if (y(e, t)) return !1;
    return !0
}

function b(e) {
    return e === void 0
}

function B(e) {
    return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]"
}

function Me(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
}

function Ft(e, t) {
    var s = [],
        r, i = e.length;
    for (r = 0; r < i; ++r) s.push(t(e[r], r));
    return s
}

function X(e, t) {
    for (var s in t) y(t, s) && (e[s] = t[s]);
    return y(t, "toString") && (e.toString = t.toString), y(t, "valueOf") && (e.valueOf = t.valueOf), e
}

function H(e, t, s, r) {
    return is(e, t, s, r, !0).utc()
}

function Ns() {
    return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1
    }
}

function f(e) {
    return e._pf == null && (e._pf = Ns()), e._pf
}
var et;
Array.prototype.some ? et = Array.prototype.some : et = function(e) {
    var t = Object(this),
        s = t.length >>> 0,
        r;
    for (r = 0; r < s; r++)
        if (r in t && e.call(this, t[r], r, t)) return !0;
    return !1
};

function lt(e) {
    if (e._isValid == null) {
        var t = f(e),
            s = et.call(t.parsedDateParts, function(i) {
                return i != null
            }),
            r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s);
        if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e)) e._isValid = r;
        else return r
    }
    return e._isValid
}

function Ee(e) {
    var t = H(NaN);
    return e != null ? X(f(t), e) : f(t).userInvalidated = !0, t
}
var Tt = l.momentProperties = [],
    Je = !1;

function ut(e, t) {
    var s, r, i, a = Tt.length;
    if (b(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), b(t._i) || (e._i = t._i), b(t._f) || (e._f = t._f), b(t._l) || (e._l = t._l), b(t._strict) || (e._strict = t._strict), b(t._tzm) || (e._tzm = t._tzm), b(t._isUTC) || (e._isUTC = t._isUTC), b(t._offset) || (e._offset = t._offset), b(t._pf) || (e._pf = f(t)), b(t._locale) || (e._locale = t._locale), a > 0)
        for (s = 0; s < a; s++) r = Tt[s], i = t[r], b(i) || (e[r] = i);
    return e
}

function ke(e) {
    ut(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Je === !1 && (Je = !0, l.updateOffset(this), Je = !1)
}

function C(e) {
    return e instanceof ke || e != null && e._isAMomentObject != null
}

function It(e) {
    l.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e)
}

function W(e, t) {
    var s = !0;
    return X(function() {
        if (l.deprecationHandler != null && l.deprecationHandler(null, e), s) {
            var r = [],
                i, a, n, h = arguments.length;
            for (a = 0; a < h; a++) {
                if (i = "", typeof arguments[a] == "object") {
                    i += `
[` + a + "] ";
                    for (n in arguments[0]) y(arguments[0], n) && (i += n + ": " + arguments[0][n] + ", ");
                    i = i.slice(0, -2)
                } else i = arguments[a];
                r.push(i)
            }
            It(e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack), s = !1
        }
        return t.apply(this, arguments)
    }, t)
}
var bt = {};

function Lt(e, t) {
    l.deprecationHandler != null && l.deprecationHandler(e, t), bt[e] || (It(t), bt[e] = !0)
}
l.suppressDeprecationWarnings = !1;
l.deprecationHandler = null;

function V(e) {
    return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]"
}

function Ps(e) {
    var t, s;
    for (s in e) y(e, s) && (t = e[s], V(t) ? this[s] = t : this["_" + s] = t);
    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
}

function tt(e, t) {
    var s = X({}, e),
        r;
    for (r in t) y(t, r) && (ie(e[r]) && ie(t[r]) ? (s[r] = {}, X(s[r], e[r]), X(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
    for (r in e) y(e, r) && !y(t, r) && ie(e[r]) && (s[r] = X({}, s[r]));
    return s
}

function ht(e) {
    e != null && this.set(e)
}
var st;
Object.keys ? st = Object.keys : st = function(e) {
    var t, s = [];
    for (t in e) y(e, t) && s.push(t);
    return s
};
var Ws = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
};

function Fs(e, t, s) {
    var r = this._calendar[e] || this._calendar.sameElse;
    return V(r) ? r.call(t, s) : r
}

function A(e, t, s) {
    var r = "" + Math.abs(e),
        i = t - r.length,
        a = e >= 0;
    return (a ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
}
var dt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    xe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    Ke = {},
    he = {};

function d(e, t, s, r) {
    var i = r;
    typeof r == "string" && (i = function() {
        return this[r]()
    }), e && (he[e] = i), t && (he[t[0]] = function() {
        return A(i.apply(this, arguments), t[1], t[2])
    }), s && (he[s] = function() {
        return this.localeData().ordinal(i.apply(this, arguments), e)
    })
}

function Is(e) {
    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
}

function Ls(e) {
    var t = e.match(dt),
        s, r;
    for (s = 0, r = t.length; s < r; s++) he[t[s]] ? t[s] = he[t[s]] : t[s] = Is(t[s]);
    return function(i) {
        var a = "",
            n;
        for (n = 0; n < r; n++) a += V(t[n]) ? t[n].call(i, e) : t[n];
        return a
    }
}

function be(e, t) {
    return e.isValid() ? (t = Ct(t, e.localeData()), Ke[t] = Ke[t] || Ls(t), Ke[t](e)) : e.localeData().invalidDate()
}

function Ct(e, t) {
    var s = 5;

    function r(i) {
        return t.longDateFormat(i) || i
    }
    for (xe.lastIndex = 0; s >= 0 && xe.test(e);) e = e.replace(xe, r), xe.lastIndex = 0, s -= 1;
    return e
}
var Cs = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
};

function Es(e) {
    var t = this._longDateFormat[e],
        s = this._longDateFormat[e.toUpperCase()];
    return t || !s ? t : (this._longDateFormat[e] = s.match(dt).map(function(r) {
        return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r
    }).join(""), this._longDateFormat[e])
}
var Us = "Invalid date";

function As() {
    return this._invalidDate
}
var Hs = "%d",
    Vs = /\d{1,2}/;

function Gs(e) {
    return this._ordinal.replace("%d", e)
}
var js = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
};

function $s(e, t, s, r) {
    var i = this._relativeTime[s];
    return V(i) ? i(e, t, s, r) : i.replace(/%d/i, e)
}

function zs(e, t) {
    var s = this._relativeTime[e > 0 ? "future" : "past"];
    return V(s) ? s(t) : s.replace(/%s/i, t)
}
var ge = {};

function O(e, t) {
    var s = e.toLowerCase();
    ge[s] = ge[s + "s"] = ge[t] = e
}

function F(e) {
    return typeof e == "string" ? ge[e] || ge[e.toLowerCase()] : void 0
}

function ft(e) {
    var t = {},
        s, r;
    for (r in e) y(e, r) && (s = F(r), s && (t[s] = e[r]));
    return t
}
var Et = {};

function x(e, t) {
    Et[e] = t
}

function Zs(e) {
    var t = [],
        s;
    for (s in e) y(e, s) && t.push({
        unit: s,
        priority: Et[s]
    });
    return t.sort(function(r, i) {
        return r.priority - i.priority
    }), t
}

function Ue(e) {
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
}

function P(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
}

function m(e) {
    var t = +e,
        s = 0;
    return t !== 0 && isFinite(t) && (s = P(t)), s
}

function ce(e, t) {
    return function(s) {
        return s != null ? (Ut(this, e, s), l.updateOffset(this, t), this) : Pe(this, e)
    }
}

function Pe(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
}

function Ut(e, t, s) {
    e.isValid() && !isNaN(s) && (t === "FullYear" && Ue(e.year()) && e.month() === 1 && e.date() === 29 ? (s = m(s), e._d["set" + (e._isUTC ? "UTC" : "") + t](s, e.month(), $e(s, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](s))
}

function qs(e) {
    return e = F(e), V(this[e]) ? this[e]() : this
}

function Bs(e, t) {
    if (typeof e == "object") {
        e = ft(e);
        var s = Zs(e),
            r, i = s.length;
        for (r = 0; r < i; r++) this[s[r].unit](e[s[r].unit])
    } else if (e = F(e), V(this[e])) return this[e](t);
    return this
}
var At = /\d/,
    N = /\d\d/,
    Ht = /\d{3}/,
    ct = /\d{4}/,
    Ae = /[+-]?\d{6}/,
    D = /\d\d?/,
    Vt = /\d\d\d\d?/,
    Gt = /\d\d\d\d\d\d?/,
    He = /\d{1,3}/,
    mt = /\d{1,4}/,
    Ve = /[+-]?\d{1,6}/,
    me = /\d+/,
    Ge = /[+-]?\d+/,
    Js = /Z|[+-]\d\d:?\d\d/gi,
    je = /Z|[+-]\d\d(?::?\d\d)?/gi,
    Ks = /[+-]?\d+(\.\d{1,3})?/,
    Ye = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    We;
We = {};

function u(e, t, s) {
    We[e] = V(t) ? t : function(r, i) {
        return r && s ? s : t
    }
}

function Qs(e, t) {
    return y(We, e) ? We[e](t._strict, t._locale) : new RegExp(Xs(e))
}

function Xs(e) {
    return R(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, s, r, i, a) {
        return s || r || i || a
    }))
}

function R(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
}
var rt = {};

function p(e, t) {
    var s, r = t,
        i;
    for (typeof e == "string" && (e = [e]), B(t) && (r = function(a, n) {
            n[t] = m(a)
        }), i = e.length, s = 0; s < i; s++) rt[e[s]] = r
}

function ve(e, t) {
    p(e, function(s, r, i, a) {
        i._w = i._w || {}, t(s, i._w, i, a)
    })
}

function er(e, t, s) {
    t != null && y(rt, e) && rt[e](t, s._a, s, e)
}
var v = 0,
    z = 1,
    U = 2,
    Y = 3,
    I = 4,
    Z = 5,
    re = 6,
    tr = 7,
    sr = 8;

function rr(e, t) {
    return (e % t + t) % t
}
var k;
Array.prototype.indexOf ? k = Array.prototype.indexOf : k = function(e) {
    var t;
    for (t = 0; t < this.length; ++t)
        if (this[t] === e) return t;
    return -1
};

function $e(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var s = rr(t, 12);
    return e += (t - s) / 12, s === 1 ? Ue(e) ? 29 : 28 : 31 - s % 7 % 2
}
d("M", ["MM", 2], "Mo", function() {
    return this.month() + 1
});
d("MMM", 0, 0, function(e) {
    return this.localeData().monthsShort(this, e)
});
d("MMMM", 0, 0, function(e) {
    return this.localeData().months(this, e)
});
O("month", "M");
x("month", 8);
u("M", D);
u("MM", D, N);
u("MMM", function(e, t) {
    return t.monthsShortRegex(e)
});
u("MMMM", function(e, t) {
    return t.monthsRegex(e)
});
p(["M", "MM"], function(e, t) {
    t[z] = m(e) - 1
});
p(["MMM", "MMMM"], function(e, t, s, r) {
    var i = s._locale.monthsParse(e, r, s._strict);
    i != null ? t[z] = i : f(s).invalidMonth = e
});
var ir = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    jt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    $t = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    ar = Ye,
    nr = Ye;

function or(e, t) {
    return e ? L(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || $t).test(t) ? "format" : "standalone"][e.month()] : L(this._months) ? this._months : this._months.standalone
}

function lr(e, t) {
    return e ? L(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[$t.test(t) ? "format" : "standalone"][e.month()] : L(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
}

function ur(e, t, s) {
    var r, i, a, n = e.toLocaleLowerCase();
    if (!this._monthsParse)
        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) a = H([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
    return s ? t === "MMM" ? (i = k.call(this._shortMonthsParse, n), i !== -1 ? i : null) : (i = k.call(this._longMonthsParse, n), i !== -1 ? i : null) : t === "MMM" ? (i = k.call(this._shortMonthsParse, n), i !== -1 ? i : (i = k.call(this._longMonthsParse, n), i !== -1 ? i : null)) : (i = k.call(this._longMonthsParse, n), i !== -1 ? i : (i = k.call(this._shortMonthsParse, n), i !== -1 ? i : null))
}

function hr(e, t, s) {
    var r, i, a;
    if (this._monthsParseExact) return ur.call(this, e, t, s);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
        if (i = H([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), !s && !this._monthsParse[r] && (a = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(a.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e)) return r;
        if (s && t === "MMM" && this._shortMonthsParse[r].test(e)) return r;
        if (!s && this._monthsParse[r].test(e)) return r
    }
}

function zt(e, t) {
    var s;
    if (!e.isValid()) return e;
    if (typeof t == "string") {
        if (/^\d+$/.test(t)) t = m(t);
        else if (t = e.localeData().monthsParse(t), !B(t)) return e
    }
    return s = Math.min(e.date(), $e(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, s), e
}

function Zt(e) {
    return e != null ? (zt(this, e), l.updateOffset(this, !0), this) : Pe(this, "Month")
}

function dr() {
    return $e(this.year(), this.month())
}

function fr(e) {
    return this._monthsParseExact ? (y(this, "_monthsRegex") || qt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (y(this, "_monthsShortRegex") || (this._monthsShortRegex = ar), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
}

function cr(e) {
    return this._monthsParseExact ? (y(this, "_monthsRegex") || qt.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (y(this, "_monthsRegex") || (this._monthsRegex = nr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
}

function qt() {
    function e(n, h) {
        return h.length - n.length
    }
    var t = [],
        s = [],
        r = [],
        i, a;
    for (i = 0; i < 12; i++) a = H([2e3, i]), t.push(this.monthsShort(a, "")), s.push(this.months(a, "")), r.push(this.months(a, "")), r.push(this.monthsShort(a, ""));
    for (t.sort(e), s.sort(e), r.sort(e), i = 0; i < 12; i++) t[i] = R(t[i]), s[i] = R(s[i]);
    for (i = 0; i < 24; i++) r[i] = R(r[i]);
    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
}
d("Y", 0, 0, function() {
    var e = this.year();
    return e <= 9999 ? A(e, 4) : "+" + e
});
d(0, ["YY", 2], 0, function() {
    return this.year() % 100
});
d(0, ["YYYY", 4], 0, "year");
d(0, ["YYYYY", 5], 0, "year");
d(0, ["YYYYYY", 6, !0], 0, "year");
O("year", "y");
x("year", 1);
u("Y", Ge);
u("YY", D, N);
u("YYYY", mt, ct);
u("YYYYY", Ve, Ae);
u("YYYYYY", Ve, Ae);
p(["YYYYY", "YYYYYY"], v);
p("YYYY", function(e, t) {
    t[v] = e.length === 2 ? l.parseTwoDigitYear(e) : m(e)
});
p("YY", function(e, t) {
    t[v] = l.parseTwoDigitYear(e)
});
p("Y", function(e, t) {
    t[v] = parseInt(e, 10)
});

function we(e) {
    return Ue(e) ? 366 : 365
}
l.parseTwoDigitYear = function(e) {
    return m(e) + (m(e) > 68 ? 1900 : 2e3)
};
var Bt = ce("FullYear", !0);

function mr() {
    return Ue(this.year())
}

function _r(e, t, s, r, i, a, n) {
    var h;
    return e < 100 && e >= 0 ? (h = new Date(e + 400, t, s, r, i, a, n), isFinite(h.getFullYear()) && h.setFullYear(e)) : h = new Date(e, t, s, r, i, a, n), h
}

function pe(e) {
    var t, s;
    return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
}

function Fe(e, t, s) {
    var r = 7 + t - s,
        i = (7 + pe(e, 0, r).getUTCDay() - t) % 7;
    return -i + r - 1
}

function Jt(e, t, s, r, i) {
    var a = (7 + s - r) % 7,
        n = Fe(e, r, i),
        h = 1 + 7 * (t - 1) + a + n,
        c, w;
    return h <= 0 ? (c = e - 1, w = we(c) + h) : h > we(e) ? (c = e + 1, w = h - we(e)) : (c = e, w = h), {
        year: c,
        dayOfYear: w
    }
}

function Se(e, t, s) {
    var r = Fe(e.year(), t, s),
        i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1,
        a, n;
    return i < 1 ? (n = e.year() - 1, a = i + q(n, t, s)) : i > q(e.year(), t, s) ? (a = i - q(e.year(), t, s), n = e.year() + 1) : (n = e.year(), a = i), {
        week: a,
        year: n
    }
}

function q(e, t, s) {
    var r = Fe(e, t, s),
        i = Fe(e + 1, t, s);
    return (we(e) - r + i) / 7
}
d("w", ["ww", 2], "wo", "week");
d("W", ["WW", 2], "Wo", "isoWeek");
O("week", "w");
O("isoWeek", "W");
x("week", 5);
x("isoWeek", 5);
u("w", D);
u("ww", D, N);
u("W", D);
u("WW", D, N);
ve(["w", "ww", "W", "WW"], function(e, t, s, r) {
    t[r.substr(0, 1)] = m(e)
});

function yr(e) {
    return Se(e, this._week.dow, this._week.doy).week
}
var gr = {
    dow: 0,
    doy: 6
};

function wr() {
    return this._week.dow
}

function pr() {
    return this._week.doy
}

function Sr(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d")
}

function Dr(e) {
    var t = Se(this, 1, 4).week;
    return e == null ? t : this.add((e - t) * 7, "d")
}
d("d", 0, "do", "day");
d("dd", 0, 0, function(e) {
    return this.localeData().weekdaysMin(this, e)
});
d("ddd", 0, 0, function(e) {
    return this.localeData().weekdaysShort(this, e)
});
d("dddd", 0, 0, function(e) {
    return this.localeData().weekdays(this, e)
});
d("e", 0, 0, "weekday");
d("E", 0, 0, "isoWeekday");
O("day", "d");
O("weekday", "e");
O("isoWeekday", "E");
x("day", 11);
x("weekday", 11);
x("isoWeekday", 11);
u("d", D);
u("e", D);
u("E", D);
u("dd", function(e, t) {
    return t.weekdaysMinRegex(e)
});
u("ddd", function(e, t) {
    return t.weekdaysShortRegex(e)
});
u("dddd", function(e, t) {
    return t.weekdaysRegex(e)
});
ve(["dd", "ddd", "dddd"], function(e, t, s, r) {
    var i = s._locale.weekdaysParse(e, r, s._strict);
    i != null ? t.d = i : f(s).invalidWeekday = e
});
ve(["d", "e", "E"], function(e, t, s, r) {
    t[r] = m(e)
});

function Mr(e, t) {
    return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10)
}

function kr(e, t) {
    return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
}

function _t(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t))
}
var Yr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    Kt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    vr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    Or = Ye,
    xr = Ye,
    Tr = Ye;

function br(e, t) {
    var s = L(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    return e === !0 ? _t(s, this._week.dow) : e ? s[e.day()] : s
}

function Rr(e) {
    return e === !0 ? _t(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
}

function Nr(e) {
    return e === !0 ? _t(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
}

function Pr(e, t, s) {
    var r, i, a, n = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) a = H([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
    return s ? t === "dddd" ? (i = k.call(this._weekdaysParse, n), i !== -1 ? i : null) : t === "ddd" ? (i = k.call(this._shortWeekdaysParse, n), i !== -1 ? i : null) : (i = k.call(this._minWeekdaysParse, n), i !== -1 ? i : null) : t === "dddd" ? (i = k.call(this._weekdaysParse, n), i !== -1 || (i = k.call(this._shortWeekdaysParse, n), i !== -1) ? i : (i = k.call(this._minWeekdaysParse, n), i !== -1 ? i : null)) : t === "ddd" ? (i = k.call(this._shortWeekdaysParse, n), i !== -1 || (i = k.call(this._weekdaysParse, n), i !== -1) ? i : (i = k.call(this._minWeekdaysParse, n), i !== -1 ? i : null)) : (i = k.call(this._minWeekdaysParse, n), i !== -1 || (i = k.call(this._weekdaysParse, n), i !== -1) ? i : (i = k.call(this._shortWeekdaysParse, n), i !== -1 ? i : null))
}

function Wr(e, t, s) {
    var r, i, a;
    if (this._weekdaysParseExact) return Pr.call(this, e, t, s);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
        if (i = H([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (a = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e)) return r;
        if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e)) return r;
        if (s && t === "dd" && this._minWeekdaysParse[r].test(e)) return r;
        if (!s && this._weekdaysParse[r].test(e)) return r
    }
}

function Fr(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return e != null ? (e = Mr(e, this.localeData()), this.add(e - t, "d")) : t
}

function Ir(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d")
}

function Lr(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) {
        var t = kr(e, this.localeData());
        return this.day(this.day() % 7 ? t : t - 7)
    } else return this.day() || 7
}

function Cr(e) {
    return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || yt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (y(this, "_weekdaysRegex") || (this._weekdaysRegex = Or), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
}

function Er(e) {
    return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || yt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (y(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = xr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
}

function Ur(e) {
    return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || yt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (y(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Tr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
}

function yt() {
    function e(T, G) {
        return G.length - T.length
    }
    var t = [],
        s = [],
        r = [],
        i = [],
        a, n, h, c, w;
    for (a = 0; a < 7; a++) n = H([2e3, 1]).day(a), h = R(this.weekdaysMin(n, "")), c = R(this.weekdaysShort(n, "")), w = R(this.weekdays(n, "")), t.push(h), s.push(c), r.push(w), i.push(h), i.push(c), i.push(w);
    t.sort(e), s.sort(e), r.sort(e), i.sort(e), this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
}

function gt() {
    return this.hours() % 12 || 12
}

function Ar() {
    return this.hours() || 24
}
d("H", ["HH", 2], 0, "hour");
d("h", ["hh", 2], 0, gt);
d("k", ["kk", 2], 0, Ar);
d("hmm", 0, 0, function() {
    return "" + gt.apply(this) + A(this.minutes(), 2)
});
d("hmmss", 0, 0, function() {
    return "" + gt.apply(this) + A(this.minutes(), 2) + A(this.seconds(), 2)
});
d("Hmm", 0, 0, function() {
    return "" + this.hours() + A(this.minutes(), 2)
});
d("Hmmss", 0, 0, function() {
    return "" + this.hours() + A(this.minutes(), 2) + A(this.seconds(), 2)
});

function Qt(e, t) {
    d(e, 0, 0, function() {
        return this.localeData().meridiem(this.hours(), this.minutes(), t)
    })
}
Qt("a", !0);
Qt("A", !1);
O("hour", "h");
x("hour", 13);

function Xt(e, t) {
    return t._meridiemParse
}
u("a", Xt);
u("A", Xt);
u("H", D);
u("h", D);
u("k", D);
u("HH", D, N);
u("hh", D, N);
u("kk", D, N);
u("hmm", Vt);
u("hmmss", Gt);
u("Hmm", Vt);
u("Hmmss", Gt);
p(["H", "HH"], Y);
p(["k", "kk"], function(e, t, s) {
    var r = m(e);
    t[Y] = r === 24 ? 0 : r
});
p(["a", "A"], function(e, t, s) {
    s._isPm = s._locale.isPM(e), s._meridiem = e
});
p(["h", "hh"], function(e, t, s) {
    t[Y] = m(e), f(s).bigHour = !0
});
p("hmm", function(e, t, s) {
    var r = e.length - 2;
    t[Y] = m(e.substr(0, r)), t[I] = m(e.substr(r)), f(s).bigHour = !0
});
p("hmmss", function(e, t, s) {
    var r = e.length - 4,
        i = e.length - 2;
    t[Y] = m(e.substr(0, r)), t[I] = m(e.substr(r, 2)), t[Z] = m(e.substr(i)), f(s).bigHour = !0
});
p("Hmm", function(e, t, s) {
    var r = e.length - 2;
    t[Y] = m(e.substr(0, r)), t[I] = m(e.substr(r))
});
p("Hmmss", function(e, t, s) {
    var r = e.length - 4,
        i = e.length - 2;
    t[Y] = m(e.substr(0, r)), t[I] = m(e.substr(r, 2)), t[Z] = m(e.substr(i))
});

function Hr(e) {
    return (e + "").toLowerCase().charAt(0) === "p"
}
var Vr = /[ap]\.?m?\.?/i,
    Gr = ce("Hours", !0);

function jr(e, t, s) {
    return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM"
}
var es = {
        calendar: Ws,
        longDateFormat: Cs,
        invalidDate: Us,
        ordinal: Hs,
        dayOfMonthOrdinalParse: Vs,
        relativeTime: js,
        months: ir,
        monthsShort: jt,
        week: gr,
        weekdays: Yr,
        weekdaysMin: vr,
        weekdaysShort: Kt,
        meridiemParse: Vr
    },
    M = {},
    _e = {},
    De;

function $r(e, t) {
    var s, r = Math.min(e.length, t.length);
    for (s = 0; s < r; s += 1)
        if (e[s] !== t[s]) return s;
    return r
}

function Rt(e) {
    return e && e.toLowerCase().replace("_", "-")
}

function zr(e) {
    for (var t = 0, s, r, i, a; t < e.length;) {
        for (a = Rt(e[t]).split("-"), s = a.length, r = Rt(e[t + 1]), r = r ? r.split("-") : null; s > 0;) {
            if (i = ze(a.slice(0, s).join("-")), i) return i;
            if (r && r.length >= s && $r(a, r) >= s - 1) break;
            s--
        }
        t++
    }
    return De
}

function Zr(e) {
    return e.match("^[^/\\\\]*$") != null
}

function ze(e) {
    var t = null,
        s;
    if (M[e] === void 0 && typeof module < "u" && module && module.exports && Zr(e)) try {
        t = De._abbr, s = require, s("./locale/" + e), te(t)
    } catch {
        M[e] = null
    }
    return M[e]
}

function te(e, t) {
    var s;
    return e && (b(t) ? s = J(e) : s = wt(e, t), s ? De = s : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), De._abbr
}

function wt(e, t) {
    if (t !== null) {
        var s, r = es;
        if (t.abbr = e, M[e] != null) Lt("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = M[e]._config;
        else if (t.parentLocale != null)
            if (M[t.parentLocale] != null) r = M[t.parentLocale]._config;
            else if (s = ze(t.parentLocale), s != null) r = s._config;
        else return _e[t.parentLocale] || (_e[t.parentLocale] = []), _e[t.parentLocale].push({
            name: e,
            config: t
        }), null;
        return M[e] = new ht(tt(r, t)), _e[e] && _e[e].forEach(function(i) {
            wt(i.name, i.config)
        }), te(e), M[e]
    } else return delete M[e], null
}

function qr(e, t) {
    if (t != null) {
        var s, r, i = es;
        M[e] != null && M[e].parentLocale != null ? M[e].set(tt(M[e]._config, t)) : (r = ze(e), r != null && (i = r._config), t = tt(i, t), r == null && (t.abbr = e), s = new ht(t), s.parentLocale = M[e], M[e] = s), te(e)
    } else M[e] != null && (M[e].parentLocale != null ? (M[e] = M[e].parentLocale, e === te() && te(e)) : M[e] != null && delete M[e]);
    return M[e]
}

function J(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return De;
    if (!L(e)) {
        if (t = ze(e), t) return t;
        e = [e]
    }
    return zr(e)
}

function Br() {
    return st(M)
}

function pt(e) {
    var t, s = e._a;
    return s && f(e).overflow === -2 && (t = s[z] < 0 || s[z] > 11 ? z : s[U] < 1 || s[U] > $e(s[v], s[z]) ? U : s[Y] < 0 || s[Y] > 24 || s[Y] === 24 && (s[I] !== 0 || s[Z] !== 0 || s[re] !== 0) ? Y : s[I] < 0 || s[I] > 59 ? I : s[Z] < 0 || s[Z] > 59 ? Z : s[re] < 0 || s[re] > 999 ? re : -1, f(e)._overflowDayOfYear && (t < v || t > U) && (t = U), f(e)._overflowWeeks && t === -1 && (t = tr), f(e)._overflowWeekday && t === -1 && (t = sr), f(e).overflow = t), e
}
var Jr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Kr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Qr = /Z|[+-]\d\d(?::?\d\d)?/,
    Te = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, !1],
        ["YYYY", /\d{4}/, !1]
    ],
    Qe = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
    ],
    Xr = /^\/?Date\((-?\d+)/i,
    ei = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    ti = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

function ts(e) {
    var t, s, r = e._i,
        i = Jr.exec(r) || Kr.exec(r),
        a, n, h, c, w = Te.length,
        T = Qe.length;
    if (i) {
        for (f(e).iso = !0, t = 0, s = w; t < s; t++)
            if (Te[t][1].exec(i[1])) {
                n = Te[t][0], a = Te[t][2] !== !1;
                break
            }
        if (n == null) {
            e._isValid = !1;
            return
        }
        if (i[3]) {
            for (t = 0, s = T; t < s; t++)
                if (Qe[t][1].exec(i[3])) {
                    h = (i[2] || " ") + Qe[t][0];
                    break
                }
            if (h == null) {
                e._isValid = !1;
                return
            }
        }
        if (!a && h != null) {
            e._isValid = !1;
            return
        }
        if (i[4])
            if (Qr.exec(i[4])) c = "Z";
            else {
                e._isValid = !1;
                return
            }
        e._f = n + (h || "") + (c || ""), Dt(e)
    } else e._isValid = !1
}

function si(e, t, s, r, i, a) {
    var n = [ri(e), jt.indexOf(t), parseInt(s, 10), parseInt(r, 10), parseInt(i, 10)];
    return a && n.push(parseInt(a, 10)), n
}

function ri(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
}

function ii(e) {
    return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}

function ai(e, t, s) {
    if (e) {
        var r = Kt.indexOf(e),
            i = new Date(t[0], t[1], t[2]).getDay();
        if (r !== i) return f(s).weekdayMismatch = !0, s._isValid = !1, !1
    }
    return !0
}

function ni(e, t, s) {
    if (e) return ti[e];
    if (t) return 0;
    var r = parseInt(s, 10),
        i = r % 100,
        a = (r - i) / 100;
    return a * 60 + i
}

function ss(e) {
    var t = ei.exec(ii(e._i)),
        s;
    if (t) {
        if (s = si(t[4], t[3], t[2], t[5], t[6], t[7]), !ai(t[1], s, e)) return;
        e._a = s, e._tzm = ni(t[8], t[9], t[10]), e._d = pe.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0
    } else e._isValid = !1
}

function oi(e) {
    var t = Xr.exec(e._i);
    if (t !== null) {
        e._d = new Date(+t[1]);
        return
    }
    if (ts(e), e._isValid === !1) delete e._isValid;
    else return;
    if (ss(e), e._isValid === !1) delete e._isValid;
    else return;
    e._strict ? e._isValid = !1 : l.createFromInputFallback(e)
}
l.createFromInputFallback = W("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
});

function le(e, t, s) {
    return e ? ? t ? ? s
}

function li(e) {
    var t = new Date(l.now());
    return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
}

function St(e) {
    var t, s, r = [],
        i, a, n;
    if (!e._d) {
        for (i = li(e), e._w && e._a[U] == null && e._a[z] == null && ui(e), e._dayOfYear != null && (n = le(e._a[v], i[v]), (e._dayOfYear > we(n) || e._dayOfYear === 0) && (f(e)._overflowDayOfYear = !0), s = pe(n, 0, e._dayOfYear), e._a[z] = s.getUTCMonth(), e._a[U] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t) e._a[t] = r[t] = i[t];
        for (; t < 7; t++) e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
        e._a[Y] === 24 && e._a[I] === 0 && e._a[Z] === 0 && e._a[re] === 0 && (e._nextDay = !0, e._a[Y] = 0), e._d = (e._useUTC ? pe : _r).apply(null, r), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Y] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (f(e).weekdayMismatch = !0)
    }
}

function ui(e) {
    var t, s, r, i, a, n, h, c, w;
    t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, n = 4, s = le(t.GG, e._a[v], Se(S(), 1, 4).year), r = le(t.W, 1), i = le(t.E, 1), (i < 1 || i > 7) && (c = !0)) : (a = e._locale._week.dow, n = e._locale._week.doy, w = Se(S(), a, n), s = le(t.gg, e._a[v], w.year), r = le(t.w, w.week), t.d != null ? (i = t.d, (i < 0 || i > 6) && (c = !0)) : t.e != null ? (i = t.e + a, (t.e < 0 || t.e > 6) && (c = !0)) : i = a), r < 1 || r > q(s, a, n) ? f(e)._overflowWeeks = !0 : c != null ? f(e)._overflowWeekday = !0 : (h = Jt(s, r, i, a, n), e._a[v] = h.year, e._dayOfYear = h.dayOfYear)
}
l.ISO_8601 = function() {};
l.RFC_2822 = function() {};

function Dt(e) {
    if (e._f === l.ISO_8601) {
        ts(e);
        return
    }
    if (e._f === l.RFC_2822) {
        ss(e);
        return
    }
    e._a = [], f(e).empty = !0;
    var t = "" + e._i,
        s, r, i, a, n, h = t.length,
        c = 0,
        w, T;
    for (i = Ct(e._f, e._locale).match(dt) || [], T = i.length, s = 0; s < T; s++) a = i[s], r = (t.match(Qs(a, e)) || [])[0], r && (n = t.substr(0, t.indexOf(r)), n.length > 0 && f(e).unusedInput.push(n), t = t.slice(t.indexOf(r) + r.length), c += r.length), he[a] ? (r ? f(e).empty = !1 : f(e).unusedTokens.push(a), er(a, r, e)) : e._strict && !r && f(e).unusedTokens.push(a);
    f(e).charsLeftOver = h - c, t.length > 0 && f(e).unusedInput.push(t), e._a[Y] <= 12 && f(e).bigHour === !0 && e._a[Y] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[Y] = hi(e._locale, e._a[Y], e._meridiem), w = f(e).era, w !== null && (e._a[v] = e._locale.erasConvertYear(w, e._a[v])), St(e), pt(e)
}

function hi(e, t, s) {
    var r;
    return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t)
}

function di(e) {
    var t, s, r, i, a, n, h = !1,
        c = e._f.length;
    if (c === 0) {
        f(e).invalidFormat = !0, e._d = new Date(NaN);
        return
    }
    for (i = 0; i < c; i++) a = 0, n = !1, t = ut({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[i], Dt(t), lt(t) && (n = !0), a += f(t).charsLeftOver, a += f(t).unusedTokens.length * 10, f(t).score = a, h ? a < r && (r = a, s = t) : (r == null || a < r || n) && (r = a, s = t, n && (h = !0));
    X(e, s || t)
}

function fi(e) {
    if (!e._d) {
        var t = ft(e._i),
            s = t.day === void 0 ? t.date : t.day;
        e._a = Ft([t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond], function(r) {
            return r && parseInt(r, 10)
        }), St(e)
    }
}

function ci(e) {
    var t = new ke(pt(rs(e)));
    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
}

function rs(e) {
    var t = e._i,
        s = e._f;
    return e._locale = e._locale || J(e._l), t === null || s === void 0 && t === "" ? Ee({
        nullInput: !0
    }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), C(t) ? new ke(pt(t)) : (Me(t) ? e._d = t : L(s) ? di(e) : s ? Dt(e) : mi(e), lt(e) || (e._d = null), e))
}

function mi(e) {
    var t = e._i;
    b(t) ? e._d = new Date(l.now()) : Me(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? oi(e) : L(t) ? (e._a = Ft(t.slice(0), function(s) {
        return parseInt(s, 10)
    }), St(e)) : ie(t) ? fi(e) : B(t) ? e._d = new Date(t) : l.createFromInputFallback(e)
}

function is(e, t, s, r, i) {
    var a = {};
    return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (ie(e) && ot(e) || L(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = i, a._l = s, a._i = e, a._f = t, a._strict = r, ci(a)
}

function S(e, t, s, r) {
    return is(e, t, s, r, !1)
}
var _i = W("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = S.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : Ee()
    }),
    yi = W("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = S.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : Ee()
    });

function as(e, t) {
    var s, r;
    if (t.length === 1 && L(t[0]) && (t = t[0]), !t.length) return S();
    for (s = t[0], r = 1; r < t.length; ++r)(!t[r].isValid() || t[r][e](s)) && (s = t[r]);
    return s
}

function gi() {
    var e = [].slice.call(arguments, 0);
    return as("isBefore", e)
}

function wi() {
    var e = [].slice.call(arguments, 0);
    return as("isAfter", e)
}
var pi = function() {
        return Date.now ? Date.now() : +new Date
    },
    ye = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

function Si(e) {
    var t, s = !1,
        r, i = ye.length;
    for (t in e)
        if (y(e, t) && !(k.call(ye, t) !== -1 && (e[t] == null || !isNaN(e[t])))) return !1;
    for (r = 0; r < i; ++r)
        if (e[ye[r]]) {
            if (s) return !1;
            parseFloat(e[ye[r]]) !== m(e[ye[r]]) && (s = !0)
        }
    return !0
}

function Di() {
    return this._isValid
}

function Mi() {
    return E(NaN)
}

function Ze(e) {
    var t = ft(e),
        s = t.year || 0,
        r = t.quarter || 0,
        i = t.month || 0,
        a = t.week || t.isoWeek || 0,
        n = t.day || 0,
        h = t.hour || 0,
        c = t.minute || 0,
        w = t.second || 0,
        T = t.millisecond || 0;
    this._isValid = Si(t), this._milliseconds = +T + w * 1e3 + c * 6e4 + h * 1e3 * 60 * 60, this._days = +n + a * 7, this._months = +i + r * 3 + s * 12, this._data = {}, this._locale = J(), this._bubble()
}

function Re(e) {
    return e instanceof Ze
}

function it(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
}

function ki(e, t, s) {
    var r = Math.min(e.length, t.length),
        i = Math.abs(e.length - t.length),
        a = 0,
        n;
    for (n = 0; n < r; n++)(s && e[n] !== t[n] || !s && m(e[n]) !== m(t[n])) && a++;
    return a + i
}

function ns(e, t) {
    d(e, 0, 0, function() {
        var s = this.utcOffset(),
            r = "+";
        return s < 0 && (s = -s, r = "-"), r + A(~~(s / 60), 2) + t + A(~~s % 60, 2)
    })
}
ns("Z", ":");
ns("ZZ", "");
u("Z", je);
u("ZZ", je);
p(["Z", "ZZ"], function(e, t, s) {
    s._useUTC = !0, s._tzm = Mt(je, e)
});
var Yi = /([\+\-]|\d\d)/gi;

function Mt(e, t) {
    var s = (t || "").match(e),
        r, i, a;
    return s === null ? null : (r = s[s.length - 1] || [], i = (r + "").match(Yi) || ["-", 0, 0], a = +(i[1] * 60) + m(i[2]), a === 0 ? 0 : i[0] === "+" ? a : -a)
}

function kt(e, t) {
    var s, r;
    return t._isUTC ? (s = t.clone(), r = (C(e) || Me(e) ? e.valueOf() : S(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), l.updateOffset(s, !1), s) : S(e).local()
}

function at(e) {
    return -Math.round(e._d.getTimezoneOffset())
}
l.updateOffset = function() {};

function vi(e, t, s) {
    var r = this._offset || 0,
        i;
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) {
        if (typeof e == "string") {
            if (e = Mt(je, e), e === null) return this
        } else Math.abs(e) < 16 && !s && (e = e * 60);
        return !this._isUTC && t && (i = at(this)), this._offset = e, this._isUTC = !0, i != null && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? us(this, E(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this
    } else return this._isUTC ? r : at(this)
}

function Oi(e, t) {
    return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
}

function xi(e) {
    return this.utcOffset(0, e)
}

function Ti(e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(at(this), "m")), this
}

function bi() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
        var e = Mt(Js, this._i);
        e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
    }
    return this
}

function Ri(e) {
    return this.isValid() ? (e = e ? S(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1
}

function Ni() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
}

function Pi() {
    if (!b(this._isDSTShifted)) return this._isDSTShifted;
    var e = {},
        t;
    return ut(e, this), e = rs(e), e._a ? (t = e._isUTC ? H(e._a) : S(e._a), this._isDSTShifted = this.isValid() && ki(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
}

function Wi() {
    return this.isValid() ? !this._isUTC : !1
}

function Fi() {
    return this.isValid() ? this._isUTC : !1
}

function os() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1
}
var Ii = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    Li = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function E(e, t) {
    var s = e,
        r = null,
        i, a, n;
    return Re(e) ? s = {
        ms: e._milliseconds,
        d: e._days,
        M: e._months
    } : B(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = Ii.exec(e)) ? (i = r[1] === "-" ? -1 : 1, s = {
        y: 0,
        d: m(r[U]) * i,
        h: m(r[Y]) * i,
        m: m(r[I]) * i,
        s: m(r[Z]) * i,
        ms: m(it(r[re] * 1e3)) * i
    }) : (r = Li.exec(e)) ? (i = r[1] === "-" ? -1 : 1, s = {
        y: se(r[2], i),
        M: se(r[3], i),
        w: se(r[4], i),
        d: se(r[5], i),
        h: se(r[6], i),
        m: se(r[7], i),
        s: se(r[8], i)
    }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (n = Ci(S(s.from), S(s.to)), s = {}, s.ms = n.milliseconds, s.M = n.months), a = new Ze(s), Re(e) && y(e, "_locale") && (a._locale = e._locale), Re(e) && y(e, "_isValid") && (a._isValid = e._isValid), a
}
E.fn = Ze.prototype;
E.invalid = Mi;

function se(e, t) {
    var s = e && parseFloat(e.replace(",", "."));
    return (isNaN(s) ? 0 : s) * t
}

function Nt(e, t) {
    var s = {};
    return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s
}

function Ci(e, t) {
    var s;
    return e.isValid() && t.isValid() ? (t = kt(t, e), e.isBefore(t) ? s = Nt(e, t) : (s = Nt(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : {
        milliseconds: 0,
        months: 0
    }
}

function ls(e, t) {
    return function(s, r) {
        var i, a;
        return r !== null && !isNaN(+r) && (Lt(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = s, s = r, r = a), i = E(s, r), us(this, i, e), this
    }
}

function us(e, t, s, r) {
    var i = t._milliseconds,
        a = it(t._days),
        n = it(t._months);
    e.isValid() && (r = r ? ? !0, n && zt(e, Pe(e, "Month") + n * s), a && Ut(e, "Date", Pe(e, "Date") + a * s), i && e._d.setTime(e._d.valueOf() + i * s), r && l.updateOffset(e, a || n))
}
var Ei = ls(1, "add"),
    Ui = ls(-1, "subtract");

function hs(e) {
    return typeof e == "string" || e instanceof String
}

function Ai(e) {
    return C(e) || Me(e) || hs(e) || B(e) || Vi(e) || Hi(e) || e === null || e === void 0
}

function Hi(e) {
    var t = ie(e) && !ot(e),
        s = !1,
        r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
        i, a, n = r.length;
    for (i = 0; i < n; i += 1) a = r[i], s = s || y(e, a);
    return t && s
}

function Vi(e) {
    var t = L(e),
        s = !1;
    return t && (s = e.filter(function(r) {
        return !B(r) && hs(e)
    }).length === 0), t && s
}

function Gi(e) {
    var t = ie(e) && !ot(e),
        s = !1,
        r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
        i, a;
    for (i = 0; i < r.length; i += 1) a = r[i], s = s || y(e, a);
    return t && s
}

function ji(e, t) {
    var s = e.diff(t, "days", !0);
    return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse"
}

function $i(e, t) {
    arguments.length === 1 && (arguments[0] ? Ai(arguments[0]) ? (e = arguments[0], t = void 0) : Gi(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
    var s = e || S(),
        r = kt(s, this).startOf("day"),
        i = l.calendarFormat(this, r) || "sameElse",
        a = t && (V(t[i]) ? t[i].call(this, s) : t[i]);
    return this.format(a || this.localeData().calendar(i, this, S(s)))
}

function zi() {
    return new ke(this)
}

function Zi(e, t) {
    var s = C(e) ? e : S(e);
    return this.isValid() && s.isValid() ? (t = F(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1
}

function qi(e, t) {
    var s = C(e) ? e : S(e);
    return this.isValid() && s.isValid() ? (t = F(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1
}

function Bi(e, t, s, r) {
    var i = C(e) ? e : S(e),
        a = C(t) ? t : S(t);
    return this.isValid() && i.isValid() && a.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(i, s) : !this.isBefore(i, s)) && (r[1] === ")" ? this.isBefore(a, s) : !this.isAfter(a, s))) : !1
}

function Ji(e, t) {
    var s = C(e) ? e : S(e),
        r;
    return this.isValid() && s.isValid() ? (t = F(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1
}

function Ki(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t)
}

function Qi(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t)
}

function Xi(e, t, s) {
    var r, i, a;
    if (!this.isValid()) return NaN;
    if (r = kt(e, this), !r.isValid()) return NaN;
    switch (i = (r.utcOffset() - this.utcOffset()) * 6e4, t = F(t), t) {
        case "year":
            a = Ne(this, r) / 12;
            break;
        case "month":
            a = Ne(this, r);
            break;
        case "quarter":
            a = Ne(this, r) / 3;
            break;
        case "second":
            a = (this - r) / 1e3;
            break;
        case "minute":
            a = (this - r) / 6e4;
            break;
        case "hour":
            a = (this - r) / 36e5;
            break;
        case "day":
            a = (this - r - i) / 864e5;
            break;
        case "week":
            a = (this - r - i) / 6048e5;
            break;
        default:
            a = this - r
    }
    return s ? a : P(a)
}

function Ne(e, t) {
    if (e.date() < t.date()) return -Ne(t, e);
    var s = (t.year() - e.year()) * 12 + (t.month() - e.month()),
        r = e.clone().add(s, "months"),
        i, a;
    return t - r < 0 ? (i = e.clone().add(s - 1, "months"), a = (t - r) / (r - i)) : (i = e.clone().add(s + 1, "months"), a = (t - r) / (i - r)), -(s + a) || 0
}
l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

function ea() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}

function ta(e) {
    if (!this.isValid()) return null;
    var t = e !== !0,
        s = t ? this.clone().utc() : this;
    return s.year() < 0 || s.year() > 9999 ? be(s, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : V(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", be(s, "Z")) : be(s, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
}

function sa() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e = "moment",
        t = "",
        s, r, i, a;
    return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(s + r + i + a)
}

function ra(e) {
    e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
    var t = be(this, e);
    return this.localeData().postformat(t)
}

function ia(e, t) {
    return this.isValid() && (C(e) && e.isValid() || S(e).isValid()) ? E({
        to: this,
        from: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
}

function aa(e) {
    return this.from(S(), e)
}

function na(e, t) {
    return this.isValid() && (C(e) && e.isValid() || S(e).isValid()) ? E({
        from: this,
        to: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
}

function oa(e) {
    return this.to(S(), e)
}

function ds(e) {
    var t;
    return e === void 0 ? this._locale._abbr : (t = J(e), t != null && (this._locale = t), this)
}
var fs = W("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
    return e === void 0 ? this.localeData() : this.locale(e)
});

function cs() {
    return this._locale
}
var Ie = 1e3,
    de = 60 * Ie,
    Le = 60 * de,
    ms = (365 * 400 + 97) * 24 * Le;

function fe(e, t) {
    return (e % t + t) % t
}

function _s(e, t, s) {
    return e < 100 && e >= 0 ? new Date(e + 400, t, s) - ms : new Date(e, t, s).valueOf()
}

function ys(e, t, s) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - ms : Date.UTC(e, t, s)
}

function la(e) {
    var t, s;
    if (e = F(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
    switch (s = this._isUTC ? ys : _s, e) {
        case "year":
            t = s(this.year(), 0, 1);
            break;
        case "quarter":
            t = s(this.year(), this.month() - this.month() % 3, 1);
            break;
        case "month":
            t = s(this.year(), this.month(), 1);
            break;
        case "week":
            t = s(this.year(), this.month(), this.date() - this.weekday());
            break;
        case "isoWeek":
            t = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
        case "day":
        case "date":
            t = s(this.year(), this.month(), this.date());
            break;
        case "hour":
            t = this._d.valueOf(), t -= fe(t + (this._isUTC ? 0 : this.utcOffset() * de), Le);
            break;
        case "minute":
            t = this._d.valueOf(), t -= fe(t, de);
            break;
        case "second":
            t = this._d.valueOf(), t -= fe(t, Ie);
            break
    }
    return this._d.setTime(t), l.updateOffset(this, !0), this
}

function ua(e) {
    var t, s;
    if (e = F(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
    switch (s = this._isUTC ? ys : _s, e) {
        case "year":
            t = s(this.year() + 1, 0, 1) - 1;
            break;
        case "quarter":
            t = s(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
        case "month":
            t = s(this.year(), this.month() + 1, 1) - 1;
            break;
        case "week":
            t = s(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
        case "isoWeek":
            t = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
        case "day":
        case "date":
            t = s(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case "hour":
            t = this._d.valueOf(), t += Le - fe(t + (this._isUTC ? 0 : this.utcOffset() * de), Le) - 1;
            break;
        case "minute":
            t = this._d.valueOf(), t += de - fe(t, de) - 1;
            break;
        case "second":
            t = this._d.valueOf(), t += Ie - fe(t, Ie) - 1;
            break
    }
    return this._d.setTime(t), l.updateOffset(this, !0), this
}

function ha() {
    return this._d.valueOf() - (this._offset || 0) * 6e4
}

function da() {
    return Math.floor(this.valueOf() / 1e3)
}

function fa() {
    return new Date(this.valueOf())
}

function ca() {
    var e = this;
    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
}

function ma() {
    var e = this;
    return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds()
    }
}

function _a() {
    return this.isValid() ? this.toISOString() : null
}

function ya() {
    return lt(this)
}

function ga() {
    return X({}, f(this))
}

function wa() {
    return f(this).overflow
}

function pa() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    }
}
d("N", 0, 0, "eraAbbr");
d("NN", 0, 0, "eraAbbr");
d("NNN", 0, 0, "eraAbbr");
d("NNNN", 0, 0, "eraName");
d("NNNNN", 0, 0, "eraNarrow");
d("y", ["y", 1], "yo", "eraYear");
d("y", ["yy", 2], 0, "eraYear");
d("y", ["yyy", 3], 0, "eraYear");
d("y", ["yyyy", 4], 0, "eraYear");
u("N", Yt);
u("NN", Yt);
u("NNN", Yt);
u("NNNN", Ra);
u("NNNNN", Na);
p(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, s, r) {
    var i = s._locale.erasParse(e, r, s._strict);
    i ? f(s).era = i : f(s).invalidEra = e
});
u("y", me);
u("yy", me);
u("yyy", me);
u("yyyy", me);
u("yo", Pa);
p(["y", "yy", "yyy", "yyyy"], v);
p(["yo"], function(e, t, s, r) {
    var i;
    s._locale._eraYearOrdinalRegex && (i = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[v] = s._locale.eraYearOrdinalParse(e, i) : t[v] = parseInt(e, 10)
});

function Sa(e, t) {
    var s, r, i, a = this._eras || J("en")._eras;
    for (s = 0, r = a.length; s < r; ++s) {
        switch (typeof a[s].since) {
            case "string":
                i = l(a[s].since).startOf("day"), a[s].since = i.valueOf();
                break
        }
        switch (typeof a[s].until) {
            case "undefined":
                a[s].until = 1 / 0;
                break;
            case "string":
                i = l(a[s].until).startOf("day").valueOf(), a[s].until = i.valueOf();
                break
        }
    }
    return a
}

function Da(e, t, s) {
    var r, i, a = this.eras(),
        n, h, c;
    for (e = e.toUpperCase(), r = 0, i = a.length; r < i; ++r)
        if (n = a[r].name.toUpperCase(), h = a[r].abbr.toUpperCase(), c = a[r].narrow.toUpperCase(), s) switch (t) {
            case "N":
            case "NN":
            case "NNN":
                if (h === e) return a[r];
                break;
            case "NNNN":
                if (n === e) return a[r];
                break;
            case "NNNNN":
                if (c === e) return a[r];
                break
        } else if ([n, h, c].indexOf(e) >= 0) return a[r]
}

function Ma(e, t) {
    var s = e.since <= e.until ? 1 : -1;
    return t === void 0 ? l(e.since).year() : l(e.since).year() + (t - e.offset) * s
}

function ka() {
    var e, t, s, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
        if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since) return r[e].name;
    return ""
}

function Ya() {
    var e, t, s, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
        if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since) return r[e].narrow;
    return ""
}

function va() {
    var e, t, s, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
        if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since) return r[e].abbr;
    return ""
}

function Oa() {
    var e, t, s, r, i = this.localeData().eras();
    for (e = 0, t = i.length; e < t; ++e)
        if (s = i[e].since <= i[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), i[e].since <= r && r <= i[e].until || i[e].until <= r && r <= i[e].since) return (this.year() - l(i[e].since).year()) * s + i[e].offset;
    return this.year()
}

function xa(e) {
    return y(this, "_erasNameRegex") || vt.call(this), e ? this._erasNameRegex : this._erasRegex
}

function Ta(e) {
    return y(this, "_erasAbbrRegex") || vt.call(this), e ? this._erasAbbrRegex : this._erasRegex
}

function ba(e) {
    return y(this, "_erasNarrowRegex") || vt.call(this), e ? this._erasNarrowRegex : this._erasRegex
}

function Yt(e, t) {
    return t.erasAbbrRegex(e)
}

function Ra(e, t) {
    return t.erasNameRegex(e)
}

function Na(e, t) {
    return t.erasNarrowRegex(e)
}

function Pa(e, t) {
    return t._eraYearOrdinalRegex || me
}

function vt() {
    var e = [],
        t = [],
        s = [],
        r = [],
        i, a, n = this.eras();
    for (i = 0, a = n.length; i < a; ++i) t.push(R(n[i].name)), e.push(R(n[i].abbr)), s.push(R(n[i].narrow)), r.push(R(n[i].name)), r.push(R(n[i].abbr)), r.push(R(n[i].narrow));
    this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + s.join("|") + ")", "i")
}
d(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100
});
d(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100
});

function qe(e, t) {
    d(0, [e, e.length], 0, t)
}
qe("gggg", "weekYear");
qe("ggggg", "weekYear");
qe("GGGG", "isoWeekYear");
qe("GGGGG", "isoWeekYear");
O("weekYear", "gg");
O("isoWeekYear", "GG");
x("weekYear", 1);
x("isoWeekYear", 1);
u("G", Ge);
u("g", Ge);
u("GG", D, N);
u("gg", D, N);
u("GGGG", mt, ct);
u("gggg", mt, ct);
u("GGGGG", Ve, Ae);
u("ggggg", Ve, Ae);
ve(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, s, r) {
    t[r.substr(0, 2)] = m(e)
});
ve(["gg", "GG"], function(e, t, s, r) {
    t[r] = l.parseTwoDigitYear(e)
});

function Wa(e) {
    return gs.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
}

function Fa(e) {
    return gs.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
}

function Ia() {
    return q(this.year(), 1, 4)
}

function La() {
    return q(this.isoWeekYear(), 1, 4)
}

function Ca() {
    var e = this.localeData()._week;
    return q(this.year(), e.dow, e.doy)
}

function Ea() {
    var e = this.localeData()._week;
    return q(this.weekYear(), e.dow, e.doy)
}

function gs(e, t, s, r, i) {
    var a;
    return e == null ? Se(this, r, i).year : (a = q(e, r, i), t > a && (t = a), Ua.call(this, e, t, s, r, i))
}

function Ua(e, t, s, r, i) {
    var a = Jt(e, t, s, r, i),
        n = pe(a.year, 0, a.dayOfYear);
    return this.year(n.getUTCFullYear()), this.month(n.getUTCMonth()), this.date(n.getUTCDate()), this
}
d("Q", 0, "Qo", "quarter");
O("quarter", "Q");
x("quarter", 7);
u("Q", At);
p("Q", function(e, t) {
    t[z] = (m(e) - 1) * 3
});

function Aa(e) {
    return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
}
d("D", ["DD", 2], "Do", "date");
O("date", "D");
x("date", 9);
u("D", D);
u("DD", D, N);
u("Do", function(e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
});
p(["D", "DD"], U);
p("Do", function(e, t) {
    t[U] = m(e.match(D)[0])
});
var ws = ce("Date", !0);
d("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
O("dayOfYear", "DDD");
x("dayOfYear", 4);
u("DDD", He);
u("DDDD", Ht);
p(["DDD", "DDDD"], function(e, t, s) {
    s._dayOfYear = m(e)
});

function Ha(e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return e == null ? t : this.add(e - t, "d")
}
d("m", ["mm", 2], 0, "minute");
O("minute", "m");
x("minute", 14);
u("m", D);
u("mm", D, N);
p(["m", "mm"], I);
var Va = ce("Minutes", !1);
d("s", ["ss", 2], 0, "second");
O("second", "s");
x("second", 15);
u("s", D);
u("ss", D, N);
p(["s", "ss"], Z);
var Ga = ce("Seconds", !1);
d("S", 0, 0, function() {
    return ~~(this.millisecond() / 100)
});
d(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10)
});
d(0, ["SSS", 3], 0, "millisecond");
d(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10
});
d(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100
});
d(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3
});
d(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4
});
d(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5
});
d(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6
});
O("millisecond", "ms");
x("millisecond", 16);
u("S", He, At);
u("SS", He, N);
u("SSS", He, Ht);
var ee, ps;
for (ee = "SSSS"; ee.length <= 9; ee += "S") u(ee, me);

function ja(e, t) {
    t[re] = m(("0." + e) * 1e3)
}
for (ee = "S"; ee.length <= 9; ee += "S") p(ee, ja);
ps = ce("Milliseconds", !1);
d("z", 0, 0, "zoneAbbr");
d("zz", 0, 0, "zoneName");

function $a() {
    return this._isUTC ? "UTC" : ""
}

function za() {
    return this._isUTC ? "Coordinated Universal Time" : ""
}
var o = ke.prototype;
o.add = Ei;
o.calendar = $i;
o.clone = zi;
o.diff = Xi;
o.endOf = ua;
o.format = ra;
o.from = ia;
o.fromNow = aa;
o.to = na;
o.toNow = oa;
o.get = qs;
o.invalidAt = wa;
o.isAfter = Zi;
o.isBefore = qi;
o.isBetween = Bi;
o.isSame = Ji;
o.isSameOrAfter = Ki;
o.isSameOrBefore = Qi;
o.isValid = ya;
o.lang = fs;
o.locale = ds;
o.localeData = cs;
o.max = yi;
o.min = _i;
o.parsingFlags = ga;
o.set = Bs;
o.startOf = la;
o.subtract = Ui;
o.toArray = ca;
o.toObject = ma;
o.toDate = fa;
o.toISOString = ta;
o.inspect = sa;
typeof Symbol < "u" && Symbol.for != null && (o[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">"
});
o.toJSON = _a;
o.toString = ea;
o.unix = da;
o.valueOf = ha;
o.creationData = pa;
o.eraName = ka;
o.eraNarrow = Ya;
o.eraAbbr = va;
o.eraYear = Oa;
o.year = Bt;
o.isLeapYear = mr;
o.weekYear = Wa;
o.isoWeekYear = Fa;
o.quarter = o.quarters = Aa;
o.month = Zt;
o.daysInMonth = dr;
o.week = o.weeks = Sr;
o.isoWeek = o.isoWeeks = Dr;
o.weeksInYear = Ca;
o.weeksInWeekYear = Ea;
o.isoWeeksInYear = Ia;
o.isoWeeksInISOWeekYear = La;
o.date = ws;
o.day = o.days = Fr;
o.weekday = Ir;
o.isoWeekday = Lr;
o.dayOfYear = Ha;
o.hour = o.hours = Gr;
o.minute = o.minutes = Va;
o.second = o.seconds = Ga;
o.millisecond = o.milliseconds = ps;
o.utcOffset = vi;
o.utc = xi;
o.local = Ti;
o.parseZone = bi;
o.hasAlignedHourOffset = Ri;
o.isDST = Ni;
o.isLocal = Wi;
o.isUtcOffset = Fi;
o.isUtc = os;
o.isUTC = os;
o.zoneAbbr = $a;
o.zoneName = za;
o.dates = W("dates accessor is deprecated. Use date instead.", ws);
o.months = W("months accessor is deprecated. Use month instead", Zt);
o.years = W("years accessor is deprecated. Use year instead", Bt);
o.zone = W("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Oi);
o.isDSTShifted = W("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Pi);

function Za(e) {
    return S(e * 1e3)
}

function qa() {
    return S.apply(null, arguments).parseZone()
}

function Ss(e) {
    return e
}
var g = ht.prototype;
g.calendar = Fs;
g.longDateFormat = Es;
g.invalidDate = As;
g.ordinal = Gs;
g.preparse = Ss;
g.postformat = Ss;
g.relativeTime = $s;
g.pastFuture = zs;
g.set = Ps;
g.eras = Sa;
g.erasParse = Da;
g.erasConvertYear = Ma;
g.erasAbbrRegex = Ta;
g.erasNameRegex = xa;
g.erasNarrowRegex = ba;
g.months = or;
g.monthsShort = lr;
g.monthsParse = hr;
g.monthsRegex = cr;
g.monthsShortRegex = fr;
g.week = yr;
g.firstDayOfYear = pr;
g.firstDayOfWeek = wr;
g.weekdays = br;
g.weekdaysMin = Nr;
g.weekdaysShort = Rr;
g.weekdaysParse = Wr;
g.weekdaysRegex = Cr;
g.weekdaysShortRegex = Er;
g.weekdaysMinRegex = Ur;
g.isPM = Hr;
g.meridiem = jr;

function Ce(e, t, s, r) {
    var i = J(),
        a = H().set(r, t);
    return i[s](a, e)
}

function Ds(e, t, s) {
    if (B(e) && (t = e, e = void 0), e = e || "", t != null) return Ce(e, t, s, "month");
    var r, i = [];
    for (r = 0; r < 12; r++) i[r] = Ce(e, r, s, "month");
    return i
}

function Ot(e, t, s, r) {
    typeof e == "boolean" ? (B(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, B(t) && (s = t, t = void 0), t = t || "");
    var i = J(),
        a = e ? i._week.dow : 0,
        n, h = [];
    if (s != null) return Ce(t, (s + a) % 7, r, "day");
    for (n = 0; n < 7; n++) h[n] = Ce(t, (n + a) % 7, r, "day");
    return h
}

function Ba(e, t) {
    return Ds(e, t, "months")
}

function Ja(e, t) {
    return Ds(e, t, "monthsShort")
}

function Ka(e, t, s) {
    return Ot(e, t, s, "weekdays")
}

function Qa(e, t, s) {
    return Ot(e, t, s, "weekdaysShort")
}

function Xa(e, t, s) {
    return Ot(e, t, s, "weekdaysMin")
}
te("en", {
    eras: [{
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
    }, {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
    }],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(e) {
        var t = e % 10,
            s = m(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
        return e + s
    }
});
l.lang = W("moment.lang is deprecated. Use moment.locale instead.", te);
l.langData = W("moment.langData is deprecated. Use moment.localeData instead.", J);
var j = Math.abs;

function en() {
    var e = this._data;
    return this._milliseconds = j(this._milliseconds), this._days = j(this._days), this._months = j(this._months), e.milliseconds = j(e.milliseconds), e.seconds = j(e.seconds), e.minutes = j(e.minutes), e.hours = j(e.hours), e.months = j(e.months), e.years = j(e.years), this
}

function Ms(e, t, s, r) {
    var i = E(t, s);
    return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble()
}

function tn(e, t) {
    return Ms(this, e, t, 1)
}

function sn(e, t) {
    return Ms(this, e, t, -1)
}

function Pt(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e)
}

function rn() {
    var e = this._milliseconds,
        t = this._days,
        s = this._months,
        r = this._data,
        i, a, n, h, c;
    return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += Pt(nt(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, i = P(e / 1e3), r.seconds = i % 60, a = P(i / 60), r.minutes = a % 60, n = P(a / 60), r.hours = n % 24, t += P(n / 24), c = P(ks(t)), s += c, t -= Pt(nt(c)), h = P(s / 12), s %= 12, r.days = t, r.months = s, r.years = h, this
}

function ks(e) {
    return e * 4800 / 146097
}

function nt(e) {
    return e * 146097 / 4800
}

function an(e) {
    if (!this.isValid()) return NaN;
    var t, s, r = this._milliseconds;
    if (e = F(e), e === "month" || e === "quarter" || e === "year") switch (t = this._days + r / 864e5, s = this._months + ks(t), e) {
        case "month":
            return s;
        case "quarter":
            return s / 3;
        case "year":
            return s / 12
    } else switch (t = this._days + Math.round(nt(this._months)), e) {
        case "week":
            return t / 7 + r / 6048e5;
        case "day":
            return t + r / 864e5;
        case "hour":
            return t * 24 + r / 36e5;
        case "minute":
            return t * 1440 + r / 6e4;
        case "second":
            return t * 86400 + r / 1e3;
        case "millisecond":
            return Math.floor(t * 864e5) + r;
        default:
            throw new Error("Unknown unit " + e)
    }
}

function nn() {
    return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + m(this._months / 12) * 31536e6 : NaN
}

function K(e) {
    return function() {
        return this.as(e)
    }
}
var on = K("ms"),
    ln = K("s"),
    un = K("m"),
    hn = K("h"),
    dn = K("d"),
    fn = K("w"),
    cn = K("M"),
    mn = K("Q"),
    _n = K("y");

function yn() {
    return E(this)
}

function gn(e) {
    return e = F(e), this.isValid() ? this[e + "s"]() : NaN
}

function ae(e) {
    return function() {
        return this.isValid() ? this._data[e] : NaN
    }
}
var wn = ae("milliseconds"),
    pn = ae("seconds"),
    Sn = ae("minutes"),
    Dn = ae("hours"),
    Mn = ae("days"),
    kn = ae("months"),
    Yn = ae("years");

function vn() {
    return P(this.days() / 7)
}
var $ = Math.round,
    ue = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };

function On(e, t, s, r, i) {
    return i.relativeTime(t || 1, !!s, e, r)
}

function xn(e, t, s, r) {
    var i = E(e).abs(),
        a = $(i.as("s")),
        n = $(i.as("m")),
        h = $(i.as("h")),
        c = $(i.as("d")),
        w = $(i.as("M")),
        T = $(i.as("w")),
        G = $(i.as("y")),
        Q = a <= s.ss && ["s", a] || a < s.s && ["ss", a] || n <= 1 && ["m"] || n < s.m && ["mm", n] || h <= 1 && ["h"] || h < s.h && ["hh", h] || c <= 1 && ["d"] || c < s.d && ["dd", c];
    return s.w != null && (Q = Q || T <= 1 && ["w"] || T < s.w && ["ww", T]), Q = Q || w <= 1 && ["M"] || w < s.M && ["MM", w] || G <= 1 && ["y"] || ["yy", G], Q[2] = t, Q[3] = +e > 0, Q[4] = r, On.apply(null, Q)
}

function Tn(e) {
    return e === void 0 ? $ : typeof e == "function" ? ($ = e, !0) : !1
}

function bn(e, t) {
    return ue[e] === void 0 ? !1 : t === void 0 ? ue[e] : (ue[e] = t, e === "s" && (ue.ss = t - 1), !0)
}

function Rn(e, t) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var s = !1,
        r = ue,
        i, a;
    return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, ue, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), i = this.localeData(), a = xn(this, !s, r, i), s && (a = i.pastFuture(+this, a)), i.postformat(a)
}
var Xe = Math.abs;

function oe(e) {
    return (e > 0) - (e < 0) || +e
}

function Be() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e = Xe(this._milliseconds) / 1e3,
        t = Xe(this._days),
        s = Xe(this._months),
        r, i, a, n, h = this.asSeconds(),
        c, w, T, G;
    return h ? (r = P(e / 60), i = P(r / 60), e %= 60, r %= 60, a = P(s / 12), s %= 12, n = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", c = h < 0 ? "-" : "", w = oe(this._months) !== oe(h) ? "-" : "", T = oe(this._days) !== oe(h) ? "-" : "", G = oe(this._milliseconds) !== oe(h) ? "-" : "", c + "P" + (a ? w + a + "Y" : "") + (s ? w + s + "M" : "") + (t ? T + t + "D" : "") + (i || r || e ? "T" : "") + (i ? G + i + "H" : "") + (r ? G + r + "M" : "") + (e ? G + n + "S" : "")) : "P0D"
}
var _ = Ze.prototype;
_.isValid = Di;
_.abs = en;
_.add = tn;
_.subtract = sn;
_.as = an;
_.asMilliseconds = on;
_.asSeconds = ln;
_.asMinutes = un;
_.asHours = hn;
_.asDays = dn;
_.asWeeks = fn;
_.asMonths = cn;
_.asQuarters = mn;
_.asYears = _n;
_.valueOf = nn;
_._bubble = rn;
_.clone = yn;
_.get = gn;
_.milliseconds = wn;
_.seconds = pn;
_.minutes = Sn;
_.hours = Dn;
_.days = Mn;
_.weeks = vn;
_.months = kn;
_.years = Yn;
_.humanize = Rn;
_.toISOString = Be;
_.toString = Be;
_.toJSON = Be;
_.locale = ds;
_.localeData = cs;
_.toIsoString = W("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Be);
_.lang = fs;
d("X", 0, 0, "unix");
d("x", 0, 0, "valueOf");
u("x", Ge);
u("X", Ks);
p("X", function(e, t, s) {
    s._d = new Date(parseFloat(e) * 1e3)
});
p("x", function(e, t, s) {
    s._d = new Date(m(e))
}); //! moment.js
l.version = "2.29.4";
Rs(S);
l.fn = o;
l.min = gi;
l.max = wi;
l.now = pi;
l.utc = H;
l.unix = Za;
l.months = Ba;
l.isDate = Me;
l.locale = te;
l.invalid = Ee;
l.duration = E;
l.isMoment = C;
l.weekdays = Ka;
l.parseZone = qa;
l.localeData = J;
l.isDuration = Re;
l.monthsShort = Ja;
l.weekdaysMin = Xa;
l.defineLocale = wt;
l.updateLocale = qr;
l.locales = Br;
l.weekdaysShort = Qa;
l.normalizeUnits = F;
l.relativeTimeRounding = Tn;
l.relativeTimeThreshold = bn;
l.calendarFormat = ji;
l.prototype = o;
l.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
};
const In = {
    data() {
        return {
            form: {},
            validations: new bs
        }
    },
    computed: { ...xs(xt),
        ...Ts(Os, ["getUpdateKey"]),
        reCaptchaSiteKey() {
            return this.response.page && this.response.page.googleReCaptchaSiteKey ? this.response.page.googleReCaptchaSiteKey : ""
        },
        response() {
            return this.store.getResponse
        },
        source() {
            return {
                response: this.response,
                requestFormErrors: this.validations.errors
            }
        },
        isAuthenticated() {
            return this.authStore.isAuthenticated
        },
        error() {
            let e = {};
            return Object.keys(this.form).forEach(t => {
                e[t] = !1, this.validations.errors[t] && (e[t] = !0), this.response.message[t] && (e[t] = !0)
            }), e
        }
    },
    methods: {
        formIsValid() {
            return this.validations.run(this.form), !(Object.keys(this.validations.errors).length > 0)
        },
        IsInValid(e) {
            return !!this.validations.errors[e]
        },
        emptyIfNotExist(e, t) {
            return t && t[e] ? t[e] : ""
        },
        emptyArrayIfNotExist(e, t) {
            return t && t[e] ? t[e] : []
        },
        zeroIfNotExist(e, t) {
            return t && t[e] ? t[e] : 0
        },
        zeroArrayIfNotExist(e, t) {
            return t && t[e] ? t[e] : 0
        },
        zeroIfNull(e) {
            return e !== null && e !== "" ? e : 0
        },
        oneIfNotExist(e, t) {
            return t && t[e] ? t[e] : 1
        },
        year(e) {
            return e != "" ? new Date(e).getFullYear() : ""
        },
        month(e) {
            return e != "" ? new Date(e).getMonth() : ""
        },
        day(e) {
            return e != "" ? new Date(e).getDay() : ""
        },
        formatDate(e) {
            return l(e).format("DD MMM YYYY")
        },
        formatDateTime(e) {
            return l(e).format("DD MMM YYYY hh:mm A")
        },
        formatTime(e) {
            return l(e).format("hh:mm:ss A")
        },
        makeWebsiteDown() {
            let e = !1;
            Object.keys(ne.websiteDownPaths).forEach(t => {
                t === this.authStore.getWebsiteDown && (e = !0, this.$router.push(ne.websiteDownPaths[t]))
            }), e == !1 && Object.keys(ne.websiteDownPaths).forEach(t => {
                this.$router.currentRoute._value.fullPath === ne.websiteDownPaths[t] && this.$router.push("/")
            })
        },
        authFailedRedirect() {}
    },
    watch: {
        getUpdateKey: function() {
            let e = this.store.getForm;
            e && Object.keys(e).length > 0 && (Object.keys(this.form).forEach(s => {
                s.charAt(0) != "_" && typeof e[s] < "u" && (this.form[s] = e[s])
            }), this.store.storeForm()), this.authFailedRedirect()
        }
    },
    beforeCreate() {
        let e = xt();
        if (this.$options.onLoadInitGetRequest && this.$options.onLoadInitGetRequest == !0) {
            this.$options.beforeLoadClearPreviousResponse && this.$options.beforeLoadClearPreviousResponse == !0 && this.store.initResponse();
            let t = this;
            this.store.load(this.$route.params, this.$route.query).then(function() {
                t.$options.onLoadInitGetRequestResponseReceived && t.$options.onLoadInitGetRequestResponseReceived(t)
            })
        }
        this.$options.onLoggedInRedirectTodashboard && this.$options.onLoggedInRedirectTodashboard == !0 && e.isAuthenticated == !0 && this.$router.push(ne.loggedInRedirectTodashboard)
    },
    created() {
        this.$options.formValidations && this.$options.formValidations(this.validations), this.makeWebsiteDown(), this.authFailedRedirect()
    },
    mounted() {
        this.makeWebsiteDown(), this.authFailedRedirect()
    },
    beforeUpdate() {
        this.$options.onLoggedInRedirectTodashboard && this.$options.onLoggedInRedirectTodashboard == !0 && this.authStore.isAuthenticated == !0 && this.$router.push(ne.loggedInRedirectTodashboard)
    }
};
export {
    In as _, l as h
};