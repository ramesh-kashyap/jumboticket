import {
    _ as qn
} from "./nuxt-link.81d4da0e.js";
import {
    _ as Fn
} from "./countDown.e07a3ad7.js";
import {
    _ as $n
} from "./ticketBox.964e1f45.js";
import {
    _ as Yn
} from "./bloqHead.ac0c20f1.js";
import {
    a as yt
} from "./js.cookie.edb2da2a.js";
import {
    _ as Ze,
    o as _,
    c as x,
    a as r,
    n as Je,
    t as D,
    d as A,
    p as zn,
    e as Xn,
    j as U,
    x as Vt,
    y as Jn,
    z as Gn,
    A as Se,
    B as qt,
    C as Ft,
    D as Kn,
    E as Qn,
    G as $t,
    H as Zn,
    I as er,
    J as tr,
    u as nr,
    r as rr,
    K as or,
    b as H,
    w as ge,
    F as j,
    h as ne,
    L as Yt,
    v as zt,
    i as Ct,
    s as ir
} from "./entry.baa6724e.js";
import {
    d as sr
} from "./dashboard.a4059918.js";
import {
    a as ar
} from "./auth.5fc731a5.js";
import {
    _ as lr
} from "./parentcomponent.906631da.js";
import {
    _ as vn,
    a as cr,
    b as ur,
    c as pr,
    d as dr,
    e as fr
} from "./jt-coin-icon.949d4596.js";
import "./store.669f290b.js";
const vr = {
        props: {
            allpopupdetails: String
        },
        data() {
            return {
                showwinnerpopup: !0
            }
        },
        computed: {
            winnerPositionText() {
                let e = this.allpopupdetails.winner_position;
                if (!e || isNaN(e)) return "";
                let t = e % 10,
                    n = e % 100;
                return t == 1 && n != 11 ? e + "st" : t == 2 && n != 12 ? e + "nd" : t == 3 && n != 13 ? e + "rd" : e + "th"
            }
        },
        methods: {
            closewinnerpopup() {
                this.showwinnerpopup = !1, yt.set("winnerpopupShown", "true", {
                    expires: 1
                })
            },
            onButton(e) {
                this.$emit("buttonclicked", this.allpopupdetails.id)
            }
        }
    },
    St = e => (zn("data-v-55e5e2f3"), e = e(), Xn(), e),
    mr = {
        class: "winnerpopup"
    },
    hr = St(() => r("i", {
        class: "bi bi-x"
    }, null, -1)),
    gr = [hr],
    br = {
        class: "winnerpopup-cont-main"
    },
    yr = {
        class: "text-[28px] lg:text-[46px] font-bold text-gold"
    },
    _r = St(() => r("p", {
        class: "text-[18px] lg:text-[22px] font-semibold text-gold"
    }, "Ticket Number", -1)),
    wr = {
        class: "text-[22px] lg:text-[32px] font-bold text-gold"
    },
    xr = {
        class: "text-[18px] lg:text-[22px] font-semibold text-gold"
    },
    kr = {
        class: "winnerpopup-cont-left"
    },
    Cr = {
        class: "winnerpopup-cont-right"
    },
    Er = {
        class: "mt-6 mb-4 space-y-2 ext-content"
    },
    Tr = St(() => r("p", {
        class: "text-white"
    }, "🎉 YOU WON! 🎉", -1)),
    Or = {
        class: "text-white"
    };

function Ar(e, t, n, i, s, o) {
    return _(), x("div", {
        onClick: t[2] || (t[2] = (...l) => o.closewinnerpopup && o.closewinnerpopup(...l)),
        class: Je(["winnerpopup-bg", {
            "show-winnerpopup-box": s.showwinnerpopup
        }])
    }, [r("div", mr, [r("button", {
        class: "close-btn",
        onClick: t[0] || (t[0] = (...l) => o.closewinnerpopup && o.closewinnerpopup(...l))
    }, gr), r("div", {
        class: Je([n.allpopupdetails.draw_type + "popup-content", "winnerpopup-cont"])
    }, [r("div", br, [r("h4", yr, "$" + D(n.allpopupdetails.winning_amount), 1), _r, r("p", wr, D(n.allpopupdetails.ticket_no), 1), r("p", xr, D(o.winnerPositionText) + " winner", 1)]), r("div", kr, " Name : " + D(n.allpopupdetails.fullname), 1), r("div", Cr, " Member ID : " + D(n.allpopupdetails.username), 1)], 2), r("div", Er, [Tr, r("p", Or, [A("Share your winning experience in a video testimonial and get upto $50 reward! "), r("a", {
        href: "https://api.whatsapp.com/send?phone=447393691205&text=Hello%20there%2C%20I%20am%20one%20of%20the%20winners%20of%20the%20Live%20Draw%20and%20I%20want%20to%20submit%20my%20testimonial%20video%20to%20get%20the%20reward.%20Please%20tell%20me%20the%20process.%20",
        target: "_blank",
        class: "text-[#ECC762] underline",
        onClick: t[1] || (t[1] = (...l) => o.onButton && o.onButton(...l))
    }, " Get Reward ")])])])], 2)
}
const Pr = Ze(vr, [
    ["render", Ar],
    ["__scopeId", "data-v-55e5e2f3"]
]);
const Dr = {
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
                this.showPopup = !1, yt.set("popupShown", "true", {
                    expires: 1
                })
            }
        }
    },
    Ir = {
        class: "popup"
    },
    Sr = r("i", {
        class: "bi bi-x"
    }, null, -1),
    Nr = [Sr],
    Wr = {
        class: "popup-content"
    },
    Br = ["src"],
    Mr = {
        key: 0,
        class: "mt-4 flex justify-center"
    },
    Rr = ["href"];

function Lr(e, t, n, i, s, o) {
    return s.showPopup ? (_(), x("div", {
        key: 0,
        onClick: t[1] || (t[1] = (...l) => o.closePopup && o.closePopup(...l)),
        class: Je(["popup-bg", {
            "show-popup-box": s.showPopup
        }])
    }, [r("div", Ir, [r("button", {
        class: "close-btn",
        onClick: t[0] || (t[0] = (...l) => o.closePopup && o.closePopup(...l))
    }, Nr), r("div", Wr, [r("img", {
        src: "data:image/jpeg;base64," + n.popupimg,
        class: "w-full"
    }, null, 8, Br), n.condition == "0" ? (_(), x("div", Mr, [r("a", {
        href: n.url,
        target: "_blank",
        class: "px-[20px] py-[10px] rounded-lg bg-[#ECC762] uppercase font-semibold inline-flex items-center justify-center transition-all hover:opacity-90"
    }, D(n.buttonName), 9, Rr)])) : U("", !0)])])], 2)) : U("", !0)
}
const jr = Ze(Dr, [
    ["render", Lr]
]);
const Ur = {
        props: {
            popupdetails: String
        },
        data() {
            return {
                showwishpopup: !0
            }
        },
        methods: {
            closewishpopup() {
                this.showwishpopup = !1, yt.set("wishpopupShown", "true", {
                    expires: 1
                })
            }
        }
    },
    Hr = {
        class: "wishpopup"
    },
    Vr = r("i", {
        class: "bi bi-x"
    }, null, -1),
    qr = [Vr],
    Fr = {
        class: "wishpopup-content"
    },
    $r = {
        class: "mt-4 flex justify-center items-center h-full"
    },
    Yr = {
        class: "px-[100px] respon text-center text-white text-[17px]"
    },
    zr = {
        class: "uppercase mb-2 mt-2 respon-title"
    },
    Xr = {
        class: "text-[#fdfb96]"
    },
    Jr = {
        class: "text-[#fdfb96]"
    },
    Gr = {
        class: "text-[#fdfb96]"
    },
    Kr = r("span", {
        class: "text-[#fdfb96]"
    }, '"Daily 333 Surprise Winners"', -1),
    Qr = {
        class: "text-[#fdfb96]"
    },
    Zr = r("p", {
        class: "mt-3 mb-3 resp-pd-1"
    }, "Keep playing! Keep winning!", -1),
    eo = r("p", {
        class: "resp-pd"
    }, "Regards,", -1),
    to = r("p", {
        class: "text-[#fdfb96] resp-pd"
    }, "Jumbo Ticket Team", -1);

function no(e, t, n, i, s, o) {
    return _(), x("div", {
        onClick: t[1] || (t[1] = (...l) => o.closewishpopup && o.closewishpopup(...l)),
        class: Je(["wishpopup-bg", {
            "show-wishpopup-box": s.showwishpopup
        }])
    }, [r("div", Hr, [r("button", {
        class: "close-btn",
        onClick: t[0] || (t[0] = (...l) => o.closewishpopup && o.closewishpopup(...l))
    }, qr), r("div", Fr, [r("div", $r, [r("div", Yr, [r("h3", zr, [A("Dear "), r("span", Xr, D(n.popupdetails.fullname), 1)]), r("p", null, [A("We are thrilled to inform you that you have been chosen as winner for "), r("span", Jr, "Ticket No. " + D(n.popupdetails.ticket_no), 1), A(" in the "), r("span", Gr, D(n.popupdetails.draw_type), 1), A(" category as a part of our "), Kr, A(". The reward amount "), r("span", Qr, "$" + D(n.popupdetails.winning_amount), 1), A(" has been credited to your R-wallet. Congratulations on your victory! ")]), Zr, eo, to])])])])], 2)
}
const ro = Ze(Ur, [
    ["render", no]
]);
const oo = {
        props: {},
        data() {
            return {
                showPopup: !0
            }
        },
        methods: {
            closePopup() {
                this.showPopup = !1, yt.set("popupShown", "true", {
                    expires: 1
                })
            }
        }
    },
    io = {
        key: 0,
        class: "fixed w-full h-screen bg-black/50 z-[9999] left-0 top-0 flex justify-center items-center px-4"
    },
    so = {
        class: "bg-orange-200 border border-orange-300 text-orange-800 max-w-[500px] w-full h-auto rounded-md p-[25px] relative"
    },
    ao = r("div", {
        class: "flex justify-center flex-col items-center"
    }, [r("h4", {
        class: "text-[26px] font-semibold mb-4"
    }, "🔔 Attention"), r("p", {
        class: "text-center text-red-700 font-medium"
    }, [A(" Your A-wallet has funds that will be flushed at server time."), r("br"), A(" Buy a package to activate and use it. ")])], -1);

function lo(e, t, n, i, s, o) {
    return s.showPopup ? (_(), x("div", io, [r("div", so, [r("button", {
        onClick: t[0] || (t[0] = (...l) => o.closePopup && o.closePopup(...l)),
        class: "absolute top-2 right-2 text-orange-800 hover:text-red-600 text-xl font-bold border border-orange-300 rounded-full w-8 h-8 flex items-center justify-center transition duration-200 ease-in-out bg-white hover:bg-orange-100"
    }, " × "), ao])])) : U("", !0)
}
const co = Ze(oo, [
    ["render", lo]
]);
/*!
 * vue-tippy v6.2.0
 * (c) 2023 
 * @license MIT
 */
var X = "top",
    Q = "bottom",
    Z = "right",
    J = "left",
    Nt = "auto",
    et = [X, Q, Z, J],
    Be = "start",
    Ge = "end",
    uo = "clippingParents",
    mn = "viewport",
    Ye = "popper",
    po = "reference",
    Xt = et.reduce(function(e, t) {
        return e.concat([t + "-" + Be, t + "-" + Ge])
    }, []),
    hn = [].concat(et, [Nt]).reduce(function(e, t) {
        return e.concat([t, t + "-" + Be, t + "-" + Ge])
    }, []),
    fo = "beforeRead",
    vo = "read",
    mo = "afterRead",
    ho = "beforeMain",
    go = "main",
    bo = "afterMain",
    yo = "beforeWrite",
    _o = "write",
    wo = "afterWrite",
    xo = [fo, vo, mo, ho, go, bo, yo, _o, wo];

function pe(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function oe(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function Me(e) {
    var t = oe(e).Element;
    return e instanceof t || e instanceof Element
}

function K(e) {
    var t = oe(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}

function gn(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = oe(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}

function ko(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
        var i = t.styles[n] || {},
            s = t.attributes[n] || {},
            o = t.elements[n];
        !K(o) || !pe(o) || (Object.assign(o.style, i), Object.keys(s).forEach(function(l) {
            var c = s[l];
            c === !1 ? o.removeAttribute(l) : o.setAttribute(l, c === !0 ? "" : c)
        }))
    })
}

function Co(e) {
    var t = e.state,
        n = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function() {
            Object.keys(t.elements).forEach(function(i) {
                var s = t.elements[i],
                    o = t.attributes[i] || {},
                    l = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : n[i]),
                    c = l.reduce(function(u, v) {
                        return u[v] = "", u
                    }, {});
                !K(s) || !pe(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(u) {
                    s.removeAttribute(u)
                }))
            })
        }
}
var bn = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: ko,
    effect: Co,
    requires: ["computeStyles"]
};

function ce(e) {
    return e.split("-")[0]
}
var Te = Math.max,
    gt = Math.min,
    Re = Math.round;

function Le(e, t) {
    t === void 0 && (t = !1);
    var n = e.getBoundingClientRect(),
        i = 1,
        s = 1;
    if (K(e) && t) {
        var o = e.offsetHeight,
            l = e.offsetWidth;
        l > 0 && (i = Re(n.width) / l || 1), o > 0 && (s = Re(n.height) / o || 1)
    }
    return {
        width: n.width / i,
        height: n.height / s,
        top: n.top / s,
        right: n.right / i,
        bottom: n.bottom / s,
        left: n.left / i,
        x: n.left / i,
        y: n.top / s
    }
}

function Wt(e) {
    var t = Le(e),
        n = e.offsetWidth,
        i = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: i
    }
}

function yn(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && gn(n)) {
        var i = t;
        do {
            if (i && e.isSameNode(i)) return !0;
            i = i.parentNode || i.host
        } while (i)
    }
    return !1
}

function de(e) {
    return oe(e).getComputedStyle(e)
}

function Eo(e) {
    return ["table", "td", "th"].indexOf(pe(e)) >= 0
}

