import {
    _ as O
} from "./bloqHead.ac0c20f1.js";
import {
    _ as L
} from "./nuxt-link.81d4da0e.js";
import {
    f as M,
    _ as X,
    u as Y,
    r as q,
    c as r,
    a as e,
    b as a,
    F as x,
    t as p,
    d as f,
    n as _,
    h as i,
    m as G,
    g as m,
    v as d,
    w as H,
    j as b,
    l as w,
    s as y,
    k as v,
    o as u
} from "./entry.baa6724e.js";
import {
    s as C,
    a as U
} from "./store.669f290b.js";
import {
    m as J
} from "./message.2a8bf91d.js";
import {
    b as k
} from "./browser.e933942f.js";
import {
    _ as Q
} from "./parentcomponent.906631da.js"; /* empty css                       */
import {
    _ as T,
    a as D,
    b as A,
    c as F,
    d as I,
    e as R,
    f as E,
    g as B
} from "./tron.79f59873.js";
import "./auth.5fc731a5.js";
const S = M("addFundStore", {
        state: C.state,
        getters: C.getters,
        actions: Object.assign({}, C.actions, {
            async load(o, t) {
                return U.formGet(this, "/funds/deposit-fund", [S()])
            },
            async addfund(o) {
                return U.formPost(this, "/funds/deposit-fund", o, [S()])
            }
        })
    }),
    P = "" + globalThis.__publicAssetsURL("assets/img/cryptos/erc20.png"),
    W = "" + globalThis.__publicAssetsURL("assets/img/currency/rupee.png"),
    z = "" + globalThis.__publicAssetsURL("assets/img/currency/dollar.png"),
    K = "" + globalThis.__publicAssetsURL("assets/img/currency/taka.png"),
    Z = "" + globalThis.__publicAssetsURL("assets/img/currency/no-cur.png");
