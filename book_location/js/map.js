var latTaipei = 25.041832276355585;
var lngTaipei = 121.53702779432545;
var latTaichung = 24.14849;
var lngTaichung = 120.6613;
var viewClick = "Addr";
var latValue = 25.04158376394142;
var lngValue = 121.53720928544476;
var zoomValue = 14;

function change() {
    if (document.getElementById('location').innerText === "Taipei City") {
        latValue = 25.04158376394142;
        lngValue = 121.53720928544476;
        zoomValue = 14;
        initMap();
    } else if (document.getElementById('location').innerText === "New Taipei City") {
        latValue = 25.009286078347056;
        lngValue = 121.48402021633855;
        zoomValue = 14;
        initMap();
    } else if (document.getElementById('location').innerText === "Taoyuan City") {
        latValue = 24.972795991709425;
        lngValue = 121.258160611598;
        zoomValue = 14;
        initMap();
    } else if (document.getElementById('location').innerText === "Taichung City") {
        latValue = 24.161599333581254;
        lngValue = 120.66801474523636;
        zoomValue = 14;
        initMap();
    } else if (document.getElementById('location').innerText === "Tainan City") {
        latValue = 22.996808748048963;
        lngValue = 120.2025624479405;
        zoomValue = 14;
        initMap();
    } else if (document.getElementById('location').innerText === "Kaohsiung City") {
        latValue = 22.634953502476975;
        lngValue = 120.33654760681225;
        zoomValue = 14;
        initMap();
    } else {
        latValue = 25.04158376394142;
        lngValue = 121.53720928544476;
        zoomValue = 14;
    }
}

