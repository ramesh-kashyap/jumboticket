import {
    ac as t,
    W as a
} from "./entry.baa6724e.js";
import {
    a as e,
    b as i
} from "./auth.5fc731a5.js";
const f = t((o, r) => {
    if (!e().isAuthenticated) return a(i.authFailedRedirectPath, {
        redirectCode: 200
    })
});
export {
    f as
    default
};