function _e(e) {
    return ((Me(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function _t(e) {
    return pe(e) === "html" ? e : e.assignedSlot || e.parentNode || (gn(e) ? e.host : null) || _e(e)
}

function Jt(e) {
    return !K(e) || de(e).position === "fixed" ? null : e.offsetParent
}

function To(e) {
    var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1,
        n = navigator.userAgent.indexOf("Trident") !== -1;
    if (n && K(e)) {
        var i = de(e);
        if (i.position === "fixed") return null
    }
    for (var s = _t(e); K(s) && ["html", "body"].indexOf(pe(s)) < 0;) {
        var o = de(s);
        if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none") return s;
        s = s.parentNode
    }
    return null
}

function tt(e) {
    for (var t = oe(e), n = Jt(e); n && Eo(n) && de(n).position === "static";) n = Jt(n);
    return n && (pe(n) === "html" || pe(n) === "body" && de(n).position === "static") ? t : n || To(e) || t
}

function Bt(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function ze(e, t, n) {
    return Te(e, gt(t, n))
}

function Oo(e, t, n) {
    var i = ze(e, t, n);
    return i > n ? n : i
}

function _n() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}

function wn(e) {
    return Object.assign({}, _n(), e)
}

function xn(e, t) {
    return t.reduce(function(n, i) {
        return n[i] = e, n
    }, {})
}
var Ao = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
        placement: n.placement
    })) : t, wn(typeof t != "number" ? t : xn(t, et))
};

function Po(e) {
    var t, n = e.state,
        i = e.name,
        s = e.options,
        o = n.elements.arrow,
        l = n.modifiersData.popperOffsets,
        c = ce(n.placement),
        u = Bt(c),
        v = [J, Z].indexOf(c) >= 0,
        f = v ? "height" : "width";
    if (!(!o || !l)) {
        var T = Ao(s.padding, n),
            O = Wt(o),
            w = u === "y" ? X : J,
            m = u === "y" ? Q : Z,
            h = n.rects.reference[f] + n.rects.reference[u] - l[u] - n.rects.popper[f],
            y = l[u] - n.rects.reference[u],
            k = tt(o),
            E = k ? u === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0,
            I = h / 2 - y / 2,
            a = T[w],
            S = E - O[f] - T[m],
            d = E / 2 - O[f] / 2 + I,
            g = ze(a, d, S),
            P = u;
        n.modifiersData[i] = (t = {}, t[P] = g, t.centerOffset = g - d, t)
    }
}

function Do(e) {
    var t = e.state,
        n = e.options,
        i = n.element,
        s = i === void 0 ? "[data-popper-arrow]" : i;
    s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || yn(t.elements.popper, s) && (t.elements.arrow = s))
}
var Io = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Po,
    effect: Do,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function je(e) {
    return e.split("-")[1]
}
var So = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};

function No(e) {
    var t = e.x,
        n = e.y,
        i = window,
        s = i.devicePixelRatio || 1;
    return {
        x: Re(t * s) / s || 0,
        y: Re(n * s) / s || 0
    }
}

function Gt(e) {
    var t, n = e.popper,
        i = e.popperRect,
        s = e.placement,
        o = e.variation,
        l = e.offsets,
        c = e.position,
        u = e.gpuAcceleration,
        v = e.adaptive,
        f = e.roundOffsets,
        T = e.isFixed,
        O = f === !0 ? No(l) : typeof f == "function" ? f(l) : l,
        w = O.x,
        m = w === void 0 ? 0 : w,
        h = O.y,
        y = h === void 0 ? 0 : h,
        k = l.hasOwnProperty("x"),
        E = l.hasOwnProperty("y"),
        I = J,
        a = X,
        S = window;
    if (v) {
        var d = tt(n),
            g = "clientHeight",
            P = "clientWidth";
        if (d === oe(n) && (d = _e(n), de(d).position !== "static" && c === "absolute" && (g = "scrollHeight", P = "scrollWidth")), d = d, s === X || (s === J || s === Z) && o === Ge) {
            a = Q;
            var M = T && S.visualViewport ? S.visualViewport.height : d[g];
            y -= M - i.height, y *= u ? 1 : -1
        }
        if (s === J || (s === X || s === Q) && o === Ge) {
            I = Z;
            var R = T && S.visualViewport ? S.visualViewport.width : d[P];
            m -= R - i.width, m *= u ? 1 : -1
        }
    }
    var L = Object.assign({
        position: c
    }, v && So);
    if (u) {
        var B;
        return Object.assign({}, L, (B = {}, B[a] = E ? "0" : "", B[I] = k ? "0" : "", B.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", B))
    }
    return Object.assign({}, L, (t = {}, t[a] = E ? y + "px" : "", t[I] = k ? m + "px" : "", t.transform = "", t))
}

function Wo(e) {
    var t = e.state,
        n = e.options,
        i = n.gpuAcceleration,
        s = i === void 0 ? !0 : i,
        o = n.adaptive,
        l = o === void 0 ? !0 : o,
        c = n.roundOffsets,
        u = c === void 0 ? !0 : c,
        v = {
            placement: ce(t.placement),
            variation: je(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: s,
            isFixed: t.options.strategy === "fixed"
        };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Gt(Object.assign({}, v, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: l,
        roundOffsets: u
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Gt(Object.assign({}, v, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: u
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
var Bo = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: Wo,
        data: {}
    },
    ft = {
        passive: !0
    };

function Mo(e) {
    var t = e.state,
        n = e.instance,
        i = e.options,
        s = i.scroll,
        o = s === void 0 ? !0 : s,
        l = i.resize,
        c = l === void 0 ? !0 : l,
        u = oe(t.elements.popper),
        v = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return o && v.forEach(function(f) {
            f.addEventListener("scroll", n.update, ft)
        }), c && u.addEventListener("resize", n.update, ft),
        function() {
            o && v.forEach(function(f) {
                f.removeEventListener("scroll", n.update, ft)
            }), c && u.removeEventListener("resize", n.update, ft)
        }
}
var Ro = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: Mo,
        data: {}
    },
    Lo = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

function ht(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
        return Lo[t]
    })
}
var jo = {
    start: "end",
    end: "start"
};

function Kt(e) {
    return e.replace(/start|end/g, function(t) {
        return jo[t]
    })
}

function Mt(e) {
    var t = oe(e),
        n = t.pageXOffset,
        i = t.pageYOffset;
    return {
        scrollLeft: n,
        scrollTop: i
    }
}

function Rt(e) {
    return Le(_e(e)).left + Mt(e).scrollLeft
}

function Uo(e) {
    var t = oe(e),
        n = _e(e),
        i = t.visualViewport,
        s = n.clientWidth,
        o = n.clientHeight,
        l = 0,
        c = 0;
    return i && (s = i.width, o = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = i.offsetLeft, c = i.offsetTop)), {
        width: s,
        height: o,
        x: l + Rt(e),
        y: c
    }
}

function Ho(e) {
    var t, n = _e(e),
        i = Mt(e),
        s = (t = e.ownerDocument) == null ? void 0 : t.body,
        o = Te(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
        l = Te(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
        c = -i.scrollLeft + Rt(e),
        u = -i.scrollTop;
    return de(s || n).direction === "rtl" && (c += Te(n.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: l,
        x: c,
        y: u
    }
}

function Lt(e) {
    var t = de(e),
        n = t.overflow,
        i = t.overflowX,
        s = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + s + i)
}

function kn(e) {
    return ["html", "body", "#document"].indexOf(pe(e)) >= 0 ? e.ownerDocument.body : K(e) && Lt(e) ? e : kn(_t(e))
}

function Xe(e, t) {
    var n;
    t === void 0 && (t = []);
    var i = kn(e),
        s = i === ((n = e.ownerDocument) == null ? void 0 : n.body),
        o = oe(i),
        l = s ? [o].concat(o.visualViewport || [], Lt(i) ? i : []) : i,
        c = t.concat(l);
    return s ? c : c.concat(Xe(_t(l)))
}

function Pt(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}

function Vo(e) {
    var t = Le(e);
    return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
}

function Qt(e, t) {
    return t === mn ? Pt(Uo(e)) : Me(t) ? Vo(t) : Pt(Ho(_e(e)))
}

function qo(e) {
    var t = Xe(_t(e)),
        n = ["absolute", "fixed"].indexOf(de(e).position) >= 0,
        i = n && K(e) ? tt(e) : e;
    return Me(i) ? t.filter(function(s) {
        return Me(s) && yn(s, i) && pe(s) !== "body" && (n ? de(s).position !== "static" : !0)
    }) : []
}

function Fo(e, t, n) {
    var i = t === "clippingParents" ? qo(e) : [].concat(t),
        s = [].concat(i, [n]),
        o = s[0],
        l = s.reduce(function(c, u) {
            var v = Qt(e, u);
            return c.top = Te(v.top, c.top), c.right = gt(v.right, c.right), c.bottom = gt(v.bottom, c.bottom), c.left = Te(v.left, c.left), c
        }, Qt(e, o));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l
}

function Cn(e) {
    var t = e.reference,
        n = e.element,
        i = e.placement,
        s = i ? ce(i) : null,
        o = i ? je(i) : null,
        l = t.x + t.width / 2 - n.width / 2,
        c = t.y + t.height / 2 - n.height / 2,
        u;
    switch (s) {
        case X:
            u = {
                x: l,
                y: t.y - n.height
            };
            break;
        case Q:
            u = {
                x: l,
                y: t.y + t.height
            };
            break;
        case Z:
            u = {
                x: t.x + t.width,
                y: c
            };
            break;
        case J:
            u = {
                x: t.x - n.width,
                y: c
            };
            break;
        default:
            u = {
                x: t.x,
                y: t.y
            }
    }
    var v = s ? Bt(s) : null;
    if (v != null) {
        var f = v === "y" ? "height" : "width";
        switch (o) {
            case Be:
                u[v] = u[v] - (t[f] / 2 - n[f] / 2);
                break;
            case Ge:
                u[v] = u[v] + (t[f] / 2 - n[f] / 2);
                break
        }
    }
    return u
}

function Ke(e, t) {
    t === void 0 && (t = {});
    var n = t,
        i = n.placement,
        s = i === void 0 ? e.placement : i,
        o = n.boundary,
        l = o === void 0 ? uo : o,
        c = n.rootBoundary,
        u = c === void 0 ? mn : c,
        v = n.elementContext,
        f = v === void 0 ? Ye : v,
        T = n.altBoundary,
        O = T === void 0 ? !1 : T,
        w = n.padding,
        m = w === void 0 ? 0 : w,
        h = wn(typeof m != "number" ? m : xn(m, et)),
        y = f === Ye ? po : Ye,
        k = e.rects.popper,
        E = e.elements[O ? y : f],
        I = Fo(Me(E) ? E : E.contextElement || _e(e.elements.popper), l, u),
        a = Le(e.elements.reference),
        S = Cn({
            reference: a,
            element: k,
            strategy: "absolute",
            placement: s
        }),
        d = Pt(Object.assign({}, k, S)),
        g = f === Ye ? d : a,
        P = {
            top: I.top - g.top + h.top,
            bottom: g.bottom - I.bottom + h.bottom,
            left: I.left - g.left + h.left,
            right: g.right - I.right + h.right
        },
        M = e.modifiersData.offset;
    if (f === Ye && M) {
        var R = M[s];
        Object.keys(P).forEach(function(L) {
            var B = [Z, Q].indexOf(L) >= 0 ? 1 : -1,
                V = [X, Q].indexOf(L) >= 0 ? "y" : "x";
            P[L] += R[V] * B
        })
    }
    return P
}

function $o(e, t) {
    t === void 0 && (t = {});
    var n = t,
        i = n.placement,
        s = n.boundary,
        o = n.rootBoundary,
        l = n.padding,
        c = n.flipVariations,
        u = n.allowedAutoPlacements,
        v = u === void 0 ? hn : u,
        f = je(i),
        T = f ? c ? Xt : Xt.filter(function(m) {
            return je(m) === f
        }) : et,
        O = T.filter(function(m) {
            return v.indexOf(m) >= 0
        });
    O.length === 0 && (O = T);
    var w = O.reduce(function(m, h) {
        return m[h] = Ke(e, {
            placement: h,
            boundary: s,
            rootBoundary: o,
            padding: l
        })[ce(h)], m
    }, {});
    return Object.keys(w).sort(function(m, h) {
        return w[m] - w[h]
    })
}

function Yo(e) {
    if (ce(e) === Nt) return [];
    var t = ht(e);
    return [Kt(e), t, Kt(t)]
}

function zo(e) {
    var t = e.state,
        n = e.options,
        i = e.name;
    if (!t.modifiersData[i]._skip) {
        for (var s = n.mainAxis, o = s === void 0 ? !0 : s, l = n.altAxis, c = l === void 0 ? !0 : l, u = n.fallbackPlacements, v = n.padding, f = n.boundary, T = n.rootBoundary, O = n.altBoundary, w = n.flipVariations, m = w === void 0 ? !0 : w, h = n.allowedAutoPlacements, y = t.options.placement, k = ce(y), E = k === y, I = u || (E || !m ? [ht(y)] : Yo(y)), a = [y].concat(I).reduce(function(fe, te) {
                return fe.concat(ce(te) === Nt ? $o(t, {
                    placement: te,
                    boundary: f,
                    rootBoundary: T,
                    padding: v,
                    flipVariations: m,
                    allowedAutoPlacements: h
                }) : te)
            }, []), S = t.rects.reference, d = t.rects.popper, g = new Map, P = !0, M = a[0], R = 0; R < a.length; R++) {
            var L = a[R],
                B = ce(L),
                V = je(L) === Be,
                z = [X, Q].indexOf(B) >= 0,
                ee = z ? "width" : "height",
                F = Ke(t, {
                    placement: L,
                    boundary: f,
                    rootBoundary: T,
                    altBoundary: O,
                    padding: v
                }),
                $ = z ? V ? Z : J : V ? Q : X;
            S[ee] > d[ee] && ($ = ht($));
            var q = ht($),
                ie = [];
            if (o && ie.push(F[B] <= 0), c && ie.push(F[$] <= 0, F[q] <= 0), ie.every(function(fe) {
                    return fe
                })) {
                M = L, P = !1;
                break
            }
            g.set(L, ie)
        }
        if (P)
            for (var se = m ? 3 : 1, we = function(te) {
                    var ve = a.find(function(Oe) {
                        var me = g.get(Oe);
                        if (me) return me.slice(0, te).every(function(Ae) {
                            return Ae
                        })
                    });
                    if (ve) return M = ve, "break"
                }, ae = se; ae > 0; ae--) {
                var xe = we(ae);
                if (xe === "break") break
            }
        t.placement !== M && (t.modifiersData[i]._skip = !0, t.placement = M, t.reset = !0)
    }
}
var Xo = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: zo,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};

function Zt(e, t, n) {
    return n === void 0 && (n = {
        x: 0,
        y: 0
    }), {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x
    }
}

function en(e) {
    return [X, Z, Q, J].some(function(t) {
        return e[t] >= 0
    })
}

function Jo(e) {
    var t = e.state,
        n = e.name,
        i = t.rects.reference,
        s = t.rects.popper,
        o = t.modifiersData.preventOverflow,
        l = Ke(t, {
            elementContext: "reference"
        }),
        c = Ke(t, {
            altBoundary: !0
        }),
        u = Zt(l, i),
        v = Zt(c, s, o),
        f = en(u),
        T = en(v);
    t.modifiersData[n] = {
        referenceClippingOffsets: u,
        popperEscapeOffsets: v,
        isReferenceHidden: f,
        hasPopperEscaped: T
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": f,
        "data-popper-escaped": T
    })
}
var Go = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: Jo
};

function Ko(e, t, n) {
    var i = ce(e),
        s = [J, X].indexOf(i) >= 0 ? -1 : 1,
        o = typeof n == "function" ? n(Object.assign({}, t, {
            placement: e
        })) : n,
        l = o[0],
        c = o[1];
    return l = l || 0, c = (c || 0) * s, [J, Z].indexOf(i) >= 0 ? {
        x: c,
        y: l
    } : {
        x: l,
        y: c
    }
}

function Qo(e) {
    var t = e.state,
        n = e.options,
        i = e.name,
        s = n.offset,
        o = s === void 0 ? [0, 0] : s,
        l = hn.reduce(function(f, T) {
            return f[T] = Ko(T, t.rects, o), f
        }, {}),
        c = l[t.placement],
        u = c.x,
        v = c.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += v), t.modifiersData[i] = l
}
var Zo = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Qo
};

