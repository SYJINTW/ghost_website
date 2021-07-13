var latTaipei = 25.041832276355585;
var lngTaipei = 121.53702779432545;
var latTaichung = 24.14849;
var lngTaichung = 120.6613;
var viewClick = "Addr";
var latValue = 25.041832276355585;
var lngValue = 121.53702779432545;
var zoomValue = 13;

function change() {
    if (document.getElementById('location').innerText === "Taipei City") {
        console.log(1);
        latValue = 25.041832276355585;
        lngValue = 121.53702779432545;
        zoomValue = 13;
        initMap();
    } else if (document.getElementById('location').innerText === "New Taipei City") {
        console.log(2);
        latValue = 25.009286078347056;
        lngValue = 121.48402021633855;
        zoomValue = 13;
        initMap();
    } else if (document.getElementById('location').innerText === "Taoyuan City") {
        console.log(3);
        latValue = 24.97427610077421;
        lngValue = 121.26117116240962;
        zoomValue = 13;
        initMap();
    } else if (document.getElementById('location').innerText === "Taichung City") {
        console.log(4);
        latValue = 24.14849;
        lngValue = 120.6613;
        zoomValue = 13;
        initMap();
    } else if (document.getElementById('location').innerText === "Tainan City") {
        console.log(5);
        latValue = 22.99944757684837;
        lngValue = 120.247570596128;
        zoomValue = 13;
        initMap();
    } else if (document.getElementById('location').innerText === "Kaohsiung City") {
        console.log(6);
        latValue = 22.633299281554834;
        lngValue = 120.33670233748707;
        zoomValue = 13;
        initMap();
    } else {
        latValue = 25.041832276355585;
        lngValue = 121.53702779432545;
        zoomValue = 13;
    }
}

    function initMap() {
        document.getElementById('viewClick').innerText = "Addr";
        var markers = [];
        var infoWindows = [];
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: latValue, lng: lngValue },
            zoom: zoomValue,
            styles: [{
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#242f3e"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#263c3f"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6b9a76"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#38414e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#212a37"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9ca5b3"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#746855"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#1f2835"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#f3d19c"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2f3948"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d59563"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#515c6d"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#17263c"
                    }
                ]
            }
            ]
        });
        var geocoder = new google.maps.Geocoder();
        console.log(geocoder);


        //info windows
        var info_config = [
            // taipei
            // 1
            '<h2>真耶穌教會台北教會</h2>' +
            '<span><a href="https://taipei.tjchurch.org.tw/">https://taipei.tjchurch.org.tw/</a></span><br/>' +
            '<span>地址：106台北市大安區新生南路二段26號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 2
            '<h2>台北旌旗教會</h2>' +
            '<span><a href="https://www.bannerch.org/">https://www.bannerch.org/</a></span><br/>' +
            '<span>地址：110台北市信義區忠孝東路四段563號5樓</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 3
            '<h2>基督復臨安息日會台北教會</h2>' +
            '<span>地址：106台北市大安區新生南路二段26號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 4
            '<h2>基督教行道會</h2>' +
            '<span><a href="http://www.tpechurch.org/">http://www.tpechurch.org/</a></span><br/>' +
            '<span>地址：106台北市大安區忠孝東路四段181巷17號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 5
            '<h2>台灣基督長老教會濟南教會</h2>' +
            '<span><a href="http://www.chi-nanchurch.tw/">http://www.chi-nanchurch.tw/</a></span><br/>' +
            '<span>地址：100台北市中正區中山南路3號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 6 改
            '<h2>台北公館長老教會</h2>' +
            '<span><a href="https://www.facebook.com/TPEKKC/">https://www.facebook.com/TPEKKC/</a></span><br/>' +
            '<span>地址：11676台北市文山區汀州路四段85巷2號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 7
            '<h2>台北新生命小組教會</h2>' +
            '<span><a href="https://www.newlife.org.tw/">https://www.newlife.org.tw/</a></span><br/>' +
            '<span>地址：106台北市大安區仁愛路四段101號B1</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 8
            '<h2>財團法人臺灣聖教會臺北教會</h2>' +
            '<span>地址：105台北市松山區南京東路四段107號12樓</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 9
            '<h2>好消息臺北教會</h2>' +
            '<span><a href="http://goodnewsxt.com/">http://goodnewsxt.com/</a></span><br/>' +
            '<span>地址：112台北市北投區大興街31號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 10
            '<h2>基督教佳音教會</h2>' +
            '<span><a href="http://www.gnc.org.tw/">http://www.gnc.org.tw/</a></span><br/>' +
            '<span>地址：110台北市信義區忠孝東路四段500號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 11
            '<h2>中山基督長老教會</h2>' +
            '<span><a href="http://www.tcschurch.org.tw/">http://www.tcschurch.org.tw/</a></span><br/>' +
            '<span>地址：10491台北市中山區林森北路62號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 12
            '<h2>台灣基督長老教會台北和平教會</h2>' +
            '<span><a href="https://www.taipeihoping.org/">https://www.taipeihoping.org/</a></span><br/>' +
            '<span>地址：106011台北市大安區和平東路一段183巷9號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 13
            '<h2>基督教循理會</h2>' +
            '<span>地址：106台北市大安區大安路一段188號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 14
            '<h2>台灣基督長老教會台北大安長老教會</h2>' +
            '<span><a href="http://www.taian.org.tw/">http://www.taian.org.tw/</a></span><br/>' +
            '<span>地址：106台北市大安區和平東路三段1巷51號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 15
            '<h2>台北市 神的教會</h2>' +
            '<span><a href="https://churchofgod.org.tw/">https://churchofgod.org.tw/</a></span><br/>' +
            '<span>地址：103台北市大同區長安西路9FNo.342號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 16
            '<h2>台灣國際基督教會</h2>' +
            '<span><a href="https://www.taiwanchurch.org.tw/">https://www.taiwanchurch.org.tw/</a></span><br/>' +
            '<span>地址：106台北市大安區復興南路二段268號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',


            // xinbei
            // 1
            '<h2>臺灣基督長老教會厚德教會</h2>' +
            '<span><a href="http://www.pct.org.tw/">http://www.pct.org.tw/</a></span><br/>' +
            '<span>地址：241新北市三重區三和路四段16號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 2
            '<h2>台灣基督長老教會重新教會</h2>' +
            '<span><a href="http://www.cspc.org.tw/"><http://www.cspc.org.tw//a></span><br/>' +
            '<span>地址：24143新北市三重區中寮街16巷23號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 3
            '<h2>台灣基督長老教會三重埔教會</h2>' +
            '<span><a href="http://www.scppct.org.tw/home">http://www.scppct.org.tw/home</a></span><br/>' +
            '<span>地址：241新北市三重區自強路一段65號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 4
            '<h2>台灣基督長老教會新北教會</h2>' +
            '<span><a href="https://newtaipeipct2.wixsite.com/altar">https://newtaipeipct2.wixsite.com/altar</a></span><br/>' +
            '<span>地址：241新北市三重區溪尾街14號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 5
            '<h2>基督教三重靈糧堂</h2>' +
            '<span>地址：241新北市三重區中正北路2-1號B1F2F</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 6
            '<h2>基督教三重聖教會</h2>' +
            '<span>地址：241新北市三重區中正北路35號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 7
            '<h2>真耶穌教會三重教會</h2>' +
            '<span><a href=""http://www.sctjc.org.tw/>http://www.sctjc.org.tw/</a></span><br/>' +
            '<span>地址：241新北市三重區文化北路57號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 8
            '<h2>真耶穌教會二重教會</h2>' +
            '<span><a href="https://www.tjc.org.tw/?gpid=4">https://www.tjc.org.tw/?gpid=4</a></span><br/>' +
            '<span>地址：241新北市三重區新北大道一段76號</span><br/>',
            // 9
            '<h2>重陽教會</h2>' +
            '<span><a href="http://www.pct.org.tw/churchdata.aspx?strOrgNo=C03031">http://www.pct.org.tw/churchdata.aspx?strOrgNo=C03031</a></span><br/>' +
            '<span>地址：241新北市三重區自強路一段232號號</span><br/>',
            // 10
            '<h2>板橋主恩教會（改革宗教會）</h2>' +
            '<span><a href="https://www.facebook.com/Grace-Banqiao-%E6%9D%BF%E6%A9%8B%E4%B8%BB%E6%81%A9%E6%95%99%E6%9C%83-319039398458231/">https://www.facebook.com/Grace-Banqiao-%E6%9D%BF%E6%A9%8B%E4%B8%BB%E6%81%A9%E6%95%99%E6%9C%83-319039398458231/</a></span><br/>' +
            '<span>地址：220新北市板橋區民生路三段29巷1號</span><br/>',
            // 11
            '<h2>三重士林靈糧堂福音中心</h2>' +
            '<span>地址：241新北市三重區三和路四段133號2樓</span><br/>',
            // // 12
            // '<h2></h2>'+
            // '<span><a href=""></a></span><br/>'+
            // '<span>地址：</span><br/>',
            // // '<img class="infoImg" src=""><br/>'+
            // // '<i>(圖片取自google map)</i>',
            // // 13
            // '<h2></h2>'+
            // '<span><a href=""></a></span><br/>'+
            // '<span>地址：</span><br/>',
            // // '<img class="infoImg" src=""><br/>'+
            // // '<i>(圖片取自google map)</i>',
            // // 14
            // '<h2></h2>'+
            // '<span><a href=""></a></span><br/>'+
            // '<span>地址：</span><br/>',
            // // '<img class="infoImg" src=""><br/>'+
            // // '<i>(圖片取自google map)</i>',
            // // 15
            // '<h2></h2>'+
            // '<span><a href=""></a></span><br/>'+
            // '<span>地址：</span><br/>',
            // // '<img class="infoImg" src=""><br/>'+
            // // '<i>(圖片取自google map)</i>',

            // taichung
            // 1
            '<h2>台中旌旗教會</h2>' +
            '<span><a href="https://www.bannerch.org/">https://www.bannerch.org/</a></span><br/>' +
            '<span>地址：408台中市南屯區文心南五路三段160號</span><br/>',
            // 2
            '<h2>台灣基督長老教會忠孝路教會(建成堂區)</h2>' +
            '<span><a href="http://www.chunghsiao.org.tw/">http://www.chunghsiao.org.tw/</a></span><br/>' +
            '<span>地址：401台中市東區建成路738號</span><br/>',
            // 3
            '<h2>基督救恩之光教會</h2>' +
            '<span><a href="https://www.slc.org.tw/">https://www.slc.org.tw/</a></span><br/>' +
            '<span>地址：40463台中市北區進化路428號</span><br/>',
            // 4
            '<h2>豐富教會（台中思恩堂）</h2>' +
            '<span><a href="https://www.abundance.org.tw/">https://www.abundance.org.tw/</a></span><br/>' +
            '<span>地址：408台中市南屯區五權西路二段131號B1</span><br/>',
            // 5
            '<h2>台灣基督長老教會北屯教會</h2>' +
            '<span>地址：404台中市北屯區國豐街239巷12號</span><br/>',
            // 6
            '<h2>真耶穌教會南台中教會</h2>' +
            '<span><a href="http://www.tjcstc.org/">http://www.tjcstc.org/</a></span><br/>' +
            '<span>地址：40251台中市南區信義南街50號</span><br/>',
            // 7
            '<h2>台中烈火教會</h2>' +
            '<span><a href="http://www.blazingchurch.tw/">http://www.blazingchurch.tw/</a></span><br/>' +
            '<span>地址：40758台中市西屯區大隆路167號</span><br/>',
            // 8
            '<h2>真耶穌教會台中教會</h2>' +
            '<span><a href="http://tw.tjc-tc.org/">http://tw.tjc-tc.org/</a></span><br/>' +
            '<span>地址：40046台中市中區公園路115號</span><br/>',
            // 9
            '<h2>台中國際基督教會</h2>' +
            '<span><a href="https://www.facebook.com/taichungchurchofchrist/?modal=admin_todo_tour">https://www.facebook.com/taichungchurchofchrist/?modal=admin_todo_tour</a></span><br/>' +
            '<span>地址：403台中市西區忠明南路42號7樓</span><br/>',
            // 10
            '<h2>台灣基督長老教會杏林教會</h2>' +
            '<span>地址：407台中市西屯區台灣大道三段556巷1弄5號</span><br/>',

            // // changhua
            // // 1
            // '<h2>中華大家功德會(彰化)</h2>'+
            // '<span><a href="http://www.dajia.org.tw/RWD01/OnePage.aspx?tid=89">http://www.dajia.org.tw/RWD01/OnePage.aspx?tid=89</a></span><br/>'+
            // '<span>地址：彰化縣員林是莒光路513號(員林基督教醫院對面)</span><br/>',
            // // '<img class="infoImg" src=""><br/>'+
            // // '<i>(圖片取自google map)</i>',

            // kaohsiung
            // 1
            '<h2>阿榮通訊食物銀行</h2>' +
            '<span><a href="https://www.facebook.com/groups/217928308379515/">https://www.facebook.com/groups/217928308379515/</a></span><br/>' +
            '<span>地址：高雄市苓雅區光華一路142號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 2
            '<h2>阿們愛心冰箱(Solidarity Fridge)</h2>' +
            '<span><a href="https://www.facebook.com/groups/350488518616424/">https://www.facebook.com/groups/350488518616424/</a></span><br/>' +
            '<span>地址：高雄市鳳山區青年路二段518巷5號</span><br/>' +
            '<span>時間：週一至週五 10:00 - 12:00、18:00 - 19:00</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',
            // 3
            '<h2>幸運草複合式餐飲</h2>' +
            '<span><a href="https://www.facebook.com/pages/%E5%B9%B8%E9%81%8B%E8%8D%89%E8%A4%87%E5%90%88%E5%BC%8F%E9%A4%90%E9%A3%B2/676123805824411">https://www.facebook.com/pages/%E5%B9%B8%E9%81%8B%E8%8D%89%E8%A4%87%E5%90%88%E5%BC%8F%E9%A4%90%E9%A3%B2/676123805824411</a></span><br/>' +
            '<span>地址：高雄市楠梓區海專路155號</span><br/>',
            // '<img class="infoImg" src=""><br/>'+
            // '<i>(圖片取自google map)</i>',

            // //chiayi
            // // 1
            // '<h2>分享愛 愛心冰箱</h2>'+
            // '<span>地址：嘉義市新民路728巷14號</span><br/>'
            // // '<img class="infoImg" src=""><br/>'+
            // // '<i>(圖片取自google map)</i>',

            // // tainan
            // // 1
            // '<h2></h2>'+
            // '<span><a href=""></a></span><br/>'+
            // '<span>地址：</span><br/>',
            // // 2
            // '<h2></h2>'+
            // '<span><a href=""></a></span><br/>'+
            // '<span>地址：</span><br/>',
            // // 3
            // '<h2></h2>'+
            // '<span><a href=""></a></span><br/>'+
            // '<span>地址：</span><br/>',
            // // 4
            // '<h2></h2>'+
            // '<span><a href=""></a></span><br/>'+
            // '<span>地址：</span><br/>',
            // // 5
            // '<h2></h2>'+
            // '<span><a href=""></a></span><br/>'+
            // '<span>地址：</span><br/>',
            // // 6
            // '<h2></h2>'+
            // '<span><a href=""></a></span><br/>'+
            // '<span>地址：</span><br/>',
            // // 7
            // '<h2></h2>'+
            // '<span><a href=""></a></span><br/>'+
            // '<span>地址：</span><br/>',
            // // 8
            // '<h2></h2>'+
            // '<span><a href=""></a></span><br/>'+
            // '<span>地址：</span><br/>',
            // // 9
            // '<h2></h2>'+
            // '<span><a href=""></a></span><br/>'+
            // '<span>地址：</span><br/>',
            // // 10
            // '<h2></h2>'+
            // '<span><a href=""></a></span><br/>'+
            // '<span>地址：</span><br/>',
        ];

        var iconpng = "https://img.icons8.com/metro/28/ffffff/book-stack.png";

        //建立地圖 marker 的集合
        var marker_config = [{
            // taipei
            // 1
            position: { lat: 25.04202438696522, lng: 121.52627820276828 },
            map: map,
            title: '真耶穌教會台北教會',
            icon: iconpng
        }, {
            // 2
            position: { lat: 25.042094057990575, lng: 121.56423254205902 },
            map: map,
            title: '台北旌旗教會',
            icon: iconpng
        }, {
            // 3
            position: { lat: 25.032514774694384, lng: 121.53281199972983 },
            map: map,
            title: '基督復臨安息日會台北教會',
            icon: iconpng
        }, {
            // 4
            position: { lat: 25.04272457700542, lng: 121.5508728711308 },
            map: map,
            title: '基督教行道會',
            icon: iconpng
        }, {
            // 5
            position: { lat: 25.0435177164012, lng: 121.5195384999662 },
            map: map,
            title: '台灣基督長老教會濟南教會',
            icon: iconpng
        }, {
            // 6
            position: { lat: 25.007466492092597, lng: 121.53755278217507 },
            map: map,
            title: '台北公館長老教會',
            icon: iconpng
        }, {
            // 7
            position: { lat: 25.038769297304906, lng: 121.54831541775737 },
            map: map,
            title: '台北新生命小組教會',
            icon: iconpng
        }, {
            // 8
            position: { lat: 25.05194052167064, lng: 121.55467622880164 },
            map: map,
            title: '財團法人臺灣聖教會臺北教會',
            icon: iconpng
        }, {
            // 9
            position: { lat: 25.130193242487312, lng: 121.49884005089008 },
            map: map,
            title: '好消息臺北教會',
            icon: iconpng
        }, {
            // 10
            position: { lat: 25.043201953244203, lng: 121.56207408120153 },
            map: map,
            title: '基督教佳音教會',
            icon: iconpng
        }, {
            // 11
            position: { lat: 25.049027744267267, lng: 121.52433409936442 },
            map: map,
            title: '中山基督長老教會',
            icon: iconpng
        }, {
            // 12
            position: { lat: 25.027580683133017, lng: 121.53312189811845 },
            map: map,
            title: '台灣基督長老教會台北和平教會',
            icon: iconpng
        }, {
            // 13
            position: { lat: 25.035923819021335, lng: 121.54591269076975 },
            map: map,
            title: '基督教循理會',
            icon: iconpng
        }, {
            // 14
            position: { lat: 25.026737717677296, lng: 121.54689854044763 },
            map: map,
            title: '台灣基督長老教會台北大安長老教會',
            icon: iconpng
        }, {
            // 15
            position: { lat: 25.052023391747547, lng: 121.51027401775735 },
            map: map,
            title: '台北市 神的教會',
            icon: iconpng
        }, {
            // 16
            position: { lat: 25.028956026574896, lng: 121.54276576073855 },
            map: map,
            title: '台灣國際基督教會',
            icon: iconpng
        },

        //xinbei
        {
            // 1
            position: { lat: 25.0745170644433, lng: 121.49136184076457 },
            map: map,
            title: '臺灣基督長老教會厚德教會',
            icon: iconpng
        }, {
            // 2
            position: { lat: 25.060841573454784, lng: 121.49283571480123 },
            map: map,
            title: '台灣基督長老教會重新教會',
            icon: iconpng
        }, {
            // 3
            position: { lat: 25.068000025013152, lng: 121.49755608411807 },
            map: map,
            title: '台灣基督長老教會三重埔教會',
            icon: iconpng
        }, {
            // 4
            position: { lat: 25.076279685053702, lng: 121.49073254480535 },
            map: map,
            title: '台灣基督長老教會新北教會',
            icon: iconpng
        }, {
            // 5
            position: { lat: 25.064226392933982, lng: 121.48893503809332 },
            map: map,
            title: '基督教三重靈糧堂',
            icon: iconpng
        }, {
            // 6
            position: { lat: 25.063565530519874, lng: 121.49078039778168 },
            map: map,
            title: '基督教三重聖教會',
            icon: iconpng
        }, {
            // 7
            position: { lat: 25.066908680251135, lng: 121.49829058255985 },
            map: map,
            title: '真耶穌教會三重教會',
            icon: iconpng
        }, {
            // 8
            position: { lat: 25.062764281608377, lng: 121.48680722219237 },
            map: map,
            title: '真耶穌教會二重教會',
            icon: iconpng
        }, {
            // 9
            position: { lat: 25.068016557453973, lng: 121.49314983809329 },
            map: map,
            title: '重陽教會',
            icon: iconpng
        }, {
            // 10
            position: { lat: 25.02635878937896, lng: 121.46645473042135 },
            map: map,
            title: '板橋主恩教會（改革宗教會）',
            icon: iconpng
        }, {
            // 11
            position: { lat: 25.07905041453368, lng: 121.4848917915092 },
            map: map,
            title: '三重士林靈糧堂福音中心',
            icon: iconpng
        },// {
        // // 12
        // position: {lat: , lng: },
        // map: map,
        // title:'',
        // icon: "https://img.icons8.com/metro/32/ffffff/book-stack.png"
        // },{
        // // 13
        // position: {lat: , lng: },
        // map: map,
        // title:'',
        // icon: "https://img.icons8.com/metro/32/ffffff/book-stack.png"
        // },{
        // // 14
        // position: {lat: , lng: },
        // map: map,
        // title:'',
        // icon: "https://img.icons8.com/metro/32/ffffff/book-stack.png"
        // },{
        // // 15
        // position: {lat: , lng: },
        // map: map,
        // title:'',
        // icon: "https://img.icons8.com/metro/32/ffffff/book-stack.png"
        // },            

        // taichung
        {
            // 1
            position: { lat: 24.15153335329415, lng: 120.6293759967866 },
            map: map,
            title: '台中旌旗教會',
            icon: iconpng
        }, {
            // 2
            position: { lat: 24.140881711705926, lng: 120.68911415227927 },
            map: map,
            title: '台灣基督長老教會忠孝路教會(建成堂區)',
            icon: iconpng
        }, {
            // 3
            position: { lat: 24.163750319441327, lng: 120.69495063873545 },
            map: map,
            title: '基督救恩之光教會',
            icon: iconpng
        }, {
            // 4
            position: { lat: 24.145581074774544, lng: 120.64894539255144 },
            map: map,
            title: '豐富教會（台中思恩堂）',
            icon: iconpng
        }, {
            // 5
            position: { lat: 24.17032820180801, lng: 120.69460731600273 },
            map: map,
            title: '台灣基督長老教會北屯教會',
            icon: iconpng
        }, {
            // 6
            position: { lat: 24.136182175885722, lng: 120.67126137017802 },
            map: map,
            title: '真耶穌教會南台中教會',
            icon: iconpng
        }, {
            // 7
            position: { lat: 24.16500327554131, lng: 120.64860206981872 },
            map: map,
            title: '台中烈火教會',
            icon: iconpng
        }, {
            // 8
            position: { lat: 24.155605805163752, lng: 120.67778450209963 },
            map: map,
            title: '真耶穌教會台中教會',
            icon: iconpng
        }, {
            // 9
            position: { lat: 24.164690037668827, lng: 120.65924507453293 },
            map: map,
            title: '台中國際基督教會',
            icon: iconpng
        }, {
            // 10
            position: { lat: 24.177532160304544, lng: 120.64207893789711 },
            map: map,
            title: '台灣基督長老教會杏林教會',
            icon: iconpng
        },

            // // changhua
            // {
            // // 1
            // position: {lat: 23.96245, lng: 120.56645},
            // map: map,
            // title:'中華大家功德會(彰化)',
            // icon: iconpng
            // },

            // // kaohsiung
            // {
            // // 1
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 2
            // position: {lat: , lng: 1},
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 3
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 4
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 5
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 6
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 7
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 8
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 9
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 10
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },

            // // chiayi
            // {
            // // 1
            // position: {lat: 23.46901, lng: 120.44055},
            // map: map,
            // title:'分享愛 愛心冰箱',
            // icon: iconpng
            // }

            // // tainan
            // {
            // // 1
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 2
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 3
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 4
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 5
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 6
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 7
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 8
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 9
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },{
            // // 10
            // position: {lat: , lng: },
            // map: map,
            // title:'',
            // icon: iconpng
            // },
        ];

        //設定 Info window 內容
        info_config.forEach(function (e, i) {
            infoWindows[i] = new google.maps.InfoWindow({
                content: e,
            });
        });


        //標出 marker
        marker_config.forEach(function (e, i) {
            markers[i] = new google.maps.Marker(e);
            markers[i].setMap(map);
            markers[i].addListener('click', view);
            function view() {
                viewClick = marker_config[i].title;
                document.getElementById('viewClick').innerHTML = viewClick;
            }
            markers[i].addListener('mouseover', openMark);
            function openMark() {
                infoWindows[i].open(map, markers[i]);
            }
            markers[i].addListener('mouseout', closeMark);
            function closeMark() {
                infoWindows[i].close(map, markers[i]);
            }
        });
        function _geocoder(address) {
            geocoder.geocode({
                address: address
            }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    LatLng = results[0].geometry.location;
                    return results;
                }
            });
        }

    }

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    change();
  });
});