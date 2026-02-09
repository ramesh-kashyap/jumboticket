import {
    f as t
} from "./entry.baa6724e.js";
const i = {
        apiBaseUrl: "https://nuxtapi.jumboticket.network/api",
        loggedInRedirectTodashboard: "/",
        authFailedRedirectPath: "/user/sign-in",
        websiteDownPaths: {
            2: "/under-payout/",
            3: "/under-maintainance/"
        },
        authShare: {
            guest: "https://jumboticket.network"
        }
    },
    s = t("auth", {
        state: () => ({
            apikey: "",
            csrftoken: "",
            jwttokens: null,
            webtoken: "",
            authenticated: !1,
            websiteDown: "1",
            domainGuest: "",
            domainMember: ""
        }),
        actions: {
            storeApikey(e) {
                this.apikey = e, this.authenticated = this.apikey && this.apikey !== ""
            },
            storeCSRFToken(e) {
                this.csrftoken = e
            },
            storeJWTTokens(e) {
                this.jwttokens = e, this.authenticated = this.jwttokens !== null && this.jwttokens.accessToken && this.jwttokens.accessToken !== ""
            },
            storeWebToken(e) {
                this.webtoken = e
            },
            storeClear() {
                this.apikey = "", this.csrftoken = "", this.jwttokens = "", this.webtoken = "", this.authenticated = !1
            },
            storeAuth(e) {
                this.authenticated = e
            },
            storeWebsiteDown(e) {
                this.websiteDown = e
            },
            storeDomainGuest(e) {
                this.domainGuest = e
            },
            storeDomainMember(e) {
                this.domainMember = e
            },
            storeState(e) {
                this.apikey = e.apikey, this.csrftoken = e.csrftoken, this.jwttokens = e.jwttokens, this.webtoken = e.webtoken, this.authenticated = e.authenticated, this.websiteDown = e.websiteDown, this.domainGuest = e.domainGuest, this.domainMember = e.domainMember
            }
        },
        getters: {
            getApikey(e) {
                return e.apikey
            },
            getCSRFToken(e) {
                return e.csrftoken
            },
            getJWTTokens(e) {
                return e.jwttokens
            },
            getWebToken(e) {
                return e.webtoken
            },
            isAuthenticated: e => e.authenticated,
            getWebsiteDown: e => e.websiteDown,
            getDomainGuest: e => e.domainGuest,
            getDomainMember: e => e.domainMember,
            getState: e => ({
                apikey: e.apikey,
                csrftoken: JSON.stringify(e.csrftoken),
                jwttokens: JSON.stringify(e.jwttokens),
                webtoken: JSON.stringify(e.webtoken),
                authenticated: e.authenticated,
                websiteDown: e.websiteDown,
                domainGuest: e.domainGuest,
                domainMember: e.domainMember
            })
        },
        persist: !0
    });
export {
    s as a, i as b
};