import {
    _ as L
} from "./nuxt-link.81d4da0e.js";
import {
    _ as N
} from "./resendOTP.c6d4078e.js";
import {
    f as I,
    _ as T,
    o as r,
    c as l,
    a as e,
    j as d,
    n as y,
    F as u,
    l as P,
    t as a,
    d as f,
    u as V,
    r as D,
    b as k,
    g as C,
    h as m,
    v as p,
    k as q,
    i as F,
    w as A,
    q as O
} from "./entry.baa6724e.js";
import {
    s as h,
    a as x
} from "./store.669f290b.js";
import {
    _ as S
} from "./parentcomponent.906631da.js";
import {
    p as U
} from "./proffNavLink.acada63a.js";
import {
    _ as B
} from "./avatar.92552bee.js";
import {
    f as E
} from "./firebasesmsverification.50d35a34.js";
import "./auth.5fc731a5.js";
import "./index-dd468b12.cb5ad844.js";
const M = I("profileImageStore", {
        state: h.state,
        getters: h.getters,
        actions: Object.assign({}, h.actions, {
            async load(s, o) {
                x.formGet(this, "/my-profile/profilepic", [M()])
            },
            async updateProfile(s) {
                x.formPost(this, "/my-profile/profilepic", s, [b()])
            }
        })
    }),
    b = I("profileDetailsStore", {
        state: h.state,
        getters: h.getters,
        actions: Object.assign({}, h.actions, {
            async load(s, o) {
                x.formGet(this, "/my-profile/profile", [b(), M()])
            },
            async userDetails(s) {
                return x.formPost(this, "/my-profile/profile", s, [b()])
            },
            async uploadProfileImage(s) {
                x.formPost(this, "/my-profile/profilepic", s, [b()])
            }
        })
    }),
    z = {
        extends: S,
        onLoadInitGetRequest: !0,
        setup() {
            return {
                store: M()
            }
        },
        head: {
            title: "Profile Details",
            meta: [{
                hid: "description",
                name: "description",
                content: "Settings page description"
            }]
        },
        components: {},
        data() {
            return {
                showDropdown: null,
                isLoading: !0,
                profileImage: null,
                showAvatarBox: !1,
                avatars: [{
                    img: "/assets/img/avatar/1.png"
                }, {
                    img: "/assets/img/avatar/2.png"
                }, {
                    img: "/assets/img/avatar/3.png"
                }, {
                    img: "/assets/img/avatar/4.png"
                }, {
                    img: "/assets/img/avatar/5.png"
                }, {
                    img: "/assets/img/avatar/6.png"
                }, {
                    img: "/assets/img/avatar/7.png"
                }, {
                    img: "/assets/img/avatar/8.png"
                }, {
                    img: "/assets/img/avatar/9.png"
                }, {
                    img: "/assets/img/avatar/10.png"
                }, {
                    img: "/assets/img/avatar/11.png"
                }, {
                    img: "/assets/img/avatar/12.png"
                }, {
                    img: "/assets/img/avatar/13.png"
                }, {
                    img: "/assets/img/avatar/14.png"
                }, {
                    img: "/assets/img/avatar/15.png"
                }, {
                    img: "/assets/img/avatar/16.png"
                }, {
                    img: "/assets/img/avatar/17.png"
                }, {
                    img: "/assets/img/avatar/18.png"
                }, {
                    img: "/assets/img/avatar/19.png"
                }, {
                    img: "/assets/img/avatar/20.png"
                }, {
                    img: "/assets/img/avatar/21.png"
                }, {
                    img: "/assets/img/avatar/22.png"
                }, {
                    img: "/assets/img/avatar/23.png"
                }, {
                    img: "/assets/img/avatar/24.png"
                }, {
                    img: "/assets/img/avatar/25.png"
                }, {
                    img: "/assets/img/avatar/26.png"
                }, {
                    img: "/assets/img/avatar/27.png"
                }, {
                    img: "/assets/img/avatar/28.png"
                }],
                form1: {
                    myfile: null,
                    _name_: "profilepic"
                }
            }
        },
        computed: {
            userDetails() {
                return this.response.user
            },
            onSuccessMessage() {
                return this.emptyIfNotExist("message", this.response.successdata)
            },
            getProfileImage() {
                return this.emptyIfNotExist("image", this.response.page.profileimage)
            },
            errorMsg() {
                return this.emptyIfNotExist("message", this.response)
            }
        },
        methods: {
            toggleDropdown(s) {
                this.showDropdown === s ? this.showDropdown = null : (this.showDropdown = s, this.addCloseListener())
            },
            closeDropdown() {
                this.showDropdown = null, this.removeCloseListener()
            },
            addCloseListener() {
                document.addEventListener("click", this.handleOutsideClick)
            },
            removeCloseListener() {
                document.removeEventListener("click", this.handleOutsideClick)
            },
            handleOutsideClick(s) {
                this.$refs.dropdown.contains(s.target) || this.closeDropdown()
            },
            onImageLoad() {
                this.isLoading = !1
            },
            onFileChange(s) {
                this.form1.myfile = s.target.files[0], this.store.updateProfile(this.form1), setTimeout(() => this.$router.go(), 1e3)
            },
            selectAvatar(s) {
                this.profileImage = s.img, fetch(s.img).then(o => o.blob()).then(o => {
                    const g = s.img.substring(s.img.lastIndexOf("/") + 1),
                        v = new File([o], g, {
                            type: "image/png"
                        });
                    this.onFileChange({
                        target: {
                            files: [v]
                        }
                    })
                })
            },
            showAvBx() {
                this.showAvatarBox = !this.showAvatarBox
            }
        }
    },
    G = {
        class: "block lg:flex items-center mt-5"
    },
    K = {
        class: "flex justify-center mr-5 relative"
    },
    J = {
        class: "w-24 h-24 bg-slate-50 rounded-full relative flex justify-center items-center"
    },
    Y = {
        key: 0,
        class: "image-container"
    },
    H = e("img", {
        src: B,
        class: "image"
    }, null, -1),
    Q = [H],
    W = {
        key: 1,
        class: "image-container"
    },
    X = {
        key: 0,
        class: "loading-spinner"
    },
    Z = e("span", {
        class: "material spinner"
    }, null, -1),
    $ = [Z],
    ee = ["src"],
    te = {
        class: "p-0 m-0 list-none contents",
        ref: "dropdown"
    },
    se = e("i", {
        class: "bi bi-cloud-arrow-up-fill"
    }, null, -1),
    oe = [se],
    ie = {
        key: 0,
        class: "absolute top-[118px] bg-slate-200 w-60 z-10 rounded-lg p-2"
    },
    re = {
        class: "flex flex-wrap"
    },
    le = ["onClick"],
    ae = ["src"],
    ne = {
        class: "flex flex-wrap"
    },
    de = ["onClick"],
    ce = ["src"],
    me = {
        class: "w-full lg:w-[calc(100%-116px)] mt-5 lg:mt-0"
    },
    ue = {
        class: "text-base font-semibold text-center lg:text-left"
    },
    fe = {
        class: "text-[13px] flex items-center lg:justify-start sm:justify-start xl:justify-start"
    },
    pe = e("i", {
        class: "bx bxs-map contents text-[#BF953F]"
    }, null, -1);