function ei(e) {
    var t = e.state,
        n = e.name;
    t.modifiersData[n] = Cn({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
var ti = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: ei,
    data: {}
};

function ni(e) {
    return e === "x" ? "y" : "x"
}

function ri(e) {
    var t = e.state,
        n = e.options,
        i = e.name,
        s = n.mainAxis,
        o = s === void 0 ? !0 : s,
        l = n.altAxis,
        c = l === void 0 ? !1 : l,
        u = n.boundary,
        v = n.rootBoundary,
        f = n.altBoundary,
        T = n.padding,
        O = n.tether,
        w = O === void 0 ? !0 : O,
        m = n.tetherOffset,
        h = m === void 0 ? 0 : m,
        y = Ke(t, {
            boundary: u,
            rootBoundary: v,
            padding: T,
            altBoundary: f
        }),
        k = ce(t.placement),
        E = je(t.placement),
        I = !E,
        a = Bt(k),
        S = ni(a),
        d = t.modifiersData.popperOffsets,
        g = t.rects.reference,
        P = t.rects.popper,
        M = typeof h == "function" ? h(Object.assign({}, t.rects, {
            placement: t.placement
        })) : h,
        R = typeof M == "number" ? {
            mainAxis: M,
            altAxis: M
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, M),
        L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        B = {
            x: 0,
            y: 0
        };
    if (d) {
        if (o) {
            var V, z = a === "y" ? X : J,
                ee = a === "y" ? Q : Z,
                F = a === "y" ? "height" : "width",
                $ = d[a],
                q = $ + y[z],
                ie = $ - y[ee],
                se = w ? -P[F] / 2 : 0,
                we = E === Be ? g[F] : P[F],
                ae = E === Be ? -P[F] : -g[F],
                xe = t.elements.arrow,
                fe = w && xe ? Wt(xe) : {
                    width: 0,
                    height: 0
                },
                te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : _n(),
                ve = te[z],
                Oe = te[ee],
                me = ze(0, g[F], fe[F]),
                Ae = I ? g[F] / 2 - se - me - ve - R.mainAxis : we - me - ve - R.mainAxis,
                be = I ? -g[F] / 2 + se + me + Oe + R.mainAxis : ae + me + Oe + R.mainAxis,
                Pe = t.elements.arrow && tt(t.elements.arrow),
                nt = Pe ? a === "y" ? Pe.clientTop || 0 : Pe.clientLeft || 0 : 0,
                He = (V = L == null ? void 0 : L[a]) != null ? V : 0,
                rt = $ + Ae - He - nt,
                ot = $ + be - He,
                Ve = ze(w ? gt(q, rt) : q, $, w ? Te(ie, ot) : ie);
            d[a] = Ve, B[a] = Ve - $
        }
        if (c) {
            var qe, it = a === "x" ? X : J,
                st = a === "x" ? Q : Z,
                he = d[S],
                ye = S === "y" ? "height" : "width",
                Fe = he + y[it],
                ke = he - y[st],
                $e = [X, J].indexOf(k) !== -1,
                at = (qe = L == null ? void 0 : L[S]) != null ? qe : 0,
                lt = $e ? Fe : he - g[ye] - P[ye] - at + R.altAxis,
                ct = $e ? he + g[ye] + P[ye] - at - R.altAxis : ke,
                ut = w && $e ? Oo(lt, he, ct) : ze(w ? lt : Fe, he, w ? ct : ke);
            d[S] = ut, B[S] = ut - he
        }
        t.modifiersData[i] = B
    }
}
var oi = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: ri,
    requiresIfExists: ["offset"]
};

function ii(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}

function si(e) {
    return e === oe(e) || !K(e) ? Mt(e) : ii(e)
}

function ai(e) {
    var t = e.getBoundingClientRect(),
        n = Re(t.width) / e.offsetWidth || 1,
        i = Re(t.height) / e.offsetHeight || 1;
    return n !== 1 || i !== 1
}

function li(e, t, n) {
    n === void 0 && (n = !1);
    var i = K(t),
        s = K(t) && ai(t),
        o = _e(t),
        l = Le(e, s),
        c = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = {
            x: 0,
            y: 0
        };
    return (i || !i && !n) && ((pe(t) !== "body" || Lt(o)) && (c = si(t)), K(t) ? (u = Le(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : o && (u.x = Rt(o))), {
        x: l.left + c.scrollLeft - u.x,
        y: l.top + c.scrollTop - u.y,
        width: l.width,
        height: l.height
    }
}

function ci(e) {
    var t = new Map,
        n = new Set,
        i = [];
    e.forEach(function(o) {
        t.set(o.name, o)
    });

    function s(o) {
        n.add(o.name);
        var l = [].concat(o.requires || [], o.requiresIfExists || []);
        l.forEach(function(c) {
            if (!n.has(c)) {
                var u = t.get(c);
                u && s(u)
            }
        }), i.push(o)
    }
    return e.forEach(function(o) {
        n.has(o.name) || s(o)
    }), i
}

function ui(e) {
    var t = ci(e);
    return xo.reduce(function(n, i) {
        return n.concat(t.filter(function(s) {
            return s.phase === i
        }))
    }, [])
}

function pi(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(n) {
            Promise.resolve().then(function() {
                t = void 0, n(e())
            })
        })), t
    }
}

function di(e) {
    var t = e.reduce(function(n, i) {
        var s = n[i.name];
        return n[i.name] = s ? Object.assign({}, s, i, {
            options: Object.assign({}, s.options, i.options),
            data: Object.assign({}, s.data, i.data)
        }) : i, n
    }, {});
    return Object.keys(t).map(function(n) {
        return t[n]
    })
}
var tn = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};

function nn() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(i) {
        return !(i && typeof i.getBoundingClientRect == "function")
    })
}

function fi(e) {
    e === void 0 && (e = {});
    var t = e,
        n = t.defaultModifiers,
        i = n === void 0 ? [] : n,
        s = t.defaultOptions,
        o = s === void 0 ? tn : s;
    return function(c, u, v) {
        v === void 0 && (v = o);
        var f = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, tn, o),
                modifiersData: {},
                elements: {
                    reference: c,
                    popper: u
                },
                attributes: {},
                styles: {}
            },
            T = [],
            O = !1,
            w = {
                state: f,
                setOptions: function(k) {
                    var E = typeof k == "function" ? k(f.options) : k;
                    h(), f.options = Object.assign({}, o, f.options, E), f.scrollParents = {
                        reference: Me(c) ? Xe(c) : c.contextElement ? Xe(c.contextElement) : [],
                        popper: Xe(u)
                    };
                    var I = ui(di([].concat(i, f.options.modifiers)));
                    return f.orderedModifiers = I.filter(function(a) {
                        return a.enabled
                    }), m(), w.update()
                },
                forceUpdate: function() {
                    if (!O) {
                        var k = f.elements,
                            E = k.reference,
                            I = k.popper;
                        if (nn(E, I)) {
                            f.rects = {
                                reference: li(E, tt(I), f.options.strategy === "fixed"),
                                popper: Wt(I)
                            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(R) {
                                return f.modifiersData[R.name] = Object.assign({}, R.data)
                            });
                            for (var a = 0; a < f.orderedModifiers.length; a++) {
                                if (f.reset === !0) {
                                    f.reset = !1, a = -1;
                                    continue
                                }
                                var S = f.orderedModifiers[a],
                                    d = S.fn,
                                    g = S.options,
                                    P = g === void 0 ? {} : g,
                                    M = S.name;
                                typeof d == "function" && (f = d({
                                    state: f,
                                    options: P,
                                    name: M,
                                    instance: w
                                }) || f)
                            }
                        }
                    }
                },
                update: pi(function() {
                    return new Promise(function(y) {
                        w.forceUpdate(), y(f)
                    })
                }),
                destroy: function() {
                    h(), O = !0
                }
            };
        if (!nn(c, u)) return w;
        w.setOptions(v).then(function(y) {
            !O && v.onFirstUpdate && v.onFirstUpdate(y)
        });

        function m() {
            f.orderedModifiers.forEach(function(y) {
                var k = y.name,
                    E = y.options,
                    I = E === void 0 ? {} : E,
                    a = y.effect;
                if (typeof a == "function") {
                    var S = a({
                            state: f,
                            name: k,
                            instance: w,
                            options: I
                        }),
                        d = function() {};
                    T.push(S || d)
                }
            })
        }

        function h() {
            T.forEach(function(y) {
                return y()
            }), T = []
        }
        return w
    }
}
var vi = [Ro, ti, Bo, bn, Zo, Xo, oi, Io, Go],
    mi = fi({
        defaultModifiers: vi
    }),
    hi = "tippy-box",
    En = "tippy-content",
    Tn = "tippy-backdrop",
    On = "tippy-arrow",
    An = "tippy-svg-arrow",
    Ee = {
        passive: !0,
        capture: !0
    },
    Pn = function() {
        return document.body
    };

function Et(e, t, n) {
    if (Array.isArray(e)) {
        var i = e[t];
        return i ? ? (Array.isArray(n) ? n[t] : n)
    }
    return e
}

function jt(e, t) {
    var n = {}.toString.call(e);
    return n.indexOf("[object") === 0 && n.indexOf(t + "]") > -1
}

function Dn(e, t) {
    return typeof e == "function" ? e.apply(void 0, t) : e
}

function rn(e, t) {
    if (t === 0) return e;
    var n;
    return function(i) {
        clearTimeout(n), n = setTimeout(function() {
            e(i)
        }, t)
    }
}

function gi(e) {
    return e.split(/\s+/).filter(Boolean)
}

function Ne(e) {
    return [].concat(e)
}

function on(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function bi(e) {
    return e.filter(function(t, n) {
        return e.indexOf(t) === n
    })
}

function In(e) {
    return e.split("-")[0]
}

function Ue(e) {
    return [].slice.call(e)
}

function sn(e) {
    return Object.keys(e).reduce(function(t, n) {
        return e[n] !== void 0 && (t[n] = e[n]), t
    }, {})
}

function We() {
    return document.createElement("div")
}

function wt(e) {
    return ["Element", "Fragment"].some(function(t) {
        return jt(e, t)
    })
}

function yi(e) {
    return jt(e, "NodeList")
}

function Ut(e) {
    return jt(e, "MouseEvent")
}

function _i(e) {
    return !!(e && e._tippy && e._tippy.reference === e)
}

function wi(e) {
    return wt(e) ? [e] : yi(e) ? Ue(e) : Array.isArray(e) ? e : Ue(document.querySelectorAll(e))
}

function Tt(e, t) {
    e.forEach(function(n) {
        n && (n.style.transitionDuration = t + "ms")
    })
}

function Qe(e, t) {
    e.forEach(function(n) {
        n && n.setAttribute("data-state", t)
    })
}

function Sn(e) {
    var t, n = Ne(e),
        i = n[0];
    return i != null && (t = i.ownerDocument) != null && t.body ? i.ownerDocument : document
}

function xi(e, t) {
    var n = t.clientX,
        i = t.clientY;
    return e.every(function(s) {
        var o = s.popperRect,
            l = s.popperState,
            c = s.props,
            u = c.interactiveBorder,
            v = In(l.placement),
            f = l.modifiersData.offset;
        if (!f) return !0;
        var T = v === "bottom" ? f.top.y : 0,
            O = v === "top" ? f.bottom.y : 0,
            w = v === "right" ? f.left.x : 0,
            m = v === "left" ? f.right.x : 0,
            h = o.top - i + T > u,
            y = i - o.bottom - O > u,
            k = o.left - n + w > u,
            E = n - o.right - m > u;
        return h || y || k || E
    })
}

function Ot(e, t, n) {
    var i = t + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function(s) {
        e[i](s, n)
    })
}

function an(e, t) {
    for (var n = t; n;) {
        var i;
        if (e.contains(n)) return !0;
        n = n.getRootNode == null || (i = n.getRootNode()) == null ? void 0 : i.host
    }
    return !1
}
var le = {
        isTouch: !1
    },
    ln = 0;

function ki() {
    le.isTouch || (le.isTouch = !0, window.performance && document.addEventListener("mousemove", Nn))
}

function Nn() {
    var e = performance.now();
    e - ln < 20 && (le.isTouch = !1, document.removeEventListener("mousemove", Nn)), ln = e
}

function Ci() {
    var e = document.activeElement;
    if (_i(e)) {
        var t = e._tippy;
        e.blur && !t.state.isVisible && e.blur()
    }
}

