import {
    _ as n
} from "./countDown.e07a3ad7.js";
import {
    _ as a
} from "./bloqHead.ac0c20f1.js";
import {
    _ as r
} from "./ticketBox.964e1f45.js";
import {
    _ as l,
    u as d,
    c as m,
    a as t,
    b as s,
    o as u
} from "./entry.baa6724e.js";
import {
    d as _
} from "./dashboard.a4059918.js";
import {
    _ as y
} from "./parentcomponent.906631da.js";
import "./nuxt-link.81d4da0e.js";
import "./auth.5fc731a5.js";
import "./store.669f290b.js";
const x = {
        extends: y,
        onLoadInitGetRequest: !0,
        setup() {
            return d({
                title: "Buy Lottery Tickets Online - Participate & Win Big | Jumbo Ticket",
                meta: [{
                    name: "description",
                    content: "Buy lottery tickets online for a chance to win big jackpots. Get access to premium lottery draws and exclusive prizes."
                }, {
                    name: "keywords",
                    content: "Buy Lottery Ticket, Safe Lottery Jackpot, Play Online Lottery, Bitcoin Lottery"
                }]
            }), {
                store: _()
            }
        },
        components: {
            bloqHead: a,
            ticketBox: r,
            CountDown: n
        },
        data() {
            return {
                packetMega: !1,
                packetRoyal: !1,
                packetJumbo: !1
            }
        },
        computed: {
            getMegaInfo() {
                return this.emptyIfNotExist("megaticketdrwas", this.response.page)
            },
            getRoyalInfo() {
                return this.emptyIfNotExist("royalticketdrwas", this.response.page)
            },
            getJumboInfo() {
                return this.emptyIfNotExist("jumboticketdrwas", this.response.page)
            },
            megaTicketcost() {
                return this.emptyIfNotExist("megaticketcost", this.response.page)
            },
            royalTicketcost() {
                return this.emptyIfNotExist("royalticketcost", this.response.page)
            },
            jumboTicketcost() {
                return this.emptyIfNotExist("jumboticketcost", this.response.page)
            }
        },
        methods: {
            megapack(e) {
                this.packetMega = e
            },
            royalpack(e) {
                this.packetRoyal = e
            },
            jumbopack(e) {
                this.packetJumbo = e
            }
        }
    },
    k = {
        class: "flex items-center justify-between dtimer"
    },
    f = t("div", {
        class: "lg:mb-[15px] lg:ml-[15px] text-center lg:text-left"
    }, [t("h4", {
        class: "uppercase font-semibold"
    }, "Live Draw Timer")], -1),
    g = {
        class: "bg-white px-6 py-6 rounded-lg mt-2"
    },
    w = t("div", {
        class: "flex justify-center mt-5"
    }, [t("h4", {
        class: "text-2xl font-semibold"
    }, "YOUR TICKETS TO TRIUMPH")], -1),
    h = {
        class: "flex flex-wrap -mx-3 mt-1"
    },
    b = {
        class: "w-full sm:w-1/2 xl:w-4/12 2xl:w-4/12 px-3 my-3"
    },
    I = {
        class: "w-full sm:w-1/2 xl:w-4/12 2xl:w-4/12 px-3 my-3"
    },
    T = {
        class: "w-full sm:w-1/2 xl:w-4/12 2xl:w-4/12 px-3 my-3"
    };

function v(e, B, E, J, N, o) {
    const c = n,
        p = a,
        i = r;
    return u(), m("div", null, [t("div", k, [s(c, {
        trans: {
            day: "Day",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds",
            expired: "Event has been expired.",
            running: "Till the end of event.",
            upcoming: "Next draw will start in",
            status: {
                expired: "Expired",
                running: "Running",
                upcoming: "Future"
            }
        }
    }, null, 8, ["trans"]), f]), t("div", g, [s(p, {
        title: "Buy Ticket",
        link: "/ticket-history",
        linktext: "View Ticket History"
    }), w, t("div", h, [t("div", b, [s(i, {
        title: "Mega Jackpot",
        price: "100,000",
        buyingprice: parseInt(o.megaTicketcost.price) || 0,
        drawdate: 20,
        drawno: o.getMegaInfo.draw_no,
        ticketid: 1
    }, null, 8, ["buyingprice", "drawno"])]), t("div", I, [s(i, {
        title: "Royal Jackpot",
        price: "500,000",
        buyingprice: parseInt(o.royalTicketcost.price) || 0,
        drawdate: 25,
        drawno: o.getRoyalInfo.draw_no,
        ticketid: 2
    }, null, 8, ["buyingprice", "drawno"])]), t("div", T, [s(i, {
        title: "Jumbo Jackpot",
        price: "1 Million",
        buyingprice: parseInt(o.jumboTicketcost.price) || 0,
        drawdate: 30,
        drawno: o.getJumboInfo.draw_no,
        ticketid: 3
    }, null, 8, ["buyingprice", "drawno"])])])])])
}
const P = l(x, [
    ["render", v]
]);
export {
    P as
    default
};