function CenterControl(controlDiv, map) {
    // Set CSS for the control border.
    const controlUI = document.createElement("div");
    controlUI.style.backgroundColor = "#fff";
    controlUI.style.border = "2px solid #fff";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginTop = "8px";
    controlUI.style.marginBottom = "22px";
    controlUI.style.textAlign = "center";
    controlUI.title = "Click to recenter the map";
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior.
    const controlText = document.createElement("div");
    controlText.style.color = "rgb(25,25,25)";
    controlText.style.fontFamily = "'Kanit', sans-serif";
    controlText.style.fontSize = "16px";
    controlText.style.lineHeight = "38px";
    controlText.style.paddingLeft = "5px";
    controlText.style.paddingRight = "5px";
    controlText.innerHTML = "Center Map";
    controlUI.appendChild(controlText);
    controlUI.addEventListener("click", () => {
      map.setCenter({lat: latValue, lng: lngValue});
    });
}
    
    function initMap() {
        document.getElementById('viewClick').innerText = "Addr";
        var markers = [];
        var infoWindows = [];
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: latValue, lng: lngValue },
            zoom: zoomValue,
            disableDefaultUI: true,
            scaleControl: false,
            draggable: false,
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

        const centerControlDiv = document.createElement("div");
        CenterControl(centerControlDiv, map);
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

        var geocoder = new google.maps.Geocoder();
        console.log(geocoder);

        //info windows
        var info_config = [
            // Taipei
            // 1
            '<h2 class="mapTitle">真耶穌教會台北教會</h2>' +
            '<span class="mapAddr">地址：106台北市大安區新生南路二段26號</span><br/>',
            // 2
            '<h2 class="mapTitle">台北旌旗教會</h2>' +
            '<span class="mapAddr">地址：110台北市信義區忠孝東路四段563號5樓</span><br/>',
            // 3
            '<h2 class="mapTitle">基督復臨安息日會台北教會</h2>' +
            '<span class="mapAddr">地址：106台北市大安區新生南路二段26號</span><br/>',
            // 4
            '<h2 class="mapTitle">基督教行道會</h2>' +
            '<span class="mapAddr">地址：106台北市大安區忠孝東路四段181巷17號</span><br/>',
            // 5
            '<h2 class="mapTitle">台灣基督長老教會濟南教會</h2>' +
            '<span class="mapAddr">地址：100台北市中正區中山南路3號</span><br/>',
            // 6
            '<h2 class="mapTitle">台北新生命小組教會</h2>' +
            '<span class="mapAddr">地址：106台北市大安區仁愛路四段101號B1</span><br/>',
            // 7
            '<h2 class="mapTitle">財團法人臺灣聖教會臺北教會</h2>' +
            '<span class="mapAddr">地址：105台北市松山區南京東路四段107號12樓</span><br/>',
            // 8
            '<h2 class="mapTitle">基督教佳音教會</h2>' +
            '<span class="mapAddr">地址：110台北市信義區忠孝東路四段500號</span><br/>',
            // 9
            '<h2 class="mapTitle">中山基督長老教會</h2>' +
            '<span class="mapAddr">地址：10491台北市中山區林森北路62號</span><br/>',
            // 10
            '<h2 class="mapTitle">台灣基督長老教會台北和平教會</h2>' +
            '<span class="mapAddr">地址：106011台北市大安區和平東路一段183巷9號</span><br/>',
            // 11
            '<h2 class="mapTitle">基督教循理會</h2>' +
            '<span class="mapAddr">地址：106台北市大安區大安路一段188號</span><br/>',
            // 12
            '<h2 class="mapTitle">台灣基督長老教會台北大安長老教會</h2>' +
            '<span class="mapAddr">地址：106台北市大安區和平東路三段1巷51號</span><br/>',
            // 13
            '<h2 class="mapTitle">台北市 神的教會</h2>' +
            '<span class="mapAddr">地址：103台北市大同區長安西路9FNo.342號</span><br/>',
            // 14
            '<h2 class="mapTitle">台灣國際基督教會</h2>' +
            '<span class="mapAddr">地址：106台北市大安區復興南路二段268號</span><br/>',

            // Xinbei
            // 1
            '<h2 class="mapTitle">臺灣基督長老教會中和教會</h2>' +
            '<span class="mapAddr">地址：235新北市中和區員山路129巷3號</span><br/>',
            // 2
            '<h2 class="mapTitle">雙和長老教會</h2>' +
            '<span class="mapAddr">地址：234新北市永和區中和路389巷5號</span><br/>',
            // 3
            '<h2 class="mapTitle">中華基督教積穗教會</h2>' +
            '<span class="mapAddr">地址：235新北市中和區中山路三段179巷19號2樓</span><br/>',
            // 4
            '<h2 class="mapTitle">板橋教會</h2>' +
            '<span class="mapAddr">地址：220板橋區民族路37號</span><br/>',
            // 5
            '<h2 class="mapTitle">台北信友堂板新分堂</h2>' +
            '<span class="mapAddr">地址：220新北市板橋區重慶路66號</span><br/>',
            // 6
            '<h2 class="mapTitle">民享長老教會</h2>' +
            '<span class="mapAddr">地址：220新北市板橋區民族路219巷10號</span><br/>',
            // 7
            '<h2 class="mapTitle">台灣基督長老教會永光教會</h2>' +
            '<span class="mapAddr">地址：23454新北市永和區中正路145號</span><br/>',
            // 8
            '<h2 class="mapTitle">永和聖教會</h2>' +
            '<span class="mapAddr">地址：234新北市永和區秀朗路二段24巷28弄2號</span><br/>',
            // 9
            '<h2 class="mapTitle">真耶穌教會永和教會</h2>' +
            '<span class="mapAddr">地址：234新北市永和區永貞路273號</span><br/>',
            // 10
            '<h2 class="mapTitle">板橋主恩教會（改革宗教會）</h2>' +
            '<span class="mapAddr">地址：220新北市板橋區民生路三段29巷1號</span><br/>',
            // 11
            '<h2 class="mapTitle">明穗教會</h2>' +
            '<span class="mapAddr">地址：235新北市中和區民享街90巷41號</span><br/>',
            // // 12
            // '<h2 class="mapTitle"></h2>'+
            // '<span class="mapAddr">地址：</span><br/>',
            // // 13
            // '<h2 class="mapTitle"></h2>'+
            // '<span class="mapAddr">地址：</span><br/>',
            // // 14
            // '<h2 class="mapTitle"></h2>'+
            // '<span class="mapAddr">地址：</span><br/>',
            // // 15
            // '<h2 class="mapTitle"></h2>'+
            // '<span class="mapAddr">地址：</span><br/>',
            
            // Taoyuan
            // 1
            '<h2 class="mapTitle">真耶穌教會中壢教會</h2>'+
            '<span class="mapAddr">地址：32086桃園市中壢區愛國路42號</span><br/>',
            // 2
            '<h2 class="mapTitle">桃園旌旗教會</h2>'+
            '<span class="mapAddr">地址：330桃園市桃園區國際路一段1169號</span><br/>',
            // 3
            '<h2 class="mapTitle">台灣基督長老教會內壢教會</h2>'+
            '<span class="mapAddr">地址：320桃園市中壢區成章一街133號</span><br/>',
            // 4
            '<h2 class="mapTitle">中壢旌旗教會</h2>'+
            '<span class="mapAddr">地址：320桃園市中壢區中山路 No.152號,3樓  </span><br/>',
            // 5
            '<h2 class="mapTitle">中壢靈糧堂</h2>'+
            '<span class="mapAddr">地址：320桃園市中壢區杭州路71號</span><br/>',
            // 6
            '<h2 class="mapTitle">萬原基督教會</h2>'+
            '<span class="mapAddr">地址：320桃園市中壢區金山三街19號</span><br/>',
            // 7
            '<h2 class="mapTitle">基督教宣道會生命堂</h2>'+
            '<span class="mapAddr">地址：320桃園市中壢區延平路98號</span><br/>',
            // 8
            '<h2 class="mapTitle">中壢真理堂</h2>'+
            '<span class="mapAddr">地址：320桃園市中壢區復興路161號</span><br/>',
            // 9
            '<h2 class="mapTitle">耶穌基督後期聖徒教會</h2>'+
            '<span class="mapAddr">地址：320桃園市中壢區中北路二段412號</span><br/>',
            // 10
            '<h2 class="mapTitle">中壢基督教國際教會Chunli International Christian Church</h2>'+
            '<span class="mapAddr">地址：320桃園市中壢區新興路102巷12號2樓</span><br/>',

            // Taichung
            // 1
            '<h2 class="mapTitle">台中旌旗教會</h2>' +
            '<span class="mapAddr">地址：408台中市南屯區文心南五路三段160號</span><br/>',
            // 2
            '<h2 class="mapTitle">台灣基督長老教會忠孝路教會(建成堂區)</h2>' +
            '<span class="mapAddr">地址：401台中市東區建成路738號</span><br/>',
            // 3
            '<h2 class="mapTitle">基督救恩之光教會</h2>' +
            '<span class="mapAddr">地址：40463台中市北區進化路428號</span><br/>',
            // 4
            '<h2 class="mapTitle">豐富教會（台中思恩堂）</h2>' +
            '<span class="mapAddr">地址：408台中市南屯區五權西路二段131號B1</span><br/>',
            // 5
            '<h2 class="mapTitle">台灣基督長老教會北屯教會</h2>' +
            '<span class="mapAddr">地址：404台中市北屯區國豐街239巷12號</span><br/>',
            // 6
            '<h2 class="mapTitle">真耶穌教會南台中教會</h2>' +
            '<span class="mapAddr">地址：40251台中市南區信義南街50號</span><br/>',
            // 7
            '<h2 class="mapTitle">台中烈火教會</h2>' +
            '<span class="mapAddr">地址：40758台中市西屯區大隆路167號</span><br/>',
            // 8
            '<h2 class="mapTitle">真耶穌教會台中教會</h2>' +
            '<span class="mapAddr">地址：40046台中市中區公園路115號</span><br/>',
            // 9
            '<h2 class="mapTitle">台中國際基督教會</h2>' +
            '<span class="mapAddr">地址：403台中市西區忠明南路42號7樓</span><br/>',
            // 10
            '<h2 class="mapTitle">台灣基督長老教會杏林教會</h2>' +
            '<span class="mapAddr">地址：407台中市西屯區台灣大道三段556巷1弄5號</span><br/>',

            // Tainan
            // 1
            '<h2 class="mapTitle">台灣宣教紀念教會-看西街長老教會</h2>'+
            '<span class="mapAddr">地址：70059台南市中西區和平街33號</span><br/>',
            // 2
            '<h2 class="mapTitle">台南民族路基督長老教會</h2>'+
            '<span class="mapAddr">地址：700台南市中西區民族路二段132號</span><br/>',
            // 3
            '<h2 class="mapTitle">台南聖教會 Tainan Holiness Church</h2>'+
            '<span class="mapAddr">地址：70847台南市安平區府前四街90號</span><br/>',
            // 4
            '<h2 class="mapTitle">台南市極光小組教會</h2>'+
            '<span class="mapAddr">地址：708台南市安平區郡平路52號</span><br/>',
            // 5
            '<h2 class="mapTitle">台灣基督長老教會南門教會</h2>'+
            '<span class="mapAddr">地址：700台南市中西區南門路117號</span><br/>',
            // 6
            '<h2 class="mapTitle">台南旌旗教會</h2>'+
            '<span class="mapAddr">地址：701台南市東區長榮路一段176號2樓</span><br/>',
            // 7
            '<h2 class="mapTitle">台灣基督長老教會迦南教會</h2>'+
            '<span class="mapAddr">地址：700台南市中西區府連路25號</span><br/>',
            // 8
            '<h2 class="mapTitle">真耶穌教會開元教會</h2>'+
            '<span class="mapAddr">地址：704台南市北區長榮路四段100號</span><br/>',
            // 9
            '<h2 class="mapTitle">愛加倍教會</h2>'+
            '<span class="mapAddr">地址：702台南市南區建南路168號</span><br/>',
            // 10
            '<h2 class="mapTitle">東門聖教會</h2>'+
            '<span class="mapAddr">地址：701台南市東區德光街15巷18號</span><br/>',

            // Kaohsiung
            // 1
            '<h2 class="mapTitle">華忠長老教會</h2>'+
            '<span class="mapAddr">地址：807高雄市三民區有光路82號</span><br/>',
            // 2
            '<h2 class="mapTitle">台灣基督長老教會正義教會</h2>'+
            '<span class="mapAddr">地址：802高雄市苓雅區文昌路3巷8號</span><br/>',
            // 3
            '<h2 class="mapTitle">高雄市牧恩基督教會</h2>'+
            '<span class="mapAddr">地址：802高雄市苓雅區大順三路303-3號</span><br/>',
            // 4
            '<h2 class="mapTitle">高雄新生命靈糧堂</h2>'+
            '<span class="mapAddr">地址：802高雄市苓雅區中正一路120號80284 3樓2B</span><br/>',
            // 5
            '<h2 class="mapTitle">中正基督長老教會</h2>'+
            '<span class="mapAddr">地址：802苓雅區建國一路203巷2弄5號</span><br/>',
            // 6
            '<h2 class="mapTitle">高雄純福音教會</h2>'+
            '<span class="mapAddr">地址：802高雄市苓雅區光華一路 No. 129號,11樓</span><br/>',
            // 7
            '<h2 class="mapTitle">真耶穌教會高雄教會</h2>'+
            '<span class="mapAddr">地址：80145高雄市前金區中華三路69號</span><br/>',
            // 8
            '<h2 class="mapTitle">台灣基督長老教會中山教會</h2>'+
            '<span class="mapAddr">地址：806高雄市前鎮區正安街13巷8號</span><br/>',
            // 9
            '<h2 class="mapTitle">武昌教會</h2>'+
            '<span class="mapAddr">地址：802高雄市苓雅區民權一路38號</span><br/>',
            // 10
            '<h2 class="mapTitle">台灣基督長老教會重生教會</h2>'+
            '<span class="mapAddr">地址：807高雄市三民區哈爾濱街35巷8號</span><br/>',
        ];

        var iconpng = "https://img.icons8.com/metro/28/ffffff/book-stack.png";

        //建立地圖 marker 的集合
        var marker_config = [{
            // Taipei
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
            position: { lat: 25.038769297304906, lng: 121.54831541775737 },
            map: map,
            title: '台北新生命小組教會',
            icon: iconpng
        }, {
            // 7
            position: { lat: 25.05194052167064, lng: 121.55467622880164 },
            map: map,
            title: '財團法人臺灣聖教會臺北教會',
            icon: iconpng
        }, {
            // 8
            position: { lat: 25.043201953244203, lng: 121.56207408120153 },
            map: map,
            title: '基督教佳音教會',
            icon: iconpng
        }, {
            // 9
            position: { lat: 25.049027744267267, lng: 121.52433409936442 },
            map: map,
            title: '中山基督長老教會',
            icon: iconpng
        }, {
            // 10
            position: { lat: 25.027580683133017, lng: 121.53312189811845 },
            map: map,
            title: '台灣基督長老教會台北和平教會',
            icon: iconpng
        }, {
            // 11
            position: { lat: 25.035923819021335, lng: 121.54591269076975 },
            map: map,
            title: '基督教循理會',
            icon: iconpng
        }, {
            // 12
            position: { lat: 25.026737717677296, lng: 121.54689854044763 },
            map: map,
            title: '台灣基督長老教會台北大安長老教會',
            icon: iconpng
        }, {
            // 13
            position: { lat: 25.052023391747547, lng: 121.51027401775735 },
            map: map,
            title: '台北市 神的教會',
            icon: iconpng
        }, {
            // 14
            position: { lat: 25.028956026574896, lng: 121.54276576073855 },
            map: map,
            title: '台灣國際基督教會',
            icon: iconpng
        },

            // Xinbei
        {
            // 1
            position: { lat: 24.997186591576952, lng: 121.48120652970829},
            map: map,
            title: '臺灣基督長老教會中和教會',
            icon: iconpng
        }, {
            // 2
            position: { lat: 25.002476252179402, lng: 121.50764238012746},
            map: map,
            title: '雙和長老教會',
            icon: iconpng
        }, {
            // 3
            position: { lat: 25.00622628070681, lng: 121.47338196670309},
            map: map,
            title: '中華基督教積穗教會',
            icon: iconpng
        }, {
            // 4
            position: { lat: 25.0103498295866, lng: 121.4629674398996},
            map: map,
            title: '板橋教會',
            icon: iconpng
        }, {
            // 5
            position: { lat: 25.0069743080819, lng: 121.46153550792768},
            map: map,
            title: '台北信友堂板新分堂',
            icon: iconpng
        }, {
            // 6
            position: { lat: 25.008910047586276, lng: 121.46945824598178},
            map: map,
            title: '民享長老教會',
            icon: iconpng
        }, {
            // 7
            position: { lat: 24.998553646297363, lng: 121.51572428105607},
            map: map,
            title: '台灣基督長老教會永光教會',
            icon: iconpng
        }, {
            // 8
            position: { lat: 25.002365294013945, lng: 121.51954374645754},
            map: map,
            title: '永和聖教會',
            icon: iconpng
        }, {
            // 9
            position: { lat: 25.00567121923434, lng: 121.51186190028652},
            map: map,
            title: '真耶穌教會永和教會',
            icon: iconpng
        }, {
            // 10
            position: { lat: 25.02635878937896, lng: 121.46645473042135},
            map: map,
            title: '板橋主恩教會（改革宗教會）',
            icon: iconpng
        }, {
            // 11
            position: { lat: 25.000186755035305, lng: 121.47304710122974},
            map: map,
            title: '明穗教會',
            icon: iconpng
        },//{
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

            // Taoyuan
        {
            // 1
            position: {lat: 24.970749952535655, lng: 121.22122050589216},
            map: map,
            title:'真耶穌教會中壢教會',
            icon: "https://img.icons8.com/metro/32/ffffff/book-stack.png"
        },{
            // 2
            position: {lat: 24.992695339101548, lng: 121.2897280068683},
            map: map,
            title:'桃園旌旗教會',
            icon: "https://img.icons8.com/metro/32/ffffff/book-stack.png"
        },{
            // 3
            position: {lat: 24.978788504091344, lng: 121.25578584519914},
            map: map,
            title:'台灣基督長老教會內壢教會',
            icon: "https://img.icons8.com/metro/32/ffffff/book-stack.png"
        },{
            // 4
            position: {lat: 24.957633097191803, lng: 121.22435298255641},
            map: map,
            title:'中壢旌旗教會',
            icon: "https://img.icons8.com/metro/32/ffffff/book-stack.png"
        },{
            // 5
            position: {lat: 24.95213547090521, lng: 121.23517863844603},
            map: map,
            title:'中壢靈糧堂',
            icon: "https://img.icons8.com/metro/32/ffffff/book-stack.png"
        },{
            // 6
            position: {lat: 24.95185463611463, lng: 121.23048813598055},
            map: map,
            title:'萬原基督教會',
            icon: "https://img.icons8.com/metro/32/ffffff/book-stack.png"
        },{
            // 7
            position: {lat: 24.964472468351282, lng: 121.23051150118042},
            map: map,
            title:'基督教宣道會生命堂',
            icon: "https://img.icons8.com/metro/32/ffffff/book-stack.png"
        },{
            // 8
            position: {lat: 24.953999821019515, lng: 121.22365137075477},
            map: map,
            title:'中壢真理堂',
            icon: "https://img.icons8.com/metro/32/ffffff/book-stack.png"
        },{
            // 9
            position: {lat: 24.955178125273235, lng: 121.23245593021872},
            map: map,
            title:'耶穌基督後期聖徒教會',
            icon: "https://img.icons8.com/metro/32/ffffff/book-stack.png"
        },{
            // 10
            position: {lat: 24.9530381289332, lng: 121.22494574544054},
            map: map,
            title:'中壢基督教國際教會Chunli International Christian Church',
            icon: "https://img.icons8.com/metro/32/ffffff/book-stack.png"
        },

            // Taichung
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

            // Tainan
        {
            // 1
            position: {lat: 22.99652062716924, lng: 120.19848222423705},
            map: map,
            title:'台灣宣教紀念教會-看西街長老教會',
            icon: iconpng
        },{
            // 2
            position: {lat: 22.996955566741793, lng: 120.20486083492938},
            map: map,
            title:'台南民族路基督長老教會',
            icon: iconpng
        },{
            // 3
            position: {lat: 22.995650743818036, lng: 120.18508376644861},
            map: map,
            title:'台南聖教會 Tainan Holiness Church',
            icon: iconpng
        },{
            // 4
            position: {lat: 22.989647158252122, lng: 120.1722869520737},
            map: map,
            title:'台南市極光小組教會',
            icon: iconpng
        },{
            // 5
            position: {lat: 22.98809203703254, lng: 120.20449106487366},
            map: map,
            title:'台灣基督長老教會南門教會',
            icon: iconpng
        },{
            // 6
            position: {lat:22.985796563258805, lng: 120.21900512356545},
            map: map,
            title:'台南旌旗教會',
            icon: iconpng
        },{
            // 7
            position: {lat: 22.983009320563728, lng: 120.21026842189698},
            map: map,
            title:'台灣基督長老教會迦南教會',
            icon: iconpng
        },{
            // 8
            position: {lat: 23.007793296857216, lng: 120.22378419086155},
            map: map,
            title:'真耶穌教會開元教會',
            icon: iconpng
        },{
            // 9
            position: {lat: 22.989278828911022, lng: 120.18934127947117},
            map: map,
            title:'愛加倍教會',
            icon: iconpng
        },{
            // 10
            position: {lat: 22.98357353838417, lng: 120.22494034073407},
            map: map,
            title:'東門聖教會',
            icon: iconpng
        },

        // Kaohsiung
        {
            // 1
            position: {lat: 22.639048929792775, lng: 120.33310565533391},
            map: map,
            title:'華忠長老教會',
            icon: iconpng
        },{
            // 2
            position: {lat: 22.631670000313925, lng: 120.33830889816994},
            map: map,
            title:'台灣基督長老教會正義教會',
            icon: iconpng
        },{
            // 3
            position: {lat: 22.637511928790538, lng: 120.32693442500867},
            map: map,
            title:'高雄市牧恩基督教會',
            icon: iconpng
        },{
            // 4
            position: {lat: 22.629114547739455, lng: 120.33255633475429},
            map: map,
            title:'高雄新生命靈糧堂',
            icon: iconpng
        },{
            // 5
            position: {lat: 22.633195202570565, lng: 120.32281219197952},
            map: map,
            title:'中正基督長老教會',
            icon: iconpng
        },{
            // 6
            position: {lat: 22.62267414406379, lng: 120.31641623149609},
            map: map,
            title:'高雄純福音教會',
            icon: iconpng
        },{
            // 7
            position: {lat: 22.6278638184091, lng: 120.29683340221762},
            map: map,
            title:'真耶穌教會高雄教會',
            icon: iconpng
        },{
            // 8
            position: {lat: 22.610238598522386, lng: 120.30749495668712},
            map: map,
            title:'台灣基督長老教會中山教會',
            icon: iconpng
        },{
            // 9
            position: {lat: 22.62055417265969, lng: 120.31367081581276},
            map: map,
            title:'武昌教會',
            icon: iconpng
        },{
            // 10
            position: {lat: 22.642893538789593, lng: 120.29903083090478},
            map: map,
            title:'台灣基督長老教會重生教會',
            icon: iconpng
        },
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