const $ = {
        extends: Q,
        onLoadInitGetRequest: !0,
        beforeLoadClearPreviousResponse: !0,
        setup() {
            return Y({
                title: "Deposit Funds - Add Money to Your Jumbo Ticket Wallet | Jumbo Ticket",
                meta: [{
                    name: "description",
                    content: "Easily deposit funds into your Jumbo Ticket wallet to participate in lottery draws and unlock exclusive benefits."
                }, {
                    name: "keywords",
                    content: "Buy Lottery Ticket, Safe Lottery Jackpot, Play Online Lottery, Bitcoin Lottery"
                }]
            }), {
                store: S()
            }
        },
        data() {
            return {
                decodedHtmlis: !1,
                copyel: null,
                isCopy: !1,
                qrcodeDataUrl: "",
                errorMsg: "",
                address: "",
                tabs: ["Cryptocurrency (Gateway 1)", "CRYPTOCURRENCY (Gateway 2)", "Pay Using Feex It", "Pay Using M-Pesa", "Credit/Debit Card"],
                tabStatusMapping: {
                    "Cryptocurrency (Gateway 1)": "cryptocurrency",
                    "Pay Using Feex It": "feexit",
                    "Pay Using M-Pesa": "m-pesa",
                    "Credit/Debit Card": "pay4work",
                    "CRYPTOCURRENCY (Gateway 2)": "nowpayments"
                },
                activeTab: "",
                showDeluxe: !0,
                form0: {
                    usdfundamount: "",
                    cointype: "BTC"
                },
                form1: {
                    usdfundamount: "",
                    cointype: "DOGE"
                },
                form2: {
                    usdfundamount: "",
                    cointype: "LTC"
                },
                form3: {
                    usdfundamount: "",
                    cointype: "ETH"
                },
                form4: {
                    usdfundamount: "",
                    cointype: "USDT.ERC20"
                },
                form5: {
                    usdfundamount: "",
                    cointype: "USDT.TRC20"
                },
                form14: {
                    usdfundamount: "",
                    cointype: "USDT.BEP20"
                },
                form6: {
                    usdfundamount: "",
                    cointype: "XRP"
                },
                form7: {
                    usdfundamount: "",
                    cointype: "TRX"
                },
                form8: {
                    usdfundamount: "",
                    cointype: "BNB.BSC"
                },
                form9: {
                    usdfundamount: "",
                    cointype: "BUSD"
                },
                upi: {
                    key: "",
                    orderid: "",
                    username: "",
                    upiaction: "",
                    amount: ""
                },
                deluxue_upi: {
                    amount: "",
                    _name_: "deluxepay365"
                },
                deluxeStatus: "",
                mpesaform: {
                    mobile: "",
                    amount: "",
                    _name_: "mpesa"
                },
                pay4workform: {
                    _name_: "pay4work",
                    amount: ""
                },
                feexIt: {
                    _name_: "feexit",
                    pan: "",
                    expY: "",
                    expM: "",
                    cvv: "",
                    currency: "",
                    amount: "",
                    bankcode: "",
                    cardhfirstname: "",
                    cardhlastname: "",
                    cardhstreetaddress: "",
                    cardhstate: "",
                    cardhpostalcode: "",
                    cardhisocountrycode: "",
                    email: "",
                    mobile: ""
                },
                form0now: {
                    usdfundamount: "",
                    cointype: "BTC",
                    _name_: "nowpayments"
                },
                form1now: {
                    usdfundamount: "",
                    cointype: "DOGE",
                    _name_: "nowpayments"
                },
                form2now: {
                    usdfundamount: "",
                    cointype: "LTC",
                    _name_: "nowpayments"
                },
                form3now: {
                    usdfundamount: "",
                    cointype: "ETH",
                    _name_: "nowpayments"
                },
                form4now: {
                    usdfundamount: "",
                    cointype: "USDTERC20",
                    _name_: "nowpayments"
                },
                form5now: {
                    usdfundamount: "",
                    cointype: "USDTTRC20",
                    _name_: "nowpayments"
                },
                form14now: {
                    usdfundamount: "",
                    cointype: "USDTBSC",
                    _name_: "nowpayments"
                },
                form6now: {
                    usdfundamount: "",
                    cointype: "XRP",
                    _name_: "nowpayments"
                },
                form7now: {
                    usdfundamount: "",
                    cointype: "TRX",
                    _name_: "nowpayments"
                },
                form8now: {
                    usdfundamount: "",
                    cointype: "BNBBSC",
                    _name_: "nowpayments"
                },
                form9now: {
                    usdfundamount: "",
                    cointype: "BUSDBSC",
                    _name_: "nowpayments"
                },
                mobileValue: "",
                selectedCountry: "",
                selectedCountryCurrency: "",
                selectedCountryCode: "",
                selectedBankCode: "",
                selectedPhoneCode: "",
                countries: [],
                getLocate: "",
                convertedAmount: null,
                loader: !0,
                isChangeAmtType: !1
            }
        },
        mounted() {
            this.generateQRCode()
        },
        components: {
            QRCode: k,
            message: J
        },
        computed: {
            getINR_Value() {
                if (this.response.page.currencyratesvalues && this.response.page.currencyratesvalues.INR) return this.response.page.currencyratesvalues.INR
            },
            getBDT_Value() {
                if (this.response.page.currencyratesvalues && this.response.page.currencyratesvalues.BDT) return this.response.page.currencyratesvalues.BDT
            },
            getUSD_Value() {
                if (this.response.page.currencyratesvalues && this.response.page.currencyratesvalues.USD) return this.response.page.currencyratesvalues.USD
            },
            purchaseNote() {
                return this.emptyIfNotExist("add_fund", this.response.page.notes)
            },
            errorMessage() {
                return this.response.message
            },
            responseData() {
                return this.response.data
            },
            waltaddress() {
                return this.emptyIfNotExist("address", this.response.data)
            },
            usdAmount() {
                return this.emptyIfNotExist("usdamount", this.response.page)
            },
            value() {
                return this.emptyIfNotExist("address", this.response.data)
            },
            getUpiKey() {
                if (this.response.page.quickpay) return this.emptyArrayIfNotExist("key", this.response.page.quickpay.data)
            },
            getUpiOrderid() {
                if (this.response.page.quickpay) return this.emptyArrayIfNotExist("orderid", this.response.page.quickpay.data)
            },
            getUpiUsername() {
                if (this.response.page.quickpay) return this.emptyArrayIfNotExist("username", this.response.page.quickpay.data)
            },
            getUpiAction() {
                if (this.response.page.quickpay) return this.emptyArrayIfNotExist("action", this.response.page.quickpay)
            },
            getDeluxe365() {
                if (this.response.page.deluxepay365) return this.emptyArrayIfNotExist("data", this.response.page.deluxepay365)
            },
            ifDeluxeSuccess() {
                if (this.response.page.deluxepay365) return this.emptyIfNotExist("status", this.response.page.deluxepay365)
            },
            deluxeredirect() {
                if (this.response.page.deluxepay365) return this.emptyIfNotExist("reason", this.response.page.deluxepay365)
            },
            getCurrencyList() {
                return this.emptyIfNotExist("currency", this.response.lists)
            },
            getCountryISOCode() {
                return this.emptyIfNotExist("cardhisocountrycode", this.response.page)
            },
            showBankCodeSelect() {
                const o = this.countries.find(t => t.iso_code === this.selectedCountry);
                return o && o.bankcode !== null && o.bankcode !== void 0 && (Array.isArray(o.bankcode) && o.bankcode.length > 0 || typeof o.bankcode == "object" && Object.keys(o.bankcode).length > 0)
            },
            bankCodes() {
                const o = this.countries.find(t => t.iso_code === this.selectedCountry);
                return o && o.bankcode ? Array.isArray(o.bankcode) ? o.bankcode.map(t => ({
                    value: t,
                    label: t
                })) : Object.entries(o.bankcode).map(([t, h]) => ({
                    value: t,
                    label: h
                })) : []
            },
            creditCardExpiryYears() {
                const o = new Date().getFullYear(),
                    t = [],
                    h = 10;
                for (let g = 0; g < h; g++) t.push(String(o + g));
                return t
            },
            months() {
                return [{
                    label: "January",
                    value: "01"
                }, {
                    label: "February",
                    value: "02"
                }, {
                    label: "March",
                    value: "03"
                }, {
                    label: "April",
                    value: "04"
                }, {
                    label: "May",
                    value: "05"
                }, {
                    label: "June",
                    value: "06"
                }, {
                    label: "July",
                    value: "07"
                }, {
                    label: "August",
                    value: "08"
                }, {
                    label: "September",
                    value: "09"
                }, {
                    label: "October",
                    value: "10"
                }, {
                    label: "November",
                    value: "11"
                }, {
                    label: "December",
                    value: "12"
                }]
            },
            paymentgatewaystatus() {
                return this.emptyIfNotExist("paymentgatewaystatus", this.response.page)
            },
            filteredTabs() {
                let o = null;
                const t = this.tabs.filter(h => {
                    const g = this.tabStatusMapping[h],
                        n = this.paymentgatewaystatus[g];
                    return n === "1" && !o && (o = h, this.loader = !1), n === "1"
                });
                return !o && t.length > 0 && (o = t[0]), (this.activeTab == null || this.activeTab == "") && (this.activeTab = o), t
            },
            cryptoType() {
                return this.emptyIfNotExist("name", this.response.data)
            },
            mpesaSucccess() {
                return this.emptyIfNotExist("message", this.response.successdata)
            }
        },
        watch: {
            getCountryISOCode: {
                immediate: !0,
                handler(o) {
                    this.countries = o || []
                }
            },
            selectedCountry(o) {
                const t = this.countries.find(h => h.iso_code === o);
                this.selectedCountryCurrency = t ? t.currency : "", this.selectedCountryCode = t ? t.iso_code : "", this.selectedPhoneCode = t ? t.code : "", this.getLocate = t ? t.geo : ""
            },
            selectedCountryCurrency: {
                handler(o) {
                    this.feexIt.currency = o
                },
                immediate: !0
            },
            selectedCountryCode: {
                immediate: !0,
                handler(o) {
                    this.feexIt.cardhisocountrycode = o
                }
            },
            selectedBankCode: {
                immediate: !0,
                handler(o) {
                    this.feexIt.bankcode = o
                }
            },
            ifDeluxeSuccess: {
                handler(o) {
                    this.deluxeStatus = o
                },
                immediate: !0
            },
            value: {
                handler(o) {
                    this.address = o
                },
                immediate: !0
            },
            address: {
                handler(o) {
                    this.generateQRCode()
                },
                immediate: !0
            },
            waltaddress: {
                handler(o) {
                    this.copyel = o
                },
                immediate: !0
            },
            getUpiKey: {
                handler(o) {
                    this.upi.key = o
                },
                immediate: !0
            },
            getUpiOrderid: {
                handler(o) {
                    this.upi.orderid = o
                },
                immediate: !0
            },
            getUpiUsername: {
                handler(o) {
                    this.upi.username = o
                },
                immediate: !0
            },
            getUpiAction: {
                handler(o) {
                    this.upi.upiaction = o
                },
                immediate: !0
            },
            "feexIt.cardhisocountrycode": function(o) {
                this.updateCountryDescription(o)
            },
            mobileValue: "updateFeexItMobile"
        },
        methods: {
            changeAmtType() {
                this.isChangeAmtType ? k.toDataURL(`${this.cryptoType}:${this.address}?amount=${this.usdAmount}`).then(o => {
                    this.qrcodeDataUrl = o
                }).catch(o => {
                    o && this.errorMsg == "Something went wrong, check if you are logged in!"
                }) : k.toDataURL(this.address).then(o => {
                    this.qrcodeDataUrl = o
                }).catch(o => {
                    o && this.errorMsg == "Something went wrong, check if you are logged in!"
                })
            },
            convert() {
                this.selectedBankCode = "";
                try {
                    const o = {
                        USD: this.getUSD_Value,
                        INR: this.getINR_Value,
                        BDT: this.getBDT_Value
                    };
                    if (!o[this.selectedCountryCurrency]) {
                        this.error = "Exchange rate not found", this.convertedAmount = null;
                        return
                    }
                    this.convertedAmount = this.feexIt.amount * o[this.selectedCountryCurrency], this.error = null
                } catch {
                    this.error = "Error converting currency", this.convertedAmount = null
                }
            },
            updateFeexItMobile() {
                this.feexIt.mobile = this.selectedPhoneCode + this.mobileValue
            },
            updateCountryDescription() {
                const o = this.getCountryISOCode.find(t => t.value === this.feexIt.cardhisocountrycode);
                this.countryDes = o ? o.description : ""
            },
            doCopy() {
                this.copyTextToClipboard(this.copyel), this.isCopy = !0
            },
            copyTextToClipboard(o) {
                const t = document.createElement("textarea");
                t.value = o, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
            },
            sumbitFormBtc() {
                this.store.addfund(this.form0)
            },
            sumbitFormDog() {
                this.store.addfund(this.form1)
            },
            sumbitFormLtc() {
                this.store.addfund(this.form2)
            },
            sumbitFormEth() {
                this.store.addfund(this.form3)
            },
            sumbitFormUSDTERC20() {
                this.store.addfund(this.form4)
            },
            sumbitFormUSDTTRC20() {
                this.store.addfund(this.form5)
            },
            sumbitFormUSDTBEP20() {
                this.store.addfund(this.form14), console.log(this.form14)
            },
            sumbitFormXRP() {
                this.store.addfund(this.form6)
            },
            sumbitFormTRX() {
                this.store.addfund(this.form7)
            },
            sumbitFormBNB() {
                this.store.addfund(this.form8)
            },
            sumbitFormBUSD() {
                this.store.addfund(this.form9)
            },
            makePaymentiaUpi() {
                this.store.addfund(this.upi)
            },
            mpesaSubmit() {
                this.store.addfund(this.mpesaform)
            },
            pay4workSubmit() {
                this.store.addfund(this.pay4workform).then(o => {
                    this.response = o, this.response.message.length == 0 && (this.response.page.paymentlink !== "" || typeof this.response.page.paymentlink < "u") && (window.location.href = this.response.page.paymentlink)
                })
            },
            sumbitFormNowBtc() {
                this.store.addfund(this.form0now).then(o => {
                    this.response = o, this.response.message.length == 0 && (this.response.page.invoicelink !== "" || typeof this.response.page.invoicelink < "u") && window.open(this.response.page.invoicelink, "_blank")
                })
            },
            sumbitFormNowDog() {
                this.store.addfund(this.form1now).then(o => {
                    this.response = o, this.response.message.length == 0 && (this.response.page.invoicelink !== "" || typeof this.response.page.invoicelink < "u") && window.open(this.response.page.invoicelink, "_blank")
                })
            },
            sumbitFormNowLtc() {
                this.store.addfund(this.form2now).then(o => {
                    this.response = o, this.response.message.length == 0 && (this.response.page.invoicelink !== "" || typeof this.response.page.invoicelink < "u") && window.open(this.response.page.invoicelink, "_blank")
                })
            },
            sumbitFormnowEth() {
                this.store.addfund(this.form3now).then(o => {
                    this.response = o, this.response.message.length == 0 && (this.response.page.invoicelink !== "" || typeof this.response.page.invoicelink < "u") && window.open(this.response.page.invoicelink, "_blank")
                })
            },
            sumbitFormNowUSDTERC20() {
                this.store.addfund(this.form4now).then(o => {
                    this.response = o, this.response.message.length == 0 && (this.response.page.invoicelink !== "" || typeof this.response.page.invoicelink < "u") && window.open(this.response.page.invoicelink, "_blank")
                })
            },
            sumbitFormNowUSDTTRC20() {
                this.store.addfund(this.form5now).then(o => {
                    this.response = o, this.response.message.length == 0 && (this.response.page.invoicelink !== "" || typeof this.response.page.invoicelink < "u") && window.open(this.response.page.invoicelink, "_blank")
                })
            },
            sumbitFormNowUSDTBEP20() {
                this.store.addfund(this.form14now).then(o => {
                    this.response = o, this.response.message.length == 0 && (this.response.page.invoicelink !== "" || typeof this.response.page.invoicelink < "u") && window.open(this.response.page.invoicelink, "_blank")
                })
            },
            sumbitFormNowXRP() {
                this.store.addfund(this.form6now).then(o => {
                    this.response = o, this.response.message.length == 0 && (this.response.page.invoicelink !== "" || typeof this.response.page.invoicelink < "u") && window.open(this.response.page.invoicelink, "_blank")
                })
            },
            sumbitFormNowTRX() {
                this.store.addfund(this.form7now).then(o => {
                    this.response = o, this.response.message.length == 0 && (this.response.page.invoicelink !== "" || typeof this.response.page.invoicelink < "u") && window.open(this.response.page.invoicelink, "_blank")
                })
            },
            sumbitFormNowBNB() {
                this.store.addfund(this.form8now).then(o => {
                    this.response = o, this.response.message.length == 0 && (this.response.page.invoicelink !== "" || typeof this.response.page.invoicelink < "u") && window.open(this.response.page.invoicelink, "_blank")
                })
            },
            sumbitFormNowBUSD() {
                this.store.addfund(this.form9now).then(o => {
                    this.response = o, this.response.message.length == 0 && (this.response.page.invoicelink !== "" || typeof this.response.page.invoicelink < "u") && window.open(this.response.page.invoicelink, "_blank")
                })
            },
            generateQRCode() {
                this.address && k.toDataURL(this.address).then(o => {
                    this.qrcodeDataUrl = o
                }).catch(o => {
                    o && this.errorMsg == "Something went wrong, check if you are logged in!"
                })
            },
            triggerDeluxe() {
                this.store.addfund(this.deluxue_upi), setTimeout(() => {
                    this.deluxeStatus === "Success" ? window.location.href = this.deluxeredirect : this.showDeluxe = !1
                }, 1e3)
            },
            feexItPay() {
                this.store.addfund(this.feexIt).then(o => {
                    this.response = o, (this.response.page.feexit != null || this.response.page.feexit != "") && (this.decodedHtml = atob(this.response.page.feexit.data), this.decodedHtmlis = !0, document.open(), document.write(this.decodedHtml), document.close())
                })
            }
        }
    },
    ee = {
        class: "bg-white px-6 py-6 rounded-lg mt-2"
    },
    te = {
        class: "flex justify-center"
    },
    se = {
        class: "max-w-xl w-full"
    },
    oe = {
        class: "flex justify-center mb-5 mt-5"
    },
    ne = ["src"],
    le = {
        class: "text-red-500 font-medium block text-center"
    },
    ie = {
        class: "text-center mb-4"
    },
    de = {
        class: "font-semibold"
    },
    re = {
        class: "font-semibold"
    },
    ue = {
        class: "font-semibold"
    },
    ae = {
        class: "flex items-center justify-center w-full mb-5"
    },
    ce = {
        for: "toogleA",
        class: "flex items-center cursor-pointer"
    },
    me = {
        class: "relative"
    },
    pe = e("div", {
        class: "w-10 h-4 bg-gray-200 rounded-full shadow-inner"
    }, null, -1),
    fe = e("div", {
        class: "dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"
    }, null, -1),
    he = e("div", {
        class: "w-full bg-[#f3f4f6] rounded-md px-3 py-3 mb-5 text-[13px]"
    }, [e("p", null, [e("strong", null, "1. Without Amount:"), f(" QR code will only have wallet address")]), e("p", null, [e("strong", null, "2. With Amount:"), f(" QR code will have both wallet address & amount")]), e("div", {
        class: "mt-2 text-[12px] bg-[#e7e9ec] px-3 py-3 rounded-md leading-[1.2]"
    }, [e("strong", null, "Please Note:"), f(" Some wallets only support wallet address, you have to enter the amount manually, but some wallets support both wallet address and amount, you can chose any option which suits you. ")])], -1),
    xe = {
        key: 0,
        class: "bx bx-check-double text-xl"
    },
    be = {
        key: 1,
        class: "bx bx-copy text-xl"
    },
    ge = {
        class: "flex justify-center mt-5"
    },
    we = {
        class: "max-w-4xl w-full text-center"
    },
    ye = {
        class: "text-[#555555] text-[13px]"
    },
    _e = {
        key: 1,
        class: "flex justify-center mb-4"
    },
    ve = {
        class: "w-full max-w-3xl"
    },
    ke = {
        class: "bg-[#d6ffd6] border border-[#35ab35] py-3 px-5 rounded-lg text-[#35ab35] text-center"
    },
    Ce = e("div", {
        class: "flex justify-center mt-3"
    }, [e("a", {
        href: "/deposit",
        class: "px-[20px] py-[10px] rounded-lg bg-[#ECC762] uppercase font-semibold inline-flex items-center justify-center transition-all hover:opacity-90"
    }, " Go Back")], -1),
    Se = {
        class: "text-red-500 font-medium block text-center"
    },
    Ue = {
        class: "text-red-500 font-medium block text-center"
    },
    Te = {
        class: "text-red-500 font-medium block text-center"
    },
    De = {
        class: "flex flex-wrap -mx-3 mt-3"
    },
    Ae = {
        class: "w-full lg:w-3/12 2xl:w-2/12 px-3 my-3"
    },
    Fe = {
        class: "w-full bg-black p-3 rounded-lg"
    },
    Ie = e("p", {
        class: "text-white block mb-2 mt-1 uppercase"
    }, "Select Payment Type:", -1),
    Re = ["onClick"],
    Ee = {
        class: "w-full lg:w-9/12 2xl:w-9/12 px-3 my-3"
    },
    Be = {
        class: "bg-[#eee] py-4 px-6 rounded-lg"
    },
    Pe = {
        class: "flex flex-wrap -mx-3 mt-3"
    },
    Ne = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    Ve = {
        class: "bg-[#F7931A] p-4 rounded-lg flex items-center"
    },
    je = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: T,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    Oe = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    Le = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "Bitcoin", -1),
    Me = {
        class: ""
    },
    Xe = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    Ye = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    qe = {
        class: "bg-[#007B7B] p-4 rounded-lg flex items-center"
    },
    Ge = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: D,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    He = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    Je = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "TETHER TRC 20", -1),
    Qe = {
        class: ""
    },
    We = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    ze = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    Ke = {
        class: "bg-[#007B7B] p-4 rounded-lg flex items-center"
    },
    Ze = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: P,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    $e = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    et = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "TETHER ERC 20", -1),
    tt = {
        class: ""
    },
    st = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    ot = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    nt = {
        class: "bg-[#007B7B] p-4 rounded-lg flex items-center"
    },
    lt = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: A,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    it = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    dt = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "USDT BEP 20", -1),
    rt = {
        class: ""
    },
    ut = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    at = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    ct = {
        class: "bg-[#2F3030] p-4 rounded-lg flex items-center"
    },
    mt = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: F,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    pt = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    ft = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "Ethereum", -1),
    ht = {
        class: ""
    },
    xt = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    bt = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    gt = {
        class: "bg-[#BA9F33] p-4 rounded-lg flex items-center"
    },
    wt = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: I,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    yt = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    _t = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "Doge Coin", -1),
    vt = {
        class: ""
    },
    kt = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    Ct = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    St = {
        class: "bg-[#345D9D] p-4 rounded-lg flex items-center"
    },
    Ut = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: R,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    Tt = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    Dt = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "Lite Coin", -1),
    At = {
        class: ""
    },
    Ft = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    It = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    Rt = {
        class: "bg-[#000] p-4 rounded-lg flex items-center"
    },
    Et = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: E,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    Bt = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    Pt = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "XRP", -1),
    Nt = {
        class: ""
    },
    Vt = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    jt = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    Ot = {
        class: "bg-[#ED0023] p-4 rounded-lg flex items-center"
    },
    Lt = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: B,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    Mt = {
        class: "w-[calc(100%-92px)]"
    },
    Xt = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "Tron", -1),
    Yt = {
        class: ""
    },
    qt = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    Gt = {
        class: "bg-[#eee] p-4 rounded-lg"
    },
    Ht = e("div", {
        class: "flex justify-center pt-5"
    }, [e("h4", {
        class: "uppercase text-xl font-semibold"
    }, "Pay Using Feex It Payment Gateway")], -1),
    Jt = {
        class: "bg-[#eee] pt-0 p-0 md:p-8 lg:p-8 rounded-lg flex justify-center"
    },
    Qt = {
        class: "w-full 2xl:w-6/12 px-3"
    },
    Wt = {
        class: "flex flex-wrap -mx-3 mt-3"
    },
    zt = e("div", {
        class: "w-full 2xl:w-6/12 px-3 my-3"
    }, null, -1),
    Kt = {
        class: "w-full flex px-3 my-3"
    },
    Zt = {
        class: "h-[45px] w-[51px] pr-0 flex items-center border-none rounded-lg rounded-r-none bg-white px-3"
    },
    $t = {
        key: 0,
        class: "flex"
    },
    es = e("img", {
        src: W,
        class: "w-[28px] h-[28px]",
        alt: "INR"
    }, null, -1),
    ts = [es],
    ss = {
        key: 1,
        class: "flex"
    },
    os = e("img", {
        src: z,
        class: "w-[28px] h-[28px]",
        alt: "USD"
    }, null, -1),
    ns = [os],
    ls = {
        key: 2,
        class: "flex"
    },
    is = e("img", {
        src: K,
        class: "w-[28px] h-[28px]",
        alt: "BDT"
    }, null, -1),
    ds = [is],
    rs = {
        key: 3,
        class: "flex"
    },
    us = e("img", {
        src: Z,
        class: "w-[28px] h-[28px]",
        alt: "No Currency"
    }, null, -1),
    as = [us],
    cs = {
        class: "w-[calc(100%-51px)]"
    },
    ms = e("option", {
        value: "",
        selected: "",
        disabled: ""
    }, "-- Select Currency --", -1),
    ps = ["value"],
    fs = {
        class: "w-full"
    },
    hs = e("option", {
        value: "",
        selected: "",
        disabled: ""
    }, "-- Bank --", -1),
    xs = ["value"],
    bs = {
        key: 0,
        class: "w-full mt-3 mb-6"
    },
    gs = {
        class: "mt-5"
    },
    ws = {
        class: "font-semibold"
    },
    ys = {
        class: "text-[#bf953f]"
    },
    _s = {
        class: "w-full mb-6 mt-3"
    },
    vs = {
        class: "mt-5"
    },
    ks = {
        key: 0,
        class: "font-semibold"
    },
    Cs = {
        class: "text-[#bf953f]"
    },
    Ss = {
        class: "w-full"
    },
    Us = {
        class: "flex flex-wrap -mx-3 mt-3"
    },
    Ts = {
        class: "w-full 2xl:w-4/12 px-3 my-3"
    },
    Ds = e("option", {
        value: "",
        disabled: "",
        selected: ""
    }, "Expiry Year", -1),
    As = ["value"],
    Fs = {
        class: "w-full 2xl:w-4/12 px-3 my-3"
    },
    Is = e("option", {
        value: "",
        disabled: "",
        selected: ""
    }, "Expiry month", -1),
    Rs = ["value"],
    Es = {
        class: "w-full 2xl:w-4/12 px-3 my-3"
    },
    Bs = e("div", {
        class: "h-[1px] w-full bg-gray-300 mb-3"
    }, null, -1),
    Ps = {
        class: "flex flex-wrap -mx-3"
    },
    Ns = {
        class: "w-full 2xl:w-6/12 px-3 my-3"
    },
    Vs = {
        class: "w-full 2xl:w-6/12 px-3 my-3"
    },
    js = e("div", {
        class: "h-[1px] w-full bg-gray-300 mb-3"
    }, null, -1),
    Os = {
        class: "flex flex-wrap -mx-3"
    },
    Ls = {
        class: "w-full 2xl:w-6/12 px-3 my-3"
    },
    Ms = {
        class: "w-full 2xl:w-6/12 px-3 my-3"
    },
    Xs = {
        class: "w-full mb-3"
    },
    Ys = e("div", {
        class: "h-[1px] w-full bg-gray-300 mt-6 mb-3"
    }, null, -1),
    qs = {
        class: "flex flex-wrap -mx-3"
    },
    Gs = {
        class: "w-full 2xl:w-6/12 px-3 my-3"
    },
    Hs = {
        class: "w-full 2xl:w-6/12 px-3 my-3"
    },
    Js = {
        class: "flex"
    },
    Qs = {
        class: "w-[70px] rounded-tl-lg rounded-bl-lg bg-gray-300",
        disabled: ""
    },
    Ws = e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] mt-3 h-[40px] w-full rounded-lg text-[16px] uppercase flex items-center justify-center add-submit mr-1"
    }, "Proceed To Add Fund ", -1),
    zs = {
        class: "bg-[#eee] p-4 rounded-lg"
    },
    Ks = e("div", {
        class: "flex justify-center pt-5"
    }, [e("h4", {
        class: "uppercase text-xl font-semibold"
    }, "Pay Using M-PESA Payment Gateway")], -1),
    Zs = {
        class: "bg-[#eee] pt-5 p-0 md:p-8 lg:p-8 rounded-lg flex justify-center"
    },
    $s = {
        class: "w-full 2xl:w-6/12 px-3"
    },
    eo = {
        class: "flex flex-wrap -mx-3 mt-3"
    },
    to = {
        class: "w-full 2xl:w-6/12 px-3 my-3 relative"
    },
    so = {
        class: "flex"
    },
    oo = e("span", {
        class: "h-[45px] bg-gray-200 rounded-l-lg flex items-center px-3"
    }, "+254", -1),
    no = {
        class: "w-full 2xl:w-6/12 px-3 my-3"
    },
    lo = e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] mt-3 h-[40px] w-full rounded-lg text-[16px] uppercase flex items-center justify-center add-submit mr-1"
    }, "Proceed To Add Fund ", -1),
    io = {
        class: "flex justify-center"
    },
    ro = {
        class: "bg-[#eee] p-4 rounded-lg"
    },
    uo = e("div", {
        class: "flex justify-center pt-5"
    }, [e("h4", {
        class: "uppercase text-xl font-semibold"
    }, "PAY USING CREDIT / DEBIT CARD")], -1),
    ao = {
        class: "bg-[#eee] pt-5 p-0 md:p-8 lg:p-8 rounded-lg flex justify-center"
    },
    co = {
        class: "w-full 2xl:w-6/12 px-3"
    },
    mo = {
        class: "flex flex-wrap -mx-3 mt-3"
    },
    po = {
        class: "w-full 2xl:w-12/12 px-3 my-3"
    },
    fo = e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] mt-3 h-[40px] w-full rounded-lg text-[16px] uppercase flex items-center justify-center add-submit mr-1"
    }, "Proceed To Add Fund ", -1),
    ho = {
        class: "flex justify-center"
    },
    xo = {
        class: "bg-[#eee] py-4 px-6 rounded-lg"
    },
    bo = {
        class: "flex justify-center"
    },
    go = {
        class: "flex justify-center"
    },
    wo = {
        class: "flex justify-center"
    },
    yo = {
        class: "flex flex-wrap -mx-3 mt-3"
    },
    _o = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    vo = {
        class: "bg-[#F7931A] p-4 rounded-lg flex items-center"
    },
    ko = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: T,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    Co = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    So = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "Bitcoin", -1),
    Uo = {
        class: ""
    },
    To = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    Do = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    Ao = {
        class: "bg-[#007B7B] p-4 rounded-lg flex items-center"
    },
    Fo = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: D,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    Io = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    Ro = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "USDT.TRC20", -1),
    Eo = {
        class: ""
    },
    Bo = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    Po = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    No = {
        class: "bg-[#007B7B] p-4 rounded-lg flex items-center"
    },
    Vo = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: P,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    jo = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    Oo = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "USDT.ERC20", -1),
    Lo = {
        class: ""
    },
    Mo = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    Xo = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    Yo = {
        class: "bg-[#007B7B] p-4 rounded-lg flex items-center"
    },
    qo = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: A,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    Go = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    Ho = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "USDT.BEP20 (USDTBSC)", -1),
    Jo = {
        class: ""
    },
    Qo = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    Wo = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    zo = {
        class: "bg-[#2F3030] p-4 rounded-lg flex items-center"
    },
    Ko = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: F,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    Zo = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    $o = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "Ethereum", -1),
    en = {
        class: ""
    },
    tn = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    sn = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    on = {
        class: "bg-[#BA9F33] p-4 rounded-lg flex items-center"
    },
    nn = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: I,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    ln = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    dn = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "Doge Coin", -1),
    rn = {
        class: ""
    },
    un = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    an = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    cn = {
        class: "bg-[#345D9D] p-4 rounded-lg flex items-center"
    },
    mn = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: R,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    pn = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    fn = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "Lite Coin", -1),
    hn = {
        class: ""
    },
    xn = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    bn = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    gn = {
        class: "bg-[#000] p-4 rounded-lg flex items-center"
    },
    wn = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: E,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    yn = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    _n = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "XRP", -1),
    vn = {
        class: ""
    },
    kn = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    Cn = {
        class: "w-full xl:w-1/2 2xl:w-4/12 px-3 my-3"
    },
    Sn = {
        class: "bg-[#ED0023] p-4 rounded-lg flex items-center"
    },
    Un = e("div", {
        class: "w-14 lg:w-20 mr-3"
    }, [e("img", {
        src: B,
        alt: "",
        class: "w-full fund-ico",
        draggable: "false"
    })], -1),
    Tn = {
        class: "w-[calc(100%-56px)] lg:w-[calc(100%-92px)]"
    },
    Dn = e("span", {
        class: "uppercase font-semibold mb-1 block text-white fund-title text-lg"
    }, "Tron", -1),
    An = {
        class: ""
    },
    Fn = e("div", {
        class: "flex mt-3"
    }, [e("button", {
        type: "submit",
        class: "bg-[#111] text-[#fff] h-[40px] w-[100%] rounded-lg text-[16px] uppercase flex items-center justify-center add-submit"
    }, " Add Fund ")], -1),
    In = {
        class: "flex justify-center"
    },
    Rn = {
        key: 0,
        class: "block-loader"
    };

