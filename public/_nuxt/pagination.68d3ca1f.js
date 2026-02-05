import {
    _ as g,
    o as l,
    c,
    a as e,
    d,
    t as p,
    n as o,
    F as h,
    l as _,
    j as x,
    p as m,
    e as f
} from "./entry.baa6724e.js";
const v = {
        props: ["source"],
        data() {
            return {
                currentPage: 1
            }
        },
        computed: {
            paginate() {
                if (this.pagination !== !1)
                    if (this.pagination.allrowscount > this.pagination.records_per_page) {
                        let t = parseInt(this.pagination.allrowscount / this.pagination.records_per_page);
                        return this.pagination.allrowscount % this.pagination.records_per_page != 0 && (t = t + 1), t
                    } else return 1;
                else return 1
            },
            totalcount() {
                if (this.pagination !== !1) return this.source.page.pagination.allrowscount > 0 ? this.source.page.pagination.allrowscount : 0
            },
            startIndex() {
                if (this.pagination !== !1) return this.pagination.current_page_start_record
            },
            endIndex() {
                if (this.pagination !== !1) return this.pagination.current_page_start_record + (this.pagination.current_page_rows_count - 1)
            },
            pagination() {
                return this.source.page && this.source.page.pagination ? this.source.page.pagination : !1
            }
        },
        methods: {
            nextpage(t) {
                this.currentPage = t, this.$parent.changePage(t)
            },
            next(t) {
                this.currentPage = t, t <= this.paginate && this.$parent.changePage(t)
            },
            previous(t) {
                this.currentPage = t, t >= 1 && this.$parent.changePage(t)
            }
        }
    },
    i = t => (m("data-v-c94c6b57"), t = t(), f(), t),
    w = {
        class: "bg-white py-3 flex items-center justify-between border-t-transparent border-gray-200"
    },
    y = {
        class: "sm:flex-1 sm:flex sm:items-center sm:justify-between"
    },
    b = {
        class: "text-sm text-darkblue-400"
    },
    P = {
        class: "font-medium text-darkblue-600"
    },
    k = {
        class: "font-medium text-darkblue-600"
    },
    C = {
        class: "font-medium text-darkblue-600"
    },
    z = {
        class: "flex"
    },
    I = {
        class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
        "aria-label": "Pagination"
    },
    L = i(() => e("span", {
        class: "sr-only"
    }, "First", -1)),
    B = i(() => e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: "h-5 w-5",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [e("path", {
        "fill-rule": "evenodd",
        d: "M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",
        "clip-rule": "evenodd"
    })], -1)),
    M = [L, B],
    S = i(() => e("span", {
        class: "sr-only"
    }, "Previous", -1)),
    j = i(() => e("svg", {
        class: "h-5 w-5",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [e("path", {
        "fill-rule": "evenodd",
        d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
        "clip-rule": "evenodd"
    })], -1)),
    F = [S, j],
    N = ["onClick"],
    V = {
        class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
        "aria-label": "Pagination"
    },
    D = i(() => e("span", {
        class: "sr-only"
    }, "Next", -1)),
    E = i(() => e("svg", {
        class: "h-5 w-5",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [e("path", {
        "fill-rule": "evenodd",
        d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
        "clip-rule": "evenodd"
    })], -1)),
    T = [D, E],
    q = i(() => e("span", {
        class: "sr-only"
    }, "Last", -1)),
    A = i(() => e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: "h-5 w-5",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [e("path", {
        "fill-rule": "evenodd",
        d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
        "clip-rule": "evenodd"
    }), e("path", {
        "fill-rule": "evenodd",
        d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
        "clip-rule": "evenodd"
    })], -1)),
    G = [q, A];

function H(t, a, J, K, r, n) {
    return l(), c("div", w, [e("div", y, [e("div", null, [e("p", b, [d(" Showing "), e("span", P, p(n.startIndex), 1), d(" to "), e("span", k, p(n.endIndex), 1), d(" of "), e("span", C, p(n.totalcount), 1), d(" results ")])]), e("div", z, [e("ul", I, [e("li", {
        onClick: a[0] || (a[0] = s => n.previous(1)),
        class: o([{
            "opacity-50 pointer-events-none": r.currentPage <= 1
        }, "relative cursor-pointer inline-flex items-center px-2 py-2 rounded-l-md border bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"])
    }, M, 2), e("li", {
        onClick: a[1] || (a[1] = s => n.previous(r.currentPage - 1)),
        class: o([{
            "opacity-50 pointer-events-none": r.currentPage <= 1
        }, "relative cursor-pointer inline-flex items-center px-2 py-2 border bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"])
    }, F, 2)]), (l(!0), c(h, null, _(n.paginate, (s, u) => (l(), c("ul", {
        key: u,
        class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
        "aria-label": "Pagination"
    }, [s <= r.currentPage + 2 && s >= r.currentPage - 2 ? (l(), c("li", {
        key: 0,
        onClick: O => n.nextpage(s),
        "aria-current": "page",
        class: o(["z-10 cursor-pointer bg-white text-gray-500 relative inline-flex items-center px-4 py-2 border text-sm font-medium", {
            currentpage: s === r.currentPage
        }])
    }, p(s), 11, N)) : x("", !0)]))), 128)), e("ul", V, [e("li", {
        onClick: a[2] || (a[2] = s => n.next(r.currentPage + 1)),
        class: o([{
            "opacity-50 pointer-events-none": r.currentPage >= n.paginate || n.paginate == 0
        }, "relative cursor-pointer inline-flex items-center px-2 py-2 border bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"])
    }, T, 2), e("li", {
        onClick: a[3] || (a[3] = s => n.next(n.paginate)),
        class: o([{
            "opacity-50 pointer-events-none": r.currentPage >= n.paginate || n.paginate == 0
        }, "relative cursor-pointer inline-flex items-center px-2 py-2 rounded-r-md border bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"])
    }, G, 2)])])])])
}
const R = g(v, [
    ["render", H],
    ["__scopeId", "data-v-c94c6b57"]
]);
export {
    R as _
};