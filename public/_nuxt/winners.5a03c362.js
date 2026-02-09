import {
    _ as v
} from "./PageHeader.3b5111e1.js";
import {
    _ as m
} from "./fancybox.f3e89cb7.js";
import {
    h as N,
    _ as x,
    u as j,
    r as p,
    c as a,
    a as e,
    b as d,
    w as _,
    t,
    F as i,
    l as c,
    o,
    y as M
} from "./entry.93d2037a.js";
import {
    s as h,
    a as b,
    _ as D
} from "./parentcomponent.fd1079ff.js";
import {
    r as T,
    A as S
} from "./swiper-element-bundle.1766dbd2.js";
import {
    M as L
} from "./message.848c08a7.js";
import "./auth.b81bcb47.js";
const u = N("winnersStore", {
        state: h.state,
        getters: h.getters,
        actions: Object.assign({}, h.actions, {
            async load(r) {
                b.formGet(this, "/winners", [u()])
            },
            async contact(r) {
                b.formPost(this, "/winners", r, [u()])
            }
        })
    }),
    W = "" + globalThis.__publicAssetsURL("img/header/header-bg/winner.jpg");
T();
const E = {
        extends: D,
        onLoadInitGetRequest: !0,
        beforeLoadClearPreviousResponse: !0,
        setup() {
            return j({
                title: "Meet Our Winners - Jumbo Ticket Network",
                meta: [{
                    name: "description",
                    content: "Celebrate the success of our winners at Jumbo Ticket Network. Read inspiring stories and see how our MLM lottery platform changes lives. Join the winning team!"
                }, {
                    name: "keywords",
                    content: "Buy Lottery Ticket, Safe Lottery Jackpot, Play Online Lottery, Bitcoin Lottery"
                }],
                link: [{
                    rel: "canonical",
                    href: "https://jumboticket.network/winners/"
                }, {
                    rel: "alternate",
                    hreflang: "en",
                    href: "https://jumboticket.network/winners/"
                }, {
                    rel: "alternate",
                    hreflang: "en-IN",
                    href: "https://jumboticket.network/winners/"
                }, {
                    rel: "alternate",
                    hreflang: "en-GB",
                    href: "https://jumboticket.network/winners/"
                }, {
                    rel: "alternate",
                    hreflang: "x-default",
                    href: "https://jumboticket.network/winners/"
                }],
                templateParams: {
                    schemaOrg: {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Winners",
                        url: "https://jumboticket.network/winners/",
                        description: "Celebrate the success of our winners at Jumbo Ticket Network. Read inspiring stories and see how our MLM lottery platform changes lives."
                    }
                }
            }), {
                store: u()
            }
        },
        data() {
            return {
                bgimg: W,
                modules: [S]
            }
        },
        components: {
            Message: L,
            Fancybox: m
        },
        computed: {
            liveyoutube() {
                return this.emptyArrayIfNotExist("winnersyoutubevideos", this.response.page)
            },
            megaWinners() {
                return this.emptyIfNotExist("megawinnners", this.response.page)
            },
            megaDrawDate() {
                return this.emptyIfNotExist("drawn_date", this.response.page.megadrawdate)
            },
            royalWinners() {
                return this.emptyIfNotExist("royalwinnners", this.response.page)
            },
            royalDrawDate() {
                return this.emptyIfNotExist("drawn_date", this.response.page.royaldrawdate)
            },
            jumboWinners() {
                return this.emptyIfNotExist("jumbowinnners", this.response.page)
            },
            jumboDrawDate() {
                return this.emptyIfNotExist("drawn_date", this.response.page.jumbodrawdate)
            },
            ticketSoldperMonth() {
                return this.emptyIfNotExist("ticketsoldpermonthinfo", this.response.page)
            }
        }
    },
    I = {
        class: "page-gap"
    },
    P = {
        class: "winners"
    },
    R = {
        class: "container"
    },
    Y = {
        class: "row align-items-center"
    },
    A = {
        class: "col-lg-6 mt-3 mb-3"
    },
    B = {
        class: "plans"
    },
    J = {
        class: "draw-card"
    },
    C = {
        class: "draw-card-box"
    },
    O = ["innerHTML"],
    V = {
        class: "watch-more-btn"
    },
    F = ["href"],
    G = e("div", {
        class: "col-lg-6 mt-3 mb-3"
    }, [e("div", {
        class: "winners-content"
    }, [e("h4", null, "OUR WINNER’S CLUB"), e("span", null, "Ordinary folks with extraordinary winning stories"), e("p", null, "We cherish all our winners, who with their grit and perseverance have shown that extraordinary stories can have humble beginnings. We strive to create more winners and provide everyone with ample opportunities to make it to the winner’s list.")])], -1),
    H = {
        class: "black-box"
    },
    U = {
        class: "container"
    },
    z = {
        class: "dark-box__head"
    },
    q = e("h3", null, "TICKET SALES", -1),
    K = {
        class: "dynamic-ad"
    },
    Q = {
        class: "row"
    },
    X = {
        class: "col-lg-4"
    },
    Z = {
        class: "dy-ed"
    },
    $ = e("p", {
        class: "fs-3"
    }, "Mega Tickets ", -1),
    ee = {
        class: "col-lg-4"
    },
    te = {
        class: "dy-ed"
    },
    se = e("p", {
        class: "fs-3"
    }, "Royal Tickets", -1),
    oe = {
        class: "col-lg-4"
    },
    ne = {
        class: "dy-ed"
    },
    ae = e("p", {
        class: "fs-3"
    }, "Jumbo Tickets ", -1),
    le = {
        class: "dark-black pty"
    },
    re = {
        class: "container"
    },
    ie = e("div", {
        class: "dark-box__head"
    }, [e("h3", null, "TRANSPARENCY. RELIABILITY. GRANDEUR"), e("h4", null, "We are committed to excellence")], -1),
    ce = {
        class: "winner-tab"
    },
    de = {
        class: "tabs"
    },
    _e = e("ul", {
        class: "nav nav-tabs",
        id: "myTab",
        role: "tablist"
    }, [e("li", {
        class: "nav-item",
        role: "presentation"
    }, [e("button", {
        class: "nav-link active",
        id: "mega-tab",
        "data-bs-toggle": "tab",
        "data-bs-target": "#mega",
        type: "button",
        role: "tab",
        "aria-controls": "mega",
        "aria-selected": "true"
    }, "Mega Jackpot")]), e("li", {
        class: "nav-item",
        role: "presentation"
    }, [e("button", {
        class: "nav-link",
        id: "royal-tab",
        "data-bs-toggle": "tab",
        "data-bs-target": "#royal",
        type: "button",
        role: "tab",
        "aria-controls": "royal",
        "aria-selected": "false"
    }, "Royal Jackpot")]), e("li", {
        class: "nav-item",
        role: "presentation"
    }, [e("button", {
        class: "nav-link",
        id: "jumbo-tab",
        "data-bs-toggle": "tab",
        "data-bs-target": "#jumbo",
        type: "button",
        role: "tab",
        "aria-controls": "jumbo",
        "aria-selected": "false"
    }, "Jumbo Jackpot")])], -1),
    he = {
        class: "tab-content",
        id: "myTabContent"
    },
    ue = {
        class: "tab-pane fade show active",
        id: "mega",
        role: "tabpanel",
        "aria-labelledby": "mega-tab"
    },
    pe = {
        class: "tab-body"
    },
    be = {
        class: "table-responsive"
    },
    me = {
        key: 0,
        class: "table table-striped"
    },
    ye = e("thead", {
        class: "thead-dark"
    }, [e("tr", null, [e("th", {
        scope: "col"
    }, "SL. No."), e("th", {
        scope: "col"
    }, "Place"), e("th", {
        scope: "col"
    }, "Name"), e("th", {
        scope: "col"
    }, "Draw Date"), e("th", {
        scope: "col"
    }, "Prize Amount"), e("th", {
        scope: "col"
    }, "Ticket No."), e("th", {
        scope: "col"
    }, "Nationality")])], -1),
    ge = {
        key: 1,
        class: "no-data"
    },
    we = e("p", null, "No data available", -1),
    fe = [we],
    ke = {
        class: "tab-pane fade",
        id: "royal",
        role: "tabpanel",
        "aria-labelledby": "royal-tab"
    },
    ve = {
        class: "tab-body"
    },
    Ne = {
        class: "table-responsive"
    },
    xe = {
        key: 0,
        class: "table table-striped"
    },
    je = e("thead", {
        class: "thead-dark"
    }, [e("tr", null, [e("th", {
        scope: "col"
    }, "SL. No."), e("th", {
        scope: "col"
    }, "Place"), e("th", {
        scope: "col"
    }, "Name"), e("th", {
        scope: "col"
    }, "Draw Date"), e("th", {
        scope: "col"
    }, "Prize Amount"), e("th", {
        scope: "col"
    }, "Ticket No."), e("th", {
        scope: "col"
    }, "Nationality")])], -1),
    Me = {
        key: 1,
        class: "no-data"
    },
    De = e("p", null, "No data available", -1),
    Te = [De],
    Se = {
        class: "tab-pane fade",
        id: "jumbo",
        role: "tabpanel",
        "aria-labelledby": "jumbo-tab"
    },
    Le = {
        class: "tab-body"
    },
    We = {
        class: "table-responsive"
    },
    Ee = {
        key: 0,
        class: "table table-striped"
    },
    Ie = e("thead", {
        class: "thead-dark"
    }, [e("tr", null, [e("th", {
        scope: "col"
    }, "SL. No."), e("th", {
        scope: "col"
    }, "Place"), e("th", {
        scope: "col"
    }, "Name"), e("th", {
        scope: "col"
    }, "Draw Date"), e("th", {
        scope: "col"
    }, "Prize Amount"), e("th", {
        scope: "col"
    }, "Ticket No."), e("th", {
        scope: "col"
    }, "Nationality")])], -1),
    Pe = {
        key: 1,
        class: "no-data"
    },
    Re = e("p", null, "No data available", -1),
    Ye = [Re];

