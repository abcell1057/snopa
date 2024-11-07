
/*各雪場經緯度：
#gala Gala湯澤：36.9507° N, 138.7995° E
#naeba 苗場：36.8227° N, 138.7833° E
#karuzawa 輕井澤：36.3489° N, 138.6340° E
#niseko 二世谷：42.8048° N, 140.6874° E
#tamamu 星野 Tomamu：43.0590° N, 142.6194° E
#rusutsu 留壽都：42.7465° N, 140.9231° E
*/

const galaName = 'GALA 湯澤滑雪場'
const naebaName = '苗場滑雪場'
const karuzawaName = '輕井澤滑雪場'
const nisekoName = '二世谷滑雪場'
const tamamuName = '星野 Tomamu 雪場'
const rusutsuName = '留壽都滑雪場'

const galaLat = 36.9507
const galaLon = 138.7995
const naebaLat = 36.8227
const naebaLon = 138.7833
const karuzawaLat = 36.3489
const karuzawaLon = 138.6340
const nisekoLat = 42.8476
const nisekoLon = 140.6479
const tamamuLat = 43.0590
const tamamuLon = 142.6194
const rusutsuLat = 42.7465
const rusutsuLon = 140.9231

const pins = ['#galaPin', '#naebaPin', '#karuzawaPin', '#nisekoPin', '#tamamuPin', '#rusutsuPin'];
// const buttons = ['#galaButton', '#naebaButton', '#karuzawaButton', '#nisekoButton', '#tamamuButton', '#rusutsuButton']; -- 寫法(2)

// const galaPin = '#galaPin' -- for GSAP
// const naebaPin = '#naebaPin'
// const karuzawaPin = '#karuzawaPin'
// const nisekoPin = '#nisekoPin'
// const tamamuPin = '#tamamuPin'
// const rusutsuPin = '#rusutsuPin'


$(document).ready(function () {
    // 找到雪場名稱
    function updateParkName(name) {
        $('#parkName').text(name);
    }
    
    $('#galaButton').on('click', function () {
        //scalePin(galaPin); -- for GSAP

        $('#naebaPin').removeClass('scaled nofilter')
        $('#karuzawaPin').removeClass('scaled nofilter')
        $('#nisekoPin').removeClass('scaled nofilter')
        $('#tamamuPin').removeClass('scaled nofilter')
        $('#rusutsuPin').removeClass('scaled nofilter')
        
        addPinClasses('#galaPin'); //-- 寫法(1)
        updateParkName(galaName);
        getWeatherStatus(galaLat, galaLon);
        getSnowCover(galaLat, galaLon);
    });

    $('#naebaButton').on('click', function () {
        //scalePin(naebaPin);
        $('#galaPin').removeClass('scaled nofilter')
        $('#karuzawaPin').removeClass('scaled nofilter')
        $('#nisekoPin').removeClass('scaled nofilter')
        $('#tamamuPin').removeClass('scaled nofilter')
        $('#rusutsuPin').removeClass('scaled nofilter')

        addPinClasses('#naebaPin');
        updateParkName(naebaName);
        getWeatherStatus(naebaLat, naebaLon);
        getSnowCover(naebaLat, naebaLon);
    });

    $('#karuzawaButton').on('click', function () {
        //scalePin(karuzawaPin);
        $('#galaPin').removeClass('scaled nofilter')
        $('#naebaPin').removeClass('scaled nofilter')
        $('#nisekoPin').removeClass('scaled nofilter')
        $('#tamamuPin').removeClass('scaled nofilter')
        $('#rusutsuPin').removeClass('scaled nofilter')

        addPinClasses('#karuzawaPin');
        updateParkName(karuzawaName);
        getWeatherStatus(karuzawaLat, karuzawaLon);
        getSnowCover(karuzawaLat, karuzawaLon);
    });

    $('#nisekoButton').on('click', function () {
        //scalePin(nisekoPin);
        $('#galaPin').removeClass('scaled nofilter')
        $('#naebaPin').removeClass('scaled nofilter')
        $('#karuzawaPin').removeClass('scaled nofilter')
        $('#tamamuPin').removeClass('scaled nofilter')
        $('#rusutsuPin').removeClass('scaled nofilter')

        addPinClasses('#nisekoPin');
        updateParkName(nisekoName);
        getWeatherStatus(nisekoLat, nisekoLon);
        getSnowCover(nisekoLat, nisekoLon);
    });

    $('#tamamuButton').on('click', function (event) {
        //scalePin(tamamuPin);
        $('#galaPin').removeClass('scaled nofilter')
        $('#naebaPin').removeClass('scaled nofilter')
        $('#karuzawaPin').removeClass('scaled nofilter')
        $('#nisekoPin').removeClass('scaled nofilter')
        $('#rusutsuPin').removeClass('scaled nofilter')

        addPinClasses('#tamamuPin');
        updateParkName(tamamuName);
        getWeatherStatus(tamamuLat, tamamuLon);
        getSnowCover(tamamuLat, tamamuLon);
    });

    $('#rusutsuButton').on('click', function (event) {
        //scalePin(rusutsuPin);
    
        $('#galaPin').removeClass('scaled nofilter')
        $('#naebaPin').removeClass('scaled nofilter')
        $('#karuzawaPin').removeClass('scaled nofilter')
        $('#nisekoPin').removeClass('scaled nofilter')
        $('#tamamuPin').removeClass('scaled nofilter')

        addPinClasses('#rusutsuPin');
        updateParkName(rusutsuName);
        getWeatherStatus(rusutsuLat, rusutsuLon);
        getSnowCover(rusutsuLat, rusutsuLon);
    });
});

