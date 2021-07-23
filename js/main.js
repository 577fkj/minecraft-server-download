function download(url){
    $.ajax( {  
    url: url,
    type:'get',  
    cache:false,  
    dataType:'json',  
    success:function(data) {  
        console.log(data)
        if(data.downloads.hasOwnProperty("server")){
            window.location.href = data.downloads.server.url
        }else{
            alert("此版本没有服务端！")
        };
    },
    error : function() {   
        alert("加载失败!");  
    }  
});
};
$.ajax( {  
    url:'https://launchermeta.mojang.com/mc/game/version_manifest.json',
    type:'get',  
    cache:false,  
    dataType:'json',  
    success:function(data) {  
        console.log(data)
        var str1 = "";
        var str2 = "";
        $("#serverlist_release").html("");
        $("#serverlist_snapshot").html("");
        for(var i = 0;i<data.versions.length;i++){
            if(data.versions[i].type == "release"){
                str1 = "<tr>" + 
                "<td>"+data.versions[i].id + "</td>" +
                "<td>"+data.versions[i].time + "</td>" +
                // "<td>"+data.versions[i].url + "</td>" +
                "<td><input type=\"button\" value=\"下载\" onclick=\"download('" + data.versions[i].url + "')\"></td>" +
                "</tr>";
                $("#serverlist_release").append(str1);
            }else{
                str2 = "<tr>" + 
                "<td>"+data.versions[i].id + "</td>" +
                "<td>"+data.versions[i].time + "</td>" +
                // "<td>"+data.versions[i].url + "</td>" +
                "<td><input type=\"button\" value=\"下载\" onclick=\"download('" + data.versions[i].url + "')\"></td>" +
                "</tr>";
                $("#serverlist_snapshot").append(str2);
            };
        }
    },
    error : function() {
        alert("加载失败!");  
    }  
});
