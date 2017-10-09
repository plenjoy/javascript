module.exports = {
    template: '<div>' +
                    '<div class="shadow-bg" v-show="privateStore.isShowUpgrade" v-bind:style="{zIndex: windowZindex-1}"></div>' +
                    '<div id="upgradeWindow" v-show="privateStore.isShowUpgrade" class="box-popup" v-bind:style="{width: privateStore.width + \'px\',height: privateStore.height + \'px\', zIndex: windowZindex }" >' +
                        '<div style="position: absolute;top:20px;right:20px"><img src="../../static/img/close-normal.svg" draggable="false" width="16" height="16" v-on:click="handleHideView()" onmouseover="this.src = \'../../static/img/close-hover.svg\'" onmouseout="this.src = \'../../static/img/close-normal.svg\'" alt="close" title="close" style="cursor: pointer;" /></div>' +
                        '<div class="font-light" style="font-size: 18px;margin: 40px 45px 0px 45px;color: #3a3a3a;">Upgrade to 11x14" for only $5.00 per each canvas</div>'+
                        '<div class="font-light" style="font-size: 12px;margin: 5px 45px 0px 45px;color: #7b7b7b;">11x14" is about twice the size of 8x10"</div>'+
                        '<div style="margin: 20px 40px 0px 40px;height:270px;text-align:center;position:relative">'+
                            '<div style="position:absolute;bottom:10px;width:100%">'+
                                '<div style="display:inline-block;position:relative;">'+
                                    '<img src="{{imageSrcSmall}}"/>'+
                                    '<div class="font-medium" style="width:150px;position:absolute;font-size:12px;bottom: -8px;left: 6px;text-align:left">8x10</div>'+
                                '</div>'+
                                '<div style="display:inline-block;height:110px;vertical-align: bottom;" v-bind:style="centerMargin">'+
                                    '<img src="assets/img/change.svg"/>'+
                                '</div>'+
                                '<div style="display:inline-block;position:relative;">'+
                                    '<img src="{{imageSrcLarge}}"/>'+
                                    '<div class="font-medium" style="width:150px;position:absolute;font-size:12px;bottom: -8px;left: 8px;text-align:left">11x14</div>'+
                                    '<div class="font-light" style="width:100%;position:absolute;font-size:12px;right:8px;bottom: -8px;text-align:right;color:#969696">Additional $5</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="popup-button" style="margin-top:45px;text-align:center;">' +
                            '<div class="button t-center button-white font-normal" v-on:click="continue()" style="display:inline-block;width: 200px;height: 30px;line-height: 30px;font-size: 13px;border:1px solid #7b7b7b;color: #393939">{{orititle}}</div>' +
                            '<div class="button t-center font-normal" v-on:click="upgrade()" style="display:inline-block;width: 200px;height: 30px;line-height: 30px;font-size: 13px;margin-left: 40px">{{upgradeTitle}}</div>' +
                        '</div>' +
                    '</div>' +

                '</div>',
    data: function() {
        return {
            privateStore: {
                width:600,
                height:475,
                selector: '#upgradeWindow',
                selected:'current',
                isShowUpgrade:false,
                oriPrice:0

            },
            sharedStore: Store
         };
    },
    computed: {
        windowZindex: function() {
            var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
                    elementTotal = currentCanvas.params.length || 0;

            return (elementTotal + 10) * 100;
        },
        orititle: function() {

            var quantity = require('ProjectController').getTotalPageNum() || 1;
            var price=this.privateStore.oriPrice* quantity;
            return "8X10 $"+ price.toFixed(2);
        },
        upgradeTitle:function(){
            var quantity = require('ProjectController').getTotalPageNum() || 1;
            var price=(this.privateStore.oriPrice+5)* quantity;
            return "11X14 $"+ price.toFixed(2);
        },
        centerMargin:function(){
            if(this.sharedStore.projectSettings[0].rotated){
                return {margin: "0px 23px"}
            }else{
                return {margin: "0px 47px"}
            }
        },
        imageSrcSmall:function(){
            if(this.sharedStore.projectSettings[0].rotated){
                return "assets/img/10X8.jpg";
            }else{
                return "assets/img/8X10.jpg";
            }

        },
        imageSrcLarge:function(){
            if(this.sharedStore.projectSettings[0].rotated){
                return "assets/img/14X11.jpg";
            }else{
                return "assets/img/11X14.jpg";
            }
        }
    },
    methods: {
        continue:function(){
            require('trackerService')({ev: require('trackerConfig').Upgrade8x10,size: this.sharedStore.projectSettings[0].size,product: this.sharedStore.projectSettings[0].product,timestamp:new Date()-0});
            Store.isPageLoadingShow = true;
            require('ProjectController').saveOldProject(this,function(){
                Store.isPrjSaved=true;
                Store.isPopSave = false;
                window.location = '/' + Store.orderType + '/addShoppingCart.html?projectGUID=' + Store.projectId + '&quantity=1';
            });
            this.privateStore.isShowUpgrade = false;
        },
        upgrade:function(){
            require('trackerService')({ev: require('trackerConfig').Upgrade11x14,size: this.sharedStore.projectSettings[0].size,product: this.sharedStore.projectSettings[0].product,timestamp:new Date()-0});
            // 先取截图，后升级保存，防止截图处于canvas中间状态
            Store.isProjectUpgrade = true;
            
            Store.isPageLoadingShow = true;
            require('ProjectController').upgradeProject();
            
            require('ProjectController').saveOldProject(this,function(){
                Store.isPrjSaved=true;
                Store.isPopSave = false;
                window.location = '/' + Store.orderType + '/addShoppingCart.html?projectGUID=' + Store.projectId + '&quantity=1';
            });
            var _this=this;
            setTimeout(function(){
                _this.sharedStore.isShowProgress = true;
                _this.sharedStore.isSwitchLoadingShow = true;
                Store.vm.$broadcast('notifyRepaintCenterContainer');
                Store.vm.$broadcast('notifyRefreshItems');
                _this.$dispatch("dispatchCanvasPriceChange");

            });

            this.privateStore.isShowUpgrade = false;
        },
        handleHideView:function(){
            this.privateStore.isShowUpgrade = false;
        }
    },
    events: {
        notifyShowUpgradWindow: function() {

            var utilWindow = require('UtilWindow');
            utilWindow.setPopWindowPosition({ width: this.privateStore.width, height: this.privateStore.height, selector: this.privateStore.selector });
            this.privateStore.isShowUpgrade = true;
            this.privateStore.oriPrice = this.sharedStore.photoPrice.oriPrice;

        }
    },
    created:function(){
    },
    ready:function(){
    }
}
