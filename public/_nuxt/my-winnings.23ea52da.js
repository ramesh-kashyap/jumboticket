import {
    _ as h
} from "./bloqHead.ac0c20f1.js";
import {
    _
} from "./pagination.68d3ca1f.js";
import {
    f as b,
    _ as k,
    u as w,
    c as i,
    a as t,
    b as d,
    g as v,
    h as E,
    k as S,
    F as u,
    l as y,
    d as C,
    o as r,
    t as n
} from "./entry.baa6724e.js";
import {
    s as l,
    a as g
} from "./store.669f290b.js";
import {
    _ as T
} from "./parentcomponent.906631da.js";
import "./nuxt-link.81d4da0e.js";
import "./auth.5fc731a5.js";
const p = b("myWinningsStore", {
        state: l.state,
        getters: l.getters,
        actions: Object.assign({}, l.actions, {
            async load(s) {
                g.formGet(this, "/my-winnings", [p()])
            },
            async myWinning(s) {
                g.formPost(this, "/my-winnings", s, [p()])
            }
        })
    }),
    F = {
        extends: T,
        onLoadInitGetRequest: !0,
        setup() {
            return w({
                title: "My Winnings - Track Your Lottery Prizes | Jumbo Ticket",
                meta: [{
                    name: "description",
                    content: "Keep track of your lottery winnings and know when you have hit the jackpot with Jumbo Tickets winnings tracking feature."
                }, {
                    name: "keywords",
                    content: "Buy Lottery Ticket, Safe Lottery Jackpot, Play Online Lottery, Bitcoin Lottery"
                }]
            }), {
                store: p()
            }
        },
        components: {
            bloqHead: h,
            pagination: _
        },
        computed: {
            winningReport() {
                return this.emptyIfNotExist("winningreport", this.response.page)
            }
        },
        data() {
            return {
                form: {
                    currentpage: 1,
                    tickettype: ""
                }
            }
        },
        methods: {
            onChangeSelect() {
                this.submitForm()
            },
            submitForm() {
                this.store.myWinning(this.form)
            },
            changePage(s) {
                this.form.currentpage = s, this.submitForm()
            }
        }
    },
    L = {
        class: "bg-white px-6 py-6 rounded-lg mt-2 grid"
    },
    M = {
        class: "mt-4 mb-2"
    },
    P = {
        class: "relative flex"
    },
    W = t("option", {
        selected: "",
        disabled: ""
    }, "-- Select --", -1),
    B = ["value"],
    D = t("button", {
        class: "bg-[#ECC762] px-4 py-2 h-[45px] rounded-lg border-[#ECC762] ml-0 lg:ml-2 mt-5 lg:mt-0 w-full lg:w-auto uppercase font-semibold inline-flex items-center transition-all justify-center hover:opacity-90"
    }, [t("i", {
        class: "bx bxs-filter-alt mr-1"
    }), C(" Select ")], -1),
    N = {
        class: "overflow-x-auto rounded-lg mt-5"
    },
    Y = {
        class: "w-full text-sm text-left text-gray-500"
    },
    z = t("thead", {
        class: "text-xs text-[#111] uppercase bg-[#ECC762]"
    }, [t("tr", null, [t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Draw Date"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Prize"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Prize Amount"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Jackpot"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Ticket No.")])], -1),
    J = {
        scope: "row",
        class: "px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
    },
    V = {
        class: "px-6 py-3"
    },
    j = {
        class: "px-6 py-3"
    },
    q = {
        class: "px-6 py-3"
    },
    H = {
        class: "px-6 py-3"
    };

function I(s, o, O, R, m, a) {
    const f = h,
        x = _;
    return r(), i("div", null, [t("div", L, [d(f, {
        title: "My Winnings",
        link: "/buy-ticket",
        linktext: "Buy Ticket"
    }), t("form", M, [t("div", P, [t("form", {
        action: "#",
        method: "POST",
        onSubmit: o[2] || (o[2] = v((...e) => a.submitForm && a.submitForm(...e), ["prevent"]))
    }, [E(t("select", {
        "onUpdate:modelValue": o[0] || (o[0] = e => m.form.tickettype = e),
        onChange: o[1] || (o[1] = e => a.onChangeSelect()),
        id: "searchlist",
        name: "searchlist",
        autocomplete: "searchlist",
        class: "bg-gray-50 border border-[#ECC762] px-4 py-2 h-[45px] rounded-lg outline-none shadow-none w-full lg:w-auto"
    }, [W, (r(!0), i(u, null, y(s.emptyIfNotExist("tickettype", s.response.lists), (e, c) => (r(), i("option", {
        key: c,
        value: e.value
    }, n(e.caption), 9, B))), 128))], 544), [
        [S, m.form.tickettype]
    ]), D], 32)])]), t("div", N, [t("table", Y, [z, t("tbody", null, [(r(!0), i(u, null, y(a.winningReport, (e, c) => (r(), i("tr", {
        key: c,
        class: "bg-[#EEEEEE] border-b font-medium text-[#111]"
    }, [t("th", J, n(s.formatDate(e.drawn_date, "D MMM YYYY")), 1), t("td", V, n(e.name), 1), t("td", j, n(e.prize), 1), t("td", q, n(e.ticket_type), 1), t("td", H, n(e.ticketno), 1)]))), 128))])])]), d(x, {
        source: s.response
    }, null, 8, ["source"])])])
}
const $ = k(F, [
    ["render", I]
]);
export {
    $ as
    default
};