import {
    _ as c,
    o as s,
    c as r,
    t,
    j as o
} from "./entry.baa6724e.js";
const i = {
        props: ["type", "source", "target"],
        computed: {
            successMessage() {
                return typeof this.source.response < "u" && this.source.response.message !== "undefined" && this.type == "success" && this.source.response.success ? this.source.response.message : ""
            },
            errorMessage() {
                return this.source.requestFormErrors && this.target && this.target in this.source.requestFormErrors ? this.source.requestFormErrors[this.target] : this.source.response && this.source.response.message && this.type == "error" && !this.source.response.success ? this.target != "" ? this.target in this.source.response.message ? this.source.response.message[this.target] : "" : this.source.response.message : ""
            }
        }
    },
    u = {
        key: 0
    },
    n = {
        key: 1,
        class: "error"
    };

function a(h, p, g, f, m, e) {
    return s(), r("div", null, [e.successMessage != "" ? (s(), r("div", u, t(e.successMessage), 1)) : o("", !0), e.errorMessage != "" ? (s(), r("div", n, t(e.errorMessage), 1)) : o("", !0)])
}
const _ = c(i, [
    ["render", a]
]);
export {
    _ as m
};