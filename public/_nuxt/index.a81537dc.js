import {
    _ as x
} from "./bloqHead.ac0c20f1.js";
import {
    _ as b
} from "./pagination.68d3ca1f.js";
import {
    f as v,
    _ as E,
    u as C,
    c as s,
    a as t,
    b as h,
    g as S,
    h as V,
    k as W,
    F as a,
    l as f,
    d as i,
    o as l,
    t as n,
    j as u
} from "./entry.baa6724e.js";
import {
    s as _,
    a as g
} from "./store.669f290b.js";
import {
    _ as N
} from "./parentcomponent.906631da.js";
import "./nuxt-link.81d4da0e.js";
import "./auth.5fc731a5.js";
const y = v("ticketHistoryStore", {
    state: _.state,
    getters: _.getters,
    actions: Object.assign({}, _.actions, {
        async load(o) {
            g.formGet(this, "/buy-ticket-report", [y()])
        },
        async getReport(o) {
            g.formPost(this, "/buy-ticket-report", o, [y()])
        }
    })
});
const I = {
        extends: N,
        onLoadInitGetRequest: !0,
        setup() {
            return C({
                title: "Ticket History - View Your Lottery Ticket Purchases | Jumbo Ticket",
                meta: [{
                    name: "description",
                    content: "View your complete history of purchased lottery tickets and track your participation in past draws effortlessly."
                }, {
                    name: "keywords",
                    content: "Buy Lottery Ticket, Safe Lottery Jackpot, Play Online Lottery, Bitcoin Lottery"
                }]
            }), {
                store: y()
            }
        },
        components: {
            bloqHead: x,
            pagination: b
        },
        data() {
            return {
                elementVisibility: [],
                form: {
                    currentpage: 1,
                    expirystatus: ""
                }
            }
        },
        computed: {
            drawno() {
                return this.emptyIfNotExist("draw_no", this.response.page.drawno)
            },
            ticketReport() {
                return this.emptyIfNotExist("ticketreport", this.response.page)
            },
            pagination() {
                return this.emptyIfNotExist("current_page_start_record", this.response.page.pagination)
            }
        },
        methods: {
            toggleElement(o) {
                this.elementVisibility[o] = !this.isElementVisible(o)
            },
            isElementVisible(o) {
                return this.elementVisibility[o] || !1
            },
            close(o) {
                this.elementVisibility[o] = !1
            },
            onSubmit() {
                this.formIsValid() && this.store.getReport(this.form)
            },
            onChangeSelect() {
                this.onSubmit()
            },
            changePage(o) {
                this.form.currentpage = o, this.onSubmit()
            }
        },
        formValidations(o) {}
    },
    T = {
        class: "bg-white px-6 py-6 rounded-lg mt-2 grid"
    },
    A = {
        class: "mt-4 mb-2"
    },
    B = {
        class: "relative flex"
    },
    R = t("option", {
        selected: "",
        disabled: ""
    }, "-- Select --", -1),
    D = ["value"],
    H = t("button", {
        type: "submit",
        class: "bg-[#ECC762] px-4 py-2 h-[45px] rounded-lg border-[#ECC762] ml-0 lg:ml-2 mt-5 lg:mt-0 uppercase font-semibold inline-flex items-center transition-all justify-center hover:opacity-90 w-full lg:w-auto"
    }, [t("i", {
        class: "bx bxs-filter-alt mr-1"
    }), i(" Select ")], -1),
    L = {
        class: "overflow-x-auto rounded-lg mt-5"
    },
    j = {
        class: "w-full text-sm text-left text-gray-500 table-auto"
    },
    O = t("thead", {
        class: "text-xs text-[#111] uppercase bg-[#ECC762]"
    }, [t("tr", null, [t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Sl No."), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Ticket Holder"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Purchased By"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Member ID"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Order No."), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Date"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Draw"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Amount"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Quantity"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Wallet"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Status"), t("th", {
        scope: "col",
        class: "px-6 py-5"
    }, "Actions")])], -1),
    J = {
        scope: "row",
        class: "px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
    },
    P = {
        class: "px-6 py-3"
    },
    z = {
        key: 2
    },
    M = {
        class: "px-6 py-3"
    },
    $ = {
        key: 2
    },
    q = {
        class: "px-6 py-3"
    },
    G = {
        class: "px-6 py-3"
    },
    F = {
        class: "px-6 py-3"
    },
    U = {
        class: "px-6 py-3"
    },
    Y = {
        key: 0
    },
    Q = {
        key: 1
    },
    K = {
        key: 2
    },
    X = {
        class: "px-6 py-3"
    },
    Z = {
        class: "px-6 py-3"
    },
    tt = {
        class: "px-6 py-3 relative"
    },
    et = ["onClick"],
    st = t("i", {
        class: "bi bi-exclamation-circle-fill"
    }, null, -1),
    lt = [st],
    ot = ["onClick"],
    it = {
        class: "wallet-info-2"
    },
    nt = ["onClick"],
    at = t("i", {
        class: "bi bi-x-circle-fill"
    }, null, -1),
    ct = [at],
    rt = t("div", {
        class: "bg-gray-200 px-2 py-2 pb-[0.4rem] rounded-md"
    }, [t("small", {
        class: "block leading-[1.3]"
    }, "Debited from below multiple wallets")], -1),
    dt = {
        class: "mt-3 mb-[-4px]"
    },
    ut = {
        class: "px-6 py-3"
    },
    pt = {
        key: 0,
        href: "#",
        class: "bg-[#35AB35] text-[#fff] inline-block px-4 py-2 rounded-xl transition-all hover:opacity-90"
    },
    _t = {
        key: 1,
        href: "#",
        class: "bg-[#EA3838] text-[#fff] inline-block px-4 py-2 rounded-xl transition-all hover:opacity-90"
    },
    yt = {
        class: "px-6 py-3"
    },
    mt = ["href"],
    ht = t("i", {
        class: "bi bi-eye-fill contents"
    }, null, -1),
    ft = [ht];

