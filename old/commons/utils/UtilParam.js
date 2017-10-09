module.exports = {

    getUrlParam: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return "";
    },
    getRequestKey:function(){
    	var myDate = new Date();
		return 'web-h5|1|XML|'+myDate.getTime();
    },
    getJSONRequestKey:function(){
    	var myDate = new Date();
		return 'web-h5|1|JSON|'+myDate.getTime();
    }

}