function he(s, o, g, v, i, t) {
    return r(), l("div", null, [e("div", G, [e("div", K, [e("div", J, [t.getProfileImage == "" ? (r(), l("div", Y, Q)) : (r(), l("div", W, [i.isLoading ? (r(), l("div", X, $)) : d("", !0), e("img", {
        src: "data:image/jpeg;base64," + t.getProfileImage,
        onLoad: o[0] || (o[0] = (...c) => t.onImageLoad && t.onImageLoad(...c)),
        class: y(["image", {
            hidden: i.isLoading
        }])
    }, null, 42, ee)]))]), e("li", te, [e("button", {
        class: "bg-[#222222] absolute left-[50%] translate-x-[-50%] bottom-[-20px] w-8 h-8 flex justify-center items-center rounded-full text-[16px] border-[2px] border-white text-[#ecc762]",
        onClick: o[1] || (o[1] = c => t.toggleDropdown("dropdown1"))
    }, oe), i.showDropdown === "dropdown1" ? (r(), l("div", ie, [e("ul", re, [(r(!0), l(u, null, P(i.avatars, (c, _) => (r(), l("li", {
        class: "w-3/12 px-1 my-1",
        key: _
    }, [e("div", {
        class: "w-full h-12 bg-white rounded-md p-1 cursor-pointer",
        onClick: w => t.selectAvatar(c)
    }, [e("img", {
        src: c.img,
        alt: ""
    }, null, 8, ae)], 8, le)]))), 128))]), e("input", {
        ref: "fileInput",
        type: "file",
        accept: "image/png, image/jpeg",
        style: {
            display: "none"
        },
        onChange: o[2] || (o[2] = (...c) => t.onFileChange && t.onFileChange(...c))
    }, null, 544)])) : d("", !0)], 512), i.showAvatarBox ? (r(), l("div", {
        key: 0,
        class: y(["absolute top-[118px] bg-slate-200 w-60 z-10 rounded-lg p-2", {
            "avatar-box-visible": i.showAvatarBox
        }])
    }, [e("ul", ne, [(r(!0), l(u, null, P(i.avatars, (c, _) => (r(), l("li", {
        class: "w-3/12 px-1 my-1",
        key: _
    }, [e("div", {
        class: "w-full h-12 bg-white rounded-md p-1 cursor-pointer",
        onClick: w => t.selectAvatar(c)
    }, [e("img", {
        src: c.img,
        alt: ""
    }, null, 8, ce)], 8, de)]))), 128))]), e("input", {
        ref: "fileInput",
        type: "file",
        accept: "image/png, image/jpeg",
        style: {
            display: "none"
        },
        onChange: o[3] || (o[3] = (...c) => t.onFileChange && t.onFileChange(...c))
    }, null, 544)], 2)) : d("", !0)]), e("div", me, [e("p", ue, a(t.userDetails["cusers_profiles.fullname"]), 1), e("span", fe, [pe, f(" " + a(t.userDetails["cusers_profiles.country"]), 1)])])])])
}
const ge = T(z, [
    ["render", he]
]);
const _e = {
        extends: S,
        onLoadInitGetRequest: !0,
        setup() {
            return V({
                title: "Your Profile - Manage Personal Information | Jumbo Ticket",
                meta: [{
                    name: "description",
                    content: "Access and update your personal details on Jumbo Tickets platform. Stay informed and in control of your account settings easily."
                }, {
                    name: "keywords",
                    content: "Buy Lottery Ticket, Safe Lottery Jackpot, Play Online Lottery, Bitcoin Lottery"
                }]
            }), {
                store: b()
            }
        },
        components: {
            proffNavLinkVue: U,
            profilePic: ge
        },
        data() {
            return {
                form: {
                    fullname: "",
                    country: "",
                    mobile: "",
                    email: "",
                    _name_: "profile",
                    gauthotp: "",
                    otp: "",
                    _OTPTOKEN_: "",
                    smsfirebaseverifed: ""
                },
                verificationCode: "",
                sentMessage: "",
                Mobileotpsendloader: !1,
                reloadKey: 0,
                sentsucess: !1,
                timer: 60,
                verifyMessage: ""
            }
        },
        computed: {
            userDetails() {
                return this.response.user
            },
            ResponseData() {
                return this.response.data
            },
            getCountryCode() {
                const s = this.form.country.split("-");
                return s.length == 2 ? s[1] : ""
            },
            onSuccessMessage() {
                return this.emptyIfNotExist("message", this.response.successdata)
            },
            if2faupdated() {
                return this.emptyIfNotExist("googleAuthRequired", this.response.pagerules)
            },
            ifEmailUpdated() {
                return this.emptyIfNotExist("emailOTPRequired", this.response.pagerules)
            },
            ifMobileUpdated() {
                return this.emptyIfNotExist("mobileOTPRequired", this.response.pagerules)
            },
            errorMsg() {
                return this.emptyIfNotExist("message", this.response)
            },
            rules() {
                return this.response.pagerules
            },
            otpToken() {
                return this.emptyIfNotExist("_OTPTOKEN_", this.response.data)
            }
        },
        watch: {
            otpToken: {
                handler(s) {
                    this.form._OTPTOKEN_ = s
                },
                immediate: !0
            }
        },
        methods: {
            Request2() {
                this.store.userDetails(this.form).then(s => {
                    this.response = s, this.response.successdata != "" && setTimeout(() => this.$router.go(), 1e3)
                })
            },
            onSubmit() {
                this.Mobileotpsendloader || this.store.userDetails(this.form).then(s => {
                    this.response = s, this.response.wizard === 2 && this.rules.mobileOTPRequired === !0 && this.sentsucess == !1 && this.sendMobileVerificationCode()
                })
            },
            sendMobileVerificationCode() {
                this.Mobileotpsendloader = !0;
                const s = "+" + this.getCountryCode + " " + this.form.mobile,
                    o = this.rules.firebasDetails;
                E.sendVerificationCode(s, o).then(g => {
                    console.log(window.confirmationResult), window.confirmationResult && (this.starttimer(), this.reloadKey += 1, this.sentsucess = !0), this.Mobileotpsendloader = !1
                }).catch(g => {
                    this.sentMessage = "Oops! 📵 SMS failed to send OTP verification for Profile update.", this.sentsucess = !1, this.Mobileotpsendloader = !1
                })
            },
            verifyMobileVerificationCode() {
                const s = this.verificationCode;
                if (!s) {
                    this.verifyMessage = "Please enter OTP";
                    return
                }
                E.verifyCode(s).then(o => {
                    o && (this.form.smsfirebaseverifed = !0, this.response.wizard === 2 && this.Request2())
                }).catch(o => {
                    console.error("Firebase OTP Verification Error:", o), this.verifyMessage = "Oops! 😕 Your OTP didn't match. Please double-check and try again."
                })
            },
            resendMobileVerificationCode() {
                this.sendMobileVerificationCode(), this.resendSuccess = !0, setTimeout(() => {
                    this.resendSuccess = !1
                }, 3e3)
            },
            starttimer() {
                this.intervalId !== null && clearInterval(this.intervalId), this.timer = 30, this.intervalId = setInterval(() => {
                    this.timer = Math.max(0, this.timer - 1), this.timer === 0 && (clearInterval(this.intervalId), this.intervalId = null)
                }, 1e3)
            }
        }
    },
    xe = {
        class: "container mx-auto"
    },
    be = e("button", {
        id: "sign-up-button"
    }, null, -1),
    ye = [be],
    ve = {
        key: 0,
        class: "mt-4"
    },
    we = {
        class: "flex justify-center mb-4"
    },
    ke = {
        class: "w-full max-w-3xl"
    },
    Ce = {
        class: "bg-[#d6ffd6] border border-[#35ab35] py-3 px-5 rounded-lg text-[#35ab35]"
    },
    Pe = {
        key: 1,
        class: "flex justify-center flex-wrap -mx-3 mt-3"
    },
    Me = {
        class: "w-full md:w-1/2 lg:w-6/12 px-3 my-3"
    },
    De = {
        class: "p-7 bg-white rounded-lg"
    },
    Ee = e("div", {
        class: "prof-head"
    }, [e("h4", null, "My details")], -1),
    Ie = {
        class: "overflow-x-auto mt-10"
    },
    Te = {
        class: "mabil-res"
    },
    Oe = {
        class: "w-full text-sm text-left text-gray-500"
    },
    Se = {
        class: "bg-gray-100"
    },
    je = e("th", {
        scope: "row",
        class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-right"
    }, " Member ID ", -1),
    Re = {
        class: "px-6 py-4 text-left"
    },
    Le = {
        class: "text-[#111] font-semibold"
    },
    Ne = {
        class: "bg-white"
    },
    Ve = e("th", {
        scope: "row",
        class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-right"
    }, " Joining Date ", -1),
    qe = {
        class: "px-6 py-4 text-left"
    },
    Fe = {
        class: "text-[#111] font-semibold"
    },
    Ae = {
        class: "bg-gray-100"
    },
    Ue = e("th", {
        scope: "row",
        class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-right"
    }, " Placement ID ", -1),
    Be = {
        class: "px-6 py-4 text-left"
    },
    ze = {
        class: "text-[#111] font-semibold"
    },
    Ge = {
        class: "bg-white"
    },
    Ke = e("th", {
        scope: "row",
        class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-right"
    }, " Placement Name ", -1),
    Je = {
        class: "px-6 py-4 text-left"
    },
    Ye = {
        class: "text-[#111] font-semibold"
    },
    He = {
        class: "bg-gray-100"
    },
    Qe = e("th", {
        scope: "row",
        class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-right"
    }, " Position ", -1),
    We = {
        class: "px-6 py-4 text-left"
    },
    Xe = {
        key: 0,
        class: "text-[#111] font-semibold"
    },
    Ze = {
        key: 1,
        class: "text-[#111] font-semibold"
    },
    $e = {
        class: "bg-white"
    },
    et = e("th", {
        scope: "row",
        class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-right"
    }, " Referrer ID ", -1),
    tt = {
        class: "px-6 py-4 text-left"
    },
    st = {
        class: "text-[#111] font-semibold"
    },
    ot = {
        class: "bg-gray-100"
    },
    it = e("th", {
        scope: "row",
        class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-right"
    }, " Referrer Name ", -1),
    rt = {
        class: "px-6 py-4 text-left"
    },
    lt = {
        class: "text-[#111] font-semibold"
    },
    at = {
        class: "bg-white"
    },
    nt = e("th", {
        scope: "row",
        class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-right"
    }, " Referrer Email ", -1),
    dt = {
        class: "px-6 py-4 text-left"
    },
    ct = {
        class: "text-[#111] font-semibold"
    },
    mt = {
        class: "bg-gray-100"
    },
    ut = e("th", {
        scope: "row",
        class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-right"
    }, " Referrer Mobile No. ", -1),
    ft = {
        class: "px-6 py-4 text-left"
    },
    pt = {
        class: "text-[#111] font-semibold"
    },
    ht = {
        class: "w-full md:w-1/2 lg:w-6/12 px-3 my-3"
    },
    gt = {
        class: "p-7 bg-white rounded-lg h-full"
    },
    _t = e("div", {
        class: "prof-head"
    }, [e("h4", null, "Edit Profile")], -1),
    xt = {
        class: "mb-2 mt-5"
    },
    bt = e("label", {
        for: "",
        class: "block mb-2 font-medium text-[#222]"
    }, "Full Name*", -1),
    yt = {
        class: "text-red-600 font-medium block mt-[5px]"
    },
    vt = {
        class: "mb-2 mt-5"
    },
    wt = e("label", {
        for: "",
        class: "block mb-2 font-medium text-[#222]"
    }, "Country*", -1),
    kt = ["value"],
    Ct = {
        class: "text-red-600 font-medium block mt-[5px]"
    },
    Pt = {
        class: "mb-2 mt-5"
    },
    Mt = e("label", {
        for: "",
        class: "block mb-2 font-medium text-[#222]"
    }, "Mobile No*", -1),
    Dt = {
        class: "flex relative"
    },
    Et = {
        class: "inline-flex w-20 items-center px-3 text-gray-900 bg-gray-200 border border-r-0 border-[#ECC762] rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
    },
    It = {
        class: "text-red-600 font-medium block mt-[5px]"
    },
    Tt = {
        class: "mb-2 mt-7"
    },
    Ot = e("label", {
        for: "",
        class: "block mb-2 font-medium text-[#222]"
    }, "Email ID*", -1),
    St = {
        class: "relative"
    },
    jt = {
        key: 0,
        class: "absolute right-[13px] top-[50%] translate-y-[-50%]"
    },
    Rt = e("i", {
        class: "bi bi-patch-check-fill text-lg text-[#35AB35]"
    }, null, -1),
    Lt = [Rt],
    Nt = {
        key: 1,
        class: "absolute right-[13px] top-[50%] translate-y-[-50%]"
    },
    Vt = e("i", {
        class: "bi bi-exclamation-circle-fill text-lg text-[#ECC762]"
    }, null, -1),
    qt = [Vt],
    Ft = {
        class: "flex justify-end mt-2"
    },
    At = {
        class: "text-red-600 font-medium block mt-[5px]"
    },
    Ut = {
        key: 0,
        class: "bg-[#d6ffd6] border border-[#35ab35] py-3 px-5 rounded-lg text-[#35ab35]"
    },
    Bt = {
        class: "flex mt-5 justify-left"
    },
    zt = ["disabled"],
    Gt = e("i", {
        class: "bx bx-chevron-right contents ml-1 text-2xl"
    }, null, -1),
    Kt = {
        key: 1,
        class: "text-red-500 mt-4"
    },
    Jt = {
        class: "mt-5"
    },
    Yt = {
        class: "flex justify-center mb-4"
    },
    Ht = {
        class: "w-full max-w-3xl bg-[#fff] px-5 py-5 rounded-lg"
    },
    Qt = e("div", {
        class: "text-center mb-4"
    }, [e("p", {
        class: "uppercase text-lg font-semibold"
    }, "Please check your Authenticator App for the OTP")], -1),
    Wt = {
        class: "text-red-600 font-medium block mt-[5px]"
    },
    Xt = O('<div class="flex justify-end mt-2"><a href="/profile/google-2fa-guide" class="text-[#ECC762] font-semibold hover:underline">View Google 2FA Guide</a></div><div class="flex mt-5 justify-center"><button type="submit" class="px-[20px] py-[10px] rounded-lg bg-[#ECC762] uppercase font-semibold inline-flex items-center transition-all hover:opacity-90"> Confirm <i class="bx bx-chevron-right contents ml-1 text-2xl"></i></button></div>', 2),
    Zt = {
        class: "mt-5"
    },
    $t = {
        class: "flex justify-center mb-4"
    },
    es = {
        class: "w-full max-w-3xl bg-[#fff] px-5 py-5 rounded-lg"
    },
    ts = e("div", {
        class: "text-center mb-4"
    }, [e("p", {
        class: "uppercase text-lg font-semibold"
    }, "Please check your Email for the OTP")], -1),
    ss = {
        class: "text-red-600 font-medium block mt-[5px] text-center"
    },
    os = e("div", {
        class: "flex mt-5 justify-center"
    }, [e("button", {
        type: "submit",
        class: "px-[20px] h-[45px] w-full justify-center rounded-lg bg-[#ECC762] uppercase font-semibold inline-flex items-center transition-all hover:opacity-90"
    }, [f(" Confirm "), e("i", {
        class: "bx bx-chevron-right contents ml-1 text-2xl"
    })])], -1),
    is = {
        key: 0,
        class: "mt-5"
    },
    rs = O('<div class="flex justify-center mb-4"><div class="w-full max-w-xl bg-[#fff] px-5 py-5 rounded-lg"><div class="flex justify-center items-center"><div class="block-loader"></div><span class="text-black ml-3"> Sending OTP, please wait...</span></div></div></div>', 1),
    ls = [rs],
    as = {
        key: 0,
        action: "#",
        method: "post"
    },
    ns = {
        class: "mt-5"
    },
    ds = {
        class: "flex justify-center mb-4"
    },
    cs = {
        class: "w-full max-w-xl bg-[#fff] px-5 py-5 rounded-lg"
    },
    ms = e("div", {
        class: "text-center mb-4"
    }, [e("p", {
        class: "uppercase text-lg font-semibold"
    }, "Please check your Phone for the OTP")], -1),
    us = {
        class: "text-red-600 font-medium block mt-[5px] text-center"
    },
    fs = {
        class: "text-red-600"
    },
    ps = {
        class: "text-red-600"
    },
    hs = {
        class: "flex mt-5 justify-center"
    },
    gs = e("i", {
        class: "bx bx-chevron-right contents ml-1 text-2xl"
    }, null, -1),
    _s = {
        class: "relative mt-5 rounded-lg overflow-hidden"
    },
    xs = {
        key: 0,
        class: "absolute w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] text-white"
    },
    bs = {
        key: 1,
        class: "mt-5"
    },
    ys = {
        class: "flex justify-center mb-4"
    },
    vs = {
        class: "w-full max-w-xl bg-[#fff] px-5 py-5 rounded-lg"
    },
    ws = {
        class: "text-red-600"
    },
    ks = e("div", {
        class: "flex justify-center"
    }, [e("a", {
        href: "",
        class: "bg-[#bf953f] uppercase font-semibold w-full h-[45px] flex justify-center items-center rounded-lg transition-all hover:bg-[#ecc762] mt-5 cursor-pointer"
    }, "Go back")], -1);

