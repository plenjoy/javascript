/**
 * Created by dev on 2016/9/23.
 */
module.exports = {
    loadDomainUrls: function() {
        $.ajax({
            url: 'http://www.zno.com/userid/getEnv?webClientId=1',
            type: 'get'
        }).done(function(dResult) {
            if (dResult) {

                Store.serviceText = $(dResult).text();

            };
        });
    }
}