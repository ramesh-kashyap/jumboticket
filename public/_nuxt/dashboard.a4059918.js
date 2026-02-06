import {
    f as r
} from "./entry.baa6724e.js";
import "./auth.5fc731a5.js";
import {
    s as t,
    a
} from "./store.669f290b.js";
const n = r("englishBannerStore", {
        state: t.state,
        getters: t.getters,
        actions: Object.assign({}, t.actions, {
            async load(s, o) {}
        })
    }),
    e = r("dashboardStore", {
        state: t.state,
        getters: t.getters,
        actions: Object.assign({}, t.actions, {
            async load(s, o) {
                a.formGet(this, "/dashboard", [e(), n()])
            },
            async updateStatus(s) {
                a.formPost(this, "/dashboard", s, [e()])
            }
        })
    });
export {
    e as d, n as e
};