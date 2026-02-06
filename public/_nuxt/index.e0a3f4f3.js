import {
    a as g
} from "./auth.b81bcb47.js";
import {
    _ as f,
    o as v,
    c as y,
    a as t,
    s as r,
    d as i,
    g as h,
    h as P,
    u as S,
    r as m,
    b as e,
    w as s,
    t as u
} from "./entry.93d2037a.js";
import {
    _ as w
} from "./fancybox.f3e89cb7.js";
import {
    s as p,
    a as b,
    _ as j
} from "./parentcomponent.fd1079ff.js";
import {
    r as A
} from "./swiper-element-bundle.1766dbd2.js";
import {
    _ as J,
    a as R,
    b as L
} from "./3.bed15f53.js";
import {
    _ as U,
    a as M,
    b as C,
    c as E,
    d as N,
    e as I,
    f as B,
    g as O,
    h as V,
    i as D
} from "./4.6d43009e.js";
const F = {
        setup() {
            return {
                authStore: g()
            }
        },
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(a) {
                this.sliding = !0
            },
            onSlideEnd(a) {
                this.sliding = !1
            }
        }
    },
    H = {
        id: "carouselExampleIndicators",
        class: "carousel slide",
        "data-bs-ride": "carousel"
    },
    G = h('<div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button></div>', 1),
    W = {
        class: "carousel-inner"
    },
    z = {
        class: "carousel-caption"
    },
    K = t("h3", null, "A CHANCE TO CHANGE YOUR FORTUNES", -1),
    Y = t("p", null, "YOU CAN WIN TOO", -1),
    q = t("div", {
        class: "car-caption"
    }, [t("span", null, "Upto 75 winners selected every month, are you ready to be a winner too?")], -1),
    X = {
        class: "hero-action"
    },
    Q = t("li", null, [t("a", {
        href: "/jackpot",
        class: ""
    }, [i("View Jackpots "), t("i", {
        class: "fas fa-chevron-right"
    })])], -1),
    Z = ["href"],
    tt = t("i", {
        class: "fas fa-chevron-right"
    }, null, -1),
    et = {
        class: "carousel-caption"
    },
    st = t("h3", null, "A CHANCE TO CHANGE YOUR FORTUNES", -1),
    ot = t("p", null, "JUMBO TICKET TRUST", -1),
    it = t("div", {
        class: "car-caption"
    }, [t("span", null, "Make a change in the world, Jumbo Ticket Trust, Big dreams are for everyone.")], -1),
    at = {
        class: "hero-action"
    },
    lt = t("li", null, [t("a", {
        href: "/jackpot",
        class: ""
    }, [i("View Jackpots "), t("i", {
        class: "fas fa-chevron-right"
    })])], -1),
    nt = ["href"],
    ct = t("i", {
        class: "fas fa-chevron-right"
    }, null, -1),
    rt = {
        class: "carousel-caption"
    },
    dt = t("h3", null, "A CHANCE TO CHANGE YOUR FORTUNES", -1),
    ut = t("p", null, "REFER YOUR FRIEND", -1),
    pt = t("div", {
        class: "car-caption"
    }, [t("span", null, "The more the merrier, Refer your friend, Share the joy of Jumbo Ticket")], -1),
    _t = {
        class: "hero-action"
    },
    ht = t("li", null, [t("a", {
        href: "/jackpot",
        class: ""
    }, [i("View Jackpots "), t("i", {
        class: "fas fa-chevron-right"
    })])], -1),
    mt = ["href"],
    bt = t("i", {
        class: "fas fa-chevron-right"
    }, null, -1),
    gt = {
        class: "carousel-caption"
    },
    ft = t("h3", null, "A CHANCE TO CHANGE YOUR FORTUNES", -1),
    vt = t("p", null, "WIN UPTO $1,000,000", -1),
    yt = t("div", {
        class: "car-caption"
    }, [t("span", null, "Upto 75 winners selected every month, are you ready to be a winner too?")], -1),
    wt = {
        class: "hero-action"
    },
    kt = t("li", null, [t("a", {
        href: "/jackpot",
        class: ""
    }, [i("View Jackpots "), t("i", {
        class: "fas fa-chevron-right"
    })])], -1),
    xt = ["href"],
    Tt = t("i", {
        class: "fas fa-chevron-right"
    }, null, -1),
    $t = h('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>', 2);

