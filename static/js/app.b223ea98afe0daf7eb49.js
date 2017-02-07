webpackJsonp([1, 0], [function (e, t, a) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = a(7), r = i(s), c = a(45), o = i(c), n = a(26), l = i(n), m = a(28), p = i(m), d = a(30), u = i(d), g = a(31), f = i(g);
    a(25), r.default.use(o.default);
    var h = [{
        path: "/",
        component: l.default,
        children: [{path: "/goods", component: p.default}, {path: "/ratings", component: u.default}, {
            path: "/seller",
            component: f.default
        }]
    }], j = new o.default({linkActiveClass: "active", routes: h}), v = new r.default({router: j}).$mount("#app");
    j.push("/goods"), t.default = v
}, , , function (e, t, a) {
    a(22);
    var i = a(1)(a(50), a(42), null, null);
    e.exports = i.exports
}, function (e, t, a) {
    a(17);
    var i = a(1)(a(54), a(37), null, null);
    e.exports = i.exports
}, function (e, t, a) {
    a(19);
    var i = a(1)(a(59), a(39), null, null);
    e.exports = i.exports
}, function (e, t, a) {
    a(14);
    var i = a(1)(a(60), a(34), null, null);
    e.exports = i.exports
}, , function (e, t, a) {
    a(16);
    var i = a(1)(a(56), a(36), null, null);
    e.exports = i.exports
}, function (e, t) {
    "use strict";
    function a(e, t) {
        /(y+)/.test(t) && (t = t.replace(RegExp.$1, e.getFullYear()));
        var a = {
            "M+": e.getMonth() + 1,
            "d+": e.getDate(),
            "h+": e.getHours(),
            "m+": e.getMinutes(),
            "s+": e.getSeconds()
        };
        for (var s in a)if (new RegExp("(" + s + ")").test(t)) {
            var r = a[s] + "";
            t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? r : i(r))
        }
        return t
    }

    function i(e) {
        return ("00" + e).substr(e.length)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.formatDate = a
}, function (e, t) {
    e.exports = {
        seller: {
            name: "粥品香坊（回龙观）",
            description: "蜂鸟专送",
            deliveryTime: 38,
            score: 4.2,
            serviceScore: 4.1,
            foodScore: 4.3,
            rankRate: 69.2,
            minPrice: 20,
            deliveryPrice: 4,
            ratingCount: 24,
            sellCount: 90,
            bulletin: "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
            supports: [{type: 0, description: "在线支付满28减5"}, {type: 1, description: "VC无限橙果汁全场8折"}, {
                type: 2,
                description: "单人精彩套餐"
            }, {type: 3, description: "该商家支持发票,请下单写好发票抬头"}, {type: 4, description: "已加入“外卖保”计划,食品安全保障"}],
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
            pics: ["http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180", "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180", "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180", "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"],
            infos: ["该商家支持发票,请下单写好发票抬头", "品类:其他菜系,包子粥店", "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340", "营业时间:10:00-20:30"]
        },
        goods: [{
            name: "热销榜",
            type: -1,
            foods: [{
                name: "皮蛋瘦肉粥",
                price: 10,
                oldPrice: "",
                description: "咸粥",
                sellCount: 229,
                rating: 100,
                info: "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "很喜欢的粥",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 1,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "扁豆焖面",
                price: 14,
                oldPrice: "",
                description: "",
                sellCount: 188,
                rating: 96,
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 1,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                info: "",
                icon: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "葱花饼",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 124,
                rating: 85,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "没啥味道",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 1,
                    text: "很一般啊",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "牛肉馅饼",
                price: 14,
                oldPrice: "",
                description: "",
                sellCount: 114,
                rating: 91,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "难吃不推荐",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "招牌猪肉白菜锅贴/10个",
                price: 17,
                oldPrice: "",
                description: "",
                sellCount: 101,
                rating: 78,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "不脆,不好吃",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "南瓜粥",
                price: 9,
                oldPrice: "",
                description: "甜粥",
                sellCount: 91,
                rating: 100,
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "红豆薏米美肤粥",
                price: 12,
                oldPrice: "",
                description: "甜粥",
                sellCount: 86,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "八宝酱菜",
                price: 4,
                oldPrice: "",
                description: "",
                sellCount: 84,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "红枣山药糙米粥",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 81,
                rating: 91,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "糊塌子",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 80,
                rating: 93,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "单人精彩套餐",
            type: 2,
            foods: [{
                name: "红枣山药粥套餐",
                price: 29,
                oldPrice: 36,
                description: "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
                sellCount: 17,
                rating: 100,
                info: "",
                ratings: [{
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "冰爽饮品限时特惠",
            type: 1,
            foods: [{
                name: "VC无限橙果汁",
                price: 8,
                oldPrice: 10,
                description: "",
                sellCount: 15,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "还可以",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "精选热菜",
            type: -1,
            foods: [{
                name: "娃娃菜炖豆腐",
                price: 17,
                oldPrice: "",
                description: "",
                sellCount: 43,
                rating: 92,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "菜量还可以,味道还可以",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "手撕包菜",
                price: 16,
                oldPrice: "",
                description: "",
                sellCount: 29,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "香酥黄金鱼/3条",
                price: 11,
                oldPrice: "",
                description: "",
                sellCount: 15,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "爽口凉菜",
            type: -1,
            foods: [{
                name: "八宝酱菜",
                price: 4,
                oldPrice: "",
                description: "",
                sellCount: 84,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "拍黄瓜",
                price: 9,
                oldPrice: "",
                description: "",
                sellCount: 28,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "精选套餐",
            type: -1,
            foods: [{
                name: "红豆薏米粥套餐",
                price: 37,
                oldPrice: "",
                description: "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
                sellCount: 3,
                rating: 100,
                info: "",
                ratings: [{
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "皮蛋瘦肉粥套餐",
                price: 31,
                oldPrice: "",
                description: "",
                sellCount: 12,
                rating: 100,
                info: "",
                ratings: [{
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "果拼果汁",
            type: -1,
            foods: [{
                name: "蜜瓜圣女萝莉杯",
                price: 6,
                oldPrice: "",
                description: "",
                sellCount: 1,
                rating: "",
                info: "",
                ratings: [],
                icon: "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "加多宝",
                price: 6,
                oldPrice: "",
                description: "",
                sellCount: 7,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "VC无限橙果汁",
                price: 8,
                oldPrice: 10,
                description: "",
                sellCount: 15,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "还可以",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "小吃主食",
            type: -1,
            foods: [{
                name: "扁豆焖面",
                price: 14,
                oldPrice: "",
                description: "",
                sellCount: 188,
                rating: 96,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 1,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "葱花饼",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 124,
                rating: 85,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "没啥味道",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 1,
                    text: "很一般啊",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "牛肉馅饼",
                price: 14,
                oldPrice: "",
                description: "",
                sellCount: 114,
                rating: 91,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "难吃不推荐",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "招牌猪肉白菜锅贴/10个",
                price: 17,
                oldPrice: "",
                description: "",
                sellCount: 101,
                rating: 78,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "不脆,不好吃",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "糊塌子",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 80,
                rating: 93,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "特色粥品",
            type: -1,
            foods: [{
                name: "皮蛋瘦肉粥",
                price: 10,
                oldPrice: "",
                description: "咸粥",
                sellCount: 229,
                rating: 100,
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "很喜欢的粥",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 1,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "南瓜粥",
                price: 9,
                oldPrice: "",
                description: "甜粥",
                sellCount: 91,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "红豆薏米美肤粥",
                price: 12,
                oldPrice: "",
                description: "甜粥",
                sellCount: 86,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "红枣山药糙米粥",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 81,
                rating: 91,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "鲜蔬菌菇粥",
                price: 11,
                oldPrice: "",
                description: "咸粥",
                sellCount: 56,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {username: "2******3", rateTime: 1469271264e3, rateType: 0, text: ""}, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "田园蔬菜粥",
                price: 10,
                oldPrice: "",
                description: "咸粥",
                sellCount: 33,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }],
        ratings: [{
            username: "3******c",
            rateTime: 1469281964e3,
            deliveryTime: 30,
            score: 5,
            rateType: 0,
            text: "不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: ["南瓜粥", "皮蛋瘦肉粥", "扁豆焖面", "娃娃菜炖豆腐", "牛肉馅饼"]
        }, {
            username: "2******3",
            rateTime: 1469271264e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "服务态度不错",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: ["扁豆焖面"]
        }, {
            username: "3******b",
            rateTime: 1469261964e3,
            score: 3,
            rateType: 1,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "1******c",
            rateTime: 1469261864e3,
            deliveryTime: 20,
            score: 5,
            rateType: 0,
            text: "良心店铺",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "2******d",
            rateTime: 1469251264e3,
            deliveryTime: 10,
            score: 4,
            rateType: 0,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "9******0",
            rateTime: 1469241964e3,
            deliveryTime: 70,
            score: 1,
            rateType: 1,
            text: "送货速度蜗牛一样",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "d******c",
            rateTime: 1469231964e3,
            deliveryTime: 30,
            score: 5,
            rateType: 0,
            text: "很喜欢的粥店",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "2******3",
            rateTime: 1469221264e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "量给的还可以",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "3******8",
            rateTime: 1469211964e3,
            deliveryTime: "",
            score: 3,
            rateType: 1,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "a******a",
            rateTime: 1469201964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "孩子喜欢吃这家",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: ["南瓜粥"]
        }, {
            username: "3******3",
            rateTime: 1469191264e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "粥挺好吃的",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "t******b",
            rateTime: 1469181964e3,
            deliveryTime: "",
            score: 3,
            rateType: 1,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "f******c",
            rateTime: 1469171964e3,
            deliveryTime: 15,
            score: 5,
            rateType: 0,
            text: "送货速度很快",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "k******3",
            rateTime: 1469161264e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "u******b",
            rateTime: 1469151964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "下雨天给快递小哥点个赞",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "s******c",
            rateTime: 1469141964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "好",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "z******3",
            rateTime: 1469131264e3,
            deliveryTime: "",
            score: 5,
            rateType: 0,
            text: "吃了还想再吃",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "n******b",
            rateTime: 1469121964e3,
            deliveryTime: "",
            score: 3,
            rateType: 1,
            text: "发票开的不对",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "m******c",
            rateTime: 1469111964e3,
            deliveryTime: 30,
            score: 5,
            rateType: 0,
            text: "好吃",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "l******3",
            rateTime: 1469101264e3,
            deliveryTime: 40,
            score: 5,
            rateType: 0,
            text: "还不错吧",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "3******o",
            rateTime: 1469091964e3,
            deliveryTime: "",
            score: 2,
            rateType: 1,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "3******p",
            rateTime: 1469081964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "很喜欢的粥",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "o******k",
            rateTime: 1469071264e3,
            deliveryTime: "",
            score: 5,
            rateType: 0,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "k******b",
            rateTime: 1469061964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }]
    }
}, function (e, t) {
    e.exports = {
        seller: {
            name: "粥品香坊（回龙观）",
            description: "蜂鸟专送",
            deliveryTime: 38,
            score: 4.2,
            serviceScore: 4.1,
            foodScore: 4.3,
            rankRate: 69.2,
            minPrice: 20,
            deliveryPrice: 4,
            ratingCount: 24,
            sellCount: 90,
            bulletin: "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
            supports: [{type: 0, description: "在线支付满28减5"}, {type: 1, description: "VC无限橙果汁全场8折"}, {
                type: 2,
                description: "单人精彩套餐"
            }, {type: 3, description: "该商家支持发票,请下单写好发票抬头"}, {type: 4, description: "已加入“外卖保”计划,食品安全保障"}],
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
            pics: ["http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180", "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180", "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180", "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"],
            infos: ["该商家支持发票,请下单写好发票抬头", "品类:其他菜系,包子粥店", "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340", "营业时间:10:00-20:30"]
        },
        goods: [{
            name: "热销榜",
            type: -1,
            foods: [{
                name: "皮蛋瘦肉粥",
                price: 10,
                oldPrice: "",
                description: "咸粥",
                sellCount: 229,
                rating: 100,
                info: "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "很喜欢的粥",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 1,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "扁豆焖面",
                price: 14,
                oldPrice: "",
                description: "",
                sellCount: 188,
                rating: 96,
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 1,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                info: "",
                icon: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "葱花饼",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 124,
                rating: 85,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "没啥味道",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 1,
                    text: "很一般啊",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b", rateTime: 1469261964e3, rateType: 0,
                    text: "", avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "牛肉馅饼",
                price: 14,
                oldPrice: "",
                description: "",
                sellCount: 114,
                rating: 91,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "难吃不推荐",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "招牌猪肉白菜锅贴/10个",
                price: 17,
                oldPrice: "",
                description: "",
                sellCount: 101,
                rating: 78,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "不脆,不好吃",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "南瓜粥",
                price: 9,
                oldPrice: "",
                description: "甜粥",
                sellCount: 91,
                rating: 100,
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "红豆薏米美肤粥",
                price: 12,
                oldPrice: "",
                description: "甜粥",
                sellCount: 86,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "八宝酱菜",
                price: 4,
                oldPrice: "",
                description: "",
                sellCount: 84,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "红枣山药糙米粥",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 81,
                rating: 91,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "糊塌子",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 80,
                rating: 93,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "单人精彩套餐",
            type: 2,
            foods: [{
                name: "红枣山药粥套餐",
                price: 29,
                oldPrice: 36,
                description: "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
                sellCount: 17,
                rating: 100,
                info: "",
                ratings: [{
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "冰爽饮品限时特惠",
            type: 1,
            foods: [{
                name: "VC无限橙果汁",
                price: 8,
                oldPrice: 10,
                description: "",
                sellCount: 15,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "还可以",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "精选热菜",
            type: -1,
            foods: [{
                name: "娃娃菜炖豆腐",
                price: 17,
                oldPrice: "",
                description: "",
                sellCount: 43,
                rating: 92,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "菜量还可以,味道还可以",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "手撕包菜",
                price: 16,
                oldPrice: "",
                description: "",
                sellCount: 29,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "香酥黄金鱼/3条",
                price: 11,
                oldPrice: "",
                description: "",
                sellCount: 15,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "爽口凉菜",
            type: -1,
            foods: [{
                name: "八宝酱菜",
                price: 4,
                oldPrice: "",
                description: "",
                sellCount: 84,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "拍黄瓜",
                price: 9,
                oldPrice: "",
                description: "",
                sellCount: 28,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "精选套餐",
            type: -1,
            foods: [{
                name: "红豆薏米粥套餐",
                price: 37,
                oldPrice: "",
                description: "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
                sellCount: 3,
                rating: 100,
                info: "",
                ratings: [{
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "皮蛋瘦肉粥套餐",
                price: 31,
                oldPrice: "",
                description: "",
                sellCount: 12,
                rating: 100,
                info: "",
                ratings: [{
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "果拼果汁",
            type: -1,
            foods: [{
                name: "蜜瓜圣女萝莉杯",
                price: 6,
                oldPrice: "",
                description: "",
                sellCount: 1,
                rating: "",
                info: "",
                ratings: [],
                icon: "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "加多宝",
                price: 6,
                oldPrice: "",
                description: "",
                sellCount: 7,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "VC无限橙果汁",
                price: 8,
                oldPrice: 10,
                description: "",
                sellCount: 15,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "还可以",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "小吃主食",
            type: -1,
            foods: [{
                name: "扁豆焖面",
                price: 14,
                oldPrice: "",
                description: "",
                sellCount: 188,
                rating: 96,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 1,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "葱花饼",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 124,
                rating: 85,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "没啥味道",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 1,
                    text: "很一般啊",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "牛肉馅饼",
                price: 14,
                oldPrice: "",
                description: "",
                sellCount: 114,
                rating: 91,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "难吃不推荐",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "招牌猪肉白菜锅贴/10个",
                price: 17,
                oldPrice: "",
                description: "",
                sellCount: 101,
                rating: 78,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "不脆,不好吃",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "糊塌子",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 80,
                rating: 93,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "特色粥品",
            type: -1,
            foods: [{
                name: "皮蛋瘦肉粥",
                price: 10,
                oldPrice: "",
                description: "咸粥",
                sellCount: 229,
                rating: 100,
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "很喜欢的粥",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 1,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "南瓜粥",
                price: 9,
                oldPrice: "",
                description: "甜粥",
                sellCount: 91,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "红豆薏米美肤粥",
                price: 12,
                oldPrice: "",
                description: "甜粥",
                sellCount: 86,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "红枣山药糙米粥",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 81,
                rating: 91,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "鲜蔬菌菇粥",
                price: 11,
                oldPrice: "",
                description: "咸粥",
                sellCount: 56,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {username: "2******3", rateTime: 1469271264e3, rateType: 0, text: ""}, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "田园蔬菜粥",
                price: 10,
                oldPrice: "",
                description: "咸粥",
                sellCount: 33,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }],
        ratings: [{
            username: "3******c",
            rateTime: 1469281964e3,
            deliveryTime: 30,
            score: 5,
            rateType: 0,
            text: "不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: ["南瓜粥", "皮蛋瘦肉粥", "扁豆焖面", "娃娃菜炖豆腐", "牛肉馅饼"]
        }, {
            username: "2******3",
            rateTime: 1469271264e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "服务态度不错",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: ["扁豆焖面"]
        }, {
            username: "3******b",
            rateTime: 1469261964e3,
            score: 3,
            rateType: 1,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "1******c",
            rateTime: 1469261864e3,
            deliveryTime: 20,
            score: 5,
            rateType: 0,
            text: "良心店铺",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "2******d",
            rateTime: 1469251264e3,
            deliveryTime: 10,
            score: 4,
            rateType: 0,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "9******0",
            rateTime: 1469241964e3,
            deliveryTime: 70,
            score: 1,
            rateType: 1,
            text: "送货速度蜗牛一样",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "d******c",
            rateTime: 1469231964e3,
            deliveryTime: 30,
            score: 5,
            rateType: 0,
            text: "很喜欢的粥店",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "2******3",
            rateTime: 1469221264e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "量给的还可以",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "3******8",
            rateTime: 1469211964e3,
            deliveryTime: "",
            score: 3,
            rateType: 1,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "a******a",
            rateTime: 1469201964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "孩子喜欢吃这家",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: ["南瓜粥"]
        }, {
            username: "3******3",
            rateTime: 1469191264e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "粥挺好吃的",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "t******b",
            rateTime: 1469181964e3,
            deliveryTime: "",
            score: 3,
            rateType: 1,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "f******c",
            rateTime: 1469171964e3,
            deliveryTime: 15,
            score: 5,
            rateType: 0,
            text: "送货速度很快",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "k******3",
            rateTime: 1469161264e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "u******b",
            rateTime: 1469151964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "下雨天给快递小哥点个赞",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "s******c",
            rateTime: 1469141964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "好",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "z******3",
            rateTime: 1469131264e3,
            deliveryTime: "",
            score: 5,
            rateType: 0,
            text: "吃了还想再吃",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "n******b",
            rateTime: 1469121964e3,
            deliveryTime: "",
            score: 3,
            rateType: 1,
            text: "发票开的不对",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "m******c",
            rateTime: 1469111964e3,
            deliveryTime: 30,
            score: 5,
            rateType: 0,
            text: "好吃",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "l******3",
            rateTime: 1469101264e3,
            deliveryTime: 40,
            score: 5,
            rateType: 0,
            text: "还不错吧",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "3******o",
            rateTime: 1469091964e3,
            deliveryTime: "",
            score: 2,
            rateType: 1,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "3******p",
            rateTime: 1469081964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "很喜欢的粥",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "o******k",
            rateTime: 1469071264e3,
            deliveryTime: "",
            score: 5,
            rateType: 0,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "k******b",
            rateTime: 1469061964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }]
    }
}, function (e, t) {
    e.exports = {
        seller: {
            name: "粥品香坊（回龙观）",
            description: "蜂鸟专送",
            deliveryTime: 38,
            score: 4.2,
            serviceScore: 4.1,
            foodScore: 4.3,
            rankRate: 69.2,
            minPrice: 20,
            deliveryPrice: 4,
            ratingCount: 24,
            sellCount: 90,
            bulletin: "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
            supports: [{type: 0, description: "在线支付满28减5"}, {type: 1, description: "VC无限橙果汁全场8折"}, {
                type: 2,
                description: "单人精彩套餐"
            }, {type: 3, description: "该商家支持发票,请下单写好发票抬头"}, {type: 4, description: "已加入“外卖保”计划,食品安全保障"}],
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
            pics: ["http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180", "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180", "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180", "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"],
            infos: ["该商家支持发票,请下单写好发票抬头", "品类:其他菜系,包子粥店", "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340", "营业时间:10:00-20:30"]
        },
        goods: [{
            name: "热销榜",
            type: -1,
            foods: [{
                name: "皮蛋瘦肉粥",
                price: 10,
                oldPrice: "",
                description: "咸粥",
                sellCount: 229,
                rating: 100,
                info: "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "很喜欢的粥",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 1,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "扁豆焖面",
                price: 14,
                oldPrice: "",
                description: "",
                sellCount: 188,
                rating: 96,
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 1,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                info: "",
                icon: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "葱花饼",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 124,
                rating: 85,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "没啥味道",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 1,
                    text: "很一般啊",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "牛肉馅饼",
                price: 14,
                oldPrice: "",
                description: "",
                sellCount: 114,
                rating: 91,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "难吃不推荐",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "招牌猪肉白菜锅贴/10个",
                price: 17,
                oldPrice: "",
                description: "",
                sellCount: 101,
                rating: 78,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "不脆,不好吃",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "南瓜粥",
                price: 9,
                oldPrice: "",
                description: "甜粥",
                sellCount: 91,
                rating: 100,
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "红豆薏米美肤粥",
                price: 12,
                oldPrice: "",
                description: "甜粥",
                sellCount: 86,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "八宝酱菜",
                price: 4,
                oldPrice: "",
                description: "",
                sellCount: 84,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "红枣山药糙米粥",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 81,
                rating: 91,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "糊塌子",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 80,
                rating: 93,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "单人精彩套餐",
            type: 2,
            foods: [{
                name: "红枣山药粥套餐",
                price: 29,
                oldPrice: 36,
                description: "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
                sellCount: 17,
                rating: 100,
                info: "",
                ratings: [{
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "冰爽饮品限时特惠",
            type: 1,
            foods: [{
                name: "VC无限橙果汁",
                price: 8,
                oldPrice: 10,
                description: "",
                sellCount: 15,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "还可以",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "精选热菜",
            type: -1,
            foods: [{
                name: "娃娃菜炖豆腐",
                price: 17,
                oldPrice: "",
                description: "",
                sellCount: 43,
                rating: 92,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "菜量还可以,味道还可以",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "手撕包菜",
                price: 16,
                oldPrice: "",
                description: "",
                sellCount: 29,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "香酥黄金鱼/3条",
                price: 11,
                oldPrice: "",
                description: "",
                sellCount: 15,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "爽口凉菜",
            type: -1,
            foods: [{
                name: "八宝酱菜",
                price: 4,
                oldPrice: "",
                description: "",
                sellCount: 84,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "拍黄瓜",
                price: 9,
                oldPrice: "",
                description: "",
                sellCount: 28,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "精选套餐",
            type: -1,
            foods: [{
                name: "红豆薏米粥套餐",
                price: 37,
                oldPrice: "",
                description: "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
                sellCount: 3,
                rating: 100,
                info: "",
                ratings: [{
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "皮蛋瘦肉粥套餐",
                price: 31,
                oldPrice: "",
                description: "",
                sellCount: 12,
                rating: 100,
                info: "",
                ratings: [{
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "果拼果汁",
            type: -1,
            foods: [{
                name: "蜜瓜圣女萝莉杯",
                price: 6,
                oldPrice: "",
                description: "",
                sellCount: 1,
                rating: "",
                info: "",
                ratings: [],
                icon: "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "加多宝",
                price: 6,
                oldPrice: "",
                description: "",
                sellCount: 7,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "VC无限橙果汁",
                price: 8,
                oldPrice: 10,
                description: "",
                sellCount: 15,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "还可以",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "小吃主食",
            type: -1,
            foods: [{
                name: "扁豆焖面",
                price: 14,
                oldPrice: "",
                description: "",
                sellCount: 188,
                rating: 96,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 1,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "葱花饼",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 124,
                rating: 85,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "没啥味道",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 1,
                    text: "很一般啊",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "牛肉馅饼",
                price: 14,
                oldPrice: "",
                description: "",
                sellCount: 114,
                rating: 91,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "难吃不推荐",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "招牌猪肉白菜锅贴/10个",
                price: 17,
                oldPrice: "",
                description: "",
                sellCount: 101,
                rating: 78,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 1,
                    text: "不脆,不好吃",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "糊塌子",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 80,
                rating: 93,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }, {
            name: "特色粥品",
            type: -1,
            foods: [{
                name: "皮蛋瘦肉粥",
                price: 10,
                oldPrice: "",
                description: "咸粥",
                sellCount: 229,
                rating: 100,
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "很喜欢的粥",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 1,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "南瓜粥",
                price: 9,
                oldPrice: "",
                description: "甜粥",
                sellCount: 91,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "红豆薏米美肤粥",
                price: 12,
                oldPrice: "",
                description: "甜粥",
                sellCount: 86,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "红枣山药糙米粥",
                price: 10,
                oldPrice: "",
                description: "",
                sellCount: 81,
                rating: 91,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "鲜蔬菌菇粥",
                price: 11,
                oldPrice: "",
                description: "咸粥",
                sellCount: 56,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {username: "2******3", rateTime: 1469271264e3, rateType: 0, text: ""}, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
            }, {
                name: "田园蔬菜粥",
                price: 10,
                oldPrice: "",
                description: "咸粥",
                sellCount: 33,
                rating: 100,
                info: "",
                ratings: [{
                    username: "3******c",
                    rateTime: 1469281964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "2******3",
                    rateTime: 1469271264e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }, {
                    username: "3******b",
                    rateTime: 1469261964e3,
                    rateType: 0,
                    text: "",
                    avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }],
                icon: "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
                image: "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
            }]
        }],
        ratings: [{
            username: "3******c",
            rateTime: 1469281964e3,
            deliveryTime: 30,
            score: 5,
            rateType: 0,
            text: "不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: ["南瓜粥", "皮蛋瘦肉粥", "扁豆焖面", "娃娃菜炖豆腐", "牛肉馅饼"]
        }, {
            username: "2******3",
            rateTime: 1469271264e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "服务态度不错",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: ["扁豆焖面"]
        }, {
            username: "3******b",
            rateTime: 1469261964e3,
            score: 3,
            rateType: 1,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "1******c",
            rateTime: 1469261864e3,
            deliveryTime: 20,
            score: 5,
            rateType: 0,
            text: "良心店铺",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "2******d",
            rateTime: 1469251264e3,
            deliveryTime: 10,
            score: 4,
            rateType: 0,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "9******0",
            rateTime: 1469241964e3,
            deliveryTime: 70,
            score: 1,
            rateType: 1,
            text: "送货速度蜗牛一样",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "d******c",
            rateTime: 1469231964e3,
            deliveryTime: 30,
            score: 5,
            rateType: 0,
            text: "很喜欢的粥店",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "2******3",
            rateTime: 1469221264e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "量给的还可以",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "3******8",
            rateTime: 1469211964e3,
            deliveryTime: "",
            score: 3,
            rateType: 1,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "a******a",
            rateTime: 1469201964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "孩子喜欢吃这家",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: ["南瓜粥"]
        }, {
            username: "3******3",
            rateTime: 1469191264e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "粥挺好吃的",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "t******b",
            rateTime: 1469181964e3,
            deliveryTime: "",
            score: 3,
            rateType: 1,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "f******c",
            rateTime: 1469171964e3,
            deliveryTime: 15,
            score: 5,
            rateType: 0,
            text: "送货速度很快",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "k******3",
            rateTime: 1469161264e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "u******b",
            rateTime: 1469151964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "下雨天给快递小哥点个赞",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "s******c",
            rateTime: 1469141964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "好",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "z******3",
            rateTime: 1469131264e3,
            deliveryTime: "",
            score: 5,
            rateType: 0,
            text: "吃了还想再吃",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "n******b",
            rateTime: 1469121964e3,
            deliveryTime: "",
            score: 3,
            rateType: 1,
            text: "发票开的不对",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "m******c",
            rateTime: 1469111964e3,
            deliveryTime: 30,
            score: 5,
            rateType: 0,
            text: "好吃",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "l******3",
            rateTime: 1469101264e3,
            deliveryTime: 40,
            score: 5,
            rateType: 0,
            text: "还不错吧",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "3******o",
            rateTime: 1469091964e3,
            deliveryTime: "",
            score: 2,
            rateType: 1,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "3******p",
            rateTime: 1469081964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "很喜欢的粥",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "o******k",
            rateTime: 1469071264e3,
            deliveryTime: "",
            score: 5,
            rateType: 0,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }, {
            username: "k******b",
            rateTime: 1469061964e3,
            deliveryTime: "",
            score: 4,
            rateType: 0,
            text: "",
            avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
            recommend: []
        }]
    }
}, function (e, t) {
}, function (e, t) {
}, function (e, t) {
}, function (e, t) {
}, function (e, t) {
}, function (e, t) {
}, function (e, t) {
}, function (e, t) {
}, function (e, t) {
}, function (e, t) {
}, function (e, t) {
}, function (e, t) {
}, function (e, t) {
}, function (e, t, a) {
    a(18);
    var i = a(1)(a(49), a(38), null, null);
    e.exports = i.exports
}, function (e, t, a) {
    a(24);
    var i = a(1)(a(51), a(44), null, null);
    e.exports = i.exports
}, function (e, t, a) {
    a(23);
    var i = a(1)(a(52), a(43), null, null);
    e.exports = i.exports
}, function (e, t, a) {
    a(21);
    var i = a(1)(a(53), a(41), null, null);
    e.exports = i.exports
}, function (e, t, a) {
    a(13);
    var i = a(1)(a(55), a(33), null, null);
    e.exports = i.exports
}, function (e, t, a) {
    a(20);
    var i = a(1)(a(57), a(40), null, null);
    e.exports = i.exports
}, function (e, t, a) {
    a(15);
    var i = a(1)(a(58), a(35), null, null);
    e.exports = i.exports
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                ref: "ratings",
                staticClass: "ratings"
            }, [a("div", {staticClass: "ratings-content"}, [a("div", {staticClass: "overview"}, [a("div", {staticClass: "overview-left"}, [a("h1", {staticClass: "score"}, [e._v(e._s(e.seller.score))]), e._v(" "), a("div", {staticClass: "title"}, [e._v("综合评分")]), e._v(" "), a("div", {staticClass: "rank"}, [e._v("高于周边商家" + e._s(e.seller.rankRate))])]), e._v(" "), a("div", {staticClass: "overview-right"}, [a("div", {staticClass: "score-wrapper"}, [a("span", {staticClass: "title"}, [e._v("服务态度")]), e._v(" "), a("star", {
                attrs: {
                    size: 36,
                    score: e.seller.serviceScore
                }
            }), e._v(" "), a("span", {staticClass: "score"}, [e._v(e._s(e.seller.serviceScore))])], 1), e._v(" "), a("div", {staticClass: "score-wrapper"}, [a("span", {staticClass: "title"}, [e._v("商品评分")]), e._v(" "), a("star", {
                attrs: {
                    size: 36,
                    score: e.seller.foodScore
                }
            }), e._v(" "), a("span", {staticClass: "score"}, [e._v(e._s(e.seller.foodScore))])], 1), e._v(" "), a("div", {staticClass: "delivery-wrapper"}, [a("span", {staticClass: "title"}, [e._v("送达时间")]), e._v(" "), a("span", {staticClass: "delivery"}, [e._v(e._s(e.seller.deliveryTime) + "分钟")])])])]), e._v(" "), a("split"), e._v(" "), a("ratingselect", {
                attrs: {
                    selectType: e.selectType,
                    onlyContent: e.onlyContent,
                    ratings: e.ratings
                }, on: {select: e.selectRating, toggle: e.toggleContent}
            }), e._v(" "), a("div", {staticClass: "rating-wrapper"}, [a("ul", e._l(e.ratings, function (t) {
                return a("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.needShow(t.rateType, t.text),
                        expression: "needShow(rating.rateType, rating.text)"
                    }], staticClass: "rating-item"
                }, [a("div", {staticClass: "avatar"}, [a("img", {
                    attrs: {
                        width: "28",
                        height: "28",
                        src: t.avatar
                    }
                })]), e._v(" "), a("div", {staticClass: "content"}, [a("h1", {staticClass: "name"}, [e._v(e._s(t.username))]), e._v(" "), a("div", {staticClass: "star-wrapper"}, [a("star", {
                    attrs: {
                        size: 24,
                        score: t.score
                    }
                }), e._v(" "), a("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.deliveryTime,
                        expression: "rating.deliveryTime"
                    }], staticClass: "delivery"
                }, [e._v(e._s(t.deliveryTime))])], 1), e._v(" "), a("p", {staticClass: "text"}, [e._v(e._s(t.text))]), e._v(" "), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.recommend && t.recommend.length,
                        expression: "rating.recommend && rating.recommend.length"
                    }], staticClass: "recommend"
                }, [a("span", {staticClass: "icon-thumb_up"}), e._v(" "), e._l(t.recommend, function (t) {
                    return a("span", {staticClass: "item"}, [e._v(e._s(t))])
                })], 2), e._v(" "), a("div", {staticClass: "time"}, [e._v("\n              " + e._s(e._f("formatDate")(t.rateTime)) + "\n            ")])])])
            }))])], 1)])
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "star", class: e.starStyle}, e._l(e.itemClasses, function (e) {
                return a("span", {staticClass: "star-item", class: e})
            }))
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "shopcart"}, [a("div", {staticClass: "content-wrapper"}, [a("div", {
                staticClass: "content-left",
                on: {click: e.toggleList}
            }, [a("div", {staticClass: "logo-wrapper"}, [a("div", {
                staticClass: "logo",
                class: {highLight: e.totalCount > 0}
            }, [a("i", {
                staticClass: "icon-shopping_cart",
                class: {highLight: e.totalCount > 0}
            })]), e._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.totalCount > 0,
                    expression: "totalCount>0"
                }], staticClass: "num"
            }, [e._v(e._s(e.totalCount))])]), e._v(" "), a("div", {
                staticClass: "price",
                class: {highLight: e.totalCount > 0}
            }, [e._v("￥" + e._s(e.totalPrice))]), e._v(" "), a("div", {staticClass: "desc"}, [e._v("另需配送费￥" + e._s(e.deliveryPrice) + "元")])]), e._v(" "), a("div", {
                staticClass: "content-right",
                on: {
                    click: function (t) {
                        t.stopPropagation(), t.preventDefault(), e.pay(t)
                    }
                }
            }, [a("div", {
                staticClass: "pay",
                class: e.payClass
            }, [e._v(e._s(e.payDesc))])])]), e._v(" "), a("div", {staticClass: "ball-container"}, e._l(e.balls, function (t) {
                return a("div", [a("transition", {
                    attrs: {name: "drop"},
                    on: {"before-enter": e.beforeDrop, enter: e.dropping, "after-enter": e.afterDrop}
                }, [a("div", {
                    directives: [{name: "show", rawName: "v-show", value: t.show, expression: "ball.show"}],
                    staticClass: "ball"
                }, [a("div", {staticClass: "inner inner-hook"})])])], 1)
            })), e._v(" "), a("transition", {attrs: {name: "fold"}}, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.listShow,
                    expression: "listShow"
                }], staticClass: "shopcart-list"
            }, [a("div", {staticClass: "header border-1px"}, [a("span", {staticClass: "title"}, [e._v("购物车")]), e._v(" "), a("span", {
                staticClass: "empty",
                on: {click: e.empty}
            }, [e._v("清空")])]), e._v(" "), a("div", {
                ref: "listContent",
                staticClass: "list-content"
            }, [a("ul", e._l(e.selectFoods, function (t) {
                return a("li", {staticClass: "food border-1px"}, [a("span", {staticClass: "name"}, [e._v(e._s(t.name))]), e._v(" "), a("div", {staticClass: "price"}, [e._v("￥" + e._s(t.price * t.count))]), e._v(" "), a("div", {staticClass: "cartcontrol-wrapper"}, [a("cartcontrol", {attrs: {food: t}})], 1)])
            }))])])]), e._v(" "), a("transition", {attrs: {name: "fade"}}, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.listShow,
                    expression: "listShow"
                }], staticClass: "list-mask", on: {click: e.toggleList}
            })])], 1)
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "ratings-wrapper"}, [a("div", {staticClass: "title border-1px"}, [a("span", {
                staticClass: "positive",
                class: {active: 2 === e.selectType},
                on: {
                    click: function (t) {
                        e.select(2, t)
                    }
                }
            }, [e._v(e._s(e.desc.all)), a("i", {staticClass: "count"}, [e._v(e._s(e.ratings.length))])]), e._v(" "), a("span", {
                staticClass: "positive",
                class: {active: 0 === e.selectType},
                on: {
                    click: function (t) {
                        e.select(0, t)
                    }
                }
            }, [e._v(e._s(e.desc.positive)), a("i", {staticClass: "count"}, [e._v(e._s(e.positives.length))])]), e._v(" "), a("span", {
                staticClass: "negative",
                class: {active: 1 === e.selectType},
                on: {
                    click: function (t) {
                        e.select(1, t)
                    }
                }
            }, [e._v(e._s(e.desc.negative)), a("i", {staticClass: "count"}, [e._v(e._s(e.negatives.length))])])]), e._v(" "), a("div", {
                staticClass: "choose border-1px",
                class: {on: e.onlyContent},
                on: {
                    click: function (t) {
                        e.toggleSelect(t)
                    }
                }
            }, [a("i", {staticClass: "icon-check_circle"}), e._v("只看有内容的评价\n  ")]), e._v(" "), e._m(0)])
        }, staticRenderFns: [function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "rating-content"}, [a("div", {staticClass: "time"})])
        }]
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "icon", class: e.typeName[e.type]})
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", [a("v-header", {attrs: {seller: e.seller}}), e._v(" "), a("div", {staticClass: "tab border-1px"}, [a("div", {staticClass: "tab-item"}, [a("router-link", {attrs: {to: "/goods"}}, [e._v("商品")])], 1), e._v(" "), a("div", {staticClass: "tab-item"}, [a("router-link", {attrs: {to: "/ratings"}}, [e._v("评论")])], 1), e._v(" "), a("div", {staticClass: "tab-item"}, [a("router-link", {attrs: {to: "/seller"}}, [e._v("商家")])], 1)]), e._v(" "), a("keep-alive", [a("router-view", {
                attrs: {
                    seller: e.seller,
                    "keep-alive": ""
                }
            })], 1)], 1)
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "split"})
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                ref: "seller",
                staticClass: "seller"
            }, [a("div", {staticClass: "seller-content"}, [a("div", {staticClass: "header-wrapper"}, [a("div", {staticClass: "title"}, [a("h1", {staticClass: "title-name"}, [e._v(e._s(e.seller.name))]), e._v(" "), a("star", {
                attrs: {
                    size: 36,
                    score: e.seller.score
                }
            }), e._v(" "), a("span", {staticClass: "text"}, [e._v("(" + e._s(e.seller.ratingCount) + ")")]), e._v(" "), a("span", {staticClass: "text"}, [e._v("月售" + e._s(e.seller.sellCount) + "单")]), e._v(" "), a("div", {
                staticClass: "collect",
                on: {click: e.toggleFavorite}
            }, [a("i", {
                staticClass: "icon-favorite",
                class: {active: e.favorite}
            }), e._v(" "), a("div", {staticClass: "text"}, [e._v(e._s(e.favoriteText))])])], 1), e._v(" "), a("div", {staticClass: "info"}, [a("div", {staticClass: "info-content"}, [a("h5", {staticClass: "text"}, [e._v("起送价")]), e._v(" "), a("span", {staticClass: "num"}, [e._v(e._s(e.seller.minPrice)), a("i", {staticClass: "unit"}, [e._v("元")])])]), e._v(" "), a("div", {staticClass: "info-content"}, [a("h5", {staticClass: "text"}, [e._v("商家配送")]), e._v(" "), a("span", {staticClass: "num"}, [e._v(e._s(e.seller.deliveryPrice)), a("i", {staticClass: "unit"}, [e._v("元")])])]), e._v(" "), a("div", {staticClass: "info-content"}, [a("h5", {staticClass: "text"}, [e._v("平均配送时间")]), e._v(" "), a("span", {staticClass: "num"}, [e._v(e._s(e.seller.deliveryTime)), a("i", {staticClass: "unit"}, [e._v("分钟")])])])])]), e._v(" "), a("split"), e._v(" "), a("div", {staticClass: "activity"}, [a("h1", {staticClass: "title"}, [e._v("公告与活动")]), e._v(" "), a("p", {staticClass: "text"}, [e._v(e._s(e.seller.bulletin))]), e._v(" "), a("ul", e._l(e.seller.supports, function (t) {
                return a("li", {staticClass: "supports-item"}, [a("icon", {
                    attrs: {
                        type: t.type,
                        typeSize: 4
                    }
                }), e._v(" "), a("span", {staticClass: "description"}, [e._v(e._s(t.description))])], 1)
            }))]), e._v(" "), a("split"), e._v(" "), a("div", {staticClass: "view-container"}, [a("h1", {staticClass: "title"}, [e._v("商家实景")]), e._v(" "), a("div", {staticClass: "view"}, [a("div", {
                ref: "picWrapper",
                staticClass: "pic-wrapper"
            }, [a("ul", {
                ref: "picList",
                staticClass: "pic-list",
                staticStyle: {height: "90px"}
            }, e._l(e.seller.pics, function (e) {
                return a("li", {staticClass: "pic-item"}, [a("img", {attrs: {src: e, width: "120", height: "90"}})])
            }))])])]), e._v(" "), a("split"), e._v(" "), a("div", {staticClass: "infos"}, [a("h1", {staticClass: "title border-1px"}, [e._v("商家信息")]), e._v(" "), a("ul", e._l(e.seller.infos, function (t) {
                return a("li", {staticClass: "info-item border-1px"}, [e._v("\n          " + e._s(t) + "\n        ")])
            }))])], 1)])
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "header"}, [a("div", {staticClass: "content-wrapper"}, [a("div", {staticClass: "avatar"}, [a("img", {
                attrs: {
                    src: e.seller.avatar,
                    width: "64",
                    height: "64"
                }
            })]), e._v(" "), a("div", {staticClass: "content"}, [a("div", {staticClass: "title"}, [a("span", {staticClass: "brand"}), e._v(" "), a("span", {staticClass: "title"}, [e._v(e._s(e.seller.name))])]), e._v(" "), a("div", {staticClass: "description"}, [a("div", {staticClass: "delivery"}, [e._v("\n          " + e._s(e.seller.description) + "/" + e._s(e.seller.deliveryTime) + "分钟送达\n        ")])]), e._v(" "), e.seller.supports ? a("div", {staticClass: "support"}, [a("span", {staticClass: "icon"}, [a("icon", {
                    attrs: {
                        type: e.seller.supports[0].type,
                        typeSize: 1
                    }
                })], 1), e._v(" "), a("span", {staticClass: "text"}, [e._v(e._s(e.seller.supports[0].description))])]) : e._e()]), e._v(" "), e.seller.supports ? a("div", {
                    staticClass: "support-count",
                    on: {click: e.showDetail}
                }, [a("span", {staticClass: "count"}, [e._v(e._s(e.seller.supports.length) + "个")]), e._v(" "), a("i", {staticClass: "icon-keyboard_arrow_right"})]) : e._e()]), e._v(" "), a("div", {
                staticClass: "bulletin-wrapper",
                on: {click: e.showDetail}
            }, [a("span", {staticClass: "brand"}), a("span", {staticClass: "bulletin"}, [e._v(e._s(e.seller.bulletin))]), e._v(" "), a("i", {staticClass: "icon-keyboard_arrow_right"})]), e._v(" "), a("div", {staticClass: "background-img"}, [a("img", {
                attrs: {
                    src: e.seller.avatar,
                    width: "100%",
                    height: "100%"
                }
            })]), e._v(" "), a("transition", {attrs: {name: "fade"}}, [a("div", {
                directives: [{
                    name: "show", rawName: "v-show", value: e.detailShow, expression: "detailShow"
                }], staticClass: "detail"
            }, [a("div", {staticClass: "detail-wrapper clearfix"}, [a("div", {staticClass: "detail-main"}, [a("h1", {staticClass: "name"}, [e._v(e._s(e.seller.name))]), e._v(" "), a("star", {
                attrs: {
                    size: 48,
                    score: e.seller.score
                }
            }), e._v(" "), a("div", {staticClass: "title"}, [a("div", {staticClass: "line"}), e._v(" "), a("div", {staticClass: "text"}, [e._v("优惠信息")]), e._v(" "), a("div", {staticClass: "line"})]), e._v(" "), e.seller.supports ? a("ul", {staticClass: "support"}, e._l(e.seller.supports, function (t, i) {
                    return a("li", {staticClass: "support-item"}, [a("span", {staticClass: "icon"}, [a("icon", {
                        attrs: {
                            type: e.seller.supports[i].type,
                            typeSize: 2
                        }
                    })], 1), e._v(" "), a("span", {staticClass: "text"}, [e._v(e._s(t.description))])])
                })) : e._e(), e._v(" "), a("div", {staticClass: "title"}, [a("div", {staticClass: "line"}), e._v(" "), a("div", {staticClass: "text"}, [e._v("商家公告")]), e._v(" "), a("div", {staticClass: "line"})]), e._v(" "), a("div", {staticClass: "bulletin"}, [e._v("\n            " + e._s(e.seller.bulletin) + "\n          ")])], 1)]), e._v(" "), a("div", {staticClass: "detail-close"}, [a("i", {
                staticClass: "icon-close",
                on: {click: e.close}
            })])])])], 1)
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "cartcontrol"}, [a("transition", {attrs: {name: "cartcontrol"}}, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.food.count > 0,
                    expression: "food.count>0"
                }], staticClass: "decrease", on: {
                    click: function (t) {
                        t.stopPropagation(), e.minusCart(t)
                    }
                }
            }, [a("span", {staticClass: "inner icon-remove_circle_outline"})])]), e._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.food.count > 0,
                    expression: "food.count>0"
                }], staticClass: "count"
            }, [e._v(e._s(e.food.count))]), e._v(" "), a("div", {
                staticClass: "increase icon-add_circle",
                on: {
                    click: function (t) {
                        t.stopPropagation(), e.addCart(t)
                    }
                }
            })], 1)
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {staticClass: "goods"}, [a("div", {
                ref: "menuWrapper",
                staticClass: "menu-wrapper"
            }, [a("ul", {staticClass: "menu"}, e._l(e.goods, function (t, i) {
                return a("li", {
                    staticClass: "menu-list", class: {active: e.currentIndex === i}, on: {
                        click: function (t) {
                            e.selectMenu(i, t)
                        }
                    }
                }, [a("span", {staticClass: "name border-1px"}, [t.type > -1 ? a("span", {staticClass: "icon"}, [a("icon", {
                        attrs: {
                            typeSize: 4,
                            type: t.type
                        }
                    })], 1) : e._e(), e._v(e._s(t.name) + "\n        ")])])
            }))]), e._v(" "), a("div", {
                ref: "foodsWrapper",
                staticClass: "foods-wrapper"
            }, [a("ul", e._l(e.goods, function (t) {
                return a("li", {staticClass: "foot-list foot-list-hook"}, [a("h1", {staticClass: "title"}, [e._v(e._s(t.name))]), e._v(" "), a("ul", e._l(t.foods, function (t) {
                    return a("li", {
                        on: {
                            click: function (a) {
                                e.selectFood(t, a)
                            }
                        }
                    }, [a("div", {staticClass: "content-wrapper border-1px"}, [a("div", {staticClass: "icon"}, [a("img", {
                        attrs: {
                            src: t.icon,
                            width: "64",
                            height: "64"
                        }
                    })]), e._v(" "), a("div", {staticClass: "content-right-wrapper"}, [a("h2", {staticClass: "food-name"}, [e._v(e._s(t.name))]), e._v(" "), t.description ? a("p", {staticClass: "description"}, [e._v(e._s(t.description))]) : e._e(), e._v(" "), a("p", {staticClass: "sell-count"}, [e._v("月售" + e._s(t.sellCount) + " 好评率" + e._s(t.rating) + "%")]), e._v(" "), a("span", {staticClass: "price"}, [e._v("￥" + e._s(t.price))]), e._v(" "), t.oldPrice ? a("span", [e._v("￥" + e._s(t.oldPrice))]) : e._e(), e._v(" "), a("div", {staticClass: "cartcontrol-wrapper"}, [a("cartcontrol", {
                        attrs: {food: t},
                        on: {add: e.addFood}
                    })], 1)])])])
                }))])
            }))]), e._v(" "), a("food", {
                ref: "food",
                attrs: {food: e.selectedFood},
                on: {add: e.addFood}
            }), e._v(" "), a("shopcart", {
                ref: "shopcart",
                attrs: {
                    "select-foods": e.selectFoods,
                    "delivery-price": e.seller.deliveryPrice,
                    "min-price": e.seller.minPrice
                }
            })], 1)
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("transition", {attrs: {name: "slide"}}, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showFlag,
                    expression: "showFlag"
                }], ref: "food", staticClass: "food"
            }, [a("div", {staticClass: "food-content"}, [a("div", {
                staticClass: "back icon-arrow_lift",
                on: {click: e.back}
            }), e._v(" "), a("div", {staticClass: "image-header"}, [a("img", {
                attrs: {
                    src: e.food.image,
                    height: "375"
                }
            })]), e._v(" "), a("div", {staticClass: "title-wrapper"}, [a("h1", {staticClass: "name"}, [e._v(e._s(e.food.name))]), e._v(" "), a("span", {staticClass: "sell-count"}, [e._v("月售" + e._s(e.food.sellCount) + "份")]), a("span", {staticClass: "rating"}, [e._v("好评率" + e._s(e.food.rating) + "%")]), e._v(" "), a("div", {staticClass: "price"}, [e._v("￥" + e._s(e.food.price)), a("s", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.food.oldPrice,
                    expression: "food.oldPrice"
                }], staticClass: "oldPrice"
            }, [e._v("￥" + e._s(e.food.oldPrice))])]), e._v(" "), a("div", {staticClass: "cartcontrol-wrapper"}, [a("cartcontrol", {
                attrs: {food: e.food},
                on: {add: e.addFood}
            })], 1), e._v(" "), a("transition", {attrs: {name: "fade"}}, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.food.count || 0 === e.food.count,
                    expression: "!food.count||food.count===0"
                }], staticClass: "buy", on: {
                    click: function (t) {
                        t.stopPropagation(), t.preventDefault(), e.addFirst(t)
                    }
                }
            }, [e._v("加入购物车")])])], 1), e._v(" "), a("split"), e._v(" "), a("div", {staticClass: "description-wrapper"}, [a("h1", {staticClass: "title"}, [e._v("商品介绍")]), e._v(" "), a("p", {staticClass: "content"}, [e._v(e._s(e.food.info))])]), e._v(" "), a("split"), e._v(" "), a("h1", {staticClass: "title-content"}, [e._v("商品评价")]), e._v(" "), a("ratingselect", {
                attrs: {
                    selectType: e.selectType,
                    onlyContent: e.onlyContent,
                    desc: e.desc,
                    ratings: e.food.ratings
                }, on: {select: e.selectRating, toggle: e.toggleContent}
            }), e._v(" "), a("div", {staticClass: "rating-wrapper"}, [a("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.food.ratings && e.food.ratings.length,
                    expression: "food.ratings && food.ratings.length"
                }]
            }, e._l(e.food.ratings, function (t) {
                return a("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.needShow(t.rateType, t.text),
                        expression: "needShow(rating.rateType,rating.text)"
                    }], staticClass: "rating-item border-1px"
                }, [a("div", {staticClass: "user"}, [a("span", {staticClass: "name"}, [e._v(e._s(t.username))]), e._v(" "), a("img", {
                    staticClass: "avatar",
                    attrs: {width: "12", height: "12", src: t.avatar}
                })]), e._v(" "), a("div", {staticClass: "time"}, [e._v(e._s(e._f("formatDate")(t.rateTime)))]), e._v(" "), a("p", {staticClass: "text"}, [a("span", {
                    class: {
                        "icon-thumb_up": 0 === t.rateType,
                        "icon-thumb_down": 1 === t.rateType
                    }
                }), e._v(e._s(t.text) + "\n            ")])])
            })), e._v(" "), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.food.ratings || !e.food.ratings.length,
                    expression: "!food.ratings || !food.ratings.length"
                }], staticClass: "no-rating"
            }, [e._v("暂无评价")])])], 1)])])
        }, staticRenderFns: []
    }
}, , , , function (e, t, a) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function s(e, t, a) {
        var i = window.localStorage.__seller__;
        i ? (i = JSON.parse(i), i || (i[e] = {})) : (i = {}, i[e] = {}), i[e][t] = a, window.localStorage.__seller__ = (0, o.default)(i)
    }

    function r(e, t, a) {
        var i = window.localStorage.__seller__;
        if (!i)return a;
        if (i = JSON.parse(i)[e], !i)return a;
        var s = i[t];
        return s || a
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var c = a(61), o = i(c);
    t.saveToLocal = s, t.loadFromLocal = r
}, function (e, t, a) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = a(29), r = i(s), c = a(10), o = i(c);
    t.default = {
        data: function () {
            return {seller: {}}
        }, created: function () {
            this.seller = o.default.seller
        }, components: {"v-header": r.default}
    }
}, function (e, t, a) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = a(7), r = i(s);
    t.default = {
        props: {food: {type: Object}}, methods: {
            addCart: function (e) {
                e._constructed && (this.food.count ? this.food.count++ : (r.default.set(this.food, "count", 1), this.food.count = 1), this.$emit("add", e.target))
            }, minusCart: function (e) {
                e._constructed && this.food.count--
            }
        }
    }
}, function (e, t, a) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = a(7), r = i(s), c = a(5), o = i(c), n = a(2), l = i(n), m = a(3), p = i(m), d = a(8), u = i(d), g = a(9), f = 2;
    t.default = {
        props: {food: {type: Object}}, data: function () {
            return {showFlag: !1, selectType: f, onlyContent: !0, desc: {all: "全部", positive: "推荐", negative: "吐槽"}}
        }, methods: {
            show: function () {
                var e = this;
                this.showFlag = !0, this.selectType = 2, this.onlyContent = !1, this.$nextTick(function () {
                    e.scroll ? e.scroll.refresh() : e.scroll = new l.default(e.$refs.food, {click: !0})
                })
            }, back: function () {
                this.showFlag = !1
            }, addFirst: function (e) {
                e._constructed && (this.$emit("add", e.target), r.default.set(this.food, "count", 1))
            }, addFood: function (e) {
                this.$emit("add", e)
            }, needShow: function (e, t) {
                return !(this.onlyContent && !t) && (this.selectType === f || e === this.selectType)
            }, toggleContent: function () {
                var e = this;
                this.onlyContent = !this.onlyContent, this.$nextTick(function () {
                    e.scroll.refresh()
                })
            }, selectRating: function (e) {
                var t = this;
                this.selectType = e, this.$nextTick(function () {
                    t.scroll.refresh()
                })
            }
        }, filters: {
            formatDate: function (e) {
                var t = new Date(e);
                return (0, g.formatDate)(t, "yyyy-MM-dd hh:mm")
            }
        }, components: {split: o.default, cartcontrol: p.default, ratingselect: u.default}
    }
}, function (e, t, a) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = a(2), r = i(s), c = a(4), o = i(c), n = a(32), l = i(n), m = a(3), p = i(m), d = a(27), u = i(d), g = a(11), f = i(g);
    t.default = {
        props: {seller: {type: Object}}, data: function () {
            return {goods: [], selectedFood: {}, heightList: [], scrollY: 0}
        }, computed: {
            currentIndex: function () {
                for (var e = 0; e < this.heightList.length; e++) {
                    var t = this.heightList[e], a = this.heightList[e + 1];
                    if (!a || this.scrollY >= t && this.scrollY < a)return e
                }
                return 0
            }, selectFoods: function () {
                var e = [];
                return this.goods.forEach(function (t) {
                    t.foods.forEach(function (t) {
                        t.count && e.push(t)
                    })
                }), e
            }
        }, created: function () {
            var e = this;
            this.goods = f.default.goods, this.$nextTick(function () {
                e._initScroll(), e._calculateHeight()
            })
        }, methods: {
            selectMenu: function (e, t) {
                if (!t._constructed)return !1;
                var a = this.$refs.foodsWrapper.getElementsByClassName("foot-list-hook"), i = a[e];
                this.foodsScroll.scrollToElement(i, 300)
            }, selectFood: function (e, t) {
                return !!t._constructed && (this.selectedFood = e, void this.$refs.food.show())
            }, _initScroll: function () {
                var e = this;
                this.menuScroll = new r.default(this.$refs.menuWrapper, {click: !0}), this.foodsScroll = new r.default(this.$refs.foodsWrapper, {
                    click: !0,
                    probeType: 3
                }), this.foodsScroll.on("scroll", function (t) {
                    e.scrollY = Math.abs(Math.round(t.y))
                })
            }, _calculateHeight: function () {
                var e = this.$refs.foodsWrapper.getElementsByClassName("foot-list-hook"), t = 0;
                this.heightList.push(t);
                for (var a = 0; a < e.length; a++) {
                    var i = e[a];
                    t += i.clientHeight, this.heightList.push(t)
                }
            }, addFood: function (e) {
                var t = this;
                this.$nextTick(function () {
                    t.$refs.shopcart.drop(e)
                })
            }
        }, components: {icon: o.default, shopcart: l.default, cartcontrol: p.default, food: u.default}
    }
}, function (e, t, a) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = a(6), r = i(s), c = a(4), o = i(c);
    t.default = {
        props: {seller: {type: Object}}, data: function () {
            return {detailShow: !1}
        }, methods: {
            showDetail: function () {
                this.detailShow = !this.detailShow
            }, close: function () {
                this.detailShow = !1
            }
        }, components: {star: r.default, icon: o.default}
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
        props: {
            typeSize: {type: Number},
            type: {type: Number}
        }, computed: {
            typeName: function () {
                for (var e = ["decrease", "discount", "guarantee", "invoice", "special"], t = [], a = 0; a < e.length; a++)t.push(e[a] + "_" + this.typeSize);
                return t
            }
        }
    }
}, function (e, t, a) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = a(6), r = i(s), c = a(5), o = i(c), n = a(8), l = i(n), m = a(2), p = i(m), d = a(9), u = a(12), g = i(u), f = 2;
    t.default = {
        props: {seller: {type: Object}}, data: function () {
            return {ratings: [], selectType: f, onlyContent: !1}
        }, created: function () {
            var e = this;
            this.ratings = g.default.ratings, this.$nextTick(function () {
                e.scroll = new p.default(e.$refs.ratings, {click: !0})
            })
        }, methods: {
            needShow: function (e, t) {
                return !(this.onlyContent && !t) && (this.selectType === f || e === this.selectType)
            }, toggleContent: function () {
                var e = this;
                this.onlyContent = !this.onlyContent, this.$nextTick(function () {
                    e.scroll.refresh()
                })
            }, selectRating: function (e) {
                var t = this;
                this.selectType = e, this.$nextTick(function () {
                    t.scroll.refresh()
                })
            }
        }, filters: {
            formatDate: function (e) {
                var t = new Date(e);
                return (0, d.formatDate)(t, "yyyy-MM-dd hh:mm")
            }
        }, components: {star: r.default, split: o.default, ratingselect: l.default}
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var a = 0, i = 1, s = 2;
    t.default = {
        props: {
            ratings: {
                type: Array, default: function () {
                    return []
                }
            },
            selectType: {type: Number, default: s},
            onlyContent: {type: Boolean, default: !1},
            desc: {
                type: Object, default: function () {
                    return {all: "全部", positive: "满意", negative: "不满意"}
                }
            }
        }, computed: {
            positives: function () {
                return this.ratings.filter(function (e) {
                    return e.rateType === a
                })
            }, negatives: function () {
                return this.ratings.filter(function (e) {
                    return e.rateType === i
                })
            }
        }, methods: {
            select: function (e, t) {
                t._constructed && this.$emit("select", e)
            }, toggleSelect: function (e) {
                e._constructed && this.$emit("toggle")
            }
        }
    }
}, function (e, t, a) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = a(2), r = i(s), c = a(4), o = i(c), n = a(5), l = i(n), m = a(6), p = i(m), d = a(48);
    t.default = {
        props: {seller: {type: Object}}, data: function () {
            var e = this;
            return {
                favorite: function () {
                    return (0, d.loadFromLocal)(e.seller.id, "favorite", !1)
                }()
            }
        }, watch: {
            seller: function () {
                var e = this;
                this.$nextTick(function () {
                    e._initScroll(), e._initPics()
                })
            }
        }, mounted: function () {
            var e = this;
            this.$nextTick(function () {
                e._initScroll(), e._initPics()
            })
        }, computed: {
            favoriteText: function () {
                return this.favorite ? "已收藏" : "收藏"
            }
        }, methods: {
            toggleFavorite: function (e) {
                e._constructed && (this.favorite = !this.favorite, (0, d.saveToLocal)(this.seller.id, "favorite", this.favorite))
            }, _initScroll: function () {
                this.scroll ? this.scroll.refresh() : this.scroll = new r.default(this.$refs.seller, {click: !0})
            }, _initPics: function () {
                var e = this;
                if (this.seller.pics) {
                    var t = 120, a = 6, i = (t + a) * this.seller.pics.length;
                    this.$refs.picList.style.width = i + "px", this.$nextTick(function () {
                        e.picScroll ? e.picScroll.refresh() : e.picScroll = new r.default(e.$refs.picWrapper, {
                                scrollX: !0,
                                eventPassthrough: "vertical"
                            })
                    })
                }
            }
        }, components: {star: p.default, split: l.default, icon: o.default}
    }
}, function (e, t, a) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = a(3), r = i(s), c = a(2), o = i(c);
    t.default = {
        data: function () {
            return {balls: [{show: !1}, {show: !1}, {show: !1}, {show: !1}, {show: !1}], dropBalls: [], fold: !0}
        }, props: {
            selectFoods: {
                type: Array, default: function () {
                    return []
                }
            }, deliveryPrice: {type: Number, default: 0}, minPrice: {type: Number, default: 0}
        }, computed: {
            totalPrice: function () {
                var e = 0;
                return this.selectFoods.forEach(function (t) {
                    e += t.price * t.count
                }), e
            }, totalCount: function () {
                var e = 0;
                return this.selectFoods.forEach(function (t) {
                    e += t.count
                }), e
            }, payDesc: function () {
                var e = this.minPrice - this.totalPrice;
                return 0 === this.totalPrice ? "￥" + this.minPrice + "起送" : this.totalPrice < this.minPrice ? "还差￥" + e + "起送" : this.totalPrice >= this.minPrice ? "去结算" : void 0
            }, payClass: function () {
                return this.totalPrice < this.minPrice ? "not-enough" : "enough"
            }, listShow: function () {
                var e = this;
                if (!this.totalCount)return this.fold = !0, !1;
                var t = !this.fold;
                return t && this.$nextTick(function () {
                    e.scroll ? e.scroll.refresh() : e.scroll = new o.default(e.$refs.listContent, {click: !0})
                }), t
            }
        }, methods: {
            drop: function (e) {
                for (var t = 0; t < this.balls.length; t++) {
                    var a = this.balls[t];
                    if (!a.show)return a.show = !0, a.el = e, void this.dropBalls.push(a)
                }
            }, beforeDrop: function (e) {
                for (var t = this.balls.length; t--;) {
                    var a = this.balls[t];
                    if (a.show) {
                        var i = a.el.getBoundingClientRect(), s = i.left - 32, r = -(window.innerHeight - i.top - 22);
                        e.style.display = "", e.style.webkitTransform = "translate3d(0," + r + "px,0)", e.style.transform = "translate3d(0," + r + "px,0)";
                        var c = e.getElementsByClassName("inner-hook")[0];
                        c.style.webkitTransform = "translate3d(" + s + "px,0,0)", c.style.transform = "translate3d(" + s + "px,0,0)"
                    }
                }
            }, dropping: function (e, t) {
                e.offsetHeight;
                this.$nextTick(function () {
                    e.style.webkitTransform = "translate3d(0,0,0)", e.style.transform = "translate3d(0,0,0)";
                    var a = e.getElementsByClassName("inner-hook")[0];
                    a.style.webkitTransform = "translate3d(0,0,0)", a.style.transform = "translate3d(0,0,0)", e.addEventListener("transitionend", t)
                })
            }, afterDrop: function (e) {
                var t = this.dropBalls.shift();
                t && (t.show = !1, e.style.display = "none")
            }, toggleList: function () {
                this.totalCount && (this.fold = !this.fold)
            }, empty: function () {
                this.selectFoods.forEach(function (e) {
                    e.count = 0
                })
            }, pay: function () {
                this.totalPrice < this.minPrice || window.alert("请支付" + this.totalPrice + "元")
            }
        }, components: {cartcontrol: r.default}
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {}
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var a = 5, i = "on", s = "half", r = "off";
    t.default = {
        props: {size: {type: Number}, score: {type: Number}}, computed: {
            starStyle: function () {
                return "star-" + this.size
            }, itemClasses: function () {
                for (var e = [], t = Math.floor(2 * this.score) / 2, c = Math.floor(t), o = t % 1, n = 0; n < c; n++)e.push(i);
                for (o && e.push(s); e.length < a;)e.push(r);
                return e
            }
        }
    }
}]);