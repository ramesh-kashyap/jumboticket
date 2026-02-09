function Ye(i) {
    return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object
}

function He(i, e) {
    i === void 0 && (i = {}), e === void 0 && (e = {}), Object.keys(e).forEach(t => {
        typeof i[t] > "u" ? i[t] = e[t] : Ye(e[t]) && Ye(i[t]) && Object.keys(e[t]).length > 0 && He(i[t], e[t])
    })
}
const Ke = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};

function N() {
    const i = typeof document < "u" ? document : {};
    return He(i, Ke), i
}
const rt = {
    document: Ke,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(i) {
        return typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0)
    },
    cancelAnimationFrame(i) {
        typeof setTimeout > "u" || clearTimeout(i)
    }
};

function R() {
    const i = typeof window < "u" ? window : {};
    return He(i, rt), i
}

function Z(i) {
    return i === void 0 && (i = ""), i.trim().split(" ").filter(e => !!e.trim())
}

function at(i) {
    const e = i;
    Object.keys(e).forEach(t => {
        try {
            e[t] = null
        } catch {}
        try {
            delete e[t]
        } catch {}
    })
}

function te(i, e) {
    return e === void 0 && (e = 0), setTimeout(i, e)
}

function j() {
    return Date.now()
}

function nt(i) {
    const e = R();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(i, null)), !t && i.currentStyle && (t = i.currentStyle), t || (t = i.style), t
}

function Ae(i, e) {
    e === void 0 && (e = "x");
    const t = R();
    let s, r, a;
    const d = nt(i);
    return t.WebKitCSSMatrix ? (r = d.transform || d.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(p => p.replace(",", ".")).join(", ")), a = new t.WebKitCSSMatrix(r === "none" ? "" : r)) : (a = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = a.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? r = a.m41 : s.length === 16 ? r = parseFloat(s[12]) : r = parseFloat(s[4])), e === "y" && (t.WebKitCSSMatrix ? r = a.m42 : s.length === 16 ? r = parseFloat(s[13]) : r = parseFloat(s[5])), r || 0
}

function oe(i) {
    return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object"
}

function lt(i) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11)
}

function F() {
    const i = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (s != null && !lt(s)) {
            const r = Object.keys(Object(s)).filter(a => e.indexOf(a) < 0);
            for (let a = 0, d = r.length; a < d; a += 1) {
                const p = r[a],
                    n = Object.getOwnPropertyDescriptor(s, p);
                n !== void 0 && n.enumerable && (oe(i[p]) && oe(s[p]) ? s[p].__swiper__ ? i[p] = s[p] : F(i[p], s[p]) : !oe(i[p]) && oe(s[p]) ? (i[p] = {}, s[p].__swiper__ ? i[p] = s[p] : F(i[p], s[p])) : i[p] = s[p])
            }
        }
    }
    return i
}

function de(i, e, t) {
    i.style.setProperty(e, t)
}

function Ze(i) {
    let {
        swiper: e,
        targetPosition: t,
        side: s
    } = i;
    const r = R(),
        a = -e.translate;
    let d = null,
        p;
    const n = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
    const f = t > a ? "next" : "prev",
        l = (c, m) => f === "next" && c >= m || f === "prev" && c <= m,
        o = () => {
            p = new Date().getTime(), d === null && (d = p);
            const c = Math.max(Math.min((p - d) / n, 1), 0),
                m = .5 - Math.cos(c * Math.PI) / 2;
            let v = a + m * (t - a);
            if (l(v, t) && (v = t), e.wrapperEl.scrollTo({
                    [s]: v
                }), l(v, t)) {
                e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [s]: v
                    })
                }), r.cancelAnimationFrame(e.cssModeFrameID);
                return
            }
            e.cssModeFrameID = r.requestAnimationFrame(o)
        };
    o()
}

function ie(i) {
    return i.querySelector(".swiper-slide-transform") || i.shadowRoot && i.shadowRoot.querySelector(".swiper-slide-transform") || i
}

function X(i, e) {
    return e === void 0 && (e = ""), [...i.children].filter(t => t.matches(e))
}

function we(i) {
    try {
        console.warn(i);
        return
    } catch {}
}

function W(i, e) {
    e === void 0 && (e = []);
    const t = document.createElement(i);
    return t.classList.add(...Array.isArray(e) ? e : Z(e)), t
}

function ve(i) {
    const e = R(),
        t = N(),
        s = i.getBoundingClientRect(),
        r = t.body,
        a = i.clientTop || r.clientTop || 0,
        d = i.clientLeft || r.clientLeft || 0,
        p = i === e ? e.scrollY : i.scrollTop,
        n = i === e ? e.scrollX : i.scrollLeft;
    return {
        top: s.top + p - a,
        left: s.left + n - d
    }
}

function ot(i, e) {
    const t = [];
    for (; i.previousElementSibling;) {
        const s = i.previousElementSibling;
        e ? s.matches(e) && t.push(s) : t.push(s), i = s
    }
    return t
}

function dt(i, e) {
    const t = [];
    for (; i.nextElementSibling;) {
        const s = i.nextElementSibling;
        e ? s.matches(e) && t.push(s) : t.push(s), i = s
    }
    return t
}

function Q(i, e) {
    return R().getComputedStyle(i, null).getPropertyValue(e)
}

function pe(i) {
    let e = i,
        t;
    if (e) {
        for (t = 0;
            (e = e.previousSibling) !== null;) e.nodeType === 1 && (t += 1);
        return t
    }
}

function ee(i, e) {
    const t = [];
    let s = i.parentElement;
    for (; s;) e ? s.matches(e) && t.push(s) : t.push(s), s = s.parentElement;
    return t
}

function ce(i, e) {
    function t(s) {
        s.target === i && (e.call(i, s), i.removeEventListener("transitionend", t))
    }
    e && i.addEventListener("transitionend", t)
}

function $e(i, e, t) {
    const s = R();
    return t ? i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : i.offsetWidth
}
let Me;

function ct() {
    const i = R(),
        e = N();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
        touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch)
    }
}

function Qe() {
    return Me || (Me = ct()), Me
}
let Ce;

function pt(i) {
    let {
        userAgent: e
    } = i === void 0 ? {} : i;
    const t = Qe(),
        s = R(),
        r = s.navigator.platform,
        a = e || s.navigator.userAgent,
        d = {
            ios: !1,
            android: !1
        },
        p = s.screen.width,
        n = s.screen.height,
        f = a.match(/(Android);?[\s\/]+([\d.]+)?/);
    let l = a.match(/(iPad).*OS\s([\d_]+)/);
    const o = a.match(/(iPod)(.*OS\s([\d_]+))?/),
        c = !l && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        m = r === "Win32";
    let v = r === "MacIntel";
    const w = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !l && v && t.touch && w.indexOf(`${p}x${n}`) >= 0 && (l = a.match(/(Version)\/([\d.]+)/), l || (l = [0, 1, "13_0_0"]), v = !1), f && !m && (d.os = "android", d.android = !0), (l || c || o) && (d.os = "ios", d.ios = !0), d
}

function ft(i) {
    return i === void 0 && (i = {}), Ce || (Ce = pt(i)), Ce
}
let Pe;

function ut() {
    const i = R();
    let e = !1;

    function t() {
        const s = i.navigator.userAgent.toLowerCase();
        return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0
    }
    if (t()) {
        const s = String(i.navigator.userAgent);
        if (s.includes("Version/")) {
            const [r, a] = s.split("Version/")[1].split(" ")[0].split(".").map(d => Number(d));
            e = r < 16 || r === 16 && a < 2
        }
    }
    return {
        isSafari: e || t(),
        needPerspectiveFix: e,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)
    }
}

function mt() {
    return Pe || (Pe = ut()), Pe
}

function ht(i) {
    let {
        swiper: e,
        on: t,
        emit: s
    } = i;
    const r = R();
    let a = null,
        d = null;
    const p = () => {
            !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"))
        },
        n = () => {
            !e || e.destroyed || !e.initialized || (a = new ResizeObserver(o => {
                d = r.requestAnimationFrame(() => {
                    const {
                        width: c,
                        height: m
                    } = e;
                    let v = c,
                        w = m;
                    o.forEach(g => {
                        let {
                            contentBoxSize: b,
                            contentRect: h,
                            target: u
                        } = g;
                        u && u !== e.el || (v = h ? h.width : (b[0] || b).inlineSize, w = h ? h.height : (b[0] || b).blockSize)
                    }), (v !== c || w !== m) && p()
                })
            }), a.observe(e.el))
        },
        f = () => {
            d && r.cancelAnimationFrame(d), a && a.unobserve && e.el && (a.unobserve(e.el), a = null)
        },
        l = () => {
            !e || e.destroyed || !e.initialized || s("orientationchange")
        };
    t("init", () => {
        if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
            n();
            return
        }
        r.addEventListener("resize", p), r.addEventListener("orientationchange", l)
    }), t("destroy", () => {
        f(), r.removeEventListener("resize", p), r.removeEventListener("orientationchange", l)
    })
}

function gt(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s,
        emit: r
    } = i;
    const a = [],
        d = R(),
        p = function(l, o) {
            o === void 0 && (o = {});
            const c = d.MutationObserver || d.WebkitMutationObserver,
                m = new c(v => {
                    if (e.__preventObserver__) return;
                    if (v.length === 1) {
                        r("observerUpdate", v[0]);
                        return
                    }
                    const w = function() {
                        r("observerUpdate", v[0])
                    };
                    d.requestAnimationFrame ? d.requestAnimationFrame(w) : d.setTimeout(w, 0)
                });
            m.observe(l, {
                attributes: typeof o.attributes > "u" ? !0 : o.attributes,
                childList: typeof o.childList > "u" ? !0 : o.childList,
                characterData: typeof o.characterData > "u" ? !0 : o.characterData
            }), a.push(m)
        },
        n = () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const l = ee(e.hostEl);
                    for (let o = 0; o < l.length; o += 1) p(l[o])
                }
                p(e.hostEl, {
                    childList: e.params.observeSlideChildren
                }), p(e.wrapperEl, {
                    attributes: !1
                })
            }
        },
        f = () => {
            a.forEach(l => {
                l.disconnect()
            }), a.splice(0, a.length)
        };
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), s("init", n), s("destroy", f)
}
var wt = {
    on(i, e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
        const r = t ? "unshift" : "push";
        return i.split(" ").forEach(a => {
            s.eventsListeners[a] || (s.eventsListeners[a] = []), s.eventsListeners[a][r](e)
        }), s
    },
    once(i, e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;

        function r() {
            s.off(i, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var a = arguments.length, d = new Array(a), p = 0; p < a; p++) d[p] = arguments[p];
            e.apply(s, d)
        }
        return r.__emitterProxy = e, s.on(i, r, t)
    },
    onAny(i, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof i != "function") return t;
        const s = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i), t
    },
    offAny(i) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
        const t = e.eventsAnyListeners.indexOf(i);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1), e
    },
    off(i, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach(s => {
            typeof e > "u" ? t.eventsListeners[s] = [] : t.eventsListeners[s] && t.eventsListeners[s].forEach((r, a) => {
                (r === e || r.__emitterProxy && r.__emitterProxy === e) && t.eventsListeners[s].splice(a, 1)
            })
        }), t
    },
    emit() {
        const i = this;
        if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i;
        let e, t, s;
        for (var r = arguments.length, a = new Array(r), d = 0; d < r; d++) a[d] = arguments[d];
        return typeof a[0] == "string" || Array.isArray(a[0]) ? (e = a[0], t = a.slice(1, a.length), s = i) : (e = a[0].events, t = a[0].data, s = a[0].context || i), t.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach(n => {
            i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(f => {
                f.apply(s, [n, ...t])
            }), i.eventsListeners && i.eventsListeners[n] && i.eventsListeners[n].forEach(f => {
                f.apply(s, t)
            })
        }), i
    }
};

function vt() {
    const i = this;
    let e, t;
    const s = i.el;
    typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = s.clientWidth, typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = s.clientHeight, !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(Q(s, "padding-left") || 0, 10) - parseInt(Q(s, "padding-right") || 0, 10), t = t - parseInt(Q(s, "padding-top") || 0, 10) - parseInt(Q(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(i, {
        width: e,
        height: t,
        size: i.isHorizontal() ? e : t
    }))
}

function bt() {
    const i = this;

    function e(M, L) {
        return parseFloat(M.getPropertyValue(i.getDirectionLabel(L)) || 0)
    }
    const t = i.params,
        {
            wrapperEl: s,
            slidesEl: r,
            size: a,
            rtlTranslate: d,
            wrongRTL: p
        } = i,
        n = i.virtual && t.virtual.enabled,
        f = n ? i.virtual.slides.length : i.slides.length,
        l = X(r, `.${i.params.slideClass}, swiper-slide`),
        o = n ? i.virtual.slides.length : l.length;
    let c = [];
    const m = [],
        v = [];
    let w = t.slidesOffsetBefore;
    typeof w == "function" && (w = t.slidesOffsetBefore.call(i));
    let g = t.slidesOffsetAfter;
    typeof g == "function" && (g = t.slidesOffsetAfter.call(i));
    const b = i.snapGrid.length,
        h = i.slidesGrid.length;
    let u = t.spaceBetween,
        S = -w,
        z = 0,
        P = 0;
    if (typeof a > "u") return;
    typeof u == "string" && u.indexOf("%") >= 0 ? u = parseFloat(u.replace("%", "")) / 100 * a : typeof u == "string" && (u = parseFloat(u)), i.virtualSize = -u, l.forEach(M => {
        d ? M.style.marginLeft = "" : M.style.marginRight = "", M.style.marginBottom = "", M.style.marginTop = ""
    }), t.centeredSlides && t.cssMode && (de(s, "--swiper-centered-offset-before", ""), de(s, "--swiper-centered-offset-after", ""));
    const k = t.grid && t.grid.rows > 1 && i.grid;
    k ? i.grid.initSlides(l) : i.grid && i.grid.unsetSlides();
    let A;
    const E = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(M => typeof t.breakpoints[M].slidesPerView < "u").length > 0;
    for (let M = 0; M < o; M += 1) {
        A = 0;
        let L;
        if (l[M] && (L = l[M]), k && i.grid.updateSlide(M, L, l), !(l[M] && Q(L, "display") === "none")) {
            if (t.slidesPerView === "auto") {
                E && (l[M].style[i.getDirectionLabel("width")] = "");
                const C = getComputedStyle(L),
                    T = L.style.transform,
                    y = L.style.webkitTransform;
                if (T && (L.style.transform = "none"), y && (L.style.webkitTransform = "none"), t.roundLengths) A = i.isHorizontal() ? $e(L, "width", !0) : $e(L, "height", !0);
                else {
                    const x = e(C, "width"),
                        D = e(C, "padding-left"),
                        O = e(C, "padding-right"),
                        I = e(C, "margin-left"),
                        $ = e(C, "margin-right"),
                        H = C.getPropertyValue("box-sizing");
                    if (H && H === "border-box") A = x + I + $;
                    else {
                        const {
                            clientWidth: B,
                            offsetWidth: Y
                        } = L;
                        A = x + D + O + I + $ + (Y - B)
                    }
                }
                T && (L.style.transform = T), y && (L.style.webkitTransform = y), t.roundLengths && (A = Math.floor(A))
            } else A = (a - (t.slidesPerView - 1) * u) / t.slidesPerView, t.roundLengths && (A = Math.floor(A)), l[M] && (l[M].style[i.getDirectionLabel("width")] = `${A}px`);
            l[M] && (l[M].swiperSlideSize = A), v.push(A), t.centeredSlides ? (S = S + A / 2 + z / 2 + u, z === 0 && M !== 0 && (S = S - a / 2 - u), M === 0 && (S = S - a / 2 - u), Math.abs(S) < 1 / 1e3 && (S = 0), t.roundLengths && (S = Math.floor(S)), P % t.slidesPerGroup === 0 && c.push(S), m.push(S)) : (t.roundLengths && (S = Math.floor(S)), (P - Math.min(i.params.slidesPerGroupSkip, P)) % i.params.slidesPerGroup === 0 && c.push(S), m.push(S), S = S + A + u), i.virtualSize += A + u, z = A, P += 1
        }
    }
    if (i.virtualSize = Math.max(i.virtualSize, a) + g, d && p && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize+u}px`), t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize+u}px`), k && i.grid.updateWrapperSize(A, c), !t.centeredSlides) {
        const M = [];
        for (let L = 0; L < c.length; L += 1) {
            let C = c[L];
            t.roundLengths && (C = Math.floor(C)), c[L] <= i.virtualSize - a && M.push(C)
        }
        c = M, Math.floor(i.virtualSize - a) - Math.floor(c[c.length - 1]) > 1 && c.push(i.virtualSize - a)
    }
    if (n && t.loop) {
        const M = v[0] + u;
        if (t.slidesPerGroup > 1) {
            const L = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup),
                C = M * t.slidesPerGroup;
            for (let T = 0; T < L; T += 1) c.push(c[c.length - 1] + C)
        }
        for (let L = 0; L < i.virtual.slidesBefore + i.virtual.slidesAfter; L += 1) t.slidesPerGroup === 1 && c.push(c[c.length - 1] + M), m.push(m[m.length - 1] + M), i.virtualSize += M
    }
    if (c.length === 0 && (c = [0]), u !== 0) {
        const M = i.isHorizontal() && d ? "marginLeft" : i.getDirectionLabel("marginRight");
        l.filter((L, C) => !t.cssMode || t.loop ? !0 : C !== l.length - 1).forEach(L => {
            L.style[M] = `${u}px`
        })
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let M = 0;
        v.forEach(C => {
            M += C + (u || 0)
        }), M -= u;
        const L = M - a;
        c = c.map(C => C <= 0 ? -w : C > L ? L + g : C)
    }
    if (t.centerInsufficientSlides) {
        let M = 0;
        if (v.forEach(L => {
                M += L + (u || 0)
            }), M -= u, M < a) {
            const L = (a - M) / 2;
            c.forEach((C, T) => {
                c[T] = C - L
            }), m.forEach((C, T) => {
                m[T] = C + L
            })
        }
    }
    if (Object.assign(i, {
            slides: l,
            snapGrid: c,
            slidesGrid: m,
            slidesSizesGrid: v
        }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
        de(s, "--swiper-centered-offset-before", `${-c[0]}px`), de(s, "--swiper-centered-offset-after", `${i.size/2-v[v.length-1]/2}px`);
        const M = -i.snapGrid[0],
            L = -i.slidesGrid[0];
        i.snapGrid = i.snapGrid.map(C => C + M), i.slidesGrid = i.slidesGrid.map(C => C + L)
    }
    if (o !== f && i.emit("slidesLengthChange"), c.length !== b && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), m.length !== h && i.emit("slidesGridLengthChange"), t.watchSlidesProgress && i.updateSlidesOffset(), !n && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
        const M = `${t.containerModifierClass}backface-hidden`,
            L = i.el.classList.contains(M);
        o <= t.maxBackfaceHiddenSlides ? L || i.el.classList.add(M) : L && i.el.classList.remove(M)
    }
}

function yt(i) {
    const e = this,
        t = [],
        s = e.virtual && e.params.virtual.enabled;
    let r = 0,
        a;
    typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
    const d = p => s ? e.slides[e.getSlideIndexByData(p)] : e.slides[p];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)(e.visibleSlides || []).forEach(p => {
            t.push(p)
        });
        else
            for (a = 0; a < Math.ceil(e.params.slidesPerView); a += 1) {
                const p = e.activeIndex + a;
                if (p > e.slides.length && !s) break;
                t.push(d(p))
            } else t.push(d(e.activeIndex));
    for (a = 0; a < t.length; a += 1)
        if (typeof t[a] < "u") {
            const p = t[a].offsetHeight;
            r = p > r ? p : r
        }(r || r === 0) && (e.wrapperEl.style.height = `${r}px`)
}

function St() {
    const i = this,
        e = i.slides,
        t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1) e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment()
}

function xt(i) {
    i === void 0 && (i = this && this.translate || 0);
    const e = this,
        t = e.params,
        {
            slides: s,
            rtlTranslate: r,
            snapGrid: a
        } = e;
    if (s.length === 0) return;
    typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let d = -i;
    r && (d = i), s.forEach(n => {
        n.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
    }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let p = t.spaceBetween;
    typeof p == "string" && p.indexOf("%") >= 0 ? p = parseFloat(p.replace("%", "")) / 100 * e.size : typeof p == "string" && (p = parseFloat(p));
    for (let n = 0; n < s.length; n += 1) {
        const f = s[n];
        let l = f.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (l -= s[0].swiperSlideOffset);
        const o = (d + (t.centeredSlides ? e.minTranslate() : 0) - l) / (f.swiperSlideSize + p),
            c = (d - a[0] + (t.centeredSlides ? e.minTranslate() : 0) - l) / (f.swiperSlideSize + p),
            m = -(d - l),
            v = m + e.slidesSizesGrid[n],
            w = m >= 0 && m <= e.size - e.slidesSizesGrid[n];
        (m >= 0 && m < e.size - 1 || v > 1 && v <= e.size || m <= 0 && v >= e.size) && (e.visibleSlides.push(f), e.visibleSlidesIndexes.push(n), s[n].classList.add(t.slideVisibleClass)), w && s[n].classList.add(t.slideFullyVisibleClass), f.progress = r ? -o : o, f.originalProgress = r ? -c : c
    }
}

function Et(i) {
    const e = this;
    if (typeof i > "u") {
        const l = e.rtlTranslate ? -1 : 1;
        i = e && e.translate && e.translate * l || 0
    }
    const t = e.params,
        s = e.maxTranslate() - e.minTranslate();
    let {
        progress: r,
        isBeginning: a,
        isEnd: d,
        progressLoop: p
    } = e;
    const n = a,
        f = d;
    if (s === 0) r = 0, a = !0, d = !0;
    else {
        r = (i - e.minTranslate()) / s;
        const l = Math.abs(i - e.minTranslate()) < 1,
            o = Math.abs(i - e.maxTranslate()) < 1;
        a = l || r <= 0, d = o || r >= 1, l && (r = 0), o && (r = 1)
    }
    if (t.loop) {
        const l = e.getSlideIndexByData(0),
            o = e.getSlideIndexByData(e.slides.length - 1),
            c = e.slidesGrid[l],
            m = e.slidesGrid[o],
            v = e.slidesGrid[e.slidesGrid.length - 1],
            w = Math.abs(i);
        w >= c ? p = (w - c) / v : p = (w + v - m) / v, p > 1 && (p -= 1)
    }
    Object.assign(e, {
        progress: r,
        progressLoop: p,
        isBeginning: a,
        isEnd: d
    }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i), a && !n && e.emit("reachBeginning toEdge"), d && !f && e.emit("reachEnd toEdge"), (n && !a || f && !d) && e.emit("fromEdge"), e.emit("progress", r)
}

function Tt() {
    const i = this,
        {
            slides: e,
            params: t,
            slidesEl: s,
            activeIndex: r
        } = i,
        a = i.virtual && t.virtual.enabled,
        d = i.grid && t.grid && t.grid.rows > 1,
        p = o => X(s, `.${t.slideClass}${o}, swiper-slide${o}`)[0];
    e.forEach(o => {
        o.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass)
    });
    let n, f, l;
    if (a)
        if (t.loop) {
            let o = r - i.virtual.slidesBefore;
            o < 0 && (o = i.virtual.slides.length + o), o >= i.virtual.slides.length && (o -= i.virtual.slides.length), n = p(`[data-swiper-slide-index="${o}"]`)
        } else n = p(`[data-swiper-slide-index="${r}"]`);
    else d ? (n = e.filter(o => o.column === r)[0], l = e.filter(o => o.column === r + 1)[0], f = e.filter(o => o.column === r - 1)[0]) : n = e[r];
    n && (n.classList.add(t.slideActiveClass), d ? (l && l.classList.add(t.slideNextClass), f && f.classList.add(t.slidePrevClass)) : (l = dt(n, `.${t.slideClass}, swiper-slide`)[0], t.loop && !l && (l = e[0]), l && l.classList.add(t.slideNextClass), f = ot(n, `.${t.slideClass}, swiper-slide`)[0], t.loop && !f === 0 && (f = e[e.length - 1]), f && f.classList.add(t.slidePrevClass))), i.emitSlidesClasses()
}
const he = (i, e) => {
        if (!i || i.destroyed || !i.params) return;
        const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`,
            s = e.closest(t());
        if (s) {
            let r = s.querySelector(`.${i.params.lazyPreloaderClass}`);
            !r && i.isElement && (s.shadowRoot ? r = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                s.shadowRoot && (r = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`), r && r.remove())
            })), r && r.remove()
        }
    },
    Le = (i, e) => {
        if (!i.slides[e]) return;
        const t = i.slides[e].querySelector('[loading="lazy"]');
        t && t.removeAttribute("loading")
    },
    Oe = i => {
        if (!i || i.destroyed || !i.params) return;
        let e = i.params.lazyPreloadPrevNext;
        const t = i.slides.length;
        if (!t || !e || e < 0) return;
        e = Math.min(e, t);
        const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView),
            r = i.activeIndex;
        if (i.params.grid && i.params.grid.rows > 1) {
            const d = r,
                p = [d - e];
            p.push(...Array.from({
                length: e
            }).map((n, f) => d + s + f)), i.slides.forEach((n, f) => {
                p.includes(n.column) && Le(i, f)
            });
            return
        }
        const a = r + s - 1;
        if (i.params.rewind || i.params.loop)
            for (let d = r - e; d <= a + e; d += 1) {
                const p = (d % t + t) % t;
                (p < r || p > a) && Le(i, p)
            } else
                for (let d = Math.max(r - e, 0); d <= Math.min(a + e, t - 1); d += 1) d !== r && (d > a || d < r) && Le(i, d)
    };