function Ei() {
    document.addEventListener("touchstart", ki, Ee), window.addEventListener("blur", Ci)
}
var Ti = typeof window < "u" && typeof document < "u",
    Oi = Ti ? !!window.msCrypto : !1,
    Ai = {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1
    },
    Pi = {
        allowHTML: !1,
        animation: "fade",
        arrow: !0,
        content: "",
        inertia: !1,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999
    },
    re = Object.assign({
        appendTo: Pn,
        aria: {
            content: "auto",
            expanded: "auto"
        },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [0, 10],
        onAfterUpdate: function() {},
        onBeforeUpdate: function() {},
        onCreate: function() {},
        onDestroy: function() {},
        onHidden: function() {},
        onHide: function() {},
        onMount: function() {},
        onShow: function() {},
        onShown: function() {},
        onTrigger: function() {},
        onUntrigger: function() {},
        onClickOutside: function() {},
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null
    }, Ai, Pi),
    Di = Object.keys(re),
    Ii = function(t) {
        var n = Object.keys(t);
        n.forEach(function(i) {
            re[i] = t[i]
        })
    };

function Wn(e) {
    var t = e.plugins || [],
        n = t.reduce(function(i, s) {
            var o = s.name,
                l = s.defaultValue;
            if (o) {
                var c;
                i[o] = e[o] !== void 0 ? e[o] : (c = re[o]) != null ? c : l
            }
            return i
        }, {});
    return Object.assign({}, e, n)
}

function Si(e, t) {
    var n = t ? Object.keys(Wn(Object.assign({}, re, {
            plugins: t
        }))) : Di,
        i = n.reduce(function(s, o) {
            var l = (e.getAttribute("data-tippy-" + o) || "").trim();
            if (!l) return s;
            if (o === "content") s[o] = l;
            else try {
                s[o] = JSON.parse(l)
            } catch {
                s[o] = l
            }
            return s
        }, {});
    return i
}

function cn(e, t) {
    var n = Object.assign({}, t, {
        content: Dn(t.content, [e])
    }, t.ignoreAttributes ? {} : Si(e, t.plugins));
    return n.aria = Object.assign({}, re.aria, n.aria), n.aria = {
        expanded: n.aria.expanded === "auto" ? t.interactive : n.aria.expanded,
        content: n.aria.content === "auto" ? t.interactive ? null : "describedby" : n.aria.content
    }, n
}
var Ni = function() {
    return "innerHTML"
};

function Dt(e, t) {
    e[Ni()] = t
}

function un(e) {
    var t = We();
    return e === !0 ? t.className = On : (t.className = An, wt(e) ? t.appendChild(e) : Dt(t, e)), t
}