function Ae(r, Be, Je, Ce, y, n) {
    const g = v,
        w = m,
        f = p("swiper-slide"),
        k = p("swiper-container");
    return o(), a(i, null, [e("div", I, [d(g, {
        "bg-image-prop": y.bgimg,
        title: "Winners",
        description: "Explore the stories of triumph and fortune with our celebrated winners at Jumbo Ticket.",
        page: "Winners"
    }, null, 8, ["bg-image-prop"])]), e("div", P, [e("div", R, [e("div", Y, [e("div", A, [e("div", B, [d(k, {
        autoplay: {
            delay: 2500,
            disableOnInteraction: !1
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        },
        navigation: !0,
        injectStyles: [`.swiper-button-next,
                  .swiper-button-prev {
                      background-color: #000;
                      padding: 9px;
                      border-radius: 50%;
                      border: 1px solid #fff;
                      color: #fff;
                      height: 20px;
                      width: 20px;
                      opacity: 0.5;
                  }
                  .swiper-button-next:hover,
                  .swiper-button-prev:hover{
                      opacity: 0.8
                  }
                  .swiper-pagination-bullet{
                      width: 20px;
                      height: 20px;
                      background-color: #fff;
                  }`]
    }, {
        default: _(() => [(o(!0), a(i, null, c(n.liveyoutube, (s, l) => (o(), M(f, {
            key: l
        }, {
            default: _(() => [e("div", J, [e("div", C, [d(w, {
                options: {
                    Carousel: {
                        infinite: !1
                    }
                }
            }, {
                default: _(() => [e("div", {
                    innerHTML: s.link
                }, null, 8, O)]),
                _: 2
            }, 1024)])])]),
            _: 2
        }, 1024))), 128))]),
        _: 1
    }, 8, ["injectStyles"]), e("div", V, [e("a", {
        href: r.response.page.watchmorelink,
        target: "_blank"
    }, "Watch More", 8, F)])])]), G])])]), e("div", H, [e("div", U, [e("div", z, [q, e("h4", null, "Total Tickets Sold in " + t(new Date(n.ticketSoldperMonth.date).toLocaleString("default", {
        month: "long"
    }) || ""), 1)]), e("div", K, [e("div", Q, [e("div", X, [e("div", Z, [$, e("p", null, t(n.ticketSoldperMonth.no_of_mega_tickets || 0), 1)])]), e("div", ee, [e("div", te, [se, e("p", null, t(n.ticketSoldperMonth.no_of_royal_tickets || 0), 1)])]), e("div", oe, [e("div", ne, [ae, e("p", null, t(n.ticketSoldperMonth.no_of_jumbo_tickets || 0), 1)])])])])])]), e("div", le, [e("div", re, [ie, e("div", ce, [e("div", de, [_e, e("div", he, [e("div", ue, [e("div", pe, [e("div", be, [n.megaWinners !== "" ? (o(), a("table", me, [ye, e("tbody", null, [(o(!0), a(i, null, c(n.megaWinners, (s, l) => (o(), a("tr", {
        key: l
    }, [e("td", null, [e("strong", null, t(l + 1), 1)]), e("td", null, t(s.winner_type_name), 1), e("td", null, [e("strong", null, t(s.fullname), 1)]), e("td", null, t(r.$dayjs(n.megaDrawDate).format("D MMM YYYY")), 1), e("td", null, "$" + t(s.amount), 1), e("td", null, t(s.ticketno), 1), e("td", null, t(s.country), 1)]))), 128))])])) : (o(), a("div", ge, fe))])])]), e("div", ke, [e("div", ve, [e("div", Ne, [n.royalWinners !== "" ? (o(), a("table", xe, [je, e("tbody", null, [(o(!0), a(i, null, c(n.royalWinners, (s, l) => (o(), a("tr", {
        key: l
    }, [e("td", null, [e("strong", null, t(l + 1), 1)]), e("td", null, t(s.winner_type_name), 1), e("td", null, [e("strong", null, t(s.fullname), 1)]), e("td", null, t(r.$dayjs(n.royalDrawDate).format("D MMM YYYY")), 1), e("td", null, "$" + t(s.amount), 1), e("td", null, t(s.ticketno), 1), e("td", null, t(s.country), 1)]))), 128))])])) : (o(), a("div", Me, Te))])])]), e("div", Se, [e("div", Le, [e("div", We, [n.jumboWinners !== "" ? (o(), a("table", Ee, [Ie, e("tbody", null, [(o(!0), a(i, null, c(n.jumboWinners, (s, l) => (o(), a("tr", {
        key: l
    }, [e("td", null, [e("strong", null, t(l + 1), 1)]), e("td", null, t(s.winner_type_name), 1), e("td", null, [e("strong", null, t(s.fullname), 1)]), e("td", null, t(r.$dayjs(n.jumboDrawDate).format("D MMM YYYY")), 1), e("td", null, "$" + t(s.amount), 1), e("td", null, t(s.ticketno), 1), e("td", null, t(s.country), 1)]))), 128))])])) : (o(), a("div", Pe, Ye))])])])])])])])])], 64)
}
const qe = x(E, [
    ["render", Ae]
]);
export {
    qe as
    default
};