import {
    _ as c
} from "./nuxt-link.81d4da0e.js";
import {
    _ as n,
    o as s,
    c as l,
    a as _,
    t as o,
    b as d,
    w as i,
    d as p,
    p as r,
    e as x
} from "./entry.baa6724e.js";
const u = {
        name: "BlockHead",
        props: ["title", "link", "linktext"]
    },
    h = t => (r("data-v-c3a81764"), t = t(), x(), t),
    m = {
        class: "bloq-head"
    },
    k = h(() => _("i", {
        class: "bx bx-chevron-right"
    }, null, -1));

function f(t, v, e, b, B, I) {
    const a = c;
    return s(), l("div", m, [_("h4", null, o(e.title), 1), d(a, {
        to: e.link
    }, {
        default: i(() => [p(o(e.linktext) + " ", 1), k]),
        _: 1
    }, 8, ["to"])])
}
const w = n(u, [
    ["render", f],
    ["__scopeId", "data-v-c3a81764"]
]);
export {
    w as _
};