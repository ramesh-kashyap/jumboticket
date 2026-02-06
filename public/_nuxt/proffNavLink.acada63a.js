import {
    _ as a
} from "./nuxt-link.81d4da0e.js";
import {
    _,
    o as i,
    c as l,
    a as e,
    b as o,
    w as n,
    d as s
} from "./entry.baa6724e.js";
const r = {},
    c = {
        class: "flex justify-center"
    },
    f = {
        class: "nav-links"
    };

function p(d, u, m, x, v, y) {
    const t = a;
    return i(), l("div", null, [e("div", c, [e("ul", f, [e("li", null, [o(t, {
        to: "/profile/edit-profile"
    }, {
        default: n(() => [s("Edit Profile")]),
        _: 1
    })]), e("li", null, [o(t, {
        to: "/profile/reset-password"
    }, {
        default: n(() => [s("Reset Password")]),
        _: 1
    })]), e("li", null, [o(t, {
        to: "/profile/transaction-security"
    }, {
        default: n(() => [s("Transaction Security ")]),
        _: 1
    })]), e("li", null, [o(t, {
        to: "/profile/payment-information"
    }, {
        default: n(() => [s("Payment Information")]),
        _: 1
    })])])])])
}
const h = _(r, [
    ["render", p],
    ["__scopeId", "data-v-630ec677"]
]);
export {
    h as p
};