function Pt(a, d, k, x, T, c) {
    return v(), y("div", null, [t("div", H, [G, t("div", W, [t("div", {
        class: "carousel-item active",
        style: r({
            backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/hero/8.jpg')"
        })
    }, [t("div", z, [K, Y, q, t("div", X, [t("ul", null, [Q, t("li", null, [t("a", {
        href: this.authStore.getDomainMember ? this.authStore.getDomainMember + "/user/sign-up" : "#"
    }, [i("Join Now "), tt], 8, Z)])])])])], 4), t("div", {
        class: "carousel-item",
        style: r({
            backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/hero/1.jpg')"
        })
    }, [t("div", et, [st, ot, it, t("div", at, [t("ul", null, [lt, t("li", null, [t("a", {
        href: this.authStore.getDomainMember ? this.authStore.getDomainMember + "/user/sign-up" : "#"
    }, [i("Join Now "), ct], 8, nt)])])])])], 4), t("div", {
        class: "carousel-item",
        style: r({
            backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/hero/2.jpg')"
        })
    }, [t("div", rt, [dt, ut, pt, t("div", _t, [t("ul", null, [ht, t("li", null, [t("a", {
        href: this.authStore.getDomainMember ? this.authStore.getDomainMember + "/user/sign-up" : "#"
    }, [i("Join Now "), bt], 8, mt)])])])])], 4), t("div", {
        class: "carousel-item",
        style: r({
            backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/hero/7.jpg')"
        })
    }, [t("div", gt, [ft, vt, yt, t("div", wt, [t("ul", null, [kt, t("li", null, [t("a", {
        href: this.authStore.getDomainMember ? this.authStore.getDomainMember + "/user/sign-up" : "#"
    }, [i("Join Now "), Tt], 8, xt)])])])])], 4)]), $t])])
}
const St = f(F, [
        ["render", Pt]
    ]),
    _ = P("indexStore", {
        state: p.state,
        getters: p.getters,
        actions: Object.assign({}, p.actions, {
            async load(a) {
                return b.formGet(this, "/index", [_()])
            },
            async contact(a) {
                b.formPost(this, "/index", a, [_()])
            }
        })
    }),
    jt = "" + globalThis.__publicAssetsURL("img/refer/step-1.png"),
    At = "" + globalThis.__publicAssetsURL("img/refer/step-3.jpg"),
    Jt = "" + globalThis.__publicAssetsURL("img/crypto/1.png"),
    Rt = "" + globalThis.__publicAssetsURL("img/crypto/2.png"),
    Lt = "" + globalThis.__publicAssetsURL("img/crypto/3.png"),
    Ut = "" + globalThis.__publicAssetsURL("img/crypto/4.png"),
    Mt = "" + globalThis.__publicAssetsURL("img/crypto/5.png"),
    Ct = "" + globalThis.__publicAssetsURL("img/crypto/6.png"),
    Et = "" + globalThis.__publicAssetsURL("img/crypto/7.png"),
    Nt = "" + globalThis.__publicAssetsURL("img/crypto/8.png"),
    It = "" + globalThis.__publicAssetsURL("img/crypto/9.png"),
    Bt = "" + globalThis.__publicAssetsURL("img/crypto/10.png"),
    Ot = "" + globalThis.__publicAssetsURL("img/featured/pr-1.png"),
    Vt = "" + globalThis.__publicAssetsURL("img/featured/pr-2.png"),
    Dt = "" + globalThis.__publicAssetsURL("img/featured/pr-3.png"),
    Ft = "" + globalThis.__publicAssetsURL("img/featured/pr-4.png"),
    Ht = "" + globalThis.__publicAssetsURL("img/featured/pr-5.png"),
    Gt = "" + globalThis.__publicAssetsURL("img/featured/pr-6.png"),
    Wt = "" + globalThis.__publicAssetsURL("img/security/mcafee-secure.png"),
    zt = "" + globalThis.__publicAssetsURL("img/security/positivessl.png"),
    Kt = "" + globalThis.__publicAssetsURL("img/security/trust-pilot.png"),
    Yt = "" + globalThis.__publicAssetsURL("img/security/site-jabber.png");
