var notSettingKeys = [
	'albumId', 'ordered', 'price', 'projectId',
	'projectXml', 'rotated', 'title', 'token',
	'tplGuid', 'tplSuitId', 'uploadTimestamp', 'userId',
	'product', 'category'
];

module.exports = {
	template:
				'<div v-if="!sharedStore.isPortal && !sharedStore.isPreview && oriPrice && !sharedStore.isRemark" v-bind:style="{zIndex:windowZindex}" style="position:absolute;right:40px;top:12px;">'+
	      			'<div style="height:16px;line-height:16px;">'+

	          			'<img v-show="isShowDetail" src="./assets/img/title-price.svg" style="width:13px;height:13px;margin:1px 0 0 0;cursor:pointer;float:right;" v-on:click="showTotalPrice()"/>'+
	          			'<span class="font-medium" style="font-size:13px;color:#3a3a3a;margin-left:0px;float:right;margin-right: 4.7px;">&nbsp;USD</span>'+
	          			'<span class="font-medium" v-show="discount" style="font-size:13px;margin-left:10px;color:#3a3a3a;margin-right:0;float:right;">{{"$" + totalPrice.toFixed(2)}}</span>'+
	          			'<span class="font-medium" style="font-size:13px;float:right;margin-left:10px;" v-bind:style="{textDecoration:priceStyle, color: discount ? \'#7b7b7b\' : \'#3a3a3a\'}" >{{"$" + totalOriprice.toFixed(2)}}</span>'+
						'<span class="font-medium" style="font-size:13px;float:right;color:#3a3a3a;margin-left:20px;" >{{productMessage}}</span>'+
						// '<span class="font-medium">{{productDisplayName}}:</span>'+
	      			'</div>'+
	      			'<div v-show="sharedStore.isTotalPriceShow" v-bind:style="{zIndex:windowZindex}" style="position:absolute;right:0px;top:26px;width:220px;box-sizing:border-box;border:1px solid #d6d6d6;box-shadow:0 3px 6px rgba(0,0,0,.16);background:#fff;">'+
	      				'<div class="border-style"></div>'+
	      				// '<div style="margin-top:15px;height:15px;line-height:15px;">'+
		      			// 	'<span class="price-item font-light" style="width:80px;">Unit price:</span>'+
		      			// 	'<span class="price-num font-normal" style="float:left;padding-left:20px;">{{"$" + oriPrice.toFixed(2)}}<span>'+
	      				// '</div>'+
						'<div v-for="priceOption in priceOptionList" style="margin-top:5px;height:15px;line-height:15px;">'+
		      				'<span class="price-item font-light" style="width:80px;white-space:nowrap;">{{priceOption.title}}</span>'+
		      				'<span class="price-num font-normal" style="float:left;padding-left:20px;">{{"$" + priceOption.oriPrice.toFixed(2)}}</span>'+
						  '</div>'+
						'<div v-for="size in allSize" style="margin-top:10px;height:15px;line-height:15px;">'+
							'<div v-if="$index === 0" style="margin-top:15px;"></div>' +
							'<span class="price-item font-light" style="float:left; width: 113px; padding-left: 19px; box-sizing: border-box; white-space: nowrap;">{{size + " Unit Price:"}}</span>'+
							'<span class="price-num font-normal" style="float:left; padding-left: 41px; box-sizing: border-box; white-space: nowrap;">{{"$" + getSizePriceFromStore(size).toFixed(2)}}</span>'+
						'</div>'+
	      				'<div style="margin-top:10px;height:15px;line-height:15px;">'+
		      				'<span class="price-item font-light" style="float: left; width: 113px; padding-left: 19px; box-sizing: border-box; white-space: nowrap;">Quantity:</span>'+
		      				'<span class="price-num font-normal" style="float: left; padding-left: 41px; box-sizing: border-box; white-space: nowrap;">{{totalQuantity}}</span>'+
	      				'</div>'+
	      				'<div v-show="discount" style="margin-top:10px;height:15px;line-height:15px;width: 220px;">'+
	      					'<div style="width:80px;float:left;margin-left:20px;">'+
			      				'<span class="font-light" style="float:left;font-size:12px;color:#3a3a3a;">Discount:</span>'+
		      				'</div>'+
		      				'<div class="price-num font-normal" style="float:left;padding-left:16px;">{{"-$" + discount.toFixed(2)}}</div>'+
	      				'</div>'+
	      				'<hr style="width:180px;margin:10px auto 14px;"/>'+
	      				'<div style="margin-bottom:15px;height:15px;line-height:15px;">'+
		      				'<span class="price-item" style="width:113px;">Total:</span>'+
		      				'<span class="font-medium" style="font-size:12px;color:#3a3a3a;float:left;padding-left:20px;">{{"$" + totalPrice.toFixed(2)}}<span>'+
	      				'</div>'+
	      			'</div>'+
	      		'</div>',

	data: function() {
		return {
			privateStore: {
				priceShowNum: 0,
			},
			prj: {},
			sharedStore: Store,
			rotated: '',
			oriPrice: 0,
		    sPrice: 0,
		    priceStyle:'',
		    quantity: 0,
			priceOptions: {},
			productDisplayName: '',
			isOnSale: false,
			// 用来配置是否显示价格小窗
			isShowDetail: true,
			allSize: []
		};
	},
	computed : {
		totalQuantity: function() {
			var quantity = 0;
			
			for(var i = 0; i < Store.pages.length; i++) {
				if(!Store.pages[i].isDeleted) {
					var currentProject = Store.projectSettings[i];
					quantity += currentProject.quantity;
				}
			}

			return quantity;
		},
		quantity: function() {
			var quantity = {};

			for(var i = 0; i < Store.pages.length; i++) {
				if(!Store.pages[i].isDeleted) {
					var currentProject = Store.projectSettings[i];

					quantity[currentProject.size] = quantity[currentProject.size]
						? quantity[currentProject.size] + 1
						: 1;
				}
			}

			return quantity;
		},
		prj: function(){
		    var prj = this.sharedStore.projectSettings[Store.currentSelectProjectIndex] || Store.baseProject;
		    return prj;
		},
		productMessage: function() {
			var productMessage = /*this.allSize.join(' & ') +', '+ */ this.totalQuantity + ' Canvas';

			if(this.totalQuantity > 1) {
				productMessage += '(es)';
			}
			return productMessage;
		},
		windowZindex: function() {
            var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
                    elementTotal = currentCanvas.params.length || 0;

            return (elementTotal + 9) * 101+1;
        },
		// 额外附加价格条目
		priceOptionList: function() {
			var options = this.priceOptions;
			var priceOptionList = [];

			// if(this.prj.trim === 'R') {
			// 	// 添加圆角单价条目
			// 	var priceOption = {
			// 		title: 'Rounded Trim:',
			// 		oriPrice: (options['card-rounded'].oriPrice - 0).toFixed(2) - 0,
			// 		sPrice: (options['card-rounded'].sPrice - 0).toFixed(2) - 0,
			// 		isOnSale: options['card-rounded'].couponId
			// 	};
			// 	priceOptionList.push(priceOption);
			// }

			return priceOptionList;
		},
		discount: function(){
			// var prj = this.sharedStore.projectSettings[Store.currentSelectProjectIndex];
			// var quantity = this.quantity || 1;
			// var mainProductDiscount = 0;
			// var optionsDiscount = 0;

			// if(this.isOnSale) {
			// 	mainProductDiscount = (this.oriPrice - this.sPrice) * quantity;
			// }

			// if(this.priceOptionList.length > 0) {
			// 	optionsDiscount = this.priceOptionList.map(function(option) {
			// 		if(option.isOnSale) {
			// 			return option.oriPrice - option.sPrice;
			// 		} else {
			// 			return 0;
			// 		}
			// 	});

			// 	optionsDiscount = optionsDiscount.reduce(function(acc, optionDiscount) {
			// 		return acc + optionDiscount * quantity;
			// 	});
			// }

			return 0;
		},
		totalOriprice:function(){
			var _this = this;
			var totalOriprice = 0;

			_this.allSize.forEach(function(size) {
				var oriPrice = Store.photoPrice.allSize.filter(function(sizePrice) {
					return sizePrice.size === size;
				})[0].oriPrice;

				var sizePrice = _this.quantity[size] * oriPrice;

				totalOriprice += !isNaN(sizePrice) ? sizePrice : 0;
			});

			return totalOriprice;
		},
		totalPrice: function(){
			var prj = this.sharedStore.projectSettings[Store.currentSelectProjectIndex];

			return this.totalOriprice - this.discount;
		},
	},
	methods: {
		handleAddText: function() {
		  this.$dispatch("dispatchShowAddText");
		},
		showTotalPrice: function(){
			this.sharedStore.isTotalPriceShow = !this.sharedStore.isTotalPriceShow;
		},

		setProductName: function() {
			var _this = this;
			var productOptionMaps = require("SpecManage").getOptions('product');
			productOptionMaps.forEach(function(productOption) {
				if(productOption.id === _this.prj.product) {
					_this.productDisplayName = productOption.title;
				}
			});
		},

		getSizePriceFromStore: function(size) {
			return Store.photoPrice.allSize.filter(function(sizePrice) {
				return sizePrice.size === size;
			})[0].oriPrice;
		},

		handleCanvasPriceChange: function(){
			var options = [];
			var _this = this;
			var product = _this.prj.product;
			var userId = _this.sharedStore.userSettings.userId;

			var settingKeys = Object.keys(_this.prj).filter(function(key) {
				return notSettingKeys.indexOf(key) === -1;
			});

			settingKeys.forEach(function(key) {
				if(_this.prj[key] && _this.prj[key] !== 'none') {
					options.push(_this.prj[key]);
				}
			});

			options = options.join(',');
            require("ProjectService").getCanvasPrice(product, options, userId);
		},
		
		getAllSizePrice: function() {
			if(Store.watches.isSpecLoaded && Store.watches.isProjectLoaded) {
				var _this = this;
				var product = Store.baseProject.product;
				var userId = _this.sharedStore.userSettings.userId;
				require("SpecManage").getOptions('size').map(function(size) {
					_this.allSize.push(size.id);
				});
	
				_this.allSize.forEach(function(size) {
					var options = [];
	
					var settingKeys = Object.keys(_this.prj).filter(function(key) {
						return notSettingKeys.indexOf(key) === -1;
					});
		
					settingKeys.forEach(function(key) {
						if(_this.prj[key] && _this.prj[key] !== 'none') {
							if(key !== 'size') {
								options.push(_this.prj[key]);
							} else {
								options.push(size);
							}
						}
					});
	
					options = options.join(',');
					require("ProjectService").getLMCPrice(product, size, options, userId);
				});
			}
		},
	},

	events: {
		notifyCanvasPriceChange:function(){
		    // this.handleCanvasPriceChange();
		},
	},
	ready: function(){
		var _this = this;
		this.getAllSizePrice = this.getAllSizePrice.bind(this);

		_this.$watch('sharedStore.priceChange',function(){

			_this.$set('oriPrice', (_this.sharedStore.photoPrice.oriPrice - 0));
			_this.$set('sPrice', (_this.sharedStore.photoPrice.sPrice - 0));
			_this.$set('isOnSale', !!_this.sharedStore.photoPrice.couponId);
			_this.$set('priceOptions', _this.sharedStore.photoPrice.options);

			if(_this.isOnSale){
			    _this.priceStyle = 'line-through';
			}else{
			    _this.priceStyle = 'none';
			}
			_this.sharedStore.priceChange = false;
			// _this.setProductName();
		});

		_this.$watch('sharedStore.watches.isSpecLoaded', function() {
			_this.getAllSizePrice();
		});
		_this.$watch('sharedStore.watches.isProjectLoaded', function() {
			_this.getAllSizePrice();
		});
	}
}