function Mt(i) {
    const {
        slidesGrid: e,
        params: t
    } = i, s = i.rtlTranslate ? i.translate : -i.translate;
    let r;
    for (let a = 0; a < e.length; a += 1) typeof e[a + 1] < "u" ? s >= e[a] && s < e[a + 1] - (e[a + 1] - e[a]) / 2 ? r = a : s >= e[a] && s < e[a + 1] && (r = a + 1) : s >= e[a] && (r = a);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r
}

function Ct(i) {
    const e = this,
        t = e.rtlTranslate ? e.translate : -e.translate,
        {
            snapGrid: s,
            params: r,
            activeIndex: a,
            realIndex: d,
            snapIndex: p
        } = e;
    let n = i,
        f;
    const l = m => {
        let v = m - e.virtual.slidesBefore;
        return v < 0 && (v = e.virtual.slides.length + v), v >= e.virtual.slides.length && (v -= e.virtual.slides.length), v
    };
    if (typeof n > "u" && (n = Mt(e)), s.indexOf(t) >= 0) f = s.indexOf(t);
    else {
        const m = Math.min(r.slidesPerGroupSkip, n);
        f = m + Math.floor((n - m) / r.slidesPerGroup)
    }
    if (f >= s.length && (f = s.length - 1), n === a && !e.params.loop) {
        f !== p && (e.snapIndex = f, e.emit("snapIndexChange"));
        return
    }
    if (n === a && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = l(n);
        return
    }
    const o = e.grid && r.grid && r.grid.rows > 1;
    let c;
    if (e.virtual && r.virtual.enabled && r.loop) c = l(n);
    else if (o) {
        const m = e.slides.filter(w => w.column === n)[0];
        let v = parseInt(m.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(v) && (v = Math.max(e.slides.indexOf(m), 0)), c = Math.floor(v / r.grid.rows)
    } else if (e.slides[n]) {
        const m = e.slides[n].getAttribute("data-swiper-slide-index");
        m ? c = parseInt(m, 10) : c = n
    } else c = n;
    Object.assign(e, {
        previousSnapIndex: p,
        snapIndex: f,
        previousRealIndex: d,
        realIndex: c,
        previousIndex: a,
        activeIndex: n
    }), e.initialized && Oe(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (d !== c && e.emit("realIndexChange"), e.emit("slideChange"))
}

function Pt(i, e) {
    const t = this,
        s = t.params;
    let r = i.closest(`.${s.slideClass}, swiper-slide`);
    !r && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach(p => {
        !r && p.matches && p.matches(`.${s.slideClass}, swiper-slide`) && (r = p)
    });
    let a = !1,
        d;
    if (r) {
        for (let p = 0; p < t.slides.length; p += 1)
            if (t.slides[p] === r) {
                a = !0, d = p;
                break
            }
    }
    if (r && a) t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = d;
    else {
        t.clickedSlide = void 0, t.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var Lt = {
    updateSize: vt,
    updateSlides: bt,
    updateAutoHeight: yt,
    updateSlidesOffset: St,
    updateSlidesProgress: xt,
    updateProgress: Et,
    updateSlidesClasses: Tt,
    updateActiveIndex: Ct,
    updateClickedSlide: Pt
};

function zt(i) {
    i === void 0 && (i = this.isHorizontal() ? "x" : "y");
    const e = this,
        {
            params: t,
            rtlTranslate: s,
            translate: r,
            wrapperEl: a
        } = e;
    if (t.virtualTranslate) return s ? -r : r;
    if (t.cssMode) return r;
    let d = Ae(a, i);
    return d += e.cssOverflowAdjustment(), s && (d = -d), d || 0
}

function It(i, e) {
    const t = this,
        {
            rtlTranslate: s,
            params: r,
            wrapperEl: a,
            progress: d
        } = t;
    let p = 0,
        n = 0;
    const f = 0;
    t.isHorizontal() ? p = s ? -i : i : n = i, r.roundLengths && (p = Math.floor(p), n = Math.floor(n)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? p : n, r.cssMode ? a[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -p : -n : r.virtualTranslate || (t.isHorizontal() ? p -= t.cssOverflowAdjustment() : n -= t.cssOverflowAdjustment(), a.style.transform = `translate3d(${p}px, ${n}px, ${f}px)`);
    let l;
    const o = t.maxTranslate() - t.minTranslate();
    o === 0 ? l = 0 : l = (i - t.minTranslate()) / o, l !== d && t.updateProgress(i), t.emit("setTranslate", t.translate, e)
}

function At() {
    return -this.snapGrid[0]
}

function $t() {
    return -this.snapGrid[this.snapGrid.length - 1]
}

function Ot(i, e, t, s, r) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), s === void 0 && (s = !0);
    const a = this,
        {
            params: d,
            wrapperEl: p
        } = a;
    if (a.animating && d.preventInteractionOnTransition) return !1;
    const n = a.minTranslate(),
        f = a.maxTranslate();
    let l;
    if (s && i > n ? l = n : s && i < f ? l = f : l = i, a.updateProgress(l), d.cssMode) {
        const o = a.isHorizontal();
        if (e === 0) p[o ? "scrollLeft" : "scrollTop"] = -l;
        else {
            if (!a.support.smoothScroll) return Ze({
                swiper: a,
                targetPosition: -l,
                side: o ? "left" : "top"
            }), !0;
            p.scrollTo({
                [o ? "left" : "top"]: -l,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (a.setTransition(0), a.setTranslate(l), t && (a.emit("beforeTransitionStart", e, r), a.emit("transitionEnd"))) : (a.setTransition(e), a.setTranslate(l), t && (a.emit("beforeTransitionStart", e, r), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(c) {
        !a || a.destroyed || c.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, t && a.emit("transitionEnd"))
    }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
}
var Dt = {
    getTranslate: zt,
    setTranslate: It,
    minTranslate: At,
    maxTranslate: $t,
    translateTo: Ot
};

function kt(i, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`, t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""), t.emit("setTransition", i, e)
}

function Je(i) {
    let {
        swiper: e,
        runCallbacks: t,
        direction: s,
        step: r
    } = i;
    const {
        activeIndex: a,
        previousIndex: d
    } = e;
    let p = s;
    if (p || (a > d ? p = "next" : a < d ? p = "prev" : p = "reset"), e.emit(`transition${r}`), t && a !== d) {
        if (p === "reset") {
            e.emit(`slideResetTransition${r}`);
            return
        }
        e.emit(`slideChangeTransition${r}`), p === "next" ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
    }
}

function Ht(i, e) {
    i === void 0 && (i = !0);
    const t = this,
        {
            params: s
        } = t;
    s.cssMode || (s.autoHeight && t.updateAutoHeight(), Je({
        swiper: t,
        runCallbacks: i,
        direction: e,
        step: "Start"
    }))
}

function Gt(i, e) {
    i === void 0 && (i = !0);
    const t = this,
        {
            params: s
        } = t;
    t.animating = !1, !s.cssMode && (t.setTransition(0), Je({
        swiper: t,
        runCallbacks: i,
        direction: e,
        step: "End"
    }))
}
var Bt = {
    setTransition: kt,
    transitionStart: Ht,
    transitionEnd: Gt
};

function _t(i, e, t, s, r) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
    const a = this;
    let d = i;
    d < 0 && (d = 0);
    const {
        params: p,
        snapGrid: n,
        slidesGrid: f,
        previousIndex: l,
        activeIndex: o,
        rtlTranslate: c,
        wrapperEl: m,
        enabled: v
    } = a;
    if (a.animating && p.preventInteractionOnTransition || !v && !s && !r) return !1;
    const w = Math.min(a.params.slidesPerGroupSkip, d);
    let g = w + Math.floor((d - w) / a.params.slidesPerGroup);
    g >= n.length && (g = n.length - 1);
    const b = -n[g];
    if (p.normalizeSlideIndex)
        for (let u = 0; u < f.length; u += 1) {
            const S = -Math.floor(b * 100),
                z = Math.floor(f[u] * 100),
                P = Math.floor(f[u + 1] * 100);
            typeof f[u + 1] < "u" ? S >= z && S < P - (P - z) / 2 ? d = u : S >= z && S < P && (d = u + 1) : S >= z && (d = u)
        }
    if (a.initialized && d !== o && (!a.allowSlideNext && (c ? b > a.translate && b > a.minTranslate() : b < a.translate && b < a.minTranslate()) || !a.allowSlidePrev && b > a.translate && b > a.maxTranslate() && (o || 0) !== d)) return !1;
    d !== (l || 0) && t && a.emit("beforeSlideChangeStart"), a.updateProgress(b);
    let h;
    if (d > o ? h = "next" : d < o ? h = "prev" : h = "reset", c && -b === a.translate || !c && b === a.translate) return a.updateActiveIndex(d), p.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), p.effect !== "slide" && a.setTranslate(b), h !== "reset" && (a.transitionStart(t, h), a.transitionEnd(t, h)), !1;
    if (p.cssMode) {
        const u = a.isHorizontal(),
            S = c ? b : -b;
        if (e === 0) {
            const z = a.virtual && a.params.virtual.enabled;
            z && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), z && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                m[u ? "scrollLeft" : "scrollTop"] = S
            })) : m[u ? "scrollLeft" : "scrollTop"] = S, z && requestAnimationFrame(() => {
                a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
            })
        } else {
            if (!a.support.smoothScroll) return Ze({
                swiper: a,
                targetPosition: S,
                side: u ? "left" : "top"
            }), !0;
            m.scrollTo({
                [u ? "left" : "top"]: S,
                behavior: "smooth"
            })
        }
        return !0
    }
    return a.setTransition(e), a.setTranslate(b), a.updateActiveIndex(d), a.updateSlidesClasses(), a.emit("beforeTransitionStart", e, s), a.transitionStart(t, h), e === 0 ? a.transitionEnd(t, h) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(S) {
        !a || a.destroyed || S.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(t, h))
    }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
}

function Rt(i, e, t, s) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
    const r = this,
        a = r.grid && r.params.grid && r.params.grid.rows > 1;
    let d = i;
    if (r.params.loop)
        if (r.virtual && r.params.virtual.enabled) d = d + r.virtual.slidesBefore;
        else {
            let p;
            if (a) {
                const c = d * r.params.grid.rows;
                p = r.slides.filter(m => m.getAttribute("data-swiper-slide-index") * 1 === c)[0].column
            } else p = r.getSlideIndexByData(d);
            const n = a ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                {
                    centeredSlides: f
                } = r.params;
            let l = r.params.slidesPerView;
            l === "auto" ? l = r.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(r.params.slidesPerView, 10)), f && l % 2 === 0 && (l = l + 1));
            let o = n - p < l;
            if (f && (o = o || p < Math.ceil(l / 2)), o) {
                const c = f ? p < r.activeIndex ? "prev" : "next" : p - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                r.loopFix({
                    direction: c,
                    slideTo: !0,
                    activeSlideIndex: c === "next" ? p + 1 : p - n + 1,
                    slideRealIndex: c === "next" ? r.realIndex : void 0
                })
            }
            if (a) {
                const c = d * r.params.grid.rows;
                d = r.slides.filter(m => m.getAttribute("data-swiper-slide-index") * 1 === c)[0].column
            } else d = r.getSlideIndexByData(d)
        }
    return requestAnimationFrame(() => {
        r.slideTo(d, e, t, s)
    }), r
}

function Xt(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this,
        {
            enabled: r,
            params: a,
            animating: d
        } = s;
    if (!r) return s;
    let p = a.slidesPerGroup;
    a.slidesPerView === "auto" && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (p = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const n = s.activeIndex < a.slidesPerGroupSkip ? 1 : p,
        f = s.virtual && a.virtual.enabled;
    if (a.loop) {
        if (d && !f && a.loopPreventsSliding) return !1;
        if (s.loopFix({
                direction: "next"
            }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && a.cssMode) return requestAnimationFrame(() => {
            s.slideTo(s.activeIndex + n, i, e, t)
        }), !0
    }
    return a.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + n, i, e, t)
}

function Yt(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this,
        {
            params: r,
            snapGrid: a,
            slidesGrid: d,
            rtlTranslate: p,
            enabled: n,
            animating: f
        } = s;
    if (!n) return s;
    const l = s.virtual && r.virtual.enabled;
    if (r.loop) {
        if (f && !l && r.loopPreventsSliding) return !1;
        s.loopFix({
            direction: "prev"
        }), s._clientLeft = s.wrapperEl.clientLeft
    }
    const o = p ? s.translate : -s.translate;

    function c(b) {
        return b < 0 ? -Math.floor(Math.abs(b)) : Math.floor(b)
    }
    const m = c(o),
        v = a.map(b => c(b));
    let w = a[v.indexOf(m) - 1];
    if (typeof w > "u" && r.cssMode) {
        let b;
        a.forEach((h, u) => {
            m >= h && (b = u)
        }), typeof b < "u" && (w = a[b > 0 ? b - 1 : b])
    }
    let g = 0;
    if (typeof w < "u" && (g = d.indexOf(w), g < 0 && (g = s.activeIndex - 1), r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (g = g - s.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), r.rewind && s.isBeginning) {
        const b = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
        return s.slideTo(b, i, e, t)
    } else if (r.loop && s.activeIndex === 0 && r.cssMode) return requestAnimationFrame(() => {
        s.slideTo(g, i, e, t)
    }), !0;
    return s.slideTo(g, i, e, t)
}

function Nt(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this;
    return s.slideTo(s.activeIndex, i, e, t)
}

function Vt(i, e, t, s) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0), s === void 0 && (s = .5);
    const r = this;
    let a = r.activeIndex;
    const d = Math.min(r.params.slidesPerGroupSkip, a),
        p = d + Math.floor((a - d) / r.params.slidesPerGroup),
        n = r.rtlTranslate ? r.translate : -r.translate;
    if (n >= r.snapGrid[p]) {
        const f = r.snapGrid[p],
            l = r.snapGrid[p + 1];
        n - f > (l - f) * s && (a += r.params.slidesPerGroup)
    } else {
        const f = r.snapGrid[p - 1],
            l = r.snapGrid[p];
        n - f <= (l - f) * s && (a -= r.params.slidesPerGroup)
    }
    return a = Math.max(a, 0), a = Math.min(a, r.slidesGrid.length - 1), r.slideTo(a, i, e, t)
}

function Ft() {
    const i = this,
        {
            params: e,
            slidesEl: t
        } = i,
        s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
    let r = i.clickedIndex,
        a;
    const d = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (i.animating) return;
        a = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? r < i.loopedSlides - s / 2 || r > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(), r = i.getSlideIndex(X(t, `${d}[data-swiper-slide-index="${a}"]`)[0]), te(() => {
            i.slideTo(r)
        })) : i.slideTo(r) : r > i.slides.length - s ? (i.loopFix(), r = i.getSlideIndex(X(t, `${d}[data-swiper-slide-index="${a}"]`)[0]), te(() => {
            i.slideTo(r)
        })) : i.slideTo(r)
    } else i.slideTo(r)
}
var Wt = {
    slideTo: _t,
    slideToLoop: Rt,
    slideNext: Xt,
    slidePrev: Yt,
    slideReset: Nt,
    slideToClosest: Vt,
    slideToClickedSlide: Ft
};

function qt(i) {
    const e = this,
        {
            params: t,
            slidesEl: s
        } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled) return;
    const r = () => {
            X(s, `.${t.slideClass}, swiper-slide`).forEach((o, c) => {
                o.setAttribute("data-swiper-slide-index", c)
            })
        },
        a = e.grid && t.grid && t.grid.rows > 1,
        d = t.slidesPerGroup * (a ? t.grid.rows : 1),
        p = e.slides.length % d !== 0,
        n = a && e.slides.length % t.grid.rows !== 0,
        f = l => {
            for (let o = 0; o < l; o += 1) {
                const c = e.isElement ? W("swiper-slide", [t.slideBlankClass]) : W("div", [t.slideClass, t.slideBlankClass]);
                e.slidesEl.append(c)
            }
        };
    if (p) {
        if (t.loopAddBlankSlides) {
            const l = d - e.slides.length % d;
            f(l), e.recalcSlides(), e.updateSlides()
        } else we("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else if (n) {
        if (t.loopAddBlankSlides) {
            const l = t.grid.rows - e.slides.length % t.grid.rows;
            f(l), e.recalcSlides(), e.updateSlides()
        } else we("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else r();
    e.loopFix({
        slideRealIndex: i,
        direction: t.centeredSlides ? void 0 : "next"
    })
}

function jt(i) {
    let {
        slideRealIndex: e,
        slideTo: t = !0,
        direction: s,
        setTranslate: r,
        activeSlideIndex: a,
        byController: d,
        byMousewheel: p
    } = i === void 0 ? {} : i;
    const n = this;
    if (!n.params.loop) return;
    n.emit("beforeLoopFix");
    const {
        slides: f,
        allowSlidePrev: l,
        allowSlideNext: o,
        slidesEl: c,
        params: m
    } = n, {
        centeredSlides: v
    } = m;
    if (n.allowSlidePrev = !0, n.allowSlideNext = !0, n.virtual && m.virtual.enabled) {
        t && (!m.centeredSlides && n.snapIndex === 0 ? n.slideTo(n.virtual.slides.length, 0, !1, !0) : m.centeredSlides && n.snapIndex < m.slidesPerView ? n.slideTo(n.virtual.slides.length + n.snapIndex, 0, !1, !0) : n.snapIndex === n.snapGrid.length - 1 && n.slideTo(n.virtual.slidesBefore, 0, !1, !0)), n.allowSlidePrev = l, n.allowSlideNext = o, n.emit("loopFix");
        return
    }
    let w = m.slidesPerView;
    w === "auto" ? w = n.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(m.slidesPerView, 10)), v && w % 2 === 0 && (w = w + 1));
    const g = m.slidesPerGroupAuto ? w : m.slidesPerGroup;
    let b = g;
    b % g !== 0 && (b += g - b % g), b += m.loopAdditionalSlides, n.loopedSlides = b;
    const h = n.grid && m.grid && m.grid.rows > 1;
    f.length < w + b ? we("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : h && m.grid.fill === "row" && we("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const u = [],
        S = [];
    let z = n.activeIndex;
    typeof a > "u" ? a = n.getSlideIndex(f.filter(T => T.classList.contains(m.slideActiveClass))[0]) : z = a;
    const P = s === "next" || !s,
        k = s === "prev" || !s;
    let A = 0,
        E = 0;
    const M = h ? Math.ceil(f.length / m.grid.rows) : f.length,
        C = (h ? f[a].column : a) + (v && typeof r > "u" ? -w / 2 + .5 : 0);
    if (C < b) {
        A = Math.max(b - C, g);
        for (let T = 0; T < b - C; T += 1) {
            const y = T - Math.floor(T / M) * M;
            if (h) {
                const x = M - y - 1;
                for (let D = f.length - 1; D >= 0; D -= 1) f[D].column === x && u.push(D)
            } else u.push(M - y - 1)
        }
    } else if (C + w > M - b) {
        E = Math.max(C - (M - b * 2), g);
        for (let T = 0; T < E; T += 1) {
            const y = T - Math.floor(T / M) * M;
            h ? f.forEach((x, D) => {
                x.column === y && S.push(D)
            }) : S.push(y)
        }
    }
    if (n.__preventObserver__ = !0, requestAnimationFrame(() => {
            n.__preventObserver__ = !1
        }), k && u.forEach(T => {
            f[T].swiperLoopMoveDOM = !0, c.prepend(f[T]), f[T].swiperLoopMoveDOM = !1
        }), P && S.forEach(T => {
            f[T].swiperLoopMoveDOM = !0, c.append(f[T]), f[T].swiperLoopMoveDOM = !1
        }), n.recalcSlides(), m.slidesPerView === "auto" ? n.updateSlides() : h && (u.length > 0 && k || S.length > 0 && P) && n.slides.forEach((T, y) => {
            n.grid.updateSlide(y, T, n.slides)
        }), m.watchSlidesProgress && n.updateSlidesOffset(), t) {
        if (u.length > 0 && k) {
            if (typeof e > "u") {
                const T = n.slidesGrid[z],
                    x = n.slidesGrid[z + A] - T;
                p ? n.setTranslate(n.translate - x) : (n.slideTo(z + A, 0, !1, !0), r && (n.touchEventsData.startTranslate = n.touchEventsData.startTranslate - x, n.touchEventsData.currentTranslate = n.touchEventsData.currentTranslate - x))
            } else if (r) {
                const T = h ? u.length / m.grid.rows : u.length;
                n.slideTo(n.activeIndex + T, 0, !1, !0), n.touchEventsData.currentTranslate = n.translate
            }
        } else if (S.length > 0 && P)
            if (typeof e > "u") {
                const T = n.slidesGrid[z],
                    x = n.slidesGrid[z - E] - T;
                p ? n.setTranslate(n.translate - x) : (n.slideTo(z - E, 0, !1, !0), r && (n.touchEventsData.startTranslate = n.touchEventsData.startTranslate - x, n.touchEventsData.currentTranslate = n.touchEventsData.currentTranslate - x))
            } else {
                const T = h ? S.length / m.grid.rows : S.length;
                n.slideTo(n.activeIndex - T, 0, !1, !0)
            }
    }
    if (n.allowSlidePrev = l, n.allowSlideNext = o, n.controller && n.controller.control && !d) {
        const T = {
            slideRealIndex: e,
            direction: s,
            setTranslate: r,
            activeSlideIndex: a,
            byController: !0
        };
        Array.isArray(n.controller.control) ? n.controller.control.forEach(y => {
            !y.destroyed && y.params.loop && y.loopFix({ ...T,
                slideTo: y.params.slidesPerView === m.slidesPerView ? t : !1
            })
        }) : n.controller.control instanceof n.constructor && n.controller.control.params.loop && n.controller.control.loopFix({ ...T,
            slideTo: n.controller.control.params.slidesPerView === m.slidesPerView ? t : !1
        })
    }
    n.emit("loopFix")
}

function Ut() {
    const i = this,
        {
            params: e,
            slidesEl: t
        } = i;
    if (!e.loop || i.virtual && i.params.virtual.enabled) return;
    i.recalcSlides();
    const s = [];
    i.slides.forEach(r => {
        const a = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
        s[a] = r
    }), i.slides.forEach(r => {
        r.removeAttribute("data-swiper-slide-index")
    }), s.forEach(r => {
        t.append(r)
    }), i.recalcSlides(), i.slideTo(i.realIndex, 0)
}
var Kt = {
    loopCreate: qt,
    loopFix: jt,
    loopDestroy: Ut
};

function Zt(i) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = i ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
        e.__preventObserver__ = !1
    })
}

function Qt() {
    const i = this;
    i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0), i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", i.isElement && requestAnimationFrame(() => {
        i.__preventObserver__ = !1
    }))
}
var Jt = {
    setGrabCursor: Zt,
    unsetGrabCursor: Qt
};

function ei(i, e) {
    e === void 0 && (e = this);

    function t(s) {
        if (!s || s === N() || s === R()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        const r = s.closest(i);
        return !r && !s.getRootNode ? null : r || t(s.getRootNode().host)
    }
    return t(e)
}

function Ne(i, e, t) {
    const s = R(),
        {
            params: r
        } = i,
        a = r.edgeSwipeDetection,
        d = r.edgeSwipeThreshold;
    return a && (t <= d || t >= s.innerWidth - d) ? a === "prevent" ? (e.preventDefault(), !0) : !1 : !0
}

function ti(i) {
    const e = this,
        t = N();
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    const r = e.touchEventsData;
    if (s.type === "pointerdown") {
        if (r.pointerId !== null && r.pointerId !== s.pointerId) return;
        r.pointerId = s.pointerId
    } else s.type === "touchstart" && s.targetTouches.length === 1 && (r.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
        Ne(e, s, s.targetTouches[0].pageX);
        return
    }
    const {
        params: a,
        touches: d,
        enabled: p
    } = e;
    if (!p || !a.simulateTouch && s.pointerType === "mouse" || e.animating && a.preventInteractionOnTransition) return;
    !e.animating && a.cssMode && a.loop && e.loopFix();
    let n = s.target;
    if (a.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(n) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || r.isTouched && r.isMoved) return;
    const f = !!a.noSwipingClass && a.noSwipingClass !== "",
        l = s.composedPath ? s.composedPath() : s.path;
    f && s.target && s.target.shadowRoot && l && (n = l[0]);
    const o = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
        c = !!(s.target && s.target.shadowRoot);
    if (a.noSwiping && (c ? ei(o, n) : n.closest(o))) {
        e.allowClick = !0;
        return
    }
    if (a.swipeHandler && !n.closest(a.swipeHandler)) return;
    d.currentX = s.pageX, d.currentY = s.pageY;
    const m = d.currentX,
        v = d.currentY;
    if (!Ne(e, s, m)) return;
    Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }), d.startX = m, d.startY = v, r.touchStartTime = j(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, a.threshold > 0 && (r.allowThresholdMove = !1);
    let w = !0;
    n.matches(r.focusableElements) && (w = !1, n.nodeName === "SELECT" && (r.isTouched = !1)), t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== n && t.activeElement.blur();
    const g = w && e.allowTouchMove && a.touchStartPreventDefault;
    (a.touchStartForcePreventDefault || g) && !n.isContentEditable && s.preventDefault(), a.freeMode && a.freeMode.enabled && e.freeMode && e.animating && !a.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s)
}

function ii(i) {
    const e = N(),
        t = this,
        s = t.touchEventsData,
        {
            params: r,
            touches: a,
            rtlTranslate: d,
            enabled: p
        } = t;
    if (!p || !r.simulateTouch && i.pointerType === "mouse") return;
    let n = i;
    if (n.originalEvent && (n = n.originalEvent), n.type === "pointermove" && (s.touchId !== null || n.pointerId !== s.pointerId)) return;
    let f;
    if (n.type === "touchmove") {
        if (f = [...n.changedTouches].filter(P => P.identifier === s.touchId)[0], !f || f.identifier !== s.touchId) return
    } else f = n;
    if (!s.isTouched) {
        s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", n);
        return
    }
    const l = f.pageX,
        o = f.pageY;
    if (n.preventedByNestedSwiper) {
        a.startX = l, a.startY = o;
        return
    }
    if (!t.allowTouchMove) {
        n.target.matches(s.focusableElements) || (t.allowClick = !1), s.isTouched && (Object.assign(a, {
            startX: l,
            startY: o,
            currentX: l,
            currentY: o
        }), s.touchStartTime = j());
        return
    }
    if (r.touchReleaseOnEdges && !r.loop) {
        if (t.isVertical()) {
            if (o < a.startY && t.translate <= t.maxTranslate() || o > a.startY && t.translate >= t.minTranslate()) {
                s.isTouched = !1, s.isMoved = !1;
                return
            }
        } else if (l < a.startX && t.translate <= t.maxTranslate() || l > a.startX && t.translate >= t.minTranslate()) return
    }
    if (e.activeElement && n.target === e.activeElement && n.target.matches(s.focusableElements)) {
        s.isMoved = !0, t.allowClick = !1;
        return
    }
    s.allowTouchCallbacks && t.emit("touchMove", n), a.previousX = a.currentX, a.previousY = a.currentY, a.currentX = l, a.currentY = o;
    const c = a.currentX - a.startX,
        m = a.currentY - a.startY;
    if (t.params.threshold && Math.sqrt(c ** 2 + m ** 2) < t.params.threshold) return;
    if (typeof s.isScrolling > "u") {
        let P;
        t.isHorizontal() && a.currentY === a.startY || t.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : c * c + m * m >= 25 && (P = Math.atan2(Math.abs(m), Math.abs(c)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? P > r.touchAngle : 90 - P > r.touchAngle)
    }
    if (s.isScrolling && t.emit("touchMoveOpposite", n), typeof s.startMoving > "u" && (a.currentX !== a.startX || a.currentY !== a.startY) && (s.startMoving = !0), s.isScrolling) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving) return;
    t.allowClick = !1, !r.cssMode && n.cancelable && n.preventDefault(), r.touchMoveStopPropagation && !r.nested && n.stopPropagation();
    let v = t.isHorizontal() ? c : m,
        w = t.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
    r.oneWayMovement && (v = Math.abs(v) * (d ? 1 : -1), w = Math.abs(w) * (d ? 1 : -1)), a.diff = v, v *= r.touchRatio, d && (v = -v, w = -w);
    const g = t.touchesDirection;
    t.swipeDirection = v > 0 ? "prev" : "next", t.touchesDirection = w > 0 ? "prev" : "next";
    const b = t.params.loop && !r.cssMode,
        h = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!s.isMoved) {
        if (b && h && t.loopFix({
                direction: t.swipeDirection
            }), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
            const P = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0
            });
            t.wrapperEl.dispatchEvent(P)
        }
        s.allowMomentumBounce = !1, r.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", n)
    }
    let u;
    if (new Date().getTime(), s.isMoved && s.allowThresholdMove && g !== t.touchesDirection && b && h && Math.abs(v) >= 1) {
        Object.assign(a, {
            startX: l,
            startY: o,
            currentX: l,
            currentY: o,
            startTranslate: s.currentTranslate
        }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
        return
    }
    t.emit("sliderMove", n), s.isMoved = !0, s.currentTranslate = v + s.startTranslate;
    let S = !0,
        z = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (z = 0), v > 0 ? (b && h && !u && s.allowThresholdMove && s.currentTranslate > (r.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }), s.currentTranslate > t.minTranslate() && (S = !1, r.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + v) ** z))) : v < 0 && (b && h && !u && s.allowThresholdMove && s.currentTranslate < (r.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: t.slides.length - (r.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
        }), s.currentTranslate < t.maxTranslate() && (S = !1, r.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - v) ** z))), S && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate), r.threshold > 0)
        if (Math.abs(v) > r.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, s.currentTranslate = s.startTranslate, a.diff = t.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }!r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && t.freeMode || r.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate))
}

function si(i) {
    const e = this,
        t = e.touchEventsData;
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    let r;
    if (s.type === "touchend" || s.type === "touchcancel") {
        if (r = [...s.changedTouches].filter(S => S.identifier === t.touchId)[0], !r || r.identifier !== t.touchId) return
    } else {
        if (t.touchId !== null || s.pointerId !== t.pointerId) return;
        r = s
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView))) return;
    t.pointerId = null, t.touchId = null;
    const {
        params: d,
        touches: p,
        rtlTranslate: n,
        slidesGrid: f,
        enabled: l
    } = e;
    if (!l || !d.simulateTouch && s.pointerType === "mouse") return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", s), t.allowTouchCallbacks = !1, !t.isTouched) {
        t.isMoved && d.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
        return
    }
    d.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const o = j(),
        c = o - t.touchStartTime;
    if (e.allowClick) {
        const S = s.path || s.composedPath && s.composedPath();
        e.updateClickedSlide(S && S[0] || s.target, S), e.emit("tap click", s), c < 300 && o - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s)
    }
    if (t.lastClickTime = j(), te(() => {
            e.destroyed || (e.allowClick = !0)
        }), !t.isTouched || !t.isMoved || !e.swipeDirection || p.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
        t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
        return
    }
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    let m;
    if (d.followFinger ? m = n ? e.translate : -e.translate : m = -t.currentTranslate, d.cssMode) return;
    if (d.freeMode && d.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: m
        });
        return
    }
    let v = 0,
        w = e.slidesSizesGrid[0];
    for (let S = 0; S < f.length; S += S < d.slidesPerGroupSkip ? 1 : d.slidesPerGroup) {
        const z = S < d.slidesPerGroupSkip - 1 ? 1 : d.slidesPerGroup;
        typeof f[S + z] < "u" ? m >= f[S] && m < f[S + z] && (v = S, w = f[S + z] - f[S]) : m >= f[S] && (v = S, w = f[f.length - 1] - f[f.length - 2])
    }
    let g = null,
        b = null;
    d.rewind && (e.isBeginning ? b = d.virtual && d.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (g = 0));
    const h = (m - f[v]) / w,
        u = v < d.slidesPerGroupSkip - 1 ? 1 : d.slidesPerGroup;
    if (c > d.longSwipesMs) {
        if (!d.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (h >= d.longSwipesRatio ? e.slideTo(d.rewind && e.isEnd ? g : v + u) : e.slideTo(v)), e.swipeDirection === "prev" && (h > 1 - d.longSwipesRatio ? e.slideTo(v + u) : b !== null && h < 0 && Math.abs(h) > d.longSwipesRatio ? e.slideTo(b) : e.slideTo(v))
    } else {
        if (!d.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(v + u) : e.slideTo(v) : (e.swipeDirection === "next" && e.slideTo(g !== null ? g : v + u), e.swipeDirection === "prev" && e.slideTo(b !== null ? b : v))
    }
}

function Ve() {
    const i = this,
        {
            params: e,
            el: t
        } = i;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && i.setBreakpoint();
    const {
        allowSlideNext: s,
        allowSlidePrev: r,
        snapGrid: a
    } = i, d = i.virtual && i.params.virtual.enabled;
    i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses();
    const p = d && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !p ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !d ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0), i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout), i.autoplay.resizeTimeout = setTimeout(() => {
        i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume()
    }, 500)), i.allowSlidePrev = r, i.allowSlideNext = s, i.params.watchOverflow && a !== i.snapGrid && i.checkOverflow()
}

function ri(i) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(), e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation())))
}

function ai() {
    const i = this,
        {
            wrapperEl: e,
            rtlTranslate: t,
            enabled: s
        } = i;
    if (!s) return;
    i.previousTranslate = i.translate, i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop, i.translate === 0 && (i.translate = 0), i.updateActiveIndex(), i.updateSlidesClasses();
    let r;
    const a = i.maxTranslate() - i.minTranslate();
    a === 0 ? r = 0 : r = (i.translate - i.minTranslate()) / a, r !== i.progress && i.updateProgress(t ? -i.translate : i.translate), i.emit("setTranslate", i.translate, !1)
}

function ni(i) {
    const e = this;
    he(e, i.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}

function li() {
    const i = this;
    i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0, i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"))
}
const et = (i, e) => {
    const t = N(),
        {
            params: s,
            el: r,
            wrapperEl: a,
            device: d
        } = i,
        p = !!s.nested,
        n = e === "on" ? "addEventListener" : "removeEventListener",
        f = e;
    t[n]("touchstart", i.onDocumentTouchStart, {
        passive: !1,
        capture: p
    }), r[n]("touchstart", i.onTouchStart, {
        passive: !1
    }), r[n]("pointerdown", i.onTouchStart, {
        passive: !1
    }), t[n]("touchmove", i.onTouchMove, {
        passive: !1,
        capture: p
    }), t[n]("pointermove", i.onTouchMove, {
        passive: !1,
        capture: p
    }), t[n]("touchend", i.onTouchEnd, {
        passive: !0
    }), t[n]("pointerup", i.onTouchEnd, {
        passive: !0
    }), t[n]("pointercancel", i.onTouchEnd, {
        passive: !0
    }), t[n]("touchcancel", i.onTouchEnd, {
        passive: !0
    }), t[n]("pointerout", i.onTouchEnd, {
        passive: !0
    }), t[n]("pointerleave", i.onTouchEnd, {
        passive: !0
    }), t[n]("contextmenu", i.onTouchEnd, {
        passive: !0
    }), (s.preventClicks || s.preventClicksPropagation) && r[n]("click", i.onClick, !0), s.cssMode && a[n]("scroll", i.onScroll), s.updateOnWindowResize ? i[f](d.ios || d.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ve, !0) : i[f]("observerUpdate", Ve, !0), r[n]("load", i.onLoad, {
        capture: !0
    })
};

function oi() {
    const i = this,
        {
            params: e
        } = i;
    i.onTouchStart = ti.bind(i), i.onTouchMove = ii.bind(i), i.onTouchEnd = si.bind(i), i.onDocumentTouchStart = li.bind(i), e.cssMode && (i.onScroll = ai.bind(i)), i.onClick = ri.bind(i), i.onLoad = ni.bind(i), et(i, "on")
}

function di() {
    et(this, "off")
}
var ci = {
    attachEvents: oi,
    detachEvents: di
};
const Fe = (i, e) => i.grid && e.grid && e.grid.rows > 1;

function pi() {
    const i = this,
        {
            realIndex: e,
            initialized: t,
            params: s,
            el: r
        } = i,
        a = s.breakpoints;
    if (!a || a && Object.keys(a).length === 0) return;
    const d = i.getBreakpoint(a, i.params.breakpointsBase, i.el);
    if (!d || i.currentBreakpoint === d) return;
    const n = (d in a ? a[d] : void 0) || i.originalParams,
        f = Fe(i, s),
        l = Fe(i, n),
        o = s.enabled;
    f && !l ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), i.emitContainerClasses()) : !f && l && (r.classList.add(`${s.containerModifierClass}grid`), (n.grid.fill && n.grid.fill === "column" || !n.grid.fill && s.grid.fill === "column") && r.classList.add(`${s.containerModifierClass}grid-column`), i.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(b => {
        if (typeof n[b] > "u") return;
        const h = s[b] && s[b].enabled,
            u = n[b] && n[b].enabled;
        h && !u && i[b].disable(), !h && u && i[b].enable()
    });
    const c = n.direction && n.direction !== s.direction,
        m = s.loop && (n.slidesPerView !== s.slidesPerView || c),
        v = s.loop;
    c && t && i.changeDirection(), F(i.params, n);
    const w = i.params.enabled,
        g = i.params.loop;
    Object.assign(i, {
        allowTouchMove: i.params.allowTouchMove,
        allowSlideNext: i.params.allowSlideNext,
        allowSlidePrev: i.params.allowSlidePrev
    }), o && !w ? i.disable() : !o && w && i.enable(), i.currentBreakpoint = d, i.emit("_beforeBreakpoint", n), t && (m ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !v && g ? (i.loopCreate(e), i.updateSlides()) : v && !g && i.loopDestroy()), i.emit("breakpoint", n)
}

function fi(i, e, t) {
    if (e === void 0 && (e = "window"), !i || e === "container" && !t) return;
    let s = !1;
    const r = R(),
        a = e === "window" ? r.innerHeight : t.clientHeight,
        d = Object.keys(i).map(p => {
            if (typeof p == "string" && p.indexOf("@") === 0) {
                const n = parseFloat(p.substr(1));
                return {
                    value: a * n,
                    point: p
                }
            }
            return {
                value: p,
                point: p
            }
        });
    d.sort((p, n) => parseInt(p.value, 10) - parseInt(n.value, 10));
    for (let p = 0; p < d.length; p += 1) {
        const {
            point: n,
            value: f
        } = d[p];
        e === "window" ? r.matchMedia(`(min-width: ${f}px)`).matches && (s = n) : f <= t.clientWidth && (s = n)
    }
    return s || "max"
}
var ui = {
    setBreakpoint: pi,
    getBreakpoint: fi
};

function mi(i, e) {
    const t = [];
    return i.forEach(s => {
        typeof s == "object" ? Object.keys(s).forEach(r => {
            s[r] && t.push(e + r)
        }) : typeof s == "string" && t.push(e + s)
    }), t
}

function hi() {
    const i = this,
        {
            classNames: e,
            params: t,
            rtl: s,
            el: r,
            device: a
        } = i,
        d = mi(["initialized", t.direction, {
            "free-mode": i.params.freeMode && t.freeMode.enabled
        }, {
            autoheight: t.autoHeight
        }, {
            rtl: s
        }, {
            grid: t.grid && t.grid.rows > 1
        }, {
            "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
        }, {
            android: a.android
        }, {
            ios: a.ios
        }, {
            "css-mode": t.cssMode
        }, {
            centered: t.cssMode && t.centeredSlides
        }, {
            "watch-progress": t.watchSlidesProgress
        }], t.containerModifierClass);
    e.push(...d), r.classList.add(...e), i.emitContainerClasses()
}

function gi() {
    const i = this,
        {
            el: e,
            classNames: t
        } = i;
    e.classList.remove(...t), i.emitContainerClasses()
}
var wi = {
    addClasses: hi,
    removeClasses: gi
};

function vi() {
    const i = this,
        {
            isLocked: e,
            params: t
        } = i,
        {
            slidesOffsetBefore: s
        } = t;
    if (s) {
        const r = i.slides.length - 1,
            a = i.slidesGrid[r] + i.slidesSizesGrid[r] + s * 2;
        i.isLocked = i.size > a
    } else i.isLocked = i.snapGrid.length === 1;
    t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked), t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked), e && e !== i.isLocked && (i.isEnd = !1), e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock")
}
var bi = {
        checkOverflow: vi
    },
    De = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

function yi(i, e) {
    return function(s) {
        s === void 0 && (s = {});
        const r = Object.keys(s)[0],
            a = s[r];
        if (typeof a != "object" || a === null) {
            F(e, s);
            return
        }
        if (i[r] === !0 && (i[r] = {
                enabled: !0
            }), r === "navigation" && i[r] && i[r].enabled && !i[r].prevEl && !i[r].nextEl && (i[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && i[r] && i[r].enabled && !i[r].el && (i[r].auto = !0), !(r in i && "enabled" in a)) {
            F(e, s);
            return
        }
        typeof i[r] == "object" && !("enabled" in i[r]) && (i[r].enabled = !0), i[r] || (i[r] = {
            enabled: !1
        }), F(e, s)
    }
}
const ze = {
        eventsEmitter: wt,
        update: Lt,
        translate: Dt,
        transition: Bt,
        slide: Wt,
        loop: Kt,
        grabCursor: Jt,
        events: ci,
        breakpoints: ui,
        checkOverflow: bi,
        classes: wi
    },
    Ie = {};
class V {
    constructor() {
        let e, t;
        for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++) r[a] = arguments[a];
        r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === "Object" ? t = r[0] : [e, t] = r, t || (t = {}), t = F({}, t), e && !t.el && (t.el = e);
        const d = N();
        if (t.el && typeof t.el == "string" && d.querySelectorAll(t.el).length > 1) {
            const l = [];
            return d.querySelectorAll(t.el).forEach(o => {
                const c = F({}, t, {
                    el: o
                });
                l.push(new V(c))
            }), l
        }
        const p = this;
        p.__swiper__ = !0, p.support = Qe(), p.device = ft({
            userAgent: t.userAgent
        }), p.browser = mt(), p.eventsListeners = {}, p.eventsAnyListeners = [], p.modules = [...p.__modules__], t.modules && Array.isArray(t.modules) && p.modules.push(...t.modules);
        const n = {};
        p.modules.forEach(l => {
            l({
                params: t,
                swiper: p,
                extendParams: yi(t, n),
                on: p.on.bind(p),
                once: p.once.bind(p),
                off: p.off.bind(p),
                emit: p.emit.bind(p)
            })
        });
        const f = F({}, De, n);
        return p.params = F({}, f, Ie, t), p.originalParams = F({}, p.params), p.passedParams = F({}, t), p.params && p.params.on && Object.keys(p.params.on).forEach(l => {
            p.on(l, p.params.on[l])
        }), p.params && p.params.onAny && p.onAny(p.params.onAny), Object.assign(p, {
            enabled: p.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return p.params.direction === "horizontal"
            },
            isVertical() {
                return p.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: p.params.allowSlideNext,
            allowSlidePrev: p.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: p.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: p.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), p.emit("_swiper"), p.params.init && p.init(), p
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {
            slidesEl: t,
            params: s
        } = this, r = X(t, `.${s.slideClass}, swiper-slide`), a = pe(r[0]);
        return pe(e) - a
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(t => t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this,
            {
                slidesEl: t,
                params: s
            } = e;
        e.slides = X(t, `.${s.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
    }
    setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const r = s.minTranslate(),
            d = (s.maxTranslate() - r) * e + r;
        s.translateTo(d, typeof t > "u" ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className.split(" ").filter(s => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(s => s.indexOf("swiper-slide") === 0 || s.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach(s => {
            const r = e.getSlideClasses(s);
            t.push({
                slideEl: s,
                classNames: r
            }), e.emit("_slideClass", s, r)
        }), e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"), t === void 0 && (t = !1);
        const s = this,
            {
                params: r,
                slides: a,
                slidesGrid: d,
                slidesSizesGrid: p,
                size: n,
                activeIndex: f
            } = s;
        let l = 1;
        if (typeof r.slidesPerView == "number") return r.slidesPerView;
        if (r.centeredSlides) {
            let o = a[f] ? a[f].swiperSlideSize : 0,
                c;
            for (let m = f + 1; m < a.length; m += 1) a[m] && !c && (o += a[m].swiperSlideSize, l += 1, o > n && (c = !0));
            for (let m = f - 1; m >= 0; m -= 1) a[m] && !c && (o += a[m].swiperSlideSize, l += 1, o > n && (c = !0))
        } else if (e === "current")
            for (let o = f + 1; o < a.length; o += 1)(t ? d[o] + p[o] - d[f] < n : d[o] - d[f] < n) && (l += 1);
        else
            for (let o = f - 1; o >= 0; o -= 1) d[f] - d[o] < n && (l += 1);
        return l
    }
    update() {
        const e = this;
        if (!e || e.destroyed) return;
        const {
            snapGrid: t,
            params: s
        } = e;
        s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(d => {
            d.complete && he(e, d)
        }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();

        function r() {
            const d = e.rtlTranslate ? e.translate * -1 : e.translate,
                p = Math.min(Math.max(d, e.maxTranslate()), e.minTranslate());
            e.setTranslate(p), e.updateActiveIndex(), e.updateSlidesClasses()
        }
        let a;
        if (s.freeMode && s.freeMode.enabled && !s.cssMode) r(), s.autoHeight && e.updateAutoHeight();
        else {
            if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                const d = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                a = e.slideTo(d.length - 1, 0, !1, !0)
            } else a = e.slideTo(e.activeIndex, 0, !1, !0);
            a || r()
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const s = this,
            r = s.params.direction;
        return e || (e = r === "horizontal" ? "vertical" : "horizontal"), e === r || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${r}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach(a => {
            e === "vertical" ? a.style.width = "" : a.style.height = ""
        }), s.emit("changeDirection"), t && s.update()), s
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (typeof s == "string" && (s = document.querySelector(s)), !s) return !1;
        s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === "SWIPER-CONTAINER" && (t.isElement = !0);
        const r = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
        let d = (() => s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(r()) : X(s, r())[0])();
        return !d && t.params.createElements && (d = W("div", t.params.wrapperClass), s.append(d), X(s, `.${t.params.slideClass}`).forEach(p => {
            d.append(p)
        })), Object.assign(t, {
            el: s,
            wrapperEl: d,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : d,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: s.dir.toLowerCase() === "rtl" || Q(s, "direction") === "rtl",
            rtlTranslate: t.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || Q(s, "direction") === "rtl"),
            wrongRTL: Q(d, "display") === "-webkit-box"
        }), !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1) return t;
        t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
        const r = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach(a => {
            a.complete ? he(t, a) : a.addEventListener("load", d => {
                he(t, d.target)
            })
        }), Oe(t), t.initialized = !0, Oe(t), t.emit("init"), t.emit("afterInit"), t
    }
    destroy(e, t) {
        e === void 0 && (e = !0), t === void 0 && (t = !0);
        const s = this,
            {
                params: r,
                el: a,
                wrapperEl: d,
                slides: p
            } = s;
        return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), r.loop && s.loopDestroy(), t && (s.removeClasses(), a.removeAttribute("style"), d.removeAttribute("style"), p && p.length && p.forEach(n => {
            n.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), n.removeAttribute("style"), n.removeAttribute("data-swiper-slide-index")
        })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(n => {
            s.off(n)
        }), e !== !1 && (s.el.swiper = null, at(s)), s.destroyed = !0), null
    }
    static extendDefaults(e) {
        F(Ie, e)
    }
    static get extendedDefaults() {
        return Ie
    }
    static get defaults() {
        return De
    }
    static installModule(e) {
        V.prototype.__modules__ || (V.prototype.__modules__ = []);
        const t = V.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t => V.installModule(t)), V) : (V.installModule(e), V)
    }
}
Object.keys(ze).forEach(i => {
    Object.keys(ze[i]).forEach(e => {
        V.prototype[e] = ze[i][e]
    })
});
V.use([ht, gt]);

function Si(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s,
        emit: r
    } = i;
    t({
        virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    let a;
    const d = N();
    e.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    const p = d.createElement("div");

    function n(v, w) {
        const g = e.params.virtual;
        if (g.cache && e.virtual.cache[w]) return e.virtual.cache[w];
        let b;
        return g.renderSlide ? (b = g.renderSlide.call(e, v, w), typeof b == "string" && (p.innerHTML = b, b = p.children[0])) : e.isElement ? b = W("swiper-slide") : b = W("div", e.params.slideClass), b.setAttribute("data-swiper-slide-index", w), g.renderSlide || (b.innerHTML = v), g.cache && (e.virtual.cache[w] = b), b
    }

    function f(v) {
        const {
            slidesPerView: w,
            slidesPerGroup: g,
            centeredSlides: b,
            loop: h
        } = e.params, {
            addSlidesBefore: u,
            addSlidesAfter: S
        } = e.params.virtual, {
            from: z,
            to: P,
            slides: k,
            slidesGrid: A,
            offset: E
        } = e.virtual;
        e.params.cssMode || e.updateActiveIndex();
        const M = e.activeIndex || 0;
        let L;
        e.rtlTranslate ? L = "right" : L = e.isHorizontal() ? "left" : "top";
        let C, T;
        b ? (C = Math.floor(w / 2) + g + S, T = Math.floor(w / 2) + g + u) : (C = w + (g - 1) + S, T = (h ? w : g) + u);
        let y = M - T,
            x = M + C;
        h || (y = Math.max(y, 0), x = Math.min(x, k.length - 1));
        let D = (e.slidesGrid[y] || 0) - (e.slidesGrid[0] || 0);
        h && M >= T ? (y -= T, b || (D += e.slidesGrid[0])) : h && M < T && (y = -T, b && (D += e.slidesGrid[0])), Object.assign(e.virtual, {
            from: y,
            to: x,
            offset: D,
            slidesGrid: e.slidesGrid,
            slidesBefore: T,
            slidesAfter: C
        });

        function O() {
            e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), r("virtualUpdate")
        }
        if (z === y && P === x && !v) {
            e.slidesGrid !== A && D !== E && e.slides.forEach(G => {
                G.style[L] = `${D-Math.abs(e.cssOverflowAdjustment())}px`
            }), e.updateProgress(), r("virtualUpdate");
            return
        }
        if (e.params.virtual.renderExternal) {
            e.params.virtual.renderExternal.call(e, {
                offset: D,
                from: y,
                to: x,
                slides: function() {
                    const _ = [];
                    for (let q = y; q <= x; q += 1) _.push(k[q]);
                    return _
                }()
            }), e.params.virtual.renderExternalUpdate ? O() : r("virtualUpdate");
            return
        }
        const I = [],
            $ = [],
            H = G => {
                let _ = G;
                return G < 0 ? _ = k.length + G : _ >= k.length && (_ = _ - k.length), _
            };
        if (v) e.slides.filter(G => G.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(G => {
            G.remove()
        });
        else
            for (let G = z; G <= P; G += 1)
                if (G < y || G > x) {
                    const _ = H(G);
                    e.slides.filter(q => q.matches(`.${e.params.slideClass}[data-swiper-slide-index="${_}"], swiper-slide[data-swiper-slide-index="${_}"]`)).forEach(q => {
                        q.remove()
                    })
                } const B = h ? -k.length : 0,
            Y = h ? k.length * 2 : k.length;
        for (let G = B; G < Y; G += 1)
            if (G >= y && G <= x) {
                const _ = H(G);
                typeof P > "u" || v ? $.push(_) : (G > P && $.push(_), G < z && I.push(_))
            }
        if ($.forEach(G => {
                e.slidesEl.append(n(k[G], G))
            }), h)
            for (let G = I.length - 1; G >= 0; G -= 1) {
                const _ = I[G];
                e.slidesEl.prepend(n(k[_], _))
            } else I.sort((G, _) => _ - G), I.forEach(G => {
                e.slidesEl.prepend(n(k[G], G))
            });
        X(e.slidesEl, ".swiper-slide, swiper-slide").forEach(G => {
            G.style[L] = `${D-Math.abs(e.cssOverflowAdjustment())}px`
        }), O()
    }

    function l(v) {
        if (typeof v == "object" && "length" in v)
            for (let w = 0; w < v.length; w += 1) v[w] && e.virtual.slides.push(v[w]);
        else e.virtual.slides.push(v);
        f(!0)
    }

    function o(v) {
        const w = e.activeIndex;
        let g = w + 1,
            b = 1;
        if (Array.isArray(v)) {
            for (let h = 0; h < v.length; h += 1) v[h] && e.virtual.slides.unshift(v[h]);
            g = w + v.length, b = v.length
        } else e.virtual.slides.unshift(v);
        if (e.params.virtual.cache) {
            const h = e.virtual.cache,
                u = {};
            Object.keys(h).forEach(S => {
                const z = h[S],
                    P = z.getAttribute("data-swiper-slide-index");
                P && z.setAttribute("data-swiper-slide-index", parseInt(P, 10) + b), u[parseInt(S, 10) + b] = z
            }), e.virtual.cache = u
        }
        f(!0), e.slideTo(g, 0)
    }

    function c(v) {
        if (typeof v > "u" || v === null) return;
        let w = e.activeIndex;
        if (Array.isArray(v))
            for (let g = v.length - 1; g >= 0; g -= 1) e.params.virtual.cache && (delete e.virtual.cache[v[g]], Object.keys(e.virtual.cache).forEach(b => {
                b > v && (e.virtual.cache[b - 1] = e.virtual.cache[b], e.virtual.cache[b - 1].setAttribute("data-swiper-slide-index", b - 1), delete e.virtual.cache[b])
            })), e.virtual.slides.splice(v[g], 1), v[g] < w && (w -= 1), w = Math.max(w, 0);
        else e.params.virtual.cache && (delete e.virtual.cache[v], Object.keys(e.virtual.cache).forEach(g => {
            g > v && (e.virtual.cache[g - 1] = e.virtual.cache[g], e.virtual.cache[g - 1].setAttribute("data-swiper-slide-index", g - 1), delete e.virtual.cache[g])
        })), e.virtual.slides.splice(v, 1), v < w && (w -= 1), w = Math.max(w, 0);
        f(!0), e.slideTo(w, 0)
    }

    function m() {
        e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), f(!0), e.slideTo(0, 0)
    }
    s("beforeInit", () => {
        if (!e.params.virtual.enabled) return;
        let v;
        if (typeof e.passedParams.virtual.slides > "u") {
            const w = [...e.slidesEl.children].filter(g => g.matches(`.${e.params.slideClass}, swiper-slide`));
            w && w.length && (e.virtual.slides = [...w], v = !0, w.forEach((g, b) => {
                g.setAttribute("data-swiper-slide-index", b), e.virtual.cache[b] = g, g.remove()
            }))
        }
        v || (e.virtual.slides = e.params.virtual.slides), e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, f()
    }), s("setTranslate", () => {
        e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(a), a = setTimeout(() => {
            f()
        }, 100)) : f())
    }), s("init update resize", () => {
        e.params.virtual.enabled && e.params.cssMode && de(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
    }), Object.assign(e.virtual, {
        appendSlide: l,
        prependSlide: o,
        removeSlide: c,
        removeAllSlides: m,
        update: f
    })
}

function xi(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s,
        emit: r
    } = i;
    const a = N(),
        d = R();
    e.keyboard = {
        enabled: !1
    }, t({
        keyboard: {
            enabled: !1,
            onlyInViewport: !0,
            pageUpDown: !0
        }
    });

    function p(l) {
        if (!e.enabled) return;
        const {
            rtlTranslate: o
        } = e;
        let c = l;
        c.originalEvent && (c = c.originalEvent);
        const m = c.keyCode || c.charCode,
            v = e.params.keyboard.pageUpDown,
            w = v && m === 33,
            g = v && m === 34,
            b = m === 37,
            h = m === 39,
            u = m === 38,
            S = m === 40;
        if (!e.allowSlideNext && (e.isHorizontal() && h || e.isVertical() && S || g) || !e.allowSlidePrev && (e.isHorizontal() && b || e.isVertical() && u || w)) return !1;
        if (!(c.shiftKey || c.altKey || c.ctrlKey || c.metaKey) && !(a.activeElement && a.activeElement.nodeName && (a.activeElement.nodeName.toLowerCase() === "input" || a.activeElement.nodeName.toLowerCase() === "textarea"))) {
            if (e.params.keyboard.onlyInViewport && (w || g || b || h || u || S)) {
                let z = !1;
                if (ee(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && ee(e.el, `.${e.params.slideActiveClass}`).length === 0) return;
                const P = e.el,
                    k = P.clientWidth,
                    A = P.clientHeight,
                    E = d.innerWidth,
                    M = d.innerHeight,
                    L = ve(P);
                o && (L.left -= P.scrollLeft);
                const C = [
                    [L.left, L.top],
                    [L.left + k, L.top],
                    [L.left, L.top + A],
                    [L.left + k, L.top + A]
                ];
                for (let T = 0; T < C.length; T += 1) {
                    const y = C[T];
                    if (y[0] >= 0 && y[0] <= E && y[1] >= 0 && y[1] <= M) {
                        if (y[0] === 0 && y[1] === 0) continue;
                        z = !0
                    }
                }
                if (!z) return
            }
            e.isHorizontal() ? ((w || g || b || h) && (c.preventDefault ? c.preventDefault() : c.returnValue = !1), ((g || h) && !o || (w || b) && o) && e.slideNext(), ((w || b) && !o || (g || h) && o) && e.slidePrev()) : ((w || g || u || S) && (c.preventDefault ? c.preventDefault() : c.returnValue = !1), (g || S) && e.slideNext(), (w || u) && e.slidePrev()), r("keyPress", m)
        }
    }

    function n() {
        e.keyboard.enabled || (a.addEventListener("keydown", p), e.keyboard.enabled = !0)
    }

    function f() {
        e.keyboard.enabled && (a.removeEventListener("keydown", p), e.keyboard.enabled = !1)
    }
    s("init", () => {
        e.params.keyboard.enabled && n()
    }), s("destroy", () => {
        e.keyboard.enabled && f()
    }), Object.assign(e.keyboard, {
        enable: n,
        disable: f
    })
}

function Ei(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s,
        emit: r
    } = i;
    const a = R();
    t({
        mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: "swiper-no-mousewheel"
        }
    }), e.mousewheel = {
        enabled: !1
    };
    let d, p = j(),
        n;
    const f = [];

    function l(u) {
        let k = 0,
            A = 0,
            E = 0,
            M = 0;
        return "detail" in u && (A = u.detail), "wheelDelta" in u && (A = -u.wheelDelta / 120), "wheelDeltaY" in u && (A = -u.wheelDeltaY / 120), "wheelDeltaX" in u && (k = -u.wheelDeltaX / 120), "axis" in u && u.axis === u.HORIZONTAL_AXIS && (k = A, A = 0), E = k * 10, M = A * 10, "deltaY" in u && (M = u.deltaY), "deltaX" in u && (E = u.deltaX), u.shiftKey && !E && (E = M, M = 0), (E || M) && u.deltaMode && (u.deltaMode === 1 ? (E *= 40, M *= 40) : (E *= 800, M *= 800)), E && !k && (k = E < 1 ? -1 : 1), M && !A && (A = M < 1 ? -1 : 1), {
            spinX: k,
            spinY: A,
            pixelX: E,
            pixelY: M
        }
    }

    function o() {
        e.enabled && (e.mouseEntered = !0)
    }

    function c() {
        e.enabled && (e.mouseEntered = !1)
    }

    function m(u) {
        return e.params.mousewheel.thresholdDelta && u.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && j() - p < e.params.mousewheel.thresholdTime ? !1 : u.delta >= 6 && j() - p < 60 ? !0 : (u.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), r("scroll", u.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(), r("scroll", u.raw)), p = new a.Date().getTime(), !1)
    }

    function v(u) {
        const S = e.params.mousewheel;
        if (u.direction < 0) {
            if (e.isEnd && !e.params.loop && S.releaseOnEdges) return !0
        } else if (e.isBeginning && !e.params.loop && S.releaseOnEdges) return !0;
        return !1
    }

    function w(u) {
        let S = u,
            z = !0;
        if (!e.enabled || u.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)) return;
        const P = e.params.mousewheel;
        e.params.cssMode && S.preventDefault();
        let k = e.el;
        e.params.mousewheel.eventsTarget !== "container" && (k = document.querySelector(e.params.mousewheel.eventsTarget));
        const A = k && k.contains(S.target);
        if (!e.mouseEntered && !A && !P.releaseOnEdges) return !0;
        S.originalEvent && (S = S.originalEvent);
        let E = 0;
        const M = e.rtlTranslate ? -1 : 1,
            L = l(S);
        if (P.forceToAxis)
            if (e.isHorizontal())
                if (Math.abs(L.pixelX) > Math.abs(L.pixelY)) E = -L.pixelX * M;
                else return !0;
        else if (Math.abs(L.pixelY) > Math.abs(L.pixelX)) E = -L.pixelY;
        else return !0;
        else E = Math.abs(L.pixelX) > Math.abs(L.pixelY) ? -L.pixelX * M : -L.pixelY;
        if (E === 0) return !0;
        P.invert && (E = -E);
        let C = e.getTranslate() + E * P.sensitivity;
        if (C >= e.minTranslate() && (C = e.minTranslate()), C <= e.maxTranslate() && (C = e.maxTranslate()), z = e.params.loop ? !0 : !(C === e.minTranslate() || C === e.maxTranslate()), z && e.params.nested && S.stopPropagation(), !e.params.freeMode || !e.params.freeMode.enabled) {
            const T = {
                time: j(),
                delta: Math.abs(E),
                direction: Math.sign(E),
                raw: u
            };
            f.length >= 2 && f.shift();
            const y = f.length ? f[f.length - 1] : void 0;
            if (f.push(T), y ? (T.direction !== y.direction || T.delta > y.delta || T.time > y.time + 150) && m(T) : m(T), v(T)) return !0
        } else {
            const T = {
                    time: j(),
                    delta: Math.abs(E),
                    direction: Math.sign(E)
                },
                y = n && T.time < n.time + 500 && T.delta <= n.delta && T.direction === n.direction;
            if (!y) {
                n = void 0;
                let x = e.getTranslate() + E * P.sensitivity;
                const D = e.isBeginning,
                    O = e.isEnd;
                if (x >= e.minTranslate() && (x = e.minTranslate()), x <= e.maxTranslate() && (x = e.maxTranslate()), e.setTransition(0), e.setTranslate(x), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!D && e.isBeginning || !O && e.isEnd) && e.updateSlidesClasses(), e.params.loop && e.loopFix({
                        direction: T.direction < 0 ? "next" : "prev",
                        byMousewheel: !0
                    }), e.params.freeMode.sticky) {
                    clearTimeout(d), d = void 0, f.length >= 15 && f.shift();
                    const I = f.length ? f[f.length - 1] : void 0,
                        $ = f[0];
                    if (f.push(T), I && (T.delta > I.delta || T.direction !== I.direction)) f.splice(0);
                    else if (f.length >= 15 && T.time - $.time < 500 && $.delta - T.delta >= 1 && T.delta <= 6) {
                        const H = E > 0 ? .8 : .2;
                        n = T, f.splice(0), d = te(() => {
                            e.slideToClosest(e.params.speed, !0, void 0, H)
                        }, 0)
                    }
                    d || (d = te(() => {
                        n = T, f.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5)
                    }, 500))
                }
                if (y || r("scroll", S), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), P.releaseOnEdges && (x === e.minTranslate() || x === e.maxTranslate())) return !0
            }
        }
        return S.preventDefault ? S.preventDefault() : S.returnValue = !1, !1
    }

    function g(u) {
        let S = e.el;
        e.params.mousewheel.eventsTarget !== "container" && (S = document.querySelector(e.params.mousewheel.eventsTarget)), S[u]("mouseenter", o), S[u]("mouseleave", c), S[u]("wheel", w)
    }

    function b() {
        return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", w), !0) : e.mousewheel.enabled ? !1 : (g("addEventListener"), e.mousewheel.enabled = !0, !0)
    }

    function h() {
        return e.params.cssMode ? (e.wrapperEl.addEventListener(event, w), !0) : e.mousewheel.enabled ? (g("removeEventListener"), e.mousewheel.enabled = !1, !0) : !1
    }
    s("init", () => {
        !e.params.mousewheel.enabled && e.params.cssMode && h(), e.params.mousewheel.enabled && b()
    }), s("destroy", () => {
        e.params.cssMode && b(), e.mousewheel.enabled && h()
    }), Object.assign(e.mousewheel, {
        enable: b,
        disable: h
    })
}

