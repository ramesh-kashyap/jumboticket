/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ct = function(n) {
        const e = [];
        let t = 0;
        for (let r = 0; r < n.length; r++) {
            let i = n.charCodeAt(r);
            i < 128 ? e[t++] = i : i < 2048 ? (e[t++] = i >> 6 | 192, e[t++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < n.length && (n.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (n.charCodeAt(++r) & 1023), e[t++] = i >> 18 | 240, e[t++] = i >> 12 & 63 | 128, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128) : (e[t++] = i >> 12 | 224, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128)
        }
        return e
    },
    bn = function(n) {
        const e = [];
        let t = 0,
            r = 0;
        for (; t < n.length;) {
            const i = n[t++];
            if (i < 128) e[r++] = String.fromCharCode(i);
            else if (i > 191 && i < 224) {
                const s = n[t++];
                e[r++] = String.fromCharCode((i & 31) << 6 | s & 63)
            } else if (i > 239 && i < 365) {
                const s = n[t++],
                    o = n[t++],
                    c = n[t++],
                    a = ((i & 7) << 18 | (s & 63) << 12 | (o & 63) << 6 | c & 63) - 65536;
                e[r++] = String.fromCharCode(55296 + (a >> 10)), e[r++] = String.fromCharCode(56320 + (a & 1023))
            } else {
                const s = n[t++],
                    o = n[t++];
                e[r++] = String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | o & 63)
            }
        }
        return e.join("")
    },
    At = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: typeof atob == "function",
        encodeByteArray(n, e) {
            if (!Array.isArray(n)) throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                r = [];
            for (let i = 0; i < n.length; i += 3) {
                const s = n[i],
                    o = i + 1 < n.length,
                    c = o ? n[i + 1] : 0,
                    a = i + 2 < n.length,
                    d = a ? n[i + 2] : 0,
                    u = s >> 2,
                    f = (s & 3) << 4 | c >> 4;
                let g = (c & 15) << 2 | d >> 6,
                    I = d & 63;
                a || (I = 64, o || (g = 64)), r.push(t[u], t[f], t[g], t[I])
            }
            return r.join("")
        },
        encodeString(n, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? btoa(n) : this.encodeByteArray(Ct(n), e)
        },
        decodeString(n, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? atob(n) : bn(this.decodeStringToByteArray(n, e))
        },
        decodeStringToByteArray(n, e) {
            this.init_();
            const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                r = [];
            for (let i = 0; i < n.length;) {
                const s = t[n.charAt(i++)],
                    c = i < n.length ? t[n.charAt(i)] : 0;
                ++i;
                const d = i < n.length ? t[n.charAt(i)] : 64;
                ++i;
                const f = i < n.length ? t[n.charAt(i)] : 64;
                if (++i, s == null || c == null || d == null || f == null) throw new wn;
                const g = s << 2 | c >> 4;
                if (r.push(g), d !== 64) {
                    const I = c << 4 & 240 | d >> 2;
                    if (r.push(I), f !== 64) {
                        const B = d << 6 & 192 | f;
                        r.push(B)
                    }
                }
            }
            return r
        },
        init_() {
            if (!this.byteToCharMap_) {
                this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                for (let n = 0; n < this.ENCODED_VALS.length; n++) this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n), this.charToByteMap_[this.byteToCharMap_[n]] = n, this.byteToCharMapWebSafe_[n] = this.ENCODED_VALS_WEBSAFE.charAt(n), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n, n >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n)
            }
        }
    };
class wn extends Error {
    constructor() {
        super(...arguments), this.name = "DecodeBase64StringError"
    }
}
const En = function(n) {
        const e = Ct(n);
        return At.encodeByteArray(e, !0)
    },
    Pt = function(n) {
        return En(n).replace(/\./g, "")
    },
    Ot = function(n) {
        try {
            return At.decodeString(n, !0)
        } catch (e) {
            console.error("base64Decode failed: ", e)
        }
        return null
    };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tn() {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("Unable to locate global object.")
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sn = () => Tn().__FIREBASE_DEFAULTS__,
    kn = () => {
        if (typeof process > "u" || typeof process.env > "u") return;
        const n = {}.__FIREBASE_DEFAULTS__;
        if (n) return JSON.parse(n)
    },
    Rn = () => {
        if (typeof document > "u") return;
        let n;
        try {
            n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
        } catch {
            return
        }
        const e = n && Ot(n[1]);
        return e && JSON.parse(e)
    },
    Ve = () => {
        try {
            return Sn() || kn() || Rn()
        } catch (n) {
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
            return
        }
    },
    Cn = n => {
        var e, t;
        return (t = (e = Ve()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || t === void 0 ? void 0 : t[n]
    },
    Nt = () => {
        var n;
        return (n = Ve()) === null || n === void 0 ? void 0 : n.config
    },
    Dt = n => {
        var e;
        return (e = Ve()) === null || e === void 0 ? void 0 : e[`_${n}`]
    };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class An {
    constructor() {
        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((e, t) => {
            this.resolve = e, this.reject = t
        })
    }
    wrapCallback(e) {
        return (t, r) => {
            t ? this.reject(t) : this.resolve(r), typeof e == "function" && (this.promise.catch(() => {}), e.length === 1 ? e(t) : e(t, r))
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m() {
    return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : ""
}

function Pn() {
    return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())
}

function On() {
    const n = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
    return typeof n == "object" && n.id !== void 0
}

function Nn() {
    return typeof navigator == "object" && navigator.product === "ReactNative"
}

function Dn() {
    const n = m();
    return n.indexOf("MSIE ") >= 0 || n.indexOf("Trident/") >= 0
}

function Ln() {
    try {
        return typeof indexedDB == "object"
    } catch {
        return !1
    }
}

function Mn() {
    return new Promise((n, e) => {
        try {
            let t = !0;
            const r = "validate-browser-context-for-indexeddb-analytics-module",
                i = self.indexedDB.open(r);
            i.onsuccess = () => {
                i.result.close(), t || self.indexedDB.deleteDatabase(r), n(!0)
            }, i.onupgradeneeded = () => {
                t = !1
            }, i.onerror = () => {
                var s;
                e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || "")
            }
        } catch (t) {
            e(t)
        }
    })
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Un = "FirebaseError";
class N extends Error {
    constructor(e, t, r) {
        super(t), this.code = e, this.customData = r, this.name = Un, Object.setPrototypeOf(this, N.prototype), Error.captureStackTrace && Error.captureStackTrace(this, ee.prototype.create)
    }
}
class ee {
    constructor(e, t, r) {
        this.service = e, this.serviceName = t, this.errors = r
    }
    create(e, ...t) {
        const r = t[0] || {},
            i = `${this.service}/${e}`,
            s = this.errors[e],
            o = s ? xn(s, r) : "Error",
            c = `${this.serviceName}: ${o} (${i}).`;
        return new N(i, c, r)
    }
}

function xn(n, e) {
    return n.replace(Bn, (t, r) => {
        const i = e[r];
        return i != null ? String(i) : `<${r}?>`
    })
}
const Bn = /\{\$([^}]+)}/g;

function Fn(n) {
    for (const e in n)
        if (Object.prototype.hasOwnProperty.call(n, e)) return !1;
    return !0
}

function de(n, e) {
    if (n === e) return !0;
    const t = Object.keys(n),
        r = Object.keys(e);
    for (const i of t) {
        if (!r.includes(i)) return !1;
        const s = n[i],
            o = e[i];
        if (rt(s) && rt(o)) {
            if (!de(s, o)) return !1
        } else if (s !== o) return !1
    }
    for (const i of r)
        if (!t.includes(i)) return !1;
    return !0
}

function rt(n) {
    return n !== null && typeof n == "object"
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(n) {
    const e = [];
    for (const [t, r] of Object.entries(n)) Array.isArray(r) ? r.forEach(i => {
        e.push(encodeURIComponent(t) + "=" + encodeURIComponent(i))
    }) : e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r));
    return e.length ? "&" + e.join("&") : ""
}

function Vn(n, e) {
    const t = new Hn(n, e);
    return t.subscribe.bind(t)
}
class Hn {
    constructor(e, t) {
        this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(() => {
            e(this)
        }).catch(r => {
            this.error(r)
        })
    }
    next(e) {
        this.forEachObserver(t => {
            t.next(e)
        })
    }
    error(e) {
        this.forEachObserver(t => {
            t.error(e)
        }), this.close(e)
    }
    complete() {
        this.forEachObserver(e => {
            e.complete()
        }), this.close()
    }
    subscribe(e, t, r) {
        let i;
        if (e === void 0 && t === void 0 && r === void 0) throw new Error("Missing Observer.");
        $n(e, ["next", "error", "complete"]) ? i = e : i = {
            next: e,
            error: t,
            complete: r
        }, i.next === void 0 && (i.next = Se), i.error === void 0 && (i.error = Se), i.complete === void 0 && (i.complete = Se);
        const s = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then(() => {
            try {
                this.finalError ? i.error(this.finalError) : i.complete()
            } catch {}
        }), this.observers.push(i), s
    }
    unsubscribeOne(e) {
        this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this))
    }
    forEachObserver(e) {
        if (!this.finalized)
            for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e)
    }
    sendOne(e, t) {
        this.task.then(() => {
            if (this.observers !== void 0 && this.observers[e] !== void 0) try {
                t(this.observers[e])
            } catch (r) {
                typeof console < "u" && console.error && console.error(r)
            }
        })
    }
    close(e) {
        this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
            this.observers = void 0, this.onNoObservers = void 0
        }))
    }
}

function $n(n, e) {
    if (typeof n != "object" || n === null) return !1;
    for (const t of e)
        if (t in n && typeof n[t] == "function") return !0;
    return !1
}

