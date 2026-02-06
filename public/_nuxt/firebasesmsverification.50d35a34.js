import {
    i as m,
    g as p,
    R as g,
    s as h
} from "./index-dd468b12.cb5ad844.js";
const w = {
    sendVerificationCode(i, n) {
        var r = {
            apiKey: n.apiKey,
            authDomain: n.authDomain,
            projectId: n.projectId,
            storageBucket: n.storageBucket,
            messagingSenderId: n.messagingSenderId,
            appId: n.appId,
            measurementId: n.measurementId
        };
        m(r);
        const e = p();
        e.languageCode = "en";
        const o = Date.now().toString(),
            a = new g(e, "sign-up-button", {
                size: "invisible",
                callback: c => {
                    this.onSignInSubmit()
                }
            }, o),
            s = i;
        return new Promise((c, u) => {
            h(e, s, a).then(t => {
                window.confirmationResult = t, c(window.confirmationResult)
            }).catch(t => {
                console.error(t), u(t)
            })
        })
    },
    verifyCode(i) {
        return new Promise((n, r) => {
            window.confirmationResult.confirm(i).then(e => {
                const o = e.user;
                console.log(o), n(o)
            }).catch(e => {
                console.error(e), r(e)
            })
        })
    }
};
export {
    w as f
};