function Ge(i, e, t, s) {
    return i.params.createElements && Object.keys(s).forEach(r => {
        if (!t[r] && t.auto === !0) {
            let a = X(i.el, `.${s[r]}`)[0];
            a || (a = W("div", s[r]), a.className = s[r], i.el.append(a)), t[r] = a, e[r] = a
        }
    }), t
}

function Ti(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s,
        emit: r
    } = i;
    t({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }), e.navigation = {
        nextEl: null,
        prevEl: null
    };
    const a = w => (Array.isArray(w) ? w : [w]).filter(g => !!g);

    function d(w) {
        let g;
        return w && typeof w == "string" && e.isElement && (g = e.el.querySelector(w), g) ? g : (w && (typeof w == "string" && (g = [...document.querySelectorAll(w)]), e.params.uniqueNavElements && typeof w == "string" && g.length > 1 && e.el.querySelectorAll(w).length === 1 && (g = e.el.querySelector(w))), w && !g ? w : g)
    }

    function p(w, g) {
        const b = e.params.navigation;
        w = a(w), w.forEach(h => {
            h && (h.classList[g ? "add" : "remove"](...b.disabledClass.split(" ")), h.tagName === "BUTTON" && (h.disabled = g), e.params.watchOverflow && e.enabled && h.classList[e.isLocked ? "add" : "remove"](b.lockClass))
        })
    }

    function n() {
        const {
            nextEl: w,
            prevEl: g
        } = e.navigation;
        if (e.params.loop) {
            p(g, !1), p(w, !1);
            return
        }
        p(g, e.isBeginning && !e.params.rewind), p(w, e.isEnd && !e.params.rewind)
    }

    function f(w) {
        w.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), r("navigationPrev"))
    }

    function l(w) {
        w.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), r("navigationNext"))
    }

    function o() {
        const w = e.params.navigation;
        if (e.params.navigation = Ge(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !(w.nextEl || w.prevEl)) return;
        let g = d(w.nextEl),
            b = d(w.prevEl);
        Object.assign(e.navigation, {
            nextEl: g,
            prevEl: b
        }), g = a(g), b = a(b);
        const h = (u, S) => {
            u && u.addEventListener("click", S === "next" ? l : f), !e.enabled && u && u.classList.add(...w.lockClass.split(" "))
        };
        g.forEach(u => h(u, "next")), b.forEach(u => h(u, "prev"))
    }

    function c() {
        let {
            nextEl: w,
            prevEl: g
        } = e.navigation;
        w = a(w), g = a(g);
        const b = (h, u) => {
            h.removeEventListener("click", u === "next" ? l : f), h.classList.remove(...e.params.navigation.disabledClass.split(" "))
        };
        w.forEach(h => b(h, "next")), g.forEach(h => b(h, "prev"))
    }
    s("init", () => {
        e.params.navigation.enabled === !1 ? v() : (o(), n())
    }), s("toEdge fromEdge lock unlock", () => {
        n()
    }), s("destroy", () => {
        c()
    }), s("enable disable", () => {
        let {
            nextEl: w,
            prevEl: g
        } = e.navigation;
        if (w = a(w), g = a(g), e.enabled) {
            n();
            return
        }[...w, ...g].filter(b => !!b).forEach(b => b.classList.add(e.params.navigation.lockClass))
    }), s("click", (w, g) => {
        let {
            nextEl: b,
            prevEl: h
        } = e.navigation;
        b = a(b), h = a(h);
        const u = g.target;
        if (e.params.navigation.hideOnClick && !h.includes(u) && !b.includes(u)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === u || e.pagination.el.contains(u))) return;
            let S;
            b.length ? S = b[0].classList.contains(e.params.navigation.hiddenClass) : h.length && (S = h[0].classList.contains(e.params.navigation.hiddenClass)), r(S === !0 ? "navigationShow" : "navigationHide"), [...b, ...h].filter(z => !!z).forEach(z => z.classList.toggle(e.params.navigation.hiddenClass))
        }
    });
    const m = () => {
            e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), o(), n()
        },
        v = () => {
            e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), c()
        };
    Object.assign(e.navigation, {
        enable: m,
        disable: v,
        update: n,
        init: o,
        destroy: c
    })
}