function pn(e, t) {
    wt(t.content) ? (Dt(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? Dt(e, t.content) : e.textContent = t.content)
}

function bt(e) {
    var t = e.firstElementChild,
        n = Ue(t.children);
    return {
        box: t,
        content: n.find(function(i) {
            return i.classList.contains(En)
        }),
        arrow: n.find(function(i) {
            return i.classList.contains(On) || i.classList.contains(An)
        }),
        backdrop: n.find(function(i) {
            return i.classList.contains(Tn)
        })
    }
}

function Bn(e) {
    var t = We(),
        n = We();
    n.className = hi, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
    var i = We();
    i.className = En, i.setAttribute("data-state", "hidden"), pn(i, e.props), t.appendChild(n), n.appendChild(i), s(e.props, e.props);

    function s(o, l) {
        var c = bt(t),
            u = c.box,
            v = c.content,
            f = c.arrow;
        l.theme ? u.setAttribute("data-theme", l.theme) : u.removeAttribute("data-theme"), typeof l.animation == "string" ? u.setAttribute("data-animation", l.animation) : u.removeAttribute("data-animation"), l.inertia ? u.setAttribute("data-inertia", "") : u.removeAttribute("data-inertia"), u.style.maxWidth = typeof l.maxWidth == "number" ? l.maxWidth + "px" : l.maxWidth, l.role ? u.setAttribute("role", l.role) : u.removeAttribute("role"), (o.content !== l.content || o.allowHTML !== l.allowHTML) && pn(v, e.props), l.arrow ? f ? o.arrow !== l.arrow && (u.removeChild(f), u.appendChild(un(l.arrow))) : u.appendChild(un(l.arrow)) : f && u.removeChild(f)
    }
    return {
        popper: t,
        onUpdate: s
    }
}
Bn.$$tippy = !0;
var Wi = 1,
    vt = [],
    At = [];

function Bi(e, t) {
    var n = cn(e, Object.assign({}, re, Wn(sn(t)))),
        i, s, o, l = !1,
        c = !1,
        u = !1,
        v = !1,
        f, T, O, w = [],
        m = rn(rt, n.interactiveDebounce),
        h, y = Wi++,
        k = null,
        E = bi(n.plugins),
        I = {
            isEnabled: !0,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1
        },
        a = {
            id: y,
            reference: e,
            popper: We(),
            popperInstance: k,
            props: n,
            state: I,
            plugins: E,
            clearDelayTimeouts: lt,
            setProps: ct,
            setContent: ut,
            show: Rn,
            hide: Ln,
            hideWithInteractivity: jn,
            enable: $e,
            disable: at,
            unmount: Un,
            destroy: Hn
        };
    if (!n.render) return a;
    var S = n.render(a),
        d = S.popper,
        g = S.onUpdate;
    d.setAttribute("data-tippy-root", ""), d.id = "tippy-" + a.id, a.popper = d, e._tippy = a, d._tippy = a;
    var P = E.map(function(p) {
            return p.fn(a)
        }),
        M = e.hasAttribute("aria-expanded");
    return Pe(), se(), $(), q("onCreate", [a]), n.showOnCreate && Fe(), d.addEventListener("mouseenter", function() {
        a.props.interactive && a.state.isVisible && a.clearDelayTimeouts()
    }), d.addEventListener("mouseleave", function() {
        a.props.interactive && a.props.trigger.indexOf("mouseenter") >= 0 && z().addEventListener("mousemove", m)
    }), a;

    function R() {
        var p = a.props.touch;
        return Array.isArray(p) ? p : [p, 0]
    }

    function L() {
        return R()[0] === "hold"
    }

    function B() {
        var p;
        return !!((p = a.props.render) != null && p.$$tippy)
    }

    function V() {
        return h || e
    }

    function z() {
        var p = V().parentNode;
        return p ? Sn(p) : document
    }

    function ee() {
        return bt(d)
    }

    function F(p) {
        return a.state.isMounted && !a.state.isVisible || le.isTouch || f && f.type === "focus" ? 0 : Et(a.props.delay, p ? 0 : 1, re.delay)
    }

    function $(p) {
        p === void 0 && (p = !1), d.style.pointerEvents = a.props.interactive && !p ? "" : "none", d.style.zIndex = "" + a.props.zIndex
    }

    function q(p, b, C) {
        if (C === void 0 && (C = !0), P.forEach(function(N) {
                N[p] && N[p].apply(N, b)
            }), C) {
            var W;
            (W = a.props)[p].apply(W, b)
        }
    }

    function ie() {
        var p = a.props.aria;
        if (p.content) {
            var b = "aria-" + p.content,
                C = d.id,
                W = Ne(a.props.triggerTarget || e);
            W.forEach(function(N) {
                var Y = N.getAttribute(b);
                if (a.state.isVisible) N.setAttribute(b, Y ? Y + " " + C : C);
                else {
                    var G = Y && Y.replace(C, "").trim();
                    G ? N.setAttribute(b, G) : N.removeAttribute(b)
                }
            })
        }
    }

    function se() {
        if (!(M || !a.props.aria.expanded)) {
            var p = Ne(a.props.triggerTarget || e);
            p.forEach(function(b) {
                a.props.interactive ? b.setAttribute("aria-expanded", a.state.isVisible && b === V() ? "true" : "false") : b.removeAttribute("aria-expanded")
            })
        }
    }

    function we() {
        z().removeEventListener("mousemove", m), vt = vt.filter(function(p) {
            return p !== m
        })
    }

    function ae(p) {
        if (!(le.isTouch && (u || p.type === "mousedown"))) {
            var b = p.composedPath && p.composedPath()[0] || p.target;
            if (!(a.props.interactive && an(d, b))) {
                if (Ne(a.props.triggerTarget || e).some(function(C) {
                        return an(C, b)
                    })) {
                    if (le.isTouch || a.state.isVisible && a.props.trigger.indexOf("click") >= 0) return
                } else q("onClickOutside", [a, p]);
                a.props.hideOnClick === !0 && (a.clearDelayTimeouts(), a.hide(), c = !0, setTimeout(function() {
                    c = !1
                }), a.state.isMounted || ve())
            }
        }
    }

    function xe() {
        u = !0
    }

    function fe() {
        u = !1
    }

    function te() {
        var p = z();
        p.addEventListener("mousedown", ae, !0), p.addEventListener("touchend", ae, Ee), p.addEventListener("touchstart", fe, Ee), p.addEventListener("touchmove", xe, Ee)
    }

    function ve() {
        var p = z();
        p.removeEventListener("mousedown", ae, !0), p.removeEventListener("touchend", ae, Ee), p.removeEventListener("touchstart", fe, Ee), p.removeEventListener("touchmove", xe, Ee)
    }

    function Oe(p, b) {
        Ae(p, function() {
            !a.state.isVisible && d.parentNode && d.parentNode.contains(d) && b()
        })
    }

    function me(p, b) {
        Ae(p, b)
    }

    function Ae(p, b) {
        var C = ee().box;

        function W(N) {
            N.target === C && (Ot(C, "remove", W), b())
        }
        if (p === 0) return b();
        Ot(C, "remove", T), Ot(C, "add", W), T = W
    }

    function be(p, b, C) {
        C === void 0 && (C = !1);
        var W = Ne(a.props.triggerTarget || e);
        W.forEach(function(N) {
            N.addEventListener(p, b, C), w.push({
                node: N,
                eventType: p,
                handler: b,
                options: C
            })
        })
    }

    function Pe() {
        L() && (be("touchstart", He, {
            passive: !0
        }), be("touchend", ot, {
            passive: !0
        })), gi(a.props.trigger).forEach(function(p) {
            if (p !== "manual") switch (be(p, He), p) {
                case "mouseenter":
                    be("mouseleave", ot);
                    break;
                case "focus":
                    be(Oi ? "focusout" : "blur", Ve);
                    break;
                case "focusin":
                    be("focusout", Ve);
                    break
            }
        })
    }

    function nt() {
        w.forEach(function(p) {
            var b = p.node,
                C = p.eventType,
                W = p.handler,
                N = p.options;
            b.removeEventListener(C, W, N)
        }), w = []
    }

    function He(p) {
        var b, C = !1;
        if (!(!a.state.isEnabled || qe(p) || c)) {
            var W = ((b = f) == null ? void 0 : b.type) === "focus";
            f = p, h = p.currentTarget, se(), !a.state.isVisible && Ut(p) && vt.forEach(function(N) {
                return N(p)
            }), p.type === "click" && (a.props.trigger.indexOf("mouseenter") < 0 || l) && a.props.hideOnClick !== !1 && a.state.isVisible ? C = !0 : Fe(p), p.type === "click" && (l = !C), C && !W && ke(p)
        }
    }

    function rt(p) {
        var b = p.target,
            C = V().contains(b) || d.contains(b);
        if (!(p.type === "mousemove" && C)) {
            var W = ye().concat(d).map(function(N) {
                var Y, G = N._tippy,
                    De = (Y = G.popperInstance) == null ? void 0 : Y.state;
                return De ? {
                    popperRect: N.getBoundingClientRect(),
                    popperState: De,
                    props: n
                } : null
            }).filter(Boolean);
            xi(W, p) && (we(), ke(p))
        }
    }

    function ot(p) {
        var b = qe(p) || a.props.trigger.indexOf("click") >= 0 && l;
        if (!b) {
            if (a.props.interactive) {
                a.hideWithInteractivity(p);
                return
            }
            ke(p)
        }
    }

    function Ve(p) {
        a.props.trigger.indexOf("focusin") < 0 && p.target !== V() || a.props.interactive && p.relatedTarget && d.contains(p.relatedTarget) || ke(p)
    }

    function qe(p) {
        return le.isTouch ? L() !== p.type.indexOf("touch") >= 0 : !1
    }

    function it() {
        st();
        var p = a.props,
            b = p.popperOptions,
            C = p.placement,
            W = p.offset,
            N = p.getReferenceClientRect,
            Y = p.moveTransition,
            G = B() ? bt(d).arrow : null,
            De = N ? {
                getBoundingClientRect: N,
                contextElement: N.contextElement || V()
            } : e,
            Ht = {
                name: "$$tippy",
                enabled: !0,
                phase: "beforeWrite",
                requires: ["computeStyles"],
                fn: function(pt) {
                    var Ie = pt.state;
                    if (B()) {
                        var Vn = ee(),
                            kt = Vn.box;
                        ["placement", "reference-hidden", "escaped"].forEach(function(dt) {
                            dt === "placement" ? kt.setAttribute("data-placement", Ie.placement) : Ie.attributes.popper["data-popper-" + dt] ? kt.setAttribute("data-" + dt, "") : kt.removeAttribute("data-" + dt)
                        }), Ie.attributes.popper = {}
                    }
                }
            },
            Ce = [{
                name: "offset",
                options: {
                    offset: W
                }
            }, {
                name: "preventOverflow",
                options: {
                    padding: {
                        top: 2,
                        bottom: 2,
                        left: 5,
                        right: 5
                    }
                }
            }, {
                name: "flip",
                options: {
                    padding: 5
                }
            }, {
                name: "computeStyles",
                options: {
                    adaptive: !Y
                }
            }, Ht];
        B() && G && Ce.push({
            name: "arrow",
            options: {
                element: G,
                padding: 3
            }
        }), Ce.push.apply(Ce, (b == null ? void 0 : b.modifiers) || []), a.popperInstance = mi(De, d, Object.assign({}, b, {
            placement: C,
            onFirstUpdate: O,
            modifiers: Ce
        }))
    }

    function st() {
        a.popperInstance && (a.popperInstance.destroy(), a.popperInstance = null)
    }

    function he() {
        var p = a.props.appendTo,
            b, C = V();
        a.props.interactive && p === Pn || p === "parent" ? b = C.parentNode : b = Dn(p, [C]), b.contains(d) || b.appendChild(d), a.state.isMounted = !0, it()
    }

    function ye() {
        return Ue(d.querySelectorAll("[data-tippy-root]"))
    }

    function Fe(p) {
        a.clearDelayTimeouts(), p && q("onTrigger", [a, p]), te();
        var b = F(!0),
            C = R(),
            W = C[0],
            N = C[1];
        le.isTouch && W === "hold" && N && (b = N), b ? i = setTimeout(function() {
            a.show()
        }, b) : a.show()
    }

    function ke(p) {
        if (a.clearDelayTimeouts(), q("onUntrigger", [a, p]), !a.state.isVisible) {
            ve();
            return
        }
        if (!(a.props.trigger.indexOf("mouseenter") >= 0 && a.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(p.type) >= 0 && l)) {
            var b = F(!1);
            b ? s = setTimeout(function() {
                a.state.isVisible && a.hide()
            }, b) : o = requestAnimationFrame(function() {
                a.hide()
            })
        }
    }

    function $e() {
        a.state.isEnabled = !0
    }

    function at() {
        a.hide(), a.state.isEnabled = !1
    }

    function lt() {
        clearTimeout(i), clearTimeout(s), cancelAnimationFrame(o)
    }

    function ct(p) {
        if (!a.state.isDestroyed) {
            q("onBeforeUpdate", [a, p]), nt();
            var b = a.props,
                C = cn(e, Object.assign({}, b, sn(p), {
                    ignoreAttributes: !0
                }));
            a.props = C, Pe(), b.interactiveDebounce !== C.interactiveDebounce && (we(), m = rn(rt, C.interactiveDebounce)), b.triggerTarget && !C.triggerTarget ? Ne(b.triggerTarget).forEach(function(W) {
                W.removeAttribute("aria-expanded")
            }) : C.triggerTarget && e.removeAttribute("aria-expanded"), se(), $(), g && g(b, C), a.popperInstance && (it(), ye().forEach(function(W) {
                requestAnimationFrame(W._tippy.popperInstance.forceUpdate)
            })), q("onAfterUpdate", [a, p])
        }
    }

    function ut(p) {
        a.setProps({
            content: p
        })
    }

    function Rn() {
        var p = a.state.isVisible,
            b = a.state.isDestroyed,
            C = !a.state.isEnabled,
            W = le.isTouch && !a.props.touch,
            N = Et(a.props.duration, 0, re.duration);
        if (!(p || b || C || W) && !V().hasAttribute("disabled") && (q("onShow", [a], !1), a.props.onShow(a) !== !1)) {
            if (a.state.isVisible = !0, B() && (d.style.visibility = "visible"), $(), te(), a.state.isMounted || (d.style.transition = "none"), B()) {
                var Y = ee(),
                    G = Y.box,
                    De = Y.content;
                Tt([G, De], 0)
            }
            O = function() {
                var Ce;
                if (!(!a.state.isVisible || v)) {
                    if (v = !0, d.offsetHeight, d.style.transition = a.props.moveTransition, B() && a.props.animation) {
                        var xt = ee(),
                            pt = xt.box,
                            Ie = xt.content;
                        Tt([pt, Ie], N), Qe([pt, Ie], "visible")
                    }
                    ie(), se(), on(At, a), (Ce = a.popperInstance) == null || Ce.forceUpdate(), q("onMount", [a]), a.props.animation && B() && me(N, function() {
                        a.state.isShown = !0, q("onShown", [a])
                    })
                }
            }, he()
        }
    }

    function Ln() {
        var p = !a.state.isVisible,
            b = a.state.isDestroyed,
            C = !a.state.isEnabled,
            W = Et(a.props.duration, 1, re.duration);
        if (!(p || b || C) && (q("onHide", [a], !1), a.props.onHide(a) !== !1)) {
            if (a.state.isVisible = !1, a.state.isShown = !1, v = !1, l = !1, B() && (d.style.visibility = "hidden"), we(), ve(), $(!0), B()) {
                var N = ee(),
                    Y = N.box,
                    G = N.content;
                a.props.animation && (Tt([Y, G], W), Qe([Y, G], "hidden"))
            }
            ie(), se(), a.props.animation ? B() && Oe(W, a.unmount) : a.unmount()
        }
    }

    function jn(p) {
        z().addEventListener("mousemove", m), on(vt, m), m(p)
    }

    function Un() {
        a.state.isVisible && a.hide(), a.state.isMounted && (st(), ye().forEach(function(p) {
            p._tippy.unmount()
        }), d.parentNode && d.parentNode.removeChild(d), At = At.filter(function(p) {
            return p !== a
        }), a.state.isMounted = !1, q("onHidden", [a]))
    }

    function Hn() {
        a.state.isDestroyed || (a.clearDelayTimeouts(), a.unmount(), nt(), delete e._tippy, a.state.isDestroyed = !0, q("onDestroy", [a]))
    }
}

function ue(e, t) {
    t === void 0 && (t = {});
    var n = re.plugins.concat(t.plugins || []);
    Ei();
    var i = Object.assign({}, t, {
            plugins: n
        }),
        s = wi(e),
        o = s.reduce(function(l, c) {
            var u = c && Bi(c, i);
            return u && l.push(u), l
        }, []);
    return wt(e) ? o[0] : o
}
ue.defaultProps = re;
ue.setDefaultProps = Ii;
ue.currentInput = le;
Object.assign({}, bn, {
    effect: function(t) {
        var n = t.state,
            i = {
                popper: {
                    position: n.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
        Object.assign(n.elements.popper.style, i.popper), n.styles = i, n.elements.arrow && Object.assign(n.elements.arrow.style, i.arrow)
    }
});
var Mi = {
    name: "animateFill",
    defaultValue: !1,
    fn: function(t) {
        var n;
        if (!((n = t.props.render) != null && n.$$tippy)) return {};
        var i = bt(t.popper),
            s = i.box,
            o = i.content,
            l = t.props.animateFill ? Ri() : null;
        return {
            onCreate: function() {
                l && (s.insertBefore(l, s.firstElementChild), s.setAttribute("data-animatefill", ""), s.style.overflow = "hidden", t.setProps({
                    arrow: !1,
                    animation: "shift-away"
                }))
            },
            onMount: function() {
                if (l) {
                    var u = s.style.transitionDuration,
                        v = Number(u.replace("ms", ""));
                    o.style.transitionDelay = Math.round(v / 10) + "ms", l.style.transitionDuration = u, Qe([l], "visible")
                }
            },
            onShow: function() {
                l && (l.style.transitionDuration = "0ms")
            },
            onHide: function() {
                l && Qe([l], "hidden")
            }
        }
    }
};

function Ri() {
    var e = We();
    return e.className = Tn, Qe([e], "hidden"), e
}
var It = {
        clientX: 0,
        clientY: 0
    },
    mt = [];

function Mn(e) {
    var t = e.clientX,
        n = e.clientY;
    It = {
        clientX: t,
        clientY: n
    }
}

function Li(e) {
    e.addEventListener("mousemove", Mn)
}

function ji(e) {
    e.removeEventListener("mousemove", Mn)
}
var Ui = {
    name: "followCursor",
    defaultValue: !1,
    fn: function(t) {
        var n = t.reference,
            i = Sn(t.props.triggerTarget || n),
            s = !1,
            o = !1,
            l = !0,
            c = t.props;

        function u() {
            return t.props.followCursor === "initial" && t.state.isVisible
        }

        function v() {
            i.addEventListener("mousemove", O)
        }

        function f() {
            i.removeEventListener("mousemove", O)
        }

        function T() {
            s = !0, t.setProps({
                getReferenceClientRect: null
            }), s = !1
        }

        function O(h) {
            var y = h.target ? n.contains(h.target) : !0,
                k = t.props.followCursor,
                E = h.clientX,
                I = h.clientY,
                a = n.getBoundingClientRect(),
                S = E - a.left,
                d = I - a.top;
            (y || !t.props.interactive) && t.setProps({
                getReferenceClientRect: function() {
                    var P = n.getBoundingClientRect(),
                        M = E,
                        R = I;
                    k === "initial" && (M = P.left + S, R = P.top + d);
                    var L = k === "horizontal" ? P.top : R,
                        B = k === "vertical" ? P.right : M,
                        V = k === "horizontal" ? P.bottom : R,
                        z = k === "vertical" ? P.left : M;
                    return {
                        width: B - z,
                        height: V - L,
                        top: L,
                        right: B,
                        bottom: V,
                        left: z
                    }
                }
            })
        }

        function w() {
            t.props.followCursor && (mt.push({
                instance: t,
                doc: i
            }), Li(i))
        }

        function m() {
            mt = mt.filter(function(h) {
                return h.instance !== t
            }), mt.filter(function(h) {
                return h.doc === i
            }).length === 0 && ji(i)
        }
        return {
            onCreate: w,
            onDestroy: m,
            onBeforeUpdate: function() {
                c = t.props
            },
            onAfterUpdate: function(y, k) {
                var E = k.followCursor;
                s || E !== void 0 && c.followCursor !== E && (m(), E ? (w(), t.state.isMounted && !o && !u() && v()) : (f(), T()))
            },
            onMount: function() {
                t.props.followCursor && !o && (l && (O(It), l = !1), u() || v())
            },
            onTrigger: function(y, k) {
                Ut(k) && (It = {
                    clientX: k.clientX,
                    clientY: k.clientY
                }), o = k.type === "focus"
            },
            onHidden: function() {
                t.props.followCursor && (T(), f(), l = !0)
            }
        }
    }
};

function Hi(e, t) {
    var n;
    return {
        popperOptions: Object.assign({}, e.popperOptions, {
            modifiers: [].concat((((n = e.popperOptions) == null ? void 0 : n.modifiers) || []).filter(function(i) {
                var s = i.name;
                return s !== t.name
            }), [t])
        })
    }
}
var Vi = {
    name: "inlinePositioning",
    defaultValue: !1,
    fn: function(t) {
        var n = t.reference;

        function i() {
            return !!t.props.inlinePositioning
        }
        var s, o = -1,
            l = !1,
            c = [],
            u = {
                name: "tippyInlinePositioning",
                enabled: !0,
                phase: "afterWrite",
                fn: function(w) {
                    var m = w.state;
                    i() && (c.indexOf(m.placement) !== -1 && (c = []), s !== m.placement && c.indexOf(m.placement) === -1 && (c.push(m.placement), t.setProps({
                        getReferenceClientRect: function() {
                            return v(m.placement)
                        }
                    })), s = m.placement)
                }
            };

        function v(O) {
            return qi(In(O), n.getBoundingClientRect(), Ue(n.getClientRects()), o)
        }

        function f(O) {
            l = !0, t.setProps(O), l = !1
        }

        function T() {
            l || f(Hi(t.props, u))
        }
        return {
            onCreate: T,
            onAfterUpdate: T,
            onTrigger: function(w, m) {
                if (Ut(m)) {
                    var h = Ue(t.reference.getClientRects()),
                        y = h.find(function(E) {
                            return E.left - 2 <= m.clientX && E.right + 2 >= m.clientX && E.top - 2 <= m.clientY && E.bottom + 2 >= m.clientY
                        }),
                        k = h.indexOf(y);
                    o = k > -1 ? k : o
                }
            },
            onHidden: function() {
                o = -1
            }
        }
    }
};

function qi(e, t, n, i) {
    if (n.length < 2 || e === null) return t;
    if (n.length === 2 && i >= 0 && n[0].left > n[1].right) return n[i] || t;
    switch (e) {
        case "top":
        case "bottom":
            {
                var s = n[0],
                    o = n[n.length - 1],
                    l = e === "top",
                    c = s.top,
                    u = o.bottom,
                    v = l ? s.left : o.left,
                    f = l ? s.right : o.right,
                    T = f - v,
                    O = u - c;
                return {
                    top: c,
                    bottom: u,
                    left: v,
                    right: f,
                    width: T,
                    height: O
                }
            }
        case "left":
        case "right":
            {
                var w = Math.min.apply(Math, n.map(function(d) {
                        return d.left
                    })),
                    m = Math.max.apply(Math, n.map(function(d) {
                        return d.right
                    })),
                    h = n.filter(function(d) {
                        return e === "left" ? d.left === w : d.right === m
                    }),
                    y = h[0].top,
                    k = h[h.length - 1].bottom,
                    E = w,
                    I = m,
                    a = I - E,
                    S = k - y;
                return {
                    top: y,
                    bottom: k,
                    left: E,
                    right: I,
                    width: a,
                    height: S
                }
            }
        default:
            return t
    }
}
var Fi = {
    name: "sticky",
    defaultValue: !1,
    fn: function(t) {
        var n = t.reference,
            i = t.popper;

        function s() {
            return t.popperInstance ? t.popperInstance.state.elements.reference : n
        }

        function o(v) {
            return t.props.sticky === !0 || t.props.sticky === v
        }
        var l = null,
            c = null;

        function u() {
            var v = o("reference") ? s().getBoundingClientRect() : null,
                f = o("popper") ? i.getBoundingClientRect() : null;
            (v && dn(l, v) || f && dn(c, f)) && t.popperInstance && t.popperInstance.update(), l = v, c = f, t.state.isMounted && requestAnimationFrame(u)
        }
        return {
            onMount: function() {
                t.props.sticky && u()
            }
        }
    }
};

function dn(e, t) {
    return e && t ? e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom || e.left !== t.left : !0
}
ue.setDefaultProps({
    render: Bn
});
ue.setDefaultProps({
    onShow: e => {
        if (!e.props.content) return !1
    }
});

function $i(e, t = {}, n = {
    mount: !0
}) {
    const i = Kn(),
        s = Vt(),
        o = Vt({
            isEnabled: !1,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1
        });
    let l = null;
    const c = () => l || (l = document.createDocumentFragment(), l),
        u = d => {
            let g, P = Se(d) ? d.value : d;
            if (Qn(P)) i && (P.appContext = i.appContext), $t(P, c()), g = () => c();
            else if (typeof P == "object") {
                let M = Zn(P);
                i && (M.appContext = i.appContext), $t(M, c()), g = () => c()
            } else g = P;
            return g
        },
        v = d => {
            let g = {};
            return Se(d) ? g = d.value || {} : qt(d) ? g = { ...d
            } : g = { ...d
            }, g.content && (g.content = u(g.content)), g.triggerTarget && (g.triggerTarget = Se(g.triggerTarget) ? g.triggerTarget.value : g.triggerTarget), (!g.plugins || !Array.isArray(g.plugins)) && (g.plugins = []), g.plugins = g.plugins.filter(P => P.name !== "vueTippyReactiveState"), g.plugins.push({
                name: "vueTippyReactiveState",
                fn: () => ({
                    onCreate() {
                        o.value.isEnabled = !0
                    },
                    onMount() {
                        o.value.isMounted = !0
                    },
                    onShow() {
                        o.value.isMounted = !0, o.value.isVisible = !0
                    },
                    onShown() {
                        o.value.isShown = !0
                    },
                    onHide() {
                        o.value.isMounted = !1, o.value.isVisible = !1
                    },
                    onHidden() {
                        o.value.isShown = !1
                    },
                    onUnmounted() {
                        o.value.isMounted = !1
                    },
                    onDestroy() {
                        o.value.isDestroyed = !0
                    }
                })
            }), g
        },
        f = () => {
            s.value && s.value.setProps(v(t))
        },
        T = () => {
            !s.value || !t.content || s.value.setContent(u(t.content))
        },
        O = d => {
            var g;
            (g = s.value) === null || g === void 0 || g.setContent(u(d))
        },
        w = d => {
            var g;
            (g = s.value) === null || g === void 0 || g.setProps(v(d))
        },
        m = () => {
            s.value && (s.value.destroy(), s.value = void 0), l = null
        },
        h = () => {
            var d;
            (d = s.value) === null || d === void 0 || d.show()
        },
        y = () => {
            var d;
            (d = s.value) === null || d === void 0 || d.hide()
        },
        k = () => {
            var d;
            (d = s.value) === null || d === void 0 || d.disable(), o.value.isEnabled = !1
        },
        E = () => {
            var d;
            (d = s.value) === null || d === void 0 || d.enable(), o.value.isEnabled = !0
        },
        I = () => {
            var d;
            (d = s.value) === null || d === void 0 || d.unmount()
        },
        a = () => {
            if (!e) return;
            let d = Se(e) ? e.value : e;
            typeof d == "function" && (d = d()), d && (s.value = ue(d, v(t)), d.$tippy = S)
        },
        S = {
            tippy: s,
            refresh: f,
            refreshContent: T,
            setContent: O,
            setProps: w,
            destroy: m,
            hide: y,
            show: h,
            disable: k,
            enable: E,
            unmount: I,
            mount: a,
            state: o
        };
    return n.mount && (i ? (i.isMounted ? a() : Jn(a), Gn(() => {
        m()
    })) : a()), Se(t) || qt(t) ? Ft(t, f, {
        immediate: !1
    }) : Se(t.content) && Ft(t.content, T, {
        immediate: !1
    }), S
}
const Yi = ["a11y", "allowHTML", "arrow", "flip", "flipOnUpdate", "hideOnClick", "ignoreAttributes", "inertia", "interactive", "lazy", "multiple", "showOnInit", "touch", "touchHold"];
let fn = {};
Object.keys(ue.defaultProps).forEach(e => {
    Yi.includes(e) ? fn[e] = {
        type: Boolean,
        default: function() {
            return ue.defaultProps[e]
        }
    } : fn[e] = {
        default: function() {
            return ue.defaultProps[e]
        }
    }
});
const zi = {
        mounted(e, t, n) {
            const i = typeof t.value == "string" ? {
                    content: t.value
                } : t.value || {},
                s = Object.keys(t.modifiers || {}),
                o = s.find(c => c !== "arrow"),
                l = s.findIndex(c => c === "arrow") !== -1;
            o && (i.placement = i.placement || o), l && (i.arrow = i.arrow !== void 0 ? i.arrow : !0), n.props && n.props.onTippyShow && (i.onShow = function(...c) {
                var u;
                return (u = n.props) === null || u === void 0 ? void 0 : u.onTippyShow(...c)
            }), n.props && n.props.onTippyShown && (i.onShown = function(...c) {
                var u;
                return (u = n.props) === null || u === void 0 ? void 0 : u.onTippyShown(...c)
            }), n.props && n.props.onTippyHidden && (i.onHidden = function(...c) {
                var u;
                return (u = n.props) === null || u === void 0 ? void 0 : u.onTippyHidden(...c)
            }), n.props && n.props.onTippyHide && (i.onHide = function(...c) {
                var u;
                return (u = n.props) === null || u === void 0 ? void 0 : u.onTippyHide(...c)
            }), n.props && n.props.onTippyMount && (i.onMount = function(...c) {
                var u;
                return (u = n.props) === null || u === void 0 ? void 0 : u.onTippyMount(...c)
            }), e.getAttribute("title") && !i.content && (i.content = e.getAttribute("title"), e.removeAttribute("title")), e.getAttribute("content") && !i.content && (i.content = e.getAttribute("content")), $i(e, i)
        },
        unmounted(e) {
            e.$tippy ? e.$tippy.destroy() : e._tippy && e._tippy.destroy()
        },
        updated(e, t) {
            const n = typeof t.value == "string" ? {
                content: t.value
            } : t.value || {};
            e.getAttribute("title") && !n.content && (n.content = e.getAttribute("title"), e.removeAttribute("title")), e.getAttribute("content") && !n.content && (n.content = e.getAttribute("content")), e.$tippy ? e.$tippy.setProps(n || {}) : e._tippy && e._tippy.setProps(n || {})
        }
    },
    Xi = ue.setDefaultProps;
Xi({
    ignoreAttributes: !0,
    plugins: [Fi, Vi, Ui, Mi]
});
er(tr);
const Ji = {
        extends: lr,
        onLoadInitGetRequest: !0,
        data() {
            return {
                copy1: null,
                copy2: null,
                isCopy1: !1,
                isCopy2: !1,
                upcomingDate: null,
                textToCopy1: "Text to copy 1",
                textToCopy2: null,
                showPopup: !1
            }
        },
        setup(e) {
            nr({
                title: "Buy Lottery Tickets Online - Participate & Win Big | Jumbo Ticket",
                meta: [{
                    name: "description",
                    content: "Buy lottery tickets online for a chance to win big jackpots. Get access to premium lottery draws and exclusive prizes."
                }, {
                    name: "keywords",
                    content: "Buy Lottery Ticket, Safe Lottery Jackpot, Play Online Lottery, Bitcoin Lottery"
                }]
            });
            const t = sr(),
                n = ar();
            return {
                store: t,
                authStore: n
            }
        },
        head: {
            title: "Dashboard",
            meta: [{
                hid: "description",
                name: "description",
                content: "Dashboard"
            }]
        },
        directives: {
            tippy: zi
        },
        mounted() {
            this.updateUpcomingDate(), this.scheduleNextUpdate()
        },
        created() {
            setTimeout(() => {
                this.showPopup = !0
            }, 3e3)
        },
        computed: {
            aWalletProgressColor() {
                return this.aWalletProgressPercent >= 100 ? "#f43f5e" : "#ecc762"
            },
            aWalletProgressPercent() {
                var n, i;
                const e = ((n = this.awalletcappinginfo) == null ? void 0 : n.capping) || 0,
                    t = ((i = this.awalletcappinginfo) == null ? void 0 : i.capping_reached) || 0;
                return e === 0 ? 0 : Math.round(t / e * 100)
            },
            getCappingMessage() {
                const e = this.aWalletProgressPercent;
                return console.log("percent", e), e >= 0 && e < 25 ? "" : e == 25 ? "Your A-wallet capping reached 25%" : e == 50 ? "Your A-wallet capping reached 50%" : e == 75 ? "Your A-wallet capping reached 75%" : e === 100 ? "Your A-wallet capping reached 100% . Upgrade the package to earn more!" : e > 100 ? " You have maxed out A-wallet capping. Kindly purchase a higher package to increase your capping." : ""
            },
            formattedUpcomingDate() {
                if (this.upcomingDate) {
                    const e = {
                        day: "2-digit",
                        month: "long",
                        year: "numeric"
                    };
                    return this.upcomingDate.toLocaleDateString(void 0, e)
                }
                return ""
            },
            fWalletBalance() {
                return this.emptyIfNotExist("qcwallet_balances_fordisplay.2_available_balance", this.response.user)
            },
            iWalletBalance() {
                return this.emptyIfNotExist("qcwallet_balances_fordisplay.1_available_balance", this.response.user)
            },
            bWalletBalance() {
                return this.emptyIfNotExist("qcwallet_balances_fordisplay.3_available_balance", this.response.user)
            },
            rWalletBalance() {
                return this.emptyIfNotExist("qcwallet_balances_fordisplay.4_available_balance", this.response.user)
            },
            aWalletBalance() {
                return this.emptyIfNotExist("qcwallet_balances_fordisplay.5_available_balance", this.response.user)
            },
            jtCoinWalletBalance() {
                return this.emptyIfNotExist("qcwallet_balances_fordisplay.8_available_balance", this.response.user)
            },
            lWalletBalance() {
                return this.emptyIfNotExist("qcwallet_balances_fordisplay.6_available_balance", this.response.user)
            },
            leaderShipPackage() {
                return this.emptyIfNotExist("leaders", this.response.page)
            },
            myWinnings() {
                return this.emptyIfNotExist("cusers_summery.totwinnings", this.response.user)
            },
            totTicketPurchased() {
                return this.emptyIfNotExist("cusers_summery.tottickets", this.response.user)
            },
            totRegister() {
                return this.emptyIfNotExist("cusers_summery.totreferrals", this.response.user)
            },
            totDeposit() {
                return this.emptyIfNotExist("cusers_summery.totDeposit", this.response.user)
            },
            totWithdrawals() {
                return this.emptyIfNotExist("cusers_summery.totwithdrawals", this.response.user)
            },
            totNetWorkCommission() {
                return this.emptyIfNotExist("cusers_summery.totbinaryamount", this.response.user)
            },
            totAffiliateAmt() {
                return this.emptyIfNotExist("cusers_summery.totreferralamount", this.response.user)
            },
            totticketAffiliateAmt() {
                return this.emptyIfNotExist("cusers_summery.totreferralamountpurchaseticket", this.response.user)
            },
            userName() {
                return this.emptyIfNotExist("cusers_relations.username", this.response.user)
            },
            getMegaInfo() {
                return this.emptyIfNotExist("megaticketdrwas", this.response.page)
            },
            getRoyalInfo() {
                return this.emptyIfNotExist("royalticketdrwas", this.response.page)
            },
            getJumboInfo() {
                return this.emptyIfNotExist("jumboticketdrwas", this.response.page)
            },
            megawinner() {
                return this.emptyArrayIfNotExist("megawinner", this.response.page)
            },
            royalwinner() {
                return this.emptyArrayIfNotExist("royalwinner", this.response.page)
            },
            jumbowinner() {
                return this.emptyArrayIfNotExist("jumbowinner", this.response.page)
            },
            totalPackagePurchased() {
                return this.emptyIfNotExist("cusers_summery.totinvestments", this.response.user)
            },
            megaTotWinner() {
                return this.emptyIfNotExist("megatotalwinners", this.response.page.megaticketotalwinners)
            },
            royalTotWinner() {
                return this.emptyIfNotExist("royaltotalwinners", this.response.page.royaltickettotalwinners)
            },
            jumboTotWinner() {
                return this.emptyIfNotExist("jumbototalwinners", this.response.page.jumbotickettotalwinners)
            },
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
            },
            purchasepackagestatus() {
                return this.emptyIfNotExist("purchasepackagestatus", this.response.page)
            },
            referalUrl() {
                return this.emptyIfNotExist("referalurl", this.response.page)
            },
            fullname() {
                return this.emptyIfNotExist("cusers_profiles.fullname", this.response.user)
            },
            megaTicketcost() {
                return this.emptyIfNotExist("megaticketcost", this.response.page)
            },
            royalTicketcost() {
                return this.emptyIfNotExist("royalticketcost", this.response.page)
            },
            jumboTicketcost() {
                return this.emptyIfNotExist("jumboticketcost", this.response.page)
            },
            surpriceWinnerPopup() {
                return this.emptyIfNotExist("surprice_winner_popup", this.response.page)
            },
            AllWinnerPopup() {
                return this.emptyIfNotExist("winner_pop_up", this.response.page)
            },
            AWalletlimitPopup() {
                return this.emptyIfNotExist("awalletcappinglimitstatus", this.response.page)
            },
            awalletcappinginfo() {
                return this.emptyIfNotExist("awalletcappinginfo", this.response.page)
            }
        },
        watch: {
            response: {
                deep: !0,
                handler(e) {
                    e.user && (this.referalUrl != "" ? (this.copy1 = this.referalUrl + "/refer-left/" + this.userName, this.copy2 = this.referalUrl + "/refer-right/" + this.userName) : (this.copy1 = this.authStore.getDomainGuest + "/refer-left/" + this.userName, this.copy2 = this.authStore.getDomainGuest + "/refer-right/" + this.userName))
                }
            }
        },
        methods: {
            OnButton(e) {
                const t = {
                    id: e
                };
                this.store.updateStatus(t)
            },
            updateUpcomingDate() {
                const e = new Date;
                let t = e.getMonth();
                e.getDate() >= 5 && t++, this.upcomingDate = new Date(e.getFullYear(), t, 5)
            },
            scheduleNextUpdate() {
                const e = new Date;
                let t = new Date(e.getFullYear(), e.getMonth(), 6);
                e.getDate() >= 6 && t.setMonth(t.getMonth() + 1);
                const n = t - e;
                setTimeout(() => {
                    this.updateUpcomingDate(), this.scheduleNextUpdate()
                }, n)
            },
            doCopy1() {
                this.copyTextToClipboard(this.copy1), this.isCopy1 = !0
            },
            doCopy2() {
                this.copyTextToClipboard(this.copy2), this.isCopy2 = !0
            },
            copyTextToClipboard(e) {
                const t = document.createElement("textarea");
                t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t), console.log("Text copied successfully")
            }
        }
    },
    Gi = {
        class: "flex items-center bg-white rounded-lg overflow-hidden"
    },
    Ki = r("div", {
        class: "w-40 bg-[#ECC762] py-[12px] px-[10px] relative winner-txt"
    }, [r("span", {
        class: "flex items-center font-medium"
    }, [r("i", {
        class: "bx bx-trophy mr-1"
    }), A(" Latest Winners")])], -1),
    Qi = {
        class: "w-[calc(100%-160px)] flex"
    },
    Zi = {
        key: 0
    },
    es = {
        key: 1
    },
    ts = {
        key: 0
    },
    ns = {
        key: 1
    },
    rs = {
        key: 0
    },
    os = {
        key: 1
    },
    is = r("div", {
        class: "mt-6"
    }, null, -1),
    ss = {
        class: "block lg:flex justify-between items-center px-4 py-2 bg-orange-100 border border-orange-200 text-orange-400 rounded-md"
    },
    as = r("span", null, "Please update your profile", -1),
    ls = {
        class: "flex flex-wrap -mx-3 mt-3"
    },
    cs = {
        class: "w-full xl:w-1/2 2xl:w-6/12 px-3 my-3"
    },
    us = {
        class: "bg-white px-6 py-6 rounded-lg"
    },
    ps = {
        class: "block items-center justify-between dtimer"
    },
    ds = r("div", {
        class: "lg:mb-[15px] lg:ml-[15px] text-center lg:text-left mb-2"
    }, [r("h4", {
        class: "uppercase font-semibold"
    }, "Live Draw Timer")], -1),
    fs = r("div", {
        class: "lg:mb-[15px] lg:ml-[15px] text-center lg:text-left"
    }, [r("h4", {
        class: "uppercase font-semibold"
    }, "Jackpots")], -1),
    vs = {
        class: "w-full xl:w-1/2 2xl:w-6/12 px-3 my-3"
    },
    ms = {
        class: "bg-white px-6 pt-6 pb-4 rounded-lg"
    },
    hs = {
        class: "flex flex-wrap -mx-3"
    },
    gs = {
        class: "w-full md:w-1/2 lg:w-6/12 px-3 my-3"
    },
    bs = r("div", {
        class: "bg-[#111111] flex items-center cursor-pointer qlink-box"
    }, [r("div", {
        class: ""
    }, [r("i", {
        class: "bx bx-money"
    })]), r("a", {
        href: ""
    }, [r("p", {
        class: "block"
    }, "DEPOSIT"), r("span", {
        class: "block"
    }, "Add Fund"), r("i", {
        class: "bx bx-chevron-right"
    })])], -1),
    ys = {
        key: 0,
        class: "w-full md:w-1/2 lg:w-6/12 px-3 my-3"
    },
    _s = r("div", {
        class: "bg-[#111111] flex items-center cursor-pointer qlink-box"
    }, [r("div", {
        class: ""
    }, [r("i", {
        class: "bx bx-cart"
    })]), r("a", {
        href: ""
    }, [r("p", {
        class: "block"
    }, "Package"), r("span", {
        class: "block"
    }, "PURCHASE"), r("i", {
        class: "bx bx-chevron-right"
    })])], -1),
    ws = {
        key: 1,
        class: "w-full md:w-1/2 lg:w-6/12 px-3 my-3"
    },
    xs = r("div", {
        class: "bg-[#111111] flex items-center cursor-pointer qlink-box"
    }, [r("div", {
        class: ""
    }, [r("i", {
        class: "bx bx-cart"
    })]), r("a", {
        href: ""
    }, [r("p", {
        class: "block"
    }, "TICKET"), r("span", {
        class: "block"
    }, "BUY"), r("i", {
        class: "bx bx-chevron-right"
    })])], -1),
    ks = {
        class: "w-full md:w-1/2 lg:w-6/12 px-3 my-3"
    },
    Cs = r("div", {
        class: "bg-[#111111] flex items-center cursor-pointer qlink-box"
    }, [r("div", {
        class: ""
    }, [r("i", {
        class: "bx bx-trophy"
    })]), r("a", {
        href: ""
    }, [r("p", {
        class: "block"
    }, "WINNINGS"), r("span", {
        class: "block"
    }, "Jackpots"), r("i", {
        class: "bx bx-chevron-right"
    })])], -1),
    Es = {
        class: "w-full md:w-1/2 lg:w-6/12 px-3 my-3"
    },
    Ts = r("div", {
        class: "bg-[#111111] flex items-center cursor-pointer qlink-box"
    }, [r("div", {
        class: ""
    }, [r("i", {
        class: "bx bx-wallet"
    })]), r("a", {
        href: ""
    }, [r("p", {
        class: "block"
    }, "Payout"), r("span", {
        class: "block"
    }, "Withdraw"), r("i", {
        class: "bx bx-chevron-right"
    })])], -1),
    Os = {
        class: "bg-white px-6 pt-6 pb-4 mt-6 rounded-lg"
    },
    As = {
        class: "flex flex-wrap -mx-3"
    },
    Ps = {
        class: "w-full md:w-1/2 lg:w-6/12 px-3 my-3"
    },
    Ds = {
        class: "flex items-center cursor-pointer qlink-box-2"
    },
    Is = r("div", {
        class: ""
    }, [r("img", {
        src: vn,
        alt: "",
        class: "w-[40px]"
    })], -1),
    Ss = {
        class: "block"
    },
    Ns = r("span", {
        class: "block wallet-lin wallet-lin-btn"
    }, "D Wallet", -1),
    Ws = r("span", {
        class: "wallet-desc"
    }, "(For Deposit)", -1),
    Bs = {
        class: "w-full md:w-1/2 lg:w-6/12 px-3 my-3"
    },
    Ms = {
        class: "flex items-center qlink-box-2"
    },
    Rs = r("div", {
        class: ""
    }, [r("img", {
        src: cr,
        alt: "",
        class: "w-[40px]"
    })], -1),
    Ls = {
        class: "block"
    },
    js = {
        class: "block"
    },
    Us = r("span", {
        class: "block wallet-lin"
    }, "W Wallet", -1),
    Hs = r("span", {
        class: "wallet-desc"
    }, "(Winnings & ROI Income)", -1),
    Vs = {
        class: "w-full md:w-1/2 lg:w-6/12 px-3 my-3"
    },
    qs = {
        class: "flex items-center qlink-box-2"
    },
    Fs = r("div", {
        class: ""
    }, [r("img", {
        src: ur,
        alt: "",
        class: "w-[40px]"
    })], -1),
    $s = {
        class: "block"
    },
    Ys = {
        class: "block"
    },
    zs = r("span", {
        class: "block wallet-lin"
    }, "T Wallet", -1),
    Xs = r("span", {
        class: "wallet-desc"
    }, "(For Tickets Purchase)", -1),
    Js = {
        class: "w-full md:w-1/2 lg:w-6/12 px-3 my-3"
    },
    Gs = {
        class: "flex items-center qlink-box-2"
    },
    Ks = r("div", {
        class: ""
    }, [r("img", {
        src: pr,
        alt: "",
        class: "w-[40px]"
    })], -1),
    Qs = {
        class: "block"
    },
    Zs = {
        class: "block"
    },
    ea = r("span", {
        class: "block wallet-lin"
    }, "R Wallet", -1),
    ta = r("span", {
        class: "wallet-desc"
    }, "(Rewards)", -1),
    na = {
        class: "w-full md:w-1/2 lg:w-6/12 px-3 my-3"
    },
    ra = {
        class: "flex items-center qlink-box-2"
    },
    oa = r("div", {
        class: ""
    }, [r("img", {
        src: dr,
        alt: "",
        class: "w-[40px]"
    })], -1),
    ia = {
        class: "block"
    },
    sa = {
        class: "block"
    },
    aa = r("span", {
        class: "block wallet-lin"
    }, "A Wallet", -1),
    la = r("span", {
        class: "wallet-desc"
    }, "(Referral & binary income )", -1),
    ca = {
        class: "w-full md:w-1/2 lg:w-6/12 px-3 my-3"
    },
    ua = {
        class: "flex items-center qlink-box-2"
    },
    pa = r("div", {
        class: ""
    }, [r("img", {
        src: fr,
        alt: "",
        class: "w-[40px]"
    })], -1),
    da = {
        class: "block"
    },
    fa = {
        class: "block"
    },
    va = r("span", {
        class: "block wallet-lin"
    }, "Jumbo Coin Wallet", -1),
    ma = r("span", {
        class: "wallet-desc"
    }, "(Jumbo Coin Wallet)", -1),
    ha = {
        key: 0,
        class: "w-full md:w-1/2 lg:w-6/12 px-3 my-3"
    },
    ga = {
        class: "flex items-center qlink-box-2"
    },
    ba = r("div", {
        class: ""
    }, [r("img", {
        src: vn,
        alt: "",
        class: "w-[40px]"
    })], -1),
    ya = {
        class: "block"
    },
    _a = {
        class: "block"
    },
    wa = r("span", {
        class: "block wallet-lin"
    }, "Leader Wallet", -1),
    xa = r("span", {
        class: "wallet-desc"
    }, "(Daily Leader Roi)", -1),
    ka = {
        class: "flex flex-wrap -mx-2 mt-3"
    },
    Ca = {
        class: "w-full px-2 mt-1 mb-3"
    },
    Ea = {
        class: "bg-white px-4 sm:px-6 pt-4 pb-4 rounded-lg shadow-sm"
    },
    Ta = {
        class: "mt-4"
    },
    Oa = {
        class: "relative w-full h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner"
    },
    Aa = {
        class: "truncate"
    },
    Pa = {
        class: "mt-2 text-xs sm:text-sm font-medium text-red-700 text-center sm:text-left"
    },
    Da = {
        class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 mt-4 text-sm sm:text-base text-gray-700"
    },
    Ia = r("strong", null, "A wallet capping:", -1),
    Sa = r("strong", null, "Capping reached:", -1),
    Na = r("strong", null, "Capping remaining:", -1),
    Wa = {
        class: "flex flex-wrap -mx-3 mt-3"
    },
    Ba = {
        class: "w-full xl:w-6/12 2xl:w-6/12 px-3 my-3"
    },
    Ma = {
        class: "bg-white px-6 pt-6 pb-4 rounded-lg"
    },
    Ra = r("div", {
        class: "flex justify-center mt-5"
    }, [r("div", {
        class: "max-w-lg w-full text-center"
    }, [r("h5", {
        class: "text-[21px] text-[#222] font-semibold uppercase"
    }, " Refer A Friend Program "), r("p", {
        class: "text-[#444] mt-2 text-[14px]"
    }, " Copy and share the below links on your social media platform or email to get more referrals. ")])], -1),
    La = {
        class: "flex flex-wrap -mx-3"
    },
    ja = {
        class: "w-full xl:w-1/2 2xl:w-1/2 px-3 mt-5 mb-3"
    },
    Ua = r("label", {
        for: ""
    }, "Left Referral Link", -1),
    Ha = {
        class: "flex mt-2"
    },
    Va = {
        key: 0,
        class: "bx bx-check-double text-xl"
    },
    qa = {
        key: 1,
        class: "bx bx-copy text-xl"
    },
    Fa = {
        class: "w-full xl:w-1/2 2xl:w-1/2 px-3 mt-5 mb-3"
    },
    $a = r("label", {
        for: ""
    }, "Right Referral Link", -1),
    Ya = {
        class: "flex mt-2"
    },
    za = {
        key: 0,
        class: "bx bx-check-double text-xl"
    },
    Xa = {
        key: 1,
        class: "bx bx-copy text-xl"
    },
    Ja = {
        class: "flex justify-center border-t border-gray-200 pt-5 mt-7"
    },
    Ga = {
        class: "max-w-lg w-full text-center"
    },
    Ka = {
        class: "w-full xl:w-6/12 2xl:w-6/12 px-3 my-3"
    },
    Qa = {
        class: "bg-white px-6 pt-6 pb-6 rounded-lg"
    },
    Za = {
        class: "flex flex-wrap -mx-3"
    },
    el = {
        class: "w-full xl:w-6/12 2xl:w-6/12 px-3"
    },
    tl = {
        class: "w-full mt-6"
    },
    nl = {
        class: "flex items-center qlink-box-2"
    },
    rl = r("div", {
        class: ""
    }, [r("i", {
        class: "bx bx-package"
    })], -1),
    ol = {
        class: "block"
    },
    il = r("span", {
        class: "block"
    }, "Package Purchased", -1),
    sl = {
        class: "block"
    },
    al = {
        class: "w-full mt-6"
    },
    ll = {
        class: "flex items-center qlink-box-2"
    },
    cl = r("div", {
        class: ""
    }, [r("i", {
        class: "bx bx-trophy"
    })], -1),
    ul = {
        class: "block"
    },
    pl = r("span", {
        class: "block"
    }, "Total Winnings", -1),
    dl = {
        class: "block"
    },
    fl = {
        class: "w-full mt-6"
    },
    vl = {
        class: "flex items-center qlink-box-2"
    },
    ml = r("div", {
        class: ""
    }, [r("i", {
        class: "bx bx-network-chart"
    })], -1),
    hl = {
        class: "block"
    },
    gl = r("span", {
        class: "block"
    }, "Network Commission", -1),
    bl = {
        class: "block"
    },
    yl = {
        class: "w-full mt-6"
    },
    _l = {
        class: "flex items-center qlink-box-2"
    },
    wl = r("div", {
        class: ""
    }, [r("i", {
        class: "bx bxl-graphql"
    })], -1),
    xl = {
        class: "block"
    },
    kl = r("span", {
        class: "block"
    }, "Referral Commission", -1),
    Cl = {
        class: "block"
    },
    El = {
        class: "w-full xl:w-6/12 2xl:w-6/12 px-3"
    },
    Tl = {
        class: "w-full mt-6"
    },
    Ol = {
        class: "flex items-center qlink-box-2"
    },
    Al = r("div", {
        class: ""
    }, [r("i", {
        class: "bx bx-money"
    })], -1),
    Pl = {
        class: "block"
    },
    Dl = r("span", {
        class: "block"
    }, "Total Deposit", -1),
    Il = {
        class: "block"
    },
    Sl = {
        class: "w-full mb-3 mt-6"
    },
    Nl = {
        class: "flex items-center qlink-box-2"
    },
    Wl = r("div", {
        class: ""
    }, [r("i", {
        class: "bx bx-wallet"
    })], -1),
    Bl = {
        class: "block"
    },
    Ml = r("span", {
        class: "block"
    }, "Total Withdraw", -1),
    Rl = {
        class: "block"
    },
    Ll = {
        class: "w-full mt-6"
    },
    jl = {
        class: "flex items-center qlink-box-2"
    },
    Ul = r("div", {
        class: ""
    }, [r("i", {
        class: "bx bx-user-voice"
    })], -1),
    Hl = {
        class: "block"
    },
    Vl = r("span", {
        class: "block"
    }, "Total Referrals", -1),
    ql = {
        class: "block"
    },
    Fl = {
        class: "w-full mt-6"
    },
    $l = {
        class: "flex items-center qlink-box-2"
    },
    Yl = r("div", {
        class: ""
    }, [r("i", {
        class: "bx bx-cart-alt"
    })], -1),
    zl = {
        class: "block"
    },
    Xl = r("span", {
        class: "block"
    }, "Tickets Purchased", -1),
    Jl = {
        class: "block"
    },
    Gl = {
        key: 2
    };

function Kl(e, t, n, i, s, o) {
    const l = rr("marquee"),
        c = qn,
        u = Fn,
        v = $n,
        f = Yn,
        T = Pr,
        O = jr,
        w = ro,
        m = co,
        h = or("tippy");
    return _(), x("div", null, [r("div", Gi, [Ki, r("div", Qi, [H(l, null, {
        default: ge(() => [A(" Mega Jackpot Winner: "), r("strong", null, [o.megawinner.length == 0 ? (_(), x(j, {
            key: 0
        }, [A(" No Winner yet ")], 64)) : U("", !0), o.megawinner.length !== 0 ? (_(), x(j, {
            key: 1
        }, [o.megawinner ? (_(), x("span", Zi, D(o.megawinner[0].fullname), 1)) : U("", !0), A(" ($ "), o.megawinner ? (_(), x("span", es, D(o.megawinner[0].amount), 1)) : U("", !0), A(") ")], 64)) : U("", !0)]), A(" | Royal Jackpot Winner: "), r("strong", null, [o.royalwinner.length == 0 ? (_(), x(j, {
            key: 0
        }, [A(" No Winner Yet ")], 64)) : o.royalwinner.length !== 0 ? (_(), x(j, {
            key: 1
        }, [o.royalwinner ? (_(), x("span", ts, D(o.royalwinner[0].fullname), 1)) : U("", !0), A(" ($ "), o.royalwinner ? (_(), x("span", ns, D(o.royalwinner[0].amount), 1)) : U("", !0), A(") ")], 64)) : U("", !0)]), A(" | Jumbo Jackpot Winner: "), r("strong", null, [o.jumbowinner.length == 0 ? (_(), x(j, {
            key: 0
        }, [A(" No Winner Yet ")], 64)) : o.jumbowinner.length !== 0 ? (_(), x(j, {
            key: 1
        }, [o.jumbowinner ? (_(), x("span", rs, D(o.jumbowinner[0].fullname), 1)) : U("", !0), A(" ($ "), o.jumbowinner ? (_(), x("span", os, D(o.jumbowinner[0].amount), 1)) : U("", !0), A(") ")], 64)) : U("", !0)])]),
        _: 1
    })])]), e.response.success && (o.fullname === "" || o.fullname === null) ? (_(), x(j, {
        key: 0
    }, [is, r("div", ss, [as, H(c, {
        to: "/profile/edit-profile",
        class: "inline-flex justify-center mt-3 lg:mt-0 items-center text-gray-900 bg-[#ECC762] border border-l-0 border-[#ECC762] rounded-md uppercase font-semibold h-[40px] px-4"
    }, {
        default: ge(() => [A("Update Now")]),
        _: 1
    })])], 64)) : U("", !0), r("div", ls, [r("div", cs, [r("div", us, [r("div", ps, [ds, H(u, {
        trans: {
            day: "Day",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds",
            expired: "Event has been expired.",
            running: "Till the end of event.",
            upcoming: "Next draw will start in",
            status: {
                expired: "Expired",
                running: "Running",
                upcoming: "Future"
            }
        },
        timezone: this.response.page.serverDateTime
    }, null, 8, ["trans", "timezone"]), fs]), H(v, {
        title: "Mega Jackpot",
        price: "100,000",
        buyingprice: parseInt(o.megaTicketcost.price) || 0,
        drawdate: 20,
        drawno: o.getMegaInfo.draw_no,
        ticketid: 1,
        class: "mt-3"
    }, null, 8, ["buyingprice", "drawno"]), H(v, {
        title: "Royal Jackpot",
        price: "500,000",
        buyingprice: parseInt(o.royalTicketcost.price) || 0,
        drawdate: 25,
        drawno: o.getRoyalInfo.draw_no,
        ticketid: 2,
        class: "mt-6"
    }, null, 8, ["buyingprice", "drawno"]), H(v, {
        title: "Jumbo Jackpot",
        price: "1 Million",
        buyingprice: parseInt(o.jumboTicketcost.price) || 0,
        drawdate: 30,
        drawno: o.getJumboInfo.draw_no,
        ticketid: 3,
        class: "mt-6"
    }, null, 8, ["buyingprice", "drawno"])])]), r("div", vs, [r("div", ms, [H(f, {
        title: "Quick Links",
        link: "/profile/edit-profile",
        linktext: "Update Profile"
    }), r("div", hs, [r("div", gs, [H(c, {
        to: "/deposit",
        class: "block"
    }, {
        default: ge(() => [bs]),
        _: 1
    })]), o.purchasepackagestatus.purchasepackagestatus == 1 ? (_(), x("div", ys, [H(c, {
        to: "/daily-rewards",
        class: "block"
    }, {
        default: ge(() => [_s]),
        _: 1
    })])) : U("", !0), o.purchasepackagestatus.purchasepackagestatus == 0 ? (_(), x("div", ws, [H(c, {
        to: "/buy-ticket",
        class: "block"
    }, {
        default: ge(() => [xs]),
        _: 1
    })])) : U("", !0), r("div", ks, [H(c, {
        to: "/my-winnings",
        class: "block"
    }, {
        default: ge(() => [Cs]),
        _: 1
    })]), r("div", Es, [H(c, {
        to: "/withdraw-fund/request-withdrawal",
        class: "block"
    }, {
        default: ge(() => [Ts]),
        _: 1
    })])])]), r("div", Os, [H(f, {
        title: "My Wallet",
        link: "/reports/wallet-report",
        linktext: "View Wallet Report"
    }), r("div", As, [r("div", Ps, [ne((_(), x("div", Ds, [Is, H(c, {
        to: "/deposit",
        class: "block"
    }, {
        default: ge(() => [r("p", Ss, [o.fWalletBalance == "" ? (_(), x(j, {
            key: 0
        }, [A(" $ 0 ")], 64)) : (_(), x(j, {
            key: 1
        }, [A(" $" + D(o.fWalletBalance), 1)], 64))]), Ns, Ws]),
        _: 1
    })])), [
        [h, "Funds deposited by you will be displayed here."]
    ])]), r("div", Bs, [ne((_(), x("div", Ms, [Rs, r("a", Ls, [r("p", js, [o.iWalletBalance == "" ? (_(), x(j, {
        key: 0
    }, [A(" $ 0 ")], 64)) : (_(), x(j, {
        key: 1
    }, [A(" $" + D(o.iWalletBalance), 1)], 64))]), Us, Hs])])), [
        [h, "Winnings & Incomes will be displayed here."]
    ])]), r("div", Vs, [ne((_(), x("div", qs, [Fs, r("a", $s, [r("p", Ys, [o.bWalletBalance == "" ? (_(), x(j, {
        key: 0
    }, [A(" $ 0 ")], 64)) : (_(), x(j, {
        key: 1
    }, [A(" $" + D(o.bWalletBalance), 1)], 64))]), zs, Xs])])), [
        [h, "All Bonus amount earned will be credited"]
    ])]), r("div", Js, [ne((_(), x("div", Gs, [Ks, r("a", Qs, [r("p", Zs, [o.rWalletBalance == "" ? (_(), x(j, {
        key: 0
    }, [A(" $ 0 ")], 64)) : (_(), x(j, {
        key: 1
    }, [A(" $" + D(o.rWalletBalance), 1)], 64))]), ea, ta])])), [
        [h, "Rewards earned by you will be displayed here."]
    ])]), r("div", na, [ne((_(), x("div", ra, [oa, r("a", ia, [r("p", sa, [o.aWalletBalance == "" ? (_(), x(j, {
        key: 0
    }, [A(" $ 0 ")], 64)) : (_(), x(j, {
        key: 1
    }, [A(" $" + D(o.aWalletBalance), 1)], 64))]), aa, la])])), [
        [h, "Referral & binary Incomes will be displayed here."]
    ])]), r("div", ca, [ne((_(), x("div", ua, [pa, r("a", da, [r("p", fa, [o.jtCoinWalletBalance == "" ? (_(), x(j, {
        key: 0
    }, [A(" $ 0 ")], 64)) : (_(), x(j, {
        key: 1
    }, [A(" $" + D(o.jtCoinWalletBalance), 1)], 64))]), va, ma])])), [
        [h, "Jumbo Coin Wallet"]
    ])]), o.leaderShipPackage ? (_(), x("div", ha, [ne((_(), x("div", ga, [ba, r("a", ya, [r("p", _a, [o.lWalletBalance == "" ? (_(), x(j, {
        key: 0
    }, [A(" $ 0 ")], 64)) : (_(), x(j, {
        key: 1
    }, [A(" $" + D(o.lWalletBalance), 1)], 64))]), wa, xa])])), [
        [h, "Leadership package Locked untill you reach sales target."]
    ])])) : U("", !0)])])])]), r("div", ka, [r("div", Ca, [r("div", Ea, [H(f, {
        title: "A Wallet Capping Limit",
        link: "/reports/wallet-report?id=5",
        linktext: "Wallet Report"
    }), r("div", Ta, [r("div", Oa, [r("div", {
        class: "h-full bg-[#ecc762] transition-all duration-700 ease-in-out",
        style: Yt({
            width: Math.min(o.aWalletProgressPercent, 100) + "%"
        })
    }, null, 4), ne((_(), x("div", {
        class: Je(["absolute top-0 left-0 h-full flex items-center text-[11px] font-semibold px-2 transition-all duration-700 ease-in-out", o.aWalletProgressPercent < 15 ? "text-black justify-start w-full" : "text-black justify-end"]),
        style: Yt({
            width: o.aWalletProgressPercent < 15 ? "100%" : Math.min(o.aWalletProgressPercent, 100) + "%"
        })
    }, [r("span", Aa, D(o.aWalletProgressPercent) + "%", 1)], 6)), [
        [h, {
            content: "Capping Reached: $" + o.awalletcappinginfo.capping_reached + " / $" + o.awalletcappinginfo.capping
        }]
    ])]), r("p", Pa, D(o.getCappingMessage), 1)]), r("div", Da, [r("div", null, [Ia, A(" $" + D(o.awalletcappinginfo.capping), 1)]), r("div", null, [Sa, A(" $" + D(o.awalletcappinginfo.capping_reached), 1)]), r("div", null, [Na, A(" $" + D(o.awalletcappinginfo.capping_remaining), 1)])])])])]), r("div", Wa, [r("div", Ba, [r("div", Ma, [H(f, {
        title: "Referral",
        link: "/reports/referral-income-report",
        linktext: "Referral Report"
    }), Ra, r("div", La, [r("div", ja, [Ua, r("div", Ha, [ne(r("input", {
        "onUpdate:modelValue": t[0] || (t[0] = y => s.copy1 = y),
        type: "text",
        class: "rounded-none rounded-l-lg bg-gray-50 border font-semibold text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-[#ECC762] p-3"
    }, null, 512), [
        [zt, s.copy1]
    ]), r("button", {
        type: "button",
        onClick: t[1] || (t[1] = (...y) => o.doCopy1 && o.doCopy1(...y)),
        class: "inline-flex items-center px-3 text-sm text-gray-900 bg-[#ECC762] border border-l-0 border-[#ECC762] rounded-r-md"
    }, [s.isCopy1 == !0 ? (_(), x("i", Va)) : (_(), x("i", qa))])])]), r("div", Fa, [$a, r("div", Ya, [ne(r("input", {
        "onUpdate:modelValue": t[2] || (t[2] = y => s.copy2 = y),
        type: "text",
        class: "rounded-none rounded-l-lg bg-gray-50 border font-semibold text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-[#ECC762] p-3"
    }, null, 512), [
        [zt, s.copy2]
    ]), r("button", {
        type: "button",
        onClick: t[3] || (t[3] = (...y) => o.doCopy2 && o.doCopy2(...y)),
        class: "inline-flex items-center px-3 text-sm text-gray-900 bg-[#ECC762] border border-l-0 border-[#ECC762] rounded-r-md"
    }, [s.isCopy2 == !0 ? (_(), x("i", za)) : (_(), x("i", Xa))])])])]), r("div", Ja, [r("div", Ga, [H(c, {
        to: "/marketing-tools",
        class: "inline-block bg-[#ECC762] text-[#111] px-5 py-3 rounded-lg text-sm uppercase font-semibold mt-4 mb-5 transition-all hover:opacity-90"
    }, {
        default: ge(() => [A("View Referral Banners")]),
        _: 1
    })])])])]), r("div", Ka, [r("div", Qa, [H(f, {
        title: "My Stats",
        link: "/my-winnings",
        linktext: "View More"
    }), r("div", Za, [r("div", el, [r("div", tl, [r("div", nl, [rl, r("a", ol, [il, r("p", sl, D(o.totalPackagePurchased), 1)])])]), r("div", al, [r("div", ll, [cl, r("a", ul, [pl, r("p", dl, "$" + D(o.myWinnings), 1)])])]), r("div", fl, [r("div", vl, [ml, r("a", hl, [gl, r("p", bl, "$" + D(o.totNetWorkCommission), 1)])])]), r("div", yl, [r("div", _l, [wl, r("a", xl, [kl, r("p", Cl, "$" + D(parseFloat(o.totAffiliateAmt) + parseFloat(o.totticketAffiliateAmt)), 1)])])])]), r("div", El, [r("div", Tl, [r("div", Ol, [Al, r("a", Pl, [Dl, r("p", Il, "$" + D(o.totDeposit), 1)])])]), r("div", Sl, [r("div", Nl, [Wl, r("a", Bl, [Ml, r("p", Rl, "$" + D(o.totWithdrawals), 1)])])]), r("div", Ll, [r("div", jl, [Ul, r("a", Hl, [Vl, r("p", ql, D(o.totRegister), 1)])])]), r("div", Fl, [r("div", $l, [Yl, r("a", zl, [Xl, r("p", Jl, D(o.totTicketPurchased), 1)])])])])])])])]), o.AllWinnerPopup != "" ? (_(), Ct(T, {
        key: 1,
        allpopupdetails: o.AllWinnerPopup,
        onButtonclicked: o.OnButton
    }, null, 8, ["allpopupdetails", "onButtonclicked"])) : U("", !0), o.getPopup != "" ? ne((_(), x("div", Gl, [H(O, {
        popupimg: o.getPopup,
        condition: o.popupBtnCondition,
        buttonName: o.popupBtnName,
        url: o.popupBtnURL
    }, null, 8, ["popupimg", "condition", "buttonName", "url"])], 512)), [
        [ir, s.showPopup]
    ]) : U("", !0), o.surpriceWinnerPopup != "" ? (_(), Ct(w, {
        key: 3,
        popupdetails: o.surpriceWinnerPopup
    }, null, 8, ["popupdetails"])) : U("", !0), o.AWalletlimitPopup != "" && o.aWalletBalance > 0 ? (_(), Ct(m, {
        key: 4
    })) : U("", !0)])
}
const cc = Ze(Ji, [
    ["render", Kl]
]);
export {
    cc as
    default
};