var bs = Object.defineProperty;
var Ts = (e, t, s) => t in e ? bs(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : e[t] = s;
var be = (e, t, s) => (Ts(e, typeof t != "symbol" ? t + "" : t, s), s);
import {
    a as ge
} from "./auth.b81bcb47.js";
import {
    h as It,
    X as Z,
    Y as xs,
    Z as Ws
} from "./entry.93d2037a.js";
const We = It("storeUpdated", {
        state: () => ({
            updateKey: {}
        }),
        getters: {
            getUpdateKey() {
                return this.updateKey
            }
        },
        actions: {
            storeUpdateKey(e) {
                this.updateKey = e
            }
        }
    }),
    Qe = It("storeWaitingupdate", {
        state: () => ({
            waitingupdate: !1
        }),
        getters: {
            isWaitingForUpdate() {
                return this.waitingupdate
            }
        },
        actions: {
            storeWaitingUpdateStatus(e) {
                this.waitingupdate = e
            }
        }
    }),
    En = {
        async formGet(e, t, s) {
            let r = ge(),
                i = We(),
                a = Qe();
            a.storeWaitingUpdateStatus(!0);
            let n = {};
            if (r.isAuthenticated) {
                let o = r.getApikey;
                o !== "" && (n.apikey = o), r.getJWTTokens !== null && r.getJWTTokens.accessToken !== void 0 && (n.jwttoken = r.getJWTTokens.accessToken)
            }
            return r.getWebToken !== null && (n.webtoken = r.getWebToken), await $fetch(Z.apiBaseUrl + t, {
                method: "GET",
                headers: n
            }).then(function(o) {
                o = JSON.parse(o), s.forEach(function(m) {
                    m.storeResponse(o), o.data !== "undefined" ? m.storeForm(o.data) : m.storeForm({}), i.storeUpdateKey(Math.random())
                }), o.successdata && Object.keys(o.successdata).length > 0 && (o.successdata.apikey && r.storeApikey(o.successdata.apikey), o.successdata.jwttokens && r.storeJWTTokens(o.successdata.jwttokens)), Object.keys(o).length > 0 && (o.csrftoken !== "undefined" && o.csrftoken !== "" && r.storeCSRFToken(o.csrftoken), o.webtoken !== "undefined" && o.webtoken !== "" && r.storeWebToken(o.webtoken)), o.auth !== "undefined" && o.auth === "failed" && (r.storeApikey(""), r.storeJWTTokens(null)), o.websitedown !== "undefined" && o.websitedown ? r.storeWebsiteDown(o.websitedown) : r.storeWebsiteDown("1"), o.domainguest !== "undefined" && o.domainguest ? r.storeDomainGuest(o.domainguest) : r.storeDomainGuest(""), o.domainmember !== "undefined" && o.domainmember ? r.storeDomainMember(o.domainmember) : r.storeDomainMember(""), a.storeWaitingUpdateStatus(!1)
            })
        },
        async formResource(e, t, s) {
            let r = {},
                i = ge(),
                a = We(),
                n = Qe();
            if (n.storeWaitingUpdateStatus(!0), i.isAuthenticated) {
                let o = i.getApikey;
                o !== "" && (r.apikey = o), i.getJWTTokens !== null && i.getJWTTokens.accessToken !== void 0 && (r.jwttoken = i.getJWTTokens.accessToken)
            }
            return i.getWebToken !== null && (r.webtoken = i.getWebToken), await $fetch(Z.apiBaseUrl + t, {
                method: "GET",
                headers: r,
                responseType: "blob"
            }).then(function(o) {
                let m = new FileReader;
                m.readAsDataURL(o), m.onloadend = function() {
                    var O = m.result;
                    o = O, s.forEach(function(c) {
                        c.storeResponse(o), a.storeUpdateKey(Math.random())
                    }), o.auth !== "undefined" && o.auth === "failed" && (i.storeApikey(""), i.storeJWTTokens(null)), o.websitedown !== "undefined" && o.websitedown ? i.storeWebsiteDown(o.websitedown) : i.storeWebsiteDown("1"), o.domainguest !== "undefined" && o.domainguest ? i.storeDomainGuest(o.domainguest) : i.storeDomainGuest(""), o.domainmember !== "undefined" && o.domainmember ? i.storeDomainMember(o.domainmember) : i.storeDomainMember("")
                }, n.storeWaitingUpdateStatus(!1)
            })
        },
        async formPost(e, t, s, r) {
            let i = ge(),
                a = We(),
                n = Qe();
            n.storeWaitingUpdateStatus(!0), s._csrftoken_ = i.getCSRFToken;
            var h = new FormData;
            for (var o in s) h.append(o, s[o]);
            let m = {};
            if (i.isAuthenticated) {
                let c = i.getApikey;
                c !== "" && (m.apikey = c), i.getJWTTokens !== null && i.getJWTTokens.accessToken !== void 0 && (m.jwttoken = i.getJWTTokens.accessToken)
            }
            return i.getWebToken !== null && (m.webtoken = i.getWebToken), await $fetch(Z.apiBaseUrl + t, {
                method: "POST",
                headers: m,
                body: h
            }).then(function(c) {
                c = JSON.parse(c), r.forEach(function(P) {
                    P.storeResponse(c), c.data !== "undefined" ? P.storeForm(c.data) : P.storeForm({}), a.storeUpdateKey(Math.random())
                }), c.successdata && Object.keys(c.successdata).length > 0 && (c.successdata.apikey && i.storeApikey(c.successdata.apikey), c.successdata.jwttokens && i.storeJWTTokens(c.successdata.jwttokens)), Object.keys(c).length > 0 && (c.csrftoken !== "undefined" && c.csrftoken !== "" && i.storeCSRFToken(c.csrftoken), c.webtoken !== "undefined" && c.webtoken !== "" && i.storeWebToken(c.webtoken)), c.auth !== "undefined" && c.auth === "failed" && (i.storeApikey(""), i.storeJWTTokens(null)), c.websitedown !== "undefined" && c.websitedown ? i.storeWebsiteDown(c.websitedown) : i.storeWebsiteDown("1"), c.domainguest !== "undefined" && c.domainguest ? i.storeDomainGuest(c.domainguest) : i.storeDomainGuest(""), c.domainmember !== "undefined" && c.domainmember ? i.storeDomainMember(c.domainmember) : i.storeDomainMember(""), n.storeWaitingUpdateStatus(!1)
            })
        }
    },
    Rs = () => ({
        response: {
            success: !1,
            message: "",
            data: [],
            successdata: [],
            wizard: 1,
            csrftoken: "",
            lists: [],
            user: [],
            page: [],
            pagerules: []
        },
        form: {}
    });
let Ns = {
    storeResponse(e) {
        this.response = e
    },
    initResponse() {
        this.response = {
            success: !1,
            message: "",
            data: [],
            successdata: [],
            wizard: 1,
            csrftoken: "",
            lists: [],
            user: [],
            page: [],
            pagerules: []
        }
    },
    storeForm(e) {
        this.form = e
    }
};
const Ps = {
        getResponse(e) {
            return e.response
        },
        getForm(e) {
            return e.form
        }
    },
    An = {
        state: Rs,
        actions: Ns,
        getters: Ps
    };
class Fs {
    constructor() {
        be(this, "_validations", []);
        be(this, "errors", {});
        be(this, "error", {})
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
var Ut;

function u() {
    return Ut.apply(null, arguments)
}

function Is(e) {
    Ut = e
}

function C(e) {
    return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
}

function ae(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]"
}

function w(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}

function dt(e) {
    if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e)
        if (w(e, t)) return !1;
    return !0
}

function W(e) {
    return e === void 0
}

function B(e) {
    return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]"
}

function Me(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
}

function Lt(e, t) {
    var s = [],
        r, i = e.length;
    for (r = 0; r < i; ++r) s.push(t(e[r], r));
    return s
}

function ee(e, t) {
    for (var s in t) w(t, s) && (e[s] = t[s]);
    return w(t, "toString") && (e.toString = t.toString), w(t, "valueOf") && (e.valueOf = t.valueOf), e
}

function V(e, t, s, r) {
    return os(e, t, s, r, !0).utc()
}

function Us() {
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

function _(e) {
    return e._pf == null && (e._pf = Us()), e._pf
}
var rt;
Array.prototype.some ? rt = Array.prototype.some : rt = function(e) {
    var t = Object(this),
        s = t.length >>> 0,
        r;
    for (r = 0; r < s; r++)
        if (r in t && e.call(this, t[r], r, t)) return !0;
    return !1
};

function ht(e) {
    if (e._isValid == null) {
        var t = _(e),
            s = rt.call(t.parsedDateParts, function(i) {
                return i != null
            }),
            r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s);
        if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e)) e._isValid = r;
        else return r
    }
    return e._isValid
}

function Ae(e) {
    var t = V(NaN);
    return e != null ? ee(_(t), e) : _(t).userInvalidated = !0, t
}
var Wt = u.momentProperties = [],
    Xe = !1;

function ft(e, t) {
    var s, r, i, a = Wt.length;
    if (W(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), W(t._i) || (e._i = t._i), W(t._f) || (e._f = t._f), W(t._l) || (e._l = t._l), W(t._strict) || (e._strict = t._strict), W(t._tzm) || (e._tzm = t._tzm), W(t._isUTC) || (e._isUTC = t._isUTC), W(t._offset) || (e._offset = t._offset), W(t._pf) || (e._pf = _(t)), W(t._locale) || (e._locale = t._locale), a > 0)
        for (s = 0; s < a; s++) r = Wt[s], i = t[r], W(i) || (e[r] = i);
    return e
}

function Ye(e) {
    ft(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Xe === !1 && (Xe = !0, u.updateOffset(this), Xe = !1)
}

function E(e) {
    return e instanceof Ye || e != null && e._isAMomentObject != null
}

function Ct(e) {
    u.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e)
}