function K(i) {
    return i === void 0 && (i = ""), `.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
}

function Mi(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s,
        emit: r
    } = i;
    const a = "swiper-pagination";
    t({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: h => h,
            formatFractionTotal: h => h,
            bulletClass: `${a}-bullet`,
            bulletActiveClass: `${a}-bullet-active`,
            modifierClass: `${a}-`,
            currentClass: `${a}-current`,
            totalClass: `${a}-total`,
            hiddenClass: `${a}-hidden`,
            progressbarFillClass: `${a}-progressbar-fill`,
            progressbarOppositeClass: `${a}-progressbar-opposite`,
            clickableClass: `${a}-clickable`,
            lockClass: `${a}-lock`,
            horizontalClass: `${a}-horizontal`,
            verticalClass: `${a}-vertical`,
            paginationDisabledClass: `${a}-disabled`
        }
    }), e.pagination = {
        el: null,
        bullets: []
    };
    let d, p = 0;
    const n = h => (Array.isArray(h) ? h : [h]).filter(u => !!u);

    function f() {
        return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0
    }

    function l(h, u) {
        const {
            bulletActiveClass: S
        } = e.params.pagination;
        h && (h = h[`${u==="prev"?"previous":"next"}ElementSibling`], h && (h.classList.add(`${S}-${u}`), h = h[`${u==="prev"?"previous":"next"}ElementSibling`], h && h.classList.add(`${S}-${u}-${u}`)))
    }

    function o(h) {
        const u = h.target.closest(K(e.params.pagination.bulletClass));
        if (!u) return;
        h.preventDefault();
        const S = pe(u) * e.params.slidesPerGroup;
        if (e.params.loop) {
            if (e.realIndex === S) return;
            e.slideToLoop(S)
        } else e.slideTo(S)
    }

    function c() {
        const h = e.rtl,
            u = e.params.pagination;
        if (f()) return;
        let S = e.pagination.el;
        S = n(S);
        let z, P;
        const k = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            A = e.params.loop ? Math.ceil(k / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (P = e.previousRealIndex || 0, z = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (z = e.snapIndex, P = e.previousSnapIndex) : (P = e.previousIndex || 0, z = e.activeIndex || 0), u.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const E = e.pagination.bullets;
            let M, L, C;
            if (u.dynamicBullets && (d = $e(E[0], e.isHorizontal() ? "width" : "height", !0), S.forEach(T => {
                    T.style[e.isHorizontal() ? "width" : "height"] = `${d*(u.dynamicMainBullets+4)}px`
                }), u.dynamicMainBullets > 1 && P !== void 0 && (p += z - (P || 0), p > u.dynamicMainBullets - 1 ? p = u.dynamicMainBullets - 1 : p < 0 && (p = 0)), M = Math.max(z - p, 0), L = M + (Math.min(E.length, u.dynamicMainBullets) - 1), C = (L + M) / 2), E.forEach(T => {
                    const y = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(x => `${u.bulletActiveClass}${x}`)].map(x => typeof x == "string" && x.includes(" ") ? x.split(" ") : x).flat();
                    T.classList.remove(...y)
                }), S.length > 1) E.forEach(T => {
                const y = pe(T);
                y === z ? T.classList.add(...u.bulletActiveClass.split(" ")) : e.isElement && T.setAttribute("part", "bullet"), u.dynamicBullets && (y >= M && y <= L && T.classList.add(...`${u.bulletActiveClass}-main`.split(" ")), y === M && l(T, "prev"), y === L && l(T, "next"))
            });
            else {
                const T = E[z];
                if (T && T.classList.add(...u.bulletActiveClass.split(" ")), e.isElement && E.forEach((y, x) => {
                        y.setAttribute("part", x === z ? "bullet-active" : "bullet")
                    }), u.dynamicBullets) {
                    const y = E[M],
                        x = E[L];
                    for (let D = M; D <= L; D += 1) E[D] && E[D].classList.add(...`${u.bulletActiveClass}-main`.split(" "));
                    l(y, "prev"), l(x, "next")
                }
            }
            if (u.dynamicBullets) {
                const T = Math.min(E.length, u.dynamicMainBullets + 4),
                    y = (d * T - d) / 2 - C * d,
                    x = h ? "right" : "left";
                E.forEach(D => {
                    D.style[e.isHorizontal() ? x : "top"] = `${y}px`
                })
            }
        }
        S.forEach((E, M) => {
            if (u.type === "fraction" && (E.querySelectorAll(K(u.currentClass)).forEach(L => {
                    L.textContent = u.formatFractionCurrent(z + 1)
                }), E.querySelectorAll(K(u.totalClass)).forEach(L => {
                    L.textContent = u.formatFractionTotal(A)
                })), u.type === "progressbar") {
                let L;
                u.progressbarOpposite ? L = e.isHorizontal() ? "vertical" : "horizontal" : L = e.isHorizontal() ? "horizontal" : "vertical";
                const C = (z + 1) / A;
                let T = 1,
                    y = 1;
                L === "horizontal" ? T = C : y = C, E.querySelectorAll(K(u.progressbarFillClass)).forEach(x => {
                    x.style.transform = `translate3d(0,0,0) scaleX(${T}) scaleY(${y})`, x.style.transitionDuration = `${e.params.speed}ms`
                })
            }
            u.type === "custom" && u.renderCustom ? (E.innerHTML = u.renderCustom(e, z + 1, A), M === 0 && r("paginationRender", E)) : (M === 0 && r("paginationRender", E), r("paginationUpdate", E)), e.params.watchOverflow && e.enabled && E.classList[e.isLocked ? "add" : "remove"](u.lockClass)
        })
    }

    function m() {
        const h = e.params.pagination;
        if (f()) return;
        const u = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
        let S = e.pagination.el;
        S = n(S);
        let z = "";
        if (h.type === "bullets") {
            let P = e.params.loop ? Math.ceil(u / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && P > u && (P = u);
            for (let k = 0; k < P; k += 1) h.renderBullet ? z += h.renderBullet.call(e, k, h.bulletClass) : z += `<${h.bulletElement} ${e.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`
        }
        h.type === "fraction" && (h.renderFraction ? z = h.renderFraction.call(e, h.currentClass, h.totalClass) : z = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`), h.type === "progressbar" && (h.renderProgressbar ? z = h.renderProgressbar.call(e, h.progressbarFillClass) : z = `<span class="${h.progressbarFillClass}"></span>`), e.pagination.bullets = [], S.forEach(P => {
            h.type !== "custom" && (P.innerHTML = z || ""), h.type === "bullets" && e.pagination.bullets.push(...P.querySelectorAll(K(h.bulletClass)))
        }), h.type !== "custom" && r("paginationRender", S[0])
    }

    function v() {
        e.params.pagination = Ge(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const h = e.params.pagination;
        if (!h.el) return;
        let u;
        typeof h.el == "string" && e.isElement && (u = e.el.querySelector(h.el)), !u && typeof h.el == "string" && (u = [...document.querySelectorAll(h.el)]), u || (u = h.el), !(!u || u.length === 0) && (e.params.uniqueNavElements && typeof h.el == "string" && Array.isArray(u) && u.length > 1 && (u = [...e.el.querySelectorAll(h.el)], u.length > 1 && (u = u.filter(S => ee(S, ".swiper")[0] === e.el)[0])), Array.isArray(u) && u.length === 1 && (u = u[0]), Object.assign(e.pagination, {
            el: u
        }), u = n(u), u.forEach(S => {
            h.type === "bullets" && h.clickable && S.classList.add(...(h.clickableClass || "").split(" ")), S.classList.add(h.modifierClass + h.type), S.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.type === "bullets" && h.dynamicBullets && (S.classList.add(`${h.modifierClass}${h.type}-dynamic`), p = 0, h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)), h.type === "progressbar" && h.progressbarOpposite && S.classList.add(h.progressbarOppositeClass), h.clickable && S.addEventListener("click", o), e.enabled || S.classList.add(h.lockClass)
        }))
    }

    function w() {
        const h = e.params.pagination;
        if (f()) return;
        let u = e.pagination.el;
        u && (u = n(u), u.forEach(S => {
            S.classList.remove(h.hiddenClass), S.classList.remove(h.modifierClass + h.type), S.classList.remove(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.clickable && (S.classList.remove(...(h.clickableClass || "").split(" ")), S.removeEventListener("click", o))
        })), e.pagination.bullets && e.pagination.bullets.forEach(S => S.classList.remove(...h.bulletActiveClass.split(" ")))
    }
    s("changeDirection", () => {
        if (!e.pagination || !e.pagination.el) return;
        const h = e.params.pagination;
        let {
            el: u
        } = e.pagination;
        u = n(u), u.forEach(S => {
            S.classList.remove(h.horizontalClass, h.verticalClass), S.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass)
        })
    }), s("init", () => {
        e.params.pagination.enabled === !1 ? b() : (v(), m(), c())
    }), s("activeIndexChange", () => {
        typeof e.snapIndex > "u" && c()
    }), s("snapIndexChange", () => {
        c()
    }), s("snapGridLengthChange", () => {
        m(), c()
    }), s("destroy", () => {
        w()
    }), s("enable disable", () => {
        let {
            el: h
        } = e.pagination;
        h && (h = n(h), h.forEach(u => u.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
    }), s("lock unlock", () => {
        c()
    }), s("click", (h, u) => {
        const S = u.target,
            z = n(e.pagination.el);
        if (e.params.pagination.el && e.params.pagination.hideOnClick && z && z.length > 0 && !S.classList.contains(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && S === e.navigation.nextEl || e.navigation.prevEl && S === e.navigation.prevEl)) return;
            const P = z[0].classList.contains(e.params.pagination.hiddenClass);
            r(P === !0 ? "paginationShow" : "paginationHide"), z.forEach(k => k.classList.toggle(e.params.pagination.hiddenClass))
        }
    });
    const g = () => {
            e.el.classList.remove(e.params.pagination.paginationDisabledClass);
            let {
                el: h
            } = e.pagination;
            h && (h = n(h), h.forEach(u => u.classList.remove(e.params.pagination.paginationDisabledClass))), v(), m(), c()
        },
        b = () => {
            e.el.classList.add(e.params.pagination.paginationDisabledClass);
            let {
                el: h
            } = e.pagination;
            h && (h = n(h), h.forEach(u => u.classList.add(e.params.pagination.paginationDisabledClass))), w()
        };
    Object.assign(e.pagination, {
        enable: g,
        disable: b,
        render: m,
        update: c,
        init: v,
        destroy: w
    })
}

