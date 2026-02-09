import {
    _ as y
} from "./bloqHead.ac0c20f1.js";
import {
    _ as h
} from "./pagination.68d3ca1f.js";
import {
    f as g,
    _ as v,
    u as k,
    r as R,
    c as n,
    a as t,
    b as d,
    t as a,
    g as C,
    h as S,
    k as B,
    F as w,
    l as f,
    d as W,
    o as i
} from "./entry.baa6724e.js";
import {
    s as m,
    a as _
} from "./store.669f290b.js";
import {
    C as E
} from "./flatpickr.112cde07.js";
import {
    _ as F
} from "./parentcomponent.906631da.js";
import {
    a as T,
    _ as D,
    b as j,
    c as N,
    d as V,
    e as q
} from "./jt-coin-icon.949d4596.js";
import "./nuxt-link.81d4da0e.js";
import "./auth.5fc731a5.js";
const p = g("walletReportStore", {
    state: m.state,
    getters: m.getters,
    actions: Object.assign({}, m.actions, {
        async load(l, s) {
            Object.keys(s).length == 0 ? _.formGet(this, "/wallet-report", [p()]) : _.formGet(this, "/wallet-report/" + s.id, [p()])
        },
        async getReport(l) {
            _.formPost(this, "/wallet-report", l, [p()])
        }
    })
});
const J = {
        extends: F,
        onLoadInitGetRequest: !0,
        setup() {
            return k({
                title: "Wallet Report - Track Your Transaction History | Jumbo Ticket",
                meta: [{
                    name: "description",
                    content: "Access detailed reports of your wallet transactions to monitor your financial activity on Jumbo Tickets platform."
                }, {
                    name: "keywords",
                    content: "Buy Lottery Ticket, Safe Lottery Jackpot, Play Online Lottery, Bitcoin Lottery"
                }]
            }), {
                store: p()
            }
        },
        components: {
            flatPickr: E,
            pagination: h
        },
        data() {
            return {
                form: {
                    currentpage: 1,
                    wallettype: "",
                    datefrom: null,
                    dateto: null
                },
                wWallet: {
                    wallettype: 1
                },
                dWallet: {
                    wallettype: 2
                },
                bWallet: {
                    wallettype: 3
                },
                rWallet: {
                    wallettype: 4
                },
                aWallet: {
                    wallettype: 5
                },
                jWallet: {
                    wallettype: 8
                }
            }
        },
        computed: {
            wreport() {
                return this.emptyIfNotExist("transactions", this.response.page)
            },
            slNo() {
                return this.emptyIfNotExist("current_page_start_record", this.response.page.pagination)
            }
        },
        methods: {
            onSubmit() {
                this.store.getReport(this.form)
            },
            onChangeSelect() {
                this.onSubmit()
            },
            showwreport() {
                this.store.getReport(this.wWallet)
            },
            showDReport() {
                this.store.getReport(this.dWallet)
            },
            showBReport() {
                this.store.getReport(this.bWallet)
            },
            showRReport() {
                this.store.getReport(this.rWallet)
            },
            showAReport() {
                this.store.getReport(this.aWallet)
            },
            showJReport() {
                this.store.getReport(this.jWallet)
            },
            changePage(l) {
                this.form.currentpage = l, this.onSubmit()
            }
        }
    },
    z = {
        class: "bg-white px-6 py-6 rounded-lg mt-2 grid"
    },
    A = {
        class: "flex flex-wrap -mx-3 mt-3"
    },
    L = {
        class: "w-full sm:w-1/2 lg:w-3/12 px-3 my-3"
    },
    P = {
        class: "rounded-lg border border-gray-200 px-4 py-4 flex items-center"
    },
    I = t("div", {
        class: "w-16 h-16 mr-3 bg-gray-200 rounded-lg flex items-center justify-center"
    }, [t("img", {
        src: T,
        alt: "",
        class: "w-[40px]"
    })], -1),
    O = {
        class: "w-[calc(100%-76px)] wlt-box"
    },
    G = t("span", {
        class: "text-[#BF953F] font-semibold capitalize"
    }, "Winnings wallet", -1),
    H = {
        class: "text-[16px] text-[#111] font-semibold"
    },
    U = {
        class: "w-full sm:w-1/2 lg:w-3/12 px-3 my-3"
    },
    M = {
        class: "rounded-lg border border-gray-200 px-4 py-4 flex items-center"
    },
    Y = t("div", {
        class: "w-16 h-16 mr-3 bg-gray-200 rounded-lg flex items-center justify-center"
    }, [t("img", {
        src: D,
        alt: "",
        class: "w-[40px]"
    })], -1),
    K = {
        class: "w-[calc(100%-76px)] wlt-box"
    },
    Q = t("span", {
        class: "text-[#BF953F] font-semibold capitalize"
    }, "Deposit wallet", -1),
    X = {
        class: "text-[16px] text-[#111] font-semibold"
    },
    Z = {
        class: "w-full sm:w-1/2 lg:w-3/12 px-3 my-3"
    },
    $ = {
        class: "rounded-lg border border-gray-200 px-4 py-4 flex items-center"
    },
    tt = t("div", {
        class: "w-16 h-16 mr-3 bg-gray-200 rounded-lg flex items-center justify-center"
    }, [t("img", {
        src: j,
        alt: "",
        class: "w-[40px]"
    })], -1),
    et = {
        class: "w-[calc(100%-76px)] wlt-box"
    },
    st = t("span", {
        class: "text-[#BF953F] font-semibold capitalize"
    }, "Ticket Wallet", -1),
    ot = {
        class: "text-[16px] text-[#111] font-semibold"
    },
    lt = {
        class: "w-full sm:w-1/2 lg:w-3/12 px-3 my-3"
    },
    at = {
        class: "rounded-lg border border-gray-200 px-4 py-4 flex items-center"
    },
    rt = t("div", {
        class: "w-16 h-16 mr-3 bg-gray-200 rounded-lg flex items-center justify-center"
    }, [t("img", {
        src: N,
        alt: "",
        class: "w-[40px]"
    })], -1),
    nt = {
        class: "w-[calc(100%-76px)] wlt-box"
    },
    it = t("span", {
        class: "text-[#BF953F] font-semibold capitalize"
    }, "Rewards wallet", -1),
    ct = {
        class: "text-[16px] text-[#111] font-semibold"
    },
    dt = {
        class: "w-full sm:w-1/2 lg:w-3/12 px-3 my-3"
    },
    pt = {
        class: "rounded-lg border border-gray-200 px-4 py-4 flex items-center"
    },
    mt = t("div", {
        class: "w-16 h-16 mr-3 bg-gray-200 rounded-lg flex items-center justify-center"
    }, [t("img", {
        src: V,
        alt: "",
        class: "w-[40px]"
    })], -1),
    _t = {
        class: "w-[calc(100%-76px)] wlt-box"
    },
    ut = t("span", {
        class: "text-[#BF953F] font-semibold capitalize"
    }, "A wallet", -1),
    wt = {
        class: "text-[16px] text-[#111] font-semibold"
    },
    ft = {
        class: "w-full sm:w-1/2 lg:w-3/12 px-3 my-3"
    },
    ht = {
        class: "rounded-lg border border-gray-200 px-4 py-4 flex items-center"
    },
    xt = t("div", {
        class: "w-16 h-16 mr-3 bg-gray-200 rounded-lg flex items-center justify-center"
    }, [t("img", {
        src: q,
        alt: "",
        class: "w-[40px]"
    })], -1),
    bt = {
        class: "w-[calc(100%-76px)] wlt-box"
    },
    yt = t("span", {
        class: "text-[#BF953F] font-semibold capitalize"
    }, "Jumbo Coin wallet", -1),
    gt = {
        class: "text-[16px] text-[#111] font-semibold"
    },
    vt = t("div", {
        class: "mt-5 mb-7 h-[1px] bg-gray-200 w-full"
    }, null, -1),
    kt = {
        class: "flex flex-wrap -mx-3 mt-3 items-end"
    },
    Rt = {
        class: "w-full sm:w-1/2 lg:w-3/12 px-3 my-3"
    },
    Ct = t("label", {
        for: "",
        class: "mb-1 block"
    }, "Wallet", -1),
    St = ["value"],
    Bt = {
        class: "w-full sm:w-1/2 lg:w-3/12 px-3 my-3"
    },
    Wt = t("label", {
        for: "",
        class: "mb-1 block"
    }, "From", -1),
    Et = {
        class: "w-full sm:w-1/2 lg:w-3/12 px-3 my-3"
    },
    Ft = t("label", {
        for: "",
        class: "mb-1 block"
    }, "To", -1),
    Tt = t("div", {
        class: "w-full sm:w-1/2 lg:w-3/12 px-3 my-3"
    }, [t("button", {
        type: "submit",
        class: "bg-[#ECC762] px-4 py-2 h-[45px] rounded-lg border-[#ECC762] uppercase font-semibold inline-flex items-center transition-all justify-center w-full hover:opacity-90"
    }, [t("i", {
        class: "bx bxs-filter-alt mr-1"
    }), W(" Select ")])], -1),
    Dt = {
        class: "overflow-x-auto rounded-lg mt-5"
    },
    jt = {
        class: "w-full text-sm text-left text-gray-500"
    },
    Nt = t("thead", {
        class: "text-xs text-[#111] uppercase bg-[#ECC762]"
    }, [t("tr", null, [t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Sl No."), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Trans. No"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Trans. Date"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Description"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Trans. Amount"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Cr./Dr."), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Balance")])], -1),
    Vt = {
        scope: "row",
        class: "px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
    },
    qt = {
        class: "px-6 py-3"
    },
    Jt = {
        class: "px-6 py-3"
    },
    zt = {
        class: "px-6 py-3"
    },
    At = {
        class: "px-6 py-3"
    },
    Lt = {
        class: "px-6 py-3"
    },
    Pt = {
        class: "px-6 py-3"
    };

function It(l, s, Ot, Gt, r, o) {
    const x = y,
        u = R("flat-pickr"),
        b = h;
    return i(), n("div", null, [t("div", z, [d(x, {
        title: "Wallet Report",
        link: "/buy-ticket",
        linktext: "Buy Ticket"
    }), t("div", A, [t("div", L, [t("button", {
        onClick: s[0] || (s[0] = (...e) => o.showwreport && o.showwreport(...e)),
        class: "block w-full text-left"
    }, [t("div", P, [I, t("div", O, [G, t("p", H, " $" + a(l.response.user["qcwallet_balances_fordisplay.1_available_balance"]), 1)])])])]), t("div", U, [t("button", {
        onClick: s[1] || (s[1] = (...e) => o.showDReport && o.showDReport(...e)),
        class: "block w-full text-left"
    }, [t("div", M, [Y, t("div", K, [Q, t("p", X, " $" + a(l.response.user["qcwallet_balances_fordisplay.2_available_balance"]), 1)])])])]), t("div", Z, [t("button", {
        onClick: s[2] || (s[2] = (...e) => o.showBReport && o.showBReport(...e)),
        class: "block w-full text-left"
    }, [t("div", $, [tt, t("div", et, [st, t("p", ot, " $" + a(l.response.user["qcwallet_balances_fordisplay.3_available_balance"]), 1)])])])]), t("div", lt, [t("button", {
        onClick: s[3] || (s[3] = (...e) => o.showRReport && o.showRReport(...e)),
        class: "block w-full text-left"
    }, [t("div", at, [rt, t("div", nt, [it, t("p", ct, " $" + a(l.response.user["qcwallet_balances_fordisplay.4_available_balance"]), 1)])])])]), t("div", dt, [t("button", {
        onClick: s[4] || (s[4] = (...e) => o.showAReport && o.showAReport(...e)),
        class: "block w-full text-left"
    }, [t("div", pt, [mt, t("div", _t, [ut, t("p", wt, " $" + a(l.response.user["qcwallet_balances_fordisplay.5_available_balance"]), 1)])])])]), t("div", ft, [t("button", {
        onClick: s[5] || (s[5] = (...e) => o.showJReport && o.showJReport(...e)),
        class: "block w-full text-left"
    }, [t("div", ht, [xt, t("div", bt, [yt, t("p", gt, " $" + a(l.response.user["qcwallet_balances_fordisplay.8_available_balance"]), 1)])])])])]), vt, t("form", {
        action: "#",
        method: "POST",
        onSubmit: s[10] || (s[10] = C((...e) => o.onSubmit && o.onSubmit(...e), ["prevent"]))
    }, [t("div", kt, [t("div", Rt, [Ct, S(t("select", {
        "onUpdate:modelValue": s[6] || (s[6] = e => r.form.wallettype = e),
        onChange: s[7] || (s[7] = e => o.onChangeSelect()),
        id: "searchlist",
        name: "searchlist",
        autocomplete: "searchlist",
        class: "bg-gray-50 border border-[#ECC762] px-4 py-2 h-[45px] rounded-lg outline-none shadow-none w-full"
    }, [(i(!0), n(w, null, f(l.emptyIfNotExist("wallettype", l.response.lists), (e, c) => (i(), n("option", {
        key: c,
        value: e.value
    }, a(e.caption), 9, St))), 128))], 544), [
        [B, r.form.wallettype]
    ])]), t("div", Bt, [Wt, d(u, {
        modelValue: r.form.datefrom,
        "onUpdate:modelValue": s[8] || (s[8] = e => r.form.datefrom = e),
        placeholder: "Select From Date",
        class: "bg-gray-50 border border-[#ECC762] px-4 py-2 h-[45px] rounded-lg outline-none shadow-none w-full"
    }, null, 8, ["modelValue"])]), t("div", Et, [Ft, d(u, {
        modelValue: r.form.dateto,
        "onUpdate:modelValue": s[9] || (s[9] = e => r.form.dateto = e),
        placeholder: "Select To Date",
        class: "bg-gray-50 border border-[#ECC762] px-4 py-2 h-[45px] rounded-lg outline-none shadow-none w-full"
    }, null, 8, ["modelValue"])]), Tt])], 32), t("div", Dt, [t("table", jt, [Nt, t("tbody", null, [(i(!0), n(w, null, f(o.wreport, (e, c) => (i(), n("tr", {
        key: c,
        class: "bg-[#EEEEEE] border-b font-medium text-[#111]"
    }, [t("th", Vt, a(o.slNo + c), 1), t("td", qt, a(e.transid), 1), t("td", Jt, a(l.formatDate(e.transdate)), 1), t("td", zt, a(e.transdesc), 1), t("td", At, "$" + a(e.transamount), 1), t("td", Lt, a(e.transtype), 1), t("td", Pt, [t("strong", null, "$" + a(e.balance), 1)])]))), 128))])])]), d(b, {
        source: l.response
    }, null, 8, ["source"])])])
}
const te = v(J, [
    ["render", It]
]);
export {
    te as
    default
};