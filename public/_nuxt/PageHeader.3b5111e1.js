import {
    _ as a,
    o as n,
    c as i,
    a as e,
    t as c,
    s as _,
    p as l,
    e as d
} from "./entry.93d2037a.js";
const r = {
        props: {
            imageProp: String,
            title: String,
            description: String,
            page: String,
            bgImageProp: String
        }
    },
    o = t => (l("data-v-d3cc34c6"), t = t(), d(), t),
    p = {
        class: "container"
    },
    g = {
        class: "row align-items-center justify-content"
    },
    u = {
        class: "col-lg-7"
    },
    h = {
        class: "page-text"
    },
    m = o(() => e("li", null, [e("a", {
        href: "/"
    }, "Home")], -1)),
    v = o(() => e("li", null, [e("i", {
        class: "fas fa-chevron-right"
    })], -1));

function S(t, f, s, I, x, y) {
    return n(), i("div", {
        class: "page-head",
        style: _({
            backgroundImage: `url(${s.bgImageProp})`
        })
    }, [e("div", p, [e("div", g, [e("div", u, [e("div", h, [e("h1", null, c(s.title), 1), e("p", null, c(s.description), 1), e("ul", null, [m, v, e("li", null, c(s.page), 1)])])])])])], 4)
}
const b = a(r, [
    ["render", S],
    ["__scopeId", "data-v-d3cc34c6"]
]);
export {
    b as _
};