function Ci(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s,
        emit: r
    } = i;
    const a = N();
    let d = !1,
        p = null,
        n = null,
        f, l, o, c;
    t({
        scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: "swiper-scrollbar-horizontal",
            verticalClass: "swiper-scrollbar-vertical"
        }
    }), e.scrollbar = {
        el: null,
        dragEl: null
    };

    function m() {
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const {
            scrollbar: C,
            rtlTranslate: T
        } = e, {
            dragEl: y,
            el: x
        } = C, D = e.params.scrollbar, O = e.params.loop ? e.progressLoop : e.progress;
        let I = l,
            $ = (o - l) * O;
        T ? ($ = -$, $ > 0 ? (I = l - $, $ = 0) : -$ + l > o && (I = o + $)) : $ < 0 ? (I = l + $, $ = 0) : $ + l > o && (I = o - $), e.isHorizontal() ? (y.style.transform = `translate3d(${$}px, 0, 0)`, y.style.width = `${I}px`) : (y.style.transform = `translate3d(0px, ${$}px, 0)`, y.style.height = `${I}px`), D.hide && (clearTimeout(p), x.style.opacity = 1, p = setTimeout(() => {
            x.style.opacity = 0, x.style.transitionDuration = "400ms"
        }, 1e3))
    }

    function v(C) {
        !e.params.scrollbar.el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${C}ms`)
    }

    function w() {
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const {
            scrollbar: C
        } = e, {
            dragEl: T,
            el: y
        } = C;
        T.style.width = "", T.style.height = "", o = e.isHorizontal() ? y.offsetWidth : y.offsetHeight, c = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), e.params.scrollbar.dragSize === "auto" ? l = o * c : l = parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? T.style.width = `${l}px` : T.style.height = `${l}px`, c >= 1 ? y.style.display = "none" : y.style.display = "", e.params.scrollbar.hide && (y.style.opacity = 0), e.params.watchOverflow && e.enabled && C.el.classList[e.isLocked ? "add" : "remove"](e.params.scrollbar.lockClass)
    }

    function g(C) {
        return e.isHorizontal() ? C.clientX : C.clientY
    }

    function b(C) {
        const {
            scrollbar: T,
            rtlTranslate: y
        } = e, {
            el: x
        } = T;
        let D;
        D = (g(C) - ve(x)[e.isHorizontal() ? "left" : "top"] - (f !== null ? f : l / 2)) / (o - l), D = Math.max(Math.min(D, 1), 0), y && (D = 1 - D);
        const O = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * D;
        e.updateProgress(O), e.setTranslate(O), e.updateActiveIndex(), e.updateSlidesClasses()
    }

    function h(C) {
        const T = e.params.scrollbar,
            {
                scrollbar: y,
                wrapperEl: x
            } = e,
            {
                el: D,
                dragEl: O
            } = y;
        d = !0, f = C.target === O ? g(C) - C.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, C.preventDefault(), C.stopPropagation(), x.style.transitionDuration = "100ms", O.style.transitionDuration = "100ms", b(C), clearTimeout(n), D.style.transitionDuration = "0ms", T.hide && (D.style.opacity = 1), e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", C)
    }

    function u(C) {
        const {
            scrollbar: T,
            wrapperEl: y
        } = e, {
            el: x,
            dragEl: D
        } = T;
        d && (C.preventDefault ? C.preventDefault() : C.returnValue = !1, b(C), y.style.transitionDuration = "0ms", x.style.transitionDuration = "0ms", D.style.transitionDuration = "0ms", r("scrollbarDragMove", C))
    }

    function S(C) {
        const T = e.params.scrollbar,
            {
                scrollbar: y,
                wrapperEl: x
            } = e,
            {
                el: D
            } = y;
        d && (d = !1, e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "", x.style.transitionDuration = ""), T.hide && (clearTimeout(n), n = te(() => {
            D.style.opacity = 0, D.style.transitionDuration = "400ms"
        }, 1e3)), r("scrollbarDragEnd", C), T.snapOnRelease && e.slideToClosest())
    }

    function z(C) {
        const {
            scrollbar: T,
            params: y
        } = e, x = T.el;
        if (!x) return;
        const D = x,
            O = y.passiveListeners ? {
                passive: !1,
                capture: !1
            } : !1,
            I = y.passiveListeners ? {
                passive: !0,
                capture: !1
            } : !1;
        if (!D) return;
        const $ = C === "on" ? "addEventListener" : "removeEventListener";
        D[$]("pointerdown", h, O), a[$]("pointermove", u, O), a[$]("pointerup", S, I)
    }

    function P() {
        !e.params.scrollbar.el || !e.scrollbar.el || z("on")
    }

    function k() {
        !e.params.scrollbar.el || !e.scrollbar.el || z("off")
    }

    function A() {
        const {
            scrollbar: C,
            el: T
        } = e;
        e.params.scrollbar = Ge(e, e.originalParams.scrollbar, e.params.scrollbar, {
            el: "swiper-scrollbar"
        });
        const y = e.params.scrollbar;
        if (!y.el) return;
        let x;
        if (typeof y.el == "string" && e.isElement && (x = e.el.querySelector(y.el)), !x && typeof y.el == "string") {
            if (x = a.querySelectorAll(y.el), !x.length) return
        } else x || (x = y.el);
        e.params.uniqueNavElements && typeof y.el == "string" && x.length > 1 && T.querySelectorAll(y.el).length === 1 && (x = T.querySelector(y.el)), x.length > 0 && (x = x[0]), x.classList.add(e.isHorizontal() ? y.horizontalClass : y.verticalClass);
        let D;
        x && (D = x.querySelector(K(e.params.scrollbar.dragClass)), D || (D = W("div", e.params.scrollbar.dragClass), x.append(D))), Object.assign(C, {
            el: x,
            dragEl: D
        }), y.draggable && P(), x && x.classList[e.enabled ? "remove" : "add"](...Z(e.params.scrollbar.lockClass))
    }

    function E() {
        const C = e.params.scrollbar,
            T = e.scrollbar.el;
        T && T.classList.remove(...Z(e.isHorizontal() ? C.horizontalClass : C.verticalClass)), k()
    }
    s("init", () => {
        e.params.scrollbar.enabled === !1 ? L() : (A(), w(), m())
    }), s("update resize observerUpdate lock unlock", () => {
        w()
    }), s("setTranslate", () => {
        m()
    }), s("setTransition", (C, T) => {
        v(T)
    }), s("enable disable", () => {
        const {
            el: C
        } = e.scrollbar;
        C && C.classList[e.enabled ? "remove" : "add"](...Z(e.params.scrollbar.lockClass))
    }), s("destroy", () => {
        E()
    });
    const M = () => {
            e.el.classList.remove(...Z(e.params.scrollbar.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.remove(...Z(e.params.scrollbar.scrollbarDisabledClass)), A(), w(), m()
        },
        L = () => {
            e.el.classList.add(...Z(e.params.scrollbar.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.add(...Z(e.params.scrollbar.scrollbarDisabledClass)), E()
        };
    Object.assign(e.scrollbar, {
        enable: M,
        disable: L,
        updateSize: w,
        setTranslate: m,
        init: A,
        destroy: E
    })
}

function Pi(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s
    } = i;
    t({
        parallax: {
            enabled: !1
        }
    });
    const r = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
        a = (n, f) => {
            const {
                rtl: l
            } = e, o = l ? -1 : 1, c = n.getAttribute("data-swiper-parallax") || "0";
            let m = n.getAttribute("data-swiper-parallax-x"),
                v = n.getAttribute("data-swiper-parallax-y");
            const w = n.getAttribute("data-swiper-parallax-scale"),
                g = n.getAttribute("data-swiper-parallax-opacity"),
                b = n.getAttribute("data-swiper-parallax-rotate");
            if (m || v ? (m = m || "0", v = v || "0") : e.isHorizontal() ? (m = c, v = "0") : (v = c, m = "0"), m.indexOf("%") >= 0 ? m = `${parseInt(m,10)*f*o}%` : m = `${m*f*o}px`, v.indexOf("%") >= 0 ? v = `${parseInt(v,10)*f}%` : v = `${v*f}px`, typeof g < "u" && g !== null) {
                const u = g - (g - 1) * (1 - Math.abs(f));
                n.style.opacity = u
            }
            let h = `translate3d(${m}, ${v}, 0px)`;
            if (typeof w < "u" && w !== null) {
                const u = w - (w - 1) * (1 - Math.abs(f));
                h += ` scale(${u})`
            }
            if (b && typeof b < "u" && b !== null) {
                const u = b * f * -1;
                h += ` rotate(${u}deg)`
            }
            n.style.transform = h
        },
        d = () => {
            const {
                el: n,
                slides: f,
                progress: l,
                snapGrid: o,
                isElement: c
            } = e, m = X(n, r);
            e.isElement && m.push(...X(e.hostEl, r)), m.forEach(v => {
                a(v, l)
            }), f.forEach((v, w) => {
                let g = v.progress;
                e.params.slidesPerGroup > 1 && e.params.slidesPerView !== "auto" && (g += Math.ceil(w / 2) - l * (o.length - 1)), g = Math.min(Math.max(g, -1), 1), v.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach(b => {
                    a(b, g)
                })
            })
        },
        p = function(n) {
            n === void 0 && (n = e.params.speed);
            const {
                el: f,
                hostEl: l
            } = e, o = [...f.querySelectorAll(r)];
            e.isElement && o.push(...l.querySelectorAll(r)), o.forEach(c => {
                let m = parseInt(c.getAttribute("data-swiper-parallax-duration"), 10) || n;
                n === 0 && (m = 0), c.style.transitionDuration = `${m}ms`
            })
        };
    s("beforeInit", () => {
        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
    }), s("init", () => {
        e.params.parallax.enabled && d()
    }), s("setTranslate", () => {
        e.params.parallax.enabled && d()
    }), s("setTransition", (n, f) => {
        e.params.parallax.enabled && p(f)
    })
}

function Li(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s,
        emit: r
    } = i;
    const a = R();
    t({
        zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
        }
    }), e.zoom = {
        enabled: !1
    };
    let d = 1,
        p = !1,
        n, f;
    const l = [],
        o = {
            originX: 0,
            originY: 0,
            slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            imageEl: void 0,
            imageWrapEl: void 0,
            maxRatio: 3
        },
        c = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        },
        m = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
        };
    let v = 1;
    Object.defineProperty(e.zoom, "scale", {
        get() {
            return v
        },
        set(O) {
            if (v !== O) {
                const I = o.imageEl,
                    $ = o.slideEl;
                r("zoomChange", O, I, $)
            }
            v = O
        }
    });

    function w() {
        if (l.length < 2) return 1;
        const O = l[0].pageX,
            I = l[0].pageY,
            $ = l[1].pageX,
            H = l[1].pageY;
        return Math.sqrt(($ - O) ** 2 + (H - I) ** 2)
    }

    function g() {
        if (l.length < 2) return {
            x: null,
            y: null
        };
        const O = o.imageEl.getBoundingClientRect();
        return [(l[0].pageX + (l[1].pageX - l[0].pageX) / 2 - O.x - a.scrollX) / d, (l[0].pageY + (l[1].pageY - l[0].pageY) / 2 - O.y - a.scrollY) / d]
    }

    function b() {
        return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
    }

    function h(O) {
        const I = b();
        return !!(O.target.matches(I) || e.slides.filter($ => $.contains(O.target)).length > 0)
    }

    function u(O) {
        const I = `.${e.params.zoom.containerClass}`;
        return !!(O.target.matches(I) || [...e.hostEl.querySelectorAll(I)].filter($ => $.contains(O.target)).length > 0)
    }

    function S(O) {
        if (O.pointerType === "mouse" && l.splice(0, l.length), !h(O)) return;
        const I = e.params.zoom;
        if (n = !1, f = !1, l.push(O), !(l.length < 2)) {
            if (n = !0, o.scaleStart = w(), !o.slideEl) {
                o.slideEl = O.target.closest(`.${e.params.slideClass}, swiper-slide`), o.slideEl || (o.slideEl = e.slides[e.activeIndex]);
                let $ = o.slideEl.querySelector(`.${I.containerClass}`);
                if ($ && ($ = $.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), o.imageEl = $, $ ? o.imageWrapEl = ee(o.imageEl, `.${I.containerClass}`)[0] : o.imageWrapEl = void 0, !o.imageWrapEl) {
                    o.imageEl = void 0;
                    return
                }
                o.maxRatio = o.imageWrapEl.getAttribute("data-swiper-zoom") || I.maxRatio
            }
            if (o.imageEl) {
                const [$, H] = g();
                o.originX = $, o.originY = H, o.imageEl.style.transitionDuration = "0ms"
            }
            p = !0
        }
    }

    function z(O) {
        if (!h(O)) return;
        const I = e.params.zoom,
            $ = e.zoom,
            H = l.findIndex(B => B.pointerId === O.pointerId);
        H >= 0 && (l[H] = O), !(l.length < 2) && (f = !0, o.scaleMove = w(), o.imageEl && ($.scale = o.scaleMove / o.scaleStart * d, $.scale > o.maxRatio && ($.scale = o.maxRatio - 1 + ($.scale - o.maxRatio + 1) ** .5), $.scale < I.minRatio && ($.scale = I.minRatio + 1 - (I.minRatio - $.scale + 1) ** .5), o.imageEl.style.transform = `translate3d(0,0,0) scale(${$.scale})`))
    }

    function P(O) {
        if (!h(O) || O.pointerType === "mouse" && O.type === "pointerout") return;
        const I = e.params.zoom,
            $ = e.zoom,
            H = l.findIndex(B => B.pointerId === O.pointerId);
        H >= 0 && l.splice(H, 1), !(!n || !f) && (n = !1, f = !1, o.imageEl && ($.scale = Math.max(Math.min($.scale, o.maxRatio), I.minRatio), o.imageEl.style.transitionDuration = `${e.params.speed}ms`, o.imageEl.style.transform = `translate3d(0,0,0) scale(${$.scale})`, d = $.scale, p = !1, $.scale > 1 && o.slideEl ? o.slideEl.classList.add(`${I.zoomedSlideClass}`) : $.scale <= 1 && o.slideEl && o.slideEl.classList.remove(`${I.zoomedSlideClass}`), $.scale === 1 && (o.originX = 0, o.originY = 0, o.slideEl = void 0)))
    }

    function k(O) {
        const I = e.device;
        if (!o.imageEl || c.isTouched) return;
        I.android && O.cancelable && O.preventDefault(), c.isTouched = !0;
        const $ = l.length > 0 ? l[0] : O;
        c.touchesStart.x = $.pageX, c.touchesStart.y = $.pageY
    }

    function A(O) {
        if (!h(O) || !u(O)) return;
        const I = e.zoom;
        if (!o.imageEl || !c.isTouched || !o.slideEl) return;
        c.isMoved || (c.width = o.imageEl.offsetWidth, c.height = o.imageEl.offsetHeight, c.startX = Ae(o.imageWrapEl, "x") || 0, c.startY = Ae(o.imageWrapEl, "y") || 0, o.slideWidth = o.slideEl.offsetWidth, o.slideHeight = o.slideEl.offsetHeight, o.imageWrapEl.style.transitionDuration = "0ms");
        const $ = c.width * I.scale,
            H = c.height * I.scale;
        if ($ < o.slideWidth && H < o.slideHeight) return;
        if (c.minX = Math.min(o.slideWidth / 2 - $ / 2, 0), c.maxX = -c.minX, c.minY = Math.min(o.slideHeight / 2 - H / 2, 0), c.maxY = -c.minY, c.touchesCurrent.x = l.length > 0 ? l[0].pageX : O.pageX, c.touchesCurrent.y = l.length > 0 ? l[0].pageY : O.pageY, Math.max(Math.abs(c.touchesCurrent.x - c.touchesStart.x), Math.abs(c.touchesCurrent.y - c.touchesStart.y)) > 5 && (e.allowClick = !1), !c.isMoved && !p) {
            if (e.isHorizontal() && (Math.floor(c.minX) === Math.floor(c.startX) && c.touchesCurrent.x < c.touchesStart.x || Math.floor(c.maxX) === Math.floor(c.startX) && c.touchesCurrent.x > c.touchesStart.x)) {
                c.isTouched = !1;
                return
            }
            if (!e.isHorizontal() && (Math.floor(c.minY) === Math.floor(c.startY) && c.touchesCurrent.y < c.touchesStart.y || Math.floor(c.maxY) === Math.floor(c.startY) && c.touchesCurrent.y > c.touchesStart.y)) {
                c.isTouched = !1;
                return
            }
        }
        O.cancelable && O.preventDefault(), O.stopPropagation(), c.isMoved = !0;
        const Y = (I.scale - d) / (o.maxRatio - e.params.zoom.minRatio),
            {
                originX: G,
                originY: _
            } = o;
        c.currentX = c.touchesCurrent.x - c.touchesStart.x + c.startX + Y * (c.width - G * 2), c.currentY = c.touchesCurrent.y - c.touchesStart.y + c.startY + Y * (c.height - _ * 2), c.currentX < c.minX && (c.currentX = c.minX + 1 - (c.minX - c.currentX + 1) ** .8), c.currentX > c.maxX && (c.currentX = c.maxX - 1 + (c.currentX - c.maxX + 1) ** .8), c.currentY < c.minY && (c.currentY = c.minY + 1 - (c.minY - c.currentY + 1) ** .8), c.currentY > c.maxY && (c.currentY = c.maxY - 1 + (c.currentY - c.maxY + 1) ** .8), m.prevPositionX || (m.prevPositionX = c.touchesCurrent.x), m.prevPositionY || (m.prevPositionY = c.touchesCurrent.y), m.prevTime || (m.prevTime = Date.now()), m.x = (c.touchesCurrent.x - m.prevPositionX) / (Date.now() - m.prevTime) / 2, m.y = (c.touchesCurrent.y - m.prevPositionY) / (Date.now() - m.prevTime) / 2, Math.abs(c.touchesCurrent.x - m.prevPositionX) < 2 && (m.x = 0), Math.abs(c.touchesCurrent.y - m.prevPositionY) < 2 && (m.y = 0), m.prevPositionX = c.touchesCurrent.x, m.prevPositionY = c.touchesCurrent.y, m.prevTime = Date.now(), o.imageWrapEl.style.transform = `translate3d(${c.currentX}px, ${c.currentY}px,0)`
    }

    function E() {
        const O = e.zoom;
        if (!o.imageEl) return;
        if (!c.isTouched || !c.isMoved) {
            c.isTouched = !1, c.isMoved = !1;
            return
        }
        c.isTouched = !1, c.isMoved = !1;
        let I = 300,
            $ = 300;
        const H = m.x * I,
            B = c.currentX + H,
            Y = m.y * $,
            G = c.currentY + Y;
        m.x !== 0 && (I = Math.abs((B - c.currentX) / m.x)), m.y !== 0 && ($ = Math.abs((G - c.currentY) / m.y));
        const _ = Math.max(I, $);
        c.currentX = B, c.currentY = G;
        const q = c.width * O.scale,
            U = c.height * O.scale;
        c.minX = Math.min(o.slideWidth / 2 - q / 2, 0), c.maxX = -c.minX, c.minY = Math.min(o.slideHeight / 2 - U / 2, 0), c.maxY = -c.minY, c.currentX = Math.max(Math.min(c.currentX, c.maxX), c.minX), c.currentY = Math.max(Math.min(c.currentY, c.maxY), c.minY), o.imageWrapEl.style.transitionDuration = `${_}ms`, o.imageWrapEl.style.transform = `translate3d(${c.currentX}px, ${c.currentY}px,0)`
    }

    function M() {
        const O = e.zoom;
        o.slideEl && e.activeIndex !== e.slides.indexOf(o.slideEl) && (o.imageEl && (o.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), o.imageWrapEl && (o.imageWrapEl.style.transform = "translate3d(0,0,0)"), o.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`), O.scale = 1, d = 1, o.slideEl = void 0, o.imageEl = void 0, o.imageWrapEl = void 0, o.originX = 0, o.originY = 0)
    }

    function L(O) {
        const I = e.zoom,
            $ = e.params.zoom;
        if (!o.slideEl) {
            O && O.target && (o.slideEl = O.target.closest(`.${e.params.slideClass}, swiper-slide`)), o.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? o.slideEl = X(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : o.slideEl = e.slides[e.activeIndex]);
            let le = o.slideEl.querySelector(`.${$.containerClass}`);
            le && (le = le.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), o.imageEl = le, le ? o.imageWrapEl = ee(o.imageEl, `.${$.containerClass}`)[0] : o.imageWrapEl = void 0
        }
        if (!o.imageEl || !o.imageWrapEl) return;
        e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), o.slideEl.classList.add(`${$.zoomedSlideClass}`);
        let H, B, Y, G, _, q, U, J, Be, _e, Re, Xe, ue, me, Se, xe, Ee, Te;
        typeof c.touchesStart.x > "u" && O ? (H = O.pageX, B = O.pageY) : (H = c.touchesStart.x, B = c.touchesStart.y);
        const ne = typeof O == "number" ? O : null;
        d === 1 && ne && (H = void 0, B = void 0), I.scale = ne || o.imageWrapEl.getAttribute("data-swiper-zoom") || $.maxRatio, d = ne || o.imageWrapEl.getAttribute("data-swiper-zoom") || $.maxRatio, O && !(d === 1 && ne) ? (Ee = o.slideEl.offsetWidth, Te = o.slideEl.offsetHeight, Y = ve(o.slideEl).left + a.scrollX, G = ve(o.slideEl).top + a.scrollY, _ = Y + Ee / 2 - H, q = G + Te / 2 - B, Be = o.imageEl.offsetWidth, _e = o.imageEl.offsetHeight, Re = Be * I.scale, Xe = _e * I.scale, ue = Math.min(Ee / 2 - Re / 2, 0), me = Math.min(Te / 2 - Xe / 2, 0), Se = -ue, xe = -me, U = _ * I.scale, J = q * I.scale, U < ue && (U = ue), U > Se && (U = Se), J < me && (J = me), J > xe && (J = xe)) : (U = 0, J = 0), ne && I.scale === 1 && (o.originX = 0, o.originY = 0), o.imageWrapEl.style.transitionDuration = "300ms", o.imageWrapEl.style.transform = `translate3d(${U}px, ${J}px,0)`, o.imageEl.style.transitionDuration = "300ms", o.imageEl.style.transform = `translate3d(0,0,0) scale(${I.scale})`
    }

    function C() {
        const O = e.zoom,
            I = e.params.zoom;
        if (!o.slideEl) {
            e.params.virtual && e.params.virtual.enabled && e.virtual ? o.slideEl = X(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : o.slideEl = e.slides[e.activeIndex];
            let $ = o.slideEl.querySelector(`.${I.containerClass}`);
            $ && ($ = $.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), o.imageEl = $, $ ? o.imageWrapEl = ee(o.imageEl, `.${I.containerClass}`)[0] : o.imageWrapEl = void 0
        }!o.imageEl || !o.imageWrapEl || (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), O.scale = 1, d = 1, o.imageWrapEl.style.transitionDuration = "300ms", o.imageWrapEl.style.transform = "translate3d(0,0,0)", o.imageEl.style.transitionDuration = "300ms", o.imageEl.style.transform = "translate3d(0,0,0) scale(1)", o.slideEl.classList.remove(`${I.zoomedSlideClass}`), o.slideEl = void 0, o.originX = 0, o.originY = 0)
    }

    function T(O) {
        const I = e.zoom;
        I.scale && I.scale !== 1 ? C() : L(O)
    }

    function y() {
        const O = e.params.passiveListeners ? {
                passive: !0,
                capture: !1
            } : !1,
            I = e.params.passiveListeners ? {
                passive: !1,
                capture: !0
            } : !0;
        return {
            passiveListener: O,
            activeListenerWithCapture: I
        }
    }

    function x() {
        const O = e.zoom;
        if (O.enabled) return;
        O.enabled = !0;
        const {
            passiveListener: I,
            activeListenerWithCapture: $
        } = y();
        e.wrapperEl.addEventListener("pointerdown", S, I), e.wrapperEl.addEventListener("pointermove", z, $), ["pointerup", "pointercancel", "pointerout"].forEach(H => {
            e.wrapperEl.addEventListener(H, P, I)
        }), e.wrapperEl.addEventListener("pointermove", A, $)
    }

    function D() {
        const O = e.zoom;
        if (!O.enabled) return;
        O.enabled = !1;
        const {
            passiveListener: I,
            activeListenerWithCapture: $
        } = y();
        e.wrapperEl.removeEventListener("pointerdown", S, I), e.wrapperEl.removeEventListener("pointermove", z, $), ["pointerup", "pointercancel", "pointerout"].forEach(H => {
            e.wrapperEl.removeEventListener(H, P, I)
        }), e.wrapperEl.removeEventListener("pointermove", A, $)
    }
    s("init", () => {
        e.params.zoom.enabled && x()
    }), s("destroy", () => {
        D()
    }), s("touchStart", (O, I) => {
        e.zoom.enabled && k(I)
    }), s("touchEnd", (O, I) => {
        e.zoom.enabled && E()
    }), s("doubleTap", (O, I) => {
        !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && T(I)
    }), s("transitionEnd", () => {
        e.zoom.enabled && e.params.zoom.enabled && M()
    }), s("slideChange", () => {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && M()
    }), Object.assign(e.zoom, {
        enable: x,
        disable: D,
        in: L,
        out: C,
        toggle: T
    })
}

