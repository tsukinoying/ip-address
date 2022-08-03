$(document).ready(function () {
    // chrome.browserAction.setIcon({ path: 'img/10153.jpg'  });
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
                        $("#iso_code").html("Code:"+value) ;
                    }
                    if(key=="chs_name"){
                        $("#country").html("country:"+value) ;
                    }
                    if(key=="ip"){
                        $("#ip").html("ip:"+value) ;
                    }
                    if(key=="city"){
                        $("#city").html("city:"+value) ;
                    }
                });
            }
        });

});