function Se() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(n) {
    return n && n._delegate ? n._delegate : n
}
class W {
    constructor(e, t, r) {
        this.name = e, this.instanceFactory = t, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
    }
    setInstantiationMode(e) {
        return this.instantiationMode = e, this
    }
    setMultipleInstances(e) {
        return this.multipleInstances = e, this
    }
    setServiceProps(e) {
        return this.serviceProps = e, this
    }
    setInstanceCreatedCallback(e) {
        return this.onInstanceCreated = e, this
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wn {
    constructor(e, t) {
        this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
    }
    get(e) {
        const t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
            const r = new An;
            if (this.instancesDeferred.set(t, r), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                const i = this.getOrInitializeService({
                    instanceIdentifier: t
                });
                i && r.resolve(i)
            } catch {}
        }
        return this.instancesDeferred.get(t).promise
    }
    getImmediate(e) {
        var t;
        const r = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier),
            i = (t = e == null ? void 0 : e.optional) !== null && t !== void 0 ? t : !1;
        if (this.isInitialized(r) || this.shouldAutoInitialize()) try {
            return this.getOrInitializeService({
                instanceIdentifier: r
            })
        } catch (s) {
            if (i) return null;
            throw s
        } else {
            if (i) return null;
            throw Error(`Service ${this.name} is not available`)
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(e) {
        if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = e, !!this.shouldAutoInitialize()) {
            if (zn(e)) try {
                this.getOrInitializeService({
                    instanceIdentifier: D
                })
            } catch {}
            for (const [t, r] of this.instancesDeferred.entries()) {
                const i = this.normalizeInstanceIdentifier(t);
                try {
                    const s = this.getOrInitializeService({
                        instanceIdentifier: i
                    });
                    r.resolve(s)
                } catch {}
            }
        }
    }
    clearInstance(e = D) {
        this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
    }
    async delete() {
        const e = Array.from(this.instances.values());
        await Promise.all([...e.filter(t => "INTERNAL" in t).map(t => t.INTERNAL.delete()), ...e.filter(t => "_delete" in t).map(t => t._delete())])
    }
    isComponentSet() {
        return this.component != null
    }
    isInitialized(e = D) {
        return this.instances.has(e)
    }
    getOptions(e = D) {
        return this.instancesOptions.get(e) || {}
    }
    initialize(e = {}) {
        const {
            options: t = {}
        } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(r)) throw Error(`${this.name}(${r}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const i = this.getOrInitializeService({
            instanceIdentifier: r,
            options: t
        });
        for (const [s, o] of this.instancesDeferred.entries()) {
            const c = this.normalizeInstanceIdentifier(s);
            r === c && o.resolve(i)
        }
        return i
    }
    onInit(e, t) {
        var r;
        const i = this.normalizeInstanceIdentifier(t),
            s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set;
        s.add(e), this.onInitCallbacks.set(i, s);
        const o = this.instances.get(i);
        return o && e(o, i), () => {
            s.delete(e)
        }
    }
    invokeOnInitCallbacks(e, t) {
        const r = this.onInitCallbacks.get(t);
        if (r)
            for (const i of r) try {
                i(e, t)
            } catch {}
    }
    getOrInitializeService({
        instanceIdentifier: e,
        options: t = {}
    }) {
        let r = this.instances.get(e);
        if (!r && this.component && (r = this.component.instanceFactory(this.container, {
                instanceIdentifier: jn(e),
                options: t
            }), this.instances.set(e, r), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated)) try {
            this.component.onInstanceCreated(this.container, e, r)
        } catch {}
        return r || null
    }
    normalizeInstanceIdentifier(e = D) {
        return this.component ? this.component.multipleInstances ? e : D : e
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    }
}

function jn(n) {
    return n === D ? void 0 : n
}

function zn(n) {
    return n.instantiationMode === "EAGER"
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gn {
    constructor(e) {
        this.name = e, this.providers = new Map
    }
    addComponent(e) {
        const t = this.getProvider(e.name);
        if (t.isComponentSet()) throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
        t.setComponent(e)
    }
    addOrOverwriteComponent(e) {
        this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
    }
    getProvider(e) {
        if (this.providers.has(e)) return this.providers.get(e);
        const t = new Wn(e, this);
        return this.providers.set(e, t), t
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var h;
(function(n) {
    n[n.DEBUG = 0] = "DEBUG", n[n.VERBOSE = 1] = "VERBOSE", n[n.INFO = 2] = "INFO", n[n.WARN = 3] = "WARN", n[n.ERROR = 4] = "ERROR", n[n.SILENT = 5] = "SILENT"
})(h || (h = {}));
const qn = {
        debug: h.DEBUG,
        verbose: h.VERBOSE,
        info: h.INFO,
        warn: h.WARN,
        error: h.ERROR,
        silent: h.SILENT
    },
    Kn = h.INFO,
    Jn = {
        [h.DEBUG]: "log",
        [h.VERBOSE]: "log",
        [h.INFO]: "info",
        [h.WARN]: "warn",
        [h.ERROR]: "error"
    },
    Yn = (n, e, ...t) => {
        if (e < n.logLevel) return;
        const r = new Date().toISOString(),
            i = Jn[e];
        if (i) console[i](`[${r}]  ${n.name}:`, ...t);
        else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)
    };
class Lt {
    constructor(e) {
        this.name = e, this._logLevel = Kn, this._logHandler = Yn, this._userLogHandler = null
    }
    get logLevel() {
        return this._logLevel
    }
    set logLevel(e) {
        if (!(e in h)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
        this._logLevel = e
    }
    setLogLevel(e) {
        this._logLevel = typeof e == "string" ? qn[e] : e
    }
    get logHandler() {
        return this._logHandler
    }
    set logHandler(e) {
        if (typeof e != "function") throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = e
    }
    get userLogHandler() {
        return this._userLogHandler
    }
    set userLogHandler(e) {
        this._userLogHandler = e
    }
    debug(...e) {
        this._userLogHandler && this._userLogHandler(this, h.DEBUG, ...e), this._logHandler(this, h.DEBUG, ...e)
    }
    log(...e) {
        this._userLogHandler && this._userLogHandler(this, h.VERBOSE, ...e), this._logHandler(this, h.VERBOSE, ...e)
    }
    info(...e) {
        this._userLogHandler && this._userLogHandler(this, h.INFO, ...e), this._logHandler(this, h.INFO, ...e)
    }
    warn(...e) {
        this._userLogHandler && this._userLogHandler(this, h.WARN, ...e), this._logHandler(this, h.WARN, ...e)
    }
    error(...e) {
        this._userLogHandler && this._userLogHandler(this, h.ERROR, ...e), this._logHandler(this, h.ERROR, ...e)
    }
}
const Xn = (n, e) => e.some(t => n instanceof t);
let it, st;

function Qn() {
    return it || (it = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}

function Zn() {
    return st || (st = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
const Mt = new WeakMap,
    De = new WeakMap,
    Ut = new WeakMap,
    ke = new WeakMap,
    He = new WeakMap;

function er(n) {
    const e = new Promise((t, r) => {
        const i = () => {
                n.removeEventListener("success", s), n.removeEventListener("error", o)
            },
            s = () => {
                t(P(n.result)), i()
            },
            o = () => {
                r(n.error), i()
            };
        n.addEventListener("success", s), n.addEventListener("error", o)
    });
    return e.then(t => {
        t instanceof IDBCursor && Mt.set(t, n)
    }).catch(() => {}), He.set(e, n), e
}

function tr(n) {
    if (De.has(n)) return;
    const e = new Promise((t, r) => {
        const i = () => {
                n.removeEventListener("complete", s), n.removeEventListener("error", o), n.removeEventListener("abort", o)
            },
            s = () => {
                t(), i()
            },
            o = () => {
                r(n.error || new DOMException("AbortError", "AbortError")), i()
            };
        n.addEventListener("complete", s), n.addEventListener("error", o), n.addEventListener("abort", o)
    });
    De.set(n, e)
}
let Le = {
    get(n, e, t) {
        if (n instanceof IDBTransaction) {
            if (e === "done") return De.get(n);
            if (e === "objectStoreNames") return n.objectStoreNames || Ut.get(n);
            if (e === "store") return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0])
        }
        return P(n[e])
    },
    set(n, e, t) {
        return n[e] = t, !0
    },
    has(n, e) {
        return n instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in n
    }
};

function nr(n) {
    Le = n(Le)
}

function rr(n) {
    return n === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
        const r = n.call(Re(this), e, ...t);
        return Ut.set(r, e.sort ? e.sort() : [e]), P(r)
    } : Zn().includes(n) ? function(...e) {
        return n.apply(Re(this), e), P(Mt.get(this))
    } : function(...e) {
        return P(n.apply(Re(this), e))
    }
}

function ir(n) {
    return typeof n == "function" ? rr(n) : (n instanceof IDBTransaction && tr(n), Xn(n, Qn()) ? new Proxy(n, Le) : n)
}

function P(n) {
    if (n instanceof IDBRequest) return er(n);
    if (ke.has(n)) return ke.get(n);
    const e = ir(n);
    return e !== n && (ke.set(n, e), He.set(e, n)), e
}
const Re = n => He.get(n);

function sr(n, e, {
    blocked: t,
    upgrade: r,
    blocking: i,
    terminated: s
} = {}) {
    const o = indexedDB.open(n, e),
        c = P(o);
    return r && o.addEventListener("upgradeneeded", a => {
        r(P(o.result), a.oldVersion, a.newVersion, P(o.transaction), a)
    }), t && o.addEventListener("blocked", a => t(a.oldVersion, a.newVersion, a)), c.then(a => {
        s && a.addEventListener("close", () => s()), i && a.addEventListener("versionchange", d => i(d.oldVersion, d.newVersion, d))
    }).catch(() => {}), c
}
const or = ["get", "getKey", "getAll", "getAllKeys", "count"],
    ar = ["put", "add", "delete", "clear"],
    Ce = new Map;

function ot(n, e) {
    if (!(n instanceof IDBDatabase && !(e in n) && typeof e == "string")) return;
    if (Ce.get(e)) return Ce.get(e);
    const t = e.replace(/FromIndex$/, ""),
        r = e !== t,
        i = ar.includes(t);
    if (!(t in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || or.includes(t))) return;
    const s = async function(o, ...c) {
        const a = this.transaction(o, i ? "readwrite" : "readonly");
        let d = a.store;
        return r && (d = d.index(c.shift())), (await Promise.all([d[t](...c), i && a.done]))[0]
    };
    return Ce.set(e, s), s
}
nr(n => ({ ...n,
    get: (e, t, r) => ot(e, t) || n.get(e, t, r),
    has: (e, t) => !!ot(e, t) || n.has(e, t)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cr {
    constructor(e) {
        this.container = e
    }
    getPlatformInfoString() {
        return this.container.getProviders().map(t => {
            if (lr(t)) {
                const r = t.getImmediate();
                return `${r.library}/${r.version}`
            } else return null
        }).filter(t => t).join(" ")
    }
}

function lr(n) {
    const e = n.getComponent();
    return (e == null ? void 0 : e.type) === "VERSION"
}
const Me = "@firebase/app",
    at = "0.9.25";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const M = new Lt("@firebase/app"),
    dr = "@firebase/app-compat",
    ur = "@firebase/analytics-compat",
    hr = "@firebase/analytics",
    fr = "@firebase/app-check-compat",
    pr = "@firebase/app-check",
    mr = "@firebase/auth",
    gr = "@firebase/auth-compat",
    _r = "@firebase/database",
    vr = "@firebase/database-compat",
    Ir = "@firebase/functions",
    yr = "@firebase/functions-compat",
    br = "@firebase/installations",
    wr = "@firebase/installations-compat",
    Er = "@firebase/messaging",
    Tr = "@firebase/messaging-compat",
    Sr = "@firebase/performance",
    kr = "@firebase/performance-compat",
    Rr = "@firebase/remote-config",
    Cr = "@firebase/remote-config-compat",
    Ar = "@firebase/storage",
    Pr = "@firebase/storage-compat",
    Or = "@firebase/firestore",
    Nr = "@firebase/firestore-compat",
    Dr = "firebase",
    Lr = "10.7.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ue = "[DEFAULT]",
    Mr = {
        [Me]: "fire-core",
        [dr]: "fire-core-compat",
        [hr]: "fire-analytics",
        [ur]: "fire-analytics-compat",
        [pr]: "fire-app-check",
        [fr]: "fire-app-check-compat",
        [mr]: "fire-auth",
        [gr]: "fire-auth-compat",
        [_r]: "fire-rtdb",
        [vr]: "fire-rtdb-compat",
        [Ir]: "fire-fn",
        [yr]: "fire-fn-compat",
        [br]: "fire-iid",
        [wr]: "fire-iid-compat",
        [Er]: "fire-fcm",
        [Tr]: "fire-fcm-compat",
        [Sr]: "fire-perf",
        [kr]: "fire-perf-compat",
        [Rr]: "fire-rc",
        [Cr]: "fire-rc-compat",
        [Ar]: "fire-gcs",
        [Pr]: "fire-gcs-compat",
        [Or]: "fire-fst",
        [Nr]: "fire-fst-compat",
        "fire-js": "fire-js",
        [Dr]: "fire-js-all"
    };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ue = new Map,
    xe = new Map;

function Ur(n, e) {
    try {
        n.container.addComponent(e)
    } catch (t) {
        M.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`, t)
    }
}

function Y(n) {
    const e = n.name;
    if (xe.has(e)) return M.debug(`There were multiple attempts to register component ${e}.`), !1;
    xe.set(e, n);
    for (const t of ue.values()) Ur(t, n);
    return !0
}