function zi(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s
    } = i;
    t({
        controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
        }
    }), e.controller = {
        control: void 0
    };

    function r(f, l) {
        const o = function() {
            let w, g, b;
            return (h, u) => {
                for (g = -1, w = h.length; w - g > 1;) b = w + g >> 1, h[b] <= u ? g = b : w = b;
                return w
            }
        }();
        this.x = f, this.y = l, this.lastIndex = f.length - 1;
        let c, m;
        return this.interpolate = function(w) {
            return w ? (m = o(this.x, w), c = m - 1, (w - this.x[c]) * (this.y[m] - this.y[c]) / (this.x[m] - this.x[c]) + this.y[c]) : 0
        }, this
    }

    function a(f) {
        e.controller.spline = e.params.loop ? new r(e.slidesGrid, f.slidesGrid) : new r(e.snapGrid, f.snapGrid)
    }

    function d(f, l) {
        const o = e.controller.control;
        let c, m;
        const v = e.constructor;

        function w(g) {
            if (g.destroyed) return;
            const b = e.rtlTranslate ? -e.translate : e.translate;
            e.params.controller.by === "slide" && (a(g), m = -e.controller.spline.interpolate(-b)), (!m || e.params.controller.by === "container") && (c = (g.maxTranslate() - g.minTranslate()) / (e.maxTranslate() - e.minTranslate()), (Number.isNaN(c) || !Number.isFinite(c)) && (c = 1), m = (b - e.minTranslate()) * c + g.minTranslate()), e.params.controller.inverse && (m = g.maxTranslate() - m), g.updateProgress(m), g.setTranslate(m, e), g.updateActiveIndex(), g.updateSlidesClasses()
        }
        if (Array.isArray(o))
            for (let g = 0; g < o.length; g += 1) o[g] !== l && o[g] instanceof v && w(o[g]);
        else o instanceof v && l !== o && w(o)
    }

    function p(f, l) {
        const o = e.constructor,
            c = e.controller.control;
        let m;

        function v(w) {
            w.destroyed || (w.setTransition(f, e), f !== 0 && (w.transitionStart(), w.params.autoHeight && te(() => {
                w.updateAutoHeight()
            }), ce(w.wrapperEl, () => {
                c && w.transitionEnd()
            })))
        }
        if (Array.isArray(c))
            for (m = 0; m < c.length; m += 1) c[m] !== l && c[m] instanceof o && v(c[m]);
        else c instanceof o && l !== c && v(c)
    }

    function n() {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
    }
    s("beforeInit", () => {
        if (typeof window < "u" && (typeof e.params.controller.control == "string" || e.params.controller.control instanceof HTMLElement)) {
            const f = document.querySelector(e.params.controller.control);
            if (f && f.swiper) e.controller.control = f.swiper;
            else if (f) {
                const l = o => {
                    e.controller.control = o.detail[0], e.update(), f.removeEventListener("init", l)
                };
                f.addEventListener("init", l)
            }
            return
        }
        e.controller.control = e.params.controller.control
    }), s("update", () => {
        n()
    }), s("resize", () => {
        n()
    }), s("observerUpdate", () => {
        n()
    }), s("setTranslate", (f, l, o) => {
        !e.controller.control || e.controller.control.destroyed || e.controller.setTranslate(l, o)
    }), s("setTransition", (f, l, o) => {
        !e.controller.control || e.controller.control.destroyed || e.controller.setTransition(l, o)
    }), Object.assign(e.controller, {
        setTranslate: d,
        setTransition: p
    })
}

function Ii(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s
    } = i;
    t({
        a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null
        }
    }), e.a11y = {
        clicked: !1
    };
    let r = null;

    function a(y) {
        const x = r;
        x.length !== 0 && (x.innerHTML = "", x.innerHTML = y)
    }
    const d = y => (Array.isArray(y) ? y : [y]).filter(x => !!x);

    function p(y) {
        y === void 0 && (y = 16);
        const x = () => Math.round(16 * Math.random()).toString(16);
        return "x".repeat(y).replace(/x/g, x)
    }

    function n(y) {
        y = d(y), y.forEach(x => {
            x.setAttribute("tabIndex", "0")
        })
    }

    function f(y) {
        y = d(y), y.forEach(x => {
            x.setAttribute("tabIndex", "-1")
        })
    }

    function l(y, x) {
        y = d(y), y.forEach(D => {
            D.setAttribute("role", x)
        })
    }

    function o(y, x) {
        y = d(y), y.forEach(D => {
            D.setAttribute("aria-roledescription", x)
        })
    }

    function c(y, x) {
        y = d(y), y.forEach(D => {
            D.setAttribute("aria-controls", x)
        })
    }

    function m(y, x) {
        y = d(y), y.forEach(D => {
            D.setAttribute("aria-label", x)
        })
    }

    function v(y, x) {
        y = d(y), y.forEach(D => {
            D.setAttribute("id", x)
        })
    }

    function w(y, x) {
        y = d(y), y.forEach(D => {
            D.setAttribute("aria-live", x)
        })
    }

    function g(y) {
        y = d(y), y.forEach(x => {
            x.setAttribute("aria-disabled", !0)
        })
    }

    function b(y) {
        y = d(y), y.forEach(x => {
            x.setAttribute("aria-disabled", !1)
        })
    }

    function h(y) {
        if (y.keyCode !== 13 && y.keyCode !== 32) return;
        const x = e.params.a11y,
            D = y.target;
        e.pagination && e.pagination.el && (D === e.pagination.el || e.pagination.el.contains(y.target)) && !y.target.matches(K(e.params.pagination.bulletClass)) || (e.navigation && e.navigation.nextEl && D === e.navigation.nextEl && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? a(x.lastSlideMessage) : a(x.nextSlideMessage)), e.navigation && e.navigation.prevEl && D === e.navigation.prevEl && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? a(x.firstSlideMessage) : a(x.prevSlideMessage)), e.pagination && D.matches(K(e.params.pagination.bulletClass)) && D.click())
    }

    function u() {
        if (e.params.loop || e.params.rewind || !e.navigation) return;
        const {
            nextEl: y,
            prevEl: x
        } = e.navigation;
        x && (e.isBeginning ? (g(x), f(x)) : (b(x), n(x))), y && (e.isEnd ? (g(y), f(y)) : (b(y), n(y)))
    }

    function S() {
        return e.pagination && e.pagination.bullets && e.pagination.bullets.length
    }

    function z() {
        return S() && e.params.pagination.clickable
    }

    function P() {
        const y = e.params.a11y;
        S() && e.pagination.bullets.forEach(x => {
            e.params.pagination.clickable && (n(x), e.params.pagination.renderBullet || (l(x, "button"), m(x, y.paginationBulletMessage.replace(/\{\{index\}\}/, pe(x) + 1)))), x.matches(K(e.params.pagination.bulletActiveClass)) ? x.setAttribute("aria-current", "true") : x.removeAttribute("aria-current")
        })
    }
    const k = (y, x, D) => {
            n(y), y.tagName !== "BUTTON" && (l(y, "button"), y.addEventListener("keydown", h)), m(y, D), c(y, x)
        },
        A = () => {
            e.a11y.clicked = !0
        },
        E = () => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    e.destroyed || (e.a11y.clicked = !1)
                })
            })
        },
        M = y => {
            if (e.a11y.clicked) return;
            const x = y.target.closest(`.${e.params.slideClass}, swiper-slide`);
            if (!x || !e.slides.includes(x)) return;
            const D = e.slides.indexOf(x) === e.activeIndex,
                O = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(x);
            D || O || y.sourceCapabilities && y.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, e.slideTo(e.slides.indexOf(x), 0))
        },
        L = () => {
            const y = e.params.a11y;
            y.itemRoleDescriptionMessage && o(e.slides, y.itemRoleDescriptionMessage), y.slideRole && l(e.slides, y.slideRole);
            const x = e.slides.length;
            y.slideLabelMessage && e.slides.forEach((D, O) => {
                const I = e.params.loop ? parseInt(D.getAttribute("data-swiper-slide-index"), 10) : O,
                    $ = y.slideLabelMessage.replace(/\{\{index\}\}/, I + 1).replace(/\{\{slidesLength\}\}/, x);
                m(D, $)
            })
        },
        C = () => {
            const y = e.params.a11y;
            e.el.append(r);
            const x = e.el;
            y.containerRoleDescriptionMessage && o(x, y.containerRoleDescriptionMessage), y.containerMessage && m(x, y.containerMessage);
            const D = e.wrapperEl,
                O = y.id || D.getAttribute("id") || `swiper-wrapper-${p(16)}`,
                I = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
            v(D, O), w(D, I), L();
            let {
                nextEl: $,
                prevEl: H
            } = e.navigation ? e.navigation : {};
            $ = d($), H = d(H), $ && $.forEach(B => k(B, O, y.nextSlideMessage)), H && H.forEach(B => k(B, O, y.prevSlideMessage)), z() && (Array.isArray(e.pagination.el) ? e.pagination.el : [e.pagination.el]).forEach(Y => {
                Y.addEventListener("keydown", h)
            }), e.el.addEventListener("focus", M, !0), e.el.addEventListener("pointerdown", A, !0), e.el.addEventListener("pointerup", E, !0)
        };

    function T() {
        r && r.remove();
        let {
            nextEl: y,
            prevEl: x
        } = e.navigation ? e.navigation : {};
        y = d(y), x = d(x), y && y.forEach(D => D.removeEventListener("keydown", h)), x && x.forEach(D => D.removeEventListener("keydown", h)), z() && (Array.isArray(e.pagination.el) ? e.pagination.el : [e.pagination.el]).forEach(O => {
            O.removeEventListener("keydown", h)
        }), e.el.removeEventListener("focus", M, !0), e.el.removeEventListener("pointerdown", A, !0), e.el.removeEventListener("pointerup", E, !0)
    }
    s("beforeInit", () => {
        r = W("span", e.params.a11y.notificationClass), r.setAttribute("aria-live", "assertive"), r.setAttribute("aria-atomic", "true")
    }), s("afterInit", () => {
        e.params.a11y.enabled && C()
    }), s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
        e.params.a11y.enabled && L()
    }), s("fromEdge toEdge afterInit lock unlock", () => {
        e.params.a11y.enabled && u()
    }), s("paginationUpdate", () => {
        e.params.a11y.enabled && P()
    }), s("destroy", () => {
        e.params.a11y.enabled && T()
    })
}

function Ai(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s
    } = i;
    t({
        history: {
            enabled: !1,
            root: "",
            replaceState: !1,
            key: "slides",
            keepQuery: !1
        }
    });
    let r = !1,
        a = {};
    const d = m => m.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
        p = m => {
            const v = R();
            let w;
            m ? w = new URL(m) : w = v.location;
            const g = w.pathname.slice(1).split("/").filter(S => S !== ""),
                b = g.length,
                h = g[b - 2],
                u = g[b - 1];
            return {
                key: h,
                value: u
            }
        },
        n = (m, v) => {
            const w = R();
            if (!r || !e.params.history.enabled) return;
            let g;
            e.params.url ? g = new URL(e.params.url) : g = w.location;
            const b = e.slides[v];
            let h = d(b.getAttribute("data-history"));
            if (e.params.history.root.length > 0) {
                let S = e.params.history.root;
                S[S.length - 1] === "/" && (S = S.slice(0, S.length - 1)), h = `${S}/${m?`${m}/`:""}${h}`
            } else g.pathname.includes(m) || (h = `${m?`${m}/`:""}${h}`);
            e.params.history.keepQuery && (h += g.search);
            const u = w.history.state;
            u && u.value === h || (e.params.history.replaceState ? w.history.replaceState({
                value: h
            }, null, h) : w.history.pushState({
                value: h
            }, null, h))
        },
        f = (m, v, w) => {
            if (v)
                for (let g = 0, b = e.slides.length; g < b; g += 1) {
                    const h = e.slides[g];
                    if (d(h.getAttribute("data-history")) === v) {
                        const S = e.getSlideIndex(h);
                        e.slideTo(S, m, w)
                    }
                } else e.slideTo(0, m, w)
        },
        l = () => {
            a = p(e.params.url), f(e.params.speed, a.value, !1)
        },
        o = () => {
            const m = R();
            if (e.params.history) {
                if (!m.history || !m.history.pushState) {
                    e.params.history.enabled = !1, e.params.hashNavigation.enabled = !0;
                    return
                }
                if (r = !0, a = p(e.params.url), !a.key && !a.value) {
                    e.params.history.replaceState || m.addEventListener("popstate", l);
                    return
                }
                f(0, a.value, e.params.runCallbacksOnInit), e.params.history.replaceState || m.addEventListener("popstate", l)
            }
        },
        c = () => {
            const m = R();
            e.params.history.replaceState || m.removeEventListener("popstate", l)
        };
    s("init", () => {
        e.params.history.enabled && o()
    }), s("destroy", () => {
        e.params.history.enabled && c()
    }), s("transitionEnd _freeModeNoMomentumRelease", () => {
        r && n(e.params.history.key, e.activeIndex)
    }), s("slideChange", () => {
        r && e.params.cssMode && n(e.params.history.key, e.activeIndex)
    })
}

function $i(i) {
    let {
        swiper: e,
        extendParams: t,
        emit: s,
        on: r
    } = i, a = !1;
    const d = N(),
        p = R();
    t({
        hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1,
            getSlideIndex(c, m) {
                if (e.virtual && e.params.virtual.enabled) {
                    const v = e.slides.filter(g => g.getAttribute("data-hash") === m)[0];
                    return v ? parseInt(v.getAttribute("data-swiper-slide-index"), 10) : 0
                }
                return e.getSlideIndex(X(e.slidesEl, `.${e.params.slideClass}[data-hash="${m}"], swiper-slide[data-hash="${m}"]`)[0])
            }
        }
    });
    const n = () => {
            s("hashChange");
            const c = d.location.hash.replace("#", ""),
                m = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex],
                v = m ? m.getAttribute("data-hash") : "";
            if (c !== v) {
                const w = e.params.hashNavigation.getSlideIndex(e, c);
                if (typeof w > "u" || Number.isNaN(w)) return;
                e.slideTo(w)
            }
        },
        f = () => {
            if (!a || !e.params.hashNavigation.enabled) return;
            const c = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex],
                m = c ? c.getAttribute("data-hash") || c.getAttribute("data-history") : "";
            e.params.hashNavigation.replaceState && p.history && p.history.replaceState ? (p.history.replaceState(null, null, `#${m}` || ""), s("hashSet")) : (d.location.hash = m || "", s("hashSet"))
        },
        l = () => {
            if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
            a = !0;
            const c = d.location.hash.replace("#", "");
            if (c) {
                const v = e.params.hashNavigation.getSlideIndex(e, c);
                e.slideTo(v || 0, 0, e.params.runCallbacksOnInit, !0)
            }
            e.params.hashNavigation.watchState && p.addEventListener("hashchange", n)
        },
        o = () => {
            e.params.hashNavigation.watchState && p.removeEventListener("hashchange", n)
        };
    r("init", () => {
        e.params.hashNavigation.enabled && l()
    }), r("destroy", () => {
        e.params.hashNavigation.enabled && o()
    }), r("transitionEnd _freeModeNoMomentumRelease", () => {
        a && f()
    }), r("slideChange", () => {
        a && e.params.cssMode && f()
    })
}

function Oi(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s,
        emit: r,
        params: a
    } = i;
    e.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    }, t({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let d, p, n = a && a.autoplay ? a.autoplay.delay : 3e3,
        f = a && a.autoplay ? a.autoplay.delay : 3e3,
        l, o = new Date().getTime(),
        c, m, v, w, g, b, h;

    function u(I) {
        !e || e.destroyed || !e.wrapperEl || I.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", u), !h && M())
    }
    const S = () => {
            if (e.destroyed || !e.autoplay.running) return;
            e.autoplay.paused ? c = !0 : c && (f = l, c = !1);
            const I = e.autoplay.paused ? l : o + f - new Date().getTime();
            e.autoplay.timeLeft = I, r("autoplayTimeLeft", I, I / n), p = requestAnimationFrame(() => {
                S()
            })
        },
        z = () => {
            let I;
            return e.virtual && e.params.virtual.enabled ? I = e.slides.filter(H => H.classList.contains("swiper-slide-active"))[0] : I = e.slides[e.activeIndex], I ? parseInt(I.getAttribute("data-swiper-autoplay"), 10) : void 0
        },
        P = I => {
            if (e.destroyed || !e.autoplay.running) return;
            cancelAnimationFrame(p), S();
            let $ = typeof I > "u" ? e.params.autoplay.delay : I;
            n = e.params.autoplay.delay, f = e.params.autoplay.delay;
            const H = z();
            !Number.isNaN(H) && H > 0 && typeof I > "u" && ($ = H, n = H, f = H), l = $;
            const B = e.params.speed,
                Y = () => {
                    !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(B, !0, !0), r("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, B, !0, !0), r("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(B, !0, !0), r("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, B, !0, !0), r("autoplay")), e.params.cssMode && (o = new Date().getTime(), requestAnimationFrame(() => {
                        P()
                    })))
                };
            return $ > 0 ? (clearTimeout(d), d = setTimeout(() => {
                Y()
            }, $)) : requestAnimationFrame(() => {
                Y()
            }), $
        },
        k = () => {
            o = new Date().getTime(), e.autoplay.running = !0, P(), r("autoplayStart")
        },
        A = () => {
            e.autoplay.running = !1, clearTimeout(d), cancelAnimationFrame(p), r("autoplayStop")
        },
        E = (I, $) => {
            if (e.destroyed || !e.autoplay.running) return;
            clearTimeout(d), I || (b = !0);
            const H = () => {
                r("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", u) : M()
            };
            if (e.autoplay.paused = !0, $) {
                g && (l = e.params.autoplay.delay), g = !1, H();
                return
            }
            l = (l || e.params.autoplay.delay) - (new Date().getTime() - o), !(e.isEnd && l < 0 && !e.params.loop) && (l < 0 && (l = 0), H())
        },
        M = () => {
            e.isEnd && l < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (o = new Date().getTime(), b ? (b = !1, P(l)) : P(), e.autoplay.paused = !1, r("autoplayResume"))
        },
        L = () => {
            if (e.destroyed || !e.autoplay.running) return;
            const I = N();
            I.visibilityState === "hidden" && (b = !0, E(!0)), I.visibilityState === "visible" && M()
        },
        C = I => {
            I.pointerType === "mouse" && (b = !0, h = !0, !(e.animating || e.autoplay.paused) && E(!0))
        },
        T = I => {
            I.pointerType === "mouse" && (h = !1, e.autoplay.paused && M())
        },
        y = () => {
            e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", C), e.el.addEventListener("pointerleave", T))
        },
        x = () => {
            e.el.removeEventListener("pointerenter", C), e.el.removeEventListener("pointerleave", T)
        },
        D = () => {
            N().addEventListener("visibilitychange", L)
        },
        O = () => {
            N().removeEventListener("visibilitychange", L)
        };
    s("init", () => {
        e.params.autoplay.enabled && (y(), D(), k())
    }), s("destroy", () => {
        x(), O(), e.autoplay.running && A()
    }), s("_freeModeStaticRelease", () => {
        (v || b) && M()
    }), s("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? A() : E(!0, !0)
    }), s("beforeTransitionStart", (I, $, H) => {
        e.destroyed || !e.autoplay.running || (H || !e.params.autoplay.disableOnInteraction ? E(!0, !0) : A())
    }), s("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
            if (e.params.autoplay.disableOnInteraction) {
                A();
                return
            }
            m = !0, v = !1, b = !1, w = setTimeout(() => {
                b = !0, v = !0, E(!0)
            }, 200)
        }
    }), s("touchEnd", () => {
        if (!(e.destroyed || !e.autoplay.running || !m)) {
            if (clearTimeout(w), clearTimeout(d), e.params.autoplay.disableOnInteraction) {
                v = !1, m = !1;
                return
            }
            v && e.params.cssMode && M(), v = !1, m = !1
        }
    }), s("slideChange", () => {
        e.destroyed || !e.autoplay.running || (g = !0)
    }), Object.assign(e.autoplay, {
        start: k,
        stop: A,
        pause: E,
        resume: M
    })
}

