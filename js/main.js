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
        $("#release").html("正式版(" + data.latest.release + ")");
        $("#snapshot").html("快照版(" + data.latest.snapshot + ")");
        $("#serverlist_release").html("");
        $("#serverlist_snapshot").html("");
        for(var i = 0;i<data.versions.length;i++){
            if(data.versions[i].type == "release"){
                str1 = "<tr>" + 
                "<td>"+data.versions[i].id + "</td>" +
                "<td>"+data.versions[i].releaseTime + "</td>" +
                // "<td>"+data.versions[i].url + "</td>" +
                "<td><input class=\"ant-btn ant-btn-red\" type=\"button\" value=\"下载\" onclick=\"download('" + data.versions[i].url + "')\"></td>" +
                "</tr>";
                $("#serverlist_release").append(str1);
            }else{
                str2 = "<tr>" + 
                "<td>"+data.versions[i].id + "</td>" +
                "<td>"+data.versions[i].releaseTime + "</td>" +
                // "<td>"+data.versions[i].url + "</td>" +
                "<td><input class=\"ant-btn ant-btn-red\" type=\"button\" value=\"下载\" onclick=\"download('" + data.versions[i].url + "')\"></td>" +
                "</tr>";
                $("#serverlist_snapshot").append(str2);
            };
        }
    },
    error : function() {
        alert("加载失败!");  
    }
});
// $.ajax( {  
//     url:'https://bmclapi2.bangbang93.com/forge/minecraft',
//     type:'get',  
//     cache:false,  
//     dataType:'json',  
//     success:function(data) {  
//         console.log(data)
//         var str1 = "";
//         $("#forge_list").html("");
//         for(var i = 0;i<data.length;i++){
//             str1 = "<tr>" + 
//             "<td>"+data[i] + "</td>" +
//             "<td><input class=\"ant-btn ant-btn-red\" type=\"button\" value=\"下载\" onclick=\"download('')\"></td>" +
//             "</tr>";
//             $("#serverlist_release").append(str1);
//         }
//     },
//     error : function() {
//         alert("加载失败!");  
//     }
// });
var bodyBgs = [];
bodyBgs[0] = "https://www.fkj233.cn/images/1.png";
bodyBgs[1] = "https://www.fkj233.cn/images/2.png";
bodyBgs[2] = "https://www.fkj233.cn/images/3.png";
bodyBgs[3] = "https://www.fkj233.cn/images/4.png";
bodyBgs[4] = "https://www.fkj233.cn/images/5.png";
bodyBgs[5] = "https://www.fkj233.cn/images/6.png";
bodyBgs[6] = "https://www.fkj233.cn/images/7.png";
var randomBgIndex = Math.round( Math.random() * 6 );
document.write('<style>body{background-image: url("' + bodyBgs[randomBgIndex] + '"); background-size:cover; background-attachment:fixed; background-color:#CCCCCC; }</style>')