function En(o, t, h, g, n, l) {
    const N = O,
        V = L,
        c = q("message");
    return u(), r("div", null, [e("div", ee, [a(N, {
        title: "Deposit",
        link: "/reports/deposit-fund-report",
        linktext: "View Deposit Fund Report"
    }), o.response.wizard == 2 ? (u(), r(x, {
        key: 0
    }, [e("div", te, [e("div", se, [e("div", oe, [e("img", {
        src: n.qrcodeDataUrl,
        alt: "QR Code",
        class: "w-[150px]"
    }, null, 8, ne), e("p", le, p(n.errorMsg), 1)]), e("div", ie, [e("p", null, [f(" USD Debit Amount: "), e("span", de, p(l.responseData.usdfundamount), 1), f(" | " + p(l.responseData.cointype) + " Debit Amount: ", 1), e("span", re, p(l.usdAmount), 1)]), e("p", null, [f(" Please send exactly "), e("span", ue, p(l.usdAmount) + " " + p(l.responseData.cointype), 1), f(" to ")])]), e("div", null, [e("div", ae, [e("label", ce, [e("button", {
        class: _(["mr-4 depo px-3 py-[2px] rounded-full text-[#000] font-medium", {
            "depo-active": !n.isChangeAmtType
        }])
    }, " Without Amount ", 2), e("div", me, [i(e("input", {
        "onUpdate:modelValue": t[0] || (t[0] = s => n.isChangeAmtType = s),
        id: "toogleA",
        type: "checkbox",
        class: "sr-only",
        onChange: t[1] || (t[1] = (...s) => l.changeAmtType && l.changeAmtType(...s))
    }, null, 544), [
        [G, n.isChangeAmtType]
    ]), pe, fe]), e("button", {
        class: _(["ml-4 depo px-3 py-[2px] rounded-full text-[#000] font-medium", {
            "depo-active": n.isChangeAmtType
        }])
    }, " With Amount ", 2)])]), he]), e("form", {
        onSubmit: t[4] || (t[4] = m(() => {}, ["prevent"])),
        action: ""
    }, [e("div", {
        class: _(["flex", {
            "copiped-true": n.isCopy == !0
        }])
    }, [i(e("input", {
        type: "text",
        "onUpdate:modelValue": t[2] || (t[2] = s => n.copyel = s),
        class: "w-full rounded-lg rounded-r-none h-[45px] outline-none shadow-none border border-[#ECC762] bg-gray-100",
        disabled: ""
    }, null, 512), [
        [d, n.copyel]
    ]), e("button", {
        onClick: t[3] || (t[3] = (...s) => l.doCopy && l.doCopy(...s)),
        type: "submit",
        class: "bg-[#ECC762] text-[#111] w-[50px] rounded-lg rounded-l-none text-xl flex items-center justify-center add-submit"
    }, [n.isCopy == !0 ? (u(), r("i", xe)) : (u(), r("i", be))])], 2)], 32)])]), e("div", ge, [e("div", we, [e("p", ye, [f(" The transferred amount will be credited to D Wallet, subject to potential fluctuations in the cryptocurrency market. It may take a few minutes to complete the transaction, depending upon the blockchain network. For transaction status please check "), a(V, {
        to: "/reports/deposit-fund-report",
        class: "text-[#b8903d] underline"
    }, {
        default: H(() => [f("Report > Deposit Fund Report")]),
        _: 1
    }), f(". ")])])])], 64)) : b("", !0), o.response.wizard == 0 ? (u(), r("div", _e, [e("div", ve, [e("div", ke, p(l.mpesaSucccess), 1), Ce])])) : b("", !0), o.response.wizard == 1 ? (u(), r(x, {
        key: 2
    }, [e("p", Se, p(l.errorMessage.usdfundamount), 1), e("p", Ue, p(o.response.message.fail), 1), e("p", Te, p(l.errorMessage.address), 1), e("div", De, [e("div", Ae, [e("div", Fe, [Ie, (u(!0), r(x, null, w(l.filteredTabs, (s, j) => (u(), r("button", {
        key: j,
        onClick: Bn => n.activeTab = s,
        class: _(["bg-[#3A3A3A] text-left uppercase font-semibold px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-800 focus:outline-none rounded mb-3 w-full", {
            "active-type": n.activeTab === s
        }])
    }, p(s), 11, Re))), 128))])]), e("div", Ee, [i(e("div", null, [e("div", Be, [e("div", Pe, [e("div", Ne, [e("div", Ve, [je, e("div", Oe, [Le, e("div", null, [e("form", {
        onSubmit: t[6] || (t[6] = m((...s) => l.sumbitFormBtc && l.sumbitFormBtc(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", Me, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[5] || (t[5] = s => n.form0.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form0.usdfundamount]
    ]), Xe])], 32)])])])]), e("div", Ye, [e("div", qe, [Ge, e("div", He, [Je, e("div", null, [e("form", {
        onSubmit: t[8] || (t[8] = m((...s) => l.sumbitFormUSDTTRC20 && l.sumbitFormUSDTTRC20(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", Qe, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[7] || (t[7] = s => n.form5.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form5.usdfundamount]
    ]), We])], 32)])])])]), e("div", ze, [e("div", Ke, [Ze, e("div", $e, [et, e("div", null, [e("form", {
        onSubmit: t[10] || (t[10] = m((...s) => l.sumbitFormUSDTERC20 && l.sumbitFormUSDTERC20(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", tt, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[9] || (t[9] = s => n.form4.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form4.usdfundamount]
    ]), st])], 32)])])])]), e("div", ot, [e("div", nt, [lt, e("div", it, [dt, e("div", null, [e("form", {
        onSubmit: t[12] || (t[12] = m((...s) => l.sumbitFormUSDTBEP20 && l.sumbitFormUSDTBEP20(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", rt, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[11] || (t[11] = s => n.form14.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form14.usdfundamount]
    ]), ut])], 32)])])])]), e("div", at, [e("div", ct, [mt, e("div", pt, [ft, e("div", null, [e("form", {
        onSubmit: t[14] || (t[14] = m((...s) => l.sumbitFormEth && l.sumbitFormEth(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", ht, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[13] || (t[13] = s => n.form3.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form3.usdfundamount]
    ]), xt])], 32)])])])]), e("div", bt, [e("div", gt, [wt, e("div", yt, [_t, e("div", null, [e("form", {
        onSubmit: t[16] || (t[16] = m((...s) => l.sumbitFormDog && l.sumbitFormDog(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", vt, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[15] || (t[15] = s => n.form1.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form1.usdfundamount]
    ]), kt])], 32)])])])]), e("div", Ct, [e("div", St, [Ut, e("div", Tt, [Dt, e("div", null, [e("form", {
        onSubmit: t[18] || (t[18] = m((...s) => l.sumbitFormLtc && l.sumbitFormLtc(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", At, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[17] || (t[17] = s => n.form2.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form2.usdfundamount]
    ]), Ft])], 32)])])])]), e("div", It, [e("div", Rt, [Et, e("div", Bt, [Pt, e("div", null, [e("form", {
        onSubmit: t[20] || (t[20] = m((...s) => l.sumbitFormXRP && l.sumbitFormXRP(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", Nt, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[19] || (t[19] = s => n.form6.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form6.usdfundamount]
    ]), Vt])], 32)])])])]), e("div", jt, [e("div", Ot, [Lt, e("div", Mt, [Xt, e("div", null, [e("form", {
        onSubmit: t[22] || (t[22] = m((...s) => l.sumbitFormTRX && l.sumbitFormTRX(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", Yt, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[21] || (t[21] = s => n.form7.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form7.usdfundamount]
    ]), qt])], 32)])])])])])])], 512), [
        [y, n.activeTab === "Cryptocurrency (Gateway 1)"]
    ]), i(e("div", null, [e("div", Gt, [Ht, e("div", Jt, [e("div", Qt, [e("form", {
        onSubmit: t[41] || (t[41] = m((...s) => l.feexItPay && l.feexItPay(...s), ["prevent"]))
    }, [e("div", Wt, [zt, e("div", Kt, [e("div", Zt, [n.selectedCountryCurrency === "INR" ? (u(), r("div", $t, ts)) : n.selectedCountryCurrency === "USD" ? (u(), r("div", ss, ns)) : n.selectedCountryCurrency === "BDT" ? (u(), r("div", ls, ds)) : (u(), r("div", rs, as))]), e("div", cs, [i(e("select", {
        name: "country",
        id: "",
        class: "h-[45px] block w-full border-none rounded-lg rounded-l-none",
        "onUpdate:modelValue": t[23] || (t[23] = s => n.selectedCountry = s),
        onChange: t[24] || (t[24] = (...s) => l.convert && l.convert(...s))
    }, [ms, (u(!0), r(x, null, w(n.countries, s => (u(), r("option", {
        key: s.iso_code,
        value: s.iso_code
    }, p(s.currency), 9, ps))), 128))], 544), [
        [v, n.selectedCountry]
    ])])]), a(c, {
        type: "error",
        source: o.source,
        target: "cardhisocountrycode"
    }, null, 8, ["source"])]), e("div", fs, [l.showBankCodeSelect ? i((u(), r("select", {
        key: 0,
        class: "h-[45px] block w-full border-none rounded-lg mb-6 mt-3",
        "onUpdate:modelValue": t[25] || (t[25] = s => n.selectedBankCode = s)
    }, [hs, (u(!0), r(x, null, w(l.bankCodes, s => (u(), r("option", {
        key: s.value,
        value: s.value
    }, p(s.label), 9, xs))), 128))], 512)), [
        [v, n.selectedBankCode]
    ]) : b("", !0)]), n.getLocate == "Asia" ? (u(), r("div", bs, [i(e("input", {
        name: "amount",
        type: "text",
        placeholder: "Amount in USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border text-left text-3xl",
        "onUpdate:modelValue": t[26] || (t[26] = s => n.feexIt.amount = s),
        onInput: t[27] || (t[27] = (...s) => l.convert && l.convert(...s)),
        autocomplete: "off"
    }, null, 544), [
        [d, n.feexIt.amount]
    ]), a(c, {
        type: "error",
        source: o.source,
        target: "amount",
        class: "mt-3"
    }, null, 8, ["source"]), e("div", gs, [e("p", ws, [f("Converted from USD, Total Amount: "), e("span", ys, p(n.convertedAmount.toFixed(2)) + " " + p(n.selectedCountryCurrency), 1)])])])) : b("", !0), n.getLocate == "Other" ? (u(), r(x, {
        key: 1
    }, [e("div", _s, [i(e("input", {
        name: "amount",
        type: "text",
        placeholder: "Amount in USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border text-left text-3xl",
        onInput: t[28] || (t[28] = (...s) => l.convert && l.convert(...s)),
        "onUpdate:modelValue": t[29] || (t[29] = s => n.feexIt.amount = s),
        autocomplete: "off"
    }, null, 544), [
        [d, n.feexIt.amount]
    ]), a(c, {
        type: "error",
        source: o.source,
        target: "amount",
        class: "mt-3"
    }, null, 8, ["source"]), e("div", vs, [n.selectedCountryCurrency != "USD" ? (u(), r("p", ks, [f("Converted from USD, Total Amount: "), e("span", Cs, p(n.convertedAmount.toFixed(2)) + " " + p(n.selectedCountryCurrency), 1)])) : b("", !0)])]), e("div", Ss, [i(e("input", {
        name: "card-number",
        type: "text",
        placeholder: "Enter Card Number",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border text-left text-3xl",
        "onUpdate:modelValue": t[30] || (t[30] = s => n.feexIt.pan = s),
        maxlength: "16"
    }, null, 512), [
        [d, n.feexIt.pan]
    ]), a(c, {
        type: "error",
        source: o.source,
        target: "pan",
        class: "mt-3"
    }, null, 8, ["source"])]), e("div", Us, [e("div", Ts, [i(e("select", {
        name: "expiry-year",
        class: "h-[45px] block w-full border-none rounded-lg",
        "onUpdate:modelValue": t[31] || (t[31] = s => n.feexIt.expY = s)
    }, [Ds, (u(!0), r(x, null, w(l.creditCardExpiryYears, s => (u(), r("option", {
        key: s,
        value: s
    }, p(s), 9, As))), 128))], 512), [
        [v, n.feexIt.expY]
    ]), a(c, {
        type: "error",
        source: o.source,
        target: "expY",
        class: "mt-3"
    }, null, 8, ["source"])]), e("div", Fs, [i(e("select", {
        name: "expiry-year",
        class: "h-[45px] block w-full border-none rounded-lg",
        "onUpdate:modelValue": t[32] || (t[32] = s => n.feexIt.expM = s)
    }, [Is, (u(!0), r(x, null, w(l.months, s => (u(), r("option", {
        key: s.value,
        value: s.value
    }, p(s.label), 9, Rs))), 128))], 512), [
        [v, n.feexIt.expM]
    ]), a(c, {
        type: "error",
        source: o.source,
        target: "expM",
        class: "mt-3"
    }, null, 8, ["source"])]), e("div", Es, [i(e("input", {
        name: "cvc",
        type: "text",
        placeholder: "CVV/CVC",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border text-left text-3xl",
        "onUpdate:modelValue": t[33] || (t[33] = s => n.feexIt.cvv = s)
    }, null, 512), [
        [d, n.feexIt.cvv]
    ]), a(c, {
        type: "error",
        source: o.source,
        target: "cvv",
        class: "mt-3"
    }, null, 8, ["source"])])]), Bs, e("div", Ps, [e("div", Ns, [i(e("input", {
        name: "first-name",
        type: "text",
        placeholder: "First Name",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border text-left text-3xl",
        "onUpdate:modelValue": t[34] || (t[34] = s => n.feexIt.cardhfirstname = s)
    }, null, 512), [
        [d, n.feexIt.cardhfirstname]
    ]), a(c, {
        type: "error",
        source: o.source,
        target: "cardhfirstname",
        class: "mt-3"
    }, null, 8, ["source"])]), e("div", Vs, [i(e("input", {
        name: "last-name",
        type: "text",
        placeholder: "Last Name",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border text-left text-3xl",
        "onUpdate:modelValue": t[35] || (t[35] = s => n.feexIt.cardhlastname = s)
    }, null, 512), [
        [d, n.feexIt.cardhlastname]
    ]), a(c, {
        type: "error",
        source: o.source,
        target: "cardhlastname",
        class: "mt-3"
    }, null, 8, ["source"])])]), js, e("div", Os, [e("div", Ls, [i(e("input", {
        name: "state",
        type: "text",
        placeholder: "State",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border text-left text-3xl",
        "onUpdate:modelValue": t[36] || (t[36] = s => n.feexIt.cardhstate = s)
    }, null, 512), [
        [d, n.feexIt.cardhstate]
    ]), a(c, {
        type: "error",
        source: o.source,
        target: "cardhstate",
        class: "mt-3"
    }, null, 8, ["source"])]), e("div", Ms, [i(e("input", {
        name: "postal-code",
        type: "text",
        placeholder: "Postal Code",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border text-left text-3xl",
        "onUpdate:modelValue": t[37] || (t[37] = s => n.feexIt.cardhpostalcode = s)
    }, null, 512), [
        [d, n.feexIt.cardhpostalcode]
    ]), a(c, {
        type: "error",
        source: o.source,
        target: "cardhpostalcode",
        class: "mt-3"
    }, null, 8, ["source"])])]), e("div", Xs, [i(e("input", {
        name: "billing-address",
        type: "text",
        placeholder: "Billing Street Address",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border text-left text-3xl",
        "onUpdate:modelValue": t[38] || (t[38] = s => n.feexIt.cardhstreetaddress = s)
    }, null, 512), [
        [d, n.feexIt.cardhstreetaddress]
    ]), a(c, {
        type: "error",
        source: o.source,
        target: "cardhstreetaddress",
        class: "mt-3"
    }, null, 8, ["source"])]), Ys, e("div", qs, [e("div", Gs, [i(e("input", {
        name: "email",
        type: "email",
        placeholder: "Email",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border text-left text-3xl",
        "onUpdate:modelValue": t[39] || (t[39] = s => n.feexIt.email = s)
    }, null, 512), [
        [d, n.feexIt.email]
    ]), a(c, {
        type: "error",
        source: o.source,
        target: "email",
        class: "mt-3"
    }, null, 8, ["source"])]), e("div", Hs, [e("div", Js, [e("button", Qs, "+" + p(n.selectedPhoneCode), 1), i(e("input", {
        name: "mobile",
        type: "text",
        placeholder: "Phone Number",
        class: "w-full rounded-tl-none rounded-bl-none rounded-lg h-[45px] outline-none shadow-none no-border text-left text-3xl",
        "onUpdate:modelValue": t[40] || (t[40] = s => n.mobileValue = s)
    }, null, 512), [
        [d, n.mobileValue]
    ])]), a(c, {
        type: "error",
        source: o.source,
        target: "mobile",
        class: "mt-3"
    }, null, 8, ["source"])])])], 64)) : b("", !0), Ws], 32)])])])], 512), [
        [y, n.activeTab === "Pay Using Feex It"]
    ]), i(e("div", null, [e("div", zs, [Ks, e("div", Zs, [e("div", $s, [e("form", {
        onSubmit: t[44] || (t[44] = m((...s) => l.mpesaSubmit && l.mpesaSubmit(...s), ["prevent"]))
    }, [e("div", eo, [e("div", to, [e("div", so, [oo, i(e("input", {
        name: "mobile",
        id: "",
        class: "h-[45px] block w-full border-none rounded-r-lg",
        type: "text",
        placeholder: "Enter Mobile Number",
        "onUpdate:modelValue": t[42] || (t[42] = s => n.mpesaform.mobile = s)
    }, null, 512), [
        [d, n.mpesaform.mobile]
    ])]), a(c, {
        type: "error",
        source: o.source,
        target: "mobile"
    }, null, 8, ["source"])]), e("div", no, [i(e("input", {
        name: "amount",
        id: "",
        class: "h-[45px] block w-full border-none rounded-lg",
        type: "text",
        placeholder: "Enter Amount In USD",
        "onUpdate:modelValue": t[43] || (t[43] = s => n.mpesaform.amount = s)
    }, null, 512), [
        [d, n.mpesaform.amount]
    ]), a(c, {
        type: "error",
        source: o.source,
        target: "amount"
    }, null, 8, ["source"])])]), lo], 32), e("div", io, [a(c, {
        type: "error",
        source: o.source,
        target: "fail",
        class: "mt-3"
    }, null, 8, ["source"])])])])])], 512), [
        [y, n.activeTab === "Pay Using M-Pesa"]
    ]), i(e("div", null, [e("div", ro, [uo, e("div", ao, [e("div", co, [e("form", {
        onSubmit: t[46] || (t[46] = m((...s) => l.pay4workSubmit && l.pay4workSubmit(...s), ["prevent"]))
    }, [e("div", mo, [e("div", po, [i(e("input", {
        name: "amount",
        id: "",
        class: "h-[45px] block w-full border-none rounded-lg",
        type: "text",
        placeholder: "Enter Amount In USD",
        "onUpdate:modelValue": t[45] || (t[45] = s => n.pay4workform.amount = s)
    }, null, 512), [
        [d, n.pay4workform.amount]
    ]), a(c, {
        type: "error",
        source: o.source,
        target: "amount"
    }, null, 8, ["source"])])]), fo], 32), e("div", ho, [a(c, {
        type: "error",
        source: o.source,
        target: "fail",
        class: "mt-3"
    }, null, 8, ["source"])])])])])], 512), [
        [y, n.activeTab === "Credit/Debit Card"]
    ]), i(e("div", null, [e("div", xo, [e("div", bo, [a(c, {
        type: "error",
        source: o.source,
        target: "usdfundamount"
    }, null, 8, ["source"])]), e("div", go, [a(c, {
        type: "error",
        source: o.source,
        target: "address"
    }, null, 8, ["source"])]), e("div", wo, [a(c, {
        type: "error",
        source: o.source,
        target: "fail"
    }, null, 8, ["source"])]), e("div", yo, [e("div", _o, [e("div", vo, [ko, e("div", Co, [So, e("div", null, [e("form", {
        onSubmit: t[48] || (t[48] = m((...s) => l.sumbitFormNowBtc && l.sumbitFormNowBtc(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", Uo, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[47] || (t[47] = s => n.form0now.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form0now.usdfundamount]
    ]), To])], 32)])])])]), e("div", Do, [e("div", Ao, [Fo, e("div", Io, [Ro, e("div", null, [e("form", {
        onSubmit: t[50] || (t[50] = m((...s) => l.sumbitFormNowUSDTTRC20 && l.sumbitFormNowUSDTTRC20(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", Eo, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[49] || (t[49] = s => n.form5now.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form5now.usdfundamount]
    ]), Bo])], 32)])])])]), e("div", Po, [e("div", No, [Vo, e("div", jo, [Oo, e("div", null, [e("form", {
        onSubmit: t[52] || (t[52] = m((...s) => l.sumbitFormNowUSDTERC20 && l.sumbitFormNowUSDTERC20(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", Lo, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[51] || (t[51] = s => n.form4now.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form4now.usdfundamount]
    ]), Mo])], 32)])])])]), e("div", Xo, [e("div", Yo, [qo, e("div", Go, [Ho, e("div", null, [e("form", {
        onSubmit: t[54] || (t[54] = m((...s) => l.sumbitFormNowUSDTBEP20 && l.sumbitFormNowUSDTBEP20(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", Jo, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[53] || (t[53] = s => n.form14now.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form14now.usdfundamount]
    ]), Qo])], 32)])])])]), e("div", Wo, [e("div", zo, [Ko, e("div", Zo, [$o, e("div", null, [e("form", {
        onSubmit: t[56] || (t[56] = m((...s) => l.sumbitFormnowEth && l.sumbitFormnowEth(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", en, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[55] || (t[55] = s => n.form3now.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form3now.usdfundamount]
    ]), tn])], 32)])])])]), e("div", sn, [e("div", on, [nn, e("div", ln, [dn, e("div", null, [e("form", {
        onSubmit: t[58] || (t[58] = m((...s) => l.sumbitFormNowDog && l.sumbitFormNowDog(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", rn, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[57] || (t[57] = s => n.form1now.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form1now.usdfundamount]
    ]), un])], 32)])])])]), e("div", an, [e("div", cn, [mn, e("div", pn, [fn, e("div", null, [e("form", {
        onSubmit: t[60] || (t[60] = m((...s) => l.sumbitFormNowLtc && l.sumbitFormNowLtc(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", hn, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[59] || (t[59] = s => n.form2now.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form2now.usdfundamount]
    ]), xn])], 32)])])])]), e("div", bn, [e("div", gn, [wn, e("div", yn, [_n, e("div", null, [e("form", {
        onSubmit: t[62] || (t[62] = m((...s) => l.sumbitFormNowXRP && l.sumbitFormNowXRP(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", vn, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[61] || (t[61] = s => n.form6now.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form6now.usdfundamount]
    ]), kn])], 32)])])])]), e("div", Cn, [e("div", Sn, [Un, e("div", Tn, [Dn, e("div", null, [e("form", {
        onSubmit: t[64] || (t[64] = m((...s) => l.sumbitFormNowTRX && l.sumbitFormNowTRX(...s), ["prevent"])),
        action: "#",
        method: "POST"
    }, [e("div", An, [i(e("input", {
        type: "number",
        "onUpdate:modelValue": t[63] || (t[63] = s => n.form7now.usdfundamount = s),
        placeholder: "Amount In USD",
        class: "w-full rounded-lg h-[45px] outline-none shadow-none no-border"
    }, null, 512), [
        [d, n.form7now.usdfundamount]
    ]), Fn])], 32)])])])])])])], 512), [
        [y, n.activeTab === "CRYPTOCURRENCY (Gateway 2)"]
    ]), e("div", In, [n.loader === !0 ? (u(), r("div", Rn)) : b("", !0)])])])], 64)) : b("", !0)])])
}
const Gn = X($, [
    ["render", En]
]);
export {
    Gn as
    default
};