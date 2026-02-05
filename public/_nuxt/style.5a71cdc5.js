import {
    a1 as vi,
    a2 as bi,
    Q as nr,
    a3 as Ie,
    z as un,
    R as dt,
    C as jt,
    o as Nt,
    c as kt,
    h as Gn,
    s as Qn,
    a as Ot,
    a4 as Yn,
    n as At,
    L as rr,
    g as mi,
    j as xi,
    F as ir,
    y as Ti,
    a5 as Si,
    a6 as wi,
    l as Ci,
    b as Ei,
    a7 as Di,
    a8 as ji
} from "./entry.baa6724e.js";
var or = {
    exports: {}
};
/*!
 * jQuery JavaScript Library v3.7.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-05-11T18:29Z
 */
(function(m) {
    (function(x, w) {
        m.exports = x.document ? w(x, !0) : function(N) {
            if (!N.document) throw new Error("jQuery requires a window with a document");
            return w(N)
        }
    })(typeof window < "u" ? window : vi, function(x, w) {
        var N = [],
            H = Object.getPrototypeOf,
            G = N.slice,
            $ = N.flat ? function(e) {
                return N.flat.call(e)
            } : function(e) {
                return N.concat.apply([], e)
            },
            B = N.push,
            R = N.indexOf,
            Y = {},
            Q = Y.toString,
            ne = Y.hasOwnProperty,
            ie = ne.toString,
            be = ie.call(Object),
            O = {},
            L = function(t) {
                return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function"
            },
            ae = function(t) {
                return t != null && t === t.window
            },
            j = x.document,
            Ae = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function Ne(e, t, n) {
            n = n || j;
            var r, o, a = n.createElement("script");
            if (a.text = e, t)
                for (r in Ae) o = t[r] || t.getAttribute && t.getAttribute(r), o && a.setAttribute(r, o);
            n.head.appendChild(a).parentNode.removeChild(a)
        }

        function Z(e) {
            return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? Y[Q.call(e)] || "object" : typeof e
        }
        var ue = "3.7.0",
            P = /HTML$/i,
            i = function(e, t) {
                return new i.fn.init(e, t)
            };
        i.fn = i.prototype = {
            jquery: ue,
            constructor: i,
            length: 0,
            toArray: function() {
                return G.call(this)
            },
            get: function(e) {
                return e == null ? G.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = i.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return i.each(this, e)
            },
            map: function(e) {
                return this.pushStack(i.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(i.grep(this, function(e, t) {
                    return (t + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(i.grep(this, function(e, t) {
                    return t % 2
                }))
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: B,
            sort: N.sort,
            splice: N.splice
        }, i.extend = i.fn.extend = function() {
            var e, t, n, r, o, a, u = arguments[0] || {},
                l = 1,
                f = arguments.length,
                d = !1;
            for (typeof u == "boolean" && (d = u, u = arguments[l] || {}, l++), typeof u != "object" && !L(u) && (u = {}), l === f && (u = this, l--); l < f; l++)
                if ((e = arguments[l]) != null)
                    for (t in e) r = e[t], !(t === "__proto__" || u === r) && (d && r && (i.isPlainObject(r) || (o = Array.isArray(r))) ? (n = u[t], o && !Array.isArray(n) ? a = [] : !o && !i.isPlainObject(n) ? a = {} : a = n, o = !1, u[t] = i.extend(d, a, r)) : r !== void 0 && (u[t] = r));
            return u
        }, i.extend({
            expando: "jQuery" + (ue + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !e || Q.call(e) !== "[object Object]" ? !1 : (t = H(e), t ? (n = ne.call(t, "constructor") && t.constructor, typeof n == "function" && ie.call(n) === be) : !0)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                Ne(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, r = 0;
                if (ee(e))
                    for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
                else
                    for (r in e)
                        if (t.call(e[r], r, e[r]) === !1) break;
                return e
            },
            text: function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (o === 1 || o === 9 || o === 11) return e.textContent;
                    if (o === 3 || o === 4) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i.text(t);
                return n
            },
            makeArray: function(e, t) {
                var n = t || [];
                return e != null && (ee(Object(e)) ? i.merge(n, typeof e == "string" ? [e] : e) : B.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return t == null ? -1 : R.call(t, e, n)
            },
            isXMLDoc: function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !P.test(t || n && n.nodeName || "HTML")
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var r, o = [], a = 0, u = e.length, l = !n; a < u; a++) r = !t(e[a], a), r !== l && o.push(e[a]);
                return o
            },
            map: function(e, t, n) {
                var r, o, a = 0,
                    u = [];
                if (ee(e))
                    for (r = e.length; a < r; a++) o = t(e[a], a, n), o != null && u.push(o);
                else
                    for (a in e) o = t(e[a], a, n), o != null && u.push(o);
                return $(u)
            },
            guid: 1,
            support: O
        }), typeof Symbol == "function" && (i.fn[Symbol.iterator] = N[Symbol.iterator]), i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            Y["[object " + t + "]"] = t.toLowerCase()
        });

        function ee(e) {
            var t = !!e && "length" in e && e.length,
                n = Z(e);
            return L(e) || ae(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
        }

        function V(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var cr = N.pop,
            dr = N.sort,
            pr = N.splice,
            J = "[\\x20\\t\\r\\n\\f]",
            et = new RegExp("^" + J + "+|((?:^|[^\\\\])(?:\\\\.)*)" + J + "+$", "g");
        i.contains = function(e, t) {
            var n = t && t.parentNode;
            return e === n || !!(n && n.nodeType === 1 && (e.contains ? e.contains(n) : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16))
        };
        var hr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

        function gr(e, t) {
            return t ? e === "\0" ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }
        i.escapeSelector = function(e) {
            return (e + "").replace(hr, gr)
        };
        var ke = j,
            It = B;
        (function() {
            var e, t, n, r, o, a = It,
                u, l, f, d, y, b = i.expando,
                h = 0,
                T = 0,
                M = Tt(),
                U = Tt(),
                _ = Tt(),
                se = Tt(),
                oe = function(s, c) {
                    return s === c && (o = !0), 0
                },
                we = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                Ce = "(?:\\\\[\\da-fA-F]{1,6}" + J + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                F = "\\[" + J + "*(" + Ce + ")(?:" + J + "*([*^$|!~]?=)" + J + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Ce + "))|)" + J + "*\\]",
                ze = ":(" + Ce + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + F + ")*)|.*)\\)|)",
                X = new RegExp(J + "+", "g"),
                re = new RegExp("^" + J + "*," + J + "*"),
                ft = new RegExp("^" + J + "*([>+~]|" + J + ")" + J + "*"),
                Kt = new RegExp(J + "|>"),
                Ee = new RegExp(ze),
                lt = new RegExp("^" + Ce + "$"),
                De = {
                    ID: new RegExp("^#(" + Ce + ")"),
                    CLASS: new RegExp("^\\.(" + Ce + ")"),
                    TAG: new RegExp("^(" + Ce + "|[*])"),
                    ATTR: new RegExp("^" + F),
                    PSEUDO: new RegExp("^" + ze),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + J + "*(even|odd|(([+-]|)(\\d*)n|)" + J + "*(?:([+-]|)" + J + "*(\\d+)|))" + J + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + we + ")$", "i"),
                    needsContext: new RegExp("^" + J + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + J + "*((?:-\\d)?\\d*)" + J + "*\\)|)(?=[^-]|$)", "i")
                },
                Me = /^(?:input|select|textarea|button)$/i,
                qe = /^h\d$/i,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Zt = /[+~]/,
                Pe = new RegExp("\\\\[\\da-fA-F]{1,6}" + J + "?|\\\\([^\\r\\n\\f])", "g"),
                He = function(s, c) {
                    var p = "0x" + s.slice(1) - 65536;
                    return c || (p < 0 ? String.fromCharCode(p + 65536) : String.fromCharCode(p >> 10 | 55296, p & 1023 | 56320))
                },
                li = function() {
                    Re()
                },
                ci = Ct(function(s) {
                    return s.disabled === !0 && V(s, "fieldset")
                }, {
                    dir: "parentNode",
                    next: "legend"
                });

            function di() {
                try {
                    return u.activeElement
                } catch {}
            }
            try {
                a.apply(N = G.call(ke.childNodes), ke.childNodes), N[ke.childNodes.length].nodeType
            } catch {
                a = {
                    apply: function(c, p) {
                        It.apply(c, G.call(p))
                    },
                    call: function(c) {
                        It.apply(c, G.call(arguments, 1))
                    }
                }
            }

            function K(s, c, p, g) {
                var v, S, C, D, E, W, I, q = c && c.ownerDocument,
                    z = c ? c.nodeType : 9;
                if (p = p || [], typeof s != "string" || !s || z !== 1 && z !== 9 && z !== 11) return p;
                if (!g && (Re(c), c = c || u, f)) {
                    if (z !== 11 && (E = ye.exec(s)))
                        if (v = E[1]) {
                            if (z === 9)
                                if (C = c.getElementById(v)) {
                                    if (C.id === v) return a.call(p, C), p
                                } else return p;
                            else if (q && (C = q.getElementById(v)) && K.contains(c, C) && C.id === v) return a.call(p, C), p
                        } else {
                            if (E[2]) return a.apply(p, c.getElementsByTagName(s)), p;
                            if ((v = E[3]) && c.getElementsByClassName) return a.apply(p, c.getElementsByClassName(v)), p
                        }
                    if (!se[s + " "] && (!d || !d.test(s))) {
                        if (I = s, q = c, z === 1 && (Kt.test(s) || ft.test(s))) {
                            for (q = Zt.test(s) && en(c.parentNode) || c, (q != c || !O.scope) && ((D = c.getAttribute("id")) ? D = i.escapeSelector(D) : c.setAttribute("id", D = b)), W = St(s), S = W.length; S--;) W[S] = (D ? "#" + D : ":scope") + " " + wt(W[S]);
                            I = W.join(",")
                        }
                        try {
                            return a.apply(p, q.querySelectorAll(I)), p
                        } catch {
                            se(s, !0)
                        } finally {
                            D === b && c.removeAttribute("id")
                        }
                    }
                }
                return Vn(s.replace(et, "$1"), c, p, g)
            }

            function Tt() {
                var s = [];

                function c(p, g) {
                    return s.push(p + " ") > t.cacheLength && delete c[s.shift()], c[p + " "] = g
                }
                return c
            }

            function xe(s) {
                return s[b] = !0, s
            }

            function Ke(s) {
                var c = u.createElement("fieldset");
                try {
                    return !!s(c)
                } catch {
                    return !1
                } finally {
                    c.parentNode && c.parentNode.removeChild(c), c = null
                }
            }

            function pi(s) {
                return function(c) {
                    return V(c, "input") && c.type === s
                }
            }

            function hi(s) {
                return function(c) {
                    return (V(c, "input") || V(c, "button")) && c.type === s
                }
            }

            function Un(s) {
                return function(c) {
                    return "form" in c ? c.parentNode && c.disabled === !1 ? "label" in c ? "label" in c.parentNode ? c.parentNode.disabled === s : c.disabled === s : c.isDisabled === s || c.isDisabled !== !s && ci(c) === s : c.disabled === s : "label" in c ? c.disabled === s : !1
                }
            }

            function Fe(s) {
                return xe(function(c) {
                    return c = +c, xe(function(p, g) {
                        for (var v, S = s([], p.length, c), C = S.length; C--;) p[v = S[C]] && (p[v] = !(g[v] = p[v]))
                    })
                })
            }

            function en(s) {
                return s && typeof s.getElementsByTagName < "u" && s
            }

            function Re(s) {
                var c, p = s ? s.ownerDocument || s : ke;
                return p == u || p.nodeType !== 9 || !p.documentElement || (u = p, l = u.documentElement, f = !i.isXMLDoc(u), y = l.matches || l.webkitMatchesSelector || l.msMatchesSelector, ke != u && (c = u.defaultView) && c.top !== c && c.addEventListener("unload", li), O.getById = Ke(function(g) {
                    return l.appendChild(g).id = i.expando, !u.getElementsByName || !u.getElementsByName(i.expando).length
                }), O.disconnectedMatch = Ke(function(g) {
                    return y.call(g, "*")
                }), O.scope = Ke(function() {
                    return u.querySelectorAll(":scope")
                }), O.cssHas = Ke(function() {
                    try {
                        return u.querySelector(":has(*,:jqfake)"), !1
                    } catch {
                        return !0
                    }
                }), O.getById ? (t.filter.ID = function(g) {
                    var v = g.replace(Pe, He);
                    return function(S) {
                        return S.getAttribute("id") === v
                    }
                }, t.find.ID = function(g, v) {
                    if (typeof v.getElementById < "u" && f) {
                        var S = v.getElementById(g);
                        return S ? [S] : []
                    }
                }) : (t.filter.ID = function(g) {
                    var v = g.replace(Pe, He);
                    return function(S) {
                        var C = typeof S.getAttributeNode < "u" && S.getAttributeNode("id");
                        return C && C.value === v
                    }
                }, t.find.ID = function(g, v) {
                    if (typeof v.getElementById < "u" && f) {
                        var S, C, D, E = v.getElementById(g);
                        if (E) {
                            if (S = E.getAttributeNode("id"), S && S.value === g) return [E];
                            for (D = v.getElementsByName(g), C = 0; E = D[C++];)
                                if (S = E.getAttributeNode("id"), S && S.value === g) return [E]
                        }
                        return []
                    }
                }), t.find.TAG = function(g, v) {
                    return typeof v.getElementsByTagName < "u" ? v.getElementsByTagName(g) : v.querySelectorAll(g)
                }, t.find.CLASS = function(g, v) {
                    if (typeof v.getElementsByClassName < "u" && f) return v.getElementsByClassName(g)
                }, d = [], Ke(function(g) {
                    var v;
                    l.appendChild(g).innerHTML = "<a id='" + b + "' href='' disabled='disabled'></a><select id='" + b + "-\r\\' disabled='disabled'><option selected=''></option></select>", g.querySelectorAll("[selected]").length || d.push("\\[" + J + "*(?:value|" + we + ")"), g.querySelectorAll("[id~=" + b + "-]").length || d.push("~="), g.querySelectorAll("a#" + b + "+*").length || d.push(".#.+[+~]"), g.querySelectorAll(":checked").length || d.push(":checked"), v = u.createElement("input"), v.setAttribute("type", "hidden"), g.appendChild(v).setAttribute("name", "D"), l.appendChild(g).disabled = !0, g.querySelectorAll(":disabled").length !== 2 && d.push(":enabled", ":disabled"), v = u.createElement("input"), v.setAttribute("name", ""), g.appendChild(v), g.querySelectorAll("[name='']").length || d.push("\\[" + J + "*name" + J + "*=" + J + `*(?:''|"")`)
                }), O.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), oe = function(g, v) {
                    if (g === v) return o = !0, 0;
                    var S = !g.compareDocumentPosition - !v.compareDocumentPosition;
                    return S || (S = (g.ownerDocument || g) == (v.ownerDocument || v) ? g.compareDocumentPosition(v) : 1, S & 1 || !O.sortDetached && v.compareDocumentPosition(g) === S ? g === u || g.ownerDocument == ke && K.contains(ke, g) ? -1 : v === u || v.ownerDocument == ke && K.contains(ke, v) ? 1 : r ? R.call(r, g) - R.call(r, v) : 0 : S & 4 ? -1 : 1)
                }), u
            }
            K.matches = function(s, c) {
                return K(s, null, null, c)
            }, K.matchesSelector = function(s, c) {
                if (Re(s), f && !se[c + " "] && (!d || !d.test(c))) try {
                    var p = y.call(s, c);
                    if (p || O.disconnectedMatch || s.document && s.document.nodeType !== 11) return p
                } catch {
                    se(c, !0)
                }
                return K(c, u, null, [s]).length > 0
            }, K.contains = function(s, c) {
                return (s.ownerDocument || s) != u && Re(s), i.contains(s, c)
            }, K.attr = function(s, c) {
                (s.ownerDocument || s) != u && Re(s);
                var p = t.attrHandle[c.toLowerCase()],
                    g = p && ne.call(t.attrHandle, c.toLowerCase()) ? p(s, c, !f) : void 0;
                return g !== void 0 ? g : s.getAttribute(c)
            }, K.error = function(s) {
                throw new Error("Syntax error, unrecognized expression: " + s)
            }, i.uniqueSort = function(s) {
                var c, p = [],
                    g = 0,
                    v = 0;
                if (o = !O.sortStable, r = !O.sortStable && G.call(s, 0), dr.call(s, oe), o) {
                    for (; c = s[v++];) c === s[v] && (g = p.push(v));
                    for (; g--;) pr.call(s, p[g], 1)
                }
                return r = null, s
            }, i.fn.uniqueSort = function() {
                return this.pushStack(i.uniqueSort(G.apply(this)))
            }, t = i.expr = {
                cacheLength: 50,
                createPseudo: xe,
                match: De,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(s) {
                        return s[1] = s[1].replace(Pe, He), s[3] = (s[3] || s[4] || s[5] || "").replace(Pe, He), s[2] === "~=" && (s[3] = " " + s[3] + " "), s.slice(0, 4)
                    },
                    CHILD: function(s) {
                        return s[1] = s[1].toLowerCase(), s[1].slice(0, 3) === "nth" ? (s[3] || K.error(s[0]), s[4] = +(s[4] ? s[5] + (s[6] || 1) : 2 * (s[3] === "even" || s[3] === "odd")), s[5] = +(s[7] + s[8] || s[3] === "odd")) : s[3] && K.error(s[0]), s
                    },
                    PSEUDO: function(s) {
                        var c, p = !s[6] && s[2];
                        return De.CHILD.test(s[0]) ? null : (s[3] ? s[2] = s[4] || s[5] || "" : p && Ee.test(p) && (c = St(p, !0)) && (c = p.indexOf(")", p.length - c) - p.length) && (s[0] = s[0].slice(0, c), s[2] = p.slice(0, c)), s.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(s) {
                        var c = s.replace(Pe, He).toLowerCase();
                        return s === "*" ? function() {
                            return !0
                        } : function(p) {
                            return V(p, c)
                        }
                    },
                    CLASS: function(s) {
                        var c = M[s + " "];
                        return c || (c = new RegExp("(^|" + J + ")" + s + "(" + J + "|$)")) && M(s, function(p) {
                            return c.test(typeof p.className == "string" && p.className || typeof p.getAttribute < "u" && p.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(s, c, p) {
                        return function(g) {
                            var v = K.attr(g, s);
                            return v == null ? c === "!=" : c ? (v += "", c === "=" ? v === p : c === "!=" ? v !== p : c === "^=" ? p && v.indexOf(p) === 0 : c === "*=" ? p && v.indexOf(p) > -1 : c === "$=" ? p && v.slice(-p.length) === p : c === "~=" ? (" " + v.replace(X, " ") + " ").indexOf(p) > -1 : c === "|=" ? v === p || v.slice(0, p.length + 1) === p + "-" : !1) : !0
                        }
                    },
                    CHILD: function(s, c, p, g, v) {
                        var S = s.slice(0, 3) !== "nth",
                            C = s.slice(-4) !== "last",
                            D = c === "of-type";
                        return g === 1 && v === 0 ? function(E) {
                            return !!E.parentNode
                        } : function(E, W, I) {
                            var q, z, k, te, he, fe = S !== C ? "nextSibling" : "previousSibling",
                                ve = E.parentNode,
                                je = D && E.nodeName.toLowerCase(),
                                Ze = !I && !D,
                                le = !1;
                            if (ve) {
                                if (S) {
                                    for (; fe;) {
                                        for (k = E; k = k[fe];)
                                            if (D ? V(k, je) : k.nodeType === 1) return !1;
                                        he = fe = s === "only" && !he && "nextSibling"
                                    }
                                    return !0
                                }
                                if (he = [C ? ve.firstChild : ve.lastChild], C && Ze) {
                                    for (z = ve[b] || (ve[b] = {}), q = z[s] || [], te = q[0] === h && q[1], le = te && q[2], k = te && ve.childNodes[te]; k = ++te && k && k[fe] || (le = te = 0) || he.pop();)
                                        if (k.nodeType === 1 && ++le && k === E) {
                                            z[s] = [h, te, le];
                                            break
                                        }
                                } else if (Ze && (z = E[b] || (E[b] = {}), q = z[s] || [], te = q[0] === h && q[1], le = te), le === !1)
                                    for (;
                                        (k = ++te && k && k[fe] || (le = te = 0) || he.pop()) && !((D ? V(k, je) : k.nodeType === 1) && ++le && (Ze && (z = k[b] || (k[b] = {}), z[s] = [h, le]), k === E)););
                                return le -= v, le === g || le % g === 0 && le / g >= 0
                            }
                        }
                    },
                    PSEUDO: function(s, c) {
                        var p, g = t.pseudos[s] || t.setFilters[s.toLowerCase()] || K.error("unsupported pseudo: " + s);
                        return g[b] ? g(c) : g.length > 1 ? (p = [s, s, "", c], t.setFilters.hasOwnProperty(s.toLowerCase()) ? xe(function(v, S) {
                            for (var C, D = g(v, c), E = D.length; E--;) C = R.call(v, D[E]), v[C] = !(S[C] = D[E])
                        }) : function(v) {
                            return g(v, 0, p)
                        }) : g
                    }
                },
                pseudos: {
                    not: xe(function(s) {
                        var c = [],
                            p = [],
                            g = on(s.replace(et, "$1"));
                        return g[b] ? xe(function(v, S, C, D) {
                            for (var E, W = g(v, null, D, []), I = v.length; I--;)(E = W[I]) && (v[I] = !(S[I] = E))
                        }) : function(v, S, C) {
                            return c[0] = v, g(c, null, C, p), c[0] = null, !p.pop()
                        }
                    }),
                    has: xe(function(s) {
                        return function(c) {
                            return K(s, c).length > 0
                        }
                    }),
                    contains: xe(function(s) {
                        return s = s.replace(Pe, He),
                            function(c) {
                                return (c.textContent || i.text(c)).indexOf(s) > -1
                            }
                    }),
                    lang: xe(function(s) {
                        return lt.test(s || "") || K.error("unsupported lang: " + s), s = s.replace(Pe, He).toLowerCase(),
                            function(c) {
                                var p;
                                do
                                    if (p = f ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) return p = p.toLowerCase(), p === s || p.indexOf(s + "-") === 0; while ((c = c.parentNode) && c.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(s) {
                        var c = x.location && x.location.hash;
                        return c && c.slice(1) === s.id
                    },
                    root: function(s) {
                        return s === l
                    },
                    focus: function(s) {
                        return s === di() && u.hasFocus() && !!(s.type || s.href || ~s.tabIndex)
                    },
                    enabled: Un(!1),
                    disabled: Un(!0),
                    checked: function(s) {
                        return V(s, "input") && !!s.checked || V(s, "option") && !!s.selected
                    },
                    selected: function(s) {
                        return s.parentNode && s.parentNode.selectedIndex, s.selected === !0
                    },
                    empty: function(s) {
                        for (s = s.firstChild; s; s = s.nextSibling)
                            if (s.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(s) {
                        return !t.pseudos.empty(s)
                    },
                    header: function(s) {
                        return qe.test(s.nodeName)
                    },
                    input: function(s) {
                        return Me.test(s.nodeName)
                    },
                    button: function(s) {
                        return V(s, "input") && s.type === "button" || V(s, "button")
                    },
                    text: function(s) {
                        var c;
                        return V(s, "input") && s.type === "text" && ((c = s.getAttribute("type")) == null || c.toLowerCase() === "text")
                    },
                    first: Fe(function() {
                        return [0]
                    }),
                    last: Fe(function(s, c) {
                        return [c - 1]
                    }),
                    eq: Fe(function(s, c, p) {
                        return [p < 0 ? p + c : p]
                    }),
                    even: Fe(function(s, c) {
                        for (var p = 0; p < c; p += 2) s.push(p);
                        return s
                    }),
                    odd: Fe(function(s, c) {
                        for (var p = 1; p < c; p += 2) s.push(p);
                        return s
                    }),
                    lt: Fe(function(s, c, p) {
                        var g;
                        for (p < 0 ? g = p + c : p > c ? g = c : g = p; --g >= 0;) s.push(g);
                        return s
                    }),
                    gt: Fe(function(s, c, p) {
                        for (var g = p < 0 ? p + c : p; ++g < c;) s.push(g);
                        return s
                    })
                }
            }, t.pseudos.nth = t.pseudos.eq;
            for (e in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) t.pseudos[e] = pi(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) t.pseudos[e] = hi(e);

            function Xn() {}
            Xn.prototype = t.filters = t.pseudos, t.setFilters = new Xn;

            function St(s, c) {
                var p, g, v, S, C, D, E, W = U[s + " "];
                if (W) return c ? 0 : W.slice(0);
                for (C = s, D = [], E = t.preFilter; C;) {
                    (!p || (g = re.exec(C))) && (g && (C = C.slice(g[0].length) || C), D.push(v = [])), p = !1, (g = ft.exec(C)) && (p = g.shift(), v.push({
                        value: p,
                        type: g[0].replace(et, " ")
                    }), C = C.slice(p.length));
                    for (S in t.filter)(g = De[S].exec(C)) && (!E[S] || (g = E[S](g))) && (p = g.shift(), v.push({
                        value: p,
                        type: S,
                        matches: g
                    }), C = C.slice(p.length));
                    if (!p) break
                }
                return c ? C.length : C ? K.error(s) : U(s, D).slice(0)
            }

            function wt(s) {
                for (var c = 0, p = s.length, g = ""; c < p; c++) g += s[c].value;
                return g
            }

            function Ct(s, c, p) {
                var g = c.dir,
                    v = c.next,
                    S = v || g,
                    C = p && S === "parentNode",
                    D = T++;
                return c.first ? function(E, W, I) {
                    for (; E = E[g];)
                        if (E.nodeType === 1 || C) return s(E, W, I);
                    return !1
                } : function(E, W, I) {
                    var q, z, k = [h, D];
                    if (I) {
                        for (; E = E[g];)
                            if ((E.nodeType === 1 || C) && s(E, W, I)) return !0
                    } else
                        for (; E = E[g];)
                            if (E.nodeType === 1 || C)
                                if (z = E[b] || (E[b] = {}), v && V(E, v)) E = E[g] || E;
                                else {
                                    if ((q = z[S]) && q[0] === h && q[1] === D) return k[2] = q[2];
                                    if (z[S] = k, k[2] = s(E, W, I)) return !0
                                } return !1
                }
            }

            function tn(s) {
                return s.length > 1 ? function(c, p, g) {
                    for (var v = s.length; v--;)
                        if (!s[v](c, p, g)) return !1;
                    return !0
                } : s[0]
            }

            function gi(s, c, p) {
                for (var g = 0, v = c.length; g < v; g++) K(s, c[g], p);
                return p
            }

            function Et(s, c, p, g, v) {
                for (var S, C = [], D = 0, E = s.length, W = c != null; D < E; D++)(S = s[D]) && (!p || p(S, g, v)) && (C.push(S), W && c.push(D));
                return C
            }

            function nn(s, c, p, g, v, S) {
                return g && !g[b] && (g = nn(g)), v && !v[b] && (v = nn(v, S)), xe(function(C, D, E, W) {
                    var I, q, z, k, te = [],
                        he = [],
                        fe = D.length,
                        ve = C || gi(c || "*", E.nodeType ? [E] : E, []),
                        je = s && (C || !c) ? Et(ve, te, s, E, W) : ve;
                    if (p ? (k = v || (C ? s : fe || g) ? [] : D, p(je, k, E, W)) : k = je, g)
                        for (I = Et(k, he), g(I, [], E, W), q = I.length; q--;)(z = I[q]) && (k[he[q]] = !(je[he[q]] = z));
                    if (C) {
                        if (v || s) {
                            if (v) {
                                for (I = [], q = k.length; q--;)(z = k[q]) && I.push(je[q] = z);
                                v(null, k = [], I, W)
                            }
                            for (q = k.length; q--;)(z = k[q]) && (I = v ? R.call(C, z) : te[q]) > -1 && (C[I] = !(D[I] = z))
                        }
                    } else k = Et(k === D ? k.splice(fe, k.length) : k), v ? v(null, D, k, W) : a.apply(D, k)
                })
            }

            function rn(s) {
                for (var c, p, g, v = s.length, S = t.relative[s[0].type], C = S || t.relative[" "], D = S ? 1 : 0, E = Ct(function(q) {
                        return q === c
                    }, C, !0), W = Ct(function(q) {
                        return R.call(c, q) > -1
                    }, C, !0), I = [function(q, z, k) {
                        var te = !S && (k || z != n) || ((c = z).nodeType ? E(q, z, k) : W(q, z, k));
                        return c = null, te
                    }]; D < v; D++)
                    if (p = t.relative[s[D].type]) I = [Ct(tn(I), p)];
                    else {
                        if (p = t.filter[s[D].type].apply(null, s[D].matches), p[b]) {
                            for (g = ++D; g < v && !t.relative[s[g].type]; g++);
                            return nn(D > 1 && tn(I), D > 1 && wt(s.slice(0, D - 1).concat({
                                value: s[D - 2].type === " " ? "*" : ""
                            })).replace(et, "$1"), p, D < g && rn(s.slice(D, g)), g < v && rn(s = s.slice(g)), g < v && wt(s))
                        }
                        I.push(p)
                    }
                return tn(I)
            }

            function yi(s, c) {
                var p = c.length > 0,
                    g = s.length > 0,
                    v = function(S, C, D, E, W) {
                        var I, q, z, k = 0,
                            te = "0",
                            he = S && [],
                            fe = [],
                            ve = n,
                            je = S || g && t.find.TAG("*", W),
                            Ze = h += ve == null ? 1 : Math.random() || .1,
                            le = je.length;
                        for (W && (n = C == u || C || W); te !== le && (I = je[te]) != null; te++) {
                            if (g && I) {
                                for (q = 0, !C && I.ownerDocument != u && (Re(I), D = !f); z = s[q++];)
                                    if (z(I, C || u, D)) {
                                        a.call(E, I);
                                        break
                                    }
                                W && (h = Ze)
                            }
                            p && ((I = !z && I) && k--, S && he.push(I))
                        }
                        if (k += te, p && te !== k) {
                            for (q = 0; z = c[q++];) z(he, fe, C, D);
                            if (S) {
                                if (k > 0)
                                    for (; te--;) he[te] || fe[te] || (fe[te] = cr.call(E));
                                fe = Et(fe)
                            }
                            a.apply(E, fe), W && !S && fe.length > 0 && k + c.length > 1 && i.uniqueSort(E)
                        }
                        return W && (h = Ze, n = ve), he
                    };
                return p ? xe(v) : v
            }

            function on(s, c) {
                var p, g = [],
                    v = [],
                    S = _[s + " "];
                if (!S) {
                    for (c || (c = St(s)), p = c.length; p--;) S = rn(c[p]), S[b] ? g.push(S) : v.push(S);
                    S = _(s, yi(v, g)), S.selector = s
                }
                return S
            }

            function Vn(s, c, p, g) {
                var v, S, C, D, E, W = typeof s == "function" && s,
                    I = !g && St(s = W.selector || s);
                if (p = p || [], I.length === 1) {
                    if (S = I[0] = I[0].slice(0), S.length > 2 && (C = S[0]).type === "ID" && c.nodeType === 9 && f && t.relative[S[1].type]) {
                        if (c = (t.find.ID(C.matches[0].replace(Pe, He), c) || [])[0], c) W && (c = c.parentNode);
                        else return p;
                        s = s.slice(S.shift().value.length)
                    }
                    for (v = De.needsContext.test(s) ? 0 : S.length; v-- && (C = S[v], !t.relative[D = C.type]);)
                        if ((E = t.find[D]) && (g = E(C.matches[0].replace(Pe, He), Zt.test(S[0].type) && en(c.parentNode) || c))) {
                            if (S.splice(v, 1), s = g.length && wt(S), !s) return a.apply(p, g), p;
                            break
                        }
                }
                return (W || on(s, I))(g, c, !f, p, !c || Zt.test(s) && en(c.parentNode) || c), p
            }
            O.sortStable = b.split("").sort(oe).join("") === b, Re(), O.sortDetached = Ke(function(s) {
                return s.compareDocumentPosition(u.createElement("fieldset")) & 1
            }), i.find = K, i.expr[":"] = i.expr.pseudos, i.unique = i.uniqueSort, K.compile = on, K.select = Vn, K.setDocument = Re, K.escape = i.escapeSelector, K.getText = i.text, K.isXML = i.isXMLDoc, K.selectors = i.expr, K.support = i.support, K.uniqueSort = i.uniqueSort
        })();
        var Be = function(e, t, n) {
                for (var r = [], o = n !== void 0;
                    (e = e[t]) && e.nodeType !== 9;)
                    if (e.nodeType === 1) {
                        if (o && i(e).is(n)) break;
                        r.push(e)
                    }
                return r
            },
            sn = function(e, t) {
                for (var n = []; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                return n
            },
            fn = i.expr.match.needsContext,
            ln = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function Mt(e, t, n) {
            return L(t) ? i.grep(e, function(r, o) {
                return !!t.call(r, o, r) !== n
            }) : t.nodeType ? i.grep(e, function(r) {
                return r === t !== n
            }) : typeof t != "string" ? i.grep(e, function(r) {
                return R.call(t, r) > -1 !== n
            }) : i.filter(t, e, n)
        }
        i.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? i.find.matchesSelector(r, e) ? [r] : [] : i.find.matches(e, i.grep(t, function(o) {
                return o.nodeType === 1
            }))
        }, i.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    o = this;
                if (typeof e != "string") return this.pushStack(i(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (i.contains(o[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) i.find(e, o[t], n);
                return r > 1 ? i.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(Mt(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(Mt(this, e || [], !0))
            },
            is: function(e) {
                return !!Mt(this, typeof e == "string" && fn.test(e) ? i(e) : e || [], !1).length
            }
        });
        var cn, yr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            vr = i.fn.init = function(e, t, n) {
                var r, o;
                if (!e) return this;
                if (n = n || cn, typeof e == "string")
                    if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? r = [null, e, null] : r = yr.exec(e), r && (r[1] || !t))
                        if (r[1]) {
                            if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : j, !0)), ln.test(r[1]) && i.isPlainObject(t))
                                for (r in t) L(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        } else return o = j.getElementById(r[2]), o && (this[0] = o, this.length = 1), this;
                else return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                else {
                    if (e.nodeType) return this[0] = e, this.length = 1, this;
                    if (L(e)) return n.ready !== void 0 ? n.ready(e) : e(i)
                }
                return i.makeArray(e, this)
            };
        vr.prototype = i.fn, cn = i(j);
        var br = /^(?:parents|prev(?:Until|All))/,
            mr = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        i.fn.extend({
            has: function(e) {
                var t = i(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var r = 0; r < n; r++)
                        if (i.contains(this, t[r])) return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    o = this.length,
                    a = [],
                    u = typeof e != "string" && i(e);
                if (!fn.test(e)) {
                    for (; r < o; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (u ? u.index(n) > -1 : n.nodeType === 1 && i.find.matchesSelector(n, e))) {
                                a.push(n);
                                break
                            }
                }
                return this.pushStack(a.length > 1 ? i.uniqueSort(a) : a)
            },
            index: function(e) {
                return e ? typeof e == "string" ? R.call(i(e), this[0]) : R.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(i.uniqueSort(i.merge(this.get(), i(e, t))))
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        });

        function dn(e, t) {
            for (;
                (e = e[t]) && e.nodeType !== 1;);
            return e
        }
        i.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function(e) {
                return Be(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Be(e, "parentNode", n)
            },
            next: function(e) {
                return dn(e, "nextSibling")
            },
            prev: function(e) {
                return dn(e, "previousSibling")
            },
            nextAll: function(e) {
                return Be(e, "nextSibling")
            },
            prevAll: function(e) {
                return Be(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Be(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Be(e, "previousSibling", n)
            },
            siblings: function(e) {
                return sn((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return sn(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument != null && H(e.contentDocument) ? e.contentDocument : (V(e, "template") && (e = e.content || e), i.merge([], e.childNodes))
            }
        }, function(e, t) {
            i.fn[e] = function(n, r) {
                var o = i.map(this, t, n);
                return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (o = i.filter(r, o)), this.length > 1 && (mr[e] || i.uniqueSort(o), br.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var Te = /[^\x20\t\r\n\f]+/g;

        function xr(e) {
            var t = {};
            return i.each(e.match(Te) || [], function(n, r) {
                t[r] = !0
            }), t
        }
        i.Callbacks = function(e) {
            e = typeof e == "string" ? xr(e) : i.extend({}, e);
            var t, n, r, o, a = [],
                u = [],
                l = -1,
                f = function() {
                    for (o = o || e.once, r = t = !0; u.length; l = -1)
                        for (n = u.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (n ? a = [] : a = "")
                },
                d = {
                    add: function() {
                        return a && (n && !t && (l = a.length - 1, u.push(n)), function y(b) {
                            i.each(b, function(h, T) {
                                L(T) ? (!e.unique || !d.has(T)) && a.push(T) : T && T.length && Z(T) !== "string" && y(T)
                            })
                        }(arguments), n && !t && f()), this
                    },
                    remove: function() {
                        return i.each(arguments, function(y, b) {
                            for (var h;
                                (h = i.inArray(b, a, h)) > -1;) a.splice(h, 1), h <= l && l--
                        }), this
                    },
                    has: function(y) {
                        return y ? i.inArray(y, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return o = u = [], a = n = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return o = u = [], !n && !t && (a = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(y, b) {
                        return o || (b = b || [], b = [y, b.slice ? b.slice() : b], u.push(b), t || f()), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return d
        };

        function Ue(e) {
            return e
        }

        function ht(e) {
            throw e
        }

        function pn(e, t, n, r) {
            var o;
            try {
                e && L(o = e.promise) ? o.call(e).done(t).fail(n) : e && L(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (a) {
                n.apply(void 0, [a])
            }
        }
        i.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                        ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        catch: function(a) {
                            return r.then(null, a)
                        },
                        pipe: function() {
                            var a = arguments;
                            return i.Deferred(function(u) {
                                i.each(t, function(l, f) {
                                    var d = L(a[f[4]]) && a[f[4]];
                                    o[f[1]](function() {
                                        var y = d && d.apply(this, arguments);
                                        y && L(y.promise) ? y.promise().progress(u.notify).done(u.resolve).fail(u.reject) : u[f[0] + "With"](this, d ? [y] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        then: function(a, u, l) {
                            var f = 0;

                            function d(y, b, h, T) {
                                return function() {
                                    var M = this,
                                        U = arguments,
                                        _ = function() {
                                            var oe, we;
                                            if (!(y < f)) {
                                                if (oe = h.apply(M, U), oe === b.promise()) throw new TypeError("Thenable self-resolution");
                                                we = oe && (typeof oe == "object" || typeof oe == "function") && oe.then, L(we) ? T ? we.call(oe, d(f, b, Ue, T), d(f, b, ht, T)) : (f++, we.call(oe, d(f, b, Ue, T), d(f, b, ht, T), d(f, b, Ue, b.notifyWith))) : (h !== Ue && (M = void 0, U = [oe]), (T || b.resolveWith)(M, U))
                                            }
                                        },
                                        se = T ? _ : function() {
                                            try {
                                                _()
                                            } catch (oe) {
                                                i.Deferred.exceptionHook && i.Deferred.exceptionHook(oe, se.error), y + 1 >= f && (h !== ht && (M = void 0, U = [oe]), b.rejectWith(M, U))
                                            }
                                        };
                                    y ? se() : (i.Deferred.getErrorHook ? se.error = i.Deferred.getErrorHook() : i.Deferred.getStackHook && (se.error = i.Deferred.getStackHook()), x.setTimeout(se))
                                }
                            }
                            return i.Deferred(function(y) {
                                t[0][3].add(d(0, y, L(l) ? l : Ue, y.notifyWith)), t[1][3].add(d(0, y, L(a) ? a : Ue)), t[2][3].add(d(0, y, L(u) ? u : ht))
                            }).promise()
                        },
                        promise: function(a) {
                            return a != null ? i.extend(a, r) : r
                        }
                    },
                    o = {};
                return i.each(t, function(a, u) {
                    var l = u[2],
                        f = u[5];
                    r[u[1]] = l.add, f && l.add(function() {
                        n = f
                    }, t[3 - a][2].disable, t[3 - a][3].disable, t[0][2].lock, t[0][3].lock), l.add(u[3].fire), o[u[0]] = function() {
                        return o[u[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[u[0] + "With"] = l.fireWith
                }), r.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    o = G.call(arguments),
                    a = i.Deferred(),
                    u = function(l) {
                        return function(f) {
                            r[l] = this, o[l] = arguments.length > 1 ? G.call(arguments) : f, --t || a.resolveWith(r, o)
                        }
                    };
                if (t <= 1 && (pn(e, a.done(u(n)).resolve, a.reject, !t), a.state() === "pending" || L(o[n] && o[n].then))) return a.then();
                for (; n--;) pn(o[n], u(n), a.reject);
                return a.promise()
            }
        });
        var Tr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        i.Deferred.exceptionHook = function(e, t) {
            x.console && x.console.warn && e && Tr.test(e.name) && x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, i.readyException = function(e) {
            x.setTimeout(function() {
                throw e
            })
        };
        var qt = i.Deferred();
        i.fn.ready = function(e) {
            return qt.then(e).catch(function(t) {
                i.readyException(t)
            }), this
        }, i.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (e === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, !(e !== !0 && --i.readyWait > 0) && qt.resolveWith(j, [i]))
            }
        }), i.ready.then = qt.then;

        function gt() {
            j.removeEventListener("DOMContentLoaded", gt), x.removeEventListener("load", gt), i.ready()
        }
        j.readyState === "complete" || j.readyState !== "loading" && !j.documentElement.doScroll ? x.setTimeout(i.ready) : (j.addEventListener("DOMContentLoaded", gt), x.addEventListener("load", gt));
        var Oe = function(e, t, n, r, o, a, u) {
                var l = 0,
                    f = e.length,
                    d = n == null;
                if (Z(n) === "object") {
                    o = !0;
                    for (l in n) Oe(e, t, l, n[l], !0, a, u)
                } else if (r !== void 0 && (o = !0, L(r) || (u = !0), d && (u ? (t.call(e, r), t = null) : (d = t, t = function(y, b, h) {
                        return d.call(i(y), h)
                    })), t))
                    for (; l < f; l++) t(e[l], n, u ? r : r.call(e[l], l, t(e[l], n)));
                return o ? e : d ? t.call(e) : f ? t(e[0], n) : a
            },
            Sr = /^-ms-/,
            wr = /-([a-z])/g;

        function Cr(e, t) {
            return t.toUpperCase()
        }

        function Se(e) {
            return e.replace(Sr, "ms-").replace(wr, Cr)
        }
        var tt = function(e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
        };

        function nt() {
            this.expando = i.expando + nt.uid++
        }
        nt.uid = 1, nt.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, tt(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, o = this.cache(e);
                if (typeof t == "string") o[Se(t)] = n;
                else
                    for (r in t) o[Se(r)] = t[r];
                return o
            },
            get: function(e, t) {
                return t === void 0 ? this.cache(e) : e[this.expando] && e[this.expando][Se(t)]
            },
            access: function(e, t, n) {
                return t === void 0 || t && typeof t == "string" && n === void 0 ? this.get(e, t) : (this.set(e, t, n), n !== void 0 ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (r !== void 0) {
                    if (t !== void 0)
                        for (Array.isArray(t) ? t = t.map(Se) : (t = Se(t), t = t in r ? [t] : t.match(Te) || []), n = t.length; n--;) delete r[t[n]];
                    (t === void 0 || i.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return t !== void 0 && !i.isEmptyObject(t)
            }
        };
        var A = new nt,
            ce = new nt,
            Er = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Dr = /[A-Z]/g;

        function jr(e) {
            return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : Er.test(e) ? JSON.parse(e) : e
        }

        function hn(e, t, n) {
            var r;
            if (n === void 0 && e.nodeType === 1)
                if (r = "data-" + t.replace(Dr, "-$&").toLowerCase(), n = e.getAttribute(r), typeof n == "string") {
                    try {
                        n = jr(n)
                    } catch {}
                    ce.set(e, t, n)
                } else n = void 0;
            return n
        }
        i.extend({
            hasData: function(e) {
                return ce.hasData(e) || A.hasData(e)
            },
            data: function(e, t, n) {
                return ce.access(e, t, n)
            },
            removeData: function(e, t) {
                ce.remove(e, t)
            },
            _data: function(e, t, n) {
                return A.access(e, t, n)
            },
            _removeData: function(e, t) {
                A.remove(e, t)
            }
        }), i.fn.extend({
            data: function(e, t) {
                var n, r, o, a = this[0],
                    u = a && a.attributes;
                if (e === void 0) {
                    if (this.length && (o = ce.get(a), a.nodeType === 1 && !A.get(a, "hasDataAttrs"))) {
                        for (n = u.length; n--;) u[n] && (r = u[n].name, r.indexOf("data-") === 0 && (r = Se(r.slice(5)), hn(a, r, o[r])));
                        A.set(a, "hasDataAttrs", !0)
                    }
                    return o
                }
                return typeof e == "object" ? this.each(function() {
                    ce.set(this, e)
                }) : Oe(this, function(l) {
                    var f;
                    if (a && l === void 0) return f = ce.get(a, e), f !== void 0 || (f = hn(a, e), f !== void 0) ? f : void 0;
                    this.each(function() {
                        ce.set(this, e, l)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    ce.remove(this, e)
                })
            }
        }), i.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = A.get(e, t), n && (!r || Array.isArray(n) ? r = A.access(e, t, i.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = i.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    a = i._queueHooks(e, t),
                    u = function() {
                        i.dequeue(e, t)
                    };
                o === "inprogress" && (o = n.shift(), r--), o && (t === "fx" && n.unshift("inprogress"), delete a.stop, o.call(e, u, a)), !r && a && a.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return A.get(e, n) || A.access(e, n, {
                    empty: i.Callbacks("once memory").add(function() {
                        A.remove(e, [t + "queue", n])
                    })
                })
            }
        }), i.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? i.queue(this[0], e) : t === void 0 ? this : this.each(function() {
                    var r = i.queue(this, e, t);
                    i._queueHooks(this, e), e === "fx" && r[0] !== "inprogress" && i.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    i.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    o = i.Deferred(),
                    a = this,
                    u = this.length,
                    l = function() {
                        --r || o.resolveWith(a, [a])
                    };
                for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; u--;) n = A.get(a[u], e + "queueHooks"), n && n.empty && (r++, n.empty.add(l));
                return l(), o.promise(t)
            }
        });
        var gn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            rt = new RegExp("^(?:([+-])=|)(" + gn + ")([a-z%]*)$", "i"),
            Le = ["Top", "Right", "Bottom", "Left"],
            _e = j.documentElement,
            Xe = function(e) {
                return i.contains(e.ownerDocument, e)
            },
            Ar = {
                composed: !0
            };
        _e.getRootNode && (Xe = function(e) {
            return i.contains(e.ownerDocument, e) || e.getRootNode(Ar) === e.ownerDocument
        });
        var yt = function(e, t) {
            return e = t || e, e.style.display === "none" || e.style.display === "" && Xe(e) && i.css(e, "display") === "none"
        };

        function yn(e, t, n, r) {
            var o, a, u = 20,
                l = r ? function() {
                    return r.cur()
                } : function() {
                    return i.css(e, t, "")
                },
                f = l(),
                d = n && n[3] || (i.cssNumber[t] ? "" : "px"),
                y = e.nodeType && (i.cssNumber[t] || d !== "px" && +f) && rt.exec(i.css(e, t));
            if (y && y[3] !== d) {
                for (f = f / 2, d = d || y[3], y = +f || 1; u--;) i.style(e, t, y + d), (1 - a) * (1 - (a = l() / f || .5)) <= 0 && (u = 0), y = y / a;
                y = y * 2, i.style(e, t, y + d), n = n || []
            }
            return n && (y = +y || +f || 0, o = n[1] ? y + (n[1] + 1) * n[2] : +n[2], r && (r.unit = d, r.start = y, r.end = o)), o
        }
        var vn = {};

        function Nr(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                o = vn[r];
            return o || (t = n.body.appendChild(n.createElement(r)), o = i.css(t, "display"), t.parentNode.removeChild(t), o === "none" && (o = "block"), vn[r] = o, o)
        }

        function Ve(e, t) {
            for (var n, r, o = [], a = 0, u = e.length; a < u; a++) r = e[a], r.style && (n = r.style.display, t ? (n === "none" && (o[a] = A.get(r, "display") || null, o[a] || (r.style.display = "")), r.style.display === "" && yt(r) && (o[a] = Nr(r))) : n !== "none" && (o[a] = "none", A.set(r, "display", n)));
            for (a = 0; a < u; a++) o[a] != null && (e[a].style.display = o[a]);
            return e
        }
        i.fn.extend({
            show: function() {
                return Ve(this, !0)
            },
            hide: function() {
                return Ve(this)
            },
            toggle: function(e) {
                return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
                    yt(this) ? i(this).show() : i(this).hide()
                })
            }
        });
        var it = /^(?:checkbox|radio)$/i,
            bn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            mn = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var e = j.createDocumentFragment(),
                t = e.appendChild(j.createElement("div")),
                n = j.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), O.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", O.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", O.option = !!t.lastChild
        })();
        var ge = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, O.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);

        function de(e, t) {
            var n;
            return typeof e.getElementsByTagName < "u" ? n = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? n = e.querySelectorAll(t || "*") : n = [], t === void 0 || t && V(e, t) ? i.merge([e], n) : n
        }

        function Rt(e, t) {
            for (var n = 0, r = e.length; n < r; n++) A.set(e[n], "globalEval", !t || A.get(t[n], "globalEval"))
        }
        var kr = /<|&#?\w+;/;

        function xn(e, t, n, r, o) {
            for (var a, u, l, f, d, y, b = t.createDocumentFragment(), h = [], T = 0, M = e.length; T < M; T++)
                if (a = e[T], a || a === 0)
                    if (Z(a) === "object") i.merge(h, a.nodeType ? [a] : a);
                    else if (!kr.test(a)) h.push(t.createTextNode(a));
            else {
                for (u = u || b.appendChild(t.createElement("div")), l = (bn.exec(a) || ["", ""])[1].toLowerCase(), f = ge[l] || ge._default, u.innerHTML = f[1] + i.htmlPrefilter(a) + f[2], y = f[0]; y--;) u = u.lastChild;
                i.merge(h, u.childNodes), u = b.firstChild, u.textContent = ""
            }
            for (b.textContent = "", T = 0; a = h[T++];) {
                if (r && i.inArray(a, r) > -1) {
                    o && o.push(a);
                    continue
                }
                if (d = Xe(a), u = de(b.appendChild(a), "script"), d && Rt(u), n)
                    for (y = 0; a = u[y++];) mn.test(a.type || "") && n.push(a)
            }
            return b
        }
        var Tn = /^([^.]*)(?:\.(.+)|)/;

        function Ge() {
            return !0
        }

        function Qe() {
            return !1
        }

        function _t(e, t, n, r, o, a) {
            var u, l;
            if (typeof t == "object") {
                typeof n != "string" && (r = r || n, n = void 0);
                for (l in t) _t(e, l, n, r, t[l], a);
                return e
            }
            if (r == null && o == null ? (o = n, r = n = void 0) : o == null && (typeof n == "string" ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), o === !1) o = Qe;
            else if (!o) return e;
            return a === 1 && (u = o, o = function(f) {
                return i().off(f), u.apply(this, arguments)
            }, o.guid = u.guid || (u.guid = i.guid++)), e.each(function() {
                i.event.add(this, t, o, r, n)
            })
        }
        i.event = {
            global: {},
            add: function(e, t, n, r, o) {
                var a, u, l, f, d, y, b, h, T, M, U, _ = A.get(e);
                if (tt(e))
                    for (n.handler && (a = n, n = a.handler, o = a.selector), o && i.find.matchesSelector(_e, o), n.guid || (n.guid = i.guid++), (f = _.events) || (f = _.events = Object.create(null)), (u = _.handle) || (u = _.handle = function(se) {
                            return typeof i < "u" && i.event.triggered !== se.type ? i.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(Te) || [""], d = t.length; d--;) l = Tn.exec(t[d]) || [], T = U = l[1], M = (l[2] || "").split(".").sort(), T && (b = i.event.special[T] || {}, T = (o ? b.delegateType : b.bindType) || T, b = i.event.special[T] || {}, y = i.extend({
                        type: T,
                        origType: U,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && i.expr.match.needsContext.test(o),
                        namespace: M.join(".")
                    }, a), (h = f[T]) || (h = f[T] = [], h.delegateCount = 0, (!b.setup || b.setup.call(e, r, M, u) === !1) && e.addEventListener && e.addEventListener(T, u)), b.add && (b.add.call(e, y), y.handler.guid || (y.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, y) : h.push(y), i.event.global[T] = !0)
            },
            remove: function(e, t, n, r, o) {
                var a, u, l, f, d, y, b, h, T, M, U, _ = A.hasData(e) && A.get(e);
                if (!(!_ || !(f = _.events))) {
                    for (t = (t || "").match(Te) || [""], d = t.length; d--;) {
                        if (l = Tn.exec(t[d]) || [], T = U = l[1], M = (l[2] || "").split(".").sort(), !T) {
                            for (T in f) i.event.remove(e, T + t[d], n, r, !0);
                            continue
                        }
                        for (b = i.event.special[T] || {}, T = (r ? b.delegateType : b.bindType) || T, h = f[T] || [], l = l[2] && new RegExp("(^|\\.)" + M.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = a = h.length; a--;) y = h[a], (o || U === y.origType) && (!n || n.guid === y.guid) && (!l || l.test(y.namespace)) && (!r || r === y.selector || r === "**" && y.selector) && (h.splice(a, 1), y.selector && h.delegateCount--, b.remove && b.remove.call(e, y));
                        u && !h.length && ((!b.teardown || b.teardown.call(e, M, _.handle) === !1) && i.removeEvent(e, T, _.handle), delete f[T])
                    }
                    i.isEmptyObject(f) && A.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, o, a, u, l = new Array(arguments.length),
                    f = i.event.fix(e),
                    d = (A.get(this, "events") || Object.create(null))[f.type] || [],
                    y = i.event.special[f.type] || {};
                for (l[0] = f, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (f.delegateTarget = this, !(y.preDispatch && y.preDispatch.call(this, f) === !1)) {
                    for (u = i.event.handlers.call(this, f, d), t = 0;
                        (o = u[t++]) && !f.isPropagationStopped();)
                        for (f.currentTarget = o.elem, n = 0;
                            (a = o.handlers[n++]) && !f.isImmediatePropagationStopped();)(!f.rnamespace || a.namespace === !1 || f.rnamespace.test(a.namespace)) && (f.handleObj = a, f.data = a.data, r = ((i.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, l), r !== void 0 && (f.result = r) === !1 && (f.preventDefault(), f.stopPropagation()));
                    return y.postDispatch && y.postDispatch.call(this, f), f.result
                }
            },
            handlers: function(e, t) {
                var n, r, o, a, u, l = [],
                    f = t.delegateCount,
                    d = e.target;
                if (f && d.nodeType && !(e.type === "click" && e.button >= 1)) {
                    for (; d !== this; d = d.parentNode || this)
                        if (d.nodeType === 1 && !(e.type === "click" && d.disabled === !0)) {
                            for (a = [], u = {}, n = 0; n < f; n++) r = t[n], o = r.selector + " ", u[o] === void 0 && (u[o] = r.needsContext ? i(o, this).index(d) > -1 : i.find(o, this, null, [d]).length), u[o] && a.push(r);
                            a.length && l.push({
                                elem: d,
                                handlers: a
                            })
                        }
                }
                return d = this, f < t.length && l.push({
                    elem: d,
                    handlers: t.slice(f)
                }), l
            },
            addProp: function(e, t) {
                Object.defineProperty(i.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: L(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(n) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: n
                        })
                    }
                })
            },
            fix: function(e) {
                return e[i.expando] ? e : new i.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return it.test(t.type) && t.click && V(t, "input") && vt(t, "click", !0), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return it.test(t.type) && t.click && V(t, "input") && vt(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return it.test(t.type) && t.click && V(t, "input") && A.get(t, "click") || V(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        };

        function vt(e, t, n) {
            if (!n) {
                A.get(e, t) === void 0 && i.event.add(e, t, Ge);
                return
            }
            A.set(e, t, !1), i.event.add(e, t, {
                namespace: !1,
                handler: function(r) {
                    var o, a = A.get(this, t);
                    if (r.isTrigger & 1 && this[t]) {
                        if (a)(i.event.special[t] || {}).delegateType && r.stopPropagation();
                        else if (a = G.call(arguments), A.set(this, t, a), this[t](), o = A.get(this, t), A.set(this, t, !1), a !== o) return r.stopImmediatePropagation(), r.preventDefault(), o
                    } else a && (A.set(this, t, i.event.trigger(a[0], a.slice(1), this)), r.stopPropagation(), r.isImmediatePropagationStopped = Ge)
                }
            })
        }
        i.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, i.Event = function(e, t) {
            if (!(this instanceof i.Event)) return new i.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && e.returnValue === !1 ? Ge : Qe, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && i.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[i.expando] = !0
        }, i.Event.prototype = {
            constructor: i.Event,
            isDefaultPrevented: Qe,
            isPropagationStopped: Qe,
            isImmediatePropagationStopped: Qe,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ge, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Ge, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ge, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, i.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, i.event.addProp), i.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            function n(r) {
                if (j.documentMode) {
                    var o = A.get(this, "handle"),
                        a = i.event.fix(r);
                    a.type = r.type === "focusin" ? "focus" : "blur", a.isSimulated = !0, o(r), a.target === a.currentTarget && o(a)
                } else i.event.simulate(t, r.target, i.event.fix(r))
            }
            i.event.special[e] = {
                setup: function() {
                    var r;
                    if (vt(this, e, !0), j.documentMode) r = A.get(this, t), r || this.addEventListener(t, n), A.set(this, t, (r || 0) + 1);
                    else return !1
                },
                trigger: function() {
                    return vt(this, e), !0
                },
                teardown: function() {
                    var r;
                    if (j.documentMode) r = A.get(this, t) - 1, r ? A.set(this, t, r) : (this.removeEventListener(t, n), A.remove(this, t));
                    else return !1
                },
                _default: function(r) {
                    return A.get(r.target, e)
                },
                delegateType: t
            }, i.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this.document || this,
                        o = j.documentMode ? this : r,
                        a = A.get(o, t);
                    a || (j.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), A.set(o, t, (a || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this.document || this,
                        o = j.documentMode ? this : r,
                        a = A.get(o, t) - 1;
                    a ? A.set(o, t, a) : (j.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), A.remove(o, t))
                }
            }
        }), i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            i.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(n) {
                    var r, o = this,
                        a = n.relatedTarget,
                        u = n.handleObj;
                    return (!a || a !== o && !i.contains(o, a)) && (n.type = u.origType, r = u.handler.apply(this, arguments), n.type = t), r
                }
            }
        }), i.fn.extend({
            on: function(e, t, n, r) {
                return _t(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return _t(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, i(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if (typeof e == "object") {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return (t === !1 || typeof t == "function") && (n = t, t = void 0), n === !1 && (n = Qe), this.each(function() {
                    i.event.remove(this, e, n, t)
                })
            }
        });
        var Or = /<script|<style|<link/i,
            Lr = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Pr = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

        function Sn(e, t) {
            return V(e, "table") && V(t.nodeType !== 11 ? t : t.firstChild, "tr") && i(e).children("tbody")[0] || e
        }

        function Hr(e) {
            return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e
        }

        function Ir(e) {
            return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function wn(e, t) {
            var n, r, o, a, u, l, f;
            if (t.nodeType === 1) {
                if (A.hasData(e) && (a = A.get(e), f = a.events, f)) {
                    A.remove(t, "handle events");
                    for (o in f)
                        for (n = 0, r = f[o].length; n < r; n++) i.event.add(t, o, f[o][n])
                }
                ce.hasData(e) && (u = ce.access(e), l = i.extend({}, u), ce.set(t, l))
            }
        }

        function Mr(e, t) {
            var n = t.nodeName.toLowerCase();
            n === "input" && it.test(e.type) ? t.checked = e.checked : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue)
        }

        function Ye(e, t, n, r) {
            t = $(t);
            var o, a, u, l, f, d, y = 0,
                b = e.length,
                h = b - 1,
                T = t[0],
                M = L(T);
            if (M || b > 1 && typeof T == "string" && !O.checkClone && Lr.test(T)) return e.each(function(U) {
                var _ = e.eq(U);
                M && (t[0] = T.call(this, U, _.html())), Ye(_, t, n, r)
            });
            if (b && (o = xn(t, e[0].ownerDocument, !1, e, r), a = o.firstChild, o.childNodes.length === 1 && (o = a), a || r)) {
                for (u = i.map(de(o, "script"), Hr), l = u.length; y < b; y++) f = o, y !== h && (f = i.clone(f, !0, !0), l && i.merge(u, de(f, "script"))), n.call(e[y], f, y);
                if (l)
                    for (d = u[u.length - 1].ownerDocument, i.map(u, Ir), y = 0; y < l; y++) f = u[y], mn.test(f.type || "") && !A.access(f, "globalEval") && i.contains(d, f) && (f.src && (f.type || "").toLowerCase() !== "module" ? i._evalUrl && !f.noModule && i._evalUrl(f.src, {
                        nonce: f.nonce || f.getAttribute("nonce")
                    }, d) : Ne(f.textContent.replace(Pr, ""), f, d))
            }
            return e
        }

        function Cn(e, t, n) {
            for (var r, o = t ? i.filter(t, e) : e, a = 0;
                (r = o[a]) != null; a++) !n && r.nodeType === 1 && i.cleanData(de(r)), r.parentNode && (n && Xe(r) && Rt(de(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        i.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var r, o, a, u, l = e.cloneNode(!0),
                    f = Xe(e);
                if (!O.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !i.isXMLDoc(e))
                    for (u = de(l), a = de(e), r = 0, o = a.length; r < o; r++) Mr(a[r], u[r]);
                if (t)
                    if (n)
                        for (a = a || de(e), u = u || de(l), r = 0, o = a.length; r < o; r++) wn(a[r], u[r]);
                    else wn(e, l);
                return u = de(l, "script"), u.length > 0 && Rt(u, !f && de(e, "script")), l
            },
            cleanData: function(e) {
                for (var t, n, r, o = i.event.special, a = 0;
                    (n = e[a]) !== void 0; a++)
                    if (tt(n)) {
                        if (t = n[A.expando]) {
                            if (t.events)
                                for (r in t.events) o[r] ? i.event.remove(n, r) : i.removeEvent(n, r, t.handle);
                            n[A.expando] = void 0
                        }
                        n[ce.expando] && (n[ce.expando] = void 0)
                    }
            }
        }), i.fn.extend({
            detach: function(e) {
                return Cn(this, e, !0)
            },
            remove: function(e) {
                return Cn(this, e)
            },
            text: function(e) {
                return Oe(this, function(t) {
                    return t === void 0 ? i.text(this) : this.empty().each(function() {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Ye(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Sn(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return Ye(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Sn(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Ye(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Ye(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0;
                    (e = this[t]) != null; t++) e.nodeType === 1 && (i.cleanData(de(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = e ? ? !1, t = t ? ? e, this.map(function() {
                    return i.clone(this, e, t)
                })
            },
            html: function(e) {
                return Oe(this, function(t) {
                    var n = this[0] || {},
                        r = 0,
                        o = this.length;
                    if (t === void 0 && n.nodeType === 1) return n.innerHTML;
                    if (typeof t == "string" && !Or.test(t) && !ge[(bn.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = i.htmlPrefilter(t);
                        try {
                            for (; r < o; r++) n = this[r] || {}, n.nodeType === 1 && (i.cleanData(de(n, !1)), n.innerHTML = t);
                            n = 0
                        } catch {}
                    }
                    n && this.empty().append(t)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Ye(this, arguments, function(t) {
                    var n = this.parentNode;
                    i.inArray(this, e) < 0 && (i.cleanData(de(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            i.fn[e] = function(n) {
                for (var r, o = [], a = i(n), u = a.length - 1, l = 0; l <= u; l++) r = l === u ? this : this.clone(!0), i(a[l])[t](r), B.apply(o, r.get());
                return this.pushStack(o)
            }
        });
        var $t = new RegExp("^(" + gn + ")(?!px)[a-z%]+$", "i"),
            Wt = /^--/,
            bt = function(e) {
                var t = e.ownerDocument.defaultView;
                return (!t || !t.opener) && (t = x), t.getComputedStyle(e)
            },
            En = function(e, t, n) {
                var r, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                r = n.call(e);
                for (o in t) e.style[o] = a[o];
                return r
            },
            qr = new RegExp(Le.join("|"), "i");
        (function() {
            function e() {
                if (d) {
                    f.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", _e.appendChild(f).appendChild(d);
                    var y = x.getComputedStyle(d);
                    n = y.top !== "1%", l = t(y.marginLeft) === 12, d.style.right = "60%", a = t(y.right) === 36, r = t(y.width) === 36, d.style.position = "absolute", o = t(d.offsetWidth / 3) === 12, _e.removeChild(f), d = null
                }
            }

            function t(y) {
                return Math.round(parseFloat(y))
            }
            var n, r, o, a, u, l, f = j.createElement("div"),
                d = j.createElement("div");
            d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", O.clearCloneStyle = d.style.backgroundClip === "content-box", i.extend(O, {
                boxSizingReliable: function() {
                    return e(), r
                },
                pixelBoxStyles: function() {
                    return e(), a
                },
                pixelPosition: function() {
                    return e(), n
                },
                reliableMarginLeft: function() {
                    return e(), l
                },
                scrollboxSize: function() {
                    return e(), o
                },
                reliableTrDimensions: function() {
                    var y, b, h, T;
                    return u == null && (y = j.createElement("table"), b = j.createElement("tr"), h = j.createElement("div"), y.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", b.style.cssText = "border:1px solid", b.style.height = "1px", h.style.height = "9px", h.style.display = "block", _e.appendChild(y).appendChild(b).appendChild(h), T = x.getComputedStyle(b), u = parseInt(T.height, 10) + parseInt(T.borderTopWidth, 10) + parseInt(T.borderBottomWidth, 10) === b.offsetHeight, _e.removeChild(y)), u
                }
            }))
        })();

        function ot(e, t, n) {
            var r, o, a, u, l = Wt.test(t),
                f = e.style;
            return n = n || bt(e), n && (u = n.getPropertyValue(t) || n[t], l && u && (u = u.replace(et, "$1") || void 0), u === "" && !Xe(e) && (u = i.style(e, t)), !O.pixelBoxStyles() && $t.test(u) && qr.test(t) && (r = f.width, o = f.minWidth, a = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = n.width, f.width = r, f.minWidth = o, f.maxWidth = a)), u !== void 0 ? u + "" : u
        }

        function Dn(e, t) {
            return {
                get: function() {
                    if (e()) {
                        delete this.get;
                        return
                    }
                    return (this.get = t).apply(this, arguments)
                }
            }
        }
        var jn = ["Webkit", "Moz", "ms"],
            An = j.createElement("div").style,
            Nn = {};

        function Rr(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = jn.length; n--;)
                if (e = jn[n] + t, e in An) return e
        }

        function zt(e) {
            var t = i.cssProps[e] || Nn[e];
            return t || (e in An ? e : Nn[e] = Rr(e) || e)
        }
        var _r = /^(none|table(?!-c[ea]).+)/,
            $r = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            kn = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function On(e, t, n) {
            var r = rt.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function Ft(e, t, n, r, o, a) {
            var u = t === "width" ? 1 : 0,
                l = 0,
                f = 0,
                d = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; u < 4; u += 2) n === "margin" && (d += i.css(e, n + Le[u], !0, o)), r ? (n === "content" && (f -= i.css(e, "padding" + Le[u], !0, o)), n !== "margin" && (f -= i.css(e, "border" + Le[u] + "Width", !0, o))) : (f += i.css(e, "padding" + Le[u], !0, o), n !== "padding" ? f += i.css(e, "border" + Le[u] + "Width", !0, o) : l += i.css(e, "border" + Le[u] + "Width", !0, o));
            return !r && a >= 0 && (f += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - f - l - .5)) || 0), f + d
        }

        function Ln(e, t, n) {
            var r = bt(e),
                o = !O.boxSizingReliable() || n,
                a = o && i.css(e, "boxSizing", !1, r) === "border-box",
                u = a,
                l = ot(e, t, r),
                f = "offset" + t[0].toUpperCase() + t.slice(1);
            if ($t.test(l)) {
                if (!n) return l;
                l = "auto"
            }
            return (!O.boxSizingReliable() && a || !O.reliableTrDimensions() && V(e, "tr") || l === "auto" || !parseFloat(l) && i.css(e, "display", !1, r) === "inline") && e.getClientRects().length && (a = i.css(e, "boxSizing", !1, r) === "border-box", u = f in e, u && (l = e[f])), l = parseFloat(l) || 0, l + Ft(e, t, n || (a ? "border" : "content"), u, r, l) + "px"
        }
        i.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = ot(e, "opacity");
                            return n === "" ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageSlice: !0,
                columnCount: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                scale: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
                    var o, a, u, l = Se(t),
                        f = Wt.test(t),
                        d = e.style;
                    if (f || (t = zt(l)), u = i.cssHooks[t] || i.cssHooks[l], n !== void 0) {
                        if (a = typeof n, a === "string" && (o = rt.exec(n)) && o[1] && (n = yn(e, t, o), a = "number"), n == null || n !== n) return;
                        a === "number" && !f && (n += o && o[3] || (i.cssNumber[l] ? "" : "px")), !O.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (d[t] = "inherit"), (!u || !("set" in u) || (n = u.set(e, n, r)) !== void 0) && (f ? d.setProperty(t, n) : d[t] = n)
                    } else return u && "get" in u && (o = u.get(e, !1, r)) !== void 0 ? o : d[t]
                }
            },
            css: function(e, t, n, r) {
                var o, a, u, l = Se(t),
                    f = Wt.test(t);
                return f || (t = zt(l)), u = i.cssHooks[t] || i.cssHooks[l], u && "get" in u && (o = u.get(e, !0, n)), o === void 0 && (o = ot(e, t, r)), o === "normal" && t in kn && (o = kn[t]), n === "" || n ? (a = parseFloat(o), n === !0 || isFinite(a) ? a || 0 : o) : o
            }
        }), i.each(["height", "width"], function(e, t) {
            i.cssHooks[t] = {
                get: function(n, r, o) {
                    if (r) return _r.test(i.css(n, "display")) && (!n.getClientRects().length || !n.getBoundingClientRect().width) ? En(n, $r, function() {
                        return Ln(n, t, o)
                    }) : Ln(n, t, o)
                },
                set: function(n, r, o) {
                    var a, u = bt(n),
                        l = !O.scrollboxSize() && u.position === "absolute",
                        f = l || o,
                        d = f && i.css(n, "boxSizing", !1, u) === "border-box",
                        y = o ? Ft(n, t, o, d, u) : 0;
                    return d && l && (y -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(u[t]) - Ft(n, t, "border", !1, u) - .5)), y && (a = rt.exec(r)) && (a[3] || "px") !== "px" && (n.style[t] = r, r = i.css(n, t)), On(n, r, y)
                }
            }
        }), i.cssHooks.marginLeft = Dn(O.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(ot(e, "marginLeft")) || e.getBoundingClientRect().left - En(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), i.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            i.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, o = {}, a = typeof n == "string" ? n.split(" ") : [n]; r < 4; r++) o[e + Le[r] + t] = a[r] || a[r - 2] || a[0];
                    return o
                }
            }, e !== "margin" && (i.cssHooks[e + t].set = On)
        }), i.fn.extend({
            css: function(e, t) {
                return Oe(this, function(n, r, o) {
                    var a, u, l = {},
                        f = 0;
                    if (Array.isArray(r)) {
                        for (a = bt(n), u = r.length; f < u; f++) l[r[f]] = i.css(n, r[f], !1, a);
                        return l
                    }
                    return o !== void 0 ? i.style(n, r, o) : i.css(n, r)
                }, e, t, arguments.length > 1)
            }
        });

        function pe(e, t, n, r, o) {
            return new pe.prototype.init(e, t, n, r, o)
        }
        i.Tween = pe, pe.prototype = {
            constructor: pe,
            init: function(e, t, n, r, o, a) {
                this.elem = e, this.prop = n, this.easing = o || i.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (i.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = pe.propHooks[this.prop];
                return e && e.get ? e.get(this) : pe.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = pe.propHooks[this.prop];
                return this.options.duration ? this.pos = t = i.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : pe.propHooks._default.set(this), this
            }
        }, pe.prototype.init.prototype = pe.prototype, pe.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = i.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t)
                },
                set: function(e) {
                    i.fx.step[e.prop] ? i.fx.step[e.prop](e) : e.elem.nodeType === 1 && (i.cssHooks[e.prop] || e.elem.style[zt(e.prop)] != null) ? i.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, pe.propHooks.scrollTop = pe.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, i.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, i.fx = pe.prototype.init, i.fx.step = {};
        var Je, mt, Wr = /^(?:toggle|show|hide)$/,
            zr = /queueHooks$/;

        function Bt() {
            mt && (j.hidden === !1 && x.requestAnimationFrame ? x.requestAnimationFrame(Bt) : x.setTimeout(Bt, i.fx.interval), i.fx.tick())
        }

        function Pn() {
            return x.setTimeout(function() {
                Je = void 0
            }), Je = Date.now()
        }

        function xt(e, t) {
            var n, r = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Le[r], o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function Hn(e, t, n) {
            for (var r, o = (me.tweeners[t] || []).concat(me.tweeners["*"]), a = 0, u = o.length; a < u; a++)
                if (r = o[a].call(n, t, e)) return r
        }

        function Fr(e, t, n) {
            var r, o, a, u, l, f, d, y, b = "width" in t || "height" in t,
                h = this,
                T = {},
                M = e.style,
                U = e.nodeType && yt(e),
                _ = A.get(e, "fxshow");
            n.queue || (u = i._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, l = u.empty.fire, u.empty.fire = function() {
                u.unqueued || l()
            }), u.unqueued++, h.always(function() {
                h.always(function() {
                    u.unqueued--, i.queue(e, "fx").length || u.empty.fire()
                })
            }));
            for (r in t)
                if (o = t[r], Wr.test(o)) {
                    if (delete t[r], a = a || o === "toggle", o === (U ? "hide" : "show"))
                        if (o === "show" && _ && _[r] !== void 0) U = !0;
                        else continue;
                    T[r] = _ && _[r] || i.style(e, r)
                }
            if (f = !i.isEmptyObject(t), !(!f && i.isEmptyObject(T))) {
                b && e.nodeType === 1 && (n.overflow = [M.overflow, M.overflowX, M.overflowY], d = _ && _.display, d == null && (d = A.get(e, "display")), y = i.css(e, "display"), y === "none" && (d ? y = d : (Ve([e], !0), d = e.style.display || d, y = i.css(e, "display"), Ve([e]))), (y === "inline" || y === "inline-block" && d != null) && i.css(e, "float") === "none" && (f || (h.done(function() {
                    M.display = d
                }), d == null && (y = M.display, d = y === "none" ? "" : y)), M.display = "inline-block")), n.overflow && (M.overflow = "hidden", h.always(function() {
                    M.overflow = n.overflow[0], M.overflowX = n.overflow[1], M.overflowY = n.overflow[2]
                })), f = !1;
                for (r in T) f || (_ ? "hidden" in _ && (U = _.hidden) : _ = A.access(e, "fxshow", {
                    display: d
                }), a && (_.hidden = !U), U && Ve([e], !0), h.done(function() {
                    U || Ve([e]), A.remove(e, "fxshow");
                    for (r in T) i.style(e, r, T[r])
                })), f = Hn(U ? _[r] : 0, r, h), r in _ || (_[r] = f.start, U && (f.end = f.start, f.start = 0))
            }
        }

        function Br(e, t) {
            var n, r, o, a, u;
            for (n in e)
                if (r = Se(n), o = t[r], a = e[n], Array.isArray(a) && (o = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), u = i.cssHooks[r], u && "expand" in u) {
                    a = u.expand(a), delete e[r];
                    for (n in a) n in e || (e[n] = a[n], t[n] = o)
                } else t[r] = o
        }

        function me(e, t, n) {
            var r, o, a = 0,
                u = me.prefilters.length,
                l = i.Deferred().always(function() {
                    delete f.elem
                }),
                f = function() {
                    if (o) return !1;
                    for (var b = Je || Pn(), h = Math.max(0, d.startTime + d.duration - b), T = h / d.duration || 0, M = 1 - T, U = 0, _ = d.tweens.length; U < _; U++) d.tweens[U].run(M);
                    return l.notifyWith(e, [d, M, h]), M < 1 && _ ? h : (_ || l.notifyWith(e, [d, 1, 0]), l.resolveWith(e, [d]), !1)
                },
                d = l.promise({
                    elem: e,
                    props: i.extend({}, t),
                    opts: i.extend(!0, {
                        specialEasing: {},
                        easing: i.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Je || Pn(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(b, h) {
                        var T = i.Tween(e, d.opts, b, h, d.opts.specialEasing[b] || d.opts.easing);
                        return d.tweens.push(T), T
                    },
                    stop: function(b) {
                        var h = 0,
                            T = b ? d.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; h < T; h++) d.tweens[h].run(1);
                        return b ? (l.notifyWith(e, [d, 1, 0]), l.resolveWith(e, [d, b])) : l.rejectWith(e, [d, b]), this
                    }
                }),
                y = d.props;
            for (Br(y, d.opts.specialEasing); a < u; a++)
                if (r = me.prefilters[a].call(d, e, y, d.opts), r) return L(r.stop) && (i._queueHooks(d.elem, d.opts.queue).stop = r.stop.bind(r)), r;
            return i.map(y, Hn, d), L(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), i.fx.timer(i.extend(f, {
                elem: e,
                anim: d,
                queue: d.opts.queue
            })), d
        }
        i.Animation = i.extend(me, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return yn(n.elem, e, rt.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    L(e) ? (t = e, e = ["*"]) : e = e.match(Te);
                    for (var n, r = 0, o = e.length; r < o; r++) n = e[r], me.tweeners[n] = me.tweeners[n] || [], me.tweeners[n].unshift(t)
                },
                prefilters: [Fr],
                prefilter: function(e, t) {
                    t ? me.prefilters.unshift(e) : me.prefilters.push(e)
                }
            }), i.speed = function(e, t, n) {
                var r = e && typeof e == "object" ? i.extend({}, e) : {
                    complete: n || !n && t || L(e) && e,
                    duration: e,
                    easing: n && t || t && !L(t) && t
                };
                return i.fx.off ? r.duration = 0 : typeof r.duration != "number" && (r.duration in i.fx.speeds ? r.duration = i.fx.speeds[r.duration] : r.duration = i.fx.speeds._default), (r.queue == null || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    L(r.old) && r.old.call(this), r.queue && i.dequeue(this, r.queue)
                }, r
            }, i.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(yt).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var o = i.isEmptyObject(e),
                        a = i.speed(t, n, r),
                        u = function() {
                            var l = me(this, i.extend({}, e), a);
                            (o || A.get(this, "finish")) && l.stop(!0)
                        };
                    return u.finish = u, o || a.queue === !1 ? this.each(u) : this.queue(a.queue, u)
                },
                stop: function(e, t, n) {
                    var r = function(o) {
                        var a = o.stop;
                        delete o.stop, a(n)
                    };
                    return typeof e != "string" && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                        var o = !0,
                            a = e != null && e + "queueHooks",
                            u = i.timers,
                            l = A.get(this);
                        if (a) l[a] && l[a].stop && r(l[a]);
                        else
                            for (a in l) l[a] && l[a].stop && zr.test(a) && r(l[a]);
                        for (a = u.length; a--;) u[a].elem === this && (e == null || u[a].queue === e) && (u[a].anim.stop(n), o = !1, u.splice(a, 1));
                        (o || !n) && i.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = A.get(this),
                            r = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            a = i.timers,
                            u = r ? r.length : 0;
                        for (n.finish = !0, i.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                        for (t = 0; t < u; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), i.each(["toggle", "show", "hide"], function(e, t) {
                var n = i.fn[t];
                i.fn[t] = function(r, o, a) {
                    return r == null || typeof r == "boolean" ? n.apply(this, arguments) : this.animate(xt(t, !0), r, o, a)
                }
            }), i.each({
                slideDown: xt("show"),
                slideUp: xt("hide"),
                slideToggle: xt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                i.fn[e] = function(n, r, o) {
                    return this.animate(t, n, r, o)
                }
            }), i.timers = [], i.fx.tick = function() {
                var e, t = 0,
                    n = i.timers;
                for (Je = Date.now(); t < n.length; t++) e = n[t], !e() && n[t] === e && n.splice(t--, 1);
                n.length || i.fx.stop(), Je = void 0
            }, i.fx.timer = function(e) {
                i.timers.push(e), i.fx.start()
            }, i.fx.interval = 13, i.fx.start = function() {
                mt || (mt = !0, Bt())
            }, i.fx.stop = function() {
                mt = null
            }, i.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, i.fn.delay = function(e, t) {
                return e = i.fx && i.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(n, r) {
                    var o = x.setTimeout(n, e);
                    r.stop = function() {
                        x.clearTimeout(o)
                    }
                })
            },
            function() {
                var e = j.createElement("input"),
                    t = j.createElement("select"),
                    n = t.appendChild(j.createElement("option"));
                e.type = "checkbox", O.checkOn = e.value !== "", O.optSelected = n.selected, e = j.createElement("input"), e.value = "t", e.type = "radio", O.radioValue = e.value === "t"
            }();
        var In, at = i.expr.attrHandle;
        i.fn.extend({
            attr: function(e, t) {
                return Oe(this, i.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    i.removeAttr(this, e)
                })
            }
        }), i.extend({
            attr: function(e, t, n) {
                var r, o, a = e.nodeType;
                if (!(a === 3 || a === 8 || a === 2)) {
                    if (typeof e.getAttribute > "u") return i.prop(e, t, n);
                    if ((a !== 1 || !i.isXMLDoc(e)) && (o = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? In : void 0)), n !== void 0) {
                        if (n === null) {
                            i.removeAttr(e, t);
                            return
                        }
                        return o && "set" in o && (r = o.set(e, n, t)) !== void 0 ? r : (e.setAttribute(t, n + ""), n)
                    }
                    return o && "get" in o && (r = o.get(e, t)) !== null ? r : (r = i.find.attr(e, t), r ? ? void 0)
                }
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!O.radioValue && t === "radio" && V(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    o = t && t.match(Te);
                if (o && e.nodeType === 1)
                    for (; n = o[r++];) e.removeAttribute(n)
            }
        }), In = {
            set: function(e, t, n) {
                return t === !1 ? i.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, i.each(i.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = at[t] || i.find.attr;
            at[t] = function(r, o, a) {
                var u, l, f = o.toLowerCase();
                return a || (l = at[f], at[f] = u, u = n(r, o, a) != null ? f : null, at[f] = l), u
            }
        });
        var Ur = /^(?:input|select|textarea|button)$/i,
            Xr = /^(?:a|area)$/i;
        i.fn.extend({
            prop: function(e, t) {
                return Oe(this, i.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[i.propFix[e] || e]
                })
            }
        }), i.extend({
            prop: function(e, t, n) {
                var r, o, a = e.nodeType;
                if (!(a === 3 || a === 8 || a === 2)) return (a !== 1 || !i.isXMLDoc(e)) && (t = i.propFix[t] || t, o = i.propHooks[t]), n !== void 0 ? o && "set" in o && (r = o.set(e, n, t)) !== void 0 ? r : e[t] = n : o && "get" in o && (r = o.get(e, t)) !== null ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = i.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Ur.test(e.nodeName) || Xr.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), O.optSelected || (i.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            i.propFix[this.toLowerCase()] = this
        });

        function $e(e) {
            var t = e.match(Te) || [];
            return t.join(" ")
        }

        function We(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function Ut(e) {
            return Array.isArray(e) ? e : typeof e == "string" ? e.match(Te) || [] : []
        }
        i.fn.extend({
            addClass: function(e) {
                var t, n, r, o, a, u;
                return L(e) ? this.each(function(l) {
                    i(this).addClass(e.call(this, l, We(this)))
                }) : (t = Ut(e), t.length ? this.each(function() {
                    if (r = We(this), n = this.nodeType === 1 && " " + $e(r) + " ", n) {
                        for (a = 0; a < t.length; a++) o = t[a], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        u = $e(n), r !== u && this.setAttribute("class", u)
                    }
                }) : this)
            },
            removeClass: function(e) {
                var t, n, r, o, a, u;
                return L(e) ? this.each(function(l) {
                    i(this).removeClass(e.call(this, l, We(this)))
                }) : arguments.length ? (t = Ut(e), t.length ? this.each(function() {
                    if (r = We(this), n = this.nodeType === 1 && " " + $e(r) + " ", n) {
                        for (a = 0; a < t.length; a++)
                            for (o = t[a]; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                        u = $e(n), r !== u && this.setAttribute("class", u)
                    }
                }) : this) : this.attr("class", "")
            },
            toggleClass: function(e, t) {
                var n, r, o, a, u = typeof e,
                    l = u === "string" || Array.isArray(e);
                return L(e) ? this.each(function(f) {
                    i(this).toggleClass(e.call(this, f, We(this), t), t)
                }) : typeof t == "boolean" && l ? t ? this.addClass(e) : this.removeClass(e) : (n = Ut(e), this.each(function() {
                    if (l)
                        for (a = i(this), o = 0; o < n.length; o++) r = n[o], a.hasClass(r) ? a.removeClass(r) : a.addClass(r);
                    else(e === void 0 || u === "boolean") && (r = We(this), r && A.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || e === !1 ? "" : A.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (n.nodeType === 1 && (" " + $e(We(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var Vr = /\r/g;
        i.fn.extend({
            val: function(e) {
                var t, n, r, o = this[0];
                return arguments.length ? (r = L(e), this.each(function(a) {
                    var u;
                    this.nodeType === 1 && (r ? u = e.call(this, a, i(this).val()) : u = e, u == null ? u = "" : typeof u == "number" ? u += "" : Array.isArray(u) && (u = i.map(u, function(l) {
                        return l == null ? "" : l + ""
                    })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, u, "value") === void 0) && (this.value = u))
                })) : o ? (t = i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()], t && "get" in t && (n = t.get(o, "value")) !== void 0 ? n : (n = o.value, typeof n == "string" ? n.replace(Vr, "") : n ? ? "")) : void 0
            }
        }), i.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = i.find.attr(e, "value");
                        return t ? ? $e(i.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, o = e.options,
                            a = e.selectedIndex,
                            u = e.type === "select-one",
                            l = u ? null : [],
                            f = u ? a + 1 : o.length;
                        for (a < 0 ? r = f : r = u ? a : 0; r < f; r++)
                            if (n = o[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !V(n.parentNode, "optgroup"))) {
                                if (t = i(n).val(), u) return t;
                                l.push(t)
                            }
                        return l
                    },
                    set: function(e, t) {
                        for (var n, r, o = e.options, a = i.makeArray(t), u = o.length; u--;) r = o[u], (r.selected = i.inArray(i.valHooks.option.get(r), a) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), a
                    }
                }
            }
        }), i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = i.inArray(i(e).val(), t) > -1
                }
            }, O.checkOn || (i.valHooks[this].get = function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            })
        });
        var ut = x.location,
            Mn = {
                guid: Date.now()
            },
            Xt = /\?/;
        i.parseXML = function(e) {
            var t, n;
            if (!e || typeof e != "string") return null;
            try {
                t = new x.DOMParser().parseFromString(e, "text/xml")
            } catch {}
            return n = t && t.getElementsByTagName("parsererror")[0], (!t || n) && i.error("Invalid XML: " + (n ? i.map(n.childNodes, function(r) {
                return r.textContent
            }).join(`
`) : e)), t
        };
        var qn = /^(?:focusinfocus|focusoutblur)$/,
            Rn = function(e) {
                e.stopPropagation()
            };
        i.extend(i.event, {
            trigger: function(e, t, n, r) {
                var o, a, u, l, f, d, y, b, h = [n || j],
                    T = ne.call(e, "type") ? e.type : e,
                    M = ne.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = b = u = n = n || j, !(n.nodeType === 3 || n.nodeType === 8) && !qn.test(T + i.event.triggered) && (T.indexOf(".") > -1 && (M = T.split("."), T = M.shift(), M.sort()), f = T.indexOf(":") < 0 && "on" + T, e = e[i.expando] ? e : new i.Event(T, typeof e == "object" && e), e.isTrigger = r ? 2 : 3, e.namespace = M.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + M.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = t == null ? [e] : i.makeArray(t, [e]), y = i.event.special[T] || {}, !(!r && y.trigger && y.trigger.apply(n, t) === !1))) {
                    if (!r && !y.noBubble && !ae(n)) {
                        for (l = y.delegateType || T, qn.test(l + T) || (a = a.parentNode); a; a = a.parentNode) h.push(a), u = a;
                        u === (n.ownerDocument || j) && h.push(u.defaultView || u.parentWindow || x)
                    }
                    for (o = 0;
                        (a = h[o++]) && !e.isPropagationStopped();) b = a, e.type = o > 1 ? l : y.bindType || T, d = (A.get(a, "events") || Object.create(null))[e.type] && A.get(a, "handle"), d && d.apply(a, t), d = f && a[f], d && d.apply && tt(a) && (e.result = d.apply(a, t), e.result === !1 && e.preventDefault());
                    return e.type = T, !r && !e.isDefaultPrevented() && (!y._default || y._default.apply(h.pop(), t) === !1) && tt(n) && f && L(n[T]) && !ae(n) && (u = n[f], u && (n[f] = null), i.event.triggered = T, e.isPropagationStopped() && b.addEventListener(T, Rn), n[T](), e.isPropagationStopped() && b.removeEventListener(T, Rn), i.event.triggered = void 0, u && (n[f] = u)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = i.extend(new i.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                i.event.trigger(r, null, t)
            }
        }), i.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    i.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return i.event.trigger(e, t, n, !0)
            }
        });
        var Gr = /\[\]$/,
            _n = /\r?\n/g,
            Qr = /^(?:submit|button|image|reset|file)$/i,
            Yr = /^(?:input|select|textarea|keygen)/i;

        function Vt(e, t, n, r) {
            var o;
            if (Array.isArray(t)) i.each(t, function(a, u) {
                n || Gr.test(e) ? r(e, u) : Vt(e + "[" + (typeof u == "object" && u != null ? a : "") + "]", u, n, r)
            });
            else if (!n && Z(t) === "object")
                for (o in t) Vt(e + "[" + o + "]", t[o], n, r);
            else r(e, t)
        }
        i.param = function(e, t) {
            var n, r = [],
                o = function(a, u) {
                    var l = L(u) ? u() : u;
                    r[r.length] = encodeURIComponent(a) + "=" + encodeURIComponent(l ? ? "")
                };
            if (e == null) return "";
            if (Array.isArray(e) || e.jquery && !i.isPlainObject(e)) i.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) Vt(n, e[n], t, o);
            return r.join("&")
        }, i.fn.extend({
            serialize: function() {
                return i.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = i.prop(this, "elements");
                    return e ? i.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !i(this).is(":disabled") && Yr.test(this.nodeName) && !Qr.test(e) && (this.checked || !it.test(e))
                }).map(function(e, t) {
                    var n = i(this).val();
                    return n == null ? null : Array.isArray(n) ? i.map(n, function(r) {
                        return {
                            name: t.name,
                            value: r.replace(_n, `\r
`)
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(_n, `\r
`)
                    }
                }).get()
            }
        });
        var Jr = /%20/g,
            Kr = /#.*$/,
            Zr = /([?&])_=[^&]*/,
            ei = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            ti = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ni = /^(?:GET|HEAD)$/,
            ri = /^\/\//,
            $n = {},
            Gt = {},
            Wn = "*/".concat("*"),
            Qt = j.createElement("a");
        Qt.href = ut.href;

        function zn(e) {
            return function(t, n) {
                typeof t != "string" && (n = t, t = "*");
                var r, o = 0,
                    a = t.toLowerCase().match(Te) || [];
                if (L(n))
                    for (; r = a[o++];) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Fn(e, t, n, r) {
            var o = {},
                a = e === Gt;

            function u(l) {
                var f;
                return o[l] = !0, i.each(e[l] || [], function(d, y) {
                    var b = y(t, n, r);
                    if (typeof b == "string" && !a && !o[b]) return t.dataTypes.unshift(b), u(b), !1;
                    if (a) return !(f = b)
                }), f
            }
            return u(t.dataTypes[0]) || !o["*"] && u("*")
        }

        function Yt(e, t) {
            var n, r, o = i.ajaxSettings.flatOptions || {};
            for (n in t) t[n] !== void 0 && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && i.extend(!0, e, r), e
        }

        function ii(e, t, n) {
            for (var r, o, a, u, l = e.contents, f = e.dataTypes; f[0] === "*";) f.shift(), r === void 0 && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r) {
                for (o in l)
                    if (l[o] && l[o].test(r)) {
                        f.unshift(o);
                        break
                    }
            }
            if (f[0] in n) a = f[0];
            else {
                for (o in n) {
                    if (!f[0] || e.converters[o + " " + f[0]]) {
                        a = o;
                        break
                    }
                    u || (u = o)
                }
                a = a || u
            }
            if (a) return a !== f[0] && f.unshift(a), n[a]
        }

        function oi(e, t, n, r) {
            var o, a, u, l, f, d = {},
                y = e.dataTypes.slice();
            if (y[1])
                for (u in e.converters) d[u.toLowerCase()] = e.converters[u];
            for (a = y.shift(); a;)
                if (e.responseFields[a] && (n[e.responseFields[a]] = t), !f && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), f = a, a = y.shift(), a) {
                    if (a === "*") a = f;
                    else if (f !== "*" && f !== a) {
                        if (u = d[f + " " + a] || d["* " + a], !u) {
                            for (o in d)
                                if (l = o.split(" "), l[1] === a && (u = d[f + " " + l[0]] || d["* " + l[0]], u)) {
                                    u === !0 ? u = d[o] : d[o] !== !0 && (a = l[0], y.unshift(l[1]));
                                    break
                                }
                        }
                        if (u !== !0)
                            if (u && e.throws) t = u(t);
                            else try {
                                t = u(t)
                            } catch (b) {
                                return {
                                    state: "parsererror",
                                    error: u ? b : "No conversion from " + f + " to " + a
                                }
                            }
                    }
                }
            return {
                state: "success",
                data: t
            }
        }
        i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ut.href,
                type: "GET",
                isLocal: ti.test(ut.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Wn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": i.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Yt(Yt(e, i.ajaxSettings), t) : Yt(i.ajaxSettings, e)
            },
            ajaxPrefilter: zn($n),
            ajaxTransport: zn(Gt),
            ajax: function(e, t) {
                typeof e == "object" && (t = e, e = void 0), t = t || {};
                var n, r, o, a, u, l, f, d, y, b, h = i.ajaxSetup({}, t),
                    T = h.context || h,
                    M = h.context && (T.nodeType || T.jquery) ? i(T) : i.event,
                    U = i.Deferred(),
                    _ = i.Callbacks("once memory"),
                    se = h.statusCode || {},
                    oe = {},
                    we = {},
                    Ce = "canceled",
                    F = {
                        readyState: 0,
                        getResponseHeader: function(X) {
                            var re;
                            if (f) {
                                if (!a)
                                    for (a = {}; re = ei.exec(o);) a[re[1].toLowerCase() + " "] = (a[re[1].toLowerCase() + " "] || []).concat(re[2]);
                                re = a[X.toLowerCase() + " "]
                            }
                            return re == null ? null : re.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return f ? o : null
                        },
                        setRequestHeader: function(X, re) {
                            return f == null && (X = we[X.toLowerCase()] = we[X.toLowerCase()] || X, oe[X] = re), this
                        },
                        overrideMimeType: function(X) {
                            return f == null && (h.mimeType = X), this
                        },
                        statusCode: function(X) {
                            var re;
                            if (X)
                                if (f) F.always(X[F.status]);
                                else
                                    for (re in X) se[re] = [se[re], X[re]];
                            return this
                        },
                        abort: function(X) {
                            var re = X || Ce;
                            return n && n.abort(re), ze(0, re), this
                        }
                    };
                if (U.promise(F), h.url = ((e || h.url || ut.href) + "").replace(ri, ut.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Te) || [""], h.crossDomain == null) {
                    l = j.createElement("a");
                    try {
                        l.href = h.url, l.href = l.href, h.crossDomain = Qt.protocol + "//" + Qt.host != l.protocol + "//" + l.host
                    } catch {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && typeof h.data != "string" && (h.data = i.param(h.data, h.traditional)), Fn($n, h, t, F), f) return F;
                d = i.event && h.global, d && i.active++ === 0 && i.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !ni.test(h.type), r = h.url.replace(Kr, ""), h.hasContent ? h.data && h.processData && (h.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (h.data = h.data.replace(Jr, "+")) : (b = h.url.slice(r.length), h.data && (h.processData || typeof h.data == "string") && (r += (Xt.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (r = r.replace(Zr, "$1"), b = (Xt.test(r) ? "&" : "?") + "_=" + Mn.guid++ + b), h.url = r + b), h.ifModified && (i.lastModified[r] && F.setRequestHeader("If-Modified-Since", i.lastModified[r]), i.etag[r] && F.setRequestHeader("If-None-Match", i.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || t.contentType) && F.setRequestHeader("Content-Type", h.contentType), F.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + (h.dataTypes[0] !== "*" ? ", " + Wn + "; q=0.01" : "") : h.accepts["*"]);
                for (y in h.headers) F.setRequestHeader(y, h.headers[y]);
                if (h.beforeSend && (h.beforeSend.call(T, F, h) === !1 || f)) return F.abort();
                if (Ce = "abort", _.add(h.complete), F.done(h.success), F.fail(h.error), n = Fn(Gt, h, t, F), !n) ze(-1, "No Transport");
                else {
                    if (F.readyState = 1, d && M.trigger("ajaxSend", [F, h]), f) return F;
                    h.async && h.timeout > 0 && (u = x.setTimeout(function() {
                        F.abort("timeout")
                    }, h.timeout));
                    try {
                        f = !1, n.send(oe, ze)
                    } catch (X) {
                        if (f) throw X;
                        ze(-1, X)
                    }
                }

                function ze(X, re, ft, Kt) {
                    var Ee, lt, De, Me, qe, ye = re;
                    f || (f = !0, u && x.clearTimeout(u), n = void 0, o = Kt || "", F.readyState = X > 0 ? 4 : 0, Ee = X >= 200 && X < 300 || X === 304, ft && (Me = ii(h, F, ft)), !Ee && i.inArray("script", h.dataTypes) > -1 && i.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), Me = oi(h, Me, F, Ee), Ee ? (h.ifModified && (qe = F.getResponseHeader("Last-Modified"), qe && (i.lastModified[r] = qe), qe = F.getResponseHeader("etag"), qe && (i.etag[r] = qe)), X === 204 || h.type === "HEAD" ? ye = "nocontent" : X === 304 ? ye = "notmodified" : (ye = Me.state, lt = Me.data, De = Me.error, Ee = !De)) : (De = ye, (X || !ye) && (ye = "error", X < 0 && (X = 0))), F.status = X, F.statusText = (re || ye) + "", Ee ? U.resolveWith(T, [lt, ye, F]) : U.rejectWith(T, [F, ye, De]), F.statusCode(se), se = void 0, d && M.trigger(Ee ? "ajaxSuccess" : "ajaxError", [F, h, Ee ? lt : De]), _.fireWith(T, [F, ye]), d && (M.trigger("ajaxComplete", [F, h]), --i.active || i.event.trigger("ajaxStop")))
                }
                return F
            },
            getJSON: function(e, t, n) {
                return i.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return i.get(e, void 0, t, "script")
            }
        }), i.each(["get", "post"], function(e, t) {
            i[t] = function(n, r, o, a) {
                return L(r) && (a = a || o, o = r, r = void 0), i.ajax(i.extend({
                    url: n,
                    type: t,
                    dataType: a,
                    data: r,
                    success: o
                }, i.isPlainObject(n) && n))
            }
        }), i.ajaxPrefilter(function(e) {
            var t;
            for (t in e.headers) t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "")
        }), i._evalUrl = function(e, t, n) {
            return i.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(r) {
                    i.globalEval(r, t, n)
                }
            })
        }, i.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (L(e) && (e = e.call(this[0])), t = i(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                    return n
                }).append(this)), this
            },
            wrapInner: function(e) {
                return L(e) ? this.each(function(t) {
                    i(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = i(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = L(e);
                return this.each(function(n) {
                    i(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    i(this).replaceWith(this.childNodes)
                }), this
            }
        }), i.expr.pseudos.hidden = function(e) {
            return !i.expr.pseudos.visible(e)
        }, i.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, i.ajaxSettings.xhr = function() {
            try {
                return new x.XMLHttpRequest
            } catch {}
        };
        var ai = {
                0: 200,
                1223: 204
            },
            st = i.ajaxSettings.xhr();
        O.cors = !!st && "withCredentials" in st, O.ajax = st = !!st, i.ajaxTransport(function(e) {
            var t, n;
            if (O.cors || st && !e.crossDomain) return {
                send: function(r, o) {
                    var a, u = e.xhr();
                    if (u.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) u[a] = e.xhrFields[a];
                    e.mimeType && u.overrideMimeType && u.overrideMimeType(e.mimeType), !e.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                    for (a in r) u.setRequestHeader(a, r[a]);
                    t = function(l) {
                        return function() {
                            t && (t = n = u.onload = u.onerror = u.onabort = u.ontimeout = u.onreadystatechange = null, l === "abort" ? u.abort() : l === "error" ? typeof u.status != "number" ? o(0, "error") : o(u.status, u.statusText) : o(ai[u.status] || u.status, u.statusText, (u.responseType || "text") !== "text" || typeof u.responseText != "string" ? {
                                binary: u.response
                            } : {
                                text: u.responseText
                            }, u.getAllResponseHeaders()))
                        }
                    }, u.onload = t(), n = u.onerror = u.ontimeout = t("error"), u.onabort !== void 0 ? u.onabort = n : u.onreadystatechange = function() {
                        u.readyState === 4 && x.setTimeout(function() {
                            t && n()
                        })
                    }, t = t("abort");
                    try {
                        u.send(e.hasContent && e.data || null)
                    } catch (l) {
                        if (t) throw l
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), i.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return i.globalEval(e), e
                }
            }
        }), i.ajaxPrefilter("script", function(e) {
            e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), i.ajaxTransport("script", function(e) {
            if (e.crossDomain || e.scriptAttrs) {
                var t, n;
                return {
                    send: function(r, o) {
                        t = i("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(a) {
                            t.remove(), n = null, a && o(a.type === "error" ? 404 : 200, a.type)
                        }), j.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Bn = [],
            Jt = /(=)\?(?=&|$)|\?\?/;
        i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Bn.pop() || i.expando + "_" + Mn.guid++;
                return this[e] = !0, e
            }
        }), i.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, o, a, u = e.jsonp !== !1 && (Jt.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Jt.test(e.data) && "data");
            if (u || e.dataTypes[0] === "jsonp") return r = e.jsonpCallback = L(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, u ? e[u] = e[u].replace(Jt, "$1" + r) : e.jsonp !== !1 && (e.url += (Xt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return a || i.error(r + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = x[r], x[r] = function() {
                a = arguments
            }, n.always(function() {
                o === void 0 ? i(x).removeProp(r) : x[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Bn.push(r)), a && L(o) && o(a[0]), a = o = void 0
            }), "script"
        }), O.createHTMLDocument = function() {
            var e = j.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2
        }(), i.parseHTML = function(e, t, n) {
            if (typeof e != "string") return [];
            typeof t == "boolean" && (n = t, t = !1);
            var r, o, a;
            return t || (O.createHTMLDocument ? (t = j.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = j.location.href, t.head.appendChild(r)) : t = j), o = ln.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xn([e], t, a), a && a.length && i(a).remove(), i.merge([], o.childNodes))
        }, i.fn.load = function(e, t, n) {
            var r, o, a, u = this,
                l = e.indexOf(" ");
            return l > -1 && (r = $e(e.slice(l)), e = e.slice(0, l)), L(t) ? (n = t, t = void 0) : t && typeof t == "object" && (o = "POST"), u.length > 0 && i.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(f) {
                a = arguments, u.html(r ? i("<div>").append(i.parseHTML(f)).find(r) : f)
            }).always(n && function(f, d) {
                u.each(function() {
                    n.apply(this, a || [f.responseText, d, f])
                })
            }), this
        }, i.expr.pseudos.animated = function(e) {
            return i.grep(i.timers, function(t) {
                return e === t.elem
            }).length
        }, i.offset = {
            setOffset: function(e, t, n) {
                var r, o, a, u, l, f, d, y = i.css(e, "position"),
                    b = i(e),
                    h = {};
                y === "static" && (e.style.position = "relative"), l = b.offset(), a = i.css(e, "top"), f = i.css(e, "left"), d = (y === "absolute" || y === "fixed") && (a + f).indexOf("auto") > -1, d ? (r = b.position(), u = r.top, o = r.left) : (u = parseFloat(a) || 0, o = parseFloat(f) || 0), L(t) && (t = t.call(e, n, i.extend({}, l))), t.top != null && (h.top = t.top - l.top + u), t.left != null && (h.left = t.left - l.left + o), "using" in t ? t.using.call(e, h) : b.css(h)
            }
        }, i.fn.extend({
            offset: function(e) {
                if (arguments.length) return e === void 0 ? this : this.each(function(o) {
                    i.offset.setOffset(this, e, o)
                });
                var t, n, r = this[0];
                if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if (i.css(r, "position") === "fixed") t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && i.css(e, "position") === "static";) e = e.parentNode;
                        e && e !== r && e.nodeType === 1 && (o = i(e).offset(), o.top += i.css(e, "borderTopWidth", !0), o.left += i.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - i.css(r, "marginTop", !0),
                        left: t.left - o.left - i.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && i.css(e, "position") === "static";) e = e.offsetParent;
                    return e || _e
                })
            }
        }), i.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = t === "pageYOffset";
            i.fn[e] = function(r) {
                return Oe(this, function(o, a, u) {
                    var l;
                    if (ae(o) ? l = o : o.nodeType === 9 && (l = o.defaultView), u === void 0) return l ? l[t] : o[a];
                    l ? l.scrollTo(n ? l.pageXOffset : u, n ? u : l.pageYOffset) : o[a] = u
                }, e, r, arguments.length)
            }
        }), i.each(["top", "left"], function(e, t) {
            i.cssHooks[t] = Dn(O.pixelPosition, function(n, r) {
                if (r) return r = ot(n, t), $t.test(r) ? i(n).position()[t] + "px" : r
            })
        }), i.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            i.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                i.fn[r] = function(o, a) {
                    var u = arguments.length && (n || typeof o != "boolean"),
                        l = n || (o === !0 || a === !0 ? "margin" : "border");
                    return Oe(this, function(f, d, y) {
                        var b;
                        return ae(f) ? r.indexOf("outer") === 0 ? f["inner" + e] : f.document.documentElement["client" + e] : f.nodeType === 9 ? (b = f.documentElement, Math.max(f.body["scroll" + e], b["scroll" + e], f.body["offset" + e], b["offset" + e], b["client" + e])) : y === void 0 ? i.css(f, d, l) : i.style(f, d, y, l)
                    }, t, u ? o : void 0, u)
                }
            })
        }), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            i.fn[t] = function(n) {
                return this.on(t, n)
            }
        }), i.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            i.fn[t] = function(n, r) {
                return arguments.length > 0 ? this.on(t, null, n, r) : this.trigger(t)
            }
        });
        var ui = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        i.proxy = function(e, t) {
            var n, r, o;
            if (typeof t == "string" && (n = e[t], t = e, e = n), !!L(e)) return r = G.call(arguments, 2), o = function() {
                return e.apply(t || this, r.concat(G.call(arguments)))
            }, o.guid = e.guid = e.guid || i.guid++, o
        }, i.holdReady = function(e) {
            e ? i.readyWait++ : i.ready(!0)
        }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = V, i.isFunction = L, i.isWindow = ae, i.camelCase = Se, i.type = Z, i.now = Date.now, i.isNumeric = function(e) {
            var t = i.type(e);
            return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
        }, i.trim = function(e) {
            return e == null ? "" : (e + "").replace(ui, "$1")
        };
        var si = x.jQuery,
            fi = x.$;
        return i.noConflict = function(e) {
            return x.$ === i && (x.$ = fi), e && x.jQuery === i && (x.jQuery = si), i
        }, typeof w > "u" && (x.jQuery = x.$ = i), i
    })
})(or);
var Ai = or.exports;
const To = bi(Ai);
var Ni = typeof global == "object" && global && global.Object === Object && global;
const ki = Ni;
var Oi = typeof self == "object" && self && self.Object === Object && self,
    Li = ki || Oi || Function("return this")();
const ar = Li;
var Pi = ar.Symbol;
const Lt = Pi;
var ur = Object.prototype,
    Hi = ur.hasOwnProperty,
    Ii = ur.toString,
    ct = Lt ? Lt.toStringTag : void 0;

function Mi(m) {
    var x = Hi.call(m, ct),
        w = m[ct];
    try {
        m[ct] = void 0;
        var N = !0
    } catch {}
    var H = Ii.call(m);
    return N && (x ? m[ct] = w : delete m[ct]), H
}
var qi = Object.prototype,
    Ri = qi.toString;

function _i(m) {
    return Ri.call(m)
}
var $i = "[object Null]",
    Wi = "[object Undefined]",
    Jn = Lt ? Lt.toStringTag : void 0;

function zi(m) {
    return m == null ? m === void 0 ? Wi : $i : Jn && Jn in Object(m) ? Mi(m) : _i(m)
}

function Fi(m) {
    return m != null && typeof m == "object"
}
var Bi = "[object Symbol]";

function Ui(m) {
    return typeof m == "symbol" || Fi(m) && zi(m) == Bi
}
var Xi = /\s/;

function Vi(m) {
    for (var x = m.length; x-- && Xi.test(m.charAt(x)););
    return x
}
var Gi = /^\s+/;

function Qi(m) {
    return m && m.slice(0, Vi(m) + 1).replace(Gi, "")
}

function Pt(m) {
    var x = typeof m;
    return m != null && (x == "object" || x == "function")
}
var Kn = 0 / 0,
    Yi = /^[-+]0x[0-9a-f]+$/i,
    Ji = /^0b[01]+$/i,
    Ki = /^0o[0-7]+$/i,
    Zi = parseInt;

function pt(m) {
    if (typeof m == "number") return m;
    if (Ui(m)) return Kn;
    if (Pt(m)) {
        var x = typeof m.valueOf == "function" ? m.valueOf() : m;
        m = Pt(x) ? x + "" : x
    }
    if (typeof m != "string") return m === 0 ? m : +m;
    m = Qi(m);
    var w = Ji.test(m);
    return w || Ki.test(m) ? Zi(m.slice(2), w ? 2 : 8) : Yi.test(m) ? Kn : +m
}

function eo(m, x, w) {
    return m === m && (w !== void 0 && (m = m <= w ? m : w), x !== void 0 && (m = m >= x ? m : x)), m
}

function Dt(m, x, w) {
    return w === void 0 && (w = x, x = void 0), w !== void 0 && (w = pt(w), w = w === w ? w : 0), x !== void 0 && (x = pt(x), x = x === x ? x : 0), eo(pt(m), x, w)
}
var to = function() {
    return ar.Date.now()
};
const an = to;
var no = "Expected a function",
    ro = Math.max,
    io = Math.min;

function sr(m, x, w) {
    var N, H, G, $, B, R, Y = 0,
        Q = !1,
        ne = !1,
        ie = !0;
    if (typeof m != "function") throw new TypeError(no);
    x = pt(x) || 0, Pt(w) && (Q = !!w.leading, ne = "maxWait" in w, G = ne ? ro(pt(w.maxWait) || 0, x) : G, ie = "trailing" in w ? !!w.trailing : ie);

    function be(P) {
        var i = N,
            ee = H;
        return N = H = void 0, Y = P, $ = m.apply(ee, i), $
    }

    function O(P) {
        return Y = P, B = setTimeout(j, x), Q ? be(P) : $
    }

    function L(P) {
        var i = P - R,
            ee = P - Y,
            V = x - i;
        return ne ? io(V, G - ee) : V
    }

    function ae(P) {
        var i = P - R,
            ee = P - Y;
        return R === void 0 || i >= x || i < 0 || ne && ee >= G
    }

    function j() {
        var P = an();
        if (ae(P)) return Ae(P);
        B = setTimeout(j, L(P))
    }

    function Ae(P) {
        return B = void 0, ie && N ? be(P) : (N = H = void 0, $)
    }

    function Ne() {
        B !== void 0 && clearTimeout(B), Y = 0, N = R = H = B = void 0
    }

    function Z() {
        return B === void 0 ? $ : Ae(an())
    }

    function ue() {
        var P = an(),
            i = ae(P);
        if (N = arguments, H = this, R = P, i) {
            if (B === void 0) return O(R);
            if (ne) return clearTimeout(B), B = setTimeout(j, x), be(R)
        }
        return B === void 0 && (B = setTimeout(j, x)), $
    }
    return ue.cancel = Ne, ue.flush = Z, ue
}
var oo = "Expected a function";

function fr(m, x, w) {
    var N = !0,
        H = !0;
    if (typeof m != "function") throw new TypeError(oo);
    return Pt(w) && (N = "leading" in w ? !!w.leading : N, H = "trailing" in w ? !!w.trailing : H), sr(m, x, {
        leading: N,
        maxWait: x,
        trailing: H
    })
}
var ao = Object.defineProperty,
    uo = Object.defineProperties,
    so = Object.getOwnPropertyDescriptors,
    Zn = Object.getOwnPropertySymbols,
    fo = Object.prototype.hasOwnProperty,
    lo = Object.prototype.propertyIsEnumerable,
    er = (m, x, w) => x in m ? ao(m, x, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: w
    }) : m[x] = w,
    Ht = (m, x) => {
        for (var w in x || (x = {})) fo.call(x, w) && er(m, w, x[w]);
        if (Zn)
            for (var w of Zn(x)) lo.call(x, w) && er(m, w, x[w]);
        return m
    },
    lr = (m, x) => uo(m, so(x));
const co = ["onPointerdown"],
    po = {
        name: "ScrollbarThumb"
    };

function ho(m, {
    expose: x
}) {
    const w = m;
    let N = null,
        H = Ie(null);
    const G = {
        pageX: 0,
        pageY: 0,
        scrollPos: 0
    };
    let $ = null;
    const B = () => {
            N = setTimeout(() => {
                H.value && H.value.classList.remove("scrollbar__thumbPlaceholder--scrolling"), N = null
            }, w.autoHideDelay)
        },
        R = () => {
            N !== null && clearTimeout(N)
        };
    un(R);
    const Y = fr(P => {
            P.stopPropagation(), P.preventDefault();
            const i = w.type === "horizontal" ? "pageX" : "pageY",
                ee = (P[i] - G[i]) / w.scrollInfo.wrapperMainSize * w.scrollInfo.contentMainSize;
            w.wrapperEl.scrollTo({
                [w.type === "horizontal" ? "left" : "top"]: G.scrollPos + ee,
                behavior: "auto"
            })
        }, 16),
        Q = () => {
            B(), H.value.removeEventListener("pointermove", Y), H.value.removeEventListener("pointerup", Q), H.value.removeEventListener("pointercancel", Q), H.value.removeEventListener("mousewheel", Q), document.removeEventListener("mousewheel", Q), typeof $ == "number" && H.value.releasePointerCapture($), $ = null
        },
        ne = P => {
            P.ctrlKey || P.button !== 0 || (R(), G.pageX = P.pageX, G.pageY = P.pageY, G.scrollPos = w.wrapperEl[w.type === "horizontal" ? "scrollLeft" : "scrollTop"], $ = P == null ? void 0 : P.pointerId, H.value.setPointerCapture($), H.value.addEventListener("pointermove", Y), H.value.addEventListener("pointerup", Q), H.value.addEventListener("pointercancel", Q), H.value.addEventListener("mousewheel", Q, {
                passive: !1
            }), document.addEventListener("mousewheel", Q, {
                passive: !1
            }), H.value.classList.add("scrollbar__thumbPlaceholder--scrolling"))
        };
    x({
        autoHideAfterScroll: () => {
            R(), H.value && H.value.classList.add("scrollbar__thumbPlaceholder--scrolling"), B()
        }
    });
    let be = Ie(!1),
        O = Ie(!1),
        L = Ie(null),
        ae = null,
        j = null,
        Ae = dt(() => w.fixedThumb && !O.value);
    const Ne = ([P]) => O.value = P.isIntersecting,
        Z = ([P]) => be.value = P.isIntersecting,
        ue = () => {
            ae && (ae.disconnect(), ae = null), j && (j.disconnect(), j = null)
        };
    return jt(() => [w.fixedThumb, w.wrapperEl], () => {
        if (!w.fixedThumb || !w.wrapperEl) return ue();
        ue(), j = new IntersectionObserver(Z, {
            threshold: [0, .5]
        }), j.observe(w.wrapperEl), ae = new IntersectionObserver(Ne), ae.observe(L.value)
    }), un(ue), (P, i) => (Nt(), kt(ir, null, [Gn(Ot("div", {
        class: At(["scrollbar__thumbPlaceholder", `scrollbar__thumbPlaceholder--${m.type}`, {
            ["scrollbar__thumbPlaceholder--autoHide"]: m.autoHide,
            ["scrollbar__thumbPlaceholder--autoExpand"]: m.autoExpand
        }]),
        style: rr({
            width: m.type === "horizontal" ? `${m.scrollInfo.thumbSize}px` : "",
            height: m.type === "vertical" ? `${m.scrollInfo.thumbSize}px` : "",
            position: Ae.value ? "fixed" : "absolute",
            [m.type === "vertical" ? "top" : "left"]: Ae.value ? `${m.scrollInfo.boundaryDistance+3}px` : "3px"
        }),
        ref: (ee, V) => {
            V.thumbEl = ee, H.value = ee
        },
        onPointerdown: mi(ne, ["stop"])
    }, [i[0] || (Yn(-1), i[0] = Ot("div", {
        class: At(["scrollbar__thumb", `scrollbar__thumb--${m.type}`])
    }, null, 2), Yn(1), i[0])], 46, co), [
        [Qn, !!m.scrollInfo.thumbSize && (m.fixedThumb ? be.value : !0)]
    ]), w.fixedThumb ? Gn((Nt(), kt("div", {
        key: 0,
        ref: (ee, V) => {
            V.shepherdEl = ee, L.value = ee
        },
        class: At(["scrollbar__shepherd", `scrollbar__shepherd--${m.type}`])
    }, null, 2)), [
        [Qn, !!m.scrollInfo.thumbSize]
    ]) : xi("", !0)], 64))
}
const go = nr(lr(Ht({}, po), {
        props: {
            type: null,
            autoExpand: null,
            autoHide: null,
            autoHideDelay: null,
            fixedThumb: null,
            scrollInfo: null,
            wrapperEl: null
        },
        setup: ho
    })),
    yo = {
        wait: 333,
        type: "debounce"
    };

function tr(...m) {
    const x = "value" in (m == null ? void 0 : m[0]);
    let w;
    x ? w = m == null ? void 0 : m[1] : w = m == null ? void 0 : m[0];
    const {
        wait: N,
        type: H,
        callback: G
    } = Ht(Ht({}, yo), w), $ = x ? m[0] : Ie(null), B = Di({
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
        x: 0,
        y: 0
    }), R = () => {
        const ie = $.value.getBoundingClientRect();
        B.left = ie.left, B.top = ie.top, B.right = ie.right, B.bottom = ie.bottom, B.width = ie.width, B.height = ie.height, B.x = ie.x, B.y = ie.y, G == null || G()
    };
    let Y = null,
        Q = null;
    const ne = () => {
        Y && window.removeEventListener("resize", Y), Q && (Q.disconnect(), Q = null)
    };
    return ji(() => {
        $.value && (ne(), Y = R, H === "throttle" && N >= 4 ? Y = fr(Y, N) : H === "debounce" && N >= 4 && (Y = sr(Y, N)), window.addEventListener("resize", Y), Q = new ResizeObserver(Y), Q.observe($.value))
    }), un(ne), x ? B : [$, B]
}
const vo = {
        class: "scrollbar__wrapper"
    },
    bo = {
        name: "CustomScrollbar",
        inheritAttrs: !1
    };

function mo(m, {
    expose: x,
    emit: w
}) {
    const N = m,
        H = {
            horizontal: {
                el: null,
                instance: null
            },
            vertical: {
                el: null,
                instance: null
            }
        },
        G = (Z, ue) => {
            H[ue].instance || (H[ue].instance = Z)
        };
    let $ = Ie(null),
        B = Ie(null);
    Ti(() => {
        var Z;
        const ue = Array.from((Z = $.value.parentElement) == null ? void 0 : Z.childNodes);
        for (const P in H) H[P].el = ue.find(i => {
            var ee;
            return (ee = i == null ? void 0 : i.classList) == null ? void 0 : ee.contains(`scrollbar__thumbPlaceholder--${P}`)
        })
    });
    const R = tr($, {
            wait: N.throttleWait,
            type: N.throttleType,
            callback: ie
        }),
        Y = tr(B, {
            wait: N.throttleWait,
            type: N.throttleType,
            callback: ie
        });
    let Q = Ie(0),
        ne = Ie(0);

    function ie() {
        Q.value = Math.max($.value.scrollHeight - R.height | 0, 0), ne.value = Math.max($.value.scrollWidth - R.width | 0, 0)
    }
    let be = dt(() => ({
            thumbSize: ne.value ? Dt(R.width / $.value.scrollWidth * R.width, N.thumbMinSize > R.width ? 48 : N.thumbMinSize, N.thumbMaxSize) : 0,
            contentMainSize: Y.width,
            wrapperMainSize: R.width,
            boundaryDistance: Math.abs(R.left)
        })),
        O = dt(() => ({
            thumbSize: Q.value ? Dt(R.height / $.value.scrollHeight * R.height, N.thumbMinSize > R.height ? 48 : N.thumbMinSize, N.thumbMaxSize) : 0,
            contentMainSize: Y.height,
            wrapperMainSize: R.height,
            boundaryDistance: Math.abs(R.top)
        })),
        L = dt(() => R.height - O.value.thumbSize - 5),
        ae = dt(() => R.width - be.value.thumbSize - 5);
    const j = () => {
        ne.value && (H.horizontal.el.style.transform = `translate3d(${$.value.scrollLeft/ne.value*ae.value}px, 0, 0)`, H.horizontal.instance.autoHideAfterScroll()), Q.value && (H.vertical.el.style.transform = `translate3d(0, ${$.value.scrollTop/Q.value*L.value}px, 0)`, H.vertical.instance.autoHideAfterScroll())
    };
    jt(() => [ne.value, Q.value], j);
    const Ae = Z => {
            Z.stopPropagation();
            const ue = $.value.scrollLeft,
                P = $.value.scrollTop,
                i = Dt(ue + ((Z == null ? void 0 : Z.deltaX) || 0), 0, ne.value) | 0,
                ee = Dt(P + ((Z == null ? void 0 : Z.deltaY) || 0), 0, Q.value) | 0;
            $.value.scrollLeft = i, $.value.scrollTop = ee, ne.value && (H.horizontal.el.style.transform = `translate3d(${i/ne.value*ae.value}px, 0, 0)`, H.horizontal.instance.autoHideAfterScroll()), Q.value && (H.vertical.el.style.transform = `translate3d(0, ${ee/Q.value*L.value}px, 0)`, H.vertical.instance.autoHideAfterScroll()), w("scroll", {
                target: $.value,
                scrollLeft: i,
                scrollTop: ee
            })
        },
        Ne = Z => {
            N.simulateScroll ? Ae(Z) : j()
        };
    return jt(R, () => w("wrapperResize", R)), jt(Y, () => w("contentResize", Y)), x({
        scrollEl: $
    }), (Z, ue) => (Nt(), kt("div", vo, [Ot("div", wi({
        ref: (P, i) => {
            i.wrapperEl = P, $.value = P
        },
        class: "scrollbar__scroller"
    }, Z.$attrs, {
        onWheel: Ne,
        onScroll: Ne
    }), [Ot("div", {
        ref: (P, i) => {
            i.contentEl = P, B.value = P
        },
        class: At(["scrollbar__content", m.contentClass, {
            ["scrollbar__content--fixedThumb"]: m.fixedThumb,
            [`scrollbar__content--${m.direction}`]: m.direction
        }]),
        style: rr(m.contentStyle)
    }, [Si(Z.$slots, "default")], 6)], 16), (Nt(), kt(ir, null, Ci(H, (P, i) => Ei(go, {
        ref: ee => G(ee, i),
        key: i,
        autoExpand: m.autoExpand,
        autoHide: m.autoHide,
        autoHideDelay: m.autoHideDelay,
        fixedThumb: i === m.direction ? !1 : m.fixedThumb,
        type: i,
        scrollInfo: i === "vertical" ? O.value : be.value,
        wrapperEl: $.value
    }, null, 8, ["autoExpand", "autoHide", "autoHideDelay", "fixedThumb", "type", "scrollInfo", "wrapperEl"])), 64))]))
}
const So = nr(lr(Ht({}, bo), {
    props: {
        contentClass: null,
        contentStyle: null,
        direction: {
            default: "vertical"
        },
        thumbMinSize: {
            default: 48
        },
        thumbMaxSize: {
            default: 1 / 0
        },
        autoHide: {
            default: !0
        },
        autoHideDelay: {
            default: 900
        },
        autoExpand: {
            default: !0
        },
        fixedThumb: null,
        throttleType: {
            default: "debounce"
        },
        throttleWait: {
            default: 333
        },
        simulateScroll: null
    },
    emits: ["wrapperResize", "contentResize", "scroll"],
    setup: mo
}));
export {
    So as _, To as j
};