function Di(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s
    } = i;
    t({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
        }
    });
    let r = !1,
        a = !1;
    e.thumbs = {
        swiper: null
    };

    function d() {
        const f = e.thumbs.swiper;
        if (!f || f.destroyed) return;
        const l = f.clickedIndex,
            o = f.clickedSlide;
        if (o && o.classList.contains(e.params.thumbs.slideThumbActiveClass) || typeof l > "u" || l === null) return;
        let c;
        f.params.loop ? c = parseInt(f.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : c = l, e.params.loop ? e.slideToLoop(c) : e.slideTo(c)
    }

    function p() {
        const {
            thumbs: f
        } = e.params;
        if (r) return !1;
        r = !0;
        const l = e.constructor;
        if (f.swiper instanceof l) e.thumbs.swiper = f.swiper, Object.assign(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
        }), Object.assign(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
        }), e.thumbs.swiper.update();
        else if (oe(f.swiper)) {
            const o = Object.assign({}, f.swiper);
            Object.assign(o, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), e.thumbs.swiper = new l(o), a = !0
        }
        return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", d), !0
    }

    function n(f) {
        const l = e.thumbs.swiper;
        if (!l || l.destroyed) return;
        const o = l.params.slidesPerView === "auto" ? l.slidesPerViewDynamic() : l.params.slidesPerView;
        let c = 1;
        const m = e.params.thumbs.slideThumbActiveClass;
        if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (c = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (c = 1), c = Math.floor(c), l.slides.forEach(g => g.classList.remove(m)), l.params.loop || l.params.virtual && l.params.virtual.enabled)
            for (let g = 0; g < c; g += 1) X(l.slidesEl, `[data-swiper-slide-index="${e.realIndex+g}"]`).forEach(b => {
                b.classList.add(m)
            });
        else
            for (let g = 0; g < c; g += 1) l.slides[e.realIndex + g] && l.slides[e.realIndex + g].classList.add(m);
        const v = e.params.thumbs.autoScrollOffset,
            w = v && !l.params.loop;
        if (e.realIndex !== l.realIndex || w) {
            const g = l.activeIndex;
            let b, h;
            if (l.params.loop) {
                const u = l.slides.filter(S => S.getAttribute("data-swiper-slide-index") === `${e.realIndex}`)[0];
                b = l.slides.indexOf(u), h = e.activeIndex > e.previousIndex ? "next" : "prev"
            } else b = e.realIndex, h = b > e.previousIndex ? "next" : "prev";
            w && (b += h === "next" ? v : -1 * v), l.visibleSlidesIndexes && l.visibleSlidesIndexes.indexOf(b) < 0 && (l.params.centeredSlides ? b > g ? b = b - Math.floor(o / 2) + 1 : b = b + Math.floor(o / 2) - 1 : b > g && l.params.slidesPerGroup, l.slideTo(b, f ? 0 : void 0))
        }
    }
    s("beforeInit", () => {
        const {
            thumbs: f
        } = e.params;
        if (!(!f || !f.swiper))
            if (typeof f.swiper == "string" || f.swiper instanceof HTMLElement) {
                const l = N(),
                    o = () => {
                        const m = typeof f.swiper == "string" ? l.querySelector(f.swiper) : f.swiper;
                        if (m && m.swiper) f.swiper = m.swiper, p(), n(!0);
                        else if (m) {
                            const v = w => {
                                f.swiper = w.detail[0], m.removeEventListener("init", v), p(), n(!0), f.swiper.update(), e.update()
                            };
                            m.addEventListener("init", v)
                        }
                        return m
                    },
                    c = () => {
                        if (e.destroyed) return;
                        o() || requestAnimationFrame(c)
                    };
                requestAnimationFrame(c)
            } else p(), n(!0)
    }), s("slideChange update resize observerUpdate", () => {
        n()
    }), s("setTransition", (f, l) => {
        const o = e.thumbs.swiper;
        !o || o.destroyed || o.setTransition(l)
    }), s("beforeDestroy", () => {
        const f = e.thumbs.swiper;
        !f || f.destroyed || a && f.destroy()
    }), Object.assign(e.thumbs, {
        init: p,
        update: n
    })
}

function ki(i) {
    let {
        swiper: e,
        extendParams: t,
        emit: s,
        once: r
    } = i;
    t({
        freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
        }
    });

    function a() {
        if (e.params.cssMode) return;
        const n = e.getTranslate();
        e.setTranslate(n), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
            currentPos: e.rtl ? e.translate : -e.translate
        })
    }

    function d() {
        if (e.params.cssMode) return;
        const {
            touchEventsData: n,
            touches: f
        } = e;
        n.velocities.length === 0 && n.velocities.push({
            position: f[e.isHorizontal() ? "startX" : "startY"],
            time: n.touchStartTime
        }), n.velocities.push({
            position: f[e.isHorizontal() ? "currentX" : "currentY"],
            time: j()
        })
    }

    function p(n) {
        let {
            currentPos: f
        } = n;
        if (e.params.cssMode) return;
        const {
            params: l,
            wrapperEl: o,
            rtlTranslate: c,
            snapGrid: m,
            touchEventsData: v
        } = e, g = j() - v.touchStartTime;
        if (f < -e.minTranslate()) {
            e.slideTo(e.activeIndex);
            return
        }
        if (f > -e.maxTranslate()) {
            e.slides.length < m.length ? e.slideTo(m.length - 1) : e.slideTo(e.slides.length - 1);
            return
        }
        if (l.freeMode.momentum) {
            if (v.velocities.length > 1) {
                const A = v.velocities.pop(),
                    E = v.velocities.pop(),
                    M = A.position - E.position,
                    L = A.time - E.time;
                e.velocity = M / L, e.velocity /= 2, Math.abs(e.velocity) < l.freeMode.minimumVelocity && (e.velocity = 0), (L > 150 || j() - A.time > 300) && (e.velocity = 0)
            } else e.velocity = 0;
            e.velocity *= l.freeMode.momentumVelocityRatio, v.velocities.length = 0;
            let b = 1e3 * l.freeMode.momentumRatio;
            const h = e.velocity * b;
            let u = e.translate + h;
            c && (u = -u);
            let S = !1,
                z;
            const P = Math.abs(e.velocity) * 20 * l.freeMode.momentumBounceRatio;
            let k;
            if (u < e.maxTranslate()) l.freeMode.momentumBounce ? (u + e.maxTranslate() < -P && (u = e.maxTranslate() - P), z = e.maxTranslate(), S = !0, v.allowMomentumBounce = !0) : u = e.maxTranslate(), l.loop && l.centeredSlides && (k = !0);
            else if (u > e.minTranslate()) l.freeMode.momentumBounce ? (u - e.minTranslate() > P && (u = e.minTranslate() + P), z = e.minTranslate(), S = !0, v.allowMomentumBounce = !0) : u = e.minTranslate(), l.loop && l.centeredSlides && (k = !0);
            else if (l.freeMode.sticky) {
                let A;
                for (let E = 0; E < m.length; E += 1)
                    if (m[E] > -u) {
                        A = E;
                        break
                    }
                Math.abs(m[A] - u) < Math.abs(m[A - 1] - u) || e.swipeDirection === "next" ? u = m[A] : u = m[A - 1], u = -u
            }
            if (k && r("transitionEnd", () => {
                    e.loopFix()
                }), e.velocity !== 0) {
                if (c ? b = Math.abs((-u - e.translate) / e.velocity) : b = Math.abs((u - e.translate) / e.velocity), l.freeMode.sticky) {
                    const A = Math.abs((c ? -u : u) - e.translate),
                        E = e.slidesSizesGrid[e.activeIndex];
                    A < E ? b = l.speed : A < 2 * E ? b = l.speed * 1.5 : b = l.speed * 2.5
                }
            } else if (l.freeMode.sticky) {
                e.slideToClosest();
                return
            }
            l.freeMode.momentumBounce && S ? (e.updateProgress(z), e.setTransition(b), e.setTranslate(u), e.transitionStart(!0, e.swipeDirection), e.animating = !0, ce(o, () => {
                !e || e.destroyed || !v.allowMomentumBounce || (s("momentumBounce"), e.setTransition(l.speed), setTimeout(() => {
                    e.setTranslate(z), ce(o, () => {
                        !e || e.destroyed || e.transitionEnd()
                    })
                }, 0))
            })) : e.velocity ? (s("_freeModeNoMomentumRelease"), e.updateProgress(u), e.setTransition(b), e.setTranslate(u), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, ce(o, () => {
                !e || e.destroyed || e.transitionEnd()
            }))) : e.updateProgress(u), e.updateActiveIndex(), e.updateSlidesClasses()
        } else if (l.freeMode.sticky) {
            e.slideToClosest();
            return
        } else l.freeMode && s("_freeModeNoMomentumRelease");
        (!l.freeMode.momentum || g >= l.longSwipesMs) && (s("_freeModeStaticRelease"), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
    }
    Object.assign(e, {
        freeMode: {
            onTouchStart: a,
            onTouchMove: d,
            onTouchEnd: p
        }
    })
}

function Hi(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s
    } = i;
    t({
        grid: {
            rows: 1,
            fill: "column"
        }
    });
    let r, a, d, p;
    const n = () => {
            let w = e.params.spaceBetween;
            return typeof w == "string" && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * e.size : typeof w == "string" && (w = parseFloat(w)), w
        },
        f = w => {
            const {
                slidesPerView: g
            } = e.params, {
                rows: b,
                fill: h
            } = e.params.grid, u = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : w.length;
            d = Math.floor(u / b), Math.floor(u / b) === u / b ? r = u : r = Math.ceil(u / b) * b, g !== "auto" && h === "row" && (r = Math.max(r, g * b)), a = r / b
        },
        l = () => {
            e.slides && e.slides.forEach(w => {
                w.swiperSlideGridSet && (w.style.height = "", w.style[e.getDirectionLabel("margin-top")] = "")
            })
        },
        o = (w, g, b) => {
            const {
                slidesPerGroup: h
            } = e.params, u = n(), {
                rows: S,
                fill: z
            } = e.params.grid, P = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : b.length;
            let k, A, E;
            if (z === "row" && h > 1) {
                const M = Math.floor(w / (h * S)),
                    L = w - S * h * M,
                    C = M === 0 ? h : Math.min(Math.ceil((P - M * S * h) / S), h);
                E = Math.floor(L / C), A = L - E * C + M * h, k = A + E * r / S, g.style.order = k
            } else z === "column" ? (A = Math.floor(w / S), E = w - A * S, (A > d || A === d && E === S - 1) && (E += 1, E >= S && (E = 0, A += 1))) : (E = Math.floor(w / a), A = w - E * a);
            g.row = E, g.column = A, g.style.height = `calc((100% - ${(S-1)*u}px) / ${S})`, g.style[e.getDirectionLabel("margin-top")] = E !== 0 ? u && `${u}px` : "", g.swiperSlideGridSet = !0
        },
        c = (w, g) => {
            const {
                centeredSlides: b,
                roundLengths: h
            } = e.params, u = n(), {
                rows: S
            } = e.params.grid;
            if (e.virtualSize = (w + u) * r, e.virtualSize = Math.ceil(e.virtualSize / S) - u, e.params.cssMode || (e.wrapperEl.style[e.getDirectionLabel("width")] = `${e.virtualSize+u}px`), b) {
                const z = [];
                for (let P = 0; P < g.length; P += 1) {
                    let k = g[P];
                    h && (k = Math.floor(k)), g[P] < e.virtualSize + g[0] && z.push(k)
                }
                g.splice(0, g.length), g.push(...z)
            }
        },
        m = () => {
            p = e.params.grid && e.params.grid.rows > 1
        },
        v = () => {
            const {
                params: w,
                el: g
            } = e, b = w.grid && w.grid.rows > 1;
            p && !b ? (g.classList.remove(`${w.containerModifierClass}grid`, `${w.containerModifierClass}grid-column`), d = 1, e.emitContainerClasses()) : !p && b && (g.classList.add(`${w.containerModifierClass}grid`), w.grid.fill === "column" && g.classList.add(`${w.containerModifierClass}grid-column`), e.emitContainerClasses()), p = b
        };
    s("init", m), s("update", v), e.grid = {
        initSlides: f,
        unsetSlides: l,
        updateSlide: o,
        updateWrapperSize: c
    }
}

function Gi(i) {
    const e = this,
        {
            params: t,
            slidesEl: s
        } = e;
    t.loop && e.loopDestroy();
    const r = a => {
        if (typeof a == "string") {
            const d = document.createElement("div");
            d.innerHTML = a, s.append(d.children[0]), d.innerHTML = ""
        } else s.append(a)
    };
    if (typeof i == "object" && "length" in i)
        for (let a = 0; a < i.length; a += 1) i[a] && r(i[a]);
    else r(i);
    e.recalcSlides(), t.loop && e.loopCreate(), (!t.observer || e.isElement) && e.update()
}

function Bi(i) {
    const e = this,
        {
            params: t,
            activeIndex: s,
            slidesEl: r
        } = e;
    t.loop && e.loopDestroy();
    let a = s + 1;
    const d = p => {
        if (typeof p == "string") {
            const n = document.createElement("div");
            n.innerHTML = p, r.prepend(n.children[0]), n.innerHTML = ""
        } else r.prepend(p)
    };
    if (typeof i == "object" && "length" in i) {
        for (let p = 0; p < i.length; p += 1) i[p] && d(i[p]);
        a = s + i.length
    } else d(i);
    e.recalcSlides(), t.loop && e.loopCreate(), (!t.observer || e.isElement) && e.update(), e.slideTo(a, 0, !1)
}

function _i(i, e) {
    const t = this,
        {
            params: s,
            activeIndex: r,
            slidesEl: a
        } = t;
    let d = r;
    s.loop && (d -= t.loopedSlides, t.loopDestroy(), t.recalcSlides());
    const p = t.slides.length;
    if (i <= 0) {
        t.prependSlide(e);
        return
    }
    if (i >= p) {
        t.appendSlide(e);
        return
    }
    let n = d > i ? d + 1 : d;
    const f = [];
    for (let l = p - 1; l >= i; l -= 1) {
        const o = t.slides[l];
        o.remove(), f.unshift(o)
    }
    if (typeof e == "object" && "length" in e) {
        for (let l = 0; l < e.length; l += 1) e[l] && a.append(e[l]);
        n = d > i ? d + e.length : d
    } else a.append(e);
    for (let l = 0; l < f.length; l += 1) a.append(f[l]);
    t.recalcSlides(), s.loop && t.loopCreate(), (!s.observer || t.isElement) && t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
}

function Ri(i) {
    const e = this,
        {
            params: t,
            activeIndex: s
        } = e;
    let r = s;
    t.loop && (r -= e.loopedSlides, e.loopDestroy());
    let a = r,
        d;
    if (typeof i == "object" && "length" in i) {
        for (let p = 0; p < i.length; p += 1) d = i[p], e.slides[d] && e.slides[d].remove(), d < a && (a -= 1);
        a = Math.max(a, 0)
    } else d = i, e.slides[d] && e.slides[d].remove(), d < a && (a -= 1), a = Math.max(a, 0);
    e.recalcSlides(), t.loop && e.loopCreate(), (!t.observer || e.isElement) && e.update(), t.loop ? e.slideTo(a + e.loopedSlides, 0, !1) : e.slideTo(a, 0, !1)
}

function Xi() {
    const i = this,
        e = [];
    for (let t = 0; t < i.slides.length; t += 1) e.push(t);
    i.removeSlide(e)
}

function Yi(i) {
    let {
        swiper: e
    } = i;
    Object.assign(e, {
        appendSlide: Gi.bind(e),
        prependSlide: Bi.bind(e),
        addSlide: _i.bind(e),
        removeSlide: Ri.bind(e),
        removeAllSlides: Xi.bind(e)
    })
}

function ae(i) {
    const {
        effect: e,
        swiper: t,
        on: s,
        setTranslate: r,
        setTransition: a,
        overwriteParams: d,
        perspective: p,
        recreateShadows: n,
        getEffectParams: f
    } = i;
    s("beforeInit", () => {
        if (t.params.effect !== e) return;
        t.classNames.push(`${t.params.containerModifierClass}${e}`), p && p() && t.classNames.push(`${t.params.containerModifierClass}3d`);
        const o = d ? d() : {};
        Object.assign(t.params, o), Object.assign(t.originalParams, o)
    }), s("setTranslate", () => {
        t.params.effect === e && r()
    }), s("setTransition", (o, c) => {
        t.params.effect === e && a(c)
    }), s("transitionEnd", () => {
        if (t.params.effect === e && n) {
            if (!f || !f().slideShadows) return;
            t.slides.forEach(o => {
                o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c => c.remove())
            }), n()
        }
    });
    let l;
    s("virtualUpdate", () => {
        t.params.effect === e && (t.slides.length || (l = !0), requestAnimationFrame(() => {
            l && t.slides && t.slides.length && (r(), l = !1)
        }))
    })
}

function fe(i, e) {
    const t = ie(e);
    return t !== e && (t.style.backfaceVisibility = "hidden", t.style["-webkit-backface-visibility"] = "hidden"), t
}

function be(i) {
    let {
        swiper: e,
        duration: t,
        transformElements: s,
        allSlides: r
    } = i;
    const {
        activeIndex: a
    } = e, d = p => p.parentElement ? p.parentElement : e.slides.filter(f => f.shadowRoot && f.shadowRoot === p.parentNode)[0];
    if (e.params.virtualTranslate && t !== 0) {
        let p = !1,
            n;
        r ? n = s : n = s.filter(f => {
            const l = f.classList.contains("swiper-slide-transform") ? d(f) : f;
            return e.getSlideIndex(l) === a
        }), n.forEach(f => {
            ce(f, () => {
                if (p || !e || e.destroyed) return;
                p = !0, e.animating = !1;
                const l = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0
                });
                e.wrapperEl.dispatchEvent(l)
            })
        })
    }
}

function Ni(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s
    } = i;
    t({
        fadeEffect: {
            crossFade: !1
        }
    }), ae({
        effect: "fade",
        swiper: e,
        on: s,
        setTranslate: () => {
            const {
                slides: d
            } = e, p = e.params.fadeEffect;
            for (let n = 0; n < d.length; n += 1) {
                const f = e.slides[n];
                let o = -f.swiperSlideOffset;
                e.params.virtualTranslate || (o -= e.translate);
                let c = 0;
                e.isHorizontal() || (c = o, o = 0);
                const m = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(f.progress), 0) : 1 + Math.min(Math.max(f.progress, -1), 0),
                    v = fe(p, f);
                v.style.opacity = m, v.style.transform = `translate3d(${o}px, ${c}px, 0px)`
            }
        },
        setTransition: d => {
            const p = e.slides.map(n => ie(n));
            p.forEach(n => {
                n.style.transitionDuration = `${d}ms`
            }), be({
                swiper: e,
                duration: d,
                transformElements: p,
                allSlides: !0
            })
        },
        overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode
        })
    })
}

function Vi(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s
    } = i;
    t({
        cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
        }
    });
    const r = (n, f, l) => {
        let o = l ? n.querySelector(".swiper-slide-shadow-left") : n.querySelector(".swiper-slide-shadow-top"),
            c = l ? n.querySelector(".swiper-slide-shadow-right") : n.querySelector(".swiper-slide-shadow-bottom");
        o || (o = W("div", `swiper-slide-shadow-cube swiper-slide-shadow-${l?"left":"top"}`.split(" ")), n.append(o)), c || (c = W("div", `swiper-slide-shadow-cube swiper-slide-shadow-${l?"right":"bottom"}`.split(" ")), n.append(c)), o && (o.style.opacity = Math.max(-f, 0)), c && (c.style.opacity = Math.max(f, 0))
    };
    ae({
        effect: "cube",
        swiper: e,
        on: s,
        setTranslate: () => {
            const {
                el: n,
                wrapperEl: f,
                slides: l,
                width: o,
                height: c,
                rtlTranslate: m,
                size: v,
                browser: w
            } = e, g = e.params.cubeEffect, b = e.isHorizontal(), h = e.virtual && e.params.virtual.enabled;
            let u = 0,
                S;
            g.shadow && (b ? (S = e.wrapperEl.querySelector(".swiper-cube-shadow"), S || (S = W("div", "swiper-cube-shadow"), e.wrapperEl.append(S)), S.style.height = `${o}px`) : (S = n.querySelector(".swiper-cube-shadow"), S || (S = W("div", "swiper-cube-shadow"), n.append(S))));
            for (let P = 0; P < l.length; P += 1) {
                const k = l[P];
                let A = P;
                h && (A = parseInt(k.getAttribute("data-swiper-slide-index"), 10));
                let E = A * 90,
                    M = Math.floor(E / 360);
                m && (E = -E, M = Math.floor(-E / 360));
                const L = Math.max(Math.min(k.progress, 1), -1);
                let C = 0,
                    T = 0,
                    y = 0;
                A % 4 === 0 ? (C = -M * 4 * v, y = 0) : (A - 1) % 4 === 0 ? (C = 0, y = -M * 4 * v) : (A - 2) % 4 === 0 ? (C = v + M * 4 * v, y = v) : (A - 3) % 4 === 0 && (C = -v, y = 3 * v + v * 4 * M), m && (C = -C), b || (T = C, C = 0);
                const x = `rotateX(${b?0:-E}deg) rotateY(${b?E:0}deg) translate3d(${C}px, ${T}px, ${y}px)`;
                L <= 1 && L > -1 && (u = A * 90 + L * 90, m && (u = -A * 90 - L * 90)), k.style.transform = x, g.slideShadows && r(k, L, b)
            }
            if (f.style.transformOrigin = `50% 50% -${v/2}px`, f.style["-webkit-transform-origin"] = `50% 50% -${v/2}px`, g.shadow)
                if (b) S.style.transform = `translate3d(0px, ${o/2+g.shadowOffset}px, ${-o/2}px) rotateX(90deg) rotateZ(0deg) scale(${g.shadowScale})`;
                else {
                    const P = Math.abs(u) - Math.floor(Math.abs(u) / 90) * 90,
                        k = 1.5 - (Math.sin(P * 2 * Math.PI / 360) / 2 + Math.cos(P * 2 * Math.PI / 360) / 2),
                        A = g.shadowScale,
                        E = g.shadowScale / k,
                        M = g.shadowOffset;
                    S.style.transform = `scale3d(${A}, 1, ${E}) translate3d(0px, ${c/2+M}px, ${-c/2/E}px) rotateX(-90deg)`
                }
            const z = (w.isSafari || w.isWebView) && w.needPerspectiveFix ? -v / 2 : 0;
            f.style.transform = `translate3d(0px,0,${z}px) rotateX(${e.isHorizontal()?0:u}deg) rotateY(${e.isHorizontal()?-u:0}deg)`, f.style.setProperty("--swiper-cube-translate-z", `${z}px`)
        },
        setTransition: n => {
            const {
                el: f,
                slides: l
            } = e;
            if (l.forEach(o => {
                    o.style.transitionDuration = `${n}ms`, o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c => {
                        c.style.transitionDuration = `${n}ms`
                    })
                }), e.params.cubeEffect.shadow && !e.isHorizontal()) {
                const o = f.querySelector(".swiper-cube-shadow");
                o && (o.style.transitionDuration = `${n}ms`)
            }
        },
        recreateShadows: () => {
            const n = e.isHorizontal();
            e.slides.forEach(f => {
                const l = Math.max(Math.min(f.progress, 1), -1);
                r(f, l, n)
            })
        },
        getEffectParams: () => e.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
        })
    })
}

function se(i, e, t) {
    const s = `swiper-slide-shadow${t?`-${t}`:""}${i?` swiper-slide-shadow-${i}`:""}`,
        r = ie(e);
    let a = r.querySelector(`.${s.split(" ").join(".")}`);
    return a || (a = W("div", s.split(" ")), r.append(a)), a
}