// 寫法(1): bug - 任一 pin 處於 addClass 狀態時，點擊下一個 btn 
// -> 第一個 pin 無法 removeClass，先在上面補上自己以外的 removeClass
function addPinClasses(pin) {
    $(pin).addClass('scaled nofilter');
}

$(document).on('click', function (event) {
    if (!$(event.target).closest('#galaButton, #naebaButton, #karuzawaButton, #nisekoButton, #tamamuButton, #rusutsuButton').length) {
        pins.forEach(pin => $(pin).removeClass('scaled nofilter'));
    }
});

/*
// 寫法(2)
$(document).ready(function() {
    buttons.forEach(button => {
        $(button).on('click', function() {
            addPinClasses(button.replace('Button', 'Pin'));
        });
    });
});

//pin === pin 檢查目前的 pin 是否和傳入的匹配，若匹配則添加這兩個類別，若不匹配則移除這些類別。
function addPinClasses(pin) {
    pins.forEach(p => {
        if (p === pin) {
            $(p).addClass('scaled nofilter');
        } else {
            $(p).removeClass('scaled nofilter');
        }
    });
}

$(document).on('click', function(event) {
    let clickedButton = false;
    buttons.forEach(button => {
        if ($(event.target).closest(button).length) {
            clickedButton = true;
        }
    });
    if (!clickedButton) {
        pins.forEach(pin => $(pin).removeClass('scaled nofilter'));
    }
});
*/



function getWeatherStatus(lat, lon) {
    $.ajax({
        // 目前天氣：調用 目前數據
        url: `https://api.openweathermap.org/data/2.5/weather?lang=zh_tw&units=metric&lat=`+lat+`&lon=`+lon+`&&appid=57cf5d8741fce7a9293dc094e0ff2e10`,
        success: function (data) {
            let icon = data.weather[0].icon
            let iconurl = `https://openweathermap.org/img/wn/` + icon + `@2x.png`
            $('#currentWeather').text(data.weather[0].description);
            $('#currentTemp').text(data.main.temp + ` ℃`);
            $('#currentWindSpeed').text(data.wind.speed + ` 公尺/每秒`);
            $('#currentVisibility').text((data.visibility /1000).toFixed(2) + ` 公里`);
            $('#weatherIcon').attr('src', iconurl);
        },

        error: function (error) {
            console.log(error);
            $('#data').html("<p>無法取得資料，請稍後再試</p>");
        }
    });
}

function getSnowCover(lat, lon) {
    $.ajax({
        // 積雪量：調用未來 5 天 / 3 小時預測數據
        url: `https://api.openweathermap.org/data/2.5/forecast?lang=zh_tw&units=metric&lat=`+lat+`&lon=`+lon+`&&appid=57cf5d8741fce7a9293dc094e0ff2e10`,
        success: function (data) {
            let weather3h = data.list[0].weather[0].main;

            let snowCovermm = 0;
            if (weather3h === 'Snow' && data.list[0].snow) {
                snowCovermm = data.list[0].snow['3h'] || 0;
            }
            let snowCovercm = (snowCovermm / 10).toFixed(2);  // mm 轉成 cm

            $('#futureSnowCover').text(snowCovercm + ' 公尺/每小時');
        },

        error: function (error) {
            console.log(error);
            $('#data').html("<p>無法取得資料，請稍後再試</p>");
        }
    });
}

// --GSAP
// function scalePin (pin) {
//     let scalePin = document.querySelector(pin);
//     let mapPin = document.querySelector(pin);
//     mapPin.style.filter = 'none';
//     gsap.to(scalePin, { 
//         duration: 0.15,
//         ease: Bounce
//     })
// }
