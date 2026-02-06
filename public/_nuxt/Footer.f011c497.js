import {
    _ as C
} from "./nuxt-link.52c63e0f.js";
import {
    _ as k,
    o as f,
    c as h,
    F as T,
    a as e,
    t as j,
    m,
    h as P,
    b as n,
    w as r,
    d as i,
    y as I,
    g as w
} from "./entry.93d2037a.js";
import {
    s as g,
    a as B,
    _ as R
} from "./parentcomponent.fd1079ff.js"; /*! js-cookie v3.0.5 | MIT */
function b(o) {
    for (var l = 1; l < arguments.length; l++) {
        var c = arguments[l];
        for (var d in c) o[d] = c[d]
    }
    return o
}
var F = {
    read: function(o) {
        return o[0] === '"' && (o = o.slice(1, -1)), o.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(o) {
        return encodeURIComponent(o).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};

function v(o, l) {
    function c(a, s, t) {
        if (!(typeof document > "u")) {
            t = b({}, l, t), typeof t.expires == "number" && (t.expires = new Date(Date.now() + t.expires * 864e5)), t.expires && (t.expires = t.expires.toUTCString()), a = encodeURIComponent(a).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var p = "";
            for (var u in t) t[u] && (p += "; " + u, t[u] !== !0 && (p += "=" + t[u].split(";")[0]));
            return document.cookie = a + "=" + o.write(s, a) + p
        }
    }

    function d(a) {
        if (!(typeof document > "u" || arguments.length && !a)) {
            for (var s = document.cookie ? document.cookie.split("; ") : [], t = {}, p = 0; p < s.length; p++) {
                var u = s[p].split("="),
                    y = u.slice(1).join("=");
                try {
                    var _ = decodeURIComponent(u[0]);
                    if (t[_] = o.read(y, _), a === _) break
                } catch {}
            }
            return a ? t[a] : t
        }
    }
    return Object.create({
        set: c,
        get: d,
        remove: function(a, s) {
            c(a, "", b({}, s, {
                expires: -1
            }))
        },
        withAttributes: function(a) {
            return v(this.converter, b({}, this.attributes, a))
        },
        withConverter: function(a) {
            return v(b({}, this.converter, a), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(l)
        },
        converter: {
            value: Object.freeze(o)
        }
    })
}
var N = v(F, {
    path: "/"
});
const A = {
        props: {
            popupimg: String,
            condition: Number,
            buttonName: String,
            url: String
        },
        data() {
            return {
                showPopup: !0
            }
        },
        methods: {
            closePopup() {
                this.showPopup = !1, N.set("popupShown", "true", {
                    expires: 1
                })
            }
        }
    },
    E = {
        class: "popup"
    },
    S = e("i", {
        class: "bi bi-x"
    }, null, -1),
    U = [S],
    J = {
        class: "popup-content"
    },
    O = ["src"],
    V = {
        key: 0,
        class: "redirect-btn-wrap"
    },
    G = ["href"];

function L(o, l, c, d, a, s) {
    return f(), h("div", null, [o.getPopup != "" ? (f(), h(T, {
        key: 0
    }, [a.showPopup ? (f(), h("div", {
        key: 0,
        class: "popup-bg",
        onClick: l[1] || (l[1] = (...t) => s.closePopup && s.closePopup(...t))
    }, [e("div", E, [e("button", {
        class: "close-btn",
        onClick: l[0] || (l[0] = (...t) => s.closePopup && s.closePopup(...t))
    }, U), e("div", J, [e("img", {
        src: "data:image/jpeg;base64," + c.popupimg,
        class: "w-full"
    }, null, 8, O), c.condition == "0" ? (f(), h("div", V, [e("a", {
        href: c.url,
        target: "_blank",
        class: "redirect-btn"
    }, j(c.buttonName), 9, G)])) : m("", !0)])])])) : m("", !0)], 64)) : m("", !0)])
}
const D = k(A, [
        ["render", L]
    ]),
    x = P("popupStore", {
        state: g.state,
        getters: g.getters,
        actions: Object.assign({}, g.actions, {
            async load(o) {
                B.formGet(this, "/popup", [x()])
            }
        })
    });
const $ = {
        extends: R,
        onLoadInitGetRequest: !0,
        setup() {
            return {
                store: x()
            }
        },
        data() {
            return {
                showPopup: !1
            }
        },
        created() {
            setTimeout(() => {
                this.showPopup = !0
            }, 3e3)
        },
        computed: {
            getPopup() {
                return this.emptyIfNotExist("image", this.response.page.popups)
            },
            popupBtnName() {
                return this.emptyIfNotExist("button_name", this.response.page.popups)
            },
            popupBtnURL() {
                return this.emptyIfNotExist("url", this.response.page.popups)
            },
            popupBtnCondition() {
                return this.emptyIfNotExist("enabledisable_status", this.response.page.popups)
            }
        }
    },
    W = {
        class: "footer"
    },
    q = {
        class: "container mb-4"
    },
    z = {
        class: "row"
    },
    Q = w('<div class="col-lg-3 mt-2 mb-2"><div class="footer-box-one"><p>With JUMBO TICKET, you join a league where winners are made. We are an organization that helps the people across the world to achieve their dreams and much more. It’s an initiative where we want to give back to our community by changing their dreams into reality.</p><ul><li><a href="https://www.facebook.com/jumboticket" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.instagram.com/jumboticket" target="_blank"><i class="fab fa-instagram"></i></a></li><li><a href="https://t.me/jumboticketchannel" target="_blank"><i class="fab fa-telegram-plane"></i></a></li><li><a href="https://vimeo.com/jumboticket" target="_blank"><i class="fab fa-vimeo-v"></i></a></li><li><a href="https://www.youtube.com/@jumboticketglobalfans" target="_blank"><i class="fab fa-youtube"></i></a></li></ul></div></div>', 1),
    K = {
        class: "col-lg-3 mt-2 mb-2"
    },
    M = {
        class: "footer-box-list"
    },
    H = {
        class: "desk-footer-links"
    },
    X = e("h4", null, "About Jumbo Ticket", -1),
    Y = e("li", null, [e("a", {
        href: "https://blog.jumboticket.com/",
        target: "_blank"
    }, "Blog")], -1),
    Z = {
        class: "mobile-footer-links"
    },
    ee = e("button", {
        class: "btn btn-primary",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#footerCollapseOne",
        "aria-expanded": "false",
        "aria-controls": "footerCollapseOne"
    }, [i(" About Jumbo Ticket "), e("i", {
        class: "bx bx-chevron-down"
    })], -1),
    te = {
        class: "collapse",
        id: "footerCollapseOne"
    },
    oe = e("li", null, [e("a", {
        href: "https://blog.jumboticket.com/",
        target: "_blank"
    }, "Blog")], -1),
    ae = w('<div class="col-lg-3 mt-2 mb-2"><div class="footer-box-list"><div class="desk-footer-links"><h4>Legal Info</h4><ul><li><a href="/legal/privacy-policy">Privacy Policy</a></li><li><a href="/legal/fraud-awareness">Fraud Awareness</a></li><li><a href="/legal/terms-and-conditions">Terms and Conditions</a></li><li><a href="/legal/fairplay-policy">Fairplay Policy</a></li><li><a href="/legal/responsible-gambling">Responsible Gambling</a></li></ul></div><div class="mobile-footer-links"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#footerCollapseTwo" aria-expanded="false" aria-controls="footerCollapseTwo"> Legal Information <i class="bx bx-chevron-down"></i></button><div class="collapse" id="footerCollapseTwo"><ul><li><a href="/legal/privacy-policy">Privacy Policy</a></li><li><a href="/legal/fraud-awareness">Fraud Awareness</a></li><li><a href="/legal/terms-and-conditions">Terms and Conditions</a></li><li><a href="/legal/fairplay-policy">Fairplay Policy</a></li><li><a href="/legal/responsible-gambling">Responsible Gambling</a></li></ul></div></div></div></div><div class="col-lg-3 mt-2 mb-2"><div class="footer-contact"><div class="desk-footer-links"><h4>Get in touch</h4><ul class="in-touch"><li><a href="mailto:support@jumboticket.network"><i class="bx bx-envelope"></i> support@jumboticket.network</a></li><li><a href="https://wa.me/447537134729" target="_blank"><i class="bx bx-phone"></i> +44 7537134729</a></li></ul><p><i class="bx bx-location-plus"></i> Intershore Chambers, Road Town, Tortola, British Virgin Islands</p></div><div class="mobile-footer-links"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#footerCollapseThree" aria-expanded="false" aria-controls="footerCollapseThree"> Contact Info <i class="bx bx-chevron-down"></i></button><div class="collapse" id="footerCollapseThree"><ul class="in-touch"><li><a href="mailto:support@jumboticket.network"><i class="bx bx-envelope"></i> support@jumboticket.network</a></li><li><a href="https://wa.me/447537134729" target="_blank"><i class="bx bx-phone"></i> +44 7537134729</a></li></ul><p><i class="bx bx-location-plus"></i> Intershore Chambers, Road Town, Tortola, British Virgin Islands</p></div></div></div></div>', 2),
    se = e("div", {
        class: "container"
    }, [e("div", {
        class: "copyrights"
    }, [e("span", null, "© 2025 JT Global Tech Limited. All rights reserved.")])], -1);

function ie(o, l, c, d, a, s) {
    const t = C,
        p = D;
    return f(), h("section", W, [e("div", q, [e("div", z, [Q, e("div", K, [e("div", M, [e("div", H, [X, e("ul", null, [e("li", null, [n(t, {
        to: "/refer-and-earn"
    }, {
        default: r(() => [i("Refer & Earn")]),
        _: 1
    })]), e("li", null, [n(t, {
        to: "/winners"
    }, {
        default: r(() => [i("Winners")]),
        _: 1
    })]), e("li", null, [n(t, {
        to: "/jackpot"
    }, {
        default: r(() => [i("Jackpots")]),
        _: 1
    })]), e("li", null, [n(t, {
        to: "/faq"
    }, {
        default: r(() => [i("FAQ")]),
        _: 1
    })]), Y, e("li", null, [n(t, {
        to: "/jumboticket-trust"
    }, {
        default: r(() => [i("Jumbo Ticket Trust")]),
        _: 1
    })]), e("li", null, [n(t, {
        to: "/contact-us"
    }, {
        default: r(() => [i("Contact")]),
        _: 1
    })])])]), e("div", Z, [ee, e("div", te, [e("ul", null, [e("li", null, [n(t, {
        to: "/refer-and-earn"
    }, {
        default: r(() => [i("Refer & Earn")]),
        _: 1
    })]), e("li", null, [n(t, {
        to: "/winners"
    }, {
        default: r(() => [i("Winners")]),
        _: 1
    })]), e("li", null, [n(t, {
        to: "/jackpot"
    }, {
        default: r(() => [i("Jackpots")]),
        _: 1
    })]), e("li", null, [n(t, {
        to: "/faq"
    }, {
        default: r(() => [i("FAQ")]),
        _: 1
    })]), oe, e("li", null, [n(t, {
        to: "/jumboticket-trust"
    }, {
        default: r(() => [i("Jumbo Ticket Trust")]),
        _: 1
    })]), e("li", null, [n(t, {
        to: "/contact-us"
    }, {
        default: r(() => [i("Contact")]),
        _: 1
    })])])])])])]), ae])]), se, s.getPopup != "" ? (f(), I(p, {
        key: 0,
        popupimg: s.getPopup,
        condition: s.popupBtnCondition,
        buttonName: s.popupBtnName,
        url: s.popupBtnURL
    }, null, 8, ["popupimg", "condition", "buttonName", "url"])) : m("", !0)])
}
const pe = k($, [
    ["render", ie]
]);
export {
    pe as F
};