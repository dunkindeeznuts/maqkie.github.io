;(self.AMP = self.AMP || []).push({
    m: 0,
    v: "2209142312000",
    n: "amp-bind",
    ev: "0.1",
    l: !0,
    f: function(t, n) {
        !function() {
            function n(t, r) {
                return (n = Object.setPrototypeOf || function(t, n) {
                    return t.__proto__ = n,
                    t
                }
                )(t, r)
            }
            function r(t, r) {
                if ("function" != typeof r && null !== r)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(r && r.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                r && n(t, r)
            }
            function i(t) {
                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(t)
            }
            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function u(t, n) {
                if (n && ("object" === e(n) || "function" == typeof n))
                    return n;
                if (void 0 !== n)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }
            function o(t) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, e = i(t);
                    if (n) {
                        var o = i(this).constructor;
                        r = Reflect.construct(e, arguments, o)
                    } else
                        r = e.apply(this, arguments);
                    return u(this, r)
                }
            }
            function s(t) {
                return t ? Array.prototype.slice.call(t) : []
            }
            var a = Array.isArray;
            function l(t, n) {
                for (var r = [], i = 0, e = 0; e < t.length; e++) {
                    var u = t[e];
                    n(u, e, t) ? r.push(u) : (i < e && (t[i] = u),
                    i++)
                }
                return i < t.length && (t.length = i),
                r
            }
            function f(t, n) {
                for (var r = 0; r < t.length; r++)
                    if (n(t[r], r, t))
                        return r;
                return -1
            }
            function c(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var r = 0, i = new Array(n); r < n; r++)
                    i[r] = t[r];
                return i
            }
            var h = Object.prototype
              , v = h.hasOwnProperty
              , d = h.toString;
            function p(t) {
                return "[object Object]" === d.call(t)
            }
            function m(t) {
                var n = Object.create(null);
                return t && Object.assign(n, t),
                n
            }
            function b(t, n) {
                return v.call(t, n)
            }
            function w(t, n) {
                return b(t, n) ? t[n] : void 0
            }
            function y(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10
                  , i = []
                  , e = [];
                for (e.push({
                    t: t,
                    s: n,
                    d: 0
                }); e.length > 0; ) {
                    var u = e.shift()
                      , o = u.d
                      , s = u.s
                      , a = u.t;
                    if (i.includes(s))
                        throw new Error("Source object has a circular reference.");
                    if (i.push(s),
                    a !== s)
                        if (o > r)
                            Object.assign(a, s);
                        else
                            for (var l = 0, f = Object.keys(s); l < f.length; l++) {
                                var c = f[l]
                                  , h = s[c];
                                if (b(a, c)) {
                                    var v = a[c];
                                    if (p(h) && p(v)) {
                                        e.push({
                                            t: v,
                                            s: h,
                                            d: o + 1
                                        });
                                        continue
                                    }
                                }
                                a[c] = h
                            }
                }
                return t
            }
            function g(t, n) {
                if ("." == n)
                    return t;
                for (var r, i = t, u = function(t, n) {
                    var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (r)
                        return (r = r.call(t)).next.bind(r);
                    if (Array.isArray(t) || (r = function(t, n) {
                        if (t) {
                            if ("string" == typeof t)
                                return c(t, n);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === r && t.constructor && (r = t.constructor.name),
                            "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(t, n) : void 0
                        }
                    }(t)) || t && "number" == typeof t.length) {
                        r && (t = r);
                        var i = 0;
                        return function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }(n.split(".")); !(r = u()).done; ) {
                    var o = r.value;
                    if (!(o && i && void 0 !== i[o] && "object" == e(i) && b(i, o))) {
                        i = void 0;
                        break
                    }
                    i = i[o]
                }
                return i
            }
            function P(t) {
                return "number" == typeof t && isFinite(t)
            }
            var A = "​​​";
            function S(t) {
                return 1 == (null == (n = t) ? void 0 : n.nodeType) ? (t = t).tagName.toLowerCase() + (t.id ? "#".concat(t.id) : "") : t;
                var n
            }
            function E(t) {
                return t.indexOf(A) >= 0
            }
            function O(t, n, r, i, e, u, o, s, a, l, f) {
                return t
            }
            function M(t, n, r, i, e, u, o, s, a, f, c) {
                return function(t, n) {
                    var r, i, e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Assertion failed";
                    if (n)
                        return n;
                    t && -1 == e.indexOf(t) && (e += t);
                    for (var u = 3, o = e.split("%s"), s = o.shift(), a = [s]; o.length; ) {
                        var f = arguments[u++]
                          , c = o.shift();
                        s += S(f) + c,
                        a.push(f, c.trim())
                    }
                    var h = new Error(s);
                    throw h.messageArray = l(a, (function(t) {
                        return "" !== t
                    }
                    )),
                    null === (r = (i = self).__AMP_REPORT_ERROR) || void 0 === r || r.call(i, h),
                    h
                }(A, t, n, r, i, e, u, o, s, a, f, c)
            }
            var T, x = function(t) {
                r(i, t);
                var n = o(i);
                function i() {
                    return n.apply(this, arguments)
                }
                var e = i.prototype;
                return e.getLayoutPriority = function() {
                    return 1
                }
                ,
                e.isAlwaysFixed = function() {
                    return !0
                }
                ,
                e.isLayoutSupported = function(t) {
                    return !0
                }
                ,
                e.renderOutsideViewport = function() {
                    return !0
                }
                ,
                e.ve = function() {
                    return "<amp-bind-macro> " + (this.element.getAttribute("id") || "<unknown id>")
                }
                ,
                i
            }(t.BaseElement);
            function R() {
                return T || (T = Promise.resolve(void 0))
            }
            var I = function() {
                var t = this;
                this.promise = new Promise((function(n, r) {
                    t.resolve = n,
                    t.reject = r
                }
                ))
            };
            function k(t) {
                return JSON.parse(t)
            }
            var N, j = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;
            function U(t, n, r, i, e) {
                return e || (n ? "�" : i ? t.slice(0, -1) + "\\" + t.slice(-1).charCodeAt(0).toString(16) + " " : "\\" + t)
            }
            function C(t, n) {
                return t.closest ? t.closest(n) : function(t, n, r) {
                    var i;
                    for (i = t; i && void 0 !== i; i = i.parentElement)
                        if (n(i))
                            return i;
                    return null
                }(t, (function(t) {
                    return function(t, n) {
                        var r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector;
                        return !!r && r.call(t, n)
                    }(t, n)
                }
                ))
            }
            var L = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];
            function D(t, n, r, i, e) {
                var u = function(t, n, r) {
                    if (n.startsWith("--"))
                        return n;
                    N || (N = m());
                    var i = N[n];
                    if (!i || r) {
                        if (i = n,
                        void 0 === t[n]) {
                            var e = function(t) {
                                return t.charAt(0).toUpperCase() + t.slice(1)
                            }(n)
                              , u = function(t, n) {
                                for (var r = 0; r < L.length; r++) {
                                    var i = L[r] + n;
                                    if (void 0 !== t[i])
                                        return i
                                }
                                return ""
                            }(t, e);
                            void 0 !== t[u] && (i = u)
                        }
                        r || (N[n] = i)
                    }
                    return i
                }(t.style, n, e);
                if (u) {
                    var o, s = i ? r + i : r;
                    t.style.setProperty((o = u.replace(/[A-Z]/g, (function(t) {
                        return "-" + t.toLowerCase()
                    }
                    )),
                    L.some((function(t) {
                        return o.startsWith(t + "-")
                    }
                    )) ? "-".concat(o) : o), s)
                }
            }
            var _ = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
            function F(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                try {
                    return decodeURIComponent(t)
                } catch (t) {
                    return n
                }
            }
            function B(t) {
                var n, r = m();
                if (!t)
                    return r;
                for (; n = _.exec(t); ) {
                    var i = F(n[1], n[1])
                      , e = n[2] ? F(n[2].replace(/\+/g, " "), n[2]) : "";
                    r[i] = e
                }
                return r
            }
            function J(t) {
                var n = (t || self).location;
                return B(n.originalHash || n.hash)
            }
            var G = "";
            function z(t) {
                var n = t || self;
                return n.__AMP_MODE ? n.__AMP_MODE : n.__AMP_MODE = function(t) {
                    return {
                        localDev: !1,
                        development: W(t, J(t)),
                        esm: !1,
                        test: !1,
                        rtvVersion: V(t),
                        ssrReady: !1
                    }
                }(n)
            }
            function V(t) {
                var n;
                return G || (G = (null === (n = t.AMP_CONFIG) || void 0 === n ? void 0 : n.v) || "01".concat("2209142312000")),
                G
            }
            function W(t, n) {
                var r = n || J(t);
                return ["1", "actions", "amp", "amp4ads", "amp4email"].includes(r.development) || !!t.AMP_DEV_MODE
            }
            var $ = function() {
                return self.AMP.config.urls
            }();
            self.__AMP_LOG = self.__AMP_LOG || {
                user: null,
                dev: null,
                userForEmbed: null
            };
            var q = self.__AMP_LOG;
            function X(t, n) {
                throw new Error("failed to call initLogConstructor")
            }
            function H(t) {
                return q.user || (q.user = K()),
                function(t, n) {
                    return n && n.ownerDocument.defaultView != t
                }(q.user.win, t) ? q.userForEmbed || (q.userForEmbed = K()) : q.user
            }
            function K(t) {
                return X()
            }
            function Y() {
                return q.dev || (q.dev = X())
            }
            function Z(t, n, r, i, e, u, o, s, a, l, f) {
                return t
            }
            function Q(t, n, r, i, e, u, o, s, a, l, f) {
                return H().assert(t, n, r, i, e, u, o, s, a, l, f)
            }
            function tt(t, n) {
                return at(t = ut(t), n)
            }
            function nt(t, n) {
                return at(st(ot(t)), n)
            }
            function rt(t, n) {
                var r = st(ot(t));
                return ht(r, n) ? at(r, n) : null
            }
            function it(t, n) {
                return function(t, n) {
                    var r = ft(t, n);
                    if (r)
                        return r;
                    var i, e, u, o, s = ct(t);
                    return s[n] = (e = (i = new I).promise,
                    u = i.reject,
                    o = i.resolve,
                    e.catch((function() {}
                    )),
                    {
                        obj: null,
                        promise: e,
                        resolve: o,
                        reject: u,
                        context: null,
                        ctor: null
                    }),
                    s[n].promise
                }(st(t), n)
            }
            function et(t, n) {
                return ft(st(t), n)
            }
            function ut(t) {
                return t.__AMP_TOP || (t.__AMP_TOP = t)
            }
            function ot(t) {
                return t.nodeType ? (r = t,
                n = (r.ownerDocument || r).defaultView,
                tt(n, "ampdoc")).getAmpDoc(t) : t;
                var n, r
            }
            function st(t) {
                var n = ot(t);
                return n.isSingleDoc() ? n.win : n
            }
            function at(t, n) {
                Z(ht(t, n));
                var r = ct(t)[n];
                return r.obj || (Z(r.ctor),
                Z(r.context),
                r.obj = new r.ctor(r.context),
                Z(r.obj),
                r.context = null,
                r.resolve && r.resolve(r.obj)),
                r.obj
            }
            function lt(t, n, r, i, e, u) {
                var o = ct(t)
                  , s = o[r];
                s || (s = o[r] = {
                    obj: null,
                    promise: null,
                    resolve: null,
                    reject: null,
                    context: null,
                    ctor: null,
                    sharedInstance: u || !1
                }),
                !e && s.ctor || (s.ctor = i,
                s.context = n,
                s.sharedInstance = u || !1,
                s.resolve && at(t, r))
            }
            function ft(t, n) {
                var r = ct(t)[n];
                return r ? r.promise ? r.promise : (at(t, n),
                r.promise = Promise.resolve(r.obj)) : null
            }
            function ct(t) {
                var n = t.__AMP_SERVICES;
                return n || (n = t.__AMP_SERVICES = {}),
                n
            }
            function ht(t, n) {
                var r = t.__AMP_SERVICES && t.__AMP_SERVICES[n];
                return !(!r || !r.ctor)
            }
            var vt = function(t) {
                return tt(t, "batched-xhr")
            }
              , dt = function(t) {
                return function(t, n, r) {
                    var i = rt(t, n);
                    return i ? Promise.resolve(i) : function(t, n, r, i) {
                        var e = et(t, n);
                        if (e)
                            return e;
                        var u = ot(t);
                        return u.whenExtensionsKnown().then((function() {
                            var t = u.getExtensionVersion(r);
                            return t ? tt(u.win, "extensions").waitForExtension(r, t) : null
                        }
                        )).then((function(r) {
                            return r ? it(t, n) : null
                        }
                        ))
                    }(t, n, r)
                }(t, "bind", "amp-bind")
            }
              , pt = function(t) {
                return nt(t, "viewer")
            }
              , mt = function(t) {
                return tt(t, "xhr")
            };
            function bt(t, n, r, i) {
                var e = {
                    detail: r
                };
                if (Object.assign(e, i),
                "function" == typeof t.CustomEvent)
                    return new t.CustomEvent(n,e);
                var u = t.document.createEvent("CustomEvent");
                return u.initCustomEvent(n, !!e.bubbles, !!e.cancelable, r),
                u
            }
            function wt(t) {
                return t.detail
            }
            var yt, gt, Pt = function() {
                function t(t) {
                    this.G = t,
                    this.K = 0,
                    this.Y = 0,
                    this.rr = m()
                }
                var n = t.prototype;
                return n.has = function(t) {
                    return !!this.rr[t]
                }
                ,
                n.get = function(t) {
                    var n = this.rr[t];
                    if (n)
                        return n.access = ++this.Y,
                        n.payload
                }
                ,
                n.put = function(t, n) {
                    this.has(t) || this.K++,
                    this.rr[t] = {
                        payload: n,
                        access: this.Y
                    },
                    this.nr()
                }
                ,
                n.nr = function() {
                    if (!(this.K <= this.G)) {
                        var t, n = this.rr, r = this.Y + 1;
                        for (var i in n) {
                            var e = n[i].access;
                            e < r && (r = e,
                            t = i)
                        }
                        void 0 !== t && (delete n[t],
                        this.K--)
                    }
                }
                ,
                t
            }(), At = function() {
                return self.AMP.config.urls
            }(), St = new Set(["c", "v", "a", "ad"]), Et = function(t) {
                return "string" == typeof t ? Ot(t) : t
            };
            function Ot(t, n) {
                return yt || (yt = self.document.createElement("a"),
                gt = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new Pt(100))),
                function(t, n, r) {
                    if (r && r.has(n))
                        return r.get(n);
                    t.href = n,
                    t.protocol || (t.href = t.href);
                    var i, e = {
                        href: t.href,
                        protocol: t.protocol,
                        host: t.host,
                        hostname: t.hostname,
                        port: "0" == t.port ? "" : t.port,
                        pathname: t.pathname,
                        search: t.search,
                        hash: t.hash,
                        origin: null
                    };
                    "/" !== e.pathname[0] && (e.pathname = "/" + e.pathname),
                    ("http:" == e.protocol && 80 == e.port || "https:" == e.protocol && 443 == e.port) && (e.port = "",
                    e.host = e.hostname),
                    i = t.origin && "null" != t.origin ? t.origin : "data:" != e.protocol && e.host ? e.protocol + "//" + e.host : e.href,
                    e.origin = i;
                    var u = e;
                    return r && r.put(n, u),
                    u
                }(yt, t, n ? null : gt)
            }
            function Mt(t) {
                return "https:" == (t = Et(t)).protocol || "localhost" == t.hostname || "127.0.0.1" == t.hostname || (r = ".localhost",
                (i = (n = t.hostname).length - r.length) >= 0 && n.indexOf(r, i) == i);
                var n, r, i
            }
            function Tt(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "source";
                return Q(null != t, "%s %s must be available", n, r),
                Q(Mt(t) || /^\/\//.test(t), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', n, r, t),
                t
            }
            function xt(t) {
                return At.cdnProxyRegex.test(Et(t).origin)
            }
            function Rt(t) {
                if (!xt(t = Et(t)))
                    return t.href;
                var n = t.pathname.split("/")
                  , r = n[1];
                Q(St.has(r), "Unknown path prefix in url %s", t.href);
                var i = n[2]
                  , e = "s" == i ? "https://" + decodeURIComponent(n[3]) : "http://" + decodeURIComponent(i);
                return Q(e.indexOf(".") > 0, "Expected a . in origin %s", e),
                n.splice(1, "s" == i ? 3 : 2),
                e + n.join("/") + function(t, n) {
                    if (!t || "?" == t)
                        return "";
                    var r = new RegExp("[?&]".concat("(amp_(js[^&=]*|gsa|r|kit)|usqp)", "\\b[^&]*"),"g")
                      , i = t.replace(r, "").replace(/^[?&]/, "");
                    return i ? "?" + i : ""
                }(t.search) + (t.hash || "")
            }
            function It(t) {
                return Ot(Rt(t)).origin
            }
            function kt(t, n) {
                return n = Et(n),
                "function" == typeof URL ? new URL(t,n.href).toString() : function(t, n) {
                    n = Et(n);
                    var r = Ot(t = t.replace(/\\/g, "/"));
                    return t.toLowerCase().startsWith(r.protocol) ? r.href : t.startsWith("//") ? n.protocol + t : t.startsWith("/") ? n.origin + t : n.origin + n.pathname.replace(/\/[^/]*$/, "/") + t
                }(t, n)
            }
            function Nt(t, n, r, i) {
                var e = function(t) {
                    return rt(t, "url-replace")
                }(t);
                return (r >= 1 ? e.expandUrlAsync(n) : Promise.resolve(n)).then((function(n) {
                    if (1 === r) {
                        var u = e.collectDisallowedVarsSync(t);
                        if (u.length > 0)
                            throw H().createError("URL variable substitutions in CORS fetches from dynamic URLs (e.g. via amp-bind) require opt-in. " + 'Please add data-amp-replace="'.concat(u.join(" "), '" to the ') + "<".concat(t.tagName, "> element. See https://bit.ly/amp-var-subs."))
                    }
                    var o = {};
                    return t.hasAttribute("credentials") && (o.credentials = t.getAttribute("credentials")),
                    i && (o.cache = "reload"),
                    {
                        "xhrUrl": n,
                        "fetchOpt": o
                    }
                }
                ))
            }
            var jt = function(t) {
                r(i, t);
                var n = o(i);
                function i(t) {
                    var r;
                    return (r = n.call(this, t)).Bgt = void 0,
                    r.Wgt = new I,
                    r
                }
                var e = i.prototype;
                return e.getLayoutPriority = function() {
                    return 1
                }
                ,
                e.isAlwaysFixed = function() {
                    return !0
                }
                ,
                e.isLayoutSupported = function(t) {
                    return !0
                }
                ,
                e.buildCallback = function() {
                    var t = this;
                    !function(t, n) {
                        void 0 === n && (n = t.hasAttribute("hidden")),
                        n ? t.removeAttribute("hidden") : t.setAttribute("hidden", "")
                    }(this.element, !1),
                    this.element.setAttribute("aria-hidden", "true");
                    var n = this.element;
                    n.hasAttribute("overridable") && dt(n).then((function(t) {
                        Z(t),
                        t.addOverridableKey(n.getAttribute("id"))
                    }
                    )),
                    this.parseAndUpdate(),
                    this.element.hasAttribute("src") && this.Xgt(!0),
                    this.registerAction("refresh", (function() {
                        Q(t.element.hasAttribute("src"), 'Can\'t refresh <amp-state> without "src" attribute.'),
                        t.Xgt(!1, !0)
                    }
                    ))
                }
                ,
                e.mutatedAttributesCallback = function(t) {
                    if (this.getAmpDoc().hasBeenVisible())
                        void 0 !== t.src && this.element.hasAttribute("src") && this.Xgt(!1);
                    else {
                        var n = this.ve();
                        Y().error(n, "ampdoc must be visible before mutation.")
                    }
                }
                ,
                e.renderOutsideViewport = function() {
                    return !0
                }
                ,
                e.parseAndUpdate = function() {
                    return void 0 === this.Bgt && (this.Bgt = this.nc(),
                    null !== this.Bgt) ? this.Ygt(this.Bgt, !0) : R()
                }
                ,
                e.nc = function() {
                    var t = this
                      , n = this.element.children;
                    if (0 == n.length)
                        return null;
                    var r = this.ve();
                    if (1 != n.length)
                        return this.user().error(r, "Should contain exactly one <script> child."),
                        null;
                    var i, e, u = n[0];
                    return "SCRIPT" != (i = u).tagName || "APPLICATION/JSON" != (null === (e = i.getAttribute("type")) || void 0 === e ? void 0 : e.toUpperCase()) ? (this.user().error(r, 'State should be in a <script> tag with type="application/json".'),
                    null) : function(t, n) {
                        try {
                            return k(t)
                        } catch (t) {
                            return null == n || n(t),
                            null
                        }
                    }(u.textContent, (function(n) {
                        t.user().error(r, "Failed to parse state. Is it valid JSON?", n)
                    }
                    ))
                }
                ,
                e.Zs = function(t, n, r) {
                    return function(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                          , i = r.expr
                          , e = void 0 === i ? "." : i
                          , u = r.urlReplacement
                          , o = void 0 === u ? 0 : u
                          , s = r.refresh
                          , a = void 0 !== s && s
                          , l = r.xssiPrefix
                          , f = void 0 === l ? void 0 : l
                          , c = r.url
                          , h = void 0 === c ? n.getAttribute("src") : c;
                        Tt(h, n);
                        var v = vt(t.win);
                        return Nt(n, h, o, a).then((function(t) {
                            return v.fetchJson(t.xhrUrl, t.fetchOpt)
                        }
                        )).then((function(n) {
                            return mt(t.win).xssiJson(n, f)
                        }
                        )).then((function(t) {
                            if (null == t)
                                throw new Error("Response is undefined.");
                            return g(t, e || ".")
                        }
                        )).catch((function(t) {
                            throw H().createError("failed fetching JSON data", t)
                        }
                        ))
                    }(t, this.element, {
                        urlReplacement: n,
                        refresh: r
                    })
                }
                ,
                e.H2 = function(t, n) {
                    var r = this
                      , i = this.element
                      , e = this.getAmpDoc()
                      , u = It(i.getAttribute("src")) === It(e.win.location) || t ? 2 : 1;
                    return this.Zs(e, u, n).catch((function(t) {
                        var n = t ? bt(r.win, "amp-state.error", {
                            "response": t.response
                        }) : null;
                        (function(t) {
                            return rt(t, "action")
                        }
                        )(i).trigger(i, "fetch-error", n, 1)
                    }
                    ))
                }
                ,
                e.Xgt = function(t, n) {
                    var r = this;
                    t || (this.Wgt = new I);
                    var i = this.Wgt;
                    return this.getAmpDoc().whenFirstVisible().then((function() {
                        return r.H2(t, n)
                    }
                    )).then((function(n) {
                        return r.Ygt(n, t)
                    }
                    )).then((function() {
                        return i.resolve()
                    }
                    )).catch((function(t) {
                        throw i.resolve(),
                        t
                    }
                    ))
                }
                ,
                e.getFetchingPromise = function() {
                    return this.element.hasAttribute("src") ? this.Wgt.promise : R()
                }
                ,
                e.Ygt = function(t, n) {
                    if (null == t)
                        return R();
                    var r = Q(this.element.id, "<amp-state> must have an id.");
                    return dt(this.element).then((function(i) {
                        Z(i);
                        var e = m();
                        e[r] = t,
                        i.setState(e, {
                            skipEval: n,
                            skipAmpState: !n
                        })
                    }
                    ))
                }
                ,
                e.ve = function() {
                    return "<amp-state> " + (this.element.getAttribute("id") || "<unknown id>")
                }
                ,
                i
            }(t.BaseElement)
              , Ut = function() {
                function t() {
                    this.Zt = m(),
                    this.ai = null
                }
                var n = t.prototype;
                return n.get = function(t) {
                    var n = this.Zt[t];
                    return null == n ? null : n
                }
                ,
                n.whenSignal = function(t) {
                    var n, r = null === (n = this.ai) || void 0 === n ? void 0 : n[t];
                    if (!r) {
                        var i = this.Zt[t];
                        r = null != i ? {
                            promise: "number" == typeof i ? Promise.resolve(i) : Promise.reject(i)
                        } : new I,
                        this.ai || (this.ai = m()),
                        this.ai[t] = r
                    }
                    return r.promise
                }
                ,
                n.signal = function(t, n) {
                    var r;
                    if (null == this.Zt[t]) {
                        var i = null != n ? n : Date.now();
                        this.Zt[t] = i;
                        var e = null === (r = this.ai) || void 0 === r ? void 0 : r[t];
                        null != e && e.resolve && (e.resolve(i),
                        e.resolve = void 0,
                        e.reject = void 0)
                    }
                }
                ,
                n.rejectSignal = function(t, n) {
                    var r;
                    if (null == this.Zt[t]) {
                        this.Zt[t] = n;
                        var i = null === (r = this.ai) || void 0 === r ? void 0 : r[t];
                        null != i && i.reject && (i.reject(n),
                        i.promise.catch((function() {}
                        )),
                        i.resolve = void 0,
                        i.reject = void 0)
                    }
                }
                ,
                n.reset = function(t) {
                    var n;
                    this.Zt[t] && delete this.Zt[t];
                    var r = null === (n = this.ai) || void 0 === n ? void 0 : n[t];
                    r && !r.resolve && delete this.ai[t]
                }
                ,
                t
            }();
            function Ct(t) {
                if (O(function(t) {
                    var n = t.tagName;
                    return n.startsWith("AMP-") && !("AMP-STICKY-AD-TOP-PADDING" == n || "AMP-BODY" == n)
                }(t)),
                t.createdCallback)
                    return Promise.resolve(t);
                if (!t.__AMP_UPG_PRM) {
                    var n = new I;
                    t.__AMP_UPG_PRM = n.promise,
                    t.__AMP_UPG_RES = n.resolve
                }
                var r = t.__AMP_UPG_PRM;
                return O(r),
                r
            }
            var Lt = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;
            function Dt(t) {
                for (var n, r = []; n = Lt.exec(t); ) {
                    var i = n[1]
                      , e = void 0
                      , u = void 0;
                    if (n[2]) {
                        var o = n[3].toLowerCase();
                        if ("w" == o)
                            e = parseInt(n[2], 10);
                        else {
                            if ("x" != o)
                                continue;
                            u = parseFloat(n[2])
                        }
                    } else
                        u = 1;
                    r.push({
                        url: i,
                        width: e,
                        dpr: u
                    })
                }
                return new _t(r)
            }
            var _t = function() {
                function t(t) {
                    M(t.length > 0, "Srcset must have at least one source"),
                    this.JT = t;
                    for (var n = !1, r = !1, i = 0; i < t.length; i++) {
                        var e = t[i];
                        n = n || !!e.width,
                        r = r || !!e.dpr
                    }
                    M(!(n === r), "Srcset must have width or dpr sources, but not both"),
                    t.sort(n ? Ft : Bt),
                    this.xR = n
                }
                var n = t.prototype;
                return n.select = function(t, n) {
                    var r;
                    return O(t),
                    O(n),
                    r = this.xR ? this.kR(t * n) : this.OR(n),
                    this.JT[r].url
                }
                ,
                n.kR = function(t) {
                    for (var n = this.JT, r = 0, i = 1 / 0, e = 1 / 0, u = 0; u < n.length; u++) {
                        var o, s = null !== (o = n[u].width) && void 0 !== o ? o : 0, a = Math.abs(s - t);
                        if (!(a <= 1.1 * i || t / e > 1.2))
                            break;
                        r = u,
                        i = a,
                        e = s
                    }
                    return r
                }
                ,
                n.OR = function(t) {
                    for (var n = this.JT, r = 0, i = 1 / 0, e = 0; e < n.length; e++) {
                        var u = Math.abs(n[e].dpr - t);
                        if (!(u <= i))
                            break;
                        r = e,
                        i = u
                    }
                    return r
                }
                ,
                n.getUrls = function() {
                    return this.JT.map((function(t) {
                        return t.url
                    }
                    ))
                }
                ,
                n.stringify = function(t) {
                    for (var n = [], r = this.JT, i = 0; i < r.length; i++) {
                        var e = r[i]
                          , u = e.url;
                        t && (u = t(u)),
                        this.xR ? u += " ".concat(e.width, "w") : u += " ".concat(e.dpr, "x"),
                        n.push(u)
                    }
                    return n.join(", ")
                }
                ,
                t
            }();
            function Ft(t, n) {
                return M(t.width != n.width, "Duplicate width: %s", t.width),
                t.width - n.width
            }
            function Bt(t, n) {
                return M(t.dpr != n.dpr, "Duplicate dpr: %s", t.dpr),
                t.dpr - n.dpr
            }
            var Jt = {
                "class": {
                    denylistedValueRegex: "(^|\\W)i-amphtml-"
                },
                "hidden": null,
                "text": null
            }
              , Gt = {
                "width": null,
                "height": null
            }
              , zt = {
                "AMP-AUDIO": {
                    "album": null,
                    "artist": null,
                    "artwork": null,
                    "controlsList": null,
                    "loop": null,
                    "src": {
                        "allowedProtocols": {
                            "https": !0
                        }
                    },
                    "title": null
                },
                "AMP-AUTOCOMPLETE": {
                    "src": {
                        "allowedProtocols": {
                            "https": !0
                        }
                    }
                },
                "AMP-BASE-CAROUSEL": {
                    "advance-count": null,
                    "auto-advance-count": null,
                    "auto-advance-interval": null,
                    "auto-advance-loops": null,
                    "auto-advance": null,
                    "horizontal": null,
                    "initial-index": null,
                    "loop": null,
                    "mixed-length": null,
                    "side-slide-count": null,
                    "slide": null,
                    "snap-align": null,
                    "snap-by": null,
                    "snap": null,
                    "visible-count": null
                },
                "AMP-BRIGHTCOVE": {
                    "data-account": null,
                    "data-embed": null,
                    "data-player": null,
                    "data-player-id": null,
                    "data-playlist-id": null,
                    "data-video-id": null
                },
                "AMP-CAROUSEL": {
                    "slide": null
                },
                "AMP-DATE-PICKER": {
                    "max": null,
                    "min": null,
                    "src": {
                        "allowedProtocols": {
                            "https": !0
                        }
                    }
                },
                "AMP-GOOGLE-DOCUMENT-EMBED": {
                    "src": null,
                    "title": null
                },
                "AMP-IFRAME": {
                    "src": null,
                    "title": null
                },
                "AMP-IMG": {
                    "alt": null,
                    "attribution": null,
                    "src": {
                        "allowedProtocols": {
                            "data": !0,
                            "http": !0,
                            "https": !0
                        }
                    },
                    "srcset": {
                        "alternativeName": "src"
                    }
                },
                "AMP-LIGHTBOX": {
                    "open": null
                },
                "AMP-LIST": {
                    "src": {
                        "allowedProtocols": {
                            "https": !0
                        }
                    },
                    "state": null,
                    "is-layout-container": null
                },
                "AMP-RENDER": {
                    "src": {
                        "allowedProtocols": {
                            "https": !0
                        }
                    }
                },
                "AMP-SELECTOR": {
                    "disabled": null,
                    "selected": null
                },
                "AMP-STATE": {
                    "src": {
                        "allowedProtocols": {
                            "https": !0
                        }
                    }
                },
                "AMP-TIMEAGO": {
                    "datetime": null,
                    "title": null
                },
                "AMP-TWITTER": {
                    "data-tweetid": null
                },
                "AMP-VIDEO": {
                    "album": null,
                    "alt": null,
                    "artist": null,
                    "artwork": null,
                    "attribution": null,
                    "controls": null,
                    "controlslist": null,
                    "loop": null,
                    "poster": null,
                    "preload": null,
                    "src": {
                        "allowedProtocols": {
                            "https": !0
                        }
                    },
                    "title": null
                },
                "AMP-YOUTUBE": {
                    "data-videoid": null
                },
                "A": {
                    "href": {
                        "allowedProtocols": {
                            "ftp": !0,
                            "geo": !0,
                            "http": !0,
                            "https": !0,
                            "mailto": !0,
                            "maps": !0,
                            "bip": !0,
                            "bbmi": !0,
                            "chrome": !0,
                            "itms-services": !0,
                            "facetime": !0,
                            "fb-me": !0,
                            "fb-messenger": !0,
                            "intent": !0,
                            "line": !0,
                            "microsoft-edge": !0,
                            "skype": !0,
                            "sms": !0,
                            "snapchat": !0,
                            "tel": !0,
                            "tg": !0,
                            "threema": !0,
                            "twitter": !0,
                            "viber": !0,
                            "webcal": !0,
                            "web+mastodon": !0,
                            "wh": !0,
                            "whatsapp": !0
                        }
                    }
                },
                "BUTTON": {
                    "disabled": null,
                    "type": null,
                    "value": null
                },
                "DETAILS": {
                    "open": null
                },
                "FIELDSET": {
                    "disabled": null
                },
                "IMAGE": {
                    "xlink:href": {
                        "allowedProtocols": {
                            "http": !0,
                            "https": !0
                        }
                    }
                },
                "INPUT": {
                    "accept": null,
                    "accesskey": null,
                    "autocomplete": null,
                    "checked": null,
                    "disabled": null,
                    "height": null,
                    "inputmode": null,
                    "max": null,
                    "maxlength": null,
                    "min": null,
                    "minlength": null,
                    "multiple": null,
                    "pattern": null,
                    "placeholder": null,
                    "readonly": null,
                    "required": null,
                    "selectiondirection": null,
                    "size": null,
                    "spellcheck": null,
                    "step": null,
                    "type": {
                        denylistedValueRegex: "(^|\\s)(button|image|)(\\s|$)"
                    },
                    "value": null,
                    "width": null
                },
                "OPTION": {
                    "disabled": null,
                    "label": null,
                    "selected": null,
                    "value": null
                },
                "OPTGROUP": {
                    "disabled": null,
                    "label": null
                },
                "SECTION": {
                    "data-expand": null,
                    "expanded": null
                },
                "SELECT": {
                    "autofocus": null,
                    "disabled": null,
                    "multiple": null,
                    "required": null,
                    "size": null
                },
                "SOURCE": {
                    "src": {
                        "allowedProtocols": {
                            "https": !0
                        }
                    },
                    "type": null
                },
                "TRACK": {
                    "label": null,
                    "src": {
                        "allowedProtocols": {
                            "https": !0
                        }
                    },
                    "srclang": null
                },
                "TEXTAREA": {
                    "autocomplete": null,
                    "autofocus": null,
                    "cols": null,
                    "disabled": null,
                    "maxlength": null,
                    "minlength": null,
                    "pattern": null,
                    "placeholder": null,
                    "readonly": null,
                    "required": null,
                    "rows": null,
                    "selectiondirection": null,
                    "selectionend": null,
                    "selectionstart": null,
                    "spellcheck": null,
                    "wrap": null,
                    "defaulttext": null
                }
            }
              , Vt = {
                "src": !0,
                "srcset": !0,
                "href": !0,
                "xlink:href": !0
            }
              , Wt = function() {
                function t(t) {
                    this.b$ = t
                }
                var n = t.prototype;
                return n.canBind = function(t, n) {
                    return void 0 !== this.p$(t, n)
                }
                ,
                n.isResultValid = function(t, n, r) {
                    var i = this.p$(t, n);
                    if (i && i.alternativeName && (i = this.p$(t, i.alternativeName)),
                    void 0 === i)
                        return !1;
                    if (null === i)
                        return !0;
                    if (r && w(Vt, n)) {
                        var e;
                        if ("srcset" === n) {
                            var u;
                            try {
                                u = Dt(r)
                            } catch (t) {
                                return H().error("amp-bind", "Failed to parse srcset: ", t),
                                !1
                            }
                            e = u.getUrls()
                        } else
                            e = [r];
                        for (var o = 0; o < e.length; o++)
                            if (!this.m$(e[o], i))
                                return !1
                    }
                    var s = i.denylistedValueRegex;
                    return !(r && s && new RegExp(s,"i").test(r))
                }
                ,
                n.m$ = function(t, n) {
                    if (t) {
                        if (/__amp_source_origin/.test(t))
                            return !1;
                        var r = n.allowedProtocols;
                        if (r) {
                            var i = /^([^:\/?#.]+):[\s\S]*$/.exec(t);
                            if (null !== i && !b(r, i[1].toLowerCase().trim()))
                                return !1
                        }
                    }
                    return !0
                }
                ,
                n.p$ = function(t, n) {
                    if (n.startsWith("aria-"))
                        return null;
                    if (!w(Vt, n) || this.b$) {
                        var r = w(Jt, n);
                        if (void 0 !== r)
                            return r;
                        var i = w(Gt, n);
                        if (t.startsWith("AMP-") && void 0 !== i)
                            return i;
                        var e = w(zt, t);
                        return e ? e[n] : void 0
                    }
                }
                ,
                t
            }();
            var $t = function() {
                function t() {
                    this.ue = []
                }
                var n, r = t.prototype;
                return r.peek = function() {
                    var t = this.length;
                    return t ? this.ue[t - 1].item : null
                }
                ,
                r.enqueue = function(t, n) {
                    if (isNaN(n))
                        throw new Error("Priority must not be NaN.");
                    var r = this.he(n);
                    this.ue.splice(r, 0, {
                        item: t,
                        priority: n
                    })
                }
                ,
                r.he = function(t) {
                    for (var n = -1, r = 0, i = this.length; r <= i && (n = Math.floor((r + i) / 2)) !== this.length; )
                        if (this.ue[n].priority < t)
                            r = n + 1;
                        else {
                            if (!(n > 0 && this.ue[n - 1].priority >= t))
                                break;
                            i = n - 1
                        }
                    return n
                }
                ,
                r.forEach = function(t) {
                    for (var n = this.length; n--; )
                        t(this.ue[n].item)
                }
                ,
                r.dequeue = function() {
                    var t = this.ue.pop();
                    return t ? t.item : null
                }
                ,
                (n = [{
                    key: "length",
                    get: function() {
                        return this.ue.length
                    }
                }]) && function(t, n) {
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i)
                    }
                }(t.prototype, n),
                t
            }()
              , qt = !1;
            function Xt(t) {
                Z(t.defaultView),
                qt || (qt = !0,
                function(t) {
                    !function(t, n) {
                        for (var r in n)
                            D(t, r, n[r])
                    }(t.body, {
                        opacity: 1,
                        visibility: "visible",
                        "animation": "none"
                    })
                }(t))
            }
            var Ht = "CHUNK"
              , Kt = /nochunking=1/.test(self.location.hash)
              , Yt = R();
            function Zt(t, n, r) {
                Kt ? Yt.then(n) : function(t) {
                    var n, r;
                    return "chunk",
                    n = rn,
                    lt(st(r = ot(t)), r, "chunk", n),
                    nt(t, "chunk")
                }(t).run(n, r)
            }
            var Qt = "not_run"
              , tn = function() {
                function t(t) {
                    this.state = Qt,
                    this.ce = t
                }
                var n = t.prototype;
                return n.fe = function(t) {
                    if ("run" != this.state) {
                        this.state = "run";
                        try {
                            this.ce(t)
                        } catch (t) {
                            throw this.le(t),
                            t
                        }
                    }
                }
                ,
                n.ve = function() {
                    return this.ce.displayName || this.ce.name
                }
                ,
                n.le = function(t) {}
                ,
                n.de = function() {
                    return !1
                }
                ,
                n.me = function() {
                    return !1
                }
                ,
                t
            }()
              , nn = function(t) {
                r(i, t);
                var n = o(i);
                function i(t, r, i) {
                    var e;
                    return (e = n.call(this, t)).pe = i,
                    e
                }
                var e = i.prototype;
                return e.le = function(t) {
                    Xt(self.document)
                }
                ,
                e.de = function() {
                    return this.be()
                }
                ,
                e.me = function() {
                    return this.pe.ge
                }
                ,
                e.be = function() {
                    return this.pe.ampdoc.isVisible()
                }
                ,
                i
            }(tn)
              , rn = function() {
                function t(t) {
                    var n, r = this;
                    this.ampdoc = t,
                    this.t = t.win,
                    this.ye = new $t,
                    this.we = this.Ae.bind(this),
                    this.xe = 0,
                    this.Ee = !(!this.t.navigator.scheduling || !this.t.navigator.scheduling.isInputPending),
                    this.Oe = !1,
                    this.ae = this.t.document.documentElement.hasAttribute("i-amphtml-no-boilerplate"),
                    this.t.addEventListener("message", (function(t) {
                        "amp-macro-task" == t.data && r.Ae(null)
                    }
                    )),
                    this.ge = !1,
                    (n = t,
                    it(n, "viewer")).then((function() {
                        r.ge = !0
                    }
                    )),
                    t.onVisibilityChanged((function() {
                        t.isVisible() && r.Pe()
                    }
                    ))
                }
                var n = t.prototype;
                return n.run = function(t, n) {
                    var r = new tn(t);
                    this.Te(r, n)
                }
                ,
                n.runForStartup = function(t) {
                    var n = new nn(t,this.t,this);
                    this.Te(n, Number.POSITIVE_INFINITY)
                }
                ,
                n.Te = function(t, n) {
                    this.ye.enqueue(t, n),
                    this.Pe()
                }
                ,
                n.Ie = function(t) {
                    for (var n = this.ye.peek(); n && n.state !== Qt; )
                        this.ye.dequeue(),
                        n = this.ye.peek();
                    return n && t && this.ye.dequeue(),
                    n
                }
                ,
                n.Ae = function(t) {
                    var n, r = this, i = this.Ie(!0);
                    if (!i)
                        return this.Oe = !1,
                        this.xe = 0,
                        !1;
                    try {
                        n = Date.now(),
                        i.fe(t)
                    } finally {
                        Yt.then().then().then().then().then().then().then().then().then((function() {
                            r.Oe = !1,
                            r.xe += Date.now() - n,
                            Y().fine(Ht, i.ve(), "Chunk duration", Date.now() - n, r.xe),
                            r.Pe()
                        }
                        ))
                    }
                    return !0
                }
                ,
                n.Me = function(t) {
                    var n = this;
                    if (this.ae && (this.Ee ? this.t.navigator.scheduling.isInputPending() : this.xe > 5))
                        return this.xe = 0,
                        void this.Se();
                    Yt.then((function() {
                        n.we(t)
                    }
                    ))
                }
                ,
                n.Pe = function() {
                    if (!this.Oe) {
                        var t = this.Ie();
                        if (t)
                            return t.de() ? (this.Oe = !0,
                            void this.Me(null)) : void (t.me() && this.t.requestIdleCallback ? (n = this.t,
                            r = 2e3,
                            i = this.we,
                            e = Date.now(),
                            n.requestIdleCallback((function t(u) {
                                if (u.timeRemaining() < 15) {
                                    var o = r - (Date.now() - e);
                                    o <= 0 || u.didTimeout ? (Y().fine(Ht, "Timed out", r, u.didTimeout),
                                    i(u)) : (Y().fine(Ht, "Rescheduling with", o, u.timeRemaining()),
                                    n.requestIdleCallback(t, {
                                        timeout: o
                                    }))
                                } else
                                    Y().fine(Ht, "Running idle callback with ", 15),
                                    i(u)
                            }
                            ), {
                                timeout: r
                            })) : this.Se())
                    }
                    var n, r, i, e
                }
                ,
                n.Se = function() {
                    this.t.postMessage("amp-macro-task", "*")
                }
                ,
                t
            }()
              , en = function() {
                return self.AMP.config.urls
            }()
              , un = self.__AMP_ERRORS || [];
            self.__AMP_ERRORS = un;
            var on = function(t) {
                return (n = 0,
                r = function() {
                    var t = Math.pow(1.5, n++);
                    return 1e3 * (t + function(t, n) {
                        var r = t * (n = n || .3) * Math.random();
                        return Math.random() > .5 && (r *= -1),
                        r
                    }(t))
                }
                ,
                on = function(t) {
                    return setTimeout(t, r())
                }
                )(t);
                var n, r
            };
            function sn(t, n) {
                try {
                    if (t)
                        if (void 0 !== t.message)
                            t = function(t) {
                                var n = Object.getOwnPropertyDescriptor(t, "message");
                                if (null != n && n.writable)
                                    return t;
                                var r = t.message
                                  , i = t.stack
                                  , e = new Error(r);
                                for (var u in t)
                                    e[u] = t[u];
                                return e.stack = i,
                                e
                            }(t);
                        else {
                            var r = t;
                            (t = new Error(function(t) {
                                try {
                                    return JSON.stringify(t)
                                } catch (n) {
                                    return String(t)
                                }
                            }(r))).origError = r
                        }
                    else
                        t = new Error("Unknown error");
                    if (t.reported)
                        return t;
                    if (t.reported = !0,
                    t.messageArray) {
                        var i = f(t.messageArray, (function(t) {
                            return null == t ? void 0 : t.tagName
                        }
                        ));
                        i > -1 && (t.associatedElement = t.messageArray[i])
                    }
                    var e = n || t.associatedElement;
                    if (e && e.classList && (e.classList.add("i-amphtml-error"),
                    z().development && (e.classList.add("i-amphtml-element-error"),
                    e.setAttribute("error-message", t.message))),
                    self.console && (E(t.message) || !t.expected)) {
                        var u = console.error || console.log;
                        t.messageArray ? u.apply(console, t.messageArray) : e ? u.call(console, t.message, e) : u.call(console, t.message)
                    }
                    e && e.dispatchCustomEventForTesting && e.dispatchCustomEventForTesting("amp:error", t.message),
                    an.call(self, void 0, void 0, void 0, void 0, t)
                } catch (t) {
                    setTimeout((function() {
                        throw t
                    }
                    ))
                }
                return t
            }
            function an(t, n, r, i, e) {
                var u = this;
                if (!this || !this.document || e && e.expected || Xt(this.document),
                !z().development) {
                    var o = !1;
                    try {
                        o = function(t) {
                            if (!t.document)
                                return !1;
                            for (var n = t.document.querySelectorAll("script[src]"), r = 0; r < n.length; r++)
                                if (!xt(n[r].src.toLowerCase()))
                                    return !0;
                            return !1
                        }(self)
                    } catch (t) {}
                    if (!(o && Math.random() > .01)) {
                        var s = function(t, n, r, i, e, u) {
                            t = function(t, n) {
                                return n && (t = n.message ? n.message : String(n)),
                                t || (t = "Unknown error"),
                                t
                            }(t, e);
                            var o = !(!e || !e.expected);
                            if (!/_reported_/.test(t) && "CANCELLED" != t) {
                                var s = !(self && self.window)
                                  , a = Math.random();
                                if (!((function(t) {
                                    return -1 != t.indexOf("Failed to load:")
                                }(t) || "Script error." == t || s) && (o = !0,
                                a > .001))) {
                                    var l = E(t);
                                    if (!(l && a > .1)) {
                                        var f = Object.create(null);
                                        f.v = z().rtvVersion,
                                        f.noAmp = u ? "1" : "0",
                                        f.m = t.replace(A, ""),
                                        f.a = l ? "1" : "0",
                                        f.ex = o ? "1" : "0",
                                        f.dw = s ? "1" : "0";
                                        var c, h, v = "1p";
                                        if (self.context && self.context.location ? (f["3p"] = "1",
                                        v = "3p") : z().runtime && (v = z().runtime),
                                        f.rt = v,
                                        "inabox" === v && (f.adid = z().a4aId),
                                        f.ca = null !== (h = self.AMP_CONFIG) && void 0 !== h && h.canary ? "1" : "0",
                                        f.bt = (null === (c = self.AMP_CONFIG) || void 0 === c ? void 0 : c.type) || "unknown",
                                        self.location.ancestorOrigins && self.location.ancestorOrigins[0] && (f.or = self.location.ancestorOrigins[0]),
                                        self.viewerState && (f.vs = self.viewerState),
                                        self.parent && self.parent != self && (f.iem = "1"),
                                        self.AMP && self.AMP.viewer) {
                                            var d = self.AMP.viewer.getResolvedViewerUrl()
                                              , p = self.AMP.viewer.maybeGetMessagingOrigin();
                                            d && (f.rvu = d),
                                            p && (f.mso = p)
                                        }
                                        var m, b, w, y = [], g = self.__AMP__EXPERIMENT_TOGGLES || null;
                                        for (var P in g) {
                                            var S = g[P];
                                            y.push("".concat(P, "=").concat(S ? "1" : "0"))
                                        }
                                        return f.exps = y.join(","),
                                        e ? (f.el = (null === (m = e.associatedElement) || void 0 === m ? void 0 : m.tagName) || "u",
                                        e.args && (f.args = JSON.stringify(e.args)),
                                        l || e.ignoreStack || !e.stack || (f.s = e.stack),
                                        e.message && (e.message += " _reported_")) : (f.f = n || "",
                                        f.l = r || "",
                                        f.c = i || ""),
                                        f.r = self.document ? self.document.referrer : "",
                                        f.ae = un.join(","),
                                        f.fr = self.location.originalHash || self.location.hash,
                                        "production" === f.bt && (f.pt = "1"),
                                        w = t,
                                        (b = un).length >= 25 && b.splice(0, b.length - 25 + 1),
                                        b.push(w),
                                        f
                                    }
                                }
                            }
                        }(t, n, r, i, e, o);
                        s && on((function() {
                            try {
                                return function(t, n) {
                                    return n.pt && Math.random() < .9 ? R() : function(t, n) {
                                        var r = function(t) {
                                            return tt(t, "ampdoc")
                                        }(t);
                                        if (!r.isSingleDoc())
                                            return Promise.resolve(!1);
                                        var i = r.getSingleDoc();
                                        if (!i.getRootNode().documentElement.hasAttribute("report-errors-to-viewer"))
                                            return Promise.resolve(!1);
                                        var e = pt(i);
                                        return e.hasCapability("errorReporter") ? e.isTrustedViewer().then((function(t) {
                                            return !!t && (e.sendMessage("error", {
                                                "m": (r = n).m,
                                                "a": r.a,
                                                "s": r.s,
                                                "el": r.el,
                                                "ex": r.ex,
                                                "v": r.v,
                                                "pt": r.pt
                                            }),
                                            !0);
                                            var r
                                        }
                                        )) : Promise.resolve(!1)
                                    }(t, n).then((function(t) {
                                        if (!t) {
                                            var r = new XMLHttpRequest;
                                            r.open("POST", Math.random() < .1 ? en.betaErrorReporting : en.errorReporting, !0),
                                            r.send(JSON.stringify(n))
                                        }
                                    }
                                    ))
                                }(u, s).catch((function() {}
                                ))
                            } catch (t) {}
                        }
                        ))
                    }
                }
            }
            var ln = function() {
                return self.AMP.config.urls
            }()
              , fn = "__AMP_ORIGINAL_TARGET_VALUE_";
            function cn(t, n, r) {
                var i = Ot(kt(t, n));
                return "data:" == i.protocol || xt(i) || !r ? i.href : "".concat(ln.cdn, "/i/") + ("https:" == i.protocol ? "s/" : "") + encodeURIComponent(i.host) + i.pathname + (i.search || "") + (i.hash || "")
            }
            var hn = "web-worker"
              , vn = function() {
                function t(t) {
                    var n = this;
                    this.t = t,
                    this.ri = mt(t);
                    var r, i, e, u = (r = "ww",
                    !0,
                    i = ".js",
                    e = function(t, n) {
                        if (n) {
                            var r = "".concat(t.protocol, "//").concat(t.host);
                            return "about:" != t.protocol && "blob:" != t.protocol && "data:" != t.protocol || (r = ""),
                            "".concat(r, "/dist")
                        }
                        return $.cdn
                    }(t.location, !1),
                    // "".concat(e, "/rtv/").concat(z().rtvVersion, "/").concat(r).concat(i));
                    "./amp/".concat(r).concat(i));
                    Y().fine(hn, "Fetching web worker from", u),
                    this.Zgt = null,
                    this.tPt = this.ri.fetchText(u, {
                        ampCors: !1,
                        bypassInterceptorForDev: !1
                    }).then((function(t) {
                        return t.text()
                    }
                    )).then((function(r) {
                        var i = "".concat(u, ".map");
                        r = r.replace(/^\/\/# sourceMappingURL=.*/, "//# sourceMappingURL=".concat(i));
                        var e = new t.Blob([r + "\n//# sourceurl=" + u],{
                            type: "text/javascript"
                        })
                          , o = t.URL.createObjectURL(e);
                        n.Zgt = new t.Worker(o),
                        n.Zgt.onmessage = n.nPt.bind(n)
                    }
                    )),
                    this.D = {},
                    this.ox = 0,
                    this.rPt = [t]
                }
                var n = t.prototype;
                return n.S = function(t, n, r) {
                    var i = this;
                    return this.tPt.then((function() {
                        return new Promise((function(e, u) {
                            var o = i.ox++;
                            i.D[o] = {
                                method: t,
                                resolve: e,
                                reject: u
                            };
                            var s = i.iPt(r || i.t)
                              , a = {
                                method: t,
                                args: n,
                                scope: s,
                                id: o
                            };
                            i.Zgt.postMessage(a)
                        }
                        ))
                    }
                    ))
                }
                ,
                n.nPt = function(t) {
                    var n = t.data
                      , r = n.id
                      , i = n.method
                      , e = n.returnValue
                      , u = this.D[r];
                    u ? (O(i == u.method),
                    u.resolve(e),
                    delete this.D[r]) : Y().error(hn, "Received unexpected message (".concat(i, ", ").concat(r, ") from worker."))
                }
                ,
                n.hasPendingMessages = function() {
                    return Object.keys(this.D).length > 0
                }
                ,
                n.iPt = function(t) {
                    var n = this.rPt.indexOf(t);
                    return n >= 0 ? n : this.rPt.push(t) - 1
                }
                ,
                n.fetchPromiseForTesting = function() {
                    return this.tPt
                }
                ,
                t
            }()
              , dn = "amp-bind"
              , pn = /^(i?-)?amp(html)?-/
              , mn = {
                "INPUT": {
                    "checked": !0,
                    "value": !0
                },
                "OPTION": {
                    "selected": !0
                },
                "TEXTAREA": {
                    "text": !0,
                    "disabled": !0
                }
            }
              , bn = m({
                "AMP-CAROUSEL": ["slide"],
                "AMP-LIST": ["is-layout-container"],
                "AMP-SELECTOR": ["selected"]
            })
              , wn = ["AMP-LIST", "AMP-RENDER"]
              , yn = function() {
                function t(t) {
                    var n = this;
                    this.ampdoc = t,
                    this.t = t.win,
                    this.ePt = t.win,
                    this.uPt = [],
                    this.oPt = function(t, n, r) {
                        var i = 0
                          , e = 0
                          , u = null;
                        function o() {
                            i = 0;
                            var s, a = r - (t.Date.now() - e);
                            a > 0 ? i = t.setTimeout(o, a) : (s = u,
                            u = null,
                            n.apply(null, s))
                        }
                        return function() {
                            e = t.Date.now();
                            for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++)
                                s[a] = arguments[a];
                            u = s,
                            i || (i = t.setTimeout(o, r))
                        }
                    }(this.t, (function() {
                        n.uPt.length = 0
                    }
                    ), 5e3),
                    this.sPt = [],
                    this.aPt = m(),
                    this.du = nt(t, "history"),
                    this.lPt = [],
                    this.fPt = 1e3,
                    this.ma = nt(t, "mutator"),
                    this.ji = m(),
                    this.Ss = at(this.t, "timer"),
                    this.w$ = null,
                    this.eo = pt(this.ampdoc),
                    this.eo.onMessageRespond("premutate", this.cPt.bind(this)),
                    this.hPt = t.whenFirstVisible().then((function() {
                        return t.whenReady().then((function() {
                            return t.getRootNode()
                        }
                        ))
                    }
                    )),
                    this.vPt = this.hPt.then((function(t) {
                        return n.ws(t)
                    }
                    )),
                    this.dPt = new I,
                    this.pPt = null,
                    this.di = new Ut;
                    var r = self.AMP;
                    r.printState = r.printState || this.mPt.bind(this),
                    r.setState = r.setState || function(t) {
                        return n.setState(t)
                    }
                    ,
                    r.eval = r.eval || this.bPt.bind(this)
                }
                var n = t.prototype;
                return n.signals = function() {
                    return this.di
                }
                ,
                n.setState = function(t) {
                    var n = this
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Y().info(dn, "setState (init=%s):", r.skipEval, t);
                    try {
                        y(this.ji, t, 10)
                    } catch (t) {
                        H().error(dn, "Failed to merge result from AMP.setState().", t)
                    }
                    if (r.skipEval)
                        return R();
                    var i = this.vPt.then((function() {
                        return n.A$()
                    }
                    )).then((function(t) {
                        return n.wPt(t, {
                            skipAmpState: r.skipAmpState,
                            constrain: r.constrain
                        })
                    }
                    ));
                    return this.pPt = i
                }
                ,
                n.invoke = function(t) {
                    var n = t.args
                      , r = t.event
                      , i = t.method
                      , e = t.sequenceId
                      , u = t.tagOrTarget;
                    if (this.uPt.includes(e))
                        return H().error(dn, "One state action allowed per event."),
                        R();
                    this.uPt.push(e),
                    this.oPt();
                    var o = n.__AMP_OBJECT_STRING__;
                    if (o) {
                        this.fPt = Math.min(2e3, Math.max(1e3, this.fPt + 500)),
                        this.di.signal("FIRST_MUTATE");
                        var s = {};
                        switch (r && wt(r) && (s.event = wt(r)),
                        i) {
                        case "setState":
                            return this.setStateWithExpression(o, s);
                        case "pushState":
                            return this.pushStateWithExpression(o, s);
                        default:
                            return Promise.reject(Y().createError("Unrecognized method: %s.%s", u, i))
                        }
                    } else
                        H().error("AMP-BIND", "Please use the object-literal syntax, e.g. \"AMP.setState({foo: 'bar'})\" instead of \"AMP.setState(foo='bar')\".");
                    return R()
                }
                ,
                n.setStateWithExpression = function(t, n) {
                    var r = this;
                    return this.yPt(t, n).then((function(t) {
                        return r.gPt(t)
                    }
                    ))
                }
                ,
                n.setStateWithObject = function(t) {
                    var n = this.PPt(t);
                    return n ? this.gPt(n) : Promise.reject("Invalid state")
                }
                ,
                n.gPt = function(t) {
                    var n = this;
                    return Y().info(dn, "setState:", t),
                    this.pPt = this.setState(t).then((function() {
                        return n.APt()
                    }
                    )).then((function(t) {
                        t && n.du.replace(t)
                    }
                    )),
                    this.pPt
                }
                ,
                n.pushStateWithExpression = function(t, n) {
                    var r = this;
                    return Y().info(dn, "pushState:", t),
                    this.yPt(t, n).then((function(t) {
                        var n = m();
                        Object.keys(t).forEach((function(t) {
                            var i = r.ji[t];
                            n[t] = r.PPt(i)
                        }
                        ));
                        var i = function() {
                            return r.setState(n)
                        };
                        return r.setState(t).then((function() {
                            return r.APt()
                        }
                        )).then((function(t) {
                            r.du.push(i, t)
                        }
                        ))
                    }
                    ))
                }
                ,
                n.APt = function() {
                    var t = {
                        "data": {
                            "amp-bind": this.ji
                        },
                        "title": this.ePt.document.title
                    };
                    return this.eo.isEmbedded() ? this.eo.isTrustedViewer().then((function(n) {
                        return n ? t : null
                    }
                    )) : Promise.resolve(t)
                }
                ,
                n.rescan = function(t, n) {
                    var r = this
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , e = i.fast ? this.dPt.promise : this.vPt;
                    return e.then((function() {
                        return r.Ss.timeoutPromise(i.timeout || 2e3, r.SPt(t, n, i), "Timed out waiting for amp-bind to rescan.")
                    }
                    ))
                }
                ,
                n.SPt = function(t, n, r) {
                    var i = this;
                    return Y().info(dn, "rescan: ", t, n, r),
                    (r.fast ? this.EPt(t, n) : this.OPt(t, n)).then((function() {
                        if (r.update)
                            return i.A$().then((function(n) {
                                return i.wPt(n, {
                                    constrain: t,
                                    evaluateOnly: "evaluate" === r.update
                                })
                            }
                            ))
                    }
                    ))
                }
                ,
                n.EPt = function(t, n) {
                    var r = this
                      , i = this.MPt(n)
                      , e = []
                      , u = t.filter((function(t) {
                        return t.hasAttribute("i-amphtml-binding")
                    }
                    ));
                    t.forEach((function(t) {
                        var n = t.querySelectorAll("[i-amphtml-binding]");
                        Array.prototype.push.apply(u, n)
                    }
                    ));
                    for (var o = this.fPt - this.numberOfBindings(), s = 0; s < u.length; s++) {
                        var a = u[s];
                        if (this.TPt(a, o - e.length, e))
                            break
                    }
                    return i.then((function(t) {
                        Y().info(dn, "rescan.fast: delta=%s, total=%s", e.length - t, r.numberOfBindings())
                    }
                    )),
                    e.length > 0 ? this.xPt(e) : R()
                }
                ,
                n.getState = function(t) {
                    var n = t ? g(this.ji, t) : void 0;
                    return p(n) || a(n) ? this.PPt(n) : n
                }
                ,
                n.getStateAsync = function(t) {
                    var n = this
                      , r = /^[^.]*/.exec(t)[0];
                    return this.hPt.then((function(i) {
                        var e = i.querySelector("#".concat(String(r).replace(j, U)));
                        if (!e)
                            throw H().createError(dn, "#".concat(r, " does not exist."));
                        return Ct(e).then((function(t) {
                            return t.getImpl(!0)
                        }
                        )).then((function(t) {
                            return t.getFetchingPromise()
                        }
                        )).catch((function() {}
                        )).then((function() {
                            return n.getState(t)
                        }
                        ))
                    }
                    ))
                }
                ,
                n.getStateValue = function(t) {
                    var n = g(this.ji, t);
                    return null == n ? null : p(n) || a(n) ? JSON.stringify(n) : String(n)
                }
                ,
                n.ws = function(t) {
                    var n, r, i = this, e = (n = this.ePt.document,
                    r = n.documentElement,
                    !["⚡4email", "amp4email"].some((function(t) {
                        return r.hasAttribute(t)
                    }
                    )));
                    return this.w$ = new Wt(e),
                    this.RPt("bind.init", [e]).then((function() {
                        return Promise.all([i.IPt().then((function() {
                            return i.dPt.resolve()
                        }
                        )), i.kPt([t])])
                    }
                    )).then((function() {
                        t.addEventListener("amp:dom-update", (function(t) {
                            return i.Cgt(t)
                        }
                        ))
                    }
                    )).then((function() {
                        var n = s(t.querySelectorAll("AMP-STATE")).map((function(t) {
                            return Ct(t).then((function() {
                                return t.getImpl(!1)
                            }
                            )).then((function(t) {
                                return t.parseAndUpdate()
                            }
                            ))
                        }
                        ));
                        return Promise.all(n)
                    }
                    )).then((function() {
                        if (i.eo.sendMessage("bindReady", void 0),
                        i.NPt("amp:bind:initialize"),
                        z().development)
                            return i.A$().then((function(t) {
                                return i.aJ(t)
                            }
                            ))
                    }
                    ))
                }
                ,
                n.numberOfBindings = function() {
                    return this.sPt.reduce((function(t, n) {
                        return t + n.boundProperties.length
                    }
                    ), 0)
                }
                ,
                n.setMaxNumberOfBindingsForTesting = function(t) {
                    this.fPt = t
                }
                ,
                n.historyForTesting = function() {
                    return this.du
                }
                ,
                n.cPt = function(t) {
                    var n = this
                      , r = [];
                    return this.vPt.then((function() {
                        return Object.keys(t.state).forEach((function(i) {
                            n.lPt.includes(i) || (delete t.state[i],
                            r.push(i))
                        }
                        )),
                        r.length > 0 && H().warn(dn, "Some state keys could not be premutated because they are missing the overridable attribute: " + r.join(", ")),
                        n.setState(t.state)
                    }
                    ))
                }
                ,
                n.addOverridableKey = function(t) {
                    this.lPt.push(t)
                }
                ,
                n.IPt = function() {
                    var t = this
                      , n = this.ampdoc.getBody().querySelectorAll("AMP-BIND-MACRO")
                      , r = [];
                    return n.forEach((function(t) {
                        var n = (t.getAttribute("arguments") || "").split(",").map((function(t) {
                            return t.trim()
                        }
                        ));
                        r.push({
                            id: t.getAttribute("id"),
                            argumentNames: n,
                            expressionString: t.getAttribute("expression")
                        })
                    }
                    )),
                    0 == r.length ? Promise.resolve(0) : this.RPt("bind.addMacros", [r]).then((function(i) {
                        return i.forEach((function(r, i) {
                            t.jPt(r, "".concat(dn, ": Parsing amp-bind-macro failed."), n[i])
                        }
                        )),
                        r.length
                    }
                    ))
                }
                ,
                n.kPt = function(t) {
                    var n = this;
                    if (!t.length)
                        return Promise.resolve(0);
                    var r = t.map((function(t) {
                        var r = n.fPt - n.numberOfBindings();
                        return n.yx(t, r).then((function(t) {
                            var r = t.bindings;
                            return t.limitExceeded && n.UPt(),
                            r
                        }
                        ))
                    }
                    ));
                    return Promise.all(r).then((function(t) {
                        var r = Array.prototype.concat.apply([], t);
                        return r.length > 0 ? n.xPt(r) : 0
                    }
                    ))
                }
                ,
                n.UPt = function() {
                    Y().expectedError(dn, "Maximum number of bindings reached (%s). Additional elements with bindings will be ignored.", this.fPt)
                }
                ,
                n.xPt = function(t) {
                    var n = this;
                    return this.RPt("bind.addBindings", [t]).then((function(r) {
                        return Object.keys(r).forEach((function(t) {
                            var i = n.aPt[t];
                            i.length > 0 && n.jPt(r[t], "".concat(dn, ': Expression compile error in "').concat(t, '".'), i[0])
                        }
                        )),
                        t.length
                    }
                    ))
                }
                ,
                n.MPt = function(t) {
                    if (!t.length)
                        return Promise.resolve(0);
                    l(this.sPt, (function(n) {
                        for (var r = 0; r < t.length; r++)
                            if (t[r].contains(n.element))
                                return !0;
                        return !1
                    }
                    ));
                    var n = [];
                    for (var r in this.aPt) {
                        var i = this.aPt[r];
                        l(i, (function(n) {
                            for (var r = 0; r < t.length; r++)
                                if (t[r].contains(n))
                                    return !0;
                            return !1
                        }
                        )),
                        0 == i.length && (n.push(r),
                        delete this.aPt[r])
                    }
                    var e = n.length;
                    return e > 0 ? this.RPt("bind.removeBindingsWithExpressionStrings", [n]).then((function() {
                        return e
                    }
                    )) : Promise.resolve(0)
                }
                ,
                n.yx = function(t, n) {
                    var r = this
                      , i = []
                      , e = new gn(t)
                      , u = !1
                      , o = function() {
                        var t = e.currentNode;
                        if (t.nodeType !== Node.ELEMENT_NODE)
                            return !e.nextNode();
                        var o = t
                          , s = n - i.length;
                        return r.TPt(o, s, i) && (u = !0),
                        !(wn.includes(t.nodeName) ? e.skipSubtree() : e.nextNode()) || u
                    };
                    return new Promise((function(t) {
                        Zt(r.ampdoc, (function n(e) {
                            var s = !1;
                            if (e && !e.didTimeout)
                                for (; e.timeRemaining() > 1 && !s; )
                                    s = o();
                            else
                                for (var a = 0; a < 250 && !s; a++)
                                    s = o();
                            s ? t({
                                bindings: i,
                                limitExceeded: u
                            }) : Zt(r.ampdoc, n, 10)
                        }
                        ), 10)
                    }
                    ))
                }
                ,
                n.TPt = function(t, n, r) {
                    var i = this
                      , e = !1
                      , u = this.CPt(t);
                    u.length > n && (u.length = n,
                    e = !0),
                    u.length > 0 && this.sPt.push({
                        element: t,
                        boundProperties: u
                    });
                    var o = t.tagName;
                    return u.forEach((function(n) {
                        var e = n.expressionString
                          , u = n.property;
                        r.push({
                            tagName: o,
                            property: u,
                            expressionString: e
                        }),
                        i.aPt[e] || (i.aPt[e] = []),
                        i.aPt[e].push(t)
                    }
                    )),
                    e
                }
                ,
                n.CPt = function(t) {
                    for (var n = [], r = t.attributes, i = 0, e = r.length; i < e; i++) {
                        var u = r[i]
                          , o = this.LPt(u, t);
                        o && n.push(o)
                    }
                    return n
                }
                ,
                n.LPt = function(t, n) {
                    var r, i = n.tagName, e = t.name;
                    if (e.length > 2 && "[" === e[0] && "]" === e[e.length - 1])
                        r = e.substr(1, e.length - 2);
                    else if (e.startsWith("data-amp-bind-") && (r = e.substr(14),
                    n.hasAttribute("[".concat(r, "]"))))
                        return null;
                    if (r) {
                        if (this.w$.canBind(i, r))
                            return {
                                property: r,
                                expressionString: t.value
                            };
                        var u = H().createError("%s: Binding to [%s] on <%s> is not allowed.", dn, r, i);
                        this.DPt(u, n)
                    }
                    return null
                }
                ,
                n.yPt = function(t, n) {
                    var r = this;
                    return this.vPt.then((function() {
                        return Object.assign(n, r.ji),
                        r.RPt("bind.evaluateExpression", [t, n])
                    }
                    )).then((function(t) {
                        var n = t.error
                          , i = t.result;
                        if (n)
                            throw r.jPt(n, "".concat(dn, ": Expression eval failed."));
                        return i
                    }
                    ))
                }
                ,
                n.A$ = function() {
                    var t = this;
                    return this.RPt("bind.evaluateBindings", [this.ji]).then((function(n) {
                        var r = n.errors
                          , i = n.results;
                        return Object.keys(r).forEach((function(n) {
                            var i = t.aPt[n];
                            if (i.length > 0) {
                                var e = r[n]
                                  , u = H().createError('%s: Expression evaluation error in "%s". %s', dn, n, e.message);
                                u.stack = e.stack,
                                t.DPt(u, i[0])
                            }
                        }
                        )),
                        Y().info(dn, "evaluation:", i),
                        i
                    }
                    ))
                }
                ,
                n.aJ = function(t) {
                    var n = this
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                      , i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                      , e = {};
                    return this.sPt.forEach((function(u) {
                        var o = u.boundProperties
                          , s = u.element;
                        r && !n._Pt(r, s) || o.forEach((function(r) {
                            var u = t[r.expressionString];
                            if (void 0 !== u) {
                                var o = n.FPt(r, s, u);
                                if (o) {
                                    var a = s.tagName
                                      , l = r.expressionString
                                      , f = r.property
                                      , c = o.actual
                                      , h = o.expected;
                                    e["".concat(a, "[").concat(f, "]").concat(h, ":").concat(c)] = !0,
                                    i && H().warn(dn, "Default value (".concat(c, ") does not match first ") + "result (".concat(h, ") for <").concat(a, " [").concat(f, ']="') + "".concat(l, '">. We recommend writing expressions with ') + "matching default values, but this can be safely ignored if intentional.")
                                }
                            }
                        }
                        ))
                    }
                    )),
                    Object.keys(e)
                }
                ,
                n._Pt = function(t, n) {
                    for (var r = 0; r < t.length; r++)
                        if (t[r].contains(n))
                            return !0;
                    return !1
                }
                ,
                n.BPt = function(t, n) {
                    var r = [];
                    return t.forEach((function(t) {
                        var i = t.expressionString
                          , u = t.previousResult
                          , o = n[i];
                        void 0 === o || function(t, n) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
                            if (!isFinite(r) || r < 0)
                                throw new Error("Invalid depth: " + r);
                            if (t === n)
                                return !0;
                            for (var i = [{
                                a: t,
                                b: n,
                                depth: r
                            }]; i.length > 0; ) {
                                var u = i.shift()
                                  , o = u.a
                                  , s = u.b
                                  , l = u.depth;
                                if (l > 0) {
                                    if (e(o) !== e(s))
                                        return !1;
                                    if (a(o) && a(s)) {
                                        if (o.length !== s.length)
                                            return !1;
                                        for (var f = 0; f < o.length; f++)
                                            i.push({
                                                a: o[f],
                                                b: s[f],
                                                depth: l - 1
                                            });
                                        continue
                                    }
                                    if (o && s && "object" === e(o) && "object" === e(s)) {
                                        var c = Object.keys(o)
                                          , h = Object.keys(s);
                                        if (c.length !== h.length)
                                            return !1;
                                        for (var v = 0, d = c; v < d.length; v++) {
                                            var p = d[v];
                                            i.push({
                                                a: o[p],
                                                b: s[p],
                                                depth: l - 1
                                            })
                                        }
                                        continue
                                    }
                                }
                                if (o !== s)
                                    return !1
                            }
                            return !0
                        }(o, u, 20) || (t.previousResult = o,
                        r.push({
                            boundProperty: t,
                            newValue: o
                        }))
                    }
                    )),
                    r
                }
                ,
                n.wPt = function(t, n) {
                    var r = this
                      , i = [];
                    return this.sPt.forEach((function(e) {
                        if ((!n.skipAmpState || "AMP-STATE" !== e.element.tagName) && (!n.constrain || n.constrain.some((function(t) {
                            return t.contains(e.element)
                        }
                        )))) {
                            var u = e.boundProperties
                              , o = e.element
                              , s = r.BPt(u, t);
                            n.evaluateOnly || i.push(r.JPt(o, s))
                        }
                    }
                    )),
                    Promise.all(i)
                }
                ,
                n.JPt = function(t, n) {
                    var r = this;
                    return 0 === n.length ? R() : this.ma.mutateElement(t, (function() {
                        var i, e, u = m();
                        if (n.forEach((function(n) {
                            var o = n.boundProperty
                              , s = n.newValue
                              , a = o.property
                              , l = r.GPt(o, t, s);
                            l && (u[l.name] = l.value,
                            "width" == a ? i = P(s) ? Number(s) : i : "height" == a && (e = P(s) ? Number(s) : e)),
                            r.zPt(t, a)
                        }
                        )),
                        void 0 === i && void 0 === e || r.ma.forceChangeSize(t, e, i),
                        "function" == typeof t.mutatedAttributesCallback)
                            try {
                                t.mutatedAttributesCallback(u)
                            } catch (n) {
                                var o = H().createError("%s: Applying expression results (%s) failed with error,", dn, JSON.stringify(u), n);
                                r.DPt(o, t)
                            }
                    }
                    ))
                }
                ,
                n.zPt = function(t, n) {
                    var r = mn[t.tagName];
                    if (r && r[n]) {
                        var i = "OPTION" === t.tagName ? C(t, "SELECT") : t;
                        if (i) {
                            var e = bt(this.ePt, "amp:form-value-change", null, {
                                bubbles: !0
                            });
                            i.dispatchEvent(e)
                        }
                    }
                }
                ,
                n.GPt = function(t, n, r) {
                    var i = t.property
                      , u = n.tagName;
                    switch (i) {
                    case "defaulttext":
                        n.textContent = String(r);
                        break;
                    case "text":
                        var o = String(r);
                        "TITLE" === u && n.parentNode === this.ePt.document.head && (this.ePt.document.title = o),
                        "TEXTAREA" === u ? n.value = o : n.textContent = o;
                        break;
                    case "class":
                        for (var s = [], a = 0; a < n.classList.length; a++) {
                            var l = n.classList[a];
                            pn.test(l) && s.push(l)
                        }
                        if (Array.isArray(r) || "string" == typeof r)
                            n.setAttribute("class", s.concat(r).join(" "));
                        else if (null === r)
                            n.setAttribute("class", s.join(" "));
                        else {
                            var f = H().createError('%s: "%s" is not a valid result for [class].', dn, r);
                            this.DPt(f, n)
                        }
                        break;
                    default:
                        var c = "INPUT" === u && i in n
                          , h = n.getAttribute(i)
                          , v = !1;
                        if ("boolean" == typeof r ? (c && n[i] !== r && (n[i] = r,
                        v = !0),
                        r && "" !== h ? (n.setAttribute(i, ""),
                        v = !0) : r || null === h || (n.removeAttribute(i),
                        v = !0),
                        v && this.VPt(n, i, r)) : "object" === e(r) && null !== r ? v = !0 : r !== h && (v = this.WPt(n, i, String(r), c)),
                        v)
                            return {
                                name: i,
                                value: r
                            }
                    }
                    return null
                }
                ,
                n.VPt = function(t, n, r) {
                    if ("OPTION" === t.tagName && "selected" === n && r && (u = this.t,
                    tt(u, "platform")).isSafari()) {
                        var i = C(t, "select");
                        if (i) {
                            var e = s(i.options).indexOf(t);
                            e >= 0 && (i.selectedIndex = e)
                        }
                    }
                    var u
                }
                ,
                n.WPt = function(t, n, r, i) {
                    try {
                        return function(t, n, r, i, e) {
                            var u = t.tagName.toLowerCase()
                              , o = n.toLowerCase()
                              , s = function(t, n, r) {
                                return function(t) {
                                    return "src" == t || "href" == t || "xlink:href" == t || "srcset" == t
                                }(n) ? function(t, n, r, i) {
                                    var e;
                                    Q(!("__amp_source_origin"in B(Ot(e = r).search)), "Source origin is not allowed in %s", e);
                                    var u = xt(i)
                                      , o = Ot(Rt(i));
                                    if ("href" == n && !r.startsWith("#"))
                                        return kt(r, o);
                                    if ("src" == n)
                                        return "amp-img" == t ? cn(r, o, u) : kt(r, o);
                                    if ("srcset" == n) {
                                        var s;
                                        try {
                                            s = Dt(r)
                                        } catch (t) {
                                            return H().error("URL-REWRITE", "Failed to parse srcset: ", t),
                                            r
                                        }
                                        return s.stringify((function(t) {
                                            return cn(t, o, u)
                                        }
                                        ))
                                    }
                                    return r
                                }(t, n, r, self.location) : r
                            }(u, o, r);
                            if (xt(self.location) && "a" === u && "href" === o) {
                                var a = t.getAttribute(o)
                                  , l = "#" === s[0]
                                  , f = a && "#" === a[0];
                                l && !f ? (t[fn] || (t[fn] = t.getAttribute("target")),
                                t.removeAttribute("target")) : f && !l && t.setAttribute("target", t[fn] || "_top")
                            }
                            e && (t[o] = s),
                            t.setAttribute(o, s)
                        }(t, n, r, 0, i),
                        !0
                    } catch (i) {
                        var e = H().createError('%s: "%s" is not a valid result for [%]', dn, r, n, i);
                        this.DPt(e, t)
                    }
                    return !1
                }
                ,
                n.FPt = function(t, n, r) {
                    var i, e, u = t.property, o = n.tagName, s = bn[o];
                    if (s && s.includes(u))
                        return null;
                    switch (u) {
                    case "text":
                        i = n.textContent,
                        r = String(r),
                        e = i.trim() === r.trim();
                        break;
                    case "class":
                        i = [];
                        for (var a = 0; a < n.classList.length; a++) {
                            var l = n.classList[a];
                            pn.test(l) || i.push(l)
                        }
                        var f = [];
                        if (Array.isArray(r))
                            f = r;
                        else if ("string" == typeof r) {
                            var c = r.trim();
                            c.length > 0 && (f = c.split(" "))
                        } else {
                            var h = H().createError('%s: "%s" is not a valid result for [class].', dn, r);
                            this.DPt(h, n)
                        }
                        e = this.$Pt(i, f);
                        break;
                    default:
                        i = n.getAttribute(u),
                        e = !0 === r ? "" === i : !1 === r ? null === i : "number" == typeof r ? Number(i) === r : i === r
                    }
                    return e ? null : {
                        expected: r,
                        actual: i
                    }
                }
                ,
                n.Cgt = function(t) {
                    var n = this
                      , r = t.target
                      , i = r.parentNode;
                    i && wn.includes(i.nodeName) || (Y().info(dn, "dom_update:", r),
                    this.OPt([r], [r], "dom_update.end").then((function() {
                        n.NPt("amp:bind:rescan-template")
                    }
                    )))
                }
                ,
                n.OPt = function(t, n) {
                    var r = this
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "rescan.slow"
                      , e = 0;
                    return this.MPt(n).then((function(n) {
                        return e = n,
                        r.kPt(t)
                    }
                    )).then((function(t) {
                        Y().info(dn, "%s: delta=%s, total=%s", i, t - e, r.numberOfBindings())
                    }
                    ))
                }
                ,
                n.RPt = function(t, n) {
                    return function(t, n, r, i) {
                        return t.Worker ? (function(t, n, r, i) {
                            lt(t = ut(t), t, "amp-worker", r)
                        }(t, 0, vn),
                        tt(t, "amp-worker").S(n, r || [], i)) : Promise.reject("Worker not supported in window.")
                    }(this.t, t, n, this.ePt)
                }
                ,
                n.jPt = function(t, n, r) {
                    var i = H().createError("%s %s", n, t.message);
                    return i.stack = t.stack,
                    this.DPt(i, r),
                    i
                }
                ,
                n.DPt = function(t, n) {
                    sn(t, n)
                }
                ,
                n.$Pt = function(t, n) {
                    if (t.length !== n.length)
                        return !1;
                    for (var r = (a(t) ? t : s(t)).sort(), i = (a(n) ? n : s(n)).sort(), e = 0; e < t.length; e++)
                        if (r[e] !== i[e])
                            return !1;
                    return !0
                }
                ,
                n.PPt = function(t) {
                    if (void 0 === t)
                        return null;
                    try {
                        return k(JSON.stringify(t))
                    } catch (n) {
                        Y().error(dn, "Failed to copy JSON (" + t + ") with error: " + n)
                    }
                    return null
                }
                ,
                n.mPt = function(t) {
                    if (t)
                        if ("string" == typeof t) {
                            var n = g(this.ji, t);
                            H().info(dn, n)
                        } else if (t.nodeType == Node.ELEMENT_NODE) {
                            var r = H().assertElement(t);
                            this.qPt(r)
                        } else
                            H().info(dn, 'Invalid argument. Pass a JSON expression or an element instead e.g. AMP.printState("foo.bar") or AMP.printState($0) after selecting an element.');
                    else
                        H().info(dn, this.ji)
                }
                ,
                n.qPt = function(t) {
                    var n = this
                      , r = f(this.sPt, (function(n) {
                        return n.element == t
                    }
                    ));
                    if (r < 0)
                        H().info(dn, "Element has no bindings:", t);
                    else {
                        var i = []
                          , e = this.sPt[r].boundProperties;
                        e.forEach((function(t) {
                            var r = t.expressionString;
                            i.push(n.yPt(r, n.ji))
                        }
                        )),
                        Promise.all(i).then((function(t) {
                            var n = m();
                            e.forEach((function(r, i) {
                                var e = r.property;
                                n[e] = t[i]
                            }
                            )),
                            H().info(dn, n)
                        }
                        ))
                    }
                }
                ,
                n.bPt = function(t) {
                    this.yPt(t, this.ji).then((function(t) {
                        H().info(dn, t)
                    }
                    ))
                }
                ,
                n.initializePromiseForTesting = function() {
                    return this.vPt
                }
                ,
                n.setStatePromiseForTesting = function() {
                    return this.pPt
                }
                ,
                n.NPt = function(t) {}
                ,
                t
            }()
              , gn = function() {
                function t(t) {
                    var n = Z(t.nodeType == Node.DOCUMENT_NODE ? t : t.ownerDocument)
                      , r = n.documentElement.hasAttribute("i-amphtml-binding");
                    this.XPt = r,
                    this.currentNode = t,
                    this.Js = 0,
                    this.HPt = r ? s(t.querySelectorAll("[i-amphtml-binding]")) : [],
                    r && t.nodeType === Node.ELEMENT_NODE && t.hasAttribute("i-amphtml-binding") && this.HPt.unshift(t),
                    this.KPt = r ? null : n.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, null, !1)
                }
                var n = t.prototype;
                return n.nextNode = function() {
                    if (this.XPt) {
                        if (this.Js == this.HPt.length)
                            return null;
                        var t = this.HPt[this.Js++];
                        return this.currentNode = t,
                        t
                    }
                    var n = this.KPt.nextNode();
                    return null !== n && (this.currentNode = n),
                    n
                }
                ,
                n.skipSubtree = function() {
                    if (this.XPt) {
                        var t = this.currentNode
                          , n = null;
                        do {
                            n = this.nextNode()
                        } while (null !== n && t.contains(n));
                        return n
                    }
                    for (var r = this.KPt, i = r.currentNode; i; i = r.parentNode()) {
                        var e = r.nextSibling();
                        if (null !== e)
                            return this.currentNode = e,
                            e
                    }
                    return null
                }
                ,
                t
            }();
            t.registerServiceForDoc("bind", yn),
            t.registerElement("amp-state", jt),
            t.registerElement("amp-bind-macro", x)
        }();
        /*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
    }
});
//# sourceMappingURL=amp-bind-0.1.js.map
