import {
    a as m,
    b as k
} from "./auth.5fc731a5.js";
import {
    f as w
} from "./entry.baa6724e.js";
const l = w("storeUpdated", {
        state: () => ({
            updateKey: {}
        }),
        getters: {
            getUpdateKey() {
                return this.updateKey
            }
        },
        actions: {
            storeUpdateKey(n) {
                this.updateKey = n
            }
        }
    }),
    g = w("storeWaitingupdate", {
        state: () => ({
            waitingupdate: !1
        }),
        getters: {
            isWaitingForUpdate() {
                return this.waitingupdate
            }
        },
        actions: {
            storeWaitingUpdateStatus(n) {
                this.waitingupdate = n
            }
        }
    }),
    U = {
        async formGet(n, r, d) {
            let i = m(),
                t = l(),
                u = g();
            u.storeWaitingUpdateStatus(!0);
            let s = {};
            if (i.isAuthenticated) {
                let e = i.getApikey;
                e !== "" && (s.apikey = e), i.getJWTTokens !== null && i.getJWTTokens.accessToken !== void 0 && (s.jwttoken = i.getJWTTokens.accessToken)
            }
            return i.getWebToken !== null && (s.webtoken = i.getWebToken), await $fetch(k.apiBaseUrl + r, {
                method: "GET",
                headers: s
            }).then(function(e) {
                e = JSON.parse(e), d.forEach(function(o) {
                    o.storeResponse(e), e.data !== "undefined" ? o.storeForm(e.data) : o.storeForm({}), t.storeUpdateKey(Math.random())
                }), e.successdata && Object.keys(e.successdata).length > 0 && (e.successdata.apikey && i.storeApikey(e.successdata.apikey), e.successdata.jwttokens && i.storeJWTTokens(e.successdata.jwttokens)), Object.keys(e).length > 0 && (e.csrftoken !== "undefined" && e.csrftoken !== "" && i.storeCSRFToken(e.csrftoken), e.webtoken !== "undefined" && e.webtoken !== "" && i.storeWebToken(e.webtoken)), e.auth !== "undefined" && e.auth === "failed" && (i.storeApikey(""), i.storeJWTTokens(null)), e.websitedown !== "undefined" && e.websitedown ? i.storeWebsiteDown(e.websitedown) : i.storeWebsiteDown("1"), e.domainguest !== "undefined" && e.domainguest ? i.storeDomainGuest(e.domainguest) : i.storeDomainGuest(""), e.domainmember !== "undefined" && e.domainmember ? i.storeDomainMember(e.domainmember) : i.storeDomainMember(""), u.storeWaitingUpdateStatus(!1)
            })
        },
        async formResource(n, r, d) {
            let i = {},
                t = m(),
                u = l(),
                s = g();
            if (s.storeWaitingUpdateStatus(!0), t.isAuthenticated) {
                let e = t.getApikey;
                e !== "" && (i.apikey = e), t.getJWTTokens !== null && t.getJWTTokens.accessToken !== void 0 && (i.jwttoken = t.getJWTTokens.accessToken)
            }
            return t.getWebToken !== null && (i.webtoken = t.getWebToken), await $fetch(k.apiBaseUrl + r, {
                method: "GET",
                headers: i,
                responseType: "blob"
            }).then(function(e) {
                let o = new FileReader;
                o.readAsDataURL(e), o.onloadend = function() {
                    var b = o.result;
                    e = b, d.forEach(function(a) {
                        a.storeResponse(e), u.storeUpdateKey(Math.random())
                    }), e.auth !== "undefined" && e.auth === "failed" && (t.storeApikey(""), t.storeJWTTokens(null)), e.websitedown !== "undefined" && e.websitedown ? t.storeWebsiteDown(e.websitedown) : t.storeWebsiteDown("1"), e.domainguest !== "undefined" && e.domainguest ? t.storeDomainGuest(e.domainguest) : t.storeDomainGuest(""), e.domainmember !== "undefined" && e.domainmember ? t.storeDomainMember(e.domainmember) : t.storeDomainMember("")
                }, s.storeWaitingUpdateStatus(!1)
            })
        },
        async formPost(n, r, d, i) {
            let t = m(),
                u = l(),
                s = g();
            s.storeWaitingUpdateStatus(!0), d._csrftoken_ = t.getCSRFToken;
            var f = new FormData;
            for (var e in d) f.append(e, d[e]);
            let o = {};
            if (t.isAuthenticated) {
                let a = t.getApikey;
                a !== "" && (o.apikey = a), t.getJWTTokens !== null && t.getJWTTokens.accessToken !== void 0 && (o.jwttoken = t.getJWTTokens.accessToken)
            }
            return t.getWebToken !== null && (o.webtoken = t.getWebToken), await $fetch(k.apiBaseUrl + r, {
                method: "POST",
                headers: o,
                body: f
            }).then(function(a) {
                a = JSON.parse(a), i.forEach(function(c) {
                    c.storeResponse(a), a.data !== "undefined" ? c.storeForm(a.data) : c.storeForm({}), u.storeUpdateKey(Math.random())
                }), a.successdata && Object.keys(a.successdata).length > 0 && (a.successdata.apikey && t.storeApikey(a.successdata.apikey), a.successdata.jwttokens && t.storeJWTTokens(a.successdata.jwttokens)), Object.keys(a).length > 0 && (a.csrftoken !== "undefined" && a.csrftoken !== "" && t.storeCSRFToken(a.csrftoken), a.webtoken !== "undefined" && a.webtoken !== "" && t.storeWebToken(a.webtoken)), a.auth !== "undefined" && a.auth === "failed" && (t.storeApikey(""), t.storeJWTTokens(null)), a.websitedown !== "undefined" && a.websitedown ? t.storeWebsiteDown(a.websitedown) : t.storeWebsiteDown("1"), a.domainguest !== "undefined" && a.domainguest ? t.storeDomainGuest(a.domainguest) : t.storeDomainGuest(""), a.domainmember !== "undefined" && a.domainmember ? t.storeDomainMember(a.domainmember) : t.storeDomainMember(""), s.storeWaitingUpdateStatus(!1)
            })
        }
    },
    T = () => ({
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
let h = {
    storeResponse(n) {
        this.response = n
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
    storeForm(n) {
        this.form = n
    }
};
const W = {
        getResponse(n) {
            return n.response
        },
        getForm(n) {
            return n.form
        }
    },
    D = {
        state: T,
        actions: h,
        getters: W
    };
export {
    U as a, l as b, g as c, D as s
};