function xt(n, e) {
    const t = n.container.getProvider("heartbeat").getImmediate({
        optional: !0
    });
    return t && t.triggerHeartbeat(), n.container.getProvider(e)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xr = {
        ["no-app"]: "No Firebase App '{$appName}' has been created - call initializeApp() first",
        ["bad-app-name"]: "Illegal App name: '{$appName}",
        ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
        ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
        ["no-options"]: "Need to provide options, when not being deployed to hosting via source.",
        ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        ["invalid-log-argument"]: "First argument to `onLog` must be null or a function.",
        ["idb-open"]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
        ["idb-get"]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
        ["idb-set"]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
        ["idb-delete"]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
    },
    O = new ee("app", "Firebase", xr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Br {
    constructor(e, t, r) {
        this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new W("app", () => this, "PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(e) {
        this.checkDestroyed(), this._automaticDataCollectionEnabled = e
    }
    get name() {
        return this.checkDestroyed(), this._name
    }
    get options() {
        return this.checkDestroyed(), this._options
    }
    get config() {
        return this.checkDestroyed(), this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(e) {
        this._isDeleted = e
    }
    checkDestroyed() {
        if (this.isDeleted) throw O.create("app-deleted", {
            appName: this._name
        })
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const te = Lr;

function Fr(n, e = {}) {
    let t = n;
    typeof e != "object" && (e = {
        name: e
    });
    const r = Object.assign({
            name: Ue,
            automaticDataCollectionEnabled: !1
        }, e),
        i = r.name;
    if (typeof i != "string" || !i) throw O.create("bad-app-name", {
        appName: String(i)
    });
    if (t || (t = Nt()), !t) throw O.create("no-options");
    const s = ue.get(i);
    if (s) {
        if (de(t, s.options) && de(r, s.config)) return s;
        throw O.create("duplicate-app", {
            appName: i
        })
    }
    const o = new Gn(i);
    for (const a of xe.values()) o.addComponent(a);
    const c = new Br(t, r, o);
    return ue.set(i, c), c
}

function Vr(n = Ue) {
    const e = ue.get(n);
    if (!e && n === Ue && Nt()) return Fr();
    if (!e) throw O.create("no-app", {
        appName: n
    });
    return e
}

function V(n, e, t) {
    var r;
    let i = (r = Mr[n]) !== null && r !== void 0 ? r : n;
    t && (i += `-${t}`);
    const s = i.match(/\s|\//),
        o = e.match(/\s|\//);
    if (s || o) {
        const c = [`Unable to register library "${i}" with version "${e}":`];
        s && c.push(`library name "${i}" contains illegal characters (whitespace or "/")`), s && o && c.push("and"), o && c.push(`version name "${e}" contains illegal characters (whitespace or "/")`), M.warn(c.join(" "));
        return
    }
    Y(new W(`${i}-version`, () => ({
        library: i,
        version: e
    }), "VERSION"))
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hr = "firebase-heartbeat-database",
    $r = 1,
    X = "firebase-heartbeat-store";
let Ae = null;

function Bt() {
    return Ae || (Ae = sr(Hr, $r, {
        upgrade: (n, e) => {
            switch (e) {
                case 0:
                    n.createObjectStore(X)
            }
        }
    }).catch(n => {
        throw O.create("idb-open", {
            originalErrorMessage: n.message
        })
    })), Ae
}
async function Wr(n) {
    try {
        return await (await Bt()).transaction(X).objectStore(X).get(Ft(n))
    } catch (e) {
        if (e instanceof N) M.warn(e.message);
        else {
            const t = O.create("idb-get", {
                originalErrorMessage: e == null ? void 0 : e.message
            });
            M.warn(t.message)
        }
    }
}
async function ct(n, e) {
    try {
        const r = (await Bt()).transaction(X, "readwrite");
        await r.objectStore(X).put(e, Ft(n)), await r.done
    } catch (t) {
        if (t instanceof N) M.warn(t.message);
        else {
            const r = O.create("idb-set", {
                originalErrorMessage: t == null ? void 0 : t.message
            });
            M.warn(r.message)
        }
    }
}

function Ft(n) {
    return `${n.name}!${n.options.appId}`
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jr = 1024,
    zr = 30 * 24 * 60 * 60 * 1e3;
class Gr {
    constructor(e) {
        this.container = e, this._heartbeatsCache = null;
        const t = this.container.getProvider("app").getImmediate();
        this._storage = new Kr(t), this._heartbeatsCachePromise = this._storage.read().then(r => (this._heartbeatsCache = r, r))
    }
    async triggerHeartbeat() {
        var e, t;
        const i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
            s = lt();
        if (!(((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null)) && !(this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some(o => o.date === s))) return this._heartbeatsCache.heartbeats.push({
            date: s,
            agent: i
        }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(o => {
            const c = new Date(o.date).valueOf();
            return Date.now() - c <= zr
        }), this._storage.overwrite(this._heartbeatsCache)
    }
    async getHeartbeatsHeader() {
        var e;
        if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, ((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) return "";
        const t = lt(),
            {
                heartbeatsToSend: r,
                unsentEntries: i
            } = qr(this._heartbeatsCache.heartbeats),
            s = Pt(JSON.stringify({
                version: 2,
                heartbeats: r
            }));
        return this._heartbeatsCache.lastSentHeartbeatDate = t, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), s
    }
}

function lt() {
    return new Date().toISOString().substring(0, 10)
}

function qr(n, e = jr) {
    const t = [];
    let r = n.slice();
    for (const i of n) {
        const s = t.find(o => o.agent === i.agent);
        if (s) {
            if (s.dates.push(i.date), dt(t) > e) {
                s.dates.pop();
                break
            }
        } else if (t.push({
                agent: i.agent,
                dates: [i.date]
            }), dt(t) > e) {
            t.pop();
            break
        }
        r = r.slice(1)
    }
    return {
        heartbeatsToSend: t,
        unsentEntries: r
    }
}
class Kr {
    constructor(e) {
        this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    async runIndexedDBEnvironmentCheck() {
        return Ln() ? Mn().then(() => !0).catch(() => !1) : !1
    }
    async read() {
        if (await this._canUseIndexedDBPromise) {
            const t = await Wr(this.app);
            return t != null && t.heartbeats ? t : {
                heartbeats: []
            }
        } else return {
            heartbeats: []
        }
    }
    async overwrite(e) {
        var t;
        if (await this._canUseIndexedDBPromise) {
            const i = await this.read();
            return ct(this.app, {
                lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : i.lastSentHeartbeatDate,
                heartbeats: e.heartbeats
            })
        } else return
    }
    async add(e) {
        var t;
        if (await this._canUseIndexedDBPromise) {
            const i = await this.read();
            return ct(this.app, {
                lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : i.lastSentHeartbeatDate,
                heartbeats: [...i.heartbeats, ...e.heartbeats]
            })
        } else return
    }
}

function dt(n) {
    return Pt(JSON.stringify({
        version: 2,
        heartbeats: n
    })).length
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jr(n) {
    Y(new W("platform-logger", e => new cr(e), "PRIVATE")), Y(new W("heartbeat", e => new Gr(e), "PRIVATE")), V(Me, at, n), V(Me, at, "esm2017"), V("fire-js", "")
}
Jr("");
var Yr = "firebase",
    Xr = "10.7.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
V(Yr, Xr, "app");

function $e(n, e) {
    var t = {};
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(n); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (t[r[i]] = n[r[i]]);
    return t
}

function Vt() {
    return {
        ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    }
}
const Qr = Vt,
    Ht = new ee("auth", "Firebase", Vt());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const he = new Lt("@firebase/auth");

function Zr(n, ...e) {
    he.logLevel <= h.WARN && he.warn(`Auth (${te}): ${n}`, ...e)
}

function oe(n, ...e) {
    he.logLevel <= h.ERROR && he.error(`Auth (${te}): ${n}`, ...e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function w(n, ...e) {
    throw We(n, ...e)
}

function _(n, ...e) {
    return We(n, ...e)
}

function ei(n, e, t) {
    const r = Object.assign(Object.assign({}, Qr()), {
        [e]: t
    });
    return new ee("auth", "Firebase", r).create(e, {
        appName: n.name
    })
}

function We(n, ...e) {
    if (typeof n != "string") {
        const t = e[0],
            r = [...e.slice(1)];
        return r[0] && (r[0].appName = n.name), n._errorFactory.create(t, ...r)
    }
    return Ht.create(n, ...e)
}

function l(n, e, ...t) {
    if (!n) throw We(e, ...t)
}

function y(n) {
    const e = "INTERNAL ASSERTION FAILED: " + n;
    throw oe(e), new Error(e)
}

function E(n, e) {
    n || y(e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Be() {
    var n;
    return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.href) || ""
}

function $t() {
    return ut() === "http:" || ut() === "https:"
}

function ut() {
    var n;
    return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.protocol) || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ti() {
    return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && ($t() || On() || "connection" in navigator) ? navigator.onLine : !0
}

function ni() {
    if (typeof navigator > "u") return null;
    const n = navigator;
    return n.languages && n.languages[0] || n.language || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne {
    constructor(e, t) {
        this.shortDelay = e, this.longDelay = t, E(t > e, "Short delay should be less than long delay!"), this.isMobile = Pn() || Nn()
    }
    get() {
        return ti() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(n, e) {
    E(n.emulator, "Emulator should always be set here");
    const {
        url: t
    } = n.emulator;
    return e ? `${t}${e.startsWith("/")?e.slice(1):e}` : t
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt {
    static initialize(e, t, r) {
        this.fetchImpl = e, t && (this.headersImpl = t), r && (this.responseImpl = r)
    }
    static fetch() {
        if (this.fetchImpl) return this.fetchImpl;
        if (typeof self < "u" && "fetch" in self) return self.fetch;
        if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
        if (typeof fetch < "u") return fetch;
        y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static headers() {
        if (this.headersImpl) return this.headersImpl;
        if (typeof self < "u" && "Headers" in self) return self.Headers;
        if (typeof globalThis < "u" && globalThis.Headers) return globalThis.Headers;
        if (typeof Headers < "u") return Headers;
        y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static response() {
        if (this.responseImpl) return this.responseImpl;
        if (typeof self < "u" && "Response" in self) return self.Response;
        if (typeof globalThis < "u" && globalThis.Response) return globalThis.Response;
        if (typeof Response < "u") return Response;
        y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ri = {
    CREDENTIAL_MISMATCH: "custom-token-mismatch",
    MISSING_CUSTOM_TOKEN: "internal-error",
    INVALID_IDENTIFIER: "invalid-email",
    MISSING_CONTINUE_URI: "internal-error",
    INVALID_PASSWORD: "wrong-password",
    MISSING_PASSWORD: "missing-password",
    INVALID_LOGIN_CREDENTIALS: "invalid-credential",
    EMAIL_EXISTS: "email-already-in-use",
    PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
    INVALID_IDP_RESPONSE: "invalid-credential",
    INVALID_PENDING_TOKEN: "invalid-credential",
    FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
    MISSING_REQ_TYPE: "internal-error",
    EMAIL_NOT_FOUND: "user-not-found",
    RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
    EXPIRED_OOB_CODE: "expired-action-code",
    INVALID_OOB_CODE: "invalid-action-code",
    MISSING_OOB_CODE: "internal-error",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
    INVALID_ID_TOKEN: "invalid-user-token",
    TOKEN_EXPIRED: "user-token-expired",
    USER_NOT_FOUND: "user-token-expired",
    TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
    PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
    INVALID_CODE: "invalid-verification-code",
    INVALID_SESSION_INFO: "invalid-verification-id",
    INVALID_TEMPORARY_PROOF: "invalid-credential",
    MISSING_SESSION_INFO: "missing-verification-id",
    SESSION_EXPIRED: "code-expired",
    MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
    UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
    INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
    ADMIN_ONLY_OPERATION: "admin-restricted-operation",
    INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
    MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
    MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
    MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
    SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
    SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
    BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
    RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
    MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
    INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
    INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
    MISSING_CLIENT_TYPE: "missing-client-type",
    MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
    INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
    INVALID_REQ_TYPE: "invalid-req-type"
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ii = new ne(3e4, 6e4);

function T(n, e) {
    return n.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), {
        tenantId: n.tenantId
    }) : e
}
async function v(n, e, t, r, i = {}) {
    return jt(n, i, async () => {
        let s = {},
            o = {};
        r && (e === "GET" ? o = r : s = {
            body: JSON.stringify(r)
        });
        const c = z(Object.assign({
                key: n.config.apiKey
            }, o)).slice(1),
            a = await n._getAdditionalHeaders();
        return a["Content-Type"] = "application/json", n.languageCode && (a["X-Firebase-Locale"] = n.languageCode), Wt.fetch()(zt(n, n.config.apiHost, t, c), Object.assign({
            method: e,
            headers: a,
            referrerPolicy: "no-referrer"
        }, s))
    })
}
async function jt(n, e, t) {
    n._canInitEmulator = !1;
    const r = Object.assign(Object.assign({}, ri), e);
    try {
        const i = new si(n),
            s = await Promise.race([t(), i.promise]);
        i.clearNetworkTimeout();
        const o = await s.json();
        if ("needConfirmation" in o) throw q(n, "account-exists-with-different-credential", o);
        if (s.ok && !("errorMessage" in o)) return o; {
            const c = s.ok ? o.errorMessage : o.error.message,
                [a, d] = c.split(" : ");
            if (a === "FEDERATED_USER_ID_ALREADY_LINKED") throw q(n, "credential-already-in-use", o);
            if (a === "EMAIL_EXISTS") throw q(n, "email-already-in-use", o);
            if (a === "USER_DISABLED") throw q(n, "user-disabled", o);
            const u = r[a] || a.toLowerCase().replace(/[_\s]+/g, "-");
            if (d) throw ei(n, u, d);
            w(n, u)
        }
    } catch (i) {
        if (i instanceof N) throw i;
        w(n, "network-request-failed", {
            message: String(i)
        })
    }
}
async function _e(n, e, t, r, i = {}) {
    const s = await v(n, e, t, r, i);
    return "mfaPendingCredential" in s && w(n, "multi-factor-auth-required", {
        _serverResponse: s
    }), s
}

function zt(n, e, t, r) {
    const i = `${e}${t}?${r}`;
    return n.config.emulator ? je(n.config, i) : `${n.config.apiScheme}://${i}`
}
class si {
    constructor(e) {
        this.auth = e, this.timer = null, this.promise = new Promise((t, r) => {
            this.timer = setTimeout(() => r(_(this.auth, "network-request-failed")), ii.get())
        })
    }
    clearNetworkTimeout() {
        clearTimeout(this.timer)
    }
}

function q(n, e, t) {
    const r = {
        appName: n.name
    };
    t.email && (r.email = t.email), t.phoneNumber && (r.phoneNumber = t.phoneNumber);
    const i = _(n, e, r);
    return i.customData._tokenResponse = t, i
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(n) {
    return n !== void 0 && n.getResponse !== void 0
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function oi(n) {
    return (await v(n, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ai(n, e) {
    return v(n, "POST", "/v1/accounts:delete", e)
}
async function ci(n, e) {
    return v(n, "POST", "/v1/accounts:lookup", e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(n) {
    if (n) try {
        const e = new Date(Number(n));
        if (!isNaN(e.getTime())) return e.toUTCString()
    } catch {}
}
async function li(n, e = !1) {
    const t = x(n),
        r = await t.getIdToken(e),
        i = ze(r);
    l(i && i.exp && i.auth_time && i.iat, t.auth, "internal-error");
    const s = typeof i.firebase == "object" ? i.firebase : void 0,
        o = s == null ? void 0 : s.sign_in_provider;
    return {
        claims: i,
        token: r,
        authTime: K(Pe(i.auth_time)),
        issuedAtTime: K(Pe(i.iat)),
        expirationTime: K(Pe(i.exp)),
        signInProvider: o || null,
        signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null
    }
}

function Pe(n) {
    return Number(n) * 1e3
}

function ze(n) {
    const [e, t, r] = n.split(".");
    if (e === void 0 || t === void 0 || r === void 0) return oe("JWT malformed, contained fewer than 3 sections"), null;
    try {
        const i = Ot(t);
        return i ? JSON.parse(i) : (oe("Failed to decode base64 JWT payload"), null)
    } catch (i) {
        return oe("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()), null
    }
}

function di(n) {
    const e = ze(n);
    return l(e, "internal-error"), l(typeof e.exp < "u", "internal-error"), l(typeof e.iat < "u", "internal-error"), Number(e.exp) - Number(e.iat)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Q(n, e, t = !1) {
    if (t) return e;
    try {
        return await e
    } catch (r) {
        throw r instanceof N && ui(r) && n.auth.currentUser === n && await n.auth.signOut(), r
    }
}

function ui({
    code: n
}) {
    return n === "auth/user-disabled" || n === "auth/user-token-expired"
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi {
    constructor(e) {
        this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
    }
    _start() {
        this.isRunning || (this.isRunning = !0, this.schedule())
    }
    _stop() {
        this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId))
    }
    getInterval(e) {
        var t;
        if (e) {
            const r = this.errorBackoff;
            return this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4), r
        } else {
            this.errorBackoff = 3e4;
            const i = ((t = this.user.stsTokenManager.expirationTime) !== null && t !== void 0 ? t : 0) - Date.now() - 3e5;
            return Math.max(0, i)
        }
    }
    schedule(e = !1) {
        if (!this.isRunning) return;
        const t = this.getInterval(e);
        this.timerId = setTimeout(async () => {
            await this.iteration()
        }, t)
    }
    async iteration() {
        try {
            await this.user.getIdToken(!0)
        } catch (e) {
            (e == null ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(!0);
            return
        }
        this.schedule()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt {
    constructor(e, t) {
        this.createdAt = e, this.lastLoginAt = t, this._initializeTime()
    }
    _initializeTime() {
        this.lastSignInTime = K(this.lastLoginAt), this.creationTime = K(this.createdAt)
    }
    _copy(e) {
        this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime()
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
        }
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function fe(n) {
    var e;
    const t = n.auth,
        r = await n.getIdToken(),
        i = await Q(n, ci(t, {
            idToken: r
        }));
    l(i == null ? void 0 : i.users.length, t, "internal-error");
    const s = i.users[0];
    n._notifyReloadListener(s);
    const o = !((e = s.providerUserInfo) === null || e === void 0) && e.length ? mi(s.providerUserInfo) : [],
        c = pi(n.providerData, o),
        a = n.isAnonymous,
        d = !(n.email && s.passwordHash) && !(c != null && c.length),
        u = a ? d : !1,
        f = {
            uid: s.localId,
            displayName: s.displayName || null,
            photoURL: s.photoUrl || null,
            email: s.email || null,
            emailVerified: s.emailVerified || !1,
            phoneNumber: s.phoneNumber || null,
            tenantId: s.tenantId || null,
            providerData: c,
            metadata: new Gt(s.createdAt, s.lastLoginAt),
            isAnonymous: u
        };
    Object.assign(n, f)
}
async function fi(n) {
    const e = x(n);
    await fe(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e)
}

function pi(n, e) {
    return [...n.filter(r => !e.some(i => i.providerId === r.providerId)), ...e]
}

function mi(n) {
    return n.map(e => {
        var {
            providerId: t
        } = e, r = $e(e, ["providerId"]);
        return {
            providerId: t,
            uid: r.rawId || "",
            displayName: r.displayName || null,
            email: r.email || null,
            phoneNumber: r.phoneNumber || null,
            photoURL: r.photoUrl || null
        }
    })
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function gi(n, e) {
    const t = await jt(n, {}, async () => {
        const r = z({
                grant_type: "refresh_token",
                refresh_token: e
            }).slice(1),
            {
                tokenApiHost: i,
                apiKey: s
            } = n.config,
            o = zt(n, i, "/v1/token", `key=${s}`),
            c = await n._getAdditionalHeaders();
        return c["Content-Type"] = "application/x-www-form-urlencoded", Wt.fetch()(o, {
            method: "POST",
            headers: c,
            body: r
        })
    });
    return {
        accessToken: t.access_token,
        expiresIn: t.expires_in,
        refreshToken: t.refresh_token
    }
}
async function _i(n, e) {
    return v(n, "POST", "/v2/accounts:revokeToken", T(n, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z {
    constructor() {
        this.refreshToken = null, this.accessToken = null, this.expirationTime = null
    }
    get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4
    }
    updateFromServerResponse(e) {
        l(e.idToken, "internal-error"), l(typeof e.idToken < "u", "internal-error"), l(typeof e.refreshToken < "u", "internal-error");
        const t = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : di(e.idToken);
        this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
    }
    async getToken(e, t = !1) {
        return l(!this.accessToken || this.refreshToken, e, "user-token-expired"), !t && this.accessToken && !this.isExpired ? this.accessToken : this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null
    }
    clearRefreshToken() {
        this.refreshToken = null
    }
    async refresh(e, t) {
        const {
            accessToken: r,
            refreshToken: i,
            expiresIn: s
        } = await gi(e, t);
        this.updateTokensAndExpiration(r, i, Number(s))
    }
    updateTokensAndExpiration(e, t, r) {
        this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + r * 1e3
    }
    static fromJSON(e, t) {
        const {
            refreshToken: r,
            accessToken: i,
            expirationTime: s
        } = t, o = new Z;
        return r && (l(typeof r == "string", "internal-error", {
            appName: e
        }), o.refreshToken = r), i && (l(typeof i == "string", "internal-error", {
            appName: e
        }), o.accessToken = i), s && (l(typeof s == "number", "internal-error", {
            appName: e
        }), o.expirationTime = s), o
    }
    toJSON() {
        return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
        }
    }
    _assign(e) {
        this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime
    }
    _clone() {
        return Object.assign(new Z, this.toJSON())
    }
    _performRefresh() {
        return y("not implemented")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function S(n, e) {
    l(typeof n == "string" || typeof n > "u", "internal-error", {
        appName: e
    })
}
class L {
    constructor(e) {
        var {
            uid: t,
            auth: r,
            stsTokenManager: i
        } = e, s = $e(e, ["uid", "auth", "stsTokenManager"]);
        this.providerId = "firebase", this.proactiveRefresh = new hi(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = r, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = s.displayName || null, this.email = s.email || null, this.emailVerified = s.emailVerified || !1, this.phoneNumber = s.phoneNumber || null, this.photoURL = s.photoURL || null, this.isAnonymous = s.isAnonymous || !1, this.tenantId = s.tenantId || null, this.providerData = s.providerData ? [...s.providerData] : [], this.metadata = new Gt(s.createdAt || void 0, s.lastLoginAt || void 0)
    }
    async getIdToken(e) {
        const t = await Q(this, this.stsTokenManager.getToken(this.auth, e));
        return l(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t
    }
    getIdTokenResult(e) {
        return li(this, e)
    }
    reload() {
        return fi(this)
    }
    _assign(e) {
        this !== e && (l(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map(t => Object.assign({}, t)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager))
    }
    _clone(e) {
        const t = new L(Object.assign(Object.assign({}, this), {
            auth: e,
            stsTokenManager: this.stsTokenManager._clone()
        }));
        return t.metadata._copy(this.metadata), t
    }
    _onReload(e) {
        l(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
    }
    _notifyReloadListener(e) {
        this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
    }
    _startProactiveRefresh() {
        this.proactiveRefresh._start()
    }
    _stopProactiveRefresh() {
        this.proactiveRefresh._stop()
    }
    async _updateTokensIfNecessary(e, t = !1) {
        let r = !1;
        e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), r = !0), t && await fe(this), await this.auth._persistUserIfCurrent(this), r && this.auth._notifyListenersIfCurrent(this)
    }
    async delete() {
        const e = await this.getIdToken();
        return await Q(this, ai(this.auth, {
            idToken: e
        })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
    }
    toJSON() {
        return Object.assign(Object.assign({
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map(e => Object.assign({}, e)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
        })
    }
    get refreshToken() {
        return this.stsTokenManager.refreshToken || ""
    }
    static _fromJSON(e, t) {
        var r, i, s, o, c, a, d, u;
        const f = (r = t.displayName) !== null && r !== void 0 ? r : void 0,
            g = (i = t.email) !== null && i !== void 0 ? i : void 0,
            I = (s = t.phoneNumber) !== null && s !== void 0 ? s : void 0,
            B = (o = t.photoURL) !== null && o !== void 0 ? o : void 0,
            Xe = (c = t.tenantId) !== null && c !== void 0 ? c : void 0,
            be = (a = t._redirectEventId) !== null && a !== void 0 ? a : void 0,
            Qe = (d = t.createdAt) !== null && d !== void 0 ? d : void 0,
            Ze = (u = t.lastLoginAt) !== null && u !== void 0 ? u : void 0,
            {
                uid: we,
                emailVerified: et,
                isAnonymous: tt,
                providerData: Ee,
                stsTokenManager: nt
            } = t;
        l(we && nt, e, "internal-error");
        const In = Z.fromJSON(this.name, nt);
        l(typeof we == "string", e, "internal-error"), S(f, e.name), S(g, e.name), l(typeof et == "boolean", e, "internal-error"), l(typeof tt == "boolean", e, "internal-error"), S(I, e.name), S(B, e.name), S(Xe, e.name), S(be, e.name), S(Qe, e.name), S(Ze, e.name);
        const Te = new L({
            uid: we,
            auth: e,
            email: g,
            emailVerified: et,
            displayName: f,
            isAnonymous: tt,
            photoURL: B,
            phoneNumber: I,
            tenantId: Xe,
            stsTokenManager: In,
            createdAt: Qe,
            lastLoginAt: Ze
        });
        return Ee && Array.isArray(Ee) && (Te.providerData = Ee.map(yn => Object.assign({}, yn))), be && (Te._redirectEventId = be), Te
    }
    static async _fromIdTokenResponse(e, t, r = !1) {
        const i = new Z;
        i.updateFromServerResponse(t);
        const s = new L({
            uid: t.localId,
            auth: e,
            stsTokenManager: i,
            isAnonymous: r
        });
        return await fe(s), s
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft = new Map;

function b(n) {
    E(n instanceof Function, "Expected a class definition");
    let e = ft.get(n);
    return e ? (E(e instanceof n, "Instance stored in cache mismatched with class"), e) : (e = new n, ft.set(n, e), e)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt {
    constructor() {
        this.type = "NONE", this.storage = {}
    }
    async _isAvailable() {
        return !0
    }
    async _set(e, t) {
        this.storage[e] = t
    }
    async _get(e) {
        const t = this.storage[e];
        return t === void 0 ? null : t
    }
    async _remove(e) {
        delete this.storage[e]
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
}
qt.type = "NONE";
const pt = qt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(n, e, t) {
    return `firebase:${n}:${e}:${t}`
}
class H {
    constructor(e, t, r) {
        this.persistence = e, this.auth = t, this.userKey = r;
        const {
            config: i,
            name: s
        } = this.auth;
        this.fullUserKey = ae(this.userKey, i.apiKey, s), this.fullPersistenceKey = ae("persistence", i.apiKey, s), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
    }
    setCurrentUser(e) {
        return this.persistence._set(this.fullUserKey, e.toJSON())
    }
    async getCurrentUser() {
        const e = await this.persistence._get(this.fullUserKey);
        return e ? L._fromJSON(this.auth, e) : null
    }
    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey)
    }
    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
    }
    async setPersistence(e) {
        if (this.persistence === e) return;
        const t = await this.getCurrentUser();
        if (await this.removeCurrentUser(), this.persistence = e, t) return this.setCurrentUser(t)
    }
    delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
    }
    static async create(e, t, r = "authUser") {
        if (!t.length) return new H(b(pt), e, r);
        const i = (await Promise.all(t.map(async d => {
            if (await d._isAvailable()) return d
        }))).filter(d => d);
        let s = i[0] || b(pt);
        const o = ae(r, e.config.apiKey, e.name);
        let c = null;
        for (const d of t) try {
            const u = await d._get(o);
            if (u) {
                const f = L._fromJSON(e, u);
                d !== s && (c = f), s = d;
                break
            }
        } catch {}
        const a = i.filter(d => d._shouldAllowMigration);
        return !s._shouldAllowMigration || !a.length ? new H(s, e, r) : (s = a[0], c && await s._set(o, c.toJSON()), await Promise.all(t.map(async d => {
            if (d !== s) try {
                await d._remove(o)
            } catch {}
        })), new H(s, e, r))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mt(n) {
    const e = n.toLowerCase();
    if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/")) return "Opera";
    if (Yt(e)) return "IEMobile";
    if (e.includes("msie") || e.includes("trident/")) return "IE";
    if (e.includes("edge/")) return "Edge";
    if (Kt(e)) return "Firefox";
    if (e.includes("silk/")) return "Silk";
    if (Qt(e)) return "Blackberry";
    if (Zt(e)) return "Webos";
    if (Ge(e)) return "Safari";
    if ((e.includes("chrome/") || Jt(e)) && !e.includes("edge/")) return "Chrome";
    if (Xt(e)) return "Android"; {
        const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
            r = n.match(t);
        if ((r == null ? void 0 : r.length) === 2) return r[1]
    }
    return "Other"
}

function Kt(n = m()) {
    return /firefox\//i.test(n)
}

function Ge(n = m()) {
    const e = n.toLowerCase();
    return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android")
}

function Jt(n = m()) {
    return /crios\//i.test(n)
}

function Yt(n = m()) {
    return /iemobile/i.test(n)
}

function Xt(n = m()) {
    return /android/i.test(n)
}

function Qt(n = m()) {
    return /blackberry/i.test(n)
}

function Zt(n = m()) {
    return /webos/i.test(n)
}

function ve(n = m()) {
    return /iphone|ipad|ipod/i.test(n) || /macintosh/i.test(n) && /mobile/i.test(n)
}

function vi(n = m()) {
    var e;
    return ve(n) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
}

function Ii() {
    return Dn() && document.documentMode === 10
}

function en(n = m()) {
    return ve(n) || Xt(n) || Zt(n) || Qt(n) || /windows phone/i.test(n) || Yt(n)
}

function yi() {
    try {
        return !!(window && window !== window.top)
    } catch {
        return !1
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tn(n, e = []) {
    let t;
    switch (n) {
        case "Browser":
            t = mt(m());
            break;
        case "Worker":
            t = `${mt(m())}-${n}`;
            break;
        default:
            t = n
    }
    const r = e.length ? e.join(",") : "FirebaseCore-web";
    return `${t}/JsCore/${te}/${r}`
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bi {
    constructor(e) {
        this.auth = e, this.queue = []
    }
    pushCallback(e, t) {
        const r = s => new Promise((o, c) => {
            try {
                const a = e(s);
                o(a)
            } catch (a) {
                c(a)
            }
        });
        r.onAbort = t, this.queue.push(r);
        const i = this.queue.length - 1;
        return () => {
            this.queue[i] = () => Promise.resolve()
        }
    }
    async runMiddleware(e) {
        if (this.auth.currentUser === e) return;
        const t = [];
        try {
            for (const r of this.queue) await r(e), r.onAbort && t.push(r.onAbort)
        } catch (r) {
            t.reverse();
            for (const i of t) try {
                i()
            } catch {}
            throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: r == null ? void 0 : r.message
            })
        }
    }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function wi(n, e = {}) {
    return v(n, "GET", "/v2/passwordPolicy", T(n, e))
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ei = 6;
class Ti {
    constructor(e) {
        var t, r, i, s;
        const o = e.customStrengthOptions;
        this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = (t = o.minPasswordLength) !== null && t !== void 0 ? t : Ei, o.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength), o.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = o.containsLowercaseCharacter), o.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = o.containsUppercaseCharacter), o.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = o.containsNumericCharacter), o.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = o.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = (i = (r = e.allowedNonAlphanumericCharacters) === null || r === void 0 ? void 0 : r.join("")) !== null && i !== void 0 ? i : "", this.forceUpgradeOnSignin = (s = e.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1, this.schemaVersion = e.schemaVersion
    }
    validatePassword(e) {
        var t, r, i, s, o, c;
        const a = {
            isValid: !0,
            passwordPolicy: this
        };
        return this.validatePasswordLengthOptions(e, a), this.validatePasswordCharacterOptions(e, a), a.isValid && (a.isValid = (t = a.meetsMinPasswordLength) !== null && t !== void 0 ? t : !0), a.isValid && (a.isValid = (r = a.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0), a.isValid && (a.isValid = (i = a.containsLowercaseLetter) !== null && i !== void 0 ? i : !0), a.isValid && (a.isValid = (s = a.containsUppercaseLetter) !== null && s !== void 0 ? s : !0), a.isValid && (a.isValid = (o = a.containsNumericCharacter) !== null && o !== void 0 ? o : !0), a.isValid && (a.isValid = (c = a.containsNonAlphanumericCharacter) !== null && c !== void 0 ? c : !0), a
    }
    validatePasswordLengthOptions(e, t) {
        const r = this.customStrengthOptions.minPasswordLength,
            i = this.customStrengthOptions.maxPasswordLength;
        r && (t.meetsMinPasswordLength = e.length >= r), i && (t.meetsMaxPasswordLength = e.length <= i)
    }
    validatePasswordCharacterOptions(e, t) {
        this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
        let r;
        for (let i = 0; i < e.length; i++) r = e.charAt(i), this.updatePasswordCharacterOptionsStatuses(t, r >= "a" && r <= "z", r >= "A" && r <= "Z", r >= "0" && r <= "9", this.allowedNonAlphanumericCharacters.includes(r))
    }
    updatePasswordCharacterOptionsStatuses(e, t, r, i, s) {
        this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = i)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = s))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si {
    constructor(e, t, r, i) {
        this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = r, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new gt(this), this.idTokenSubscription = new gt(this), this.beforeStateQueue = new bi(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Ht, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
            appVerificationDisabledForTesting: !1
        }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion
    }
    _initializeWithPersistence(e, t) {
        return t && (this._popupRedirectResolver = b(t)), this._initializationPromise = this.queue(async () => {
            var r, i;
            if (!this._deleted && (this.persistenceManager = await H.create(this, e), !this._deleted)) {
                if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively) try {
                    await this._popupRedirectResolver._initialize(this)
                } catch {}
                await this.initializeCurrentUser(t), this.lastNotifiedUid = ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null, !this._deleted && (this._isInitialized = !0)
            }
        }), this._initializationPromise
    }
    async _onStorageEvent() {
        if (this._deleted) return;
        const e = await this.assertedPersistence.getCurrentUser();
        if (!(!this.currentUser && !e)) {
            if (this.currentUser && e && this.currentUser.uid === e.uid) {
                this._currentUser._assign(e), await this.currentUser.getIdToken();
                return
            }
            await this._updateCurrentUser(e, !0)
        }
    }
    async initializeCurrentUser(e) {
        var t;
        const r = await this.assertedPersistence.getCurrentUser();
        let i = r,
            s = !1;
        if (e && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const o = (t = this.redirectUser) === null || t === void 0 ? void 0 : t._redirectEventId,
                c = i == null ? void 0 : i._redirectEventId,
                a = await this.tryRedirectSignIn(e);
            (!o || o === c) && (a != null && a.user) && (i = a.user, s = !0)
        }
        if (!i) return this.directlySetCurrentUser(null);
        if (!i._redirectEventId) {
            if (s) try {
                await this.beforeStateQueue.runMiddleware(i)
            } catch (o) {
                i = r, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(o))
            }
            return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null)
        }
        return l(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i)
    }
    async tryRedirectSignIn(e) {
        let t = null;
        try {
            t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
        } catch {
            await this._setRedirectUser(null)
        }
        return t
    }
    async reloadAndSetCurrentUserOrClear(e) {
        try {
            await fe(e)
        } catch (t) {
            if ((t == null ? void 0 : t.code) !== "auth/network-request-failed") return this.directlySetCurrentUser(null)
        }
        return this.directlySetCurrentUser(e)
    }
    useDeviceLanguage() {
        this.languageCode = ni()
    }
    async _delete() {
        this._deleted = !0
    }
    async updateCurrentUser(e) {
        const t = e ? x(e) : null;
        return t && l(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(t && t._clone(this))
    }
    async _updateCurrentUser(e, t = !1) {
        if (!this._deleted) return e && l(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
            await this.directlySetCurrentUser(e), this.notifyAuthListeners()
        })
    }
    async signOut() {
        return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
    }
    setPersistence(e) {
        return this.queue(async () => {
            await this.assertedPersistence.setPersistence(b(e))
        })
    }
    _getRecaptchaConfig() {
        return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
    }
    async validatePassword(e) {
        this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
        const t = this._getPasswordPolicyInternal();
        return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : t.validatePassword(e)
    }
    _getPasswordPolicyInternal() {
        return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]
    }
    async _updatePasswordPolicy() {
        const e = await wi(this),
            t = new Ti(e);
        this.tenantId === null ? this._projectPasswordPolicy = t : this._tenantPasswordPolicies[this.tenantId] = t
    }
    _getPersistence() {
        return this.assertedPersistence.persistence.type
    }
    _updateErrorMap(e) {
        this._errorFactory = new ee("auth", "Firebase", e())
    }
    onAuthStateChanged(e, t, r) {
        return this.registerStateListener(this.authStateSubscription, e, t, r)
    }
    beforeAuthStateChanged(e, t) {
        return this.beforeStateQueue.pushCallback(e, t)
    }
    onIdTokenChanged(e, t, r) {
        return this.registerStateListener(this.idTokenSubscription, e, t, r)
    }
    authStateReady() {
        return new Promise((e, t) => {
            if (this.currentUser) e();
            else {
                const r = this.onAuthStateChanged(() => {
                    r(), e()
                }, t)
            }
        })
    }
    async revokeAccessToken(e) {
        if (this.currentUser) {
            const t = await this.currentUser.getIdToken(),
                r = {
                    providerId: "apple.com",
                    tokenType: "ACCESS_TOKEN",
                    token: e,
                    idToken: t
                };
            this.tenantId != null && (r.tenantId = this.tenantId), await _i(this, r)
        }
    }
    toJSON() {
        var e;
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
        }
    }
    async _setRedirectUser(e, t) {
        const r = await this.getOrInitRedirectPersistenceManager(t);
        return e === null ? r.removeCurrentUser() : r.setCurrentUser(e)
    }
    async getOrInitRedirectPersistenceManager(e) {
        if (!this.redirectPersistenceManager) {
            const t = e && b(e) || this._popupRedirectResolver;
            l(t, this, "argument-error"), this.redirectPersistenceManager = await H.create(this, [b(t._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
        }
        return this.redirectPersistenceManager
    }
    async _redirectUserForId(e) {
        var t, r;
        return this._isInitialized && await this.queue(async () => {}), ((t = this._currentUser) === null || t === void 0 ? void 0 : t._redirectEventId) === e ? this._currentUser : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e ? this.redirectUser : null
    }
    async _persistUserIfCurrent(e) {
        if (e === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(e))
    }
    _notifyListenersIfCurrent(e) {
        e === this.currentUser && this.notifyAuthListeners()
    }
    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
    }
    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
    }
    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
    }
    get _currentUser() {
        return this.currentUser
    }
    notifyAuthListeners() {
        var e, t;
        if (!this._isInitialized) return;
        this.idTokenSubscription.next(this.currentUser);
        const r = (t = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && t !== void 0 ? t : null;
        this.lastNotifiedUid !== r && (this.lastNotifiedUid = r, this.authStateSubscription.next(this.currentUser))
    }
    registerStateListener(e, t, r, i) {
        if (this._deleted) return () => {};
        const s = typeof t == "function" ? t : t.next.bind(t);
        let o = !1;
        const c = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        if (l(c, this, "internal-error"), c.then(() => {
                o || s(this.currentUser)
            }), typeof t == "function") {
            const a = e.addObserver(t, r, i);
            return () => {
                o = !0, a()
            }
        } else {
            const a = e.addObserver(t);
            return () => {
                o = !0, a()
            }
        }
    }
    async directlySetCurrentUser(e) {
        this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
    }
    queue(e) {
        return this.operations = this.operations.then(e, e), this.operations
    }
    get assertedPersistence() {
        return l(this.persistenceManager, this, "internal-error"), this.persistenceManager
    }
    _logFramework(e) {
        !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = tn(this.config.clientPlatform, this._getFrameworks()))
    }
    _getFrameworks() {
        return this.frameworks
    }
    async _getAdditionalHeaders() {
        var e;
        const t = {
            ["X-Client-Version"]: this.clientVersion
        };
        this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId);
        const r = await ((e = this.heartbeatServiceProvider.getImmediate({
            optional: !0
        })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader());
        r && (t["X-Firebase-Client"] = r);
        const i = await this._getAppCheckToken();
        return i && (t["X-Firebase-AppCheck"] = i), t
    }
    async _getAppCheckToken() {
        var e;
        const t = await ((e = this.appCheckServiceProvider.getImmediate({
            optional: !0
        })) === null || e === void 0 ? void 0 : e.getToken());
        return t != null && t.error && Zr(`Error while retrieving App Check token: ${t.error}`), t == null ? void 0 : t.token
    }
}

function G(n) {
    return x(n)
}
class gt {
    constructor(e) {
        this.auth = e, this.observer = null, this.addObserver = Vn(t => this.observer = t)
    }
    get next() {
        return l(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ki() {
    var n, e;
    return (e = (n = document.getElementsByTagName("head")) === null || n === void 0 ? void 0 : n[0]) !== null && e !== void 0 ? e : document
}

function nn(n) {
    return new Promise((e, t) => {
        const r = document.createElement("script");
        r.setAttribute("src", n), r.onload = e, r.onerror = i => {
            const s = _("internal-error");
            s.customData = i, t(s)
        }, r.type = "text/javascript", r.charset = "UTF-8", ki().appendChild(r)
    })
}

function rn(n) {
    return `__${n}${Math.floor(Math.random()*1e6)}`
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ri(n, e) {
    const t = xt(n, "auth");
    if (t.isInitialized()) {
        const i = t.getImmediate(),
            s = t.getOptions();
        if (de(s, e ? ? {})) return i;
        w(i, "already-initialized")
    }
    return t.initialize({
        options: e
    })
}

function Ci(n, e) {
    const t = (e == null ? void 0 : e.persistence) || [],
        r = (Array.isArray(t) ? t : [t]).map(b);
    e != null && e.errorMap && n._updateErrorMap(e.errorMap), n._initializeWithPersistence(r, e == null ? void 0 : e.popupRedirectResolver)
}

function Ai(n, e, t) {
    const r = G(n);
    l(r._canInitEmulator, r, "emulator-config-failed"), l(/^https?:\/\//.test(e), r, "invalid-emulator-scheme");
    const i = !!(t != null && t.disableWarnings),
        s = sn(e),
        {
            host: o,
            port: c
        } = Pi(e),
        a = c === null ? "" : `:${c}`;
    r.config.emulator = {
        url: `${s}//${o}${a}/`
    }, r.settings.appVerificationDisabledForTesting = !0, r.emulatorConfig = Object.freeze({
        host: o,
        port: c,
        protocol: s.replace(":", ""),
        options: Object.freeze({
            disableWarnings: i
        })
    }), i || Oi()
}

function sn(n) {
    const e = n.indexOf(":");
    return e < 0 ? "" : n.substr(0, e + 1)
}

function Pi(n) {
    const e = sn(n),
        t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
    if (!t) return {
        host: "",
        port: null
    };
    const r = t[2].split("@").pop() || "",
        i = /^(\[[^\]]+\])(:|$)/.exec(r);
    if (i) {
        const s = i[1];
        return {
            host: s,
            port: _t(r.substr(s.length + 1))
        }
    } else {
        const [s, o] = r.split(":");
        return {
            host: s,
            port: _t(o)
        }
    }
}

function _t(n) {
    if (!n) return null;
    const e = Number(n);
    return isNaN(e) ? null : e
}

function Oi() {
    function n() {
        const e = document.createElement("p"),
            t = e.style;
        e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e)
    }
    typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", n) : n())
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe {
    constructor(e, t) {
        this.providerId = e, this.signInMethod = t
    }
    toJSON() {
        return y("not implemented")
    }
    _getIdTokenResponse(e) {
        return y("not implemented")
    }
    _linkToIdToken(e, t) {
        return y("not implemented")
    }
    _getReauthenticationResolver(e) {
        return y("not implemented")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $(n, e) {
    return _e(n, "POST", "/v1/accounts:signInWithIdp", T(n, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ni = "http://localhost";
class U extends qe {
    constructor() {
        super(...arguments), this.pendingToken = null
    }
    static _fromParams(e) {
        const t = new U(e.providerId, e.signInMethod);
        return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : w("argument-error"), t
    }
    toJSON() {
        return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
        }
    }
    static fromJSON(e) {
        const t = typeof e == "string" ? JSON.parse(e) : e,
            {
                providerId: r,
                signInMethod: i
            } = t,
            s = $e(t, ["providerId", "signInMethod"]);
        if (!r || !i) return null;
        const o = new U(r, i);
        return o.idToken = s.idToken || void 0, o.accessToken = s.accessToken || void 0, o.secret = s.secret, o.nonce = s.nonce, o.pendingToken = s.pendingToken || null, o
    }
    _getIdTokenResponse(e) {
        const t = this.buildRequest();
        return $(e, t)
    }
    _linkToIdToken(e, t) {
        const r = this.buildRequest();
        return r.idToken = t, $(e, r)
    }
    _getReauthenticationResolver(e) {
        const t = this.buildRequest();
        return t.autoCreate = !1, $(e, t)
    }
    buildRequest() {
        const e = {
            requestUri: Ni,
            returnSecureToken: !0
        };
        if (this.pendingToken) e.pendingToken = this.pendingToken;
        else {
            const t = {};
            this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = z(t)
        }
        return e
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Di(n, e) {
    return v(n, "POST", "/v1/accounts:sendVerificationCode", T(n, e))
}
async function Li(n, e) {
    return _e(n, "POST", "/v1/accounts:signInWithPhoneNumber", T(n, e))
}
async function Mi(n, e) {
    const t = await _e(n, "POST", "/v1/accounts:signInWithPhoneNumber", T(n, e));
    if (t.temporaryProof) throw q(n, "account-exists-with-different-credential", t);
    return t
}
const Ui = {
    USER_NOT_FOUND: "user-not-found"
};
async function xi(n, e) {
    const t = Object.assign(Object.assign({}, e), {
        operation: "REAUTH"
    });
    return _e(n, "POST", "/v1/accounts:signInWithPhoneNumber", T(n, t), Ui)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J extends qe {
    constructor(e) {
        super("phone", "phone"), this.params = e
    }
    static _fromVerification(e, t) {
        return new J({
            verificationId: e,
            verificationCode: t
        })
    }
    static _fromTokenResponse(e, t) {
        return new J({
            phoneNumber: e,
            temporaryProof: t
        })
    }
    _getIdTokenResponse(e) {
        return Li(e, this._makeVerificationRequest())
    }
    _linkToIdToken(e, t) {
        return Mi(e, Object.assign({
            idToken: t
        }, this._makeVerificationRequest()))
    }
    _getReauthenticationResolver(e) {
        return xi(e, this._makeVerificationRequest())
    }
    _makeVerificationRequest() {
        const {
            temporaryProof: e,
            phoneNumber: t,
            verificationId: r,
            verificationCode: i
        } = this.params;
        return e && t ? {
            temporaryProof: e,
            phoneNumber: t
        } : {
            sessionInfo: r,
            code: i
        }
    }
    toJSON() {
        const e = {
            providerId: this.providerId
        };
        return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (e.verificationCode = this.params.verificationCode), this.params.verificationId && (e.verificationId = this.params.verificationId), e
    }
    static fromJSON(e) {
        typeof e == "string" && (e = JSON.parse(e));
        const {
            verificationId: t,
            verificationCode: r,
            phoneNumber: i,
            temporaryProof: s
        } = e;
        return !r && !t && !i && !s ? null : new J({
            verificationId: t,
            verificationCode: r,
            phoneNumber: i,
            temporaryProof: s
        })
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class on {
    constructor(e) {
        this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {}
    }
    setDefaultLanguage(e) {
        this.defaultLanguageCode = e
    }
    setCustomParameters(e) {
        return this.customParameters = e, this
    }
    getCustomParameters() {
        return this.customParameters
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re extends on {
    constructor() {
        super(...arguments), this.scopes = []
    }
    addScope(e) {
        return this.scopes.includes(e) || this.scopes.push(e), this
    }
    getScopes() {
        return [...this.scopes]
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k extends re {
    constructor() {
        super("facebook.com")
    }
    static credential(e) {
        return U._fromParams({
            providerId: k.PROVIDER_ID,
            signInMethod: k.FACEBOOK_SIGN_IN_METHOD,
            accessToken: e
        })
    }
    static credentialFromResult(e) {
        return k.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return k.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
        try {
            return k.credential(e.oauthAccessToken)
        } catch {
            return null
        }
    }
}
k.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
k.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R extends re {
    constructor() {
        super("google.com"), this.addScope("profile")
    }
    static credential(e, t) {
        return U._fromParams({
            providerId: R.PROVIDER_ID,
            signInMethod: R.GOOGLE_SIGN_IN_METHOD,
            idToken: e,
            accessToken: t
        })
    }
    static credentialFromResult(e) {
        return R.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return R.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e) return null;
        const {
            oauthIdToken: t,
            oauthAccessToken: r
        } = e;
        if (!t && !r) return null;
        try {
            return R.credential(t, r)
        } catch {
            return null
        }
    }
}
R.GOOGLE_SIGN_IN_METHOD = "google.com";
R.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C extends re {
    constructor() {
        super("github.com")
    }
    static credential(e) {
        return U._fromParams({
            providerId: C.PROVIDER_ID,
            signInMethod: C.GITHUB_SIGN_IN_METHOD,
            accessToken: e
        })
    }
    static credentialFromResult(e) {
        return C.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return C.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
        try {
            return C.credential(e.oauthAccessToken)
        } catch {
            return null
        }
    }
}
C.GITHUB_SIGN_IN_METHOD = "github.com";
C.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A extends re {
    constructor() {
        super("twitter.com")
    }
    static credential(e, t) {
        return U._fromParams({
            providerId: A.PROVIDER_ID,
            signInMethod: A.TWITTER_SIGN_IN_METHOD,
            oauthToken: e,
            oauthTokenSecret: t
        })
    }
    static credentialFromResult(e) {
        return A.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return A.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e) return null;
        const {
            oauthAccessToken: t,
            oauthTokenSecret: r
        } = e;
        if (!t || !r) return null;
        try {
            return A.credential(t, r)
        } catch {
            return null
        }
    }
}
A.TWITTER_SIGN_IN_METHOD = "twitter.com";
A.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j {
    constructor(e) {
        this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType
    }
    static async _fromIdTokenResponse(e, t, r, i = !1) {
        const s = await L._fromIdTokenResponse(e, r, i),
            o = vt(r);
        return new j({
            user: s,
            providerId: o,
            _tokenResponse: r,
            operationType: t
        })
    }
    static async _forOperation(e, t, r) {
        await e._updateTokensIfNecessary(r, !0);
        const i = vt(r);
        return new j({
            user: e,
            providerId: i,
            _tokenResponse: r,
            operationType: t
        })
    }
}

function vt(n) {
    return n.providerId ? n.providerId : "phoneNumber" in n ? "phone" : null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe extends N {
    constructor(e, t, r, i) {
        var s;
        super(t.code, t.message), this.operationType = r, this.user = i, Object.setPrototypeOf(this, pe.prototype), this.customData = {
            appName: e.name,
            tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
            _serverResponse: t.customData._serverResponse,
            operationType: r
        }
    }
    static _fromErrorAndOperation(e, t, r, i) {
        return new pe(e, t, r, i)
    }
}

function an(n, e, t, r) {
    return (e === "reauthenticate" ? t._getReauthenticationResolver(n) : t._getIdTokenResponse(n)).catch(s => {
        throw s.code === "auth/multi-factor-auth-required" ? pe._fromErrorAndOperation(n, s, e, r) : s
    })
}
async function Bi(n, e, t = !1) {
    const r = await Q(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
    return j._forOperation(n, "link", r)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Fi(n, e, t = !1) {
    const {
        auth: r
    } = n, i = "reauthenticate";
    try {
        const s = await Q(n, an(r, i, e, n), t);
        l(s.idToken, r, "internal-error");
        const o = ze(s.idToken);
        l(o, r, "internal-error");
        const {
            sub: c
        } = o;
        return l(n.uid === c, r, "user-mismatch"), j._forOperation(n, i, s)
    } catch (s) {
        throw (s == null ? void 0 : s.code) === "auth/user-not-found" && w(r, "user-mismatch"), s
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function cn(n, e, t = !1) {
    const r = "signIn",
        i = await an(n, r, e),
        s = await j._fromIdTokenResponse(n, r, i);
    return t || await n._updateCurrentUser(s.user), s
}
async function Vi(n, e) {
    return cn(G(n), e)
}

function Hi(n, e, t, r) {
    return x(n).onIdTokenChanged(e, t, r)
}

function $i(n, e, t) {
    return x(n).beforeAuthStateChanged(e, t)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wi(n, e) {
    return v(n, "POST", "/v2/accounts/mfaEnrollment:start", T(n, e))
}
const me = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln {
    constructor(e, t) {
        this.storageRetriever = e, this.type = t
    }
    _isAvailable() {
        try {
            return this.storage ? (this.storage.setItem(me, "1"), this.storage.removeItem(me), Promise.resolve(!0)) : Promise.resolve(!1)
        } catch {
            return Promise.resolve(!1)
        }
    }
    _set(e, t) {
        return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve()
    }
    _get(e) {
        const t = this.storage.getItem(e);
        return Promise.resolve(t ? JSON.parse(t) : null)
    }
    _remove(e) {
        return this.storage.removeItem(e), Promise.resolve()
    }
    get storage() {
        return this.storageRetriever()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ji() {
    const n = m();
    return Ge(n) || ve(n)
}
const zi = 1e3,
    Gi = 10;
class dn extends ln {
    constructor() {
        super(() => window.localStorage, "LOCAL"), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = ji() && yi(), this.fallbackToPolling = en(), this._shouldAllowMigration = !0
    }
    forAllChangedKeys(e) {
        for (const t of Object.keys(this.listeners)) {
            const r = this.storage.getItem(t),
                i = this.localCache[t];
            r !== i && e(t, i, r)
        }
    }
    onStorageEvent(e, t = !1) {
        if (!e.key) {
            this.forAllChangedKeys((o, c, a) => {
                this.notifyListeners(o, a)
            });
            return
        }
        const r = e.key;
        if (t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
            const o = this.storage.getItem(r);
            if (e.newValue !== o) e.newValue !== null ? this.storage.setItem(r, e.newValue) : this.storage.removeItem(r);
            else if (this.localCache[r] === e.newValue && !t) return
        }
        const i = () => {
                const o = this.storage.getItem(r);
                !t && this.localCache[r] === o || this.notifyListeners(r, o)
            },
            s = this.storage.getItem(r);
        Ii() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, Gi) : i()
    }
    notifyListeners(e, t) {
        this.localCache[e] = t;
        const r = this.listeners[e];
        if (r)
            for (const i of Array.from(r)) i(t && JSON.parse(t))
    }
    startPolling() {
        this.stopPolling(), this.pollTimer = setInterval(() => {
            this.forAllChangedKeys((e, t, r) => {
                this.onStorageEvent(new StorageEvent("storage", {
                    key: e,
                    oldValue: t,
                    newValue: r
                }), !0)
            })
        }, zi)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
    }
    attachListener() {
        window.addEventListener("storage", this.boundEventHandler)
    }
    detachListener() {
        window.removeEventListener("storage", this.boundEventHandler)
    }
    _addListener(e, t) {
        Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = new Set, this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t)
    }
    _removeListener(e, t) {
        this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling())
    }
    async _set(e, t) {
        await super._set(e, t), this.localCache[e] = JSON.stringify(t)
    }
    async _get(e) {
        const t = await super._get(e);
        return this.localCache[e] = JSON.stringify(t), t
    }
    async _remove(e) {
        await super._remove(e), delete this.localCache[e]
    }
}
dn.type = "LOCAL";
const qi = dn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class un extends ln {
    constructor() {
        super(() => window.sessionStorage, "SESSION")
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
}
un.type = "SESSION";
const hn = un;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ki(n) {
    return Promise.all(n.map(async e => {
        try {
            return {
                fulfilled: !0,
                value: await e
            }
        } catch (t) {
            return {
                fulfilled: !1,
                reason: t
            }
        }
    }))
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie {
    constructor(e) {
        this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
    }
    static _getInstance(e) {
        const t = this.receivers.find(i => i.isListeningto(e));
        if (t) return t;
        const r = new Ie(e);
        return this.receivers.push(r), r
    }
    isListeningto(e) {
        return this.eventTarget === e
    }
    async handleEvent(e) {
        const t = e,
            {
                eventId: r,
                eventType: i,
                data: s
            } = t.data,
            o = this.handlersMap[i];
        if (!(o != null && o.size)) return;
        t.ports[0].postMessage({
            status: "ack",
            eventId: r,
            eventType: i
        });
        const c = Array.from(o).map(async d => d(t.origin, s)),
            a = await Ki(c);
        t.ports[0].postMessage({
            status: "done",
            eventId: r,
            eventType: i,
            response: a
        })
    }
    _subscribe(e, t) {
        Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = new Set), this.handlersMap[e].add(t)
    }
    _unsubscribe(e, t) {
        this.handlersMap[e] && t && this.handlersMap[e].delete(t), (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler)
    }
}
Ie.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ke(n = "", e = 10) {
    let t = "";
    for (let r = 0; r < e; r++) t += Math.floor(Math.random() * 10);
    return n + t
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji {
    constructor(e) {
        this.target = e, this.handlers = new Set
    }
    removeMessageHandler(e) {
        e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e)
    }
    async _send(e, t, r = 50) {
        const i = typeof MessageChannel < "u" ? new MessageChannel : null;
        if (!i) throw new Error("connection_unavailable");
        let s, o;
        return new Promise((c, a) => {
            const d = Ke("", 20);
            i.port1.start();
            const u = setTimeout(() => {
                a(new Error("unsupported_event"))
            }, r);
            o = {
                messageChannel: i,
                onMessage(f) {
                    const g = f;
                    if (g.data.eventId === d) switch (g.data.status) {
                        case "ack":
                            clearTimeout(u), s = setTimeout(() => {
                                a(new Error("timeout"))
                            }, 3e3);
                            break;
                        case "done":
                            clearTimeout(s), c(g.data.response);
                            break;
                        default:
                            clearTimeout(u), clearTimeout(s), a(new Error("invalid_response"));
                            break
                    }
                }
            }, this.handlers.add(o), i.port1.addEventListener("message", o.onMessage), this.target.postMessage({
                eventType: e,
                eventId: d,
                data: t
            }, [i.port2])
        }).finally(() => {
            o && this.removeMessageHandler(o)
        })
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p() {
    return window
}

function Yi(n) {
    p().location.href = n
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Je() {
    return typeof p().WorkerGlobalScope < "u" && typeof p().importScripts == "function"
}
async function Xi() {
    if (!(navigator != null && navigator.serviceWorker)) return null;
    try {
        return (await navigator.serviceWorker.ready).active
    } catch {
        return null
    }
}

function Qi() {
    var n;
    return ((n = navigator == null ? void 0 : navigator.serviceWorker) === null || n === void 0 ? void 0 : n.controller) || null
}

function Zi() {
    return Je() ? self : null
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fn = "firebaseLocalStorageDb",
    es = 1,
    ge = "firebaseLocalStorage",
    pn = "fbase_key";
class ie {
    constructor(e) {
        this.request = e
    }
    toPromise() {
        return new Promise((e, t) => {
            this.request.addEventListener("success", () => {
                e(this.request.result)
            }), this.request.addEventListener("error", () => {
                t(this.request.error)
            })
        })
    }
}

function ye(n, e) {
    return n.transaction([ge], e ? "readwrite" : "readonly").objectStore(ge)
}

function ts() {
    const n = indexedDB.deleteDatabase(fn);
    return new ie(n).toPromise()
}

function Fe() {
    const n = indexedDB.open(fn, es);
    return new Promise((e, t) => {
        n.addEventListener("error", () => {
            t(n.error)
        }), n.addEventListener("upgradeneeded", () => {
            const r = n.result;
            try {
                r.createObjectStore(ge, {
                    keyPath: pn
                })
            } catch (i) {
                t(i)
            }
        }), n.addEventListener("success", async () => {
            const r = n.result;
            r.objectStoreNames.contains(ge) ? e(r) : (r.close(), await ts(), e(await Fe()))
        })
    })
}
async function It(n, e, t) {
    const r = ye(n, !0).put({
        [pn]: e,
        value: t
    });
    return new ie(r).toPromise()
}
async function ns(n, e) {
    const t = ye(n, !1).get(e),
        r = await new ie(t).toPromise();
    return r === void 0 ? null : r.value
}

function yt(n, e) {
    const t = ye(n, !0).delete(e);
    return new ie(t).toPromise()
}
const rs = 800,
    is = 3;
class mn {
    constructor() {
        this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {})
    }
    async _openDb() {
        return this.db ? this.db : (this.db = await Fe(), this.db)
    }
    async _withRetries(e) {
        let t = 0;
        for (;;) try {
            const r = await this._openDb();
            return await e(r)
        } catch (r) {
            if (t++ > is) throw r;
            this.db && (this.db.close(), this.db = void 0)
        }
    }
    async initializeServiceWorkerMessaging() {
        return Je() ? this.initializeReceiver() : this.initializeSender()
    }
    async initializeReceiver() {
        this.receiver = Ie._getInstance(Zi()), this.receiver._subscribe("keyChanged", async (e, t) => ({
            keyProcessed: (await this._poll()).includes(t.key)
        })), this.receiver._subscribe("ping", async (e, t) => ["keyChanged"])
    }
    async initializeSender() {
        var e, t;
        if (this.activeServiceWorker = await Xi(), !this.activeServiceWorker) return;
        this.sender = new Ji(this.activeServiceWorker);
        const r = await this.sender._send("ping", {}, 800);
        r && !((e = r[0]) === null || e === void 0) && e.fulfilled && !((t = r[0]) === null || t === void 0) && t.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0)
    }
    async notifyServiceWorker(e) {
        if (!(!this.sender || !this.activeServiceWorker || Qi() !== this.activeServiceWorker)) try {
            await this.sender._send("keyChanged", {
                key: e
            }, this.serviceWorkerReceiverAvailable ? 800 : 50)
        } catch {}
    }
    async _isAvailable() {
        try {
            if (!indexedDB) return !1;
            const e = await Fe();
            return await It(e, me, "1"), await yt(e, me), !0
        } catch {}
        return !1
    }
    async _withPendingWrite(e) {
        this.pendingWrites++;
        try {
            await e()
        } finally {
            this.pendingWrites--
        }
    }
    async _set(e, t) {
        return this._withPendingWrite(async () => (await this._withRetries(r => It(r, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)))
    }
    async _get(e) {
        const t = await this._withRetries(r => ns(r, e));
        return this.localCache[e] = t, t
    }
    async _remove(e) {
        return this._withPendingWrite(async () => (await this._withRetries(t => yt(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)))
    }
    async _poll() {
        const e = await this._withRetries(i => {
            const s = ye(i, !1).getAll();
            return new ie(s).toPromise()
        });
        if (!e) return [];
        if (this.pendingWrites !== 0) return [];
        const t = [],
            r = new Set;
        if (e.length !== 0)
            for (const {
                    fbase_key: i,
                    value: s
                } of e) r.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(s) && (this.notifyListeners(i, s), t.push(i));
        for (const i of Object.keys(this.localCache)) this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null), t.push(i));
        return t
    }
    notifyListeners(e, t) {
        this.localCache[e] = t;
        const r = this.listeners[e];
        if (r)
            for (const i of Array.from(r)) i(t)
    }
    startPolling() {
        this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), rs)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
    }
    _addListener(e, t) {
        Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = new Set, this._get(e)), this.listeners[e].add(t)
    }
    _removeListener(e, t) {
        this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling()
    }
}
mn.type = "LOCAL";
const ss = mn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function os(n, e) {
    return v(n, "POST", "/v2/accounts/mfaSignIn:start", T(n, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const as = 500,
    cs = 6e4,
    se = 1e12;
class ls {
    constructor(e) {
        this.auth = e, this.counter = se, this._widgets = new Map
    }
    render(e, t) {
        const r = this.counter;
        return this._widgets.set(r, new ds(e, this.auth.name, t || {})), this.counter++, r
    }
    reset(e) {
        var t;
        const r = e || se;
        (t = this._widgets.get(r)) === null || t === void 0 || t.delete(), this._widgets.delete(r)
    }
    getResponse(e) {
        var t;
        const r = e || se;
        return ((t = this._widgets.get(r)) === null || t === void 0 ? void 0 : t.getResponse()) || ""
    }
    async execute(e) {
        var t;
        const r = e || se;
        return (t = this._widgets.get(r)) === null || t === void 0 || t.execute(), ""
    }
}
class ds {
    constructor(e, t, r) {
        this.params = r, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
            this.execute()
        };
        const i = typeof e == "string" ? document.getElementById(e) : e;
        l(i, "argument-error", {
            appName: t
        }), this.container = i, this.isVisible = this.params.size !== "invisible", this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
    }
    getResponse() {
        return this.checkIfDeleted(), this.responseToken
    }
    delete() {
        this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
    }
    execute() {
        this.checkIfDeleted(), !this.timerId && (this.timerId = window.setTimeout(() => {
            this.responseToken = us(50);
            const {
                callback: e,
                "expired-callback": t
            } = this.params;
            if (e) try {
                e(this.responseToken)
            } catch {}
            this.timerId = window.setTimeout(() => {
                if (this.timerId = null, this.responseToken = null, t) try {
                    t()
                } catch {}
                this.isVisible && this.execute()
            }, cs)
        }, as))
    }
    checkIfDeleted() {
        if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
    }
}

function us(n) {
    const e = [],
        t = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < n; r++) e.push(t.charAt(Math.floor(Math.random() * t.length)));
    return e.join("")
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oe = rn("rcb"),
    hs = new ne(3e4, 6e4),
    fs = "https://www.google.com/recaptcha/api.js?";
class ps {
    constructor() {
        var e;
        this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(!((e = p().grecaptcha) === null || e === void 0) && e.render)
    }
    load(e, t = "") {
        return l(ms(t), e, "argument-error"), this.shouldResolveImmediately(t) && ht(p().grecaptcha) ? Promise.resolve(p().grecaptcha) : new Promise((r, i) => {
            const s = p().setTimeout(() => {
                i(_(e, "network-request-failed"))
            }, hs.get());
            p()[Oe] = () => {
                p().clearTimeout(s), delete p()[Oe];
                const c = p().grecaptcha;
                if (!c || !ht(c)) {
                    i(_(e, "internal-error"));
                    return
                }
                const a = c.render;
                c.render = (d, u) => {
                    const f = a(d, u);
                    return this.counter++, f
                }, this.hostLanguage = t, r(c)
            };
            const o = `${fs}?${z({onload:Oe,render:"explicit",hl:t})}`;
            nn(o).catch(() => {
                clearTimeout(s), i(_(e, "internal-error"))
            })
        })
    }
    clearedOneInstance() {
        this.counter--
    }
    shouldResolveImmediately(e) {
        var t;
        return !!(!((t = p().grecaptcha) === null || t === void 0) && t.render) && (e === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
    }
}

function ms(n) {
    return n.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(n)
}
class gs {
    async load(e) {
        return new ls(e)
    }
    clearedOneInstance() {}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn = "recaptcha",
    _s = {
        theme: "light",
        type: "image"
    };
class _o {
    constructor(e, t, r = Object.assign({}, _s)) {
        this.parameters = r, this.type = gn, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = G(e), this.isInvisible = this.parameters.size === "invisible", l(typeof document < "u", this.auth, "operation-not-supported-in-this-environment");
        const i = typeof t == "string" ? document.getElementById(t) : t;
        l(i, this.auth, "argument-error"), this.container = i, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new gs : new ps, this.validateStartingState()
    }
    async verify() {
        this.assertNotDestroyed();
        const e = await this.render(),
            t = this.getAssertedRecaptcha(),
            r = t.getResponse(e);
        return r || new Promise(i => {
            const s = o => {
                o && (this.tokenChangeListeners.delete(s), i(o))
            };
            this.tokenChangeListeners.add(s), this.isInvisible && t.execute(e)
        })
    }
    render() {
        try {
            this.assertNotDestroyed()
        } catch (e) {
            return Promise.reject(e)
        }
        return this.renderPromise ? this.renderPromise : (this.renderPromise = this.makeRenderPromise().catch(e => {
            throw this.renderPromise = null, e
        }), this.renderPromise)
    }
    _reset() {
        this.assertNotDestroyed(), this.widgetId !== null && this.getAssertedRecaptcha().reset(this.widgetId)
    }
    clear() {
        this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach(e => {
            this.container.removeChild(e)
        })
    }
    validateStartingState() {
        l(!this.parameters.sitekey, this.auth, "argument-error"), l(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), l(typeof document < "u", this.auth, "operation-not-supported-in-this-environment")
    }
    makeTokenCallback(e) {
        return t => {
            if (this.tokenChangeListeners.forEach(r => r(t)), typeof e == "function") e(t);
            else if (typeof e == "string") {
                const r = p()[e];
                typeof r == "function" && r(t)
            }
        }
    }
    assertNotDestroyed() {
        l(!this.destroyed, this.auth, "internal-error")
    }
    async makeRenderPromise() {
        if (await this.init(), !this.widgetId) {
            let e = this.container;
            if (!this.isInvisible) {
                const t = document.createElement("div");
                e.appendChild(t), e = t
            }
            this.widgetId = this.getAssertedRecaptcha().render(e, this.parameters)
        }
        return this.widgetId
    }
    async init() {
        l($t() && !Je(), this.auth, "internal-error"), await vs(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
        const e = await oi(this.auth);
        l(e, this.auth, "internal-error"), this.parameters.sitekey = e
    }
    getAssertedRecaptcha() {
        return l(this.recaptcha, this.auth, "internal-error"), this.recaptcha
    }
}

function vs() {
    let n = null;
    return new Promise(e => {
        if (document.readyState === "complete") {
            e();
            return
        }
        n = () => e(), window.addEventListener("load", n)
    }).catch(e => {
        throw n && window.removeEventListener("load", n), e
    })
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is {
    constructor(e, t) {
        this.verificationId = e, this.onConfirmation = t
    }
    confirm(e) {
        const t = J._fromVerification(this.verificationId, e);
        return this.onConfirmation(t)
    }
}
async function vo(n, e, t) {
    const r = G(n),
        i = await ys(r, e, x(t));
    return new Is(i, s => Vi(r, s))
}
async function ys(n, e, t) {
    var r;
    const i = await t.verify();
    try {
        l(typeof i == "string", n, "argument-error"), l(t.type === gn, n, "argument-error");
        let s;
        if (typeof e == "string" ? s = {
                phoneNumber: e
            } : s = e, "session" in s) {
            const o = s.session;
            if ("phoneNumber" in s) return l(o.type === "enroll", n, "internal-error"), (await Wi(n, {
                idToken: o.credential,
                phoneEnrollmentInfo: {
                    phoneNumber: s.phoneNumber,
                    recaptchaToken: i
                }
            })).phoneSessionInfo.sessionInfo; {
                l(o.type === "signin", n, "internal-error");
                const c = ((r = s.multiFactorHint) === null || r === void 0 ? void 0 : r.uid) || s.multiFactorUid;
                return l(c, n, "missing-multi-factor-info"), (await os(n, {
                    mfaPendingCredential: o.credential,
                    mfaEnrollmentId: c,
                    phoneSignInInfo: {
                        recaptchaToken: i
                    }
                })).phoneResponseInfo.sessionInfo
            }
        } else {
            const {
                sessionInfo: o
            } = await Di(n, {
                phoneNumber: s.phoneNumber,
                recaptchaToken: i
            });
            return o
        }
    } finally {
        t._reset()
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bs(n, e) {
    return e ? b(e) : (l(n._popupRedirectResolver, n, "argument-error"), n._popupRedirectResolver)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends qe {
    constructor(e) {
        super("custom", "custom"), this.params = e
    }
    _getIdTokenResponse(e) {
        return $(e, this._buildIdpRequest())
    }
    _linkToIdToken(e, t) {
        return $(e, this._buildIdpRequest(t))
    }
    _getReauthenticationResolver(e) {
        return $(e, this._buildIdpRequest())
    }
    _buildIdpRequest(e) {
        const t = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: !0,
            returnIdpCredential: !0
        };
        return e && (t.idToken = e), t
    }
}

function ws(n) {
    return cn(n.auth, new Ye(n), n.bypassAuthState)
}

function Es(n) {
    const {
        auth: e,
        user: t
    } = n;
    return l(t, e, "internal-error"), Fi(t, new Ye(n), n.bypassAuthState)
}
async function Ts(n) {
    const {
        auth: e,
        user: t
    } = n;
    return l(t, e, "internal-error"), Bi(t, new Ye(n), n.bypassAuthState)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n {
    constructor(e, t, r, i, s = !1) {
        this.auth = e, this.resolver = r, this.user = i, this.bypassAuthState = s, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t]
    }
    execute() {
        return new Promise(async (e, t) => {
            this.pendingPromise = {
                resolve: e,
                reject: t
            };
            try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
            } catch (r) {
                this.reject(r)
            }
        })
    }
    async onAuthEvent(e) {
        const {
            urlResponse: t,
            sessionId: r,
            postBody: i,
            tenantId: s,
            error: o,
            type: c
        } = e;
        if (o) {
            this.reject(o);
            return
        }
        const a = {
            auth: this.auth,
            requestUri: t,
            sessionId: r,
            tenantId: s || void 0,
            postBody: i || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(c)(a))
        } catch (d) {
            this.reject(d)
        }
    }
    onError(e) {
        this.reject(e)
    }
    getIdpTask(e) {
        switch (e) {
            case "signInViaPopup":
            case "signInViaRedirect":
                return ws;
            case "linkViaPopup":
            case "linkViaRedirect":
                return Ts;
            case "reauthViaPopup":
            case "reauthViaRedirect":
                return Es;
            default:
                w(this.auth, "internal-error")
        }
    }
    resolve(e) {
        E(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp()
    }
    reject(e) {
        E(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp()
    }
    unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ss = new ne(2e3, 1e4);
class F extends _n {
    constructor(e, t, r, i, s) {
        super(e, t, i, s), this.provider = r, this.authWindow = null, this.pollId = null, F.currentPopupAction && F.currentPopupAction.cancel(), F.currentPopupAction = this
    }
    async executeNotNull() {
        const e = await this.execute();
        return l(e, this.auth, "internal-error"), e
    }
    async onExecution() {
        E(this.filter.length === 1, "Popup operations only handle one event");
        const e = Ke();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch(t => {
            this.reject(t)
        }), this.resolver._isIframeWebStorageSupported(this.auth, t => {
            t || this.reject(_(this.auth, "web-storage-unsupported"))
        }), this.pollUserCancellation()
    }
    get eventId() {
        var e;
        return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null
    }
    cancel() {
        this.reject(_(this.auth, "cancelled-popup-request"))
    }
    cleanUp() {
        this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, F.currentPopupAction = null
    }
    pollUserCancellation() {
        const e = () => {
            var t, r;
            if (!((r = (t = this.authWindow) === null || t === void 0 ? void 0 : t.window) === null || r === void 0) && r.closed) {
                this.pollId = window.setTimeout(() => {
                    this.pollId = null, this.reject(_(this.auth, "popup-closed-by-user"))
                }, 8e3);
                return
            }
            this.pollId = window.setTimeout(e, Ss.get())
        };
        e()
    }
}
F.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ks = "pendingRedirect",
    ce = new Map;
class Rs extends _n {
    constructor(e, t, r = !1) {
        super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, r), this.eventId = null
    }
    async execute() {
        let e = ce.get(this.auth._key());
        if (!e) {
            try {
                const r = await Cs(this.resolver, this.auth) ? await super.execute() : null;
                e = () => Promise.resolve(r)
            } catch (t) {
                e = () => Promise.reject(t)
            }
            ce.set(this.auth._key(), e)
        }
        return this.bypassAuthState || ce.set(this.auth._key(), () => Promise.resolve(null)), e()
    }
    async onAuthEvent(e) {
        if (e.type === "signInViaRedirect") return super.onAuthEvent(e);
        if (e.type === "unknown") {
            this.resolve(null);
            return
        }
        if (e.eventId) {
            const t = await this.auth._redirectUserForId(e.eventId);
            if (t) return this.user = t, super.onAuthEvent(e);
            this.resolve(null)
        }
    }
    async onExecution() {}
    cleanUp() {}
}
async function Cs(n, e) {
    const t = Os(e),
        r = Ps(n);
    if (!await r._isAvailable()) return !1;
    const i = await r._get(t) === "true";
    return await r._remove(t), i
}

function As(n, e) {
    ce.set(n._key(), e)
}

function Ps(n) {
    return b(n._redirectPersistence)
}

function Os(n) {
    return ae(ks, n.config.apiKey, n.name)
}
async function Ns(n, e, t = !1) {
    const r = G(n),
        i = bs(r, e),
        o = await new Rs(r, i, t).execute();
    return o && !t && (delete o.user._redirectEventId, await r._persistUserIfCurrent(o.user), await r._setRedirectUser(null, e)), o
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ds = 10 * 60 * 1e3;
class Ls {
    constructor(e) {
        this.auth = e, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
    }
    registerConsumer(e) {
        this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
    }
    unregisterConsumer(e) {
        this.consumers.delete(e)
    }
    onEvent(e) {
        if (this.hasEventBeenHandled(e)) return !1;
        let t = !1;
        return this.consumers.forEach(r => {
            this.isEventForConsumer(e, r) && (t = !0, this.sendToConsumer(e, r), this.saveEventToCache(e))
        }), this.hasHandledPotentialRedirect || !Ms(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t
    }
    sendToConsumer(e, t) {
        var r;
        if (e.error && !vn(e)) {
            const i = ((r = e.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
            t.onError(_(this.auth, i))
        } else t.onAuthEvent(e)
    }
    isEventForConsumer(e, t) {
        const r = t.eventId === null || !!e.eventId && e.eventId === t.eventId;
        return t.filter.includes(e.type) && r
    }
    hasEventBeenHandled(e) {
        return Date.now() - this.lastProcessedEventTime >= Ds && this.cachedEventUids.clear(), this.cachedEventUids.has(bt(e))
    }
    saveEventToCache(e) {
        this.cachedEventUids.add(bt(e)), this.lastProcessedEventTime = Date.now()
    }
}

function bt(n) {
    return [n.type, n.eventId, n.sessionId, n.tenantId].filter(e => e).join("-")
}

function vn({
    type: n,
    error: e
}) {
    return n === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event"
}

function Ms(n) {
    switch (n.type) {
        case "signInViaRedirect":
        case "linkViaRedirect":
        case "reauthViaRedirect":
            return !0;
        case "unknown":
            return vn(n);
        default:
            return !1
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Us(n, e = {}) {
    return v(n, "GET", "/v1/projects", e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xs = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    Bs = /^https?/;
async function Fs(n) {
    if (n.config.emulator) return;
    const {
        authorizedDomains: e
    } = await Us(n);
    for (const t of e) try {
        if (Vs(t)) return
    } catch {}
    w(n, "unauthorized-domain")
}

function Vs(n) {
    const e = Be(),
        {
            protocol: t,
            hostname: r
        } = new URL(e);
    if (n.startsWith("chrome-extension://")) {
        const o = new URL(n);
        return o.hostname === "" && r === "" ? t === "chrome-extension:" && n.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : t === "chrome-extension:" && o.hostname === r
    }
    if (!Bs.test(t)) return !1;
    if (xs.test(n)) return r === n;
    const i = n.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r)
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hs = new ne(3e4, 6e4);

function wt() {
    const n = p().___jsl;
    if (n != null && n.H) {
        for (const e of Object.keys(n.H))
            if (n.H[e].r = n.H[e].r || [], n.H[e].L = n.H[e].L || [], n.H[e].r = [...n.H[e].L], n.CP)
                for (let t = 0; t < n.CP.length; t++) n.CP[t] = null
    }
}

function $s(n) {
    return new Promise((e, t) => {
        var r, i, s;

        function o() {
            wt(), gapi.load("gapi.iframes", {
                callback: () => {
                    e(gapi.iframes.getContext())
                },
                ontimeout: () => {
                    wt(), t(_(n, "network-request-failed"))
                },
                timeout: Hs.get()
            })
        }
        if (!((i = (r = p().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0) && i.Iframe) e(gapi.iframes.getContext());
        else if (!((s = p().gapi) === null || s === void 0) && s.load) o();
        else {
            const c = rn("iframefcb");
            return p()[c] = () => {
                gapi.load ? o() : t(_(n, "network-request-failed"))
            }, nn(`https://apis.google.com/js/api.js?onload=${c}`).catch(a => t(a))
        }
    }).catch(e => {
        throw le = null, e
    })
}
let le = null;

function Ws(n) {
    return le = le || $s(n), le
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const js = new ne(5e3, 15e3),
    zs = "__/auth/iframe",
    Gs = "emulator/auth/iframe",
    qs = {
        style: {
            position: "absolute",
            top: "-100px",
            width: "1px",
            height: "1px"
        },
        "aria-hidden": "true",
        tabindex: "-1"
    },
    Ks = new Map([
        ["identitytoolkit.googleapis.com", "p"],
        ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
        ["test-identitytoolkit.sandbox.googleapis.com", "t"]
    ]);

function Js(n) {
    const e = n.config;
    l(e.authDomain, n, "auth-domain-config-required");
    const t = e.emulator ? je(e, Gs) : `https://${n.config.authDomain}/${zs}`,
        r = {
            apiKey: e.apiKey,
            appName: n.name,
            v: te
        },
        i = Ks.get(n.config.apiHost);
    i && (r.eid = i);
    const s = n._getFrameworks();
    return s.length && (r.fw = s.join(",")), `${t}?${z(r).slice(1)}`
}
async function Ys(n) {
    const e = await Ws(n),
        t = p().gapi;
    return l(t, n, "internal-error"), e.open({
        where: document.body,
        url: Js(n),
        messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: qs,
        dontclear: !0
    }, r => new Promise(async (i, s) => {
        await r.restyle({
            setHideOnLeave: !1
        });
        const o = _(n, "network-request-failed"),
            c = p().setTimeout(() => {
                s(o)
            }, js.get());

        function a() {
            p().clearTimeout(c), i(r)
        }
        r.ping(a).then(a, () => {
            s(o)
        })
    }))
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xs = {
        location: "yes",
        resizable: "yes",
        statusbar: "yes",
        toolbar: "no"
    },
    Qs = 500,
    Zs = 600,
    eo = "_blank",
    to = "http://localhost";
class Et {
    constructor(e) {
        this.window = e, this.associatedEvent = null
    }
    close() {
        if (this.window) try {
            this.window.close()
        } catch {}
    }
}

function no(n, e, t, r = Qs, i = Zs) {
    const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
        o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
    let c = "";
    const a = Object.assign(Object.assign({}, Xs), {
            width: r.toString(),
            height: i.toString(),
            top: s,
            left: o
        }),
        d = m().toLowerCase();
    t && (c = Jt(d) ? eo : t), Kt(d) && (e = e || to, a.scrollbars = "yes");
    const u = Object.entries(a).reduce((g, [I, B]) => `${g}${I}=${B},`, "");
    if (vi(d) && c !== "_self") return ro(e || "", c), new Et(null);
    const f = window.open(e || "", c, u);
    l(f, n, "popup-blocked");
    try {
        f.focus()
    } catch {}
    return new Et(f)
}

function ro(n, e) {
    const t = document.createElement("a");
    t.href = n, t.target = e;
    const r = document.createEvent("MouseEvent");
    r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), t.dispatchEvent(r)
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const io = "__/auth/handler",
    so = "emulator/auth/handler",
    oo = encodeURIComponent("fac");
async function Tt(n, e, t, r, i, s) {
    l(n.config.authDomain, n, "auth-domain-config-required"), l(n.config.apiKey, n, "invalid-api-key");
    const o = {
        apiKey: n.config.apiKey,
        appName: n.name,
        authType: t,
        redirectUrl: r,
        v: te,
        eventId: i
    };
    if (e instanceof on) {
        e.setDefaultLanguage(n.languageCode), o.providerId = e.providerId || "", Fn(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
        for (const [u, f] of Object.entries(s || {})) o[u] = f
    }
    if (e instanceof re) {
        const u = e.getScopes().filter(f => f !== "");
        u.length > 0 && (o.scopes = u.join(","))
    }
    n.tenantId && (o.tid = n.tenantId);
    const c = o;
    for (const u of Object.keys(c)) c[u] === void 0 && delete c[u];
    const a = await n._getAppCheckToken(),
        d = a ? `#${oo}=${encodeURIComponent(a)}` : "";
    return `${ao(n)}?${z(c).slice(1)}${d}`
}

function ao({
    config: n
}) {
    return n.emulator ? je(n, so) : `https://${n.authDomain}/${io}`
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ne = "webStorageSupport";
class co {
    constructor() {
        this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = hn, this._completeRedirectFn = Ns, this._overrideRedirectResult = As
    }
    async _openPopup(e, t, r, i) {
        var s;
        E((s = this.eventManagers[e._key()]) === null || s === void 0 ? void 0 : s.manager, "_initialize() not called before _openPopup()");
        const o = await Tt(e, t, r, Be(), i);
        return no(e, o, Ke())
    }
    async _openRedirect(e, t, r, i) {
        await this._originValidation(e);
        const s = await Tt(e, t, r, Be(), i);
        return Yi(s), new Promise(() => {})
    }
    _initialize(e) {
        const t = e._key();
        if (this.eventManagers[t]) {
            const {
                manager: i,
                promise: s
            } = this.eventManagers[t];
            return i ? Promise.resolve(i) : (E(s, "If manager is not set, promise should be"), s)
        }
        const r = this.initAndGetManager(e);
        return this.eventManagers[t] = {
            promise: r
        }, r.catch(() => {
            delete this.eventManagers[t]
        }), r
    }
    async initAndGetManager(e) {
        const t = await Ys(e),
            r = new Ls(e);
        return t.register("authEvent", i => (l(i == null ? void 0 : i.authEvent, e, "invalid-auth-event"), {
            status: r.onEvent(i.authEvent) ? "ACK" : "ERROR"
        }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = {
            manager: r
        }, this.iframes[e._key()] = t, r
    }
    _isIframeWebStorageSupported(e, t) {
        this.iframes[e._key()].send(Ne, {
            type: Ne
        }, i => {
            var s;
            const o = (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[Ne];
            o !== void 0 && t(!!o), w(e, "internal-error")
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
    }
    _originValidation(e) {
        const t = e._key();
        return this.originValidationPromises[t] || (this.originValidationPromises[t] = Fs(e)), this.originValidationPromises[t]
    }
    get _shouldInitProactively() {
        return en() || Ge() || ve()
    }
}
const lo = co;
var St = "@firebase/auth",
    kt = "1.5.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo {
    constructor(e) {
        this.auth = e, this.internalListeners = new Map
    }
    getUid() {
        var e;
        return this.assertAuthConfigured(), ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null
    }
    async getToken(e) {
        return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? {
            accessToken: await this.auth.currentUser.getIdToken(e)
        } : null
    }
    addAuthTokenListener(e) {
        if (this.assertAuthConfigured(), this.internalListeners.has(e)) return;
        const t = this.auth.onIdTokenChanged(r => {
            e((r == null ? void 0 : r.stsTokenManager.accessToken) || null)
        });
        this.internalListeners.set(e, t), this.updateProactiveRefresh()
    }
    removeAuthTokenListener(e) {
        this.assertAuthConfigured();
        const t = this.internalListeners.get(e);
        t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh())
    }
    assertAuthConfigured() {
        l(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
    }
    updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ho(n) {
    switch (n) {
        case "Node":
            return "node";
        case "ReactNative":
            return "rn";
        case "Worker":
            return "webworker";
        case "Cordova":
            return "cordova";
        default:
            return
    }
}

function fo(n) {
    Y(new W("auth", (e, {
        options: t
    }) => {
        const r = e.getProvider("app").getImmediate(),
            i = e.getProvider("heartbeat"),
            s = e.getProvider("app-check-internal"),
            {
                apiKey: o,
                authDomain: c
            } = r.options;
        l(o && !o.includes(":"), "invalid-api-key", {
            appName: r.name
        });
        const a = {
                apiKey: o,
                authDomain: c,
                clientPlatform: n,
                apiHost: "identitytoolkit.googleapis.com",
                tokenApiHost: "securetoken.googleapis.com",
                apiScheme: "https",
                sdkClientVersion: tn(n)
            },
            d = new Si(r, i, s, a);
        return Ci(d, t), d
    }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e, t, r) => {
        e.getProvider("auth-internal").initialize()
    })), Y(new W("auth-internal", e => {
        const t = G(e.getProvider("auth").getImmediate());
        return (r => new uo(r))(t)
    }, "PRIVATE").setInstantiationMode("EXPLICIT")), V(St, kt, ho(n)), V(St, kt, "esm2017")
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const po = 5 * 60,
    mo = Dt("authIdTokenMaxAge") || po;
let Rt = null;
const go = n => async e => {
    const t = e && await e.getIdTokenResult(),
        r = t && (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3;
    if (r && r > mo) return;
    const i = t == null ? void 0 : t.token;
    Rt !== i && (Rt = i, await fetch(n, {
        method: i ? "POST" : "DELETE",
        headers: i ? {
            Authorization: `Bearer ${i}`
        } : {}
    }))
};

function Io(n = Vr()) {
    const e = xt(n, "auth");
    if (e.isInitialized()) return e.getImmediate();
    const t = Ri(n, {
            popupRedirectResolver: lo,
            persistence: [ss, qi, hn]
        }),
        r = Dt("authTokenSyncURL");
    if (r) {
        const s = go(r);
        $i(t, s, () => s(t.currentUser)), Hi(t, o => s(o))
    }
    const i = Cn("auth");
    return i && Ai(t, `http://${i}`), t
}
fo("Browser");
export {
    _o as R, Io as g, Fr as i, vo as s
};