function Cs(s, o, g, v, i, t) {
    const c = D("proffNavLinkVue"),
        _ = D("profilePic"),
        w = L,
        j = N;
    return r(), l("div", null, [e("div", xe, [k(c), (r(), l("div", {
        key: i.reloadKey
    }, ye)), t.onSuccessMessage !== "" ? (r(), l("div", ve, [e("div", we, [e("div", ke, [e("div", Ce, a(t.onSuccessMessage), 1)])])])) : d("", !0), s.response.wizard == 1 ? (r(), l("div", Pe, [e("div", Me, [e("div", De, [Ee, k(_), e("div", Ie, [e("div", Te, [e("table", Oe, [e("tbody", null, [e("tr", Se, [je, e("td", Re, [e("span", Le, a(t.userDetails["cusers_profiles.username"]), 1)])]), e("tr", Ne, [Ve, e("td", qe, [e("span", Fe, a(s.formatDate(t.userDetails["cusers_profiles.regdate"], "LLL")), 1)])]), e("tr", Ae, [Ue, e("td", Be, [e("span", ze, a(t.userDetails["cusers_relations.sponsorname"]), 1)])]), e("tr", Ge, [Ke, e("td", Je, [e("span", Ye, a(t.ResponseData.sponsorfullname), 1)])]), e("tr", He, [Qe, e("td", We, [t.userDetails["cusers_relations.position"] == 1 ? (r(), l("span", Xe, "Left")) : d("", !0), t.userDetails["cusers_relations.position"] == 2 ? (r(), l("span", Ze, "Right")) : d("", !0)])]), e("tr", $e, [et, e("td", tt, [e("span", st, a(t.userDetails["cusers_relations.referralname"]), 1)])]), e("tr", ot, [it, e("td", rt, [e("span", lt, a(t.ResponseData.referralfullname), 1)])]), e("tr", at, [nt, e("td", dt, [e("span", ct, a(t.ResponseData.referralemail), 1)])]), e("tr", mt, [ut, e("td", ft, [e("span", pt, [t.ResponseData.length != 0 ? (r(), l(u, {
        key: 0
    }, [f(" + ")], 64)) : d("", !0), f(" " + a(t.ResponseData.referralmobile), 1)])])])])])])])])]), e("div", ht, [e("div", gt, [_t, e("form", {
        action: "#",
        method: "POST",
        onSubmit: o[4] || (o[4] = C((...n) => t.onSubmit && t.onSubmit(...n), ["prevent"]))
    }, [e("div", xt, [bt, m(e("input", {
        type: "text",
        "onUpdate:modelValue": o[0] || (o[0] = n => i.form.fullname = n),
        placeholder: "Enter Fullname",
        class: "w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100"
    }, null, 512), [
        [p, i.form.fullname]
    ])]), e("p", yt, a(t.errorMsg.fullname), 1), e("div", vt, [wt, m(e("select", {
        "onUpdate:modelValue": o[1] || (o[1] = n => i.form.country = n),
        id: "searchlist",
        name: "searchlist",
        autocomplete: "searchlist",
        class: "w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100"
    }, [(r(!0), l(u, null, P(s.emptyIfNotExist("country", s.response.lists), (n, R) => (r(), l("option", {
        key: R,
        value: n.value
    }, a(n.caption), 9, kt))), 128))], 512), [
        [q, i.form.country]
    ])]), e("p", Ct, a(t.errorMsg.country), 1), e("div", Pt, [Mt, e("div", Dt, [e("span", Et, " + " + a(t.getCountryCode), 1), m(e("input", {
        type: "text",
        "onUpdate:modelValue": o[2] || (o[2] = n => i.form.mobile = n),
        placeholder: "Enter phone number",
        class: "w-full h-[45px] rounded-l-none rounded-lg border border-[#ECC762] bg-gray-100"
    }, null, 512), [
        [p, i.form.mobile]
    ])]), e("p", It, a(t.errorMsg.mobile), 1)]), e("div", Tt, [Ot, e("div", St, [m(e("input", {
        type: "text",
        "onUpdate:modelValue": o[3] || (o[3] = n => i.form.email = n),
        class: "w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100"
    }, null, 512), [
        [p, i.form.email]
    ]), t.userDetails["cusers_profiles.validemailstatus"] == 1 ? (r(), l("span", jt, Lt)) : d("", !0), t.userDetails["cusers_profiles.validemailstatus"] == 0 && t.userDetails["cusers_profiles.email"] !== "" ? (r(), l("span", Nt, qt)) : d("", !0)]), e("div", Ft, [t.userDetails["cusers_profiles.validemailstatus"] == 0 && t.userDetails["cusers_profiles.email"] !== "" ? (r(), F(w, {
        key: 0,
        to: "/user/verify-mail",
        class: "text-[#BF953F] font-semibold text-xs"
    }, {
        default: A(() => [f("Verify Email")]),
        _: 1
    })) : d("", !0)]), e("p", At, a(t.errorMsg.email), 1)]), t.onSuccessMessage !== "" ? (r(), l("div", Ut, a(t.onSuccessMessage), 1)) : d("", !0), e("div", Bt, [e("button", {
        type: "submit",
        disabled: t.if2faupdated == !1 && t.ifEmailUpdated == !1 && t.ifMobileUpdated == !1,
        class: y(["px-[20px] py-[10px] rounded-lg bg-[#ECC762] uppercase font-semibold inline-flex items-center transition-all", {
            "opacity-70 cursor-not-allowed": t.if2faupdated == !1 && t.ifEmailUpdated == !1 && t.ifMobileUpdated == !1
        }])
    }, [f(" Update Profile "), Gt], 10, zt)]), t.if2faupdated == !1 && t.ifEmailUpdated == !1 && t.ifMobileUpdated == !1 ? (r(), l("p", Kt, " Please enable Transaction Security to be able to edit and update your profile details. ")) : d("", !0)], 32)])])])) : d("", !0), s.response.wizard == 2 ? (r(), l(u, {
        key: 2
    }, [t.rules.googleAuthRequired == !0 ? (r(), l("form", {
        key: 0,
        action: "#",
        onSubmit: o[6] || (o[6] = C((...n) => t.Request2 && t.Request2(...n), ["prevent"]))
    }, [e("div", Jt, [e("div", Yt, [e("div", Ht, [Qt, m(e("input", {
        type: "text",
        "onUpdate:modelValue": o[5] || (o[5] = n => i.form.gauthotp = n),
        placeholder: "Enter OTP",
        class: "w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100"
    }, null, 512), [
        [p, i.form.gauthotp]
    ]), e("p", Wt, a(s.response.message.fail), 1), Xt])])])], 32)) : d("", !0), t.rules.emailOTPRequired == !0 ? (r(), l("form", {
        key: 1,
        action: "#",
        onSubmit: o[8] || (o[8] = C((...n) => t.Request2 && t.Request2(...n), ["prevent"]))
    }, [e("div", Zt, [e("div", $t, [e("div", es, [ts, e("div", null, [m(e("input", {
        type: "number",
        "onUpdate:modelValue": o[7] || (o[7] = n => i.form.otp = n),
        placeholder: "Enter OTP",
        class: "w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100 text-center"
    }, null, 512), [
        [p, i.form.otp]
    ]), e("p", ss, a(s.response.message.fail), 1), os, e("div", null, [k(j, {
        purpose: "profile",
        onClick: s.handleresendOTPtoken
    }, null, 8, ["onClick"])])])])])])], 32)) : d("", !0), t.rules.mobileOTPRequired == !0 ? (r(), l(u, {
        key: 2
    }, [i.Mobileotpsendloader == !0 ? (r(), l("div", is, ls)) : d("", !0), i.Mobileotpsendloader == !1 ? (r(), l(u, {
        key: 1
    }, [i.sentMessage == "" ? (r(), l("form", as, [e("div", ns, [e("div", ds, [e("div", cs, [ms, e("div", null, [m(e("input", {
        type: "text",
        "onUpdate:modelValue": o[9] || (o[9] = n => i.verificationCode = n),
        placeholder: "Enter OTP",
        class: "w-full h-[45px] rounded-lg border border-[#ECC762] bg-gray-100 text-center"
    }, null, 512), [
        [p, i.verificationCode]
    ]), e("p", us, a(s.response.message.fail), 1), e("span", fs, a(i.sentMessage), 1), e("span", ps, a(i.verifyMessage), 1), e("div", hs, [e("button", {
        type: "button",
        onClick: o[10] || (o[10] = n => t.verifyMobileVerificationCode()),
        class: "px-[20px] h-[45px] w-full justify-center rounded-lg bg-[#ECC762] uppercase font-semibold inline-flex items-center transition-all hover:opacity-90"
    }, [f(" Confirm "), gs])]), e("div", null, [e("div", _s, [i.timer > 0 ? (r(), l("div", xs, " Send OTP again in 0:" + a(i.timer), 1)) : d("", !0), e("input", {
        class: y(["bg-[#bf953f] uppercase font-semibold w-full h-[45px] transition-all hover:bg-[#ecc762] text-center cursor-pointer", {
            "text-[#bf953f]": i.timer > 0
        }]),
        type: "button",
        onClick: o[11] || (o[11] = n => t.resendMobileVerificationCode()),
        value: "Resend OTP"
    }, null, 2)])])])])])])])) : d("", !0), i.sentMessage != "" ? (r(), l("div", bs, [e("div", ys, [e("div", vs, [e("span", ws, a(i.sentMessage), 1), ks])])])) : d("", !0)], 64)) : d("", !0)], 64)) : d("", !0)], 64)) : d("", !0)])])
}
const Ls = T(_e, [
    ["render", Cs]
]);
export {
    Ls as
    default
};