function Fi(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s
    } = i;
    t({
        flipEffect: {
            slideShadows: !0,
            limitRotation: !0
        }
    });
    const r = (n, f) => {
        let l = e.isHorizontal() ? n.querySelector(".swiper-slide-shadow-left") : n.querySelector(".swiper-slide-shadow-top"),
            o = e.isHorizontal() ? n.querySelector(".swiper-slide-shadow-right") : n.querySelector(".swiper-slide-shadow-bottom");
        l || (l = se("flip", n, e.isHorizontal() ? "left" : "top")), o || (o = se("flip", n, e.isHorizontal() ? "right" : "bottom")), l && (l.style.opacity = Math.max(-f, 0)), o && (o.style.opacity = Math.max(f, 0))
    };
    ae({
        effect: "flip",
        swiper: e,
        on: s,
        setTranslate: () => {
            const {
                slides: n,
                rtlTranslate: f
            } = e, l = e.params.flipEffect;
            for (let o = 0; o < n.length; o += 1) {
                const c = n[o];
                let m = c.progress;
                e.params.flipEffect.limitRotation && (m = Math.max(Math.min(c.progress, 1), -1));
                const v = c.swiperSlideOffset;
                let g = -180 * m,
                    b = 0,
                    h = e.params.cssMode ? -v - e.translate : -v,
                    u = 0;
                e.isHorizontal() ? f && (g = -g) : (u = h, h = 0, b = -g, g = 0), c.style.zIndex = -Math.abs(Math.round(m)) + n.length, l.slideShadows && r(c, m);
                const S = `translate3d(${h}px, ${u}px, 0px) rotateX(${b}deg) rotateY(${g}deg)`,
                    z = fe(l, c);
                z.style.transform = S
            }
        },
        setTransition: n => {
            const f = e.slides.map(l => ie(l));
            f.forEach(l => {
                l.style.transitionDuration = `${n}ms`, l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(o => {
                    o.style.transitionDuration = `${n}ms`
                })
            }), be({
                swiper: e,
                duration: n,
                transformElements: f
            })
        },
        recreateShadows: () => {
            e.params.flipEffect, e.slides.forEach(n => {
                let f = n.progress;
                e.params.flipEffect.limitRotation && (f = Math.max(Math.min(n.progress, 1), -1)), r(n, f)
            })
        },
        getEffectParams: () => e.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode
        })
    })
}

function Wi(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s
    } = i;
    t({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0
        }
    }), ae({
        effect: "coverflow",
        swiper: e,
        on: s,
        setTranslate: () => {
            const {
                width: d,
                height: p,
                slides: n,
                slidesSizesGrid: f
            } = e, l = e.params.coverflowEffect, o = e.isHorizontal(), c = e.translate, m = o ? -c + d / 2 : -c + p / 2, v = o ? l.rotate : -l.rotate, w = l.depth;
            for (let g = 0, b = n.length; g < b; g += 1) {
                const h = n[g],
                    u = f[g],
                    S = h.swiperSlideOffset,
                    z = (m - S - u / 2) / u,
                    P = typeof l.modifier == "function" ? l.modifier(z) : z * l.modifier;
                let k = o ? v * P : 0,
                    A = o ? 0 : v * P,
                    E = -w * Math.abs(P),
                    M = l.stretch;
                typeof M == "string" && M.indexOf("%") !== -1 && (M = parseFloat(l.stretch) / 100 * u);
                let L = o ? 0 : M * P,
                    C = o ? M * P : 0,
                    T = 1 - (1 - l.scale) * Math.abs(P);
                Math.abs(C) < .001 && (C = 0), Math.abs(L) < .001 && (L = 0), Math.abs(E) < .001 && (E = 0), Math.abs(k) < .001 && (k = 0), Math.abs(A) < .001 && (A = 0), Math.abs(T) < .001 && (T = 0);
                const y = `translate3d(${C}px,${L}px,${E}px)  rotateX(${A}deg) rotateY(${k}deg) scale(${T})`,
                    x = fe(l, h);
                if (x.style.transform = y, h.style.zIndex = -Math.abs(Math.round(P)) + 1, l.slideShadows) {
                    let D = o ? h.querySelector(".swiper-slide-shadow-left") : h.querySelector(".swiper-slide-shadow-top"),
                        O = o ? h.querySelector(".swiper-slide-shadow-right") : h.querySelector(".swiper-slide-shadow-bottom");
                    D || (D = se("coverflow", h, o ? "left" : "top")), O || (O = se("coverflow", h, o ? "right" : "bottom")), D && (D.style.opacity = P > 0 ? P : 0), O && (O.style.opacity = -P > 0 ? -P : 0)
                }
            }
        },
        setTransition: d => {
            e.slides.map(n => ie(n)).forEach(n => {
                n.style.transitionDuration = `${d}ms`, n.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f => {
                    f.style.transitionDuration = `${d}ms`
                })
            })
        },
        perspective: () => !0,
        overwriteParams: () => ({
            watchSlidesProgress: !0
        })
    })
}

function qi(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s
    } = i;
    t({
        creativeEffect: {
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1
            }
        }
    });
    const r = p => typeof p == "string" ? p : `${p}px`;
    ae({
        effect: "creative",
        swiper: e,
        on: s,
        setTranslate: () => {
            const {
                slides: p,
                wrapperEl: n,
                slidesSizesGrid: f
            } = e, l = e.params.creativeEffect, {
                progressMultiplier: o
            } = l, c = e.params.centeredSlides;
            if (c) {
                const m = f[0] / 2 - e.params.slidesOffsetBefore || 0;
                n.style.transform = `translateX(calc(50% - ${m}px))`
            }
            for (let m = 0; m < p.length; m += 1) {
                const v = p[m],
                    w = v.progress,
                    g = Math.min(Math.max(v.progress, -l.limitProgress), l.limitProgress);
                let b = g;
                c || (b = Math.min(Math.max(v.originalProgress, -l.limitProgress), l.limitProgress));
                const h = v.swiperSlideOffset,
                    u = [e.params.cssMode ? -h - e.translate : -h, 0, 0],
                    S = [0, 0, 0];
                let z = !1;
                e.isHorizontal() || (u[1] = u[0], u[0] = 0);
                let P = {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    scale: 1,
                    opacity: 1
                };
                g < 0 ? (P = l.next, z = !0) : g > 0 && (P = l.prev, z = !0), u.forEach((T, y) => {
                    u[y] = `calc(${T}px + (${r(P.translate[y])} * ${Math.abs(g*o)}))`
                }), S.forEach((T, y) => {
                    S[y] = P.rotate[y] * Math.abs(g * o)
                }), v.style.zIndex = -Math.abs(Math.round(w)) + p.length;
                const k = u.join(", "),
                    A = `rotateX(${S[0]}deg) rotateY(${S[1]}deg) rotateZ(${S[2]}deg)`,
                    E = b < 0 ? `scale(${1+(1-P.scale)*b*o})` : `scale(${1-(1-P.scale)*b*o})`,
                    M = b < 0 ? 1 + (1 - P.opacity) * b * o : 1 - (1 - P.opacity) * b * o,
                    L = `translate3d(${k}) ${A} ${E}`;
                if (z && P.shadow || !z) {
                    let T = v.querySelector(".swiper-slide-shadow");
                    if (!T && P.shadow && (T = se("creative", v)), T) {
                        const y = l.shadowPerProgress ? g * (1 / l.limitProgress) : g;
                        T.style.opacity = Math.min(Math.max(Math.abs(y), 0), 1)
                    }
                }
                const C = fe(l, v);
                C.style.transform = L, C.style.opacity = M, P.origin && (C.style.transformOrigin = P.origin)
            }
        },
        setTransition: p => {
            const n = e.slides.map(f => ie(f));
            n.forEach(f => {
                f.style.transitionDuration = `${p}ms`, f.querySelectorAll(".swiper-slide-shadow").forEach(l => {
                    l.style.transitionDuration = `${p}ms`
                })
            }), be({
                swiper: e,
                duration: p,
                transformElements: n,
                allSlides: !0
            })
        },
        perspective: () => e.params.creativeEffect.perspective,
        overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode
        })
    })
}

function ji(i) {
    let {
        swiper: e,
        extendParams: t,
        on: s
    } = i;
    t({
        cardsEffect: {
            slideShadows: !0,
            rotate: !0,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    }), ae({
        effect: "cards",
        swiper: e,
        on: s,
        setTranslate: () => {
            const {
                slides: d,
                activeIndex: p,
                rtlTranslate: n
            } = e, f = e.params.cardsEffect, {
                startTranslate: l,
                isTouched: o
            } = e.touchEventsData, c = n ? -e.translate : e.translate;
            for (let m = 0; m < d.length; m += 1) {
                const v = d[m],
                    w = v.progress,
                    g = Math.min(Math.max(w, -4), 4);
                let b = v.swiperSlideOffset;
                e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (b -= d[0].swiperSlideOffset);
                let h = e.params.cssMode ? -b - e.translate : -b,
                    u = 0;
                const S = -100 * Math.abs(g);
                let z = 1,
                    P = -f.perSlideRotate * g,
                    k = f.perSlideOffset - Math.abs(g) * .75;
                const A = e.virtual && e.params.virtual.enabled ? e.virtual.from + m : m,
                    E = (A === p || A === p - 1) && g > 0 && g < 1 && (o || e.params.cssMode) && c < l,
                    M = (A === p || A === p + 1) && g < 0 && g > -1 && (o || e.params.cssMode) && c > l;
                if (E || M) {
                    const y = (1 - Math.abs((Math.abs(g) - .5) / .5)) ** .5;
                    P += -28 * g * y, z += -.5 * y, k += 96 * y, u = `${-25*y*Math.abs(g)}%`
                }
                if (g < 0 ? h = `calc(${h}px ${n?"-":"+"} (${k*Math.abs(g)}%))` : g > 0 ? h = `calc(${h}px ${n?"-":"+"} (-${k*Math.abs(g)}%))` : h = `${h}px`, !e.isHorizontal()) {
                    const y = u;
                    u = h, h = y
                }
                const L = g < 0 ? `${1+(1-z)*g}` : `${1-(1-z)*g}`,
                    C = `
        translate3d(${h}, ${u}, ${S}px)
        rotateZ(${f.rotate?n?-P:P:0}deg)
        scale(${L})
      `;
                if (f.slideShadows) {
                    let y = v.querySelector(".swiper-slide-shadow");
                    y || (y = se("cards", v)), y && (y.style.opacity = Math.min(Math.max((Math.abs(g) - .5) / .5, 0), 1))
                }
                v.style.zIndex = -Math.abs(Math.round(w)) + d.length;
                const T = fe(f, v);
                T.style.transform = C
            }
        },
        setTransition: d => {
            const p = e.slides.map(n => ie(n));
            p.forEach(n => {
                n.style.transitionDuration = `${d}ms`, n.querySelectorAll(".swiper-slide-shadow").forEach(f => {
                    f.style.transitionDuration = `${d}ms`
                })
            }), be({
                swiper: e,
                duration: d,
                transformElements: p
            })
        },
        perspective: () => !0,
        overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode
        })
    })
}
const Ui = [Si, xi, Ei, Ti, Mi, Ci, Pi, Li, zi, Ii, Ai, $i, Oi, Di, ki, Hi, Yi, Ni, Vi, Fi, Wi, qi, ji];
V.use(Ui);
const ye = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

function re(i) {
    return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object" && !i.__swiper__
}

function ke(i, e) {
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e).filter(s => t.indexOf(s) < 0).forEach(s => {
        typeof i[s] > "u" ? i[s] = e[s] : re(e[s]) && re(i[s]) && Object.keys(e[s]).length > 0 ? e[s].__swiper__ ? i[s] = e[s] : ke(i[s], e[s]) : i[s] = e[s]
    })
}

function Ki(i) {
    return i === void 0 && (i = {}), i.navigation && typeof i.navigation.nextEl > "u" && typeof i.navigation.prevEl > "u"
}

function Zi(i) {
    return i === void 0 && (i = {}), i.pagination && typeof i.pagination.el > "u"
}

function Qi(i) {
    return i === void 0 && (i = {}), i.scrollbar && typeof i.scrollbar.el > "u"
}

function ge(i) {
    return i === void 0 && (i = ""), i.replace(/-[a-z]/g, e => e.toUpperCase().replace("-", ""))
}

function Ji(i) {
    let {
        swiper: e,
        slides: t,
        passedParams: s,
        changedParams: r,
        nextEl: a,
        prevEl: d,
        scrollbarEl: p,
        paginationEl: n
    } = i;
    const f = r.filter(E => E !== "children" && E !== "direction" && E !== "wrapperClass"),
        {
            params: l,
            pagination: o,
            navigation: c,
            scrollbar: m,
            virtual: v,
            thumbs: w
        } = e;
    let g, b, h, u, S, z, P, k;
    r.includes("thumbs") && s.thumbs && s.thumbs.swiper && l.thumbs && !l.thumbs.swiper && (g = !0), r.includes("controller") && s.controller && s.controller.control && l.controller && !l.controller.control && (b = !0), r.includes("pagination") && s.pagination && (s.pagination.el || n) && (l.pagination || l.pagination === !1) && o && !o.el && (h = !0), r.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || p) && (l.scrollbar || l.scrollbar === !1) && m && !m.el && (u = !0), r.includes("navigation") && s.navigation && (s.navigation.prevEl || d) && (s.navigation.nextEl || a) && (l.navigation || l.navigation === !1) && c && !c.prevEl && !c.nextEl && (S = !0);
    const A = E => {
        e[E] && (e[E].destroy(), E === "navigation" ? (e.isElement && (e[E].prevEl.remove(), e[E].nextEl.remove()), l[E].prevEl = void 0, l[E].nextEl = void 0, e[E].prevEl = void 0, e[E].nextEl = void 0) : (e.isElement && e[E].el.remove(), l[E].el = void 0, e[E].el = void 0))
    };
    r.includes("loop") && e.isElement && (l.loop && !s.loop ? z = !0 : !l.loop && s.loop ? P = !0 : k = !0), f.forEach(E => {
        if (re(l[E]) && re(s[E])) Object.assign(l[E], s[E]), (E === "navigation" || E === "pagination" || E === "scrollbar") && "enabled" in s[E] && !s[E].enabled && A(E);
        else {
            const M = s[E];
            (M === !0 || M === !1) && (E === "navigation" || E === "pagination" || E === "scrollbar") ? M === !1 && A(E): l[E] = s[E]
        }
    }), f.includes("controller") && !b && e.controller && e.controller.control && l.controller && l.controller.control && (e.controller.control = l.controller.control), r.includes("children") && t && v && l.virtual.enabled ? (v.slides = t, v.update(!0)) : r.includes("virtual") && v && l.virtual.enabled && (t && (v.slides = t), v.update(!0)), r.includes("children") && t && l.loop && (k = !0), g && w.init() && w.update(!0), b && (e.controller.control = l.controller.control), h && (e.isElement && (!n || typeof n == "string") && (n = document.createElement("div"), n.classList.add("swiper-pagination"), n.part.add("pagination"), e.el.appendChild(n)), n && (l.pagination.el = n), o.init(), o.render(), o.update()), u && (e.isElement && (!p || typeof p == "string") && (p = document.createElement("div"), p.classList.add("swiper-scrollbar"), p.part.add("scrollbar"), e.el.appendChild(p)), p && (l.scrollbar.el = p), m.init(), m.updateSize(), m.setTranslate()), S && (e.isElement && ((!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-button-next"), a.innerHTML = e.hostEl.constructor.nextButtonSvg, a.part.add("button-next"), e.el.appendChild(a)), (!d || typeof d == "string") && (d = document.createElement("div"), d.classList.add("swiper-button-prev"), d.innerHTML = e.hostEl.constructor.prevButtonSvg, d.part.add("button-prev"), e.el.appendChild(d))), a && (l.navigation.nextEl = a), d && (l.navigation.prevEl = d), c.init(), c.update()), r.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext), r.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev), r.includes("direction") && e.changeDirection(s.direction, !1), (z || k) && e.loopDestroy(), (P || k) && e.loopCreate(), e.update()
}
const We = i => {
        if (parseFloat(i) === Number(i)) return Number(i);
        if (i === "true" || i === "") return !0;
        if (i === "false") return !1;
        if (i === "null") return null;
        if (i !== "undefined") {
            if (typeof i == "string" && i.includes("{") && i.includes("}") && i.includes('"')) {
                let e;
                try {
                    e = JSON.parse(i)
                } catch {
                    e = i
                }
                return e
            }
            return i
        }
    },
    qe = ["a11y", "autoplay", "controller", "cards-effect", "coverflow-effect", "creative-effect", "cube-effect", "fade-effect", "flip-effect", "free-mode", "grid", "hash-navigation", "history", "keyboard", "mousewheel", "navigation", "pagination", "parallax", "scrollbar", "thumbs", "virtual", "zoom"];

function je(i, e, t) {
    const s = {},
        r = {};
    ke(s, De);
    const a = [...ye, "on"],
        d = a.map(n => n.replace(/_/, ""));
    a.forEach(n => {
        n = n.replace("_", ""), typeof i[n] < "u" && (r[n] = i[n])
    });
    const p = [...i.attributes];
    return typeof e == "string" && typeof t < "u" && p.push({
        name: e,
        value: re(t) ? { ...t
        } : t
    }), p.forEach(n => {
        const f = qe.filter(l => n.name.indexOf(`${l}-`) === 0)[0];
        if (f) {
            const l = ge(f),
                o = ge(n.name.split(`${f}-`)[1]);
            typeof r[l] > "u" && (r[l] = {}), r[l] === !0 && (r[l] = {
                enabled: !0
            }), r[l][o] = We(n.value)
        } else {
            const l = ge(n.name);
            if (!d.includes(l)) return;
            const o = We(n.value);
            r[l] && qe.includes(n.name) && !re(o) ? (r[l].constructor !== Object && (r[l] = {}), r[l].enabled = !!o) : r[l] = o
        }
    }), ke(s, r), s.navigation ? s.navigation = {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
        ...s.navigation !== !0 ? s.navigation : {}
    } : s.navigation === !1 && delete s.navigation, s.scrollbar ? s.scrollbar = {
        el: ".swiper-scrollbar",
        ...s.scrollbar !== !0 ? s.scrollbar : {}
    } : s.scrollbar === !1 && delete s.scrollbar, s.pagination ? s.pagination = {
        el: ".swiper-pagination",
        ...s.pagination !== !0 ? s.pagination : {}
    } : s.pagination === !1 && delete s.pagination, {
        params: s,
        passedParams: r
    }
}
const es = ":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}",
    ts = "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}";
class is {}
const tt = typeof window > "u" || typeof HTMLElement > "u" ? is : HTMLElement,
    Ue = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `,
    it = (i, e) => {
        if (typeof CSSStyleSheet < "u" && i.adoptedStyleSheets) {
            const t = new CSSStyleSheet;
            t.replaceSync(e), i.adoptedStyleSheets = [t]
        } else {
            const t = document.createElement("style");
            t.rel = "stylesheet", t.textContent = e, i.appendChild(t)
        }
    };
class st extends tt {
    constructor() {
        super(), this.attachShadow({
            mode: "open"
        })
    }
    static get nextButtonSvg() {
        return Ue
    }
    static get prevButtonSvg() {
        return Ue.replace("/></svg>", ' transform-origin="center" transform="rotate(180)"/></svg>')
    }
    cssStyles() {
        return [es, ...this.injectStyles && Array.isArray(this.injectStyles) ? this.injectStyles : []].join(`
`)
    }
    cssLinks() {
        return this.injectStylesUrls || []
    }
    calcSlideSlots() {
        const e = this.slideSlots || 0,
            t = [...this.querySelectorAll("[slot^=slide-]")].map(s => parseInt(s.getAttribute("slot").split("slide-")[1], 10));
        if (this.slideSlots = t.length ? Math.max(...t) + 1 : 0, !!this.rendered) {
            if (this.slideSlots > e)
                for (let s = e; s < this.slideSlots; s += 1) {
                    const r = document.createElement("swiper-slide");
                    r.setAttribute("part", `slide slide-${s+1}`);
                    const a = document.createElement("slot");
                    a.setAttribute("name", `slide-${s+1}`), r.appendChild(a), this.shadowRoot.querySelector(".swiper-wrapper").appendChild(r)
                } else if (this.slideSlots < e) {
                    const s = this.swiper.slides;
                    for (let r = s.length - 1; r >= 0; r -= 1) r > this.slideSlots && s[r].remove()
                }
        }
    }
    render() {
        if (this.rendered) return;
        this.calcSlideSlots();
        let e = this.cssStyles();
        this.slideSlots > 0 && (e = e.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1")), e.length && it(this.shadowRoot, e), this.cssLinks().forEach(s => {
            if (this.shadowRoot.querySelector(`link[href="${s}"]`)) return;
            const a = document.createElement("link");
            a.rel = "stylesheet", a.href = s, this.shadowRoot.appendChild(a)
        });
        const t = document.createElement("div");
        t.classList.add("swiper"), t.part = "container", t.innerHTML = `
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({length:this.slideSlots}).map((s,r)=>` <
            swiper - slide part = "slide slide-${r}" >
            <
            slot name = "slide-${r}" > < /slot> <
            /swiper-slide>
        `).join("")}
      </div>
      <slot name="container-end"></slot>
      ${Ki(this.passedParams)?`
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      `:""}
      ${Zi(this.passedParams)?`
        <div part="pagination" class="swiper-pagination"></div>
      `:""}
      ${Qi(this.passedParams)?`
        <div part="scrollbar" class="swiper-scrollbar"></div>
      `:""}
    `, this.shadowRoot.appendChild(t), this.rendered = !0
    }
    initialize() {
        var e = this;
        if (this.initialized) return;
        this.initialized = !0;
        const {
            params: t,
            passedParams: s
        } = je(this);
        this.swiperParams = t, this.passedParams = s, delete this.swiperParams.init, this.render(), this.swiper = new V(this.shadowRoot.querySelector(".swiper"), { ...t.virtual ? {} : {
                observer: !0,
                observeSlideChildren: this.slideSlots > 0
            },
            ...t,
            touchEventsTarget: "container",
            onAny: function(r) {
                r === "observerUpdate" && e.calcSlideSlots();
                const a = t.eventsPrefix ? `${t.eventsPrefix}${r.toLowerCase()}` : r.toLowerCase();
                for (var d = arguments.length, p = new Array(d > 1 ? d - 1 : 0), n = 1; n < d; n++) p[n - 1] = arguments[n];
                const f = new CustomEvent(a, {
                    detail: p,
                    bubbles: r !== "hashChange",
                    cancelable: !0
                });
                e.dispatchEvent(f)
            }
        })
    }
    connectedCallback() {
        this.initialized && this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM || this.init === !1 || this.getAttribute("init") === "false" || this.initialize()
    }
    disconnectedCallback() {
        this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM || (this.swiper && this.swiper.destroy && this.swiper.destroy(), this.initialized = !1)
    }
    updateSwiperOnPropChange(e, t) {
        const {
            params: s,
            passedParams: r
        } = je(this, e, t);
        this.passedParams = r, this.swiperParams = s, !(this.swiper && this.swiper.params[e] === t) && Ji({
            swiper: this.swiper,
            passedParams: this.passedParams,
            changedParams: [ge(e)],
            ...e === "navigation" && r[e] ? {
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next"
            } : {},
            ...e === "pagination" && r[e] ? {
                paginationEl: ".swiper-pagination"
            } : {},
            ...e === "scrollbar" && r[e] ? {
                scrollbarEl: ".swiper-scrollbar"
            } : {}
        })
    }
    attributeChangedCallback(e, t, s) {
        this.initialized && (t === "true" && s === null && (s = !1), this.updateSwiperOnPropChange(e, s))
    }
    static get observedAttributes() {
        return ye.filter(t => t.includes("_")).map(t => t.replace(/[A-Z]/g, s => `-${s}`).replace("_", "").toLowerCase())
    }
}
ye.forEach(i => {
    i !== "init" && (i = i.replace("_", ""), Object.defineProperty(st.prototype, i, {
        configurable: !0,
        get() {
            return (this.passedParams || {})[i]
        },
        set(e) {
            this.passedParams || (this.passedParams = {}), this.passedParams[i] = e, this.initialized && this.updateSwiperOnPropChange(i, e)
        }
    }))
});
class ss extends tt {
    constructor() {
        super(), this.attachShadow({
            mode: "open"
        })
    }
    render() {
        const e = this.lazy || this.getAttribute("lazy") === "" || this.getAttribute("lazy") === "true";
        if (it(this.shadowRoot, ts), this.shadowRoot.appendChild(document.createElement("slot")), e) {
            const t = document.createElement("div");
            t.classList.add("swiper-lazy-preloader"), t.part.add("preloader"), this.shadowRoot.appendChild(t)
        }
    }
    initialize() {
        this.render()
    }
    connectedCallback() {
        this.initialize()
    }
}
const rs = () => {
    typeof window > "u" || (window.customElements.get("swiper-container") || window.customElements.define("swiper-container", st), window.customElements.get("swiper-slide") || window.customElements.define("swiper-slide", ss))
};
typeof window < "u" && (window.SwiperElementRegisterParams = i => {
    ye.push(...i)
});
export {
    Oi as A, rs as r
};