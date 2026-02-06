import {
    _ as c
} from "./nuxt-link.81d4da0e.js";
import {
    _ as s,
    o as _,
    c as a,
    b as l,
    w as r,
    a as t,
    t as o,
    d as n
} from "./entry.baa6724e.js";
const d = {
        props: {
            title: String,
            price: String,
            buyingprice: Number,
            drawdate: String,
            drawno: Number,
            ticketid: Number
        },
        data() {
            return {
                packtype: !1
            }
        },
        methods: {
            togglePacktype() {
                this.packtype = !this.packtype, this.$emit("packtype", this.packtype)
            }
        }
    },
    u = {
        class: "bg-[#ECC762] border border-[#BF953F] rounded-lg ticbox"
    },
    p = {
        class: "ticbox__top"
    },
    b = {
        class: "ticbox__top--left"
    },
    h = {
        class: "ticbox__top--right"
    },
    x = {
        href: "#"
    },
    m = t("i", {
        class: "bx bx-chevron-right"
    }, null, -1),
    g = {
        class: "ticbox__bottom"
    };

function k(y, f, e, N, v, w) {
    const i = c;
    return _(), a("div", u, [l(i, {
        to: "buy-ticket/" + e.ticketid
    }, {
        default: r(() => [t("div", p, [t("div", b, [t("span", null, o(e.title), 1), t("p", null, "$" + o(e.price), 1)]), t("div", h, [t("a", x, [n(" Buy Now $" + o(e.buyingprice) + " ", 1), m])])]), t("div", g, [t("ul", null, [t("li", null, [n("Total No. of Winners: "), t("span", null, o(e.drawdate), 1)]), t("li", null, [n("Draw No.: "), t("span", null, o(e.drawno), 1)])])])]),
        _: 1
    }, 8, ["to"])])
}
const C = s(d, [
    ["render", k]
]);
export {
    C as _
};