A();
const qt = {
        extends: j,
        onLoadInitGetRequest: !0,
        beforeLoadClearPreviousResponse: !1,
        setup() {
            S({
                title: "Jumbo Ticket Network - Top MLM Lottery Platform",
                meta: [{
                    name: "description",
                    content: "Join the leading MLM lottery platform, Jumbo Ticket Network. Earn big through network marketing & win life-changing jackpots up to $1M. Sign up now!"
                }, {
                    name: "keywords",
                    content: "Buy Lottery Ticket, Safe Lottery Jackpot, Play Online Lottery, Bitcoin Lottery, Lottery results "
                }],
                link: [{
                    rel: "canonical",
                    href: "https://jumboticket.network/"
                }, {
                    rel: "alternate",
                    hreflang: "en",
                    href: "https://jumboticket.network/"
                }, {
                    rel: "alternate",
                    hreflang: "en-IN",
                    href: "https://jumboticket.network/"
                }, {
                    rel: "alternate",
                    hreflang: "en-GB",
                    href: "https://jumboticket.network/"
                }, {
                    rel: "alternate",
                    hreflang: "x-default",
                    href: "https://jumboticket.network/"
                }],
                script: [{
                    src: "https://images.dmca.com/Badges/DMCABadgeHelper.min.js",
                    body: !0,
                    async: !0
                }],
                templateParams: {
                    schemaOrg: {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Home Page",
                        url: "https://jumboticket.network/",
                        description: "Join the leading MLM lottery platform, Jumbo Ticket Network. Unlock big earnings through network marketing and win life-changing jackpots."
                    }
                }
            });
            const a = g(),
                d = _();
            return {
                authStore: a,
                store: d
            }
        },
        computed: {
            megaTicketcost() {
                return this.emptyIfNotExist("megaticketcost", this.response.page)
            },
            royalTicketcost() {
                return this.emptyIfNotExist("royalticketcost", this.response.page)
            },
            jumboTicketcost() {
                return this.emptyIfNotExist("jumboticketcost", this.response.page)
            }
        },
        data() {
            return {
                serverTime: null
            }
        },
        components: {
            Fancybox: w
        }
    },
    Xt = {
        class: "home"
    },
    Qt = t("h1", {
        style: {
            display: "none"
        }
    }, "Welcome to JumboTicket", -1),
    Zt = {
        class: "black-box"
    },
    te = {
        class: "container"
    },
    ee = t("div", {
        class: "black-box__head"
    }, [t("h3", null, "for your jumbo sized dreams"), t("h4", null, "Our Premium Jackpots")], -1),
    se = {
        class: "plans"
    },
    oe = {
        class: "carousel__item"
    },
    ie = {
        class: "plan-box__wrap"
    },
    ae = {
        class: "plan-box"
    },
    le = t("div", {
        class: "plan-box__title"
    }, [t("button", null, "Mega Jackpot")], -1),
    ne = t("div", {
        class: "plan-box__price"
    }, [t("span", null, "$100,000")], -1),
    ce = t("div", {
        class: "plan-box__list"
    }, [t("ul", null, [t("li", null, [t("span", null, "$100,000"), i(" Jackpot Prize")]), t("li", null, [t("span", null, "$5000"), i(" 2nd Place")]), t("li", null, [t("span", null, "$1000"), i(" 3rd, 4th, 5th Places")]), t("li", null, [t("span", null, "$100"), i(" 6th to 20th Places")]), t("li", null, [t("span", null, "$50"), i(" 21st to 111th Places")])])], -1),
    re = {
        class: "plan-box__action"
    },
    de = ["href"],
    ue = t("i", {
        class: "fas fa-chevron-right"
    }, null, -1),
    pe = {
        class: "carousel__item"
    },
    _e = {
        class: "plan-box__wrap"
    },
    he = {
        class: "plan-box"
    },
    me = t("div", {
        class: "plan-box__title"
    }, [t("button", null, "Royal Jackpot")], -1),
    be = t("div", {
        class: "plan-box__price"
    }, [t("span", null, "$500,000")], -1),
    ge = t("div", {
        class: "plan-box__list"
    }, [t("ul", null, [t("li", null, [t("span", null, "$500,000"), i(" Jackpot Prize")]), t("li", null, [t("span", null, "$10000"), i(" 2nd Place")]), t("li", null, [t("span", null, "$2500"), i(" 3rd, 4th, 5th Places")]), t("li", null, [t("span", null, "$300"), i(" 6th to 25th Places")]), t("li", null, [t("span", null, "$100"), i(" 26th to 111th Places")])])], -1),
    fe = {
        class: "plan-box__action"
    },
    ve = ["href"],
    ye = t("i", {
        class: "fas fa-chevron-right"
    }, null, -1),
    we = {
        class: "carousel__item"
    },
    ke = {
        class: "plan-box__wrap"
    },
    xe = {
        class: "plan-box plan-box-last"
    },
    Te = t("div", {
        class: "plan-box__title"
    }, [t("button", null, "Jumbo Jackpot")], -1),
    $e = t("div", {
        class: "plan-box__price"
    }, [t("span", null, "$1 Million")], -1),
    Pe = t("div", {
        class: "plan-box__list"
    }, [t("ul", null, [t("li", null, [t("span", null, "$1 Million"), i(" Jackpot Prize")]), t("li", null, [t("span", null, "$20000"), i(" 2nd Place")]), t("li", null, [t("span", null, "$5000"), i(" 3rd, 4th, 5th Places")]), t("li", null, [t("span", null, "$500"), i(" 6th to 30th Places")]), t("li", null, [t("span", null, "$200"), i(" 31st to 111th Places")])])], -1),
    Se = {
        class: "plan-box__action"
    },
    je = ["href"],
    Ae = t("i", {
        class: "fas fa-chevron-right"
    }, null, -1),
    Je = {
        class: "steps pt-0"
    },
    Re = {
        class: "container"
    },
    Le = t("div", {
        class: "steps__head"
    }, [t("h4", null, "Start winning in 3 simple steps"), t("p", {
        class: "hwt"
    }, "How to Start")], -1),
    Ue = t("div", {
        class: "step-box-wrap"
    }, [t("div", {
        class: "step-box"
    }, [t("img", {
        src: J,
        alt: "Sign up for Jumbo Ticket and start playing today!"
    })])], -1),
    Me = t("div", {
        class: "step-box-wrap"
    }, [t("div", {
        class: "step-box"
    }, [t("img", {
        src: R,
        alt: "Buy your Jumbo Ticket lottery ticket now!"
    })])], -1),
    Ce = t("div", {
        class: "step-box-wrap"
    }, [t("div", {
        class: "step-box"
    }, [t("img", {
        src: L,
        alt: "Win big with Jumbo Ticket! Play the lottery online today!"
    })])], -1),
    Ee = h('<div class="dark-box"><div class="container"><div class="dark-box__head"><h3>referral program</h3><h4>Jumbo Ticket Refer &amp; Earn Program</h4></div><div class="row justify-content-center mt-3"><div class="col-lg-6"><div class="row"><div class="col-lg-6 mt-3 mb-3"><div class="ref-card"><img src="' + jt + '" alt="Jumbo Ticket referral program, earn 10% commission, online lottery."></div></div><div class="col-lg-6 mt-3 mb-3"><div class="ref-card"><img src="' + At + '" alt="Unlimited referrals."></div></div></div></div></div></div></div>', 1),
    Ne = {
        class: "vip-validations"
    },
    Ie = {
        class: "container"
    },
    Be = t("div", {
        class: "vip__head"
    }, [t("h4", null, "VIP Validations"), t("div", {
        class: "row justify-content-center"
    }, [t("div", {
        class: "col-lg-9"
    }, [t("p", null, "From Champions League winners to action heroes and on-screen stars. Jumbo Ticket is proud to receive praise and plaudits from some of the biggest names in sport and entertainment. Naturally, it's extended to our members as well. Watch them take a moment to send us a message below:")])])], -1),
    Oe = {
        class: "video-card"
    },
    Ve = {
        class: "video-card-box"
    },
    De = t("a", {
        "data-fancybox": "",
        href: "https://www.youtube.com/watch?v=F81hEztI6Sk"
    }, [t("img", {
        src: U,
        alt: "Michael Essien, Ghanaian Footballer, endorses Jumbo Ticket online lottery platform."
    })], -1),
    Fe = t("p", null, "Michael Essien", -1),
    He = t("span", null, "Ghanaian Professional Footballer", -1),
    Ge = {
        class: "video-card"
    },
    We = {
        class: "video-card-box"
    },
    ze = t("a", {
        "data-fancybox": "",
        href: "https://www.youtube.com/watch?v=bMti5wnav1Q"
    }, [t("img", {
        src: M,
        alt: "Laura Samuels, American Actress, supports Jumbo Ticket online lottery for exciting opportunities."
    })], -1),
    Ke = t("p", null, "Laura Samuels", -1),
    Ye = t("span", null, "American Actress", -1),
    qe = {
        class: "video-card"
    },
    Xe = {
        class: "video-card-box"
    },
    Qe = t("a", {
        "data-fancybox": "",
        href: "https://www.youtube.com/watch?v=_ONdXai3icE"
    }, [t("img", {
        src: C,
        alt: "Kurt Angle, American Pro Wrestler, champions Jumbo Ticket online lottery for big wins.\\"
    })], -1),
    Ze = t("p", null, "Kurt Angle", -1),
    ts = t("span", null, "American Professional Wrestler", -1),
    es = {
        class: "video-card"
    },
    ss = {
        class: "video-card-box"
    },
    os = t("a", {
        "data-fancybox": "",
        href: "https://www.youtube.com/watch?v=UDSpjoviznU"
    }, [t("img", {
        src: E,
        alt: "Chris Gayle, Caribbean Cricket Star, partners with Jumbo Ticket online lottery for thrilling experiences."
    })], -1),
    is = t("p", null, "Chris Gayle", -1),
    as = t("span", null, "Caribbean Professional Cricketer", -1),
    ls = {
        class: "video-card"
    },
    ns = {
        class: "video-card-box"
    },
    cs = t("a", {
        "data-fancybox": "",
        href: "https://www.youtube.com/watch?v=CPKIBXVhEbk"
    }, [t("img", {
        src: N,
        alt: "Kelle Mortensen, American Reality TV Personality, endorses Jumbo Ticket online lottery for a chance at life-changing prizes."
    })], -1),
    rs = t("p", null, "Kelle Mortensen", -1),
    ds = t("span", null, "American Reality TV Personality", -1),
    us = {
        class: "video-card"
    },
    ps = {
        class: "video-card-box"
    },
    _s = t("a", {
        "data-fancybox": "",
        href: "https://www.youtube.com/watch?v=gII9IyiKMlE"
    }, [t("img", {
        src: I,
        alt: "Randy Couture, American Actor, and Former MMA Champion, promotes the Jumbo Ticket online lottery for extraordinary opportunities"
    })], -1),
    hs = t("p", null, "Randy Couture", -1),
    ms = t("span", null, "American Actor, Former MMA", -1),
    bs = {
        class: "dark-box"
    },
    gs = {
        class: "container"
    },
    fs = t("div", {
        class: "black-box__head"
    }, [t("h3", null, "BEST ONLINE LOTTERY"), t("h4", null, "What makes us unique?")], -1),
    vs = {
        class: "mt-5"
    },
    ys = t("div", {
        class: "unicard__wrap"
    }, [t("div", {
        class: "unicard"
    }, [t("img", {
        src: B,
        alt: "Win big in crypto with Jumbo Ticket! Play the lottery online today."
    })])], -1),
    ws = t("div", {
        class: "unicard__wrap"
    }, [t("div", {
        class: "unicard"
    }, [t("img", {
        src: O,
        alt: "Win big and get your money instantly with Jumbo Ticket!"
    })])], -1),
    ks = t("div", {
        class: "unicard__wrap"
    }, [t("div", {
        class: "unicard"
    }, [t("img", {
        src: V,
        alt: "Jumbo Ticket anonymous lottery, play incognito, win big privately."
    })])], -1),
    xs = t("div", {
        class: "unicard__wrap"
    }, [t("div", {
        class: "unicard"
    }, [t("img", {
        src: D,
        alt: "Play the lottery safely and securely with Jumbo Ticket!"
    })])], -1),
    Ts = {
        class: "crypots"
    },
    $s = {
        class: "container"
    },
    Ps = t("div", {
        class: "crypots__header"
    }, [t("h4", null, "Payment Partners")], -1),
    Ss = t("div", {
        class: "crypto"
    }, [t("img", {
        src: Jt,
        alt: "Play the lottery with crypto! Jumbo Ticket accepts Bitcoin"
    })], -1),
    js = t("div", {
        class: "crypto"
    }, [t("img", {
        src: Rt,
        alt: "Play the lottery with crypto! Jumbo Ticket accepts Ethereum"
    })], -1),
    As = t("div", {
        class: "crypto"
    }, [t("img", {
        src: Lt,
        alt: "Play the lottery with crypto! Jumbo Ticket accepts"
    })], -1),
    Js = t("div", {
        class: "crypto"
    }, [t("img", {
        src: Ut,
        alt: "Play the lottery with crypto! Jumbo Ticket accepts "
    })], -1),
    Rs = t("div", {
        class: "crypto"
    }, [t("img", {
        src: Mt,
        alt: "Play the lottery with crypto! Jumbo Ticket accepts "
    })], -1),
    Ls = t("div", {
        class: "crypto"
    }, [t("img", {
        src: Ct,
        alt: "Play the lottery with crypto! Jumbo Ticket accepts Litecoin"
    })], -1),
    Us = t("div", {
        class: "crypto"
    }, [t("img", {
        src: Et,
        alt: "Play the lottery with crypto! Jumbo Ticket accepts Tron"
    })], -1),
    Ms = t("div", {
        class: "crypto"
    }, [t("img", {
        src: Nt,
        alt: "Play the lottery. Jumbo Ticket accepts UPI"
    })], -1),
    Cs = t("div", {
        class: "crypto"
    }, [t("img", {
        src: It,
        alt: "Play the lottery. Jumbo Ticket accepts Visa cards"
    })], -1),
    Es = t("div", {
        class: "crypto"
    }, [t("img", {
        src: Bt,
        alt: "Play the lottery. Jumbo Ticket accepts Mastercard"
    })], -1),
    Ns = t("div", {
        class: "security-section"
    }, [t("div", {
        class: "container"
    }, [t("div", {
        class: "row"
    }, [t("div", {
        class: "col-lg-6"
    }, [t("div", {
        class: "highl-block"
    }, [t("h4", null, "Spotlighted On"), t("div", {
        class: "row"
    }, [t("div", {
        class: "col-lg-4"
    }, [t("div", {
        class: "spotted-on"
    }, [t("a", {
        href: "https://markets.financialcontent.com/winslow/article/globeprwire-2024-1-23-jumbo-tickets-january-2024-live-draw",
        target: "_blank",
        rel: "noopener noreferrer"
    }, [t("img", {
        src: Ot
    })])])]), t("div", {
        class: "col-lg-4"
    }, [t("div", {
        class: "spotted-on"
    }, [t("a", {
        href: "https://www.digitaljournal.com/pr/news/globe-pr-wire/jumbo-ticket-s-january-2024-live-1964637952.html",
        target: "_blank"
    }, [t("img", {
        src: Vt,
        alt: ""
    })])])]), t("div", {
        class: "col-lg-4"
    }, [t("div", {
        class: "spotted-on"
    }, [t("a", {
        href: "https://markets.financialcontent.com/presstelegram/article/globeprwire-2024-1-23-jumbo-tickets-january-2024-live-draw",
        target: "_blank"
    }, [t("img", {
        src: Dt,
        alt: ""
    })])])]), t("div", {
        class: "col-lg-4"
    }, [t("div", {
        class: "spotted-on"
    }, [t("a", {
        href: "https://markets.financialcontent.com/fatpitch.valueinvestingnews/article/globeprwire-2024-1-23-jumbo-tickets-january-2024-live-draw",
        target: "_blank",
        rel: "noopener noreferrer"
    }, [t("img", {
        src: Ft
    })])])]), t("div", {
        class: "col-lg-4"
    }, [t("div", {
        class: "spotted-on"
    }, [t("a", {
        href: "https://markets.financialcontent.com/ibtimes/article/globeprwire-2024-1-23-jumbo-tickets-january-2024-live-draw",
        target: "_blank"
    }, [t("img", {
        src: Ht,
        alt: ""
    })])])]), t("div", {
        class: "col-lg-4"
    }, [t("div", {
        class: "spotted-on"
    }, [t("a", {
        href: "https://www.issuewire.com/winning-the-jumbo-ticket-lottery-stories-of-jackpot-winners-1714833308596459",
        target: "_blank"
    }, [t("img", {
        src: Gt,
        alt: ""
    })])])])])])]), t("div", {
        class: "col-lg-6"
    }, [t("div", {
        class: "highl-block"
    }, [t("h4", null, "Security"), t("div", {
        class: "row"
    }, [t("div", {
        class: "col-lg-4"
    }, [t("div", {
        class: "security"
    }, [t("div", {
        class: "secure-seal"
    }, [t("div", null, [t("a", {
        href: "//www.dmca.com/Protection/Status.aspx?ID=ca10c279-1f7b-413d-9a94-d124a8f0607c",
        title: "DMCA.com Protection Status",
        class: "dmca-badge"
    }, [t("img", {
        src: "https://images.dmca.com/Badges/DMCA_logo-std-btn120w.png?ID=ca10c279-1f7b-413d-9a94-d124a8f0607c",
        alt: "DMCA.com Protection Status"
    })])])])])]), t("div", {
        class: "col-lg-4"
    }, [t("div", {
        class: "security"
    }, [t("div", {
        class: "secure-seal"
    }, [t("div", null, [t("img", {
        src: Wt,
        alt: ""
    })])])])]), t("div", {
        class: "col-lg-4"
    }, [t("div", {
        class: "security"
    }, [t("div", {
        class: "secure-seal"
    }, [t("div", null, [t("a", {
        href: "#",
        onclick: "window.open('https://www.sitelock.com/verify.php?site=jumboticket.com','SiteLock','width=600,height=600,left=160,top=170');"
    }, [t("img", {
        class: "img-fluid",
        alt: "SiteLock",
        title: "SiteLock",
        src: "https://shield.sitelock.com/shield/jumboticket.com"
    })])])])])]), t("div", {
        class: "col-lg-4"
    }, [t("div", {
        class: "security"
    }, [t("div", {
        class: "secure-seal"
    }, [t("div", null, [t("img", {
        src: zt,
        alt: ""
    })])])])]), t("div", {
        class: "col-lg-4"
    }, [t("div", {
        class: "security"
    }, [t("div", {
        class: "secure-seal"
    }, [t("a", {
        href: "https://www.trustpilot.com/review/jumboticket.com",
        target: "_blank",
        rel: "noopener noreferrer"
    }, [t("div", null, [t("img", {
        src: Kt,
        alt: ""
    })])])])])]), t("div", {
        class: "col-lg-4"
    }, [t("div", {
        class: "security"
    }, [t("div", {
        class: "secure-seal"
    }, [t("a", {
        href: "https://www.sitejabber.com/reviews/jumboticket.com",
        target: "_blank",
        rel: "noopener noreferrer"
    }, [t("div", null, [t("img", {
        src: Yt,
        alt: ""
    })])])])])])])])])])])], -1);

