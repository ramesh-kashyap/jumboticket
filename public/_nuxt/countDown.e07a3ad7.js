import {
    _ as h,
    o as d,
    c as l,
    a as s,
    t as o
} from "./entry.baa6724e.js";
const u = {
        props: ["trans", "timezone"],
        data() {
            return {
                wordString: {},
                days: "",
                minutes: "",
                hours: "",
                seconds: "",
                statusType: "",
                interval: null
            }
        },
        created() {
            this.wordString = this.trans, this.interval = setInterval(this.timerCount, 1e3)
        },
        beforeUnmount() {
            clearInterval(this.interval)
        },
        methods: {
            timerCount() {
                const _ = new Date().toLocaleString("en-US", {
                        timeZone: this.timezone
                    }),
                    n = new Date(_),
                    i = new Date(n.getFullYear(), n.getMonth(), 5, 4, 30, 0);
                let e = i - n;
                if (e < 0 && (i.setMonth(i.getMonth() + 1), e = i - n), e <= 0) this.days = 0, this.hours = 0, this.minutes = 0, this.seconds = 0, this.statusType = "expired", clearInterval(this.interval);
                else {
                    const t = Math.floor(e / 864e5),
                        r = Math.floor(e % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
                        c = Math.floor(e % (1e3 * 60 * 60) / (1e3 * 60)),
                        a = Math.floor(e % (1e3 * 60) / 1e3);
                    this.days = t < 10 ? "0" + t : t, this.hours = r < 10 ? "0" + r : r, this.minutes = c < 10 ? "0" + c : c, this.seconds = a < 10 ? "0" + a : a, this.statusType = "running"
                }
            }
        }
    },
    m = {
        class: "timer text-center lg:text-left"
    },
    p = {
        class: "day"
    },
    v = {
        class: "number"
    },
    f = {
        class: "format"
    },
    g = {
        class: "hour"
    },
    y = {
        class: "number"
    },
    w = {
        class: "format"
    },
    S = {
        class: "min"
    },
    x = {
        class: "number"
    },
    M = {
        class: "format"
    },
    D = {
        class: "sec"
    },
    b = {
        class: "number"
    },
    B = {
        class: "format"
    };

function I(_, n, i, e, t, r) {
    return d(), l("div", m, [s("div", null, [s("div", p, [s("span", v, o(t.days), 1), s("div", f, o(t.wordString.day), 1)]), s("div", g, [s("span", y, o(t.hours), 1), s("div", w, o(t.wordString.hours), 1)]), s("div", S, [s("span", x, o(t.minutes), 1), s("div", M, o(t.wordString.minutes), 1)]), s("div", D, [s("span", b, o(t.seconds), 1), s("div", B, o(t.wordString.seconds), 1)])])])
}
const k = h(u, [
    ["render", I]
]);
export {
    k as _
};