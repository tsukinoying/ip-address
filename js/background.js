$(document).ready(function () {
    // chrome.browserAction.setIcon({ path: 'img/10153.jpg'  });
    setInterval(function () {
        $.ajax({
            type: "Get",
            url: "http://us1.tsune.net:9999/get_info.php",
            dataType: "json",
            // data: {
            //     varname1 : "varvalue1",
            //     varname2 : "varvalue2"
            // },
            success: function (data) {
                $.each(data, function (key, value){
                    // alert(key)
                    // alert(value)
                    if(key=="iso_code"){
                        chrome.browserAction.setIcon({ path: "img/flags/"+value+".png" });

                    }
                });
            },
            error:function (data) {
                chrome.browserAction.setIcon({ path: "img/icon.png" });
            }
        });

    }, 2000)
});