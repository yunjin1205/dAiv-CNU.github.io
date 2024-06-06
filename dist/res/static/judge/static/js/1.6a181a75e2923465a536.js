webpackJsonp([1], {
    "27qU": function (t, e) {
    }, "6yVS": function (t, e) {
    }, "7xfo": function (t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = o("Dd8w"), n = o.n(r), i = o("fZjL"), a = o.n(i), s = o("8Q2T"), c = o("NYxO"), l = o("Pc6x"), p = {},
            u = function (t) {
                var e = {};
                return t in a()(p) ? e = p[t] : (e = Object(l.default)(t), p[t] = e), e
            }, h = {
                data: function () {
                    return {qrcodeSrc: "", loadingQRcode: !1, loadingBtn: !1, formTwoFactor: {code: ""}, sessions: []}
                }, mounted: function () {
                    this.getSessions(), this.TFAOpened || this.getAuthImg()
                }, methods: n()({}, Object(c.mapActions)(["getProfile"]), {
                    getAuthImg: function () {
                        var t = this;
                        this.loadingQRcode = !0, s.a.twoFactorAuth("get").then(function (e) {
                            t.loadingQRcode = !1, t.qrcodeSrc = e.data.data
                        })
                    }, getSessions: function () {
                        var t = this;
                        s.a.getSessions().then(function (e) {
                            var o = e.data.data, r = o.filter(function (t) {
                                return t.current_session
                            });
                            o.forEach(function (t) {
                                t.current_session || r.push(t)
                            }), t.sessions = r
                        })
                    }, deleteSession: function (t) {
                        var e = this;
                        this.$Modal.confirm({
                            title: "Confirm",
                            content: "Are you sure to revoke the session?",
                            onOk: function () {
                                s.a.deleteSession(t).then(function (t) {
                                    e.getSessions()
                                }, function (t) {
                                })
                            }
                        })
                    }, closeTFA: function () {
                        var t = this;
                        this.$Modal.confirm({
                            title: "Confirm",
                            content: "Two-factor Authentication is a powerful tool to protect your account, are you sure to close it?",
                            onOk: function () {
                                t.updateTFA(!0)
                            }
                        })
                    }, updateTFA: function (t) {
                        var e = this, o = !1 === t ? "post" : "put";
                        this.loadingBtn = !0, s.a.twoFactorAuth(o, this.formTwoFactor).then(function (o) {
                            e.loadingBtn = !1, e.getProfile(), !0 === t && (e.getAuthImg(), e.formTwoFactor.code = ""), e.formTwoFactor.code = ""
                        }, function (t) {
                            e.formTwoFactor.code = "", e.loadingBtn = !1, t.data.data.indexOf("session") > -1 && (e.getProfile(), e.getAuthImg())
                        })
                    }
                }), computed: n()({}, Object(c.mapGetters)(["user"]), {
                    TFAOpened: function () {
                        return this.user && this.user.two_factor_auth
                    }
                }), filters: {
                    browser: function (t) {
                        var e = u(t);
                        return e.name && e.version ? e.name + " " + e.version : "Unknown"
                    }, platform: function (t) {
                        var e = u(t);
                        return e.os ? e.os : "Unknown"
                    }
                }
            }, d = {
                render: function () {
                    var t = this, e = t.$createElement, o = t._self._c || e;
                    return o("div", {staticClass: "setting-main"}, [o("p", {staticClass: "section-title"}, [t._v(t._s(t.$t("m.Sessions")))]), t._v(" "), o("div", {staticClass: "flex-container setting-content"}, [t._l(t.sessions, function (e) {
                        return [o("Card", {
                            staticClass: "flex-child",
                            attrs: {padding: 20}
                        }, [o("span", {
                            staticStyle: {"line-height": "20px"},
                            attrs: {slot: "title"},
                            slot: "title"
                        }, [t._v(t._s(e.ip))]), t._v(" "), o("div", {
                            attrs: {slot: "extra"},
                            slot: "extra"
                        }, [e.current_session ? o("Tag", {attrs: {color: "green"}}, [t._v("Current")]) : o("Button", {
                            attrs: {
                                type: "warning",
                                size: "small"
                            }, on: {
                                click: function (o) {
                                    t.deleteSession(e.session_key)
                                }
                            }
                        }, [t._v("Revoke\n          ")])], 1), t._v(" "), o("Form", {attrs: {"label-width": 100}}, [o("FormItem", {
                            staticClass: "item",
                            attrs: {label: "OS :"}
                        }, [t._v("\n            " + t._s(t._f("platform")(e.user_agent)) + "\n          ")]), t._v(" "), o("FormItem", {
                            staticClass: "item",
                            attrs: {label: "Browser :"}
                        }, [t._v("\n            " + t._s(t._f("browser")(e.user_agent)) + "\n          ")]), t._v(" "), o("FormItem", {
                            staticClass: "item",
                            attrs: {label: "Last Activity :"}
                        }, [t._v("\n            " + t._s(t._f("localtime")(e.last_activity)) + "\n          ")])], 1)], 1)]
                    })], 2), t._v(" "), o("p", {staticClass: "section-title"}, [t._v(t._s(t.$t("m.Two_Factor_Authentication")))]), t._v(" "), o("div", {staticClass: "mini-container setting-content"}, [o("Form", [t.TFAOpened ? o("Alert", {
                        staticClass: "notice",
                        attrs: {type: "success", showIcon: ""}
                    }, [t._v("You have enabled two-factor authentication.\n      ")]) : t._e(), t._v(" "), t.TFAOpened ? t._e() : o("FormItem", [o("div", {staticClass: "oj-relative"}, [o("img", {
                        attrs: {
                            src: t.qrcodeSrc,
                            id: "qr-img"
                        }
                    }), t._v(" "), t.loadingQRcode ? o("Spin", {
                        attrs: {
                            size: "large",
                            fix: ""
                        }
                    }) : t._e()], 1)]), t._v(" "), t.loadingQRcode ? t._e() : [o("FormItem", {staticStyle: {width: "250px"}}, [o("Input", {
                        attrs: {placeholder: "Enter the code from your application"},
                        model: {
                            value: t.formTwoFactor.code, callback: function (e) {
                                t.$set(t.formTwoFactor, "code", e)
                            }, expression: "formTwoFactor.code"
                        }
                    })], 1), t._v(" "), t.TFAOpened ? o("Button", {
                        attrs: {type: "error", loading: t.loadingBtn},
                        on: {click: t.closeTFA}
                    }, [t._v("Close TFA\n        ")]) : o("Button", {
                        attrs: {type: "primary", loading: t.loadingBtn},
                        on: {
                            click: function (e) {
                                t.updateTFA(!1)
                            }
                        }
                    }, [t._v("Open TFA\n        ")])]], 2)], 1)])
                }, staticRenderFns: []
            };
        var f = o("VU/8")(h, d, !1, function (t) {
            o("J568")
        }, "data-v-05a7df2d", null);
        e.default = f.exports
    }, J568: function (t, e) {
    }, "Mw+o": function (t, e) {
    }, Pc6x: function (t, e, o) {
        t.exports = o("uomd")(46)
    }, QhGd: function (t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = o("woOf"), n = o.n(r), i = o("8Q2T"), a = {
            mixins: [o("y2MC").a], data: function () {
                var t = this, e = [{required: !0, trigger: "blur", min: 6, max: 20}],
                    o = [{required: !0, trigger: "change"}];
                return {
                    loading: {btnPassword: !1, btnEmail: !1},
                    visible: {passwordAlert: !1, emailAlert: !1, tfaRequired: !1},
                    formPassword: {tfa_code: "", old_password: "", new_password: "", again_password: ""},
                    formEmail: {tfa_code: "", password: "", old_email: "", new_email: ""},
                    rulePassword: {
                        old_password: e,
                        new_password: [{
                            required: !0,
                            trigger: "blur",
                            min: 6,
                            max: 20
                        }, {
                            validator: function (e, o, r) {
                                "" !== t.formPassword.old_password && (t.formPassword.old_password === t.formPassword.new_password ? r(new Error("The new password doesn't change")) : t.$refs.formPassword.validateField("again_password")), r()
                            }, trigger: "blur"
                        }],
                        again_password: [{
                            required: !0, validator: function (e, o, r) {
                                o !== t.formPassword.new_password && r(new Error("password does not match")), r()
                            }, trigger: "change"
                        }],
                        tfa_code: o
                    },
                    ruleEmail: {password: e, new_email: [{required: !0, type: "email", trigger: "change"}], tfa_code: o}
                }
            }, mounted: function () {
                this.formEmail.old_email = this.$store.getters.user.email || ""
            }, methods: {
                changePassword: function () {
                    var t = this;
                    this.validateForm("formPassword").then(function (e) {
                        t.loading.btnPassword = !0;
                        var o = n()({}, t.formPassword);
                        delete o.again_password, t.visible.tfaRequired || delete o.tfa_code, i.a.changePassword(o).then(function (e) {
                            t.loading.btnPassword = !1, t.visible.passwordAlert = !0, t.$success("Update password successfully"), setTimeout(function () {
                                t.visible.passwordAlert = !1, t.$router.push({name: "logout"})
                            }, 5e3)
                        }, function (e) {
                            "tfa_required" === e.data.data && (t.visible.tfaRequired = !0), t.loading.btnPassword = !1
                        })
                    })
                }, changeEmail: function () {
                    var t = this;
                    this.validateForm("formEmail").then(function (e) {
                        t.loading.btnEmail = !0;
                        var o = n()({}, t.formEmail);
                        t.visible.tfaRequired || delete o.tfa_code, i.a.changeEmail(o).then(function (e) {
                            t.loading.btnEmail = !1, t.visible.emailAlert = !0, t.$success("Change email successfully"), t.$refs.formEmail.resetFields()
                        }, function (e) {
                            "tfa_required" === e.data.data && (t.visible.tfaRequired = !0)
                        })
                    })
                }
            }
        }, s = {
            render: function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {staticClass: "setting-main"}, [o("div", {staticClass: "flex-container"}, [o("div", {staticClass: "left"}, [o("p", {staticClass: "section-title"}, [t._v(t._s(t.$t("m.ChangePassword")))]), t._v(" "), o("Form", {
                    ref: "formPassword",
                    staticClass: "setting-content",
                    attrs: {model: t.formPassword, rules: t.rulePassword}
                }, [o("FormItem", {
                    attrs: {
                        label: "Old Password",
                        prop: "old_password"
                    }
                }, [o("Input", {
                    attrs: {type: "password"},
                    model: {
                        value: t.formPassword.old_password, callback: function (e) {
                            t.$set(t.formPassword, "old_password", e)
                        }, expression: "formPassword.old_password"
                    }
                })], 1), t._v(" "), o("FormItem", {
                    attrs: {
                        label: "New Password",
                        prop: "new_password"
                    }
                }, [o("Input", {
                    attrs: {type: "password"},
                    model: {
                        value: t.formPassword.new_password, callback: function (e) {
                            t.$set(t.formPassword, "new_password", e)
                        }, expression: "formPassword.new_password"
                    }
                })], 1), t._v(" "), o("FormItem", {
                    attrs: {
                        label: "Confirm New Password",
                        prop: "again_password"
                    }
                }, [o("Input", {
                    attrs: {type: "password"},
                    model: {
                        value: t.formPassword.again_password, callback: function (e) {
                            t.$set(t.formPassword, "again_password", e)
                        }, expression: "formPassword.again_password"
                    }
                })], 1), t._v(" "), t.visible.tfaRequired ? o("FormItem", {
                    attrs: {
                        label: "Two Factor Auth",
                        prop: "tfa_code"
                    }
                }, [o("Input", {
                    model: {
                        value: t.formPassword.tfa_code, callback: function (e) {
                            t.$set(t.formPassword, "tfa_code", e)
                        }, expression: "formPassword.tfa_code"
                    }
                })], 1) : t._e(), t._v(" "), t.visible.passwordAlert ? o("FormItem", [o("Alert", {attrs: {type: "success"}}, [t._v("You will need to login again after 5 seconds..")])], 1) : t._e(), t._v(" "), o("Button", {
                    attrs: {type: "primary"},
                    on: {click: t.changePassword}
                }, [t._v(t._s(t.$t("m.Update_Password")))])], 1)], 1), t._v(" "), o("div", {staticClass: "middle separator"}), t._v(" "), o("div", {staticClass: "right"}, [o("p", {staticClass: "section-title"}, [t._v(t._s(t.$t("m.ChangeEmail")))]), t._v(" "), o("Form", {
                    ref: "formEmail",
                    staticClass: "setting-content",
                    attrs: {model: t.formEmail, rules: t.ruleEmail}
                }, [o("FormItem", {
                    attrs: {
                        label: "Current Password",
                        prop: "password"
                    }
                }, [o("Input", {
                    attrs: {type: "password"}, model: {
                        value: t.formEmail.password, callback: function (e) {
                            t.$set(t.formEmail, "password", e)
                        }, expression: "formEmail.password"
                    }
                })], 1), t._v(" "), o("FormItem", {attrs: {label: "Old Email"}}, [o("Input", {
                    attrs: {disabled: ""},
                    model: {
                        value: t.formEmail.old_email, callback: function (e) {
                            t.$set(t.formEmail, "old_email", e)
                        }, expression: "formEmail.old_email"
                    }
                })], 1), t._v(" "), o("FormItem", {
                    attrs: {
                        label: "New Email",
                        prop: "new_email"
                    }
                }, [o("Input", {
                    model: {
                        value: t.formEmail.new_email, callback: function (e) {
                            t.$set(t.formEmail, "new_email", e)
                        }, expression: "formEmail.new_email"
                    }
                })], 1), t._v(" "), t.visible.tfaRequired ? o("FormItem", {
                    attrs: {
                        label: "Two Factor Auth",
                        prop: "tfa_code"
                    }
                }, [o("Input", {
                    model: {
                        value: t.formEmail.tfa_code, callback: function (e) {
                            t.$set(t.formEmail, "tfa_code", e)
                        }, expression: "formEmail.tfa_code"
                    }
                })], 1) : t._e(), t._v(" "), o("Button", {
                    attrs: {type: "primary"},
                    on: {click: t.changeEmail}
                }, [t._v(t._s(t.$t("m.ChangeEmail")))])], 1)], 1)])])
            }, staticRenderFns: []
        };
        var c = o("VU/8")(a, s, !1, function (t) {
            o("WIu9")
        }, "data-v-6a893bfb", null);
        e.default = c.exports
    }, WIu9: function (t, e) {
    }, YZ0n: function (t, e, o) {
        !function (e, o) {
            t.exports = o()
        }(window, function () {
            return function (t) {
                var e = {};

                function o(r) {
                    if (e[r]) return e[r].exports;
                    var n = e[r] = {i: r, l: !1, exports: {}};
                    return t[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports
                }

                return o.m = t, o.c = e, o.d = function (t, e, r) {
                    o.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
                }, o.r = function (t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
                }, o.t = function (t, e) {
                    if (1 & e && (t = o(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var r = Object.create(null);
                    if (o.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t) for (var n in t) o.d(r, n, function (e) {
                        return t[e]
                    }.bind(null, n));
                    return r
                }, o.n = function (t) {
                    var e = t && t.__esModule ? function () {
                        return t.default
                    } : function () {
                        return t
                    };
                    return o.d(e, "a", e), e
                }, o.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, o.p = "", o(o.s = 6)
            }([function (t, e, o) {
                var r = o(2);
                "string" == typeof r && (r = [[t.i, r, ""]]);
                o(4)(r, {hmr: !0, transform: void 0, insertInto: void 0}), r.locals && (t.exports = r.locals)
            }, function (t, e, o) {
                "use strict";
                var r = o(0);
                o.n(r).a
            }, function (t, e, o) {
                (t.exports = o(3)(!1)).push([t.i, '\n.vue-cropper[data-v-6dae58fd] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  direction: ltr;\n  touch-action: none;\n  text-align: left;\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");\n}\n.cropper-box[data-v-6dae58fd],\n.cropper-box-canvas[data-v-6dae58fd],\n.cropper-drag-box[data-v-6dae58fd],\n.cropper-crop-box[data-v-6dae58fd],\n.cropper-face[data-v-6dae58fd] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  user-select: none;\n}\n.cropper-box-canvas img[data-v-6dae58fd] {\n  position: relative;\n  text-align: left;\n  user-select: none;\n  transform: none;\n  max-width: none;\n  max-height: none;\n}\n.cropper-box[data-v-6dae58fd] {\n  overflow: hidden;\n}\n.cropper-move[data-v-6dae58fd] {\n  cursor: move;\n}\n.cropper-crop[data-v-6dae58fd] {\n  cursor: crosshair;\n}\n.cropper-modal[data-v-6dae58fd] {\n  background: rgba(0, 0, 0, 0.5);\n}\n.cropper-crop-box[data-v-6dae58fd] {\n  /*border: 2px solid #39f;*/\n}\n.cropper-view-box[data-v-6dae58fd] {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  user-select: none;\n}\n.cropper-view-box img[data-v-6dae58fd] {\n  user-select: none;\n  text-align: left;\n  max-width: none;\n  max-height: none;\n}\n.cropper-face[data-v-6dae58fd] {\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  opacity: 0.1;\n}\n.crop-info[data-v-6dae58fd] {\n  position: absolute;\n  left: 0px;\n  min-width: 65px;\n  text-align: center;\n  color: white;\n  line-height: 20px;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-size: 12px;\n}\n.crop-line[data-v-6dae58fd] {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n}\n.line-w[data-v-6dae58fd] {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n.line-a[data-v-6dae58fd] {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n.line-s[data-v-6dae58fd] {\n  bottom: -3px;\n  left: 0;\n  height: 5px;\n  cursor: s-resize;\n}\n.line-d[data-v-6dae58fd] {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n.crop-point[data-v-6dae58fd] {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  opacity: 0.75;\n  background-color: #39f;\n  border-radius: 100%;\n}\n.point1[data-v-6dae58fd] {\n  top: -4px;\n  left: -4px;\n  cursor: nw-resize;\n}\n.point2[data-v-6dae58fd] {\n  top: -5px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n.point3[data-v-6dae58fd] {\n  top: -4px;\n  right: -4px;\n  cursor: ne-resize;\n}\n.point4[data-v-6dae58fd] {\n  top: 50%;\n  left: -4px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n.point5[data-v-6dae58fd] {\n  top: 50%;\n  right: -4px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n.point6[data-v-6dae58fd] {\n  bottom: -5px;\n  left: -4px;\n  cursor: sw-resize;\n}\n.point7[data-v-6dae58fd] {\n  bottom: -5px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n.point8[data-v-6dae58fd] {\n  bottom: -5px;\n  right: -4px;\n  cursor: se-resize;\n}\n@media screen and (max-width: 500px) {\n.crop-point[data-v-6dae58fd] {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    opacity: 0.45;\n    background-color: #39f;\n    border-radius: 100%;\n}\n.point1[data-v-6dae58fd] {\n    top: -10px;\n    left: -10px;\n}\n.point2[data-v-6dae58fd],\n  .point4[data-v-6dae58fd],\n  .point5[data-v-6dae58fd],\n  .point7[data-v-6dae58fd] {\n    display: none;\n}\n.point3[data-v-6dae58fd] {\n    top: -10px;\n    right: -10px;\n}\n.point4[data-v-6dae58fd] {\n    top: 0;\n    left: 0;\n}\n.point6[data-v-6dae58fd] {\n    bottom: -10px;\n    left: -10px;\n}\n.point8[data-v-6dae58fd] {\n    bottom: -10px;\n    right: -10px;\n}\n}\n', ""])
            }, function (t, e) {
                t.exports = function (t) {
                    var e = [];
                    return e.toString = function () {
                        return this.map(function (e) {
                            var o = function (t, e) {
                                var o = t[1] || "", r = t[3];
                                if (!r) return o;
                                if (e && "function" == typeof btoa) {
                                    var n = function (t) {
                                        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
                                    }(r), i = r.sources.map(function (t) {
                                        return "/*# sourceURL=" + r.sourceRoot + t + " */"
                                    });
                                    return [o].concat(i).concat([n]).join("\n")
                                }
                                return [o].join("\n")
                            }(e, t);
                            return e[2] ? "@media " + e[2] + "{" + o + "}" : o
                        }).join("")
                    }, e.i = function (t, o) {
                        "string" == typeof t && (t = [[null, t, ""]]);
                        for (var r = {}, n = 0; n < this.length; n++) {
                            var i = this[n][0];
                            "number" == typeof i && (r[i] = !0)
                        }
                        for (n = 0; n < t.length; n++) {
                            var a = t[n];
                            "number" == typeof a[0] && r[a[0]] || (o && !a[2] ? a[2] = o : o && (a[2] = "(" + a[2] + ") and (" + o + ")"), e.push(a))
                        }
                    }, e
                }
            }, function (t, e, o) {
                var r = {}, n = function (t) {
                    var e;
                    return function () {
                        return void 0 === e && (e = function () {
                            return window && document && document.all && !window.atob
                        }.apply(this, arguments)), e
                    }
                }(), i = function (t) {
                    var e = {};
                    return function (t, o) {
                        if ("function" == typeof t) return t();
                        if (void 0 === e[t]) {
                            var r = function (t, e) {
                                return e ? e.querySelector(t) : document.querySelector(t)
                            }.call(this, t, o);
                            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                                r = r.contentDocument.head
                            } catch (t) {
                                r = null
                            }
                            e[t] = r
                        }
                        return e[t]
                    }
                }(), a = null, s = 0, c = [], l = o(5);

                function p(t, e) {
                    for (var o = 0; o < t.length; o++) {
                        var n = t[o], i = r[n.id];
                        if (i) {
                            i.refs++;
                            for (var a = 0; a < i.parts.length; a++) i.parts[a](n.parts[a]);
                            for (; a < n.parts.length; a++) i.parts.push(v(n.parts[a], e))
                        } else {
                            var s = [];
                            for (a = 0; a < n.parts.length; a++) s.push(v(n.parts[a], e));
                            r[n.id] = {id: n.id, refs: 1, parts: s}
                        }
                    }
                }

                function u(t, e) {
                    for (var o = [], r = {}, n = 0; n < t.length; n++) {
                        var i = t[n], a = e.base ? i[0] + e.base : i[0], s = {css: i[1], media: i[2], sourceMap: i[3]};
                        r[a] ? r[a].parts.push(s) : o.push(r[a] = {id: a, parts: [s]})
                    }
                    return o
                }

                function h(t, e) {
                    var o = i(t.insertInto);
                    if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                    var r = c[c.length - 1];
                    if ("top" === t.insertAt) r ? r.nextSibling ? o.insertBefore(e, r.nextSibling) : o.appendChild(e) : o.insertBefore(e, o.firstChild), c.push(e); else if ("bottom" === t.insertAt) o.appendChild(e); else {
                        if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                        var n = i(t.insertAt.before, o);
                        o.insertBefore(e, n)
                    }
                }

                function d(t) {
                    if (null === t.parentNode) return !1;
                    t.parentNode.removeChild(t);
                    var e = c.indexOf(t);
                    e >= 0 && c.splice(e, 1)
                }

                function f(t) {
                    var e = document.createElement("style");
                    if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
                        var r = o.nc;
                        r && (t.attrs.nonce = r)
                    }
                    return m(e, t.attrs), h(t, e), e
                }

                function m(t, e) {
                    Object.keys(e).forEach(function (o) {
                        t.setAttribute(o, e[o])
                    })
                }

                function v(t, e) {
                    var o, r, n, i;
                    if (e.transform && t.css) {
                        if (!(i = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {
                        };
                        t.css = i
                    }
                    if (e.singleton) {
                        var c = s++;
                        o = a || (a = f(e)), r = w.bind(null, o, c, !1), n = w.bind(null, o, c, !0)
                    } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (o = function (t) {
                        var e = document.createElement("link");
                        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", m(e, t.attrs), h(t, e), e
                    }(e), r = function (t, e, o) {
                        var r = o.css, n = o.sourceMap, i = void 0 === e.convertToAbsoluteUrls && n;
                        (e.convertToAbsoluteUrls || i) && (r = l(r)), n && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
                        var a = new Blob([r], {type: "text/css"}), s = t.href;
                        t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
                    }.bind(null, o, e), n = function () {
                        d(o), o.href && URL.revokeObjectURL(o.href)
                    }) : (o = f(e), r = function (t, e) {
                        var o = e.css, r = e.media;
                        if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = o; else {
                            for (; t.firstChild;) t.removeChild(t.firstChild);
                            t.appendChild(document.createTextNode(o))
                        }
                    }.bind(null, o), n = function () {
                        d(o)
                    });
                    return r(t), function (e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                            r(t = e)
                        } else n()
                    }
                }

                t.exports = function (t, e) {
                    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                    (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = n()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                    var o = u(t, e);
                    return p(o, e), function (t) {
                        for (var n = [], i = 0; i < o.length; i++) {
                            var a = o[i];
                            (s = r[a.id]).refs--, n.push(s)
                        }
                        for (t && p(u(t, e), e), i = 0; i < n.length; i++) {
                            var s;
                            if (0 === (s = n[i]).refs) {
                                for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                                delete r[s.id]
                            }
                        }
                    }
                };
                var g = function () {
                    var t = [];
                    return function (e, o) {
                        return t[e] = o, t.filter(Boolean).join("\n")
                    }
                }();

                function w(t, e, o, r) {
                    var n = o ? "" : r.css;
                    if (t.styleSheet) t.styleSheet.cssText = g(e, n); else {
                        var i = document.createTextNode(n), a = t.childNodes;
                        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
                    }
                }
            }, function (t, e) {
                t.exports = function (t) {
                    var e = "undefined" != typeof window && window.location;
                    if (!e) throw new Error("fixUrls requires window.location");
                    if (!t || "string" != typeof t) return t;
                    var o = e.protocol + "//" + e.host, r = o + e.pathname.replace(/\/[^\/]*$/, "/");
                    return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                        var n, i = e.trim().replace(/^"(.*)"$/, function (t, e) {
                            return e
                        }).replace(/^'(.*)'$/, function (t, e) {
                            return e
                        });
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (n = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? o + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
                    })
                }
            }, function (t, e, o) {
                "use strict";
                o.r(e);
                var r = function () {
                    var t = this, e = t.$createElement, o = t._self._c || e;
                    return o("div", {
                        ref: "cropper",
                        staticClass: "vue-cropper",
                        on: {mouseover: t.scaleImg, mouseout: t.cancelScale}
                    }, [o("div", {staticClass: "cropper-box"}, [o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.loading,
                            expression: "!loading"
                        }],
                        staticClass: "cropper-box-canvas",
                        style: {
                            width: t.trueWidth + "px",
                            height: t.trueHeight + "px",
                            transform: "scale(" + t.scale + "," + t.scale + ") translate3d(" + t.x / t.scale + "px," + t.y / t.scale + "px,0)rotateZ(" + 90 * t.rotate + "deg)"
                        }
                    }, [o("img", {
                        ref: "cropperImg",
                        attrs: {src: t.imgs, alt: "cropper-img"}
                    })])]), t._v(" "), o("div", {
                        staticClass: "cropper-drag-box",
                        class: {"cropper-move": t.move && !t.crop, "cropper-crop": t.crop, "cropper-modal": t.cropping},
                        on: {mousedown: t.startMove, touchstart: t.startMove}
                    }), t._v(" "), o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.cropping,
                            expression: "cropping"
                        }],
                        staticClass: "cropper-crop-box",
                        style: {
                            width: t.cropW + "px",
                            height: t.cropH + "px",
                            transform: "translate3d(" + t.cropOffsertX + "px," + t.cropOffsertY + "px,0)"
                        }
                    }, [o("span", {staticClass: "cropper-view-box"}, [o("img", {
                        style: {
                            width: t.trueWidth + "px",
                            height: t.trueHeight + "px",
                            transform: "scale(" + t.scale + "," + t.scale + ") translate3d(" + (t.x - t.cropOffsertX) / t.scale + "px," + (t.y - t.cropOffsertY) / t.scale + "px,0)rotateZ(" + 90 * t.rotate + "deg)"
                        }, attrs: {src: t.imgs, alt: "cropper-img"}
                    })]), t._v(" "), o("span", {
                        staticClass: "cropper-face cropper-move",
                        on: {mousedown: t.cropMove, touchstart: t.cropMove}
                    }), t._v(" "), t.info ? o("span", {
                        staticClass: "crop-info",
                        style: {top: t.cropInfo.top}
                    }, [t._v("\n          " + t._s(this.cropInfo.width) + " × " + t._s(this.cropInfo.height) + "\n        ")]) : t._e(), t._v(" "), t.fixedBox ? t._e() : o("span", [o("span", {
                        staticClass: "crop-line line-w",
                        on: {
                            mousedown: function (e) {
                                t.changeCropSize(e, !1, !0, 0, 1)
                            }, touchstart: function (e) {
                                t.changeCropSize(e, !1, !0, 0, 1)
                            }
                        }
                    }), t._v(" "), o("span", {
                        staticClass: "crop-line line-a", on: {
                            mousedown: function (e) {
                                t.changeCropSize(e, !0, !1, 1, 0)
                            }, touchstart: function (e) {
                                t.changeCropSize(e, !0, !1, 1, 0)
                            }
                        }
                    }), t._v(" "), o("span", {
                        staticClass: "crop-line line-s", on: {
                            mousedown: function (e) {
                                t.changeCropSize(e, !1, !0, 0, 2)
                            }, touchstart: function (e) {
                                t.changeCropSize(e, !1, !0, 0, 2)
                            }
                        }
                    }), t._v(" "), o("span", {
                        staticClass: "crop-line line-d", on: {
                            mousedown: function (e) {
                                t.changeCropSize(e, !0, !1, 2, 0)
                            }, touchstart: function (e) {
                                t.changeCropSize(e, !0, !1, 2, 0)
                            }
                        }
                    }), t._v(" "), o("span", {
                        staticClass: "crop-point point1", on: {
                            mousedown: function (e) {
                                t.changeCropSize(e, !0, !0, 1, 1)
                            }, touchstart: function (e) {
                                t.changeCropSize(e, !0, !0, 1, 1)
                            }
                        }
                    }), t._v(" "), o("span", {
                        staticClass: "crop-point point2", on: {
                            mousedown: function (e) {
                                t.changeCropSize(e, !1, !0, 0, 1)
                            }, touchstart: function (e) {
                                t.changeCropSize(e, !1, !0, 0, 1)
                            }
                        }
                    }), t._v(" "), o("span", {
                        staticClass: "crop-point point3", on: {
                            mousedown: function (e) {
                                t.changeCropSize(e, !0, !0, 2, 1)
                            }, touchstart: function (e) {
                                t.changeCropSize(e, !0, !0, 2, 1)
                            }
                        }
                    }), t._v(" "), o("span", {
                        staticClass: "crop-point point4", on: {
                            mousedown: function (e) {
                                t.changeCropSize(e, !0, !1, 1, 0)
                            }, touchstart: function (e) {
                                t.changeCropSize(e, !0, !1, 1, 0)
                            }
                        }
                    }), t._v(" "), o("span", {
                        staticClass: "crop-point point5", on: {
                            mousedown: function (e) {
                                t.changeCropSize(e, !0, !1, 2, 0)
                            }, touchstart: function (e) {
                                t.changeCropSize(e, !0, !1, 2, 0)
                            }
                        }
                    }), t._v(" "), o("span", {
                        staticClass: "crop-point point6", on: {
                            mousedown: function (e) {
                                t.changeCropSize(e, !0, !0, 1, 2)
                            }, touchstart: function (e) {
                                t.changeCropSize(e, !0, !0, 1, 2)
                            }
                        }
                    }), t._v(" "), o("span", {
                        staticClass: "crop-point point7", on: {
                            mousedown: function (e) {
                                t.changeCropSize(e, !1, !0, 0, 2)
                            }, touchstart: function (e) {
                                t.changeCropSize(e, !1, !0, 0, 2)
                            }
                        }
                    }), t._v(" "), o("span", {
                        staticClass: "crop-point point8", on: {
                            mousedown: function (e) {
                                t.changeCropSize(e, !0, !0, 2, 2)
                            }, touchstart: function (e) {
                                t.changeCropSize(e, !0, !0, 2, 2)
                            }
                        }
                    })])])])
                };
                r._withStripped = !0;
                var n = {};
                n.getData = function (t) {
                    return new Promise(function (e, o) {
                        var r = {};
                        (function (t) {
                            var e = null;
                            return new Promise(function (o, r) {
                                if (t.src) if (/^data\:/i.test(t.src)) e = function (t) {
                                    t = t.replace(/^data\:([^\;]+)\;base64,/gim, "");
                                    for (var e = atob(t), o = e.length, r = new ArrayBuffer(o), n = new Uint8Array(r), i = 0; i < o; i++) n[i] = e.charCodeAt(i);
                                    return r
                                }(t.src), o(e); else if (/^blob\:/i.test(t.src)) {
                                    var n = new FileReader;
                                    n.onload = function (t) {
                                        e = t.target.result, o(e)
                                    }, function (t, e) {
                                        var o = new XMLHttpRequest;
                                        o.open("GET", t, !0), o.responseType = "blob", o.onload = function (t) {
                                            200 != this.status && 0 !== this.status || function (t) {
                                                n.readAsArrayBuffer(t)
                                            }(this.response)
                                        }, o.send()
                                    }(t.src)
                                } else {
                                    var i = new XMLHttpRequest;
                                    i.onload = function () {
                                        if (200 != this.status && 0 !== this.status) throw "Could not load image";
                                        e = i.response, o(e), i = null
                                    }, i.open("GET", t.src, !0), i.responseType = "arraybuffer", i.send(null)
                                } else r("img error")
                            })
                        })(t).then(function (t) {
                            r.arrayBuffer = t, r.orientation = function (t) {
                                var e, o, r, n, i, a, s, c, l, p = new DataView(t), u = p.byteLength;
                                if (255 === p.getUint8(0) && 216 === p.getUint8(1)) for (c = 2; c < u;) {
                                    if (255 === p.getUint8(c) && 225 === p.getUint8(c + 1)) {
                                        a = c;
                                        break
                                    }
                                    c++
                                }
                                if (a && (o = a + 10, "Exif" === function (t, e, o) {
                                    var r, n = "";
                                    for (r = e, o += e; r < o; r++) n += String.fromCharCode(t.getUint8(r));
                                    return n
                                }(p, a + 4, 4) && (((n = 18761 === (i = p.getUint16(o))) || 19789 === i) && 42 === p.getUint16(o + 2, n) && (r = p.getUint32(o + 4, n)) >= 8 && (s = o + r))), s) for (u = p.getUint16(s, n), l = 0; l < u; l++) if (c = s + 12 * l + 2, 274 === p.getUint16(c, n)) {
                                    c += 8, e = p.getUint16(c, n);
                                    break
                                }
                                return e
                            }(t), e(r)
                        }).catch(function (t) {
                            o(t)
                        })
                    })
                };
                var i = n, a = {
                    data: function () {
                        return {
                            w: 0,
                            h: 0,
                            scale: 1,
                            x: 0,
                            y: 0,
                            loading: !0,
                            trueWidth: 0,
                            trueHeight: 0,
                            move: !0,
                            moveX: 0,
                            moveY: 0,
                            crop: !1,
                            cropping: !1,
                            cropW: 0,
                            cropH: 0,
                            cropOldW: 0,
                            cropOldH: 0,
                            canChangeX: !1,
                            canChangeY: !1,
                            changeCropTypeX: 1,
                            changeCropTypeY: 1,
                            cropX: 0,
                            cropY: 0,
                            cropChangeX: 0,
                            cropChangeY: 0,
                            cropOffsertX: 0,
                            cropOffsertY: 0,
                            support: "",
                            touches: [],
                            touchNow: !1,
                            rotate: 0,
                            isIos: !1,
                            orientation: 0,
                            imgs: "",
                            coe: .2,
                            scaling: !1,
                            scalingSet: "",
                            coeStatus: "",
                            isCanShow: !0
                        }
                    },
                    props: {
                        img: {type: [String, Blob, null, File], default: ""},
                        outputSize: {type: Number, default: 1},
                        outputType: {type: String, default: "jpeg"},
                        info: {type: Boolean, default: !0},
                        canScale: {type: Boolean, default: !0},
                        autoCrop: {type: Boolean, default: !1},
                        autoCropWidth: {type: Number, default: 0},
                        autoCropHeight: {type: Number, default: 0},
                        fixed: {type: Boolean, default: !1},
                        fixedNumber: {
                            type: Array, default: function () {
                                return [1, 1]
                            }
                        },
                        fixedBox: {type: Boolean, default: !1},
                        full: {type: Boolean, default: !1},
                        canMove: {type: Boolean, default: !0},
                        canMoveBox: {type: Boolean, default: !0},
                        original: {type: Boolean, default: !1},
                        centerBox: {type: Boolean, default: !1},
                        high: {type: Boolean, default: !0},
                        infoTrue: {type: Boolean, default: !1},
                        maxImgSize: {type: Number, default: 2e3},
                        enlarge: {type: [Number, String], default: 1},
                        preW: {type: [Number, String], default: 0}
                    },
                    computed: {
                        cropInfo: function () {
                            var t = {};
                            if (t.top = this.cropOffsertY > 21 ? "-21px" : "0px", t.width = this.cropW > 0 ? this.cropW : 0, t.height = this.cropH > 0 ? this.cropH : 0, this.infoTrue) {
                                var e = 1;
                                this.high && !this.full && (e = window.devicePixelRatio), 1 !== this.enlarge & !this.full && (e = Math.abs(Number(this.enlarge))), t.width = t.width * e, t.height = t.height * e, this.full && (t.width = t.width / this.scale, t.height = t.height / this.scale)
                            }
                            return t.width = t.width.toFixed(0), t.height = t.height.toFixed(0), t
                        }, isIE: function () {
                            var t = navigator.userAgent;
                            return t.indexOf("compatible") > -1 && t.indexOf("MSIE") > -1
                        }
                    },
                    watch: {
                        img: function () {
                            this.checkedImg()
                        }, imgs: function (t) {
                            "" !== t && this.reload()
                        }, cropW: function () {
                            this.showPreview()
                        }, cropH: function () {
                            this.showPreview()
                        }, cropOffsertX: function () {
                            this.showPreview()
                        }, cropOffsertY: function () {
                            this.showPreview()
                        }, scale: function (t, e) {
                            this.showPreview()
                        }, x: function () {
                            this.showPreview()
                        }, y: function () {
                            this.showPreview()
                        }, autoCrop: function (t) {
                            t && this.goAutoCrop()
                        }, rotate: function () {
                            this.showPreview(), this.autoCrop && this.goAutoCrop(this.cropW, this.cropH)
                        }
                    },
                    methods: {
                        checkOrientationImage: function (t, e, o, r) {
                            var n = this, i = document.createElement("canvas"), a = i.getContext("2d");
                            switch (a.save(), e) {
                                case 2:
                                    i.width = o, i.height = r, a.translate(o, 0), a.scale(-1, 1);
                                    break;
                                case 3:
                                    i.width = o, i.height = r, a.translate(o / 2, r / 2), a.rotate(180 * Math.PI / 180), a.translate(-o / 2, -r / 2);
                                    break;
                                case 4:
                                    i.width = o, i.height = r, a.translate(0, r), a.scale(1, -1);
                                    break;
                                case 5:
                                    i.height = o, i.width = r, a.rotate(.5 * Math.PI), a.scale(1, -1);
                                    break;
                                case 6:
                                    i.width = r, i.height = o, a.translate(r / 2, o / 2), a.rotate(90 * Math.PI / 180), a.translate(-o / 2, -r / 2);
                                    break;
                                case 7:
                                    i.height = o, i.width = r, a.rotate(.5 * Math.PI), a.translate(o, -r), a.scale(-1, 1);
                                    break;
                                case 8:
                                    i.height = o, i.width = r, a.translate(r / 2, o / 2), a.rotate(-90 * Math.PI / 180), a.translate(-o / 2, -r / 2);
                                    break;
                                default:
                                    i.width = o, i.height = r
                            }
                            a.drawImage(t, 0, 0, o, r), a.restore(), i.toBlob(function (t) {
                                var e = URL.createObjectURL(t);
                                n.imgs = e
                            }, "image/" + this.outputType, 1)
                        }, checkedImg: function () {
                            var t = this;
                            if ("" !== this.img) {
                                this.loading = !0, this.scale = 1, this.rotate = 0, this.clearCrop();
                                var e = new Image;
                                if (e.onload = function () {
                                    if ("" === t.img) return t.$emit("imgLoad", "error"), !1;
                                    var o = e.width, r = e.height;
                                    i.getData(e).then(function (n) {
                                        t.orientation = n.orientation || 1;
                                        var i = t.maxImgSize;
                                        !t.orientation && o < i & r < i ? t.imgs = t.img : (o > i && (r = r / o * i, o = i), r > i && (o = o / r * i, r = i), t.checkOrientationImage(e, t.orientation, o, r))
                                    })
                                }, e.onerror = function () {
                                    t.$emit("imgLoad", "error")
                                }, e.crossOrigin = "", this.isIE) {
                                    var o = new XMLHttpRequest;
                                    o.onload = function () {
                                        var t = URL.createObjectURL(this.response);
                                        e.src = t
                                    }, o.open("GET", this.img, !0), o.responseType = "blob", o.send()
                                } else e.src = this.img
                            }
                        }, startMove: function (t) {
                            if (t.preventDefault(), this.move && !this.crop) {
                                if (!this.canMove) return !1;
                                this.moveX = (t.clientX ? t.clientX : t.touches[0].clientX) - this.x, this.moveY = (t.clientY ? t.clientY : t.touches[0].clientY) - this.y, t.touches ? (window.addEventListener("touchmove", this.moveImg), window.addEventListener("touchend", this.leaveImg), 2 == t.touches.length && (this.touches = t.touches, window.addEventListener("touchmove", this.touchScale), window.addEventListener("touchend", this.cancelTouchScale))) : (window.addEventListener("mousemove", this.moveImg), window.addEventListener("mouseup", this.leaveImg)), this.$emit("imgMoving", {
                                    moving: !0,
                                    axis: this.getImgAxis()
                                })
                            } else this.cropping = !0, window.addEventListener("mousemove", this.createCrop), window.addEventListener("mouseup", this.endCrop), window.addEventListener("touchmove", this.createCrop), window.addEventListener("touchend", this.endCrop), this.cropOffsertX = t.offsetX ? t.offsetX : t.touches[0].pageX - this.$refs.cropper.offsetLeft, this.cropOffsertY = t.offsetY ? t.offsetY : t.touches[0].pageY - this.$refs.cropper.offsetTop, this.cropX = t.clientX ? t.clientX : t.touches[0].clientX, this.cropY = t.clientY ? t.clientY : t.touches[0].clientY, this.cropChangeX = this.cropOffsertX, this.cropChangeY = this.cropOffsertY, this.cropW = 0, this.cropH = 0
                        }, touchScale: function (t) {
                            var e = this;
                            t.preventDefault();
                            var o = this.scale, r = this.touches[0].clientX, n = this.touches[0].clientY,
                                i = t.touches[0].clientX, a = t.touches[0].clientY, s = this.touches[1].clientX,
                                c = this.touches[1].clientY, l = t.touches[1].clientX, p = t.touches[1].clientY,
                                u = Math.sqrt(Math.pow(r - s, 2) + Math.pow(n - c, 2)),
                                h = Math.sqrt(Math.pow(i - l, 2) + Math.pow(a - p, 2)) - u, d = 1,
                                f = (d = (d = d / this.trueWidth > d / this.trueHeight ? d / this.trueHeight : d / this.trueWidth) > .1 ? .1 : d) * h;
                            if (!this.touchNow) {
                                if (this.touchNow = !0, h > 0 ? o += Math.abs(f) : h < 0 && o > Math.abs(f) && (o -= Math.abs(f)), this.touches = t.touches, setTimeout(function () {
                                    e.touchNow = !1
                                }, 8), !this.checkoutImgAxis(this.x, this.y, o)) return !1;
                                this.scale = o
                            }
                        }, cancelTouchScale: function (t) {
                            window.removeEventListener("touchmove", this.touchScale)
                        }, moveImg: function (t) {
                            var e = this;
                            if (t.preventDefault(), t.touches && 2 === t.touches.length) return this.touches = t.touches, window.addEventListener("touchmove", this.touchScale), window.addEventListener("touchend", this.cancelTouchScale), window.removeEventListener("touchmove", this.moveImg), !1;
                            var o, r, n = t.clientX ? t.clientX : t.touches[0].clientX,
                                i = t.clientY ? t.clientY : t.touches[0].clientY;
                            o = n - this.moveX, r = i - this.moveY, this.$nextTick(function () {
                                if (e.centerBox) {
                                    var t, n, i, a, s = e.getImgAxis(o, r, e.scale), c = e.getCropAxis(),
                                        l = e.trueHeight * e.scale, p = e.trueWidth * e.scale;
                                    switch (e.rotate) {
                                        case 1:
                                        case-1:
                                        case 3:
                                        case-3:
                                            t = e.cropOffsertX - e.trueWidth * (1 - e.scale) / 2 + (l - p) / 2, n = e.cropOffsertY - e.trueHeight * (1 - e.scale) / 2 + (p - l) / 2, i = t - l + e.cropW, a = n - p + e.cropH;
                                            break;
                                        default:
                                            t = e.cropOffsertX - e.trueWidth * (1 - e.scale) / 2, n = e.cropOffsertY - e.trueHeight * (1 - e.scale) / 2, i = t - p + e.cropW, a = n - l + e.cropH
                                    }
                                    s.x1 >= c.x1 && (o = t), s.y1 >= c.y1 && (r = n), s.x2 <= c.x2 && (o = i), s.y2 <= c.y2 && (r = a)
                                }
                                e.x = o, e.y = r, e.$emit("imgMoving", {moving: !0, axis: e.getImgAxis()})
                            })
                        }, leaveImg: function (t) {
                            window.removeEventListener("mousemove", this.moveImg), window.removeEventListener("touchmove", this.moveImg), window.removeEventListener("mouseup", this.leaveImg), window.removeEventListener("touchend", this.leaveImg), this.$emit("imgMoving", {
                                moving: !1,
                                axis: this.getImgAxis()
                            })
                        }, scaleImg: function () {
                            this.canScale && window.addEventListener(this.support, this.changeSize)
                        }, cancelScale: function () {
                            this.canScale && window.removeEventListener(this.support, this.changeSize)
                        }, changeSize: function (t) {
                            var e = this;
                            t.preventDefault();
                            var o = this.scale, r = t.deltaY || t.wheelDelta;
                            r = navigator.userAgent.indexOf("Firefox") > 0 ? 30 * r : r, this.isIE && (r = -r);
                            var n = this.coe,
                                i = (n = n / this.trueWidth > n / this.trueHeight ? n / this.trueHeight : n / this.trueWidth) * r;
                            i < 0 ? o += Math.abs(i) : o > Math.abs(i) && (o -= Math.abs(i));
                            var a = i < 0 ? "add" : "reduce";
                            if (a !== this.coeStatus && (this.coeStatus = a, this.coe = .2), this.scaling || (this.scalingSet = setTimeout(function () {
                                e.scaling = !1, e.coe = e.coe += .01
                            }, 50)), this.scaling = !0, !this.checkoutImgAxis(this.x, this.y, o)) return !1;
                            this.scale = o
                        }, changeScale: function (t) {
                            var e = this.scale;
                            t = t || 1;
                            var o = 20;
                            if ((t *= o = o / this.trueWidth > o / this.trueHeight ? o / this.trueHeight : o / this.trueWidth) > 0 ? e += Math.abs(t) : e > Math.abs(t) && (e -= Math.abs(t)), !this.checkoutImgAxis(this.x, this.y, e)) return !1;
                            this.scale = e
                        }, createCrop: function (t) {
                            var e = this;
                            t.preventDefault();
                            var o = t.clientX ? t.clientX : t.touches ? t.touches[0].clientX : 0,
                                r = t.clientY ? t.clientY : t.touches ? t.touches[0].clientY : 0;
                            this.$nextTick(function () {
                                var t = o - e.cropX, n = r - e.cropY;
                                if (t > 0 ? (e.cropW = t + e.cropChangeX > e.w ? e.w - e.cropChangeX : t, e.cropOffsertX = e.cropChangeX) : (e.cropW = e.w - e.cropChangeX + Math.abs(t) > e.w ? e.cropChangeX : Math.abs(t), e.cropOffsertX = e.cropChangeX + t > 0 ? e.cropChangeX + t : 0), e.fixed) {
                                    var i = e.cropW / e.fixedNumber[0] * e.fixedNumber[1];
                                    i + e.cropOffsertY > e.h ? (e.cropH = e.h - e.cropOffsertY, e.cropW = e.cropH / e.fixedNumber[1] * e.fixedNumber[0], e.cropOffsertX = t > 0 ? e.cropChangeX : e.cropChangeX - e.cropW) : e.cropH = i, e.cropOffsertY = e.cropOffsertY
                                } else n > 0 ? (e.cropH = n + e.cropChangeY > e.h ? e.h - e.cropChangeY : n, e.cropOffsertY = e.cropChangeY) : (e.cropH = e.h - e.cropChangeY + Math.abs(n) > e.h ? e.cropChangeY : Math.abs(n), e.cropOffsertY = e.cropChangeY + n > 0 ? e.cropChangeY + n : 0)
                            })
                        }, changeCropSize: function (t, e, o, r, n) {
                            t.preventDefault(), window.addEventListener("mousemove", this.changeCropNow), window.addEventListener("mouseup", this.changeCropEnd), window.addEventListener("touchmove", this.changeCropNow), window.addEventListener("touchend", this.changeCropEnd), this.canChangeX = e, this.canChangeY = o, this.changeCropTypeX = r, this.changeCropTypeY = n, this.cropX = t.clientX ? t.clientX : t.touches[0].clientX, this.cropY = t.clientY ? t.clientY : t.touches[0].clientY, this.cropOldW = this.cropW, this.cropOldH = this.cropH, this.cropChangeX = this.cropOffsertX, this.cropChangeY = this.cropOffsertY, this.fixed && this.canChangeX && this.canChangeY && (this.canChangeY = 0)
                        }, changeCropNow: function (t) {
                            var e = this;
                            t.preventDefault();
                            var o = t.clientX ? t.clientX : t.touches ? t.touches[0].clientX : 0,
                                r = t.clientY ? t.clientY : t.touches ? t.touches[0].clientY : 0, n = this.w,
                                i = this.h, a = 0, s = 0;
                            if (this.centerBox) {
                                var c = this.getImgAxis(), l = c.x2, p = c.y2;
                                a = c.x1 > 0 ? c.x1 : 0, s = c.y1 > 0 ? c.y1 : 0, n > l && (n = l), i > p && (i = p)
                            }
                            this.$nextTick(function () {
                                var t = o - e.cropX, c = r - e.cropY;
                                if (e.canChangeX && (1 === e.changeCropTypeX ? e.cropOldW - t > 0 ? (e.cropW = n - e.cropChangeX - t <= n - a ? e.cropOldW - t : e.cropOldW + e.cropChangeX - a, e.cropOffsertX = n - e.cropChangeX - t <= n - a ? e.cropChangeX + t : a) : (e.cropW = Math.abs(t) + e.cropChangeX <= n ? Math.abs(t) - e.cropOldW : n - e.cropOldW - e.cropChangeX, e.cropOffsertX = e.cropChangeX + e.cropOldW) : 2 === e.changeCropTypeX && (e.cropOldW + t > 0 ? (e.cropW = e.cropOldW + t + e.cropOffsertX <= n ? e.cropOldW + t : n - e.cropOffsertX, e.cropOffsertX = e.cropChangeX) : (e.cropW = n - e.cropChangeX + Math.abs(t + e.cropOldW) <= n - a ? Math.abs(t + e.cropOldW) : e.cropChangeX - a, e.cropOffsertX = n - e.cropChangeX + Math.abs(t + e.cropOldW) <= n - a ? e.cropChangeX - Math.abs(t + e.cropOldW) : a))), e.canChangeY && (1 === e.changeCropTypeY ? e.cropOldH - c > 0 ? (e.cropH = i - e.cropChangeY - c <= i - s ? e.cropOldH - c : e.cropOldH + e.cropChangeY - s, e.cropOffsertY = i - e.cropChangeY - c <= i - s ? e.cropChangeY + c : s) : (e.cropH = Math.abs(c) + e.cropChangeY <= i ? Math.abs(c) - e.cropOldH : i - e.cropOldH - e.cropChangeY, e.cropOffsertY = e.cropChangeY + e.cropOldH) : 2 === e.changeCropTypeY && (e.cropOldH + c > 0 ? (e.cropH = e.cropOldH + c + e.cropOffsertY <= i ? e.cropOldH + c : i - e.cropOffsertY, e.cropOffsertY = e.cropChangeY) : (e.cropH = i - e.cropChangeY + Math.abs(c + e.cropOldH) <= i - s ? Math.abs(c + e.cropOldH) : e.cropChangeY - s, e.cropOffsertY = i - e.cropChangeY + Math.abs(c + e.cropOldH) <= i - s ? e.cropChangeY - Math.abs(c + e.cropOldH) : s))), e.canChangeX && e.fixed) {
                                    var l = e.cropW / e.fixedNumber[0] * e.fixedNumber[1];
                                    l + e.cropOffsertY > i ? (e.cropH = i - e.cropOffsertY, e.cropW = e.cropH / e.fixedNumber[1] * e.fixedNumber[0]) : e.cropH = l
                                }
                                if (e.canChangeY && e.fixed) {
                                    var p = e.cropH / e.fixedNumber[1] * e.fixedNumber[0];
                                    p + e.cropOffsertX > n ? (e.cropW = n - e.cropOffsertX, e.cropH = e.cropW / e.fixedNumber[0] * e.fixedNumber[1]) : e.cropW = p
                                }
                            })
                        }, changeCropEnd: function (t) {
                            window.removeEventListener("mousemove", this.changeCropNow), window.removeEventListener("mouseup", this.changeCropEnd), window.removeEventListener("touchmove", this.changeCropNow), window.removeEventListener("touchend", this.changeCropEnd)
                        }, endCrop: function () {
                            0 === this.cropW && 0 === this.cropH && (this.cropping = !1), window.removeEventListener("mousemove", this.createCrop), window.removeEventListener("mouseup", this.endCrop), window.removeEventListener("touchmove", this.createCrop), window.removeEventListener("touchend", this.endCrop)
                        }, startCrop: function () {
                            this.crop = !0
                        }, stopCrop: function () {
                            this.crop = !1
                        }, clearCrop: function () {
                            this.cropping = !1, this.cropW = 0, this.cropH = 0
                        }, cropMove: function (t) {
                            if (t.preventDefault(), !this.canMoveBox) return this.crop = !1, this.startMove(t), !1;
                            if (t.touches && 2 === t.touches.length) return this.crop = !1, this.startMove(t), this.leaveCrop(), !1;
                            window.addEventListener("mousemove", this.moveCrop), window.addEventListener("mouseup", this.leaveCrop), window.addEventListener("touchmove", this.moveCrop), window.addEventListener("touchend", this.leaveCrop);
                            var e, o, r = t.clientX ? t.clientX : t.touches[0].clientX,
                                n = t.clientY ? t.clientY : t.touches[0].clientY;
                            e = r - this.cropOffsertX, o = n - this.cropOffsertY, this.cropX = e, this.cropY = o, this.$emit("cropMoving", {
                                moving: !0,
                                axis: this.getCropAxis()
                            })
                        }, moveCrop: function (t, e) {
                            var o = this, r = 0, n = 0;
                            t && (t.preventDefault(), r = t.clientX ? t.clientX : t.touches[0].clientX, n = t.clientY ? t.clientY : t.touches[0].clientY), this.$nextTick(function () {
                                var t, i, a = r - o.cropX, s = n - o.cropY;
                                if (e && (a = o.cropOffsertX, s = o.cropOffsertY), t = a <= 0 ? 0 : a + o.cropW > o.w ? o.w - o.cropW : a, i = s <= 0 ? 0 : s + o.cropH > o.h ? o.h - o.cropH : s, o.centerBox) {
                                    var c = o.getImgAxis();
                                    t <= c.x1 && (t = c.x1), t + o.cropW > c.x2 && (t = c.x2 - o.cropW), i <= c.y1 && (i = c.y1), i + o.cropH > c.y2 && (i = c.y2 - o.cropH)
                                }
                                o.cropOffsertX = t, o.cropOffsertY = i, o.$emit("cropMoving", {
                                    moving: !0,
                                    axis: o.getCropAxis()
                                })
                            })
                        }, getImgAxis: function (t, e, o) {
                            t = t || this.x, e = e || this.y, o = o || this.scale;
                            var r = {x1: 0, x2: 0, y1: 0, y2: 0}, n = this.trueWidth * o, i = this.trueHeight * o;
                            switch (this.rotate) {
                                case 0:
                                    r.x1 = t + this.trueWidth * (1 - o) / 2, r.x2 = r.x1 + this.trueWidth * o, r.y1 = e + this.trueHeight * (1 - o) / 2, r.y2 = r.y1 + this.trueHeight * o;
                                    break;
                                case 1:
                                case-1:
                                case 3:
                                case-3:
                                    r.x1 = t + this.trueWidth * (1 - o) / 2 + (n - i) / 2, r.x2 = r.x1 + this.trueHeight * o, r.y1 = e + this.trueHeight * (1 - o) / 2 + (i - n) / 2, r.y2 = r.y1 + this.trueWidth * o;
                                    break;
                                default:
                                    r.x1 = t + this.trueWidth * (1 - o) / 2, r.x2 = r.x1 + this.trueWidth * o, r.y1 = e + this.trueHeight * (1 - o) / 2, r.y2 = r.y1 + this.trueHeight * o
                            }
                            return r
                        }, getCropAxis: function () {
                            var t = {x1: 0, x2: 0, y1: 0, y2: 0};
                            return t.x1 = this.cropOffsertX, t.x2 = t.x1 + this.cropW, t.y1 = this.cropOffsertY, t.y2 = t.y1 + this.cropH, t
                        }, leaveCrop: function (t) {
                            window.removeEventListener("mousemove", this.moveCrop), window.removeEventListener("mouseup", this.leaveCrop), window.removeEventListener("touchmove", this.moveCrop), window.removeEventListener("touchend", this.leaveCrop), this.$emit("cropMoving", {
                                moving: !1,
                                axis: this.getCropAxis()
                            })
                        }, getCropChecked: function (t) {
                            var e = this, o = document.createElement("canvas"), r = new Image, n = this.rotate,
                                i = this.trueWidth, a = this.trueHeight, s = this.cropOffsertX, c = this.cropOffsertY;

                            function l(t, e) {
                                o.width = Math.round(t), o.height = Math.round(e)
                            }

                            r.onload = function () {
                                if (0 !== e.cropW) {
                                    var p = o.getContext("2d"), u = 1;
                                    e.high & !e.full && (u = window.devicePixelRatio), 1 !== e.enlarge & !e.full && (u = Math.abs(Number(e.enlarge)), console.log(u));
                                    var h = e.cropW * u, d = e.cropH * u, f = i * e.scale * u, m = a * e.scale * u,
                                        v = (e.x - s + e.trueWidth * (1 - e.scale) / 2) * u,
                                        g = (e.y - c + e.trueHeight * (1 - e.scale) / 2) * u;
                                    switch (l(h, d), p.save(), n) {
                                        case 0:
                                            e.full ? (l(h / e.scale, d / e.scale), p.drawImage(r, v / e.scale, g / e.scale, f / e.scale, m / e.scale)) : p.drawImage(r, v, g, f, m);
                                            break;
                                        case 1:
                                        case-3:
                                            e.full ? (l(h / e.scale, d / e.scale), v = v / e.scale + (f / e.scale - m / e.scale) / 2, g = g / e.scale + (m / e.scale - f / e.scale) / 2, p.rotate(90 * n * Math.PI / 180), p.drawImage(r, g, -v - m / e.scale, f / e.scale, m / e.scale)) : (v += (f - m) / 2, g += (m - f) / 2, p.rotate(90 * n * Math.PI / 180), p.drawImage(r, g, -v - m, f, m));
                                            break;
                                        case 2:
                                        case-2:
                                            e.full ? (l(h / e.scale, d / e.scale), p.rotate(90 * n * Math.PI / 180), v /= e.scale, g /= e.scale, p.drawImage(r, -v - f / e.scale, -g - m / e.scale, f / e.scale, m / e.scale)) : (p.rotate(90 * n * Math.PI / 180), p.drawImage(r, -v - f, -g - m, f, m));
                                            break;
                                        case 3:
                                        case-1:
                                            e.full ? (l(h / e.scale, d / e.scale), v = v / e.scale + (f / e.scale - m / e.scale) / 2, g = g / e.scale + (m / e.scale - f / e.scale) / 2, p.rotate(90 * n * Math.PI / 180), p.drawImage(r, -g - f / e.scale, v, f / e.scale, m / e.scale)) : (v += (f - m) / 2, g += (m - f) / 2, p.rotate(90 * n * Math.PI / 180), p.drawImage(r, -g - f, v, f, m));
                                            break;
                                        default:
                                            e.full ? (l(h / e.scale, d / e.scale), p.drawImage(r, v / e.scale, g / e.scale, f / e.scale, m / e.scale)) : p.drawImage(r, v, g, f, m)
                                    }
                                    p.restore()
                                } else {
                                    var w = i * e.scale, x = a * e.scale, b = o.getContext("2d");
                                    switch (b.save(), n) {
                                        case 0:
                                            l(w, x), b.drawImage(r, 0, 0, w, x);
                                            break;
                                        case 1:
                                        case-3:
                                            l(x, w), b.rotate(90 * n * Math.PI / 180), b.drawImage(r, 0, -x, w, x);
                                            break;
                                        case 2:
                                        case-2:
                                            l(w, x), b.rotate(90 * n * Math.PI / 180), b.drawImage(r, -w, -x, w, x);
                                            break;
                                        case 3:
                                        case-1:
                                            l(x, w), b.rotate(90 * n * Math.PI / 180), b.drawImage(r, -w, 0, w, x);
                                            break;
                                        default:
                                            l(w, x), b.drawImage(r, 0, 0, w, x)
                                    }
                                    b.restore()
                                }
                                t(o)
                            }, "data" !== this.img.substr(0, 4) && (r.crossOrigin = "Anonymous"), r.src = this.imgs
                        }, getCropData: function (t) {
                            var e = this;
                            this.getCropChecked(function (o) {
                                t(o.toDataURL("image/" + e.outputType, e.outputSize))
                            })
                        }, getCropBlob: function (t) {
                            var e = this;
                            this.getCropChecked(function (o) {
                                o.toBlob(function (e) {
                                    return t(e)
                                }, "image/" + e.outputType, e.outputSize)
                            })
                        }, showPreview: function () {
                            var t = this;
                            if (!this.isCanShow) return !1;
                            this.isCanShow = !1, setTimeout(function () {
                                t.isCanShow = !0
                            }, 16);
                            var e = this.cropW, o = this.cropH, r = this.scale, n = {};
                            n.div = {width: "".concat(e, "px"), height: "".concat(o, "px")};
                            var i = (this.x - this.cropOffsertX) / r, a = (this.y - this.cropOffsertY) / r;
                            n.w = e, n.h = o, n.url = this.imgs, n.img = {
                                width: "".concat(this.trueWidth, "px"),
                                height: "".concat(this.trueHeight, "px"),
                                transform: "scale(".concat(r, ")translate3d(").concat(i, "px, ").concat(a, "px, ").concat(0, "px)rotateZ(").concat(90 * this.rotate, "deg)")
                            }, n.html = '\n      <div class="show-preview" style="width: '.concat(n.w, "px; height: ").concat(n.h, 'px,; overflow: hidden">\n        <div style="width: ').concat(e, "px; height: ").concat(o, 'px">\n          <img src=').concat(n.url, ' style="width: ').concat(this.trueWidth, "px; height: ").concat(this.trueHeight, "px; transform:\n          scale(").concat(r, ")translate3d(").concat(i, "px, ").concat(a, "px, ").concat(0, "px)rotateZ(").concat(90 * this.rotate, 'deg)">\n        </div>\n      </div>'), this.$emit("realTime", n)
                        }, reload: function () {
                            var t = this, e = new Image;
                            e.onload = function () {
                                t.w = parseFloat(window.getComputedStyle(t.$refs.cropper).width), t.h = parseFloat(window.getComputedStyle(t.$refs.cropper).height), t.trueWidth = e.width, t.trueHeight = e.height, t.original ? t.scale = 1 : (t.trueWidth > t.w && (t.scale = t.w / t.trueWidth), t.trueHeight * t.scale > t.h && (t.scale = t.h / t.trueHeight)), t.$nextTick(function () {
                                    t.x = -(t.trueWidth - t.trueWidth * t.scale) / 2 + (t.w - t.trueWidth * t.scale) / 2, t.y = -(t.trueHeight - t.trueHeight * t.scale) / 2 + (t.h - t.trueHeight * t.scale) / 2, t.loading = !1, t.autoCrop && t.goAutoCrop(), t.$emit("imgLoad", "success")
                                })
                            }, e.onerror = function () {
                                t.$emit("imgLoad", "error")
                            }, e.src = this.imgs
                        }, goAutoCrop: function (t, e) {
                            this.clearCrop(), this.cropping = !0;
                            var o = this.w, r = this.h;
                            if (this.centerBox) {
                                var n = this.trueWidth * this.scale, i = this.trueHeight * this.scale;
                                o = n < o ? n : o, r = i < r ? i : r
                            }
                            var a = t || this.autoCropWidth, s = e || this.autoCropHeight;
                            0 !== a && 0 !== s || (a = .8 * o, s = .8 * r), a = a > o ? o : a, s = s > r ? r : s, this.fixed && (s = a / this.fixedNumber[0] * this.fixedNumber[1]), s > this.h && (a = (s = this.h) / this.fixedNumber[1] * this.fixedNumber[0]), this.changeCrop(a, s)
                        }, changeCrop: function (t, e) {
                            var o = this;
                            this.cropW = t, this.cropH = e, this.cropOffsertX = (this.w - t) / 2, this.cropOffsertY = (this.h - e) / 2, this.centerBox && this.$nextTick(function () {
                                o.moveCrop(null, !0)
                            })
                        }, refresh: function () {
                            var t = this;
                            this.img, this.imgs = "", this.scale = 1, this.crop = !1, this.rotate = 0, this.w = 0, this.h = 0, this.trueWidth = 0, this.trueHeight = 0, this.clearCrop(), this.$nextTick(function () {
                                t.checkedImg()
                            })
                        }, rotateLeft: function () {
                            this.rotate = this.rotate <= -3 ? 0 : this.rotate - 1
                        }, rotateRight: function () {
                            this.rotate = this.rotate >= 3 ? 0 : this.rotate + 1
                        }, rotateClear: function () {
                            this.rotate = 0
                        }, checkoutImgAxis: function (t, e, o) {
                            t = t || this.x, e = e || this.y, o = o || this.scale;
                            var r = !0;
                            if (this.centerBox) {
                                var n = this.getImgAxis(t, e, o), i = this.getCropAxis();
                                n.x1 >= i.x1 && (r = !1), n.x2 <= i.x2 && (r = !1), n.y1 >= i.y1 && (r = !1), n.y2 <= i.y2 && (r = !1)
                            }
                            return r
                        }
                    },
                    mounted: function () {
                        this.support = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                        var t = this, e = navigator.userAgent;
                        this.isIOS = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), HTMLCanvasElement.prototype.toBlob || Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
                            value: function (e, o, r) {
                                for (var n = atob(this.toDataURL(o, r).split(",")[1]), i = n.length, a = new Uint8Array(i), s = 0; s < i; s++) a[s] = n.charCodeAt(s);
                                e(new Blob([a], {type: t.type || "image/png"}))
                            }
                        }), this.showPreview(), this.checkedImg()
                    },
                    destroyed: function () {
                        window.removeEventListener("mousemove", this.moveCrop), window.removeEventListener("mouseup", this.leaveCrop), window.removeEventListener("touchmove", this.moveCrop), window.removeEventListener("touchend", this.leaveCrop)
                    }
                };
                o(1);
                var s = function (t, e, o, r, n, i, a, s) {
                    var c, l = "function" == typeof t ? t.options : t;
                    if (e && (l.render = e, l.staticRenderFns = [], l._compiled = !0), l._scopeId = "data-v-" + i, c) if (l.functional) {
                        l._injectStyles = c;
                        var p = l.render;
                        l.render = function (t, e) {
                            return c.call(e), p(t, e)
                        }
                    } else {
                        var u = l.beforeCreate;
                        l.beforeCreate = u ? [].concat(u, c) : [c]
                    }
                    return {exports: t, options: l}
                }(a, r, 0, 0, 0, "6dae58fd");
                s.options.__file = "src/vue-cropper.vue";
                var c = s.exports;
                o.d(e, "VueCropper", function () {
                    return c
                });
                var l = function (t) {
                    t.component("VueCropper", c)
                };
                "undefined" != typeof window && window.Vue && l(window.Vue), e.default = {
                    version: "0.4.6",
                    install: l,
                    VueCropper: c
                }
            }])
        })
    }, rAHS: function (t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = o("woOf"), n = o.n(r), i = o("fZjL"), a = o.n(i), s = o("8Q2T"), c = o("oAV5"), l = o("YZ0n"),
            p = o("IcnI"), u = o("mWYR"), h = {
                components: {VueCropper: l.VueCropper}, data: function () {
                    return {
                        loadingSaveBtn: !1,
                        loadingUploadBtn: !1,
                        uploadModalVisible: !1,
                        preview: {},
                        uploadImgSrc: "",
                        avatarOption: {imgSrc: "", size: .8, outputType: "png"},
                        languages: u.b,
                        formProfile: {real_name: "", mood: "", major: "", blog: "", school: "", github: "", language: ""}
                    }
                }, mounted: function () {
                    var t = this, e = this.$store.state.user.profile;
                    a()(this.formProfile).forEach(function (o) {
                        void 0 !== e[o] && (t.formProfile[o] = e[o])
                    })
                }, methods: {
                    checkFileType: function (t) {
                        return !!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(t.name) || (this.$Notice.warning({
                            title: "File type not support",
                            desc: "The format of " + t.name + " is incorrect ，please choose image only."
                        }), !1)
                    }, checkFileSize: function (t) {
                        return !(t.size > 2097152) || (this.$Notice.warning({
                            title: "Exceed max size limit",
                            desc: "File " + t.name + " is too big, you can upload a image up to 2MB in size"
                        }), !1)
                    }, handleSelectFile: function (t) {
                        var e = this;
                        if (!(this.checkFileType(t) && this.checkFileSize(t))) return !1;
                        var o = new window.FileReader;
                        return o.onload = function (t) {
                            e.avatarOption.imgSrc = t.target.result
                        }, o.readAsDataURL(t), !1
                    }, realTime: function (t) {
                        this.preview = t
                    }, rotate: function (t) {
                        "left" === t ? this.$refs.cropper.rotateLeft() : this.$refs.cropper.rotateRight()
                    }, reselect: function () {
                        var t = this;
                        this.$Modal.confirm({
                            content: "Are you sure to disgard the changes?", onOk: function () {
                                t.avatarOption.imgSrc = ""
                            }
                        })
                    }, finishCrop: function () {
                        var t = this;
                        this.$refs.cropper.getCropData(function (e) {
                            t.uploadImgSrc = e, t.uploadModalVisible = !0
                        })
                    }, uploadAvatar: function () {
                        var t = this;
                        this.$refs.cropper.getCropBlob(function (e) {
                            var o = new window.FormData, r = new window.File([e], "avatar." + t.avatarOption.outputType);
                            o.append("image", r), t.loadingUploadBtn = !0, t.$http({
                                method: "post",
                                url: "upload_avatar",
                                data: o,
                                headers: {"content-type": "multipart/form-data"}
                            }).then(function (e) {
                                t.loadingUploadBtn = !1, t.$success("Successfully set new avatar"), t.uploadModalVisible = !1, t.avatarOption.imgSrc = "", t.$store.dispatch("getProfile")
                            }, function () {
                                t.loadingUploadBtn = !1
                            })
                        })
                    }, updateProfile: function () {
                        var t = this;
                        this.loadingSaveBtn = !0;
                        var e = c.a.filterEmptyValue(n()({}, this.formProfile));
                        s.a.updateProfile(e).then(function (e) {
                            t.$success("Success"), t.$store.commit(p.b.CHANGE_PROFILE, {profile: e.data.data}), t.loadingSaveBtn = !1
                        }, function (e) {
                            t.loadingSaveBtn = !1
                        })
                    }
                }, computed: {
                    previewStyle: function () {
                        return {width: this.preview.w + "px", height: this.preview.h + "px", overflow: "hidden"}
                    }
                }
            }, d = {
                render: function () {
                    var t = this, e = t.$createElement, o = t._self._c || e;
                    return o("div", {staticClass: "setting-main"}, [o("div", {staticClass: "section-title"}, [t._v(t._s(t.$t("m.Avatar_Setting")))]), t._v(" "), t.avatarOption.imgSrc ? [o("div", {staticClass: "flex-container"}, [o("div", {staticClass: "cropper-main inline"}, [o("vueCropper", {
                        ref: "cropper",
                        attrs: {
                            autoCrop: "",
                            fixed: "",
                            autoCropWidth: 200,
                            autoCropHeight: 200,
                            img: t.avatarOption.imgSrc,
                            outputSize: t.avatarOption.size,
                            outputType: t.avatarOption.outputType,
                            info: !0
                        },
                        on: {realTime: t.realTime}
                    })], 1), t._v(" "), o("ButtonGroup", {
                        staticClass: "cropper-btn",
                        attrs: {vertical: ""}
                    }, [o("Button", {
                        on: {
                            click: function (e) {
                                t.rotate("left")
                            }
                        }
                    }, [o("Icon", {
                        attrs: {
                            type: "arrow-return-left",
                            size: "20"
                        }
                    })], 1), t._v(" "), o("Button", {
                        on: {
                            click: function (e) {
                                t.rotate("right")
                            }
                        }
                    }, [o("Icon", {
                        attrs: {
                            type: "arrow-return-right",
                            size: "20"
                        }
                    })], 1), t._v(" "), o("Button", {on: {click: t.reselect}}, [o("Icon", {
                        attrs: {
                            type: "refresh",
                            size: "20"
                        }
                    })], 1), t._v(" "), o("Button", {on: {click: t.finishCrop}}, [o("Icon", {
                        attrs: {
                            type: "checkmark-round",
                            size: "20"
                        }
                    })], 1)], 1), t._v(" "), o("div", {
                        staticClass: "cropper-preview",
                        style: t.previewStyle
                    }, [o("div", {style: t.preview.div}, [o("img", {
                        style: t.preview.img,
                        attrs: {src: t.avatarOption.imgSrc}
                    })])])], 1)] : [o("Upload", {
                        staticClass: "mini-container",
                        attrs: {
                            type: "drag",
                            accept: ".jpg,.jpeg,.png,.bmp,.gif",
                            action: "",
                            "before-upload": t.handleSelectFile
                        }
                    }, [o("div", {staticStyle: {padding: "30px 0"}}, [o("Icon", {
                        staticStyle: {color: "#3399ff"},
                        attrs: {type: "ios-cloud-upload", size: "52"}
                    }), t._v(" "), o("p", [t._v("Drop here, or click to select manually")])], 1)])], t._v(" "), o("Modal", {
                        attrs: {title: "Upload the avatar"},
                        model: {
                            value: t.uploadModalVisible, callback: function (e) {
                                t.uploadModalVisible = e
                            }, expression: "uploadModalVisible"
                        }
                    }, [o("div", {staticClass: "upload-modal"}, [o("p", {staticClass: "notice"}, [t._v("Your avatar will be set to:")]), t._v(" "), o("img", {attrs: {src: t.uploadImgSrc}})]), t._v(" "), o("div", {
                        attrs: {slot: "footer"},
                        slot: "footer"
                    }, [o("Button", {
                        attrs: {loading: t.loadingUploadBtn},
                        on: {click: t.uploadAvatar}
                    }, [t._v("upload")])], 1)]), t._v(" "), o("div", {staticClass: "section-title"}, [t._v(t._s(t.$t("m.Profile_Setting")))]), t._v(" "), o("Form", {
                        ref: "formProfile",
                        attrs: {model: t.formProfile}
                    }, [o("Row", {
                        attrs: {
                            type: "flex",
                            gutter: 30,
                            justify: "space-around"
                        }
                    }, [o("Col", {attrs: {span: 11}}, [o("FormItem", {attrs: {label: "Real Name"}}, [o("Input", {
                        model: {
                            value: t.formProfile.real_name,
                            callback: function (e) {
                                t.$set(t.formProfile, "real_name", e)
                            },
                            expression: "formProfile.real_name"
                        }
                    })], 1), t._v(" "), o("Form-item", {attrs: {label: "School"}}, [o("Input", {
                        model: {
                            value: t.formProfile.school,
                            callback: function (e) {
                                t.$set(t.formProfile, "school", e)
                            },
                            expression: "formProfile.school"
                        }
                    })], 1), t._v(" "), o("Form-item", {attrs: {label: "Major"}}, [o("Input", {
                        model: {
                            value: t.formProfile.major,
                            callback: function (e) {
                                t.$set(t.formProfile, "major", e)
                            },
                            expression: "formProfile.major"
                        }
                    })], 1), t._v(" "), o("FormItem", {attrs: {label: "Language"}}, [o("Select", {
                        model: {
                            value: t.formProfile.language,
                            callback: function (e) {
                                t.$set(t.formProfile, "language", e)
                            },
                            expression: "formProfile.language"
                        }
                    }, t._l(t.languages, function (e) {
                        return o("Option", {key: e.value, attrs: {value: e.value}}, [t._v(t._s(e.label))])
                    }))], 1), t._v(" "), o("Form-item", [o("Button", {
                        attrs: {type: "primary", loading: t.loadingSaveBtn},
                        on: {click: t.updateProfile}
                    }, [t._v("Save All")])], 1)], 1), t._v(" "), o("Col", {attrs: {span: 11}}, [o("Form-item", {attrs: {label: "Mood"}}, [o("Input", {
                        model: {
                            value: t.formProfile.mood,
                            callback: function (e) {
                                t.$set(t.formProfile, "mood", e)
                            },
                            expression: "formProfile.mood"
                        }
                    })], 1), t._v(" "), o("Form-item", {attrs: {label: "Blog"}}, [o("Input", {
                        model: {
                            value: t.formProfile.blog,
                            callback: function (e) {
                                t.$set(t.formProfile, "blog", e)
                            },
                            expression: "formProfile.blog"
                        }
                    })], 1), t._v(" "), o("Form-item", {attrs: {label: "Github"}}, [o("Input", {
                        model: {
                            value: t.formProfile.github,
                            callback: function (e) {
                                t.$set(t.formProfile, "github", e)
                            },
                            expression: "formProfile.github"
                        }
                    })], 1)], 1)], 1)], 1)], 2)
                }, staticRenderFns: []
            };
        var f = o("VU/8")(h, d, !1, function (t) {
            o("Mw+o")
        }, "data-v-4aab4506", null);
        e.default = f.exports
    }, s44H: function (t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = o("Dd8w"), n = o.n(r), i = o("NYxO"), a = {
            name: "profile", methods: {
                goRoute: function (t) {
                    this.$router.push(t)
                }
            }, computed: n()({}, Object(i.mapGetters)(["profile"]), {
                activeName: function () {
                    return this.$route.path
                }
            })
        }, s = {
            render: function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {staticClass: "container"}, [o("Card", {attrs: {padding: 0}}, [o("div", {staticClass: "flex-container"}, [o("div", {staticClass: "menu"}, [o("Menu", {
                    staticStyle: {"text-align": "center"},
                    attrs: {accordion: "", activeName: t.activeName, width: "auto"},
                    on: {"on-select": t.goRoute}
                }, [o("div", {staticClass: "avatar-editor"}, [o("div", {staticClass: "avatar-container"}, [o("img", {
                    staticClass: "avatar",
                    attrs: {src: t.profile.avatar}
                }), t._v(" "), o("div", {staticClass: "avatar-mask"}, [o("a", {
                    on: {
                        click: function (e) {
                            e.stopPropagation(), t.goRoute({name: "profile-setting"})
                        }
                    }
                }, [o("div", {staticClass: "mask-content"}, [o("Icon", {
                    attrs: {
                        type: "camera",
                        size: "30"
                    }
                }), t._v(" "), o("p", {staticClass: "text"}, [t._v("change avatar")])], 1)])])])]), t._v(" "), o("Menu-item", {attrs: {name: "/setting/profile"}}, [t._v(t._s(t.$t("m.Profile")))]), t._v(" "), o("Menu-item", {attrs: {name: "/setting/account"}}, [t._v(t._s(t.$t("m.Account")))]), t._v(" "), o("Menu-item", {attrs: {name: "/setting/security"}}, [t._v(t._s(t.$t("m.Security")))])], 1)], 1), t._v(" "), o("div", {staticClass: "panel"}, [o("transition", {attrs: {name: "fadeInUp"}}, [o("router-view")], 1)], 1)])])], 1)
            }, staticRenderFns: []
        };
        var c = o("VU/8")(a, s, !1, function (t) {
            o("27qU"), o("6yVS")
        }, "data-v-901e7940", null);
        e.default = c.exports
    }
});