function gt(o, d, xt, bt, m, c) {
    const k = x,
        w = b;
    return l(), s("div", null, [t("div", T, [h(k, {
        title: "Ticket History",
        link: "/buy-ticket",
        linktext: "Buy Ticket"
    }), t("form", A, [t("div", B, [t("form", {
        action: "#",
        method: "POST",
        onSubmit: d[2] || (d[2] = S((...e) => c.onSubmit && c.onSubmit(...e), ["prevent"]))
    }, [V(t("select", {
        "onUpdate:modelValue": d[0] || (d[0] = e => m.form.expirystatus = e),
        onChange: d[1] || (d[1] = e => c.onChangeSelect()),
        name: "",
        id: "",
        class: "bg-gray-50 border border-[#ECC762] px-4 py-2 h-[45px] rounded-lg outline-none shadow-none w-full lg:w-auto"
    }, [R, (l(!0), s(a, null, f(o.emptyIfNotExist("expirystatus", o.response.lists), (e, r) => (l(), s("option", {
        key: r,
        value: e.value
    }, n(e.caption), 9, D))), 128))], 544), [
        [W, m.form.expirystatus]
    ]), H], 32)])]), t("div", L, [t("table", j, [O, t("tbody", null, [(l(!0), s(a, null, f(c.ticketReport, (e, r) => (l(), s("tr", {
        key: r,
        class: "bg-[#EEEEEE] border-b font-medium text-[#111]"
    }, [t("th", J, n(c.pagination + r), 1), t("td", P, [e.userid === e.f_userid ? (l(), s(a, {
        key: 0
    }, [i(n(e.f_fullname), 1)], 64)) : e.fullname !== "" ? (l(), s(a, {
        key: 1
    }, [i(n(e.fullname), 1)], 64)) : (l(), s("strong", z, "-"))]), t("td", M, [e.userid === e.f_userid ? (l(), s(a, {
        key: 0
    }, [i(" Self ")], 64)) : e.f_fullname !== "" ? (l(), s(a, {
        key: 1
    }, [i(n(e.f_fullname), 1)], 64)) : (l(), s("strong", $, "Others"))]), t("td", q, [e.userid === e.f_userid ? (l(), s(a, {
        key: 0
    }, [i(n(e.username), 1)], 64)) : (l(), s(a, {
        key: 1
    }, [i(n(e.username), 1)], 64))]), t("td", G, n(e.orderno), 1), t("td", F, n(o.formatDate(e.order_datetime)), 1), t("td", U, [e.ticket_typeid == 1 ? (l(), s("strong", Y, "MEGA")) : u("", !0), e.ticket_typeid == 2 ? (l(), s("strong", Q, "ROYAL")) : u("", !0), e.ticket_typeid == 3 ? (l(), s("strong", K, "JUMBO")) : u("", !0)]), t("td", X, [t("strong", null, "$" + n(e.total_amount), 1)]), t("td", Z, [t("strong", null, n(e.total_tickets), 1)]), t("td", tt, [
        [e.iwallettransid, e.fwallettransid, e.bwallettransid, e.rwallettransid, e.awallettransid, e.jtcwallettransid].filter(p => p != 0).length > 2 ? (l(), s(a, {
            key: 0
        }, [i(" W-R-T-A-J Coin-Wallet "), t("span", {
            class: "text-green-500 cursor-pointer",
            onClick: p => c.toggleElement(r)
        }, lt, 8, et), c.isElementVisible(r) ? (l(), s("div", {
            key: 0,
            class: "wallet-wra",
            onClick: p => c.close(r)
        }, [t("div", it, [t("button", {
            onClick: p => c.close(r),
            class: "absolute right-[-7px] top-[-10px] text-red-600"
        }, ct, 8, nt), t("div", null, [rt, t("ul", dt, [t("li", null, [i(" Winners Wallet: "), t("strong", null, "$" + n(o.zeroIfNull(e.iwalletamount)), 1)]), t("li", null, [i(" Reward Wallet: "), t("strong", null, "$" + n(o.zeroIfNull(e.rwalletamount)), 1)]), t("li", null, [i(" Ticket Wallet: "), t("strong", null, "$" + n(o.zeroIfNull(e.bwalletamount)), 1)]), t("li", null, [i(" A Wallet: "), t("strong", null, "$" + n(o.zeroIfNull(e.awalletamount)), 1)]), t("li", null, [i(" J Coin Wallet: "), t("strong", null, "$" + n(o.zeroIfNull(e.jtcwalletamount)), 1)])])])])], 8, ot)) : u("", !0)], 64)) : e.iwallettransid != 0 ? (l(), s(a, {
            key: 1
        }, [i(" W-Wallet ")], 64)) : e.fwallettransid != 0 ? (l(), s(a, {
            key: 2
        }, [i(" D-Wallet ")], 64)) : e.bwallettransid != 0 ? (l(), s(a, {
            key: 3
        }, [i(" T-Wallet ")], 64)) : e.rwallettransid != 0 ? (l(), s(a, {
            key: 4
        }, [i(" R-Wallet ")], 64)) : e.awallettransid != 0 ? (l(), s(a, {
            key: 5
        }, [i(" A-Wallet ")], 64)) : e.jtcwallettransid != 0 ? (l(), s(a, {
            key: 6
        }, [i(" J Coin Wallet ")], 64)) : u("", !0)
    ]), t("td", ut, [e.status == 0 ? (l(), s("a", pt, "Active")) : (l(), s("a", _t, "Expired"))]), t("td", yt, [t("a", {
        href: "/ticket-history/" + e.orderno,
        class: "bg-[#ECC762] text-[#111] inline-flex justify-center items-center px-3 py-2.5 rounded-xl transition-all hover:opacity-90"
    }, ft, 8, mt)])]))), 128))])])]), h(w, {
        source: o.response
    }, null, 8, ["source"])])])
}
const Wt = E(I, [
    ["render", gt]
]);
export {
    Wt as
    default
};