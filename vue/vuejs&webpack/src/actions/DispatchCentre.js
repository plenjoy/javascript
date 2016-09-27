/**
 * Created by dev on 2016/9/21.
 */
module.exports = {
    events: {
        receiveChangeView: function (index) {
            require("../toDo/ChangeView.js").execute(index);
        },
        broadcastText: function () {
            this.$broadcast("broadcastText", "receive");

        },
        dispatchService: function () {
            var envService = require('../services/EnvService.js');
            envService.loadDomainUrls();
        },
        dispatchAdd:function () {
            this.$broadcast("broadcastAdd");
        },
        dispatchDelete:function () {
            this.$broadcast("broadcastDelete");
        }
    }

}