function I(e, t) {
    var s = !0;
    return ee(function() {
        if (u.deprecationHandler != null && u.deprecationHandler(null, e), s) {
            var r = [],
                i, a, n, h = arguments.length;
            for (a = 0; a < h; a++) {
                if (i = "", typeof arguments[a] == "object") {
                    i += `
[` + a + "] ";
                    for (n in arguments[0]) w(arguments[0], n) && (i += n + ": " + arguments[0][n] + ", ");
                    i = i.slice(0, -2)
                } else i = arguments[a];
                r.push(i)
            }
            Ct(e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack), s = !1
        }
        return t.apply(this, arguments)
    }, t)
}
var Rt = {};

function Et(e, t) {
    u.deprecationHandler != null && u.deprecationHandler(e, t), Rt[e] || (Ct(t), Rt[e] = !0)
}
u.suppressDeprecationWarnings = !1;
u.deprecationHandler = null;

function j(e) {
    return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]"
}

function Ls(e) {
    var t, s;
    for (s in e) w(e, s) && (t = e[s], j(t) ? this[s] = t : this["_" + s] = t);
    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
}

function it(e, t) {
    var s = ee({}, e),
        r;
    for (r in t) w(t, r) && (ae(e[r]) && ae(t[r]) ? (s[r] = {}, ee(s[r], e[r]), ee(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
    for (r in e) w(e, r) && !w(t, r) && ae(e[r]) && (s[r] = ee({}, s[r]));
    return s
}

function ct(e) {
    e != null && this.set(e)
}
var at;
Object.keys ? at = Object.keys : at = function(e) {
    var t, s = [];
    for (t in e) w(e, t) && s.push(t);
    return s
};
var Cs = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
};

function Es(e, t, s) {
    var r = this._calendar[e] || this._calendar.sameElse;
    return j(r) ? r.call(t, s) : r
}

function G(e, t, s) {
    var r = "" + Math.abs(e),
        i = t - r.length,
        a = e >= 0;
    return (a ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
}
var mt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Te = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    et = {},
    de = {};

function f(e, t, s, r) {
    var i = r;
    typeof r == "string" && (i = function() {
        return this[r]()
    }), e && (de[e] = i), t && (de[t[0]] = function() {
        return G(i.apply(this, arguments), t[1], t[2])
    }), s && (de[s] = function() {
        return this.localeData().ordinal(i.apply(this, arguments), e)
    })
}

function As(e) {
    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
}

function Hs(e) {
    var t = e.match(mt),
        s, r;
    for (s = 0, r = t.length; s < r; s++) de[t[s]] ? t[s] = de[t[s]] : t[s] = As(t[s]);
    return function(i) {
        var a = "",
            n;
        for (n = 0; n < r; n++) a += j(t[n]) ? t[n].call(i, e) : t[n];
        return a
    }
}

function Re(e, t) {
    return e.isValid() ? (t = At(t, e.localeData()), et[t] = et[t] || Hs(t), et[t](e)) : e.localeData().invalidDate()
}

function At(e, t) {
    var s = 5;

    function r(i) {
        return t.longDateFormat(i) || i
    }
    for (Te.lastIndex = 0; s >= 0 && Te.test(e);) e = e.replace(Te, r), Te.lastIndex = 0, s -= 1;
    return e
}
var Gs = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
};

function Vs(e) {
    var t = this._longDateFormat[e],
        s = this._longDateFormat[e.toUpperCase()];
    return t || !s ? t : (this._longDateFormat[e] = s.match(mt).map(function(r) {
        return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r
    }).join(""), this._longDateFormat[e])
}
var js = "Invalid date";

function $s() {
    return this._invalidDate
}
var zs = "%d",
    Zs = /\d{1,2}/;

function Js(e) {
    return this._ordinal.replace("%d", e)
}
var qs = {
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

function Ks(e, t, s, r) {
    var i = this._relativeTime[s];
    return j(i) ? i(e, t, s, r) : i.replace(/%d/i, e)
}

function Bs(e, t) {
    var s = this._relativeTime[e > 0 ? "future" : "past"];
    return j(s) ? s(t) : s.replace(/%s/i, t)
}
var we = {};

function T(e, t) {
    var s = e.toLowerCase();
    we[s] = we[s + "s"] = we[t] = e
}

function U(e) {
    return typeof e == "string" ? we[e] || we[e.toLowerCase()] : void 0
}

function _t(e) {
    var t = {},
        s, r;
    for (r in e) w(e, r) && (s = U(r), s && (t[s] = e[r]));
    return t
}
var Ht = {};

function x(e, t) {
    Ht[e] = t
}

function Qs(e) {
    var t = [],
        s;
    for (s in e) w(e, s) && t.push({
        unit: s,
        priority: Ht[s]
    });
    return t.sort(function(r, i) {
        return r.priority - i.priority
    }), t
}

function He(e) {
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
}

function F(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
}

function y(e) {
    var t = +e,
        s = 0;
    return t !== 0 && isFinite(t) && (s = F(t)), s
}

function ce(e, t) {
    return function(s) {
        return s != null ? (Gt(this, e, s), u.updateOffset(this, t), this) : Fe(this, e)
    }
}

function Fe(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
}

function Gt(e, t, s) {
    e.isValid() && !isNaN(s) && (t === "FullYear" && He(e.year()) && e.month() === 1 && e.date() === 29 ? (s = y(s), e._d["set" + (e._isUTC ? "UTC" : "") + t](s, e.month(), Ze(s, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](s))
}

function Xs(e) {
    return e = U(e), j(this[e]) ? this[e]() : this
}

function er(e, t) {
    if (typeof e == "object") {
        e = _t(e);
        var s = Qs(e),
            r, i = s.length;
        for (r = 0; r < i; r++) this[s[r].unit](e[s[r].unit])
    } else if (e = U(e), j(this[e])) return this[e](t);
    return this
}
var Vt = /\d/,
    N = /\d\d/,
    jt = /\d{3}/,
    yt = /\d{4}/,
    Ge = /[+-]?\d{6}/,
    D = /\d\d?/,
    $t = /\d\d\d\d?/,
    zt = /\d\d\d\d\d\d?/,
    Ve = /\d{1,3}/,
    gt = /\d{1,4}/,
    je = /[+-]?\d{1,6}/,
    me = /\d+/,
    $e = /[+-]?\d+/,
    tr = /Z|[+-]\d\d:?\d\d/gi,
    ze = /Z|[+-]\d\d(?::?\d\d)?/gi,
    sr = /[+-]?\d+(\.\d{1,3})?/,
    ve = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    Ie;
Ie = {};

function d(e, t, s) {
    Ie[e] = j(t) ? t : function(r, i) {
        return r && s ? s : t
    }
}

function rr(e, t) {
    return w(Ie, e) ? Ie[e](t._strict, t._locale) : new RegExp(ir(e))
}

function ir(e) {
    return R(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, s, r, i, a) {
        return s || r || i || a
    }))
}

function R(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
}
var nt = {};

function S(e, t) {
    var s, r = t,
        i;
    for (typeof e == "string" && (e = [e]), B(t) && (r = function(a, n) {
            n[t] = y(a)
        }), i = e.length, s = 0; s < i; s++) nt[e[s]] = r
}

function Oe(e, t) {
    S(e, function(s, r, i, a) {
        i._w = i._w || {}, t(s, i._w, i, a)
    })
}

function ar(e, t, s) {
    t != null && w(nt, e) && nt[e](t, s._a, s, e)
}
var b = 0,
    J = 1,
    H = 2,
    v = 3,
    L = 4,
    q = 5,
    ie = 6,
    nr = 7,
    or = 8;

function lr(e, t) {
    return (e % t + t) % t
}
var Y;
Array.prototype.indexOf ? Y = Array.prototype.indexOf : Y = function(e) {
    var t;
    for (t = 0; t < this.length; ++t)
        if (this[t] === e) return t;
    return -1
};

function Ze(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var s = lr(t, 12);
    return e += (t - s) / 12, s === 1 ? He(e) ? 29 : 28 : 31 - s % 7 % 2
}
f("M", ["MM", 2], "Mo", function() {
    return this.month() + 1
});
f("MMM", 0, 0, function(e) {
    return this.localeData().monthsShort(this, e)
});
f("MMMM", 0, 0, function(e) {
    return this.localeData().months(this, e)
});
T("month", "M");
x("month", 8);
d("M", D);
d("MM", D, N);
d("MMM", function(e, t) {
    return t.monthsShortRegex(e)
});
d("MMMM", function(e, t) {
    return t.monthsRegex(e)
});
S(["M", "MM"], function(e, t) {
    t[J] = y(e) - 1
});
S(["MMM", "MMMM"], function(e, t, s, r) {
    var i = s._locale.monthsParse(e, r, s._strict);
    i != null ? t[J] = i : _(s).invalidMonth = e
});
var ur = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    Zt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    Jt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    dr = ve,
    hr = ve;

function fr(e, t) {
    return e ? C(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Jt).test(t) ? "format" : "standalone"][e.month()] : C(this._months) ? this._months : this._months.standalone
}

function cr(e, t) {
    return e ? C(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Jt.test(t) ? "format" : "standalone"][e.month()] : C(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
}

function mr(e, t, s) {
    var r, i, a, n = e.toLocaleLowerCase();
    if (!this._monthsParse)
        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) a = V([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
    return s ? t === "MMM" ? (i = Y.call(this._shortMonthsParse, n), i !== -1 ? i : null) : (i = Y.call(this._longMonthsParse, n), i !== -1 ? i : null) : t === "MMM" ? (i = Y.call(this._shortMonthsParse, n), i !== -1 ? i : (i = Y.call(this._longMonthsParse, n), i !== -1 ? i : null)) : (i = Y.call(this._longMonthsParse, n), i !== -1 ? i : (i = Y.call(this._shortMonthsParse, n), i !== -1 ? i : null))
}

function _r(e, t, s) {
    var r, i, a;
    if (this._monthsParseExact) return mr.call(this, e, t, s);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
        if (i = V([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), !s && !this._monthsParse[r] && (a = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(a.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e)) return r;
        if (s && t === "MMM" && this._shortMonthsParse[r].test(e)) return r;
        if (!s && this._monthsParse[r].test(e)) return r
    }
}

function qt(e, t) {
    var s;
    if (!e.isValid()) return e;
    if (typeof t == "string") {
        if (/^\d+$/.test(t)) t = y(t);
        else if (t = e.localeData().monthsParse(t), !B(t)) return e
    }
    return s = Math.min(e.date(), Ze(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, s), e
}

function Kt(e) {
    return e != null ? (qt(this, e), u.updateOffset(this, !0), this) : Fe(this, "Month")
}

function yr() {
    return Ze(this.year(), this.month())
}

function gr(e) {
    return this._monthsParseExact ? (w(this, "_monthsRegex") || Bt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (w(this, "_monthsShortRegex") || (this._monthsShortRegex = dr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
}

function wr(e) {
    return this._monthsParseExact ? (w(this, "_monthsRegex") || Bt.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (w(this, "_monthsRegex") || (this._monthsRegex = hr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
}

function Bt() {
    function e(n, h) {
        return h.length - n.length
    }
    var t = [],
        s = [],
        r = [],
        i, a;
    for (i = 0; i < 12; i++) a = V([2e3, i]), t.push(this.monthsShort(a, "")), s.push(this.months(a, "")), r.push(this.months(a, "")), r.push(this.monthsShort(a, ""));
    for (t.sort(e), s.sort(e), r.sort(e), i = 0; i < 12; i++) t[i] = R(t[i]), s[i] = R(s[i]);
    for (i = 0; i < 24; i++) r[i] = R(r[i]);
    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
}
f("Y", 0, 0, function() {
    var e = this.year();
    return e <= 9999 ? G(e, 4) : "+" + e
});
f(0, ["YY", 2], 0, function() {
    return this.year() % 100
});
f(0, ["YYYY", 4], 0, "year");
f(0, ["YYYYY", 5], 0, "year");
f(0, ["YYYYYY", 6, !0], 0, "year");
T("year", "y");
x("year", 1);
d("Y", $e);
d("YY", D, N);
d("YYYY", gt, yt);
d("YYYYY", je, Ge);
d("YYYYYY", je, Ge);
S(["YYYYY", "YYYYYY"], b);
S("YYYY", function(e, t) {
    t[b] = e.length === 2 ? u.parseTwoDigitYear(e) : y(e)
});
S("YY", function(e, t) {
    t[b] = u.parseTwoDigitYear(e)
});
S("Y", function(e, t) {
    t[b] = parseInt(e, 10)
});

function ke(e) {
    return He(e) ? 366 : 365
}
u.parseTwoDigitYear = function(e) {
    return y(e) + (y(e) > 68 ? 1900 : 2e3)
};
var Qt = ce("FullYear", !0);

function kr() {
    return He(this.year())
}

function Sr(e, t, s, r, i, a, n) {
    var h;
    return e < 100 && e >= 0 ? (h = new Date(e + 400, t, s, r, i, a, n), isFinite(h.getFullYear()) && h.setFullYear(e)) : h = new Date(e, t, s, r, i, a, n), h
}

function Se(e) {
    var t, s;
    return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
}

function Ue(e, t, s) {
    var r = 7 + t - s,
        i = (7 + Se(e, 0, r).getUTCDay() - t) % 7;
    return -i + r - 1
}

function Xt(e, t, s, r, i) {
    var a = (7 + s - r) % 7,
        n = Ue(e, r, i),
        h = 1 + 7 * (t - 1) + a + n,
        o, m;
    return h <= 0 ? (o = e - 1, m = ke(o) + h) : h > ke(e) ? (o = e + 1, m = h - ke(e)) : (o = e, m = h), {
        year: o,
        dayOfYear: m
    }
}

function pe(e, t, s) {
    var r = Ue(e.year(), t, s),
        i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1,
        a, n;
    return i < 1 ? (n = e.year() - 1, a = i + K(n, t, s)) : i > K(e.year(), t, s) ? (a = i - K(e.year(), t, s), n = e.year() + 1) : (n = e.year(), a = i), {
        week: a,
        year: n
    }
}

function K(e, t, s) {
    var r = Ue(e, t, s),
        i = Ue(e + 1, t, s);
    return (ke(e) - r + i) / 7
}
f("w", ["ww", 2], "wo", "week");
f("W", ["WW", 2], "Wo", "isoWeek");
T("week", "w");
T("isoWeek", "W");
x("week", 5);
x("isoWeek", 5);
d("w", D);
d("ww", D, N);
d("W", D);
d("WW", D, N);
Oe(["w", "ww", "W", "WW"], function(e, t, s, r) {
    t[r.substr(0, 1)] = y(e)
});

function pr(e) {
    return pe(e, this._week.dow, this._week.doy).week
}
var Dr = {
    dow: 0,
    doy: 6
};

function Mr() {
    return this._week.dow
}

function Yr() {
    return this._week.doy
}

function vr(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d")
}

function Or(e) {
    var t = pe(this, 1, 4).week;
    return e == null ? t : this.add((e - t) * 7, "d")
}
f("d", 0, "do", "day");
f("dd", 0, 0, function(e) {
    return this.localeData().weekdaysMin(this, e)
});
f("ddd", 0, 0, function(e) {
    return this.localeData().weekdaysShort(this, e)
});
f("dddd", 0, 0, function(e) {
    return this.localeData().weekdays(this, e)
});
f("e", 0, 0, "weekday");
f("E", 0, 0, "isoWeekday");
T("day", "d");
T("weekday", "e");
T("isoWeekday", "E");
x("day", 11);
x("weekday", 11);
x("isoWeekday", 11);
d("d", D);
d("e", D);
d("E", D);
d("dd", function(e, t) {
    return t.weekdaysMinRegex(e)
});
d("ddd", function(e, t) {
    return t.weekdaysShortRegex(e)
});
d("dddd", function(e, t) {
    return t.weekdaysRegex(e)
});
Oe(["dd", "ddd", "dddd"], function(e, t, s, r) {
    var i = s._locale.weekdaysParse(e, r, s._strict);
    i != null ? t.d = i : _(s).invalidWeekday = e
});
Oe(["d", "e", "E"], function(e, t, s, r) {
    t[r] = y(e)
});

function br(e, t) {
    return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10)
}

function Tr(e, t) {
    return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
}

function wt(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t))
}
var xr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    es = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    Wr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    Rr = ve,
    Nr = ve,
    Pr = ve;

function Fr(e, t) {
    var s = C(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    return e === !0 ? wt(s, this._week.dow) : e ? s[e.day()] : s
}

function Ir(e) {
    return e === !0 ? wt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
}

function Ur(e) {
    return e === !0 ? wt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
}

function Lr(e, t, s) {
    var r, i, a, n = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) a = V([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
    return s ? t === "dddd" ? (i = Y.call(this._weekdaysParse, n), i !== -1 ? i : null) : t === "ddd" ? (i = Y.call(this._shortWeekdaysParse, n), i !== -1 ? i : null) : (i = Y.call(this._minWeekdaysParse, n), i !== -1 ? i : null) : t === "dddd" ? (i = Y.call(this._weekdaysParse, n), i !== -1 || (i = Y.call(this._shortWeekdaysParse, n), i !== -1) ? i : (i = Y.call(this._minWeekdaysParse, n), i !== -1 ? i : null)) : t === "ddd" ? (i = Y.call(this._shortWeekdaysParse, n), i !== -1 || (i = Y.call(this._weekdaysParse, n), i !== -1) ? i : (i = Y.call(this._minWeekdaysParse, n), i !== -1 ? i : null)) : (i = Y.call(this._minWeekdaysParse, n), i !== -1 || (i = Y.call(this._weekdaysParse, n), i !== -1) ? i : (i = Y.call(this._shortWeekdaysParse, n), i !== -1 ? i : null))
}

function Cr(e, t, s) {
    var r, i, a;
    if (this._weekdaysParseExact) return Lr.call(this, e, t, s);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
        if (i = V([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (a = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e)) return r;
        if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e)) return r;
        if (s && t === "dd" && this._minWeekdaysParse[r].test(e)) return r;
        if (!s && this._weekdaysParse[r].test(e)) return r
    }
}

function Er(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return e != null ? (e = br(e, this.localeData()), this.add(e - t, "d")) : t
}

function Ar(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d")
}

function Hr(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) {
        var t = Tr(e, this.localeData());
        return this.day(this.day() % 7 ? t : t - 7)
    } else return this.day() || 7
}

function Gr(e) {
    return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || kt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (w(this, "_weekdaysRegex") || (this._weekdaysRegex = Rr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
}

function Vr(e) {
    return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || kt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (w(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Nr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
}

function jr(e) {
    return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || kt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (w(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Pr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
}

function kt() {
    function e(O, c) {
        return c.length - O.length
    }
    var t = [],
        s = [],
        r = [],
        i = [],
        a, n, h, o, m;
    for (a = 0; a < 7; a++) n = V([2e3, 1]).day(a), h = R(this.weekdaysMin(n, "")), o = R(this.weekdaysShort(n, "")), m = R(this.weekdays(n, "")), t.push(h), s.push(o), r.push(m), i.push(h), i.push(o), i.push(m);
    t.sort(e), s.sort(e), r.sort(e), i.sort(e), this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
}

function St() {
    return this.hours() % 12 || 12
}

function $r() {
    return this.hours() || 24
}
f("H", ["HH", 2], 0, "hour");
f("h", ["hh", 2], 0, St);
f("k", ["kk", 2], 0, $r);
f("hmm", 0, 0, function() {
    return "" + St.apply(this) + G(this.minutes(), 2)
});
f("hmmss", 0, 0, function() {
    return "" + St.apply(this) + G(this.minutes(), 2) + G(this.seconds(), 2)
});
f("Hmm", 0, 0, function() {
    return "" + this.hours() + G(this.minutes(), 2)
});
f("Hmmss", 0, 0, function() {
    return "" + this.hours() + G(this.minutes(), 2) + G(this.seconds(), 2)
});

function ts(e, t) {
    f(e, 0, 0, function() {
        return this.localeData().meridiem(this.hours(), this.minutes(), t)
    })
}
ts("a", !0);
ts("A", !1);
T("hour", "h");
x("hour", 13);

function ss(e, t) {
    return t._meridiemParse
}
d("a", ss);
d("A", ss);
d("H", D);
d("h", D);
d("k", D);
d("HH", D, N);
d("hh", D, N);
d("kk", D, N);
d("hmm", $t);
d("hmmss", zt);
d("Hmm", $t);
d("Hmmss", zt);
S(["H", "HH"], v);
S(["k", "kk"], function(e, t, s) {
    var r = y(e);
    t[v] = r === 24 ? 0 : r
});
S(["a", "A"], function(e, t, s) {
    s._isPm = s._locale.isPM(e), s._meridiem = e
});
S(["h", "hh"], function(e, t, s) {
    t[v] = y(e), _(s).bigHour = !0
});
S("hmm", function(e, t, s) {
    var r = e.length - 2;
    t[v] = y(e.substr(0, r)), t[L] = y(e.substr(r)), _(s).bigHour = !0
});
S("hmmss", function(e, t, s) {
    var r = e.length - 4,
        i = e.length - 2;
    t[v] = y(e.substr(0, r)), t[L] = y(e.substr(r, 2)), t[q] = y(e.substr(i)), _(s).bigHour = !0
});
S("Hmm", function(e, t, s) {
    var r = e.length - 2;
    t[v] = y(e.substr(0, r)), t[L] = y(e.substr(r))
});
S("Hmmss", function(e, t, s) {
    var r = e.length - 4,
        i = e.length - 2;
    t[v] = y(e.substr(0, r)), t[L] = y(e.substr(r, 2)), t[q] = y(e.substr(i))
});

function zr(e) {
    return (e + "").toLowerCase().charAt(0) === "p"
}
var Zr = /[ap]\.?m?\.?/i,
    Jr = ce("Hours", !0);

function qr(e, t, s) {
    return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM"
}
var rs = {
        calendar: Cs,
        longDateFormat: Gs,
        invalidDate: js,
        ordinal: zs,
        dayOfMonthOrdinalParse: Zs,
        relativeTime: qs,
        months: ur,
        monthsShort: Zt,
        week: Dr,
        weekdays: xr,
        weekdaysMin: Wr,
        weekdaysShort: es,
        meridiemParse: Zr
    },
    M = {},
    _e = {},
    De;

function Kr(e, t) {
    var s, r = Math.min(e.length, t.length);
    for (s = 0; s < r; s += 1)
        if (e[s] !== t[s]) return s;
    return r
}

function Nt(e) {
    return e && e.toLowerCase().replace("_", "-")
}

function Br(e) {
    for (var t = 0, s, r, i, a; t < e.length;) {
        for (a = Nt(e[t]).split("-"), s = a.length, r = Nt(e[t + 1]), r = r ? r.split("-") : null; s > 0;) {
            if (i = Je(a.slice(0, s).join("-")), i) return i;
            if (r && r.length >= s && Kr(a, r) >= s - 1) break;
            s--
        }
        t++
    }
    return De
}

function Qr(e) {
    return e.match("^[^/\\\\]*$") != null
}

function Je(e) {
    var t = null,
        s;
    if (M[e] === void 0 && typeof module < "u" && module && module.exports && Qr(e)) try {
        t = De._abbr, s = require, s("./locale/" + e), se(t)
    } catch {
        M[e] = null
    }
    return M[e]
}

function se(e, t) {
    var s;
    return e && (W(t) ? s = Q(e) : s = pt(e, t), s ? De = s : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), De._abbr
}

function pt(e, t) {
    if (t !== null) {
        var s, r = rs;
        if (t.abbr = e, M[e] != null) Et("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = M[e]._config;
        else if (t.parentLocale != null)
            if (M[t.parentLocale] != null) r = M[t.parentLocale]._config;
            else if (s = Je(t.parentLocale), s != null) r = s._config;
        else return _e[t.parentLocale] || (_e[t.parentLocale] = []), _e[t.parentLocale].push({
            name: e,
            config: t
        }), null;
        return M[e] = new ct(it(r, t)), _e[e] && _e[e].forEach(function(i) {
            pt(i.name, i.config)
        }), se(e), M[e]
    } else return delete M[e], null
}

function Xr(e, t) {
    if (t != null) {
        var s, r, i = rs;
        M[e] != null && M[e].parentLocale != null ? M[e].set(it(M[e]._config, t)) : (r = Je(e), r != null && (i = r._config), t = it(i, t), r == null && (t.abbr = e), s = new ct(t), s.parentLocale = M[e], M[e] = s), se(e)
    } else M[e] != null && (M[e].parentLocale != null ? (M[e] = M[e].parentLocale, e === se() && se(e)) : M[e] != null && delete M[e]);
    return M[e]
}

function Q(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return De;
    if (!C(e)) {
        if (t = Je(e), t) return t;
        e = [e]
    }
    return Br(e)
}

function ei() {
    return at(M)
}

function Dt(e) {
    var t, s = e._a;
    return s && _(e).overflow === -2 && (t = s[J] < 0 || s[J] > 11 ? J : s[H] < 1 || s[H] > Ze(s[b], s[J]) ? H : s[v] < 0 || s[v] > 24 || s[v] === 24 && (s[L] !== 0 || s[q] !== 0 || s[ie] !== 0) ? v : s[L] < 0 || s[L] > 59 ? L : s[q] < 0 || s[q] > 59 ? q : s[ie] < 0 || s[ie] > 999 ? ie : -1, _(e)._overflowDayOfYear && (t < b || t > H) && (t = H), _(e)._overflowWeeks && t === -1 && (t = nr), _(e)._overflowWeekday && t === -1 && (t = or), _(e).overflow = t), e
}
var ti = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    si = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    ri = /Z|[+-]\d\d(?::?\d\d)?/,
    xe = [
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
    tt = [
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
    ii = /^\/?Date\((-?\d+)/i,
    ai = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    ni = {
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

function is(e) {
    var t, s, r = e._i,
        i = ti.exec(r) || si.exec(r),
        a, n, h, o, m = xe.length,
        O = tt.length;
    if (i) {
        for (_(e).iso = !0, t = 0, s = m; t < s; t++)
            if (xe[t][1].exec(i[1])) {
                n = xe[t][0], a = xe[t][2] !== !1;
                break
            }
        if (n == null) {
            e._isValid = !1;
            return
        }
        if (i[3]) {
            for (t = 0, s = O; t < s; t++)
                if (tt[t][1].exec(i[3])) {
                    h = (i[2] || " ") + tt[t][0];
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
            if (ri.exec(i[4])) o = "Z";
            else {
                e._isValid = !1;
                return
            }
        e._f = n + (h || "") + (o || ""), Yt(e)
    } else e._isValid = !1
}

function oi(e, t, s, r, i, a) {
    var n = [li(e), Zt.indexOf(t), parseInt(s, 10), parseInt(r, 10), parseInt(i, 10)];
    return a && n.push(parseInt(a, 10)), n
}

function li(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
}

function ui(e) {
    return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}

function di(e, t, s) {
    if (e) {
        var r = es.indexOf(e),
            i = new Date(t[0], t[1], t[2]).getDay();
        if (r !== i) return _(s).weekdayMismatch = !0, s._isValid = !1, !1
    }
    return !0
}

function hi(e, t, s) {
    if (e) return ni[e];
    if (t) return 0;
    var r = parseInt(s, 10),
        i = r % 100,
        a = (r - i) / 100;
    return a * 60 + i
}

function as(e) {
    var t = ai.exec(ui(e._i)),
        s;
    if (t) {
        if (s = oi(t[4], t[3], t[2], t[5], t[6], t[7]), !di(t[1], s, e)) return;
        e._a = s, e._tzm = hi(t[8], t[9], t[10]), e._d = Se.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), _(e).rfc2822 = !0
    } else e._isValid = !1
}

function fi(e) {
    var t = ii.exec(e._i);
    if (t !== null) {
        e._d = new Date(+t[1]);
        return
    }
    if (is(e), e._isValid === !1) delete e._isValid;
    else return;
    if (as(e), e._isValid === !1) delete e._isValid;
    else return;
    e._strict ? e._isValid = !1 : u.createFromInputFallback(e)
}
u.createFromInputFallback = I("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
});

function le(e, t, s) {
    return e ? ? t ? ? s
}

function ci(e) {
    var t = new Date(u.now());
    return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
}

function Mt(e) {
    var t, s, r = [],
        i, a, n;
    if (!e._d) {
        for (i = ci(e), e._w && e._a[H] == null && e._a[J] == null && mi(e), e._dayOfYear != null && (n = le(e._a[b], i[b]), (e._dayOfYear > ke(n) || e._dayOfYear === 0) && (_(e)._overflowDayOfYear = !0), s = Se(n, 0, e._dayOfYear), e._a[J] = s.getUTCMonth(), e._a[H] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t) e._a[t] = r[t] = i[t];
        for (; t < 7; t++) e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
        e._a[v] === 24 && e._a[L] === 0 && e._a[q] === 0 && e._a[ie] === 0 && (e._nextDay = !0, e._a[v] = 0), e._d = (e._useUTC ? Se : Sr).apply(null, r), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[v] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (_(e).weekdayMismatch = !0)
    }
}

function mi(e) {
    var t, s, r, i, a, n, h, o, m;
    t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, n = 4, s = le(t.GG, e._a[b], pe(p(), 1, 4).year), r = le(t.W, 1), i = le(t.E, 1), (i < 1 || i > 7) && (o = !0)) : (a = e._locale._week.dow, n = e._locale._week.doy, m = pe(p(), a, n), s = le(t.gg, e._a[b], m.year), r = le(t.w, m.week), t.d != null ? (i = t.d, (i < 0 || i > 6) && (o = !0)) : t.e != null ? (i = t.e + a, (t.e < 0 || t.e > 6) && (o = !0)) : i = a), r < 1 || r > K(s, a, n) ? _(e)._overflowWeeks = !0 : o != null ? _(e)._overflowWeekday = !0 : (h = Xt(s, r, i, a, n), e._a[b] = h.year, e._dayOfYear = h.dayOfYear)
}
u.ISO_8601 = function() {};
u.RFC_2822 = function() {};

function Yt(e) {
    if (e._f === u.ISO_8601) {
        is(e);
        return
    }
    if (e._f === u.RFC_2822) {
        as(e);
        return
    }
    e._a = [], _(e).empty = !0;
    var t = "" + e._i,
        s, r, i, a, n, h = t.length,
        o = 0,
        m, O;
    for (i = At(e._f, e._locale).match(mt) || [], O = i.length, s = 0; s < O; s++) a = i[s], r = (t.match(rr(a, e)) || [])[0], r && (n = t.substr(0, t.indexOf(r)), n.length > 0 && _(e).unusedInput.push(n), t = t.slice(t.indexOf(r) + r.length), o += r.length), de[a] ? (r ? _(e).empty = !1 : _(e).unusedTokens.push(a), ar(a, r, e)) : e._strict && !r && _(e).unusedTokens.push(a);
    _(e).charsLeftOver = h - o, t.length > 0 && _(e).unusedInput.push(t), e._a[v] <= 12 && _(e).bigHour === !0 && e._a[v] > 0 && (_(e).bigHour = void 0), _(e).parsedDateParts = e._a.slice(0), _(e).meridiem = e._meridiem, e._a[v] = _i(e._locale, e._a[v], e._meridiem), m = _(e).era, m !== null && (e._a[b] = e._locale.erasConvertYear(m, e._a[b])), Mt(e), Dt(e)
}

function _i(e, t, s) {
    var r;
    return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t)
}

function yi(e) {
    var t, s, r, i, a, n, h = !1,
        o = e._f.length;
    if (o === 0) {
        _(e).invalidFormat = !0, e._d = new Date(NaN);
        return
    }
    for (i = 0; i < o; i++) a = 0, n = !1, t = ft({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[i], Yt(t), ht(t) && (n = !0), a += _(t).charsLeftOver, a += _(t).unusedTokens.length * 10, _(t).score = a, h ? a < r && (r = a, s = t) : (r == null || a < r || n) && (r = a, s = t, n && (h = !0));
    ee(e, s || t)
}

function gi(e) {
    if (!e._d) {
        var t = _t(e._i),
            s = t.day === void 0 ? t.date : t.day;
        e._a = Lt([t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond], function(r) {
            return r && parseInt(r, 10)
        }), Mt(e)
    }
}

function wi(e) {
    var t = new Ye(Dt(ns(e)));
    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
}

function ns(e) {
    var t = e._i,
        s = e._f;
    return e._locale = e._locale || Q(e._l), t === null || s === void 0 && t === "" ? Ae({
        nullInput: !0
    }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), E(t) ? new Ye(Dt(t)) : (Me(t) ? e._d = t : C(s) ? yi(e) : s ? Yt(e) : ki(e), ht(e) || (e._d = null), e))
}

function ki(e) {
    var t = e._i;
    W(t) ? e._d = new Date(u.now()) : Me(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? fi(e) : C(t) ? (e._a = Lt(t.slice(0), function(s) {
        return parseInt(s, 10)
    }), Mt(e)) : ae(t) ? gi(e) : B(t) ? e._d = new Date(t) : u.createFromInputFallback(e)
}

function os(e, t, s, r, i) {
    var a = {};
    return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (ae(e) && dt(e) || C(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = i, a._l = s, a._i = e, a._f = t, a._strict = r, wi(a)
}

function p(e, t, s, r) {
    return os(e, t, s, r, !1)
}
var Si = I("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = p.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : Ae()
    }),
    pi = I("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = p.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : Ae()
    });

function ls(e, t) {
    var s, r;
    if (t.length === 1 && C(t[0]) && (t = t[0]), !t.length) return p();
    for (s = t[0], r = 1; r < t.length; ++r)(!t[r].isValid() || t[r][e](s)) && (s = t[r]);
    return s
}

function Di() {
    var e = [].slice.call(arguments, 0);
    return ls("isBefore", e)
}

function Mi() {
    var e = [].slice.call(arguments, 0);
    return ls("isAfter", e)
}
var Yi = function() {
        return Date.now ? Date.now() : +new Date
    },
    ye = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

function vi(e) {
    var t, s = !1,
        r, i = ye.length;
    for (t in e)
        if (w(e, t) && !(Y.call(ye, t) !== -1 && (e[t] == null || !isNaN(e[t])))) return !1;
    for (r = 0; r < i; ++r)
        if (e[ye[r]]) {
            if (s) return !1;
            parseFloat(e[ye[r]]) !== y(e[ye[r]]) && (s = !0)
        }
    return !0
}

function Oi() {
    return this._isValid
}

function bi() {
    return A(NaN)
}

function qe(e) {
    var t = _t(e),
        s = t.year || 0,
        r = t.quarter || 0,
        i = t.month || 0,
        a = t.week || t.isoWeek || 0,
        n = t.day || 0,
        h = t.hour || 0,
        o = t.minute || 0,
        m = t.second || 0,
        O = t.millisecond || 0;
    this._isValid = vi(t), this._milliseconds = +O + m * 1e3 + o * 6e4 + h * 1e3 * 60 * 60, this._days = +n + a * 7, this._months = +i + r * 3 + s * 12, this._data = {}, this._locale = Q(), this._bubble()
}

function Ne(e) {
    return e instanceof qe
}

function ot(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
}

function Ti(e, t, s) {
    var r = Math.min(e.length, t.length),
        i = Math.abs(e.length - t.length),
        a = 0,
        n;
    for (n = 0; n < r; n++)(s && e[n] !== t[n] || !s && y(e[n]) !== y(t[n])) && a++;
    return a + i
}

function us(e, t) {
    f(e, 0, 0, function() {
        var s = this.utcOffset(),
            r = "+";
        return s < 0 && (s = -s, r = "-"), r + G(~~(s / 60), 2) + t + G(~~s % 60, 2)
    })
}
us("Z", ":");
us("ZZ", "");
d("Z", ze);
d("ZZ", ze);
S(["Z", "ZZ"], function(e, t, s) {
    s._useUTC = !0, s._tzm = vt(ze, e)
});
var xi = /([\+\-]|\d\d)/gi;

function vt(e, t) {
    var s = (t || "").match(e),
        r, i, a;
    return s === null ? null : (r = s[s.length - 1] || [], i = (r + "").match(xi) || ["-", 0, 0], a = +(i[1] * 60) + y(i[2]), a === 0 ? 0 : i[0] === "+" ? a : -a)
}

function Ot(e, t) {
    var s, r;
    return t._isUTC ? (s = t.clone(), r = (E(e) || Me(e) ? e.valueOf() : p(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), u.updateOffset(s, !1), s) : p(e).local()
}

function lt(e) {
    return -Math.round(e._d.getTimezoneOffset())
}
u.updateOffset = function() {};

function Wi(e, t, s) {
    var r = this._offset || 0,
        i;
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) {
        if (typeof e == "string") {
            if (e = vt(ze, e), e === null) return this
        } else Math.abs(e) < 16 && !s && (e = e * 60);
        return !this._isUTC && t && (i = lt(this)), this._offset = e, this._isUTC = !0, i != null && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? fs(this, A(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, u.updateOffset(this, !0), this._changeInProgress = null)), this
    } else return this._isUTC ? r : lt(this)
}

function Ri(e, t) {
    return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
}

function Ni(e) {
    return this.utcOffset(0, e)
}

function Pi(e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(lt(this), "m")), this
}

function Fi() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
        var e = vt(tr, this._i);
        e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
    }
    return this
}

function Ii(e) {
    return this.isValid() ? (e = e ? p(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1
}

function Ui() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
}

function Li() {
    if (!W(this._isDSTShifted)) return this._isDSTShifted;
    var e = {},
        t;
    return ft(e, this), e = ns(e), e._a ? (t = e._isUTC ? V(e._a) : p(e._a), this._isDSTShifted = this.isValid() && Ti(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
}

function Ci() {
    return this.isValid() ? !this._isUTC : !1
}

function Ei() {
    return this.isValid() ? this._isUTC : !1
}

function ds() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1
}
var Ai = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    Hi = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function A(e, t) {
    var s = e,
        r = null,
        i, a, n;
    return Ne(e) ? s = {
        ms: e._milliseconds,
        d: e._days,
        M: e._months
    } : B(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = Ai.exec(e)) ? (i = r[1] === "-" ? -1 : 1, s = {
        y: 0,
        d: y(r[H]) * i,
        h: y(r[v]) * i,
        m: y(r[L]) * i,
        s: y(r[q]) * i,
        ms: y(ot(r[ie] * 1e3)) * i
    }) : (r = Hi.exec(e)) ? (i = r[1] === "-" ? -1 : 1, s = {
        y: re(r[2], i),
        M: re(r[3], i),
        w: re(r[4], i),
        d: re(r[5], i),
        h: re(r[6], i),
        m: re(r[7], i),
        s: re(r[8], i)
    }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (n = Gi(p(s.from), p(s.to)), s = {}, s.ms = n.milliseconds, s.M = n.months), a = new qe(s), Ne(e) && w(e, "_locale") && (a._locale = e._locale), Ne(e) && w(e, "_isValid") && (a._isValid = e._isValid), a
}
A.fn = qe.prototype;
A.invalid = bi;

function re(e, t) {
    var s = e && parseFloat(e.replace(",", "."));
    return (isNaN(s) ? 0 : s) * t
}

function Pt(e, t) {
    var s = {};
    return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s
}

function Gi(e, t) {
    var s;
    return e.isValid() && t.isValid() ? (t = Ot(t, e), e.isBefore(t) ? s = Pt(e, t) : (s = Pt(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : {
        milliseconds: 0,
        months: 0
    }
}

function hs(e, t) {
    return function(s, r) {
        var i, a;
        return r !== null && !isNaN(+r) && (Et(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = s, s = r, r = a), i = A(s, r), fs(this, i, e), this
    }
}

function fs(e, t, s, r) {
    var i = t._milliseconds,
        a = ot(t._days),
        n = ot(t._months);
    e.isValid() && (r = r ? ? !0, n && qt(e, Fe(e, "Month") + n * s), a && Gt(e, "Date", Fe(e, "Date") + a * s), i && e._d.setTime(e._d.valueOf() + i * s), r && u.updateOffset(e, a || n))
}
var Vi = hs(1, "add"),
    ji = hs(-1, "subtract");

function cs(e) {
    return typeof e == "string" || e instanceof String
}

function $i(e) {
    return E(e) || Me(e) || cs(e) || B(e) || Zi(e) || zi(e) || e === null || e === void 0
}

function zi(e) {
    var t = ae(e) && !dt(e),
        s = !1,
        r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
        i, a, n = r.length;
    for (i = 0; i < n; i += 1) a = r[i], s = s || w(e, a);
    return t && s
}

function Zi(e) {
    var t = C(e),
        s = !1;
    return t && (s = e.filter(function(r) {
        return !B(r) && cs(e)
    }).length === 0), t && s
}

function Ji(e) {
    var t = ae(e) && !dt(e),
        s = !1,
        r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
        i, a;
    for (i = 0; i < r.length; i += 1) a = r[i], s = s || w(e, a);
    return t && s
}

function qi(e, t) {
    var s = e.diff(t, "days", !0);
    return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse"
}

function Ki(e, t) {
    arguments.length === 1 && (arguments[0] ? $i(arguments[0]) ? (e = arguments[0], t = void 0) : Ji(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
    var s = e || p(),
        r = Ot(s, this).startOf("day"),
        i = u.calendarFormat(this, r) || "sameElse",
        a = t && (j(t[i]) ? t[i].call(this, s) : t[i]);
    return this.format(a || this.localeData().calendar(i, this, p(s)))
}

function Bi() {
    return new Ye(this)
}

function Qi(e, t) {
    var s = E(e) ? e : p(e);
    return this.isValid() && s.isValid() ? (t = U(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1
}

function Xi(e, t) {
    var s = E(e) ? e : p(e);
    return this.isValid() && s.isValid() ? (t = U(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1
}

function ea(e, t, s, r) {
    var i = E(e) ? e : p(e),
        a = E(t) ? t : p(t);
    return this.isValid() && i.isValid() && a.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(i, s) : !this.isBefore(i, s)) && (r[1] === ")" ? this.isBefore(a, s) : !this.isAfter(a, s))) : !1
}

function ta(e, t) {
    var s = E(e) ? e : p(e),
        r;
    return this.isValid() && s.isValid() ? (t = U(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1
}

function sa(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t)
}

function ra(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t)
}

function ia(e, t, s) {
    var r, i, a;
    if (!this.isValid()) return NaN;
    if (r = Ot(e, this), !r.isValid()) return NaN;
    switch (i = (r.utcOffset() - this.utcOffset()) * 6e4, t = U(t), t) {
        case "year":
            a = Pe(this, r) / 12;
            break;
        case "month":
            a = Pe(this, r);
            break;
        case "quarter":
            a = Pe(this, r) / 3;
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
    return s ? a : F(a)
}

function Pe(e, t) {
    if (e.date() < t.date()) return -Pe(t, e);
    var s = (t.year() - e.year()) * 12 + (t.month() - e.month()),
        r = e.clone().add(s, "months"),
        i, a;
    return t - r < 0 ? (i = e.clone().add(s - 1, "months"), a = (t - r) / (r - i)) : (i = e.clone().add(s + 1, "months"), a = (t - r) / (i - r)), -(s + a) || 0
}
u.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
u.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

function aa() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}

function na(e) {
    if (!this.isValid()) return null;
    var t = e !== !0,
        s = t ? this.clone().utc() : this;
    return s.year() < 0 || s.year() > 9999 ? Re(s, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : j(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Re(s, "Z")) : Re(s, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
}

function oa() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e = "moment",
        t = "",
        s, r, i, a;
    return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(s + r + i + a)
}

function la(e) {
    e || (e = this.isUtc() ? u.defaultFormatUtc : u.defaultFormat);
    var t = Re(this, e);
    return this.localeData().postformat(t)
}

function ua(e, t) {
    return this.isValid() && (E(e) && e.isValid() || p(e).isValid()) ? A({
        to: this,
        from: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
}

function da(e) {
    return this.from(p(), e)
}

function ha(e, t) {
    return this.isValid() && (E(e) && e.isValid() || p(e).isValid()) ? A({
        from: this,
        to: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
}

function fa(e) {
    return this.to(p(), e)
}

function ms(e) {
    var t;
    return e === void 0 ? this._locale._abbr : (t = Q(e), t != null && (this._locale = t), this)
}
var _s = I("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
    return e === void 0 ? this.localeData() : this.locale(e)
});

function ys() {
    return this._locale
}
var Le = 1e3,
    he = 60 * Le,
    Ce = 60 * he,
    gs = (365 * 400 + 97) * 24 * Ce;

function fe(e, t) {
    return (e % t + t) % t
}

function ws(e, t, s) {
    return e < 100 && e >= 0 ? new Date(e + 400, t, s) - gs : new Date(e, t, s).valueOf()
}

function ks(e, t, s) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - gs : Date.UTC(e, t, s)
}

function ca(e) {
    var t, s;
    if (e = U(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
    switch (s = this._isUTC ? ks : ws, e) {
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
            t = this._d.valueOf(), t -= fe(t + (this._isUTC ? 0 : this.utcOffset() * he), Ce);
            break;
        case "minute":
            t = this._d.valueOf(), t -= fe(t, he);
            break;
        case "second":
            t = this._d.valueOf(), t -= fe(t, Le);
            break
    }
    return this._d.setTime(t), u.updateOffset(this, !0), this
}

function ma(e) {
    var t, s;
    if (e = U(e), e === void 0 || e === "millisecond" || !this.isValid()) return this;
    switch (s = this._isUTC ? ks : ws, e) {
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
            t = this._d.valueOf(), t += Ce - fe(t + (this._isUTC ? 0 : this.utcOffset() * he), Ce) - 1;
            break;
        case "minute":
            t = this._d.valueOf(), t += he - fe(t, he) - 1;
            break;
        case "second":
            t = this._d.valueOf(), t += Le - fe(t, Le) - 1;
            break
    }
    return this._d.setTime(t), u.updateOffset(this, !0), this
}

function _a() {
    return this._d.valueOf() - (this._offset || 0) * 6e4
}

function ya() {
    return Math.floor(this.valueOf() / 1e3)
}

function ga() {
    return new Date(this.valueOf())
}

function wa() {
    var e = this;
    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
}

function ka() {
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

function Sa() {
    return this.isValid() ? this.toISOString() : null
}

function pa() {
    return ht(this)
}

function Da() {
    return ee({}, _(this))
}

function Ma() {
    return _(this).overflow
}

function Ya() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    }
}
f("N", 0, 0, "eraAbbr");
f("NN", 0, 0, "eraAbbr");
f("NNN", 0, 0, "eraAbbr");
f("NNNN", 0, 0, "eraName");
f("NNNNN", 0, 0, "eraNarrow");
f("y", ["y", 1], "yo", "eraYear");
f("y", ["yy", 2], 0, "eraYear");
f("y", ["yyy", 3], 0, "eraYear");
f("y", ["yyyy", 4], 0, "eraYear");
d("N", bt);
d("NN", bt);
d("NNN", bt);
d("NNNN", Ia);
d("NNNNN", Ua);
S(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, s, r) {
    var i = s._locale.erasParse(e, r, s._strict);
    i ? _(s).era = i : _(s).invalidEra = e
});
d("y", me);
d("yy", me);
d("yyy", me);
d("yyyy", me);
d("yo", La);
S(["y", "yy", "yyy", "yyyy"], b);
S(["yo"], function(e, t, s, r) {
    var i;
    s._locale._eraYearOrdinalRegex && (i = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[b] = s._locale.eraYearOrdinalParse(e, i) : t[b] = parseInt(e, 10)
});

function va(e, t) {
    var s, r, i, a = this._eras || Q("en")._eras;
    for (s = 0, r = a.length; s < r; ++s) {
        switch (typeof a[s].since) {
            case "string":
                i = u(a[s].since).startOf("day"), a[s].since = i.valueOf();
                break
        }
        switch (typeof a[s].until) {
            case "undefined":
                a[s].until = 1 / 0;
                break;
            case "string":
                i = u(a[s].until).startOf("day").valueOf(), a[s].until = i.valueOf();
                break
        }
    }
    return a
}

function Oa(e, t, s) {
    var r, i, a = this.eras(),
        n, h, o;
    for (e = e.toUpperCase(), r = 0, i = a.length; r < i; ++r)
        if (n = a[r].name.toUpperCase(), h = a[r].abbr.toUpperCase(), o = a[r].narrow.toUpperCase(), s) switch (t) {
            case "N":
            case "NN":
            case "NNN":
                if (h === e) return a[r];
                break;
            case "NNNN":
                if (n === e) return a[r];
                break;
            case "NNNNN":
                if (o === e) return a[r];
                break
        } else if ([n, h, o].indexOf(e) >= 0) return a[r]
}

function ba(e, t) {
    var s = e.since <= e.until ? 1 : -1;
    return t === void 0 ? u(e.since).year() : u(e.since).year() + (t - e.offset) * s
}

function Ta() {
    var e, t, s, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
        if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since) return r[e].name;
    return ""
}

function xa() {
    var e, t, s, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
        if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since) return r[e].narrow;
    return ""
}

function Wa() {
    var e, t, s, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
        if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since) return r[e].abbr;
    return ""
}

function Ra() {
    var e, t, s, r, i = this.localeData().eras();
    for (e = 0, t = i.length; e < t; ++e)
        if (s = i[e].since <= i[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), i[e].since <= r && r <= i[e].until || i[e].until <= r && r <= i[e].since) return (this.year() - u(i[e].since).year()) * s + i[e].offset;
    return this.year()
}

function Na(e) {
    return w(this, "_erasNameRegex") || Tt.call(this), e ? this._erasNameRegex : this._erasRegex
}

function Pa(e) {
    return w(this, "_erasAbbrRegex") || Tt.call(this), e ? this._erasAbbrRegex : this._erasRegex
}

function Fa(e) {
    return w(this, "_erasNarrowRegex") || Tt.call(this), e ? this._erasNarrowRegex : this._erasRegex
}

function bt(e, t) {
    return t.erasAbbrRegex(e)
}

function Ia(e, t) {
    return t.erasNameRegex(e)
}

function Ua(e, t) {
    return t.erasNarrowRegex(e)
}

function La(e, t) {
    return t._eraYearOrdinalRegex || me
}

function Tt() {
    var e = [],
        t = [],
        s = [],
        r = [],
        i, a, n = this.eras();
    for (i = 0, a = n.length; i < a; ++i) t.push(R(n[i].name)), e.push(R(n[i].abbr)), s.push(R(n[i].narrow)), r.push(R(n[i].name)), r.push(R(n[i].abbr)), r.push(R(n[i].narrow));
    this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + s.join("|") + ")", "i")
}
f(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100
});
f(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100
});

function Ke(e, t) {
    f(0, [e, e.length], 0, t)
}
Ke("gggg", "weekYear");
Ke("ggggg", "weekYear");
Ke("GGGG", "isoWeekYear");
Ke("GGGGG", "isoWeekYear");
T("weekYear", "gg");
T("isoWeekYear", "GG");
x("weekYear", 1);
x("isoWeekYear", 1);
d("G", $e);
d("g", $e);
d("GG", D, N);
d("gg", D, N);
d("GGGG", gt, yt);
d("gggg", gt, yt);
d("GGGGG", je, Ge);
d("ggggg", je, Ge);
Oe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, s, r) {
    t[r.substr(0, 2)] = y(e)
});
Oe(["gg", "GG"], function(e, t, s, r) {
    t[r] = u.parseTwoDigitYear(e)
});

function Ca(e) {
    return Ss.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
}

function Ea(e) {
    return Ss.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
}

function Aa() {
    return K(this.year(), 1, 4)
}

function Ha() {
    return K(this.isoWeekYear(), 1, 4)
}

function Ga() {
    var e = this.localeData()._week;
    return K(this.year(), e.dow, e.doy)
}

function Va() {
    var e = this.localeData()._week;
    return K(this.weekYear(), e.dow, e.doy)
}

function Ss(e, t, s, r, i) {
    var a;
    return e == null ? pe(this, r, i).year : (a = K(e, r, i), t > a && (t = a), ja.call(this, e, t, s, r, i))
}

function ja(e, t, s, r, i) {
    var a = Xt(e, t, s, r, i),
        n = Se(a.year, 0, a.dayOfYear);
    return this.year(n.getUTCFullYear()), this.month(n.getUTCMonth()), this.date(n.getUTCDate()), this
}
f("Q", 0, "Qo", "quarter");
T("quarter", "Q");
x("quarter", 7);
d("Q", Vt);
S("Q", function(e, t) {
    t[J] = (y(e) - 1) * 3
});

function $a(e) {
    return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
}
f("D", ["DD", 2], "Do", "date");
T("date", "D");
x("date", 9);
d("D", D);
d("DD", D, N);
d("Do", function(e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
});
S(["D", "DD"], H);
S("Do", function(e, t) {
    t[H] = y(e.match(D)[0])
});
var ps = ce("Date", !0);
f("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
T("dayOfYear", "DDD");
x("dayOfYear", 4);
d("DDD", Ve);
d("DDDD", jt);
S(["DDD", "DDDD"], function(e, t, s) {
    s._dayOfYear = y(e)
});

function za(e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return e == null ? t : this.add(e - t, "d")
}
f("m", ["mm", 2], 0, "minute");
T("minute", "m");
x("minute", 14);
d("m", D);
d("mm", D, N);
S(["m", "mm"], L);
var Za = ce("Minutes", !1);
f("s", ["ss", 2], 0, "second");
T("second", "s");
x("second", 15);
d("s", D);
d("ss", D, N);
S(["s", "ss"], q);
var Ja = ce("Seconds", !1);
f("S", 0, 0, function() {
    return ~~(this.millisecond() / 100)
});
f(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10)
});
f(0, ["SSS", 3], 0, "millisecond");
f(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10
});
f(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100
});
f(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3
});
f(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4
});
f(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5
});
f(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6
});
T("millisecond", "ms");
x("millisecond", 16);
d("S", Ve, Vt);
d("SS", Ve, N);
d("SSS", Ve, jt);
var te, Ds;
for (te = "SSSS"; te.length <= 9; te += "S") d(te, me);

function qa(e, t) {
    t[ie] = y(("0." + e) * 1e3)
}
for (te = "S"; te.length <= 9; te += "S") S(te, qa);
Ds = ce("Milliseconds", !1);
f("z", 0, 0, "zoneAbbr");
f("zz", 0, 0, "zoneName");

function Ka() {
    return this._isUTC ? "UTC" : ""
}

function Ba() {
    return this._isUTC ? "Coordinated Universal Time" : ""
}
var l = Ye.prototype;
l.add = Vi;
l.calendar = Ki;
l.clone = Bi;
l.diff = ia;
l.endOf = ma;
l.format = la;
l.from = ua;
l.fromNow = da;
l.to = ha;
l.toNow = fa;
l.get = Xs;
l.invalidAt = Ma;
l.isAfter = Qi;
l.isBefore = Xi;
l.isBetween = ea;
l.isSame = ta;
l.isSameOrAfter = sa;
l.isSameOrBefore = ra;
l.isValid = pa;
l.lang = _s;
l.locale = ms;
l.localeData = ys;
l.max = pi;
l.min = Si;
l.parsingFlags = Da;
l.set = er;
l.startOf = ca;
l.subtract = ji;
l.toArray = wa;
l.toObject = ka;
l.toDate = ga;
l.toISOString = na;
l.inspect = oa;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">"
});
l.toJSON = Sa;
l.toString = aa;
l.unix = ya;
l.valueOf = _a;
l.creationData = Ya;
l.eraName = Ta;
l.eraNarrow = xa;
l.eraAbbr = Wa;
l.eraYear = Ra;
l.year = Qt;
l.isLeapYear = kr;
l.weekYear = Ca;
l.isoWeekYear = Ea;
l.quarter = l.quarters = $a;
l.month = Kt;
l.daysInMonth = yr;
l.week = l.weeks = vr;
l.isoWeek = l.isoWeeks = Or;
l.weeksInYear = Ga;
l.weeksInWeekYear = Va;
l.isoWeeksInYear = Aa;
l.isoWeeksInISOWeekYear = Ha;
l.date = ps;
l.day = l.days = Er;
l.weekday = Ar;
l.isoWeekday = Hr;
l.dayOfYear = za;
l.hour = l.hours = Jr;
l.minute = l.minutes = Za;
l.second = l.seconds = Ja;
l.millisecond = l.milliseconds = Ds;
l.utcOffset = Wi;
l.utc = Ni;
l.local = Pi;
l.parseZone = Fi;
l.hasAlignedHourOffset = Ii;
l.isDST = Ui;
l.isLocal = Ci;
l.isUtcOffset = Ei;
l.isUtc = ds;
l.isUTC = ds;
l.zoneAbbr = Ka;
l.zoneName = Ba;
l.dates = I("dates accessor is deprecated. Use date instead.", ps);
l.months = I("months accessor is deprecated. Use month instead", Kt);
l.years = I("years accessor is deprecated. Use year instead", Qt);
l.zone = I("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ri);
l.isDSTShifted = I("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Li);

function Qa(e) {
    return p(e * 1e3)
}

function Xa() {
    return p.apply(null, arguments).parseZone()
}

function Ms(e) {
    return e
}
var k = ct.prototype;
k.calendar = Es;
k.longDateFormat = Vs;
k.invalidDate = $s;
k.ordinal = Js;
k.preparse = Ms;
k.postformat = Ms;
k.relativeTime = Ks;
k.pastFuture = Bs;
k.set = Ls;
k.eras = va;
k.erasParse = Oa;
k.erasConvertYear = ba;
k.erasAbbrRegex = Pa;
k.erasNameRegex = Na;
k.erasNarrowRegex = Fa;
k.months = fr;
k.monthsShort = cr;
k.monthsParse = _r;
k.monthsRegex = wr;
k.monthsShortRegex = gr;
k.week = pr;
k.firstDayOfYear = Yr;
k.firstDayOfWeek = Mr;
k.weekdays = Fr;
k.weekdaysMin = Ur;
k.weekdaysShort = Ir;
k.weekdaysParse = Cr;
k.weekdaysRegex = Gr;
k.weekdaysShortRegex = Vr;
k.weekdaysMinRegex = jr;
k.isPM = zr;
k.meridiem = qr;

function Ee(e, t, s, r) {
    var i = Q(),
        a = V().set(r, t);
    return i[s](a, e)
}

function Ys(e, t, s) {
    if (B(e) && (t = e, e = void 0), e = e || "", t != null) return Ee(e, t, s, "month");
    var r, i = [];
    for (r = 0; r < 12; r++) i[r] = Ee(e, r, s, "month");
    return i
}

function xt(e, t, s, r) {
    typeof e == "boolean" ? (B(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, B(t) && (s = t, t = void 0), t = t || "");
    var i = Q(),
        a = e ? i._week.dow : 0,
        n, h = [];
    if (s != null) return Ee(t, (s + a) % 7, r, "day");
    for (n = 0; n < 7; n++) h[n] = Ee(t, (n + a) % 7, r, "day");
    return h
}

function en(e, t) {
    return Ys(e, t, "months")
}

function tn(e, t) {
    return Ys(e, t, "monthsShort")
}

function sn(e, t, s) {
    return xt(e, t, s, "weekdays")
}

function rn(e, t, s) {
    return xt(e, t, s, "weekdaysShort")
}

function an(e, t, s) {
    return xt(e, t, s, "weekdaysMin")
}
se("en", {
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
            s = y(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
        return e + s
    }
});
u.lang = I("moment.lang is deprecated. Use moment.locale instead.", se);
u.langData = I("moment.langData is deprecated. Use moment.localeData instead.", Q);
var $ = Math.abs;

function nn() {
    var e = this._data;
    return this._milliseconds = $(this._milliseconds), this._days = $(this._days), this._months = $(this._months), e.milliseconds = $(e.milliseconds), e.seconds = $(e.seconds), e.minutes = $(e.minutes), e.hours = $(e.hours), e.months = $(e.months), e.years = $(e.years), this
}

function vs(e, t, s, r) {
    var i = A(t, s);
    return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble()
}

function on(e, t) {
    return vs(this, e, t, 1)
}

function ln(e, t) {
    return vs(this, e, t, -1)
}

function Ft(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e)
}

function un() {
    var e = this._milliseconds,
        t = this._days,
        s = this._months,
        r = this._data,
        i, a, n, h, o;
    return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += Ft(ut(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, i = F(e / 1e3), r.seconds = i % 60, a = F(i / 60), r.minutes = a % 60, n = F(a / 60), r.hours = n % 24, t += F(n / 24), o = F(Os(t)), s += o, t -= Ft(ut(o)), h = F(s / 12), s %= 12, r.days = t, r.months = s, r.years = h, this
}

function Os(e) {
    return e * 4800 / 146097
}

function ut(e) {
    return e * 146097 / 4800
}

function dn(e) {
    if (!this.isValid()) return NaN;
    var t, s, r = this._milliseconds;
    if (e = U(e), e === "month" || e === "quarter" || e === "year") switch (t = this._days + r / 864e5, s = this._months + Os(t), e) {
        case "month":
            return s;
        case "quarter":
            return s / 3;
        case "year":
            return s / 12
    } else switch (t = this._days + Math.round(ut(this._months)), e) {
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

function hn() {
    return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + y(this._months / 12) * 31536e6 : NaN
}

function X(e) {
    return function() {
        return this.as(e)
    }
}
var fn = X("ms"),
    cn = X("s"),
    mn = X("m"),
    _n = X("h"),
    yn = X("d"),
    gn = X("w"),
    wn = X("M"),
    kn = X("Q"),
    Sn = X("y");

function pn() {
    return A(this)
}

function Dn(e) {
    return e = U(e), this.isValid() ? this[e + "s"]() : NaN
}

function ne(e) {
    return function() {
        return this.isValid() ? this._data[e] : NaN
    }
}
var Mn = ne("milliseconds"),
    Yn = ne("seconds"),
    vn = ne("minutes"),
    On = ne("hours"),
    bn = ne("days"),
    Tn = ne("months"),
    xn = ne("years");

function Wn() {
    return F(this.days() / 7)
}
var z = Math.round,
    ue = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };

function Rn(e, t, s, r, i) {
    return i.relativeTime(t || 1, !!s, e, r)
}

function Nn(e, t, s, r) {
    var i = A(e).abs(),
        a = z(i.as("s")),
        n = z(i.as("m")),
        h = z(i.as("h")),
        o = z(i.as("d")),
        m = z(i.as("M")),
        O = z(i.as("w")),
        c = z(i.as("y")),
        P = a <= s.ss && ["s", a] || a < s.s && ["ss", a] || n <= 1 && ["m"] || n < s.m && ["mm", n] || h <= 1 && ["h"] || h < s.h && ["hh", h] || o <= 1 && ["d"] || o < s.d && ["dd", o];
    return s.w != null && (P = P || O <= 1 && ["w"] || O < s.w && ["ww", O]), P = P || m <= 1 && ["M"] || m < s.M && ["MM", m] || c <= 1 && ["y"] || ["yy", c], P[2] = t, P[3] = +e > 0, P[4] = r, Rn.apply(null, P)
}

function Pn(e) {
    return e === void 0 ? z : typeof e == "function" ? (z = e, !0) : !1
}

function Fn(e, t) {
    return ue[e] === void 0 ? !1 : t === void 0 ? ue[e] : (ue[e] = t, e === "s" && (ue.ss = t - 1), !0)
}

function In(e, t) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var s = !1,
        r = ue,
        i, a;
    return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, ue, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), i = this.localeData(), a = Nn(this, !s, r, i), s && (a = i.pastFuture(+this, a)), i.postformat(a)
}
var st = Math.abs;

function oe(e) {
    return (e > 0) - (e < 0) || +e
}

function Be() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e = st(this._milliseconds) / 1e3,
        t = st(this._days),
        s = st(this._months),
        r, i, a, n, h = this.asSeconds(),
        o, m, O, c;
    return h ? (r = F(e / 60), i = F(r / 60), e %= 60, r %= 60, a = F(s / 12), s %= 12, n = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", o = h < 0 ? "-" : "", m = oe(this._months) !== oe(h) ? "-" : "", O = oe(this._days) !== oe(h) ? "-" : "", c = oe(this._milliseconds) !== oe(h) ? "-" : "", o + "P" + (a ? m + a + "Y" : "") + (s ? m + s + "M" : "") + (t ? O + t + "D" : "") + (i || r || e ? "T" : "") + (i ? c + i + "H" : "") + (r ? c + r + "M" : "") + (e ? c + n + "S" : "")) : "P0D"
}
var g = qe.prototype;
g.isValid = Oi;
g.abs = nn;
g.add = on;
g.subtract = ln;
g.as = dn;
g.asMilliseconds = fn;
g.asSeconds = cn;
g.asMinutes = mn;
g.asHours = _n;
g.asDays = yn;
g.asWeeks = gn;
g.asMonths = wn;
g.asQuarters = kn;
g.asYears = Sn;
g.valueOf = hn;
g._bubble = un;
g.clone = pn;
g.get = Dn;
g.milliseconds = Mn;
g.seconds = Yn;
g.minutes = vn;
g.hours = On;
g.days = bn;
g.weeks = Wn;
g.months = Tn;
g.years = xn;
g.humanize = In;
g.toISOString = Be;
g.toString = Be;
g.toJSON = Be;
g.locale = ms;
g.localeData = ys;
g.toIsoString = I("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Be);
g.lang = _s;
f("X", 0, 0, "unix");
f("x", 0, 0, "valueOf");
d("x", $e);
d("X", sr);
S("X", function(e, t, s) {
    s._d = new Date(parseFloat(e) * 1e3)
});
S("x", function(e, t, s) {
    s._d = new Date(y(e))
}); //! moment.js
u.version = "2.29.4";
Is(p);
u.fn = l;
u.min = Di;
u.max = Mi;
u.now = Yi;
u.utc = V;
u.unix = Qa;
u.months = en;
u.isDate = Me;
u.locale = se;
u.invalid = Ae;
u.duration = A;
u.isMoment = E;
u.weekdays = sn;
u.parseZone = Xa;
u.localeData = Q;
u.isDuration = Ne;
u.monthsShort = tn;
u.weekdaysMin = an;
u.defineLocale = pt;
u.updateLocale = Xr;
u.locales = ei;
u.weekdaysShort = rn;
u.normalizeUnits = U;
u.relativeTimeRounding = Pn;
u.relativeTimeThreshold = Fn;
u.calendarFormat = qi;
u.prototype = l;
u.HTML5_FMT = {
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
const Hn = {
    data() {
        return {
            form: {},
            validations: new Fs
        }
    },
    computed: { ...xs(ge),
        ...Ws(We, ["getUpdateKey"]),
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
            return u(e).format("DD MMM YYYY")
        },
        formatDateTime(e) {
            return u(e).format("DD MMM YYYY hh:mm A")
        },
        formatTime(e) {
            return u(e).format("hh:mm:ss A")
        },
        makeWebsiteDown() {
            let e = !1;
            Object.keys(Z.websiteDownPaths).forEach(t => {
                t === this.authStore.getWebsiteDown && (e = !0, this.$router.push(Z.websiteDownPaths[t]))
            }), e == !1 && Object.keys(Z.websiteDownPaths).forEach(t => {
                this.$router.currentRoute._value.fullPath === Z.websiteDownPaths[t] && this.$router.push("/")
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
        let e = ge();
        if (this.$options.onLoadInitGetRequest && this.$options.onLoadInitGetRequest == !0) {
            this.$options.beforeLoadClearPreviousResponse && this.$options.beforeLoadClearPreviousResponse == !0 && this.store.initResponse();
            let t = this;
            this.store.load(this.$route.params, this.$route.query).then(function() {
                t.$options.onLoadInitGetRequestResponseReceived && t.$options.onLoadInitGetRequestResponseReceived(t)
            })
        }
        this.$options.onLoggedInRedirectTodashboard && this.$options.onLoggedInRedirectTodashboard == !0 && e.isAuthenticated == !0 && this.$router.push(Z.loggedInRedirectTodashboard)
    },
    created() {
        this.$options.formValidations && this.$options.formValidations(this.validations), this.makeWebsiteDown(), this.authFailedRedirect()
    },
    mounted() {
        this.makeWebsiteDown(), this.authFailedRedirect()
    },
    beforeUpdate() {
        this.$options.onLoggedInRedirectTodashboard && this.$options.onLoggedInRedirectTodashboard == !0 && this.authStore.isAuthenticated == !0 && this.$router.push(Z.loggedInRedirectTodashboard)
    }
};
export {
    Hn as _, En as a, An as s
};