function Is(a, d, k, x, T, c) {
    const $ = St,
        o = m("swiper-slide"),
        n = m("swiper-container"),
        l = w;
    return v(), y("div", Xt, [e($), Qt, t("div", Zt, [t("div", te, [ee, t("div", se, [e(n, {
        loop: !0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: !1
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 0
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
        default: s(() => [e(o, null, {
            default: s(() => [t("div", oe, [t("div", ie, [t("div", ae, [le, ne, ce, t("div", re, [t("a", {
                href: this.authStore.getDomainMember ? this.authStore.getDomainMember + "/user/sign-up" : "#"
            }, [i("Buy Now $" + u(parseInt(c.megaTicketcost.price)) + " ", 1), ue], 8, de)])])])])]),
            _: 1
        }), e(o, null, {
            default: s(() => [t("div", pe, [t("div", _e, [t("div", he, [me, be, ge, t("div", fe, [t("a", {
                href: this.authStore.getDomainMember ? this.authStore.getDomainMember + "/user/sign-up" : "#"
            }, [i("Buy Now $" + u(parseInt(c.royalTicketcost.price)) + " ", 1), ye], 8, ve)])])])])]),
            _: 1
        }), e(o, null, {
            default: s(() => [t("div", we, [t("div", ke, [t("div", xe, [Te, $e, Pe, t("div", Se, [t("a", {
                href: this.authStore.getDomainMember ? this.authStore.getDomainMember + "/user/sign-up" : "#"
            }, [i("Buy Now $ " + u(parseInt(c.jumboTicketcost.price)) + " ", 1), Ae], 8, je)])])])])]),
            _: 1
        })]),
        _: 1
    }, 8, ["injectStyles"])])])]), t("div", Je, [t("div", Re, [Le, e(n, {
        loop: !0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: !1
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 0
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
        default: s(() => [e(o, null, {
            default: s(() => [Ue]),
            _: 1
        }), e(o, null, {
            default: s(() => [Me]),
            _: 1
        }), e(o, null, {
            default: s(() => [Ce]),
            _: 1
        })]),
        _: 1
    }, 8, ["injectStyles"])])]), Ee, t("section", Ne, [t("div", Ie, [Be, e(n, {
        loop: !0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: !1
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 0
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
        default: s(() => [e(o, null, {
            default: s(() => [t("div", Oe, [t("div", Ve, [e(l, {
                options: {
                    Carousel: {
                        infinite: !1
                    }
                }
            }, {
                default: s(() => [De]),
                _: 1
            }), Fe, He])])]),
            _: 1
        }), e(o, null, {
            default: s(() => [t("div", Ge, [t("div", We, [e(l, {
                options: {
                    Carousel: {
                        infinite: !1
                    }
                }
            }, {
                default: s(() => [ze]),
                _: 1
            }), Ke, Ye])])]),
            _: 1
        }), e(o, null, {
            default: s(() => [t("div", qe, [t("div", Xe, [e(l, {
                options: {
                    Carousel: {
                        infinite: !1
                    }
                }
            }, {
                default: s(() => [Qe]),
                _: 1
            }), Ze, ts])])]),
            _: 1
        }), e(o, null, {
            default: s(() => [t("div", es, [t("div", ss, [e(l, {
                options: {
                    Carousel: {
                        infinite: !1
                    }
                }
            }, {
                default: s(() => [os]),
                _: 1
            }), is, as])])]),
            _: 1
        }), e(o, null, {
            default: s(() => [t("div", ls, [t("div", ns, [e(l, {
                options: {
                    Carousel: {
                        infinite: !1
                    }
                }
            }, {
                default: s(() => [cs]),
                _: 1
            }), rs, ds])])]),
            _: 1
        }), e(o, null, {
            default: s(() => [t("div", us, [t("div", ps, [e(l, {
                options: {
                    Carousel: {
                        infinite: !1
                    }
                }
            }, {
                default: s(() => [_s]),
                _: 1
            }), hs, ms])])]),
            _: 1
        })]),
        _: 1
    }, 8, ["injectStyles"])])]), t("div", bs, [t("div", gs, [fs, t("div", vs, [e(n, {
        loop: !0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: !1
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0
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
        default: s(() => [e(o, null, {
            default: s(() => [ys]),
            _: 1
        }), e(o, null, {
            default: s(() => [ws]),
            _: 1
        }), e(o, null, {
            default: s(() => [ks]),
            _: 1
        }), e(o, null, {
            default: s(() => [xs]),
            _: 1
        })]),
        _: 1
    }, 8, ["injectStyles"])])])]), t("div", Ts, [t("div", $s, [Ps, e(n, {
        loop: !0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: !1
        },
        breakpoints: {
            640: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 7,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 7,
                spaceBetween: 0
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
        default: s(() => [e(o, null, {
            default: s(() => [Ss]),
            _: 1
        }), e(o, null, {
            default: s(() => [js]),
            _: 1
        }), e(o, null, {
            default: s(() => [As]),
            _: 1
        }), e(o, null, {
            default: s(() => [Js]),
            _: 1
        }), e(o, null, {
            default: s(() => [Rs]),
            _: 1
        }), e(o, null, {
            default: s(() => [Ls]),
            _: 1
        }), e(o, null, {
            default: s(() => [Us]),
            _: 1
        }), e(o, null, {
            default: s(() => [Ms]),
            _: 1
        }), e(o, null, {
            default: s(() => [Cs]),
            _: 1
        }), e(o, null, {
            default: s(() => [Es]),
            _: 1
        })]),
        _: 1
    }, 8, ["injectStyles"])])]), Ns])
}
const Ws = f(qt, [
    ["render", Is]
]);
export {
    Ws as
    default
};