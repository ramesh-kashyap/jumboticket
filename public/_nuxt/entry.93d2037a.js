function Ui(e, t) {
    const n = Object.create(null),
        r = e.split(",");
    for (let s = 0; s < r.length; s++) n[r[s]] = !0;
    return t ? s => !!n[s.toLowerCase()] : s => !!n[s]
}
const $e = {},
    er = [],
    wt = () => {},
    Tg = () => !1,
    Ag = /^on[^a-z]/,
    is = e => Ag.test(e),
    Wi = e => e.startsWith("onUpdate:"),
    De = Object.assign,
    Ki = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    Cg = Object.prototype.hasOwnProperty,
    _e = (e, t) => Cg.call(e, t),
    ie = Array.isArray,
    tr = e => Er(e) === "[object Map]",
    vr = e => Er(e) === "[object Set]",
    Cc = e => Er(e) === "[object Date]",
    Sg = e => Er(e) === "[object RegExp]",
    ue = e => typeof e == "function",
    Le = e => typeof e == "string",
    or = e => typeof e == "symbol",
    Ae = e => e !== null && typeof e == "object",
    pu = e => (Ae(e) || ue(e)) && ue(e.then) && ue(e.catch),
    mu = Object.prototype.toString,
    Er = e => mu.call(e),
    Og = e => Er(e).slice(8, -1),
    gu = e => Er(e) === "[object Object]",
    Yi = e => Le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    jr = Ui(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    co = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    },
    $g = /-(\w)/g,
    Pt = co(e => e.replace($g, (t, n) => n ? n.toUpperCase() : "")),
    Rg = /\B([A-Z])/g,
    br = co(e => e.replace(Rg, "-$1").toLowerCase()),
    lo = co(e => e.charAt(0).toUpperCase() + e.slice(1)),
    Yo = co(e => e ? `on${lo(e)}` : ""),
    xn = (e, t) => !Object.is(e, t),
    nr = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t)
    },
    Ys = (e, t, n) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: n
        })
    },
    qs = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    _u = e => {
        const t = Le(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let Sc;
const ci = () => Sc || (Sc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function uo(e) {
    if (ie(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n],
                s = Le(r) ? xg(r) : uo(r);
            if (s)
                for (const o in s) t[o] = s[o]
        }
        return t
    } else if (Le(e) || Ae(e)) return e
}
const Ng = /;(?![^(]*\))/g,
    Pg = /:([^]+)/,
    Lg = /\/\*[^]*?\*\//g;

function xg(e) {
    const t = {};
    return e.replace(Lg, "").split(Ng).forEach(n => {
        if (n) {
            const r = n.split(Pg);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }), t
}

function fo(e) {
    let t = "";
    if (Le(e)) t = e;
    else if (ie(e))
        for (let n = 0; n < e.length; n++) {
            const r = fo(e[n]);
            r && (t += r + " ")
        } else if (Ae(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

function Ig(e) {
    if (!e) return null;
    let {
        class: t,
        style: n
    } = e;
    return t && !Le(t) && (e.class = fo(t)), n && (e.style = uo(n)), e
}
const Dg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    kg = Ui(Dg);

function yu(e) {
    return !!e || e === ""
}

function Mg(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++) n = In(e[r], t[r]);
    return n
}

function In(e, t) {
    if (e === t) return !0;
    let n = Cc(e),
        r = Cc(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
    if (n = or(e), r = or(t), n || r) return e === t;
    if (n = ie(e), r = ie(t), n || r) return n && r ? Mg(e, t) : !1;
    if (n = Ae(e), r = Ae(t), n || r) {
        if (!n || !r) return !1;
        const s = Object.keys(e).length,
            o = Object.keys(t).length;
        if (s !== o) return !1;
        for (const a in e) {
            const c = e.hasOwnProperty(a),
                l = t.hasOwnProperty(a);
            if (c && !l || !c && l || !In(e[a], t[a])) return !1
        }
    }
    return String(e) === String(t)
}

function qi(e, t) {
    return e.findIndex(n => In(n, t))
}
const eC = e => Le(e) ? e : e == null ? "" : ie(e) || Ae(e) && (e.toString === mu || !ue(e.toString)) ? JSON.stringify(e, vu, 2) : String(e),
    vu = (e, t) => t && t.__v_isRef ? vu(e, t.value) : tr(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s]) => (n[`${r} =>`] = s, n), {})
    } : vr(t) ? {
        [`Set(${t.size})`]: [...t.values()]
    } : Ae(t) && !ie(t) && !gu(t) ? String(t) : t;
let rt;
class Eu {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = rt, !t && rt && (this.index = (rt.scopes || (rt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = rt;
            try {
                return rt = this, t()
            } finally {
                rt = n
            }
        }
    }
    on() {
        rt = this
    }
    off() {
        rt = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
            for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
            if (this.scopes)
                for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function zi(e) {
    return new Eu(e)
}

function Hg(e, t = rt) {
    t && t.active && t.effects.push(e)
}

function Gi() {
    return rt
}

function bu(e) {
    rt && rt.cleanups.push(e)
}
const Qi = e => {
        const t = new Set(e);
        return t.w = 0, t.n = 0, t
    },
    wu = e => (e.w & cn) > 0,
    Tu = e => (e.n & cn) > 0,
    jg = ({
        deps: e
    }) => {
        if (e.length)
            for (let t = 0; t < e.length; t++) e[t].w |= cn
    },
    Fg = e => {
        const {
            deps: t
        } = e;
        if (t.length) {
            let n = 0;
            for (let r = 0; r < t.length; r++) {
                const s = t[r];
                wu(s) && !Tu(s) ? s.delete(e) : t[n++] = s, s.w &= ~cn, s.n &= ~cn
            }
            t.length = n
        }
    },
    zs = new WeakMap;
let kr = 0,
    cn = 1;
const li = 30;
let Et;
const $n = Symbol(""),
    ui = Symbol("");
class Xi {
    constructor(t, n = null, r) {
        this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Hg(this, r)
    }
    run() {
        if (!this.active) return this.fn();
        let t = Et,
            n = rn;
        for (; t;) {
            if (t === this) return;
            t = t.parent
        }
        try {
            return this.parent = Et, Et = this, rn = !0, cn = 1 << ++kr, kr <= li ? jg(this) : Oc(this), this.fn()
        } finally {
            kr <= li && Fg(this), cn = 1 << --kr, Et = this.parent, rn = n, this.parent = void 0, this.deferStop && this.stop()
        }
    }
    stop() {
        Et === this ? this.deferStop = !0 : this.active && (Oc(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function Oc(e) {
    const {
        deps: t
    } = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0
    }
}
let rn = !0;
const Au = [];

function wr() {
    Au.push(rn), rn = !1
}

function Tr() {
    const e = Au.pop();
    rn = e === void 0 ? !0 : e
}

function Xe(e, t, n) {
    if (rn && Et) {
        let r = zs.get(e);
        r || zs.set(e, r = new Map);
        let s = r.get(n);
        s || r.set(n, s = Qi()), Cu(s)
    }
}

function Cu(e, t) {
    let n = !1;
    kr <= li ? Tu(e) || (e.n |= cn, n = !wu(e)) : n = !e.has(Et), n && (e.add(Et), Et.deps.push(e))
}

function Ft(e, t, n, r, s, o) {
    const a = zs.get(e);
    if (!a) return;
    let c = [];
    if (t === "clear") c = [...a.values()];
    else if (n === "length" && ie(e)) {
        const l = Number(r);
        a.forEach((f, u) => {
            (u === "length" || !or(u) && u >= l) && c.push(f)
        })
    } else switch (n !== void 0 && c.push(a.get(n)), t) {
        case "add":
            ie(e) ? Yi(n) && c.push(a.get("length")) : (c.push(a.get($n)), tr(e) && c.push(a.get(ui)));
            break;
        case "delete":
            ie(e) || (c.push(a.get($n)), tr(e) && c.push(a.get(ui)));
            break;
        case "set":
            tr(e) && c.push(a.get($n));
            break
    }
    if (c.length === 1) c[0] && fi(c[0]);
    else {
        const l = [];
        for (const f of c) f && l.push(...f);
        fi(Qi(l))
    }
}

function fi(e, t) {
    const n = ie(e) ? e : [...e];
    for (const r of n) r.computed && $c(r);
    for (const r of n) r.computed || $c(r)
}

function $c(e, t) {
    (e !== Et || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}

function Bg(e, t) {
    var n;
    return (n = zs.get(e)) == null ? void 0 : n.get(t)
}
const Vg = Ui("__proto__,__v_isRef,__isVue"),
    Su = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(or)),
    Rc = Ug();

function Ug() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...n) {
            const r = me(this);
            for (let o = 0, a = this.length; o < a; o++) Xe(r, "get", o + "");
            const s = r[t](...n);
            return s === -1 || s === !1 ? r[t](...n.map(me)) : s
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...n) {
            wr();
            const r = me(this)[t].apply(this, n);
            return Tr(), r
        }
    }), e
}

function Wg(e) {
    const t = me(this);
    return Xe(t, "has", e), t.hasOwnProperty(e)
}
class Ou {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._shallow = n
    }
    get(t, n, r) {
        const s = this._isReadonly,
            o = this._shallow;
        if (n === "__v_isReactive") return !s;
        if (n === "__v_isReadonly") return s;
        if (n === "__v_isShallow") return o;
        if (n === "__v_raw" && r === (s ? o ? r_ : Pu : o ? Nu : Ru).get(t)) return t;
        const a = ie(t);
        if (!s) {
            if (a && _e(Rc, n)) return Reflect.get(Rc, n, r);
            if (n === "hasOwnProperty") return Wg
        }
        const c = Reflect.get(t, n, r);
        return (or(n) ? Su.has(n) : Vg(n)) || (s || Xe(t, "get", n), o) ? c : xe(c) ? a && Yi(n) ? c : c.value : Ae(c) ? s ? Lu(c) : Tt(c) : c
    }
}
class $u extends Ou {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, n, r, s) {
        let o = t[n];
        if (Dn(o) && xe(o) && !xe(r)) return !1;
        if (!this._shallow && (!Gs(r) && !Dn(r) && (o = me(o), r = me(r)), !ie(t) && xe(o) && !xe(r))) return o.value = r, !0;
        const a = ie(t) && Yi(n) ? Number(n) < t.length : _e(t, n),
            c = Reflect.set(t, n, r, s);
        return t === me(s) && (a ? xn(r, o) && Ft(t, "set", n, r) : Ft(t, "add", n, r)), c
    }
    deleteProperty(t, n) {
        const r = _e(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return s && r && Ft(t, "delete", n, void 0), s
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!or(n) || !Su.has(n)) && Xe(t, "has", n), r
    }
    ownKeys(t) {
        return Xe(t, "iterate", ie(t) ? "length" : $n), Reflect.ownKeys(t)
    }
}
class Kg extends Ou {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Yg = new $u,
    qg = new Kg,
    zg = new $u(!0),
    Ji = e => e,
    ho = e => Reflect.getPrototypeOf(e);

function Os(e, t, n = !1, r = !1) {
    e = e.__v_raw;
    const s = me(e),
        o = me(t);
    n || (xn(t, o) && Xe(s, "get", t), Xe(s, "get", o));
    const {
        has: a
    } = ho(s), c = r ? Ji : n ? ta : Qr;
    if (a.call(s, t)) return c(e.get(t));
    if (a.call(s, o)) return c(e.get(o));
    e !== s && e.get(t)
}

function $s(e, t = !1) {
    const n = this.__v_raw,
        r = me(n),
        s = me(e);
    return t || (xn(e, s) && Xe(r, "has", e), Xe(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s)
}

function Rs(e, t = !1) {
    return e = e.__v_raw, !t && Xe(me(e), "iterate", $n), Reflect.get(e, "size", e)
}

function Nc(e) {
    e = me(e);
    const t = me(this);
    return ho(t).has.call(t, e) || (t.add(e), Ft(t, "add", e, e)), this
}

function Pc(e, t) {
    t = me(t);
    const n = me(this),
        {
            has: r,
            get: s
        } = ho(n);
    let o = r.call(n, e);
    o || (e = me(e), o = r.call(n, e));
    const a = s.call(n, e);
    return n.set(e, t), o ? xn(t, a) && Ft(n, "set", e, t) : Ft(n, "add", e, t), this
}

function Lc(e) {
    const t = me(this),
        {
            has: n,
            get: r
        } = ho(t);
    let s = n.call(t, e);
    s || (e = me(e), s = n.call(t, e)), r && r.call(t, e);
    const o = t.delete(e);
    return s && Ft(t, "delete", e, void 0), o
}

function xc() {
    const e = me(this),
        t = e.size !== 0,
        n = e.clear();
    return t && Ft(e, "clear", void 0, void 0), n
}

function Ns(e, t) {
    return function(r, s) {
        const o = this,
            a = o.__v_raw,
            c = me(a),
            l = t ? Ji : e ? ta : Qr;
        return !e && Xe(c, "iterate", $n), a.forEach((f, u) => r.call(s, l(f), l(u), o))
    }
}

function Ps(e, t, n) {
    return function(...r) {
        const s = this.__v_raw,
            o = me(s),
            a = tr(o),
            c = e === "entries" || e === Symbol.iterator && a,
            l = e === "keys" && a,
            f = s[e](...r),
            u = n ? Ji : t ? ta : Qr;
        return !t && Xe(o, "iterate", l ? ui : $n), {
            next() {
                const {
                    value: h,
                    done: p
                } = f.next();
                return p ? {
                    value: h,
                    done: p
                } : {
                    value: c ? [u(h[0]), u(h[1])] : u(h),
                    done: p
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function zt(e) {
    return function(...t) {
        return e === "delete" ? !1 : this
    }
}

function Gg() {
    const e = {
            get(o) {
                return Os(this, o)
            },
            get size() {
                return Rs(this)
            },
            has: $s,
            add: Nc,
            set: Pc,
            delete: Lc,
            clear: xc,
            forEach: Ns(!1, !1)
        },
        t = {
            get(o) {
                return Os(this, o, !1, !0)
            },
            get size() {
                return Rs(this)
            },
            has: $s,
            add: Nc,
            set: Pc,
            delete: Lc,
            clear: xc,
            forEach: Ns(!1, !0)
        },
        n = {
            get(o) {
                return Os(this, o, !0)
            },
            get size() {
                return Rs(this, !0)
            },
            has(o) {
                return $s.call(this, o, !0)
            },
            add: zt("add"),
            set: zt("set"),
            delete: zt("delete"),
            clear: zt("clear"),
            forEach: Ns(!0, !1)
        },
        r = {
            get(o) {
                return Os(this, o, !0, !0)
            },
            get size() {
                return Rs(this, !0)
            },
            has(o) {
                return $s.call(this, o, !0)
            },
            add: zt("add"),
            set: zt("set"),
            delete: zt("delete"),
            clear: zt("clear"),
            forEach: Ns(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
        e[o] = Ps(o, !1, !1), n[o] = Ps(o, !0, !1), t[o] = Ps(o, !1, !0), r[o] = Ps(o, !0, !0)
    }), [e, n, t, r]
}
const [Qg, Xg, Jg, Zg] = Gg();

function Zi(e, t) {
    const n = t ? e ? Zg : Jg : e ? Xg : Qg;
    return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(_e(n, s) && s in r ? n : r, s, o)
}
const e_ = {
        get: Zi(!1, !1)
    },
    t_ = {
        get: Zi(!1, !0)
    },
    n_ = {
        get: Zi(!0, !1)
    },
    Ru = new WeakMap,
    Nu = new WeakMap,
    Pu = new WeakMap,
    r_ = new WeakMap;

function s_(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function o_(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : s_(Og(e))
}

function Tt(e) {
    return Dn(e) ? e : ea(e, !1, Yg, e_, Ru)
}

function as(e) {
    return ea(e, !1, zg, t_, Nu)
}

function Lu(e) {
    return ea(e, !0, qg, n_, Pu)
}

function ea(e, t, n, r, s) {
    if (!Ae(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const o = s.get(e);
    if (o) return o;
    const a = o_(e);
    if (a === 0) return e;
    const c = new Proxy(e, a === 2 ? r : n);
    return s.set(e, c), c
}

function sn(e) {
    return Dn(e) ? sn(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Dn(e) {
    return !!(e && e.__v_isReadonly)
}

function Gs(e) {
    return !!(e && e.__v_isShallow)
}

function xu(e) {
    return sn(e) || Dn(e)
}

function me(e) {
    const t = e && e.__v_raw;
    return t ? me(t) : e
}

function po(e) {
    return Ys(e, "__v_skip", !0), e
}
const Qr = e => Ae(e) ? Tt(e) : e,
    ta = e => Ae(e) ? Lu(e) : e;

function Iu(e) {
    rn && Et && (e = me(e), Cu(e.dep || (e.dep = Qi())))
}

function Du(e, t) {
    e = me(e);
    const n = e.dep;
    n && fi(n)
}

function xe(e) {
    return !!(e && e.__v_isRef === !0)
}

function Pe(e) {
    return ku(e, !1)
}

function Xr(e) {
    return ku(e, !0)
}

function ku(e, t) {
    return xe(e) ? e : new i_(e, t)
}
class i_ {
    constructor(t, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : me(t), this._value = n ? t : Qr(t)
    }
    get value() {
        return Iu(this), this._value
    }
    set value(t) {
        const n = this.__v_isShallow || Gs(t) || Dn(t);
        t = n ? t : me(t), xn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Qr(t), Du(this))
    }
}

function Re(e) {
    return xe(e) ? e.value : e
}
const a_ = {
    get: (e, t, n) => Re(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const s = e[t];
        return xe(s) && !xe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
    }
};

function Mu(e) {
    return sn(e) ? e : new Proxy(e, a_)
}

function c_(e) {
    const t = ie(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = Hu(e, n);
    return t
}
class l_ {
    constructor(t, n, r) {
        this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Bg(me(this._object), this._key)
    }
}
class u_ {
    constructor(t) {
        this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}

function f_(e, t, n) {
    return xe(e) ? e : ue(e) ? new u_(e) : Ae(e) && arguments.length > 1 ? Hu(e, t, n) : Pe(e)
}

function Hu(e, t, n) {
    const r = e[t];
    return xe(r) ? r : new l_(e, t, n)
}
class d_ {
    constructor(t, n, r, s) {
        this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Xi(t, () => {
            this._dirty || (this._dirty = !0, Du(this))
        }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r
    }
    get value() {
        const t = me(this);
        return Iu(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
    }
    set value(t) {
        this._setter(t)
    }
}

function h_(e, t, n = !1) {
    let r, s;
    const o = ue(e);
    return o ? (r = e, s = wt) : (r = e.get, s = e.set), new d_(r, s, o || !s, n)
}

function on(e, t, n, r) {
    let s;
    try {
        s = r ? e(...r) : e()
    } catch (o) {
        Ar(o, t, n)
    }
    return s
}

function mt(e, t, n, r) {
    if (ue(e)) {
        const o = on(e, t, n, r);
        return o && pu(o) && o.catch(a => {
            Ar(a, t, n)
        }), o
    }
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(mt(e[o], t, n, r));
    return s
}

function Ar(e, t, n, r = !0) {
    const s = t ? t.vnode : null;
    if (t) {
        let o = t.parent;
        const a = t.proxy,
            c = n;
        for (; o;) {
            const f = o.ec;
            if (f) {
                for (let u = 0; u < f.length; u++)
                    if (f[u](e, a, c) === !1) return
            }
            o = o.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            on(l, null, 10, [e, a, c]);
            return
        }
    }
    p_(e, n, s, r)
}

function p_(e, t, n, r = !0) {
    console.error(e)
}
let Jr = !1,
    di = !1;
const Be = [];
let $t = 0;
const rr = [];
let Mt = null,
    An = 0;
const ju = Promise.resolve();
let na = null;

function xt(e) {
    const t = na || ju;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function m_(e) {
    let t = $t + 1,
        n = Be.length;
    for (; t < n;) {
        const r = t + n >>> 1,
            s = Be[r],
            o = Zr(s);
        o < e || o === e && s.pre ? t = r + 1 : n = r
    }
    return t
}

function mo(e) {
    (!Be.length || !Be.includes(e, Jr && e.allowRecurse ? $t + 1 : $t)) && (e.id == null ? Be.push(e) : Be.splice(m_(e.id), 0, e), Fu())
}

function Fu() {
    !Jr && !di && (di = !0, na = ju.then(Bu))
}

function g_(e) {
    const t = Be.indexOf(e);
    t > $t && Be.splice(t, 1)
}

function hi(e) {
    ie(e) ? rr.push(...e) : (!Mt || !Mt.includes(e, e.allowRecurse ? An + 1 : An)) && rr.push(e), Fu()
}

function Ic(e, t = Jr ? $t + 1 : 0) {
    for (; t < Be.length; t++) {
        const n = Be[t];
        n && n.pre && (Be.splice(t, 1), t--, n())
    }
}

function Qs(e) {
    if (rr.length) {
        const t = [...new Set(rr)];
        if (rr.length = 0, Mt) {
            Mt.push(...t);
            return
        }
        for (Mt = t, Mt.sort((n, r) => Zr(n) - Zr(r)), An = 0; An < Mt.length; An++) Mt[An]();
        Mt = null, An = 0
    }
}
const Zr = e => e.id == null ? 1 / 0 : e.id,
    __ = (e, t) => {
        const n = Zr(e) - Zr(t);
        if (n === 0) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1
        }
        return n
    };

function Bu(e) {
    di = !1, Jr = !0, Be.sort(__);
    const t = wt;
    try {
        for ($t = 0; $t < Be.length; $t++) {
            const n = Be[$t];
            n && n.active !== !1 && on(n, null, 14)
        }
    } finally {
        $t = 0, Be.length = 0, Qs(), Jr = !1, na = null, (Be.length || rr.length) && Bu()
    }
}

function y_(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || $e;
    let s = n;
    const o = t.startsWith("update:"),
        a = o && t.slice(7);
    if (a && a in r) {
        const u = `${a==="modelValue"?"model":a}Modifiers`,
            {
                number: h,
                trim: p
            } = r[u] || $e;
        p && (s = n.map(m => Le(m) ? m.trim() : m)), h && (s = n.map(qs))
    }
    let c, l = r[c = Yo(t)] || r[c = Yo(Pt(t))];
    !l && o && (l = r[c = Yo(br(t))]), l && mt(l, e, 6, s);
    const f = r[c + "Once"];
    if (f) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[c]) return;
        e.emitted[c] = !0, mt(f, e, 6, s)
    }
}

function Vu(e, t, n = !1) {
    const r = t.emitsCache,
        s = r.get(e);
    if (s !== void 0) return s;
    const o = e.emits;
    let a = {},
        c = !1;
    if (!ue(e)) {
        const l = f => {
            const u = Vu(f, t, !0);
            u && (c = !0, De(a, u))
        };
        !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    return !o && !c ? (Ae(e) && r.set(e, null), null) : (ie(o) ? o.forEach(l => a[l] = null) : De(a, o), Ae(e) && r.set(e, a), a)
}

function go(e, t) {
    return !e || !is(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, br(t)) || _e(e, t))
}
let Me = null,
    _o = null;

function Xs(e) {
    const t = Me;
    return Me = e, _o = e && e.type.__scopeId || null, t
}

function tC(e) {
    _o = e
}

function nC() {
    _o = null
}

function ra(e, t = Me, n) {
    if (!t || e._n) return e;
    const r = (...s) => {
        r._d && zc(-1);
        const o = Xs(t);
        let a;
        try {
            a = e(...s)
        } finally {
            Xs(o), r._d && zc(1)
        }
        return a
    };
    return r._n = !0, r._c = !0, r._d = !0, r
}

function qo(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: s,
        props: o,
        propsOptions: [a],
        slots: c,
        attrs: l,
        emit: f,
        render: u,
        renderCache: h,
        data: p,
        setupState: m,
        ctx: T,
        inheritAttrs: w
    } = e;
    let N, $;
    const A = Xs(e);
    try {
        if (n.shapeFlag & 4) {
            const g = s || r;
            N = ht(u.call(g, g, h, o, m, p, T)), $ = l
        } else {
            const g = t;
            N = ht(g.length > 1 ? g(o, {
                attrs: l,
                slots: c,
                emit: f
            }) : g(o, null)), $ = t.props ? l : E_(l)
        }
    } catch (g) {
        Vr.length = 0, Ar(g, e, 1), N = Ne(We)
    }
    let b = N;
    if ($ && w !== !1) {
        const g = Object.keys($),
            {
                shapeFlag: S
            } = b;
        g.length && S & 7 && (a && g.some(Wi) && ($ = b_($, a)), b = Bt(b, $))
    }
    return n.dirs && (b = Bt(b), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && (b.transition = n.transition), N = b, Xs(A), N
}

function v_(e) {
    let t;
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        if (cr(r)) {
            if (r.type !== We || r.children === "v-if") {
                if (t) return;
                t = r
            }
        } else return
    }
    return t
}
const E_ = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || is(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    b_ = (e, t) => {
        const n = {};
        for (const r in e)(!Wi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
        return n
    };

function w_(e, t, n) {
    const {
        props: r,
        children: s,
        component: o
    } = e, {
        props: a,
        children: c,
        patchFlag: l
    } = t, f = o.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return r ? Dc(r, a, f) : !!a;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let h = 0; h < u.length; h++) {
                const p = u[h];
                if (a[p] !== r[p] && !go(f, p)) return !0
            }
        }
    } else return (s || c) && (!c || !c.$stable) ? !0 : r === a ? !1 : r ? a ? Dc(r, a, f) : !0 : !!a;
    return !1
}

function Dc(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < r.length; s++) {
        const o = r[s];
        if (t[o] !== e[o] && !go(n, o)) return !0
    }
    return !1
}

function sa({
    vnode: e,
    parent: t
}, n) {
    for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent
}
const Uu = e => e.__isSuspense,
    T_ = {
        name: "Suspense",
        __isSuspense: !0,
        process(e, t, n, r, s, o, a, c, l, f) {
            e == null ? A_(t, n, r, s, o, a, c, l, f) : C_(e, t, n, r, s, a, c, l, f)
        },
        hydrate: S_,
        create: ia,
        normalize: O_
    },
    oa = T_;

function es(e, t) {
    const n = e.props && e.props[t];
    ue(n) && n()
}

function A_(e, t, n, r, s, o, a, c, l) {
    const {
        p: f,
        o: {
            createElement: u
        }
    } = l, h = u("div"), p = e.suspense = ia(e, s, r, t, h, n, o, a, c, l);
    f(null, p.pendingBranch = e.ssContent, h, null, r, p, o, a), p.deps > 0 ? (es(e, "onPending"), es(e, "onFallback"), f(null, e.ssFallback, t, n, r, null, o, a), sr(p, e.ssFallback)) : p.resolve(!1, !0)
}

function C_(e, t, n, r, s, o, a, c, {
    p: l,
    um: f,
    o: {
        createElement: u
    }
}) {
    const h = t.suspense = e.suspense;
    h.vnode = t, t.el = e.el;
    const p = t.ssContent,
        m = t.ssFallback,
        {
            activeBranch: T,
            pendingBranch: w,
            isInFallback: N,
            isHydrating: $
        } = h;
    if (w) h.pendingBranch = p, bt(p, w) ? (l(w, p, h.hiddenContainer, null, s, h, o, a, c), h.deps <= 0 ? h.resolve() : N && (l(T, m, n, r, s, null, o, a, c), sr(h, m))) : (h.pendingId++, $ ? (h.isHydrating = !1, h.activeBranch = w) : f(w, s, h), h.deps = 0, h.effects.length = 0, h.hiddenContainer = u("div"), N ? (l(null, p, h.hiddenContainer, null, s, h, o, a, c), h.deps <= 0 ? h.resolve() : (l(T, m, n, r, s, null, o, a, c), sr(h, m))) : T && bt(p, T) ? (l(T, p, n, r, s, h, o, a, c), h.resolve(!0)) : (l(null, p, h.hiddenContainer, null, s, h, o, a, c), h.deps <= 0 && h.resolve()));
    else if (T && bt(p, T)) l(T, p, n, r, s, h, o, a, c), sr(h, p);
    else if (es(t, "onPending"), h.pendingBranch = p, h.pendingId++, l(null, p, h.hiddenContainer, null, s, h, o, a, c), h.deps <= 0) h.resolve();
    else {
        const {
            timeout: A,
            pendingId: b
        } = h;
        A > 0 ? setTimeout(() => {
            h.pendingId === b && h.fallback(m)
        }, A) : A === 0 && h.fallback(m)
    }
}

function ia(e, t, n, r, s, o, a, c, l, f, u = !1) {
    const {
        p: h,
        m: p,
        um: m,
        n: T,
        o: {
            parentNode: w,
            remove: N
        }
    } = f;
    let $;
    const A = $_(e);
    A && t != null && t.pendingBranch && ($ = t.pendingId, t.deps++);
    const b = e.props ? _u(e.props.timeout) : void 0,
        g = {
            vnode: e,
            parent: t,
            parentComponent: n,
            isSVG: a,
            container: r,
            hiddenContainer: s,
            anchor: o,
            deps: 0,
            pendingId: 0,
            timeout: typeof b == "number" ? b : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !0,
            isHydrating: u,
            isUnmounted: !1,
            effects: [],
            resolve(S = !1, H = !1) {
                const {
                    vnode: U,
                    activeBranch: x,
                    pendingBranch: D,
                    pendingId: L,
                    effects: F,
                    parentComponent: K,
                    container: te
                } = g;
                let J = !1;
                if (g.isHydrating) g.isHydrating = !1;
                else if (!S) {
                    J = x && D.transition && D.transition.mode === "out-in", J && (x.transition.afterLeave = () => {
                        L === g.pendingId && (p(D, te, B, 0), hi(F))
                    });
                    let {
                        anchor: B
                    } = g;
                    x && (B = T(x), m(x, K, g, !0)), J || p(D, te, B, 0)
                }
                sr(g, D), g.pendingBranch = null, g.isInFallback = !1;
                let W = g.parent,
                    O = !1;
                for (; W;) {
                    if (W.pendingBranch) {
                        W.effects.push(...F), O = !0;
                        break
                    }
                    W = W.parent
                }!O && !J && hi(F), g.effects = [], A && t && t.pendingBranch && $ === t.pendingId && (t.deps--, t.deps === 0 && !H && t.resolve()), es(U, "onResolve")
            },
            fallback(S) {
                if (!g.pendingBranch) return;
                const {
                    vnode: H,
                    activeBranch: U,
                    parentComponent: x,
                    container: D,
                    isSVG: L
                } = g;
                es(H, "onFallback");
                const F = T(U),
                    K = () => {
                        g.isInFallback && (h(null, S, D, F, x, null, L, c, l), sr(g, S))
                    },
                    te = S.transition && S.transition.mode === "out-in";
                te && (U.transition.afterLeave = K), g.isInFallback = !0, m(U, x, null, !0), te || K()
            },
            move(S, H, U) {
                g.activeBranch && p(g.activeBranch, S, H, U), g.container = S
            },
            next() {
                return g.activeBranch && T(g.activeBranch)
            },
            registerDep(S, H) {
                const U = !!g.pendingBranch;
                U && g.deps++;
                const x = S.vnode.el;
                S.asyncDep.catch(D => {
                    Ar(D, S, 0)
                }).then(D => {
                    if (S.isUnmounted || g.isUnmounted || g.pendingId !== S.suspenseId) return;
                    S.asyncResolved = !0;
                    const {
                        vnode: L
                    } = S;
                    vi(S, D, !1), x && (L.el = x);
                    const F = !x && S.subTree.el;
                    H(S, L, w(x || S.subTree.el), x ? null : T(S.subTree), g, a, l), F && N(F), sa(S, L.el), U && --g.deps === 0 && g.resolve()
                })
            },
            unmount(S, H) {
                g.isUnmounted = !0, g.activeBranch && m(g.activeBranch, n, S, H), g.pendingBranch && m(g.pendingBranch, n, S, H)
            }
        };
    return g
}

function S_(e, t, n, r, s, o, a, c, l) {
    const f = t.suspense = ia(t, r, n, e.parentNode, document.createElement("div"), null, s, o, a, c, !0),
        u = l(e, f.pendingBranch = t.ssContent, n, f, o, a);
    return f.deps === 0 && f.resolve(!1, !0), u
}

function O_(e) {
    const {
        shapeFlag: t,
        children: n
    } = e, r = t & 32;
    e.ssContent = kc(r ? n.default : n), e.ssFallback = r ? kc(n.fallback) : Ne(We)
}

function kc(e) {
    let t;
    if (ue(e)) {
        const n = ar && e._c;
        n && (e._d = !1, Rt()), e = e(), n && (e._d = !0, t = pt, mf())
    }
    return ie(e) && (e = v_(e)), e = ht(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)), e
}

function Wu(e, t) {
    t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : hi(e)
}

function sr(e, t) {
    e.activeBranch = t;
    const {
        vnode: n,
        parentComponent: r
    } = e, s = n.el = t.el;
    r && r.subTree === n && (r.vnode.el = s, sa(r, s))
}

function $_(e) {
    var t;
    return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1
}

function R_(e, t) {
    return aa(e, null, t)
}
const Ls = {};

function an(e, t, n) {
    return aa(e, t, n)
}

function aa(e, t, {
    immediate: n,
    deep: r,
    flush: s,
    onTrack: o,
    onTrigger: a
} = $e) {
    var c;
    const l = Gi() === ((c = Ie) == null ? void 0 : c.scope) ? Ie : null;
    let f, u = !1,
        h = !1;
    if (xe(e) ? (f = () => e.value, u = Gs(e)) : sn(e) ? (f = () => e, r = !0) : ie(e) ? (h = !0, u = e.some(g => sn(g) || Gs(g)), f = () => e.map(g => {
            if (xe(g)) return g.value;
            if (sn(g)) return Sn(g);
            if (ue(g)) return on(g, l, 2)
        })) : ue(e) ? t ? f = () => on(e, l, 2) : f = () => {
            if (!(l && l.isUnmounted)) return p && p(), mt(e, l, 3, [m])
        } : f = wt, t && r) {
        const g = f;
        f = () => Sn(g())
    }
    let p, m = g => {
            p = A.onStop = () => {
                on(g, l, 4)
            }
        },
        T;
    if (ur)
        if (m = wt, t ? n && mt(t, l, 3, [f(), h ? [] : void 0, m]) : f(), s === "sync") {
            const g = _y();
            T = g.__watcherHandles || (g.__watcherHandles = [])
        } else return wt;
    let w = h ? new Array(e.length).fill(Ls) : Ls;
    const N = () => {
        if (A.active)
            if (t) {
                const g = A.run();
                (r || u || (h ? g.some((S, H) => xn(S, w[H])) : xn(g, w))) && (p && p(), mt(t, l, 3, [g, w === Ls ? void 0 : h && w[0] === Ls ? [] : w, m]), w = g)
            } else A.run()
    };
    N.allowRecurse = !!t;
    let $;
    s === "sync" ? $ = N : s === "post" ? $ = () => je(N, l && l.suspense) : (N.pre = !0, l && (N.id = l.uid), $ = () => mo(N));
    const A = new Xi(f, $);
    t ? n ? N() : w = A.run() : s === "post" ? je(A.run.bind(A), l && l.suspense) : A.run();
    const b = () => {
        A.stop(), l && l.scope && Ki(l.scope.effects, A)
    };
    return T && T.push(b), b
}

function N_(e, t, n) {
    const r = this.proxy,
        s = Le(e) ? e.includes(".") ? Ku(r, e) : () => r[e] : e.bind(r, r);
    let o;
    ue(t) ? o = t : (o = t.handler, n = t);
    const a = Ie;
    lr(this);
    const c = aa(s, o.bind(r), n);
    return a ? lr(a) : Pn(), c
}

function Ku(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let s = 0; s < n.length && r; s++) r = r[n[s]];
        return r
    }
}

function Sn(e, t) {
    if (!Ae(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
    if (t.add(e), xe(e)) Sn(e.value, t);
    else if (ie(e))
        for (let n = 0; n < e.length; n++) Sn(e[n], t);
    else if (vr(e) || tr(e)) e.forEach(n => {
        Sn(n, t)
    });
    else if (gu(e))
        for (const n in e) Sn(e[n], t);
    return e
}

function rC(e, t) {
    const n = Me;
    if (n === null) return e;
    const r = wo(n) || n.proxy,
        s = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
        let [a, c, l, f = $e] = t[o];
        a && (ue(a) && (a = {
            mounted: a,
            updated: a
        }), a.deep && Sn(c), s.push({
            dir: a,
            instance: r,
            value: c,
            oldValue: void 0,
            arg: l,
            modifiers: f
        }))
    }
    return e
}

function Ot(e, t, n, r) {
    const s = e.dirs,
        o = t && t.dirs;
    for (let a = 0; a < s.length; a++) {
        const c = s[a];
        o && (c.oldValue = o[a].value);
        let l = c.dir[r];
        l && (wr(), mt(l, n, 8, [e.el, c, e, t]), Tr())
    }
}
const en = Symbol("_leaveCb"),
    xs = Symbol("_enterCb");

function P_() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return ca(() => {
        e.isMounted = !0
    }), vo(() => {
        e.isUnmounting = !0
    }), e
}
const dt = [Function, Array],
    Yu = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: dt,
        onEnter: dt,
        onAfterEnter: dt,
        onEnterCancelled: dt,
        onBeforeLeave: dt,
        onLeave: dt,
        onAfterLeave: dt,
        onLeaveCancelled: dt,
        onBeforeAppear: dt,
        onAppear: dt,
        onAfterAppear: dt,
        onAppearCancelled: dt
    },
    L_ = {
        name: "BaseTransition",
        props: Yu,
        setup(e, {
            slots: t
        }) {
            const n = bo(),
                r = P_();
            let s;
            return () => {
                const o = t.default && zu(t.default(), !0);
                if (!o || !o.length) return;
                let a = o[0];
                if (o.length > 1) {
                    for (const w of o)
                        if (w.type !== We) {
                            a = w;
                            break
                        }
                }
                const c = me(e),
                    {
                        mode: l
                    } = c;
                if (r.isLeaving) return zo(a);
                const f = Mc(a);
                if (!f) return zo(a);
                const u = pi(f, c, r, n);
                Js(f, u);
                const h = n.subTree,
                    p = h && Mc(h);
                let m = !1;
                const {
                    getTransitionKey: T
                } = f.type;
                if (T) {
                    const w = T();
                    s === void 0 ? s = w : w !== s && (s = w, m = !0)
                }
                if (p && p.type !== We && (!bt(f, p) || m)) {
                    const w = pi(p, c, r, n);
                    if (Js(p, w), l === "out-in") return r.isLeaving = !0, w.afterLeave = () => {
                        r.isLeaving = !1, n.update.active !== !1 && n.update()
                    }, zo(a);
                    l === "in-out" && f.type !== We && (w.delayLeave = (N, $, A) => {
                        const b = qu(r, p);
                        b[String(p.key)] = p, N[en] = () => {
                            $(), N[en] = void 0, delete u.delayedLeave
                        }, u.delayedLeave = A
                    })
                }
                return a
            }
        }
    },
    x_ = L_;

function qu(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null), n.set(t.type, r)), r
}

function pi(e, t, n, r) {
    const {
        appear: s,
        mode: o,
        persisted: a = !1,
        onBeforeEnter: c,
        onEnter: l,
        onAfterEnter: f,
        onEnterCancelled: u,
        onBeforeLeave: h,
        onLeave: p,
        onAfterLeave: m,
        onLeaveCancelled: T,
        onBeforeAppear: w,
        onAppear: N,
        onAfterAppear: $,
        onAppearCancelled: A
    } = t, b = String(e.key), g = qu(n, e), S = (x, D) => {
        x && mt(x, r, 9, D)
    }, H = (x, D) => {
        const L = D[1];
        S(x, D), ie(x) ? x.every(F => F.length <= 1) && L() : x.length <= 1 && L()
    }, U = {
        mode: o,
        persisted: a,
        beforeEnter(x) {
            let D = c;
            if (!n.isMounted)
                if (s) D = w || c;
                else return;
            x[en] && x[en](!0);
            const L = g[b];
            L && bt(e, L) && L.el[en] && L.el[en](), S(D, [x])
        },
        enter(x) {
            let D = l,
                L = f,
                F = u;
            if (!n.isMounted)
                if (s) D = N || l, L = $ || f, F = A || u;
                else return;
            let K = !1;
            const te = x[xs] = J => {
                K || (K = !0, J ? S(F, [x]) : S(L, [x]), U.delayedLeave && U.delayedLeave(), x[xs] = void 0)
            };
            D ? H(D, [x, te]) : te()
        },
        leave(x, D) {
            const L = String(e.key);
            if (x[xs] && x[xs](!0), n.isUnmounting) return D();
            S(h, [x]);
            let F = !1;
            const K = x[en] = te => {
                F || (F = !0, D(), te ? S(T, [x]) : S(m, [x]), x[en] = void 0, g[L] === e && delete g[L])
            };
            g[L] = e, p ? H(p, [x, K]) : K()
        },
        clone(x) {
            return pi(x, t, n, r)
        }
    };
    return U
}

function zo(e) {
    if (cs(e)) return e = Bt(e), e.children = null, e
}

function Mc(e) {
    return cs(e) ? e.children ? e.children[0] : void 0 : e
}

function Js(e, t) {
    e.shapeFlag & 6 && e.component ? Js(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function zu(e, t = !1, n) {
    let r = [],
        s = 0;
    for (let o = 0; o < e.length; o++) {
        let a = e[o];
        const c = n == null ? a.key : String(n) + String(a.key != null ? a.key : o);
        a.type === Qe ? (a.patchFlag & 128 && s++, r = r.concat(zu(a.children, t, c))) : (t || a.type !== We) && r.push(c != null ? Bt(a, {
            key: c
        }) : a)
    }
    if (s > 1)
        for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
    return r
} /*! #__NO_SIDE_EFFECTS__ */
function Ut(e, t) {
    return ue(e) ? (() => De({
        name: e.name
    }, t, {
        setup: e
    }))() : e
}
const Rn = e => !!e.type.__asyncLoader; /*! #__NO_SIDE_EFFECTS__ */
function Hc(e) {
    ue(e) && (e = {
        loader: e
    });
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: r,
        delay: s = 200,
        timeout: o,
        suspensible: a = !0,
        onError: c
    } = e;
    let l = null,
        f, u = 0;
    const h = () => (u++, l = null, p()),
        p = () => {
            let m;
            return l || (m = l = t().catch(T => {
                if (T = T instanceof Error ? T : new Error(String(T)), c) return new Promise((w, N) => {
                    c(T, () => w(h()), () => N(T), u + 1)
                });
                throw T
            }).then(T => m !== l && l ? l : (T && (T.__esModule || T[Symbol.toStringTag] === "Module") && (T = T.default), f = T, T)))
        };
    return Ut({
        name: "AsyncComponentWrapper",
        __asyncLoader: p,
        get __asyncResolved() {
            return f
        },
        setup() {
            const m = Ie;
            if (f) return () => Go(f, m);
            const T = A => {
                l = null, Ar(A, m, 13, !r)
            };
            if (a && m.suspense || ur) return p().then(A => () => Go(A, m)).catch(A => (T(A), () => r ? Ne(r, {
                error: A
            }) : null));
            const w = Pe(!1),
                N = Pe(),
                $ = Pe(!!s);
            return s && setTimeout(() => {
                $.value = !1
            }, s), o != null && setTimeout(() => {
                if (!w.value && !N.value) {
                    const A = new Error(`Async component timed out after ${o}ms.`);
                    T(A), N.value = A
                }
            }, o), p().then(() => {
                w.value = !0, m.parent && cs(m.parent.vnode) && mo(m.parent.update)
            }).catch(A => {
                T(A), N.value = A
            }), () => {
                if (w.value && f) return Go(f, m);
                if (N.value && r) return Ne(r, {
                    error: N.value
                });
                if (n && !$.value) return Ne(n)
            }
        }
    })
}

function Go(e, t) {
    const {
        ref: n,
        props: r,
        children: s,
        ce: o
    } = t.vnode, a = Ne(e, r, s);
    return a.ref = n, a.ce = o, delete t.vnode.ce, a
}
const cs = e => e.type.__isKeepAlive,
    I_ = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, {
            slots: t
        }) {
            const n = bo(),
                r = n.ctx;
            if (!r.renderer) return () => {
                const A = t.default && t.default();
                return A && A.length === 1 ? A[0] : A
            };
            const s = new Map,
                o = new Set;
            let a = null;
            const c = n.suspense,
                {
                    renderer: {
                        p: l,
                        m: f,
                        um: u,
                        o: {
                            createElement: h
                        }
                    }
                } = r,
                p = h("div");
            r.activate = (A, b, g, S, H) => {
                const U = A.component;
                f(A, b, g, 0, c), l(U.vnode, A, b, g, U, c, S, A.slotScopeIds, H), je(() => {
                    U.isDeactivated = !1, U.a && nr(U.a);
                    const x = A.props && A.props.onVnodeMounted;
                    x && Ge(x, U.parent, A)
                }, c)
            }, r.deactivate = A => {
                const b = A.component;
                f(A, p, null, 1, c), je(() => {
                    b.da && nr(b.da);
                    const g = A.props && A.props.onVnodeUnmounted;
                    g && Ge(g, b.parent, A), b.isDeactivated = !0
                }, c)
            };

            function m(A) {
                Qo(A), u(A, n, c, !0)
            }

            function T(A) {
                s.forEach((b, g) => {
                    const S = Ei(b.type);
                    S && (!A || !A(S)) && w(g)
                })
            }

            function w(A) {
                const b = s.get(A);
                !a || !bt(b, a) ? m(b) : a && Qo(a), s.delete(A), o.delete(A)
            }
            an(() => [e.include, e.exclude], ([A, b]) => {
                A && T(g => Mr(A, g)), b && T(g => !Mr(b, g))
            }, {
                flush: "post",
                deep: !0
            });
            let N = null;
            const $ = () => {
                N != null && s.set(N, Xo(n.subTree))
            };
            return ca($), Ju($), vo(() => {
                s.forEach(A => {
                    const {
                        subTree: b,
                        suspense: g
                    } = n, S = Xo(b);
                    if (A.type === S.type && A.key === S.key) {
                        Qo(S);
                        const H = S.component.da;
                        H && je(H, g);
                        return
                    }
                    m(A)
                })
            }), () => {
                if (N = null, !t.default) return null;
                const A = t.default(),
                    b = A[0];
                if (A.length > 1) return a = null, A;
                if (!cr(b) || !(b.shapeFlag & 4) && !(b.shapeFlag & 128)) return a = null, b;
                let g = Xo(b);
                const S = g.type,
                    H = Ei(Rn(g) ? g.type.__asyncResolved || {} : S),
                    {
                        include: U,
                        exclude: x,
                        max: D
                    } = e;
                if (U && (!H || !Mr(U, H)) || x && H && Mr(x, H)) return a = g, b;
                const L = g.key == null ? S : g.key,
                    F = s.get(L);
                return g.el && (g = Bt(g), b.shapeFlag & 128 && (b.ssContent = g)), N = L, F ? (g.el = F.el, g.component = F.component, g.transition && Js(g, g.transition), g.shapeFlag |= 512, o.delete(L), o.add(L)) : (o.add(L), D && o.size > parseInt(D, 10) && w(o.values().next().value)), g.shapeFlag |= 256, a = g, Uu(b.type) ? b : g
            }
        }
    },
    D_ = I_;

function Mr(e, t) {
    return ie(e) ? e.some(n => Mr(n, t)) : Le(e) ? e.split(",").includes(t) : Sg(e) ? e.test(t) : !1
}

function Gu(e, t) {
    Xu(e, "a", t)
}

function Qu(e, t) {
    Xu(e, "da", t)
}

function Xu(e, t, n = Ie) {
    const r = e.__wdc || (e.__wdc = () => {
        let s = n;
        for (; s;) {
            if (s.isDeactivated) return;
            s = s.parent
        }
        return e()
    });
    if (yo(t, r, n), n) {
        let s = n.parent;
        for (; s && s.parent;) cs(s.parent.vnode) && k_(r, t, n, s), s = s.parent
    }
}

function k_(e, t, n, r) {
    const s = yo(t, e, r, !0);
    Zu(() => {
        Ki(r[t], s)
    }, n)
}

function Qo(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function Xo(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}

function yo(e, t, n = Ie, r = !1) {
    if (n) {
        const s = n[e] || (n[e] = []),
            o = t.__weh || (t.__weh = (...a) => {
                if (n.isUnmounted) return;
                wr(), lr(n);
                const c = mt(t, n, e, a);
                return Pn(), Tr(), c
            });
        return r ? s.unshift(o) : s.push(o), o
    }
}
const Wt = e => (t, n = Ie) => (!ur || e === "sp") && yo(e, (...r) => t(...r), n),
    M_ = Wt("bm"),
    ca = Wt("m"),
    H_ = Wt("bu"),
    Ju = Wt("u"),
    vo = Wt("bum"),
    Zu = Wt("um"),
    j_ = Wt("sp"),
    F_ = Wt("rtg"),
    B_ = Wt("rtc");

function ef(e, t = Ie) {
    yo("ec", e, t)
}
const la = "components";

function sC(e, t) {
    return nf(la, e, !0, t) || e
}
const tf = Symbol.for("v-ndc");

function V_(e) {
    return Le(e) ? nf(la, e, !1) || e : e || tf
}

function nf(e, t, n = !0, r = !1) {
    const s = Me || Ie;
    if (s) {
        const o = s.type;
        if (e === la) {
            const c = Ei(o, !1);
            if (c && (c === t || c === Pt(t) || c === lo(Pt(t)))) return o
        }
        const a = jc(s[e] || o[e], t) || jc(s.appContext[e], t);
        return !a && r ? o : a
    }
}

function jc(e, t) {
    return e && (e[t] || e[Pt(t)] || e[lo(Pt(t))])
}

function oC(e, t, n, r) {
    let s;
    const o = n && n[r];
    if (ie(e) || Le(e)) {
        s = new Array(e.length);
        for (let a = 0, c = e.length; a < c; a++) s[a] = t(e[a], a, void 0, o && o[a])
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, o && o[a])
    } else if (Ae(e))
        if (e[Symbol.iterator]) s = Array.from(e, (a, c) => t(a, c, void 0, o && o[c]));
        else {
            const a = Object.keys(e);
            s = new Array(a.length);
            for (let c = 0, l = a.length; c < l; c++) {
                const f = a[c];
                s[c] = t(e[f], f, c, o && o[c])
            }
        }
    else s = [];
    return n && (n[r] = s), s
}

function iC(e, t) {
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (ie(r))
            for (let s = 0; s < r.length; s++) e[r[s].name] = r[s].fn;
        else r && (e[r.name] = r.key ? (...s) => {
            const o = r.fn(...s);
            return o && (o.key = r.key), o
        } : r.fn)
    }
    return e
}

function aC(e, t, n = {}, r, s) {
    if (Me.isCE || Me.parent && Rn(Me.parent) && Me.parent.isCE) return t !== "default" && (n.name = t), Ne("slot", n, r && r());
    let o = e[t];
    o && o._c && (o._d = !1), Rt();
    const a = o && rf(o(n)),
        c = Ht(Qe, {
            key: n.key || a && a.key || `_${t}`
        }, a || (r ? r() : []), a && e._ === 1 ? 64 : -2);
    return !s && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), o && o._c && (o._d = !0), c
}

function rf(e) {
    return e.some(t => cr(t) ? !(t.type === We || t.type === Qe && !rf(t.children)) : !0) ? e : null
}
const mi = e => e ? wf(e) ? wo(e) || e.proxy : mi(e.parent) : null,
    Fr = De(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => mi(e.parent),
        $root: e => mi(e.root),
        $emit: e => e.emit,
        $options: e => ua(e),
        $forceUpdate: e => e.f || (e.f = () => mo(e.update)),
        $nextTick: e => e.n || (e.n = xt.bind(e.proxy)),
        $watch: e => N_.bind(e)
    }),
    Jo = (e, t) => e !== $e && !e.__isScriptSetup && _e(e, t),
    U_ = {
        get({
            _: e
        }, t) {
            const {
                ctx: n,
                setupState: r,
                data: s,
                props: o,
                accessCache: a,
                type: c,
                appContext: l
            } = e;
            let f;
            if (t[0] !== "$") {
                const m = a[t];
                if (m !== void 0) switch (m) {
                    case 1:
                        return r[t];
                    case 2:
                        return s[t];
                    case 4:
                        return n[t];
                    case 3:
                        return o[t]
                } else {
                    if (Jo(r, t)) return a[t] = 1, r[t];
                    if (s !== $e && _e(s, t)) return a[t] = 2, s[t];
                    if ((f = e.propsOptions[0]) && _e(f, t)) return a[t] = 3, o[t];
                    if (n !== $e && _e(n, t)) return a[t] = 4, n[t];
                    gi && (a[t] = 0)
                }
            }
            const u = Fr[t];
            let h, p;
            if (u) return t === "$attrs" && Xe(e, "get", t), u(e);
            if ((h = c.__cssModules) && (h = h[t])) return h;
            if (n !== $e && _e(n, t)) return a[t] = 4, n[t];
            if (p = l.config.globalProperties, _e(p, t)) return p[t]
        },
        set({
            _: e
        }, t, n) {
            const {
                data: r,
                setupState: s,
                ctx: o
            } = e;
            return Jo(s, t) ? (s[t] = n, !0) : r !== $e && _e(r, t) ? (r[t] = n, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: r,
                appContext: s,
                propsOptions: o
            }
        }, a) {
            let c;
            return !!n[a] || e !== $e && _e(e, a) || Jo(t, a) || (c = o[0]) && _e(c, a) || _e(r, a) || _e(Fr, a) || _e(s.config.globalProperties, a)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : _e(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };

function Fc(e) {
    return ie(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}
let gi = !0;

function W_(e) {
    const t = ua(e),
        n = e.proxy,
        r = e.ctx;
    gi = !1, t.beforeCreate && Bc(t.beforeCreate, e, "bc");
    const {
        data: s,
        computed: o,
        methods: a,
        watch: c,
        provide: l,
        inject: f,
        created: u,
        beforeMount: h,
        mounted: p,
        beforeUpdate: m,
        updated: T,
        activated: w,
        deactivated: N,
        beforeDestroy: $,
        beforeUnmount: A,
        destroyed: b,
        unmounted: g,
        render: S,
        renderTracked: H,
        renderTriggered: U,
        errorCaptured: x,
        serverPrefetch: D,
        expose: L,
        inheritAttrs: F,
        components: K,
        directives: te,
        filters: J
    } = t;
    if (f && K_(f, r, null), a)
        for (const B in a) {
            const k = a[B];
            ue(k) && (r[B] = k.bind(n))
        }
    if (s) {
        const B = s.call(n, n);
        Ae(B) && (e.data = Tt(B))
    }
    if (gi = !0, o)
        for (const B in o) {
            const k = o[B],
                re = ue(k) ? k.bind(n, n) : ue(k.get) ? k.get.bind(n, n) : wt,
                ce = !ue(k) && ue(k.set) ? k.set.bind(n) : wt,
                de = st({
                    get: re,
                    set: ce
                });
            Object.defineProperty(r, B, {
                enumerable: !0,
                configurable: !0,
                get: () => de.value,
                set: fe => de.value = fe
            })
        }
    if (c)
        for (const B in c) sf(c[B], r, n, B);
    if (l) {
        const B = ue(l) ? l.call(n) : l;
        Reflect.ownKeys(B).forEach(k => {
            Nn(k, B[k])
        })
    }
    u && Bc(u, e, "c");

    function O(B, k) {
        ie(k) ? k.forEach(re => B(re.bind(n))) : k && B(k.bind(n))
    }
    if (O(M_, h), O(ca, p), O(H_, m), O(Ju, T), O(Gu, w), O(Qu, N), O(ef, x), O(B_, H), O(F_, U), O(vo, A), O(Zu, g), O(j_, D), ie(L))
        if (L.length) {
            const B = e.exposed || (e.exposed = {});
            L.forEach(k => {
                Object.defineProperty(B, k, {
                    get: () => n[k],
                    set: re => n[k] = re
                })
            })
        } else e.exposed || (e.exposed = {});
    S && e.render === wt && (e.render = S), F != null && (e.inheritAttrs = F), K && (e.components = K), te && (e.directives = te)
}

function K_(e, t, n = wt) {
    ie(e) && (e = _i(e));
    for (const r in e) {
        const s = e[r];
        let o;
        Ae(s) ? "default" in s ? o = Ve(s.from || r, s.default, !0) : o = Ve(s.from || r) : o = Ve(s), xe(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: a => o.value = a
        }) : t[r] = o
    }
}

function Bc(e, t, n) {
    mt(ie(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function sf(e, t, n, r) {
    const s = r.includes(".") ? Ku(n, r) : () => n[r];
    if (Le(e)) {
        const o = t[e];
        ue(o) && an(s, o)
    } else if (ue(e)) an(s, e.bind(n));
    else if (Ae(e))
        if (ie(e)) e.forEach(o => sf(o, t, n, r));
        else {
            const o = ue(e.handler) ? e.handler.bind(n) : t[e.handler];
            ue(o) && an(s, o, e)
        }
}

function ua(e) {
    const t = e.type,
        {
            mixins: n,
            extends: r
        } = t,
        {
            mixins: s,
            optionsCache: o,
            config: {
                optionMergeStrategies: a
            }
        } = e.appContext,
        c = o.get(t);
    let l;
    return c ? l = c : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach(f => Zs(l, f, a, !0)), Zs(l, t, a)), Ae(t) && o.set(t, l), l
}

function Zs(e, t, n, r = !1) {
    const {
        mixins: s,
        extends: o
    } = t;
    o && Zs(e, o, n, !0), s && s.forEach(a => Zs(e, a, n, !0));
    for (const a in t)
        if (!(r && a === "expose")) {
            const c = Y_[a] || n && n[a];
            e[a] = c ? c(e[a], t[a]) : t[a]
        }
    return e
}
const Y_ = {
    data: Vc,
    props: Uc,
    emits: Uc,
    methods: Hr,
    computed: Hr,
    beforeCreate: Ue,
    created: Ue,
    beforeMount: Ue,
    mounted: Ue,
    beforeUpdate: Ue,
    updated: Ue,
    beforeDestroy: Ue,
    beforeUnmount: Ue,
    destroyed: Ue,
    unmounted: Ue,
    activated: Ue,
    deactivated: Ue,
    errorCaptured: Ue,
    serverPrefetch: Ue,
    components: Hr,
    directives: Hr,
    watch: z_,
    provide: Vc,
    inject: q_
};

function Vc(e, t) {
    return t ? e ? function() {
        return De(ue(e) ? e.call(this, this) : e, ue(t) ? t.call(this, this) : t)
    } : t : e
}

function q_(e, t) {
    return Hr(_i(e), _i(t))
}

function _i(e) {
    if (ie(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function Ue(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function Hr(e, t) {
    return e ? De(Object.create(null), e, t) : t
}

function Uc(e, t) {
    return e ? ie(e) && ie(t) ? [...new Set([...e, ...t])] : De(Object.create(null), Fc(e), Fc(t ? ? {})) : t
}

function z_(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = De(Object.create(null), e);
    for (const r in t) n[r] = Ue(e[r], t[r]);
    return n
}

function of () {
    return {
        app: null,
        config: {
            isNativeTag: Tg,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let G_ = 0;

function Q_(e, t) {
    return function(r, s = null) {
        ue(r) || (r = De({}, r)), s != null && !Ae(s) && (s = null);
        const o = of (),
            a = new WeakSet;
        let c = !1;
        const l = o.app = {
            _uid: G_++,
            _component: r,
            _props: s,
            _container: null,
            _context: o,
            _instance: null,
            version: Af,
            get config() {
                return o.config
            },
            set config(f) {},
            use(f, ...u) {
                return a.has(f) || (f && ue(f.install) ? (a.add(f), f.install(l, ...u)) : ue(f) && (a.add(f), f(l, ...u))), l
            },
            mixin(f) {
                return o.mixins.includes(f) || o.mixins.push(f), l
            },
            component(f, u) {
                return u ? (o.components[f] = u, l) : o.components[f]
            },
            directive(f, u) {
                return u ? (o.directives[f] = u, l) : o.directives[f]
            },
            mount(f, u, h) {
                if (!c) {
                    const p = Ne(r, s);
                    return p.appContext = o, u && t ? t(p, f) : e(p, f, h), c = !0, l._container = f, f.__vue_app__ = l, wo(p.component) || p.component.proxy
                }
            },
            unmount() {
                c && (e(null, l._container), delete l._container.__vue_app__)
            },
            provide(f, u) {
                return o.provides[f] = u, l
            },
            runWithContext(f) {
                ts = l;
                try {
                    return f()
                } finally {
                    ts = null
                }
            }
        };
        return l
    }
}
let ts = null;

function Nn(e, t) {
    if (Ie) {
        let n = Ie.provides;
        const r = Ie.parent && Ie.parent.provides;
        r === n && (n = Ie.provides = Object.create(r)), n[e] = t
    }
}

function Ve(e, t, n = !1) {
    const r = Ie || Me;
    if (r || ts) {
        const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : ts._context.provides;
        if (s && e in s) return s[e];
        if (arguments.length > 1) return n && ue(t) ? t.call(r && r.proxy) : t
    }
}

function fa() {
    return !!(Ie || Me || ts)
}

function X_(e, t, n, r = !1) {
    const s = {},
        o = {};
    Ys(o, Eo, 1), e.propsDefaults = Object.create(null), af(e, t, s, o);
    for (const a in e.propsOptions[0]) a in s || (s[a] = void 0);
    n ? e.props = r ? s : as(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
}

function J_(e, t, n, r) {
    const {
        props: s,
        attrs: o,
        vnode: {
            patchFlag: a
        }
    } = e, c = me(s), [l] = e.propsOptions;
    let f = !1;
    if ((r || a > 0) && !(a & 16)) {
        if (a & 8) {
            const u = e.vnode.dynamicProps;
            for (let h = 0; h < u.length; h++) {
                let p = u[h];
                if (go(e.emitsOptions, p)) continue;
                const m = t[p];
                if (l)
                    if (_e(o, p)) m !== o[p] && (o[p] = m, f = !0);
                    else {
                        const T = Pt(p);
                        s[T] = yi(l, c, T, m, e, !1)
                    }
                else m !== o[p] && (o[p] = m, f = !0)
            }
        }
    } else {
        af(e, t, s, o) && (f = !0);
        let u;
        for (const h in c)(!t || !_e(t, h) && ((u = br(h)) === h || !_e(t, u))) && (l ? n && (n[h] !== void 0 || n[u] !== void 0) && (s[h] = yi(l, c, h, void 0, e, !0)) : delete s[h]);
        if (o !== c)
            for (const h in o)(!t || !_e(t, h)) && (delete o[h], f = !0)
    }
    f && Ft(e, "set", "$attrs")
}

function af(e, t, n, r) {
    const [s, o] = e.propsOptions;
    let a = !1,
        c;
    if (t)
        for (let l in t) {
            if (jr(l)) continue;
            const f = t[l];
            let u;
            s && _e(s, u = Pt(l)) ? !o || !o.includes(u) ? n[u] = f : (c || (c = {}))[u] = f : go(e.emitsOptions, l) || (!(l in r) || f !== r[l]) && (r[l] = f, a = !0)
        }
    if (o) {
        const l = me(n),
            f = c || $e;
        for (let u = 0; u < o.length; u++) {
            const h = o[u];
            n[h] = yi(s, l, h, f[h], e, !_e(f, h))
        }
    }
    return a
}

function yi(e, t, n, r, s, o) {
    const a = e[n];
    if (a != null) {
        const c = _e(a, "default");
        if (c && r === void 0) {
            const l = a.default;
            if (a.type !== Function && !a.skipFactory && ue(l)) {
                const {
                    propsDefaults: f
                } = s;
                n in f ? r = f[n] : (lr(s), r = f[n] = l.call(null, t), Pn())
            } else r = l
        }
        a[0] && (o && !c ? r = !1 : a[1] && (r === "" || r === br(n)) && (r = !0))
    }
    return r
}

function cf(e, t, n = !1) {
    const r = t.propsCache,
        s = r.get(e);
    if (s) return s;
    const o = e.props,
        a = {},
        c = [];
    let l = !1;
    if (!ue(e)) {
        const u = h => {
            l = !0;
            const [p, m] = cf(h, t, !0);
            De(a, p), m && c.push(...m)
        };
        !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
    }
    if (!o && !l) return Ae(e) && r.set(e, er), er;
    if (ie(o))
        for (let u = 0; u < o.length; u++) {
            const h = Pt(o[u]);
            Wc(h) && (a[h] = $e)
        } else if (o)
            for (const u in o) {
                const h = Pt(u);
                if (Wc(h)) {
                    const p = o[u],
                        m = a[h] = ie(p) || ue(p) ? {
                            type: p
                        } : De({}, p);
                    if (m) {
                        const T = qc(Boolean, m.type),
                            w = qc(String, m.type);
                        m[0] = T > -1, m[1] = w < 0 || T < w, (T > -1 || _e(m, "default")) && c.push(h)
                    }
                }
            }
    const f = [a, c];
    return Ae(e) && r.set(e, f), f
}

function Wc(e) {
    return e[0] !== "$"
}

function Kc(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}

function Yc(e, t) {
    return Kc(e) === Kc(t)
}

function qc(e, t) {
    return ie(t) ? t.findIndex(n => Yc(n, e)) : ue(t) && Yc(t, e) ? 0 : -1
}
const lf = e => e[0] === "_" || e === "$stable",
    da = e => ie(e) ? e.map(ht) : [ht(e)],
    Z_ = (e, t, n) => {
        if (t._n) return t;
        const r = ra((...s) => da(t(...s)), n);
        return r._c = !1, r
    },
    uf = (e, t, n) => {
        const r = e._ctx;
        for (const s in e) {
            if (lf(s)) continue;
            const o = e[s];
            if (ue(o)) t[s] = Z_(s, o, r);
            else if (o != null) {
                const a = da(o);
                t[s] = () => a
            }
        }
    },
    ff = (e, t) => {
        const n = da(t);
        e.slots.default = () => n
    },
    ey = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const n = t._;
            n ? (e.slots = me(t), Ys(t, "_", n)) : uf(t, e.slots = {})
        } else e.slots = {}, t && ff(e, t);
        Ys(e.slots, Eo, 1)
    },
    ty = (e, t, n) => {
        const {
            vnode: r,
            slots: s
        } = e;
        let o = !0,
            a = $e;
        if (r.shapeFlag & 32) {
            const c = t._;
            c ? n && c === 1 ? o = !1 : (De(s, t), !n && c === 1 && delete s._) : (o = !t.$stable, uf(t, s)), a = t
        } else t && (ff(e, t), a = {
            default: 1
        });
        if (o)
            for (const c in s) !lf(c) && a[c] == null && delete s[c]
    };

function eo(e, t, n, r, s = !1) {
    if (ie(e)) {
        e.forEach((p, m) => eo(p, t && (ie(t) ? t[m] : t), n, r, s));
        return
    }
    if (Rn(r) && !s) return;
    const o = r.shapeFlag & 4 ? wo(r.component) || r.component.proxy : r.el,
        a = s ? null : o,
        {
            i: c,
            r: l
        } = e,
        f = t && t.r,
        u = c.refs === $e ? c.refs = {} : c.refs,
        h = c.setupState;
    if (f != null && f !== l && (Le(f) ? (u[f] = null, _e(h, f) && (h[f] = null)) : xe(f) && (f.value = null)), ue(l)) on(l, c, 12, [a, u]);
    else {
        const p = Le(l),
            m = xe(l);
        if (p || m) {
            const T = () => {
                if (e.f) {
                    const w = p ? _e(h, l) ? h[l] : u[l] : l.value;
                    s ? ie(w) && Ki(w, o) : ie(w) ? w.includes(o) || w.push(o) : p ? (u[l] = [o], _e(h, l) && (h[l] = u[l])) : (l.value = [o], e.k && (u[e.k] = l.value))
                } else p ? (u[l] = a, _e(h, l) && (h[l] = a)) : m && (l.value = a, e.k && (u[e.k] = a))
            };
            a ? (T.id = -1, je(T, n)) : T()
        }
    }
}
let Gt = !1;
const Is = e => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
    Ds = e => e.nodeType === 8;

function ny(e) {
    const {
        mt: t,
        p: n,
        o: {
            patchProp: r,
            createText: s,
            nextSibling: o,
            parentNode: a,
            remove: c,
            insert: l,
            createComment: f
        }
    } = e, u = (b, g) => {
        if (!g.hasChildNodes()) {
            n(null, b, g), Qs(), g._vnode = b;
            return
        }
        Gt = !1, h(g.firstChild, b, null, null, null), Qs(), g._vnode = b, Gt && console.error("Hydration completed but contains mismatches.")
    }, h = (b, g, S, H, U, x = !1) => {
        const D = Ds(b) && b.data === "[",
            L = () => w(b, g, S, H, U, D),
            {
                type: F,
                ref: K,
                shapeFlag: te,
                patchFlag: J
            } = g;
        let W = b.nodeType;
        g.el = b, J === -2 && (x = !1, g.dynamicChildren = null);
        let O = null;
        switch (F) {
            case ir:
                W !== 3 ? g.children === "" ? (l(g.el = s(""), a(b), b), O = b) : O = L() : (b.data !== g.children && (Gt = !0, b.data = g.children), O = o(b));
                break;
            case We:
                if (W !== 8 || D)
                    if (b.tagName.toLowerCase() === "template") {
                        const B = g.el.content.firstChild;
                        $(B, b, S), g.el = b = B, O = o(b)
                    } else O = L();
                else O = o(b);
                break;
            case Br:
                if (D && (b = o(b), W = b.nodeType), W === 1 || W === 3) {
                    O = b;
                    const B = !g.children.length;
                    for (let k = 0; k < g.staticCount; k++) B && (g.children += O.nodeType === 1 ? O.outerHTML : O.data), k === g.staticCount - 1 && (g.anchor = O), O = o(O);
                    return D ? o(O) : O
                } else L();
                break;
            case Qe:
                D ? O = T(b, g, S, H, U, x) : O = L();
                break;
            default:
                if (te & 1)(W !== 1 || g.type.toLowerCase() !== b.tagName.toLowerCase()) && !A(b) ? O = L() : O = p(b, g, S, H, U, x);
                else if (te & 6) {
                    g.slotScopeIds = U;
                    const B = a(b);
                    if (D ? O = N(b) : Ds(b) && b.data === "teleport start" ? O = N(b, b.data, "teleport end") : O = o(b), t(g, B, null, S, H, Is(B), x), Rn(g)) {
                        let k;
                        D ? (k = Ne(Qe), k.anchor = O ? O.previousSibling : B.lastChild) : k = b.nodeType === 3 ? Ef("") : Ne("div"), k.el = b, g.component.subTree = k
                    }
                } else te & 64 ? W !== 8 ? O = L() : O = g.type.hydrate(b, g, S, H, U, x, e, m) : te & 128 && (O = g.type.hydrate(b, g, S, H, Is(a(b)), U, x, e, h))
        }
        return K != null && eo(K, null, H, g), O
    }, p = (b, g, S, H, U, x) => {
        x = x || !!g.dynamicChildren;
        const {
            type: D,
            props: L,
            patchFlag: F,
            shapeFlag: K,
            dirs: te,
            transition: J
        } = g, W = D === "input" && te || D === "option";
        if (W || F !== -1) {
            if (te && Ot(g, null, S, "created"), L)
                if (W || !x || F & 48)
                    for (const k in L)(W && k.endsWith("value") || is(k) && !jr(k)) && r(b, k, null, L[k], !1, void 0, S);
                else L.onClick && r(b, "onClick", null, L.onClick, !1, void 0, S);
            let O;
            (O = L && L.onVnodeBeforeMount) && Ge(O, S, g);
            let B = !1;
            if (A(b)) {
                B = hf(H, J) && S && S.vnode.props && S.vnode.props.appear;
                const k = b.content.firstChild;
                B && J.beforeEnter(k), $(k, b, S), g.el = b = k
            }
            if (te && Ot(g, null, S, "beforeMount"), ((O = L && L.onVnodeMounted) || te || B) && Wu(() => {
                    O && Ge(O, S, g), B && J.enter(b), te && Ot(g, null, S, "mounted")
                }, H), K & 16 && !(L && (L.innerHTML || L.textContent))) {
                let k = m(b.firstChild, g, b, S, H, U, x);
                for (; k;) {
                    Gt = !0;
                    const re = k;
                    k = k.nextSibling, c(re)
                }
            } else K & 8 && b.textContent !== g.children && (Gt = !0, b.textContent = g.children)
        }
        return b.nextSibling
    }, m = (b, g, S, H, U, x, D) => {
        D = D || !!g.dynamicChildren;
        const L = g.children,
            F = L.length;
        for (let K = 0; K < F; K++) {
            const te = D ? L[K] : L[K] = ht(L[K]);
            if (b) b = h(b, te, H, U, x, D);
            else {
                if (te.type === ir && !te.children) continue;
                Gt = !0, n(null, te, S, null, H, U, Is(S), x)
            }
        }
        return b
    }, T = (b, g, S, H, U, x) => {
        const {
            slotScopeIds: D
        } = g;
        D && (U = U ? U.concat(D) : D);
        const L = a(b),
            F = m(o(b), g, L, S, H, U, x);
        return F && Ds(F) && F.data === "]" ? o(g.anchor = F) : (Gt = !0, l(g.anchor = f("]"), L, F), F)
    }, w = (b, g, S, H, U, x) => {
        if (Gt = !0, g.el = null, x) {
            const F = N(b);
            for (;;) {
                const K = o(b);
                if (K && K !== F) c(K);
                else break
            }
        }
        const D = o(b),
            L = a(b);
        return c(b), n(null, g, L, D, S, H, Is(L), U), D
    }, N = (b, g = "[", S = "]") => {
        let H = 0;
        for (; b;)
            if (b = o(b), b && Ds(b) && (b.data === g && H++, b.data === S)) {
                if (H === 0) return o(b);
                H--
            }
        return b
    }, $ = (b, g, S) => {
        const H = g.parentNode;
        H && H.replaceChild(b, g);
        let U = S;
        for (; U;) U.vnode.el === g && (U.vnode.el = b, U.subTree.el = b), U = U.parent
    }, A = b => b.nodeType === 1 && b.tagName.toLowerCase() === "template";
    return [u, h]
}
const je = Wu;

function ry(e) {
    return df(e)
}

function sy(e) {
    return df(e, ny)
}

function df(e, t) {
    const n = ci();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: s,
        patchProp: o,
        createElement: a,
        createText: c,
        createComment: l,
        setText: f,
        setElementText: u,
        parentNode: h,
        nextSibling: p,
        setScopeId: m = wt,
        insertStaticContent: T
    } = e, w = (_, E, C, I = null, V = null, q = null, X = !1, G = null, P = !!E.dynamicChildren) => {
        if (_ === E) return;
        _ && !bt(_, E) && (I = M(_), fe(_, V, q, !0), _ = null), E.patchFlag === -2 && (P = !1, E.dynamicChildren = null);
        const {
            type: Y,
            ref: ae,
            shapeFlag: se
        } = E;
        switch (Y) {
            case ir:
                N(_, E, C, I);
                break;
            case We:
                $(_, E, C, I);
                break;
            case Br:
                _ == null && A(E, C, I, X);
                break;
            case Qe:
                K(_, E, C, I, V, q, X, G, P);
                break;
            default:
                se & 1 ? S(_, E, C, I, V, q, X, G, P) : se & 6 ? te(_, E, C, I, V, q, X, G, P) : (se & 64 || se & 128) && Y.process(_, E, C, I, V, q, X, G, P, z)
        }
        ae != null && V && eo(ae, _ && _.ref, q, E || _, !E)
    }, N = (_, E, C, I) => {
        if (_ == null) r(E.el = c(E.children), C, I);
        else {
            const V = E.el = _.el;
            E.children !== _.children && f(V, E.children)
        }
    }, $ = (_, E, C, I) => {
        _ == null ? r(E.el = l(E.children || ""), C, I) : E.el = _.el
    }, A = (_, E, C, I) => {
        [_.el, _.anchor] = T(_.children, E, C, I, _.el, _.anchor)
    }, b = ({
        el: _,
        anchor: E
    }, C, I) => {
        let V;
        for (; _ && _ !== E;) V = p(_), r(_, C, I), _ = V;
        r(E, C, I)
    }, g = ({
        el: _,
        anchor: E
    }) => {
        let C;
        for (; _ && _ !== E;) C = p(_), s(_), _ = C;
        s(E)
    }, S = (_, E, C, I, V, q, X, G, P) => {
        X = X || E.type === "svg", _ == null ? H(E, C, I, V, q, X, G, P) : D(_, E, V, q, X, G, P)
    }, H = (_, E, C, I, V, q, X, G) => {
        let P, Y;
        const {
            type: ae,
            props: se,
            shapeFlag: oe,
            transition: le,
            dirs: he
        } = _;
        if (P = _.el = a(_.type, q, se && se.is, se), oe & 8 ? u(P, _.children) : oe & 16 && x(_.children, P, null, I, V, q && ae !== "foreignObject", X, G), he && Ot(_, null, I, "created"), U(P, _, _.scopeId, X, I), se) {
            for (const ge in se) ge !== "value" && !jr(ge) && o(P, ge, null, se[ge], q, _.children, I, V, Ee);
            "value" in se && o(P, "value", null, se.value), (Y = se.onVnodeBeforeMount) && Ge(Y, I, _)
        }
        he && Ot(_, null, I, "beforeMount");
        const be = hf(V, le);
        be && le.beforeEnter(P), r(P, E, C), ((Y = se && se.onVnodeMounted) || be || he) && je(() => {
            Y && Ge(Y, I, _), be && le.enter(P), he && Ot(_, null, I, "mounted")
        }, V)
    }, U = (_, E, C, I, V) => {
        if (C && m(_, C), I)
            for (let q = 0; q < I.length; q++) m(_, I[q]);
        if (V) {
            let q = V.subTree;
            if (E === q) {
                const X = V.vnode;
                U(_, X, X.scopeId, X.slotScopeIds, V.parent)
            }
        }
    }, x = (_, E, C, I, V, q, X, G, P = 0) => {
        for (let Y = P; Y < _.length; Y++) {
            const ae = _[Y] = G ? tn(_[Y]) : ht(_[Y]);
            w(null, ae, E, C, I, V, q, X, G)
        }
    }, D = (_, E, C, I, V, q, X) => {
        const G = E.el = _.el;
        let {
            patchFlag: P,
            dynamicChildren: Y,
            dirs: ae
        } = E;
        P |= _.patchFlag & 16;
        const se = _.props || $e,
            oe = E.props || $e;
        let le;
        C && En(C, !1), (le = oe.onVnodeBeforeUpdate) && Ge(le, C, E, _), ae && Ot(E, _, C, "beforeUpdate"), C && En(C, !0);
        const he = V && E.type !== "foreignObject";
        if (Y ? L(_.dynamicChildren, Y, G, C, I, he, q) : X || k(_, E, G, null, C, I, he, q, !1), P > 0) {
            if (P & 16) F(G, E, se, oe, C, I, V);
            else if (P & 2 && se.class !== oe.class && o(G, "class", null, oe.class, V), P & 4 && o(G, "style", se.style, oe.style, V), P & 8) {
                const be = E.dynamicProps;
                for (let ge = 0; ge < be.length; ge++) {
                    const Oe = be[ge],
                        Je = se[Oe],
                        fn = oe[Oe];
                    (fn !== Je || Oe === "value") && o(G, Oe, Je, fn, V, _.children, C, I, Ee)
                }
            }
            P & 1 && _.children !== E.children && u(G, E.children)
        } else !X && Y == null && F(G, E, se, oe, C, I, V);
        ((le = oe.onVnodeUpdated) || ae) && je(() => {
            le && Ge(le, C, E, _), ae && Ot(E, _, C, "updated")
        }, I)
    }, L = (_, E, C, I, V, q, X) => {
        for (let G = 0; G < E.length; G++) {
            const P = _[G],
                Y = E[G],
                ae = P.el && (P.type === Qe || !bt(P, Y) || P.shapeFlag & 70) ? h(P.el) : C;
            w(P, Y, ae, null, I, V, q, X, !0)
        }
    }, F = (_, E, C, I, V, q, X) => {
        if (C !== I) {
            if (C !== $e)
                for (const G in C) !jr(G) && !(G in I) && o(_, G, C[G], null, X, E.children, V, q, Ee);
            for (const G in I) {
                if (jr(G)) continue;
                const P = I[G],
                    Y = C[G];
                P !== Y && G !== "value" && o(_, G, Y, P, X, E.children, V, q, Ee)
            }
            "value" in I && o(_, "value", C.value, I.value)
        }
    }, K = (_, E, C, I, V, q, X, G, P) => {
        const Y = E.el = _ ? _.el : c(""),
            ae = E.anchor = _ ? _.anchor : c("");
        let {
            patchFlag: se,
            dynamicChildren: oe,
            slotScopeIds: le
        } = E;
        le && (G = G ? G.concat(le) : le), _ == null ? (r(Y, C, I), r(ae, C, I), x(E.children, C, ae, V, q, X, G, P)) : se > 0 && se & 64 && oe && _.dynamicChildren ? (L(_.dynamicChildren, oe, C, V, q, X, G), (E.key != null || V && E === V.subTree) && pf(_, E, !0)) : k(_, E, C, ae, V, q, X, G, P)
    }, te = (_, E, C, I, V, q, X, G, P) => {
        E.slotScopeIds = G, _ == null ? E.shapeFlag & 512 ? V.ctx.activate(E, C, I, X, P) : J(E, C, I, V, q, X, P) : W(_, E, P)
    }, J = (_, E, C, I, V, q, X) => {
        const G = _.component = uy(_, I, V);
        if (cs(_) && (G.ctx.renderer = z), fy(G), G.asyncDep) {
            if (V && V.registerDep(G, O), !_.el) {
                const P = G.subTree = Ne(We);
                $(null, P, E, C)
            }
            return
        }
        O(G, _, E, C, V, q, X)
    }, W = (_, E, C) => {
        const I = E.component = _.component;
        if (w_(_, E, C))
            if (I.asyncDep && !I.asyncResolved) {
                B(I, E, C);
                return
            } else I.next = E, g_(I.update), I.update();
        else E.el = _.el, I.vnode = E
    }, O = (_, E, C, I, V, q, X) => {
        const G = () => {
                if (_.isMounted) {
                    let {
                        next: ae,
                        bu: se,
                        u: oe,
                        parent: le,
                        vnode: he
                    } = _, be = ae, ge;
                    En(_, !1), ae ? (ae.el = he.el, B(_, ae, X)) : ae = he, se && nr(se), (ge = ae.props && ae.props.onVnodeBeforeUpdate) && Ge(ge, le, ae, he), En(_, !0);
                    const Oe = qo(_),
                        Je = _.subTree;
                    _.subTree = Oe, w(Je, Oe, h(Je.el), M(Je), _, V, q), ae.el = Oe.el, be === null && sa(_, Oe.el), oe && je(oe, V), (ge = ae.props && ae.props.onVnodeUpdated) && je(() => Ge(ge, le, ae, he), V)
                } else {
                    let ae;
                    const {
                        el: se,
                        props: oe
                    } = E, {
                        bm: le,
                        m: he,
                        parent: be
                    } = _, ge = Rn(E);
                    if (En(_, !1), le && nr(le), !ge && (ae = oe && oe.onVnodeBeforeMount) && Ge(ae, be, E), En(_, !0), se && R) {
                        const Oe = () => {
                            _.subTree = qo(_), R(se, _.subTree, _, V, null)
                        };
                        ge ? E.type.__asyncLoader().then(() => !_.isUnmounted && Oe()) : Oe()
                    } else {
                        const Oe = _.subTree = qo(_);
                        w(null, Oe, C, I, _, V, q), E.el = Oe.el
                    }
                    if (he && je(he, V), !ge && (ae = oe && oe.onVnodeMounted)) {
                        const Oe = E;
                        je(() => Ge(ae, be, Oe), V)
                    }(E.shapeFlag & 256 || be && Rn(be.vnode) && be.vnode.shapeFlag & 256) && _.a && je(_.a, V), _.isMounted = !0, E = C = I = null
                }
            },
            P = _.effect = new Xi(G, () => mo(Y), _.scope),
            Y = _.update = () => P.run();
        Y.id = _.uid, En(_, !0), Y()
    }, B = (_, E, C) => {
        E.component = _;
        const I = _.vnode.props;
        _.vnode = E, _.next = null, J_(_, E.props, I, C), ty(_, E.children, C), wr(), Ic(), Tr()
    }, k = (_, E, C, I, V, q, X, G, P = !1) => {
        const Y = _ && _.children,
            ae = _ ? _.shapeFlag : 0,
            se = E.children,
            {
                patchFlag: oe,
                shapeFlag: le
            } = E;
        if (oe > 0) {
            if (oe & 128) {
                ce(Y, se, C, I, V, q, X, G, P);
                return
            } else if (oe & 256) {
                re(Y, se, C, I, V, q, X, G, P);
                return
            }
        }
        le & 8 ? (ae & 16 && Ee(Y, V, q), se !== Y && u(C, se)) : ae & 16 ? le & 16 ? ce(Y, se, C, I, V, q, X, G, P) : Ee(Y, V, q, !0) : (ae & 8 && u(C, ""), le & 16 && x(se, C, I, V, q, X, G, P))
    }, re = (_, E, C, I, V, q, X, G, P) => {
        _ = _ || er, E = E || er;
        const Y = _.length,
            ae = E.length,
            se = Math.min(Y, ae);
        let oe;
        for (oe = 0; oe < se; oe++) {
            const le = E[oe] = P ? tn(E[oe]) : ht(E[oe]);
            w(_[oe], le, C, null, V, q, X, G, P)
        }
        Y > ae ? Ee(_, V, q, !0, !1, se) : x(E, C, I, V, q, X, G, P, se)
    }, ce = (_, E, C, I, V, q, X, G, P) => {
        let Y = 0;
        const ae = E.length;
        let se = _.length - 1,
            oe = ae - 1;
        for (; Y <= se && Y <= oe;) {
            const le = _[Y],
                he = E[Y] = P ? tn(E[Y]) : ht(E[Y]);
            if (bt(le, he)) w(le, he, C, null, V, q, X, G, P);
            else break;
            Y++
        }
        for (; Y <= se && Y <= oe;) {
            const le = _[se],
                he = E[oe] = P ? tn(E[oe]) : ht(E[oe]);
            if (bt(le, he)) w(le, he, C, null, V, q, X, G, P);
            else break;
            se--, oe--
        }
        if (Y > se) {
            if (Y <= oe) {
                const le = oe + 1,
                    he = le < ae ? E[le].el : I;
                for (; Y <= oe;) w(null, E[Y] = P ? tn(E[Y]) : ht(E[Y]), C, he, V, q, X, G, P), Y++
            }
        } else if (Y > oe)
            for (; Y <= se;) fe(_[Y], V, q, !0), Y++;
        else {
            const le = Y,
                he = Y,
                be = new Map;
            for (Y = he; Y <= oe; Y++) {
                const Fe = E[Y] = P ? tn(E[Y]) : ht(E[Y]);
                Fe.key != null && be.set(Fe.key, Y)
            }
            let ge, Oe = 0;
            const Je = oe - he + 1;
            let fn = !1,
                hs = 0;
            const dn = new Array(Je);
            for (Y = 0; Y < Je; Y++) dn[Y] = 0;
            for (Y = le; Y <= se; Y++) {
                const Fe = _[Y];
                if (Oe >= Je) {
                    fe(Fe, V, q, !0);
                    continue
                }
                let lt;
                if (Fe.key != null) lt = be.get(Fe.key);
                else
                    for (ge = he; ge <= oe; ge++)
                        if (dn[ge - he] === 0 && bt(Fe, E[ge])) {
                            lt = ge;
                            break
                        }
                lt === void 0 ? fe(Fe, V, q, !0) : (dn[lt - he] = Y + 1, lt >= hs ? hs = lt : fn = !0, w(Fe, E[lt], C, null, V, q, X, G, P), Oe++)
            }
            const ps = fn ? oy(dn) : er;
            for (ge = ps.length - 1, Y = Je - 1; Y >= 0; Y--) {
                const Fe = he + Y,
                    lt = E[Fe],
                    Kt = Fe + 1 < ae ? E[Fe + 1].el : I;
                dn[Y] === 0 ? w(null, lt, C, Kt, V, q, X, G, P) : fn && (ge < 0 || Y !== ps[ge] ? de(lt, C, Kt, 2) : ge--)
            }
        }
    }, de = (_, E, C, I, V = null) => {
        const {
            el: q,
            type: X,
            transition: G,
            children: P,
            shapeFlag: Y
        } = _;
        if (Y & 6) {
            de(_.component.subTree, E, C, I);
            return
        }
        if (Y & 128) {
            _.suspense.move(E, C, I);
            return
        }
        if (Y & 64) {
            X.move(_, E, C, z);
            return
        }
        if (X === Qe) {
            r(q, E, C);
            for (let se = 0; se < P.length; se++) de(P[se], E, C, I);
            r(_.anchor, E, C);
            return
        }
        if (X === Br) {
            b(_, E, C);
            return
        }
        if (I !== 2 && Y & 1 && G)
            if (I === 0) G.beforeEnter(q), r(q, E, C), je(() => G.enter(q), V);
            else {
                const {
                    leave: se,
                    delayLeave: oe,
                    afterLeave: le
                } = G, he = () => r(q, E, C), be = () => {
                    se(q, () => {
                        he(), le && le()
                    })
                };
                oe ? oe(q, he, be) : be()
            }
        else r(q, E, C)
    }, fe = (_, E, C, I = !1, V = !1) => {
        const {
            type: q,
            props: X,
            ref: G,
            children: P,
            dynamicChildren: Y,
            shapeFlag: ae,
            patchFlag: se,
            dirs: oe
        } = _;
        if (G != null && eo(G, null, C, _, !0), ae & 256) {
            E.ctx.deactivate(_);
            return
        }
        const le = ae & 1 && oe,
            he = !Rn(_);
        let be;
        if (he && (be = X && X.onVnodeBeforeUnmount) && Ge(be, E, _), ae & 6) we(_.component, C, I);
        else {
            if (ae & 128) {
                _.suspense.unmount(C, I);
                return
            }
            le && Ot(_, null, E, "beforeUnmount"), ae & 64 ? _.type.remove(_, E, C, V, z, I) : Y && (q !== Qe || se > 0 && se & 64) ? Ee(Y, E, C, !1, !0) : (q === Qe && se & 384 || !V && ae & 16) && Ee(P, E, C), I && ye(_)
        }(he && (be = X && X.onVnodeUnmounted) || le) && je(() => {
            be && Ge(be, E, _), le && Ot(_, null, E, "unmounted")
        }, C)
    }, ye = _ => {
        const {
            type: E,
            el: C,
            anchor: I,
            transition: V
        } = _;
        if (E === Qe) {
            ve(C, I);
            return
        }
        if (E === Br) {
            g(_);
            return
        }
        const q = () => {
            s(C), V && !V.persisted && V.afterLeave && V.afterLeave()
        };
        if (_.shapeFlag & 1 && V && !V.persisted) {
            const {
                leave: X,
                delayLeave: G
            } = V, P = () => X(C, q);
            G ? G(_.el, q, P) : P()
        } else q()
    }, ve = (_, E) => {
        let C;
        for (; _ !== E;) C = p(_), s(_), _ = C;
        s(E)
    }, we = (_, E, C) => {
        const {
            bum: I,
            scope: V,
            update: q,
            subTree: X,
            um: G
        } = _;
        I && nr(I), V.stop(), q && (q.active = !1, fe(X, _, E, C)), G && je(G, E), je(() => {
            _.isUnmounted = !0
        }, E), E && E.pendingBranch && !E.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve())
    }, Ee = (_, E, C, I = !1, V = !1, q = 0) => {
        for (let X = q; X < _.length; X++) fe(_[X], E, C, I, V)
    }, M = _ => _.shapeFlag & 6 ? M(_.component.subTree) : _.shapeFlag & 128 ? _.suspense.next() : p(_.anchor || _.el), Z = (_, E, C) => {
        _ == null ? E._vnode && fe(E._vnode, null, null, !0) : w(E._vnode || null, _, E, null, null, null, C), Ic(), Qs(), E._vnode = _
    }, z = {
        p: w,
        um: fe,
        m: de,
        r: ye,
        mt: J,
        mc: x,
        pc: k,
        pbc: L,
        n: M,
        o: e
    };
    let ne, R;
    return t && ([ne, R] = t(z)), {
        render: Z,
        hydrate: ne,
        createApp: Q_(Z, ne)
    }
}

function En({
    effect: e,
    update: t
}, n) {
    e.allowRecurse = t.allowRecurse = n
}

function hf(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function pf(e, t, n = !1) {
    const r = e.children,
        s = t.children;
    if (ie(r) && ie(s))
        for (let o = 0; o < r.length; o++) {
            const a = r[o];
            let c = s[o];
            c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[o] = tn(s[o]), c.el = a.el), n || pf(a, c)), c.type === ir && (c.el = a.el)
        }
}

function oy(e) {
    const t = e.slice(),
        n = [0];
    let r, s, o, a, c;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const f = e[r];
        if (f !== 0) {
            if (s = n[n.length - 1], e[s] < f) {
                t[r] = s, n.push(r);
                continue
            }
            for (o = 0, a = n.length - 1; o < a;) c = o + a >> 1, e[n[c]] < f ? o = c + 1 : a = c;
            f < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r)
        }
    }
    for (o = n.length, a = n[o - 1]; o-- > 0;) n[o] = a, a = t[a];
    return n
}
const iy = e => e.__isTeleport,
    Qe = Symbol.for("v-fgt"),
    ir = Symbol.for("v-txt"),
    We = Symbol.for("v-cmt"),
    Br = Symbol.for("v-stc"),
    Vr = [];
let pt = null;

function Rt(e = !1) {
    Vr.push(pt = e ? null : [])
}

function mf() {
    Vr.pop(), pt = Vr[Vr.length - 1] || null
}
let ar = 1;

function zc(e) {
    ar += e
}

function gf(e) {
    return e.dynamicChildren = ar > 0 ? pt || er : null, mf(), ar > 0 && pt && pt.push(e), e
}

function cC(e, t, n, r, s, o) {
    return gf(yf(e, t, n, r, s, o, !0))
}

function Ht(e, t, n, r, s) {
    return gf(Ne(e, t, n, r, s, !0))
}

function cr(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function bt(e, t) {
    return e.type === t.type && e.key === t.key
}
const Eo = "__vInternal",
    _f = ({
        key: e
    }) => e ? ? null,
    Bs = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => (typeof e == "number" && (e = "" + e), e != null ? Le(e) || xe(e) || ue(e) ? {
        i: Me,
        r: e,
        k: t,
        f: !!n
    } : e : null);

function yf(e, t = null, n = null, r = 0, s = null, o = e === Qe ? 0 : 1, a = !1, c = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && _f(t),
        ref: t && Bs(t),
        scopeId: _o,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: Me
    };
    return c ? (ha(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Le(n) ? 8 : 16), ar > 0 && !a && pt && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && pt.push(l), l
}
const Ne = ay;

function ay(e, t = null, n = null, r = 0, s = null, o = !1) {
    if ((!e || e === tf) && (e = We), cr(e)) {
        const c = Bt(e, t, !0);
        return n && ha(c, n), ar > 0 && !o && pt && (c.shapeFlag & 6 ? pt[pt.indexOf(e)] = c : pt.push(c)), c.patchFlag |= -2, c
    }
    if (my(e) && (e = e.__vccOpts), t) {
        t = vf(t);
        let {
            class: c,
            style: l
        } = t;
        c && !Le(c) && (t.class = fo(c)), Ae(l) && (xu(l) && !ie(l) && (l = De({}, l)), t.style = uo(l))
    }
    const a = Le(e) ? 1 : Uu(e) ? 128 : iy(e) ? 64 : Ae(e) ? 4 : ue(e) ? 2 : 0;
    return yf(e, t, n, r, s, a, o, !0)
}

function vf(e) {
    return e ? xu(e) || Eo in e ? De({}, e) : e : null
}

function Bt(e, t, n = !1) {
    const {
        props: r,
        ref: s,
        patchFlag: o,
        children: a
    } = e, c = t ? bf(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: c,
        key: c && _f(c),
        ref: t && t.ref ? n && s ? ie(s) ? s.concat(Bs(t)) : [s, Bs(t)] : Bs(t) : s,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Qe ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Bt(e.ssContent),
        ssFallback: e.ssFallback && Bt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}

function Ef(e = " ", t = 0) {
    return Ne(ir, null, e, t)
}

function lC(e, t) {
    const n = Ne(Br, null, e);
    return n.staticCount = t, n
}

function uC(e = "", t = !1) {
    return t ? (Rt(), Ht(We, null, e)) : Ne(We, null, e)
}

function ht(e) {
    return e == null || typeof e == "boolean" ? Ne(We) : ie(e) ? Ne(Qe, null, e.slice()) : typeof e == "object" ? tn(e) : Ne(ir, null, String(e))
}

function tn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bt(e)
}

function ha(e, t) {
    let n = 0;
    const {
        shapeFlag: r
    } = e;
    if (t == null) t = null;
    else if (ie(t)) n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const s = t.default;
            s && (s._c && (s._d = !1), ha(e, s()), s._c && (s._d = !0));
            return
        } else {
            n = 32;
            const s = t._;
            !s && !(Eo in t) ? t._ctx = Me : s === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else ue(t) ? (t = {
        default: t,
        _ctx: Me
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ef(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function bf(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const s in r)
            if (s === "class") t.class !== r.class && (t.class = fo([t.class, r.class]));
            else if (s === "style") t.style = uo([t.style, r.style]);
        else if (is(s)) {
            const o = t[s],
                a = r[s];
            a && o !== a && !(ie(o) && o.includes(a)) && (t[s] = o ? [].concat(o, a) : a)
        } else s !== "" && (t[s] = r[s])
    }
    return t
}

function Ge(e, t, n, r = null) {
    mt(e, t, 7, [n, r])
}
const cy = of ();
let ly = 0;

function uy(e, t, n) {
    const r = e.type,
        s = (t ? t.appContext : e.appContext) || cy,
        o = {
            uid: ly++,
            vnode: e,
            type: r,
            parent: t,
            appContext: s,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new Eu(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(s.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: cf(r, s),
            emitsOptions: Vu(r, s),
            emit: null,
            emitted: null,
            propsDefaults: $e,
            inheritAttrs: r.inheritAttrs,
            ctx: $e,
            data: $e,
            props: $e,
            attrs: $e,
            slots: $e,
            refs: $e,
            setupState: $e,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return o.ctx = {
        _: o
    }, o.root = t ? t.root : o, o.emit = y_.bind(null, o), e.ce && e.ce(o), o
}
let Ie = null;
const bo = () => Ie || Me;
let pa, Gn, Gc = "__VUE_INSTANCE_SETTERS__";
(Gn = ci()[Gc]) || (Gn = ci()[Gc] = []), Gn.push(e => Ie = e), pa = e => {
    Gn.length > 1 ? Gn.forEach(t => t(e)) : Gn[0](e)
};
const lr = e => {
        pa(e), e.scope.on()
    },
    Pn = () => {
        Ie && Ie.scope.off(), pa(null)
    };

function wf(e) {
    return e.vnode.shapeFlag & 4
}
let ur = !1;

function fy(e, t = !1) {
    ur = t;
    const {
        props: n,
        children: r
    } = e.vnode, s = wf(e);
    X_(e, n, s, t), ey(e, r);
    const o = s ? dy(e, t) : void 0;
    return ur = !1, o
}

function dy(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = po(new Proxy(e.ctx, U_));
    const {
        setup: r
    } = n;
    if (r) {
        const s = e.setupContext = r.length > 1 ? py(e) : null;
        lr(e), wr();
        const o = on(r, e, 0, [e.props, s]);
        if (Tr(), Pn(), pu(o)) {
            if (o.then(Pn, Pn), t) return o.then(a => {
                vi(e, a, t)
            }).catch(a => {
                Ar(a, e, 0)
            });
            e.asyncDep = o
        } else vi(e, o, t)
    } else Tf(e, t)
}

function vi(e, t, n) {
    ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ae(t) && (e.setupState = Mu(t)), Tf(e, n)
}
let Qc;

function Tf(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && Qc && !r.render) {
            const s = r.template || ua(e).template;
            if (s) {
                const {
                    isCustomElement: o,
                    compilerOptions: a
                } = e.appContext.config, {
                    delimiters: c,
                    compilerOptions: l
                } = r, f = De(De({
                    isCustomElement: o,
                    delimiters: c
                }, a), l);
                r.render = Qc(s, f)
            }
        }
        e.render = r.render || wt
    } {
        lr(e), wr();
        try {
            W_(e)
        } finally {
            Tr(), Pn()
        }
    }
}

function hy(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
        get(t, n) {
            return Xe(e, "get", "$attrs"), t[n]
        }
    }))
}

function py(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        get attrs() {
            return hy(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function wo(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Mu(po(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Fr) return Fr[n](e)
        },
        has(t, n) {
            return n in t || n in Fr
        }
    }))
}

function Ei(e, t = !0) {
    return ue(e) ? e.displayName || e.name : e.name || t && e.__name
}

function my(e) {
    return ue(e) && "__vccOpts" in e
}
const st = (e, t) => h_(e, t, ur);

function ot(e, t, n) {
    const r = arguments.length;
    return r === 2 ? Ae(t) && !ie(t) ? cr(t) ? Ne(e, null, [t]) : Ne(e, t) : Ne(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && cr(n) && (n = [n]), Ne(e, t, n))
}
const gy = Symbol.for("v-scx"),
    _y = () => Ve(gy),
    Af = "3.3.7",
    yy = "http://www.w3.org/2000/svg",
    Cn = typeof document < "u" ? document : null,
    Xc = Cn && Cn.createElement("template"),
    vy = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, r) => {
            const s = t ? Cn.createElementNS(yy, e) : Cn.createElement(e, n ? {
                is: n
            } : void 0);
            return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
        },
        createText: e => Cn.createTextNode(e),
        createComment: e => Cn.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Cn.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, r, s, o) {
            const a = n ? n.previousSibling : t.lastChild;
            if (s && (s === o || s.nextSibling))
                for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)););
            else {
                Xc.innerHTML = r ? `<svg>${e}</svg>` : e;
                const c = Xc.content;
                if (r) {
                    const l = c.firstChild;
                    for (; l.firstChild;) c.appendChild(l.firstChild);
                    c.removeChild(l)
                }
                t.insertBefore(c, n)
            }
            return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    },
    Qt = "transition",
    Lr = "animation",
    ns = Symbol("_vtc"),
    To = (e, {
        slots: t
    }) => ot(x_, Ey(e), t);
To.displayName = "Transition";
const Cf = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
To.props = De({}, Yu, Cf);
const bn = (e, t = []) => {
        ie(e) ? e.forEach(n => n(...t)) : e && e(...t)
    },
    Jc = e => e ? ie(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Ey(e) {
    const t = {};
    for (const K in e) K in Cf || (t[K] = e[K]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: r,
        duration: s,
        enterFromClass: o = `${n}-enter-from`,
        enterActiveClass: a = `${n}-enter-active`,
        enterToClass: c = `${n}-enter-to`,
        appearFromClass: l = o,
        appearActiveClass: f = a,
        appearToClass: u = c,
        leaveFromClass: h = `${n}-leave-from`,
        leaveActiveClass: p = `${n}-leave-active`,
        leaveToClass: m = `${n}-leave-to`
    } = e, T = by(s), w = T && T[0], N = T && T[1], {
        onBeforeEnter: $,
        onEnter: A,
        onEnterCancelled: b,
        onLeave: g,
        onLeaveCancelled: S,
        onBeforeAppear: H = $,
        onAppear: U = A,
        onAppearCancelled: x = b
    } = t, D = (K, te, J) => {
        wn(K, te ? u : c), wn(K, te ? f : a), J && J()
    }, L = (K, te) => {
        K._isLeaving = !1, wn(K, h), wn(K, m), wn(K, p), te && te()
    }, F = K => (te, J) => {
        const W = K ? U : A,
            O = () => D(te, K, J);
        bn(W, [te, O]), Zc(() => {
            wn(te, K ? l : o), Xt(te, K ? u : c), Jc(W) || el(te, r, w, O)
        })
    };
    return De(t, {
        onBeforeEnter(K) {
            bn($, [K]), Xt(K, o), Xt(K, a)
        },
        onBeforeAppear(K) {
            bn(H, [K]), Xt(K, l), Xt(K, f)
        },
        onEnter: F(!1),
        onAppear: F(!0),
        onLeave(K, te) {
            K._isLeaving = !0;
            const J = () => L(K, te);
            Xt(K, h), Ay(), Xt(K, p), Zc(() => {
                K._isLeaving && (wn(K, h), Xt(K, m), Jc(g) || el(K, r, N, J))
            }), bn(g, [K, J])
        },
        onEnterCancelled(K) {
            D(K, !1), bn(b, [K])
        },
        onAppearCancelled(K) {
            D(K, !0), bn(x, [K])
        },
        onLeaveCancelled(K) {
            L(K), bn(S, [K])
        }
    })
}

function by(e) {
    if (e == null) return null;
    if (Ae(e)) return [Zo(e.enter), Zo(e.leave)]; {
        const t = Zo(e);
        return [t, t]
    }
}

function Zo(e) {
    return _u(e)
}

function Xt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[ns] || (e[ns] = new Set)).add(t)
}

function wn(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[ns];
    n && (n.delete(t), n.size || (e[ns] = void 0))
}

function Zc(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let wy = 0;

function el(e, t, n, r) {
    const s = e._endId = ++wy,
        o = () => {
            s === e._endId && r()
        };
    if (n) return setTimeout(o, n);
    const {
        type: a,
        timeout: c,
        propCount: l
    } = Ty(e, t);
    if (!a) return r();
    const f = a + "end";
    let u = 0;
    const h = () => {
            e.removeEventListener(f, p), o()
        },
        p = m => {
            m.target === e && ++u >= l && h()
        };
    setTimeout(() => {
        u < l && h()
    }, c + 1), e.addEventListener(f, p)
}

function Ty(e, t) {
    const n = window.getComputedStyle(e),
        r = T => (n[T] || "").split(", "),
        s = r(`${Qt}Delay`),
        o = r(`${Qt}Duration`),
        a = tl(s, o),
        c = r(`${Lr}Delay`),
        l = r(`${Lr}Duration`),
        f = tl(c, l);
    let u = null,
        h = 0,
        p = 0;
    t === Qt ? a > 0 && (u = Qt, h = a, p = o.length) : t === Lr ? f > 0 && (u = Lr, h = f, p = l.length) : (h = Math.max(a, f), u = h > 0 ? a > f ? Qt : Lr : null, p = u ? u === Qt ? o.length : l.length : 0);
    const m = u === Qt && /\b(transform|all)(,|$)/.test(r(`${Qt}Property`).toString());
    return {
        type: u,
        timeout: h,
        propCount: p,
        hasTransform: m
    }
}

function tl(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, r) => nl(n) + nl(e[r])))
}

function nl(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function Ay() {
    return document.body.offsetHeight
}

function Cy(e, t, n) {
    const r = e[ns];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const ma = Symbol("_vod"),
    fC = {
        beforeMount(e, {
            value: t
        }, {
            transition: n
        }) {
            e[ma] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : xr(e, t)
        },
        mounted(e, {
            value: t
        }, {
            transition: n
        }) {
            n && t && n.enter(e)
        },
        updated(e, {
            value: t,
            oldValue: n
        }, {
            transition: r
        }) {
            !t != !n && (r ? t ? (r.beforeEnter(e), xr(e, !0), r.enter(e)) : r.leave(e, () => {
                xr(e, !1)
            }) : xr(e, t))
        },
        beforeUnmount(e, {
            value: t
        }) {
            xr(e, t)
        }
    };

function xr(e, t) {
    e.style.display = t ? e[ma] : "none"
}

function Sy(e, t, n) {
    const r = e.style,
        s = Le(n);
    if (n && !s) {
        if (t && !Le(t))
            for (const o in t) n[o] == null && bi(r, o, "");
        for (const o in n) bi(r, o, n[o])
    } else {
        const o = r.display;
        s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), ma in e && (r.display = o)
    }
}
const rl = /\s*!important$/;

function bi(e, t, n) {
    if (ie(n)) n.forEach(r => bi(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const r = Oy(e, t);
        rl.test(n) ? e.setProperty(br(r), n.replace(rl, ""), "important") : e[r] = n
    }
}
const sl = ["Webkit", "Moz", "ms"],
    ei = {};

function Oy(e, t) {
    const n = ei[t];
    if (n) return n;
    let r = Pt(t);
    if (r !== "filter" && r in e) return ei[t] = r;
    r = lo(r);
    for (let s = 0; s < sl.length; s++) {
        const o = sl[s] + r;
        if (o in e) return ei[t] = o
    }
    return t
}
const ol = "http://www.w3.org/1999/xlink";

function $y(e, t, n, r, s) {
    if (r && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(ol, t.slice(6, t.length)) : e.setAttributeNS(ol, t, n);
    else {
        const o = kg(t);
        n == null || o && !yu(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
    }
}

function Ry(e, t, n, r, s, o, a) {
    if (t === "innerHTML" || t === "textContent") {
        r && a(r, s, o), e[t] = n ? ? "";
        return
    }
    const c = e.tagName;
    if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
        e._value = n;
        const f = c === "OPTION" ? e.getAttribute("value") : e.value,
            u = n ? ? "";
        f !== u && (e.value = u), n == null && e.removeAttribute(t);
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const f = typeof e[t];
        f === "boolean" ? n = yu(n) : n == null && f === "string" ? (n = "", l = !0) : f === "number" && (n = 0, l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(t)
}

function jt(e, t, n, r) {
    e.addEventListener(t, n, r)
}

function Ny(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const il = Symbol("_vei");

function Py(e, t, n, r, s = null) {
    const o = e[il] || (e[il] = {}),
        a = o[t];
    if (r && a) a.value = r;
    else {
        const [c, l] = Ly(t);
        if (r) {
            const f = o[t] = Dy(r, s);
            jt(e, c, f, l)
        } else a && (Ny(e, c, a, l), o[t] = void 0)
    }
}
const al = /(?:Once|Passive|Capture)$/;

function Ly(e) {
    let t;
    if (al.test(e)) {
        t = {};
        let r;
        for (; r = e.match(al);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : br(e.slice(2)), t]
}
let ti = 0;
const xy = Promise.resolve(),
    Iy = () => ti || (xy.then(() => ti = 0), ti = Date.now());

function Dy(e, t) {
    const n = r => {
        if (!r._vts) r._vts = Date.now();
        else if (r._vts <= n.attached) return;
        mt(ky(r, n.value), t, 5, [r])
    };
    return n.value = e, n.attached = Iy(), n
}

function ky(e, t) {
    if (ie(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(r => s => !s._stopped && r && r(s))
    } else return t
}
const cl = /^on[a-z]/,
    My = (e, t, n, r, s = !1, o, a, c, l) => {
        t === "class" ? Cy(e, r, s) : t === "style" ? Sy(e, n, r) : is(t) ? Wi(t) || Py(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Hy(e, t, r, s)) ? Ry(e, t, r, o, a, c, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), $y(e, t, r, s))
    };

function Hy(e, t, n, r) {
    return r ? !!(t === "innerHTML" || t === "textContent" || t in e && cl.test(t) && ue(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || cl.test(t) && Le(n) ? !1 : t in e
}
const ln = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return ie(t) ? n => nr(t, n) : t
};

function jy(e) {
    e.target.composing = !0
}

function ll(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const gt = Symbol("_assign"),
    ul = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: n,
                number: r
            }
        }, s) {
            e[gt] = ln(s);
            const o = r || s.props && s.props.type === "number";
            jt(e, t ? "change" : "input", a => {
                if (a.target.composing) return;
                let c = e.value;
                n && (c = c.trim()), o && (c = qs(c)), e[gt](c)
            }), n && jt(e, "change", () => {
                e.value = e.value.trim()
            }), t || (jt(e, "compositionstart", jy), jt(e, "compositionend", ll), jt(e, "change", ll))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ? ? ""
        },
        beforeUpdate(e, {
            value: t,
            modifiers: {
                lazy: n,
                trim: r,
                number: s
            }
        }, o) {
            if (e[gt] = ln(o), e.composing || document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === t || (s || e.type === "number") && qs(e.value) === t)) return;
            const a = t ? ? "";
            e.value !== a && (e.value = a)
        }
    },
    Fy = {
        deep: !0,
        created(e, t, n) {
            e[gt] = ln(n), jt(e, "change", () => {
                const r = e._modelValue,
                    s = fr(e),
                    o = e.checked,
                    a = e[gt];
                if (ie(r)) {
                    const c = qi(r, s),
                        l = c !== -1;
                    if (o && !l) a(r.concat(s));
                    else if (!o && l) {
                        const f = [...r];
                        f.splice(c, 1), a(f)
                    }
                } else if (vr(r)) {
                    const c = new Set(r);
                    o ? c.add(s) : c.delete(s), a(c)
                } else a(Sf(e, o))
            })
        },
        mounted: fl,
        beforeUpdate(e, t, n) {
            e[gt] = ln(n), fl(e, t, n)
        }
    };

function fl(e, {
    value: t,
    oldValue: n
}, r) {
    e._modelValue = t, ie(t) ? e.checked = qi(t, r.props.value) > -1 : vr(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = In(t, Sf(e, !0)))
}
const By = {
        created(e, {
            value: t
        }, n) {
            e.checked = In(t, n.props.value), e[gt] = ln(n), jt(e, "change", () => {
                e[gt](fr(e))
            })
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n
        }, r) {
            e[gt] = ln(r), t !== n && (e.checked = In(t, r.props.value))
        }
    },
    Vy = {
        deep: !0,
        created(e, {
            value: t,
            modifiers: {
                number: n
            }
        }, r) {
            const s = vr(t);
            jt(e, "change", () => {
                const o = Array.prototype.filter.call(e.options, a => a.selected).map(a => n ? qs(fr(a)) : fr(a));
                e[gt](e.multiple ? s ? new Set(o) : o : o[0])
            }), e[gt] = ln(r)
        },
        mounted(e, {
            value: t
        }) {
            dl(e, t)
        },
        beforeUpdate(e, t, n) {
            e[gt] = ln(n)
        },
        updated(e, {
            value: t
        }) {
            dl(e, t)
        }
    };

function dl(e, t) {
    const n = e.multiple;
    if (!(n && !ie(t) && !vr(t))) {
        for (let r = 0, s = e.options.length; r < s; r++) {
            const o = e.options[r],
                a = fr(o);
            if (n) ie(t) ? o.selected = qi(t, a) > -1 : o.selected = t.has(a);
            else if (In(fr(o), t)) {
                e.selectedIndex !== r && (e.selectedIndex = r);
                return
            }
        }!n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}

function fr(e) {
    return "_value" in e ? e._value : e.value
}

function Sf(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const dC = {
    created(e, t, n) {
        ks(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        ks(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, r) {
        ks(e, t, n, r, "beforeUpdate")
    },
    updated(e, t, n, r) {
        ks(e, t, n, r, "updated")
    }
};

function Uy(e, t) {
    switch (e) {
        case "SELECT":
            return Vy;
        case "TEXTAREA":
            return ul;
        default:
            switch (t) {
                case "checkbox":
                    return Fy;
                case "radio":
                    return By;
                default:
                    return ul
            }
    }
}

function ks(e, t, n, r, s) {
    const a = Uy(e.tagName, n.props && n.props.type)[s];
    a && a(e, t, n, r)
}
const Wy = ["ctrl", "shift", "alt", "meta"],
    Ky = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => Wy.some(n => e[`${n}Key`] && !t.includes(n))
    },
    hC = (e, t) => (n, ...r) => {
        for (let s = 0; s < t.length; s++) {
            const o = Ky[t[s]];
            if (o && o(n, t)) return
        }
        return e(n, ...r)
    },
    Of = De({
        patchProp: My
    }, vy);
let Ur, hl = !1;

function Yy() {
    return Ur || (Ur = ry(Of))
}

function qy() {
    return Ur = hl ? Ur : sy(Of), hl = !0, Ur
}
const zy = (...e) => {
        const t = Yy().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const s = $f(r);
            if (!s) return;
            const o = t._component;
            !ue(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const a = n(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), a
        }, t
    },
    Gy = (...e) => {
        const t = qy().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const s = $f(r);
            if (s) return n(s, !0, s instanceof SVGElement)
        }, t
    };

function $f(e) {
    return Le(e) ? document.querySelector(e) : e
}
const Qy = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    Xy = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    Jy = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function Zy(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
        ev(e);
        return
    }
    return t
}

function ev(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}

function rs(e, t = {}) {
    if (typeof e != "string") return e;
    const n = e.trim();
    if (e[0] === '"' && e.at(-1) === '"' && !e.includes("\\")) return n.slice(1, -1);
    if (n.length <= 9) {
        const r = n.toLowerCase();
        if (r === "true") return !0;
        if (r === "false") return !1;
        if (r === "undefined") return;
        if (r === "null") return null;
        if (r === "nan") return Number.NaN;
        if (r === "infinity") return Number.POSITIVE_INFINITY;
        if (r === "-infinity") return Number.NEGATIVE_INFINITY
    }
    if (!Jy.test(e)) {
        if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (Qy.test(e) || Xy.test(e)) {
            if (t.strict) throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, Zy)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict) throw r;
        return e
    }
}
const tv = /#/g,
    nv = /&/g,
    rv = /\//g,
    sv = /=/g,
    ga = /\+/g,
    ov = /%5e/gi,
    iv = /%60/gi,
    av = /%7c/gi,
    cv = /%20/gi;

function lv(e) {
    return encodeURI("" + e).replace(av, "|")
}

function wi(e) {
    return lv(typeof e == "string" ? e : JSON.stringify(e)).replace(ga, "%2B").replace(cv, "+").replace(tv, "%23").replace(nv, "%26").replace(iv, "`").replace(ov, "^").replace(rv, "%2F")
}

function ni(e) {
    return wi(e).replace(sv, "%3D")
}

function to(e = "") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}

function uv(e) {
    return to(e.replace(ga, " "))
}

function fv(e) {
    return to(e.replace(ga, " "))
}

function dv(e = "") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2) continue;
        const s = uv(r[1]);
        if (s === "__proto__" || s === "constructor") continue;
        const o = fv(r[2] || "");
        t[s] === void 0 ? t[s] = o : Array.isArray(t[s]) ? t[s].push(o) : t[s] = [t[s], o]
    }
    return t
}

function hv(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map(n => `${ni(e)}=${wi(n)}`).join("&") : `${ni(e)}=${wi(t)}` : ni(e)
}

function pv(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => hv(t, e[t])).filter(Boolean).join("&")
}
const mv = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
    gv = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
    _v = /^([/\\]\s*){2,}[^/\\]/,
    yv = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
    vv = /\/$|\/\?|\/#/,
    Ev = /^\.?\//;

function ls(e, t = {}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }), t.strict ? mv.test(e) : gv.test(e) || (t.acceptRelative ? _v.test(e) : !1)
}

function bv(e) {
    return !!e && yv.test(e)
}

function Ti(e = "", t) {
    return t ? vv.test(e) : e.endsWith("/")
}

function Rf(e = "", t) {
    if (!t) return (Ti(e) ? e.slice(0, -1) : e) || "/";
    if (!Ti(e, !0)) return e || "/";
    let n = e,
        r = "";
    const s = e.indexOf("#");
    s >= 0 && (n = e.slice(0, s), r = e.slice(s));
    const [o, ...a] = n.split("?");
    return ((o.endsWith("/") ? o.slice(0, -1) : o) || "/") + (a.length > 0 ? `?${a.join("?")}` : "") + r
}

function Ai(e = "", t) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (Ti(e, !0)) return e || "/";
    let n = e,
        r = "";
    const s = e.indexOf("#");
    if (s >= 0 && (n = e.slice(0, s), r = e.slice(s), !n)) return r;
    const [o, ...a] = n.split("?");
    return o + "/" + (a.length > 0 ? `?${a.join("?")}` : "") + r
}

function wv(e = "") {
    return e.startsWith("/")
}

function pl(e = "") {
    return wv(e) ? e : "/" + e
}

function Tv(e, t) {
    if (Pf(t) || ls(e)) return e;
    const n = Rf(t);
    return e.startsWith(n) ? e : Hn(n, e)
}

function ml(e, t) {
    if (Pf(t)) return e;
    const n = Rf(t);
    if (!e.startsWith(n)) return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}

function Nf(e, t) {
    const n = Ao(e),
        r = { ...dv(n.search),
            ...t
        };
    return n.search = pv(r), Sv(n)
}

function Pf(e) {
    return !e || e === "/"
}

function Av(e) {
    return e && e !== "/"
}

function Hn(e, ...t) {
    let n = e || "";
    for (const r of t.filter(s => Av(s)))
        if (n) {
            const s = r.replace(Ev, "");
            n = Ai(n) + s
        } else n = r;
    return n
}

function Cv(e, t, n = {}) {
    return n.trailingSlash || (e = Ai(e), t = Ai(t)), n.leadingSlash || (e = pl(e), t = pl(t)), n.encoding || (e = to(e), t = to(t)), e === t
}
const Lf = Symbol.for("ufo:protocolRelative");

function Ao(e = "", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [, h, p = ""] = n;
        return {
            protocol: h.toLowerCase(),
            pathname: p,
            href: h + p,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!ls(e, {
            acceptRelative: !0
        })) return t ? Ao(t + e) : gl(e);
    const [, r = "", s, o = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, a = "", c = ""] = o.match(/([^#/?]*)(.*)?/) || [], {
        pathname: l,
        search: f,
        hash: u
    } = gl(c.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: r.toLowerCase(),
        auth: s ? s.slice(0, Math.max(0, s.length - 1)) : "",
        host: a,
        pathname: l,
        search: f,
        hash: u,
        [Lf]: !r
    }
}

function gl(e = "") {
    const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}

function Sv(e) {
    const t = e.pathname || "",
        n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
        r = e.hash || "",
        s = e.auth ? e.auth + "@" : "",
        o = e.host || "";
    return (e.protocol || e[Lf] ? (e.protocol || "") + "//" : "") + s + o + t + n + r
}
class Ov extends Error {
    constructor(t, n) {
        super(t, n), this.name = "FetchError", n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}

function $v(e) {
    var l, f, u, h, p;
    const t = ((l = e.error) == null ? void 0 : l.message) || ((f = e.error) == null ? void 0 : f.toString()) || "",
        n = ((u = e.request) == null ? void 0 : u.method) || ((h = e.options) == null ? void 0 : h.method) || "GET",
        r = ((p = e.request) == null ? void 0 : p.url) || String(e.request) || "/",
        s = `[${n}] ${JSON.stringify(r)}`,
        o = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>",
        a = `${s}: ${o}${t?` ${t}`:""}`,
        c = new Ov(a, e.error ? {
            cause: e.error
        } : void 0);
    for (const m of ["request", "options", "response"]) Object.defineProperty(c, m, {
        get() {
            return e[m]
        }
    });
    for (const [m, T] of [
            ["data", "_data"],
            ["status", "status"],
            ["statusCode", "status"],
            ["statusText", "statusText"],
            ["statusMessage", "statusText"]
        ]) Object.defineProperty(c, m, {
        get() {
            return e.response && e.response[T]
        }
    });
    return c
}
const Rv = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function _l(e = "GET") {
    return Rv.has(e.toUpperCase())
}

function Nv(e) {
    if (e === void 0) return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const Pv = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
    Lv = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function xv(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return Lv.test(t) ? "json" : Pv.has(t) || t.startsWith("text/") ? "text" : "blob"
}

function Iv(e, t, n = globalThis.Headers) {
    const r = { ...t,
        ...e
    };
    if (t != null && t.params && (e != null && e.params) && (r.params = { ...t == null ? void 0 : t.params,
            ...e == null ? void 0 : e.params
        }), t != null && t.query && (e != null && e.query) && (r.query = { ...t == null ? void 0 : t.query,
            ...e == null ? void 0 : e.query
        }), t != null && t.headers && (e != null && e.headers)) {
        r.headers = new n((t == null ? void 0 : t.headers) || {});
        for (const [s, o] of new n((e == null ? void 0 : e.headers) || {})) r.headers.set(s, o)
    }
    return r
}
const Dv = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
    kv = new Set([101, 204, 205, 304]);

function xf(e = {}) {
    const {
        fetch: t = globalThis.fetch,
        Headers: n = globalThis.Headers,
        AbortController: r = globalThis.AbortController
    } = e;
    async function s(c) {
        const l = c.error && c.error.name === "AbortError" && !c.options.timeout || !1;
        if (c.options.retry !== !1 && !l) {
            let u;
            typeof c.options.retry == "number" ? u = c.options.retry : u = _l(c.options.method) ? 0 : 1;
            const h = c.response && c.response.status || 500;
            if (u > 0 && (Array.isArray(c.options.retryStatusCodes) ? c.options.retryStatusCodes.includes(h) : Dv.has(h))) {
                const p = c.options.retryDelay || 0;
                return p > 0 && await new Promise(m => setTimeout(m, p)), o(c.request, { ...c.options,
                    retry: u - 1,
                    timeout: c.options.timeout
                })
            }
        }
        const f = $v(c);
        throw Error.captureStackTrace && Error.captureStackTrace(f, o), f
    }
    const o = async function(l, f = {}) {
            var p;
            const u = {
                request: l,
                options: Iv(f, e.defaults, n),
                response: void 0,
                error: void 0
            };
            if (u.options.method = (p = u.options.method) == null ? void 0 : p.toUpperCase(), u.options.onRequest && await u.options.onRequest(u), typeof u.request == "string" && (u.options.baseURL && (u.request = Tv(u.request, u.options.baseURL)), (u.options.query || u.options.params) && (u.request = Nf(u.request, { ...u.options.params,
                    ...u.options.query
                }))), u.options.body && _l(u.options.method) && (Nv(u.options.body) ? (u.options.body = typeof u.options.body == "string" ? u.options.body : JSON.stringify(u.options.body), u.options.headers = new n(u.options.headers || {}), u.options.headers.has("content-type") || u.options.headers.set("content-type", "application/json"), u.options.headers.has("accept") || u.options.headers.set("accept", "application/json")) : ("pipeTo" in u.options.body && typeof u.options.body.pipeTo == "function" || typeof u.options.body.pipe == "function") && ("duplex" in u.options || (u.options.duplex = "half"))), !u.options.signal && u.options.timeout) {
                const m = new r;
                setTimeout(() => m.abort(), u.options.timeout), u.options.signal = m.signal
            }
            try {
                u.response = await t(u.request, u.options)
            } catch (m) {
                return u.error = m, u.options.onRequestError && await u.options.onRequestError(u), await s(u)
            }
            if (u.response.body && !kv.has(u.response.status) && u.options.method !== "HEAD") {
                const m = (u.options.parseResponse ? "json" : u.options.responseType) || xv(u.response.headers.get("content-type") || "");
                switch (m) {
                    case "json":
                        {
                            const T = await u.response.text(),
                                w = u.options.parseResponse || rs;u.response._data = w(T);
                            break
                        }
                    case "stream":
                        {
                            u.response._data = u.response.body;
                            break
                        }
                    default:
                        u.response._data = await u.response[m]()
                }
            }
            return u.options.onResponse && await u.options.onResponse(u), !u.options.ignoreResponseError && u.response.status >= 400 && u.response.status < 600 ? (u.options.onResponseError && await u.options.onResponseError(u), await s(u)) : u.response
        },
        a = async function(l, f) {
            return (await o(l, f))._data
        };
    return a.raw = o, a.native = (...c) => t(...c), a.create = (c = {}) => xf({ ...e,
        defaults: { ...e.defaults,
            ...c
        }
    }), a
}
const _a = function() {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object")
    }(),
    Mv = _a.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
    Hv = _a.Headers,
    jv = _a.AbortController,
    Fv = xf({
        fetch: Mv,
        Headers: Hv,
        AbortController: jv
    }),
    Bv = Fv,
    Vv = () => {
        var e;
        return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
    },
    no = Vv().app,
    Uv = () => no.baseURL,
    Wv = () => no.buildAssetsDir,
    Kv = (...e) => Hn(If(), Wv(), ...e),
    If = (...e) => {
        const t = no.cdnURL || no.baseURL;
        return e.length ? Hn(t, ...e) : t
    };
globalThis.__buildAssetsURL = Kv, globalThis.__publicAssetsURL = If;

function Ci(e, t = {}, n) {
    for (const r in e) {
        const s = e[r],
            o = n ? `${n}:${r}` : r;
        typeof s == "object" && s !== null ? Ci(s, t, o) : typeof s == "function" && (t[o] = s)
    }
    return t
}
const Yv = {
        run: e => e()
    },
    qv = () => Yv,
    Df = typeof console.createTask < "u" ? console.createTask : qv;

function zv(e, t) {
    const n = t.shift(),
        r = Df(n);
    return e.reduce((s, o) => s.then(() => r.run(() => o(...t))), Promise.resolve())
}

function Gv(e, t) {
    const n = t.shift(),
        r = Df(n);
    return Promise.all(e.map(s => r.run(() => s(...t))))
}

function ri(e, t) {
    for (const n of [...e]) n(t)
}
class Qv {
    constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r = {}) {
        if (!t || typeof n != "function") return () => {};
        const s = t;
        let o;
        for (; this._deprecatedHooks[t];) o = this._deprecatedHooks[t], t = o.to;
        if (o && !r.allowDeprecated) {
            let a = o.message;
            a || (a = `${s} hook has been deprecated` + (o.to ? `, please use ${o.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(a) || (console.warn(a), this._deprecatedMessages.add(a))
        }
        if (!n.name) try {
            Object.defineProperty(n, "name", {
                get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                configurable: !0
            })
        } catch {}
        return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
            n && (this.removeHook(t, n), n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, s = (...o) => (typeof r == "function" && r(), r = void 0, s = void 0, n(...o));
        return r = this.hook(t, s), r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const s of r) this.hook(t, s)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t) this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = Ci(t),
            r = Object.keys(n).map(s => this.hook(s, n[s]));
        return () => {
            for (const s of r.splice(0, r.length)) s()
        }
    }
    removeHooks(t) {
        const n = Ci(t);
        for (const r in n) this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks) delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t), this.callHookWith(zv, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t), this.callHookWith(Gv, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const s = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && ri(this._before, s);
        const o = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return o instanceof Promise ? o.finally(() => {
            this._after && s && ri(this._after, s)
        }) : (this._after && s && ri(this._after, s), o)
    }
    beforeEach(t) {
        return this._before = this._before || [], this._before.push(t), () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [], this._after.push(t), () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}

function kf() {
    return new Qv
}

function Xv(e = {}) {
    let t, n = !1;
    const r = a => {
        if (t && t !== a) throw new Error("Context conflict")
    };
    let s;
    if (e.asyncContext) {
        const a = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        a ? s = new a : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const o = () => {
        if (s && t === void 0) {
            const a = s.getStore();
            if (a !== void 0) return a
        }
        return t
    };
    return {
        use: () => {
            const a = o();
            if (a === void 0) throw new Error("Context is not available");
            return a
        },
        tryUse: () => o(),
        set: (a, c) => {
            c || r(a), t = a, n = !0
        },
        unset: () => {
            t = void 0, n = !1
        },
        call: (a, c) => {
            r(a), t = a;
            try {
                return s ? s.run(a, c) : c()
            } finally {
                n || (t = void 0)
            }
        },
        async callAsync(a, c) {
            t = a;
            const l = () => {
                    t = a
                },
                f = () => t === a ? l : void 0;
            Si.add(f);
            try {
                const u = s ? s.run(a, c) : c();
                return n || (t = void 0), await u
            } finally {
                Si.delete(f)
            }
        }
    }
}

function Jv(e = {}) {
    const t = {};
    return {
        get(n, r = {}) {
            return t[n] || (t[n] = Xv({ ...e,
                ...r
            })), t[n], t[n]
        }
    }
}
const ro = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
    yl = "__unctx__",
    Zv = ro[yl] || (ro[yl] = Jv()),
    eE = (e, t = {}) => Zv.get(e, t),
    vl = "__unctx_async_handlers__",
    Si = ro[vl] || (ro[vl] = new Set);

function ss(e) {
    const t = [];
    for (const s of Si) {
        const o = s();
        o && t.push(o)
    }
    const n = () => {
        for (const s of t) s()
    };
    let r = e();
    return r && typeof r == "object" && "catch" in r && (r = r.catch(s => {
        throw n(), s
    })), [r, n]
}
const Mf = eE("nuxt-app", {
        asyncContext: !1
    }),
    tE = "__nuxt_plugin";

function nE(e) {
    let t = 0;
    const n = {
        _scope: zi(),
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.8.0"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: Tt({
            data: {},
            state: {},
            _errors: {},
            ...window.__NUXT__ ? ? {}
        }),
        static: {
            data: {}
        },
        runWithContext: s => n._scope.run(() => oE(n, s)),
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating) return () => {};
            t++;
            let s = !1;
            return () => {
                if (!s && (s = !0, t--, t === 0)) return n.isHydrating = !1, n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: {},
        _payloadRevivers: {},
        ...e
    };
    n.hooks = kf(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (s, o) => {
        const a = "$" + s;
        Ms(n, a, o), Ms(n.vueApp.config.globalProperties, a, o)
    }, Ms(n.vueApp, "$nuxt", n), Ms(n.vueApp.config.globalProperties, "$nuxt", n); {
        window.addEventListener("nuxt.preloadError", o => {
            n.callHook("app:chunkError", {
                error: o.payload
            })
        }), window.useNuxtApp = window.useNuxtApp || Se;
        const s = n.hook("app:error", (...o) => {
            console.error("[nuxt] error caught during app initialization", ...o)
        });
        n.hook("app:mounted", s)
    }
    const r = Tt(n.payload.config);
    return n.provide("config", r), n
}
async function rE(e, t) {
    if (t.hooks && e.hooks.addHooks(t.hooks), typeof t == "function") {
        const {
            provide: n
        } = await e.runWithContext(() => t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n) e.provide(r, n[r])
    }
}
async function sE(e, t) {
    const n = [],
        r = [];
    for (const s of t) {
        const o = rE(e, s);
        s.parallel ? n.push(o.catch(a => r.push(a))) : await o
    }
    if (await Promise.all(n), r.length) throw r[0]
} /*! @__NO_SIDE_EFFECTS__ */
function He(e) {
    return typeof e == "function" ? e : (delete e.name, Object.assign(e.setup || (() => {}), e, {
        [tE]: !0
    }))
}

function oE(e, t, n) {
    const r = () => n ? t(...n) : t();
    return Mf.set(e), e.vueApp.runWithContext(r)
} /*! @__NO_SIDE_EFFECTS__ */
function Se() {
    var t;
    let e;
    if (fa() && (e = (t = bo()) == null ? void 0 : t.appContext.app.$nuxt), e = e || Mf.tryUse(), !e) throw new Error("[nuxt] instance unavailable");
    return e
} /*! @__NO_SIDE_EFFECTS__ */
function Cr() {
    return Se().$config
}

function Ms(e, t, n) {
    Object.defineProperty(e, t, {
        get: () => n
    })
}
const iE = "modulepreload",
    aE = function(e, t) {
        return e[0] === "." ? new URL(e, t).href : e
    },
    El = {},
    cE = function(t, n, r) {
        if (!n || n.length === 0) return t();
        const s = document.getElementsByTagName("link");
        return Promise.all(n.map(o => {
            if (o = aE(o, r), o in El) return;
            El[o] = !0;
            const a = o.endsWith(".css"),
                c = a ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let u = s.length - 1; u >= 0; u--) {
                    const h = s[u];
                    if (h.href === o && (!a || h.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${o}"]${c}`)) return;
            const f = document.createElement("link");
            if (f.rel = a ? "stylesheet" : iE, a || (f.as = "script", f.crossOrigin = ""), f.href = o, document.head.appendChild(f), a) return new Promise((u, h) => {
                f.addEventListener("load", u), f.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${o}`)))
            })
        })).then(() => t()).catch(o => {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = o, window.dispatchEvent(a), !a.defaultPrevented) throw o
        })
    },
    Ce = (...e) => cE(...e).catch(t => {
        const n = new Event("nuxt.preloadError");
        throw n.payload = t, window.dispatchEvent(n), t
    }),
    lE = -1,
    uE = -2,
    fE = -3,
    dE = -4,
    hE = -5,
    pE = -6;

function mE(e, t) {
    return gE(JSON.parse(e), t)
}

function gE(e, t) {
    if (typeof e == "number") return s(e, !0);
    if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
    const n = e,
        r = Array(n.length);

    function s(o, a = !1) {
        if (o === lE) return;
        if (o === fE) return NaN;
        if (o === dE) return 1 / 0;
        if (o === hE) return -1 / 0;
        if (o === pE) return -0;
        if (a) throw new Error("Invalid input");
        if (o in r) return r[o];
        const c = n[o];
        if (!c || typeof c != "object") r[o] = c;
        else if (Array.isArray(c))
            if (typeof c[0] == "string") {
                const l = c[0],
                    f = t == null ? void 0 : t[l];
                if (f) return r[o] = f(s(c[1]));
                switch (l) {
                    case "Date":
                        r[o] = new Date(c[1]);
                        break;
                    case "Set":
                        const u = new Set;
                        r[o] = u;
                        for (let m = 1; m < c.length; m += 1) u.add(s(c[m]));
                        break;
                    case "Map":
                        const h = new Map;
                        r[o] = h;
                        for (let m = 1; m < c.length; m += 2) h.set(s(c[m]), s(c[m + 1]));
                        break;
                    case "RegExp":
                        r[o] = new RegExp(c[1], c[2]);
                        break;
                    case "Object":
                        r[o] = Object(c[1]);
                        break;
                    case "BigInt":
                        r[o] = BigInt(c[1]);
                        break;
                    case "null":
                        const p = Object.create(null);
                        r[o] = p;
                        for (let m = 1; m < c.length; m += 2) p[c[m]] = s(c[m + 1]);
                        break;
                    default:
                        throw new Error(`Unknown type ${l}`)
                }
            } else {
                const l = new Array(c.length);
                r[o] = l;
                for (let f = 0; f < c.length; f += 1) {
                    const u = c[f];
                    u !== uE && (l[f] = s(u))
                }
            }
        else {
            const l = {};
            r[o] = l;
            for (const f in c) {
                const u = c[f];
                l[f] = s(u)
            }
        }
        return r[o]
    }
    return s(0)
}

function _E(e) {
    return Array.isArray(e) ? e : [e]
}
const yE = ["title", "titleTemplate", "script", "style", "noscript"],
    Vs = ["base", "meta", "link", "style", "script", "noscript"],
    vE = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"],
    EE = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"],
    Hf = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"],
    bE = typeof window < "u";

function ya(e) {
    let t = 9;
    for (let n = 0; n < e.length;) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}

function bl(e) {
    return e._h || ya(e._d ? e._d : `${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)
}

function jf(e, t) {
    const {
        props: n,
        tag: r
    } = e;
    if (EE.includes(r)) return r;
    if (r === "link" && n.rel === "canonical") return "canonical";
    if (n.charset) return "charset";
    const s = ["id"];
    r === "meta" && s.push("name", "property", "http-equiv");
    for (const o of s)
        if (typeof n[o] < "u") {
            const a = String(n[o]);
            return t && !t(a) ? !1 : `${r}:${o}:${a}`
        }
    return !1
}

function wl(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
async function wE(e, t, n) {
    const r = {
        tag: e,
        props: await Ff(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? { ...t
        } : {
            [
                ["script", "noscript", "style"].includes(e) ? "innerHTML" : "textContent"
            ]: t
        }, ["templateParams", "titleTemplate"].includes(e))
    };
    return Hf.forEach(s => {
        const o = typeof r.props[s] < "u" ? r.props[s] : n[s];
        typeof o < "u" && ((!["innerHTML", "textContent"].includes(s) || yE.includes(r.tag)) && (r[s] = o), delete r.props[s])
    }), r.props.body && (r.tagPosition = "bodyClose", delete r.props.body), r.props.children && (r.innerHTML = r.props.children, delete r.props.children), r.tag === "script" && (typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML), r.props.type = r.props.type || "application/json"), r.innerHTML && ["application/ld+json", "application/json"].includes(r.props.type) && (r.innerHTML = r.innerHTML.replace(/</g, "\\u003C"))), Array.isArray(r.props.content) ? r.props.content.map(s => ({ ...r,
        props: { ...r.props,
            content: s
        }
    })) : r
}

function TE(e) {
    return typeof e == "object" && !Array.isArray(e) && (e = Object.keys(e).filter(t => e[t])), (Array.isArray(e) ? e.join(" ") : e).split(" ").filter(t => t.trim()).filter(Boolean).join(" ")
}
async function Ff(e, t) {
    for (const n of Object.keys(e)) {
        if (n === "class") {
            e[n] = TE(e[n]);
            continue
        }
        if (e[n] instanceof Promise && (e[n] = await e[n]), !t && !Hf.includes(n)) {
            const r = String(e[n]),
                s = n.startsWith("data-");
            r === "true" || r === "" ? e[n] = s ? "true" : !0 : e[n] || (s && r === "false" ? e[n] = "false" : delete e[n])
        }
    }
    return e
}
const AE = 10;
async function CE(e) {
    const t = [];
    return Object.entries(e.resolvedInput).filter(([n, r]) => typeof r < "u" && vE.includes(n)).forEach(([n, r]) => {
        const s = _E(r);
        t.push(...s.map(o => wE(n, o, e)).flat())
    }), (await Promise.all(t)).flat().filter(Boolean).map((n, r) => (n._e = e._i, e.mode && (n._m = e.mode), n._p = (e._i << AE) + r, n))
}
const Tl = {
        base: -10,
        title: 10
    },
    Al = {
        critical: -80,
        high: -10,
        low: 20
    };

function so(e) {
    let t = 100;
    const n = e.tagPriority;
    return typeof n == "number" ? n : (e.tag === "meta" ? (e.props["http-equiv"] === "content-security-policy" && (t = -30), e.props.charset && (t = -20), e.props.name === "viewport" && (t = -15)) : e.tag === "link" && e.props.rel === "preconnect" ? t = 20 : e.tag in Tl && (t = Tl[e.tag]), typeof n == "string" && n in Al ? t + Al[n] : t)
}
const SE = [{
        prefix: "before:",
        offset: -1
    }, {
        prefix: "after:",
        offset: 1
    }],
    Bf = ["onload", "onerror", "onabort", "onprogress", "onloadstart"],
    Jt = "%separator";

function Us(e, t, n) {
    if (typeof e != "string" || !e.includes("%")) return e;

    function r(a) {
        let c;
        return ["s", "pageTitle"].includes(a) ? c = t.pageTitle : a.includes(".") ? c = a.split(".").reduce((l, f) => l && l[f] || void 0, t) : c = t[a], typeof c < "u" ? (c || "").replace(/"/g, '\\"') : !1
    }
    let s = e;
    try {
        s = decodeURI(e)
    } catch {}
    return (s.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach(a => {
        const c = r(a.slice(1));
        typeof c == "string" && (e = e.replace(new RegExp(`\\${a}(\\W|$)`, "g"), (l, f) => `${c}${f}`).trim())
    }), e.includes(Jt) && (e.endsWith(Jt) && (e = e.slice(0, -Jt.length).trim()), e.startsWith(Jt) && (e = e.slice(Jt.length).trim()), e = e.replace(new RegExp(`\\${Jt}\\s*\\${Jt}`, "g"), Jt), e = Us(e, {
        separator: n
    }, n)), e
}
async function OE(e) {
    const t = {
        tag: e.tagName.toLowerCase(),
        props: await Ff(e.getAttributeNames().reduce((n, r) => ({ ...n,
            [r]: e.getAttribute(r)
        }), {})),
        innerHTML: e.innerHTML
    };
    return t._d = jf(t), t
}
async function Vf(e, t = {}) {
    var u;
    const n = t.document || e.resolvedOptions.document;
    if (!n) return;
    const r = {
        shouldRender: e.dirty,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r), !r.shouldRender) return;
    const s = (await e.resolveTags()).map(h => ({
        tag: h,
        id: Vs.includes(h.tag) ? bl(h) : h.tag,
        shouldRender: !0
    }));
    let o = e._dom;
    if (!o) {
        o = {
            elMap: {
                htmlAttrs: n.documentElement,
                bodyAttrs: n.body
            }
        };
        for (const h of ["body", "head"]) {
            const p = (u = n == null ? void 0 : n[h]) == null ? void 0 : u.children;
            for (const m of [...p].filter(T => Vs.includes(T.tagName.toLowerCase()))) o.elMap[m.getAttribute("data-hid") || bl(await OE(m))] = m
        }
    }
    o.pendingSideEffects = { ...o.sideEffects || {}
    }, o.sideEffects = {};

    function a(h, p, m) {
        const T = `${h}:${p}`;
        o.sideEffects[T] = m, delete o.pendingSideEffects[T]
    }

    function c({
        id: h,
        $el: p,
        tag: m
    }) {
        const T = m.tag.endsWith("Attrs");
        o.elMap[h] = p, T || (["textContent", "innerHTML"].forEach(w => {
            m[w] && m[w] !== p[w] && (p[w] = m[w])
        }), a(h, "el", () => {
            o.elMap[h].remove(), delete o.elMap[h]
        })), Object.entries(m.props).forEach(([w, N]) => {
            const $ = `attr:${w}`;
            if (w === "class")
                for (const A of (N || "").split(" ").filter(Boolean)) T && a(h, `${$}:${A}`, () => p.classList.remove(A)), !p.classList.contains(A) && p.classList.add(A);
            else p.getAttribute(w) !== N && p.setAttribute(w, N === !0 ? "" : String(N)), T && a(h, $, () => p.removeAttribute(w))
        })
    }
    const l = [],
        f = {
            bodyClose: void 0,
            bodyOpen: void 0,
            head: void 0
        };
    for (const h of s) {
        const {
            tag: p,
            shouldRender: m,
            id: T
        } = h;
        if (m) {
            if (p.tag === "title") {
                n.title = p.textContent;
                continue
            }
            h.$el = h.$el || o.elMap[T], h.$el ? c(h) : Vs.includes(p.tag) && l.push(h)
        }
    }
    for (const h of l) {
        const p = h.tag.tagPosition || "head";
        h.$el = n.createElement(h.tag.tag), c(h), f[p] = f[p] || n.createDocumentFragment(), f[p].appendChild(h.$el)
    }
    for (const h of s) await e.hooks.callHook("dom:renderTag", h, n, a);
    f.head && n.head.appendChild(f.head), f.bodyOpen && n.body.insertBefore(f.bodyOpen, n.body.firstChild), f.bodyClose && n.body.appendChild(f.bodyClose), Object.values(o.pendingSideEffects).forEach(h => h()), e._dom = o, e.dirty = !1, await e.hooks.callHook("dom:rendered", {
        renders: s
    })
}
async function $E(e, t = {}) {
    const n = t.delayFn || (r => setTimeout(r, 10));
    return e._domUpdatePromise = e._domUpdatePromise || new Promise(r => n(async () => {
        await Vf(e, t), delete e._domUpdatePromise, r()
    }))
}

function RE(e) {
    return t => {
        var r, s;
        const n = ((s = (r = t.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : s.innerHTML) || !1;
        return n && t.push(JSON.parse(n)), {
            mode: "client",
            hooks: {
                "entries:updated": function(o) {
                    $E(o, e)
                }
            }
        }
    }
}
const NE = ["templateParams", "htmlAttrs", "bodyAttrs"],
    PE = {
        hooks: {
            "tag:normalise": function({
                tag: e
            }) {
                ["hid", "vmid", "key"].forEach(r => {
                    e.props[r] && (e.key = e.props[r], delete e.props[r])
                });
                const n = jf(e) || (e.key ? `${e.tag}:${e.key}` : !1);
                n && (e._d = n)
            },
            "tags:resolve": function(e) {
                const t = {};
                e.tags.forEach(r => {
                    const s = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p,
                        o = t[s];
                    if (o) {
                        let c = r == null ? void 0 : r.tagDuplicateStrategy;
                        if (!c && NE.includes(r.tag) && (c = "merge"), c === "merge") {
                            const l = o.props;
                            ["class", "style"].forEach(f => {
                                r.props[f] && l[f] && (f === "style" && !l[f].endsWith(";") && (l[f] += ";"), r.props[f] = `${l[f]} ${r.props[f]}`)
                            }), t[s].props = { ...l,
                                ...r.props
                            };
                            return
                        } else if (r._e === o._e) {
                            o._duped = o._duped || [], r._d = `${o._d}:${o._duped.length+1}`, o._duped.push(r);
                            return
                        } else if (so(r) > so(o)) return
                    }
                    const a = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
                    if (Vs.includes(r.tag) && a === 0) {
                        delete t[s];
                        return
                    }
                    t[s] = r
                });
                const n = [];
                Object.values(t).forEach(r => {
                    const s = r._duped;
                    delete r._duped, n.push(r), s && n.push(...s)
                }), e.tags = n, e.tags = e.tags.filter(r => !(r.tag === "meta" && (r.props.name || r.props.property) && !r.props.content))
            }
        }
    },
    LE = {
        mode: "server",
        hooks: {
            "tags:resolve": function(e) {
                const t = {};
                e.tags.filter(n => ["titleTemplate", "templateParams", "title"].includes(n.tag) && n._m === "server").forEach(n => {
                    t[n.tag] = n.tag.startsWith("title") ? n.textContent : n.props
                }), Object.keys(t).length && e.tags.push({
                    tag: "script",
                    innerHTML: JSON.stringify(t),
                    props: {
                        id: "unhead:payload",
                        type: "application/json"
                    }
                })
            }
        }
    },
    xE = ["script", "link", "bodyAttrs"];

function IE(e) {
    const t = {},
        n = {};
    return Object.entries(e.props).forEach(([r, s]) => {
        r.startsWith("on") && typeof s == "function" ? (Bf.includes(r) && (t[r] = `this.dataset.${r} = true`), n[r] = s) : t[r] = s
    }), {
        props: t,
        eventHandlers: n
    }
}
const DE = e => ({
        hooks: {
            "tags:resolve": function(t) {
                for (const n of t.tags)
                    if (xE.includes(n.tag)) {
                        const {
                            props: r,
                            eventHandlers: s
                        } = IE(n);
                        n.props = r, Object.keys(s).length && ((n.props.src || n.props.href) && (n.key = n.key || ya(n.props.src || n.props.href)), n._eventHandlers = s)
                    }
            },
            "dom:renderTag": function(t, n, r) {
                if (!t.tag._eventHandlers) return;
                const s = t.tag.tag === "bodyAttrs" ? n.defaultView : t.$el;
                Object.entries(t.tag._eventHandlers).forEach(([o, a]) => {
                    const c = `${t.tag._d||t.tag._p}:${o}`,
                        l = o.slice(2).toLowerCase(),
                        f = `data-h-${l}`;
                    if (r(t.id, c, () => {}), t.$el.hasAttribute(f)) return;
                    t.$el.setAttribute(f, "");
                    let u;
                    const h = p => {
                        a(p), u == null || u.disconnect()
                    };
                    o in t.$el.dataset ? h(new Event(o.replace("on", ""))) : Bf.includes(o) && typeof MutationObserver < "u" ? (u = new MutationObserver(p => {
                        p.some(T => T.attributeName === `data-${o}`) && (h(new Event(o.replace("on", ""))), u == null || u.disconnect())
                    }), u.observe(t.$el, {
                        attributes: !0
                    })) : s.addEventListener(l, h), r(t.id, c, () => {
                        u == null || u.disconnect(), s.removeEventListener(l, h), t.$el.removeAttribute(f)
                    })
                })
            }
        }
    }),
    kE = ["link", "style", "script", "noscript"],
    ME = {
        hooks: {
            "tag:normalise": ({
                tag: e
            }) => {
                e.key && kE.includes(e.tag) && (e.props["data-hid"] = e._h = ya(e.key))
            }
        }
    },
    HE = {
        hooks: {
            "tags:resolve": e => {
                const t = n => {
                    var r;
                    return (r = e.tags.find(s => s._d === n)) == null ? void 0 : r._p
                };
                for (const {
                        prefix: n,
                        offset: r
                    } of SE)
                    for (const s of e.tags.filter(o => typeof o.tagPriority == "string" && o.tagPriority.startsWith(n))) {
                        const o = t(s.tagPriority.replace(n, ""));
                        typeof o < "u" && (s._p = o + r)
                    }
                e.tags.sort((n, r) => n._p - r._p).sort((n, r) => so(n) - so(r))
            }
        }
    },
    jE = {
        meta: "content",
        link: "href",
        htmlAttrs: "lang"
    },
    FE = {
        hooks: {
            "tags:resolve": e => {
                var a;
                const {
                    tags: t
                } = e, n = (a = t.find(c => c.tag === "title")) == null ? void 0 : a.textContent, r = t.findIndex(c => c.tag === "templateParams"), s = r !== -1 ? t[r].props : {}, o = s.separator || "|";
                delete s.separator, s.pageTitle = Us(s.pageTitle || n || "", s, o);
                for (const c of t.filter(l => l.processTemplateParams !== !1)) {
                    const l = jE[c.tag];
                    l && typeof c.props[l] == "string" ? c.props[l] = Us(c.props[l], s, o) : (c.processTemplateParams === !0 || ["titleTemplate", "title"].includes(c.tag)) && ["innerHTML", "textContent"].forEach(f => {
                        typeof c[f] == "string" && (c[f] = Us(c[f], s, o))
                    })
                }
                e.tags = t.filter(c => c.tag !== "templateParams")
            }
        }
    },
    BE = {
        hooks: {
            "tags:resolve": e => {
                const {
                    tags: t
                } = e;
                let n = t.findIndex(s => s.tag === "titleTemplate");
                const r = t.findIndex(s => s.tag === "title");
                if (r !== -1 && n !== -1) {
                    const s = wl(t[n].textContent, t[r].textContent);
                    s !== null ? t[r].textContent = s || t[r].textContent : delete t[r]
                } else if (n !== -1) {
                    const s = wl(t[n].textContent);
                    s !== null && (t[n].textContent = s, t[n].tag = "title", n = -1)
                }
                n !== -1 && delete t[n], e.tags = t.filter(Boolean)
            }
        }
    };
let Uf;

function VE(e = {}) {
    const t = UE(e);
    return t.use(RE()), Uf = t
}

function Cl(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}

function UE(e = {}) {
    const t = kf();
    t.addHooks(e.hooks || {}), e.document = e.document || (bE ? document : void 0);
    const n = !e.document,
        r = () => {
            c.dirty = !0, t.callHook("entries:updated", c)
        };
    let s = 0,
        o = [];
    const a = [],
        c = {
            plugins: a,
            dirty: !1,
            resolvedOptions: e,
            hooks: t,
            headEntries() {
                return o
            },
            use(l) {
                const f = typeof l == "function" ? l(c) : l;
                (!f.key || !a.some(u => u.key === f.key)) && (a.push(f), Cl(f.mode, n) && t.addHooks(f.hooks || {}))
            },
            push(l, f) {
                f == null || delete f.head;
                const u = {
                    _i: s++,
                    input: l,
                    ...f
                };
                return Cl(u.mode, n) && (o.push(u), r()), {
                    dispose() {
                        o = o.filter(h => h._i !== u._i), t.callHook("entries:updated", c), r()
                    },
                    patch(h) {
                        o = o.map(p => (p._i === u._i && (p.input = u.input = h), p)), r()
                    }
                }
            },
            async resolveTags() {
                const l = {
                    tags: [],
                    entries: [...o]
                };
                await t.callHook("entries:resolve", l);
                for (const f of l.entries) {
                    const u = f.resolvedInput || f.input;
                    if (f.resolvedInput = await (f.transform ? f.transform(u) : u), f.resolvedInput)
                        for (const h of await CE(f)) {
                            const p = {
                                tag: h,
                                entry: f,
                                resolvedOptions: c.resolvedOptions
                            };
                            await t.callHook("tag:normalise", p), l.tags.push(p.tag)
                        }
                }
                return await t.callHook("tags:beforeResolve", l), await t.callHook("tags:resolve", l), l.tags
            },
            ssr: n
        };
    return [PE, LE, DE, ME, HE, FE, BE, ...(e == null ? void 0 : e.plugins) || []].forEach(l => c.use(l)), c.hooks.callHook("init", c), c
}

function WE() {
    return Uf
}
const KE = Af.startsWith("3");

function YE(e) {
    return typeof e == "function" ? e() : Re(e)
}

function oo(e, t = "") {
    if (e instanceof Promise) return e;
    const n = YE(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(r => oo(r, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r, s]) => r === "titleTemplate" || r.startsWith("on") ? [r, Re(s)] : [r, oo(s, r)])) : n
}
const qE = {
        hooks: {
            "entries:resolve": function(e) {
                for (const t of e.entries) t.resolvedInput = oo(t.input)
            }
        }
    },
    Wf = "usehead";

function zE(e) {
    return {
        install(n) {
            KE && (n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(Wf, e))
        }
    }.install
}

function GE(e = {}) {
    e.domDelayFn = e.domDelayFn || (n => xt(() => setTimeout(() => n(), 0)));
    const t = VE(e);
    return t.use(qE), t.install = zE(t), t
}
const Oi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    $i = "__unhead_injection_handler__";

function QE(e) {
    Oi[$i] = e
}

function XE() {
    if ($i in Oi) return Oi[$i]();
    const e = Ve(Wf);
    return e || WE()
}

function JE(e, t = {}) {
    const n = t.head || XE();
    if (n) return n.ssr ? n.push(e, t) : ZE(n, e, t)
}

function ZE(e, t, n = {}) {
    const r = Pe(!1),
        s = Pe({});
    R_(() => {
        s.value = r.value ? {} : oo(t)
    });
    const o = e.push(s.value, n);
    return an(s, c => {
        o.patch(c)
    }), bo() && (vo(() => {
        o.dispose()
    }), Qu(() => {
        r.value = !0
    }), Gu(() => {
        r.value = !1
    })), o
}

function eb(e) {
    return {
        ctx: {
            table: e
        },
        matchAll: t => Yf(t, e)
    }
}

function Kf(e) {
    const t = {};
    for (const n in e) t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r, s]) => [r, Kf(s)])) : new Map(Object.entries(e[n]));
    return t
}

function tb(e) {
    return eb(Kf(e))
}

function Yf(e, t) {
    const n = [];
    for (const [s, o] of Sl(t.wildcard)) e.startsWith(s) && n.push(o);
    for (const [s, o] of Sl(t.dynamic))
        if (e.startsWith(s + "/")) {
            const a = "/" + e.slice(s.length).split("/").splice(2).join("/");
            n.push(...Yf(a, o))
        }
    const r = t.static.get(e);
    return r && n.push(r), n.filter(Boolean)
}

function Sl(e) {
    return [...e.entries()].sort((t, n) => t[0].length - n[0].length)
}

function si(e) {
    if (e === null || typeof e != "object") return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}

function Ri(e, t, n = ".", r) {
    if (!si(t)) return Ri(e, {}, n, r);
    const s = Object.assign({}, t);
    for (const o in e) {
        if (o === "__proto__" || o === "constructor") continue;
        const a = e[o];
        a != null && (r && r(s, o, a, n) || (Array.isArray(a) && Array.isArray(s[o]) ? s[o] = [...a, ...s[o]] : si(a) && si(s[o]) ? s[o] = Ri(a, s[o], (n ? `${n}.` : "") + o.toString(), r) : s[o] = a))
    }
    return s
}

function qf(e) {
    return (...t) => t.reduce((n, r) => Ri(n, r, "", e), {})
}
const zf = qf(),
    nb = qf((e, t, n) => {
        if (e[t] !== void 0 && typeof n == "function") return e[t] = n(e[t]), !0
    }),
    Hs = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;

function rb(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    const n = {},
        s = (t || {}).decode || ib;
    let o = 0;
    for (; o < e.length;) {
        const a = e.indexOf("=", o);
        if (a === -1) break;
        let c = e.indexOf(";", o);
        if (c === -1) c = e.length;
        else if (c < a) {
            o = e.lastIndexOf(";", a - 1) + 1;
            continue
        }
        const l = e.slice(o, a).trim();
        if (n[l] === void 0) {
            let f = e.slice(a + 1, c).trim();
            f.codePointAt(0) === 34 && (f = f.slice(1, -1)), n[l] = ob(f, s)
        }
        o = c + 1
    }
    return n
}

function Ol(e, t, n) {
    const r = n || {},
        s = r.encode || ab;
    if (typeof s != "function") throw new TypeError("option encode is invalid");
    if (!Hs.test(e)) throw new TypeError("argument name is invalid");
    const o = s(t);
    if (o && !Hs.test(o)) throw new TypeError("argument val is invalid");
    let a = e + "=" + o;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
        const c = r.maxAge - 0;
        if (Number.isNaN(c) || !Number.isFinite(c)) throw new TypeError("option maxAge is invalid");
        a += "; Max-Age=" + Math.floor(c)
    }
    if (r.domain) {
        if (!Hs.test(r.domain)) throw new TypeError("option domain is invalid");
        a += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!Hs.test(r.path)) throw new TypeError("option path is invalid");
        a += "; Path=" + r.path
    }
    if (r.expires) {
        if (!sb(r.expires) || Number.isNaN(r.expires.valueOf())) throw new TypeError("option expires is invalid");
        a += "; Expires=" + r.expires.toUTCString()
    }
    if (r.httpOnly && (a += "; HttpOnly"), r.secure && (a += "; Secure"), r.priority) switch (typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority) {
        case "low":
            a += "; Priority=Low";
            break;
        case "medium":
            a += "; Priority=Medium";
            break;
        case "high":
            a += "; Priority=High";
            break;
        default:
            throw new TypeError("option priority is invalid")
    }
    if (r.sameSite) switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
        case !0:
            a += "; SameSite=Strict";
            break;
        case "lax":
            a += "; SameSite=Lax";
            break;
        case "strict":
            a += "; SameSite=Strict";
            break;
        case "none":
            a += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
    }
    return a
}

function sb(e) {
    return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
}

function ob(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}

function ib(e) {
    return e.includes("%") ? decodeURIComponent(e) : e
}

function ab(e) {
    return encodeURIComponent(e)
}

function cb(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
var lb = Object.defineProperty,
    ub = (e, t, n) => t in e ? lb(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Tn = (e, t, n) => (ub(e, typeof t != "symbol" ? t + "" : t, n), n);
class Ni extends Error {
    constructor(t, n = {}) {
        super(t, n), Tn(this, "statusCode", 500), Tn(this, "fatal", !1), Tn(this, "unhandled", !1), Tn(this, "statusMessage"), Tn(this, "data"), Tn(this, "cause"), n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: Li(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = Gf(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t
    }
}
Tn(Ni, "__h3_error__", !0);

function Pi(e) {
    if (typeof e == "string") return new Ni(e);
    if (fb(e)) return e;
    const t = new Ni(e.message ? ? e.statusMessage ? ? "", {
        cause: e.cause || e
    });
    if (cb(e, "stack")) try {
        Object.defineProperty(t, "stack", {
            get() {
                return e.stack
            }
        })
    } catch {
        try {
            t.stack = e.stack
        } catch {}
    }
    if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = Li(e.statusCode, t.statusCode) : e.status && (t.statusCode = Li(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
        const n = t.statusMessage;
        Gf(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t
}

function fb(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const db = /[^\u0009\u0020-\u007E]/g;

function Gf(e = "") {
    return e.replace(db, "")
}

function Li(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e
}
const Qf = Symbol("layout-meta"),
    us = Symbol("route"),
    jn = () => {
        var e;
        return (e = Se()) == null ? void 0 : e.$router
    },
    va = () => fa() ? Ve(us, Se()._route) : Se()._route; /*! @__NO_SIDE_EFFECTS__ */
const hb = () => {
        try {
            if (Se()._processingMiddleware) return !0
        } catch {
            return !0
        }
        return !1
    },
    pC = (e, t) => {
        e || (e = "/");
        const n = typeof e == "string" ? e : Nf(e.path || "/", e.query || {}) + (e.hash || "");
        if (t != null && t.open) {
            {
                const {
                    target: c = "_blank",
                    windowFeatures: l = {}
                } = t.open, f = Object.entries(l).filter(([u, h]) => h !== void 0).map(([u, h]) => `${u.toLowerCase()}=${h}`).join(", ");
                open(n, c, f)
            }
            return Promise.resolve()
        }
        const r = (t == null ? void 0 : t.external) || ls(n, {
            acceptRelative: !0
        });
        if (r) {
            if (!(t != null && t.external)) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
            const c = Ao(n).protocol;
            if (c && bv(c)) throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)
        }
        const s = hb();
        if (!r && s) return e;
        const o = jn(),
            a = Se();
        return r ? (a._scope.stop(), t != null && t.replace ? location.replace(n) : location.href = n, s ? a.isHydrating ? new Promise(() => {}) : !1 : Promise.resolve()) : t != null && t.replace ? o.replace(e) : o.push(e)
    },
    Co = () => f_(Se().payload, "error"),
    Zn = e => {
        const t = Ea(e);
        try {
            const n = Se(),
                r = Co();
            n.hooks.callHook("app:error", t), r.value = r.value || t
        } catch {
            throw t
        }
        return t
    },
    pb = async (e = {}) => {
        const t = Se(),
            n = Co();
        t.callHook("app:error:cleared", e), e.redirect && await jn().replace(e.redirect), n.value = null
    },
    mb = e => !!(e && typeof e == "object" && "__nuxt_error" in e),
    Ea = e => {
        const t = Pi(e);
        return t.__nuxt_error = !0, t
    },
    $l = globalThis.requestIdleCallback || (e => {
        const t = Date.now(),
            n = {
                didTimeout: !1,
                timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
            };
        return setTimeout(() => {
            e(n)
        }, 1)
    }),
    mC = globalThis.cancelIdleCallback || (e => {
        clearTimeout(e)
    }),
    Xf = e => {
        const t = Se();
        t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
            $l(e)
        }) : $l(e)
    },
    gb = !1,
    xi = !1,
    _b = !1,
    gC = {
        componentName: "NuxtLink"
    },
    yb = "#__nuxt",
    vb = {
        path: "/",
        watch: !0,
        decode: e => rs(decodeURIComponent(e)),
        encode: e => encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
    };

function Rl(e, t) {
    var o;
    const n = { ...vb,
            ...t
        },
        r = Eb(n) || {},
        s = Pe(r[e] ? ? ((o = n.default) == null ? void 0 : o.call(n))); {
        const a = typeof BroadcastChannel > "u" ? null : new BroadcastChannel(`nuxt:cookies:${e}`),
            c = () => {
                wb(e, s.value, n), a == null || a.postMessage(n.encode(s.value))
            };
        let l = !1;
        Gi() && bu(() => {
            l = !0, c(), a == null || a.close()
        }), a && (a.onmessage = f => {
            l = !0, s.value = n.decode(f.data), xt(() => {
                l = !1
            })
        }), n.watch ? an(s, () => {
            l || c()
        }, {
            deep: n.watch !== "shallow"
        }) : c()
    }
    return s
}

function Eb(e = {}) {
    return rb(document.cookie, e)
}

function bb(e, t, n = {}) {
    return t == null ? Ol(e, t, { ...n,
        maxAge: -1
    }) : Ol(e, t, n)
}

function wb(e, t, n = {}) {
    document.cookie = bb(e, t, n)
}

function Tb(e = {}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = rs(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || (n == null ? void 0 : n.path) !== t || (n == null ? void 0 : n.expires) < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ? ? 1e4)
            }))
        } catch {}
        if (e.persistState) try {
            sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                state: Se().payload.state
            }))
        } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const Ab = {
        apiBaseUrl: "https://nuxtapi.jumboticket.network/api",
        loggedInRedirectTodashboard: "/dashboard",
        authFailedRedirectPath: "/user/sign-in",
        websiteDownPaths: {
            2: "/under-payout",
            3: "/under-maintainance"
        },
        authShare: {
            guest: "https://dashboard.jumboticket.networkwork"
        }
    },
    Cb = {
        nuxt: {
            buildId: "36d301b1-66a0-4d0b-b971-aad4e72859cf"
        }
    },
    Sb = nb(Ab, Cb);

function Ob() {
    const e = Se();
    return e._appConfig || (e._appConfig = Tt(Sb)), e._appConfig
}
let Ws, Jf;

function $b() {
    var n;
    const e = Cr(),
        t = (n = Ob().nuxt) == null ? void 0 : n.buildId;
    return Ws = $fetch(Hn(e.app.cdnURL || e.app.baseURL, e.app.buildAssetsDir, `builds/meta/${t}.json`)), Ws.then(r => {
        Jf = tb(r.matcher)
    }), Ws
}

function So() {
    return Ws || $b()
}
async function Zf(e) {
    return await So(), zf({}, ...Jf.matchAll(e).reverse())
}

function Nl(e, t = {}) {
    const n = Rb(e, t),
        r = Se(),
        s = r._payloadCache = r._payloadCache || {};
    return n in s || (s[n] = Nb().then(o => o ? ed(n).then(a => a || (delete s[n], null)) : (s[n] = null, null))), s[n]
}
const Pl = "json";

function Rb(e, t = {}) {
    const n = new URL(e, "http://localhost");
    if (n.search) throw new Error("Payload URL cannot contain search params: " + e);
    if (n.host !== "localhost" || ls(n.pathname, {
            acceptRelative: !0
        })) throw new Error("Payload URL must not include hostname: " + e);
    const r = t.hash || (t.fresh ? Date.now() : "");
    return Hn(Cr().app.baseURL, n.pathname, r ? `_payload.${r}.${Pl}` : `_payload.${Pl}`)
}
async function ed(e) {
    const t = fetch(e).then(n => n.text().then(td));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function Nb(e = va().path) {
    if (Se().payload.prerenderedAt || (await So()).prerendered.includes(e)) return !0;
    const r = await Zf(e);
    return !!r.prerender && !r.redirect
}
let js = null;
async function Pb() {
    if (js) return js;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e) return {};
    const t = td(e.textContent || ""),
        n = e.dataset.src ? await ed(e.dataset.src) : void 0;
    return js = { ...t,
        ...n,
        ...window.__NUXT__
    }, js
}

function td(e) {
    return mE(e, Se()._payloadRevivers)
}

function Lb(e, t) {
    Se()._payloadRevivers[e] = t
}
const Ll = {
        NuxtError: e => Ea(e),
        EmptyShallowRef: e => Xr(e === "_" ? void 0 : e === "0n" ? BigInt(0) : rs(e)),
        EmptyRef: e => Pe(e === "_" ? void 0 : e === "0n" ? BigInt(0) : rs(e)),
        ShallowRef: e => Xr(e),
        ShallowReactive: e => as(e),
        Ref: e => Pe(e),
        Reactive: e => Tt(e)
    },
    xb = He({
        name: "nuxt:revive-payload:client",
        order: -30,
        async setup(e) {
            let t, n;
            for (const r in Ll) Lb(r, Ll[r]);
            Object.assign(e.payload, ([t, n] = ss(() => e.runWithContext(Pb)), t = await t, n(), t)), window.__NUXT__ = e.payload
        }
    }),
    Ib = [],
    Db = He({
        name: "nuxt:head",
        enforce: "pre",
        setup(e) {
            const t = GE({
                plugins: Ib
            });
            QE(() => Se().vueApp._context.provides.usehead), e.vueApp.use(t); {
                let n = !0;
                const r = async () => {
                    n = !1, await Vf(t)
                };
                t.hooks.hook("dom:beforeRender", s => {
                    s.shouldRender = !n
                }), e.hooks.hook("page:start", () => {
                    n = !0
                }), e.hooks.hook("page:finish", () => {
                    e.isHydrating || r()
                }), e.hooks.hook("app:error", r), e.hooks.hook("app:suspense:resolve", r)
            }
        }
    });
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
const Xn = typeof window < "u";

function kb(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Te = Object.assign;

function oi(e, t) {
    const n = {};
    for (const r in t) {
        const s = t[r];
        n[r] = At(s) ? s.map(e) : e(s)
    }
    return n
}
const Wr = () => {},
    At = Array.isArray,
    Mb = /\/$/,
    Hb = e => e.replace(Mb, "");

function ii(e, t, n = "/") {
    let r, s = {},
        o = "",
        a = "";
    const c = t.indexOf("#");
    let l = t.indexOf("?");
    return c < l && c >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), o = t.slice(l + 1, c > -1 ? c : t.length), s = e(o)), c > -1 && (r = r || t.slice(0, c), a = t.slice(c, t.length)), r = Vb(r ? ? t, n), {
        fullPath: r + (o && "?") + o + a,
        path: r,
        query: s,
        hash: a
    }
}

function jb(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function xl(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function Fb(e, t, n) {
    const r = t.matched.length - 1,
        s = n.matched.length - 1;
    return r > -1 && r === s && dr(t.matched[r], n.matched[s]) && nd(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function dr(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function nd(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (!Bb(e[n], t[n])) return !1;
    return !0
}

function Bb(e, t) {
    return At(e) ? Il(e, t) : At(t) ? Il(t, e) : e === t
}

function Il(e, t) {
    return At(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function Vb(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        r = e.split("/"),
        s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let o = n.length - 1,
        a, c;
    for (a = 0; a < r.length; a++)
        if (c = r[a], c !== ".")
            if (c === "..") o > 1 && o--;
            else break;
    return n.slice(0, o).join("/") + "/" + r.slice(a - (a === r.length ? 1 : 0)).join("/")
}
var os;
(function(e) {
    e.pop = "pop", e.push = "push"
})(os || (os = {}));
var Kr;
(function(e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(Kr || (Kr = {}));

function Ub(e) {
    if (!e)
        if (Xn) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Hb(e)
}
const Wb = /^[^#]+#/;

function Kb(e, t) {
    return e.replace(Wb, "#") + t
}

function Yb(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const Oo = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});

function qb(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            r = typeof n == "string" && n.startsWith("#"),
            s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!s) return;
        t = Yb(s, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}

function Dl(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Ii = new Map;

function zb(e, t) {
    Ii.set(e, t)
}

function Gb(e) {
    const t = Ii.get(e);
    return Ii.delete(e), t
}
let Qb = () => location.protocol + "//" + location.host;

function rd(e, t) {
    const {
        pathname: n,
        search: r,
        hash: s
    } = t, o = e.indexOf("#");
    if (o > -1) {
        let c = s.includes(e.slice(o)) ? e.slice(o).length : 1,
            l = s.slice(c);
        return l[0] !== "/" && (l = "/" + l), xl(l, "")
    }
    return xl(n, e) + r + s
}

function Xb(e, t, n, r) {
    let s = [],
        o = [],
        a = null;
    const c = ({
        state: p
    }) => {
        const m = rd(e, location),
            T = n.value,
            w = t.value;
        let N = 0;
        if (p) {
            if (n.value = m, t.value = p, a && a === T) {
                a = null;
                return
            }
            N = w ? p.position - w.position : 0
        } else r(m);
        s.forEach($ => {
            $(n.value, T, {
                delta: N,
                type: os.pop,
                direction: N ? N > 0 ? Kr.forward : Kr.back : Kr.unknown
            })
        })
    };

    function l() {
        a = n.value
    }

    function f(p) {
        s.push(p);
        const m = () => {
            const T = s.indexOf(p);
            T > -1 && s.splice(T, 1)
        };
        return o.push(m), m
    }

    function u() {
        const {
            history: p
        } = window;
        p.state && p.replaceState(Te({}, p.state, {
            scroll: Oo()
        }), "")
    }

    function h() {
        for (const p of o) p();
        o = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", c), window.addEventListener("beforeunload", u, {
        passive: !0
    }), {
        pauseListeners: l,
        listen: f,
        destroy: h
    }
}

function kl(e, t, n, r = !1, s = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: s ? Oo() : null
    }
}

function Jb(e) {
    const {
        history: t,
        location: n
    } = window, r = {
        value: rd(e, n)
    }, s = {
        value: t.state
    };
    s.value || o(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function o(l, f, u) {
        const h = e.indexOf("#"),
            p = h > -1 ? (n.host && document.querySelector("base") ? e : e.slice(h)) + l : Qb() + e + l;
        try {
            t[u ? "replaceState" : "pushState"](f, "", p), s.value = f
        } catch (m) {
            console.error(m), n[u ? "replace" : "assign"](p)
        }
    }

    function a(l, f) {
        const u = Te({}, t.state, kl(s.value.back, l, s.value.forward, !0), f, {
            position: s.value.position
        });
        o(l, u, !0), r.value = l
    }

    function c(l, f) {
        const u = Te({}, s.value, t.state, {
            forward: l,
            scroll: Oo()
        });
        o(u.current, u, !0);
        const h = Te({}, kl(r.value, l, null), {
            position: u.position + 1
        }, f);
        o(l, h, !1), r.value = l
    }
    return {
        location: r,
        state: s,
        push: c,
        replace: a
    }
}

function sd(e) {
    e = Ub(e);
    const t = Jb(e),
        n = Xb(e, t.state, t.location, t.replace);

    function r(o, a = !0) {
        a || n.pauseListeners(), history.go(o)
    }
    const s = Te({
        location: "",
        base: e,
        go: r,
        createHref: Kb.bind(null, e)
    }, t, n);
    return Object.defineProperty(s, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(s, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), s
}

function Zb(e) {
    return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), sd(e)
}

function ew(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function od(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const St = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    },
    id = Symbol("");
var Ml;
(function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(Ml || (Ml = {}));

function hr(e, t) {
    return Te(new Error, {
        type: e,
        [id]: !0
    }, t)
}

function kt(e, t) {
    return e instanceof Error && id in e && (t == null || !!(e.type & t))
}
const Hl = "[^/]+?",
    tw = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    nw = /[.+*?^${}()[\]/\\]/g;

function rw(e, t) {
    const n = Te({}, tw, t),
        r = [];
    let s = n.start ? "^" : "";
    const o = [];
    for (const f of e) {
        const u = f.length ? [] : [90];
        n.strict && !f.length && (s += "/");
        for (let h = 0; h < f.length; h++) {
            const p = f[h];
            let m = 40 + (n.sensitive ? .25 : 0);
            if (p.type === 0) h || (s += "/"), s += p.value.replace(nw, "\\$&"), m += 40;
            else if (p.type === 1) {
                const {
                    value: T,
                    repeatable: w,
                    optional: N,
                    regexp: $
                } = p;
                o.push({
                    name: T,
                    repeatable: w,
                    optional: N
                });
                const A = $ || Hl;
                if (A !== Hl) {
                    m += 10;
                    try {
                        new RegExp(`(${A})`)
                    } catch (g) {
                        throw new Error(`Invalid custom RegExp for param "${T}" (${A}): ` + g.message)
                    }
                }
                let b = w ? `((?:${A})(?:/(?:${A}))*)` : `(${A})`;
                h || (b = N && f.length < 2 ? `(?:/${b})` : "/" + b), N && (b += "?"), s += b, m += 20, N && (m += -8), w && (m += -20), A === ".*" && (m += -50)
            }
            u.push(m)
        }
        r.push(u)
    }
    if (n.strict && n.end) {
        const f = r.length - 1;
        r[f][r[f].length - 1] += .7000000000000001
    }
    n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
    const a = new RegExp(s, n.sensitive ? "" : "i");

    function c(f) {
        const u = f.match(a),
            h = {};
        if (!u) return null;
        for (let p = 1; p < u.length; p++) {
            const m = u[p] || "",
                T = o[p - 1];
            h[T.name] = m && T.repeatable ? m.split("/") : m
        }
        return h
    }

    function l(f) {
        let u = "",
            h = !1;
        for (const p of e) {
            (!h || !u.endsWith("/")) && (u += "/"), h = !1;
            for (const m of p)
                if (m.type === 0) u += m.value;
                else if (m.type === 1) {
                const {
                    value: T,
                    repeatable: w,
                    optional: N
                } = m, $ = T in f ? f[T] : "";
                if (At($) && !w) throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);
                const A = At($) ? $.join("/") : $;
                if (!A)
                    if (N) p.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : h = !0);
                    else throw new Error(`Missing required param "${T}"`);
                u += A
            }
        }
        return u || "/"
    }
    return {
        re: a,
        score: r,
        keys: o,
        parse: c,
        stringify: l
    }
}

function sw(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const r = t[n] - e[n];
        if (r) return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0
}

function ow(e, t) {
    let n = 0;
    const r = e.score,
        s = t.score;
    for (; n < r.length && n < s.length;) {
        const o = sw(r[n], s[n]);
        if (o) return o;
        n++
    }
    if (Math.abs(s.length - r.length) === 1) {
        if (jl(r)) return 1;
        if (jl(s)) return -1
    }
    return s.length - r.length
}

function jl(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const iw = {
        type: 0,
        value: ""
    },
    aw = /[a-zA-Z0-9_]/;

function cw(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [iw]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(m) {
        throw new Error(`ERR (${n})/"${f}": ${m}`)
    }
    let n = 0,
        r = n;
    const s = [];
    let o;

    function a() {
        o && s.push(o), o = []
    }
    let c = 0,
        l, f = "",
        u = "";

    function h() {
        f && (n === 0 ? o.push({
            type: 0,
            value: f
        }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), o.push({
            type: 1,
            value: f,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"), f = "")
    }

    function p() {
        f += l
    }
    for (; c < e.length;) {
        if (l = e[c++], l === "\\" && n !== 2) {
            r = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                l === "/" ? (f && h(), a()) : l === ":" ? (h(), n = 1) : p();
                break;
            case 4:
                p(), n = r;
                break;
            case 1:
                l === "(" ? n = 2 : aw.test(l) ? p() : (h(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--);
                break;
            case 2:
                l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
                break;
            case 3:
                h(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--, u = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), h(), a(), s
}

function lw(e, t, n) {
    const r = rw(cw(e.path), n),
        s = Te(r, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}

function uw(e, t) {
    const n = [],
        r = new Map;
    t = Vl({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);

    function s(u) {
        return r.get(u)
    }

    function o(u, h, p) {
        const m = !p,
            T = fw(u);
        T.aliasOf = p && p.record;
        const w = Vl(t, u),
            N = [T];
        if ("alias" in u) {
            const b = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const g of b) N.push(Te({}, T, {
                components: p ? p.record.components : T.components,
                path: g,
                aliasOf: p ? p.record : T
            }))
        }
        let $, A;
        for (const b of N) {
            const {
                path: g
            } = b;
            if (h && g[0] !== "/") {
                const S = h.record.path,
                    H = S[S.length - 1] === "/" ? "" : "/";
                b.path = h.record.path + (g && H + g)
            }
            if ($ = lw(b, h, w), p ? p.alias.push($) : (A = A || $, A !== $ && A.alias.push($), m && u.name && !Bl($) && a(u.name)), T.children) {
                const S = T.children;
                for (let H = 0; H < S.length; H++) o(S[H], $, p && p.children[H])
            }
            p = p || $, ($.record.components && Object.keys($.record.components).length || $.record.name || $.record.redirect) && l($)
        }
        return A ? () => {
            a(A)
        } : Wr
    }

    function a(u) {
        if (od(u)) {
            const h = r.get(u);
            h && (r.delete(u), n.splice(n.indexOf(h), 1), h.children.forEach(a), h.alias.forEach(a))
        } else {
            const h = n.indexOf(u);
            h > -1 && (n.splice(h, 1), u.record.name && r.delete(u.record.name), u.children.forEach(a), u.alias.forEach(a))
        }
    }

    function c() {
        return n
    }

    function l(u) {
        let h = 0;
        for (; h < n.length && ow(u, n[h]) >= 0 && (u.record.path !== n[h].record.path || !ad(u, n[h]));) h++;
        n.splice(h, 0, u), u.record.name && !Bl(u) && r.set(u.record.name, u)
    }

    function f(u, h) {
        let p, m = {},
            T, w;
        if ("name" in u && u.name) {
            if (p = r.get(u.name), !p) throw hr(1, {
                location: u
            });
            w = p.record.name, m = Te(Fl(h.params, p.keys.filter(A => !A.optional).map(A => A.name)), u.params && Fl(u.params, p.keys.map(A => A.name))), T = p.stringify(m)
        } else if ("path" in u) T = u.path, p = n.find(A => A.re.test(T)), p && (m = p.parse(T), w = p.record.name);
        else {
            if (p = h.name ? r.get(h.name) : n.find(A => A.re.test(h.path)), !p) throw hr(1, {
                location: u,
                currentLocation: h
            });
            w = p.record.name, m = Te({}, h.params, u.params), T = p.stringify(m)
        }
        const N = [];
        let $ = p;
        for (; $;) N.unshift($.record), $ = $.parent;
        return {
            name: w,
            path: T,
            params: m,
            matched: N,
            meta: hw(N)
        }
    }
    return e.forEach(u => o(u)), {
        addRoute: o,
        resolve: f,
        removeRoute: a,
        getRoutes: c,
        getRecordMatcher: s
    }
}

function Fl(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n
}

function fw(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: dw(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}

function dw(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else
        for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t
}

function Bl(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function hw(e) {
    return e.reduce((t, n) => Te(t, n.meta), {})
}

function Vl(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n
}

function ad(e, t) {
    return t.children.some(n => n === e || ad(e, n))
}
const cd = /#/g,
    pw = /&/g,
    mw = /\//g,
    gw = /=/g,
    _w = /\?/g,
    ld = /\+/g,
    yw = /%5B/g,
    vw = /%5D/g,
    ud = /%5E/g,
    Ew = /%60/g,
    fd = /%7B/g,
    bw = /%7C/g,
    dd = /%7D/g,
    ww = /%20/g;

function ba(e) {
    return encodeURI("" + e).replace(bw, "|").replace(yw, "[").replace(vw, "]")
}

function Tw(e) {
    return ba(e).replace(fd, "{").replace(dd, "}").replace(ud, "^")
}

function Di(e) {
    return ba(e).replace(ld, "%2B").replace(ww, "+").replace(cd, "%23").replace(pw, "%26").replace(Ew, "`").replace(fd, "{").replace(dd, "}").replace(ud, "^")
}

function Aw(e) {
    return Di(e).replace(gw, "%3D")
}

function Cw(e) {
    return ba(e).replace(cd, "%23").replace(_w, "%3F")
}

function Sw(e) {
    return e == null ? "" : Cw(e).replace(mw, "%2F")
}

function io(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}

function Ow(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < r.length; ++s) {
        const o = r[s].replace(ld, " "),
            a = o.indexOf("="),
            c = io(a < 0 ? o : o.slice(0, a)),
            l = a < 0 ? null : io(o.slice(a + 1));
        if (c in t) {
            let f = t[c];
            At(f) || (f = t[c] = [f]), f.push(l)
        } else t[c] = l
    }
    return t
}

function Ul(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = Aw(n), r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }(At(r) ? r.map(o => o && Di(o)) : [r && Di(r)]).forEach(o => {
            o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o))
        })
    }
    return t
}

function $w(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = At(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
    }
    return t
}
const Rw = Symbol(""),
    Wl = Symbol(""),
    wa = Symbol(""),
    Ta = Symbol(""),
    ki = Symbol("");

function Ir() {
    let e = [];

    function t(r) {
        return e.push(r), () => {
            const s = e.indexOf(r);
            s > -1 && e.splice(s, 1)
        }
    }

    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}

function nn(e, t, n, r, s) {
    const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise((a, c) => {
        const l = h => {
                h === !1 ? c(hr(4, {
                    from: n,
                    to: t
                })) : h instanceof Error ? c(h) : ew(h) ? c(hr(2, {
                    from: t,
                    to: h
                })) : (o && r.enterCallbacks[s] === o && typeof h == "function" && o.push(h), a())
            },
            f = e.call(r && r.instances[s], t, n, l);
        let u = Promise.resolve(f);
        e.length < 3 && (u = u.then(l)), u.catch(h => c(h))
    })
}

function ai(e, t, n, r) {
    const s = [];
    for (const o of e)
        for (const a in o.components) {
            let c = o.components[a];
            if (!(t !== "beforeRouteEnter" && !o.instances[a]))
                if (Nw(c)) {
                    const f = (c.__vccOpts || c)[t];
                    f && s.push(nn(f, n, r, o, a))
                } else {
                    let l = c();
                    s.push(() => l.then(f => {
                        if (!f) return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));
                        const u = kb(f) ? f.default : f;
                        o.components[a] = u;
                        const p = (u.__vccOpts || u)[t];
                        return p && nn(p, n, r, o, a)()
                    }))
                }
        }
    return s
}

function Nw(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Kl(e) {
    const t = Ve(wa),
        n = Ve(Ta),
        r = st(() => t.resolve(Re(e.to))),
        s = st(() => {
            const {
                matched: l
            } = r.value, {
                length: f
            } = l, u = l[f - 1], h = n.matched;
            if (!u || !h.length) return -1;
            const p = h.findIndex(dr.bind(null, u));
            if (p > -1) return p;
            const m = Yl(l[f - 2]);
            return f > 1 && Yl(u) === m && h[h.length - 1].path !== m ? h.findIndex(dr.bind(null, l[f - 2])) : p
        }),
        o = st(() => s.value > -1 && Iw(n.params, r.value.params)),
        a = st(() => s.value > -1 && s.value === n.matched.length - 1 && nd(n.params, r.value.params));

    function c(l = {}) {
        return xw(l) ? t[Re(e.replace) ? "replace" : "push"](Re(e.to)).catch(Wr) : Promise.resolve()
    }
    return {
        route: r,
        href: st(() => r.value.href),
        isActive: o,
        isExactActive: a,
        navigate: c
    }
}
const Pw = Ut({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: Kl,
        setup(e, {
            slots: t
        }) {
            const n = Tt(Kl(e)),
                {
                    options: r
                } = Ve(wa),
                s = st(() => ({
                    [ql(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
                    [ql(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => {
                const o = t.default && t.default(n);
                return e.custom ? o : ot("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: s.value
                }, o)
            }
        }
    }),
    Lw = Pw;

function xw(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function Iw(e, t) {
    for (const n in t) {
        const r = t[n],
            s = e[n];
        if (typeof r == "string") {
            if (r !== s) return !1
        } else if (!At(s) || s.length !== r.length || r.some((o, a) => o !== s[a])) return !1
    }
    return !0
}

function Yl(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const ql = (e, t, n) => e ? ? t ? ? n,
    Dw = Ut({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: t,
            slots: n
        }) {
            const r = Ve(ki),
                s = st(() => e.route || r.value),
                o = Ve(Wl, 0),
                a = st(() => {
                    let f = Re(o);
                    const {
                        matched: u
                    } = s.value;
                    let h;
                    for (;
                        (h = u[f]) && !h.components;) f++;
                    return f
                }),
                c = st(() => s.value.matched[a.value]);
            Nn(Wl, st(() => a.value + 1)), Nn(Rw, c), Nn(ki, s);
            const l = Pe();
            return an(() => [l.value, c.value, e.name], ([f, u, h], [p, m, T]) => {
                u && (u.instances[h] = f, m && m !== u && f && f === p && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards), u.updateGuards.size || (u.updateGuards = m.updateGuards))), f && u && (!m || !dr(u, m) || !p) && (u.enterCallbacks[h] || []).forEach(w => w(f))
            }, {
                flush: "post"
            }), () => {
                const f = s.value,
                    u = e.name,
                    h = c.value,
                    p = h && h.components[u];
                if (!p) return zl(n.default, {
                    Component: p,
                    route: f
                });
                const m = h.props[u],
                    T = m ? m === !0 ? f.params : typeof m == "function" ? m(f) : m : null,
                    N = ot(p, Te({}, T, t, {
                        onVnodeUnmounted: $ => {
                            $.component.isUnmounted && (h.instances[u] = null)
                        },
                        ref: l
                    }));
                return zl(n.default, {
                    Component: N,
                    route: f
                }) || N
            }
        }
    });

function zl(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const hd = Dw;

function kw(e) {
    const t = uw(e.routes, e),
        n = e.parseQuery || Ow,
        r = e.stringifyQuery || Ul,
        s = e.history,
        o = Ir(),
        a = Ir(),
        c = Ir(),
        l = Xr(St);
    let f = St;
    Xn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = oi.bind(null, M => "" + M),
        h = oi.bind(null, Sw),
        p = oi.bind(null, io);

    function m(M, Z) {
        let z, ne;
        return od(M) ? (z = t.getRecordMatcher(M), ne = Z) : ne = M, t.addRoute(ne, z)
    }

    function T(M) {
        const Z = t.getRecordMatcher(M);
        Z && t.removeRoute(Z)
    }

    function w() {
        return t.getRoutes().map(M => M.record)
    }

    function N(M) {
        return !!t.getRecordMatcher(M)
    }

    function $(M, Z) {
        if (Z = Te({}, Z || l.value), typeof M == "string") {
            const C = ii(n, M, Z.path),
                I = t.resolve({
                    path: C.path
                }, Z),
                V = s.createHref(C.fullPath);
            return Te(C, I, {
                params: p(I.params),
                hash: io(C.hash),
                redirectedFrom: void 0,
                href: V
            })
        }
        let z;
        if ("path" in M) z = Te({}, M, {
            path: ii(n, M.path, Z.path).path
        });
        else {
            const C = Te({}, M.params);
            for (const I in C) C[I] == null && delete C[I];
            z = Te({}, M, {
                params: h(C)
            }), Z.params = h(Z.params)
        }
        const ne = t.resolve(z, Z),
            R = M.hash || "";
        ne.params = u(p(ne.params));
        const _ = jb(r, Te({}, M, {
                hash: Tw(R),
                path: ne.path
            })),
            E = s.createHref(_);
        return Te({
            fullPath: _,
            hash: R,
            query: r === Ul ? $w(M.query) : M.query || {}
        }, ne, {
            redirectedFrom: void 0,
            href: E
        })
    }

    function A(M) {
        return typeof M == "string" ? ii(n, M, l.value.path) : Te({}, M)
    }

    function b(M, Z) {
        if (f !== M) return hr(8, {
            from: Z,
            to: M
        })
    }

    function g(M) {
        return U(M)
    }

    function S(M) {
        return g(Te(A(M), {
            replace: !0
        }))
    }

    function H(M) {
        const Z = M.matched[M.matched.length - 1];
        if (Z && Z.redirect) {
            const {
                redirect: z
            } = Z;
            let ne = typeof z == "function" ? z(M) : z;
            return typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = A(ne) : {
                path: ne
            }, ne.params = {}), Te({
                query: M.query,
                hash: M.hash,
                params: "path" in ne ? {} : M.params
            }, ne)
        }
    }

    function U(M, Z) {
        const z = f = $(M),
            ne = l.value,
            R = M.state,
            _ = M.force,
            E = M.replace === !0,
            C = H(z);
        if (C) return U(Te(A(C), {
            state: typeof C == "object" ? Te({}, R, C.state) : R,
            force: _,
            replace: E
        }), Z || z);
        const I = z;
        I.redirectedFrom = Z;
        let V;
        return !_ && Fb(r, ne, z) && (V = hr(16, {
            to: I,
            from: ne
        }), de(ne, ne, !0, !1)), (V ? Promise.resolve(V) : L(I, ne)).catch(q => kt(q) ? kt(q, 2) ? q : ce(q) : k(q, I, ne)).then(q => {
            if (q) {
                if (kt(q, 2)) return U(Te({
                    replace: E
                }, A(q.to), {
                    state: typeof q.to == "object" ? Te({}, R, q.to.state) : R,
                    force: _
                }), Z || I)
            } else q = K(I, ne, !0, E, R);
            return F(I, ne, q), q
        })
    }

    function x(M, Z) {
        const z = b(M, Z);
        return z ? Promise.reject(z) : Promise.resolve()
    }

    function D(M) {
        const Z = ve.values().next().value;
        return Z && typeof Z.runWithContext == "function" ? Z.runWithContext(M) : M()
    }

    function L(M, Z) {
        let z;
        const [ne, R, _] = Mw(M, Z);
        z = ai(ne.reverse(), "beforeRouteLeave", M, Z);
        for (const C of ne) C.leaveGuards.forEach(I => {
            z.push(nn(I, M, Z))
        });
        const E = x.bind(null, M, Z);
        return z.push(E), Ee(z).then(() => {
            z = [];
            for (const C of o.list()) z.push(nn(C, M, Z));
            return z.push(E), Ee(z)
        }).then(() => {
            z = ai(R, "beforeRouteUpdate", M, Z);
            for (const C of R) C.updateGuards.forEach(I => {
                z.push(nn(I, M, Z))
            });
            return z.push(E), Ee(z)
        }).then(() => {
            z = [];
            for (const C of _)
                if (C.beforeEnter)
                    if (At(C.beforeEnter))
                        for (const I of C.beforeEnter) z.push(nn(I, M, Z));
                    else z.push(nn(C.beforeEnter, M, Z));
            return z.push(E), Ee(z)
        }).then(() => (M.matched.forEach(C => C.enterCallbacks = {}), z = ai(_, "beforeRouteEnter", M, Z), z.push(E), Ee(z))).then(() => {
            z = [];
            for (const C of a.list()) z.push(nn(C, M, Z));
            return z.push(E), Ee(z)
        }).catch(C => kt(C, 8) ? C : Promise.reject(C))
    }

    function F(M, Z, z) {
        c.list().forEach(ne => D(() => ne(M, Z, z)))
    }

    function K(M, Z, z, ne, R) {
        const _ = b(M, Z);
        if (_) return _;
        const E = Z === St,
            C = Xn ? history.state : {};
        z && (ne || E ? s.replace(M.fullPath, Te({
            scroll: E && C && C.scroll
        }, R)) : s.push(M.fullPath, R)), l.value = M, de(M, Z, z, E), ce()
    }
    let te;

    function J() {
        te || (te = s.listen((M, Z, z) => {
            if (!we.listening) return;
            const ne = $(M),
                R = H(ne);
            if (R) {
                U(Te(R, {
                    replace: !0
                }), ne).catch(Wr);
                return
            }
            f = ne;
            const _ = l.value;
            Xn && zb(Dl(_.fullPath, z.delta), Oo()), L(ne, _).catch(E => kt(E, 12) ? E : kt(E, 2) ? (U(E.to, ne).then(C => {
                kt(C, 20) && !z.delta && z.type === os.pop && s.go(-1, !1)
            }).catch(Wr), Promise.reject()) : (z.delta && s.go(-z.delta, !1), k(E, ne, _))).then(E => {
                E = E || K(ne, _, !1), E && (z.delta && !kt(E, 8) ? s.go(-z.delta, !1) : z.type === os.pop && kt(E, 20) && s.go(-1, !1)), F(ne, _, E)
            }).catch(Wr)
        }))
    }
    let W = Ir(),
        O = Ir(),
        B;

    function k(M, Z, z) {
        ce(M);
        const ne = O.list();
        return ne.length ? ne.forEach(R => R(M, Z, z)) : console.error(M), Promise.reject(M)
    }

    function re() {
        return B && l.value !== St ? Promise.resolve() : new Promise((M, Z) => {
            W.add([M, Z])
        })
    }

    function ce(M) {
        return B || (B = !M, J(), W.list().forEach(([Z, z]) => M ? z(M) : Z()), W.reset()), M
    }

    function de(M, Z, z, ne) {
        const {
            scrollBehavior: R
        } = e;
        if (!Xn || !R) return Promise.resolve();
        const _ = !z && Gb(Dl(M.fullPath, 0)) || (ne || !z) && history.state && history.state.scroll || null;
        return xt().then(() => R(M, Z, _)).then(E => E && qb(E)).catch(E => k(E, M, Z))
    }
    const fe = M => s.go(M);
    let ye;
    const ve = new Set,
        we = {
            currentRoute: l,
            listening: !0,
            addRoute: m,
            removeRoute: T,
            hasRoute: N,
            getRoutes: w,
            resolve: $,
            options: e,
            push: g,
            replace: S,
            go: fe,
            back: () => fe(-1),
            forward: () => fe(1),
            beforeEach: o.add,
            beforeResolve: a.add,
            afterEach: c.add,
            onError: O.add,
            isReady: re,
            install(M) {
                const Z = this;
                M.component("RouterLink", Lw), M.component("RouterView", hd), M.config.globalProperties.$router = Z, Object.defineProperty(M.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => Re(l)
                }), Xn && !ye && l.value === St && (ye = !0, g(s.location).catch(R => {}));
                const z = {};
                for (const R in St) Object.defineProperty(z, R, {
                    get: () => l.value[R],
                    enumerable: !0
                });
                M.provide(wa, Z), M.provide(Ta, as(z)), M.provide(ki, l);
                const ne = M.unmount;
                ve.add(M), M.unmount = function() {
                    ve.delete(M), ve.size < 1 && (f = St, te && te(), te = null, l.value = St, ye = !1, B = !1), ne()
                }
            }
        };

    function Ee(M) {
        return M.reduce((Z, z) => Z.then(() => D(z)), Promise.resolve())
    }
    return we
}

function Mw(e, t) {
    const n = [],
        r = [],
        s = [],
        o = Math.max(t.matched.length, e.matched.length);
    for (let a = 0; a < o; a++) {
        const c = t.matched[a];
        c && (e.matched.find(f => dr(f, c)) ? r.push(c) : n.push(c));
        const l = e.matched[a];
        l && (t.matched.find(f => dr(f, l)) || s.push(l))
    }
    return [n, r, s]
}

function Hw() {
    return Ve(Ta)
}
const Ze = {
        layout: "refer"
    },
    et = {
        layout: "refer"
    },
    tt = {
        layout: "user"
    },
    nt = {
        layout: "user"
    },
    Gl = [{
        name: "404",
        path: "/404",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./404.ff5c7054.js"), ["./404.ff5c7054.js", "./nuxt-link.52c63e0f.js", "./404.dfb9f9dd.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "business-plans",
        path: "/business-plans",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./business-plans.f7f8073c.js"), ["./business-plans.f7f8073c.js", "./PageHeader.3b5111e1.js", "./PageHeader.71320ef0.css", "./business-plans.4d5626da.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "contact-us",
        path: "/contact-us",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./contact-us.4dfd63dc.js"), ["./contact-us.4dfd63dc.js", "./PageHeader.3b5111e1.js", "./PageHeader.71320ef0.css", "./parentcomponent.fd1079ff.js", "./auth.b81bcb47.js", "./message.848c08a7.js", "./contact-us.560a8d31.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "faq",
        path: "/faq",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./faq.3a95680b.js"), ["./faq.3a95680b.js", "./PageHeader.3b5111e1.js", "./PageHeader.71320ef0.css", "./faq.1337b5c0.js", "./parentcomponent.fd1079ff.js", "./auth.b81bcb47.js", "./faq.63f30bef.css", "./default-header.c13bea40.js", "./faq.5574ef3e.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "index",
        path: "/",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./index.e0a3f4f3.js"), ["./index.e0a3f4f3.js", "./auth.b81bcb47.js", "./fancybox.f3e89cb7.js", "./fancybox.30efa028.css", "./parentcomponent.fd1079ff.js", "./swiper-element-bundle.1766dbd2.js", "./3.bed15f53.js", "./4.6d43009e.js", "./index.d3002152.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "jackpot",
        path: "/jackpot",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./jackpot.725b6cc8.js"), ["./jackpot.725b6cc8.js", "./PageHeader.3b5111e1.js", "./PageHeader.71320ef0.css", "./fancybox.f3e89cb7.js", "./fancybox.30efa028.css", "./parentcomponent.fd1079ff.js", "./auth.b81bcb47.js", "./swiper-element-bundle.1766dbd2.js", "./jackpot.cddea1a2.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "jumboticket-trust",
        path: "/jumboticket-trust",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./jumboticket-trust.c4880b85.js"), ["./jumboticket-trust.c4880b85.js", "./fancybox.f3e89cb7.js", "./fancybox.30efa028.css", "./jumboticket-trust.ecba6834.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "legal-fairplay-policy",
        path: "/legal/fairplay-policy",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./fairplay-policy.f8897b0e.js"), ["./fairplay-policy.f8897b0e.js", "./PageHeader.3b5111e1.js", "./PageHeader.71320ef0.css", "./default-header.c13bea40.js", "./fairplay-policy.7ad3d180.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "legal-fraud-awareness",
        path: "/legal/fraud-awareness",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./fraud-awareness.525e653a.js"), ["./fraud-awareness.525e653a.js", "./PageHeader.3b5111e1.js", "./PageHeader.71320ef0.css", "./default-header.c13bea40.js", "./fairplay-policy.7ad3d180.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "legal-privacy-policy",
        path: "/legal/privacy-policy",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./privacy-policy.7401bcc4.js"), ["./privacy-policy.7401bcc4.js", "./PageHeader.3b5111e1.js", "./PageHeader.71320ef0.css", "./default-header.c13bea40.js", "./fairplay-policy.7ad3d180.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "legal-responsible-gambling",
        path: "/legal/responsible-gambling",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./responsible-gambling.67dad7b0.js"), ["./responsible-gambling.67dad7b0.js", "./PageHeader.3b5111e1.js", "./PageHeader.71320ef0.css", "./default-header.c13bea40.js", "./fairplay-policy.7ad3d180.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "legal-terms-and-conditions",
        path: "/legal/terms-and-conditions",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./terms-and-conditions.824dd7cd.js"), ["./terms-and-conditions.824dd7cd.js", "./PageHeader.3b5111e1.js", "./PageHeader.71320ef0.css", "./default-header.c13bea40.js", "./fairplay-policy.7ad3d180.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "packages",
        path: "/packages",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./packages.acf77504.js"), ["./packages.acf77504.js", "./PageHeader.3b5111e1.js", "./PageHeader.71320ef0.css", "./auth.b81bcb47.js", "./packages.7251d1f6.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "refer-and-earn",
        path: "/refer-and-earn",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./refer-and-earn.66e61558.js"), ["./refer-and-earn.66e61558.js", "./PageHeader.3b5111e1.js", "./PageHeader.71320ef0.css", "./auth.b81bcb47.js", "./refer-and-earn.410b5563.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (Ze == null ? void 0 : Ze.name) ? ? "refer-left-slug",
        path: (Ze == null ? void 0 : Ze.path) ? ? "/refer-left/:slug()",
        meta: Ze || {},
        alias: (Ze == null ? void 0 : Ze.alias) || [],
        redirect: (Ze == null ? void 0 : Ze.redirect) || void 0,
        component: () => Ce(() =>
            import ("./_slug_.fd0496ae.js"), ["./_slug_.fd0496ae.js", "./nuxt-link.52c63e0f.js", "./imageCaptcha.a52f7c6c.js", "./parentcomponent.fd1079ff.js", "./auth.b81bcb47.js", "./imageCaptcha.367ed137.css", "./fancybox.f3e89cb7.js", "./fancybox.30efa028.css", "./swiper-element-bundle.1766dbd2.js", "./message.848c08a7.js", "./logo.a38fd6e8.js", "./3.bed15f53.js", "./4.6d43009e.js", "./_slug_.e4950bac.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "refer-left",
        path: "/refer-left",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./index.0d58270c.js"), [],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (et == null ? void 0 : et.name) ? ? "refer-right-slug",
        path: (et == null ? void 0 : et.path) ? ? "/refer-right/:slug()",
        meta: et || {},
        alias: (et == null ? void 0 : et.alias) || [],
        redirect: (et == null ? void 0 : et.redirect) || void 0,
        component: () => Ce(() =>
            import ("./_slug_.ef1d8b62.js"), ["./_slug_.ef1d8b62.js", "./nuxt-link.52c63e0f.js", "./imageCaptcha.a52f7c6c.js", "./parentcomponent.fd1079ff.js", "./auth.b81bcb47.js", "./imageCaptcha.367ed137.css", "./fancybox.f3e89cb7.js", "./fancybox.30efa028.css", "./swiper-element-bundle.1766dbd2.js", "./message.848c08a7.js", "./logo.a38fd6e8.js", "./4.6d43009e.js", "./_slug_.29c439f5.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "refer-right",
        path: "/refer-right",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./index.dec16de7.js"), [],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (tt == null ? void 0 : tt.name) ? ? "under-maintainance",
        path: (tt == null ? void 0 : tt.path) ? ? "/under-maintainance",
        meta: tt || {},
        alias: (tt == null ? void 0 : tt.alias) || [],
        redirect: (tt == null ? void 0 : tt.redirect) || void 0,
        component: () => Ce(() =>
            import ("./under-maintainance.2fbb0d82.js"), ["./under-maintainance.2fbb0d82.js", "./generalstatus.8fb9e6cc.js", "./parentcomponent.fd1079ff.js", "./auth.b81bcb47.js", "./under-maintainance.aa94b8b8.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (nt == null ? void 0 : nt.name) ? ? "under-payout",
        path: (nt == null ? void 0 : nt.path) ? ? "/under-payout",
        meta: nt || {},
        alias: (nt == null ? void 0 : nt.alias) || [],
        redirect: (nt == null ? void 0 : nt.redirect) || void 0,
        component: () => Ce(() =>
            import ("./under-payout.742d3884.js"), ["./under-payout.742d3884.js", "./generalstatus.8fb9e6cc.js", "./parentcomponent.fd1079ff.js", "./auth.b81bcb47.js", "./under-maintainance.aa94b8b8.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "winners",
        path: "/winners",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./winners.5a03c362.js"), ["./winners.5a03c362.js", "./PageHeader.3b5111e1.js", "./PageHeader.71320ef0.css", "./fancybox.f3e89cb7.js", "./fancybox.30efa028.css", "./parentcomponent.fd1079ff.js", "./auth.b81bcb47.js", "./swiper-element-bundle.1766dbd2.js", "./message.848c08a7.js", "./winners.00634641.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "xfaq",
        path: "/xfaq",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => Ce(() =>
            import ("./xfaq.449a2af8.js"), ["./xfaq.449a2af8.js", "./PageHeader.3b5111e1.js", "./PageHeader.71320ef0.css", "./faq.1337b5c0.js", "./parentcomponent.fd1079ff.js", "./auth.b81bcb47.js", "./faq.63f30bef.css", "./default-header.c13bea40.js", "./faq.5574ef3e.css"],
            import.meta.url).then(e => e.default || e)
    }],
    jw = {
        scrollBehavior(e, t, n) {
            var f;
            const r = Se(),
                s = ((f = jn().options) == null ? void 0 : f.scrollBehaviorType) ? ? "auto";
            let o = n || void 0;
            const a = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
            if (!o && t && e && a !== !1 && Fw(t, e) && (o = {
                    left: 0,
                    top: 0
                }), e.path === t.path) {
                if (t.hash && !e.hash) return {
                    left: 0,
                    top: 0
                };
                if (e.hash) return {
                    el: e.hash,
                    top: Ql(e.hash),
                    behavior: s
                }
            }
            const c = u => !!(u.meta.pageTransition ? ? xi),
                l = c(t) && c(e) ? "page:transition:finish" : "page:finish";
            return new Promise(u => {
                r.hooks.hookOnce(l, async () => {
                    await xt(), e.hash && (o = {
                        el: e.hash,
                        top: Ql(e.hash),
                        behavior: s
                    }), u(o)
                })
            })
        }
    };

function Ql(e) {
    try {
        const t = document.querySelector(e);
        if (t) return parseFloat(getComputedStyle(t).scrollMarginTop)
    } catch {}
    return 0
}

function Fw(e, t) {
    return t.path !== e.path || JSON.stringify(e.params) !== JSON.stringify(t.params)
}
const Bw = {},
    ze = { ...Bw,
        ...jw
    },
    Vw = async e => {
        var l;
        let t, n;
        if (!((l = e.meta) != null && l.validate)) return;
        const r = Se(),
            s = jn();
        if (([t, n] = ss(() => Promise.resolve(e.meta.validate(e))), t = await t, n(), t) === !0) return;
        const a = Ea({
                statusCode: 404,
                statusMessage: `Page Not Found: ${e.fullPath}`
            }),
            c = s.beforeResolve(f => {
                if (c(), f === e) {
                    const u = s.afterEach(async () => {
                        u(), await r.runWithContext(() => Zn(a)), window.history.pushState({}, "", e.fullPath)
                    });
                    return !1
                }
            })
    },
    Uw = async e => {
        let t, n;
        const r = ([t, n] = ss(() => Zf(e.path)), t = await t, n(), t);
        if (r.redirect) return r.redirect
    },
    Ww = [Vw, Uw],
    Yr = {};

function Kw(e, t, n) {
    const {
        pathname: r,
        search: s,
        hash: o
    } = t, a = e.indexOf("#");
    if (a > -1) {
        const f = o.includes(e.slice(a)) ? e.slice(a).length : 1;
        let u = o.slice(f);
        return u[0] !== "/" && (u = "/" + u), ml(u, "")
    }
    const c = ml(r, e),
        l = !n || Cv(c, n, {
            trailingSlash: !0
        }) ? c : n;
    return l + (l.includes("?") ? "" : s) + o
}
const Yw = He({
        name: "nuxt:router",
        enforce: "pre",
        async setup(e) {
            var w, N;
            let t, n, r = Cr().app.baseURL;
            ze.hashMode && !r.includes("#") && (r += "#");
            const s = ((w = ze.history) == null ? void 0 : w.call(ze, r)) ? ? (ze.hashMode ? Zb(r) : sd(r)),
                o = ((N = ze.routes) == null ? void 0 : N.call(ze, Gl)) ? ? Gl;
            let a;
            const c = Kw(r, window.location, e.payload.path),
                l = kw({ ...ze,
                    scrollBehavior: ($, A, b) => {
                        var g;
                        if (A === St) {
                            a = b;
                            return
                        }
                        return l.options.scrollBehavior = ze.scrollBehavior, (g = ze.scrollBehavior) == null ? void 0 : g.call(ze, $, St, a || b)
                    },
                    history: s,
                    routes: o
                });
            e.vueApp.use(l);
            const f = Xr(l.currentRoute.value);
            l.afterEach(($, A) => {
                f.value = A
            }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
                get: () => f.value
            });
            const u = Xr(l.resolve(c)),
                h = () => {
                    u.value = l.currentRoute.value
                };
            e.hook("page:finish", h), l.afterEach(($, A) => {
                var b, g, S, H;
                ((g = (b = $.matched[0]) == null ? void 0 : b.components) == null ? void 0 : g.default) === ((H = (S = A.matched[0]) == null ? void 0 : S.components) == null ? void 0 : H.default) && h()
            });
            const p = {};
            for (const $ in u.value) Object.defineProperty(p, $, {
                get: () => u.value[$]
            });
            e._route = as(p), e._middleware = e._middleware || {
                global: [],
                named: {}
            };
            const m = Co();
            try {
                [t, n] = ss(() => l.isReady()), await t, n()
            } catch ($) {
                [t, n] = ss(() => e.runWithContext(() => Zn($))), await t, n()
            }
            const T = e.payload.state._layout;
            return l.beforeEach(async ($, A) => {
                var b;
                $.meta = Tt($.meta), e.isHydrating && T && !Dn($.meta.layout) && ($.meta.layout = T), e._processingMiddleware = !0; {
                    const g = new Set([...Ww, ...e._middleware.global]);
                    for (const S of $.matched) {
                        const H = S.meta.middleware;
                        if (H)
                            if (Array.isArray(H))
                                for (const U of H) g.add(U);
                            else g.add(H)
                    }
                    for (const S of g) {
                        const H = typeof S == "string" ? e._middleware.named[S] || await ((b = Yr[S]) == null ? void 0 : b.call(Yr).then(x => x.default || x)) : S;
                        if (!H) throw new Error(`Unknown route middleware: '${S}'.`);
                        const U = await e.runWithContext(() => H($, A));
                        if (!e.payload.serverRendered && e.isHydrating && (U === !1 || U instanceof Error)) {
                            const x = U || Pi({
                                statusCode: 404,
                                statusMessage: `Page Not Found: ${c}`
                            });
                            return await e.runWithContext(() => Zn(x)), !1
                        }
                        if (U !== !0 && (U || U === !1)) return U
                    }
                }
            }), l.onError(() => {
                delete e._processingMiddleware
            }), l.afterEach(async ($, A, b) => {
                delete e._processingMiddleware, !e.isHydrating && m.value && await e.runWithContext(pb), $.matched.length === 0 && await e.runWithContext(() => Zn(Pi({
                    statusCode: 404,
                    fatal: !1,
                    statusMessage: `Page not found: ${$.fullPath}`
                })))
            }), e.hooks.hookOnce("app:created", async () => {
                try {
                    await l.replace({ ...l.resolve(c),
                        name: void 0,
                        force: !0
                    }), l.options.scrollBehavior = ze.scrollBehavior
                } catch ($) {
                    await e.runWithContext(() => Zn($))
                }
            }), {
                provide: {
                    router: l
                }
            }
        }
    }),
    qw = He({
        name: "nuxt:payload",
        setup(e) {
            jn().beforeResolve(async (t, n) => {
                if (t.path === n.path) return;
                const r = await Nl(t.path);
                r && Object.assign(e.static.data, r.data)
            }), Xf(() => {
                var t;
                e.hooks.hook("link:prefetch", async n => {
                    Ao(n).protocol || await Nl(n)
                }), ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== "slow-2g" && setTimeout(So, 1e3)
            })
        }
    }),
    zw = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let pd;
const fs = e => pd = e,
    md = Symbol();

function Mi(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var qr;
(function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})(qr || (qr = {}));

function Gw() {
    const e = zi(!0),
        t = e.run(() => Pe({}));
    let n = [],
        r = [];
    const s = po({
        install(o) {
            fs(s), s._a = o, o.provide(md, s), o.config.globalProperties.$pinia = s, r.forEach(a => n.push(a)), r = []
        },
        use(o) {
            return !this._a && !zw ? r.push(o) : n.push(o), this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return s
}
const gd = () => {};

function Xl(e, t, n, r = gd) {
    e.push(t);
    const s = () => {
        const o = e.indexOf(t);
        o > -1 && (e.splice(o, 1), r())
    };
    return !n && Gi() && bu(s), s
}

function Qn(e, ...t) {
    e.slice().forEach(n => {
        n(...t)
    })
}
const Qw = e => e();

function Hi(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n)) continue;
        const r = t[n],
            s = e[n];
        Mi(s) && Mi(r) && e.hasOwnProperty(n) && !xe(r) && !sn(r) ? e[n] = Hi(s, r) : e[n] = r
    }
    return e
}
const Xw = Symbol();

function Jw(e) {
    return !Mi(e) || !e.hasOwnProperty(Xw)
}
const {
    assign: Zt
} = Object;

function Zw(e) {
    return !!(xe(e) && e.effect)
}

function eT(e, t, n, r) {
    const {
        state: s,
        actions: o,
        getters: a
    } = t, c = n.state.value[e];
    let l;

    function f() {
        c || (n.state.value[e] = s ? s() : {});
        const u = c_(n.state.value[e]);
        return Zt(u, o, Object.keys(a || {}).reduce((h, p) => (h[p] = po(st(() => {
            fs(n);
            const m = n._s.get(e);
            return a[p].call(m, m)
        })), h), {}))
    }
    return l = _d(e, f, t, n, r, !0), l
}

function _d(e, t, n = {}, r, s, o) {
    let a;
    const c = Zt({
            actions: {}
        }, n),
        l = {
            deep: !0
        };
    let f, u, h = [],
        p = [],
        m;
    const T = r.state.value[e];
    !o && !T && (r.state.value[e] = {}), Pe({});
    let w;

    function N(x) {
        let D;
        f = u = !1, typeof x == "function" ? (x(r.state.value[e]), D = {
            type: qr.patchFunction,
            storeId: e,
            events: m
        }) : (Hi(r.state.value[e], x), D = {
            type: qr.patchObject,
            payload: x,
            storeId: e,
            events: m
        });
        const L = w = Symbol();
        xt().then(() => {
            w === L && (f = !0)
        }), u = !0, Qn(h, D, r.state.value[e])
    }
    const $ = o ? function() {
        const {
            state: D
        } = n, L = D ? D() : {};
        this.$patch(F => {
            Zt(F, L)
        })
    } : gd;

    function A() {
        a.stop(), h = [], p = [], r._s.delete(e)
    }

    function b(x, D) {
        return function() {
            fs(r);
            const L = Array.from(arguments),
                F = [],
                K = [];

            function te(O) {
                F.push(O)
            }

            function J(O) {
                K.push(O)
            }
            Qn(p, {
                args: L,
                name: x,
                store: S,
                after: te,
                onError: J
            });
            let W;
            try {
                W = D.apply(this && this.$id === e ? this : S, L)
            } catch (O) {
                throw Qn(K, O), O
            }
            return W instanceof Promise ? W.then(O => (Qn(F, O), O)).catch(O => (Qn(K, O), Promise.reject(O))) : (Qn(F, W), W)
        }
    }
    const g = {
            _p: r,
            $id: e,
            $onAction: Xl.bind(null, p),
            $patch: N,
            $reset: $,
            $subscribe(x, D = {}) {
                const L = Xl(h, x, D.detached, () => F()),
                    F = a.run(() => an(() => r.state.value[e], K => {
                        (D.flush === "sync" ? u : f) && x({
                            storeId: e,
                            type: qr.direct,
                            events: m
                        }, K)
                    }, Zt({}, l, D)));
                return L
            },
            $dispose: A
        },
        S = Tt(g);
    r._s.set(e, S);
    const U = (r._a && r._a.runWithContext || Qw)(() => r._e.run(() => (a = zi()).run(t)));
    for (const x in U) {
        const D = U[x];
        if (xe(D) && !Zw(D) || sn(D)) o || (T && Jw(D) && (xe(D) ? D.value = T[x] : Hi(D, T[x])), r.state.value[e][x] = D);
        else if (typeof D == "function") {
            const L = b(x, D);
            U[x] = L, c.actions[x] = D
        }
    }
    return Zt(S, U), Zt(me(S), U), Object.defineProperty(S, "$state", {
        get: () => r.state.value[e],
        set: x => {
            N(D => {
                Zt(D, x)
            })
        }
    }), r._p.forEach(x => {
        Zt(S, a.run(() => x({
            store: S,
            app: r._a,
            pinia: r,
            options: c
        })))
    }), T && o && n.hydrate && n.hydrate(S.$state, T), f = !0, u = !0, S
}

function _C(e, t, n) {
    let r, s;
    const o = typeof t == "function";
    typeof e == "string" ? (r = e, s = o ? n : t) : (s = e, r = e.id);

    function a(c, l) {
        const f = fa();
        return c = c || (f ? Ve(md, null) : null), c && fs(c), c = pd, c._s.has(r) || (o ? _d(r, t, s, c) : eT(r, s, c)), c._s.get(r)
    }
    return a.$id = r, a
}
let tT = "Store";

function yC(...e) {
    return e.reduce((t, n) => (t[n.$id + tT] = function() {
        return n(this.$pinia)
    }, t), {})
}

function vC(e, t) {
    return Array.isArray(t) ? t.reduce((n, r) => (n[r] = function() {
        return e(this.$pinia)[r]
    }, n), {}) : Object.keys(t).reduce((n, r) => (n[r] = function() {
        const s = e(this.$pinia),
            o = t[r];
        return typeof o == "function" ? o.call(this, s) : s[o]
    }, n), {})
}
const nT = He(e => {
        const t = Gw();
        return e.vueApp.use(t), fs(t), e.payload && e.payload.pinia && (t.state.value = e.payload.pinia), {
            provide: {
                pinia: t
            }
        }
    }),
    rT = He({
        name: "nuxt:global-components"
    }),
    On = {
        default: () => Ce(() =>
            import ("./default.de2e63f8.js"), ["./default.de2e63f8.js", "./nuxt-link.52c63e0f.js", "./auth.b81bcb47.js", "./logo.a38fd6e8.js", "./Footer.f011c497.js", "./parentcomponent.fd1079ff.js", "./Footer.34d01fc4.css", "./default.49d15724.css"],
            import.meta.url).then(e => e.default || e),
        refer: () => Ce(() =>
            import ("./refer.aa1a91bb.js"), ["./refer.aa1a91bb.js", "./Footer.f011c497.js", "./nuxt-link.52c63e0f.js", "./parentcomponent.fd1079ff.js", "./auth.b81bcb47.js", "./Footer.34d01fc4.css", "./refer.d7b662fb.css"],
            import.meta.url).then(e => e.default || e)
    },
    sT = He({
        name: "nuxt:prefetch",
        setup(e) {
            const t = jn();
            e.hooks.hook("app:mounted", () => {
                t.beforeEach(async n => {
                    var s;
                    const r = (s = n == null ? void 0 : n.meta) == null ? void 0 : s.layout;
                    r && typeof On[r] == "function" && await On[r]()
                })
            }), e.hooks.hook("link:prefetch", n => {
                var a, c, l, f;
                if (ls(n)) return;
                const r = t.resolve(n);
                if (!r) return;
                const s = (a = r == null ? void 0 : r.meta) == null ? void 0 : a.layout;
                let o = Array.isArray((c = r == null ? void 0 : r.meta) == null ? void 0 : c.middleware) ? (l = r == null ? void 0 : r.meta) == null ? void 0 : l.middleware : [(f = r == null ? void 0 : r.meta) == null ? void 0 : f.middleware];
                o = o.filter(u => typeof u == "string");
                for (const u of o) typeof Yr[u] == "function" && Yr[u]();
                s && typeof On[s] == "function" && On[s]()
            })
        }
    }),
    oT = {
        favicon: {},
        transparent: {},
        maskable: {},
        apple: {},
        appleSplashScreen: {}
    },
    iT = He(() => {
        const e = {};
        return Dr(e, "transparent"), Dr(e, "maskable"), Dr(e, "favicon"), Dr(e, "apple"), Dr(e, "appleSplashScreen"), {
            provide: {
                pwaIcons: e
            }
        }
    });

function Dr(e, t) {
    e[t] = Object.values(oT[t] ? ? {}).reduce((n, r) => {
        const s = { ...r,
            asImage: {
                src: r.url,
                key: `${t}-${r.name}`
            }
        };
        return r.width && r.height && (s.asImage.width = r.width, s.asImage.height = r.height), n[r.name] = s, n
    }, {})
}

function aT(e = {}) {
    const {
        immediate: t = !1,
        onNeedRefresh: n,
        onOfflineReady: r,
        onRegistered: s,
        onRegisteredSW: o,
        onRegisterError: a
    } = e;
    let c, l, f;
    const u = async (p = !0) => {
        await l, await (f == null ? void 0 : f())
    };
    async function h() {
        if ("serviceWorker" in navigator) {
            if (c = await Ce(() =>
                    import ("./workbox-window.prod.es5.a7b12eab.js"), [],
                    import.meta.url).then(({
                    Workbox: p
                }) => new p("/sw.js", {
                    scope: "/",
                    type: "classic"
                })).catch(p => {
                    a == null || a(p)
                }), !c) return;
            f = async () => {
                await (c == null ? void 0 : c.messageSkipWaiting())
            }; {
                let p = !1;
                const m = () => {
                    p = !0, c == null || c.addEventListener("controlling", T => {
                        T.isUpdate && window.location.reload()
                    }), n == null || n()
                };
                c.addEventListener("installed", T => {
                    typeof T.isUpdate > "u" ? typeof T.isExternal < "u" ? T.isExternal ? m() : !p && (r == null || r()) : T.isExternal ? window.location.reload() : !p && (r == null || r()) : T.isUpdate || r == null || r()
                }), c.addEventListener("waiting", m), c.addEventListener("externalwaiting", m)
            }
            c.register({
                immediate: t
            }).then(p => {
                o ? o("/sw.js", p) : s == null || s(p)
            }).catch(p => {
                a == null || a(p)
            })
        }
    }
    return l = h(), u
}

function cT(e = {}) {
    const {
        immediate: t = !0,
        onNeedRefresh: n,
        onOfflineReady: r,
        onRegistered: s,
        onRegisteredSW: o,
        onRegisterError: a
    } = e, c = Pe(!1), l = Pe(!1);
    return {
        updateServiceWorker: aT({
            immediate: t,
            onNeedRefresh() {
                c.value = !0, n == null || n()
            },
            onOfflineReady() {
                l.value = !0, r == null || r()
            },
            onRegistered: s,
            onRegisteredSW: o,
            onRegisterError: a
        }),
        offlineReady: l,
        needRefresh: c
    }
}
const lT = "standalone",
    uT = void 0,
    fT = He(() => {
        const e = Pe(!1),
            t = Pe(!1),
            n = Pe(!1),
            r = Pe(!0),
            s = navigator.userAgent,
            o = s.match(/iPhone|iPad|iPod/),
            a = `${lT}`,
            c = window.matchMedia(`(display-mode: ${a})`).matches,
            l = Pe(!!(c || o && !s.match(/Safari/))),
            f = Pe(l.value);
        window.matchMedia(`(display-mode: ${a})`).addEventListener("change", A => {
            !f.value && A.matches && (f.value = !0)
        });
        let u;
        const h = () => u,
            {
                offlineReady: p,
                needRefresh: m,
                updateServiceWorker: T
            } = cT({
                immediate: !0,
                onRegisterError() {
                    e.value = !0
                },
                onRegisteredSW(A, b) {
                    u = b
                }
            }),
            w = async () => {
                p.value = !1, m.value = !1
            };
        let N = () => Promise.resolve(),
            $ = () => {};
        if (!r.value) {
            let A;
            const b = g => {
                g.preventDefault(), A = g, n.value = !0
            };
            window.addEventListener("beforeinstallprompt", b), window.addEventListener("appinstalled", () => {
                A = void 0, n.value = !1
            }), $ = () => {
                A = void 0, n.value = !1, window.removeEventListener("beforeinstallprompt", b), r.value = !0, localStorage.setItem(uT, "true")
            }, N = async () => {
                if (!n.value || !A) {
                    n.value = !1;
                    return
                }
                n.value = !1, await xt(), A.prompt(), await A.userChoice
            }
        }
        return {
            provide: {
                pwa: Tt({
                    isInstalled: l,
                    isPWAInstalled: f,
                    showInstallPrompt: n,
                    cancelInstall: $,
                    install: N,
                    swActivated: t,
                    registrationError: e,
                    offlineReady: p,
                    needRefresh: m,
                    updateServiceWorker: T,
                    cancelPrompt: w,
                    getSWRegistration: h
                })
            }
        }
    });
var $o = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Aa(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function dT(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(r) {
        var s = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, s.get ? s : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), n
}
var yd = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    })($o, function() {
        var n = 1e3,
            r = 6e4,
            s = 36e5,
            o = "millisecond",
            a = "second",
            c = "minute",
            l = "hour",
            f = "day",
            u = "week",
            h = "month",
            p = "quarter",
            m = "year",
            T = "date",
            w = "Invalid Date",
            N = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            $ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            A = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ordinal: function(J) {
                    var W = ["th", "st", "nd", "rd"],
                        O = J % 100;
                    return "[" + J + (W[(O - 20) % 10] || W[O] || W[0]) + "]"
                }
            },
            b = function(J, W, O) {
                var B = String(J);
                return !B || B.length >= W ? J : "" + Array(W + 1 - B.length).join(O) + J
            },
            g = {
                s: b,
                z: function(J) {
                    var W = -J.utcOffset(),
                        O = Math.abs(W),
                        B = Math.floor(O / 60),
                        k = O % 60;
                    return (W <= 0 ? "+" : "-") + b(B, 2, "0") + ":" + b(k, 2, "0")
                },
                m: function J(W, O) {
                    if (W.date() < O.date()) return -J(O, W);
                    var B = 12 * (O.year() - W.year()) + (O.month() - W.month()),
                        k = W.clone().add(B, h),
                        re = O - k < 0,
                        ce = W.clone().add(B + (re ? -1 : 1), h);
                    return +(-(B + (O - k) / (re ? k - ce : ce - k)) || 0)
                },
                a: function(J) {
                    return J < 0 ? Math.ceil(J) || 0 : Math.floor(J)
                },
                p: function(J) {
                    return {
                        M: h,
                        y: m,
                        w: u,
                        d: f,
                        D: T,
                        h: l,
                        m: c,
                        s: a,
                        ms: o,
                        Q: p
                    }[J] || String(J || "").toLowerCase().replace(/s$/, "")
                },
                u: function(J) {
                    return J === void 0
                }
            },
            S = "en",
            H = {};
        H[S] = A;
        var U = "$isDayjsObject",
            x = function(J) {
                return J instanceof K || !(!J || !J[U])
            },
            D = function J(W, O, B) {
                var k;
                if (!W) return S;
                if (typeof W == "string") {
                    var re = W.toLowerCase();
                    H[re] && (k = re), O && (H[re] = O, k = re);
                    var ce = W.split("-");
                    if (!k && ce.length > 1) return J(ce[0])
                } else {
                    var de = W.name;
                    H[de] = W, k = de
                }
                return !B && k && (S = k), k || !B && S
            },
            L = function(J, W) {
                if (x(J)) return J.clone();
                var O = typeof W == "object" ? W : {};
                return O.date = J, O.args = arguments, new K(O)
            },
            F = g;
        F.l = D, F.i = x, F.w = function(J, W) {
            return L(J, {
                locale: W.$L,
                utc: W.$u,
                x: W.$x,
                $offset: W.$offset
            })
        };
        var K = function() {
                function J(O) {
                    this.$L = D(O.locale, null, !0), this.parse(O), this.$x = this.$x || O.x || {}, this[U] = !0
                }
                var W = J.prototype;
                return W.parse = function(O) {
                    this.$d = function(B) {
                        var k = B.date,
                            re = B.utc;
                        if (k === null) return new Date(NaN);
                        if (F.u(k)) return new Date;
                        if (k instanceof Date) return new Date(k);
                        if (typeof k == "string" && !/Z$/i.test(k)) {
                            var ce = k.match(N);
                            if (ce) {
                                var de = ce[2] - 1 || 0,
                                    fe = (ce[7] || "0").substring(0, 3);
                                return re ? new Date(Date.UTC(ce[1], de, ce[3] || 1, ce[4] || 0, ce[5] || 0, ce[6] || 0, fe)) : new Date(ce[1], de, ce[3] || 1, ce[4] || 0, ce[5] || 0, ce[6] || 0, fe)
                            }
                        }
                        return new Date(k)
                    }(O), this.init()
                }, W.init = function() {
                    var O = this.$d;
                    this.$y = O.getFullYear(), this.$M = O.getMonth(), this.$D = O.getDate(), this.$W = O.getDay(), this.$H = O.getHours(), this.$m = O.getMinutes(), this.$s = O.getSeconds(), this.$ms = O.getMilliseconds()
                }, W.$utils = function() {
                    return F
                }, W.isValid = function() {
                    return this.$d.toString() !== w
                }, W.isSame = function(O, B) {
                    var k = L(O);
                    return this.startOf(B) <= k && k <= this.endOf(B)
                }, W.isAfter = function(O, B) {
                    return L(O) < this.startOf(B)
                }, W.isBefore = function(O, B) {
                    return this.endOf(B) < L(O)
                }, W.$g = function(O, B, k) {
                    return F.u(O) ? this[B] : this.set(k, O)
                }, W.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }, W.valueOf = function() {
                    return this.$d.getTime()
                }, W.startOf = function(O, B) {
                    var k = this,
                        re = !!F.u(B) || B,
                        ce = F.p(O),
                        de = function(z, ne) {
                            var R = F.w(k.$u ? Date.UTC(k.$y, ne, z) : new Date(k.$y, ne, z), k);
                            return re ? R : R.endOf(f)
                        },
                        fe = function(z, ne) {
                            return F.w(k.toDate()[z].apply(k.toDate("s"), (re ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ne)), k)
                        },
                        ye = this.$W,
                        ve = this.$M,
                        we = this.$D,
                        Ee = "set" + (this.$u ? "UTC" : "");
                    switch (ce) {
                        case m:
                            return re ? de(1, 0) : de(31, 11);
                        case h:
                            return re ? de(1, ve) : de(0, ve + 1);
                        case u:
                            var M = this.$locale().weekStart || 0,
                                Z = (ye < M ? ye + 7 : ye) - M;
                            return de(re ? we - Z : we + (6 - Z), ve);
                        case f:
                        case T:
                            return fe(Ee + "Hours", 0);
                        case l:
                            return fe(Ee + "Minutes", 1);
                        case c:
                            return fe(Ee + "Seconds", 2);
                        case a:
                            return fe(Ee + "Milliseconds", 3);
                        default:
                            return this.clone()
                    }
                }, W.endOf = function(O) {
                    return this.startOf(O, !1)
                }, W.$set = function(O, B) {
                    var k, re = F.p(O),
                        ce = "set" + (this.$u ? "UTC" : ""),
                        de = (k = {}, k[f] = ce + "Date", k[T] = ce + "Date", k[h] = ce + "Month", k[m] = ce + "FullYear", k[l] = ce + "Hours", k[c] = ce + "Minutes", k[a] = ce + "Seconds", k[o] = ce + "Milliseconds", k)[re],
                        fe = re === f ? this.$D + (B - this.$W) : B;
                    if (re === h || re === m) {
                        var ye = this.clone().set(T, 1);
                        ye.$d[de](fe), ye.init(), this.$d = ye.set(T, Math.min(this.$D, ye.daysInMonth())).$d
                    } else de && this.$d[de](fe);
                    return this.init(), this
                }, W.set = function(O, B) {
                    return this.clone().$set(O, B)
                }, W.get = function(O) {
                    return this[F.p(O)]()
                }, W.add = function(O, B) {
                    var k, re = this;
                    O = Number(O);
                    var ce = F.p(B),
                        de = function(ve) {
                            var we = L(re);
                            return F.w(we.date(we.date() + Math.round(ve * O)), re)
                        };
                    if (ce === h) return this.set(h, this.$M + O);
                    if (ce === m) return this.set(m, this.$y + O);
                    if (ce === f) return de(1);
                    if (ce === u) return de(7);
                    var fe = (k = {}, k[c] = r, k[l] = s, k[a] = n, k)[ce] || 1,
                        ye = this.$d.getTime() + O * fe;
                    return F.w(ye, this)
                }, W.subtract = function(O, B) {
                    return this.add(-1 * O, B)
                }, W.format = function(O) {
                    var B = this,
                        k = this.$locale();
                    if (!this.isValid()) return k.invalidDate || w;
                    var re = O || "YYYY-MM-DDTHH:mm:ssZ",
                        ce = F.z(this),
                        de = this.$H,
                        fe = this.$m,
                        ye = this.$M,
                        ve = k.weekdays,
                        we = k.months,
                        Ee = k.meridiem,
                        M = function(ne, R, _, E) {
                            return ne && (ne[R] || ne(B, re)) || _[R].slice(0, E)
                        },
                        Z = function(ne) {
                            return F.s(de % 12 || 12, ne, "0")
                        },
                        z = Ee || function(ne, R, _) {
                            var E = ne < 12 ? "AM" : "PM";
                            return _ ? E.toLowerCase() : E
                        };
                    return re.replace($, function(ne, R) {
                        return R || function(_) {
                            switch (_) {
                                case "YY":
                                    return String(B.$y).slice(-2);
                                case "YYYY":
                                    return F.s(B.$y, 4, "0");
                                case "M":
                                    return ye + 1;
                                case "MM":
                                    return F.s(ye + 1, 2, "0");
                                case "MMM":
                                    return M(k.monthsShort, ye, we, 3);
                                case "MMMM":
                                    return M(we, ye);
                                case "D":
                                    return B.$D;
                                case "DD":
                                    return F.s(B.$D, 2, "0");
                                case "d":
                                    return String(B.$W);
                                case "dd":
                                    return M(k.weekdaysMin, B.$W, ve, 2);
                                case "ddd":
                                    return M(k.weekdaysShort, B.$W, ve, 3);
                                case "dddd":
                                    return ve[B.$W];
                                case "H":
                                    return String(de);
                                case "HH":
                                    return F.s(de, 2, "0");
                                case "h":
                                    return Z(1);
                                case "hh":
                                    return Z(2);
                                case "a":
                                    return z(de, fe, !0);
                                case "A":
                                    return z(de, fe, !1);
                                case "m":
                                    return String(fe);
                                case "mm":
                                    return F.s(fe, 2, "0");
                                case "s":
                                    return String(B.$s);
                                case "ss":
                                    return F.s(B.$s, 2, "0");
                                case "SSS":
                                    return F.s(B.$ms, 3, "0");
                                case "Z":
                                    return ce
                            }
                            return null
                        }(ne) || ce.replace(":", "")
                    })
                }, W.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }, W.diff = function(O, B, k) {
                    var re, ce = this,
                        de = F.p(B),
                        fe = L(O),
                        ye = (fe.utcOffset() - this.utcOffset()) * r,
                        ve = this - fe,
                        we = function() {
                            return F.m(ce, fe)
                        };
                    switch (de) {
                        case m:
                            re = we() / 12;
                            break;
                        case h:
                            re = we();
                            break;
                        case p:
                            re = we() / 3;
                            break;
                        case u:
                            re = (ve - ye) / 6048e5;
                            break;
                        case f:
                            re = (ve - ye) / 864e5;
                            break;
                        case l:
                            re = ve / s;
                            break;
                        case c:
                            re = ve / r;
                            break;
                        case a:
                            re = ve / n;
                            break;
                        default:
                            re = ve
                    }
                    return k ? re : F.a(re)
                }, W.daysInMonth = function() {
                    return this.endOf(h).$D
                }, W.$locale = function() {
                    return H[this.$L]
                }, W.locale = function(O, B) {
                    if (!O) return this.$L;
                    var k = this.clone(),
                        re = D(O, B, !0);
                    return re && (k.$L = re), k
                }, W.clone = function() {
                    return F.w(this.$d, this)
                }, W.toDate = function() {
                    return new Date(this.valueOf())
                }, W.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }, W.toISOString = function() {
                    return this.$d.toISOString()
                }, W.toString = function() {
                    return this.$d.toUTCString()
                }, J
            }(),
            te = K.prototype;
        return L.prototype = te, [
            ["$ms", o],
            ["$s", a],
            ["$m", c],
            ["$H", l],
            ["$W", f],
            ["$M", h],
            ["$y", m],
            ["$D", T]
        ].forEach(function(J) {
            te[J[1]] = function(W) {
                return this.$g(W, J[0], J[1])
            }
        }), L.extend = function(J, W) {
            return J.$i || (J(W, K, L), J.$i = !0), L
        }, L.locale = D, L.isDayjs = x, L.unix = function(J) {
            return L(1e3 * J)
        }, L.en = H[S], L.Ls = H, L.p = {}, L
    })
})(yd);
var hT = yd.exports;
const Ca = Aa(hT);
var vd = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    })($o, function() {
        return function(n, r, s) {
            s.updateLocale = function(o, a) {
                var c = s.Ls[o];
                if (c) return (a ? Object.keys(a) : []).forEach(function(l) {
                    c[l] = a[l]
                }), c
            }
        }
    })
})(vd);
var pT = vd.exports;
const mT = Aa(pT);
var Ed = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    })($o, function() {
        var n = "minute",
            r = /[+-]\d\d(?::?\d\d)?/g,
            s = /([+-]|\d\d)/g;
        return function(o, a, c) {
            var l = a.prototype;
            c.utc = function(w) {
                var N = {
                    date: w,
                    utc: !0,
                    args: arguments
                };
                return new a(N)
            }, l.utc = function(w) {
                var N = c(this.toDate(), {
                    locale: this.$L,
                    utc: !0
                });
                return w ? N.add(this.utcOffset(), n) : N
            }, l.local = function() {
                return c(this.toDate(), {
                    locale: this.$L,
                    utc: !1
                })
            };
            var f = l.parse;
            l.parse = function(w) {
                w.utc && (this.$u = !0), this.$utils().u(w.$offset) || (this.$offset = w.$offset), f.call(this, w)
            };
            var u = l.init;
            l.init = function() {
                if (this.$u) {
                    var w = this.$d;
                    this.$y = w.getUTCFullYear(), this.$M = w.getUTCMonth(), this.$D = w.getUTCDate(), this.$W = w.getUTCDay(), this.$H = w.getUTCHours(), this.$m = w.getUTCMinutes(), this.$s = w.getUTCSeconds(), this.$ms = w.getUTCMilliseconds()
                } else u.call(this)
            };
            var h = l.utcOffset;
            l.utcOffset = function(w, N) {
                var $ = this.$utils().u;
                if ($(w)) return this.$u ? 0 : $(this.$offset) ? h.call(this) : this.$offset;
                if (typeof w == "string" && (w = function(S) {
                        S === void 0 && (S = "");
                        var H = S.match(r);
                        if (!H) return null;
                        var U = ("" + H[0]).match(s) || ["-", 0, 0],
                            x = U[0],
                            D = 60 * +U[1] + +U[2];
                        return D === 0 ? 0 : x === "+" ? D : -D
                    }(w), w === null)) return this;
                var A = Math.abs(w) <= 16 ? 60 * w : w,
                    b = this;
                if (N) return b.$offset = A, b.$u = w === 0, b;
                if (w !== 0) {
                    var g = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                    (b = this.local().add(A + g, n)).$offset = A, b.$x.$localOffset = g
                } else b = this.utc();
                return b
            };
            var p = l.format;
            l.format = function(w) {
                var N = w || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                return p.call(this, N)
            }, l.valueOf = function() {
                var w = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                return this.$d.valueOf() - 6e4 * w
            }, l.isUTC = function() {
                return !!this.$u
            }, l.toISOString = function() {
                return this.toDate().toISOString()
            }, l.toString = function() {
                return this.toDate().toUTCString()
            };
            var m = l.toDate;
            l.toDate = function(w) {
                return w === "s" && this.$offset ? c(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : m.call(this)
            };
            var T = l.diff;
            l.diff = function(w, N, $) {
                if (w && this.$u === w.$u) return T.call(this, w, N, $);
                var A = this.local(),
                    b = c(w).local();
                return T.call(A, b, N, $)
            }
        }
    })
})(Ed);
var gT = Ed.exports;
const _T = Aa(gT);
Ca.extend(mT);
Ca.extend(_T);
const yT = He(async e => e.provide("dayjs", Ca)),
    vT = He({
        name: "nuxt:chunk-reload",
        setup(e) {
            const t = jn(),
                n = Cr(),
                r = new Set;
            t.beforeEach(() => {
                r.clear()
            }), e.hook("app:chunkError", ({
                error: o
            }) => {
                r.add(o)
            });

            function s(o) {
                const c = "href" in o && o.href.startsWith("#") ? n.app.baseURL + o.href : Hn(n.app.baseURL, o.fullPath);
                Tb({
                    path: c,
                    persistState: !0
                })
            }
            e.hook("app:manifest:update", () => {
                t.beforeResolve(s)
            }), t.onError((o, a) => {
                r.has(o) && s(a)
            })
        }
    }),
    ET = He(e => {
        let t;
        const n = Cr();
        async function r() {
            const s = await So();
            t && clearTimeout(t), t = setTimeout(r, 1e3 * 60 * 60);
            const o = await $fetch(Hn(n.app.cdnURL || n.app.baseURL, n.app.buildAssetsDir, "builds/latest.json"));
            o.id !== s.id && e.hooks.callHook("app:manifest:update", o)
        }
        Xf(() => {
            t = setTimeout(r, 1e3 * 60 * 60)
        })
    });

function Jl(e) {
    return {
        getItem: t => Rl(t, { ...e,
            encode: encodeURIComponent,
            decode: decodeURIComponent
        }).value,
        setItem: (t, n) => {
            Rl(t, { ...e,
                encode: encodeURIComponent,
                decode: decodeURIComponent
            }).value = n
        }
    }
}

function bT() {
    return {
        getItem: e => Se().ssrContext ? null : localStorage.getItem(e),
        setItem: (e, t) => {
            Se().ssrContext || localStorage.setItem(e, t)
        }
    }
}

function wT() {
    return {
        getItem: e => Se().ssrContext ? null : sessionStorage.getItem(e),
        setItem: (e, t) => {
            Se().ssrContext || sessionStorage.setItem(e, t)
        }
    }
}
const Zl = {
    localStorage: bT(),
    sessionStorage: wT(),
    cookies: Jl(),
    cookiesWithOptions: Jl
};

function TT(e) {
    return typeof e == "object" && e !== null
}

function eu(e, t) {
    return e = TT(e) ? e : Object.create(null), new Proxy(e, {
        get(n, r, s) {
            return r === "key" ? Reflect.get(n, r, s) : Reflect.get(n, r, s) || Reflect.get(t, r, s)
        }
    })
}

function AT(e, t) {
    return t.reduce((n, r) => n == null ? void 0 : n[r], e)
}

function CT(e, t, n) {
    return t.slice(0, -1).reduce((r, s) => /^(__proto__)$/.test(s) ? {} : r[s] = r[s] || {}, e)[t[t.length - 1]] = n, e
}

function ST(e, t) {
    return t.reduce((n, r) => {
        const s = r.split(".");
        return CT(n, s, AT(e, s))
    }, {})
}

function tu(e, {
    storage: t,
    serializer: n,
    key: r,
    debug: s
}) {
    try {
        const o = t == null ? void 0 : t.getItem(r);
        o && e.$patch(n == null ? void 0 : n.deserialize(o))
    } catch (o) {
        s && console.error(o)
    }
}

function nu(e, {
    storage: t,
    serializer: n,
    key: r,
    paths: s,
    debug: o
}) {
    try {
        const a = Array.isArray(s) ? ST(e, s) : e;
        t.setItem(r, n.serialize(a))
    } catch (a) {
        o && console.error(a)
    }
}

function OT(e = {}) {
    return t => {
        const {
            auto: n = !1
        } = e, {
            options: {
                persist: r = n
            },
            store: s,
            pinia: o
        } = t;
        if (!r) return;
        if (!(s.$id in o.state.value)) {
            const c = o._s.get(s.$id.replace("__hot:", ""));
            c && Promise.resolve().then(() => c.$persist());
            return
        }
        const a = (Array.isArray(r) ? r.map(c => eu(c, e)) : [eu(r, e)]).map(({
            storage: c = localStorage,
            beforeRestore: l = null,
            afterRestore: f = null,
            serializer: u = {
                serialize: JSON.stringify,
                deserialize: JSON.parse
            },
            key: h = s.$id,
            paths: p = null,
            debug: m = !1
        }) => {
            var T;
            return {
                storage: c,
                beforeRestore: l,
                afterRestore: f,
                serializer: u,
                key: ((T = e.key) != null ? T : w => w)(typeof h == "string" ? h : h(s.$id)),
                paths: p,
                debug: m
            }
        });
        s.$persist = () => {
            a.forEach(c => {
                nu(s.$state, c)
            })
        }, s.$hydrate = ({
            runHooks: c = !0
        } = {}) => {
            a.forEach(l => {
                const {
                    beforeRestore: f,
                    afterRestore: u
                } = l;
                c && (f == null || f(t)), tu(s, l), c && (u == null || u(t))
            })
        }, a.forEach(c => {
            const {
                beforeRestore: l,
                afterRestore: f
            } = c;
            l == null || l(t), tu(s, c), f == null || f(t), s.$subscribe((u, h) => {
                nu(h, c)
            }, {
                detached: !0
            })
        })
    }
}
const $T = He(e => {
        const {
            cookieOptions: t,
            debug: n,
            storage: r
        } = Cr().public.persistedState;
        e.$pinia.use(OT({
            storage: r === "cookies" ? Zl.cookiesWithOptions(t) : Zl[r],
            debug: n
        }))
    }),
    RT = He(() => {
        (function() {
            const e = document.createElement("script");
            e.async = !0, e.src = "https://www.googletagmanager.com/gtag/js?id=G-G5LKKQ0Z6Q", document.head.appendChild(e), e.onload = () => {
                window.dataLayer = window.dataLayer || [];

                function t() {
                    dataLayer.push(arguments)
                }
                t("js", new Date), t("config", "G-G5LKKQ0Z6Q")
            }
        })()
    });
var NT = {
        exports: {}
    },
    Ke = "top",
    it = "bottom",
    at = "right",
    Ye = "left",
    Ro = "auto",
    Sr = [Ke, it, at, Ye],
    kn = "start",
    pr = "end",
    bd = "clippingParents",
    Sa = "viewport",
    Jn = "popper",
    wd = "reference",
    ji = Sr.reduce(function(e, t) {
        return e.concat([t + "-" + kn, t + "-" + pr])
    }, []),
    Oa = [].concat(Sr, [Ro]).reduce(function(e, t) {
        return e.concat([t, t + "-" + kn, t + "-" + pr])
    }, []),
    Td = "beforeRead",
    Ad = "read",
    Cd = "afterRead",
    Sd = "beforeMain",
    Od = "main",
    $d = "afterMain",
    Rd = "beforeWrite",
    Nd = "write",
    Pd = "afterWrite",
    Ld = [Td, Ad, Cd, Sd, Od, $d, Rd, Nd, Pd];

function Lt(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function ct(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function Mn(e) {
    var t = ct(e).Element;
    return e instanceof t || e instanceof Element
}

function _t(e) {
    var t = ct(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}

function $a(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = ct(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}

function PT(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
        var r = t.styles[n] || {},
            s = t.attributes[n] || {},
            o = t.elements[n];
        !_t(o) || !Lt(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(a) {
            var c = s[a];
            c === !1 ? o.removeAttribute(a) : o.setAttribute(a, c === !0 ? "" : c)
        }))
    })
}

function LT(e) {
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
            Object.keys(t.elements).forEach(function(r) {
                var s = t.elements[r],
                    o = t.attributes[r] || {},
                    a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
                    c = a.reduce(function(l, f) {
                        return l[f] = "", l
                    }, {});
                !_t(s) || !Lt(s) || (Object.assign(s.style, c), Object.keys(o).forEach(function(l) {
                    s.removeAttribute(l)
                }))
            })
        }
}
const Ra = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: PT,
    effect: LT,
    requires: ["computeStyles"]
};

function Nt(e) {
    return e.split("-")[0]
}
var Ln = Math.max,
    ao = Math.min,
    mr = Math.round;

function Fi() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}

function xd() {
    return !/^((?!chrome|android).)*safari/i.test(Fi())
}

function gr(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var r = e.getBoundingClientRect(),
        s = 1,
        o = 1;
    t && _t(e) && (s = e.offsetWidth > 0 && mr(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && mr(r.height) / e.offsetHeight || 1);
    var a = Mn(e) ? ct(e) : window,
        c = a.visualViewport,
        l = !xd() && n,
        f = (r.left + (l && c ? c.offsetLeft : 0)) / s,
        u = (r.top + (l && c ? c.offsetTop : 0)) / o,
        h = r.width / s,
        p = r.height / o;
    return {
        width: h,
        height: p,
        top: u,
        right: f + h,
        bottom: u + p,
        left: f,
        x: f,
        y: u
    }
}

function Na(e) {
    var t = gr(e),
        n = e.offsetWidth,
        r = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: r
    }
}

function Id(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && $a(n)) {
        var r = t;
        do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host
        } while (r)
    }
    return !1
}

function Vt(e) {
    return ct(e).getComputedStyle(e)
}

function xT(e) {
    return ["table", "td", "th"].indexOf(Lt(e)) >= 0
}

function un(e) {
    return ((Mn(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function No(e) {
    return Lt(e) === "html" ? e : e.assignedSlot || e.parentNode || ($a(e) ? e.host : null) || un(e)
}

function ru(e) {
    return !_t(e) || Vt(e).position === "fixed" ? null : e.offsetParent
}

function IT(e) {
    var t = /firefox/i.test(Fi()),
        n = /Trident/i.test(Fi());
    if (n && _t(e)) {
        var r = Vt(e);
        if (r.position === "fixed") return null
    }
    var s = No(e);
    for ($a(s) && (s = s.host); _t(s) && ["html", "body"].indexOf(Lt(s)) < 0;) {
        var o = Vt(s);
        if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none") return s;
        s = s.parentNode
    }
    return null
}

function ds(e) {
    for (var t = ct(e), n = ru(e); n && xT(n) && Vt(n).position === "static";) n = ru(n);
    return n && (Lt(n) === "html" || Lt(n) === "body" && Vt(n).position === "static") ? t : n || IT(e) || t
}

function Pa(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function zr(e, t, n) {
    return Ln(e, ao(t, n))
}

function DT(e, t, n) {
    var r = zr(e, t, n);
    return r > n ? n : r
}

function Dd() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}

function kd(e) {
    return Object.assign({}, Dd(), e)
}

function Md(e, t) {
    return t.reduce(function(n, r) {
        return n[r] = e, n
    }, {})
}
var kT = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
        placement: n.placement
    })) : t, kd(typeof t != "number" ? t : Md(t, Sr))
};

function MT(e) {
    var t, n = e.state,
        r = e.name,
        s = e.options,
        o = n.elements.arrow,
        a = n.modifiersData.popperOffsets,
        c = Nt(n.placement),
        l = Pa(c),
        f = [Ye, at].indexOf(c) >= 0,
        u = f ? "height" : "width";
    if (!(!o || !a)) {
        var h = kT(s.padding, n),
            p = Na(o),
            m = l === "y" ? Ke : Ye,
            T = l === "y" ? it : at,
            w = n.rects.reference[u] + n.rects.reference[l] - a[l] - n.rects.popper[u],
            N = a[l] - n.rects.reference[l],
            $ = ds(o),
            A = $ ? l === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0,
            b = w / 2 - N / 2,
            g = h[m],
            S = A - p[u] - h[T],
            H = A / 2 - p[u] / 2 + b,
            U = zr(g, H, S),
            x = l;
        n.modifiersData[r] = (t = {}, t[x] = U, t.centerOffset = U - H, t)
    }
}

function HT(e) {
    var t = e.state,
        n = e.options,
        r = n.element,
        s = r === void 0 ? "[data-popper-arrow]" : r;
    s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || Id(t.elements.popper, s) && (t.elements.arrow = s))
}
const Hd = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: MT,
    effect: HT,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function _r(e) {
    return e.split("-")[1]
}
var jT = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};

function FT(e, t) {
    var n = e.x,
        r = e.y,
        s = t.devicePixelRatio || 1;
    return {
        x: mr(n * s) / s || 0,
        y: mr(r * s) / s || 0
    }
}

function su(e) {
    var t, n = e.popper,
        r = e.popperRect,
        s = e.placement,
        o = e.variation,
        a = e.offsets,
        c = e.position,
        l = e.gpuAcceleration,
        f = e.adaptive,
        u = e.roundOffsets,
        h = e.isFixed,
        p = a.x,
        m = p === void 0 ? 0 : p,
        T = a.y,
        w = T === void 0 ? 0 : T,
        N = typeof u == "function" ? u({
            x: m,
            y: w
        }) : {
            x: m,
            y: w
        };
    m = N.x, w = N.y;
    var $ = a.hasOwnProperty("x"),
        A = a.hasOwnProperty("y"),
        b = Ye,
        g = Ke,
        S = window;
    if (f) {
        var H = ds(n),
            U = "clientHeight",
            x = "clientWidth";
        if (H === ct(n) && (H = un(n), Vt(H).position !== "static" && c === "absolute" && (U = "scrollHeight", x = "scrollWidth")), H = H, s === Ke || (s === Ye || s === at) && o === pr) {
            g = it;
            var D = h && H === S && S.visualViewport ? S.visualViewport.height : H[U];
            w -= D - r.height, w *= l ? 1 : -1
        }
        if (s === Ye || (s === Ke || s === it) && o === pr) {
            b = at;
            var L = h && H === S && S.visualViewport ? S.visualViewport.width : H[x];
            m -= L - r.width, m *= l ? 1 : -1
        }
    }
    var F = Object.assign({
            position: c
        }, f && jT),
        K = u === !0 ? FT({
            x: m,
            y: w
        }, ct(n)) : {
            x: m,
            y: w
        };
    if (m = K.x, w = K.y, l) {
        var te;
        return Object.assign({}, F, (te = {}, te[g] = A ? "0" : "", te[b] = $ ? "0" : "", te.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + w + "px)" : "translate3d(" + m + "px, " + w + "px, 0)", te))
    }
    return Object.assign({}, F, (t = {}, t[g] = A ? w + "px" : "", t[b] = $ ? m + "px" : "", t.transform = "", t))
}

function BT(e) {
    var t = e.state,
        n = e.options,
        r = n.gpuAcceleration,
        s = r === void 0 ? !0 : r,
        o = n.adaptive,
        a = o === void 0 ? !0 : o,
        c = n.roundOffsets,
        l = c === void 0 ? !0 : c,
        f = {
            placement: Nt(t.placement),
            variation: _r(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: s,
            isFixed: t.options.strategy === "fixed"
        };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, su(Object.assign({}, f, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: a,
        roundOffsets: l
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, su(Object.assign({}, f, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
const La = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: BT,
    data: {}
};
var Fs = {
    passive: !0
};

function VT(e) {
    var t = e.state,
        n = e.instance,
        r = e.options,
        s = r.scroll,
        o = s === void 0 ? !0 : s,
        a = r.resize,
        c = a === void 0 ? !0 : a,
        l = ct(t.elements.popper),
        f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return o && f.forEach(function(u) {
            u.addEventListener("scroll", n.update, Fs)
        }), c && l.addEventListener("resize", n.update, Fs),
        function() {
            o && f.forEach(function(u) {
                u.removeEventListener("scroll", n.update, Fs)
            }), c && l.removeEventListener("resize", n.update, Fs)
        }
}
const xa = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: VT,
    data: {}
};
var UT = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};

function Ks(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
        return UT[t]
    })
}
var WT = {
    start: "end",
    end: "start"
};

function ou(e) {
    return e.replace(/start|end/g, function(t) {
        return WT[t]
    })
}

function Ia(e) {
    var t = ct(e),
        n = t.pageXOffset,
        r = t.pageYOffset;
    return {
        scrollLeft: n,
        scrollTop: r
    }
}

function Da(e) {
    return gr(un(e)).left + Ia(e).scrollLeft
}

function KT(e, t) {
    var n = ct(e),
        r = un(e),
        s = n.visualViewport,
        o = r.clientWidth,
        a = r.clientHeight,
        c = 0,
        l = 0;
    if (s) {
        o = s.width, a = s.height;
        var f = xd();
        (f || !f && t === "fixed") && (c = s.offsetLeft, l = s.offsetTop)
    }
    return {
        width: o,
        height: a,
        x: c + Da(e),
        y: l
    }
}

function YT(e) {
    var t, n = un(e),
        r = Ia(e),
        s = (t = e.ownerDocument) == null ? void 0 : t.body,
        o = Ln(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
        a = Ln(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
        c = -r.scrollLeft + Da(e),
        l = -r.scrollTop;
    return Vt(s || n).direction === "rtl" && (c += Ln(n.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: a,
        x: c,
        y: l
    }
}

function ka(e) {
    var t = Vt(e),
        n = t.overflow,
        r = t.overflowX,
        s = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + s + r)
}

function jd(e) {
    return ["html", "body", "#document"].indexOf(Lt(e)) >= 0 ? e.ownerDocument.body : _t(e) && ka(e) ? e : jd(No(e))
}

function Gr(e, t) {
    var n;
    t === void 0 && (t = []);
    var r = jd(e),
        s = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
        o = ct(r),
        a = s ? [o].concat(o.visualViewport || [], ka(r) ? r : []) : r,
        c = t.concat(a);
    return s ? c : c.concat(Gr(No(a)))
}

function Bi(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}

function qT(e, t) {
    var n = gr(e, !1, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
}

function iu(e, t, n) {
    return t === Sa ? Bi(KT(e, n)) : Mn(t) ? qT(t, n) : Bi(YT(un(e)))
}

function zT(e) {
    var t = Gr(No(e)),
        n = ["absolute", "fixed"].indexOf(Vt(e).position) >= 0,
        r = n && _t(e) ? ds(e) : e;
    return Mn(r) ? t.filter(function(s) {
        return Mn(s) && Id(s, r) && Lt(s) !== "body"
    }) : []
}

function GT(e, t, n, r) {
    var s = t === "clippingParents" ? zT(e) : [].concat(t),
        o = [].concat(s, [n]),
        a = o[0],
        c = o.reduce(function(l, f) {
            var u = iu(e, f, r);
            return l.top = Ln(u.top, l.top), l.right = ao(u.right, l.right), l.bottom = ao(u.bottom, l.bottom), l.left = Ln(u.left, l.left), l
        }, iu(e, a, r));
    return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c
}

function Fd(e) {
    var t = e.reference,
        n = e.element,
        r = e.placement,
        s = r ? Nt(r) : null,
        o = r ? _r(r) : null,
        a = t.x + t.width / 2 - n.width / 2,
        c = t.y + t.height / 2 - n.height / 2,
        l;
    switch (s) {
        case Ke:
            l = {
                x: a,
                y: t.y - n.height
            };
            break;
        case it:
            l = {
                x: a,
                y: t.y + t.height
            };
            break;
        case at:
            l = {
                x: t.x + t.width,
                y: c
            };
            break;
        case Ye:
            l = {
                x: t.x - n.width,
                y: c
            };
            break;
        default:
            l = {
                x: t.x,
                y: t.y
            }
    }
    var f = s ? Pa(s) : null;
    if (f != null) {
        var u = f === "y" ? "height" : "width";
        switch (o) {
            case kn:
                l[f] = l[f] - (t[u] / 2 - n[u] / 2);
                break;
            case pr:
                l[f] = l[f] + (t[u] / 2 - n[u] / 2);
                break
        }
    }
    return l
}

function yr(e, t) {
    t === void 0 && (t = {});
    var n = t,
        r = n.placement,
        s = r === void 0 ? e.placement : r,
        o = n.strategy,
        a = o === void 0 ? e.strategy : o,
        c = n.boundary,
        l = c === void 0 ? bd : c,
        f = n.rootBoundary,
        u = f === void 0 ? Sa : f,
        h = n.elementContext,
        p = h === void 0 ? Jn : h,
        m = n.altBoundary,
        T = m === void 0 ? !1 : m,
        w = n.padding,
        N = w === void 0 ? 0 : w,
        $ = kd(typeof N != "number" ? N : Md(N, Sr)),
        A = p === Jn ? wd : Jn,
        b = e.rects.popper,
        g = e.elements[T ? A : p],
        S = GT(Mn(g) ? g : g.contextElement || un(e.elements.popper), l, u, a),
        H = gr(e.elements.reference),
        U = Fd({
            reference: H,
            element: b,
            strategy: "absolute",
            placement: s
        }),
        x = Bi(Object.assign({}, b, U)),
        D = p === Jn ? x : H,
        L = {
            top: S.top - D.top + $.top,
            bottom: D.bottom - S.bottom + $.bottom,
            left: S.left - D.left + $.left,
            right: D.right - S.right + $.right
        },
        F = e.modifiersData.offset;
    if (p === Jn && F) {
        var K = F[s];
        Object.keys(L).forEach(function(te) {
            var J = [at, it].indexOf(te) >= 0 ? 1 : -1,
                W = [Ke, it].indexOf(te) >= 0 ? "y" : "x";
            L[te] += K[W] * J
        })
    }
    return L
}

function QT(e, t) {
    t === void 0 && (t = {});
    var n = t,
        r = n.placement,
        s = n.boundary,
        o = n.rootBoundary,
        a = n.padding,
        c = n.flipVariations,
        l = n.allowedAutoPlacements,
        f = l === void 0 ? Oa : l,
        u = _r(r),
        h = u ? c ? ji : ji.filter(function(T) {
            return _r(T) === u
        }) : Sr,
        p = h.filter(function(T) {
            return f.indexOf(T) >= 0
        });
    p.length === 0 && (p = h);
    var m = p.reduce(function(T, w) {
        return T[w] = yr(e, {
            placement: w,
            boundary: s,
            rootBoundary: o,
            padding: a
        })[Nt(w)], T
    }, {});
    return Object.keys(m).sort(function(T, w) {
        return m[T] - m[w]
    })
}

function XT(e) {
    if (Nt(e) === Ro) return [];
    var t = Ks(e);
    return [ou(e), t, ou(t)]
}

function JT(e) {
    var t = e.state,
        n = e.options,
        r = e.name;
    if (!t.modifiersData[r]._skip) {
        for (var s = n.mainAxis, o = s === void 0 ? !0 : s, a = n.altAxis, c = a === void 0 ? !0 : a, l = n.fallbackPlacements, f = n.padding, u = n.boundary, h = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, T = m === void 0 ? !0 : m, w = n.allowedAutoPlacements, N = t.options.placement, $ = Nt(N), A = $ === N, b = l || (A || !T ? [Ks(N)] : XT(N)), g = [N].concat(b).reduce(function(ve, we) {
                return ve.concat(Nt(we) === Ro ? QT(t, {
                    placement: we,
                    boundary: u,
                    rootBoundary: h,
                    padding: f,
                    flipVariations: T,
                    allowedAutoPlacements: w
                }) : we)
            }, []), S = t.rects.reference, H = t.rects.popper, U = new Map, x = !0, D = g[0], L = 0; L < g.length; L++) {
            var F = g[L],
                K = Nt(F),
                te = _r(F) === kn,
                J = [Ke, it].indexOf(K) >= 0,
                W = J ? "width" : "height",
                O = yr(t, {
                    placement: F,
                    boundary: u,
                    rootBoundary: h,
                    altBoundary: p,
                    padding: f
                }),
                B = J ? te ? at : Ye : te ? it : Ke;
            S[W] > H[W] && (B = Ks(B));
            var k = Ks(B),
                re = [];
            if (o && re.push(O[K] <= 0), c && re.push(O[B] <= 0, O[k] <= 0), re.every(function(ve) {
                    return ve
                })) {
                D = F, x = !1;
                break
            }
            U.set(F, re)
        }
        if (x)
            for (var ce = T ? 3 : 1, de = function(we) {
                    var Ee = g.find(function(M) {
                        var Z = U.get(M);
                        if (Z) return Z.slice(0, we).every(function(z) {
                            return z
                        })
                    });
                    if (Ee) return D = Ee, "break"
                }, fe = ce; fe > 0; fe--) {
                var ye = de(fe);
                if (ye === "break") break
            }
        t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0)
    }
}
const Bd = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: JT,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};

function au(e, t, n) {
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

function cu(e) {
    return [Ke, at, it, Ye].some(function(t) {
        return e[t] >= 0
    })
}

function ZT(e) {
    var t = e.state,
        n = e.name,
        r = t.rects.reference,
        s = t.rects.popper,
        o = t.modifiersData.preventOverflow,
        a = yr(t, {
            elementContext: "reference"
        }),
        c = yr(t, {
            altBoundary: !0
        }),
        l = au(a, r),
        f = au(c, s, o),
        u = cu(l),
        h = cu(f);
    t.modifiersData[n] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: f,
        isReferenceHidden: u,
        hasPopperEscaped: h
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": u,
        "data-popper-escaped": h
    })
}
const Vd = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: ZT
};

function eA(e, t, n) {
    var r = Nt(e),
        s = [Ye, Ke].indexOf(r) >= 0 ? -1 : 1,
        o = typeof n == "function" ? n(Object.assign({}, t, {
            placement: e
        })) : n,
        a = o[0],
        c = o[1];
    return a = a || 0, c = (c || 0) * s, [Ye, at].indexOf(r) >= 0 ? {
        x: c,
        y: a
    } : {
        x: a,
        y: c
    }
}

function tA(e) {
    var t = e.state,
        n = e.options,
        r = e.name,
        s = n.offset,
        o = s === void 0 ? [0, 0] : s,
        a = Oa.reduce(function(u, h) {
            return u[h] = eA(h, t.rects, o), u
        }, {}),
        c = a[t.placement],
        l = c.x,
        f = c.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = a
}
const Ud = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: tA
};

function nA(e) {
    var t = e.state,
        n = e.name;
    t.modifiersData[n] = Fd({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
const Ma = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: nA,
    data: {}
};

function rA(e) {
    return e === "x" ? "y" : "x"
}

function sA(e) {
    var t = e.state,
        n = e.options,
        r = e.name,
        s = n.mainAxis,
        o = s === void 0 ? !0 : s,
        a = n.altAxis,
        c = a === void 0 ? !1 : a,
        l = n.boundary,
        f = n.rootBoundary,
        u = n.altBoundary,
        h = n.padding,
        p = n.tether,
        m = p === void 0 ? !0 : p,
        T = n.tetherOffset,
        w = T === void 0 ? 0 : T,
        N = yr(t, {
            boundary: l,
            rootBoundary: f,
            padding: h,
            altBoundary: u
        }),
        $ = Nt(t.placement),
        A = _r(t.placement),
        b = !A,
        g = Pa($),
        S = rA(g),
        H = t.modifiersData.popperOffsets,
        U = t.rects.reference,
        x = t.rects.popper,
        D = typeof w == "function" ? w(Object.assign({}, t.rects, {
            placement: t.placement
        })) : w,
        L = typeof D == "number" ? {
            mainAxis: D,
            altAxis: D
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, D),
        F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        K = {
            x: 0,
            y: 0
        };
    if (H) {
        if (o) {
            var te, J = g === "y" ? Ke : Ye,
                W = g === "y" ? it : at,
                O = g === "y" ? "height" : "width",
                B = H[g],
                k = B + N[J],
                re = B - N[W],
                ce = m ? -x[O] / 2 : 0,
                de = A === kn ? U[O] : x[O],
                fe = A === kn ? -x[O] : -U[O],
                ye = t.elements.arrow,
                ve = m && ye ? Na(ye) : {
                    width: 0,
                    height: 0
                },
                we = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Dd(),
                Ee = we[J],
                M = we[W],
                Z = zr(0, U[O], ve[O]),
                z = b ? U[O] / 2 - ce - Z - Ee - L.mainAxis : de - Z - Ee - L.mainAxis,
                ne = b ? -U[O] / 2 + ce + Z + M + L.mainAxis : fe + Z + M + L.mainAxis,
                R = t.elements.arrow && ds(t.elements.arrow),
                _ = R ? g === "y" ? R.clientTop || 0 : R.clientLeft || 0 : 0,
                E = (te = F == null ? void 0 : F[g]) != null ? te : 0,
                C = B + z - E - _,
                I = B + ne - E,
                V = zr(m ? ao(k, C) : k, B, m ? Ln(re, I) : re);
            H[g] = V, K[g] = V - B
        }
        if (c) {
            var q, X = g === "x" ? Ke : Ye,
                G = g === "x" ? it : at,
                P = H[S],
                Y = S === "y" ? "height" : "width",
                ae = P + N[X],
                se = P - N[G],
                oe = [Ke, Ye].indexOf($) !== -1,
                le = (q = F == null ? void 0 : F[S]) != null ? q : 0,
                he = oe ? ae : P - U[Y] - x[Y] - le + L.altAxis,
                be = oe ? P + U[Y] + x[Y] - le - L.altAxis : se,
                ge = m && oe ? DT(he, P, be) : zr(m ? he : ae, P, m ? be : se);
            H[S] = ge, K[S] = ge - P
        }
        t.modifiersData[r] = K
    }
}
const Wd = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: sA,
    requiresIfExists: ["offset"]
};

function oA(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}

function iA(e) {
    return e === ct(e) || !_t(e) ? Ia(e) : oA(e)
}

function aA(e) {
    var t = e.getBoundingClientRect(),
        n = mr(t.width) / e.offsetWidth || 1,
        r = mr(t.height) / e.offsetHeight || 1;
    return n !== 1 || r !== 1
}

function cA(e, t, n) {
    n === void 0 && (n = !1);
    var r = _t(t),
        s = _t(t) && aA(t),
        o = un(t),
        a = gr(e, s, n),
        c = {
            scrollLeft: 0,
            scrollTop: 0
        },
        l = {
            x: 0,
            y: 0
        };
    return (r || !r && !n) && ((Lt(t) !== "body" || ka(o)) && (c = iA(t)), _t(t) ? (l = gr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Da(o))), {
        x: a.left + c.scrollLeft - l.x,
        y: a.top + c.scrollTop - l.y,
        width: a.width,
        height: a.height
    }
}

function lA(e) {
    var t = new Map,
        n = new Set,
        r = [];
    e.forEach(function(o) {
        t.set(o.name, o)
    });

    function s(o) {
        n.add(o.name);
        var a = [].concat(o.requires || [], o.requiresIfExists || []);
        a.forEach(function(c) {
            if (!n.has(c)) {
                var l = t.get(c);
                l && s(l)
            }
        }), r.push(o)
    }
    return e.forEach(function(o) {
        n.has(o.name) || s(o)
    }), r
}

function uA(e) {
    var t = lA(e);
    return Ld.reduce(function(n, r) {
        return n.concat(t.filter(function(s) {
            return s.phase === r
        }))
    }, [])
}

function fA(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(n) {
            Promise.resolve().then(function() {
                t = void 0, n(e())
            })
        })), t
    }
}

function dA(e) {
    var t = e.reduce(function(n, r) {
        var s = n[r.name];
        return n[r.name] = s ? Object.assign({}, s, r, {
            options: Object.assign({}, s.options, r.options),
            data: Object.assign({}, s.data, r.data)
        }) : r, n
    }, {});
    return Object.keys(t).map(function(n) {
        return t[n]
    })
}
var lu = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};

function uu() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(r) {
        return !(r && typeof r.getBoundingClientRect == "function")
    })
}

function Po(e) {
    e === void 0 && (e = {});
    var t = e,
        n = t.defaultModifiers,
        r = n === void 0 ? [] : n,
        s = t.defaultOptions,
        o = s === void 0 ? lu : s;
    return function(c, l, f) {
        f === void 0 && (f = o);
        var u = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, lu, o),
                modifiersData: {},
                elements: {
                    reference: c,
                    popper: l
                },
                attributes: {},
                styles: {}
            },
            h = [],
            p = !1,
            m = {
                state: u,
                setOptions: function($) {
                    var A = typeof $ == "function" ? $(u.options) : $;
                    w(), u.options = Object.assign({}, o, u.options, A), u.scrollParents = {
                        reference: Mn(c) ? Gr(c) : c.contextElement ? Gr(c.contextElement) : [],
                        popper: Gr(l)
                    };
                    var b = uA(dA([].concat(r, u.options.modifiers)));
                    return u.orderedModifiers = b.filter(function(g) {
                        return g.enabled
                    }), T(), m.update()
                },
                forceUpdate: function() {
                    if (!p) {
                        var $ = u.elements,
                            A = $.reference,
                            b = $.popper;
                        if (uu(A, b)) {
                            u.rects = {
                                reference: cA(A, ds(b), u.options.strategy === "fixed"),
                                popper: Na(b)
                            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(L) {
                                return u.modifiersData[L.name] = Object.assign({}, L.data)
                            });
                            for (var g = 0; g < u.orderedModifiers.length; g++) {
                                if (u.reset === !0) {
                                    u.reset = !1, g = -1;
                                    continue
                                }
                                var S = u.orderedModifiers[g],
                                    H = S.fn,
                                    U = S.options,
                                    x = U === void 0 ? {} : U,
                                    D = S.name;
                                typeof H == "function" && (u = H({
                                    state: u,
                                    options: x,
                                    name: D,
                                    instance: m
                                }) || u)
                            }
                        }
                    }
                },
                update: fA(function() {
                    return new Promise(function(N) {
                        m.forceUpdate(), N(u)
                    })
                }),
                destroy: function() {
                    w(), p = !0
                }
            };
        if (!uu(c, l)) return m;
        m.setOptions(f).then(function(N) {
            !p && f.onFirstUpdate && f.onFirstUpdate(N)
        });

        function T() {
            u.orderedModifiers.forEach(function(N) {
                var $ = N.name,
                    A = N.options,
                    b = A === void 0 ? {} : A,
                    g = N.effect;
                if (typeof g == "function") {
                    var S = g({
                            state: u,
                            name: $,
                            instance: m,
                            options: b
                        }),
                        H = function() {};
                    h.push(S || H)
                }
            })
        }

        function w() {
            h.forEach(function(N) {
                return N()
            }), h = []
        }
        return m
    }
}
var hA = Po(),
    pA = [xa, Ma, La, Ra],
    mA = Po({
        defaultModifiers: pA
    }),
    gA = [xa, Ma, La, Ra, Ud, Bd, Wd, Hd, Vd],
    _A = Po({
        defaultModifiers: gA
    });
const yA = Object.freeze(Object.defineProperty({
        __proto__: null,
        afterMain: $d,
        afterRead: Cd,
        afterWrite: Pd,
        applyStyles: Ra,
        arrow: Hd,
        auto: Ro,
        basePlacements: Sr,
        beforeMain: Sd,
        beforeRead: Td,
        beforeWrite: Rd,
        bottom: it,
        clippingParents: bd,
        computeStyles: La,
        createPopper: _A,
        createPopperBase: hA,
        createPopperLite: mA,
        detectOverflow: yr,
        end: pr,
        eventListeners: xa,
        flip: Bd,
        hide: Vd,
        left: Ye,
        main: Od,
        modifierPhases: Ld,
        offset: Ud,
        placements: Oa,
        popper: Jn,
        popperGenerator: Po,
        popperOffsets: Ma,
        preventOverflow: Wd,
        read: Ad,
        reference: wd,
        right: at,
        start: kn,
        top: Ke,
        variationPlacements: ji,
        viewport: Sa,
        write: Nd
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    vA = dT(yA);
/*!
 * Bootstrap v5.3.2 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
(function(e, t) {
    (function(n, r) {
        e.exports = r(vA)
    })($o, function(n) {
        function r(y) {
            const i = Object.create(null, {
                [Symbol.toStringTag]: {
                    value: "Module"
                }
            });
            if (y) {
                for (const d in y)
                    if (d !== "default") {
                        const v = Object.getOwnPropertyDescriptor(y, d);
                        Object.defineProperty(i, d, v.get ? v : {
                            enumerable: !0,
                            get: () => y[d]
                        })
                    }
            }
            return i.default = y, Object.freeze(i)
        }
        const s = r(n),
            o = new Map,
            a = {
                set(y, i, d) {
                    o.has(y) || o.set(y, new Map);
                    const v = o.get(y);
                    if (!v.has(i) && v.size !== 0) {
                        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(v.keys())[0]}.`);
                        return
                    }
                    v.set(i, d)
                },
                get(y, i) {
                    return o.has(y) && o.get(y).get(i) || null
                },
                remove(y, i) {
                    if (!o.has(y)) return;
                    const d = o.get(y);
                    d.delete(i), d.size === 0 && o.delete(y)
                }
            },
            c = 1e6,
            l = 1e3,
            f = "transitionend",
            u = y => (y && window.CSS && window.CSS.escape && (y = y.replace(/#([^\s"#']+)/g, (i, d) => `#${CSS.escape(d)}`)), y),
            h = y => y == null ? `${y}` : Object.prototype.toString.call(y).match(/\s([a-z]+)/i)[1].toLowerCase(),
            p = y => {
                do y += Math.floor(Math.random() * c); while (document.getElementById(y));
                return y
            },
            m = y => {
                if (!y) return 0;
                let {
                    transitionDuration: i,
                    transitionDelay: d
                } = window.getComputedStyle(y);
                const v = Number.parseFloat(i),
                    j = Number.parseFloat(d);
                return !v && !j ? 0 : (i = i.split(",")[0], d = d.split(",")[0], (Number.parseFloat(i) + Number.parseFloat(d)) * l)
            },
            T = y => {
                y.dispatchEvent(new Event(f))
            },
            w = y => !y || typeof y != "object" ? !1 : (typeof y.jquery < "u" && (y = y[0]), typeof y.nodeType < "u"),
            N = y => w(y) ? y.jquery ? y[0] : y : typeof y == "string" && y.length > 0 ? document.querySelector(u(y)) : null,
            $ = y => {
                if (!w(y) || y.getClientRects().length === 0) return !1;
                const i = getComputedStyle(y).getPropertyValue("visibility") === "visible",
                    d = y.closest("details:not([open])");
                if (!d) return i;
                if (d !== y) {
                    const v = y.closest("summary");
                    if (v && v.parentNode !== d || v === null) return !1
                }
                return i
            },
            A = y => !y || y.nodeType !== Node.ELEMENT_NODE || y.classList.contains("disabled") ? !0 : typeof y.disabled < "u" ? y.disabled : y.hasAttribute("disabled") && y.getAttribute("disabled") !== "false",
            b = y => {
                if (!document.documentElement.attachShadow) return null;
                if (typeof y.getRootNode == "function") {
                    const i = y.getRootNode();
                    return i instanceof ShadowRoot ? i : null
                }
                return y instanceof ShadowRoot ? y : y.parentNode ? b(y.parentNode) : null
            },
            g = () => {},
            S = y => {
                y.offsetHeight
            },
            H = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
            U = [],
            x = y => {
                document.readyState === "loading" ? (U.length || document.addEventListener("DOMContentLoaded", () => {
                    for (const i of U) i()
                }), U.push(y)) : y()
            },
            D = () => document.documentElement.dir === "rtl",
            L = y => {
                x(() => {
                    const i = H();
                    if (i) {
                        const d = y.NAME,
                            v = i.fn[d];
                        i.fn[d] = y.jQueryInterface, i.fn[d].Constructor = y, i.fn[d].noConflict = () => (i.fn[d] = v, y.jQueryInterface)
                    }
                })
            },
            F = (y, i = [], d = y) => typeof y == "function" ? y(...i) : d,
            K = (y, i, d = !0) => {
                if (!d) {
                    F(y);
                    return
                }
                const v = 5,
                    j = m(i) + v;
                let ee = !1;
                const Q = ({
                    target: pe
                }) => {
                    pe === i && (ee = !0, i.removeEventListener(f, Q), F(y))
                };
                i.addEventListener(f, Q), setTimeout(() => {
                    ee || T(i)
                }, j)
            },
            te = (y, i, d, v) => {
                const j = y.length;
                let ee = y.indexOf(i);
                return ee === -1 ? !d && v ? y[j - 1] : y[0] : (ee += d ? 1 : -1, v && (ee = (ee + j) % j), y[Math.max(0, Math.min(ee, j - 1))])
            },
            J = /[^.]*(?=\..*)\.|.*/,
            W = /\..*/,
            O = /::\d+$/,
            B = {};
        let k = 1;
        const re = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            },
            ce = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

        function de(y, i) {
            return i && `${i}::${k++}` || y.uidEvent || k++
        }

        function fe(y) {
            const i = de(y);
            return y.uidEvent = i, B[i] = B[i] || {}, B[i]
        }

        function ye(y, i) {
            return function d(v) {
                return _(v, {
                    delegateTarget: y
                }), d.oneOff && R.off(y, v.type, i), i.apply(y, [v])
            }
        }

        function ve(y, i, d) {
            return function v(j) {
                const ee = y.querySelectorAll(i);
                for (let {
                        target: Q
                    } = j; Q && Q !== this; Q = Q.parentNode)
                    for (const pe of ee)
                        if (pe === Q) return _(j, {
                            delegateTarget: Q
                        }), v.oneOff && R.off(y, j.type, i, d), d.apply(Q, [j])
            }
        }

        function we(y, i, d = null) {
            return Object.values(y).find(v => v.callable === i && v.delegationSelector === d)
        }

        function Ee(y, i, d) {
            const v = typeof i == "string",
                j = v ? d : i || d;
            let ee = ne(y);
            return ce.has(ee) || (ee = y), [v, j, ee]
        }

        function M(y, i, d, v, j) {
            if (typeof i != "string" || !y) return;
            let [ee, Q, pe] = Ee(i, d, v);
            i in re && (Q = (wg => function(zn) {
                if (!zn.relatedTarget || zn.relatedTarget !== zn.delegateTarget && !zn.delegateTarget.contains(zn.relatedTarget)) return wg.call(this, zn)
            })(Q));
            const qe = fe(y),
                ft = qe[pe] || (qe[pe] = {}),
                ke = we(ft, Q, ee ? d : null);
            if (ke) {
                ke.oneOff = ke.oneOff && j;
                return
            }
            const Ct = de(Q, i.replace(J, "")),
                vt = ee ? ve(y, d, Q) : ye(y, Q);
            vt.delegationSelector = ee ? d : null, vt.callable = Q, vt.oneOff = j, vt.uidEvent = Ct, ft[Ct] = vt, y.addEventListener(pe, vt, ee)
        }

        function Z(y, i, d, v, j) {
            const ee = we(i[d], v, j);
            ee && (y.removeEventListener(d, ee, !!j), delete i[d][ee.uidEvent])
        }

        function z(y, i, d, v) {
            const j = i[d] || {};
            for (const [ee, Q] of Object.entries(j)) ee.includes(v) && Z(y, i, d, Q.callable, Q.delegationSelector)
        }

        function ne(y) {
            return y = y.replace(W, ""), re[y] || y
        }
        const R = {
            on(y, i, d, v) {
                M(y, i, d, v, !1)
            },
            one(y, i, d, v) {
                M(y, i, d, v, !0)
            },
            off(y, i, d, v) {
                if (typeof i != "string" || !y) return;
                const [j, ee, Q] = Ee(i, d, v), pe = Q !== i, qe = fe(y), ft = qe[Q] || {}, ke = i.startsWith(".");
                if (typeof ee < "u") {
                    if (!Object.keys(ft).length) return;
                    Z(y, qe, Q, ee, j ? d : null);
                    return
                }
                if (ke)
                    for (const Ct of Object.keys(qe)) z(y, qe, Ct, i.slice(1));
                for (const [Ct, vt] of Object.entries(ft)) {
                    const Ss = Ct.replace(O, "");
                    (!pe || i.includes(Ss)) && Z(y, qe, Q, vt.callable, vt.delegationSelector)
                }
            },
            trigger(y, i, d) {
                if (typeof i != "string" || !y) return null;
                const v = H(),
                    j = ne(i),
                    ee = i !== j;
                let Q = null,
                    pe = !0,
                    qe = !0,
                    ft = !1;
                ee && v && (Q = v.Event(i, d), v(y).trigger(Q), pe = !Q.isPropagationStopped(), qe = !Q.isImmediatePropagationStopped(), ft = Q.isDefaultPrevented());
                const ke = _(new Event(i, {
                    bubbles: pe,
                    cancelable: !0
                }), d);
                return ft && ke.preventDefault(), qe && y.dispatchEvent(ke), ke.defaultPrevented && Q && Q.preventDefault(), ke
            }
        };

        function _(y, i = {}) {
            for (const [d, v] of Object.entries(i)) try {
                y[d] = v
            } catch {
                Object.defineProperty(y, d, {
                    configurable: !0,
                    get() {
                        return v
                    }
                })
            }
            return y
        }

        function E(y) {
            if (y === "true") return !0;
            if (y === "false") return !1;
            if (y === Number(y).toString()) return Number(y);
            if (y === "" || y === "null") return null;
            if (typeof y != "string") return y;
            try {
                return JSON.parse(decodeURIComponent(y))
            } catch {
                return y
            }
        }

        function C(y) {
            return y.replace(/[A-Z]/g, i => `-${i.toLowerCase()}`)
        }
        const I = {
            setDataAttribute(y, i, d) {
                y.setAttribute(`data-bs-${C(i)}`, d)
            },
            removeDataAttribute(y, i) {
                y.removeAttribute(`data-bs-${C(i)}`)
            },
            getDataAttributes(y) {
                if (!y) return {};
                const i = {},
                    d = Object.keys(y.dataset).filter(v => v.startsWith("bs") && !v.startsWith("bsConfig"));
                for (const v of d) {
                    let j = v.replace(/^bs/, "");
                    j = j.charAt(0).toLowerCase() + j.slice(1, j.length), i[j] = E(y.dataset[v])
                }
                return i
            },
            getDataAttribute(y, i) {
                return E(y.getAttribute(`data-bs-${C(i)}`))
            }
        };
        class V {
            static get Default() {
                return {}
            }
            static get DefaultType() {
                return {}
            }
            static get NAME() {
                throw new Error('You have to implement the static method "NAME", for each component!')
            }
            _getConfig(i) {
                return i = this._mergeConfigObj(i), i = this._configAfterMerge(i), this._typeCheckConfig(i), i
            }
            _configAfterMerge(i) {
                return i
            }
            _mergeConfigObj(i, d) {
                const v = w(d) ? I.getDataAttribute(d, "config") : {};
                return { ...this.constructor.Default,
                    ...typeof v == "object" ? v : {},
                    ...w(d) ? I.getDataAttributes(d) : {},
                    ...typeof i == "object" ? i : {}
                }
            }
            _typeCheckConfig(i, d = this.constructor.DefaultType) {
                for (const [v, j] of Object.entries(d)) {
                    const ee = i[v],
                        Q = w(ee) ? "element" : h(ee);
                    if (!new RegExp(j).test(Q)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${v}" provided type "${Q}" but expected type "${j}".`)
                }
            }
        }
        const q = "5.3.2";
        class X extends V {
            constructor(i, d) {
                super(), i = N(i), i && (this._element = i, this._config = this._getConfig(d), a.set(this._element, this.constructor.DATA_KEY, this))
            }
            dispose() {
                a.remove(this._element, this.constructor.DATA_KEY), R.off(this._element, this.constructor.EVENT_KEY);
                for (const i of Object.getOwnPropertyNames(this)) this[i] = null
            }
            _queueCallback(i, d, v = !0) {
                K(i, d, v)
            }
            _getConfig(i) {
                return i = this._mergeConfigObj(i, this._element), i = this._configAfterMerge(i), this._typeCheckConfig(i), i
            }
            static getInstance(i) {
                return a.get(N(i), this.DATA_KEY)
            }
            static getOrCreateInstance(i, d = {}) {
                return this.getInstance(i) || new this(i, typeof d == "object" ? d : null)
            }
            static get VERSION() {
                return q
            }
            static get DATA_KEY() {
                return `bs.${this.NAME}`
            }
            static get EVENT_KEY() {
                return `.${this.DATA_KEY}`
            }
            static eventName(i) {
                return `${i}${this.EVENT_KEY}`
            }
        }
        const G = y => {
                let i = y.getAttribute("data-bs-target");
                if (!i || i === "#") {
                    let d = y.getAttribute("href");
                    if (!d || !d.includes("#") && !d.startsWith(".")) return null;
                    d.includes("#") && !d.startsWith("#") && (d = `#${d.split("#")[1]}`), i = d && d !== "#" ? u(d.trim()) : null
                }
                return i
            },
            P = {
                find(y, i = document.documentElement) {
                    return [].concat(...Element.prototype.querySelectorAll.call(i, y))
                },
                findOne(y, i = document.documentElement) {
                    return Element.prototype.querySelector.call(i, y)
                },
                children(y, i) {
                    return [].concat(...y.children).filter(d => d.matches(i))
                },
                parents(y, i) {
                    const d = [];
                    let v = y.parentNode.closest(i);
                    for (; v;) d.push(v), v = v.parentNode.closest(i);
                    return d
                },
                prev(y, i) {
                    let d = y.previousElementSibling;
                    for (; d;) {
                        if (d.matches(i)) return [d];
                        d = d.previousElementSibling
                    }
                    return []
                },
                next(y, i) {
                    let d = y.nextElementSibling;
                    for (; d;) {
                        if (d.matches(i)) return [d];
                        d = d.nextElementSibling
                    }
                    return []
                },
                focusableChildren(y) {
                    const i = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(d => `${d}:not([tabindex^="-"])`).join(",");
                    return this.find(i, y).filter(d => !A(d) && $(d))
                },
                getSelectorFromElement(y) {
                    const i = G(y);
                    return i && P.findOne(i) ? i : null
                },
                getElementFromSelector(y) {
                    const i = G(y);
                    return i ? P.findOne(i) : null
                },
                getMultipleElementsFromSelector(y) {
                    const i = G(y);
                    return i ? P.find(i) : []
                }
            },
            Y = (y, i = "hide") => {
                const d = `click.dismiss${y.EVENT_KEY}`,
                    v = y.NAME;
                R.on(document, d, `[data-bs-dismiss="${v}"]`, function(j) {
                    if (["A", "AREA"].includes(this.tagName) && j.preventDefault(), A(this)) return;
                    const ee = P.getElementFromSelector(this) || this.closest(`.${v}`);
                    y.getOrCreateInstance(ee)[i]()
                })
            },
            ae = "alert",
            oe = ".bs.alert",
            le = `close${oe}`,
            he = `closed${oe}`,
            be = "fade",
            ge = "show";
        class Oe extends X {
            static get NAME() {
                return ae
            }
            close() {
                if (R.trigger(this._element, le).defaultPrevented) return;
                this._element.classList.remove(ge);
                const d = this._element.classList.contains(be);
                this._queueCallback(() => this._destroyElement(), this._element, d)
            }
            _destroyElement() {
                this._element.remove(), R.trigger(this._element, he), this.dispose()
            }
            static jQueryInterface(i) {
                return this.each(function() {
                    const d = Oe.getOrCreateInstance(this);
                    if (typeof i == "string") {
                        if (d[i] === void 0 || i.startsWith("_") || i === "constructor") throw new TypeError(`No method named "${i}"`);
                        d[i](this)
                    }
                })
            }
        }
        Y(Oe, "close"), L(Oe);
        const Je = "button",
            hs = ".bs.button",
            dn = ".data-api",
            ps = "active",
            Fe = '[data-bs-toggle="button"]',
            lt = `click${hs}${dn}`;
        class Kt extends X {
            static get NAME() {
                return Je
            }
            toggle() {
                this._element.setAttribute("aria-pressed", this._element.classList.toggle(ps))
            }
            static jQueryInterface(i) {
                return this.each(function() {
                    const d = Kt.getOrCreateInstance(this);
                    i === "toggle" && d[i]()
                })
            }
        }
        R.on(document, lt, Fe, y => {
            y.preventDefault();
            const i = y.target.closest(Fe);
            Kt.getOrCreateInstance(i).toggle()
        }), L(Kt);
        const Yd = "swipe",
            Fn = ".bs.swipe",
            qd = `touchstart${Fn}`,
            zd = `touchmove${Fn}`,
            Gd = `touchend${Fn}`,
            Qd = `pointerdown${Fn}`,
            Xd = `pointerup${Fn}`,
            Jd = "touch",
            Zd = "pen",
            eh = "pointer-event",
            th = 40,
            nh = {
                endCallback: null,
                leftCallback: null,
                rightCallback: null
            },
            rh = {
                endCallback: "(function|null)",
                leftCallback: "(function|null)",
                rightCallback: "(function|null)"
            };
        class ms extends V {
            constructor(i, d) {
                super(), this._element = i, !(!i || !ms.isSupported()) && (this._config = this._getConfig(d), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents())
            }
            static get Default() {
                return nh
            }
            static get DefaultType() {
                return rh
            }
            static get NAME() {
                return Yd
            }
            dispose() {
                R.off(this._element, Fn)
            }
            _start(i) {
                if (!this._supportPointerEvents) {
                    this._deltaX = i.touches[0].clientX;
                    return
                }
                this._eventIsPointerPenTouch(i) && (this._deltaX = i.clientX)
            }
            _end(i) {
                this._eventIsPointerPenTouch(i) && (this._deltaX = i.clientX - this._deltaX), this._handleSwipe(), F(this._config.endCallback)
            }
            _move(i) {
                this._deltaX = i.touches && i.touches.length > 1 ? 0 : i.touches[0].clientX - this._deltaX
            }
            _handleSwipe() {
                const i = Math.abs(this._deltaX);
                if (i <= th) return;
                const d = i / this._deltaX;
                this._deltaX = 0, d && F(d > 0 ? this._config.rightCallback : this._config.leftCallback)
            }
            _initEvents() {
                this._supportPointerEvents ? (R.on(this._element, Qd, i => this._start(i)), R.on(this._element, Xd, i => this._end(i)), this._element.classList.add(eh)) : (R.on(this._element, qd, i => this._start(i)), R.on(this._element, zd, i => this._move(i)), R.on(this._element, Gd, i => this._end(i)))
            }
            _eventIsPointerPenTouch(i) {
                return this._supportPointerEvents && (i.pointerType === Zd || i.pointerType === Jd)
            }
            static isSupported() {
                return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
            }
        }
        const sh = "carousel",
            Yt = ".bs.carousel",
            Ha = ".data-api",
            oh = "ArrowLeft",
            ih = "ArrowRight",
            ah = 500,
            Or = "next",
            Bn = "prev",
            Vn = "left",
            gs = "right",
            ch = `slide${Yt}`,
            Lo = `slid${Yt}`,
            lh = `keydown${Yt}`,
            uh = `mouseenter${Yt}`,
            fh = `mouseleave${Yt}`,
            dh = `dragstart${Yt}`,
            hh = `load${Yt}${Ha}`,
            ph = `click${Yt}${Ha}`,
            ja = "carousel",
            _s = "active",
            mh = "slide",
            gh = "carousel-item-end",
            _h = "carousel-item-start",
            yh = "carousel-item-next",
            vh = "carousel-item-prev",
            Fa = ".active",
            Ba = ".carousel-item",
            Eh = Fa + Ba,
            bh = ".carousel-item img",
            wh = ".carousel-indicators",
            Th = "[data-bs-slide], [data-bs-slide-to]",
            Ah = '[data-bs-ride="carousel"]',
            Ch = {
                [oh]: gs,
                [ih]: Vn
            },
            Sh = {
                interval: 5e3,
                keyboard: !0,
                pause: "hover",
                ride: !1,
                touch: !0,
                wrap: !0
            },
            Oh = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                pause: "(string|boolean)",
                ride: "(boolean|string)",
                touch: "boolean",
                wrap: "boolean"
            };
        class Un extends X {
            constructor(i, d) {
                super(i, d), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = P.findOne(wh, this._element), this._addEventListeners(), this._config.ride === ja && this.cycle()
            }
            static get Default() {
                return Sh
            }
            static get DefaultType() {
                return Oh
            }
            static get NAME() {
                return sh
            }
            next() {
                this._slide(Or)
            }
            nextWhenVisible() {
                !document.hidden && $(this._element) && this.next()
            }
            prev() {
                this._slide(Bn)
            }
            pause() {
                this._isSliding && T(this._element), this._clearInterval()
            }
            cycle() {
                this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
            }
            _maybeEnableCycle() {
                if (this._config.ride) {
                    if (this._isSliding) {
                        R.one(this._element, Lo, () => this.cycle());
                        return
                    }
                    this.cycle()
                }
            }
            to(i) {
                const d = this._getItems();
                if (i > d.length - 1 || i < 0) return;
                if (this._isSliding) {
                    R.one(this._element, Lo, () => this.to(i));
                    return
                }
                const v = this._getItemIndex(this._getActive());
                if (v === i) return;
                const j = i > v ? Or : Bn;
                this._slide(j, d[i])
            }
            dispose() {
                this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
            }
            _configAfterMerge(i) {
                return i.defaultInterval = i.interval, i
            }
            _addEventListeners() {
                this._config.keyboard && R.on(this._element, lh, i => this._keydown(i)), this._config.pause === "hover" && (R.on(this._element, uh, () => this.pause()), R.on(this._element, fh, () => this._maybeEnableCycle())), this._config.touch && ms.isSupported() && this._addTouchEventListeners()
            }
            _addTouchEventListeners() {
                for (const v of P.find(bh, this._element)) R.on(v, dh, j => j.preventDefault());
                const d = {
                    leftCallback: () => this._slide(this._directionToOrder(Vn)),
                    rightCallback: () => this._slide(this._directionToOrder(gs)),
                    endCallback: () => {
                        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), ah + this._config.interval))
                    }
                };
                this._swipeHelper = new ms(this._element, d)
            }
            _keydown(i) {
                if (/input|textarea/i.test(i.target.tagName)) return;
                const d = Ch[i.key];
                d && (i.preventDefault(), this._slide(this._directionToOrder(d)))
            }
            _getItemIndex(i) {
                return this._getItems().indexOf(i)
            }
            _setActiveIndicatorElement(i) {
                if (!this._indicatorsElement) return;
                const d = P.findOne(Fa, this._indicatorsElement);
                d.classList.remove(_s), d.removeAttribute("aria-current");
                const v = P.findOne(`[data-bs-slide-to="${i}"]`, this._indicatorsElement);
                v && (v.classList.add(_s), v.setAttribute("aria-current", "true"))
            }
            _updateInterval() {
                const i = this._activeElement || this._getActive();
                if (!i) return;
                const d = Number.parseInt(i.getAttribute("data-bs-interval"), 10);
                this._config.interval = d || this._config.defaultInterval
            }
            _slide(i, d = null) {
                if (this._isSliding) return;
                const v = this._getActive(),
                    j = i === Or,
                    ee = d || te(this._getItems(), v, j, this._config.wrap);
                if (ee === v) return;
                const Q = this._getItemIndex(ee),
                    pe = Ss => R.trigger(this._element, Ss, {
                        relatedTarget: ee,
                        direction: this._orderToDirection(i),
                        from: this._getItemIndex(v),
                        to: Q
                    });
                if (pe(ch).defaultPrevented || !v || !ee) return;
                const ft = !!this._interval;
                this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(Q), this._activeElement = ee;
                const ke = j ? _h : gh,
                    Ct = j ? yh : vh;
                ee.classList.add(Ct), S(ee), v.classList.add(ke), ee.classList.add(ke);
                const vt = () => {
                    ee.classList.remove(ke, Ct), ee.classList.add(_s), v.classList.remove(_s, Ct, ke), this._isSliding = !1, pe(Lo)
                };
                this._queueCallback(vt, v, this._isAnimated()), ft && this.cycle()
            }
            _isAnimated() {
                return this._element.classList.contains(mh)
            }
            _getActive() {
                return P.findOne(Eh, this._element)
            }
            _getItems() {
                return P.find(Ba, this._element)
            }
            _clearInterval() {
                this._interval && (clearInterval(this._interval), this._interval = null)
            }
            _directionToOrder(i) {
                return D() ? i === Vn ? Bn : Or : i === Vn ? Or : Bn
            }
            _orderToDirection(i) {
                return D() ? i === Bn ? Vn : gs : i === Bn ? gs : Vn
            }
            static jQueryInterface(i) {
                return this.each(function() {
                    const d = Un.getOrCreateInstance(this, i);
                    if (typeof i == "number") {
                        d.to(i);
                        return
                    }
                    if (typeof i == "string") {
                        if (d[i] === void 0 || i.startsWith("_") || i === "constructor") throw new TypeError(`No method named "${i}"`);
                        d[i]()
                    }
                })
            }
        }
        R.on(document, ph, Th, function(y) {
            const i = P.getElementFromSelector(this);
            if (!i || !i.classList.contains(ja)) return;
            y.preventDefault();
            const d = Un.getOrCreateInstance(i),
                v = this.getAttribute("data-bs-slide-to");
            if (v) {
                d.to(v), d._maybeEnableCycle();
                return
            }
            if (I.getDataAttribute(this, "slide") === "next") {
                d.next(), d._maybeEnableCycle();
                return
            }
            d.prev(), d._maybeEnableCycle()
        }), R.on(window, hh, () => {
            const y = P.find(Ah);
            for (const i of y) Un.getOrCreateInstance(i)
        }), L(Un);
        const $h = "collapse",
            $r = ".bs.collapse",
            Rh = ".data-api",
            Nh = `show${$r}`,
            Ph = `shown${$r}`,
            Lh = `hide${$r}`,
            xh = `hidden${$r}`,
            Ih = `click${$r}${Rh}`,
            xo = "show",
            Wn = "collapse",
            ys = "collapsing",
            Dh = "collapsed",
            kh = `:scope .${Wn} .${Wn}`,
            Mh = "collapse-horizontal",
            Hh = "width",
            jh = "height",
            Fh = ".collapse.show, .collapse.collapsing",
            Io = '[data-bs-toggle="collapse"]',
            Bh = {
                parent: null,
                toggle: !0
            },
            Vh = {
                parent: "(null|element)",
                toggle: "boolean"
            };
        class Kn extends X {
            constructor(i, d) {
                super(i, d), this._isTransitioning = !1, this._triggerArray = [];
                const v = P.find(Io);
                for (const j of v) {
                    const ee = P.getSelectorFromElement(j),
                        Q = P.find(ee).filter(pe => pe === this._element);
                    ee !== null && Q.length && this._triggerArray.push(j)
                }
                this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
            }
            static get Default() {
                return Bh
            }
            static get DefaultType() {
                return Vh
            }
            static get NAME() {
                return $h
            }
            toggle() {
                this._isShown() ? this.hide() : this.show()
            }
            show() {
                if (this._isTransitioning || this._isShown()) return;
                let i = [];
                if (this._config.parent && (i = this._getFirstLevelChildren(Fh).filter(pe => pe !== this._element).map(pe => Kn.getOrCreateInstance(pe, {
                        toggle: !1
                    }))), i.length && i[0]._isTransitioning || R.trigger(this._element, Nh).defaultPrevented) return;
                for (const pe of i) pe.hide();
                const v = this._getDimension();
                this._element.classList.remove(Wn), this._element.classList.add(ys), this._element.style[v] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                const j = () => {
                        this._isTransitioning = !1, this._element.classList.remove(ys), this._element.classList.add(Wn, xo), this._element.style[v] = "", R.trigger(this._element, Ph)
                    },
                    Q = `scroll${v[0].toUpperCase()+v.slice(1)}`;
                this._queueCallback(j, this._element, !0), this._element.style[v] = `${this._element[Q]}px`
            }
            hide() {
                if (this._isTransitioning || !this._isShown() || R.trigger(this._element, Lh).defaultPrevented) return;
                const d = this._getDimension();
                this._element.style[d] = `${this._element.getBoundingClientRect()[d]}px`, S(this._element), this._element.classList.add(ys), this._element.classList.remove(Wn, xo);
                for (const j of this._triggerArray) {
                    const ee = P.getElementFromSelector(j);
                    ee && !this._isShown(ee) && this._addAriaAndCollapsedClass([j], !1)
                }
                this._isTransitioning = !0;
                const v = () => {
                    this._isTransitioning = !1, this._element.classList.remove(ys), this._element.classList.add(Wn), R.trigger(this._element, xh)
                };
                this._element.style[d] = "", this._queueCallback(v, this._element, !0)
            }
            _isShown(i = this._element) {
                return i.classList.contains(xo)
            }
            _configAfterMerge(i) {
                return i.toggle = !!i.toggle, i.parent = N(i.parent), i
            }
            _getDimension() {
                return this._element.classList.contains(Mh) ? Hh : jh
            }
            _initializeChildren() {
                if (!this._config.parent) return;
                const i = this._getFirstLevelChildren(Io);
                for (const d of i) {
                    const v = P.getElementFromSelector(d);
                    v && this._addAriaAndCollapsedClass([d], this._isShown(v))
                }
            }
            _getFirstLevelChildren(i) {
                const d = P.find(kh, this._config.parent);
                return P.find(i, this._config.parent).filter(v => !d.includes(v))
            }
            _addAriaAndCollapsedClass(i, d) {
                if (i.length)
                    for (const v of i) v.classList.toggle(Dh, !d), v.setAttribute("aria-expanded", d)
            }
            static jQueryInterface(i) {
                const d = {};
                return typeof i == "string" && /show|hide/.test(i) && (d.toggle = !1), this.each(function() {
                    const v = Kn.getOrCreateInstance(this, d);
                    if (typeof i == "string") {
                        if (typeof v[i] > "u") throw new TypeError(`No method named "${i}"`);
                        v[i]()
                    }
                })
            }
        }
        R.on(document, Ih, Io, function(y) {
            (y.target.tagName === "A" || y.delegateTarget && y.delegateTarget.tagName === "A") && y.preventDefault();
            for (const i of P.getMultipleElementsFromSelector(this)) Kn.getOrCreateInstance(i, {
                toggle: !1
            }).toggle()
        }), L(Kn);
        const Va = "dropdown",
            hn = ".bs.dropdown",
            Do = ".data-api",
            Uh = "Escape",
            Ua = "Tab",
            Wh = "ArrowUp",
            Wa = "ArrowDown",
            Kh = 2,
            Yh = `hide${hn}`,
            qh = `hidden${hn}`,
            zh = `show${hn}`,
            Gh = `shown${hn}`,
            Ka = `click${hn}${Do}`,
            Ya = `keydown${hn}${Do}`,
            Qh = `keyup${hn}${Do}`,
            Yn = "show",
            Xh = "dropup",
            Jh = "dropend",
            Zh = "dropstart",
            ep = "dropup-center",
            tp = "dropdown-center",
            pn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            np = `${pn}.${Yn}`,
            vs = ".dropdown-menu",
            rp = ".navbar",
            sp = ".navbar-nav",
            op = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            ip = D() ? "top-end" : "top-start",
            ap = D() ? "top-start" : "top-end",
            cp = D() ? "bottom-end" : "bottom-start",
            lp = D() ? "bottom-start" : "bottom-end",
            up = D() ? "left-start" : "right-start",
            fp = D() ? "right-start" : "left-start",
            dp = "top",
            hp = "bottom",
            pp = {
                autoClose: !0,
                boundary: "clippingParents",
                display: "dynamic",
                offset: [0, 2],
                popperConfig: null,
                reference: "toggle"
            },
            mp = {
                autoClose: "(boolean|string)",
                boundary: "(string|element)",
                display: "string",
                offset: "(array|string|function)",
                popperConfig: "(null|object|function)",
                reference: "(string|element|object)"
            };
        class yt extends X {
            constructor(i, d) {
                super(i, d), this._popper = null, this._parent = this._element.parentNode, this._menu = P.next(this._element, vs)[0] || P.prev(this._element, vs)[0] || P.findOne(vs, this._parent), this._inNavbar = this._detectNavbar()
            }
            static get Default() {
                return pp
            }
            static get DefaultType() {
                return mp
            }
            static get NAME() {
                return Va
            }
            toggle() {
                return this._isShown() ? this.hide() : this.show()
            }
            show() {
                if (A(this._element) || this._isShown()) return;
                const i = {
                    relatedTarget: this._element
                };
                if (!R.trigger(this._element, zh, i).defaultPrevented) {
                    if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(sp))
                        for (const v of [].concat(...document.body.children)) R.on(v, "mouseover", g);
                    this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Yn), this._element.classList.add(Yn), R.trigger(this._element, Gh, i)
                }
            }
            hide() {
                if (A(this._element) || !this._isShown()) return;
                const i = {
                    relatedTarget: this._element
                };
                this._completeHide(i)
            }
            dispose() {
                this._popper && this._popper.destroy(), super.dispose()
            }
            update() {
                this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
            }
            _completeHide(i) {
                if (!R.trigger(this._element, Yh, i).defaultPrevented) {
                    if ("ontouchstart" in document.documentElement)
                        for (const v of [].concat(...document.body.children)) R.off(v, "mouseover", g);
                    this._popper && this._popper.destroy(), this._menu.classList.remove(Yn), this._element.classList.remove(Yn), this._element.setAttribute("aria-expanded", "false"), I.removeDataAttribute(this._menu, "popper"), R.trigger(this._element, qh, i)
                }
            }
            _getConfig(i) {
                if (i = super._getConfig(i), typeof i.reference == "object" && !w(i.reference) && typeof i.reference.getBoundingClientRect != "function") throw new TypeError(`${Va.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                return i
            }
            _createPopper() {
                if (typeof s > "u") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                let i = this._element;
                this._config.reference === "parent" ? i = this._parent : w(this._config.reference) ? i = N(this._config.reference) : typeof this._config.reference == "object" && (i = this._config.reference);
                const d = this._getPopperConfig();
                this._popper = s.createPopper(i, this._menu, d)
            }
            _isShown() {
                return this._menu.classList.contains(Yn)
            }
            _getPlacement() {
                const i = this._parent;
                if (i.classList.contains(Jh)) return up;
                if (i.classList.contains(Zh)) return fp;
                if (i.classList.contains(ep)) return dp;
                if (i.classList.contains(tp)) return hp;
                const d = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
                return i.classList.contains(Xh) ? d ? ap : ip : d ? lp : cp
            }
            _detectNavbar() {
                return this._element.closest(rp) !== null
            }
            _getOffset() {
                const {
                    offset: i
                } = this._config;
                return typeof i == "string" ? i.split(",").map(d => Number.parseInt(d, 10)) : typeof i == "function" ? d => i(d, this._element) : i
            }
            _getPopperConfig() {
                const i = {
                    placement: this._getPlacement(),
                    modifiers: [{
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }]
                };
                return (this._inNavbar || this._config.display === "static") && (I.setDataAttribute(this._menu, "popper", "static"), i.modifiers = [{
                    name: "applyStyles",
                    enabled: !1
                }]), { ...i,
                    ...F(this._config.popperConfig, [i])
                }
            }
            _selectMenuItem({
                key: i,
                target: d
            }) {
                const v = P.find(op, this._menu).filter(j => $(j));
                v.length && te(v, d, i === Wa, !v.includes(d)).focus()
            }
            static jQueryInterface(i) {
                return this.each(function() {
                    const d = yt.getOrCreateInstance(this, i);
                    if (typeof i == "string") {
                        if (typeof d[i] > "u") throw new TypeError(`No method named "${i}"`);
                        d[i]()
                    }
                })
            }
            static clearMenus(i) {
                if (i.button === Kh || i.type === "keyup" && i.key !== Ua) return;
                const d = P.find(np);
                for (const v of d) {
                    const j = yt.getInstance(v);
                    if (!j || j._config.autoClose === !1) continue;
                    const ee = i.composedPath(),
                        Q = ee.includes(j._menu);
                    if (ee.includes(j._element) || j._config.autoClose === "inside" && !Q || j._config.autoClose === "outside" && Q || j._menu.contains(i.target) && (i.type === "keyup" && i.key === Ua || /input|select|option|textarea|form/i.test(i.target.tagName))) continue;
                    const pe = {
                        relatedTarget: j._element
                    };
                    i.type === "click" && (pe.clickEvent = i), j._completeHide(pe)
                }
            }
            static dataApiKeydownHandler(i) {
                const d = /input|textarea/i.test(i.target.tagName),
                    v = i.key === Uh,
                    j = [Wh, Wa].includes(i.key);
                if (!j && !v || d && !v) return;
                i.preventDefault();
                const ee = this.matches(pn) ? this : P.prev(this, pn)[0] || P.next(this, pn)[0] || P.findOne(pn, i.delegateTarget.parentNode),
                    Q = yt.getOrCreateInstance(ee);
                if (j) {
                    i.stopPropagation(), Q.show(), Q._selectMenuItem(i);
                    return
                }
                Q._isShown() && (i.stopPropagation(), Q.hide(), ee.focus())
            }
        }
        R.on(document, Ya, pn, yt.dataApiKeydownHandler), R.on(document, Ya, vs, yt.dataApiKeydownHandler), R.on(document, Ka, yt.clearMenus), R.on(document, Qh, yt.clearMenus), R.on(document, Ka, pn, function(y) {
            y.preventDefault(), yt.getOrCreateInstance(this).toggle()
        }), L(yt);
        const qa = "backdrop",
            gp = "fade",
            za = "show",
            Ga = `mousedown.bs.${qa}`,
            _p = {
                className: "modal-backdrop",
                clickCallback: null,
                isAnimated: !1,
                isVisible: !0,
                rootElement: "body"
            },
            yp = {
                className: "string",
                clickCallback: "(function|null)",
                isAnimated: "boolean",
                isVisible: "boolean",
                rootElement: "(element|string)"
            };
        class Qa extends V {
            constructor(i) {
                super(), this._config = this._getConfig(i), this._isAppended = !1, this._element = null
            }
            static get Default() {
                return _p
            }
            static get DefaultType() {
                return yp
            }
            static get NAME() {
                return qa
            }
            show(i) {
                if (!this._config.isVisible) {
                    F(i);
                    return
                }
                this._append();
                const d = this._getElement();
                this._config.isAnimated && S(d), d.classList.add(za), this._emulateAnimation(() => {
                    F(i)
                })
            }
            hide(i) {
                if (!this._config.isVisible) {
                    F(i);
                    return
                }
                this._getElement().classList.remove(za), this._emulateAnimation(() => {
                    this.dispose(), F(i)
                })
            }
            dispose() {
                this._isAppended && (R.off(this._element, Ga), this._element.remove(), this._isAppended = !1)
            }
            _getElement() {
                if (!this._element) {
                    const i = document.createElement("div");
                    i.className = this._config.className, this._config.isAnimated && i.classList.add(gp), this._element = i
                }
                return this._element
            }
            _configAfterMerge(i) {
                return i.rootElement = N(i.rootElement), i
            }
            _append() {
                if (this._isAppended) return;
                const i = this._getElement();
                this._config.rootElement.append(i), R.on(i, Ga, () => {
                    F(this._config.clickCallback)
                }), this._isAppended = !0
            }
            _emulateAnimation(i) {
                K(i, this._getElement(), this._config.isAnimated)
            }
        }
        const vp = "focustrap",
            Es = ".bs.focustrap",
            Ep = `focusin${Es}`,
            bp = `keydown.tab${Es}`,
            wp = "Tab",
            Tp = "forward",
            Xa = "backward",
            Ap = {
                autofocus: !0,
                trapElement: null
            },
            Cp = {
                autofocus: "boolean",
                trapElement: "element"
            };
        class Ja extends V {
            constructor(i) {
                super(), this._config = this._getConfig(i), this._isActive = !1, this._lastTabNavDirection = null
            }
            static get Default() {
                return Ap
            }
            static get DefaultType() {
                return Cp
            }
            static get NAME() {
                return vp
            }
            activate() {
                this._isActive || (this._config.autofocus && this._config.trapElement.focus(), R.off(document, Es), R.on(document, Ep, i => this._handleFocusin(i)), R.on(document, bp, i => this._handleKeydown(i)), this._isActive = !0)
            }
            deactivate() {
                this._isActive && (this._isActive = !1, R.off(document, Es))
            }
            _handleFocusin(i) {
                const {
                    trapElement: d
                } = this._config;
                if (i.target === document || i.target === d || d.contains(i.target)) return;
                const v = P.focusableChildren(d);
                v.length === 0 ? d.focus() : this._lastTabNavDirection === Xa ? v[v.length - 1].focus() : v[0].focus()
            }
            _handleKeydown(i) {
                i.key === wp && (this._lastTabNavDirection = i.shiftKey ? Xa : Tp)
            }
        }
        const Za = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            ec = ".sticky-top",
            bs = "padding-right",
            tc = "margin-right";
        class ko {
            constructor() {
                this._element = document.body
            }
            getWidth() {
                const i = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - i)
            }
            hide() {
                const i = this.getWidth();
                this._disableOverFlow(), this._setElementAttributes(this._element, bs, d => d + i), this._setElementAttributes(Za, bs, d => d + i), this._setElementAttributes(ec, tc, d => d - i)
            }
            reset() {
                this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, bs), this._resetElementAttributes(Za, bs), this._resetElementAttributes(ec, tc)
            }
            isOverflowing() {
                return this.getWidth() > 0
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
            }
            _setElementAttributes(i, d, v) {
                const j = this.getWidth(),
                    ee = Q => {
                        if (Q !== this._element && window.innerWidth > Q.clientWidth + j) return;
                        this._saveInitialAttribute(Q, d);
                        const pe = window.getComputedStyle(Q).getPropertyValue(d);
                        Q.style.setProperty(d, `${v(Number.parseFloat(pe))}px`)
                    };
                this._applyManipulationCallback(i, ee)
            }
            _saveInitialAttribute(i, d) {
                const v = i.style.getPropertyValue(d);
                v && I.setDataAttribute(i, d, v)
            }
            _resetElementAttributes(i, d) {
                const v = j => {
                    const ee = I.getDataAttribute(j, d);
                    if (ee === null) {
                        j.style.removeProperty(d);
                        return
                    }
                    I.removeDataAttribute(j, d), j.style.setProperty(d, ee)
                };
                this._applyManipulationCallback(i, v)
            }
            _applyManipulationCallback(i, d) {
                if (w(i)) {
                    d(i);
                    return
                }
                for (const v of P.find(i, this._element)) d(v)
            }
        }
        const Sp = "modal",
            ut = ".bs.modal",
            Op = ".data-api",
            $p = "Escape",
            Rp = `hide${ut}`,
            Np = `hidePrevented${ut}`,
            nc = `hidden${ut}`,
            rc = `show${ut}`,
            Pp = `shown${ut}`,
            Lp = `resize${ut}`,
            xp = `click.dismiss${ut}`,
            Ip = `mousedown.dismiss${ut}`,
            Dp = `keydown.dismiss${ut}`,
            kp = `click${ut}${Op}`,
            sc = "modal-open",
            Mp = "fade",
            oc = "show",
            Mo = "modal-static",
            Hp = ".modal.show",
            jp = ".modal-dialog",
            Fp = ".modal-body",
            Bp = '[data-bs-toggle="modal"]',
            Vp = {
                backdrop: !0,
                focus: !0,
                keyboard: !0
            },
            Up = {
                backdrop: "(boolean|string)",
                focus: "boolean",
                keyboard: "boolean"
            };
        class mn extends X {
            constructor(i, d) {
                super(i, d), this._dialog = P.findOne(jp, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new ko, this._addEventListeners()
            }
            static get Default() {
                return Vp
            }
            static get DefaultType() {
                return Up
            }
            static get NAME() {
                return Sp
            }
            toggle(i) {
                return this._isShown ? this.hide() : this.show(i)
            }
            show(i) {
                this._isShown || this._isTransitioning || R.trigger(this._element, rc, {
                    relatedTarget: i
                }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(sc), this._adjustDialog(), this._backdrop.show(() => this._showElement(i)))
            }
            hide() {
                !this._isShown || this._isTransitioning || R.trigger(this._element, Rp).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(oc), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()))
            }
            dispose() {
                R.off(window, ut), R.off(this._dialog, ut), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
            }
            handleUpdate() {
                this._adjustDialog()
            }
            _initializeBackDrop() {
                return new Qa({
                    isVisible: !!this._config.backdrop,
                    isAnimated: this._isAnimated()
                })
            }
            _initializeFocusTrap() {
                return new Ja({
                    trapElement: this._element
                })
            }
            _showElement(i) {
                document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
                const d = P.findOne(Fp, this._dialog);
                d && (d.scrollTop = 0), S(this._element), this._element.classList.add(oc);
                const v = () => {
                    this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, R.trigger(this._element, Pp, {
                        relatedTarget: i
                    })
                };
                this._queueCallback(v, this._dialog, this._isAnimated())
            }
            _addEventListeners() {
                R.on(this._element, Dp, i => {
                    if (i.key === $p) {
                        if (this._config.keyboard) {
                            this.hide();
                            return
                        }
                        this._triggerBackdropTransition()
                    }
                }), R.on(window, Lp, () => {
                    this._isShown && !this._isTransitioning && this._adjustDialog()
                }), R.on(this._element, Ip, i => {
                    R.one(this._element, xp, d => {
                        if (!(this._element !== i.target || this._element !== d.target)) {
                            if (this._config.backdrop === "static") {
                                this._triggerBackdropTransition();
                                return
                            }
                            this._config.backdrop && this.hide()
                        }
                    })
                })
            }
            _hideModal() {
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                    document.body.classList.remove(sc), this._resetAdjustments(), this._scrollBar.reset(), R.trigger(this._element, nc)
                })
            }
            _isAnimated() {
                return this._element.classList.contains(Mp)
            }
            _triggerBackdropTransition() {
                if (R.trigger(this._element, Np).defaultPrevented) return;
                const d = this._element.scrollHeight > document.documentElement.clientHeight,
                    v = this._element.style.overflowY;
                v === "hidden" || this._element.classList.contains(Mo) || (d || (this._element.style.overflowY = "hidden"), this._element.classList.add(Mo), this._queueCallback(() => {
                    this._element.classList.remove(Mo), this._queueCallback(() => {
                        this._element.style.overflowY = v
                    }, this._dialog)
                }, this._dialog), this._element.focus())
            }
            _adjustDialog() {
                const i = this._element.scrollHeight > document.documentElement.clientHeight,
                    d = this._scrollBar.getWidth(),
                    v = d > 0;
                if (v && !i) {
                    const j = D() ? "paddingLeft" : "paddingRight";
                    this._element.style[j] = `${d}px`
                }
                if (!v && i) {
                    const j = D() ? "paddingRight" : "paddingLeft";
                    this._element.style[j] = `${d}px`
                }
            }
            _resetAdjustments() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }
            static jQueryInterface(i, d) {
                return this.each(function() {
                    const v = mn.getOrCreateInstance(this, i);
                    if (typeof i == "string") {
                        if (typeof v[i] > "u") throw new TypeError(`No method named "${i}"`);
                        v[i](d)
                    }
                })
            }
        }
        R.on(document, kp, Bp, function(y) {
            const i = P.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && y.preventDefault(), R.one(i, rc, j => {
                j.defaultPrevented || R.one(i, nc, () => {
                    $(this) && this.focus()
                })
            });
            const d = P.findOne(Hp);
            d && mn.getInstance(d).hide(), mn.getOrCreateInstance(i).toggle(this)
        }), Y(mn), L(mn);
        const Wp = "offcanvas",
            It = ".bs.offcanvas",
            ic = ".data-api",
            Kp = `load${It}${ic}`,
            Yp = "Escape",
            ac = "show",
            cc = "showing",
            lc = "hiding",
            qp = "offcanvas-backdrop",
            uc = ".offcanvas.show",
            zp = `show${It}`,
            Gp = `shown${It}`,
            Qp = `hide${It}`,
            fc = `hidePrevented${It}`,
            dc = `hidden${It}`,
            Xp = `resize${It}`,
            Jp = `click${It}${ic}`,
            Zp = `keydown.dismiss${It}`,
            em = '[data-bs-toggle="offcanvas"]',
            tm = {
                backdrop: !0,
                keyboard: !0,
                scroll: !1
            },
            nm = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                scroll: "boolean"
            };
        class Dt extends X {
            constructor(i, d) {
                super(i, d), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
            }
            static get Default() {
                return tm
            }
            static get DefaultType() {
                return nm
            }
            static get NAME() {
                return Wp
            }
            toggle(i) {
                return this._isShown ? this.hide() : this.show(i)
            }
            show(i) {
                if (this._isShown || R.trigger(this._element, zp, {
                        relatedTarget: i
                    }).defaultPrevented) return;
                this._isShown = !0, this._backdrop.show(), this._config.scroll || new ko().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(cc);
                const v = () => {
                    (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(ac), this._element.classList.remove(cc), R.trigger(this._element, Gp, {
                        relatedTarget: i
                    })
                };
                this._queueCallback(v, this._element, !0)
            }
            hide() {
                if (!this._isShown || R.trigger(this._element, Qp).defaultPrevented) return;
                this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(lc), this._backdrop.hide();
                const d = () => {
                    this._element.classList.remove(ac, lc), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new ko().reset(), R.trigger(this._element, dc)
                };
                this._queueCallback(d, this._element, !0)
            }
            dispose() {
                this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
            }
            _initializeBackDrop() {
                const i = () => {
                        if (this._config.backdrop === "static") {
                            R.trigger(this._element, fc);
                            return
                        }
                        this.hide()
                    },
                    d = !!this._config.backdrop;
                return new Qa({
                    className: qp,
                    isVisible: d,
                    isAnimated: !0,
                    rootElement: this._element.parentNode,
                    clickCallback: d ? i : null
                })
            }
            _initializeFocusTrap() {
                return new Ja({
                    trapElement: this._element
                })
            }
            _addEventListeners() {
                R.on(this._element, Zp, i => {
                    if (i.key === Yp) {
                        if (this._config.keyboard) {
                            this.hide();
                            return
                        }
                        R.trigger(this._element, fc)
                    }
                })
            }
            static jQueryInterface(i) {
                return this.each(function() {
                    const d = Dt.getOrCreateInstance(this, i);
                    if (typeof i == "string") {
                        if (d[i] === void 0 || i.startsWith("_") || i === "constructor") throw new TypeError(`No method named "${i}"`);
                        d[i](this)
                    }
                })
            }
        }
        R.on(document, Jp, em, function(y) {
            const i = P.getElementFromSelector(this);
            if (["A", "AREA"].includes(this.tagName) && y.preventDefault(), A(this)) return;
            R.one(i, dc, () => {
                $(this) && this.focus()
            });
            const d = P.findOne(uc);
            d && d !== i && Dt.getInstance(d).hide(), Dt.getOrCreateInstance(i).toggle(this)
        }), R.on(window, Kp, () => {
            for (const y of P.find(uc)) Dt.getOrCreateInstance(y).show()
        }), R.on(window, Xp, () => {
            for (const y of P.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(y).position !== "fixed" && Dt.getOrCreateInstance(y).hide()
        }), Y(Dt), L(Dt);
        const hc = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            rm = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
            sm = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
            om = (y, i) => {
                const d = y.nodeName.toLowerCase();
                return i.includes(d) ? rm.has(d) ? !!sm.test(y.nodeValue) : !0 : i.filter(v => v instanceof RegExp).some(v => v.test(d))
            };

        function im(y, i, d) {
            if (!y.length) return y;
            if (d && typeof d == "function") return d(y);
            const j = new window.DOMParser().parseFromString(y, "text/html"),
                ee = [].concat(...j.body.querySelectorAll("*"));
            for (const Q of ee) {
                const pe = Q.nodeName.toLowerCase();
                if (!Object.keys(i).includes(pe)) {
                    Q.remove();
                    continue
                }
                const qe = [].concat(...Q.attributes),
                    ft = [].concat(i["*"] || [], i[pe] || []);
                for (const ke of qe) om(ke, ft) || Q.removeAttribute(ke.nodeName)
            }
            return j.body.innerHTML
        }
        const am = "TemplateFactory",
            cm = {
                allowList: hc,
                content: {},
                extraClass: "",
                html: !1,
                sanitize: !0,
                sanitizeFn: null,
                template: "<div></div>"
            },
            lm = {
                allowList: "object",
                content: "object",
                extraClass: "(string|function)",
                html: "boolean",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                template: "string"
            },
            um = {
                entry: "(string|element|function|null)",
                selector: "(string|element)"
            };
        class fm extends V {
            constructor(i) {
                super(), this._config = this._getConfig(i)
            }
            static get Default() {
                return cm
            }
            static get DefaultType() {
                return lm
            }
            static get NAME() {
                return am
            }
            getContent() {
                return Object.values(this._config.content).map(i => this._resolvePossibleFunction(i)).filter(Boolean)
            }
            hasContent() {
                return this.getContent().length > 0
            }
            changeContent(i) {
                return this._checkContent(i), this._config.content = { ...this._config.content,
                    ...i
                }, this
            }
            toHtml() {
                const i = document.createElement("div");
                i.innerHTML = this._maybeSanitize(this._config.template);
                for (const [j, ee] of Object.entries(this._config.content)) this._setContent(i, ee, j);
                const d = i.children[0],
                    v = this._resolvePossibleFunction(this._config.extraClass);
                return v && d.classList.add(...v.split(" ")), d
            }
            _typeCheckConfig(i) {
                super._typeCheckConfig(i), this._checkContent(i.content)
            }
            _checkContent(i) {
                for (const [d, v] of Object.entries(i)) super._typeCheckConfig({
                    selector: d,
                    entry: v
                }, um)
            }
            _setContent(i, d, v) {
                const j = P.findOne(v, i);
                if (j) {
                    if (d = this._resolvePossibleFunction(d), !d) {
                        j.remove();
                        return
                    }
                    if (w(d)) {
                        this._putElementInTemplate(N(d), j);
                        return
                    }
                    if (this._config.html) {
                        j.innerHTML = this._maybeSanitize(d);
                        return
                    }
                    j.textContent = d
                }
            }
            _maybeSanitize(i) {
                return this._config.sanitize ? im(i, this._config.allowList, this._config.sanitizeFn) : i
            }
            _resolvePossibleFunction(i) {
                return F(i, [this])
            }
            _putElementInTemplate(i, d) {
                if (this._config.html) {
                    d.innerHTML = "", d.append(i);
                    return
                }
                d.textContent = i.textContent
            }
        }
        const dm = "tooltip",
            hm = new Set(["sanitize", "allowList", "sanitizeFn"]),
            Ho = "fade",
            pm = "modal",
            ws = "show",
            mm = ".tooltip-inner",
            pc = `.${pm}`,
            mc = "hide.bs.modal",
            Rr = "hover",
            jo = "focus",
            gm = "click",
            _m = "manual",
            ym = "hide",
            vm = "hidden",
            Em = "show",
            bm = "shown",
            wm = "inserted",
            Tm = "click",
            Am = "focusin",
            Cm = "focusout",
            Sm = "mouseenter",
            Om = "mouseleave",
            $m = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: D() ? "left" : "right",
                BOTTOM: "bottom",
                LEFT: D() ? "right" : "left"
            },
            Rm = {
                allowList: hc,
                animation: !0,
                boundary: "clippingParents",
                container: !1,
                customClass: "",
                delay: 0,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                html: !1,
                offset: [0, 6],
                placement: "top",
                popperConfig: null,
                sanitize: !0,
                sanitizeFn: null,
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                title: "",
                trigger: "hover focus"
            },
            Nm = {
                allowList: "object",
                animation: "boolean",
                boundary: "(string|element)",
                container: "(string|element|boolean)",
                customClass: "(string|function)",
                delay: "(number|object)",
                fallbackPlacements: "array",
                html: "boolean",
                offset: "(array|string|function)",
                placement: "(string|function)",
                popperConfig: "(null|object|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                selector: "(string|boolean)",
                template: "string",
                title: "(string|element|function)",
                trigger: "string"
            };
        class gn extends X {
            constructor(i, d) {
                if (typeof s > "u") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                super(i, d), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
            }
            static get Default() {
                return Rm
            }
            static get DefaultType() {
                return Nm
            }
            static get NAME() {
                return dm
            }
            enable() {
                this._isEnabled = !0
            }
            disable() {
                this._isEnabled = !1
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled
            }
            toggle() {
                if (this._isEnabled) {
                    if (this._activeTrigger.click = !this._activeTrigger.click, this._isShown()) {
                        this._leave();
                        return
                    }
                    this._enter()
                }
            }
            dispose() {
                clearTimeout(this._timeout), R.off(this._element.closest(pc), mc, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
            }
            show() {
                if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
                if (!(this._isWithContent() && this._isEnabled)) return;
                const i = R.trigger(this._element, this.constructor.eventName(Em)),
                    v = (b(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
                if (i.defaultPrevented || !v) return;
                this._disposePopper();
                const j = this._getTipElement();
                this._element.setAttribute("aria-describedby", j.getAttribute("id"));
                const {
                    container: ee
                } = this._config;
                if (this._element.ownerDocument.documentElement.contains(this.tip) || (ee.append(j), R.trigger(this._element, this.constructor.eventName(wm))), this._popper = this._createPopper(j), j.classList.add(ws), "ontouchstart" in document.documentElement)
                    for (const pe of [].concat(...document.body.children)) R.on(pe, "mouseover", g);
                const Q = () => {
                    R.trigger(this._element, this.constructor.eventName(bm)), this._isHovered === !1 && this._leave(), this._isHovered = !1
                };
                this._queueCallback(Q, this.tip, this._isAnimated())
            }
            hide() {
                if (!this._isShown() || R.trigger(this._element, this.constructor.eventName(ym)).defaultPrevented) return;
                if (this._getTipElement().classList.remove(ws), "ontouchstart" in document.documentElement)
                    for (const j of [].concat(...document.body.children)) R.off(j, "mouseover", g);
                this._activeTrigger[gm] = !1, this._activeTrigger[jo] = !1, this._activeTrigger[Rr] = !1, this._isHovered = null;
                const v = () => {
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), R.trigger(this._element, this.constructor.eventName(vm)))
                };
                this._queueCallback(v, this.tip, this._isAnimated())
            }
            update() {
                this._popper && this._popper.update()
            }
            _isWithContent() {
                return !!this._getTitle()
            }
            _getTipElement() {
                return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
            }
            _createTipElement(i) {
                const d = this._getTemplateFactory(i).toHtml();
                if (!d) return null;
                d.classList.remove(Ho, ws), d.classList.add(`bs-${this.constructor.NAME}-auto`);
                const v = p(this.constructor.NAME).toString();
                return d.setAttribute("id", v), this._isAnimated() && d.classList.add(Ho), d
            }
            setContent(i) {
                this._newContent = i, this._isShown() && (this._disposePopper(), this.show())
            }
            _getTemplateFactory(i) {
                return this._templateFactory ? this._templateFactory.changeContent(i) : this._templateFactory = new fm({ ...this._config,
                    content: i,
                    extraClass: this._resolvePossibleFunction(this._config.customClass)
                }), this._templateFactory
            }
            _getContentForTemplate() {
                return {
                    [mm]: this._getTitle()
                }
            }
            _getTitle() {
                return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
            }
            _initializeOnDelegatedTarget(i) {
                return this.constructor.getOrCreateInstance(i.delegateTarget, this._getDelegateConfig())
            }
            _isAnimated() {
                return this._config.animation || this.tip && this.tip.classList.contains(Ho)
            }
            _isShown() {
                return this.tip && this.tip.classList.contains(ws)
            }
            _createPopper(i) {
                const d = F(this._config.placement, [this, i, this._element]),
                    v = $m[d.toUpperCase()];
                return s.createPopper(this._element, i, this._getPopperConfig(v))
            }
            _getOffset() {
                const {
                    offset: i
                } = this._config;
                return typeof i == "string" ? i.split(",").map(d => Number.parseInt(d, 10)) : typeof i == "function" ? d => i(d, this._element) : i
            }
            _resolvePossibleFunction(i) {
                return F(i, [this._element])
            }
            _getPopperConfig(i) {
                const d = {
                    placement: i,
                    modifiers: [{
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }, {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    }, {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: v => {
                            this._getTipElement().setAttribute("data-popper-placement", v.state.placement)
                        }
                    }]
                };
                return { ...d,
                    ...F(this._config.popperConfig, [d])
                }
            }
            _setListeners() {
                const i = this._config.trigger.split(" ");
                for (const d of i)
                    if (d === "click") R.on(this._element, this.constructor.eventName(Tm), this._config.selector, v => {
                        this._initializeOnDelegatedTarget(v).toggle()
                    });
                    else if (d !== _m) {
                    const v = d === Rr ? this.constructor.eventName(Sm) : this.constructor.eventName(Am),
                        j = d === Rr ? this.constructor.eventName(Om) : this.constructor.eventName(Cm);
                    R.on(this._element, v, this._config.selector, ee => {
                        const Q = this._initializeOnDelegatedTarget(ee);
                        Q._activeTrigger[ee.type === "focusin" ? jo : Rr] = !0, Q._enter()
                    }), R.on(this._element, j, this._config.selector, ee => {
                        const Q = this._initializeOnDelegatedTarget(ee);
                        Q._activeTrigger[ee.type === "focusout" ? jo : Rr] = Q._element.contains(ee.relatedTarget), Q._leave()
                    })
                }
                this._hideModalHandler = () => {
                    this._element && this.hide()
                }, R.on(this._element.closest(pc), mc, this._hideModalHandler)
            }
            _fixTitle() {
                const i = this._element.getAttribute("title");
                i && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", i), this._element.setAttribute("data-bs-original-title", i), this._element.removeAttribute("title"))
            }
            _enter() {
                if (this._isShown() || this._isHovered) {
                    this._isHovered = !0;
                    return
                }
                this._isHovered = !0, this._setTimeout(() => {
                    this._isHovered && this.show()
                }, this._config.delay.show)
            }
            _leave() {
                this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
                    this._isHovered || this.hide()
                }, this._config.delay.hide))
            }
            _setTimeout(i, d) {
                clearTimeout(this._timeout), this._timeout = setTimeout(i, d)
            }
            _isWithActiveTrigger() {
                return Object.values(this._activeTrigger).includes(!0)
            }
            _getConfig(i) {
                const d = I.getDataAttributes(this._element);
                for (const v of Object.keys(d)) hm.has(v) && delete d[v];
                return i = { ...d,
                    ...typeof i == "object" && i ? i : {}
                }, i = this._mergeConfigObj(i), i = this._configAfterMerge(i), this._typeCheckConfig(i), i
            }
            _configAfterMerge(i) {
                return i.container = i.container === !1 ? document.body : N(i.container), typeof i.delay == "number" && (i.delay = {
                    show: i.delay,
                    hide: i.delay
                }), typeof i.title == "number" && (i.title = i.title.toString()), typeof i.content == "number" && (i.content = i.content.toString()), i
            }
            _getDelegateConfig() {
                const i = {};
                for (const [d, v] of Object.entries(this._config)) this.constructor.Default[d] !== v && (i[d] = v);
                return i.selector = !1, i.trigger = "manual", i
            }
            _disposePopper() {
                this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
            }
            static jQueryInterface(i) {
                return this.each(function() {
                    const d = gn.getOrCreateInstance(this, i);
                    if (typeof i == "string") {
                        if (typeof d[i] > "u") throw new TypeError(`No method named "${i}"`);
                        d[i]()
                    }
                })
            }
        }
        L(gn);
        const Pm = "popover",
            Lm = ".popover-header",
            xm = ".popover-body",
            Im = { ...gn.Default,
                content: "",
                offset: [0, 8],
                placement: "right",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                trigger: "click"
            },
            Dm = { ...gn.DefaultType,
                content: "(null|string|element|function)"
            };
        class Ts extends gn {
            static get Default() {
                return Im
            }
            static get DefaultType() {
                return Dm
            }
            static get NAME() {
                return Pm
            }
            _isWithContent() {
                return this._getTitle() || this._getContent()
            }
            _getContentForTemplate() {
                return {
                    [Lm]: this._getTitle(),
                    [xm]: this._getContent()
                }
            }
            _getContent() {
                return this._resolvePossibleFunction(this._config.content)
            }
            static jQueryInterface(i) {
                return this.each(function() {
                    const d = Ts.getOrCreateInstance(this, i);
                    if (typeof i == "string") {
                        if (typeof d[i] > "u") throw new TypeError(`No method named "${i}"`);
                        d[i]()
                    }
                })
            }
        }
        L(Ts);
        const km = "scrollspy",
            Fo = ".bs.scrollspy",
            Mm = ".data-api",
            Hm = `activate${Fo}`,
            gc = `click${Fo}`,
            jm = `load${Fo}${Mm}`,
            Fm = "dropdown-item",
            qn = "active",
            Bm = '[data-bs-spy="scroll"]',
            Bo = "[href]",
            Vm = ".nav, .list-group",
            _c = ".nav-link",
            Um = `${_c}, .nav-item > ${_c}, .list-group-item`,
            Wm = ".dropdown",
            Km = ".dropdown-toggle",
            Ym = {
                offset: null,
                rootMargin: "0px 0px -25%",
                smoothScroll: !1,
                target: null,
                threshold: [.1, .5, 1]
            },
            qm = {
                offset: "(number|null)",
                rootMargin: "string",
                smoothScroll: "boolean",
                target: "element",
                threshold: "array"
            };
        class Nr extends X {
            constructor(i, d) {
                super(i, d), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                    visibleEntryTop: 0,
                    parentScrollTop: 0
                }, this.refresh()
            }
            static get Default() {
                return Ym
            }
            static get DefaultType() {
                return qm
            }
            static get NAME() {
                return km
            }
            refresh() {
                this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
                for (const i of this._observableSections.values()) this._observer.observe(i)
            }
            dispose() {
                this._observer.disconnect(), super.dispose()
            }
            _configAfterMerge(i) {
                return i.target = N(i.target) || document.body, i.rootMargin = i.offset ? `${i.offset}px 0px -30%` : i.rootMargin, typeof i.threshold == "string" && (i.threshold = i.threshold.split(",").map(d => Number.parseFloat(d))), i
            }
            _maybeEnableSmoothScroll() {
                this._config.smoothScroll && (R.off(this._config.target, gc), R.on(this._config.target, gc, Bo, i => {
                    const d = this._observableSections.get(i.target.hash);
                    if (d) {
                        i.preventDefault();
                        const v = this._rootElement || window,
                            j = d.offsetTop - this._element.offsetTop;
                        if (v.scrollTo) {
                            v.scrollTo({
                                top: j,
                                behavior: "smooth"
                            });
                            return
                        }
                        v.scrollTop = j
                    }
                }))
            }
            _getNewObserver() {
                const i = {
                    root: this._rootElement,
                    threshold: this._config.threshold,
                    rootMargin: this._config.rootMargin
                };
                return new IntersectionObserver(d => this._observerCallback(d), i)
            }
            _observerCallback(i) {
                const d = Q => this._targetLinks.get(`#${Q.target.id}`),
                    v = Q => {
                        this._previousScrollData.visibleEntryTop = Q.target.offsetTop, this._process(d(Q))
                    },
                    j = (this._rootElement || document.documentElement).scrollTop,
                    ee = j >= this._previousScrollData.parentScrollTop;
                this._previousScrollData.parentScrollTop = j;
                for (const Q of i) {
                    if (!Q.isIntersecting) {
                        this._activeTarget = null, this._clearActiveClass(d(Q));
                        continue
                    }
                    const pe = Q.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                    if (ee && pe) {
                        if (v(Q), !j) return;
                        continue
                    }!ee && !pe && v(Q)
                }
            }
            _initializeTargetsAndObservables() {
                this._targetLinks = new Map, this._observableSections = new Map;
                const i = P.find(Bo, this._config.target);
                for (const d of i) {
                    if (!d.hash || A(d)) continue;
                    const v = P.findOne(decodeURI(d.hash), this._element);
                    $(v) && (this._targetLinks.set(decodeURI(d.hash), d), this._observableSections.set(d.hash, v))
                }
            }
            _process(i) {
                this._activeTarget !== i && (this._clearActiveClass(this._config.target), this._activeTarget = i, i.classList.add(qn), this._activateParents(i), R.trigger(this._element, Hm, {
                    relatedTarget: i
                }))
            }
            _activateParents(i) {
                if (i.classList.contains(Fm)) {
                    P.findOne(Km, i.closest(Wm)).classList.add(qn);
                    return
                }
                for (const d of P.parents(i, Vm))
                    for (const v of P.prev(d, Um)) v.classList.add(qn)
            }
            _clearActiveClass(i) {
                i.classList.remove(qn);
                const d = P.find(`${Bo}.${qn}`, i);
                for (const v of d) v.classList.remove(qn)
            }
            static jQueryInterface(i) {
                return this.each(function() {
                    const d = Nr.getOrCreateInstance(this, i);
                    if (typeof i == "string") {
                        if (d[i] === void 0 || i.startsWith("_") || i === "constructor") throw new TypeError(`No method named "${i}"`);
                        d[i]()
                    }
                })
            }
        }
        R.on(window, jm, () => {
            for (const y of P.find(Bm)) Nr.getOrCreateInstance(y)
        }), L(Nr);
        const zm = "tab",
            _n = ".bs.tab",
            Gm = `hide${_n}`,
            Qm = `hidden${_n}`,
            Xm = `show${_n}`,
            Jm = `shown${_n}`,
            Zm = `click${_n}`,
            eg = `keydown${_n}`,
            tg = `load${_n}`,
            ng = "ArrowLeft",
            yc = "ArrowRight",
            rg = "ArrowUp",
            vc = "ArrowDown",
            Vo = "Home",
            Ec = "End",
            yn = "active",
            bc = "fade",
            Uo = "show",
            sg = "dropdown",
            wc = ".dropdown-toggle",
            og = ".dropdown-menu",
            Wo = `:not(${wc})`,
            ig = '.list-group, .nav, [role="tablist"]',
            ag = ".nav-item, .list-group-item",
            cg = `.nav-link${Wo}, .list-group-item${Wo}, [role="tab"]${Wo}`,
            Tc = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            Ko = `${cg}, ${Tc}`,
            lg = `.${yn}[data-bs-toggle="tab"], .${yn}[data-bs-toggle="pill"], .${yn}[data-bs-toggle="list"]`;
        class vn extends X {
            constructor(i) {
                super(i), this._parent = this._element.closest(ig), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), R.on(this._element, eg, d => this._keydown(d)))
            }
            static get NAME() {
                return zm
            }
            show() {
                const i = this._element;
                if (this._elemIsActive(i)) return;
                const d = this._getActiveElem(),
                    v = d ? R.trigger(d, Gm, {
                        relatedTarget: i
                    }) : null;
                R.trigger(i, Xm, {
                    relatedTarget: d
                }).defaultPrevented || v && v.defaultPrevented || (this._deactivate(d, i), this._activate(i, d))
            }
            _activate(i, d) {
                if (!i) return;
                i.classList.add(yn), this._activate(P.getElementFromSelector(i));
                const v = () => {
                    if (i.getAttribute("role") !== "tab") {
                        i.classList.add(Uo);
                        return
                    }
                    i.removeAttribute("tabindex"), i.setAttribute("aria-selected", !0), this._toggleDropDown(i, !0), R.trigger(i, Jm, {
                        relatedTarget: d
                    })
                };
                this._queueCallback(v, i, i.classList.contains(bc))
            }
            _deactivate(i, d) {
                if (!i) return;
                i.classList.remove(yn), i.blur(), this._deactivate(P.getElementFromSelector(i));
                const v = () => {
                    if (i.getAttribute("role") !== "tab") {
                        i.classList.remove(Uo);
                        return
                    }
                    i.setAttribute("aria-selected", !1), i.setAttribute("tabindex", "-1"), this._toggleDropDown(i, !1), R.trigger(i, Qm, {
                        relatedTarget: d
                    })
                };
                this._queueCallback(v, i, i.classList.contains(bc))
            }
            _keydown(i) {
                if (![ng, yc, rg, vc, Vo, Ec].includes(i.key)) return;
                i.stopPropagation(), i.preventDefault();
                const d = this._getChildren().filter(j => !A(j));
                let v;
                if ([Vo, Ec].includes(i.key)) v = d[i.key === Vo ? 0 : d.length - 1];
                else {
                    const j = [yc, vc].includes(i.key);
                    v = te(d, i.target, j, !0)
                }
                v && (v.focus({
                    preventScroll: !0
                }), vn.getOrCreateInstance(v).show())
            }
            _getChildren() {
                return P.find(Ko, this._parent)
            }
            _getActiveElem() {
                return this._getChildren().find(i => this._elemIsActive(i)) || null
            }
            _setInitialAttributes(i, d) {
                this._setAttributeIfNotExists(i, "role", "tablist");
                for (const v of d) this._setInitialAttributesOnChild(v)
            }
            _setInitialAttributesOnChild(i) {
                i = this._getInnerElement(i);
                const d = this._elemIsActive(i),
                    v = this._getOuterElement(i);
                i.setAttribute("aria-selected", d), v !== i && this._setAttributeIfNotExists(v, "role", "presentation"), d || i.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(i, "role", "tab"), this._setInitialAttributesOnTargetPanel(i)
            }
            _setInitialAttributesOnTargetPanel(i) {
                const d = P.getElementFromSelector(i);
                d && (this._setAttributeIfNotExists(d, "role", "tabpanel"), i.id && this._setAttributeIfNotExists(d, "aria-labelledby", `${i.id}`))
            }
            _toggleDropDown(i, d) {
                const v = this._getOuterElement(i);
                if (!v.classList.contains(sg)) return;
                const j = (ee, Q) => {
                    const pe = P.findOne(ee, v);
                    pe && pe.classList.toggle(Q, d)
                };
                j(wc, yn), j(og, Uo), v.setAttribute("aria-expanded", d)
            }
            _setAttributeIfNotExists(i, d, v) {
                i.hasAttribute(d) || i.setAttribute(d, v)
            }
            _elemIsActive(i) {
                return i.classList.contains(yn)
            }
            _getInnerElement(i) {
                return i.matches(Ko) ? i : P.findOne(Ko, i)
            }
            _getOuterElement(i) {
                return i.closest(ag) || i
            }
            static jQueryInterface(i) {
                return this.each(function() {
                    const d = vn.getOrCreateInstance(this);
                    if (typeof i == "string") {
                        if (d[i] === void 0 || i.startsWith("_") || i === "constructor") throw new TypeError(`No method named "${i}"`);
                        d[i]()
                    }
                })
            }
        }
        R.on(document, Zm, Tc, function(y) {
            ["A", "AREA"].includes(this.tagName) && y.preventDefault(), !A(this) && vn.getOrCreateInstance(this).show()
        }), R.on(window, tg, () => {
            for (const y of P.find(lg)) vn.getOrCreateInstance(y)
        }), L(vn);
        const ug = "toast",
            qt = ".bs.toast",
            fg = `mouseover${qt}`,
            dg = `mouseout${qt}`,
            hg = `focusin${qt}`,
            pg = `focusout${qt}`,
            mg = `hide${qt}`,
            gg = `hidden${qt}`,
            _g = `show${qt}`,
            yg = `shown${qt}`,
            vg = "fade",
            Ac = "hide",
            As = "show",
            Cs = "showing",
            Eg = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            bg = {
                animation: !0,
                autohide: !0,
                delay: 5e3
            };
        class Pr extends X {
            constructor(i, d) {
                super(i, d), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
            }
            static get Default() {
                return bg
            }
            static get DefaultType() {
                return Eg
            }
            static get NAME() {
                return ug
            }
            show() {
                if (R.trigger(this._element, _g).defaultPrevented) return;
                this._clearTimeout(), this._config.animation && this._element.classList.add(vg);
                const d = () => {
                    this._element.classList.remove(Cs), R.trigger(this._element, yg), this._maybeScheduleHide()
                };
                this._element.classList.remove(Ac), S(this._element), this._element.classList.add(As, Cs), this._queueCallback(d, this._element, this._config.animation)
            }
            hide() {
                if (!this.isShown() || R.trigger(this._element, mg).defaultPrevented) return;
                const d = () => {
                    this._element.classList.add(Ac), this._element.classList.remove(Cs, As), R.trigger(this._element, gg)
                };
                this._element.classList.add(Cs), this._queueCallback(d, this._element, this._config.animation)
            }
            dispose() {
                this._clearTimeout(), this.isShown() && this._element.classList.remove(As), super.dispose()
            }
            isShown() {
                return this._element.classList.contains(As)
            }
            _maybeScheduleHide() {
                this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
                    this.hide()
                }, this._config.delay)))
            }
            _onInteraction(i, d) {
                switch (i.type) {
                    case "mouseover":
                    case "mouseout":
                        {
                            this._hasMouseInteraction = d;
                            break
                        }
                    case "focusin":
                    case "focusout":
                        {
                            this._hasKeyboardInteraction = d;
                            break
                        }
                }
                if (d) {
                    this._clearTimeout();
                    return
                }
                const v = i.relatedTarget;
                this._element === v || this._element.contains(v) || this._maybeScheduleHide()
            }
            _setListeners() {
                R.on(this._element, fg, i => this._onInteraction(i, !0)), R.on(this._element, dg, i => this._onInteraction(i, !1)), R.on(this._element, hg, i => this._onInteraction(i, !0)), R.on(this._element, pg, i => this._onInteraction(i, !1))
            }
            _clearTimeout() {
                clearTimeout(this._timeout), this._timeout = null
            }
            static jQueryInterface(i) {
                return this.each(function() {
                    const d = Pr.getOrCreateInstance(this, i);
                    if (typeof i == "string") {
                        if (typeof d[i] > "u") throw new TypeError(`No method named "${i}"`);
                        d[i](this)
                    }
                })
            }
        }
        return Y(Pr), L(Pr), {
            Alert: Oe,
            Button: Kt,
            Carousel: Un,
            Collapse: Kn,
            Dropdown: yt,
            Modal: mn,
            Offcanvas: Dt,
            Popover: Ts,
            ScrollSpy: Nr,
            Tab: vn,
            Toast: Pr,
            Tooltip: gn
        }
    })
})(NT);
const EA = He(() => {}),
    bA = He(() => {
        (function(e) {
            var t = e.createElement("script");
            t.async = !0, t.charset = "utf-8", t.src = "https://app.blinger.io/uploads/widgets2/2091.js", e.head.appendChild(t)
        })(window.document)
    }),
    wA = He(() => {
        (function(e, t, n, r, s, o) {
            e.hj = e.hj || function() {
                (e.hj.q = e.hj.q || []).push(arguments)
            }, e._hjSettings = {
                hjid: 5033513,
                hjsv: 6
            }, s = t.getElementsByTagName("head")[0], o = t.createElement("script"), o.async = 1, o.src = n + e._hjSettings.hjid + r + e._hjSettings.hjsv, s.appendChild(o)
        })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
    }),
    TA = He(e => {
        (function(n, r, s, o, a, c, l) {
            n.fbq || (a = n.fbq = function() {
                a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments)
            }, n._fbq || (n._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], c = r.createElement(s), c.async = !0, c.src = o, l = r.getElementsByTagName(s)[0], l.parentNode.insertBefore(c, l))
        })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", "24419850387678139"), fbq("track", "PageView", {
            page: window.location.pathname
        }), e.$router.afterEach(n => {
            fbq("track", "PageView", {
                page: n.fullPath
            })
        });
        const t = document.createElement("noscript");
        t.innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=24419850387678139&ev=PageView&noscript=1"/>', document.body.appendChild(t)
    }),
    AA = [xb, Db, Yw, qw, nT, rT, sT, iT, fT, yT, vT, ET, $T, RT, EA, bA, wA, TA],
    fu = {
        pwaInDevEnvironment: !1,
        webManifest: {
            href: "/manifest.webmanifest",
            useCredentials: !1,
            linkTag: '<link rel="manifest" href="/manifest.webmanifest">'
        }
    },
    CA = Ut({
        async setup() {
            if (fu) {
                const e = Pe({
                    link: []
                });
                JE(e);
                const {
                    webManifest: t
                } = fu;
                if (t) {
                    const {
                        href: n,
                        useCredentials: r
                    } = t;
                    r ? e.value.link.push({
                        rel: "manifest",
                        href: n,
                        crossorigin: "use-credentials"
                    }) : e.value.link.push({
                        rel: "manifest",
                        href: n
                    })
                }
            }
            return () => null
        }
    }),
    SA = (e, t) => t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }),
    Vi = (e, t) => {
        const n = e.route.matched.find(s => {
                var o;
                return ((o = s.components) == null ? void 0 : o.default) === e.Component.type
            }),
            r = t ? ? (n == null ? void 0 : n.meta.key) ? ? (n && SA(e.route, n));
        return typeof r == "function" ? r(e.route) : r
    },
    OA = (e, t) => ({
        default: () => e ? ot(D_, e === !0 ? {} : e, t) : t
    }),
    $A = Ut({
        name: "RouteProvider",
        props: {
            vnode: {
                type: Object,
                required: !0
            },
            route: {
                type: Object,
                required: !0
            },
            vnodeRef: Object,
            renderKey: String,
            trackRootNodes: Boolean
        },
        setup(e) {
            const t = e.renderKey,
                n = e.route,
                r = {};
            for (const s in e.route) Object.defineProperty(r, s, {
                get: () => t === e.renderKey ? e.route[s] : n[s]
            });
            return Nn(us, as(r)), () => ot(e.vnode, {
                ref: e.vnodeRef
            })
        }
    }),
    Kd = (e, t, n) => (t = t === !0 ? {} : t, {
        default: () => {
            var r;
            return t ? ot(e, t, n) : (r = n.default) == null ? void 0 : r.call(n)
        }
    }),
    RA = Ut({
        name: "NuxtPage",
        inheritAttrs: !1,
        props: {
            name: {
                type: String
            },
            transition: {
                type: [Boolean, Object],
                default: void 0
            },
            keepalive: {
                type: [Boolean, Object],
                default: void 0
            },
            route: {
                type: Object
            },
            pageKey: {
                type: [Function, String],
                default: null
            }
        },
        setup(e, {
            attrs: t,
            expose: n
        }) {
            const r = Se(),
                s = Pe(),
                o = Ve(us, null);
            n({
                pageRef: s
            });
            const a = Ve(Qf, null);
            let c;
            const l = r.deferHydration();
            return () => ot(hd, {
                name: e.name,
                route: e.route,
                ...t
            }, {
                default: f => {
                    const u = LA(o, f.route, f.Component),
                        h = o && o.matched.length === f.route.matched.length;
                    if (!f.Component) {
                        if (c && !h) return c;
                        l();
                        return
                    }
                    if (c && a && !a.isCurrent(f.route)) return c;
                    if (u && o && (!a || a != null && a.isCurrent(o))) return h ? c : null;
                    const p = Vi(f, e.pageKey),
                        m = !!(e.transition ? ? f.route.meta.pageTransition ? ? xi),
                        T = m && PA([e.transition, f.route.meta.pageTransition, xi, {
                            onAfterLeave: () => {
                                r.callHook("page:transition:finish", f.Component)
                            }
                        }].filter(Boolean));
                    return c = Kd(To, m && T, OA(e.keepalive ? ? f.route.meta.keepalive ? ? _b, ot(oa, {
                        suspensible: !0,
                        onPending: () => r.callHook("page:start", f.Component),
                        onResolve: () => {
                            xt(() => r.callHook("page:finish", f.Component).finally(l))
                        }
                    }, {
                        default: () => ot($A, {
                            key: p,
                            vnode: f.Component,
                            route: f.route,
                            renderKey: p,
                            trackRootNodes: m,
                            vnodeRef: s
                        })
                    }))).default(), c
                }
            })
        }
    });

function NA(e) {
    return Array.isArray(e) ? e : e ? [e] : []
}

function PA(e) {
    const t = e.map(n => ({ ...n,
        onAfterLeave: NA(n.onAfterLeave)
    }));
    return zf(...t)
}

function LA(e, t, n) {
    if (!e) return !1;
    const r = t.matched.findIndex(s => {
        var o;
        return ((o = s.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type)
    });
    return !r || r === -1 ? !1 : t.matched.slice(0, r).some((s, o) => {
        var a, c, l;
        return ((a = s.components) == null ? void 0 : a.default) !== ((l = (c = e.matched[o]) == null ? void 0 : c.components) == null ? void 0 : l.default)
    }) || n && Vi({
        route: t,
        Component: n
    }) !== Vi({
        route: e,
        Component: n
    })
}
const xA = Ut({
        name: "LayoutLoader",
        inheritAttrs: !1,
        props: {
            name: String,
            layoutProps: Object
        },
        async setup(e, t) {
            const n = await On[e.name]().then(r => r.default || r);
            return () => ot(n, e.layoutProps, t.slots)
        }
    }),
    IA = Ut({
        name: "NuxtLayout",
        inheritAttrs: !1,
        props: {
            name: {
                type: [String, Boolean, Object],
                default: null
            }
        },
        setup(e, t) {
            const n = Se(),
                r = Ve(us),
                s = r === va() ? Hw() : r,
                o = st(() => Re(e.name) ? ? s.meta.layout ? ? "default"),
                a = Pe();
            t.expose({
                layoutRef: a
            });
            const c = n.deferHydration();
            return () => {
                const l = o.value && o.value in On,
                    f = s.meta.layoutTransition ? ? gb;
                return Kd(To, l && f, {
                    default: () => ot(oa, {
                        suspensible: !0,
                        onResolve: () => {
                            xt(c)
                        }
                    }, {
                        default: () => ot(DA, {
                            layoutProps: bf(t.attrs, {
                                ref: a
                            }),
                            key: o.value,
                            name: o.value,
                            shouldProvide: !e.name,
                            hasTransition: !!f
                        }, t.slots)
                    })
                }).default()
            }
        }
    }),
    DA = Ut({
        name: "NuxtLayoutProvider",
        inheritAttrs: !1,
        props: {
            name: {
                type: [String, Boolean]
            },
            layoutProps: {
                type: Object
            },
            hasTransition: {
                type: Boolean
            },
            shouldProvide: {
                type: Boolean
            }
        },
        setup(e, t) {
            const n = e.name;
            return e.shouldProvide && Nn(Qf, {
                isCurrent: r => n === (r.meta.layout ? ? "default")
            }), () => {
                var r, s;
                return !n || typeof n == "string" && !(n in On) ? (s = (r = t.slots).default) == null ? void 0 : s.call(r) : ot(xA, {
                    key: n,
                    layoutProps: e.layoutProps,
                    name: n
                }, t.slots)
            }
        }
    }),
    kA = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [r, s] of t) n[r] = s;
        return n
    },
    MA = {};

function HA(e, t) {
    const n = CA,
        r = RA,
        s = IA;
    return Rt(), Ht(s, null, {
        default: ra(() => [Ne(n), Ne(r)]),
        _: 1
    })
}
const jA = kA(MA, [
        ["render", HA]
    ]),
    FA = {
        __name: "nuxt-error-page",
        props: {
            error: Object
        },
        setup(e) {
            const n = e.error;
            (n.stack || "").split(`
`).splice(1).map(h => ({
                text: h.replace("webpack:/", "").replace(".vue", ".js").trim(),
                internal: h.includes("node_modules") && !h.includes(".cache") || h.includes("internal") || h.includes("new Promise")
            })).map(h => `<span class="stack${h.internal?" internal":""}">${h.text}</span>`).join(`
`);
            const r = Number(n.statusCode || 500),
                s = r === 404,
                o = n.statusMessage ? ? (s ? "Page Not Found" : "Internal Server Error"),
                a = n.message || n.toString(),
                c = void 0,
                u = s ? Hc(() => Ce(() =>
                    import ("./error-404.1399afa1.js"), ["./error-404.1399afa1.js", "./nuxt-link.52c63e0f.js", "./error-404.7fc72018.css"],
                    import.meta.url).then(h => h.default || h)) : Hc(() => Ce(() =>
                    import ("./error-500.82176203.js"), ["./error-500.82176203.js", "./error-500.c5df6088.css"],
                    import.meta.url).then(h => h.default || h));
            return (h, p) => (Rt(), Ht(Re(u), Ig(vf({
                statusCode: Re(r),
                statusMessage: Re(o),
                description: Re(a),
                stack: Re(c)
            })), null, 16))
        }
    },
    du = {
        __name: "nuxt-root",
        setup(e) {
            const t = () => null,
                n = Se(),
                r = n.deferHydration(),
                s = !1;
            Nn(us, va()), n.hooks.callHookWith(c => c.map(l => l()), "vue:setup");
            const o = Co();
            ef((c, l, f) => {
                if (n.hooks.callHook("vue:error", c, l, f).catch(u => console.error("[nuxt] Error in `vue:error` hook", u)), mb(c) && (c.fatal || c.unhandled)) return n.runWithContext(() => Zn(c)), !1
            });
            const a = !1;
            return (c, l) => (Rt(), Ht(oa, {
                onResolve: Re(r)
            }, {
                default: ra(() => [Re(o) ? (Rt(), Ht(Re(FA), {
                    key: 0,
                    error: Re(o)
                }, null, 8, ["error"])) : Re(a) ? (Rt(), Ht(Re(t), {
                    key: 1,
                    context: Re(a)
                }, null, 8, ["context"])) : Re(s) ? (Rt(), Ht(V_(Re(s)), {
                    key: 2
                })) : (Rt(), Ht(Re(jA), {
                    key: 3
                }))]),
                _: 1
            }, 8, ["onResolve"]))
        }
    };
globalThis.$fetch || (globalThis.$fetch = Bv.create({
    baseURL: Uv()
}));
let hu; {
    let e;
    hu = async function() {
        var o, a;
        if (e) return e;
        const r = !!((o = window.__NUXT__) != null && o.serverRendered || ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? Gy(du) : zy(du),
            s = nE({
                vueApp: r
            });
        try {
            await sE(s, AA)
        } catch (c) {
            await s.callHook("app:error", c), s.payload.error = s.payload.error || c
        }
        try {
            await s.hooks.callHook("app:created", r), await s.hooks.callHook("app:beforeMount", r), r.mount(yb), await s.hooks.callHook("app:mounted", r), await xt()
        } catch (c) {
            await s.callHook("app:error", c), s.payload.error = s.payload.error || c
        }
        return r
    }, e = hu().catch(t => {
        console.error("Error while mounting app:", t)
    })
}
export {
    Fy as A, $o as B, aC as C, Ut as D, Pe as E, Qe as F, st as G, ca as H, vo as I, jn as J, gC as K, Xf as L, $l as M, mC as N, ot as O, Ao as P, dv as Q, Se as R, pC as S, To as T, ls as U, Ai as V, Rf as W, Ab as X, yC as Y, vC as Z, kA as _, yf as a, Ne as b, cC as c, Ef as d, nC as e, Re as f, lC as g, _C as h, hC as i, rC as j, Vy as k, oC as l, uC as m, fo as n, Rt as o, tC as p, iC as q, sC as r, uo as s, eC as t, JE as u, ul as v, ra as w, fC as x, Ht as y, dC as z
};