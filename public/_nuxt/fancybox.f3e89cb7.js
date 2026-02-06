import {
    B as Rt,
    _ as kt,
    o as It,
    c as Ft,
    C as Dt
} from "./entry.93d2037a.js";
var Fe = {
    exports: {}
};
(function(De, je) {
    (function(ee, g) {
        g(je)
    })(Rt, function(ee) {
        const g = (c, e = 1e4) => (c = parseFloat(c + "") || 0, Math.round((c + Number.EPSILON) * e) / e),
            le = function(c) {
                if (!(c && c instanceof Element && c.offsetParent)) return !1;
                const e = c.scrollHeight > c.clientHeight,
                    t = window.getComputedStyle(c).overflowY,
                    i = t.indexOf("hidden") !== -1,
                    n = t.indexOf("visible") !== -1;
                return e && !i && !n
            },
            ce = function(c, e = void 0) {
                return !(!c || c === document.body || e && c === e) && (le(c) ? c : ce(c.parentElement, e))
            },
            R = function(c) {
                var e = new DOMParser().parseFromString(c, "text/html").body;
                if (e.childElementCount > 1) {
                    for (var t = document.createElement("div"); e.firstChild;) t.appendChild(e.firstChild);
                    return t
                }
                return e.firstChild
            },
            ye = c => `${c||""}`.split(" ").filter(e => !!e),
            F = (c, e, t) => {
                ye(e).forEach(i => {
                    c && c.classList.toggle(i, t || !1)
                })
            };
        class U {
            constructor(e) {
                Object.defineProperty(this, "pageX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "pageY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "clientX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "clientY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "id", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "time", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "nativePointer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), this.nativePointer = e, this.pageX = e.pageX, this.pageY = e.pageY, this.clientX = e.clientX, this.clientY = e.clientY, this.id = self.Touch && e instanceof Touch ? e.identifier : -1, this.time = Date.now()
            }
        }
        const K = {
            passive: !1
        };
        class vt {
            constructor(e, {
                start: t = () => !0,
                move: i = () => {},
                end: n = () => {}
            }) {
                Object.defineProperty(this, "element", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "startCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "moveCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "endCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "currentPointers", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "startPointers", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), this.element = e, this.startCallback = t, this.moveCallback = i, this.endCallback = n;
                for (const s of ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"]) this[s] = this[s].bind(this);
                this.element.addEventListener("mousedown", this.onPointerStart, K), this.element.addEventListener("touchstart", this.onTouchStart, K), this.element.addEventListener("touchmove", this.onMove, K), this.element.addEventListener("touchend", this.onTouchEnd), this.element.addEventListener("touchcancel", this.onTouchEnd)
            }
            onPointerStart(e) {
                if (!e.buttons || e.button !== 0) return;
                const t = new U(e);
                this.currentPointers.some(i => i.id === t.id) || this.triggerPointerStart(t, e) && (window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur))
            }
            onTouchStart(e) {
                for (const t of Array.from(e.changedTouches || [])) this.triggerPointerStart(new U(t), e);
                window.addEventListener("blur", this.onWindowBlur)
            }
            onMove(e) {
                const t = this.currentPointers.slice(),
                    i = "changedTouches" in e ? Array.from(e.changedTouches || []).map(s => new U(s)) : [new U(e)],
                    n = [];
                for (const s of i) {
                    const o = this.currentPointers.findIndex(a => a.id === s.id);
                    o < 0 || (n.push(s), this.currentPointers[o] = s)
                }
                n.length && this.moveCallback(e, this.currentPointers.slice(), t)
            }
            onPointerEnd(e) {
                e.buttons > 0 && e.button !== 0 || (this.triggerPointerEnd(e, new U(e)), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur))
            }
            onTouchEnd(e) {
                for (const t of Array.from(e.changedTouches || [])) this.triggerPointerEnd(e, new U(t))
            }
            triggerPointerStart(e, t) {
                return !!this.startCallback(t, e, this.currentPointers.slice()) && (this.currentPointers.push(e), this.startPointers.push(e), !0)
            }
            triggerPointerEnd(e, t) {
                const i = this.currentPointers.findIndex(n => n.id === t.id);
                i < 0 || (this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this.endCallback(e, t, this.currentPointers.slice()))
            }
            onWindowBlur() {
                this.clear()
            }
            clear() {
                for (; this.currentPointers.length;) {
                    const e = this.currentPointers[this.currentPointers.length - 1];
                    this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), this.endCallback(new Event("touchend", {
                        bubbles: !0,
                        cancelable: !0,
                        clientX: e.clientX,
                        clientY: e.clientY
                    }), e, this.currentPointers.slice())
                }
            }
            stop() {
                this.element.removeEventListener("mousedown", this.onPointerStart, K), this.element.removeEventListener("touchstart", this.onTouchStart, K), this.element.removeEventListener("touchmove", this.onMove, K), this.element.removeEventListener("touchend", this.onTouchEnd), this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur)
            }
        }

        function He(c, e) {
            return e ? Math.sqrt(Math.pow(e.clientX - c.clientX, 2) + Math.pow(e.clientY - c.clientY, 2)) : 0
        }

        function Be(c, e) {
            return e ? {
                clientX: (c.clientX + e.clientX) / 2,
                clientY: (c.clientY + e.clientY) / 2
            } : c
        }
        const we = c => typeof c == "object" && c !== null && c.constructor === Object && Object.prototype.toString.call(c) === "[object Object]",
            L = (c, ...e) => {
                const t = e.length;
                for (let i = 0; i < t; i++) {
                    const n = e[i] || {};
                    Object.entries(n).forEach(([s, o]) => {
                        const a = Array.isArray(o) ? [] : {};
                        c[s] || Object.assign(c, {
                            [s]: a
                        }), we(o) ? Object.assign(c[s], L(a, o)) : Array.isArray(o) ? Object.assign(c, {
                            [s]: [...o]
                        }) : Object.assign(c, {
                            [s]: o
                        })
                    })
                }
                return c
            },
            xe = function(c, e) {
                return c.split(".").reduce((t, i) => typeof t == "object" ? t[i] : void 0, e)
            };
        class he {
            constructor(e = {}) {
                Object.defineProperty(this, "options", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e
                }), Object.defineProperty(this, "events", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Map
                }), this.setOptions(e);
                for (const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) t.startsWith("on") && typeof this[t] == "function" && (this[t] = this[t].bind(this))
            }
            setOptions(e) {
                this.options = e ? L({}, this.constructor.defaults, e) : {};
                for (const [t, i] of Object.entries(this.option("on") || {})) this.on(t, i)
            }
            option(e, ...t) {
                let i = xe(e, this.options);
                return i && typeof i == "function" && (i = i.call(this, this, ...t)), i
            }
            optionFor(e, t, i, ...n) {
                let s = xe(t, e);
                var o;
                typeof(o = s) != "string" || isNaN(o) || isNaN(parseFloat(o)) || (s = parseFloat(s)), s === "true" && (s = !0), s === "false" && (s = !1), s && typeof s == "function" && (s = s.call(this, this, e, ...n));
                let a = xe(t, this.options);
                return a && typeof a == "function" ? s = a.call(this, this, e, ...n, s) : s === void 0 && (s = a), s === void 0 ? i : s
            }
            cn(e) {
                const t = this.options.classes;
                return t && t[e] || ""
            }
            localize(e, t = []) {
                e = String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g, (i, n, s) => {
                    let o = "";
                    return s ? o = this.option(`${n[0]+n.toLowerCase().substring(1)}.l10n.${s}`) : n && (o = this.option(`l10n.${n}`)), o || (o = i), o
                });
                for (let i = 0; i < t.length; i++) e = e.split(t[i][0]).join(t[i][1]);
                return e = e.replace(/\{\{(.*?)\}\}/g, (i, n) => n)
            }
            on(e, t) {
                let i = [];
                typeof e == "string" ? i = e.split(" ") : Array.isArray(e) && (i = e), this.events || (this.events = new Map), i.forEach(n => {
                    let s = this.events.get(n);
                    s || (this.events.set(n, []), s = []), s.includes(t) || s.push(t), this.events.set(n, s)
                })
            }
            off(e, t) {
                let i = [];
                typeof e == "string" ? i = e.split(" ") : Array.isArray(e) && (i = e), i.forEach(n => {
                    const s = this.events.get(n);
                    if (Array.isArray(s)) {
                        const o = s.indexOf(t);
                        o > -1 && s.splice(o, 1)
                    }
                })
            }
            emit(e, ...t) {
                [...this.events.get(e) || []].forEach(i => i(this, ...t)), e !== "*" && this.emit("*", e, ...t)
            }
        }
        Object.defineProperty(he, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "5.0.24"
        }), Object.defineProperty(he, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        });
        class Ee extends he {
            constructor(e = {}) {
                super(e), Object.defineProperty(this, "plugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                })
            }
            attachPlugins(e = {}) {
                const t = new Map;
                for (const [i, n] of Object.entries(e)) {
                    const s = this.option(i),
                        o = this.plugins[i];
                    o || s === !1 ? o && s === !1 && (o.detach(), delete this.plugins[i]) : t.set(i, new n(this, s || {}))
                }
                for (const [i, n] of t) this.plugins[i] = n, n.attach()
            }
            detachPlugins(e) {
                e = e || Object.keys(this.plugins);
                for (const t of e) {
                    const i = this.plugins[t];
                    i && i.detach(), delete this.plugins[t]
                }
                return this.emit("detachPlugins"), this
            }
        }
        var S;
        (function(c) {
            c[c.Init = 0] = "Init", c[c.Error = 1] = "Error", c[c.Ready = 2] = "Ready", c[c.Panning = 3] = "Panning", c[c.Mousemove = 4] = "Mousemove", c[c.Destroy = 5] = "Destroy"
        })(S || (S = {}));
        const B = ["a", "b", "c", "d", "e", "f"],
            Ne = {
                PANUP: "Move up",
                PANDOWN: "Move down",
                PANLEFT: "Move left",
                PANRIGHT: "Move right",
                ZOOMIN: "Zoom in",
                ZOOMOUT: "Zoom out",
                TOGGLEZOOM: "Toggle zoom level",
                TOGGLE1TO1: "Toggle zoom level",
                ITERATEZOOM: "Toggle zoom level",
                ROTATECCW: "Rotate counterclockwise",
                ROTATECW: "Rotate clockwise",
                FLIPX: "Flip horizontally",
                FLIPY: "Flip vertically",
                FITX: "Fit horizontally",
                FITY: "Fit vertically",
                RESET: "Reset",
                TOGGLEFS: "Toggle fullscreen"
            },
            yt = {
                content: null,
                width: "auto",
                height: "auto",
                panMode: "drag",
                touch: !0,
                dragMinThreshold: 3,
                lockAxis: !1,
                mouseMoveFactor: 1,
                mouseMoveFriction: .12,
                zoom: !0,
                pinchToZoom: !0,
                panOnlyZoomed: "auto",
                minScale: 1,
                maxScale: 2,
                friction: .25,
                dragFriction: .35,
                decelFriction: .05,
                click: "toggleZoom",
                dblClick: !1,
                wheel: "zoom",
                wheelLimit: 7,
                spinner: !0,
                bounds: "auto",
                infinite: !1,
                rubberband: !0,
                bounce: !0,
                maxVelocity: 75,
                transformParent: !1,
                classes: {
                    content: "f-panzoom__content",
                    isLoading: "is-loading",
                    canZoomIn: "can-zoom_in",
                    canZoomOut: "can-zoom_out",
                    isDraggable: "is-draggable",
                    isDragging: "is-dragging",
                    inFullscreen: "in-fullscreen",
                    htmlHasFullscreen: "with-panzoom-in-fullscreen"
                },
                l10n: Ne
            },
            de = '<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>',
            z = c => c && c !== null && c instanceof Element && "nodeType" in c,
            C = (c, e) => {
                c && ye(e).forEach(t => {
                    c.classList.remove(t)
                })
            },
            y = (c, e) => {
                c && ye(e).forEach(t => {
                    c.classList.add(t)
                })
            },
            ue = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0
            },
            wt = 1e5,
            pe = 1e3,
            k = "mousemove",
            _e = "drag",
            $e = "content";
        let Se = null,
            Pe = null;
        class W extends Ee {
            get isTouchDevice() {
                return Pe === null && (Pe = window.matchMedia("(hover: none)").matches), Pe
            }
            get isMobile() {
                return Se === null && (Se = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), Se
            }
            get panMode() {
                return this.options.panMode !== k || this.isTouchDevice ? _e : k
            }
            get panOnlyZoomed() {
                const e = this.options.panOnlyZoomed;
                return e === "auto" ? this.isTouchDevice : e
            }
            get isInfinite() {
                return this.option("infinite")
            }
            get angle() {
                return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0
            }
            get targetAngle() {
                return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0
            }
            get scale() {
                const {
                    a: e,
                    b: t
                } = this.current;
                return Math.sqrt(e * e + t * t) || 1
            }
            get targetScale() {
                const {
                    a: e,
                    b: t
                } = this.target;
                return Math.sqrt(e * e + t * t) || 1
            }
            get minScale() {
                return this.option("minScale") || 1
            }
            get fullScale() {
                const {
                    contentRect: e
                } = this;
                return e.fullWidth / e.fitWidth || 1
            }
            get maxScale() {
                return this.fullScale * (this.option("maxScale") || 1) || 1
            }
            get coverScale() {
                const {
                    containerRect: e,
                    contentRect: t
                } = this, i = Math.max(e.height / t.fitHeight, e.width / t.fitWidth) || 1;
                return Math.min(this.fullScale, i)
            }
            get isScaling() {
                return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting
            }
            get isContentLoading() {
                const e = this.content;
                return !!(e && e instanceof HTMLImageElement) && !e.complete
            }
            get isResting() {
                if (this.isBouncingX || this.isBouncingY) return !1;
                for (const e of B) {
                    const t = e == "e" || e === "f" ? .001 : 1e-5;
                    if (Math.abs(this.target[e] - this.current[e]) > t) return !1
                }
                return !(!this.ignoreBounds && !this.checkBounds().inBounds)
            }
            constructor(e, t = {}, i = {}) {
                var n;
                if (super(t), Object.defineProperty(this, "pointerTracker", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: null
                    }), Object.defineProperty(this, "resizeObserver", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: null
                    }), Object.defineProperty(this, "updateTimer", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: null
                    }), Object.defineProperty(this, "clickTimer", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: null
                    }), Object.defineProperty(this, "rAF", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: null
                    }), Object.defineProperty(this, "isTicking", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: !1
                    }), Object.defineProperty(this, "friction", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }), Object.defineProperty(this, "ignoreBounds", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: !1
                    }), Object.defineProperty(this, "isBouncingX", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: !1
                    }), Object.defineProperty(this, "isBouncingY", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: !1
                    }), Object.defineProperty(this, "clicks", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }), Object.defineProperty(this, "trackingPoints", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: []
                    }), Object.defineProperty(this, "pwt", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }), Object.defineProperty(this, "cwd", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }), Object.defineProperty(this, "pmme", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "state", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: S.Init
                    }), Object.defineProperty(this, "isDragging", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: !1
                    }), Object.defineProperty(this, "container", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "content", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "spinner", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: null
                    }), Object.defineProperty(this, "containerRect", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0
                        }
                    }), Object.defineProperty(this, "contentRect", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            fullWidth: 0,
                            fullHeight: 0,
                            fitWidth: 0,
                            fitHeight: 0,
                            width: 0,
                            height: 0
                        }
                    }), Object.defineProperty(this, "dragStart", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: {
                            x: 0,
                            y: 0,
                            top: 0,
                            left: 0,
                            time: 0
                        }
                    }), Object.defineProperty(this, "dragOffset", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: {
                            x: 0,
                            y: 0,
                            time: 0
                        }
                    }), Object.defineProperty(this, "current", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: Object.assign({}, ue)
                    }), Object.defineProperty(this, "target", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: Object.assign({}, ue)
                    }), Object.defineProperty(this, "velocity", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: {
                            a: 0,
                            b: 0,
                            c: 0,
                            d: 0,
                            e: 0,
                            f: 0
                        }
                    }), Object.defineProperty(this, "lockedAxis", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: !1
                    }), !e) throw new Error("Container Element Not Found");
                this.container = e, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, W.Plugins), i)), this.emit("attachPlugins"), this.emit("init");
                const s = this.content;
                if (s.addEventListener("load", this.onLoad), s.addEventListener("error", this.onError), this.isContentLoading) {
                    if (this.option("spinner")) {
                        e.classList.add(this.cn("isLoading"));
                        const o = R(de);
                        !e.contains(s) || s.parentElement instanceof HTMLPictureElement ? this.spinner = e.appendChild(o) : this.spinner = ((n = s.parentElement) === null || n === void 0 ? void 0 : n.insertBefore(o, s)) || null
                    }
                    this.emit("beforeLoad")
                } else queueMicrotask(() => {
                    this.enable()
                })
            }
            initContent() {
                const {
                    container: e
                } = this, t = this.cn($e);
                let i = this.option($e) || e.querySelector(`.${t}`);
                if (i || (i = e.querySelector("img,picture") || e.firstElementChild, i && y(i, t)), i instanceof HTMLPictureElement && (i = i.querySelector("img")), !i) throw new Error("No content found");
                this.content = i
            }
            onLoad() {
                const {
                    spinner: e,
                    container: t,
                    state: i
                } = this;
                e && (e.remove(), this.spinner = null), this.option("spinner") && t.classList.remove(this.cn("isLoading")), this.emit("afterLoad"), i === S.Init ? this.enable() : this.updateMetrics()
            }
            onError() {
                this.state !== S.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), this.stop(), this.detachEvents(), this.state = S.Error, this.emit("error"))
            }
            attachObserver() {
                var e;
                const t = () => {
                    const {
                        container: i,
                        containerRect: n
                    } = this;
                    return Math.abs(n.width - i.getBoundingClientRect().width) > .1 || Math.abs(n.height - i.getBoundingClientRect().height) > .1
                };
                this.resizeObserver || window.ResizeObserver === void 0 || (this.resizeObserver = new ResizeObserver(() => {
                    this.updateTimer || (t() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout(() => {
                        t() && this.onResize(), this.updateTimer = null
                    }, 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null))
                })), (e = this.resizeObserver) === null || e === void 0 || e.observe(this.container)
            }
            detachObserver() {
                var e;
                (e = this.resizeObserver) === null || e === void 0 || e.disconnect()
            }
            attachEvents() {
                const {
                    container: e
                } = this;
                e.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), e.addEventListener("wheel", this.onWheel, {
                    passive: !1
                }), this.pointerTracker = new vt(e, {
                    start: this.onPointerDown,
                    move: this.onPointerMove,
                    end: this.onPointerUp
                }), document.addEventListener(k, this.onMouseMove)
            }
            detachEvents() {
                var e;
                const {
                    container: t
                } = this;
                t.removeEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), t.removeEventListener("wheel", this.onWheel, {
                    passive: !1
                }), (e = this.pointerTracker) === null || e === void 0 || e.stop(), this.pointerTracker = null, document.removeEventListener(k, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, !0), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null)
            }
            animate() {
                const e = this.friction;
                this.setTargetForce();
                const t = this.option("maxVelocity");
                for (const i of B) e ? (this.velocity[i] *= 1 - e, t && !this.isScaling && (this.velocity[i] = Math.max(Math.min(this.velocity[i], t), -1 * t)), this.current[i] += this.velocity[i]) : this.current[i] = this.target[i];
                this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame(() => this.animate()) : this.stop("current")
            }
            setTargetForce() {
                for (const e of B) e === "e" && this.isBouncingX || e === "f" && this.isBouncingY || (this.velocity[e] = (1 / (1 - this.friction) - 1) * (this.target[e] - this.current[e]))
            }
            checkBounds(e = 0, t = 0) {
                const {
                    current: i
                } = this, n = i.e + e, s = i.f + t, o = this.getBounds(), {
                    x: a,
                    y: l
                } = o, r = a.min, d = a.max, h = l.min, u = l.max;
                let p = 0,
                    f = 0;
                return r !== 1 / 0 && n < r ? p = r - n : d !== 1 / 0 && n > d && (p = d - n), h !== 1 / 0 && s < h ? f = h - s : u !== 1 / 0 && s > u && (f = u - s), Math.abs(p) < .001 && (p = 0), Math.abs(f) < .001 && (f = 0), Object.assign(Object.assign({}, o), {
                    xDiff: p,
                    yDiff: f,
                    inBounds: !p && !f
                })
            }
            clampTargetBounds() {
                const {
                    target: e
                } = this, {
                    x: t,
                    y: i
                } = this.getBounds();
                t.min !== 1 / 0 && (e.e = Math.max(e.e, t.min)), t.max !== 1 / 0 && (e.e = Math.min(e.e, t.max)), i.min !== 1 / 0 && (e.f = Math.max(e.f, i.min)), i.max !== 1 / 0 && (e.f = Math.min(e.f, i.max))
            }
            calculateContentDim(e = this.current) {
                const {
                    content: t,
                    contentRect: i
                } = this, {
                    fitWidth: n,
                    fitHeight: s,
                    fullWidth: o,
                    fullHeight: a
                } = i;
                let l = o,
                    r = a;
                if (this.option("zoom") || this.angle !== 0) {
                    const d = !(t instanceof HTMLImageElement) && (window.getComputedStyle(t).maxWidth === "none" || window.getComputedStyle(t).maxHeight === "none"),
                        h = d ? o : n,
                        u = d ? a : s,
                        p = this.getMatrix(e),
                        f = new DOMPoint(0, 0).matrixTransform(p),
                        m = new DOMPoint(0 + h, 0).matrixTransform(p),
                        b = new DOMPoint(0 + h, 0 + u).matrixTransform(p),
                        v = new DOMPoint(0, 0 + u).matrixTransform(p),
                        x = Math.abs(b.x - f.x),
                        w = Math.abs(b.y - f.y),
                        M = Math.abs(v.x - m.x),
                        $ = Math.abs(v.y - m.y);
                    l = Math.max(x, M), r = Math.max(w, $)
                }
                return {
                    contentWidth: l,
                    contentHeight: r
                }
            }
            setEdgeForce() {
                if (this.ignoreBounds || this.isDragging || this.panMode === k || this.targetScale < this.scale) return this.isBouncingX = !1, void(this.isBouncingY = !1);
                const {
                    target: e
                } = this, {
                    x: t,
                    y: i,
                    xDiff: n,
                    yDiff: s
                } = this.checkBounds(), o = this.option("maxVelocity");
                let a = this.velocity.e,
                    l = this.velocity.f;
                n !== 0 ? (this.isBouncingX = !0, n * a <= 0 ? a += .14 * n : (a = .14 * n, t.min !== 1 / 0 && (this.target.e = Math.max(e.e, t.min)), t.max !== 1 / 0 && (this.target.e = Math.min(e.e, t.max))), o && (a = Math.max(Math.min(a, o), -1 * o))) : this.isBouncingX = !1, s !== 0 ? (this.isBouncingY = !0, s * l <= 0 ? l += .14 * s : (l = .14 * s, i.min !== 1 / 0 && (this.target.f = Math.max(e.f, i.min)), i.max !== 1 / 0 && (this.target.f = Math.min(e.f, i.max))), o && (l = Math.max(Math.min(l, o), -1 * o))) : this.isBouncingY = !1, this.isBouncingX && (this.velocity.e = a), this.isBouncingY && (this.velocity.f = l)
            }
            enable() {
                const {
                    content: e
                } = this, t = new DOMMatrixReadOnly(window.getComputedStyle(e).transform);
                for (const i of B) this.current[i] = this.target[i] = t[i];
                this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = S.Ready, this.emit("ready")
            }
            onClick(e) {
                var t;
                this.isDragging && ((t = this.pointerTracker) === null || t === void 0 || t.clear(), this.trackingPoints = [], this.startDecelAnim());
                const i = e.target;
                if (!i || e.defaultPrevented) return;
                if (i.hasAttribute("disabled")) return e.preventDefault(), void e.stopPropagation();
                if ((() => {
                        const p = window.getSelection();
                        return p && p.type === "Range"
                    })() && !i.closest("button")) return;
                const n = i.closest("[data-panzoom-action]"),
                    s = i.closest("[data-panzoom-change]"),
                    o = n || s,
                    a = o && z(o) ? o.dataset : null;
                if (a) {
                    const p = a.panzoomChange,
                        f = a.panzoomAction;
                    if ((p || f) && e.preventDefault(), p) {
                        let m = {};
                        try {
                            m = JSON.parse(p)
                        } catch {
                            console && console.warn("The given data was not valid JSON")
                        }
                        return void this.applyChange(m)
                    }
                    if (f) return void(this[f] && this[f]())
                }
                if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3) return e.preventDefault(), void e.stopPropagation();
                if (i.closest("[data-fancybox]")) return;
                const l = this.content.getBoundingClientRect(),
                    r = this.dragStart;
                if (r.time && !this.canZoomOut() && (Math.abs(l.x - r.x) > 2 || Math.abs(l.y - r.y) > 2)) return;
                this.dragStart.time = 0;
                const d = p => {
                        this.option("zoom", e) && p && typeof p == "string" && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(p) && typeof this[p] == "function" && (e.preventDefault(), this[p]({
                            event: e
                        }))
                    },
                    h = this.option("click", e),
                    u = this.option("dblClick", e);
                u ? (this.clicks++, this.clicks == 1 && (this.clickTimer = setTimeout(() => {
                    this.clicks === 1 ? (this.emit("click", e), !e.defaultPrevented && h && d(h)) : (this.emit("dblClick", e), e.defaultPrevented || d(u)), this.clicks = 0, this.clickTimer = null
                }, 350))) : (this.emit("click", e), !e.defaultPrevented && h && d(h))
            }
            addTrackingPoint(e) {
                const t = this.trackingPoints.filter(i => i.time > Date.now() - 100);
                t.push(e), this.trackingPoints = t
            }
            onPointerDown(e, t, i) {
                var n;
                if (this.option("touch", e) === !1) return !1;
                this.pwt = 0, this.dragOffset = {
                    x: 0,
                    y: 0,
                    time: 0
                }, this.trackingPoints = [];
                const s = this.content.getBoundingClientRect();
                if (this.dragStart = {
                        x: s.x,
                        y: s.y,
                        top: s.top,
                        left: s.left,
                        time: Date.now()
                    }, this.clickTimer) return !1;
                if (this.panMode === k && this.targetScale > 1) return e.preventDefault(), e.stopPropagation(), !1;
                const o = e.composedPath()[0];
                if (!i.length) {
                    if (["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME"].includes(o.nodeName) || o.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]")) return !1;
                    (n = window.getSelection()) === null || n === void 0 || n.removeAllRanges()
                }
                if (e.type === "mousedown")["A", "BUTTON"].includes(o.nodeName) || e.preventDefault();
                else if (Math.abs(this.velocity.a) > .3) return !1;
                return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), this.isDragging || (this.isDragging = !0, this.addTrackingPoint(t), this.emit("touchStart", e)), !0
            }
            onPointerMove(e, t, i) {
                if (this.option("touch", e) === !1 || !this.isDragging || t.length < 2 && this.panOnlyZoomed && g(this.targetScale) <= g(this.minScale) || (this.emit("touchMove", e), e.defaultPrevented)) return;
                this.addTrackingPoint(t[0]);
                const {
                    content: n
                } = this, s = Be(i[0], i[1]), o = Be(t[0], t[1]);
                let a = 0,
                    l = 0;
                if (t.length > 1) {
                    const w = n.getBoundingClientRect();
                    a = s.clientX - w.left - .5 * w.width, l = s.clientY - w.top - .5 * w.height
                }
                const r = He(i[0], i[1]),
                    d = He(t[0], t[1]);
                let h = r ? d / r : 1,
                    u = o.clientX - s.clientX,
                    p = o.clientY - s.clientY;
                this.dragOffset.x += u, this.dragOffset.y += p, this.dragOffset.time = Date.now() - this.dragStart.time;
                let f = g(this.targetScale) === g(this.minScale) && this.option("lockAxis");
                if (f && !this.lockedAxis)
                    if (f === "xy" || f === "y" || e.type === "touchmove") {
                        if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void e.preventDefault();
                        const w = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
                        this.lockedAxis = w > 45 && w < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, u = 0, p = 0
                    } else this.lockedAxis = f;
                if (ce(e.target, this.content) && (f = "x", this.dragOffset.y = 0), f && f !== "xy" && this.lockedAxis !== f && g(this.targetScale) === g(this.minScale)) return;
                e.cancelable && e.preventDefault(), this.container.classList.add(this.cn("isDragging"));
                const m = this.checkBounds(u, p);
                this.option("rubberband") ? (this.isInfinite !== "x" && (m.xDiff > 0 && u < 0 || m.xDiff < 0 && u > 0) && (u *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitWidth * m.xDiff))), this.isInfinite !== "y" && (m.yDiff > 0 && p < 0 || m.yDiff < 0 && p > 0) && (p *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitHeight * m.yDiff)))) : (m.xDiff && (u = 0), m.yDiff && (p = 0));
                const b = this.targetScale,
                    v = this.minScale,
                    x = this.maxScale;
                b < .5 * v && (h = Math.max(h, v)), b > 1.5 * x && (h = Math.min(h, x)), this.lockedAxis === "y" && g(b) === g(v) && (u = 0), this.lockedAxis === "x" && g(b) === g(v) && (p = 0), this.applyChange({
                    originX: a,
                    originY: l,
                    panX: u,
                    panY: p,
                    scale: h,
                    friction: this.option("dragFriction"),
                    ignoreBounds: !0
                })
            }
            onPointerUp(e, t, i) {
                if (i.length) return this.dragOffset.x = 0, this.dragOffset.y = 0, void(this.trackingPoints = []);
                this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(t), this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), ce(e.target, this.content) && this.lockedAxis === "y" && (this.trackingPoints = []), this.emit("touchEnd", e), this.isDragging = !1, this.lockedAxis = !1, this.state !== S.Destroy && (e.defaultPrevented || this.startDecelAnim()))
            }
            startDecelAnim() {
                var e;
                const t = this.isScaling;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;
                for (const w of B) this.velocity[w] = 0;
                this.target.e = this.current.e, this.target.f = this.current.f, C(this.container, "is-scaling"), C(this.container, "is-animating"), this.isTicking = !1;
                const {
                    trackingPoints: i
                } = this, n = i[0], s = i[i.length - 1];
                let o = 0,
                    a = 0,
                    l = 0;
                s && n && (o = s.clientX - n.clientX, a = s.clientY - n.clientY, l = s.time - n.time);
                const r = ((e = window.visualViewport) === null || e === void 0 ? void 0 : e.scale) || 1;
                r !== 1 && (o *= r, a *= r);
                let d = 0,
                    h = 0,
                    u = 0,
                    p = 0,
                    f = this.option("decelFriction");
                const m = this.targetScale;
                if (l > 0) {
                    u = Math.abs(o) > 3 ? o / (l / 30) : 0, p = Math.abs(a) > 3 ? a / (l / 30) : 0;
                    const w = this.option("maxVelocity");
                    w && (u = Math.max(Math.min(u, w), -1 * w), p = Math.max(Math.min(p, w), -1 * w))
                }
                u && (d = u / (1 / (1 - f) - 1)), p && (h = p / (1 / (1 - f) - 1)), (this.option("lockAxis") === "y" || this.option("lockAxis") === "xy" && this.lockedAxis === "y" && g(m) === this.minScale) && (d = u = 0), (this.option("lockAxis") === "x" || this.option("lockAxis") === "xy" && this.lockedAxis === "x" && g(m) === this.minScale) && (h = p = 0);
                const b = this.dragOffset.x,
                    v = this.dragOffset.y,
                    x = this.option("dragMinThreshold") || 0;
                Math.abs(b) < x && Math.abs(v) < x && (d = h = 0, u = p = 0), (m < this.minScale - 1e-5 || m > this.maxScale + 1e-5 || t && !d && !h) && (f = .35), this.applyChange({
                    panX: d,
                    panY: h,
                    friction: f
                }), this.emit("decel", u, p, b, v)
            }
            onWheel(e) {
                var t = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function(s, o) {
                    return Math.abs(o) > Math.abs(s) ? o : s
                });
                const i = Math.max(-1, Math.min(1, t));
                if (this.emit("wheel", e, i), this.panMode === k || e.defaultPrevented) return;
                const n = this.option("wheel");
                n === "pan" ? (e.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({
                    panX: 2 * -e.deltaX,
                    panY: 2 * -e.deltaY,
                    bounce: !1
                })) : n === "zoom" && this.option("zoom") !== !1 && this.zoomWithWheel(e)
            }
            onMouseMove(e) {
                this.panWithMouse(e)
            }
            onKeydown(e) {
                e.key === "Escape" && this.toggleFS()
            }
            onResize() {
                this.updateMetrics(), this.checkBounds().inBounds || this.requestTick()
            }
            setTransform() {
                this.emit("beforeTransform");
                const {
                    current: e,
                    target: t,
                    content: i,
                    contentRect: n
                } = this, s = Object.assign({}, ue);
                for (const b of B) {
                    const v = b == "e" || b === "f" ? pe : wt;
                    s[b] = g(e[b], v), Math.abs(t[b] - e[b]) < (b == "e" || b === "f" ? .51 : .001) && (e[b] = t[b])
                }
                let {
                    a: o,
                    b: a,
                    c: l,
                    d: r,
                    e: d,
                    f: h
                } = s, u = `matrix(${o}, ${a}, ${l}, ${r}, ${d}, ${h})`, p = i.parentElement instanceof HTMLPictureElement ? i.parentElement : i;
                if (this.option("transformParent") && (p = p.parentElement || p), p.style.transform === u) return;
                p.style.transform = u;
                const {
                    contentWidth: f,
                    contentHeight: m
                } = this.calculateContentDim();
                n.width = f, n.height = m, this.emit("afterTransform")
            }
            updateMetrics(e = !1) {
                var t;
                if (!this || this.state === S.Destroy || this.isContentLoading) return;
                const i = Math.max(1, ((t = window.visualViewport) === null || t === void 0 ? void 0 : t.scale) || 1),
                    {
                        container: n,
                        content: s
                    } = this,
                    o = s instanceof HTMLImageElement,
                    a = n.getBoundingClientRect(),
                    l = getComputedStyle(this.container);
                let r = a.width * i,
                    d = a.height * i;
                const h = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom),
                    u = r - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)),
                    p = d - h;
                this.containerRect = {
                    width: r,
                    height: d,
                    innerWidth: u,
                    innerHeight: p
                };
                let f = this.option("width") || "auto",
                    m = this.option("height") || "auto";
                f === "auto" && (f = parseFloat(s.dataset.width || "") || (P => {
                    let H = 0;
                    return H = P instanceof HTMLImageElement ? P.naturalWidth : P instanceof SVGElement ? P.width.baseVal.value : Math.max(P.offsetWidth, P.scrollWidth), H || 0
                })(s)), m === "auto" && (m = parseFloat(s.dataset.height || "") || (P => {
                    let H = 0;
                    return H = P instanceof HTMLImageElement ? P.naturalHeight : P instanceof SVGElement ? P.height.baseVal.value : Math.max(P.offsetHeight, P.scrollHeight), H || 0
                })(s));
                let b = s.parentElement instanceof HTMLPictureElement ? s.parentElement : s;
                this.option("transformParent") && (b = b.parentElement || b);
                const v = b.getAttribute("style") || "";
                b.style.setProperty("transform", "none", "important"), o && (b.style.width = "", b.style.height = ""), b.offsetHeight;
                const x = s.getBoundingClientRect();
                let w = x.width * i,
                    M = x.height * i,
                    $ = 0,
                    Y = 0;
                o && (Math.abs(f - w) > 1 || Math.abs(m - M) > 1) && ({
                    width: w,
                    height: M,
                    top: $,
                    left: Y
                } = ((P, H, oe, ae) => {
                    const Ie = oe / ae;
                    return Ie > P / H ? (oe = P, ae = P / Ie) : (oe = H * Ie, ae = H), {
                        width: oe,
                        height: ae,
                        top: .5 * (H - ae),
                        left: .5 * (P - oe)
                    }
                })(w, M, f, m)), this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
                    top: x.top - a.top + $,
                    bottom: a.bottom - x.bottom + $,
                    left: x.left - a.left + Y,
                    right: a.right - x.right + Y,
                    fitWidth: w,
                    fitHeight: M,
                    width: w,
                    height: M,
                    fullWidth: f,
                    fullHeight: m
                }), b.style.cssText = v, o && (b.style.width = `${w}px`, b.style.height = `${M}px`), this.setTransform(), e !== !0 && this.emit("refresh"), this.ignoreBounds || (g(this.targetScale) < g(this.minScale) ? this.zoomTo(this.minScale, {
                    friction: 0
                }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, {
                    friction: 0
                }) : this.state === S.Init || this.checkBounds().inBounds || this.requestTick()), this.updateControls()
            }
            getBounds() {
                const e = this.option("bounds");
                if (e !== "auto") return e;
                const {
                    contentWidth: t,
                    contentHeight: i
                } = this.calculateContentDim(this.target);
                let n = 0,
                    s = 0,
                    o = 0,
                    a = 0;
                const l = this.option("infinite");
                if (l === !0 || this.lockedAxis && l === this.lockedAxis) n = -1 / 0, o = 1 / 0, s = -1 / 0, a = 1 / 0;
                else {
                    let {
                        containerRect: r,
                        contentRect: d
                    } = this, h = g(this.contentRect.fitWidth * this.targetScale, pe), u = g(this.contentRect.fitHeight * this.targetScale, pe), {
                        innerWidth: p,
                        innerHeight: f
                    } = r;
                    if (this.containerRect.width === h && (p = r.width), this.containerRect.width === u && (f = r.height), t > p) {
                        o = .5 * (t - p), n = -1 * o;
                        let m = .5 * (d.right - d.left);
                        n += m, o += m
                    }
                    if (this.contentRect.fitWidth > p && t < p && (n -= .5 * (this.contentRect.fitWidth - p), o -= .5 * (this.contentRect.fitWidth - p)), i > f) {
                        a = .5 * (i - f), s = -1 * a;
                        let m = .5 * (d.bottom - d.top);
                        s += m, a += m
                    }
                    this.contentRect.fitHeight > f && i < f && (n -= .5 * (this.contentRect.fitHeight - f), o -= .5 * (this.contentRect.fitHeight - f))
                }
                return {
                    x: {
                        min: n,
                        max: o
                    },
                    y: {
                        min: s,
                        max: a
                    }
                }
            }
            updateControls() {
                const e = this,
                    t = e.container,
                    {
                        panMode: i,
                        contentRect: n,
                        fullScale: s,
                        targetScale: o,
                        coverScale: a,
                        maxScale: l,
                        minScale: r
                    } = e;
                let d = {
                        toggleMax: o - r < .5 * (l - r) ? l : r,
                        toggleCover: o - r < .5 * (a - r) ? a : r,
                        toggleZoom: o - r < .5 * (s - r) ? s : r
                    }[e.option("click") || ""] || r,
                    h = e.canZoomIn(),
                    u = e.canZoomOut(),
                    p = i === _e && !!this.option("touch"),
                    f = u && p;
                if (p && (g(o) < g(r) && !this.panOnlyZoomed && (f = !0), (g(n.width, 1) > g(n.fitWidth, 1) || g(n.height, 1) > g(n.fitHeight, 1)) && (f = !0)), g(n.width * o, 1) < g(n.fitWidth, 1) && (f = !1), i === k && (f = !1), F(t, this.cn("isDraggable"), f), !this.option("zoom")) return;
                let m = h && g(d) > g(o),
                    b = !m && !f && u && g(d) < g(o);
                F(t, this.cn("canZoomIn"), m), F(t, this.cn("canZoomOut"), b);
                for (const v of t.querySelectorAll('[data-panzoom-action="zoomIn"]')) h ? (v.removeAttribute("disabled"), v.removeAttribute("tabindex")) : (v.setAttribute("disabled", ""), v.setAttribute("tabindex", "-1"));
                for (const v of t.querySelectorAll('[data-panzoom-action="zoomOut"]')) u ? (v.removeAttribute("disabled"), v.removeAttribute("tabindex")) : (v.setAttribute("disabled", ""), v.setAttribute("tabindex", "-1"));
                for (const v of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
                    h || u ? (v.removeAttribute("disabled"), v.removeAttribute("tabindex")) : (v.setAttribute("disabled", ""), v.setAttribute("tabindex", "-1"));
                    const x = v.querySelector("g");
                    x && (x.style.display = h ? "" : "none")
                }
            }
            panTo({
                x: e = this.target.e,
                y: t = this.target.f,
                scale: i = this.targetScale,
                friction: n = this.option("friction"),
                angle: s = 0,
                originX: o = 0,
                originY: a = 0,
                flipX: l = !1,
                flipY: r = !1,
                ignoreBounds: d = !1
            }) {
                this.state !== S.Destroy && this.applyChange({
                    panX: e - this.target.e,
                    panY: t - this.target.f,
                    scale: i / this.targetScale,
                    angle: s,
                    originX: o,
                    originY: a,
                    friction: n,
                    flipX: l,
                    flipY: r,
                    ignoreBounds: d
                })
            }
            applyChange({
                panX: e = 0,
                panY: t = 0,
                scale: i = 1,
                angle: n = 0,
                originX: s = -this.current.e,
                originY: o = -this.current.f,
                friction: a = this.option("friction"),
                flipX: l = !1,
                flipY: r = !1,
                ignoreBounds: d = !1,
                bounce: h = this.option("bounce")
            }) {
                const u = this.state;
                if (u === S.Destroy) return;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = a || 0, this.ignoreBounds = d;
                const {
                    current: p
                } = this, f = p.e, m = p.f, b = this.getMatrix(this.target);
                let v = new DOMMatrix().translate(f, m).translate(s, o).translate(e, t);
                if (this.option("zoom")) {
                    if (!d) {
                        const x = this.targetScale,
                            w = this.minScale,
                            M = this.maxScale;
                        x * i < w && (i = w / x), x * i > M && (i = M / x)
                    }
                    v = v.scale(i)
                }
                v = v.translate(-s, -o).translate(-f, -m).multiply(b), n && (v = v.rotate(n)), l && (v = v.scale(-1, 1)), r && (v = v.scale(1, -1));
                for (const x of B) x !== "e" && x !== "f" && (v[x] > this.minScale + 1e-5 || v[x] < this.minScale - 1e-5) ? this.target[x] = v[x] : this.target[x] = g(v[x], pe);
                (this.targetScale < this.scale || Math.abs(i - 1) > .1 || this.panMode === k || h === !1) && !d && this.clampTargetBounds(), u === S.Init ? this.animate() : this.isResting || (this.state = S.Panning, this.requestTick())
            }
            stop(e = !1) {
                if (this.state === S.Init || this.state === S.Destroy) return;
                const t = this.isTicking;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;
                for (const i of B) this.velocity[i] = 0, e === "current" ? this.current[i] = this.target[i] : e === "target" && (this.target[i] = this.current[i]);
                this.setTransform(), C(this.container, "is-scaling"), C(this.container, "is-animating"), this.isTicking = !1, this.state = S.Ready, t && (this.emit("endAnimation"), this.updateControls())
            }
            requestTick() {
                this.isTicking || (this.emit("startAnimation"), this.updateControls(), y(this.container, "is-animating"), this.isScaling && y(this.container, "is-scaling")), this.isTicking = !0, this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()))
            }
            panWithMouse(e, t = this.option("mouseMoveFriction")) {
                if (this.pmme = e, this.panMode !== k || !e || g(this.targetScale) <= g(this.minScale)) return;
                this.emit("mouseMove", e);
                const {
                    container: i,
                    containerRect: n,
                    contentRect: s
                } = this, o = n.width, a = n.height, l = i.getBoundingClientRect(), r = (e.clientX || 0) - l.left, d = (e.clientY || 0) - l.top;
                let {
                    contentWidth: h,
                    contentHeight: u
                } = this.calculateContentDim(this.target);
                const p = this.option("mouseMoveFactor");
                p > 1 && (h !== o && (h *= p), u !== a && (u *= p));
                let f = .5 * (h - o) - r / o * 100 / 100 * (h - o);
                f += .5 * (s.right - s.left);
                let m = .5 * (u - a) - d / a * 100 / 100 * (u - a);
                m += .5 * (s.bottom - s.top), this.applyChange({
                    panX: f - this.target.e,
                    panY: m - this.target.f,
                    friction: t
                })
            }
            zoomWithWheel(e) {
                if (this.state === S.Destroy || this.state === S.Init) return;
                const t = Date.now();
                if (t - this.pwt < 45) return void e.preventDefault();
                this.pwt = t;
                var i = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function(r, d) {
                    return Math.abs(d) > Math.abs(r) ? d : r
                });
                const n = Math.max(-1, Math.min(1, i)),
                    {
                        targetScale: s,
                        maxScale: o,
                        minScale: a
                    } = this;
                let l = s * (100 + 45 * n) / 100;
                g(l) < g(a) && g(s) <= g(a) ? (this.cwd += Math.abs(n), l = a) : g(l) > g(o) && g(s) >= g(o) ? (this.cwd += Math.abs(n), l = o) : (this.cwd = 0, l = Math.max(Math.min(l, o), a)), this.cwd > this.option("wheelLimit") || (e.preventDefault(), g(l) !== g(s) && this.zoomTo(l, {
                    event: e
                }))
            }
            canZoomIn() {
                return this.option("zoom") && (g(this.contentRect.width, 1) < g(this.contentRect.fitWidth, 1) || g(this.targetScale) < g(this.maxScale))
            }
            canZoomOut() {
                return this.option("zoom") && g(this.targetScale) > g(this.minScale)
            }
            zoomIn(e = 1.25, t) {
                this.zoomTo(this.targetScale * e, t)
            }
            zoomOut(e = .8, t) {
                this.zoomTo(this.targetScale * e, t)
            }
            zoomToFit(e) {
                this.zoomTo("fit", e)
            }
            zoomToCover(e) {
                this.zoomTo("cover", e)
            }
            zoomToFull(e) {
                this.zoomTo("full", e)
            }
            zoomToMax(e) {
                this.zoomTo("max", e)
            }
            toggleZoom(e) {
                this.zoomTo(this.targetScale - this.minScale < .5 * (this.fullScale - this.minScale) ? "full" : "fit", e)
            }
            toggleMax(e) {
                this.zoomTo(this.targetScale - this.minScale < .5 * (this.maxScale - this.minScale) ? "max" : "fit", e)
            }
            toggleCover(e) {
                this.zoomTo(this.targetScale - this.minScale < .5 * (this.coverScale - this.minScale) ? "cover" : "fit", e)
            }
            iterateZoom(e) {
                this.zoomTo("next", e)
            }
            zoomTo(e = 1, {
                friction: t = "auto",
                originX: i = "auto",
                originY: n = "auto",
                event: s
            } = {}) {
                if (this.isContentLoading || this.state === S.Destroy) return;
                const {
                    targetScale: o
                } = this;
                this.stop();
                let a = 1;
                if (this.panMode === k && (s = this.pmme || s), s || i === "auto" || n === "auto") {
                    const h = this.content.getBoundingClientRect(),
                        u = this.container.getBoundingClientRect(),
                        p = s ? s.clientX : u.left + .5 * u.width,
                        f = s ? s.clientY : u.top + .5 * u.height;
                    i = p - h.left - .5 * h.width, n = f - h.top - .5 * h.height
                }
                const l = this.fullScale,
                    r = this.maxScale;
                let d = this.coverScale;
                typeof e == "number" ? a = e / o : (e === "next" && (l - d < .2 && (d = l), e = o < l - 1e-5 ? "full" : o < r - 1e-5 ? "max" : "fit"), a = e === "full" ? l / o || 1 : e === "cover" ? d / o || 1 : e === "max" ? r / o || 1 : 1 / o || 1), t = t === "auto" ? a > 1 ? .15 : .25 : t, this.applyChange({
                    scale: a,
                    originX: i,
                    originY: n,
                    friction: t
                }), s && this.panMode === k && this.panWithMouse(s, t)
            }
            rotateCCW() {
                this.applyChange({
                    angle: -90
                })
            }
            rotateCW() {
                this.applyChange({
                    angle: 90
                })
            }
            flipX() {
                this.applyChange({
                    flipX: !0
                })
            }
            flipY() {
                this.applyChange({
                    flipY: !0
                })
            }
            fitX() {
                this.stop("target");
                const {
                    containerRect: e,
                    contentRect: t,
                    target: i
                } = this;
                this.applyChange({
                    panX: .5 * e.width - (t.left + .5 * t.fitWidth) - i.e,
                    panY: .5 * e.height - (t.top + .5 * t.fitHeight) - i.f,
                    scale: e.width / t.fitWidth / this.targetScale,
                    originX: 0,
                    originY: 0,
                    ignoreBounds: !0
                })
            }
            fitY() {
                this.stop("target");
                const {
                    containerRect: e,
                    contentRect: t,
                    target: i
                } = this;
                this.applyChange({
                    panX: .5 * e.width - (t.left + .5 * t.fitWidth) - i.e,
                    panY: .5 * e.innerHeight - (t.top + .5 * t.fitHeight) - i.f,
                    scale: e.height / t.fitHeight / this.targetScale,
                    originX: 0,
                    originY: 0,
                    ignoreBounds: !0
                })
            }
            toggleFS() {
                const {
                    container: e
                } = this, t = this.cn("inFullscreen"), i = this.cn("htmlHasFullscreen");
                e.classList.toggle(t);
                const n = e.classList.contains(t);
                n ? (document.documentElement.classList.add(i), document.addEventListener("keydown", this.onKeydown, !0)) : (document.documentElement.classList.remove(i), document.removeEventListener("keydown", this.onKeydown, !0)), this.updateMetrics(), this.emit(n ? "enterFS" : "exitFS")
            }
            getMatrix(e = this.current) {
                const {
                    a: t,
                    b: i,
                    c: n,
                    d: s,
                    e: o,
                    f: a
                } = e;
                return new DOMMatrix([t, i, n, s, o, a])
            }
            reset(e) {
                if (this.state !== S.Init && this.state !== S.Destroy) {
                    this.stop("current");
                    for (const t of B) this.target[t] = ue[t];
                    this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), this.isResting || (this.friction = e === void 0 ? this.option("friction") : e, this.state = S.Panning, this.requestTick())
                }
            }
            destroy() {
                this.stop(), this.state = S.Destroy, this.detachEvents(), this.detachObserver();
                const {
                    container: e,
                    content: t
                } = this, i = this.option("classes") || {};
                for (const n of Object.values(i)) e.classList.remove(n + "");
                t && (t.removeEventListener("load", this.onLoad), t.removeEventListener("error", this.onError)), this.detachPlugins()
            }
        }
        Object.defineProperty(W, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yt
        }), Object.defineProperty(W, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        });
        const We = function(c, e) {
                let t = !0;
                return (...i) => {
                    t && (t = !1, c(...i), setTimeout(() => {
                        t = !0
                    }, e))
                }
            },
            Xe = (c, e) => {
                let t = [];
                return c.childNodes.forEach(i => {
                    i.nodeType !== Node.ELEMENT_NODE || e && !i.matches(e) || t.push(i)
                }), t
            },
            xt = {
                viewport: null,
                track: null,
                enabled: !0,
                slides: [],
                axis: "x",
                transition: "fade",
                preload: 1,
                slidesPerPage: "auto",
                initialPage: 0,
                friction: .12,
                Panzoom: {
                    decelFriction: .12
                },
                center: !0,
                infinite: !0,
                fill: !0,
                dragFree: !1,
                adaptiveHeight: !1,
                direction: "ltr",
                classes: {
                    container: "f-carousel",
                    viewport: "f-carousel__viewport",
                    track: "f-carousel__track",
                    slide: "f-carousel__slide",
                    isLTR: "is-ltr",
                    isRTL: "is-rtl",
                    isHorizontal: "is-horizontal",
                    isVertical: "is-vertical",
                    inTransition: "in-transition",
                    isSelected: "is-selected"
                },
                l10n: {
                    NEXT: "Next slide",
                    PREV: "Previous slide",
                    GOTO: "Go to slide #%d"
                }
            };
        var T;
        (function(c) {
            c[c.Init = 0] = "Init", c[c.Ready = 1] = "Ready", c[c.Destroy = 2] = "Destroy"
        })(T || (T = {}));
        const fe = c => {
                if (typeof c == "string" || c instanceof HTMLElement) c = {
                    html: c
                };
                else {
                    const e = c.thumb;
                    e !== void 0 && (typeof e == "string" && (c.thumbSrc = e), e instanceof HTMLImageElement && (c.thumbEl = e, c.thumbElSrc = e.src, c.thumbSrc = e.src), delete c.thumb)
                }
                return Object.assign({
                    html: "",
                    el: null,
                    isDom: !1,
                    class: "",
                    customClass: "",
                    index: -1,
                    dim: 0,
                    gap: 0,
                    pos: 0,
                    transition: !1
                }, c)
            },
            Et = (c = {}) => Object.assign({
                index: -1,
                slides: [],
                dim: 0,
                pos: -1
            }, c);
        class D extends he {
            constructor(e, t) {
                super(t), Object.defineProperty(this, "instance", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e
                })
            }
            attach() {}
            detach() {}
        }
        const St = {
            classes: {
                list: "f-carousel__dots",
                isDynamic: "is-dynamic",
                hasDots: "has-dots",
                dot: "f-carousel__dot",
                isBeforePrev: "is-before-prev",
                isPrev: "is-prev",
                isCurrent: "is-current",
                isNext: "is-next",
                isAfterNext: "is-after-next"
            },
            dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
            dynamicFrom: 11,
            maxCount: 1 / 0,
            minCount: 2
        };
        class Ye extends D {
            constructor() {
                super(...arguments), Object.defineProperty(this, "isDynamic", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "list", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                })
            }
            onRefresh() {
                this.refresh()
            }
            build() {
                let e = this.list;
                return e || (e = document.createElement("ul"), y(e, this.cn("list")), e.setAttribute("role", "tablist"), this.instance.container.appendChild(e), y(this.instance.container, this.cn("hasDots")), this.list = e), e
            }
            refresh() {
                var e;
                const t = this.instance.pages.length,
                    i = Math.min(2, this.option("minCount")),
                    n = Math.max(2e3, this.option("maxCount")),
                    s = this.option("dynamicFrom");
                if (t < i || t > n) return void this.cleanup();
                const o = typeof s == "number" && t > 5 && t >= s,
                    a = !this.list || this.isDynamic !== o || this.list.children.length !== t;
                a && this.cleanup();
                const l = this.build();
                if (F(l, this.cn("isDynamic"), !!o), a)
                    for (let h = 0; h < t; h++) l.append(this.createItem(h));
                let r, d = 0;
                for (const h of [...l.children]) {
                    const u = d === this.instance.page;
                    u && (r = h), F(h, this.cn("isCurrent"), u), (e = h.children[0]) === null || e === void 0 || e.setAttribute("aria-selected", u ? "true" : "false");
                    for (const p of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"]) C(h, this.cn(p));
                    d++
                }
                if (r = r || l.firstChild, o && r) {
                    const h = r.previousElementSibling,
                        u = h && h.previousElementSibling;
                    y(h, this.cn("isPrev")), y(u, this.cn("isBeforePrev"));
                    const p = r.nextElementSibling,
                        f = p && p.nextElementSibling;
                    y(p, this.cn("isNext")), y(f, this.cn("isAfterNext"))
                }
                this.isDynamic = o
            }
            createItem(e = 0) {
                var t;
                const i = document.createElement("li");
                i.setAttribute("role", "presentation");
                const n = R(this.instance.localize(this.option("dotTpl"), [
                    ["%d", e + 1]
                ]).replace(/\%i/g, e + ""));
                return i.appendChild(n), (t = i.children[0]) === null || t === void 0 || t.setAttribute("role", "tab"), i
            }
            cleanup() {
                this.list && (this.list.remove(), this.list = null), this.isDynamic = !1, C(this.instance.container, this.cn("hasDots"))
            }
            attach() {
                this.instance.on(["refresh", "change"], this.onRefresh)
            }
            detach() {
                this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup()
            }
        }
        Object.defineProperty(Ye, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: St
        });
        const me = "disabled",
            ge = "next",
            qe = "prev";
        class Ve extends D {
            constructor() {
                super(...arguments), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "prev", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "next", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                })
            }
            onRefresh() {
                const e = this.instance,
                    t = e.pages.length,
                    i = e.page;
                if (t < 2) return void this.cleanup();
                this.build();
                let n = this.prev,
                    s = this.next;
                n && s && (n.removeAttribute(me), s.removeAttribute(me), e.isInfinite || (i <= 0 && n.setAttribute(me, ""), i >= t - 1 && s.setAttribute(me, "")))
            }
            createButton(e) {
                const t = this.instance,
                    i = document.createElement("button");
                i.setAttribute("tabindex", "0"), i.setAttribute("title", t.localize(`{{${e.toUpperCase()}}}`)), y(i, this.cn("button") + " " + this.cn(e === ge ? "isNext" : "isPrev"));
                const n = t.isRTL ? e === ge ? qe : ge : e;
                var s;
                return i.innerHTML = t.localize(this.option(`${n}Tpl`)), i.dataset[`carousel${s=e,s?s.match("^[a-z]")?s.charAt(0).toUpperCase()+s.substring(1):s:""}`] = "true", i
            }
            build() {
                let e = this.container;
                e || (this.container = e = document.createElement("div"), y(e, this.cn("container")), this.instance.container.appendChild(e)), this.next || (this.next = e.appendChild(this.createButton(ge))), this.prev || (this.prev = e.appendChild(this.createButton(qe)))
            }
            cleanup() {
                this.prev && this.prev.remove(), this.next && this.next.remove(), this.container && this.container.remove(), this.prev = null, this.next = null, this.container = null
            }
            attach() {
                this.instance.on(["refresh", "change"], this.onRefresh)
            }
            detach() {
                this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup()
            }
        }
        Object.defineProperty(Ve, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                classes: {
                    container: "f-carousel__nav",
                    button: "f-button",
                    isNext: "is-next",
                    isPrev: "is-prev"
                },
                nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
                prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'
            }
        });
        class Ze extends D {
            constructor() {
                super(...arguments), Object.defineProperty(this, "selectedIndex", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "target", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "nav", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                })
            }
            addAsTargetFor(e) {
                this.target = this.instance, this.nav = e, this.attachEvents()
            }
            addAsNavFor(e) {
                this.nav = this.instance, this.target = e, this.attachEvents()
            }
            attachEvents() {
                this.nav && this.target && (this.nav.options.initialSlide = this.target.options.initialPage, this.nav.state === T.Ready ? this.onNavReady(this.nav) : this.nav.on("ready", this.onNavReady), this.target.state === T.Ready ? this.onTargetReady(this.target) : this.target.on("ready", this.onTargetReady))
            }
            onNavReady(e) {
                e.on("createSlide", this.onNavCreateSlide), e.on("Panzoom.click", this.onNavClick), e.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange()
            }
            onTargetReady(e) {
                e.on("change", this.onTargetChange), e.on("Panzoom.refresh", this.onTargetChange), this.onTargetChange()
            }
            onNavClick(e, t, i) {
                this.onNavTouch(e, e.panzoom, i)
            }
            onNavTouch(e, t, i) {
                var n, s;
                if (Math.abs(t.dragOffset.x) > 3 || Math.abs(t.dragOffset.y) > 3) return;
                const o = i.target,
                    {
                        nav: a,
                        target: l
                    } = this;
                if (!a || !l || !o) return;
                const r = o.closest("[data-index]");
                if (i.stopPropagation(), i.preventDefault(), !r) return;
                const d = parseInt(r.dataset.index || "", 10) || 0,
                    h = l.getPageForSlide(d),
                    u = a.getPageForSlide(d);
                a.slideTo(u), l.slideTo(h, {
                    friction: ((s = (n = this.nav) === null || n === void 0 ? void 0 : n.plugins) === null || s === void 0 ? void 0 : s.Sync.option("friction")) || 0
                }), this.markSelectedSlide(d)
            }
            onNavCreateSlide(e, t) {
                t.index === this.selectedIndex && this.markSelectedSlide(t.index)
            }
            onTargetChange() {
                const {
                    target: e,
                    nav: t
                } = this;
                if (!e || !t || t.state !== T.Ready || e.state !== T.Ready) return;
                const i = e.pages[e.page].slides[0].index,
                    n = t.getPageForSlide(i);
                this.markSelectedSlide(i), t.slideTo(n, t.prevPage === null ? {
                    friction: 0
                } : void 0)
            }
            markSelectedSlide(e) {
                const t = this.nav;
                t && t.state === T.Ready && (this.selectedIndex = e, [...t.slides].map(i => {
                    i.el && i.el.classList[i.index === e ? "add" : "remove"]("is-nav-selected")
                }))
            }
            attach() {
                const e = this;
                let t = e.options.target,
                    i = e.options.nav;
                t ? e.addAsNavFor(t) : i && e.addAsTargetFor(i)
            }
            detach() {
                const e = this,
                    t = e.nav,
                    i = e.target;
                t && (t.off("ready", e.onNavReady), t.off("createSlide", e.onNavCreateSlide), t.off("Panzoom.click", e.onNavClick), t.off("Panzoom.touchEnd", e.onNavTouch)), e.nav = null, i && (i.off("ready", e.onTargetReady), i.off("refresh", e.onTargetChange), i.off("change", e.onTargetChange)), e.target = null
            }
        }
        Object.defineProperty(Ze, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                friction: .35
            }
        });
        const Pt = {
            Navigation: Ve,
            Dots: Ye,
            Sync: Ze
        };
        class X extends Ee {
            get axis() {
                return this.isHorizontal ? "e" : "f"
            }
            get isEnabled() {
                return this.state === T.Ready
            }
            get isInfinite() {
                let e = !1;
                const {
                    contentDim: t,
                    viewportDim: i,
                    pages: n,
                    slides: s
                } = this;
                return n.length >= 2 && t + s[0].dim >= i && (e = this.option("infinite")), e
            }
            get isRTL() {
                return this.option("direction") === "rtl"
            }
            get isHorizontal() {
                return this.option("axis") === "x"
            }
            constructor(e, t = {}, i = {}) {
                if (super(), Object.defineProperty(this, "bp", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: ""
                    }), Object.defineProperty(this, "lp", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }), Object.defineProperty(this, "userOptions", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: {}
                    }), Object.defineProperty(this, "userPlugins", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: {}
                    }), Object.defineProperty(this, "state", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: T.Init
                    }), Object.defineProperty(this, "page", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }), Object.defineProperty(this, "prevPage", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: null
                    }), Object.defineProperty(this, "container", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "viewport", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: null
                    }), Object.defineProperty(this, "track", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: null
                    }), Object.defineProperty(this, "slides", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: []
                    }), Object.defineProperty(this, "pages", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: []
                    }), Object.defineProperty(this, "panzoom", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: null
                    }), Object.defineProperty(this, "inTransition", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: new Set
                    }), Object.defineProperty(this, "contentDim", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }), Object.defineProperty(this, "viewportDim", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }), typeof e == "string" && (e = document.querySelector(e)), !e || !z(e)) throw new Error("No Element found");
                this.container = e, this.slideNext = We(this.slideNext.bind(this), 150), this.slidePrev = We(this.slidePrev.bind(this), 150), this.userOptions = t, this.userPlugins = i, queueMicrotask(() => {
                    this.processOptions()
                })
            }
            processOptions() {
                const e = L({}, X.defaults, this.userOptions);
                let t = "";
                const i = e.breakpoints;
                if (i && we(i))
                    for (const [n, s] of Object.entries(i)) window.matchMedia(n).matches && we(s) && (t += n, L(e, s));
                t === this.bp && this.state !== T.Init || (this.bp = t, this.state === T.Ready && (e.initialSlide = this.pages[this.page].slides[0].index), this.state !== T.Init && this.destroy(), super.setOptions(e), this.option("enabled") === !1 ? this.attachEvents() : setTimeout(() => {
                    this.init()
                }, 0))
            }
            init() {
                this.state = T.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, X.Plugins), this.userPlugins)), this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = T.Ready, this.emit("ready")
            }
            initLayout() {
                const {
                    container: e
                } = this, t = this.option("classes");
                y(e, this.cn("container")), F(e, t.isLTR, !this.isRTL), F(e, t.isRTL, this.isRTL), F(e, t.isVertical, !this.isHorizontal), F(e, t.isHorizontal, this.isHorizontal);
                let i = this.option("viewport") || e.querySelector(`.${t.viewport}`);
                i || (i = document.createElement("div"), y(i, t.viewport), i.append(...Xe(e, `.${t.slide}`)), e.prepend(i));
                let n = this.option("track") || e.querySelector(`.${t.track}`);
                n || (n = document.createElement("div"), y(n, t.track), n.append(...Array.from(i.childNodes))), n.setAttribute("aria-live", "polite"), i.contains(n) || i.prepend(n), this.viewport = i, this.track = n, this.emit("initLayout")
            }
            initSlides() {
                const {
                    track: e
                } = this;
                if (e) {
                    this.slides = [], [...Xe(e, `.${this.cn("slide")}`)].forEach(t => {
                        if (z(t)) {
                            const i = fe({
                                el: t,
                                isDom: !0,
                                index: this.slides.length
                            });
                            this.slides.push(i), this.emit("initSlide", i, this.slides.length)
                        }
                    });
                    for (let t of this.option("slides", [])) {
                        const i = fe(t);
                        i.index = this.slides.length, this.slides.push(i), this.emit("initSlide", i, this.slides.length)
                    }
                    this.emit("initSlides")
                }
            }
            setInitialPage() {
                let e = 0;
                const t = this.option("initialSlide");
                e = typeof t == "number" ? this.getPageForSlide(t) : parseInt(this.option("initialPage", 0) + "", 10) || 0, this.page = e
            }
            setInitialPosition() {
                if (!this.track || !this.pages.length) return;
                const e = this.isHorizontal;
                let t = this.page;
                this.pages[t] || (this.page = t = 0);
                const i = this.pages[t].pos * (this.isRTL && e ? 1 : -1),
                    n = e ? `${i}px` : "0",
                    s = e ? "0" : `${i}px`;
                this.track.style.transform = `translate3d(${n}, ${s}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight()
            }
            initPanzoom() {
                this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
                const e = this.option("Panzoom") || {};
                this.panzoom = new W(this.viewport, L({}, {
                    content: this.track,
                    zoom: !1,
                    panOnlyZoomed: !1,
                    lockAxis: this.isHorizontal ? "x" : "y",
                    infinite: this.isInfinite,
                    click: !1,
                    dblClick: !1,
                    touch: t => !(this.pages.length < 2 && !t.options.infinite),
                    bounds: () => this.getBounds(),
                    maxVelocity: t => Math.abs(t.target[this.axis] - t.current[this.axis]) < 2 * this.viewportDim ? 100 : 0
                }, e)), this.panzoom.on("*", (t, i, ...n) => {
                    this.emit(`Panzoom.${i}`, t, ...n)
                }), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation)
            }
            attachEvents() {
                const e = this.container;
                e && (e.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), e.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize)
            }
            createPages() {
                let e = [];
                const {
                    contentDim: t,
                    viewportDim: i
                } = this;
                let n = this.option("slidesPerPage");
                (typeof n != "number" || t <= i) && (n = 1 / 0);
                let s = 0,
                    o = 0,
                    a = 0;
                for (const l of this.slides)(!e.length || o + l.dim - i > .05 || a === n) && (e.push(Et()), s = e.length - 1, o = 0, a = 0), e[s].slides.push(l), o += l.dim + l.gap, a++;
                return e
            }
            processPages() {
                const e = this.pages,
                    {
                        contentDim: t,
                        viewportDim: i
                    } = this,
                    n = this.option("center"),
                    s = this.option("fill"),
                    o = s && n && t > i && !this.isInfinite;
                if (e.forEach((r, d) => {
                        r.index = d, r.pos = r.slides[0].pos, r.dim = 0;
                        for (const [h, u] of r.slides.entries()) r.dim += u.dim, h < r.slides.length - 1 && (r.dim += u.gap);
                        o && r.pos + .5 * r.dim < .5 * i ? r.pos = 0 : o && r.pos + .5 * r.dim >= t - .5 * i ? r.pos = t - i : n && (r.pos += -.5 * (i - r.dim))
                    }), e.forEach((r, d) => {
                        s && !this.isInfinite && t > i && (r.pos = Math.max(r.pos, 0), r.pos = Math.min(r.pos, t - i)), r.pos = g(r.pos, 1e3), r.dim = g(r.dim, 1e3), Math.abs(r.pos) <= .1 && (r.pos = 0)
                    }), this.isInfinite) return e;
                const a = [];
                let l;
                return e.forEach(r => {
                    const d = Object.assign({}, r);
                    l && d.pos === l.pos ? (l.dim += d.dim, l.slides = [...l.slides, ...d.slides]) : (d.index = a.length, l = d, a.push(d))
                }), a
            }
            getPageFromIndex(e = 0) {
                const t = this.pages.length;
                let i;
                return e = parseInt((e || 0).toString()) || 0, i = this.isInfinite ? (e % t + t) % t : Math.max(Math.min(e, t - 1), 0), i
            }
            getSlideMetrics(e) {
                var t, i;
                const n = this.isHorizontal ? "width" : "height";
                let s = 0,
                    o = 0,
                    a = e.el;
                const l = a && !a.parentNode;
                if (a ? s = parseFloat(a.dataset[n] || "") || 0 : (a = document.createElement("div"), a.style.visibility = "hidden", (this.track || document.body).prepend(a)), y(a, this.cn("slide") + " " + e.class + " " + e.customClass), s) a.style[n] = `${s}px`, a.style[n === "width" ? "height" : "width"] = "";
                else {
                    l && (this.track || document.body).prepend(a);
                    const d = Math.max(1, ((t = window.visualViewport) === null || t === void 0 ? void 0 : t.scale) || 1);
                    s = a.getBoundingClientRect()[n] * d
                }
                const r = getComputedStyle(a);
                return r.boxSizing === "content-box" && (this.isHorizontal ? (s += parseFloat(r.paddingLeft) || 0, s += parseFloat(r.paddingRight) || 0) : (s += parseFloat(r.paddingTop) || 0, s += parseFloat(r.paddingBottom) || 0)), o = parseFloat(r[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, l ? (i = a.parentElement) === null || i === void 0 || i.removeChild(a) : e.el || a.remove(), {
                    dim: g(s, 1e3),
                    gap: g(o, 1e3)
                }
            }
            getBounds() {
                const {
                    isInfinite: e,
                    isRTL: t,
                    isHorizontal: i,
                    pages: n
                } = this;
                let s = {
                    min: 0,
                    max: 0
                };
                if (e) s = {
                    min: -1 / 0,
                    max: 1 / 0
                };
                else if (n.length) {
                    const o = n[0].pos,
                        a = n[n.length - 1].pos;
                    s = t && i ? {
                        min: o,
                        max: a
                    } : {
                        min: -1 * a,
                        max: -1 * o
                    }
                }
                return {
                    x: i ? s : {
                        min: 0,
                        max: 0
                    },
                    y: i ? {
                        min: 0,
                        max: 0
                    } : s
                }
            }
            repositionSlides() {
                let e, {
                        isHorizontal: t,
                        isRTL: i,
                        isInfinite: n,
                        viewport: s,
                        viewportDim: o,
                        contentDim: a,
                        page: l,
                        pages: r,
                        slides: d,
                        panzoom: h
                    } = this,
                    u = 0,
                    p = 0,
                    f = 0,
                    m = 0;
                h ? m = -1 * h.current[this.axis] : r[l] && (m = r[l].pos || 0), e = t ? i ? "right" : "left" : "top", i && t && (m *= -1);
                for (const w of d) w.el ? (e === "top" ? (w.el.style.right = "", w.el.style.left = "") : w.el.style.top = "", w.index !== u ? w.el.style[e] = p === 0 ? "" : `${g(p,1e3)}px` : w.el.style[e] = "", f += w.dim + w.gap, u++) : p += w.dim + w.gap;
                if (n && f && s) {
                    let w = getComputedStyle(s),
                        M = "padding",
                        $ = t ? "Right" : "Bottom",
                        Y = parseFloat(w[M + (t ? "Left" : "Top")]);
                    m -= Y, o += Y, o += parseFloat(w[M + $]);
                    for (const P of d) P.el && (g(P.pos) < g(o) && g(P.pos + P.dim + P.gap) < g(m) && g(m) > g(a - o) && (P.el.style[e] = `${g(p+f,1e3)}px`), g(P.pos + P.gap) >= g(a - o) && g(P.pos) > g(m + o) && g(m) < g(o) && (P.el.style[e] = `-${g(f,1e3)}px`))
                }
                let b, v, x = [...this.inTransition];
                if (x.length > 1 && (b = r[x[0]], v = r[x[1]]), b && v) {
                    let w = 0;
                    for (const M of d) M.el ? this.inTransition.has(M.index) && b.slides.indexOf(M) < 0 && (M.el.style[e] = `${g(w+(b.pos-v.pos),1e3)}px`) : w += M.dim + M.gap
                }
            }
            createSlideEl(e) {
                const {
                    track: t,
                    slides: i
                } = this;
                if (!t || !e || e.el && e.el.parentNode) return;
                const n = e.el || document.createElement("div");
                y(n, this.cn("slide")), y(n, e.class), y(n, e.customClass);
                const s = e.html;
                s && (s instanceof HTMLElement ? n.appendChild(s) : n.innerHTML = e.html + "");
                const o = [];
                i.forEach((d, h) => {
                    d.el && o.push(h)
                });
                const a = e.index;
                let l = null;
                o.length && (l = i[o.reduce((d, h) => Math.abs(h - a) < Math.abs(d - a) ? h : d)]);
                const r = l && l.el && l.el.parentNode ? l.index < e.index ? l.el.nextSibling : l.el : null;
                t.insertBefore(n, t.contains(r) ? r : null), e.el = n, this.emit("createSlide", e)
            }
            removeSlideEl(e, t = !1) {
                const i = e.el;
                if (!i || !i.parentNode) return;
                const n = this.cn("isSelected");
                if (i.classList.contains(n) && (C(i, n), this.emit("unselectSlide", e)), e.isDom && !t) return i.removeAttribute("aria-hidden"), i.removeAttribute("data-index"), void(i.style.left = "");
                this.emit("removeSlide", e);
                const s = new CustomEvent("animationend");
                i.dispatchEvent(s), e.el && (e.el.remove(), e.el = null)
            }
            transitionTo(e = 0, t = this.option("transition")) {
                if (!t) return !1;
                const {
                    pages: i,
                    panzoom: n
                } = this;
                e = parseInt((e || 0).toString()) || 0;
                const s = this.getPageFromIndex(e);
                if (!n || !i[s] || i.length < 2 || Math.abs(i[this.page].slides[0].dim - this.viewportDim) > 1) return !1;
                const o = e > this.page ? 1 : -1,
                    a = this.pages[s].pos * (this.isRTL ? 1 : -1);
                if (this.page === s && Math.abs(a - n.target[this.axis]) < 1) return !1;
                this.clearTransitions();
                const l = n.isResting;
                y(this.container, this.cn("inTransition"));
                const r = this.pages[this.page].slides[0],
                    d = this.pages[s].slides[0];
                this.inTransition.add(d.index), this.createSlideEl(d);
                let h = r.el,
                    u = d.el;
                l || t === "slide" || (t = "fadeFast", h = null);
                const p = this.isRTL ? "next" : "prev",
                    f = this.isRTL ? "prev" : "next";
                return h && (this.inTransition.add(r.index), r.transition = t, h.addEventListener("animationend", this.onAnimationEnd), h.classList.add(`f-${t}Out`, `to-${o>0?f:p}`)), u && (d.transition = t, u.addEventListener("animationend", this.onAnimationEnd), u.classList.add(`f-${t}In`, `from-${o>0?p:f}`)), n.panTo({
                    x: this.isHorizontal ? a : 0,
                    y: this.isHorizontal ? 0 : a,
                    friction: 0
                }), this.onChange(s), !0
            }
            manageSlideVisiblity() {
                const e = new Set,
                    t = new Set,
                    i = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
                for (const n of this.slides) i.has(n) ? e.add(n) : t.add(n);
                for (const n of this.inTransition) e.add(this.slides[n]);
                for (const n of e) this.createSlideEl(n), this.lazyLoadSlide(n);
                for (const n of t) e.has(n) || this.removeSlideEl(n);
                this.markSelectedSlides(), this.repositionSlides()
            }
            markSelectedSlides() {
                if (!this.pages[this.page] || !this.pages[this.page].slides) return;
                const e = "aria-hidden";
                let t = this.cn("isSelected");
                if (t)
                    for (const i of this.slides) {
                        const n = i.el;
                        n && (n.dataset.index = `${i.index}`, this.pages[this.page].slides.includes(i) ? (n.classList.contains(t) || (y(n, t), this.emit("selectSlide", i)), n.removeAttribute(e)) : (n.classList.contains(t) && (C(n, t), this.emit("unselectSlide", i)), n.setAttribute(e, "true")))
                    }
            }
            flipInfiniteTrack() {
                const e = this.panzoom;
                if (!e || !this.isInfinite) return;
                const t = this.option("axis") === "x" ? "e" : "f",
                    {
                        viewportDim: i,
                        contentDim: n
                    } = this;
                let s = e.current[t],
                    o = e.target[t] - s,
                    a = 0,
                    l = .5 * i,
                    r = n;
                this.isRTL && this.isHorizontal ? (s < -l && (a = -1, s += r), s > r - l && (a = 1, s -= r)) : (s > l && (a = 1, s -= r), s < -r + l && (a = -1, s += r)), a && (e.current[t] = s, e.target[t] = s + o)
            }
            lazyLoadSlide(e) {
                const t = this,
                    i = e && e.el;
                if (!i) return;
                const n = new Set,
                    s = "f-fadeIn";
                i.querySelectorAll("[data-lazy-srcset]").forEach(l => {
                    l instanceof HTMLImageElement && n.add(l)
                });
                let o = Array.from(i.querySelectorAll("[data-lazy-src]"));
                i.dataset.lazySrc && o.push(i), o.map(l => {
                    l instanceof HTMLImageElement ? n.add(l) : z(l) && (l.style.backgroundImage = `url('${l.dataset.lazySrc||""}')`, delete l.dataset.lazySrc)
                });
                const a = (l, r, d) => {
                    d && (d.remove(), d = null), r.complete && (r.classList.add(s), setTimeout(() => {
                        r.classList.remove(s)
                    }, 350), r.style.visibility = ""), this.option("adaptiveHeight") && l.el && this.pages[this.page].slides.indexOf(l) > -1 && (t.updateMetrics(), t.setViewportHeight()), this.emit("load", l)
                };
                for (const l of n) {
                    let r = null;
                    l.src = l.dataset.lazySrcset || l.dataset.lazySrc || "", delete l.dataset.lazySrc, delete l.dataset.lazySrcset, l.style.visibility = "hidden", l.addEventListener("error", () => {
                        a(e, l, r)
                    }), l.addEventListener("load", () => {
                        a(e, l, r)
                    }), setTimeout(() => {
                        l.parentNode && e.el && (l.complete ? a(e, l, r) : (r = R(de), l.parentNode.insertBefore(r, l)))
                    }, 300)
                }
            }
            onAnimationEnd(e) {
                var t;
                const i = e.target,
                    n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
                    s = this.slides[n],
                    o = e.animationName;
                if (!i || !s || !o) return;
                const a = !!this.inTransition.has(n) && s.transition;
                a && o.substring(0, a.length + 2) === `f-${a}` && this.inTransition.delete(n), this.inTransition.size || this.clearTransitions(), n === this.page && (!((t = this.panzoom) === null || t === void 0) && t.isResting) && this.emit("settle")
            }
            onDecel(e, t = 0, i = 0, n = 0, s = 0) {
                const {
                    isRTL: o,
                    isHorizontal: a,
                    axis: l,
                    pages: r
                } = this, d = r.length, h = Math.abs(Math.atan2(i, t) / (Math.PI / 180));
                let u = 0;
                if (u = h > 45 && h < 135 ? a ? 0 : i : a ? t : 0, !d) return;
                const p = this.option("dragFree");
                let f = this.page,
                    m = o && a ? 1 : -1;
                const b = e.target[l] * m,
                    v = e.current[l] * m;
                let {
                    pageIndex: x
                } = this.getPageFromPosition(b), {
                    pageIndex: w
                } = this.getPageFromPosition(v);
                p ? this.onChange(x) : (Math.abs(u) > 5 ? (r[f].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (f = w), f = o && a ? u < 0 ? f - 1 : f + 1 : u < 0 ? f + 1 : f - 1) : f = n === 0 && s === 0 ? f : w, this.slideTo(f, {
                    transition: !1,
                    friction: e.option("decelFriction")
                }))
            }
            onClick(e) {
                const t = e.target,
                    i = t && z(t) ? t.dataset : null;
                let n, s;
                i && (i.carouselPage !== void 0 ? (s = "slideTo", n = i.carouselPage) : i.carouselNext !== void 0 ? s = "slideNext" : i.carouselPrev !== void 0 && (s = "slidePrev")), s ? (e.preventDefault(), e.stopPropagation(), t && !t.hasAttribute("disabled") && this[s](n)) : this.emit("click", e)
            }
            onSlideTo(e) {
                const t = e.detail || 0;
                this.slideTo(this.getPageForSlide(t), {
                    friction: 0
                })
            }
            onChange(e, t = 0) {
                const i = this.page;
                this.prevPage = i, this.page = e, this.option("adaptiveHeight") && this.setViewportHeight(), e !== i && (this.markSelectedSlides(), this.emit("change", e, i, t))
            }
            onRefresh() {
                let e = this.contentDim,
                    t = this.viewportDim;
                this.updateMetrics(), this.contentDim === e && this.viewportDim === t || this.slideTo(this.page, {
                    friction: 0,
                    transition: !1
                })
            }
            onResize() {
                this.option("breakpoints") && this.processOptions()
            }
            onBeforeTransform(e) {
                this.lp !== e.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), this.lp = e.current.e
            }
            onEndAnimation() {
                this.inTransition.size || this.emit("settle")
            }
            reInit(e = null, t = null) {
                this.destroy(), this.state = T.Init, this.userOptions = e || this.userOptions, this.userPlugins = t || this.userPlugins, this.processOptions()
            }
            slideTo(e = 0, {
                friction: t = this.option("friction"),
                transition: i = this.option("transition")
            } = {}) {
                if (this.state === T.Destroy) return;
                e = parseInt((e || 0).toString()) || 0;
                const n = this.getPageFromIndex(e);
                if (this.page !== n) {
                    const p = new Event("beforeChange", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    if (this.emit("beforeChange", p, e), p.defaultPrevented) return
                }
                const {
                    axis: s,
                    isHorizontal: o,
                    isRTL: a,
                    pages: l,
                    panzoom: r
                } = this, d = l.length, h = a && o ? 1 : -1;
                if (!r || !d || this.transitionTo(e, i)) return;
                let u = l[n].pos;
                if (this.isInfinite) {
                    const p = this.contentDim,
                        f = r.target[s] * h;
                    if (d === 2) u += p * Math.floor(parseFloat(e + "") / 2);
                    else {
                        const m = f;
                        u = [u, u - p, u + p].reduce(function(b, v) {
                            return Math.abs(v - m) < Math.abs(b - m) ? v : b
                        })
                    }
                }
                u *= h, Math.abs(r.target[s] - u) < .1 || (r.panTo({
                    x: o ? u : 0,
                    y: o ? 0 : u,
                    friction: t
                }), this.onChange(n))
            }
            slideToClosest(e) {
                if (this.panzoom) {
                    const {
                        pageIndex: t
                    } = this.getPageFromPosition(this.panzoom.current[this.isHorizontal ? "e" : "f"]);
                    this.slideTo(t, e)
                }
            }
            slideNext() {
                this.slideTo(this.page + 1)
            }
            slidePrev() {
                this.slideTo(this.page - 1)
            }
            clearTransitions() {
                this.inTransition.clear(), C(this.container, this.cn("inTransition"));
                const e = ["to-prev", "to-next", "from-prev", "from-next"];
                for (const t of this.slides) {
                    const i = t.el;
                    if (i) {
                        i.removeEventListener("animationend", this.onAnimationEnd), i.classList.remove(...e);
                        const n = t.transition;
                        n && i.classList.remove(`f-${n}Out`, `f-${n}In`)
                    }
                }
                this.manageSlideVisiblity()
            }
            prependSlide(e) {
                var t, i;
                let n = Array.isArray(e) ? e : [e];
                for (const a of n.reverse()) this.slides.unshift(fe(a));
                for (let a = 0; a < this.slides.length; a++) this.slides[a].index = a;
                const s = ((t = this.pages[this.page]) === null || t === void 0 ? void 0 : t.pos) || 0;
                this.page += n.length, this.updateMetrics();
                const o = ((i = this.pages[this.page]) === null || i === void 0 ? void 0 : i.pos) || 0;
                if (this.panzoom) {
                    const a = this.isRTL ? s - o : o - s;
                    this.panzoom.target.e -= a, this.panzoom.current.e -= a, this.panzoom.requestTick()
                }
            }
            appendSlide(e) {
                let t = Array.isArray(e) ? e : [e];
                for (const i of t) {
                    const n = fe(i);
                    n.index = this.slides.length, this.slides.push(n), this.emit("initSlide", n, this.slides.length)
                }
                this.updateMetrics()
            }
            removeSlide(e) {
                const t = this.slides.length;
                e = (e % t + t) % t, this.removeSlideEl(this.slides[e], !0), this.slides.splice(e, 1);
                for (let i = 0; i < this.slides.length; i++) this.slides[i].index = i;
                this.updateMetrics(), this.slideTo(this.page, {
                    friction: 0,
                    transition: !1
                })
            }
            updateMetrics() {
                const {
                    panzoom: e,
                    viewport: t,
                    track: i,
                    isHorizontal: n
                } = this;
                if (!i) return;
                const s = n ? "width" : "height",
                    o = n ? "offsetWidth" : "offsetHeight";
                if (t) {
                    let h = Math.max(t[o], g(t.getBoundingClientRect()[s], 1e3)),
                        u = getComputedStyle(t),
                        p = "padding",
                        f = n ? "Right" : "Bottom";
                    h -= parseFloat(u[p + (n ? "Left" : "Top")]) + parseFloat(u[p + f]), this.viewportDim = h
                }
                let a, l = this.pages.length,
                    r = 0;
                for (const [h, u] of this.slides.entries()) {
                    let p = 0,
                        f = 0;
                    !u.el && a ? (p = a.dim, f = a.gap) : ({
                        dim: p,
                        gap: f
                    } = this.getSlideMetrics(u), a = u), p = g(p, 1e3), f = g(f, 1e3), u.dim = p, u.gap = f, u.pos = r, r += p, (this.isInfinite || h < this.slides.length - 1) && (r += f)
                }
                const d = this.contentDim;
                r = g(r, 1e3), this.contentDim = r, e && (e.contentRect[s] = r, e.contentRect[this.axis === "e" ? "fullWidth" : "fullHeight"] = r), this.pages = this.createPages(), this.pages = this.processPages(), this.state === T.Init && this.setInitialPage(), this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), e && l === this.pages.length && Math.abs(r - d) > .5 && (e.target[this.axis] = -1 * this.pages[this.page].pos, e.current[this.axis] = -1 * this.pages[this.page].pos, e.stop()), this.manageSlideVisiblity(), this.emit("refresh")
            }
            getProgress(e, t = !1) {
                e === void 0 && (e = this.page);
                const i = this,
                    n = i.panzoom,
                    s = i.pages[e] || 0;
                if (!s || !n) return 0;
                let o = -1 * n.current.e,
                    a = i.contentDim;
                var l = [g((o - s.pos) / (1 * s.dim), 1e3), g((o + a - s.pos) / (1 * s.dim), 1e3), g((o - a - s.pos) / (1 * s.dim), 1e3)].reduce(function(r, d) {
                    return Math.abs(d) < Math.abs(r) ? d : r
                });
                return t ? l : Math.max(-1, Math.min(1, l))
            }
            setViewportHeight() {
                const {
                    page: e,
                    pages: t,
                    viewport: i,
                    isHorizontal: n
                } = this;
                if (!i || !t[e]) return;
                let s = 0;
                n && this.track && (this.track.style.height = "auto", t[e].slides.forEach(o => {
                    o.el && (s = Math.max(s, o.el.offsetHeight))
                })), i.style.height = s ? `${s}px` : ""
            }
            getPageForSlide(e) {
                for (const t of this.pages)
                    for (const i of t.slides)
                        if (i.index === e) return t.index;
                return -1
            }
            getVisibleSlides(e = 0) {
                var t;
                const i = new Set;
                let {
                    contentDim: n,
                    viewportDim: s,
                    pages: o,
                    page: a
                } = this;
                n = n + ((t = this.slides[this.slides.length - 1]) === null || t === void 0 ? void 0 : t.gap) || 0;
                let l = 0;
                l = this.panzoom ? -1 * this.panzoom.current[this.axis] : o[a] && o[a].pos || 0, this.isInfinite && (l -= Math.floor(l / n) * n), this.isRTL && this.isHorizontal && (l *= -1);
                const r = l - s * e,
                    d = l + s * (e + 1),
                    h = this.isInfinite ? [-1, 0, 1] : [0];
                for (const u of this.slides)
                    for (const p of h) {
                        const f = u.pos + p * n,
                            m = u.pos + u.dim + u.gap + p * n;
                        f < d && m > r && i.add(u)
                    }
                return i
            }
            getPageFromPosition(e) {
                const {
                    viewportDim: t,
                    contentDim: i
                } = this, n = this.pages.length, s = this.slides.length, o = this.slides[s - 1];
                let a = 0,
                    l = 0,
                    r = 0;
                const d = this.option("center");
                d && (e += .5 * t), this.isInfinite || (e = Math.max(this.slides[0].pos, Math.min(e, o.pos)));
                const h = i + o.gap;
                r = Math.floor(e / h) || 0, e -= r * h;
                let u = o,
                    p = this.slides.find(f => {
                        const m = e + (u && !d ? .5 * u.dim : 0);
                        return u = f, f.pos <= m && f.pos + f.dim + f.gap > m
                    });
                return p || (p = o), l = this.getPageForSlide(p.index), a = l + r * n, {
                    page: a,
                    pageIndex: l
                }
            }
            destroy() {
                if ([T.Destroy].includes(this.state)) return;
                this.state = T.Destroy;
                const {
                    container: e,
                    viewport: t,
                    track: i,
                    slides: n,
                    panzoom: s
                } = this, o = this.option("classes");
                e.removeEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), e.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), s && (s.destroy(), this.panzoom = null), n && n.forEach(l => {
                    this.removeSlideEl(l)
                }), this.detachPlugins(), t && t.offsetParent && i && i.offsetParent && t.replaceWith(...i.childNodes);
                for (const [l, r] of Object.entries(o)) l !== "container" && r && e.classList.remove(r);
                this.track = null, this.viewport = null, this.page = 0, this.slides = [];
                const a = this.events.get("ready");
                this.events = new Map, a && this.events.set("ready", a)
            }
        }
        Object.defineProperty(X, "Panzoom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: W
        }), Object.defineProperty(X, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xt
        }), Object.defineProperty(X, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pt
        });
        const Ge = function(c) {
                const e = window.pageYOffset,
                    t = window.pageYOffset + window.innerHeight;
                if (!z(c)) return 0;
                const i = c.getBoundingClientRect(),
                    n = i.y + window.pageYOffset,
                    s = i.y + i.height + window.pageYOffset;
                if (e > s || t < n) return 0;
                if (e < n && t > s || n < e && s > t) return 100;
                let o = i.height;
                n < e && (o -= window.pageYOffset - n), s > t && (o -= s - t);
                const a = o / window.innerHeight * 100;
                return Math.round(a)
            },
            te = !(typeof window > "u" || !window.document || !window.document.createElement);
        let Ce;
        const Me = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(","),
            Ue = c => {
                if (c && te) {
                    Ce === void 0 && document.createElement("div").focus({
                        get preventScroll() {
                            return Ce = !0, !1
                        }
                    });
                    try {
                        if (Ce) c.focus({
                            preventScroll: !0
                        });
                        else {
                            const e = window.pageXOffset || document.body.scrollTop,
                                t = window.pageYOffset || document.body.scrollLeft;
                            c.focus(), document.body.scrollTo({
                                top: e,
                                left: t,
                                behavior: "auto"
                            })
                        }
                    } catch {}
                }
            },
            Te = {
                dragToClose: !0,
                hideScrollbar: !0,
                Carousel: {
                    classes: {
                        container: "fancybox__carousel",
                        viewport: "fancybox__viewport",
                        track: "fancybox__track",
                        slide: "fancybox__slide"
                    }
                },
                contentClick: "toggleZoom",
                contentDblClick: !1,
                backdropClick: "close",
                animated: !0,
                idle: 3500,
                showClass: "f-zoomInUp",
                hideClass: "f-fadeOut",
                commonCaption: !1,
                parentEl: null,
                startIndex: 0,
                l10n: Object.assign(Object.assign({}, Ne), {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    MODAL: "You can close this modal content with the ESC key",
                    ERROR: "Something Went Wrong, Please Try Again Later",
                    IMAGE_ERROR: "Image Not Found",
                    ELEMENT_NOT_FOUND: "HTML Element Not Found",
                    AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
                    AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
                    IFRAME_ERROR: "Error Loading Page",
                    TOGGLE_ZOOM: "Toggle zoom level",
                    TOGGLE_THUMBS: "Toggle thumbnails",
                    TOGGLE_SLIDESHOW: "Toggle slideshow",
                    TOGGLE_FULLSCREEN: "Toggle full-screen mode",
                    DOWNLOAD: "Download"
                }),
                tpl: {
                    closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
                    main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
    <div class="fancybox__backdrop"></div>
    <div class="fancybox__carousel"></div>
    <div class="fancybox__footer"></div>
  </div>`
                },
                groupAll: !1,
                groupAttr: "data-fancybox",
                defaultType: "image",
                defaultDisplay: "block",
                autoFocus: !0,
                trapFocus: !0,
                placeFocusBack: !0,
                closeButton: "auto",
                keyboard: {
                    Escape: "close",
                    Delete: "close",
                    Backspace: "close",
                    PageUp: "next",
                    PageDown: "prev",
                    ArrowUp: "prev",
                    ArrowDown: "next",
                    ArrowRight: "next",
                    ArrowLeft: "prev"
                },
                Fullscreen: {
                    autoStart: !1
                },
                compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
                wheel: "zoom"
            };
        var O, A;
        (function(c) {
            c[c.Init = 0] = "Init", c[c.Ready = 1] = "Ready", c[c.Closing = 2] = "Closing", c[c.CustomClosing = 3] = "CustomClosing", c[c.Destroy = 4] = "Destroy"
        })(O || (O = {})),
        function(c) {
            c[c.Loading = 0] = "Loading", c[c.Opening = 1] = "Opening", c[c.Ready = 2] = "Ready", c[c.Closing = 3] = "Closing"
        }(A || (A = {}));
        const Ke = () => {
            queueMicrotask(() => {
                (() => {
                    const {
                        slug: c,
                        index: e
                    } = j.parseURL(), t = E.getInstance();
                    if (t && t.option("Hash") !== !1) {
                        const i = t.carousel;
                        if (c && i) {
                            for (let o of i.slides)
                                if (o.slug && o.slug === c) return i.slideTo(o.index);
                            if (c === t.option("slug")) return i.slideTo(e - 1);
                            const n = t.getSlide(),
                                s = n && n.triggerEl && n.triggerEl.dataset;
                            if (s && s.fancybox === c) return i.slideTo(e - 1)
                        }
                        j.hasSilentClose = !0, t.close()
                    }
                    j.startFromUrl()
                })()
            })
        };
        class j extends D {
            constructor() {
                super(...arguments), Object.defineProperty(this, "origHash", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ""
                }), Object.defineProperty(this, "timer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                })
            }
            onChange() {
                const e = this.instance,
                    t = e.carousel;
                this.timer && clearTimeout(this.timer);
                const i = e.getSlide();
                if (!t || !i) return;
                const n = e.isOpeningSlide(i),
                    s = new URL(document.URL).hash;
                let o, a = i.slug || void 0,
                    l = i.triggerEl || void 0;
                o = a || this.instance.option("slug"), !o && l && l.dataset && (o = l.dataset.fancybox);
                let r = "";
                o && o !== "true" && (r = "#" + o + (!a && t.slides.length > 1 ? "-" + (i.index + 1) : "")), n && (this.origHash = s !== r ? s : ""), r && s !== r && (this.timer = setTimeout(() => {
                    try {
                        e.state === O.Ready && window.history[n ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + r)
                    } catch {}
                }, 300))
            }
            onClose() {
                if (this.timer && clearTimeout(this.timer), j.hasSilentClose !== !0) try {
                    window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""))
                } catch {}
            }
            attach() {
                const e = this.instance;
                e.on("Carousel.ready", this.onChange), e.on("Carousel.change", this.onChange), e.on("close", this.onClose)
            }
            detach() {
                const e = this.instance;
                e.off("Carousel.ready", this.onChange), e.off("Carousel.change", this.onChange), e.off("close", this.onClose)
            }
            static parseURL() {
                const e = window.location.hash.slice(1),
                    t = e.split("-"),
                    i = t[t.length - 1],
                    n = i && /^\+?\d+$/.test(i) && parseInt(t.pop() || "1", 10) || 1;
                return {
                    hash: e,
                    slug: t.join("-"),
                    index: n
                }
            }
            static startFromUrl() {
                if (j.hasSilentClose = !1, E.getInstance() || E.defaults.Hash === !1) return;
                const {
                    hash: e,
                    slug: t,
                    index: i
                } = j.parseURL();
                if (!t) return;
                let n = document.querySelector(`[data-slug="${e}"]`);
                if (n && n.dispatchEvent(new CustomEvent("click", {
                        bubbles: !0,
                        cancelable: !0
                    })), E.getInstance()) return;
                const s = document.querySelectorAll(`[data-fancybox="${t}"]`);
                s.length && (n = s[i - 1], n && n.dispatchEvent(new CustomEvent("click", {
                    bubbles: !0,
                    cancelable: !0
                })))
            }
            static destroy() {
                window.removeEventListener("hashchange", Ke, !1)
            }
        }

        function Je() {
            window.addEventListener("hashchange", Ke, !1), setTimeout(() => {
                j.startFromUrl()
            }, 500)
        }
        Object.defineProperty(j, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        }), Object.defineProperty(j, "hasSilentClose", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }), te && (/complete|interactive|loaded/.test(document.readyState) ? Je() : document.addEventListener("DOMContentLoaded", Je));
        class Qe extends D {
            onCreateSlide(e, t, i) {
                const n = this.instance.optionFor(i, "src") || "";
                i.el && i.type === "image" && typeof n == "string" && this.setImage(i, n)
            }
            onRemoveSlide(e, t, i) {
                i.panzoom && i.panzoom.destroy(), i.panzoom = void 0, i.imageEl = void 0
            }
            onChange(e, t, i, n) {
                for (const s of t.slides) {
                    const o = s.panzoom;
                    o && s.index !== i && o.reset(.35)
                }
            }
            onClose() {
                var e;
                const t = this.instance,
                    i = t.container,
                    n = t.getSlide();
                if (!i || !i.parentElement || !n) return;
                const {
                    el: s,
                    contentEl: o,
                    panzoom: a
                } = n, l = n.thumbElSrc;
                if (!s || !l || !o || !a || a.isContentLoading || a.state === S.Init || a.state === S.Destroy) return;
                a.updateMetrics();
                let r = this.getZoomInfo(n);
                if (!r) return;
                this.instance.state = O.CustomClosing, i.classList.remove("is-zooming-in"), i.classList.add("is-zooming-out"), o.style.backgroundImage = `url('${l}')`;
                const d = i.getBoundingClientRect();
                (((e = window.visualViewport) === null || e === void 0 ? void 0 : e.scale) || 1) === 1 && Object.assign(i.style, {
                    position: "absolute",
                    top: `${window.pageYOffset}px`,
                    left: `${window.pageXOffset}px`,
                    bottom: "auto",
                    right: "auto",
                    width: `${d.width}px`,
                    height: `${d.height}px`,
                    overflow: "hidden"
                });
                const {
                    x: h,
                    y: u,
                    scale: p,
                    opacity: f
                } = r;
                if (f) {
                    const m = ((b, v, x, w) => {
                        const M = v - b,
                            $ = w - x;
                        return Y => x + ((Y - b) / M * $ || 0)
                    })(a.scale, p, 1, 0);
                    a.on("afterTransform", () => {
                        o.style.opacity = m(a.scale) + ""
                    })
                }
                a.on("endAnimation", () => {
                    t.destroy()
                }), a.target.a = p, a.target.b = 0, a.target.c = 0, a.target.d = p, a.panTo({
                    x: h,
                    y: u,
                    scale: p,
                    friction: f ? .2 : .33,
                    ignoreBounds: !0
                }), a.isResting && t.destroy()
            }
            setImage(e, t) {
                const i = this.instance;
                e.src = t, this.process(e, t).then(n => {
                    var s;
                    const o = e.contentEl,
                        a = e.imageEl,
                        l = e.thumbElSrc;
                    if (i.isClosing() || !o || !a) return;
                    o.offsetHeight;
                    const r = !!i.isOpeningSlide(e) && this.getZoomInfo(e);
                    if (this.option("protected")) {
                        (s = e.el) === null || s === void 0 || s.addEventListener("contextmenu", u => {
                            u.preventDefault()
                        });
                        const h = document.createElement("div");
                        y(h, "fancybox-protected"), o.appendChild(h)
                    }
                    if (l && r) {
                        const h = n.contentRect,
                            u = Math.max(h.fullWidth, h.fullHeight);
                        let p = null;
                        !r.opacity && u > 1200 && (p = document.createElement("img"), y(p, "fancybox-ghost"), p.src = l, o.appendChild(p));
                        const f = () => {
                            p && (y(p, "f-fadeFastOut"), setTimeout(() => {
                                p && (p.remove(), p = null)
                            }, 200))
                        };
                        (d = l, new Promise((m, b) => {
                            const v = new Image;
                            v.onload = m, v.onerror = b, v.src = d
                        })).then(() => {
                            i.hideLoading(e), e.state = A.Opening, this.instance.emit("reveal", e), this.zoomIn(e).then(() => {
                                f(), this.instance.done(e)
                            }, () => {}), p && setTimeout(() => {
                                f()
                            }, u > 2500 ? 800 : 200)
                        }, () => {
                            i.hideLoading(e), i.revealContent(e)
                        })
                    } else {
                        const h = this.optionFor(e, "initialSize"),
                            u = this.optionFor(e, "zoom"),
                            p = {
                                event: i.prevMouseMoveEvent || i.options.event,
                                friction: u ? .12 : 0
                            };
                        let f = i.optionFor(e, "showClass") || void 0,
                            m = !0;
                        i.isOpeningSlide(e) && (h === "full" ? n.zoomToFull(p) : h === "cover" ? n.zoomToCover(p) : h === "max" ? n.zoomToMax(p) : m = !1, n.stop("current")), m && f && (f = n.isDragging ? "f-fadeIn" : ""), i.hideLoading(e), i.revealContent(e, f)
                    }
                    var d
                }, () => {
                    i.setError(e, "{{IMAGE_ERROR}}")
                })
            }
            process(e, t) {
                return new Promise((i, n) => {
                    var s;
                    const o = this.instance,
                        a = e.el;
                    o.clearContent(e), o.showLoading(e);
                    let l = this.optionFor(e, "content");
                    if (typeof l == "string" && (l = R(l)), !l || !z(l)) {
                        if (l = document.createElement("img"), l instanceof HTMLImageElement) {
                            let r = "",
                                d = e.caption;
                            r = typeof d == "string" && d ? d.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${e.index+1} of ${(s=o.carousel)===null||s===void 0?void 0:s.pages.length}`, l.src = t || "", l.alt = r, l.draggable = !1, e.srcset && l.setAttribute("srcset", e.srcset)
                        }
                        e.sizes && l.setAttribute("sizes", e.sizes)
                    }
                    l.classList.add("fancybox-image"), e.imageEl = l, o.setContent(e, l, !1), e.panzoom = new W(a, L({
                        transformParent: !0
                    }, this.option("Panzoom") || {}, {
                        content: l,
                        width: o.optionFor(e, "width", "auto"),
                        height: o.optionFor(e, "height", "auto"),
                        wheel: () => {
                            const r = o.option("wheel");
                            return (r === "zoom" || r == "pan") && r
                        },
                        click: (r, d) => {
                            var h, u;
                            if (o.isCompact || o.isClosing() || e.index !== ((h = o.getSlide()) === null || h === void 0 ? void 0 : h.index)) return !1;
                            if (d) {
                                const f = d.composedPath()[0];
                                if (["A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(f.nodeName)) return !1
                            }
                            let p = !d || d.target && ((u = e.contentEl) === null || u === void 0 ? void 0 : u.contains(d.target));
                            return o.option(p ? "contentClick" : "backdropClick") || !1
                        },
                        dblClick: () => o.isCompact ? "toggleZoom" : o.option("contentDblClick") || !1,
                        spinner: !1,
                        panOnlyZoomed: !0,
                        wheelLimit: 1 / 0,
                        on: {
                            ready: r => {
                                i(r)
                            },
                            error: () => {
                                n()
                            },
                            destroy: () => {
                                n()
                            }
                        }
                    }))
                })
            }
            zoomIn(e) {
                return new Promise((t, i) => {
                    const n = this.instance,
                        s = n.container,
                        {
                            panzoom: o,
                            contentEl: a,
                            el: l
                        } = e;
                    o && o.updateMetrics();
                    const r = this.getZoomInfo(e);
                    if (!(r && l && a && o && s)) return void i();
                    const {
                        x: d,
                        y: h,
                        scale: u,
                        opacity: p
                    } = r, f = () => {
                        e.state !== A.Closing && (p && (a.style.opacity = Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - u)), 0) + ""), o.scale >= 1 && o.scale > o.targetScale - .1 && t(o))
                    }, m = x => {
                        C(s, "is-zooming-in"), x.scale < .99 || x.scale > 1.01 || (a.style.opacity = "", x.off("endAnimation", m), x.off("touchStart", m), x.off("afterTransform", f), t(x))
                    };
                    o.on("endAnimation", m), o.on("touchStart", m), o.on("afterTransform", f), o.on(["error", "destroy"], () => {
                        i()
                    }), o.panTo({
                        x: d,
                        y: h,
                        scale: u,
                        friction: 0,
                        ignoreBounds: !0
                    }), o.stop("current");
                    const b = {
                            event: o.panMode === "mousemove" ? n.prevMouseMoveEvent || n.options.event : void 0
                        },
                        v = this.optionFor(e, "initialSize");
                    y(s, "is-zooming-in"), n.hideLoading(e), v === "full" ? o.zoomToFull(b) : v === "cover" ? o.zoomToCover(b) : v === "max" ? o.zoomToMax(b) : o.reset(.172)
                })
            }
            getZoomInfo(e) {
                var t;
                const {
                    el: i,
                    imageEl: n,
                    thumbEl: s,
                    panzoom: o
                } = e;
                if (!i || !n || !s || !o || Ge(s) < 3 || !this.optionFor(e, "zoom") || this.instance.state === O.Destroy || (((t = window.visualViewport) === null || t === void 0 ? void 0 : t.scale) || 1) !== 1) return !1;
                let {
                    top: a,
                    left: l,
                    width: r,
                    height: d
                } = s.getBoundingClientRect(), {
                    top: h,
                    left: u,
                    fitWidth: p,
                    fitHeight: f
                } = o.contentRect;
                if (!(r && d && p && f)) return !1;
                const m = o.container.getBoundingClientRect();
                u += m.left, h += m.top;
                const b = -1 * (u + .5 * p - (l + .5 * r)),
                    v = -1 * (h + .5 * f - (a + .5 * d)),
                    x = r / p;
                let w = this.option("zoomOpacity") || !1;
                return w === "auto" && (w = Math.abs(r / d - p / f) > .1), {
                    x: b,
                    y: v,
                    scale: x,
                    opacity: w
                }
            }
            attach() {
                const e = this,
                    t = e.instance;
                t.on("Carousel.change", e.onChange), t.on("Carousel.createSlide", e.onCreateSlide), t.on("Carousel.removeSlide", e.onRemoveSlide), t.on("close", e.onClose)
            }
            detach() {
                const e = this,
                    t = e.instance;
                t.off("Carousel.change", e.onChange), t.off("Carousel.createSlide", e.onCreateSlide), t.off("Carousel.removeSlide", e.onRemoveSlide), t.off("close", e.onClose)
            }
        }
        Object.defineProperty(Qe, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                initialSize: "fit",
                Panzoom: {
                    maxScale: 1
                },
                protected: !1,
                zoom: !0,
                zoomOpacity: "auto"
            }
        }), typeof SuppressedError == "function" && SuppressedError;
        const Oe = "html",
            et = "image",
            Ae = "map",
            N = "youtube",
            q = "vimeo",
            ie = "html5video",
            tt = (c, e = {}) => {
                const t = new URL(c),
                    i = new URLSearchParams(t.search),
                    n = new URLSearchParams;
                for (const [a, l] of [...i, ...Object.entries(e)]) {
                    let r = l.toString();
                    a === "t" ? n.set("start", parseInt(r).toString()) : n.set(a, r)
                }
                let s = n.toString(),
                    o = c.match(/#t=((.*)?\d+s)/);
                return o && (s += `#t=${o[1]}`), s
            },
            Ct = {
                ajax: null,
                autoSize: !0,
                iframeAttr: {
                    allow: "autoplay; fullscreen",
                    scrolling: "auto"
                },
                preload: !0,
                videoAutoplay: !0,
                videoRatio: 16 / 9,
                videoTpl: `<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`,
                videoFormat: "",
                vimeo: {
                    byline: 1,
                    color: "00adef",
                    controls: 1,
                    dnt: 1,
                    muted: 0
                },
                youtube: {
                    controls: 1,
                    enablejsapi: 1,
                    nocookie: 1,
                    rel: 0,
                    fs: 1
                }
            },
            Mt = ["image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo"];
        class it extends D {
            onInitSlide(e, t, i) {
                this.processType(i)
            }
            onCreateSlide(e, t, i) {
                this.setContent(i)
            }
            onClearContent(e, t) {
                t.xhr && (t.xhr.abort(), t.xhr = null);
                const i = t.iframeEl;
                i && (i.onload = i.onerror = null, i.src = "//about:blank", t.iframeEl = null);
                const n = t.contentEl,
                    s = t.placeholderEl;
                if (t.type === "inline" && n && s) n.classList.remove("fancybox__content"), n.style.display !== "none" && (n.style.display = "none"), s.parentNode && s.parentNode.insertBefore(n, s), s.remove(), t.contentEl = void 0, t.placeholderEl = void 0;
                else
                    for (; t.el && t.el.firstChild;) t.el.removeChild(t.el.firstChild)
            }
            onSelectSlide(e, t, i) {
                i.state === A.Ready && this.playVideo()
            }
            onUnselectSlide(e, t, i) {
                var n, s;
                if (i.type === ie) {
                    try {
                        (s = (n = i.el) === null || n === void 0 ? void 0 : n.querySelector("video")) === null || s === void 0 || s.pause()
                    } catch {}
                    return
                }
                let o;
                i.type === q ? o = {
                    method: "pause",
                    value: "true"
                } : i.type === N && (o = {
                    event: "command",
                    func: "pauseVideo"
                }), o && i.iframeEl && i.iframeEl.contentWindow && i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"), i.poller && clearTimeout(i.poller)
            }
            onDone(e, t) {
                e.isCurrentSlide(t) && !e.isClosing() && this.playVideo()
            }
            onRefresh(e, t) {
                t.slides.forEach(i => {
                    i.el && (this.resizeIframe(i), this.setAspectRatio(i))
                })
            }
            onMessage(e) {
                try {
                    let t = JSON.parse(e.data);
                    if (e.origin === "https://player.vimeo.com") {
                        if (t.event === "ready")
                            for (let i of Array.from(document.getElementsByClassName("fancybox__iframe"))) i instanceof HTMLIFrameElement && i.contentWindow === e.source && (i.dataset.ready = "true")
                    } else if (e.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && t.event === "onReady") {
                        const i = document.getElementById(t.id);
                        i && (i.dataset.ready = "true")
                    }
                } catch {}
            }
            loadAjaxContent(e) {
                const t = this.instance.optionFor(e, "src") || "";
                this.instance.showLoading(e);
                const i = this.instance,
                    n = new XMLHttpRequest;
                i.showLoading(e), n.onreadystatechange = function() {
                    n.readyState === XMLHttpRequest.DONE && i.state === O.Ready && (i.hideLoading(e), n.status === 200 ? i.setContent(e, n.responseText) : i.setError(e, n.status === 404 ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"))
                };
                const s = e.ajax || null;
                n.open(s ? "POST" : "GET", t + ""), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(s), e.xhr = n
            }
            setInlineContent(e) {
                let t = null;
                if (z(e.src)) t = e.src;
                else if (typeof e.src == "string") {
                    const i = e.src.split("#", 2).pop();
                    t = i ? document.getElementById(i) : null
                }
                if (t) {
                    if (e.type === "clone" || t.closest(".fancybox__slide")) {
                        t = t.cloneNode(!0);
                        const i = t.dataset.animationName;
                        i && (t.classList.remove(i), delete t.dataset.animationName);
                        let n = t.getAttribute("id");
                        n = n ? `${n}--clone` : `clone-${this.instance.id}-${e.index}`, t.setAttribute("id", n)
                    } else if (t.parentNode) {
                        const i = document.createElement("div");
                        i.classList.add("fancybox-placeholder"), t.parentNode.insertBefore(i, t), e.placeholderEl = i
                    }
                    this.instance.setContent(e, t)
                } else this.instance.setError(e, "{{ELEMENT_NOT_FOUND}}")
            }
            setIframeContent(e) {
                const {
                    src: t,
                    el: i
                } = e;
                if (!t || typeof t != "string" || !i) return;
                i.classList.add("is-loading");
                const n = this.instance,
                    s = document.createElement("iframe");
                s.className = "fancybox__iframe", s.setAttribute("id", `fancybox__iframe_${n.id}_${e.index}`);
                for (const [a, l] of Object.entries(this.optionFor(e, "iframeAttr") || {})) s.setAttribute(a, l);
                s.onerror = () => {
                    n.setError(e, "{{IFRAME_ERROR}}")
                }, e.iframeEl = s;
                const o = this.optionFor(e, "preload");
                if (e.type !== "iframe" || o === !1) return s.setAttribute("src", e.src + ""), n.setContent(e, s, !1), this.resizeIframe(e), void n.revealContent(e);
                n.showLoading(e), s.onload = () => {
                    if (!s.src.length) return;
                    const a = s.dataset.ready !== "true";
                    s.dataset.ready = "true", this.resizeIframe(e), a ? n.revealContent(e) : n.hideLoading(e)
                }, s.setAttribute("src", t), n.setContent(e, s, !1)
            }
            resizeIframe(e) {
                const {
                    type: t,
                    iframeEl: i
                } = e;
                if (t === N || t === q) return;
                const n = i == null ? void 0 : i.parentElement;
                if (!i || !n) return;
                let s = e.autoSize !== !1,
                    o = e.width || 0,
                    a = e.height || 0;
                o && a && (s = !1);
                const l = n && n.style;
                if (e.preload !== !1 && s !== !1 && l) try {
                    const r = window.getComputedStyle(n),
                        d = parseFloat(r.paddingLeft) + parseFloat(r.paddingRight),
                        h = parseFloat(r.paddingTop) + parseFloat(r.paddingBottom),
                        u = i.contentWindow;
                    if (u) {
                        const p = u.document,
                            f = p.getElementsByTagName(Oe)[0],
                            m = p.body;
                        l.width = "", m.style.overflow = "hidden", o = o || f.scrollWidth + d, l.width = `${o}px`, m.style.overflow = "", l.flex = "0 0 auto", l.height = `${m.scrollHeight}px`, a = f.scrollHeight + h
                    }
                } catch {}
                if (o || a) {
                    const r = {
                        flex: "0 1 auto",
                        width: "",
                        height: ""
                    };
                    o && o !== "auto" && (r.width = `${o}px`), a && a !== "auto" && (r.height = `${a}px`), Object.assign(l, r)
                }
            }
            playVideo() {
                const e = this.instance.getSlide();
                if (!e) return;
                const {
                    el: t
                } = e;
                if (!t || !t.offsetParent || !this.optionFor(e, "videoAutoplay")) return;
                if (e.type === ie) try {
                    const n = t.querySelector("video");
                    if (n) {
                        const s = n.play();
                        s !== void 0 && s.then(() => {}).catch(o => {
                            n.muted = !0, n.play()
                        })
                    }
                } catch {}
                if (e.type !== N && e.type !== q) return;
                const i = () => {
                    if (e.iframeEl && e.iframeEl.contentWindow) {
                        let n;
                        if (e.iframeEl.dataset.ready === "true") return n = e.type === N ? {
                            event: "command",
                            func: "playVideo"
                        } : {
                            method: "play",
                            value: "true"
                        }, n && e.iframeEl.contentWindow.postMessage(JSON.stringify(n), "*"), void(e.poller = void 0);
                        e.type === N && (n = {
                            event: "listening",
                            id: e.iframeEl.getAttribute("id")
                        }, e.iframeEl.contentWindow.postMessage(JSON.stringify(n), "*"))
                    }
                    e.poller = setTimeout(i, 250)
                };
                i()
            }
            processType(e) {
                if (e.html) return e.type = Oe, e.src = e.html, void(e.html = "");
                const t = this.instance.optionFor(e, "src", "");
                if (!t || typeof t != "string") return;
                let i = e.type,
                    n = null;
                if (n = t.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                    const s = this.optionFor(e, N),
                        {
                            nocookie: o
                        } = s,
                        a = function(h, u) {
                            var p = {};
                            for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && u.indexOf(f) < 0 && (p[f] = h[f]);
                            if (h != null && typeof Object.getOwnPropertySymbols == "function") {
                                var m = 0;
                                for (f = Object.getOwnPropertySymbols(h); m < f.length; m++) u.indexOf(f[m]) < 0 && Object.prototype.propertyIsEnumerable.call(h, f[m]) && (p[f[m]] = h[f[m]])
                            }
                            return p
                        }(s, ["nocookie"]),
                        l = `www.youtube${o?"-nocookie":""}.com`,
                        r = tt(t, a),
                        d = encodeURIComponent(n[2]);
                    e.videoId = d, e.src = `https://${l}/embed/${d}?${r}`, e.thumbSrc = e.thumbSrc || `https://i.ytimg.com/vi/${d}/mqdefault.jpg`, i = N
                } else if (n = t.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
                    const s = tt(t, this.optionFor(e, q)),
                        o = encodeURIComponent(n[1]),
                        a = n[4] || "";
                    e.videoId = o, e.src = `https://player.vimeo.com/video/${o}?${a?`h=${a}${s?"&":""}`:""}${s}`, i = q
                }
                if (!i && e.triggerEl) {
                    const s = e.triggerEl.dataset.type;
                    Mt.includes(s) && (i = s)
                }
                i || typeof t == "string" && (t.charAt(0) === "#" ? i = "inline" : (n = t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = ie, e.videoFormat = e.videoFormat || "video/" + (n[1] === "ogv" ? "ogg" : n[1])) : t.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = et : t.match(/\.(pdf)((\?|#).*)?$/i) ? i = "pdf" : (n = t.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (e.src = `https://maps.google.${n[1]}/?ll=${(n[2]?n[2]+"&z="+Math.floor(parseFloat(n[3]))+(n[4]?n[4].replace(/^\//,"&"):""):n[4]+"").replace(/\?/,"&")}&output=${n[4]&&n[4].indexOf("layer=c")>0?"svembed":"embed"}`, i = Ae) : (n = t.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (e.src = `https://maps.google.${n[1]}/maps?q=${n[2].replace("query=","q=").replace("api=1","")}&output=embed`, i = Ae)), i = i || this.instance.option("defaultType"), e.type = i, i === et && (e.thumbSrc = e.thumbSrc || e.src)
            }
            setContent(e) {
                const t = this.instance.optionFor(e, "src") || "";
                if (e && e.type && t) {
                    switch (e.type) {
                        case Oe:
                            this.instance.setContent(e, t);
                            break;
                        case ie:
                            const i = this.option("videoTpl");
                            i && this.instance.setContent(e, i.replace(/\{\{src\}\}/gi, t + "").replace(/\{\{format\}\}/gi, this.optionFor(e, "videoFormat") || "").replace(/\{\{poster\}\}/gi, e.poster || e.thumbSrc || ""));
                            break;
                        case "inline":
                        case "clone":
                            this.setInlineContent(e);
                            break;
                        case "ajax":
                            this.loadAjaxContent(e);
                            break;
                        case "pdf":
                        case Ae:
                        case N:
                        case q:
                            e.preload = !1;
                        case "iframe":
                            this.setIframeContent(e)
                    }
                    this.setAspectRatio(e)
                }
            }
            setAspectRatio(e) {
                const t = e.contentEl;
                if (!(e.el && t && e.type && [N, q, ie].includes(e.type))) return;
                let i, n = e.width || "auto",
                    s = e.height || "auto";
                if (n === "auto" || s === "auto") {
                    i = this.optionFor(e, "videoRatio");
                    const r = (i + "").match(/(\d+)\s*\/\s?(\d+)/);
                    i = r && r.length > 2 ? parseFloat(r[1]) / parseFloat(r[2]) : parseFloat(i + "")
                } else n && s && (i = n / s);
                if (!i) return;
                t.style.aspectRatio = "", t.style.width = "", t.style.height = "", t.offsetHeight;
                const o = t.getBoundingClientRect(),
                    a = o.width || 1,
                    l = o.height || 1;
                t.style.aspectRatio = i + "", i < a / l ? (s = s === "auto" ? l : Math.min(l, s), t.style.width = "auto", t.style.height = `${s}px`) : (n = n === "auto" ? a : Math.min(a, n), t.style.width = `${n}px`, t.style.height = "auto")
            }
            attach() {
                const e = this,
                    t = e.instance;
                t.on("Carousel.initSlide", e.onInitSlide), t.on("Carousel.createSlide", e.onCreateSlide), t.on("Carousel.selectSlide", e.onSelectSlide), t.on("Carousel.unselectSlide", e.onUnselectSlide), t.on("Carousel.Panzoom.refresh", e.onRefresh), t.on("done", e.onDone), t.on("clearContent", e.onClearContent), window.addEventListener("message", e.onMessage)
            }
            detach() {
                const e = this,
                    t = e.instance;
                t.off("Carousel.initSlide", e.onInitSlide), t.off("Carousel.createSlide", e.onCreateSlide), t.off("Carousel.selectSlide", e.onSelectSlide), t.off("Carousel.unselectSlide", e.onUnselectSlide), t.off("Carousel.Panzoom.refresh", e.onRefresh), t.off("done", e.onDone), t.off("clearContent", e.onClearContent), window.removeEventListener("message", e.onMessage)
            }
        }
        Object.defineProperty(it, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ct
        });
        const be = "play",
            ve = "pause",
            ne = "ready";
        class nt extends D {
            constructor() {
                super(...arguments), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ne
                }), Object.defineProperty(this, "inHover", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "timer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "progressBar", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                })
            }
            get isActive() {
                return this.state !== ne
            }
            onReady(e) {
                this.option("autoStart") && (e.isInfinite || e.page < e.pages.length - 1) && this.start()
            }
            onChange() {
                var e;
                !((e = this.instance.panzoom) === null || e === void 0) && e.isResting || (this.removeProgressBar(), this.pause())
            }
            onSettle() {
                this.resume()
            }
            onVisibilityChange() {
                document.visibilityState === "visible" ? this.resume() : this.pause()
            }
            onMouseEnter() {
                this.inHover = !0, this.pause()
            }
            onMouseLeave() {
                var e;
                this.inHover = !1, !((e = this.instance.panzoom) === null || e === void 0) && e.isResting && this.resume()
            }
            onTimerEnd() {
                const e = this.instance;
                this.state === "play" && (e.isInfinite || e.page !== e.pages.length - 1 ? e.slideNext() : e.slideTo(0))
            }
            removeProgressBar() {
                this.progressBar && (this.progressBar.remove(), this.progressBar = null)
            }
            createProgressBar() {
                var e;
                if (!this.option("showProgress")) return null;
                this.removeProgressBar();
                const t = this.instance,
                    i = ((e = t.pages[t.page]) === null || e === void 0 ? void 0 : e.slides) || [];
                let n = this.option("progressParentEl");
                if (n || (n = (i.length === 1 ? i[0].el : null) || t.viewport), !n) return null;
                const s = document.createElement("div");
                return y(s, "f-progress"), n.prepend(s), this.progressBar = s, s.offsetHeight, s
            }
            set() {
                const e = this,
                    t = e.instance;
                if (t.pages.length < 2 || e.timer) return;
                const i = e.option("timeout");
                e.state = be, y(t.container, "has-autoplay");
                let n = e.createProgressBar();
                n && (n.style.transitionDuration = `${i}ms`, n.style.transform = "scaleX(1)"), e.timer = setTimeout(() => {
                    e.timer = null, e.inHover || e.onTimerEnd()
                }, i), e.emit("set")
            }
            clear() {
                const e = this;
                e.timer && (clearTimeout(e.timer), e.timer = null), e.removeProgressBar()
            }
            start() {
                const e = this;
                if (e.set(), e.state !== ne) {
                    if (e.option("pauseOnHover")) {
                        const t = e.instance.container;
                        t.addEventListener("mouseenter", e.onMouseEnter, !1), t.addEventListener("mouseleave", e.onMouseLeave, !1)
                    }
                    document.addEventListener("visibilitychange", e.onVisibilityChange, !1), e.emit("start")
                }
            }
            stop() {
                const e = this,
                    t = e.state,
                    i = e.instance.container;
                e.clear(), e.state = ne, i.removeEventListener("mouseenter", e.onMouseEnter, !1), i.removeEventListener("mouseleave", e.onMouseLeave, !1), document.removeEventListener("visibilitychange", e.onVisibilityChange, !1), C(i, "has-autoplay"), t !== ne && e.emit("stop")
            }
            pause() {
                const e = this;
                e.state === be && (e.state = ve, e.clear(), e.emit(ve))
            }
            resume() {
                const e = this,
                    t = e.instance;
                if (t.isInfinite || t.page !== t.pages.length - 1)
                    if (e.state !== be) {
                        if (e.state === ve && !e.inHover) {
                            const i = new Event("resume", {
                                bubbles: !0,
                                cancelable: !0
                            });
                            e.emit("resume", i), i.defaultPrevented || e.set()
                        }
                    } else e.set();
                else e.stop()
            }
            toggle() {
                this.state === be || this.state === ve ? this.stop() : this.start()
            }
            attach() {
                const e = this,
                    t = e.instance;
                t.on("ready", e.onReady), t.on("Panzoom.startAnimation", e.onChange), t.on("Panzoom.endAnimation", e.onSettle), t.on("Panzoom.touchMove", e.onChange)
            }
            detach() {
                const e = this,
                    t = e.instance;
                t.off("ready", e.onReady), t.off("Panzoom.startAnimation", e.onChange), t.off("Panzoom.endAnimation", e.onSettle), t.off("Panzoom.touchMove", e.onChange), e.stop()
            }
        }
        Object.defineProperty(nt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                autoStart: !0,
                pauseOnHover: !0,
                progressParentEl: null,
                showProgress: !0,
                timeout: 3e3
            }
        });
        class st extends D {
            constructor() {
                super(...arguments), Object.defineProperty(this, "ref", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                })
            }
            onPrepare(e) {
                const t = e.carousel;
                if (!t) return;
                const i = e.container;
                i && (t.options.Autoplay = L({
                    autoStart: !1
                }, this.option("Autoplay") || {}, {
                    pauseOnHover: !1,
                    timeout: this.option("timeout"),
                    progressParentEl: () => this.option("progressParentEl") || null,
                    on: {
                        start: () => {
                            e.emit("startSlideshow")
                        },
                        set: n => {
                            var s;
                            i.classList.add("has-slideshow"), ((s = e.getSlide()) === null || s === void 0 ? void 0 : s.state) !== A.Ready && n.pause()
                        },
                        stop: () => {
                            i.classList.remove("has-slideshow"), e.isCompact || e.endIdle(), e.emit("endSlideshow")
                        },
                        resume: (n, s) => {
                            var o, a, l;
                            !s || !s.cancelable || ((o = e.getSlide()) === null || o === void 0 ? void 0 : o.state) === A.Ready && (!((l = (a = e.carousel) === null || a === void 0 ? void 0 : a.panzoom) === null || l === void 0) && l.isResting) || s.preventDefault()
                        }
                    }
                }), t.attachPlugins({
                    Autoplay: nt
                }), this.ref = t.plugins.Autoplay)
            }
            onReady(e) {
                const t = e.carousel,
                    i = this.ref;
                i && t && this.option("playOnStart") && (t.isInfinite || t.page < t.pages.length - 1) && i.start()
            }
            onDone(e, t) {
                const i = this.ref,
                    n = e.carousel;
                if (!i || !n) return;
                const s = t.panzoom;
                s && s.on("startAnimation", () => {
                    e.isCurrentSlide(t) && i.stop()
                }), e.isCurrentSlide(t) && i.resume()
            }
            onKeydown(e, t) {
                var i;
                const n = this.ref;
                n && t === this.option("key") && ((i = document.activeElement) === null || i === void 0 ? void 0 : i.nodeName) !== "BUTTON" && n.toggle()
            }
            attach() {
                const e = this,
                    t = e.instance;
                t.on("Carousel.init", e.onPrepare), t.on("Carousel.ready", e.onReady), t.on("done", e.onDone), t.on("keydown", e.onKeydown)
            }
            detach() {
                const e = this,
                    t = e.instance;
                t.off("Carousel.init", e.onPrepare), t.off("Carousel.ready", e.onReady), t.off("done", e.onDone), t.off("keydown", e.onKeydown)
            }
        }
        Object.defineProperty(st, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                key: " ",
                playOnStart: !1,
                progressParentEl: c => {
                    var e;
                    return ((e = c.instance.container) === null || e === void 0 ? void 0 : e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || c.instance.container
                },
                timeout: 3e3
            }
        });
        const ot = {
            classes: {
                container: "f-thumbs f-carousel__thumbs",
                viewport: "f-thumbs__viewport",
                track: "f-thumbs__track",
                slide: "f-thumbs__slide",
                isResting: "is-resting",
                isSelected: "is-selected",
                isLoading: "is-loading",
                hasThumbs: "has-thumbs"
            },
            minCount: 2,
            parentEl: null,
            thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
            type: "modern"
        };
        var _;
        (function(c) {
            c[c.Init = 0] = "Init", c[c.Ready = 1] = "Ready", c[c.Hidden = 2] = "Hidden"
        })(_ || (_ = {}));
        let at = class extends D {
            constructor() {
                super(...arguments), Object.defineProperty(this, "type", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "modern"
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "track", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "carousel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "panzoom", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "thumbWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbClipWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbHeight", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbGap", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbExtraGap", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "shouldCenter", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !0
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: _.Init
                })
            }
            formatThumb(c, e) {
                return this.instance.localize(e, [
                    ["%i", c.index],
                    ["%d", c.index + 1],
                    ["%s", c.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]
                ])
            }
            getSlides() {
                const c = [],
                    e = this.option("thumbTpl") || "";
                if (e)
                    for (const t of this.instance.slides || []) {
                        let i = "";
                        t.type && (i = `for-${t.type}`, t.type && ["video", "youtube", "vimeo", "html5video"].includes(t.type) && (i += " for-video")), c.push({
                            html: this.formatThumb(t, e),
                            customClass: i
                        })
                    }
                return c
            }
            onInitSlide(c, e) {
                const t = e.el;
                t && (e.thumbSrc = t.dataset.thumbSrc || e.thumbSrc || "", e.thumbClipWidth = parseFloat(t.dataset.thumbClipWidth || "") || e.thumbClipWidth || 0, e.thumbHeight = parseFloat(t.dataset.thumbHeight || "") || e.thumbHeight || 0)
            }
            onInitSlides() {
                this.build()
            }
            onRefreshM() {
                this.refreshModern()
            }
            onChangeM() {
                this.type === "modern" && (this.shouldCenter = !0, this.centerModern())
            }
            onClickModern(c) {
                c.preventDefault(), c.stopPropagation();
                const e = this.instance,
                    t = e.page,
                    i = o => {
                        if (o) {
                            const a = o.closest("[data-carousel-index]");
                            if (a) return parseInt(a.dataset.carouselIndex || "", 10) || 0
                        }
                        return -1
                    },
                    n = (o, a) => {
                        const l = document.elementFromPoint(o, a);
                        return l ? i(l) : -1
                    };
                let s = i(c.target);
                s < 0 && (s = n(c.clientX + this.thumbGap, c.clientY), s === t && (s = t - 1)), s < 0 && (s = n(c.clientX - this.thumbGap, c.clientY), s === t && (s = t + 1)), s < 0 && (s = (o => {
                    let a = n(c.clientX - o, c.clientY),
                        l = n(c.clientX + o, c.clientY);
                    return s < 0 && a === t && (s = t + 1), s < 0 && l === t && (s = t - 1), s
                })(this.thumbExtraGap)), s === t ? this.centerModern() : s > -1 && s < e.pages.length && e.slideTo(s)
            }
            onTransformM() {
                if (this.type !== "modern") return;
                const {
                    instance: c,
                    container: e,
                    track: t
                } = this, i = c.panzoom;
                if (!(e && t && i && this.panzoom)) return;
                F(e, this.cn("isResting"), i.state !== S.Init && i.isResting);
                const n = this.thumbGap,
                    s = this.thumbExtraGap,
                    o = this.thumbClipWidth;
                let a = 0,
                    l = 0,
                    r = 0;
                for (const d of c.slides) {
                    let h = d.index,
                        u = d.thumbSlideEl;
                    if (!u) continue;
                    F(u, this.cn("isSelected"), h === c.page), l = 1 - Math.abs(c.getProgress(h)), u.style.setProperty("--progress", l ? l + "" : "");
                    const p = .5 * ((d.thumbWidth || 0) - o);
                    a += n, a += p, l && (a -= l * (p + s)), u.style.setProperty("--shift", a - n + ""), a += p, l && (a -= l * (p + s)), a -= n, h === 0 && (r = s * l)
                }
                t && (t.style.setProperty("--left", r + ""), t.style.setProperty("--width", a + r + n + s * l + "")), this.shouldCenter && this.centerModern()
            }
            buildClassic() {
                const {
                    container: c,
                    track: e
                } = this, t = this.getSlides();
                if (!c || !e || !t) return;
                const i = new this.instance.constructor(c, L({
                    track: e,
                    infinite: !1,
                    center: !0,
                    fill: !0,
                    dragFree: !0,
                    slidesPerPage: 1,
                    transition: !1,
                    Dots: !1,
                    Navigation: !1,
                    classes: {
                        container: "f-thumbs",
                        viewport: "f-thumbs__viewport",
                        track: "f-thumbs__track",
                        slide: "f-thumbs__slide"
                    }
                }, this.option("Carousel") || {}, {
                    Sync: {
                        target: this.instance
                    },
                    slides: t
                }));
                this.carousel = i, this.track = e, i.on("ready", () => {
                    this.emit("ready")
                }), i.on("createSlide", (n, s) => {
                    this.emit("createSlide", s, s.el)
                })
            }
            buildModern() {
                if (this.type !== "modern") return;
                const {
                    container: c,
                    track: e,
                    instance: t
                } = this, i = this.option("thumbTpl") || "";
                if (!c || !e || !i) return;
                c.addEventListener("keydown", () => {
                    C(c, "is-using-mouse")
                }), y(c, "is-horizontal"), this.updateModern();
                for (const s of t.slides || []) {
                    const o = document.createElement("div");
                    if (y(o, this.cn("slide")), s.type) {
                        let a = `for-${s.type}`;
                        ["video", "youtube", "vimeo", "html5video"].includes(s.type) && (a += " for-video"), y(o, a)
                    }
                    o.appendChild(R(this.formatThumb(s, i))), this.emit("createSlide", s, o), s.thumbSlideEl = o, e.appendChild(o), this.resizeModernSlide(s)
                }
                const n = new t.constructor.Panzoom(c, {
                    content: e,
                    lockAxis: "x",
                    zoom: !1,
                    panOnlyZoomed: !1,
                    bounds: () => {
                        let s = 0,
                            o = 0,
                            a = t.slides[0],
                            l = t.slides[t.slides.length - 1],
                            r = t.slides[t.page];
                        return a && l && r && (o = -1 * this.getModernThumbPos(0), t.page !== 0 && (o += .5 * (a.thumbWidth || 0)), s = -1 * this.getModernThumbPos(t.slides.length - 1), t.page !== t.slides.length - 1 && (s += (l.thumbWidth || 0) - (r.thumbWidth || 0) - .5 * (l.thumbWidth || 0))), {
                            x: {
                                min: s,
                                max: o
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }
                    }
                });
                n.on("touchStart", (s, o) => {
                    this.shouldCenter = !1, y(this.container, "is-using-mouse")
                }), n.on("click", (s, o) => this.onClickModern(o)), n.on("ready", () => {
                    this.centerModern(), this.emit("ready")
                }), n.on(["afterTransform", "refresh"], s => {
                    this.lazyLoadModern()
                }), this.panzoom = n, this.refreshModern()
            }
            updateModern() {
                if (this.type !== "modern") return;
                const {
                    container: c
                } = this;
                c && (this.thumbGap = parseFloat(getComputedStyle(c).getPropertyValue("--f-thumb-gap")) || 0, this.thumbExtraGap = parseFloat(getComputedStyle(c).getPropertyValue("--f-thumb-extra-gap")) || 0, this.thumbWidth = parseFloat(getComputedStyle(c).getPropertyValue("--f-thumb-width")) || 40, this.thumbClipWidth = parseFloat(getComputedStyle(c).getPropertyValue("--f-thumb-clip-width")) || 40, this.thumbHeight = parseFloat(getComputedStyle(c).getPropertyValue("--f-thumb-height")) || 40)
            }
            refreshModern() {
                var c;
                if (this.type === "modern") {
                    this.updateModern();
                    for (const e of this.instance.slides || []) this.resizeModernSlide(e);
                    this.onTransformM(), (c = this.panzoom) === null || c === void 0 || c.updateMetrics(!0), this.centerModern(0)
                }
            }
            centerModern(c) {
                const e = this.instance,
                    {
                        container: t,
                        panzoom: i
                    } = this;
                if (!t || !i || i.state === S.Init) return;
                const n = e.page;
                let s = this.getModernThumbPos(n),
                    o = s;
                for (let l = e.page - 3; l < e.page + 3; l++) {
                    if (l < 0 || l > e.pages.length - 1 || l === e.page) continue;
                    const r = 1 - Math.abs(e.getProgress(l));
                    r > 0 && r < 1 && (o += r * (this.getModernThumbPos(l) - s))
                }
                let a = 100;
                c === void 0 && (c = .2, e.inTransition.size > 0 && (c = .12), Math.abs(-1 * i.current.e - o) > i.containerRect.width && (c = .5, a = 0)), i.options.maxVelocity = a, i.applyChange({
                    panX: g(-1 * o - i.target.e, 1e3),
                    friction: e.prevPage === null ? 0 : c
                })
            }
            lazyLoadModern() {
                const {
                    instance: c,
                    panzoom: e
                } = this;
                if (!e) return;
                const t = -1 * e.current.e || 0;
                let i = this.getModernThumbPos(c.page);
                if (e.state !== S.Init || i === 0)
                    for (const n of c.slides || []) {
                        const s = n.thumbSlideEl;
                        if (!s) continue;
                        const o = s.querySelector("img[data-lazy-src]"),
                            a = n.index,
                            l = this.getModernThumbPos(a),
                            r = t - .5 * e.containerRect.innerWidth,
                            d = r + e.containerRect.innerWidth;
                        if (!o || l < r || l > d) continue;
                        let h = o.dataset.lazySrc;
                        if (!h || !h.length || (delete o.dataset.lazySrc, o.src = h, o.complete)) continue;
                        y(s, this.cn("isLoading"));
                        const u = R(de);
                        s.appendChild(u), o.addEventListener("load", () => {
                            s.offsetParent && (s.classList.remove(this.cn("isLoading")), u.remove())
                        }, !1)
                    }
            }
            resizeModernSlide(c) {
                if (this.type !== "modern" || !c.thumbSlideEl) return;
                const e = c.thumbClipWidth && c.thumbHeight ? Math.round(this.thumbHeight * (c.thumbClipWidth / c.thumbHeight)) : this.thumbWidth;
                c.thumbWidth = e
            }
            getModernThumbPos(c) {
                const e = this.instance.slides[c],
                    t = this.panzoom;
                if (!t || !t.contentRect.fitWidth) return 0;
                let i = t.containerRect.innerWidth,
                    n = t.contentRect.width;
                this.instance.slides.length === 2 && (c -= 1, n = 2 * this.thumbClipWidth);
                let s = c * (this.thumbClipWidth + this.thumbGap) + this.thumbExtraGap + .5 * (e.thumbWidth || 0);
                return s -= n > i ? .5 * i : .5 * n, g(s || 0, 1)
            }
            isDisabled() {
                const c = this.option("minCount") || 0;
                if (c) {
                    const t = this.instance;
                    let i = 0;
                    for (const n of t.slides || []) n.thumbSrc && i++;
                    if (i < c) return !0
                }
                const e = this.option("type");
                return ["modern", "classic"].indexOf(e) < 0
            }
            build() {
                if (this.state !== _.Init || this.isDisabled()) return;
                const c = this.instance.container,
                    e = this.option("type");
                this.type = e;
                const t = document.createElement("div");
                y(t, this.cn("container")), y(t, `is-${e}`);
                const i = this.option("parentEl");
                i ? i.appendChild(t) : c.after(t), this.container = t, y(c, this.cn("hasThumbs"));
                const n = document.createElement("div");
                y(n, this.cn("track")), t.appendChild(n), this.track = n, e === "classic" ? this.buildClassic() : this.buildModern(), this.state = _.Ready
            }
            cleanup() {
                this.carousel && this.carousel.destroy(), this.carousel = null, this.panzoom && this.panzoom.destroy(), this.panzoom = null, this.container && this.container.remove(), this.container = null, this.track = null, this.state = _.Init, C(this.instance.container, this.cn("hasThumbs"))
            }
            attach() {
                const c = this,
                    e = c.instance;
                e.on("initSlide", c.onInitSlide), e.state === T.Init ? e.on("initSlides", c.onInitSlides) : c.onInitSlides(), e.on("Panzoom.afterTransform", c.onTransformM), e.on("Panzoom.refresh", c.onRefreshM), e.on("change", c.onChangeM)
            }
            detach() {
                const c = this,
                    e = c.instance;
                e.off("initSlide", c.onInitSlide), e.off("initSlides", c.onInitSlides), e.off("Panzoom.afterTransform", c.onTransformM), e.off("Panzoom.refresh", c.onRefreshM), e.off("change", c.onChangeM), c.cleanup()
            }
        };
        Object.defineProperty(at, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ot
        });
        const Tt = Object.assign(Object.assign({}, ot), {
                key: "t",
                showOnStart: !0,
                parentEl: null
            }),
            rt = "is-masked",
            lt = "aria-hidden";
        class ct extends D {
            constructor() {
                super(...arguments), Object.defineProperty(this, "ref", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "hidden", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                })
            }
            get isEnabled() {
                const e = this.ref;
                return e && !e.isDisabled()
            }
            get isHidden() {
                return this.hidden
            }
            onInit() {
                var e;
                const t = this,
                    i = t.instance,
                    n = i.carousel;
                if (t.ref || !n) return;
                const s = t.option("parentEl") || i.footer || i.container;
                if (!s) return;
                const o = L({}, t.options, {
                    parentEl: s,
                    classes: {
                        container: "f-thumbs fancybox__thumbs"
                    },
                    Carousel: {
                        Sync: {
                            friction: i.option("Carousel.friction") || 0
                        }
                    },
                    on: {
                        ready: a => {
                            const l = a.container;
                            l && this.hidden && (t.refresh(), l.style.transition = "none", t.hide(), l.offsetHeight, queueMicrotask(() => {
                                l.style.transition = "", t.show()
                            }))
                        }
                    }
                });
                o.Carousel = o.Carousel || {}, o.Carousel.on = L(((e = t.options.Carousel) === null || e === void 0 ? void 0 : e.on) || {}, {
                    click: (a, l) => {
                        l.stopPropagation()
                    }
                }), n.options.Thumbs = o, n.attachPlugins({
                    Thumbs: at
                }), t.ref = n.plugins.Thumbs, t.option("showOnStart") || (t.ref.state = _.Hidden, t.hidden = !0)
            }
            onResize() {
                var e;
                const t = (e = this.ref) === null || e === void 0 ? void 0 : e.container;
                t && (t.style.maxHeight = "")
            }
            onKeydown(e, t) {
                const i = this.option("key");
                i && i === t && this.toggle()
            }
            toggle() {
                const e = this.ref;
                if (e && !e.isDisabled()) return e.state === _.Hidden ? (e.state = _.Init, void e.build()) : void(this.hidden ? this.show() : this.hide())
            }
            show() {
                const e = this.ref;
                if (!e || e.isDisabled()) return;
                const t = e.container;
                t && (this.refresh(), t.offsetHeight, t.removeAttribute(lt), t.classList.remove(rt), this.hidden = !1)
            }
            hide() {
                const e = this.ref,
                    t = e && e.container;
                t && (this.refresh(), t.offsetHeight, t.classList.add(rt), t.setAttribute(lt, "true")), this.hidden = !0
            }
            refresh() {
                const e = this.ref;
                if (!e || !e.state) return;
                const t = e.container,
                    i = (t == null ? void 0 : t.firstChild) || null;
                t && i && i.childNodes.length && (t.style.maxHeight = `${i.getBoundingClientRect().height}px`)
            }
            attach() {
                const e = this,
                    t = e.instance;
                t.state === O.Init ? t.on("Carousel.init", e.onInit) : e.onInit(), t.on("resize", e.onResize), t.on("keydown", e.onKeydown)
            }
            detach() {
                var e;
                const t = this,
                    i = t.instance;
                i.off("Carousel.init", t.onInit), i.off("resize", t.onResize), i.off("keydown", t.onKeydown), (e = i.carousel) === null || e === void 0 || e.detachPlugins(["Thumbs"]), t.ref = null
            }
        }
        Object.defineProperty(ct, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tt
        });
        const ze = {
            panLeft: {
                icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
                change: {
                    panX: -100
                }
            },
            panRight: {
                icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
                change: {
                    panX: 100
                }
            },
            panUp: {
                icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
                change: {
                    panY: -100
                }
            },
            panDown: {
                icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
                change: {
                    panY: 100
                }
            },
            zoomIn: {
                icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
                action: "zoomIn"
            },
            zoomOut: {
                icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "zoomOut"
            },
            toggle1to1: {
                icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
                action: "toggleZoom"
            },
            toggleZoom: {
                icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "toggleZoom"
            },
            iterateZoom: {
                icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "iterateZoom"
            },
            rotateCCW: {
                icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
                action: "rotateCCW"
            },
            rotateCW: {
                icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
                action: "rotateCW"
            },
            flipX: {
                icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
                action: "flipX"
            },
            flipY: {
                icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
                action: "flipY"
            },
            fitX: {
                icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
                action: "fitX"
            },
            fitY: {
                icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
                action: "fitY"
            },
            reset: {
                icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
                action: "reset"
            },
            toggleFS: {
                icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
                action: "toggleFS"
            }
        };
        var V;
        (function(c) {
            c[c.Init = 0] = "Init", c[c.Ready = 1] = "Ready", c[c.Disabled = 2] = "Disabled"
        })(V || (V = {}));
        const Ot = {
                absolute: "auto",
                display: {
                    left: ["infobar"],
                    middle: [],
                    right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"]
                },
                enabled: "auto",
                items: {
                    infobar: {
                        tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'
                    },
                    download: {
                        tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'
                    },
                    prev: {
                        tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'
                    },
                    next: {
                        tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'
                    },
                    slideshow: {
                        tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'
                    },
                    fullscreen: {
                        tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'
                    },
                    thumbs: {
                        tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'
                    },
                    close: {
                        tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'
                    }
                },
                parentEl: null
            },
            At = {
                tabindex: "-1",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            };
        class ht extends D {
            constructor() {
                super(...arguments), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: V.Init
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                })
            }
            onReady(e) {
                var t;
                if (!e.carousel) return;
                let i = this.option("display"),
                    n = this.option("absolute"),
                    s = this.option("enabled");
                if (s === "auto") {
                    const r = this.instance.carousel;
                    let d = 0;
                    if (r)
                        for (const h of r.slides)(h.panzoom || h.type === "image") && d++;
                    d || (s = !1)
                }
                s || (i = void 0);
                let o = 0;
                const a = {
                    left: [],
                    middle: [],
                    right: []
                };
                if (i)
                    for (const r of ["left", "middle", "right"])
                        for (const d of i[r]) {
                            const h = this.createEl(d);
                            h && ((t = a[r]) === null || t === void 0 || t.push(h), o++)
                        }
                let l = null;
                if (o && (l = this.createContainer()), l) {
                    for (const [r, d] of Object.entries(a)) {
                        const h = document.createElement("div");
                        y(h, "fancybox__toolbar__column is-" + r);
                        for (const u of d) h.appendChild(u);
                        n !== "auto" || r !== "middle" || d.length || (n = !0), l.appendChild(h)
                    }
                    n === !0 && y(l, "is-absolute"), this.state = V.Ready, this.onRefresh()
                } else this.state = V.Disabled
            }
            onClick(e) {
                var t, i;
                const n = this.instance,
                    s = n.getSlide(),
                    o = s == null ? void 0 : s.panzoom,
                    a = e.target,
                    l = a && z(a) ? a.dataset : null;
                if (!l) return;
                if (l.fancyboxToggleThumbs !== void 0) return e.preventDefault(), e.stopPropagation(), void((t = n.plugins.Thumbs) === null || t === void 0 || t.toggle());
                if (l.fancyboxToggleFullscreen !== void 0) return e.preventDefault(), e.stopPropagation(), void this.instance.toggleFullscreen();
                if (l.fancyboxToggleSlideshow !== void 0) {
                    e.preventDefault(), e.stopPropagation();
                    const h = (i = n.carousel) === null || i === void 0 ? void 0 : i.plugins.Autoplay;
                    let u = h.isActive;
                    return o && o.panMode === "mousemove" && !u && o.reset(), void(u ? h.stop() : h.start())
                }
                const r = l.panzoomAction,
                    d = l.panzoomChange;
                if ((d || r) && (e.preventDefault(), e.stopPropagation()), d) {
                    let h = {};
                    try {
                        h = JSON.parse(d)
                    } catch {}
                    o && o.applyChange(h)
                } else r && o && o[r] && o[r]()
            }
            onChange() {
                this.onRefresh()
            }
            onRefresh() {
                if (this.instance.isClosing()) return;
                const e = this.container;
                if (!e) return;
                const t = this.instance.getSlide();
                if (!t || t.state !== A.Ready) return;
                const i = t && !t.error && t.panzoom;
                for (const o of e.querySelectorAll("[data-panzoom-action]")) i ? (o.removeAttribute("disabled"), o.removeAttribute("tabindex")) : (o.setAttribute("disabled", ""), o.setAttribute("tabindex", "-1"));
                let n = i && i.canZoomIn(),
                    s = i && i.canZoomOut();
                for (const o of e.querySelectorAll('[data-panzoom-action="zoomIn"]')) n ? (o.removeAttribute("disabled"), o.removeAttribute("tabindex")) : (o.setAttribute("disabled", ""), o.setAttribute("tabindex", "-1"));
                for (const o of e.querySelectorAll('[data-panzoom-action="zoomOut"]')) s ? (o.removeAttribute("disabled"), o.removeAttribute("tabindex")) : (o.setAttribute("disabled", ""), o.setAttribute("tabindex", "-1"));
                for (const o of e.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
                    s || n ? (o.removeAttribute("disabled"), o.removeAttribute("tabindex")) : (o.setAttribute("disabled", ""), o.setAttribute("tabindex", "-1"));
                    const a = o.querySelector("g");
                    a && (a.style.display = n ? "" : "none")
                }
            }
            onDone(e, t) {
                var i;
                (i = t.panzoom) === null || i === void 0 || i.on("afterTransform", () => {
                    this.instance.isCurrentSlide(t) && this.onRefresh()
                }), this.instance.isCurrentSlide(t) && this.onRefresh()
            }
            createContainer() {
                const e = this.instance.container;
                if (!e) return null;
                const t = this.option("parentEl") || e,
                    i = document.createElement("div");
                return y(i, "fancybox__toolbar"), t.prepend(i), i.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !0
                }), e && y(e, "has-toolbar"), this.container = i, i
            }
            createEl(e) {
                const t = this.instance,
                    i = t.carousel;
                if (!i || e === "toggleFS" || e === "fullscreen" && !t.fsAPI) return null;
                let n = null;
                const s = i.slides.length || 0;
                let o = 0,
                    a = 0;
                for (const r of i.slides)(r.panzoom || r.type === "image") && o++, (r.type === "image" || r.downloadSrc) && a++;
                if (s < 2 && ["infobar", "prev", "next"].includes(e)) return n;
                if (ze[e] !== void 0 && !o || e === "download" && !a) return null;
                if (e === "thumbs") {
                    const r = t.plugins.Thumbs;
                    if (!r || !r.isEnabled) return null
                }
                if (e === "slideshow" && (!i.plugins.Autoplay || s < 2)) return null;
                if (ze[e] !== void 0) {
                    const r = ze[e];
                    n = document.createElement("button"), n.setAttribute("title", this.instance.localize(`{{${e.toUpperCase()}}}`)), y(n, "f-button"), r.action && (n.dataset.panzoomAction = r.action), r.change && (n.dataset.panzoomChange = JSON.stringify(r.change)), n.appendChild(R(this.instance.localize(r.icon)))
                } else {
                    const r = (this.option("items") || [])[e];
                    r && (n = R(this.instance.localize(r.tpl)), typeof r.click == "function" && n.addEventListener("click", d => {
                        d.preventDefault(), d.stopPropagation(), typeof r.click == "function" && r.click.call(this, this, d)
                    }))
                }
                const l = n == null ? void 0 : n.querySelector("svg");
                if (l)
                    for (const [r, d] of Object.entries(At)) l.getAttribute(r) || l.setAttribute(r, String(d));
                return n
            }
            removeContainer() {
                const e = this.container;
                e && e.remove(), this.container = null, this.state = V.Disabled;
                const t = this.instance.container;
                t && C(t, "has-toolbar")
            }
            attach() {
                const e = this,
                    t = e.instance;
                t.on("Carousel.initSlides", e.onReady), t.on("done", e.onDone), t.on("reveal", e.onChange), t.on("Carousel.change", e.onChange), e.onReady(e.instance)
            }
            detach() {
                const e = this,
                    t = e.instance;
                t.off("Carousel.initSlides", e.onReady), t.off("done", e.onDone), t.off("reveal", e.onChange), t.off("Carousel.change", e.onChange), e.removeContainer()
            }
        }
        Object.defineProperty(ht, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ot
        });
        const zt = {
                Hash: j,
                Html: it,
                Images: Qe,
                Slideshow: st,
                Thumbs: ct,
                Toolbar: ht
            },
            dt = "with-fancybox",
            Le = "hide-scrollbar",
            ut = "--fancybox-scrollbar-compensate",
            pt = "--fancybox-body-margin",
            Re = "is-animated",
            ft = "is-compact",
            mt = "is-loading",
            J = "disabled",
            Z = "tabindex",
            gt = "download",
            ke = "href",
            Q = "src",
            bt = function() {
                var c = window.getSelection();
                return c && c.type === "Range"
            };
        let I = null,
            G = null;
        const se = new Map;
        let Lt = 0;
        class E extends Ee {
            get isIdle() {
                return this.idle
            }
            get isCompact() {
                return this.option("compact")
            }
            constructor(e = [], t = {}, i = {}) {
                super(t), Object.defineProperty(this, "userSlides", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "userPlugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }), Object.defineProperty(this, "idle", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "idleTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "clickTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "pwt", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "ignoreFocusChange", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: O.Init
                }), Object.defineProperty(this, "id", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "footer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "caption", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "carousel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "lastFocus", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "prevMouseMoveEvent", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "fsAPI", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), this.fsAPI = (() => {
                    let n, s = "",
                        o = "",
                        a = "";
                    return document.fullscreenEnabled ? (s = "requestFullscreen", o = "exitFullscreen", a = "fullscreenElement") : document.webkitFullscreenEnabled && (s = "webkitRequestFullscreen", o = "webkitExitFullscreen", a = "webkitFullscreenElement"), s && (n = {
                        request: function(l) {
                            return s === "webkitRequestFullscreen" ? l[s](Element.ALLOW_KEYBOARD_INPUT) : l[s]()
                        },
                        exit: function() {
                            return document[a] && document[o]()
                        },
                        isFullscreen: function() {
                            return document[a]
                        }
                    }), n
                })(), this.id = t.id || ++Lt, se.set(this.id, this), this.userSlides = e, this.userPlugins = i, queueMicrotask(() => {
                    this.init()
                })
            }
            init() {
                if (this.state === O.Destroy) return;
                this.state = O.Init, this.attachPlugins(Object.assign(Object.assign({}, E.Plugins), this.userPlugins)), this.emit("init"), this.emit("attachPlugins"), this.option("hideScrollbar") === !0 && (() => {
                    if (!te) return;
                    const i = document.body;
                    if (i.classList.contains(Le)) return;
                    let n = window.innerWidth - document.documentElement.getBoundingClientRect().width;
                    n < 0 && (n = 0);
                    const s = i.currentStyle || window.getComputedStyle(i),
                        o = parseFloat(s.marginRight);
                    document.documentElement.style.setProperty(ut, `${n}px`), o && i.style.setProperty(pt, `${o}px`), i.classList.add(Le)
                })(), this.initLayout(), this.scale();
                const e = () => {
                        this.initCarousel(this.userSlides), this.state = O.Ready, this.attachEvents(), this.emit("ready"), setTimeout(() => {
                            this.container && this.container.setAttribute("aria-hidden", "false")
                        }, 16)
                    },
                    t = this.fsAPI;
                this.option("Fullscreen.autoStart") && t && !t.isFullscreen() ? t.request(this.container).then(() => e()).catch(() => e()) : e()
            }
            initLayout() {
                var e, t;
                const i = this.option("parentEl") || document.body,
                    n = R(this.localize(this.option("tpl.main") || ""));
                n && (n.setAttribute("id", `fancybox-${this.id}`), n.setAttribute("aria-label", this.localize("{{MODAL}}")), n.classList.toggle(ft, this.isCompact), y(n, this.option("mainClass") || ""), this.container = n, this.footer = n.querySelector(".fancybox__footer"), i.appendChild(n), y(document.documentElement, dt), I && G || (I = document.createElement("span"), y(I, "fancybox-focus-guard"), I.setAttribute(Z, "0"), I.setAttribute("aria-hidden", "true"), I.setAttribute("aria-label", "Focus guard"), G = I.cloneNode(), (e = n.parentElement) === null || e === void 0 || e.insertBefore(I, n), (t = n.parentElement) === null || t === void 0 || t.append(G)), this.option("animated") && (y(n, Re), setTimeout(() => {
                    this.isClosing() || C(n, Re)
                }, 350)), this.emit("initLayout"))
            }
            initCarousel(e) {
                const t = this.container;
                if (!t) return;
                const i = t.querySelector(".fancybox__carousel");
                if (!i) return;
                const n = this.carousel = new X(i, L({}, {
                    slides: e,
                    transition: "fade",
                    Panzoom: {
                        lockAxis: this.option("dragToClose") ? "xy" : "x",
                        infinite: !!this.option("dragToClose") && "y"
                    },
                    Dots: !1,
                    Navigation: {
                        classes: {
                            container: "fancybox__nav",
                            button: "f-button",
                            isNext: "is-next",
                            isPrev: "is-prev"
                        }
                    },
                    initialPage: this.option("startIndex"),
                    l10n: this.option("l10n")
                }, this.option("Carousel") || {}));
                n.on("*", (s, o, ...a) => {
                    this.emit(`Carousel.${o}`, s, ...a)
                }), n.on(["ready", "change"], () => {
                    this.manageCaption()
                }), this.on("Carousel.removeSlide", (s, o, a) => {
                    this.clearContent(a), a.state = void 0
                }), n.on("Panzoom.touchStart", () => {
                    var s, o;
                    this.isCompact || this.endIdle(), !((s = document.activeElement) === null || s === void 0) && s.closest(".f-thumbs") && ((o = this.container) === null || o === void 0 || o.focus())
                }), n.on("settle", () => {
                    this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && !this.isClosing && this.checkFocus()
                }), this.option("dragToClose") && (n.on("Panzoom.afterTransform", (s, o) => {
                    const a = this.getSlide();
                    if (a && le(a.el)) return;
                    const l = this.container;
                    if (l) {
                        const r = Math.abs(o.current.f),
                            d = r < 1 ? "" : Math.max(.5, Math.min(1, 1 - r / o.contentRect.fitHeight * 1.5));
                        l.style.setProperty("--fancybox-ts", d ? "0s" : ""), l.style.setProperty("--fancybox-opacity", d + "")
                    }
                }), n.on("Panzoom.touchEnd", (s, o, a) => {
                    var l;
                    const r = this.getSlide();
                    if (r && le(r.el) || o.isMobile && document.activeElement && ["TEXTAREA", "INPUT"].indexOf((l = document.activeElement) === null || l === void 0 ? void 0 : l.nodeName) !== -1) return;
                    const d = Math.abs(o.dragOffset.y);
                    o.lockedAxis === "y" && (d >= 200 || d >= 50 && o.dragOffset.time < 300) && (a && a.cancelable && a.preventDefault(), this.close(a, "f-throwOut" + (o.current.f < 0 ? "Up" : "Down")))
                })), n.on("change", s => {
                    var o;
                    let a = (o = this.getSlide()) === null || o === void 0 ? void 0 : o.triggerEl;
                    if (a) {
                        const l = new CustomEvent("slideTo", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: s.page
                        });
                        a.dispatchEvent(l)
                    }
                }), n.on(["refresh", "change"], s => {
                    const o = this.container;
                    if (!o) return;
                    for (const r of o.querySelectorAll("[data-fancybox-current-index]")) r.innerHTML = s.page + 1;
                    for (const r of o.querySelectorAll("[data-fancybox-count]")) r.innerHTML = s.pages.length;
                    if (!s.isInfinite) {
                        for (const r of o.querySelectorAll("[data-fancybox-next]")) s.page < s.pages.length - 1 ? (r.removeAttribute(J), r.removeAttribute(Z)) : (r.setAttribute(J, ""), r.setAttribute(Z, "-1"));
                        for (const r of o.querySelectorAll("[data-fancybox-prev]")) s.page > 0 ? (r.removeAttribute(J), r.removeAttribute(Z)) : (r.setAttribute(J, ""), r.setAttribute(Z, "-1"))
                    }
                    const a = this.getSlide();
                    if (!a) return;
                    let l = a.downloadSrc || "";
                    l || a.type !== "image" || a.error || typeof a[Q] != "string" || (l = a[Q]);
                    for (const r of o.querySelectorAll("[data-fancybox-download]")) {
                        const d = a.downloadFilename;
                        l ? (r.removeAttribute(J), r.removeAttribute(Z), r.setAttribute(ke, l), r.setAttribute(gt, d || l), r.setAttribute("target", "_blank")) : (r.setAttribute(J, ""), r.setAttribute(Z, "-1"), r.removeAttribute(ke), r.removeAttribute(gt))
                    }
                }), this.emit("initCarousel")
            }
            attachEvents() {
                const e = this,
                    t = e.container;
                if (!t) return;
                t.addEventListener("click", e.onClick, {
                    passive: !1,
                    capture: !1
                }), t.addEventListener("wheel", e.onWheel, {
                    passive: !1,
                    capture: !1
                }), document.addEventListener("keydown", e.onKeydown, {
                    passive: !1,
                    capture: !0
                }), document.addEventListener("visibilitychange", e.onVisibilityChange, !1), document.addEventListener("mousemove", e.onMousemove), e.option("trapFocus") && document.addEventListener("focus", e.onFocus, !0), window.addEventListener("resize", e.onResize);
                const i = window.visualViewport;
                i && (i.addEventListener("scroll", e.onResize), i.addEventListener("resize", e.onResize))
            }
            detachEvents() {
                const e = this,
                    t = e.container;
                if (!t) return;
                document.removeEventListener("keydown", e.onKeydown, {
                    passive: !1,
                    capture: !0
                }), t.removeEventListener("wheel", e.onWheel, {
                    passive: !1,
                    capture: !1
                }), t.removeEventListener("click", e.onClick, {
                    passive: !1,
                    capture: !1
                }), document.removeEventListener("mousemove", e.onMousemove), window.removeEventListener("resize", e.onResize);
                const i = window.visualViewport;
                i && (i.removeEventListener("resize", e.onResize), i.removeEventListener("scroll", e.onResize)), document.removeEventListener("visibilitychange", e.onVisibilityChange, !1), document.removeEventListener("focus", e.onFocus, !0)
            }
            scale() {
                const e = this.container;
                if (!e) return;
                const t = window.visualViewport,
                    i = Math.max(1, (t == null ? void 0 : t.scale) || 1);
                let n = "",
                    s = "",
                    o = "";
                if (t && i > 1) {
                    let a = `${t.offsetLeft}px`,
                        l = `${t.offsetTop}px`;
                    n = t.width * i + "px", s = t.height * i + "px", o = `translate3d(${a}, ${l}, 0) scale(${1/i})`
                }
                e.style.transform = o, e.style.width = n, e.style.height = s
            }
            onClick(e) {
                var t, i;
                const {
                    container: n,
                    isCompact: s
                } = this;
                if (!n || this.isClosing()) return;
                !s && this.option("idle") && this.resetIdle();
                const o = e.composedPath()[0];
                if (o.closest(".f-spinner") || o.closest("[data-fancybox-close]")) return e.preventDefault(), void this.close(e);
                if (o.closest("[data-fancybox-prev]")) return e.preventDefault(), void this.prev();
                if (o.closest("[data-fancybox-next]")) return e.preventDefault(), void this.next();
                const a = document.activeElement;
                if (bt() && a && n.contains(a) || o === ((t = this.carousel) === null || t === void 0 ? void 0 : t.container)) return;
                if (s && ((i = this.getSlide()) === null || i === void 0 ? void 0 : i.type) === "image") return void(this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null) : this.clickTimer = setTimeout(() => {
                    this.toggleIdle(), this.clickTimer = null
                }, 350));
                if (this.emit("click", e), e.defaultPrevented) return;
                let l = !1;
                if (o.closest(".fancybox__content")) {
                    if (a) {
                        if (a.closest("[contenteditable]")) return;
                        o.matches(Me) || a.blur()
                    }
                    if (bt()) return;
                    l = this.option("contentClick")
                } else o.closest(".fancybox__carousel") && !o.matches(Me) && (l = this.option("backdropClick"));
                l === "close" ? (e.preventDefault(), this.close(e)) : l === "next" ? (e.preventDefault(), this.next()) : l === "prev" && (e.preventDefault(), this.prev())
            }
            onWheel(e) {
                var t;
                let i = this.option("wheel", e);
                !((t = e.target) === null || t === void 0) && t.closest(".fancybox__thumbs") && (i = "slide");
                const n = i === "slide",
                    s = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function(l, r) {
                        return Math.abs(r) > Math.abs(l) ? r : l
                    }),
                    o = Math.max(-1, Math.min(1, s)),
                    a = Date.now();
                this.pwt && a - this.pwt < 300 ? n && e.preventDefault() : (this.pwt = a, this.emit("wheel", e), e.defaultPrevented || (i === "close" ? (e.preventDefault(), this.close(e)) : i === "slide" && (e.preventDefault(), this[o > 0 ? "prev" : "next"]())))
            }
            onKeydown(e) {
                if (!this.isTopmost()) return;
                this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
                const t = e.key,
                    i = this.option("keyboard");
                if (!i || e.ctrlKey || e.altKey || e.shiftKey) return;
                const n = e.composedPath()[0],
                    s = document.activeElement && document.activeElement.classList,
                    o = s && s.contains("f-button") || n.dataset.carouselPage || n.dataset.carouselIndex;
                if (t !== "Escape" && !o && z(n) && (n.isContentEditable || ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(n.nodeName) !== -1)) return;
                this.emit("keydown", t, e);
                const a = i[t];
                typeof this[a] == "function" && (e.preventDefault(), this[a]())
            }
            onResize() {
                const e = ft,
                    t = this.container;
                if (!t) return;
                const i = this.isCompact;
                t.classList.toggle(e, i), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), this.scale(), this.emit("resize")
            }
            onFocus(e) {
                this.isTopmost() && this.checkFocus(e)
            }
            onMousemove(e) {
                this.prevMouseMoveEvent = e, !this.isCompact && this.option("idle") && this.resetIdle()
            }
            onVisibilityChange() {
                document.visibilityState === "visible" ? this.checkFocus() : this.endIdle()
            }
            manageCloseBtn(e) {
                const t = this.optionFor(e, "closeButton") || !1;
                if (t === "auto") {
                    const n = this.plugins.Toolbar;
                    if (n && n.state === V.Ready) return
                }
                if (!t || !e.contentEl || e.closeBtnEl) return;
                const i = this.option("tpl.closeButton");
                if (i) {
                    const n = R(this.localize(i));
                    e.closeBtnEl = e.contentEl.appendChild(n), e.el && y(e.el, "has-close-btn")
                }
            }
            manageCaption(e = void 0) {
                var t, i;
                const n = "fancybox__caption",
                    s = "has-caption",
                    o = this.container;
                if (!o) return;
                C(o, s);
                const a = this.isCompact || this.option("commonCaption"),
                    l = !a;
                if (this.caption && this.stop(this.caption), l && this.caption && (this.caption.remove(), this.caption = null), a && !this.caption)
                    for (const u of ((t = this.carousel) === null || t === void 0 ? void 0 : t.slides) || []) u.captionEl && (u.captionEl.remove(), u.captionEl = void 0, C(u.el, s), (i = u.el) === null || i === void 0 || i.removeAttribute("aria-labelledby"));
                if (e || (e = this.getSlide()), !e || a && !this.isCurrentSlide(e)) return;
                const r = e.el;
                let d = this.optionFor(e, "caption", "");
                if (!d) return void(a && this.caption && this.animate(this.caption, "f-fadeOut", () => {
                    this.caption && (this.caption.innerHTML = "")
                }));
                let h = null;
                if (l) {
                    if (h = e.captionEl || null, r && !h) {
                        const u = n + `_${this.id}_${e.index}`;
                        h = document.createElement("div"), y(h, n), h.setAttribute("id", u), e.captionEl = r.appendChild(h), y(r, s), r.setAttribute("aria-labelledby", u)
                    }
                } else h = this.caption, h || (h = o.querySelector("." + n)), !h && (h = document.createElement("div"), h.dataset.fancyboxCaption = "", y(h, n), (this.footer || o).prepend(h)), y(o, s), this.caption = h;
                h && (h.innerHTML = "", typeof d == "string" || typeof d == "number" ? h.innerHTML = d + "" : d instanceof HTMLElement && h.appendChild(d))
            }
            checkFocus(e) {
                var t;
                const i = document.activeElement || null;
                i && (!((t = this.container) === null || t === void 0) && t.contains(i)) || this.focus(e)
            }
            focus(e) {
                var t;
                if (this.ignoreFocusChange) return;
                const i = document.activeElement || null,
                    n = (e == null ? void 0 : e.target) || null,
                    s = this.container,
                    o = this.getSlide();
                if (!s || !(!((t = this.carousel) === null || t === void 0) && t.viewport) || !e && i && s.contains(i)) return;
                const a = o && o.state === A.Ready ? o.el : null;
                if (!a || a.contains(i) || s === i) return;
                e && e.cancelable && e.preventDefault(), this.ignoreFocusChange = !0;
                const l = Array.from(s.querySelectorAll(Me));
                let r = [],
                    d = null;
                for (let u of l) {
                    const p = !u.offsetParent || u.closest('[aria-hidden="true"]'),
                        f = a && a.contains(u),
                        m = !this.carousel.viewport.contains(u);
                    if (u === s || (f || m) && !p) {
                        r.push(u);
                        const b = u.dataset.origTabindex;
                        b !== void 0 && b && (u.tabIndex = parseFloat(b)), u.removeAttribute("data-orig-tabindex"), !u.hasAttribute("autoFocus") && d || (d = u)
                    } else {
                        const b = u.dataset.origTabindex === void 0 ? u.getAttribute("tabindex") || "" : u.dataset.origTabindex;
                        b && (u.dataset.origTabindex = b), u.tabIndex = -1
                    }
                }
                let h = null;
                e ? (!n || r.indexOf(n) < 0) && (h = d || s, r.length && (i === G ? h = r[0] : this.lastFocus !== s && i !== I || (h = r[r.length - 1]))) : h = o && o.type === "image" ? s : d || s, h && Ue(h), this.lastFocus = document.activeElement, this.ignoreFocusChange = !1
            }
            next() {
                const e = this.carousel;
                e && e.pages.length > 1 && e.slideNext()
            }
            prev() {
                const e = this.carousel;
                e && e.pages.length > 1 && e.slidePrev()
            }
            jumpTo(...e) {
                this.carousel && this.carousel.slideTo(...e)
            }
            isTopmost() {
                var e;
                return ((e = E.getInstance()) === null || e === void 0 ? void 0 : e.id) == this.id
            }
            animate(e = null, t = "", i) {
                if (!e || !t) return void(i && i());
                this.stop(e);
                const n = s => {
                    s.target === e && e.dataset.animationName && (e.removeEventListener("animationend", n), delete e.dataset.animationName, i && i(), C(e, t))
                };
                e.dataset.animationName = t, e.addEventListener("animationend", n), y(e, t)
            }
            stop(e) {
                e && e.dispatchEvent(new CustomEvent("animationend", {
                    bubbles: !1,
                    cancelable: !0,
                    currentTarget: e
                }))
            }
            setContent(e, t = "", i = !0) {
                if (this.isClosing()) return;
                const n = e.el;
                if (!n) return;
                let s = null;
                if (z(t) ? s = t : (s = R(t + ""), z(s) || (s = document.createElement("div"), s.innerHTML = t + "")), ["img", "picture", "iframe", "video", "audio"].includes(s.nodeName.toLowerCase())) {
                    const o = document.createElement("div");
                    o.appendChild(s), s = o
                }
                z(s) && e.filter && !e.error && (s = s.querySelector(e.filter)), s && z(s) ? (y(s, "fancybox__content"), e.id && s.setAttribute("id", e.id), s.style.display !== "none" && getComputedStyle(s).getPropertyValue("display") !== "none" || (s.style.display = e.display || this.option("defaultDisplay") || "flex"), n.classList.add(`has-${e.error?"error":e.type||"unknown"}`), n.prepend(s), e.contentEl = s, i && this.revealContent(e), this.manageCloseBtn(e), this.manageCaption(e)) : this.setError(e, "{{ELEMENT_NOT_FOUND}}")
            }
            revealContent(e, t) {
                const i = e.el,
                    n = e.contentEl;
                i && n && (this.emit("reveal", e), this.hideLoading(e), e.state = A.Opening, (t = this.isOpeningSlide(e) ? t === void 0 ? this.optionFor(e, "showClass") : t : "f-fadeIn") ? this.animate(n, t, () => {
                    this.done(e)
                }) : this.done(e))
            }
            done(e) {
                this.isClosing() || (e.state = A.Ready, this.emit("done", e), y(e.el, "is-done"), this.isCurrentSlide(e) && this.option("autoFocus") && queueMicrotask(() => {
                    var t;
                    (t = e.panzoom) === null || t === void 0 || t.updateControls(), this.option("autoFocus") && (this.option("autoFocus") ? this.focus() : this.checkFocus())
                }), this.isOpeningSlide(e) && !this.isCompact && this.option("idle") && this.setIdle())
            }
            isCurrentSlide(e) {
                const t = this.getSlide();
                return !(!e || !t) && t.index === e.index
            }
            isOpeningSlide(e) {
                var t, i;
                return ((t = this.carousel) === null || t === void 0 ? void 0 : t.prevPage) === null && e.index === ((i = this.getSlide()) === null || i === void 0 ? void 0 : i.index)
            }
            showLoading(e) {
                e.state = A.Loading;
                const t = e.el;
                t && (y(t, mt), this.emit("loading", e), e.spinnerEl || setTimeout(() => {
                    if (!this.isClosing() && !e.spinnerEl && e.state === A.Loading) {
                        let i = R(de);
                        e.spinnerEl = i, t.prepend(i), this.animate(i, "f-fadeIn")
                    }
                }, 250))
            }
            hideLoading(e) {
                const t = e.el;
                if (!t) return;
                const i = e.spinnerEl;
                this.isClosing() ? i == null || i.remove() : (C(t, mt), i && this.animate(i, "f-fadeOut", () => {
                    i.remove()
                }), e.state === A.Loading && (this.emit("loaded", e), e.state = A.Ready))
            }
            setError(e, t) {
                if (this.isClosing()) return;
                const i = new Event("error", {
                    bubbles: !0,
                    cancelable: !0
                });
                if (this.emit("error", i, e), i.defaultPrevented) return;
                e.error = t, this.hideLoading(e), this.clearContent(e);
                const n = document.createElement("div");
                n.classList.add("fancybox-error"), n.innerHTML = this.localize(t || "<p>{{ERROR}}</p>"), this.setContent(e, n)
            }
            clearContent(e) {
                if (e.state === void 0) return;
                this.emit("clearContent", e), e.contentEl && (e.contentEl.remove(), e.contentEl = void 0);
                const t = e.el;
                t && (C(t, "has-error"), C(t, "has-unknown"), C(t, `has-${e.type||"unknown"}`)), e.closeBtnEl && e.closeBtnEl.remove(), e.closeBtnEl = void 0, e.captionEl && e.captionEl.remove(), e.captionEl = void 0, e.spinnerEl && e.spinnerEl.remove(), e.spinnerEl = void 0
            }
            getSlide() {
                var e;
                const t = this.carousel;
                return ((e = t == null ? void 0 : t.pages[t == null ? void 0 : t.page]) === null || e === void 0 ? void 0 : e.slides[0]) || void 0
            }
            close(e, t) {
                if (this.isClosing()) return;
                const i = new Event("shouldClose", {
                    bubbles: !0,
                    cancelable: !0
                });
                if (this.emit("shouldClose", i, e), i.defaultPrevented) return;
                e && e.cancelable && (e.preventDefault(), e.stopPropagation());
                const n = this.fsAPI,
                    s = () => {
                        this.proceedClose(e, t)
                    };
                n && n.isFullscreen() === this.container ? Promise.resolve(n.exit()).then(() => s()) : s()
            }
            clearIdle() {
                this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null
            }
            setIdle(e = !1) {
                const t = () => {
                    this.clearIdle(), this.idle = !0, y(this.container, "is-idle"), this.emit("setIdle")
                };
                if (this.clearIdle(), !this.isClosing())
                    if (e) t();
                    else {
                        const i = this.option("idle");
                        i && (this.idleTimer = setTimeout(t, i))
                    }
            }
            endIdle() {
                this.clearIdle(), this.idle && !this.isClosing() && (this.idle = !1, C(this.container, "is-idle"), this.emit("endIdle"))
            }
            resetIdle() {
                this.endIdle(), this.setIdle()
            }
            toggleIdle() {
                this.idle ? this.endIdle() : this.setIdle(!0)
            }
            toggleFullscreen() {
                const e = this.fsAPI;
                e && (e.isFullscreen() ? e.exit() : this.container && e.request(this.container))
            }
            isClosing() {
                return [O.Closing, O.CustomClosing, O.Destroy].includes(this.state)
            }
            proceedClose(e, t) {
                var i, n;
                this.state = O.Closing, this.clearIdle(), this.detachEvents();
                const s = this.container,
                    o = this.carousel,
                    a = this.getSlide(),
                    l = a && this.option("placeFocusBack") ? a.triggerEl || this.option("triggerEl") : null;
                if (l && (Ge(l) ? Ue(l) : l.focus()), s && (y(s, "is-closing"), s.setAttribute("aria-hidden", "true"), this.option("animated") && y(s, Re), s.style.pointerEvents = "none"), o) {
                    o.clearTransitions(), (i = o.panzoom) === null || i === void 0 || i.destroy(), (n = o.plugins.Navigation) === null || n === void 0 || n.detach();
                    for (const r of o.slides) {
                        r.state = A.Closing, this.hideLoading(r);
                        const d = r.contentEl;
                        d && this.stop(d);
                        const h = r == null ? void 0 : r.panzoom;
                        h && (h.stop(), h.detachEvents(), h.detachObserver()), this.isCurrentSlide(r) || o.emit("removeSlide", r)
                    }
                }
                this.emit("close", e), this.state !== O.CustomClosing ? (t === void 0 && a && (t = this.optionFor(a, "hideClass")), t && a ? (this.animate(a.contentEl, t, () => {
                    o && o.emit("removeSlide", a)
                }), setTimeout(() => {
                    this.destroy()
                }, 500)) : this.destroy()) : setTimeout(() => {
                    this.destroy()
                }, 500)
            }
            destroy() {
                var e;
                if (this.state === O.Destroy) return;
                this.state = O.Destroy, (e = this.carousel) === null || e === void 0 || e.destroy();
                const t = this.container;
                t && t.remove(), se.delete(this.id);
                const i = E.getInstance();
                i ? i.focus() : (I && (I.remove(), I = null), G && (G.remove(), G = null), C(document.documentElement, dt), (() => {
                    if (!te) return;
                    const n = document,
                        s = n.body;
                    s.classList.remove(Le), s.style.setProperty(pt, ""), n.documentElement.style.setProperty(ut, "")
                })(), this.emit("destroy"))
            }
            static bind(e, t, i) {
                if (!te) return;
                let n, s = "",
                    o = {};
                if (e === void 0 ? n = document.body : typeof e == "string" ? (n = document.body, s = e, typeof t == "object" && (o = t || {})) : (n = e, typeof t == "string" && (s = t), typeof i == "object" && (o = i || {})), !n || !z(n)) return;
                s = s || "[data-fancybox]";
                const a = E.openers.get(n) || new Map;
                a.set(s, o), E.openers.set(n, a), a.size === 1 && n.addEventListener("click", E.fromEvent)
            }
            static unbind(e, t) {
                let i, n = "";
                if (typeof e == "string" ? (i = document.body, n = e) : (i = e, typeof t == "string" && (n = t)), !i) return;
                const s = E.openers.get(i);
                s && n && s.delete(n), n && s || (E.openers.delete(i), i.removeEventListener("click", E.fromEvent))
            }
            static destroy() {
                let e;
                for (; e = E.getInstance();) e.destroy();
                for (const t of E.openers.keys()) t.removeEventListener("click", E.fromEvent);
                E.openers = new Map
            }
            static fromEvent(e) {
                if (e.defaultPrevented || e.button && e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey) return;
                let t = e.composedPath()[0];
                const i = t.closest("[data-fancybox-trigger]");
                if (i) {
                    const f = i.dataset.fancyboxTrigger || "",
                        m = document.querySelectorAll(`[data-fancybox="${f}"]`),
                        b = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
                    t = m[b] || t
                }
                if (!(t && t instanceof Element)) return;
                let n, s, o, a;
                if ([...E.openers].reverse().find(([f, m]) => !(!f.contains(t) || ![...m].reverse().find(([b, v]) => {
                        let x = t.closest(b);
                        return !!x && (n = f, s = b, o = x, a = v, !0)
                    }))), !n || !s || !o) return;
                a = a || {}, e.preventDefault(), t = o;
                let l = [],
                    r = L({}, Te, a);
                r.event = e, r.triggerEl = t, r.delegate = i;
                const d = r.groupAll,
                    h = r.groupAttr,
                    u = h && t ? t.getAttribute(`${h}`) : "";
                if ((!t || u || d) && (l = [].slice.call(n.querySelectorAll(s))), t && !d && (l = u ? l.filter(f => f.getAttribute(`${h}`) === u) : [t]), !l.length) return;
                const p = E.getInstance();
                return p && p.options.triggerEl && l.indexOf(p.options.triggerEl) > -1 ? void 0 : (t && (r.startIndex = l.indexOf(t)), E.fromNodes(l, r))
            }
            static fromSelector(e, t) {
                let i = null,
                    n = "";
                if (typeof e == "string" ? (i = document.body, n = e) : e instanceof HTMLElement && typeof t == "string" && (i = e, n = t), !i || !n) return !1;
                const s = E.openers.get(i);
                if (!s) return !1;
                const o = s.get(n);
                return !!o && E.fromNodes(Array.from(i.querySelectorAll(n)), o)
            }
            static fromNodes(e, t) {
                t = L({}, Te, t || {});
                const i = [];
                for (const n of e) {
                    const s = n.dataset || {},
                        o = s[Q] || n.getAttribute(ke) || n.getAttribute("currentSrc") || n.getAttribute(Q) || void 0;
                    let a;
                    const l = t.delegate;
                    let r;
                    l && i.length === t.startIndex && (a = l instanceof HTMLImageElement ? l : l.querySelector("img:not([aria-hidden])")), a || (a = n instanceof HTMLImageElement ? n : n.querySelector("img:not([aria-hidden])")), a && (r = a.currentSrc || a[Q] || void 0, !r && a.dataset && (r = a.dataset.lazySrc || a.dataset[Q] || void 0));
                    const d = {
                        src: o,
                        triggerEl: n,
                        thumbEl: a,
                        thumbElSrc: r,
                        thumbSrc: r
                    };
                    for (const h in s) d[h] = s[h] + "";
                    i.push(d)
                }
                return new E(i, t)
            }
            static getInstance(e) {
                return e ? se.get(e) : Array.from(se.values()).reverse().find(t => !t.isClosing() && t) || null
            }
            static getSlide() {
                var e;
                return ((e = E.getInstance()) === null || e === void 0 ? void 0 : e.getSlide()) || null
            }
            static show(e = [], t = {}) {
                return new E(e, t)
            }
            static next() {
                const e = E.getInstance();
                e && e.next()
            }
            static prev() {
                const e = E.getInstance();
                e && e.prev()
            }
            static close(e = !0, ...t) {
                if (e)
                    for (const i of se.values()) i.close(...t);
                else {
                    const i = E.getInstance();
                    i && i.close(...t)
                }
            }
        }
        Object.defineProperty(E, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "5.0.24"
        }), Object.defineProperty(E, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Te
        }), Object.defineProperty(E, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zt
        }), Object.defineProperty(E, "openers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map
        }), ee.Carousel = X, ee.Fancybox = E, ee.Panzoom = W
    })
})(Fe, Fe.exports);
var re = Fe.exports;
const jt = {
        props: {
            options: Object
        },
        mounted() {
            re.Fancybox.bind(this.$refs.container, "[data-fancybox]", { ...this.options || {}
            })
        },
        updated() {
            re.Fancybox.unbind(this.$refs.container), re.Fancybox.close(), re.Fancybox.bind(this.$refs.container, "[data-fancybox]", { ...this.options || {}
            })
        },
        unmounted() {
            re.Fancybox.destroy()
        }
    },
    Ht = {
        ref: "container"
    };

function Bt(De, je, ee, g, le, ce) {
    return It(), Ft("div", Ht, [Dt(De.$slots, "default")], 512)
}
const _t = kt(jt, [
    ["render", Bt]
]);
export {
    _t as _
};