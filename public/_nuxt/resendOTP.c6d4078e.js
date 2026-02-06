import {
    f as d,
    _ as h,
    o as s,
    c as r,
    a as m,
    t as o,
    j as n,
    n as p,
    F as f
} from "./entry.baa6724e.js";
import {
    s as l,
    a as _
} from "./store.669f290b.js";
import {
    _ as g
} from "./parentcomponent.906631da.js";
const c = d("resendEmailOTPStore", {
        state: l.state,
        getters: l.getters,
        actions: Object.assign({}, l.actions, {
            async resendOTP(t) {
                return _.formPost(this, "/resend-emailotp", t, [c()])
            }
        })
    }),
    x = {
        props: {
            purpose: String
        },
        extends: g,
        setup() {
            return {
                store: c()
            }
        },
        data() {
            return {
                timer: 60,
                intervalId: null,
                form: {
                    _name_: this.purpose
                },
                showBlock: !0,
                sucess: "",
                error: ""
            }
        },
        computed: {
            otpToken() {
                return this.emptyIfNotExist("_OTPTOKEN_", this.response.data)
            },
            formattedTimer() {
                const t = Math.floor(this.timer / 60),
                    i = this.timer % 60;
                return `${String(t).padStart(2,"0")}:${String(i).padStart(2,"0")}`
            }
        },
        watch: {
            otpToken: {
                handler(t, i) {
                    this._OTPTOKEN_ = t, this.$emit("click", {
                        _OTPTOKEN_: this._OTPTOKEN_
                    }), this.starttimer()
                },
                immediate: !0
            }
        },
        methods: {
            Submit() {
                this.store.resendOTP(this.form).then(t => {
                    this.sucess = this.emptyIfNotExist("message", this.response.successdata), this.error = this.emptyArrayIfNotExist("message", this.response), setTimeout(() => {
                        this.sucess = "", this.error = ""
                    }, 5e3)
                })
            },
            starttimer() {
                this.intervalId !== null && clearInterval(this.intervalId), this.timer = 60, this.intervalId = setInterval(() => {
                    this.timer = Math.max(0, this.timer - 1), this.timer === 0 && (clearInterval(this.intervalId), this.intervalId = null)
                }, 1e3)
            }
        }
    },
    b = {
        class: "relative mt-5 rounded-lg overflow-hidden"
    },
    v = {
        key: 0,
        class: "absolute w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] text-white"
    },
    T = {
        key: 0,
        class: "bg-green-400 px-3 py-2 rounded-md mt-4 font-semibold text-center"
    },
    y = {
        key: 0,
        class: "bg-red-400 px-3 py-2 rounded-md mt-4 font-semibold text-center"
    },
    O = {
        key: 1,
        class: "bg-red-400 px-3 py-2 rounded-md mt-4 font-semibold text-center"
    };

function S(t, i, k, I, e, a) {
    return s(), r("div", null, [m("div", b, [e.timer > 0 ? (s(), r("div", v, "Send OTP again in 0:" + o(e.timer), 1)) : n("", !0), m("input", {
        class: p(["bg-[#bf953f] uppercase font-semibold w-full h-[45px] transition-all hover:bg-[#ecc762] text-center cursor-pointer", {
            "text-[#bf953f]": e.timer > 0
        }]),
        type: "button",
        onClick: i[0] || (i[0] = (...u) => a.Submit && a.Submit(...u)),
        value: "Resend OTP"
    }, null, 2)]), e.sucess !== "" || e.sucess === null ? (s(), r("div", T, o(e.sucess), 1)) : n("", !0), e.error.length > 0 && e.sucess === "" ? (s(), r(f, {
        key: 1
    }, [e.error.email !== "" ? (s(), r("div", y, o(e.error.email), 1)) : e.error.fail !== "" || e.error.fail === null ? (s(), r("div", O, o(e.error.fail), 1)) : n("", !0)], 64)) : n("", !0)])
}
const w = h(x, [
    ["render", S]
]);
export {
    w as _
};