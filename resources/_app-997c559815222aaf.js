(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    8679: function (e, t, n) {
      "use strict";
      var r = n(9864),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function c(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || o;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = a);
      var u = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        g = Object.getPrototypeOf,
        d = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (d) {
            var o = g(n);
            o && o !== d && e(t, o, r);
          }
          var a = l(n);
          f && (a = a.concat(f(n)));
          for (var s = c(t), h = c(n), y = 0; y < a.length; ++y) {
            var v = a[y];
            if (!i[v] && !(r && r[v]) && !(h && h[v]) && !(s && s[v])) {
              var m = p(n, v);
              try {
                u(t, v, m);
              } catch (b) {}
            }
          }
        }
        return t;
      };
    },
    8287: function (e, t, n) {
      "use strict";
      n.d(t, {
        Jc: function () {
          return eR;
        },
        $G: function () {
          return r.$G;
        },
      });
      var r = n(7421);
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var i = n(4942),
        a = n(7294),
        s = n(8679),
        c = n.n(s),
        u = n(907);
      function l(e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      var f = n(181),
        p = n(1002),
        g = n(7685);
      function d(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]);
        }
        return o;
      }
      var h = {
          defaultNS: "common",
          errorStackTraceLimit: 0,
          i18n: { defaultLocale: "en", locales: ["en"] },
          get initImmediate() {
            return "undefined" != typeof window;
          },
          interpolation: { escapeValue: !1 },
          load: "currentOnly",
          localeExtension: "json",
          localePath: "./public/locales",
          localeStructure: "{{lng}}/{{ns}}",
          react: { useSuspense: !1 },
          reloadOnPrerender: !1,
          serializeConfig: !0,
          use: [],
        },
        y = ["i18n"],
        v = ["i18n"];
      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var O = ["backend", "detection"],
        k = function (e) {
          if ("string" != typeof (null == e ? void 0 : e.lng))
            throw Error("config.lng was not passed into createConfig");
          var t,
            n = e.i18n,
            r = d(e, y),
            o = h.i18n,
            i = b(b(b(b({}, d(h, v)), r), o), n),
            a = i.defaultNS,
            s = i.lng,
            c = i.localeExtension,
            m = i.localePath,
            k = i.localeStructure,
            S = i.nonExplicitSupportedLngs,
            w = i.locales.filter(function (e) {
              return "default" !== e;
            });
          if ("cimode" === s) return i;
          if (
            void 0 === i.fallbackLng &&
            ((i.fallbackLng = i.defaultLocale), "default" === i.fallbackLng)
          ) {
            var x = (0, g.Z)(w, 1);
            i.fallbackLng = x[0];
          }
          var j = i.fallbackLng;
          if (S) {
            var P = function (e, t) {
              var n = t.split("-"),
                r = (0, g.Z)(n, 1)[0];
              return (e[t] = [r]), e;
            };
            if ("string" == typeof j)
              i.fallbackLng = i.locales
                .filter(function (e) {
                  return e.includes("-");
                })
                .reduce(P, { default: [j] });
            else if (Array.isArray(j))
              i.fallbackLng = i.locales
                .filter(function (e) {
                  return e.includes("-");
                })
                .reduce(P, { default: j });
            else if ("object" === (0, p.Z)(j))
              i.fallbackLng = Object.entries(i.fallbackLng).reduce(function (
                e,
                t
              ) {
                var n,
                  r = (0, g.Z)(t, 2),
                  o = r[0],
                  i = r[1];
                return (
                  (e[o] = o.includes("-")
                    ? ((n = [o.split("-")[0]].concat(
                        (function (e) {
                          if (Array.isArray(e)) return (0, u.Z)(e);
                        })(i) ||
                          l(i) ||
                          (0, f.Z)(i) ||
                          (function () {
                            throw TypeError(
                              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          })()
                      )),
                      Array.from(new Set(n)))
                    : i),
                  e
                );
              },
              j);
            else if ("function" == typeof j)
              throw Error(
                "If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng"
              );
          }
          return (
            (null == e
              ? void 0
              : null === (t = e.use) || void 0 === t
              ? void 0
              : t.some(function (e) {
                  return "backend" === e.type;
                })) ||
              ("string" == typeof m
                ? (i.backend = {
                    addPath: "".concat(m, "/").concat(k, ".missing.").concat(c),
                    loadPath: "".concat(m, "/").concat(k, ".").concat(c),
                  })
                : "function" != typeof m ||
                  (i.backend = {
                    addPath: function (e, t) {
                      return m(e, t, !0);
                    },
                    loadPath: function (e, t) {
                      return m(e, t, !1);
                    },
                  })),
            "string" == typeof i.ns || Array.isArray(i.ns) || (i.ns = [a]),
            O.forEach(function (t) {
              e[t] && (i[t] = b(b({}, i[t]), e[t]));
            }),
            i
          );
        },
        S = n(5671),
        w = n(3144);
      function x(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function j(e, t) {
        return (j = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function P(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && j(e, t);
      }
      function L(e, t) {
        if (t && ("object" === (0, p.Z)(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw TypeError(
            "Derived constructors may only return object or undefined"
          );
        return x(e);
      }
      function N(e) {
        return (N = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var R = n(3878),
        C = n(5267);
      function E(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var I = {
          type: "logger",
          log: function (e) {
            this.output("log", e);
          },
          warn: function (e) {
            this.output("warn", e);
          },
          error: function (e) {
            this.output("error", e);
          },
          output: function (e, t) {
            console && console[e] && console[e].apply(console, t);
          },
        },
        Z = new ((function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            (0, S.Z)(this, e), this.init(t, n);
          }
          return (
            (0, w.Z)(e, [
              {
                key: "init",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (this.prefix = t.prefix || "i18next:"),
                    (this.logger = e || I),
                    (this.options = t),
                    (this.debug = t.debug);
                },
              },
              {
                key: "setDebug",
                value: function (e) {
                  this.debug = e;
                },
              },
              {
                key: "log",
                value: function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "log", "", !0);
                },
              },
              {
                key: "warn",
                value: function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "warn", "", !0);
                },
              },
              {
                key: "error",
                value: function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "error", "");
                },
              },
              {
                key: "deprecate",
                value: function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
                },
              },
              {
                key: "forward",
                value: function (e, t, n, r) {
                  return r && !this.debug
                    ? null
                    : ("string" == typeof e[0] &&
                        (e[0] = ""
                          .concat(n)
                          .concat(this.prefix, " ")
                          .concat(e[0])),
                      this.logger[t](e));
                },
              },
              {
                key: "create",
                value: function (t) {
                  return new e(
                    this.logger,
                    D(
                      D(
                        {},
                        { prefix: "".concat(this.prefix, ":").concat(t, ":") }
                      ),
                      this.options
                    )
                  );
                },
              },
              {
                key: "clone",
                value: function (t) {
                  return (
                    ((t = t || this.options).prefix = t.prefix || this.prefix),
                    new e(this.logger, t)
                  );
                },
              },
            ]),
            e
          );
        })())(),
        F = (function () {
          function e() {
            (0, S.Z)(this, e), (this.observers = {});
          }
          return (
            (0, w.Z)(e, [
              {
                key: "on",
                value: function (e, t) {
                  var n = this;
                  return (
                    e.split(" ").forEach(function (e) {
                      (n.observers[e] = n.observers[e] || []),
                        n.observers[e].push(t);
                    }),
                    this
                  );
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  if (this.observers[e]) {
                    if (!t) {
                      delete this.observers[e];
                      return;
                    }
                    this.observers[e] = this.observers[e].filter(function (e) {
                      return e !== t;
                    });
                  }
                },
              },
              {
                key: "emit",
                value: function (e) {
                  for (
                    var t = arguments.length,
                      n = Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  this.observers[e] &&
                    [].concat(this.observers[e]).forEach(function (e) {
                      e.apply(void 0, n);
                    }),
                    this.observers["*"] &&
                      [].concat(this.observers["*"]).forEach(function (t) {
                        t.apply(t, [e].concat(n));
                      });
                },
              },
            ]),
            e
          );
        })();
      function T() {
        var e,
          t,
          n = new Promise(function (n, r) {
            (e = n), (t = r);
          });
        return (n.resolve = e), (n.reject = t), n;
      }
      function A(e) {
        return null == e ? "" : "" + e;
      }
      function V(e, t, n) {
        function r(e) {
          return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
        }
        function o() {
          return !e || "string" == typeof e;
        }
        for (
          var i = "string" != typeof t ? [].concat(t) : t.split(".");
          i.length > 1;

        ) {
          if (o()) return {};
          var a = r(i.shift());
          !e[a] && n && (e[a] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {});
        }
        return o() ? {} : { obj: e, k: r(i.shift()) };
      }
      function $(e, t, n) {
        var r = V(e, t, Object);
        r.obj[r.k] = n;
      }
      function M(e, t) {
        var n = V(e, t),
          r = n.obj,
          o = n.k;
        if (r) return r[o];
      }
      function U(e, t, n) {
        var r = M(e, n);
        return void 0 !== r ? r : M(t, n);
      }
      function _(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var B = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      function K(e) {
        return "string" == typeof e
          ? e.replace(/[&<>"'\/]/g, function (e) {
              return B[e];
            })
          : e;
      }
      var z =
          "undefined" != typeof window &&
          window.navigator &&
          void 0 === window.navigator.userAgentData &&
          window.navigator.userAgent &&
          window.navigator.userAgent.indexOf("MSIE") > -1,
        H = [" ", ",", "?", "!", ";"];
      function J(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var W = (function (e) {
          P(r, e);
          var t,
            n =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  n = N(r);
                if (t) {
                  var o = N(this).constructor;
                  e = Reflect.construct(n, arguments, o);
                } else e = n.apply(this, arguments);
                return L(this, e);
              });
          function r(e) {
            var t,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ["translation"], defaultNS: "translation" };
            return (
              (0, S.Z)(this, r),
              (t = n.call(this)),
              z && F.call(x(t)),
              (t.data = e || {}),
              (t.options = o),
              void 0 === t.options.keySeparator &&
                (t.options.keySeparator = "."),
              void 0 === t.options.ignoreJSONStructure &&
                (t.options.ignoreJSONStructure = !0),
              t
            );
          }
          return (
            (0, w.Z)(r, [
              {
                key: "addNamespaces",
                value: function (e) {
                  0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
                },
              },
              {
                key: "removeNamespaces",
                value: function (e) {
                  var t = this.options.ns.indexOf(e);
                  t > -1 && this.options.ns.splice(t, 1);
                },
              },
              {
                key: "getResource",
                value: function (e, t, n) {
                  var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    o =
                      void 0 !== r.keySeparator
                        ? r.keySeparator
                        : this.options.keySeparator,
                    i =
                      void 0 !== r.ignoreJSONStructure
                        ? r.ignoreJSONStructure
                        : this.options.ignoreJSONStructure,
                    a = [e, t];
                  n && "string" != typeof n && (a = a.concat(n)),
                    n &&
                      "string" == typeof n &&
                      (a = a.concat(o ? n.split(o) : n)),
                    e.indexOf(".") > -1 && (a = e.split("."));
                  var s = M(this.data, a);
                  return s || !i || "string" != typeof n
                    ? s
                    : (function e(t, n) {
                        var r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : ".";
                        if (t) {
                          if (t[n]) return t[n];
                          for (
                            var o = n.split(r), i = t, a = 0;
                            a < o.length;
                            ++a
                          ) {
                            if (
                              !i ||
                              ("string" == typeof i[o[a]] && a + 1 < o.length)
                            )
                              return;
                            if (void 0 === i[o[a]]) {
                              for (
                                var s = 2,
                                  c = o.slice(a, a + s).join(r),
                                  u = i[c];
                                void 0 === u && o.length > a + s;

                              )
                                s++, (u = i[(c = o.slice(a, a + s).join(r))]);
                              if (void 0 === u) return;
                              if (null === u) return null;
                              if (n.endsWith(c)) {
                                if ("string" == typeof u) return u;
                                if (c && "string" == typeof u[c]) return u[c];
                              }
                              var l = o.slice(a + s).join(r);
                              if (l) return e(u, l, r);
                              return;
                            }
                            i = i[o[a]];
                          }
                          return i;
                        }
                      })(this.data && this.data[e] && this.data[e][t], n, o);
                },
              },
              {
                key: "addResource",
                value: function (e, t, n, r) {
                  var o =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    i = this.options.keySeparator;
                  void 0 === i && (i = ".");
                  var a = [e, t];
                  n && (a = a.concat(i ? n.split(i) : n)),
                    e.indexOf(".") > -1 &&
                      ((a = e.split(".")), (r = t), (t = a[1])),
                    this.addNamespaces(t),
                    $(this.data, a, r),
                    o.silent || this.emit("added", e, t, n, r);
                },
              },
              {
                key: "addResources",
                value: function (e, t, n) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 };
                  for (var o in n)
                    ("string" == typeof n[o] ||
                      "[object Array]" ===
                        Object.prototype.toString.apply(n[o])) &&
                      this.addResource(e, t, o, n[o], { silent: !0 });
                  r.silent || this.emit("added", e, t, n);
                },
              },
              {
                key: "addResourceBundle",
                value: function (e, t, n, r, o) {
                  var i =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    a = [e, t];
                  e.indexOf(".") > -1 &&
                    ((a = e.split(".")), (r = n), (n = t), (t = a[1])),
                    this.addNamespaces(t);
                  var s = M(this.data, a) || {};
                  r
                    ? (function e(t, n, r) {
                        for (var o in n)
                          "__proto__" !== o &&
                            "constructor" !== o &&
                            (o in t
                              ? "string" == typeof t[o] ||
                                t[o] instanceof String ||
                                "string" == typeof n[o] ||
                                n[o] instanceof String
                                ? r && (t[o] = n[o])
                                : e(t[o], n[o], r)
                              : (t[o] = n[o]));
                        return t;
                      })(s, n, o)
                    : (s = q(q({}, s), n)),
                    $(this.data, a, s),
                    i.silent || this.emit("added", e, t, n);
                },
              },
              {
                key: "removeResourceBundle",
                value: function (e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit("removed", e, t);
                },
              },
              {
                key: "hasResourceBundle",
                value: function (e, t) {
                  return void 0 !== this.getResource(e, t);
                },
              },
              {
                key: "getResourceBundle",
                value: function (e, t) {
                  return (t || (t = this.options.defaultNS),
                  "v1" === this.options.compatibilityAPI)
                    ? q(q({}, {}), this.getResource(e, t))
                    : this.getResource(e, t);
                },
              },
              {
                key: "getDataByLanguage",
                value: function (e) {
                  return this.data[e];
                },
              },
              {
                key: "hasLanguageSomeTranslations",
                value: function (e) {
                  var t = this.getDataByLanguage(e);
                  return !!((t && Object.keys(t)) || []).find(function (e) {
                    return t[e] && Object.keys(t[e]).length > 0;
                  });
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return this.data;
                },
              },
            ]),
            r
          );
        })(F),
        G = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e;
          },
          handle: function (e, t, n, r, o) {
            var i = this;
            return (
              e.forEach(function (e) {
                i.processors[e] && (t = i.processors[e].process(t, n, r, o));
              }),
              t
            );
          },
        };
      function Y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Y(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Y(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Q = {},
        ee = (function (e) {
          P(r, e);
          var t,
            n =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  n = N(r);
                if (t) {
                  var o = N(this).constructor;
                  e = Reflect.construct(n, arguments, o);
                } else e = n.apply(this, arguments);
                return L(this, e);
              });
          function r(e) {
            var t,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              (0, S.Z)(this, r),
              (t = n.call(this)),
              z && F.call(x(t)),
              !(function (e, t, n) {
                e.forEach(function (e) {
                  t[e] && (n[e] = t[e]);
                });
              })(
                [
                  "resourceStore",
                  "languageUtils",
                  "pluralResolver",
                  "interpolator",
                  "backendConnector",
                  "i18nFormat",
                  "utils",
                ],
                e,
                x(t)
              ),
              (t.options = o),
              void 0 === t.options.keySeparator &&
                (t.options.keySeparator = "."),
              (t.logger = Z.create("translator")),
              t
            );
          }
          return (
            (0, w.Z)(
              r,
              [
                {
                  key: "changeLanguage",
                  value: function (e) {
                    e && (this.language = e);
                  },
                },
                {
                  key: "exists",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { interpolation: {} };
                    if (null == e) return !1;
                    var n = this.resolve(e, t);
                    return n && void 0 !== n.res;
                  },
                },
                {
                  key: "extractFromKey",
                  value: function (e, t) {
                    var n =
                      void 0 !== t.nsSeparator
                        ? t.nsSeparator
                        : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var r =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      o = t.ns || this.options.defaultNS || [],
                      i = n && e.indexOf(n) > -1,
                      a =
                        !this.options.userDefinedKeySeparator &&
                        !t.keySeparator &&
                        !this.options.userDefinedNsSeparator &&
                        !t.nsSeparator &&
                        !(function (e, t, n) {
                          (t = t || ""), (n = n || "");
                          var r = H.filter(function (e) {
                            return 0 > t.indexOf(e) && 0 > n.indexOf(e);
                          });
                          if (0 === r.length) return !0;
                          var o = RegExp(
                              "(".concat(
                                r
                                  .map(function (e) {
                                    return "?" === e ? "\\?" : e;
                                  })
                                  .join("|"),
                                ")"
                              )
                            ),
                            i = !o.test(e);
                          if (!i) {
                            var a = e.indexOf(n);
                            a > 0 && !o.test(e.substring(0, a)) && (i = !0);
                          }
                          return i;
                        })(e, n, r);
                    if (i && !a) {
                      var s = e.match(this.interpolator.nestingRegexp);
                      if (s && s.length > 0) return { key: e, namespaces: o };
                      var c = e.split(n);
                      (n !== r ||
                        (n === r && this.options.ns.indexOf(c[0]) > -1)) &&
                        (o = c.shift()),
                        (e = c.join(r));
                    }
                    return (
                      "string" == typeof o && (o = [o]),
                      { key: e, namespaces: o }
                    );
                  },
                },
                {
                  key: "translate",
                  value: function (e, t, n) {
                    var o = this;
                    if (
                      ("object" !== (0, p.Z)(t) &&
                        this.options.overloadTranslationOptionHandler &&
                        (t = this.options.overloadTranslationOptionHandler(
                          arguments
                        )),
                      t || (t = {}),
                      null == e)
                    )
                      return "";
                    Array.isArray(e) || (e = [String(e)]);
                    var i =
                        void 0 !== t.returnDetails
                          ? t.returnDetails
                          : this.options.returnDetails,
                      a =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      s = this.extractFromKey(e[e.length - 1], t),
                      c = s.key,
                      u = s.namespaces,
                      l = u[u.length - 1],
                      f = t.lng || this.language,
                      g =
                        t.appendNamespaceToCIMode ||
                        this.options.appendNamespaceToCIMode;
                    if (f && "cimode" === f.toLowerCase()) {
                      if (g) {
                        var d = t.nsSeparator || this.options.nsSeparator;
                        return i
                          ? ((h.res = "".concat(l).concat(d).concat(c)), h)
                          : "".concat(l).concat(d).concat(c);
                      }
                      return i ? ((h.res = c), h) : c;
                    }
                    var h = this.resolve(e, t),
                      y = h && h.res,
                      v = (h && h.usedKey) || c,
                      m = (h && h.exactUsedKey) || c,
                      b = Object.prototype.toString.apply(y),
                      O =
                        void 0 !== t.joinArrays
                          ? t.joinArrays
                          : this.options.joinArrays,
                      k = !this.i18nFormat || this.i18nFormat.handleAsObject,
                      S =
                        "string" != typeof y &&
                        "boolean" != typeof y &&
                        "number" != typeof y;
                    if (
                      k &&
                      y &&
                      S &&
                      0 >
                        [
                          "[object Number]",
                          "[object Function]",
                          "[object RegExp]",
                        ].indexOf(b) &&
                      !("string" == typeof O && "[object Array]" === b)
                    ) {
                      if (!t.returnObjects && !this.options.returnObjects) {
                        this.options.returnedObjectHandler ||
                          this.logger.warn(
                            "accessing an object - but returnObjects options is not enabled!"
                          );
                        var w = this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(
                              v,
                              y,
                              X(X({}, t), {}, { ns: u })
                            )
                          : "key '"
                              .concat(c, " (")
                              .concat(
                                this.language,
                                ")' returned an object instead of string."
                              );
                        return i ? ((h.res = w), h) : w;
                      }
                      if (a) {
                        var x = "[object Array]" === b,
                          j = x ? [] : {},
                          P = x ? m : v;
                        for (var L in y)
                          if (Object.prototype.hasOwnProperty.call(y, L)) {
                            var N = "".concat(P).concat(a).concat(L);
                            (j[L] = this.translate(
                              N,
                              X(X({}, t), { joinArrays: !1, ns: u })
                            )),
                              j[L] === N && (j[L] = y[L]);
                          }
                        y = j;
                      }
                    } else if (
                      k &&
                      "string" == typeof O &&
                      "[object Array]" === b
                    )
                      (y = y.join(O)) &&
                        (y = this.extendTranslation(y, e, t, n));
                    else {
                      var R = !1,
                        C = !1,
                        E = void 0 !== t.count && "string" != typeof t.count,
                        D = r.hasDefaultValue(t),
                        I = E
                          ? this.pluralResolver.getSuffix(f, t.count, t)
                          : "",
                        Z = t["defaultValue".concat(I)] || t.defaultValue;
                      !this.isValidLookup(y) && D && ((R = !0), (y = Z)),
                        this.isValidLookup(y) || ((C = !0), (y = c));
                      var F =
                          (t.missingKeyNoValueFallbackToKey ||
                            this.options.missingKeyNoValueFallbackToKey) &&
                          C
                            ? void 0
                            : y,
                        T = D && Z !== y && this.options.updateMissing;
                      if (C || R || T) {
                        if (
                          (this.logger.log(
                            T ? "updateKey" : "missingKey",
                            f,
                            l,
                            c,
                            T ? Z : y
                          ),
                          a)
                        ) {
                          var A = this.resolve(
                            c,
                            X(X({}, t), {}, { keySeparator: !1 })
                          );
                          A &&
                            A.res &&
                            this.logger.warn(
                              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                            );
                        }
                        var V = [],
                          $ = this.languageUtils.getFallbackCodes(
                            this.options.fallbackLng,
                            t.lng || this.language
                          );
                        if (
                          "fallback" === this.options.saveMissingTo &&
                          $ &&
                          $[0]
                        )
                          for (var M = 0; M < $.length; M++) V.push($[M]);
                        else
                          "all" === this.options.saveMissingTo
                            ? (V = this.languageUtils.toResolveHierarchy(
                                t.lng || this.language
                              ))
                            : V.push(t.lng || this.language);
                        var U = function (e, n, r) {
                          var i = D && r !== y ? r : F;
                          o.options.missingKeyHandler
                            ? o.options.missingKeyHandler(e, l, n, i, T, t)
                            : o.backendConnector &&
                              o.backendConnector.saveMissing &&
                              o.backendConnector.saveMissing(e, l, n, i, T, t),
                            o.emit("missingKey", e, l, n, y);
                        };
                        this.options.saveMissing &&
                          (this.options.saveMissingPlurals && E
                            ? V.forEach(function (e) {
                                o.pluralResolver
                                  .getSuffixes(e, t)
                                  .forEach(function (n) {
                                    U(
                                      [e],
                                      c + n,
                                      t["defaultValue".concat(n)] || Z
                                    );
                                  });
                              })
                            : U(V, c, Z));
                      }
                      (y = this.extendTranslation(y, e, t, h, n)),
                        C &&
                          y === c &&
                          this.options.appendNamespaceToMissingKey &&
                          (y = "".concat(l, ":").concat(c)),
                        (C || R) &&
                          this.options.parseMissingKeyHandler &&
                          (y =
                            "v1" !== this.options.compatibilityAPI
                              ? this.options.parseMissingKeyHandler(
                                  this.options.appendNamespaceToMissingKey
                                    ? "".concat(l, ":").concat(c)
                                    : c,
                                  R ? y : void 0
                                )
                              : this.options.parseMissingKeyHandler(y));
                    }
                    return i ? ((h.res = y), h) : y;
                  },
                },
                {
                  key: "extendTranslation",
                  value: function (e, t, n, r, o) {
                    var i = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                      e = this.i18nFormat.parse(
                        e,
                        X(
                          X({}, this.options.interpolation.defaultVariables),
                          n
                        ),
                        r.usedLng,
                        r.usedNS,
                        r.usedKey,
                        { resolved: r }
                      );
                    else if (!n.skipInterpolation) {
                      n.interpolation &&
                        this.interpolator.init(
                          X(X({}, n), {
                            interpolation: X(
                              X({}, this.options.interpolation),
                              n.interpolation
                            ),
                          })
                        );
                      var a,
                        s =
                          "string" == typeof e &&
                          (n &&
                          n.interpolation &&
                          void 0 !== n.interpolation.skipOnVariables
                            ? n.interpolation.skipOnVariables
                            : this.options.interpolation.skipOnVariables);
                      if (s) {
                        var c = e.match(this.interpolator.nestingRegexp);
                        a = c && c.length;
                      }
                      var u =
                        n.replace && "string" != typeof n.replace
                          ? n.replace
                          : n;
                      if (
                        (this.options.interpolation.defaultVariables &&
                          (u = X(
                            X({}, this.options.interpolation.defaultVariables),
                            u
                          )),
                        (e = this.interpolator.interpolate(
                          e,
                          u,
                          n.lng || this.language,
                          n
                        )),
                        s)
                      ) {
                        var l = e.match(this.interpolator.nestingRegexp);
                        a < (l && l.length) && (n.nest = !1);
                      }
                      !1 !== n.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function () {
                            for (
                              var e = arguments.length, r = Array(e), a = 0;
                              a < e;
                              a++
                            )
                              r[a] = arguments[a];
                            return o && o[0] === r[0] && !n.context
                              ? (i.logger.warn(
                                  "It seems you are nesting recursively key: "
                                    .concat(r[0], " in key: ")
                                    .concat(t[0])
                                ),
                                null)
                              : i.translate.apply(i, r.concat([t]));
                          },
                          n
                        )),
                        n.interpolation && this.interpolator.reset();
                    }
                    var f = n.postProcess || this.options.postProcess,
                      p = "string" == typeof f ? [f] : f;
                    return (
                      null != e &&
                        p &&
                        p.length &&
                        !1 !== n.applyPostProcessor &&
                        (e = G.handle(
                          p,
                          e,
                          t,
                          this.options && this.options.postProcessPassResolved
                            ? X({ i18nResolved: r }, n)
                            : n,
                          this
                        )),
                      e
                    );
                  },
                },
                {
                  key: "resolve",
                  value: function (e) {
                    var t,
                      n,
                      r,
                      o,
                      i,
                      a = this,
                      s =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return (
                      "string" == typeof e && (e = [e]),
                      e.forEach(function (e) {
                        if (!a.isValidLookup(t)) {
                          var c = a.extractFromKey(e, s),
                            u = c.key;
                          n = u;
                          var l = c.namespaces;
                          a.options.fallbackNS &&
                            (l = l.concat(a.options.fallbackNS));
                          var f =
                              void 0 !== s.count && "string" != typeof s.count,
                            p =
                              f &&
                              !s.ordinal &&
                              0 === s.count &&
                              a.pluralResolver.shouldUseIntlApi(),
                            g =
                              void 0 !== s.context &&
                              ("string" == typeof s.context ||
                                "number" == typeof s.context) &&
                              "" !== s.context,
                            d = s.lngs
                              ? s.lngs
                              : a.languageUtils.toResolveHierarchy(
                                  s.lng || a.language,
                                  s.fallbackLng
                                );
                          l.forEach(function (e) {
                            a.isValidLookup(t) ||
                              ((i = e),
                              !Q["".concat(d[0], "-").concat(e)] &&
                                a.utils &&
                                a.utils.hasLoadedNamespace &&
                                !a.utils.hasLoadedNamespace(i) &&
                                ((Q["".concat(d[0], "-").concat(e)] = !0),
                                a.logger.warn(
                                  'key "'
                                    .concat(n, '" for languages "')
                                    .concat(
                                      d.join(", "),
                                      '" won\'t get resolved as namespace "'
                                    )
                                    .concat(i, '" was not yet loaded'),
                                  "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                                )),
                              d.forEach(function (n) {
                                if (!a.isValidLookup(t)) {
                                  o = n;
                                  var i,
                                    c = [u];
                                  if (
                                    a.i18nFormat &&
                                    a.i18nFormat.addLookupKeys
                                  )
                                    a.i18nFormat.addLookupKeys(c, u, n, e, s);
                                  else {
                                    f &&
                                      (l = a.pluralResolver.getSuffix(
                                        n,
                                        s.count,
                                        s
                                      ));
                                    var l,
                                      d = "".concat(
                                        a.options.pluralSeparator,
                                        "zero"
                                      );
                                    if (
                                      (f && (c.push(u + l), p && c.push(u + d)),
                                      g)
                                    ) {
                                      var h = ""
                                        .concat(u)
                                        .concat(a.options.contextSeparator)
                                        .concat(s.context);
                                      c.push(h),
                                        f &&
                                          (c.push(h + l), p && c.push(h + d));
                                    }
                                  }
                                  for (; (i = c.pop()); )
                                    a.isValidLookup(t) ||
                                      ((r = i),
                                      (t = a.getResource(n, e, i, s)));
                                }
                              }));
                          });
                        }
                      }),
                      {
                        res: t,
                        usedKey: n,
                        exactUsedKey: r,
                        usedLng: o,
                        usedNS: i,
                      }
                    );
                  },
                },
                {
                  key: "isValidLookup",
                  value: function (e) {
                    return (
                      void 0 !== e &&
                      !(!this.options.returnNull && null === e) &&
                      !(!this.options.returnEmptyString && "" === e)
                    );
                  },
                },
                {
                  key: "getResource",
                  value: function (e, t, n) {
                    var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
                    return this.i18nFormat && this.i18nFormat.getResource
                      ? this.i18nFormat.getResource(e, t, n, r)
                      : this.resourceStore.getResource(e, t, n, r);
                  },
                },
              ],
              [
                {
                  key: "hasDefaultValue",
                  value: function (e) {
                    var t = "defaultValue";
                    for (var n in e)
                      if (
                        Object.prototype.hasOwnProperty.call(e, n) &&
                        t === n.substring(0, t.length) &&
                        void 0 !== e[n]
                      )
                        return !0;
                    return !1;
                  },
                },
              ]
            ),
            r
          );
        })(F);
      function et(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var en = (function () {
          function e(t) {
            (0, S.Z)(this, e),
              (this.options = t),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = Z.create("languageUtils"));
          }
          return (
            (0, w.Z)(e, [
              {
                key: "getScriptPartFromCode",
                value: function (e) {
                  if (!e || 0 > e.indexOf("-")) return null;
                  var t = e.split("-");
                  return 2 === t.length
                    ? null
                    : (t.pop(), "x" === t[t.length - 1].toLowerCase())
                    ? null
                    : this.formatLanguageCode(t.join("-"));
                },
              },
              {
                key: "getLanguagePartFromCode",
                value: function (e) {
                  if (!e || 0 > e.indexOf("-")) return e;
                  var t = e.split("-");
                  return this.formatLanguageCode(t[0]);
                },
              },
              {
                key: "formatLanguageCode",
                value: function (e) {
                  if ("string" == typeof e && e.indexOf("-") > -1) {
                    var t = [
                        "hans",
                        "hant",
                        "latn",
                        "cyrl",
                        "cans",
                        "mong",
                        "arab",
                      ],
                      n = e.split("-");
                    return (
                      this.options.lowerCaseLng
                        ? (n = n.map(function (e) {
                            return e.toLowerCase();
                          }))
                        : 2 === n.length
                        ? ((n[0] = n[0].toLowerCase()),
                          (n[1] = n[1].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = et(n[1].toLowerCase())))
                        : 3 === n.length &&
                          ((n[0] = n[0].toLowerCase()),
                          2 === n[1].length && (n[1] = n[1].toUpperCase()),
                          "sgn" !== n[0] &&
                            2 === n[2].length &&
                            (n[2] = n[2].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = et(n[1].toLowerCase())),
                          t.indexOf(n[2].toLowerCase()) > -1 &&
                            (n[2] = et(n[2].toLowerCase()))),
                      n.join("-")
                    );
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                    ? e.toLowerCase()
                    : e;
                },
              },
              {
                key: "isSupportedCode",
                value: function (e) {
                  return (
                    ("languageOnly" === this.options.load ||
                      this.options.nonExplicitSupportedLngs) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs ||
                      !this.supportedLngs.length ||
                      this.supportedLngs.indexOf(e) > -1
                  );
                },
              },
              {
                key: "getBestMatchFromCodes",
                value: function (e) {
                  var t,
                    n = this;
                  return e
                    ? (e.forEach(function (e) {
                        if (!t) {
                          var r = n.formatLanguageCode(e);
                          (!n.options.supportedLngs || n.isSupportedCode(r)) &&
                            (t = r);
                        }
                      }),
                      !t &&
                        this.options.supportedLngs &&
                        e.forEach(function (e) {
                          if (!t) {
                            var r = n.getLanguagePartFromCode(e);
                            if (n.isSupportedCode(r)) return (t = r);
                            t = n.options.supportedLngs.find(function (e) {
                              if (0 === e.indexOf(r)) return e;
                            });
                          }
                        }),
                      t ||
                        (t = this.getFallbackCodes(
                          this.options.fallbackLng
                        )[0]),
                      t)
                    : null;
                },
              },
              {
                key: "getFallbackCodes",
                value: function (e, t) {
                  if (!e) return [];
                  if (
                    ("function" == typeof e && (e = e(t)),
                    "string" == typeof e && (e = [e]),
                    "[object Array]" === Object.prototype.toString.apply(e))
                  )
                    return e;
                  if (!t) return e.default || [];
                  var n = e[t];
                  return (
                    n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                  );
                },
              },
              {
                key: "toResolveHierarchy",
                value: function (e, t) {
                  var n = this,
                    r = this.getFallbackCodes(
                      t || this.options.fallbackLng || [],
                      e
                    ),
                    o = [],
                    i = function (e) {
                      e &&
                        (n.isSupportedCode(e)
                          ? o.push(e)
                          : n.logger.warn(
                              "rejecting language code not found in supportedLngs: ".concat(
                                e
                              )
                            ));
                    };
                  return (
                    "string" == typeof e && e.indexOf("-") > -1
                      ? ("languageOnly" !== this.options.load &&
                          i(this.formatLanguageCode(e)),
                        "languageOnly" !== this.options.load &&
                          "currentOnly" !== this.options.load &&
                          i(this.getScriptPartFromCode(e)),
                        "currentOnly" !== this.options.load &&
                          i(this.getLanguagePartFromCode(e)))
                      : "string" == typeof e && i(this.formatLanguageCode(e)),
                    r.forEach(function (e) {
                      0 > o.indexOf(e) && i(n.formatLanguageCode(e));
                    }),
                    o
                  );
                },
              },
            ]),
            e
          );
        })(),
        er = [
          {
            lngs: [
              "ach",
              "ak",
              "am",
              "arn",
              "br",
              "fil",
              "gun",
              "ln",
              "mfe",
              "mg",
              "mi",
              "oc",
              "pt",
              "pt-BR",
              "tg",
              "tl",
              "ti",
              "tr",
              "uz",
              "wa",
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              "af",
              "an",
              "ast",
              "az",
              "bg",
              "bn",
              "ca",
              "da",
              "de",
              "dev",
              "el",
              "en",
              "eo",
              "es",
              "et",
              "eu",
              "fi",
              "fo",
              "fur",
              "fy",
              "gl",
              "gu",
              "ha",
              "hi",
              "hu",
              "hy",
              "ia",
              "it",
              "kk",
              "kn",
              "ku",
              "lb",
              "mai",
              "ml",
              "mn",
              "mr",
              "nah",
              "nap",
              "nb",
              "ne",
              "nl",
              "nn",
              "no",
              "nso",
              "pa",
              "pap",
              "pms",
              "ps",
              "pt-PT",
              "rm",
              "sco",
              "se",
              "si",
              "so",
              "son",
              "sq",
              "sv",
              "sw",
              "ta",
              "te",
              "tk",
              "ur",
              "yo",
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              "ay",
              "bo",
              "cgg",
              "fa",
              "ht",
              "id",
              "ja",
              "jbo",
              "ka",
              "km",
              "ko",
              "ky",
              "lo",
              "ms",
              "sah",
              "su",
              "th",
              "tt",
              "ug",
              "vi",
              "wo",
              "zh",
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
          { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
          { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ["fr"], nr: [1, 2], fc: 9 },
          { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ["is"], nr: [1, 2], fc: 12 },
          { lngs: ["jv"], nr: [0, 1], fc: 13 },
          { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
          { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
          { lngs: ["mk"], nr: [1, 2], fc: 17 },
          { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
          { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ["or"], nr: [2, 1], fc: 2 },
          { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
          { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        eo = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0
            );
          },
          22: function (e) {
            return Number(
              1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
            );
          },
        },
        ei = ["v1", "v2", "v3"],
        ea = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
        es = (function () {
          function e(t) {
            var n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            (0, S.Z)(this, e),
              (this.languageUtils = t),
              (this.options = r),
              (this.logger = Z.create("pluralResolver")),
              (this.options.compatibilityJSON &&
                "v4" !== this.options.compatibilityJSON) ||
                ("undefined" != typeof Intl && Intl.PluralRules) ||
                ((this.options.compatibilityJSON = "v3"),
                this.logger.error(
                  "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
                )),
              (this.rules =
                ((n = {}),
                er.forEach(function (e) {
                  e.lngs.forEach(function (t) {
                    n[t] = { numbers: e.nr, plurals: eo[e.fc] };
                  });
                }),
                n));
          }
          return (
            (0, w.Z)(e, [
              {
                key: "addRule",
                value: function (e, t) {
                  this.rules[e] = t;
                },
              },
              {
                key: "getRule",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (this.shouldUseIntlApi())
                    try {
                      return new Intl.PluralRules(e, {
                        type: t.ordinal ? "ordinal" : "cardinal",
                      });
                    } catch (n) {
                      return;
                    }
                  return (
                    this.rules[e] ||
                    this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                  );
                },
              },
              {
                key: "needsPlural",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = this.getRule(e, t);
                  return this.shouldUseIntlApi()
                    ? n && n.resolvedOptions().pluralCategories.length > 1
                    : n && n.numbers.length > 1;
                },
              },
              {
                key: "getPluralFormsOfKey",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  return this.getSuffixes(e, n).map(function (e) {
                    return "".concat(t).concat(e);
                  });
                },
              },
              {
                key: "getSuffixes",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = this.getRule(e, n);
                  return r
                    ? this.shouldUseIntlApi()
                      ? r
                          .resolvedOptions()
                          .pluralCategories.sort(function (e, t) {
                            return ea[e] - ea[t];
                          })
                          .map(function (e) {
                            return "".concat(t.options.prepend).concat(e);
                          })
                      : r.numbers.map(function (r) {
                          return t.getSuffix(e, r, n);
                        })
                    : [];
                },
              },
              {
                key: "getSuffix",
                value: function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    r = this.getRule(e, n);
                  return r
                    ? this.shouldUseIntlApi()
                      ? "".concat(this.options.prepend).concat(r.select(t))
                      : this.getSuffixRetroCompatible(r, t)
                    : (this.logger.warn("no plural rule found for: ".concat(e)),
                      "");
                },
              },
              {
                key: "getSuffixRetroCompatible",
                value: function (e, t) {
                  var n = this,
                    r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                    o = e.numbers[r];
                  this.options.simplifyPluralSuffix &&
                    2 === e.numbers.length &&
                    1 === e.numbers[0] &&
                    (2 === o ? (o = "plural") : 1 === o && (o = ""));
                  var i = function () {
                    return n.options.prepend && o.toString()
                      ? n.options.prepend + o.toString()
                      : o.toString();
                  };
                  return "v1" === this.options.compatibilityJSON
                    ? 1 === o
                      ? ""
                      : "number" == typeof o
                      ? "_plural_".concat(o.toString())
                      : i()
                    : "v2" === this.options.compatibilityJSON ||
                      (this.options.simplifyPluralSuffix &&
                        2 === e.numbers.length &&
                        1 === e.numbers[0])
                    ? i()
                    : this.options.prepend && r.toString()
                    ? this.options.prepend + r.toString()
                    : r.toString();
                },
              },
              {
                key: "shouldUseIntlApi",
                value: function () {
                  return !ei.includes(this.options.compatibilityJSON);
                },
              },
            ]),
            e
          );
        })();
      function ec(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ec(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ec(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var el = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (0, S.Z)(this, e),
            (this.logger = Z.create("interpolator")),
            (this.options = t),
            (this.format =
              (t.interpolation && t.interpolation.format) ||
              function (e) {
                return e;
              }),
            this.init(t);
        }
        return (
          (0, w.Z)(e, [
            {
              key: "init",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                e.interpolation || (e.interpolation = { escapeValue: !0 });
                var t = e.interpolation;
                (this.escape = void 0 !== t.escape ? t.escape : K),
                  (this.escapeValue =
                    void 0 === t.escapeValue || t.escapeValue),
                  (this.useRawValueToEscape =
                    void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                  (this.prefix = t.prefix
                    ? _(t.prefix)
                    : t.prefixEscaped || "{{"),
                  (this.suffix = t.suffix
                    ? _(t.suffix)
                    : t.suffixEscaped || "}}"),
                  (this.formatSeparator = t.formatSeparator
                    ? t.formatSeparator
                    : t.formatSeparator || ","),
                  (this.unescapePrefix = t.unescapeSuffix
                    ? ""
                    : t.unescapePrefix || "-"),
                  (this.unescapeSuffix = this.unescapePrefix
                    ? ""
                    : t.unescapeSuffix || ""),
                  (this.nestingPrefix = t.nestingPrefix
                    ? _(t.nestingPrefix)
                    : t.nestingPrefixEscaped || _("$t(")),
                  (this.nestingSuffix = t.nestingSuffix
                    ? _(t.nestingSuffix)
                    : t.nestingSuffixEscaped || _(")")),
                  (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                    ? t.nestingOptionsSeparator
                    : t.nestingOptionsSeparator || ","),
                  (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                  (this.alwaysFormat =
                    void 0 !== t.alwaysFormat && t.alwaysFormat),
                  this.resetRegExp();
              },
            },
            {
              key: "reset",
              value: function () {
                this.options && this.init(this.options);
              },
            },
            {
              key: "resetRegExp",
              value: function () {
                var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                this.regexp = RegExp(e, "g");
                var t = ""
                  .concat(this.prefix)
                  .concat(this.unescapePrefix, "(.+?)")
                  .concat(this.unescapeSuffix)
                  .concat(this.suffix);
                this.regexpUnescape = RegExp(t, "g");
                var n = ""
                  .concat(this.nestingPrefix, "(.+?)")
                  .concat(this.nestingSuffix);
                this.nestingRegexp = RegExp(n, "g");
              },
            },
            {
              key: "interpolate",
              value: function (e, t, n, r) {
                var o,
                  i,
                  a,
                  s = this,
                  c =
                    (this.options &&
                      this.options.interpolation &&
                      this.options.interpolation.defaultVariables) ||
                    {};
                function u(e) {
                  return e.replace(/\$/g, "$$$$");
                }
                var l = function (e) {
                  if (0 > e.indexOf(s.formatSeparator)) {
                    var o = U(t, c, e);
                    return s.alwaysFormat
                      ? s.format(
                          o,
                          void 0,
                          n,
                          eu(eu(eu({}, r), t), {}, { interpolationkey: e })
                        )
                      : o;
                  }
                  var i = e.split(s.formatSeparator),
                    a = i.shift().trim(),
                    u = i.join(s.formatSeparator).trim();
                  return s.format(
                    U(t, c, a),
                    u,
                    n,
                    eu(eu(eu({}, r), t), {}, { interpolationkey: a })
                  );
                };
                this.resetRegExp();
                var f =
                    (r && r.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler,
                  p =
                    r &&
                    r.interpolation &&
                    void 0 !== r.interpolation.skipOnVariables
                      ? r.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables;
                return (
                  [
                    {
                      regex: this.regexpUnescape,
                      safeValue: function (e) {
                        return u(e);
                      },
                    },
                    {
                      regex: this.regexp,
                      safeValue: function (e) {
                        return s.escapeValue ? u(s.escape(e)) : u(e);
                      },
                    },
                  ].forEach(function (t) {
                    for (a = 0; (o = t.regex.exec(e)); ) {
                      var n = o[1].trim();
                      if (void 0 === (i = l(n))) {
                        if ("function" == typeof f) {
                          var c = f(e, o, r);
                          i = "string" == typeof c ? c : "";
                        } else if (r && r.hasOwnProperty(n)) i = "";
                        else if (p) {
                          i = o[0];
                          continue;
                        } else
                          s.logger.warn(
                            "missed to pass in variable "
                              .concat(n, " for interpolating ")
                              .concat(e)
                          ),
                            (i = "");
                      } else
                        "string" == typeof i ||
                          s.useRawValueToEscape ||
                          (i = A(i));
                      var u = t.safeValue(i);
                      if (
                        ((e = e.replace(o[0], u)),
                        p
                          ? ((t.regex.lastIndex += i.length),
                            (t.regex.lastIndex -= o[0].length))
                          : (t.regex.lastIndex = 0),
                        ++a >= s.maxReplaces)
                      )
                        break;
                    }
                  }),
                  e
                );
              },
            },
            {
              key: "nest",
              value: function (e, t) {
                var n,
                  r,
                  o,
                  i = this,
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                function s(e, t) {
                  var n = this.nestingOptionsSeparator;
                  if (0 > e.indexOf(n)) return e;
                  var r = e.split(RegExp("".concat(n, "[ ]*{"))),
                    i = "{".concat(r[1]);
                  e = r[0];
                  var a = (i = this.interpolate(i, o)).match(/'/g),
                    s = i.match(/"/g);
                  ((a && a.length % 2 == 0 && !s) || s.length % 2 != 0) &&
                    (i = i.replace(/'/g, '"'));
                  try {
                    (o = JSON.parse(i)), t && (o = eu(eu({}, t), o));
                  } catch (c) {
                    return (
                      this.logger.warn(
                        "failed parsing options string in nesting for key ".concat(
                          e
                        ),
                        c
                      ),
                      "".concat(e).concat(n).concat(i)
                    );
                  }
                  return delete o.defaultValue, e;
                }
                for (; (n = this.nestingRegexp.exec(e)); ) {
                  var c = [];
                  ((o = eu({}, a)).applyPostProcessor = !1),
                    delete o.defaultValue;
                  var u = !1;
                  if (
                    -1 !== n[0].indexOf(this.formatSeparator) &&
                    !/{.*}/.test(n[1])
                  ) {
                    var l = n[1].split(this.formatSeparator).map(function (e) {
                      return e.trim();
                    });
                    (n[1] = l.shift()), (c = l), (u = !0);
                  }
                  if (
                    (r = t(s.call(this, n[1].trim(), o), o)) &&
                    n[0] === e &&
                    "string" != typeof r
                  )
                    return r;
                  "string" != typeof r && (r = A(r)),
                    r ||
                      (this.logger.warn(
                        "missed to resolve "
                          .concat(n[1], " for nesting ")
                          .concat(e)
                      ),
                      (r = "")),
                    u &&
                      (r = c.reduce(function (e, t) {
                        return i.format(
                          e,
                          t,
                          a.lng,
                          eu(eu({}, a), {}, { interpolationkey: n[1].trim() })
                        );
                      }, r.trim())),
                    (e = e.replace(n[0], r)),
                    (this.regexp.lastIndex = 0);
                }
                return e;
              },
            },
          ]),
          e
        );
      })();
      function ef(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ep(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ef(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ef(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function eg(e) {
        var t = {};
        return function (n, r, o) {
          var i = r + JSON.stringify(o),
            a = t[i];
          return a || ((a = e(r, o)), (t[i] = a)), a(n);
        };
      }
      var ed = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (0, S.Z)(this, e),
            (this.logger = Z.create("formatter")),
            (this.options = t),
            (this.formats = {
              number: eg(function (e, t) {
                var n = new Intl.NumberFormat(e, t);
                return function (e) {
                  return n.format(e);
                };
              }),
              currency: eg(function (e, t) {
                var n = new Intl.NumberFormat(
                  e,
                  ep(ep({}, t), {}, { style: "currency" })
                );
                return function (e) {
                  return n.format(e);
                };
              }),
              datetime: eg(function (e, t) {
                var n = new Intl.DateTimeFormat(e, ep({}, t));
                return function (e) {
                  return n.format(e);
                };
              }),
              relativetime: eg(function (e, t) {
                var n = new Intl.RelativeTimeFormat(e, ep({}, t));
                return function (e) {
                  return n.format(e, t.range || "day");
                };
              }),
              list: eg(function (e, t) {
                var n = new Intl.ListFormat(e, ep({}, t));
                return function (e) {
                  return n.format(e);
                };
              }),
            }),
            this.init(t);
        }
        return (
          (0, w.Z)(e, [
            {
              key: "init",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { interpolation: {} },
                  n = t.interpolation;
                this.formatSeparator = n.formatSeparator
                  ? n.formatSeparator
                  : n.formatSeparator || ",";
              },
            },
            {
              key: "add",
              value: function (e, t) {
                this.formats[e.toLowerCase().trim()] = t;
              },
            },
            {
              key: "addCached",
              value: function (e, t) {
                this.formats[e.toLowerCase().trim()] = eg(t);
              },
            },
            {
              key: "format",
              value: function (e, t, n, r) {
                var o = this;
                return t.split(this.formatSeparator).reduce(function (e, t) {
                  var i = (function (e) {
                      var t = e.toLowerCase().trim(),
                        n = {};
                      if (e.indexOf("(") > -1) {
                        var r = e.split("(");
                        t = r[0].toLowerCase().trim();
                        var o = r[1].substring(0, r[1].length - 1);
                        "currency" === t && 0 > o.indexOf(":")
                          ? n.currency || (n.currency = o.trim())
                          : "relativetime" === t && 0 > o.indexOf(":")
                          ? n.range || (n.range = o.trim())
                          : o.split(";").forEach(function (e) {
                              if (e) {
                                var t,
                                  r =
                                    ((t = e.split(":")),
                                    (0, R.Z)(t) ||
                                      l(t) ||
                                      (0, f.Z)(t) ||
                                      (0, C.Z)()),
                                  o = r[0],
                                  i = r
                                    .slice(1)
                                    .join(":")
                                    .trim()
                                    .replace(/^'+|'+$/g, "");
                                n[o.trim()] || (n[o.trim()] = i),
                                  "false" === i && (n[o.trim()] = !1),
                                  "true" === i && (n[o.trim()] = !0),
                                  isNaN(i) || (n[o.trim()] = parseInt(i, 10));
                              }
                            });
                      }
                      return { formatName: t, formatOptions: n };
                    })(t),
                    a = i.formatName,
                    s = i.formatOptions;
                  if (o.formats[a]) {
                    var c = e;
                    try {
                      var u =
                          (r &&
                            r.formatParams &&
                            r.formatParams[r.interpolationkey]) ||
                          {},
                        p = u.locale || u.lng || r.locale || r.lng || n;
                      c = o.formats[a](e, p, ep(ep(ep({}, s), r), u));
                    } catch (g) {
                      o.logger.warn(g);
                    }
                    return c;
                  }
                  return (
                    o.logger.warn(
                      "there was no format function for ".concat(a)
                    ),
                    e
                  );
                }, e);
              },
            },
          ]),
          e
        );
      })();
      function eh(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ey(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eh(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eh(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ev = (function (e) {
        P(r, e);
        var t,
          n =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                n = N(r);
              if (t) {
                var o = N(this).constructor;
                e = Reflect.construct(n, arguments, o);
              } else e = n.apply(this, arguments);
              return L(this, e);
            });
        function r(e, t, o) {
          var i,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          return (
            (0, S.Z)(this, r),
            (i = n.call(this)),
            z && F.call(x(i)),
            (i.backend = e),
            (i.store = t),
            (i.services = o),
            (i.languageUtils = o.languageUtils),
            (i.options = a),
            (i.logger = Z.create("backendConnector")),
            (i.waitingReads = []),
            (i.maxParallelReads = a.maxParallelReads || 10),
            (i.readingCalls = 0),
            (i.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5),
            (i.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350),
            (i.state = {}),
            (i.queue = []),
            i.backend && i.backend.init && i.backend.init(o, a.backend, a),
            i
          );
        }
        return (
          (0, w.Z)(r, [
            {
              key: "queueLoad",
              value: function (e, t, n, r) {
                var o = this,
                  i = {},
                  a = {},
                  s = {},
                  c = {};
                return (
                  e.forEach(function (e) {
                    var r = !0;
                    t.forEach(function (t) {
                      var s = "".concat(e, "|").concat(t);
                      !n.reload && o.store.hasResourceBundle(e, t)
                        ? (o.state[s] = 2)
                        : o.state[s] < 0 ||
                          (1 === o.state[s]
                            ? void 0 === a[s] && (a[s] = !0)
                            : ((o.state[s] = 1),
                              (r = !1),
                              void 0 === a[s] && (a[s] = !0),
                              void 0 === i[s] && (i[s] = !0),
                              void 0 === c[t] && (c[t] = !0)));
                    }),
                      r || (s[e] = !0);
                  }),
                  (Object.keys(i).length || Object.keys(a).length) &&
                    this.queue.push({
                      pending: a,
                      pendingCount: Object.keys(a).length,
                      loaded: {},
                      errors: [],
                      callback: r,
                    }),
                  {
                    toLoad: Object.keys(i),
                    pending: Object.keys(a),
                    toLoadLanguages: Object.keys(s),
                    toLoadNamespaces: Object.keys(c),
                  }
                );
              },
            },
            {
              key: "loaded",
              value: function (e, t, n) {
                var r = e.split("|"),
                  o = r[0],
                  i = r[1];
                t && this.emit("failedLoading", o, i, t),
                  n && this.store.addResourceBundle(o, i, n),
                  (this.state[e] = t ? -1 : 2);
                var a = {};
                this.queue.forEach(function (n) {
                  var r, s, c, u, l;
                  ((c = (s = V(n.loaded, [o], Object)).obj)[(u = s.k)] =
                    c[u] || []),
                    r && (c[u] = c[u].concat(i)),
                    r || c[u].push(i),
                    void 0 !== (l = n).pending[e] &&
                      (delete l.pending[e], l.pendingCount--),
                    t && n.errors.push(t),
                    0 !== n.pendingCount ||
                      n.done ||
                      (Object.keys(n.loaded).forEach(function (e) {
                        a[e] || (a[e] = {});
                        var t = n.loaded[e];
                        t.length &&
                          t.forEach(function (t) {
                            void 0 === a[e][t] && (a[e][t] = !0);
                          });
                      }),
                      (n.done = !0),
                      n.errors.length ? n.callback(n.errors) : n.callback());
                }),
                  this.emit("loaded", a),
                  (this.queue = this.queue.filter(function (e) {
                    return !e.done;
                  }));
              },
            },
            {
              key: "read",
              value: function (e, t, n) {
                var r = this,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  i =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : this.retryTimeout,
                  a = arguments.length > 5 ? arguments[5] : void 0;
                if (!e.length) return a(null, {});
                if (this.readingCalls >= this.maxParallelReads) {
                  this.waitingReads.push({
                    lng: e,
                    ns: t,
                    fcName: n,
                    tried: o,
                    wait: i,
                    callback: a,
                  });
                  return;
                }
                this.readingCalls++;
                var s = function (s, c) {
                    if ((r.readingCalls--, r.waitingReads.length > 0)) {
                      var u = r.waitingReads.shift();
                      r.read(
                        u.lng,
                        u.ns,
                        u.fcName,
                        u.tried,
                        u.wait,
                        u.callback
                      );
                    }
                    if (s && c && o < r.maxRetries) {
                      setTimeout(function () {
                        r.read.call(r, e, t, n, o + 1, 2 * i, a);
                      }, i);
                      return;
                    }
                    a(s, c);
                  },
                  c = this.backend[n].bind(this.backend);
                if (2 === c.length) {
                  try {
                    var u = c(e, t);
                    u && "function" == typeof u.then
                      ? u
                          .then(function (e) {
                            return s(null, e);
                          })
                          .catch(s)
                      : s(null, u);
                  } catch (l) {
                    s(l);
                  }
                  return;
                }
                return c(e, t, s);
              },
            },
            {
              key: "prepareLoading",
              value: function (e, t) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  o = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                  return (
                    this.logger.warn(
                      "No backend was added via i18next.use. Will not load resources."
                    ),
                    o && o()
                  );
                "string" == typeof e &&
                  (e = this.languageUtils.toResolveHierarchy(e)),
                  "string" == typeof t && (t = [t]);
                var i = this.queueLoad(e, t, r, o);
                if (!i.toLoad.length) return i.pending.length || o(), null;
                i.toLoad.forEach(function (e) {
                  n.loadOne(e);
                });
              },
            },
            {
              key: "load",
              value: function (e, t, n) {
                this.prepareLoading(e, t, {}, n);
              },
            },
            {
              key: "reload",
              value: function (e, t, n) {
                this.prepareLoading(e, t, { reload: !0 }, n);
              },
            },
            {
              key: "loadOne",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  r = e.split("|"),
                  o = r[0],
                  i = r[1];
                this.read(o, i, "read", void 0, void 0, function (r, a) {
                  r &&
                    t.logger.warn(
                      ""
                        .concat(n, "loading namespace ")
                        .concat(i, " for language ")
                        .concat(o, " failed"),
                      r
                    ),
                    !r &&
                      a &&
                      t.logger.log(
                        ""
                          .concat(n, "loaded namespace ")
                          .concat(i, " for language ")
                          .concat(o),
                        a
                      ),
                    t.loaded(e, r, a);
                });
              },
            },
            {
              key: "saveMissing",
              value: function (e, t, n, r, o) {
                var i =
                    arguments.length > 5 && void 0 !== arguments[5]
                      ? arguments[5]
                      : {},
                  a =
                    arguments.length > 6 && void 0 !== arguments[6]
                      ? arguments[6]
                      : function () {};
                if (
                  this.services.utils &&
                  this.services.utils.hasLoadedNamespace &&
                  !this.services.utils.hasLoadedNamespace(t)
                ) {
                  this.logger.warn(
                    'did not save key "'
                      .concat(n, '" as the namespace "')
                      .concat(t, '" was not yet loaded'),
                    "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                  );
                  return;
                }
                if (null != n && "" !== n) {
                  if (this.backend && this.backend.create) {
                    var s,
                      c = ey(ey({}, i), {}, { isUpdate: o }),
                      u = this.backend.create.bind(this.backend);
                    if (u.length < 6)
                      try {
                        (s =
                          5 === u.length ? u(e, t, n, r, c) : u(e, t, n, r)) &&
                        "function" == typeof s.then
                          ? s
                              .then(function (e) {
                                return a(null, e);
                              })
                              .catch(a)
                          : a(null, s);
                      } catch (l) {
                        a(l);
                      }
                    else u(e, t, n, r, a, c);
                  }
                  e && e[0] && this.store.addResource(e[0], t, n, r);
                }
              },
            },
          ]),
          r
        );
      })(F);
      function em() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !0,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            var t = {};
            if (
              ("object" === (0, p.Z)(e[1]) && (t = e[1]),
              "string" == typeof e[1] && (t.defaultValue = e[1]),
              "string" == typeof e[2] && (t.tDescription = e[2]),
              "object" === (0, p.Z)(e[2]) || "object" === (0, p.Z)(e[3]))
            ) {
              var n = e[3] || e[2];
              Object.keys(n).forEach(function (e) {
                t[e] = n[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: function (e, t, n, r) {
              return e;
            },
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        };
      }
      function eb(e) {
        return (
          "string" == typeof e.ns && (e.ns = [e.ns]),
          "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            0 > e.supportedLngs.indexOf("cimode") &&
            (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
          e
        );
      }
      function eO(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ek(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eO(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eO(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function eS() {}
      var ew = (function (e) {
        P(r, e);
        var t,
          n =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                n = N(r);
              if (t) {
                var o = N(this).constructor;
                e = Reflect.construct(n, arguments, o);
              } else e = n.apply(this, arguments);
              return L(this, e);
            });
        function r() {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = arguments.length > 1 ? arguments[1] : void 0;
          if (
            ((0, S.Z)(this, r),
            (e = n.call(this)),
            z && F.call(x(e)),
            (e.options = eb(t)),
            (e.services = {}),
            (e.logger = Z),
            (e.modules = { external: [] }),
            !(function (e) {
              Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(
                function (t) {
                  "function" == typeof e[t] && (e[t] = e[t].bind(e));
                }
              );
            })(x(e)),
            o && !e.isInitialized && !t.isClone)
          ) {
            if (!e.options.initImmediate) return e.init(t, o), L(e, x(e));
            setTimeout(function () {
              e.init(t, o);
            }, 0);
          }
          return e;
        }
        return (
          (0, w.Z)(r, [
            {
              key: "init",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = arguments.length > 1 ? arguments[1] : void 0;
                "function" == typeof t && ((n = t), (t = {})),
                  !t.defaultNS &&
                    !1 !== t.defaultNS &&
                    t.ns &&
                    ("string" == typeof t.ns
                      ? (t.defaultNS = t.ns)
                      : 0 > t.ns.indexOf("translation") &&
                        (t.defaultNS = t.ns[0]));
                var r = em();
                function o(e) {
                  return e ? ("function" == typeof e ? new e() : e) : null;
                }
                if (
                  ((this.options = ek(ek(ek({}, r), this.options), eb(t))),
                  "v1" !== this.options.compatibilityAPI &&
                    (this.options.interpolation = ek(
                      ek({}, r.interpolation),
                      this.options.interpolation
                    )),
                  void 0 !== t.keySeparator &&
                    (this.options.userDefinedKeySeparator = t.keySeparator),
                  void 0 !== t.nsSeparator &&
                    (this.options.userDefinedNsSeparator = t.nsSeparator),
                  !this.options.isClone)
                ) {
                  this.modules.logger
                    ? Z.init(o(this.modules.logger), this.options)
                    : Z.init(null, this.options),
                    this.modules.formatter
                      ? (i = this.modules.formatter)
                      : "undefined" != typeof Intl && (i = ed);
                  var i,
                    a = new en(this.options);
                  this.store = new W(this.options.resources, this.options);
                  var s = this.services;
                  (s.logger = Z),
                    (s.resourceStore = this.store),
                    (s.languageUtils = a),
                    (s.pluralResolver = new es(a, {
                      prepend: this.options.pluralSeparator,
                      compatibilityJSON: this.options.compatibilityJSON,
                      simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                    })),
                    i &&
                      (!this.options.interpolation.format ||
                        this.options.interpolation.format ===
                          r.interpolation.format) &&
                      ((s.formatter = o(i)),
                      s.formatter.init(s, this.options),
                      (this.options.interpolation.format = s.formatter.format.bind(
                        s.formatter
                      ))),
                    (s.interpolator = new el(this.options)),
                    (s.utils = {
                      hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                    }),
                    (s.backendConnector = new ev(
                      o(this.modules.backend),
                      s.resourceStore,
                      s,
                      this.options
                    )),
                    s.backendConnector.on("*", function (t) {
                      for (
                        var n = arguments.length,
                          r = Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o];
                      e.emit.apply(e, [t].concat(r));
                    }),
                    this.modules.languageDetector &&
                      ((s.languageDetector = o(this.modules.languageDetector)),
                      s.languageDetector.init &&
                        s.languageDetector.init(
                          s,
                          this.options.detection,
                          this.options
                        )),
                    this.modules.i18nFormat &&
                      ((s.i18nFormat = o(this.modules.i18nFormat)),
                      s.i18nFormat.init && s.i18nFormat.init(this)),
                    (this.translator = new ee(this.services, this.options)),
                    this.translator.on("*", function (t) {
                      for (
                        var n = arguments.length,
                          r = Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o];
                      e.emit.apply(e, [t].concat(r));
                    }),
                    this.modules.external.forEach(function (t) {
                      t.init && t.init(e);
                    });
                }
                if (
                  ((this.format = this.options.interpolation.format),
                  n || (n = eS),
                  this.options.fallbackLng &&
                    !this.services.languageDetector &&
                    !this.options.lng)
                ) {
                  var c = this.services.languageUtils.getFallbackCodes(
                    this.options.fallbackLng
                  );
                  c.length > 0 && "dev" !== c[0] && (this.options.lng = c[0]);
                }
                this.services.languageDetector ||
                  this.options.lng ||
                  this.logger.warn(
                    "init: no languageDetector is used and no lng is defined"
                  ),
                  [
                    "getResource",
                    "hasResourceBundle",
                    "getResourceBundle",
                    "getDataByLanguage",
                  ].forEach(function (t) {
                    e[t] = function () {
                      var n;
                      return (n = e.store)[t].apply(n, arguments);
                    };
                  }),
                  [
                    "addResource",
                    "addResources",
                    "addResourceBundle",
                    "removeResourceBundle",
                  ].forEach(function (t) {
                    e[t] = function () {
                      var n;
                      return (n = e.store)[t].apply(n, arguments), e;
                    };
                  });
                var u = T(),
                  l = function () {
                    var t = function (t, r) {
                      e.isInitialized &&
                        !e.initializedStoreOnce &&
                        e.logger.warn(
                          "init: i18next is already initialized. You should call init just once!"
                        ),
                        (e.isInitialized = !0),
                        e.options.isClone ||
                          e.logger.log("initialized", e.options),
                        e.emit("initialized", e.options),
                        u.resolve(r),
                        n(t, r);
                    };
                    if (
                      e.languages &&
                      "v1" !== e.options.compatibilityAPI &&
                      !e.isInitialized
                    )
                      return t(null, e.t.bind(e));
                    e.changeLanguage(e.options.lng, t);
                  };
                return (
                  this.options.resources || !this.options.initImmediate
                    ? l()
                    : setTimeout(l, 0),
                  u
                );
              },
            },
            {
              key: "loadResources",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : eS,
                  r = n,
                  o = "string" == typeof e ? e : this.language;
                if (
                  ("function" == typeof e && (r = e),
                  !this.options.resources ||
                    this.options.partialBundledLanguages)
                ) {
                  if (o && "cimode" === o.toLowerCase()) return r();
                  var i = [],
                    a = function (e) {
                      e &&
                        t.services.languageUtils
                          .toResolveHierarchy(e)
                          .forEach(function (e) {
                            0 > i.indexOf(e) && i.push(e);
                          });
                    };
                  o
                    ? a(o)
                    : this.services.languageUtils
                        .getFallbackCodes(this.options.fallbackLng)
                        .forEach(function (e) {
                          return a(e);
                        }),
                    this.options.preload &&
                      this.options.preload.forEach(function (e) {
                        return a(e);
                      }),
                    this.services.backendConnector.load(
                      i,
                      this.options.ns,
                      function (e) {
                        e ||
                          t.resolvedLanguage ||
                          !t.language ||
                          t.setResolvedLanguage(t.language),
                          r(e);
                      }
                    );
                } else r(null);
              },
            },
            {
              key: "reloadResources",
              value: function (e, t, n) {
                var r = T();
                return (
                  e || (e = this.languages),
                  t || (t = this.options.ns),
                  n || (n = eS),
                  this.services.backendConnector.reload(e, t, function (e) {
                    r.resolve(), n(e);
                  }),
                  r
                );
              },
            },
            {
              key: "use",
              value: function (e) {
                if (!e)
                  throw Error(
                    "You are passing an undefined module! Please check the object you are passing to i18next.use()"
                  );
                if (!e.type)
                  throw Error(
                    "You are passing a wrong module! Please check the object you are passing to i18next.use()"
                  );
                return (
                  "backend" === e.type && (this.modules.backend = e),
                  ("logger" === e.type || (e.log && e.warn && e.error)) &&
                    (this.modules.logger = e),
                  "languageDetector" === e.type &&
                    (this.modules.languageDetector = e),
                  "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                  "postProcessor" === e.type && G.addPostProcessor(e),
                  "formatter" === e.type && (this.modules.formatter = e),
                  "3rdParty" === e.type && this.modules.external.push(e),
                  this
                );
              },
            },
            {
              key: "setResolvedLanguage",
              value: function (e) {
                if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
                  for (var t = 0; t < this.languages.length; t++) {
                    var n = this.languages[t];
                    if (
                      !(["cimode", "dev"].indexOf(n) > -1) &&
                      this.store.hasLanguageSomeTranslations(n)
                    ) {
                      this.resolvedLanguage = n;
                      break;
                    }
                  }
              },
            },
            {
              key: "changeLanguage",
              value: function (e, t) {
                var n = this;
                this.isLanguageChangingTo = e;
                var r = T();
                this.emit("languageChanging", e);
                var o = function (e) {
                    (n.language = e),
                      (n.languages = n.services.languageUtils.toResolveHierarchy(
                        e
                      )),
                      (n.resolvedLanguage = void 0),
                      n.setResolvedLanguage(e);
                  },
                  i = function (e, i) {
                    i
                      ? (o(i),
                        n.translator.changeLanguage(i),
                        (n.isLanguageChangingTo = void 0),
                        n.emit("languageChanged", i),
                        n.logger.log("languageChanged", i))
                      : (n.isLanguageChangingTo = void 0),
                      r.resolve(function () {
                        return n.t.apply(n, arguments);
                      }),
                      t &&
                        t(e, function () {
                          return n.t.apply(n, arguments);
                        });
                  },
                  a = function (t) {
                    e || t || !n.services.languageDetector || (t = []);
                    var r =
                      "string" == typeof t
                        ? t
                        : n.services.languageUtils.getBestMatchFromCodes(t);
                    r &&
                      (n.language || o(r),
                      n.translator.language || n.translator.changeLanguage(r),
                      n.services.languageDetector &&
                        n.services.languageDetector.cacheUserLanguage &&
                        n.services.languageDetector.cacheUserLanguage(r)),
                      n.loadResources(r, function (e) {
                        i(e, r);
                      });
                  };
                return (
                  e ||
                  !this.services.languageDetector ||
                  this.services.languageDetector.async
                    ? !e &&
                      this.services.languageDetector &&
                      this.services.languageDetector.async
                      ? 0 === this.services.languageDetector.detect.length
                        ? this.services.languageDetector.detect().then(a)
                        : this.services.languageDetector.detect(a)
                      : a(e)
                    : a(this.services.languageDetector.detect()),
                  r
                );
              },
            },
            {
              key: "getFixedT",
              value: function (e, t, n) {
                var r = this,
                  o = function e(t, o) {
                    if ("object" !== (0, p.Z)(o)) {
                      for (
                        var i,
                          a = arguments.length,
                          s = Array(a > 2 ? a - 2 : 0),
                          c = 2;
                        c < a;
                        c++
                      )
                        s[c - 2] = arguments[c];
                      i = r.options.overloadTranslationOptionHandler(
                        [t, o].concat(s)
                      );
                    } else i = ek({}, o);
                    (i.lng = i.lng || e.lng),
                      (i.lngs = i.lngs || e.lngs),
                      (i.ns = i.ns || e.ns),
                      (i.keyPrefix = i.keyPrefix || n || e.keyPrefix);
                    var u = r.options.keySeparator || ".",
                      l = i.keyPrefix
                        ? "".concat(i.keyPrefix).concat(u).concat(t)
                        : t;
                    return r.t(l, i);
                  };
                return (
                  "string" == typeof e ? (o.lng = e) : (o.lngs = e),
                  (o.ns = t),
                  (o.keyPrefix = n),
                  o
                );
              },
            },
            {
              key: "t",
              value: function () {
                var e;
                return (
                  this.translator &&
                  (e = this.translator).translate.apply(e, arguments)
                );
              },
            },
            {
              key: "exists",
              value: function () {
                var e;
                return (
                  this.translator &&
                  (e = this.translator).exists.apply(e, arguments)
                );
              },
            },
            {
              key: "setDefaultNamespace",
              value: function (e) {
                this.options.defaultNS = e;
              },
            },
            {
              key: "hasLoadedNamespace",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                if (!this.isInitialized)
                  return (
                    this.logger.warn(
                      "hasLoadedNamespace: i18next was not initialized",
                      this.languages
                    ),
                    !1
                  );
                if (!this.languages || !this.languages.length)
                  return (
                    this.logger.warn(
                      "hasLoadedNamespace: i18n.languages were undefined or empty",
                      this.languages
                    ),
                    !1
                  );
                var r = this.resolvedLanguage || this.languages[0],
                  o = !!this.options && this.options.fallbackLng,
                  i = this.languages[this.languages.length - 1];
                if ("cimode" === r.toLowerCase()) return !0;
                var a = function (e, n) {
                  var r =
                    t.services.backendConnector.state[
                      "".concat(e, "|").concat(n)
                    ];
                  return -1 === r || 2 === r;
                };
                if (n.precheck) {
                  var s = n.precheck(this, a);
                  if (void 0 !== s) return s;
                }
                return !!(
                  this.hasResourceBundle(r, e) ||
                  !this.services.backendConnector.backend ||
                  (this.options.resources &&
                    !this.options.partialBundledLanguages) ||
                  (a(r, e) && (!o || a(i, e)))
                );
              },
            },
            {
              key: "loadNamespaces",
              value: function (e, t) {
                var n = this,
                  r = T();
                return this.options.ns
                  ? ("string" == typeof e && (e = [e]),
                    e.forEach(function (e) {
                      0 > n.options.ns.indexOf(e) && n.options.ns.push(e);
                    }),
                    this.loadResources(function (e) {
                      r.resolve(), t && t(e);
                    }),
                    r)
                  : (t && t(), Promise.resolve());
              },
            },
            {
              key: "loadLanguages",
              value: function (e, t) {
                var n = T();
                "string" == typeof e && (e = [e]);
                var r = this.options.preload || [],
                  o = e.filter(function (e) {
                    return 0 > r.indexOf(e);
                  });
                return o.length
                  ? ((this.options.preload = r.concat(o)),
                    this.loadResources(function (e) {
                      n.resolve(), t && t(e);
                    }),
                    n)
                  : (t && t(), Promise.resolve());
              },
            },
            {
              key: "dir",
              value: function (e) {
                return (e ||
                  (e =
                    this.resolvedLanguage ||
                    (this.languages && this.languages.length > 0
                      ? this.languages[0]
                      : this.language)),
                e)
                  ? [
                      "ar",
                      "shu",
                      "sqr",
                      "ssh",
                      "xaa",
                      "yhd",
                      "yud",
                      "aao",
                      "abh",
                      "abv",
                      "acm",
                      "acq",
                      "acw",
                      "acx",
                      "acy",
                      "adf",
                      "ads",
                      "aeb",
                      "aec",
                      "afb",
                      "ajp",
                      "apc",
                      "apd",
                      "arb",
                      "arq",
                      "ars",
                      "ary",
                      "arz",
                      "auz",
                      "avl",
                      "ayh",
                      "ayl",
                      "ayn",
                      "ayp",
                      "bbz",
                      "pga",
                      "he",
                      "iw",
                      "ps",
                      "pbt",
                      "pbu",
                      "pst",
                      "prp",
                      "prd",
                      "ug",
                      "ur",
                      "ydd",
                      "yds",
                      "yih",
                      "ji",
                      "yi",
                      "hbo",
                      "men",
                      "xmn",
                      "fa",
                      "jpr",
                      "peo",
                      "pes",
                      "prs",
                      "dv",
                      "sam",
                      "ckb",
                    ].indexOf(
                      (
                        (this.services && this.services.languageUtils) ||
                        new en(em())
                      ).getLanguagePartFromCode(e)
                    ) > -1 || e.toLowerCase().indexOf("-arab") > 1
                    ? "rtl"
                    : "ltr"
                  : "rtl";
              },
            },
            {
              key: "cloneInstance",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : eS,
                  o = ek(ek(ek({}, this.options), t), { isClone: !0 }),
                  i = new r(o);
                return (
                  (void 0 !== t.debug || void 0 !== t.prefix) &&
                    (i.logger = i.logger.clone(t)),
                  ["store", "services", "language"].forEach(function (t) {
                    i[t] = e[t];
                  }),
                  (i.services = ek({}, this.services)),
                  (i.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  (i.translator = new ee(i.services, i.options)),
                  i.translator.on("*", function (e) {
                    for (
                      var t = arguments.length,
                        n = Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    i.emit.apply(i, [e].concat(n));
                  }),
                  i.init(o, n),
                  (i.translator.options = i.options),
                  (i.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  i
                );
              },
            },
            {
              key: "toJSON",
              value: function () {
                return {
                  options: this.options,
                  store: this.store,
                  language: this.language,
                  languages: this.languages,
                  resolvedLanguage: this.resolvedLanguage,
                };
              },
            },
          ]),
          r
        );
      })(F);
      (0, i.Z)(ew, "createInstance", function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return new ew(e, t);
      });
      var ex = ew.createInstance();
      (ex.createInstance = ew.createInstance),
        ex.createInstance,
        ex.dir,
        ex.init,
        ex.loadResources,
        ex.reloadResources,
        ex.use,
        ex.changeLanguage,
        ex.getFixedT,
        ex.t,
        ex.exists,
        ex.setDefaultNamespace,
        ex.hasLoadedNamespace,
        ex.loadNamespaces,
        ex.loadLanguages;
      var ej = function (e) {
          void 0 === e.ns && (e.ns = []);
          var t,
            n,
            r = ex.createInstance(e);
          return (
            r.isInitialized
              ? (t = Promise.resolve(ex.t))
              : (null == e ||
                  null === (n = e.use) ||
                  void 0 === n ||
                  n.forEach(function (e) {
                    return r.use(e);
                  }),
                "function" == typeof e.onPreInitI18next &&
                  e.onPreInitI18next(r),
                (t = r.init(e))),
            { i18n: r, initPromise: t }
          );
        },
        eP = a.createElement;
      function eL(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eN(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eL(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eL(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var eR = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return c()(function (n) {
          var i,
            s,
            c = n.pageProps._nextI18Next,
            u =
              null !== (i = null == c ? void 0 : c.initialLocale) &&
              void 0 !== i
                ? i
                : null == n
                ? void 0
                : null === (s = n.router) || void 0 === s
                ? void 0
                : s.locale,
            l = null == c ? void 0 : c.ns,
            f = (0, a.useMemo)(
              function () {
                if (!c && !t) return null;
                var e,
                  n = null != t ? t : null == c ? void 0 : c.userConfig;
                if (!n)
                  throw Error(
                    "appWithTranslation was called without a next-i18next config"
                  );
                if (!(null != n && n.i18n))
                  throw Error(
                    "appWithTranslation was called without config.i18n"
                  );
                if (
                  !(
                    null != n &&
                    null !== (e = n.i18n) &&
                    void 0 !== e &&
                    e.defaultLocale
                  )
                )
                  throw Error(
                    "config.i18n does not include a defaultLocale property"
                  );
                var r = (c || {}).initialI18nStore,
                  o = null != t && t.resources ? t.resources : r;
                return (
                  u || (u = n.i18n.defaultLocale),
                  ej(
                    eN(
                      eN({}, k(eN(eN({}, n), {}, { lng: u }))),
                      {},
                      { lng: u, ns: l, resources: o }
                    )
                  ).i18n
                );
              },
              [c, u, t, l]
            );
          return null !== f
            ? eP(r.a3, { i18n: f }, eP(e, n))
            : eP(e, o({ key: u }, n));
        }, e);
      };
    },
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(3847);
        },
      ]);
    },
    3847: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(5893);
      n(7475), n(7294);
      var o = n(4298),
        i = n.n(o),
        a = n(8287);
      t.default = (0, a.Jc)(function (e) {
        let { Component: t, pageProps: n } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i(), {
              strategy: "afterInteractive",
              async: !0,
              src: "https://www.googletagmanager.com/gtag/js?id=G-J626MJ2WSK",
            }),
            (0, r.jsx)(i(), {
              async: !0,
              crossOrigin: "anonymous",
              strategy: "afterInteractive",
              src:
                "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3682308768080338",
              onError: (e) => {
                gtag && gtag("event", "Is Blocking Ads", { nonInteraction: 1 });
              },
            }),
            (0, r.jsx)(i(), {
              id: "google-analytics",
              strategy: "afterInteractive",
              dangerouslySetInnerHTML: {
                __html:
                  "\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n        \n          gtag('config', 'G-J626MJ2WSK');\n        ",
              },
            }),
            (0, r.jsx)(t, { ...n }),
          ],
        });
      });
    },
    7475: function () {},
    4298: function (e, t, n) {
      e.exports = n(3573);
    },
    9921: function (e, t) {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        c = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        l = n ? Symbol.for("react.async_mode") : 60111,
        f = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        g = n ? Symbol.for("react.suspense") : 60113,
        d = n ? Symbol.for("react.suspense_list") : 60120,
        h = n ? Symbol.for("react.memo") : 60115,
        y = n ? Symbol.for("react.lazy") : 60116,
        v = n ? Symbol.for("react.block") : 60121,
        m = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        O = n ? Symbol.for("react.scope") : 60119;
      function k(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case l:
                case f:
                case i:
                case s:
                case a:
                case g:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case p:
                    case y:
                    case h:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function S(e) {
        return k(e) === f;
      }
      (t.AsyncMode = l),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = u),
        (t.ContextProvider = c),
        (t.Element = r),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = y),
        (t.Memo = h),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = g),
        (t.isAsyncMode = function (e) {
          return S(e) || k(e) === l;
        }),
        (t.isConcurrentMode = S),
        (t.isContextConsumer = function (e) {
          return k(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return k(e) === c;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return k(e) === p;
        }),
        (t.isFragment = function (e) {
          return k(e) === i;
        }),
        (t.isLazy = function (e) {
          return k(e) === y;
        }),
        (t.isMemo = function (e) {
          return k(e) === h;
        }),
        (t.isPortal = function (e) {
          return k(e) === o;
        }),
        (t.isProfiler = function (e) {
          return k(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return k(e) === a;
        }),
        (t.isSuspense = function (e) {
          return k(e) === g;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === i ||
            e === f ||
            e === s ||
            e === a ||
            e === g ||
            e === d ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === y ||
                e.$$typeof === h ||
                e.$$typeof === c ||
                e.$$typeof === u ||
                e.$$typeof === p ||
                e.$$typeof === m ||
                e.$$typeof === b ||
                e.$$typeof === O ||
                e.$$typeof === v))
          );
        }),
        (t.typeOf = k);
    },
    9864: function (e, t, n) {
      "use strict";
      e.exports = n(9921);
    },
    1739: function (e) {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      };
    },
    907: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    3878: function (e, t, n) {
      "use strict";
      function r(e) {
        if (Array.isArray(e)) return e;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    5671: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    3144: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(3997);
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, (0, r.Z)(o.key), o);
        }
      }
      function i(e, t, n) {
        return (
          t && o(e.prototype, t),
          n && o(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
    },
    4942: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(3997);
      function o(e, t, n) {
        return (
          (t = (0, r.Z)(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
    },
    5267: function (e, t, n) {
      "use strict";
      function r() {
        throw TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    7685: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(3878),
        o = n(181),
        i = n(5267);
      function a(e, t) {
        return (
          (0, r.Z)(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                s = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    c = !0
                  );
              } catch (l) {
                (u = !0), (o = l);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          (0, o.Z)(e, t) ||
          (0, i.Z)()
        );
      }
    },
    3997: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(1002);
      function o(e) {
        var t = (function (e, t) {
          if ("object" !== (0, r.Z)(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" !== (0, r.Z)(o)) return o;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === (0, r.Z)(t) ? t : String(t);
      }
    },
    1002: function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    181: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(907);
      function o(e, t) {
        if (e) {
          if ("string" == typeof e) return (0, r.Z)(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return (0, r.Z)(e, t);
        }
      }
    },
    7421: function (e, t, n) {
      "use strict";
      n.d(t, {
        a3: function () {
          return w;
        },
        $G: function () {
          return S;
        },
      });
      var r,
        o = n(7294);
      function i() {
        if (console && console.warn) {
          for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          "string" == typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])),
            (e = console).warn.apply(e, n);
        }
      }
      n(1739), Object.create(null);
      var a = {};
      function s() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        ("string" == typeof t[0] && a[t[0]]) ||
          ("string" == typeof t[0] && (a[t[0]] = new Date()),
          i.apply(void 0, t));
      }
      function c(e, t, n) {
        e.loadNamespaces(t, function () {
          e.isInitialized
            ? n()
            : e.on("initialized", function t() {
                setTimeout(function () {
                  e.off("initialized", t);
                }, 0),
                  n();
              });
        });
      }
      var u = n(4942),
        l = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        f = {
          "&amp;": "&",
          "&#38;": "&",
          "&lt;": "<",
          "&#60;": "<",
          "&gt;": ">",
          "&#62;": ">",
          "&apos;": "'",
          "&#39;": "'",
          "&quot;": '"',
          "&#34;": '"',
          "&nbsp;": " ",
          "&#160;": " ",
          "&copy;": "\xa9",
          "&#169;": "\xa9",
          "&reg;": "\xae",
          "&#174;": "\xae",
          "&hellip;": "…",
          "&#8230;": "…",
          "&#x2F;": "/",
          "&#47;": "/",
        },
        p = function (e) {
          return f[e];
        },
        g = {
          bindI18n: "languageChanged",
          bindI18nStore: "",
          transEmptyNodeValue: "",
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: "",
          transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
          useSuspense: !0,
          unescape: function (e) {
            return e.replace(l, p);
          },
        },
        d = n(5671),
        h = n(3144),
        y = (0, o.createContext)(),
        v = (function () {
          function e() {
            (0, d.Z)(this, e), (this.usedNamespaces = {});
          }
          return (
            (0, h.Z)(e, [
              {
                key: "addUsedNamespaces",
                value: function (e) {
                  var t = this;
                  e.forEach(function (e) {
                    t.usedNamespaces[e] || (t.usedNamespaces[e] = !0);
                  });
                },
              },
              {
                key: "getUsedNamespaces",
                value: function () {
                  return Object.keys(this.usedNamespaces);
                },
              },
            ]),
            e
          );
        })(),
        m = n(7685);
      function b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var k = function (e, t) {
        var n = (0, o.useRef)();
        return (
          (0, o.useEffect)(
            function () {
              n.current = t ? n.current : e;
            },
            [e, t]
          ),
          n.current
        );
      };
      function S(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.i18n,
          i = (0, o.useContext)(y) || {},
          a = i.i18n,
          u = i.defaultNS,
          l = n || a || r;
        if ((l && !l.reportNamespaces && (l.reportNamespaces = new v()), !l)) {
          s(
            "You will need to pass in an i18next instance by using initReactI18next"
          );
          var f = function (e) {
              return Array.isArray(e) ? e[e.length - 1] : e;
            },
            p = [f, {}, !1];
          return (p.t = f), (p.i18n = {}), (p.ready = !1), p;
        }
        l.options.react &&
          void 0 !== l.options.react.wait &&
          s(
            "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
          );
        var d = O(O(O({}, g), l.options.react), t),
          h = d.useSuspense,
          b = d.keyPrefix,
          S = e || u || (l.options && l.options.defaultNS);
        (S = "string" == typeof S ? [S] : S || ["translation"]),
          l.reportNamespaces.addUsedNamespaces &&
            l.reportNamespaces.addUsedNamespaces(S);
        var w =
          (l.isInitialized || l.initializedStoreOnce) &&
          S.every(function (e) {
            return (function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              return t.languages && t.languages.length
                ? void 0 !== t.options.ignoreJSONStructure
                  ? t.hasLoadedNamespace(e, {
                      precheck: function (t, r) {
                        if (
                          n.bindI18n &&
                          n.bindI18n.indexOf("languageChanging") > -1 &&
                          t.services.backendConnector.backend &&
                          t.isLanguageChangingTo &&
                          !r(t.isLanguageChangingTo, e)
                        )
                          return !1;
                      },
                    })
                  : (function (e, t) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        r = t.languages[0],
                        o = !!t.options && t.options.fallbackLng,
                        i = t.languages[t.languages.length - 1];
                      if ("cimode" === r.toLowerCase()) return !0;
                      var a = function (e, n) {
                        var r =
                          t.services.backendConnector.state[
                            "".concat(e, "|").concat(n)
                          ];
                        return -1 === r || 2 === r;
                      };
                      return (
                        (!(
                          n.bindI18n &&
                          n.bindI18n.indexOf("languageChanging") > -1
                        ) ||
                          !t.services.backendConnector.backend ||
                          !t.isLanguageChangingTo ||
                          !!a(t.isLanguageChangingTo, e)) &&
                        !!(
                          t.hasResourceBundle(r, e) ||
                          !t.services.backendConnector.backend ||
                          (t.options.resources &&
                            !t.options.partialBundledLanguages) ||
                          (a(r, e) && (!o || a(i, e)))
                        )
                      );
                    })(e, t, n)
                : (s("i18n.languages were undefined or empty", t.languages),
                  !0);
            })(e, l, d);
          });
        function x() {
          return l.getFixedT(null, "fallback" === d.nsMode ? S : S[0], b);
        }
        var j = (0, o.useState)(x),
          P = (0, m.Z)(j, 2),
          L = P[0],
          N = P[1],
          R = S.join(),
          C = k(R),
          E = (0, o.useRef)(!0);
        (0, o.useEffect)(
          function () {
            var e = d.bindI18n,
              t = d.bindI18nStore;
            function n() {
              E.current && N(x);
            }
            return (
              (E.current = !0),
              w ||
                h ||
                c(l, S, function () {
                  E.current && N(x);
                }),
              w && C && C !== R && E.current && N(x),
              e && l && l.on(e, n),
              t && l && l.store.on(t, n),
              function () {
                (E.current = !1),
                  e &&
                    l &&
                    e.split(" ").forEach(function (e) {
                      return l.off(e, n);
                    }),
                  t &&
                    l &&
                    t.split(" ").forEach(function (e) {
                      return l.store.off(e, n);
                    });
              }
            );
          },
          [l, R]
        );
        var D = (0, o.useRef)(!0);
        (0, o.useEffect)(
          function () {
            E.current && !D.current && N(x), (D.current = !1);
          },
          [l, b]
        );
        var I = [L, l, w];
        if (((I.t = L), (I.i18n = l), (I.ready = w), w || (!w && !h))) return I;
        throw new Promise(function (e) {
          c(l, S, function () {
            e();
          });
        });
      }
      function w(e) {
        var t = e.i18n,
          n = e.defaultNS,
          r = e.children,
          i = (0, o.useMemo)(
            function () {
              return { i18n: t, defaultNS: n };
            },
            [t, n]
          );
        return (0, o.createElement)(y.Provider, { value: i }, r);
      }
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(880);
    }),
      (_N_E = e.O());
  },
]);
