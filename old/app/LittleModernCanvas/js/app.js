webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {var envService = __webpack_require__(6);
	envService.loadDomainUrls();
	var userService = __webpack_require__(8);
	userService.getUserInfo();

	var ProjectService = __webpack_require__(9);
	var UtilParam = __webpack_require__(10);
	var ProjectController = __webpack_require__(22);
	var ProjectManage = __webpack_require__(19);

	var Vue = __webpack_require__(31);

	var CompPageLoading = Vue.extend(__webpack_require__(39));
	Vue.component('page-loading', CompPageLoading);

	var CompHeader = Vue.extend(__webpack_require__(40));
	Vue.component('as-header', CompHeader);

	var CompImageUpload = Vue.extend(__webpack_require__(45));
	Vue.component('image-upload', CompImageUpload);

	var CompSingleImageUpload = Vue.extend(__webpack_require__(48));
	Vue.component('single-image-upload', CompSingleImageUpload);

	var CompListTab = Vue.extend(__webpack_require__(50));
	Vue.component('list-tab', CompListTab);

	var CompHandle = Vue.extend(__webpack_require__(52));
	Vue.component('handle', CompHandle);

	var CompBar = Vue.extend(__webpack_require__(53));
	Vue.component('bar-panel', CompBar);

	var CompPhotoElement = Vue.extend(__webpack_require__(54));
	Vue.component('photo-element', CompPhotoElement);

	var CompTextElement = Vue.extend(__webpack_require__(55));
	Vue.component('text-element', CompTextElement);

	var CompScreenshot = Vue.extend(__webpack_require__(57));
	Vue.component('screenshot-element', CompScreenshot);

	var CompMirror = Vue.extend(__webpack_require__(58));
	Vue.component('mirror-element', CompMirror);

	var CompBg = Vue.extend(__webpack_require__(59));
	Vue.component('bg-layer', CompBg);

	var CompDashboard = Vue.extend(__webpack_require__(60));
	Vue.component('dashboard', CompDashboard);

	var CompImageCrop = Vue.extend(__webpack_require__(65));
	Vue.component('image-crop', CompImageCrop);

	var CompTextEditor = Vue.extend(__webpack_require__(67));
	Vue.component('text-editor', CompTextEditor);

	var CompMeasureOption = Vue.extend(__webpack_require__(69));
	Vue.component('measure-option', CompMeasureOption);

	var CompOrder = Vue.extend(__webpack_require__(70));
	Vue.component('order-window', CompOrder);

	var CompPreviewHeader = Vue.extend(__webpack_require__(71));
	Vue.component('preview-header', CompPreviewHeader);

	var CompContactUs = Vue.extend(__webpack_require__(72));
	Vue.component('contact-us-window', CompContactUs);

	var CompMattingChangeConfirm = Vue.extend(__webpack_require__(73));
	Vue.component('matting-change-confirm',CompMattingChangeConfirm);

	var CompPreviewItemList = Vue.extend(__webpack_require__(74));
	Vue.component('preview-item-list', CompPreviewItemList);

	var CompPopup = Vue.extend(__webpack_require__(75));
	Vue.component('pop-up', CompPopup);

	var CompClone = Vue.extend(__webpack_require__(76));
	Vue.component('clone-window', CompClone);

	var CompInnerPreview = Vue.extend(__webpack_require__(77));
	Vue.component('inner-preview', CompInnerPreview);

	var CompOption = Vue.extend(__webpack_require__(64));
	Vue.component('option-list', CompOption);

	var CompOptionItem = Vue.extend(__webpack_require__(78));
	Vue.component('option-item', CompOptionItem);

	var CompTemplateList = Vue.extend(__webpack_require__(79));
	Vue.component('layout-list', CompTemplateList);

	var CompTemplateListItem = Vue.extend(__webpack_require__(80));
	Vue.component('template-item', CompTemplateListItem);

	var CompCartReturn = Vue.extend(__webpack_require__(81));
	Vue.component('cart-choose-window', CompCartReturn);

	var CompUpgrade = Vue.extend(__webpack_require__(82));
	Vue.component('upgrade-window', CompUpgrade);

	var CompNewProject = Vue.extend(__webpack_require__(83));
	Vue.component('new-project-window', CompNewProject);

	var CompWarnTipElement = Vue.extend(__webpack_require__(84));
	Vue.component('warntip-element', CompWarnTipElement);

	var CopmPrice = Vue.extend(__webpack_require__(85));
	Vue.component('price-item', CopmPrice);

	var vm = new Vue({
	    el: '#app',
	    mixins: [
	        __webpack_require__(86),
	        __webpack_require__(87)
	    ],
	    data: {
	        privateStore: {
	            isShowPage: true
	        },
	        sharedStore: Store
	    },
	    methods: {
	        // init page
	        init: function() {

	            var _this = this;
	            var domains = _this.sharedStore.domains;
	            var prj = _this.sharedStore.projectSettings[Store.currentSelectProjectIndex];
	            var user = _this.sharedStore.userSettings;

	            Store.title = decodeURIComponent(UtilParam.getUrlParam("title"));
	            Store.projectId = UtilParam.getUrlParam("initGuid");
	            Store.fromCart = UtilParam.getUrlParam("fromCart");
	            Store.isPreview = UtilParam.getUrlParam("isPreview");
	            Store.isFromMarketplace = UtilParam.getUrlParam("isFromMarketplace");
	            Store.mainProjectUid = UtilParam.getUrlParam("mainProjectUid");
	            Store.encImageId = UtilParam.getUrlParam("encImageId");
	            Store.isFromMyPhoto = UtilParam.getUrlParam("isFromMyPhoto");
	            Store.isOrderedPreview = UtilParam.getUrlParam("orderedPreview");
	            Store.isFromFactory = UtilParam.getUrlParam("source") === 'factory' || UtilParam.getUrlParam("source") === 'remake';
	            Store.selectedPageIdx = UtilParam.getUrlParam("selectedPageIdx") ? Number(UtilParam.getUrlParam("selectedPageIdx")) : 0;
	            Store.selectedPageGuid = UtilParam.getUrlParam("pageId");
	            Store.currentSelectProjectIndex = UtilParam.getUrlParam("selectedPageIdx") ? Number(UtilParam.getUrlParam("selectedPageIdx")) : 0;

	            // remake参数
	            Store.isRemark = decodeURIComponent(UtilParam.getUrlParam("source")) === 'remake';
	            Store.token = UtilParam.getUrlParam("token");
	            Store.pUser = UtilParam.getUrlParam("pUser");
	            Store.orderNumber = decodeURIComponent(UtilParam.getUrlParam("orderNumber"));
	            Store.timestamp = UtilParam.getUrlParam("timestamp");

	            if (Store.projectId === "") {
	                Store.isNewProject = true;
	                Store.baseProject = {};

	                var optionIds = __webpack_require__(18).getOptionIds();

	                optionIds.forEach(function(optionId) {
	                    Store.baseProject[optionId] = UtilParam.getUrlParam(optionId)||'none';
	                });

	                Store.baseProject.canvasBorder = "mirror";

	                // var PrjConstructor = require('Prj');
	                // var Prj = PrjConstructor();
	                // Prj.product = UtilParam.getUrlParam('product')||'none';
	                // Prj.color = UtilParam.getUrlParam('color')||'none';
	                // Prj.paper = UtilParam.getUrlParam('paper')||'none';
	                // Prj.size = UtilParam.getUrlParam('size')||'none';
	                // Prj.frameStyle = UtilParam.getUrlParam('style')||'none';
	                // Prj.canvasBorder = UtilParam.getUrlParam('canvasBorder')||'none';
	                // Prj.canvasBorderSize = UtilParam.getUrlParam('canvasBorderSize')||'none';
	                // Prj.orientation = UtilParam.getUrlParam('orientation')||'Landscape';
	                // Prj.rotated = true;

	                Store.isFromMarketplace=UtilParam.getUrlParam('isFromMarketplace')==="true"?true:false;
	                if(Store.isFromMarketplace){
	                    Store.isShowPostToSale=true;
	                }
	                var title=$(document).attr("title");
	                // Prj.canvasBorder="mirror";
	                Store.isCanvas = true;
	                Store.isMirrorBorder = true;

	            }
	            if ((!Store.isRemark&&(!Store.isPreview && user.userId === '')) || ((prj && (prj.product === '' || prj.size === '')) && Store.projectId === '')) {
	                // wrong params passed in
	                // redirect
	                alert('Please log in!');
	                window.location = '/';
	                // alert('wrong parameters!');
	            };

	            // get album id by title via ajax
	            if (Store.title !== '') {
	                // call get album id
	                ProjectService.getAlbumId();
	            };

	            if (user.userId !== '' && Store.projectId !== '') {
	                // call get order state
	                if(!Store.isPreview){
	                    ProjectController.getProjectOrderedState(this);
	                }
	                __webpack_require__(9).getProjectInfo();
	            };

	            setInterval(function(){
	                __webpack_require__(8).keepAlive();
	            },1000*60*4);

	        },

	        loadProjectXml: function() {
	            var _this = this,
	                domains = _this.sharedStore.domains
	            prj = _this.sharedStore.projectSettings[Store.currentSelectProjectIndex];
	            if (Store.projectId === "") {
	                __webpack_require__(22).setDefaultValue();
	            }

	            if (Store.projectId) {
	                // load project xml
	                ProjectController.getOldProject();
	            } else {
	                // save new project
	                ProjectController.saveNewProject(_this);
	            };
	        },

	        // custom enhance function for $watch watch multiple props
	        $watchAll: function(props, watcher) {
	            var _this = this;
	            props.forEach(function(prop) {
	                _this.$watch(prop, watcher);
	            });
	        },

	        initWindow: function() {
	            Store.boxLimit['8X10'] = {
	                width: 330,
	                height: 330,
	            };
	            Store.boxLimit['11X14'] = {
	                width: 440,
	                height: 440,
	            };
	        }
	    },
	    events: {

	    },
	    created: function() {
	        var _this = this;

	        __webpack_require__(88).loadLocalSpec();

	        // 支持safari后退重新加载页面，防止safari缓存
	        window.onpageshow = function(event) {
	            if(event.persisted) {
	                window.location.reload();
	            }
	        }

	        // load project xml(or new) when spec done
	        _this.$watch('sharedStore.watches.isSpecLoaded', function() {
	            if (_this.sharedStore.watches.isSpecLoaded) {
	                _this.init();
	                _this.loadProjectXml();
	                _this.initWindow();
	            };
	        });

	        // paint canvas when project xml done
	        _this.$watch('sharedStore.watches.isProjectLoaded', function() {
	            if (_this.sharedStore.watches.isProjectLoaded) {
	                Store.isCanvas = true;
	                Store.isMirrorBorder = true;
	                // 埋点。
	                __webpack_require__(11)({ev: __webpack_require__(13).LoadComplete,isNewProject: Store.isNewProject});
	                //  获取项目 title ；
	                __webpack_require__(9).getTitle();

	                ProjectController.initProjectSettings();

	                if(Store.isNewProject && Store.projectId) {
	                    window.history.replaceState({}, 'LittleModernCanvas', '?initGuid=' + Store.projectId + '&webClientId=1');
	                }

	                var Prj = _this.sharedStore.projectSettings[Store.currentSelectProjectIndex] || Store.baseProject;

	                
	                var oldTitle =  $(document).attr("title");
	                var productName = __webpack_require__(18).getOptionNameById('product', Prj.product);
	                var newTitle = oldTitle.replace('Product', productName);
	                $(document).attr("title", newTitle);

	                Prj.category=__webpack_require__(18).getCategoryByProduct(Prj.product);
	                var version=parseFloat(__webpack_require__(18).getVersion());

	                __webpack_require__(24).initCanvasData();
	                _this.$broadcast('notifyPaint');
	                if(!this.sharedStore.isPreview){
	                    setTimeout(function(){
	                        _this.$broadcast('notifyShowItem');
	                    });
	                }

	                if(!Store.isPreview){
	                    var options = [];
	                    var product = Prj.product;
	                    var userId = _this.sharedStore.userSettings.userId;

	                    // 由于Prj对象中有很多和setting无关的值，在这里给过滤掉
	                    var notSettingKeys = [
	                        'albumId', 'ordered', 'price', 'projectId',
	                        'projectXml', 'rotated', 'title', 'token',
	                        'tplGuid', 'tplSuitId', 'uploadTimestamp', 'userId',
	                        'product', 'category'
	                    ];

	                    var settingKeys = Object.keys(Prj).filter(function(key) {
	                        return notSettingKeys.indexOf(key) === -1;
	                    });

	                    settingKeys.forEach(function(key) {
	                        if(Prj[key] && Prj[key] !== 'none') {
	                            options.push(Prj[key]);
	                        }
	                    });

	                    options = options.join(',');
	                    __webpack_require__(9).getCanvasPrice(product, options, userId);

	                }
	                if(Store.isRemark) {
	                    for(var i = 0; i < Store.projectSettings.length; i++) {
	                        Store.projectSettings[i].quantity = 0;
	                    }
	                }
	                //require('TemplateService').loadAllTemplateList(2,Prj.size,false);



	                var SpecManage = __webpack_require__(18);
	                var ids=SpecManage.getDisableOptionIds();

	                _this.sharedStore.watches.isProjectComplete = true;

	                if(ids.length>0){
	                    for(var n in ids){

	                        var keyPatterns = SpecManage.getOptionMapKeyPatternById(ids[n]).split("-");
	                        var params = [];
	                        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	                        for(var v=0,q=keyPatterns.length;v<q;v++){
	                            var key = currentProject[keyPatterns[v]];
	                            if(key){
	                                var item = { key : keyPatterns[v], value : key};
	                                params.push(item);
	                            }
	                        }
	                        var res=SpecManage.getDisableOptionsMap(ids[n],params);
	                        var resArray;
	                        if(res!=null){
	                            resArray=res.split(",")
	                        }
	                        if(resArray.indexOf(currentProject[ids[n]])>-1){
	                            console.log('disable',ids[n]);
	                            Store.disableArray.push(ids[n]);
	                        }
	                    }
	                }
	            };
	            if(Store.mainProjectUid){
	                ProjectController.getMainProjectImages(_this,Store.mainProjectUid,Store.encImageId);
	            }
	            if(Store.isFromMyPhoto == 'true'){
	                ProjectController.getMyPhotoImages(_this,Store.userSettings.userId, false);
	            }
	        });

	        // 已下单跳转preview
	        /*_this.$watchAll(
	            [
	                'sharedStore.watches.isProjectLoaded',
	                'sharedStore.watches.isProjectInfoLoaded',
	                'sharedStore.watches.isProjectOrderedStateLoaded'
	            ],
	            function() {
	                var isWatcherTrigger =
	                    _this.sharedStore.watches.isProjectLoaded &&
	                    _this.sharedStore.watches.isProjectInfoLoaded &&
	                    _this.sharedStore.watches.isProjectOrderedStateLoaded;

	                if(isWatcherTrigger) {
	                    _this.privateStore.isShowPage = true;
	                    _this.$dispatch('dispatchOrderedPreview');
	            }
	        });*/
	    },
	    ready : function(){
	        var _this = this;
	    }
	});

	Store.vm=vm;

	/* system event handles */
	$(window).bind('beforeunload', function() {
	    if(/*Store.isPrjSaved === false && */Store.isPopSave === true && !Store.isPreview) {
	        return 'Unsaved changes(If any) will be discarded. Are you sure to exit?';
	    };

	    Store.isPopSave = true;

	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// model -- Store

	// import model Prj
	var ProjectList=[];

	// adding private property



	var Domains = __webpack_require__(2);
	var Spec = __webpack_require__(3);
	module.exports = {
	    isPreview: false,
	    isNewProject: false,
	    previewSource: '',        // '' | 'self' -- client preview, 'share' -- 3rd party share, 'factory' -- factory preview
	    operateMode: 'idle',      // to indicate which operating mode is ON for now
	                              // ''|'idle' -- default, nothing
	                              // 'drag' -- in dragging, drag an element or drag an image
	                              // 'scale' -- in scaling, scale an element
	    isLostFocus: true,
	    isFrontPage: true,
	    isInnerPreviewShow: false,
	    isChangePageShow: false,
	    isPopupShow : false,
	    isFrameOptionsShow : false,
	    OptionType : 'frame',
	    isImageUploadShow: false,
	    isImageCropShow: false,
	    isOptionsViewShow: false,
	    isTextEditorShow: false,
	    isOrderViewShow: false,
	    isMattingGlassShow : false,
	    isMattingGlassEditShow : false,
	    isEditBorderShow : false,
	    isFrameLayer : false,
	    isBorderShow : false,
	    isPrjSaved: false,
	    isPopSave: true,
	    isShowHelp:false,
	    isShowClone:false,
	    isTrialPriceShow:false,
	    mirrorLength : 0,
	    isMirrorBorder : false,
	    isShowContactUs:false,
	    isPageLoadingShow : true,
	    cancelledUpload : [],
	    currentUploadCount : 0,
	    successfullyUploaded : 0,
	    errorUploaded : 0,
	    currentSuccessUpload : 0,
	    currentErrorUpload : 0,
	    errorUploadedFiles : [],
	    retryId : -1,
	    cancelByX : false,
	    chooseTimes : 0,
	    uploadTimes : 0,
	    filesTotal : 0,
	    filesTotalInQueue: 0, // files to be uploaded total in queue
	    filesCountInQueue: 0, // files uploaded count in queue
	    saveImage : false,    // to indicate if should show image when saving
	    isSwitchLoadingShow : false,
	    projectSettings: ProjectList, // all common project params
	    spec: Spec,
	    domains: Domains,

	    cropImageRatio: 1, // preview image in crop window ratio,  cropImageRatio = preview size / real size
	    selectedPageIdx: 0, // current actived page's index
	    elementDragged: '',
	    photoPrice:{
	        sPrice: '',
	        oriPrcie: '',
	        couponId: '',
	        options: {},
	        allSize: []
	    },
	    priceChange : false,
	    dragData: {
	        imageId: '',
	        sourceImageUrl: '',
	        cursorX: 0,     // to indicate what position when user drag the preview image in image list
	        cursorY: 0,
	        isFromList: false
	    },
	    cropParams: {}, // to save temp crop params of selection
	    projects: [],          // to store all projects' breif params
	    pages: [],            // to store the current project pages setting for rendering
	    // canvas: {
	    // 	isInited: false,
	    // 	width: 0,				// canvas width
	    // 	height: 0,			// canvas height
	    // 	ratio: 1,				// view size / real size,  eg. ratio = width / oriWidth
	    // 	oriWidth: 0,		// real size
	    // 	oriHeight: 0,
	    //  oriSpineWidth: 0,
	    // 	bleedings: {},	// bleeding sizes for front end, = bleeding size + wrap size
	    //  realBleedings: {}		// real bleedings for backend
	    // 	selectedIdx: 0,	// the image index in params which was selected
	    // 	paper: '',			// svg paper object
	    // 	params: [],			// all elements params/settings from backend
	    // 	elements: [],		// svg current saved elements params/settings, with extra data
	    // 									// idx, dep, type('image'/'text'), imageUrl(current selected image path)/text, vWidth, vHeight (the view/handler size), cropX, cropY, cropW, cropH(the real crop positions done) ...
	    // 									// fontFamily, fontWeight, fontSize, color(rgba -- >), opacity(0 - 1)
	    // 	trans: [],			// the objects those store transforming
	    //  warns: [],
	    //  outerLine: '',		// to store the outer line element
	    //  bleedingRibbonLeft: '',		// to store the left bleeding element
	    //  bleedingRibbonRight: '',		// to store the right bleeding element
	    //  bleedingRibbonTop: '',		// to store the top bleeding element
	    //  bleedingRibbonBottom: '',		// to store the bottom bleeding element
	    //  spineLeft: '',	// to store the left spine element
	    //  spineRight: '',	// to store the right spine element
	    // 	elementBg: ''		// to store the bg element
	    // },
	    oriImageIds: [], // original valid image ids request from backend those for uploading
	    imageList: [], // all valid images(uploaded) info
	    fontList: [],
	    ctrls: {
	        tcResize: '', // time control of resizing interval
	        lastTranEvent: '',
	        isDragStarted: false
	    },
	    watches: {
	      flagRepaint: false, // vue watch flag of repaint event
	      isSpecLoaded: false,
	      isProjectLoaded: false,
	      isRefreshImage: false,
	      isCropThisImage: false,
	      isChangeThisText: false,
	      isOnDrop: false,
	      isChangeDepthFront: false,
	      isRemoveElement: false,
	      isReplaceImage : false,
	      isApplyLayout : false,
	      isProjectComplete : false,
	      isProjectInfoLoaded: false,
	      isProjectOrderedStateLoaded: false
	    },
	    watchData: {
	      changeDepthIdx: '',
	      cropImageIdx: '',
	      removeElementType: '',
	      removeElementIdx: ''
	    },
	    dropData: {
	        ev: '',
	        newAdded: false,        // indicate if it's dropping on 'nothing' so that a new element should be added
	        isBg: false,             // indicate the bg layer for adding background image
	        idx : ''
	    },
	    warnMargin: {
	        left: 30,
	        top: 30,
	        width: 15,
	        height: 15,
	        visible: false,
	        rate: 30
	    },
	    warnSettings : {
	        resizeLimit : 30,
	        resizeWarnMsg : 'beyond resize limit!',
	        warnImageWidth : 10,
	        warnImageHeight: 10,
	        visible : false
	    },
	    uploadProgress: [],
	    webClientId: 1,
	    currentSelectProjectIndex:0,
	    userSettings:{},
	    projectId:'',
	    projectXml:'',
	    title:'test',
	    itemListNum:0,
	    fromCart:false,
	    colorOptionList: [
	        { type: 'White', backgroundImage: 'assets/img/White-0.png', normalColor: 'assets/img/white-normal.png', pressColor: 'assets/img/white-pressed.png' },
	        { type: 'Black', backgroundImage: 'assets/img/Black-0.png', normalColor: 'assets/img/black-normal.png', pressColor: 'assets/img/black-pressed.png' },
	        { type: 'SportGrey', backgroundImage: 'assets/img/SportGrey-0.png', normalColor: 'assets/img/grey-normal.png', pressColor: 'assets/img/grey-pressed.png' },
	        { type: 'NavyBlue', backgroundImage: 'assets/img/NavyBlue-0.png', normalColor: 'assets/img/navy-normal.png', pressColor: 'assets/img/navy-pressed.png' },
	        { type: 'RoyalBlue', backgroundImage: 'assets/img/RoyalBlue-0.png', normalColor: 'assets/img/royal-normal.png', pressColor: 'assets/img/royal-pressed.png' }
	    ],
	    projectType:'littleModernCanvas',
	    orderType : 'commonProduct',
	    isFromMarketplace:false,
	    isFromFactory: false,
	    vm: null,
	    bgColor:16777215, //white
	    isCanvas : false,
	    projectInfo:{
	        isOrdered:false,
	        isInCart:false,
	        isInMarket:false
	    },
	    uploadAcceptType:'image/jpeg,image/x-png,image/png',
	    // uploadAcceptType:'image/*',
	    screenshotSize : {
	        width : 200,
	        height : 200
	    },
	    barPosition : {
	        x : 0,
	        y : 0
	    },
	    isSingleImageUploadShow : false,
	    isShowPostToSale:false,
	    templateList:[],
	    autoLayout : true,
	    cycleLock : false,
	    isBgLoaded : false,
	    isLogoClicked: false,
	    queueKey : false,
	    mattCycleLock : false,
	    isMattLoaded : false,
	    mattQueueKey : false,
	    disableArray:[],
	    checkFailed:false,
	    isShowProgress : false,
	    productTitle:'',
	    firstRender: true,
	    isWoodPrintOptionUpdated: false,
	    isShowCategoryOptions: true,
	    mainProjectUid: '',
	    encImageId: '',
	    isNewInsertProject: false,
	    isShowAddPhotoText: true,
	    warnTipLimit: 200,
	    isOrderedPreview: false,
	    warnTipMargin: 45,
	    baseProject: {},
	    emptyImage: '',
	    isRemark: false,
	    token: '',
	    pUser: '',
	    selectedPageGuid: '',
	    submitTitle:'canvas',
	    isTotalPriceShow: false,
	    boxLimit: {},
	    isProjectUpgrade: false,
	    beforeUpgradeScreenshot: ''
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	
	// model -- Prj
	module.exports = {
		baseUrl: '',						// e.g. http://www.artisanstate.com.d
		uploadUrl: '',					// e.g. http://upload.artisanstate.com.d
		productBaseUrl: '',			// e.g. http://api.artisanstate.com.d
		proxyFontBaseUrl: '',		// e.g. http://www.artisanstate.com.d/api
		portalBaseUrl: '',			// e.g. http://portal.artisanstate.com.d
		layoutTemplateServerBaseUrl: ''	,	// e.g. http://assets.test.artisanstate.s3.amazonaws.com
		assetBaseUrl: '',			//e.g.  http://img96.dev.zno.s3.amazonaws.com
		calendarBaseUrl: '',         //e.g.  http://artisanstate-artwork.s3.amazonaws.com
		backendBaseUrl: ''		//e.g. http://backend.zno.com.d
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports={
		dpi:300,
		imageQualityBufferPercent:30,
		products:[],
		colors:[],
		sizes:[],
		measures:[],
		specXml:null,
		specXml2:null

	}


/***/ },
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, Store) {module.exports = {
	    loadDomainUrls: function() {
	        $.ajax({
	            url: '/userid/getEnv?webClientId=1&autoRandomNum=' + __webpack_require__(7).getRandomNum(),
	            type: 'get',
	            async: false
	        }).done(function(dResult) {
	            if (dResult) {

	                Store.domains.baseUrl = $(dResult).find('baseUrl').text().substr(0, $(dResult).find('baseUrl').text().length - 1) || '';
	                Store.domains.proxyFontBaseUrl = Store.domains.baseUrl + '/api';
	                Store.domains.calendarBaseUrl = $(dResult).find('calendarBaseUrl').text().substr(0, $(dResult).find('calendarBaseUrl').text().length - 1) || '';
	                Store.domains.uploadUrl = $(dResult).find('uploadBaseUrl').text().substr(0, $(dResult).find('uploadBaseUrl').text().length - 1) || '';
	                Store.domains.productBaseUrl = $(dResult).find('productBaseURL').text().substr(0, $(dResult).find('productBaseURL').text().length - 1) || '';
	                Store.domains.portalBaseUrl = $(dResult).find('portalBaseURL').text().substr(0, $(dResult).find('portalBaseURL').text().length - 1) || '';
	                Store.domains.layoutTemplateServerBaseUrl = $(dResult).find('layoutTemplateServerBaseUrl').text().substr(0, $(dResult).find('layoutTemplateServerBaseUrl').text().length - 1) || '';
	                Store.domains.backendBaseUrl = $(dResult).find('backendBaseURL').text().substr(0, $(dResult).find('backendBaseURL').text().length - 1) || '';
	            };
	        });
	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(1)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {module.exports={
		getRandomNum:function(){
			return Math.round(Math.random()*10000000000000);
		},

		getInchByPx: function(nPx) {
			nPx = parseFloat(nPx) || 0;

			return nPx / 300;
		},

		getPxByInch: function(nInch) {
			nInch = parseFloat(nInch) || 0;

			return nInch * 300;
		},

		//change MM to Inch
		getInchByMM: function(nMM){
			nMM = parseFloat(nMM) || 0;

			var nPx = parseFloat(nMM * 30 / 2.54);

			return (nPx / 300).toFixed(7)
		},

		// change px into pt
		getPtByPx: function(nPx) {
			nPx = parseFloat(nPx) || 0;

			return nPx / 300 * 72;
		},

		getPxByPt: function(nPt) {
			nPt = parseFloat(nPt) || 0;

			return nPt * 300 / 72;
		},

		getPxByMM: function(nMM) {
			nMM = parseFloat(nMM) || 0;

			return nMM * 30 / 2.54;
		},

		hexToDec : function(hex){
				return parseInt(hex.replace("#",""),16);
		},

		decToHex : function(dec){
			var hex = (dec).toString(16);
			while(hex.length<6){
					hex = "0" + hex;
			}
			return "#" + hex;
		},
		rgbToHsl: function(r, g, b){
	    r /= 255, g /= 255, b /= 255;
	    var max = Math.max(r, g, b), min = Math.min(r, g, b);
	    var h, s, l = (max + min) / 2;

	    if(max == min){
	        h = s = 0;
	    }else{
	        var d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch(max){
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	        h /= 6;
	    }

	    return [h, s, l];
		},

		// get the view font size fit for screen
		getTextViewFontSize: function(nRealSize) {
			if(nRealSize && nRealSize > 0) {
				var ratio = Store.pages[Store.selectedPageIdx].canvas.ratio;

				var viewSize = parseFloat(nRealSize) * ratio;

				return viewSize;
			}
			else {
				return 0;
			};
		},
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, Store) {module.exports = {
	    getUserInfo: function() {
	        $.ajax({
	            url: Store.domains.baseUrl + '/BigPhotoBookServlet/getSessionUserInfo?webClientId=' + Store.webClientId + '&autoRandomNum=' +  __webpack_require__(7).getRandomNum(),
	            type: 'get',
	            dataType: 'xml',
	            async: false
	        }).done(function(specResult) {
	            Store.userSettings.userId = $(specResult).find('user').attr('id');
	            /*if (Store.userSettings.userId.length <= 0&&!Store.isPreview) {
	                alert('Please log in!');
	            }*/
	            Store.userSettings.uploadTimestamp = $(specResult).find('user').find('timestamp').text();
	            Store.userSettings.token = $(specResult).find('user').find('authToken').text();
	            Store.userSettings.userName=$(specResult).find('user').find('firstName').text();
	            Store.userSettings.email=$(specResult).find('user').find('email').text();
	        });
	    },
	    keepAlive:function() {
	        $.ajax({
	            url: Store.domains.baseUrl + '/userid/'+Store.userSettings.userId+'/heartbeat',
	            type: 'get',
	            dataType: 'xml'
	        }).done(function(specResult) {
	        });
	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(1)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, Store) {// var been=require('beenjs');
	module.exports = {
	    loadLocalProject: function() {
	        console.log('projectService');
	        $.ajax({
	            url: './assets/data/tshirt-project.1.0.xml',
	            type: 'get',
	            dataType: 'xml',
	            async: false
	        }).done(function(projectResult) {

	            Store.xml = projectResult;

	        });
	    },
	    insertProject: function(obj,xml) {
	        var url = Store.domains.baseUrl + '/general/' + Store.userSettings.userId + '/project/' + Store.projectType;
	        Store.projectXml = xml;
	        var encodeimage="";
	        var title = Store.title;
	        var quantity = Store.quantity ?  Store.quantity : 1;
	        var crossSell = Store.mainProjectUid ? 'cart' : '';
	        if(Store.projectType==="CV"||Store.projectType==="FM"||Store.projectType==="PHC"||Store.projectType==="CLO"||Store.projectType==="PR"||Store.projectType==="flushMountPrint" || Store.projectType==="PP" || Store.projectType==="IPadCase"){
	            encodeimage=this.getScreenshot().replace("data:image/jpeg;base64,","").replace("data:image/png;base64,","");
	        }
	        if(Store.projectType==="CV"||Store.projectType==="FM"){
	            var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	            var product = currentProject.product;
	            url=Store.domains.baseUrl + '/general/' + Store.userSettings.userId + '/project/' + product;
	        }
	        $.ajax({
	            url: url,
	            type: 'post',
	            data: { mainProjectUid:Store.mainProjectUid,crossSell:crossSell,removeCart:Store.fromCart,encodeimage:encodeimage,projectXml: xml, requestKey: __webpack_require__(10).getRequestKey() ,isFromMarketplace : Store.isFromMarketplace, title: title,quantity: quantity }
	        }).done(function(result) {
	            if (result && $(result).find('resultData').attr('state') === 'success') {
	                console.log('new project successfully' + result);
	                Store.projectId = $(result).find('guid').text() || '';
	                Store.projectXml = result;
	                //require('CanvasController').initCanvasData();
	                Store.watches.isProjectLoaded = true;
	                Store.isNewInsertProject = true;
	                // Store.isPrjSaved=true;
	            } else {
	                //require('CanvasController').initCanvasData();
	                Store.watches.isProjectLoaded = true;
	                if($(result).find('errorCode').text()==="-3"){
	                    //obj.$dispatch('dispatchShowPopup', { type: 'save', status: -2});
	                    obj.$dispatch('dispatchShowProjectChooseWindow');
	                }

	            };
	        });
	    },
	    saveProject: function(obj, xml, thumbnailPX, thumbnailPY, thumbnailPW, thumbnailPH,callback) {
	        var url = Store.domains.baseUrl + '/general/' + Store.userSettings.userId + '/project/' + Store.projectId + '/' + Store.projectType;
	        var encodeimage="";
	        var title = Store.title;
	        var quantity = Store.quantity ?  Store.quantity : 1;
	        if(Store.projectType==="CV"||Store.projectType==="FM"||Store.projectType==="PHC"||Store.projectType==="CLO"||Store.projectType==="PR" ||Store.projectType==="flushMountPrint"|| Store.projectType==="PP" || Store.projectType==="CR" || Store.projectType==="IPadCase"){
	            encodeimage=this.getScreenshot().replace("data:image/jpeg;base64,","").replace("data:image/png;base64,","");
	        }

	        if(Store.projectType==="CV"||Store.projectType==="FM"){
	            var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	            var product = currentProject.product;
	            url=Store.domains.baseUrl + '/general/' + Store.userSettings.userId + '/project/' + Store.projectId + '/' + product;
	        }
	        $.ajax({
	            url: url,
	            type: 'post',
	            dataType: 'xml',
	            data: { removeCart:Store.fromCart,encodeimage:encodeimage,projectXml: xml, requestKey: __webpack_require__(10).getRequestKey(), isFromMarketplace : Store.isFromMarketplace,thumbnailPX: thumbnailPX, thumbnailPY: thumbnailPY, thumbnailPW: thumbnailPW, thumbnailPH: thumbnailPH,title: title,quantity: quantity }
	        }).done(function(result) {
	            if (result && $(result).find('resultData').attr('state') === 'success') {
	                Store.projectXml = result;
	                if(callback && typeof callback==="function"){
	                    callback();
	                }else{
	                    obj.$dispatch('dispatchShowPopup', { type: 'save', status: 0});
	                }
	                __webpack_require__(11)({ev: __webpack_require__(13).SaveComplete});
	                Store.isPrjSaved=true;

	            }else if(result && $(result).find('resultData').attr('state') === 'fail'){

	                if($(result).find('code').text()==="201"){
	                    obj.$dispatch('dispatchShowPopup', { type: 'save', status: -3});
	                    Store.vm.$broadcast('notifyCloseWindow');
	                }else if($(result).find('code').text()==="202"){
	                    obj.$dispatch('dispatchShowPopup', { type: 'save', status: -4});
	                    Store.vm.$broadcast('notifyCloseWindow');
	                }else if($(result).find('code').text()==="205"){
	                    obj.$dispatch('dispatchShowPopup', { type: 'login', status: 0});
	                }else{
	                    obj.$dispatch('dispatchShowPopup', { type: 'save', status: -1});
	                }
	            }else {
	                // been.showMsg('Save failed.', 'fail', 'Message',null,null,'ok');
	                obj.$dispatch('dispatchShowPopup', { type: 'save', status: -1});
	            };
	        });
	    },
	    orderProject: function(obj,xml, thumbnailPX, thumbnailPY, thumbnailPW, thumbnailPH) {
	        if(!Store.projectId){
	            return;
	        }
	        var url = Store.domains.baseUrl + '/general/' + Store.userSettings.userId + '/project/' + Store.projectId + '/' + Store.projectType;
	        var encodeimage="";
	        var title = Store.title;
	        var quantity = Store.quantity ?  Store.quantity : 1;
	        if(Store.projectType==="CV"||Store.projectType==="FM" || Store.projectType === "PHC"||Store.projectType==="CLO"||Store.projectType==="PR" ||Store.projectType==="flushMountPrint" || Store.projectType==="PP" || Store.projectType==="CR" || Store.projectType==="IPadCase"){
	            encodeimage=this.getScreenshot().replace("data:image/jpeg;base64,","").replace("data:image/png;base64,","");
	        }
	        if(Store.projectType==="CV"||Store.projectType==="FM"){
	            var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	            var product = currentProject.product;
	            url=Store.domains.baseUrl + '/general/' + Store.userSettings.userId + '/project/' + Store.projectId + '/' + product;
	        }
	        $.ajax({
	            url: url,
	            type: 'post',
	            dataType: 'xml',
	            data: { removeCart:Store.fromCart,encodeimage:encodeimage,projectXml: xml, requestKey: __webpack_require__(10).getRequestKey(), isFromMarketplace : Store.isFromMarketplace,thumbnailPX: thumbnailPX, thumbnailPY: thumbnailPY, thumbnailPW: thumbnailPW, thumbnailPH: thumbnailPH,title: title,quantity: quantity }
	        }).done(function(result) {
	            if (result && $(result).find('resultData').attr('state') === 'success') {
	                console.log('save project successfully' + result);
	                console.log('errorCode' + $(result).find('errorCode').text());
	                Store.projectXml = result;
	                Store.isPrjSaved=true;
	                Store.isPopSave = false;
	                window.location = '/' + Store.orderType + '/addShoppingCart.html?projectGUID=' + Store.projectId + '&quantity=' + quantity;
	            }else if(result && $(result).find('resultData').attr('state') === 'fail'){
	                if($(result).find('code').text()==="201"){
	                    obj.$dispatch('dispatchShowPopup', { type: 'save', status: -3});
	                    Store.vm.$broadcast('notifyCloseWindow');
	                }else if($(result).find('code').text()==="205"){
	                    obj.$dispatch('dispatchShowPopup', { type: 'login', status: 0});
	                }else{
	                    obj.$dispatch("dispatchShowPopup", { type : 'order', status : -1});
	                }
	            }else {
	                obj.$dispatch("dispatchShowPopup", { type : 'order', status : -1});
	            };
	        });
	    },
	    getShareProject:function(){

	        var _this = this;
	        $.ajax({
	            url: Store.domains.uploadUrl + '/upload/Preview/GetPhotobookXmlByProjectId?projectId='+ encodeURIComponent(Store.projectId),
	            type: 'get',
	            dataType: 'xml',
	            data: 'webClientId=1'
	        }).done(function(result) {
	            if (result) {
	                //Store.projectXml = (new XMLSerializer()).serializeToString(result);
	                Store.projectXml = result;
	                Store.title = $(result).find('title').text();
	                Store.projectId = $(result).find('guid').text();
	                Store.projectSettings.length=0;
	                for (var i = 0; i < $(result).find('spec').length; i++) {

	                    var spec = $(result).find('spec').eq(i);

	                    var PrjConstructor = __webpack_require__(14);
	                    var Prj = PrjConstructor();

	                    for (var j = 0; j < spec.find('option').length; j++) {
	                        var option = spec.find('option').eq(j);
	                        Prj[option.attr('id')]=option.attr('value');
	                    };
	                    // value fix for old flex project
	                    if(Prj.category === 'categoryFrame' || Prj.category === 'categoryCanvas' || Prj.category === 'categoryWallarts') {
	                      Prj.metalType = Prj.metalType || 'none';
	                      Prj.finish = Prj.finish || 'none';
	                    };
	                    for (var k = 0; k < $(result).find('tshirtSetting').eq(i).find('setting').length; k++) {
	                        var setting = $(result).find('tshirtSetting').eq(i).find('setting').eq(k);
	                        Prj[setting.attr('id')]=setting.attr('value');
	                    }
	                    if($(result).find('frameBoard')){
	                        Prj.rotated=$(result).find('frameBoard').attr('rotated')==="true"?true:false;
	                        Store.bgColor=parseInt($(result).find('frameBoard').attr('canvasBorderColor'));
	                    }
	                     // 获取 project 时将 cardId 和 DeletedPhoto 初始化到 Store 中；
	                    if(['FT','FD'].indexOf($(result).find('project').attr('productType') !== -1)){
	                            Store.cardId = $(result).find('card').attr('id');
	                            Store.deletedPhoto = $(result).find('deletedPhoto').text();
	                            Prj.trim= Prj.trim || $(result).find('trim').attr('value');
	                    };
	                    console.log(Prj);

	                    Store.projectSettings.push(Prj);
	                }



	                _this.getAlbumId();
	                //require('CanvasController').initCanvasData();
	                Store.watches.isProjectLoaded = true;
	            }
	        });

	    },
	    getProject: function() {
	        var _this = this;
	        $.ajax({
	            url: Store.domains.baseUrl + '/userid/' + Store.userSettings.userId + '/project/' + Store.projectId,
	            type: 'get',
	            dataType: 'xml',
	            data: 'webClientId=1&autoRandomNum=' + __webpack_require__(7).getRandomNum()
	        }).done(function(result) {
	            if (result) {

	                Store.projectXml = result;
	                Store.title = $(result).find('title').text();
	                Store.projectId = $(result).find('guid').text();
	                Store.projectSettings.length=0;
	                for (var i = 0; i < $(result).find('spec').length; i++) {

	                    var spec = $(result).find('spec').eq(i);

	                    var PrjConstructor = __webpack_require__(14);
	                    var Prj = PrjConstructor();

	                    for (var j = 0; j < spec.find('option').length; j++) {
	                        var option = spec.find('option').eq(j);
	                        Prj[option.attr('id')]=option.attr('value');
	                        if(Prj[option.attr('id')]==="None"){
	                            Prj[option.attr('id')]="none";
	                        }
	                    };
	                    // value fix for old flex project
	                    if(Prj.category === 'categoryFrame' || Prj.category === 'categoryCanvas' || Prj.category === 'categoryWallarts') {
	                      Prj.metalType = Prj.metalType || 'none';
	                      Prj.metalType === 'undefined'? Prj.metalType = 'none': Prj.metalType;
	                      Prj.finish = Prj.finish || 'none';
	                      Prj.finish === 'undefined'? Prj.finish = 'none': Prj.finish;
	                    };
	                    for (var k = 0; k < $(result).find('tshirtSetting').eq(i).find('setting').length; k++) {
	                        var setting = $(result).find('tshirtSetting').eq(i).find('setting').eq(k);
	                        Prj[setting.attr('id')]=setting.attr('value');
	                    }
	                    if($(result).find('frameBoard')){
	                        Prj.rotated=$(result).find('frameBoard').attr('rotated')==="true"?true:false;
	                        Store.bgColor=parseInt($(result).find('frameBoard').attr('canvasBorderColor'));
	                    }

	                     // 获取 project 时将 cardId 和 DeletedPhoto 初始化到 Store 中；
	                    if(['FT','FD'].indexOf($(result).find('project').attr('productType') !== -1)){
	                            Store.cardId = $(result).find('card').attr('id');
	                            Store.deletedPhoto = $(result).find('deletedPhoto').text();
	                            Prj.trim= Prj.trim ? Prj.trim : $(result).find('trim').attr('value');
	                    };

	                    console.log(Prj);

	                    Store.projectSettings.push(Prj);
	                }

	                if(Store.projectType=="PR"){
	                    if($(result).find('spec')&&$(result).find('spec').length>0){
	                        var size=$(result).find('spec').eq(0).find('option[id="size"]').attr("value");
	                        var paper=$(result).find('spec').eq(0).find('option[id="paper"]').attr("value");
	                        Store.baseProject.size=size;
	                        Store.baseProject.paper=paper;
	                    }else{
	                        Store.baseProject.size='4X6';
	                        Store.baseProject.paper='GP';
	                    }
	                }

	                if(Store.projectType=="flushMountPrint"){
	                    if($(result).find('spec')&&$(result).find('spec').length>0){
	                        var size=$(result).find('spec').eq(0).find('option[id="size"]').attr("value");
	                        var paper=$(result).find('spec').eq(0).find('option[id="paper"]').attr("value");
	                        var surfaceType=$(result).find('spec').eq(0).find('option[id="surfaceType"]').attr("value");
	                        Store.baseProject.size=size;
	                        Store.baseProject.paper=paper;
	                        Store.baseProject.surfaceType=surfaceType;
	                    }else{
	                        Store.baseProject.size='4X6';
	                        Store.baseProject.paper='GP';
	                        Store.baseProject.surfaceType='SS';
	                    }
	                }

	                _this.getAlbumId();
	                //require('CanvasController').initCanvasData();
	                Store.watches.isProjectLoaded = true;

	                //console.log(require("ProjectManage").getFrameBorderAsset());
	            }
	        });


	    },
	    getAlbumId: function() {

	        var _instance = this;

	        $.ajax({
	            url: Store.domains.baseUrl + '/userid/' + Store.userSettings.userId + '/getAlbumId?albumName=' + encodeURIComponent(Store.title),
	            type: 'get'
	        }).done(function(aResult) {
	            if (aResult && $(aResult).find('resultData').attr('state') === 'success') {
	                Store.userSettings.albumId = $(aResult).find('albumId').text() || '';
	            } else {
	                Store.userSettings.albumId = '';
	                _instance.addOrUpdateAlbum(Store.title);
	            }
	        });
	    },
	    addOrUpdateAlbum: function(title, obj, eventName) {
	        var timestamp = (new Date()).valueOf();
	        $.ajax({
	            url: Store.domains.baseUrl + '/userid/' + Store.userSettings.userId + '/addOrUpdateAlbum',
	            type: 'get',
	            data: 'timestamp=' + timestamp + '&albumId=' + Store.userSettings.albumId + '&albumName=' + title + '&webClientId=' + Store.webClientId + '&autoRandomNum=' + __webpack_require__(7).getRandomNum()
	        }).done(function(result) {
	            if (result) {
	                if ($(result).find('resultData').attr('state') == 'success') {
	                    Store.userSettings.albumId = $(result).find('albumId').text() || '';
	                    if (obj)
	                        obj.$dispatch(eventName, false, 'This title already exists, please try again.');

	                } else {

	                    if (obj)
	                        obj.$dispatch(eventName, true, 'This title already exists, please try again.');

	                }
	            }
	        });
	    },
	    handledSaveProject: function(obj,eventName,xml, thumbnailPX, thumbnailPY, thumbnailPW, thumbnailPH) {
	        var url = Store.domains.baseUrl + '/general/' + Store.userSettings.userId + '/project/' + Store.projectId + '/' + Store.projectType;
	        var encodeimage="";
	        var title = Store.title;
	        var quantity = Store.quantity ?  Store.quantity : 1;
	        if(Store.projectType==="CV"||Store.projectType==="FM"||Store.projectType==="PHC"||Store.projectType==="CLO"||Store.projectType==="PR" ||Store.projectType==="flushMountPrint" || Store.projectType==="PP" || Store.projectType==="CR" || Store.projectType==="IPadCase"){
	            encodeimage=this.getScreenshot().replace("data:image/jpeg;base64,","").replace("data:image/png;base64,","");
	        }
	        if(Store.projectType==="CV"||Store.projectType==="FM"){
	            var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	            var product = currentProject.product;
	            url=Store.domains.baseUrl + '/general/' + Store.userSettings.userId + '/project/' + Store.projectId + '/' + product;
	        }
	        $.ajax({
	            url: url,
	            type: 'post',
	            dataType: 'xml',
	            data: { removeCart:Store.fromCart,encodeimage:encodeimage,projectXml: xml, requestKey: __webpack_require__(10).getRequestKey(), thumbnailPX: thumbnailPX, thumbnailPY: thumbnailPY, thumbnailPW: thumbnailPW, thumbnailPH: thumbnailPH,title: title, quantity: quantity }
	        }).done(function(result) {
	            if (result && $(result).find('resultData').attr('state') === 'success') {
	                console.log('save project successfully' + result);
	                Store.projectXml = result;
	                Store.isPrjSaved=true;
	                //been.showMsg('Save success.', 'default', 'Message',null,null,'ok');
	                obj.$dispatch(eventName,'success');

	            } else {

	                if($(result).find('code').text()==="205"){
	                    obj.$dispatch('dispatchShowPopup', { type: 'login', status: 0});
	                }else{
	                    obj.$dispatch(eventName,'failed');
	                }
	            };
	        });
	    },
	    getProjectOrderedState: function(obj) {
	        $.ajax({

	            url: '/userid/' + Store.userSettings.userId + '/getProjectOrderedState/' + Store.projectId,
	            type: 'get',
	            dataType: 'xml',
	            data: 'webClientId=1&autoRandomNum=' + __webpack_require__(7).getRandomNum()

	        }).done(function(result) {
	            if (result) {

	                Store.userSettings.ordered = $(result).find('ordered').text()=="true"?true:false;
	                Store.checkFailed=$(result).find('checkFailed').text()=="true"?true:false;
	                Store.watches.isProjectOrderedStateLoaded = true;


	                if (Store.userSettings.ordered == "true") {
	                    //obj.$dispatch("dispatchShowPopup", { type : 'isOrder',status:-1});
	                }
	            };
	        });
	    },
	    sentContactUs: function(obj,question, featureRequest, bug,os,browser) {

	        $.ajax({
	            url: Store.domains.baseUrl + '/userid/service/feedback',
	            type: 'post',
	            dataType: 'xml',
	            data: {
	                userId: Store.userSettings.userId,
	                userName: Store.userSettings.userName,
	                userEmail: Store.userSettings.email,
	                sku: '',
	                projectName: Store.title,
	                projectId: Store.projectId,
	                autoRandomNum: __webpack_require__(7).getRandomNum(),
	                webClientId: 1,
	                os: os,
	                browser: browser,
	                question: question,
	                featureRequest: featureRequest,
	                bug: bug
	            }

	        }).done(function(result) {
	            if ($(result).find('resultData').attr('state') == 'success') {
	                obj.$dispatch("dispatchShowPopup", { type : 'contact', status : 0})
	            }else{
	                obj.$dispatch("dispatchShowPopup", { type : 'contact', status : -1})
	            }
	        });
	    },
	    cloneProject:function(obj,oldTitle,newTitle,xml, thumbnailPX, thumbnailPY, thumbnailPW, thumbnailPH){
	        var _this = this;
	        var encodeimage = '';
	        var timestamp = (new Date()).valueOf();
	        $.ajax({
	            url: '/userid/' + Store.userSettings.userId + '/addOrUpdateAlbum',
	            type: 'get',
	            data: 'timestamp=' + timestamp + '&albumId=&albumName=' + newTitle + '&webClientId=' + Store.webClientId + '&autoRandomNum=' + __webpack_require__(7).getRandomNum()
	        }).done(function(result) {
	            if (result) {
	                if ($(result).find('resultData').attr('state') == 'success') {
	                    Store.userSettings.albumId = $(result).find('albumId').text() || '';
	                    var url = Store.domains.baseUrl + '/general/' + Store.userSettings.userId + '/project/' + Store.projectType;
	                    var title = Store.title;
	                    var quantity = Store.quantity ?  Store.quantity : 1;
	                    if(Store.projectType==="CV" || Store.projectType==="FM" || Store.projectType === "PHC" || Store.projectType==="IPadCase"){
	                        encodeimage=_this.getScreenshot().replace("data:image/jpeg;base64,","").replace("data:image/png;base64,","");
	                    }
	                    if(Store.projectType==="CV"||Store.projectType==="FM"){
	                        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	                        var product = currentProject.product;
	                        url=Store.domains.baseUrl + '/general/' + Store.userSettings.userId + '/project/' + product;
	                    }
	                    $.ajax({
	                        url: url,
	                        type: 'post',
	                        data: { removeCart:Store.fromCart,encodeimage:encodeimage,projectXml: xml, requestKey: __webpack_require__(10).getRequestKey(), isFromMarketplace : Store.isFromMarketplace,thumbnailPX: thumbnailPX, thumbnailPY: thumbnailPY, thumbnailPW: thumbnailPW, thumbnailPH: thumbnailPH,title: title,quantity: quantity}
	                    }).done(function(result) {
	                        if (result && $(result).find('resultData').attr('state') === 'success') {
	                            var successString = 'Clone and saved successfully';
	                            Store.projectId = $(result).find('guid').text() || '';
	                            Store.projectXml = result;
	                            Store.isPrjSaved=true;
	                            //obj.$dispatch("dispatchShowPopup", { type : 'clone', status : 0 , info:successString});
	                            Store.vm.$broadcast('notifyHideCloneWindow');
	                            __webpack_require__(9).getProjectInfo();
	                        } else {
	                            var failedString = 'Clone failed';
	                            Store.title=oldTitle;
	                            Store.vm.$broadcast('notifyShowInvalidTitle',failedString);
	                            //obj.$dispatch("dispatchShowPopup", { type : 'clone', status : 0 , info:failedString});

	                        };
	                    });
	                }else if($(result).find('resultData').attr('state') == 'fail'){
	                    var errorCode = $(result).find('errorCode').text();
	                    var errorString;
	                    Store.title=oldTitle;
	                    if(errorCode === "1"){
	                        errorString= "Title existed, please pick another one.";
	                    }else if(errorCode === "2"){
	                        errorString = "Please input new project name";
	                    }else{
	                        errorString = "Save project name failed. errorInfo："+$(result).find('errorInfo').text();
	                    }
	                    Store.vm.$broadcast('notifyShowInvalidTitle',errorString);
	                    //obj.$dispatch("dispatchShowPopup", { type : 'clone', status : 0 ,info:errorString});

	                }
	            }

	        });
	    },
	    getScreenshot:function(){
	        return __webpack_require__(15).convertScreenshotToBase64();
	    },
	    getProjectInfo: function() {
	        $.ajax({

	            url: Store.domains.baseUrl +'/clientH5/projectInfo/' + Store.projectId + "?" + new Date().getTime(),
	            type: 'get',
	            dataType: 'json'

	        }).done(function(result) {
	            if (result) {
	                Store.projectInfo.isOrdered=result.order===1?true:false;
	                Store.projectInfo.isInCart=result.cart===1?true:false;
	                if(result.market === 1 || result.market === 2){
	                     Store.projectInfo.isInMarket=true;
	                }else{
	                    Store.projectInfo.isInMarket=false;
	                }
	                if((typeof result.market) !== "undefined"){
	                    Store.isShowPostToSale=true;
	                }
	                Store.watches.isProjectInfoLoaded = true;
	                Store.vm.$dispatch('dispatchResetProjectInfo');
	            }
	        });
	    },

	    updateCheckStatus: function(obj) {
	        $.ajax({

	            url: '/userid/'+Store.userSettings.userId+'/submitCheckFailProject/'+Store.projectId+'?isParentBook=false&redirectParentBook=false',
	            type: 'get',
	            dataType: 'xml'
	        }).done(function(result) {
	            if (result) {
	                var code = $(result).find('code').text();
	                if(code==="200"){
	                    Store.checkFailed=false;
	                    if(Store.submitTitle){

	                        Store.vm.$dispatch("dispatchShowPopup", { type : 'checkFailed', status : 0 ,info:"Thank you for submitting your changes to this ordered "+Store.submitTitle+" project. We will review this "+Store.submitTitle+" project again. If no issue is found, we will proceed with your order processing."});

	                    }else{
	                        Store.vm.$dispatch("dispatchShowPopup", { type : 'checkFailed', status : 0 ,info:"Thank you for submitting your changes to this ordered frame project. We will review this frame project again. If no issue is found, we will proceed with your order processing."});
	                    }
	                }else{
	                    Store.vm.$dispatch("dispatchShowPopup", { type : 'checkFailed', status : 0 ,info:"notifyShowInvalidTitle','Submit failed, please try again or contact us."});

	                }

	            };
	        });
	    },
	    getPhotoPrice:function(product,options,idx){
	        if(Store.isTopPriceShow) return;

	        $.ajax({
	            url: Store.domains.baseUrl+'/clientH5/product/price',
	            type: 'get',
	            data: { product : product,options : options,timestamp : Store.freshTimestamp || 0 },
	            dataType : 'json'
	        }).done(function(result){
	            console.log(result);
	            if(result){
	                if(result.couponId){
	                    Store.projectSettings[idx].price = (result.sPrice - 0).toFixed(2);
	                }else{
	                    Store.projectSettings[idx].price = (result.oriPrice - 0).toFixed(2);
	                }
	            }else{
	                console.log(result.error);
	            }
	        });
	    },
	    getNewPrintPrice:function(){
	        var optionIds = __webpack_require__(18).getOptionIds();
	        var product = Store.baseProject.product;
	        var options = [];

	        if(!Store.isTopPriceShow) return;

	        optionIds.forEach(function(optionId) {
	            if(optionId !== 'product') {
	                options.push(Store.baseProject[optionId]);
	            }
	        });

	        options = options.filter(function(option) {
	            return option && option !== 'none';
	        });

	        $.ajax({
	            url: Store.domains.baseUrl+'/clientH5/product/price',
	            type: 'get',
	            data: { product : product, options : options.join(','), timestamp : Store.freshTimestamp || 0},
	            dataType : 'json'
	        }).done(function(result){
	            console.log(result);
	            if(result){
	                Store.photoPrice.oriPrice = (result.oriPrice - 0).toFixed(2) - 0;
	                Store.photoPrice.sPrice = (result.sPrice - 0).toFixed(2) - 0;
	                Store.photoPrice.couponId = result.couponId || '';
	                Store.photoPrice.options = result.options || {};
	                Store.priceChange = true;
	            }else{
	                console.log(result.error);
	            }
	        });
	    },
	    getCanvasPrice:function(product,options,userId){
	        $.ajax({
	            url: Store.domains.baseUrl+'/clientH5/product/price',
	            type: 'get',
	            data: { product : product,options : options,userId : userId},
	            dataType : 'json'
	        }).done(function(result){
	            console.log(result);
	            if(result){
	                Store.photoPrice.oriPrice = (result.oriPrice - 0).toFixed(2) - 0;
	                Store.photoPrice.sPrice = (result.sPrice - 0).toFixed(2) - 0;
	                Store.photoPrice.couponId = result.couponId || '';
	                Store.photoPrice.options = result.options || {};

	                Store.priceChange = true;
	            }else{
	                console.log(result.error);
	            }
	        })
	    },
	    getPosterPrice:function(product,options,userId){
	        $.ajax({
	            url: Store.domains.baseUrl+'/clientH5/product/price',
	            type: 'get',
	            data: { product : product,options : options,userId : userId},
	            dataType : 'json'
	        }).done(function(result){
	            console.log(result);
	            if(result){
	                if(typeof result.trialPrice !=='undefined'){
	                    Store.photoPrice.trialPrice ="$ "+ (result.trialPrice-0).toFixed(2);
	                }else {
	                    if(result.sPrice>0){
	                        Store.photoPrice.trialPrice ="$ "+ (result.sPrice-0).toFixed(2);
	                    }
	                }
	                Store.photoPrice.oriPrice ="$ "+ result.oriPrice;
	                Store.priceChange = true;
	            }else{
	                console.log(result.error);
	            }
	        })
	    },
	    getCardsPrice:function(product,options,quantity,rounded,userId){
	        $.ajax({
	            url: Store.domains.baseUrl+'/clientH5/product/book/price',
	            type: 'get',
	            data: {
	                product : product,
	                options : options
	            },
	            dataType : 'json'
	        }).done(function(result){
	            if(result){
	                var mainPrice = result.data.main;
	                var optionPrice = result.data.options;

	                Store.photoPrice.oriPrice = (mainPrice.oriPrice - 0).toFixed(2) - 0;
	                Store.photoPrice.sPrice = (mainPrice.sPrice - 0).toFixed(2) - 0;
	                Store.photoPrice.couponId = mainPrice.couponId || '';
	                Store.photoPrice.options = optionPrice || {};

	                Store.priceChange = true;
	            }else{
	                console.log(result.error);
	            }
	        })
	    },
	    getLMCPrice: function(product, size, options, userId) {
	        $.ajax({
	            url: Store.domains.baseUrl+'/clientH5/product/price',
	            type: 'get',
	            data: {
	                product : product,
	                options : options,
	                userId : userId
	            },
	            dataType : 'json'
	        }).done(function(result){
	            if(result){
	                Store.photoPrice.allSize.push({
	                    size: size,
	                    oriPrice: result.oriPrice - 0,
	                    sPrice: result.sPrice - 0
	                });

	                Store.priceChange = true;
	            }else{
	                console.log(result);
	            }
	        });
	    },
	    saveRemarkProject : function(successCallback,failedCallback){
	        var xml = __webpack_require__(19).getRemarkProjectXml();
	        var url = Store.domains.portalBaseUrl + '/portal/h5-client/feedBackPrintsRemark.ep';
	        $.ajax({
	            url: url,
	            type: 'post',
	            data: { projectId : Store.projectId, remarkProjectXml : xml, orderNumber : Store.orderNumber,timestamp:Store.timestamp,token:Store.token,pUser:Store.pUser}
	        }).done(function(result) {
	            console.log(result);

	            if(result && $(result).find('resultData').attr('state') === 'success'){
	                successCallback && successCallback();
	                Store.vm.$dispatch("dispatchShowPopup", { type : 'checkFailed', status : 0 ,info:"Reprint successfully"});
	            }else{
	                failedCallback && failedCallback();
	                Store.vm.$dispatch("dispatchShowPopup", { type : 'checkFailed', status : 0 ,info:"Failed to reprint, please try again later."});

	            }
	        });
	    },
	    // saveNewPrintRemarkProject : function(successCallback,failedCallback){
	    //     var projectJson = require('JsonProjectManage').getRemarkProjectXml();
	    //     var url = Store.domains.portalBaseUrl + '/portal/h5-client/feedBackPrintsRemark.ep';
	    //     $.ajax({
	    //         url: url,
	    //         type: 'post',
	    //         data: { projectId : Store.projectId, remarkProjectXml : projectJson, orderNumber : Store.orderNumber,timestamp:Store.timestamp,token:Store.token,pUser:Store.pUser}
	    //     }).done(function(result) {
	    //         console.log(result);

	    //         if(result && $(result).find('resultData').attr('state') === 'success'){
	    //             successCallback && successCallback();
	    //             Store.vm.$dispatch("dispatchShowPopup", { type : 'checkFailed', status : 0 ,info:"Reprint successfully"});
	    //         }else{
	    //             failedCallback && failedCallback();
	    //             Store.vm.$dispatch("dispatchShowPopup", { type : 'checkFailed', status : 0 ,info:"Failed to reprint, please try again later."});

	    //         }
	    //     });
	    // },
	    getPortalProject:function(){

	        var _this = this;
	        $.ajax({
	            url: Store.domains.portalBaseUrl + '/portal/projectProcess/getProjectById.ep?projectId='+ encodeURIComponent(Store.projectId),
	            type: 'get',
	            dataType: 'xml'
	        }).done(function(result) {
	            if (result) {
	                Store.projectXml = result;
	                Store.title = $(result).find('title').text();
	                Store.projectId = $(result).find('guid').text();
	                Store.projectSettings.length=0;
	                for (var i = 0; i < $(result).find('spec').length; i++) {

	                    var spec = $(result).find('spec').eq(i);

	                    var PrjConstructor = __webpack_require__(14);
	                    var Prj = PrjConstructor();

	                    for (var j = 0; j < spec.find('option').length; j++) {
	                        var option = spec.find('option').eq(j);
	                        Prj[option.attr('id')]=option.attr('value');
	                        if(Prj[option.attr('id')]==="None"){
	                            Prj[option.attr('id')]="none";
	                        }
	                    };
	                    // value fix for old flex project
	                    if(Prj.category === 'categoryFrame' || Prj.category === 'categoryCanvas' || Prj.category === 'categoryWallarts') {
	                      Prj.metalType = Prj.metalType || 'none';
	                      Prj.metalType === 'undefined'? Prj.metalType = 'none': Prj.metalType;
	                      Prj.finish = Prj.finish || 'none';
	                      Prj.finish === 'undefined'? Prj.finish = 'none': Prj.finish;
	                    };
	                    for (var k = 0; k < $(result).find('tshirtSetting').eq(i).find('setting').length; k++) {
	                        var setting = $(result).find('tshirtSetting').eq(i).find('setting').eq(k);
	                        Prj[setting.attr('id')]=setting.attr('value');
	                    }
	                    if($(result).find('frameBoard')){
	                        Prj.rotated=$(result).find('frameBoard').attr('rotated')==="true"?true:false;
	                        Store.bgColor=parseInt($(result).find('frameBoard').attr('canvasBorderColor'));
	                    }

	                    console.log(Prj);

	                    Store.projectSettings.push(Prj);
	                }
	                if(Store.projectType=="PR"){
	                    if($(result).find('spec')&&$(result).find('spec').length>0){
	                        var size=$(result).find('spec').eq(0).find('option[id="size"]').attr("value");
	                        var paper=$(result).find('spec').eq(0).find('option[id="paper"]').attr("value");
	                        Store.baseProject.size=size;
	                        Store.baseProject.paper=paper;
	                    }else{
	                        Store.baseProject.size='4X6';
	                        Store.baseProject.paper='GP';
	                    }
	                }

	                if(Store.projectType=="flushMountPrint"){
	                    if($(result).find('spec')&&$(result).find('spec').length>0){
	                        var size=$(result).find('spec').eq(0).find('option[id="size"]').attr("value");
	                        var paper=$(result).find('spec').eq(0).find('option[id="paper"]').attr("value");
	                        var surfaceType=$(result).find('spec').eq(0).find('option[id="surfaceType"]').attr("value");
	                        Store.baseProject.size=size;
	                        Store.baseProject.paper=paper;
	                        Store.baseProject.surfaceType=surfaceType;
	                    }else{
	                        Store.baseProject.size='4X6';
	                        Store.baseProject.paper='GP';
	                        Store.baseProject.surfaceType='SS';
	                    }
	                }

	                _this.getAlbumId();
	                //require('CanvasController').initCanvasData();
	                Store.watches.isProjectLoaded = true;
	            }
	        });

	    },
	    getProjectIdByTitle:function(title){
	        var customerId=Store.userSettings.userId;
	        $.ajax({
	            url: Store.domains.baseUrl+'/userid/getProjectUidByTitleAndCid.ep?customerId='+customerId+'&title='+encodeURIComponent(title),
	            type: 'get'
	        }).done(function(result){
	            if (result && $(result).find('resultData').attr('state') === 'success' ) {
	                Store.projectId = $(result).find('projectId').text() || '';
	                Store.vm.$dispatch("dispatchGetProjectIdByTitleSuccess");
	            }
	        });

	    },
	    createProject:function(obj,oldTitle,newTitle,xml, thumbnailPX, thumbnailPY, thumbnailPW, thumbnailPH){
	        var _this = this;
	        var encodeimage = '';
	        var timestamp = (new Date()).valueOf();
	        $.ajax({
	            url: '/userid/' + Store.userSettings.userId + '/addOrUpdateAlbum',
	            type: 'get',
	            data: 'timestamp=' + timestamp + '&albumId=&albumName=' + newTitle + '&webClientId=' + Store.webClientId + '&autoRandomNum=' + __webpack_require__(7).getRandomNum()
	        }).done(function(result) {
	            if (result) {
	                if ($(result).find('resultData').attr('state') == 'success') {
	                    Store.userSettings.albumId = $(result).find('albumId').text() || '';
	                    var url = Store.domains.baseUrl + '/general/' + Store.userSettings.userId + '/project/' + Store.projectType;
	                    var title = Store.title;
	                    var quantity = Store.quantity ?  Store.quantity : 1;
	                    if(Store.projectType==="CV"||Store.projectType==="FM"){
	                        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	                        var product = currentProject.product;
	                        url=Store.domains.baseUrl + '/general/' + Store.userSettings.userId + '/project/' + product;
	                    }
	                    $.ajax({
	                        url: url,
	                        type: 'post',
	                        data: { removeCart:Store.fromCart,encodeimage:encodeimage,projectXml: xml, requestKey: __webpack_require__(10).getRequestKey(), isFromMarketplace : Store.isFromMarketplace,thumbnailPX: thumbnailPX, thumbnailPY: thumbnailPY, thumbnailPW: thumbnailPW, thumbnailPH: thumbnailPH,title: title,quantity: quantity}
	                    }).done(function(result) {
	                        if (result && $(result).find('resultData').attr('state') === 'success') {
	                            var successString = 'Create and saved successfully';
	                            Store.projectId = $(result).find('guid').text() || '';
	                            Store.projectXml = result;
	                            Store.watches.isProjectLoaded = true;
	                            Store.vm.$broadcast('notifyHideNewProjectWindow');
	                            __webpack_require__(9).getProjectInfo();
	                        } else {
	                            var failedString = 'Create failed';
	                            Store.title=oldTitle;
	                            Store.vm.$broadcast('notifyShowNewProjectInvalidTitle',failedString);

	                        };
	                    });
	                }else if($(result).find('resultData').attr('state') == 'fail'){
	                    var errorCode = $(result).find('errorCode').text();
	                    Store.errCode = false;
	                    var errorString;
	                    Store.title=oldTitle;
	                    if(errorCode === "1"){
	                        errorString= "Title existed, please pick another one.";
	                    }else if(errorCode === "2"){
	                        errorString = "Please input new project name";
	                    }else{
	                        errorString = "Save project name failed. errorInfo："+$(result).find('errorInfo').text();
	                    }
	                    Store.vm.$broadcast('notifyShowNewProjectInvalidTitle',errorString);
	                    //obj.$dispatch("dispatchShowPopup", { type : 'clone', status : 0 ,info:errorString});

	                }
	            }

	        });
	    },
	    createProjectAddOrUpdateAlbum: function(newTitle,oldTitle, success, failed) {
	        var timestamp = (new Date()).valueOf();
	        $.ajax({
	            url: '/userid/' + Store.userSettings.userId + '/addOrUpdateAlbum',
	            type: 'get',
	            data: 'timestamp=' + timestamp + '&albumId=&albumName=' + newTitle + '&webClientId=' + Store.webClientId + '&autoRandomNum=' + __webpack_require__(7).getRandomNum()
	        }).done(function(result) {
	            if (result) {
	                if ($(result).find('resultData').attr('state') == 'success') {
	                    Store.userSettings.albumId = $(result).find('albumId').text() || '';
	                   success && success(newTitle);
	                }
	                else if($(result).find('resultData').attr('state') == 'fail'){
	                    var errorCode = $(result).find('errorCode').text();
	                    var errorString;
	                    Store.title=oldTitle;
	                    if(errorCode === "1"){
	                        errorString= "Title existed, please pick another one.";
	                    }else if(errorCode === "2"){
	                        errorString = "Please input new project name";
	                    }else{
	                        errorString = "Save project name failed. errorInfo："+$(result).find('errorInfo').text();
	                    }
	                    Store.vm.$broadcast('notifyShowNewProjectInvalidTitle',errorString);
	                   failed && failed(newTitle);

	                }
	            }
	        });
	    },
	    createProjectSuccess:function(obj,oldTitle,newTitle,xml, thumbnailPX, thumbnailPY, thumbnailPW, thumbnailPH){
	        var encodeimage = '';
	        var url = Store.domains.baseUrl + '/general/' + Store.userSettings.userId + '/project/' + Store.projectType;
	        var title = Store.title;
	        var quantity = Store.quantity ?  Store.quantity : 1;
	        Store.errCode = true;
	        if(Store.projectType==="CV"||Store.projectType==="FM"){
	            var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	            var product = currentProject.product;
	            url=Store.domains.baseUrl + '/general/' + Store.userSettings.userId + '/project/' + product;
	        }
	        $.ajax({
	            url: url,
	            type: 'post',
	            data: { removeCart:Store.fromCart,encodeimage:encodeimage,projectXml: xml, requestKey: __webpack_require__(10).getRequestKey(), isFromMarketplace : Store.isFromMarketplace,thumbnailPX: thumbnailPX, thumbnailPY: thumbnailPY, thumbnailPW: thumbnailPW, thumbnailPH: thumbnailPH,title: title,quantity: quantity}
	        }).done(function(result) {
	            if(result){
	                if (result && $(result).find('resultData').attr('state') === 'success') {
	                    var successString = 'Create and saved successfully';
	                    Store.projectId = $(result).find('guid').text() || '';
	                    Store.projectXml = result;
	                    Store.watches.isProjectLoaded = true;
	                    Store.vm.$broadcast('notifyHideNewProjectWindow');
	                    __webpack_require__(9).getProjectInfo();
	                } else {
	                    var failedString = 'Create failed';
	                    Store.title=oldTitle;
	                    Store.vm.$broadcast('notifyShowNewProjectInvalidTitle',failedString);

	                };
	            }
	        });
	    },
	    getTitle: function() {
	        var _this = this;
	        var url = Store.domains.baseUrl +  '/web-api/customerId/' + Store.userSettings.userId + '/getProjectNameByProjectId';
	        $.ajax({
	            url: url,
	            type: 'get',
	            data: 'projectId=' + Store.projectId + '&autoRandomNum=' + __webpack_require__(7).getRandomNum()
	        }).done(function(result){
	            if(result){
	                if(result.respCode === '200') {
	                    Store.title = result.projectName;
	                    _this.getAlbumId();
	                }
	            }
	        })
	    },
	    changeProjectTitle: function(title,obj,eventName) {
	        var url = Store.domains.baseUrl +  '/web-api/customerId/' + Store.userSettings.userId + '/updateProjectAndAlbumTitle';
	        $.ajax({
	            url: url,
	            type: 'get',
	            data: 'projectId=' + Store.projectId + '&projectName=' + title
	        }).then(function(result){
	            if(result){
	                if(result.respCode === '200') {
	                    // Store.title = title;
	                    if (obj)
	                        obj.$dispatch(eventName, false, 'This title already exists, please try again.');
	                }else{
	                    if (obj)
	                        obj.$dispatch(eventName, true, 'This title already exists, please try again.');
	                }
	            }
	        })
	    },
	    savePortalCardProject: function(obj,xml,callback) {
	        Store.projectXml = xml;
	        var timestamp = (new Date()).valueOf();
	        var url = Store.domains.baseUrl +  '/card-template/save.ep';
	        $.ajax({
	            url: url,
	            type: 'post',
	            data: {projectXml: xml,autoRandomNum:timestamp,webClientId: 1 }
	        }).done(function(result) {
	            if (result && $(result).find('resultData').attr('state') === 'success') {
	                Store.projectId = $(result).find('guid').text() || '';
	                Store.projectXml = result;
	                Store.watches.isProjectLoaded = true;
	                if(callback && typeof callback==="function"){
	                    callback();
	                }else{
	                    obj.$dispatch('dispatchShowPopup', { type: 'save', status: 0});
	                }
	            } else {
	                Store.watches.isProjectLoaded = true;
	                if($(result).find('code').text()==="300"){
	                    // obj.$dispatch('dispatchShowProjectChooseWindow');
	                    obj.$dispatch('dispatchShowPopup', { type: 'save', status: -5});
	                }

	            };
	        });
	    },
	    getCardPortalProject: function() {
	        var _this = this;
	        $.ajax({
	            url: Store.domains.baseUrl + '/card-template/get.ep',
	            type: 'get',
	            dataType: 'xml',
	            data: 'initGuid='+Store.projectId+'&webClientId=1&autoRandomNum=' + __webpack_require__(7).getRandomNum()
	        }).done(function(result) {
	            if (result) {
	                Store.projectXml = result;
	                Store.title = $(result).find('title').text();
	                Store.projectId = $(result).find('guid').text();
	                Store.projectSettings.length=0;
	                for (var i = 0; i < $(result).find('spec').length; i++) {
	                    var spec = $(result).find('spec').eq(i);
	                    var PrjConstructor = __webpack_require__(14);
	                    var Prj = PrjConstructor();

	                    for (var j = 0; j < spec.find('option').length; j++) {
	                        var option = spec.find('option').eq(j);
	                        Prj[option.attr('id')]=option.attr('value');
	                        if(Prj[option.attr('id')]==="None"){
	                            Prj[option.attr('id')]="none";
	                        }
	                    };
	                    for (var k = 0; k < $(result).find('tshirtSetting').eq(i).find('setting').length; k++) {
	                        var setting = $(result).find('tshirtSetting').eq(i).find('setting').eq(k);
	                        Prj[setting.attr('id')]=setting.attr('value');
	                    }
	                     // 获取 project 时将 cardId 和 DeletedPhoto 初始化到 Store 中；
	                    if(['FT','FD'].indexOf($(result).find('project').attr('productType') !== -1)){
	                            Store.cardId = $(result).find('card').attr('id');
	                            Store.deletedPhoto = $(result).find('deletedPhoto').text();
	                            Prj.trim= Prj.trim ? Prj.trim : $(result).find('trim').attr('value');
	                    };
	                    Store.projectSettings.push(Prj);
	                }
	                _this.getAlbumId();
	                Store.watches.isProjectLoaded = true;
	            }
	        });
	    },
	    submitPortalCardProject: function(obj, xml){
	        var url = Store.domains.baseUrl + '/card-template/submit.ep';
	        $.ajax({
	            url: url,
	            type: 'post',
	            dataType: 'xml',
	            data: { encodeimage1:Store.encodeImage1,encodeimage2: Store.encodeImage2,projectXml: xml,webClientId:1 ,autoRandomNum:__webpack_require__(7).getRandomNum() }
	        }).done(function(result) {
	            if (result && $(result).find('resultData').attr('state') === 'success') {
	                Store.projectXml = result;
	                // if(callback && typeof callback==="function"){
	                //     callback();
	                // }else{
	                //     obj.$dispatch('dispatchShowPopup', { type: 'save', status: 0});
	                // }
	                Store.isPrjSaved=true;

	            }else if(result && $(result).find('resultData').attr('state') === 'fail'){

	                if($(result).find('code').text()==="201"){
	                    obj.$dispatch('dispatchShowPopup', { type: 'save', status: -3});
	                    Store.vm.$broadcast('notifyCloseWindow');
	                }else if($(result).find('code').text()==="202"){
	                    obj.$dispatch('dispatchShowPopup', { type: 'save', status: -4});
	                    Store.vm.$broadcast('notifyCloseWindow');
	                }else if($(result).find('code').text()==="205"){
	                    obj.$dispatch('dispatchShowPopup', { type: 'login', status: 0});
	                }else{
	                    obj.$dispatch('dispatchShowPopup', { type: 'save', status: -1});
	                }
	            }else {
	                // been.showMsg('Save failed.', 'fail', 'Message',null,null,'ok');
	                obj.$dispatch('dispatchShowPopup', { type: 'save', status: -1});
	            };
	        });
	    },
	    getMainProject: function(obj, projectId,encImageId,shouldApplyImages){
	        var url = Store.domains.baseUrl + '/clientH5/project/imageInfo';
	        $.ajax({
	            url: url,
	            type: 'get',
	            dataType: 'json',
	            data: { projectId:projectId,autoRandomNum:__webpack_require__(7).getRandomNum() }
	        }).done(function(result) {
	            if (result && result.errorCode === '1') {
	                var sJson = '', sXml = '', imgId = '';

	                try {
	                    sJson = JSON.parse(result.data);
	                } catch(e) {
	                    sXml = __webpack_require__(20).stringToXml(result.data);
	                }

	                if(sXml) {
	                    var imgCount = $(sXml).find('images').find('image').length;
	                    Store.imageList = [];
	                    if (imgCount > 0) {
	                        for (var i = 0; i < imgCount; i++) {
	                            var id=$(sXml).find('images').find('image').eq(i).attr('id');
	                            var encId=$(sXml).find('images').find('image').eq(i).attr('encImgId') || '';
	                            Store.imageList.push({
	                                id: id,
	                                guid: $(sXml).find('images').find('image').eq(i).attr('guid') || '',
	                                // url: asFn.getImageUrl($(sXml).find('images').find('image').eq(i).attr('id')),
	                                encImgId: encId,
	                                url: Store.domains.uploadUrl + '/upload/UploadServer/PicRender?qaulityLevel=0&puid=' + $(sXml).find('images').find('image').eq(i).attr('encImgId') + '&rendersize=fit',
	                                name: decodeURIComponent($(sXml).find('images').find('image').eq(i).attr('name')) || '',
	                                width: parseFloat($(sXml).find('images').find('image').eq(i).attr('width')) || 0,
	                                height: parseFloat($(sXml).find('images').find('image').eq(i).attr('height')) || 0,
	                                shotTime: $(sXml).find('images').find('image').eq(i).attr('shotTime') || '',
	                                usedCount: 0
	                            });
	                            if(encImageId&&encodeURIComponent(encImageId)===encId){
	                                imgId=id;
	                            }

	                        };
	                    };
	                } else if(sJson) {
	                    var imgCount = sJson.length;
	                    Store.imageList = [];
	                    if (imgCount > 0) {
	                        for (var i = 0; i < imgCount; i++) {
	                            Store.imageList.push({
	                                id: sJson[i].id || '',
	                                guid: sJson[i].guid || '',
	                                // url: asFn.getImageUrl($(sXml).find('images').find('image').eq(i).attr('id')),
	                                encImgId: sJson[i].encImgId || '',
	                                url: Store.domains.uploadUrl + '/upload/UploadServer/PicRender?qaulityLevel=0&puid=' + sJson[i].encImgId + '&rendersize=fit',
	                                name: decodeURIComponent(sJson[i].name) || '',
	                                width: parseFloat(sJson[i].width) || 0,
	                                height: parseFloat(sJson[i].height) || 0,
	                                shotTime: sJson[i].shotTime || '',
	                                usedCount: 0
	                            });
	                            if(encImageId&&encodeURIComponent(encImageId)===sJson[i].encImgId){
	                                imgId=sJson[i].id;
	                            }

	                        };
	                    };
	                }

	                if(imgId){
	                    obj.$dispatch('dispatchSingleImageUploadComplete',imgId);
	                } else if(shouldApplyImages) {
	                    Store.vm.$broadcast("notifyAddMyPhotosIntoPages", Store.imageList);
	                }

	            }else{

	            }
	        });
	    },
	    getMyPhotoImages: function(obj, userId, shouldApplyImages){
	        var url = Store.domains.baseUrl + '/web-api/customer/getMyPhotosInfo';
	        $.ajax({
	            url: url,
	            type: 'post',
	            dataType: 'json',
	            data: { customerId:userId,autoRandomNum:__webpack_require__(7).getRandomNum() }
	        }).done(function(result){
	            if (result && result.errorCode === '1' && result.data) {
	                var imageList = JSON.parse(result.data);
	                var formedImageList = [];

	                // 如果有最大图片限制
	                if(Store.maxPageNum && imageList.length > Store.maxPageNum) {
	                    imageList.length = Store.maxPageNum;
	                }

	                imageList.forEach(function(img) {
	                    var newItem = {
	                        id: String(img.id),
	                        guid: img.guid,
	                        encImgId: img.encImgId,
	                        url: Store.domains.uploadUrl + '/upload/UploadServer/PicRender?qaulityLevel=0&puid=' + img.encImgId + '&rendersize=fit',
	                        name: img.name,
	                        width: img.width,
	                        height: img.height,
	                        shotTime: img.shotTime,
	                        usedCount: 0
	                    };
	                    formedImageList.push(newItem);
	                    Store.imageList.push(newItem);
	                });
	                if(shouldApplyImages) {
	                    Store.vm.$broadcast("notifyAddMyPhotosIntoPages", formedImageList);
	                }
	            }
	        });
	    },

	    getTshirtDisableOptions: function() {
	        var url = Store.domains.baseUrl + '/clientH5/getTshirtOffLine';
	        var userId = Store.userSettings.userId;

	        $.ajax({
	            url: url,
	            type: 'get',
	            dataType: 'json',
	            data: {
	                customerId: userId,
	                autoRandomNum: __webpack_require__(7).getRandomNum()
	            }
	        }).done(function(result) {
	            if(result) {
	                var disableArray = result.disable;
	                var disableOptions = {};
	                var allMeasures = ['S', 'M', 'L', 'XL', 'XXL'];

	                // 整理disableArray数据，组装成disableOptions键值对数组
	                disableArray.forEach(function(disableItem) {
	                    var color = disableItem.color;
	                    var value = disableItem.measure;

	                    // 如果键值对选项不存在，就新建一个
	                    if(!disableOptions[color]) {
	                        disableOptions[color] = new Object();
	                        disableOptions[color].options = new Array();
	                        disableOptions[color].isAllDisabled = false;
	                    }

	                    disableOptions[color].options.push(value);

	                    // 如果disableOptions的数量大于等于所有尺寸的数量，就附加该颜色全部禁止的标记
	                    if(disableOptions[color].options.length >= allMeasures.length) {
	                        disableOptions[color].isAllDisabled = true;
	                    }
	                });

	                // 存储禁用尺寸，并且初始化第一件Tshirt，尺寸改为非禁用尺寸
	                Store.disableOptions = disableOptions;
	            }
	            Store.watches.isDisableOptionLoaded = true;
	        });
	    },
	    getLocalTshirtDisableOptions: function() {
	        var url = './assets/data/disableTshirt.json';
	        var userId = Store.userSettings.userId;

	        $.ajax({
	            url: url,
	            type: 'get',
	            dataType: 'json',
	            data: {
	                customerId: userId,
	                autoRandomNum: __webpack_require__(7).getRandomNum()
	            }
	        }).done(function(result) {
	            if(result) {
	                var disableArray = result.disable;
	                var disableOptions = {};
	                var allMeasures = ['S', 'M', 'L', 'XL', 'XXL'];

	                // 整理disableArray数据，组装成disableOptions键值对数组
	                disableArray.forEach(function(disableItem) {
	                    var color = disableItem.color;
	                    var value = disableItem.measure;

	                    // 如果键值对选项不存在，就新建一个
	                    if(!disableOptions[color]) {
	                        disableOptions[color] = new Object();
	                        disableOptions[color].options = new Array();
	                        disableOptions[color].isAllDisabled = false;
	                    }

	                    disableOptions[color].options.push(value);

	                    // 如果disableOptions的数量大于等于所有尺寸的数量，就附加该颜色全部禁止的标记
	                    if(disableOptions[color].options.length >= allMeasures.length) {
	                        disableOptions[color].isAllDisabled = true;
	                    }
	                });

	                // 存储禁用尺寸，并且初始化第一件Tshirt，尺寸改为非禁用尺寸
	                Store.disableOptions = disableOptions;
	                Store.watches.isDisableOptionLoaded = true;
	            }
	        });
	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(1)))

/***/ },
/* 10 */
/***/ function(module, exports) {

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


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {module.exports = function(params){
	  var i=0,len=0;
	  // console.log("traceParams",params);
	  var prj = Store.projectSettings[Store.currentSelectProjectIndex];
	  var product = prj && prj.product;
	  if(typeof(product) == "undefined"){
	    switch(Store.projectType){
	      case 'PR':
	        product = 'print';
	      break;
	      case 'flushMountPrint':
	        product = 'flushMountPrint';
	      break;
	      default:
	        product = Store.projectType;
	      break;
	    }
	  }
	  var data = "H5_" + product+ "," + Store.projectId + ",";
	  for(var index in params){
	    len++;
	  }
	  for(var index in params){
	    if(index==='ev'){
	      data += params[index];
	    }else{
	      data += index + "=" + params[index];
	    }
	    if(i++<len-1){
	      data += ",";
	    }
	  }
	  var tracker=__webpack_require__(12);
	  tracker.go($.trim(data,","));
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	    // commonjs
	    if (true) {
	        module.exports = factory();
	    } else if (typeof define === 'function' && define.amd) {
	        // amd
	        define(factory);
	    } else {
	        // 直接使用
	        global.tracker = global.tracker || factory();
	    }
	}(this, function () {
	    'use strict';

	    /**
	     * 获取cookie里指定key的值.
	     * @param key 键的名称
	     */
	    function getCookieDate(key) {
	        var value = null;
	        var aCookie = document.cookie.split(";");
	        if(aCookie){
	            for (var i = 0; i < aCookie.length; i++) {
	                var aCrumb = aCookie[i].split("=");
	                if (aCrumb.length>1 && key == aCrumb[0]) {
	                    value = unescape(aCrumb[1]);
	                    break;
	                }
	            }
	        }
	        
	        return value;
	    }

	    /**
	     * 上传日志到日志服务器.
	     * @param data
	     * @param session
	     * @param uid
	     */
	    function goTracker(data, session, uid, completed, failed) {
	        var hostName = window.location.hostname + "";
	        
	        var session = session || getCookieDate(' JSESSIONID') || getCookieDate('JSESSIONID');
	        var asUid = uid || getCookieDate(' AS_UID') || getCookieDate('AS_UID');
	        data = session + "," + asUid + "," + new Date().getTime() + "," + data;

	        var logUrl = "http://venus.zno.com/b.htm"+"?"+data;
	        if (hostName != "www.zno.com") {
	            logUrl = "http://log.zno.com.t/b.htm"+"?"+data;
	        }
	        // 调用ajax, 上传日志信息.
	        get(logUrl, completed, failed);
	    }

	    /**
	     * 通过XMLHttpRequest对象, 发送ajax请求.
	     * @param url request的请求地址
	     * @param data 要发送的对象
	     * @param completed 发送成功后的回调
	     * @param failed 发送失败时的回调.
	     */
	    function get(url, completed, failed) {
	        var request = new XMLHttpRequest();

	        // 请求完成时的回调.
	        request.onload = function (ev) {
	            if (completed && typeof (completed) === 'function') {
	                completed(ev || window.event);
	            }
	        };

	        // 请求失败时的回调.
	        request.onerror = function (ev) {
	            if (failed && typeof (failed) === 'function') {
	                failed(ev || window.event);
	            }
	        };

	        request.open('GET', url);
	        request.send();
	    }

	    return {
	        go: goTracker
	    };
	}));

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  AddText: "AddText",                     //  点击添加 文本
	  LoadComplete: "LoadComplete",           //  项目加载 完成
	  CompleteTextEdit: "CompleteTextEdit",   //  文本编辑 文成点击  done 按钮
	  ClickToForm: "ClickToForm",             //  点击气泡 进入文本编辑区

	  ClickChangeAll: "ClickChangeAll",            //  print 产品 点击 修改所有的 统一参数
	  ClickEditPrint: "ClickEditPrint",            //  print 产品 点击 编辑单张 print
	  ClickDeletePrint: "ClickDeletePrint",        //  print 产品 点击 删除该张 print
	  ClickDuplicatePrint: "ClickDuplicatePrint",  //  print 产品 点击 复制该张 print
	  ClickReplacePrint: "ClickReplacePrint",      //  print 产品 点击 替换该张 print

	  ChangeSize: "ChangeSize",               // option 选项中 修改 项目尺寸
	  ChangePaper: "ChangePaper",             // option 选项中 修改 项目纸张
	  ChangeTrimStyle: "ChangeTrimStyle",     // option 选项中 修改 圆角 （cards）
	  ChangeiPadmodel: "ChangeiPadmodel",     // option 选项中 修改 padCase 类型

	  ClickSave: 'ClickSave',                 // 点击 save
	  ClickOrder: 'ClickOrder',               // 点击 order
	  ClickPreview: "ClickPreview",           // 点击 preview
	  ClickCropImage: "ClickCropImage",       // 点击 裁切图片 按钮
	  ClickRotateImage: "ClickRotateImage",   // 点击 旋转图片 按钮
	  ClickRemoveImage: "ClickRemoveImage",   // 点击 移除图片 按钮
	  ClickMoveTextToCenter: "ClickMoveTextToCenter",     // 点击将文本居中的按钮（Tshirt）
	  ClickMoveImageToCenter: "ClickMoveImageToCenter",   // 点击将图片居中的按钮（Tshirt）

	  ClickFrontCover: "ClickFrontCover",                 // 点击切换到封面
	  ClickBackCover: "ClickBackCover",                   // 点击切换到背面
	  ClickPreviousPage: "ClickPreviousPage",             // 点击切换上一页
	  ClickNextPage: "ClickNextPage",                     // 点击切换下一页

	  ClickOptionTab: "ClickOptionTab",
	  ClickImagesTab: "ClickImagesTab",
	  ClickLayoutTab: "ClickLayoutTab",
	  ClickDecorationTab: "ClickDecorationTab",
	  ClickFormTab: "ClickFormTab",

	  SwitchSide: "SwitchSide",
	  SwitchSideInPreview: "SwitchSideInPreview",
	  SwitchOrientation: "SwitchOrientation",
	  ImageLoadFail: "ImageLoadFail",
	  DragPhotoToPage: "DragPhotoToPage",
	  ChangeSort: "ChangeSort",
	  ChangeHideUsed: "ChangeHideUsed",
	  CheckPrice: "CheckPrice",
	  SaveComplete: "SaveComplete",
	  SwitchBlocks: "SwitchBlocks",
	  SwitchBlocksInPreview: "SwitchBlocksInPreview",
	  RemoveBlock: "RemoveBlock",
	  SwitchBlocksByNav: "SwitchBlocksByNav",
	  AddBlock: "AddBlock",
	  ClickAddPhotos: "ClickAddPhotos",                  // LMC点击Add Photos
	  ClickDeleteCanvas: "ClickDeleteCanvas",
	  SwitchSize: "SwitchSize",

	  AddPhotos: "AddPhotos",                            // 点击 AddPhotos 上传图片的按钮
	  ClickCloudUploadImage: "ClickCloudUploadImage",    // 点击 云朵上传 图片的按钮
	  FinishPhotoSelect: "FinishPhotoSelect",            // 用户 选择图片完成点击开始上传按钮
	  AddMorePhotos: "AddMorePhotos",                    // 用户上传过程中 点击 addMore 添加更多图片的按钮
	  StartUpload: "StartUpload",                        // 代码开始执行上传图片
	  UploadComplete: "UploadComplete",                  // 图片上传完成
	  CloseMonitor: "CloseMonitor",                      // 关闭上传图片的窗口
	  CancelSingleFile: "CancelSingleFile",              // 单张图片上传过程中点击取消
	  CancelAllFilesClicked: "CancelAllFilesClicked",    // 多图上传过程中点击了 cancel all 按钮
	  CancelAllFilesByXClicked: "CancelAllFilesByXClicked",    // 多图上传过程中点击了 上传图片右上角的关闭按钮并在弹出的确认框中点击确认取消当前图片上传。
	  CheckIncompleteFields: "CheckIncompleteFields",    // 校验发现未填完整text form信息提示
	  CheckIncompleteFieldsContinue: "CheckIncompleteFieldsContinue",   // 未填完整text form数据提示后点击continue
	  CheckIncompleteFieldsCancel: "CheckIncompleteFieldsCancel",  // 未填完整text form数据提示后点击Cancel
	  Upgrade8x10:"Upgrade8*10",
	  Upgrade11x14:"Upgrade11*14"
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	
	// model -- Prj
	module.exports = function() {
		return {
			projectId: '',
			userId: '',
			albumId: '',
			token: '',
			uploadTimestamp: '',
			title: 'test-tshirt',
			projectXml:'',
			ordered:'',
			tplGuid : '',
			price:0
		}
		
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {var DrawManage = __webpack_require__(16);
	var Scale = __webpack_require__(17);
	module.exports = {
		convertScreenshotToBase64 : function(){
			
			if(Store.isProjectUpgrade) {
				return Store.beforeUpgradeScreenshot;
			} else {
				var screenshot = document.getElementById("real-screenshot");
				if(screenshot.width/Store.screenshotSize.width <=1 || screenshot.height/Store.screenshotSize.height <=1){
					return DrawManage.resizeImage("real-screenshot",Store.screenshotSize.width,Store.screenshotSize.height);
				}else{
					return Scale.scale({width:Store.screenshotSize.width,height:Store.screenshotSize.height},screenshot,'jpeg-src');
				}
			}
			// return DrawManage.canvasToBase64("real-screenshot");
		}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
		drawImage('canvas', 'a.jpg', 0, 0,loaded,500,500);画图片

		function loaded() {
	        drawLine('canvas', 'red', 0, 0, 200, 200, 20);画线
	        drawText('canvas', 'woeqtwqoe', 0, 0, "red", "50px", "Georgia");画文字
	        drawRect('canvas', 'orange', 0, 0, 200, 200, true, 2);画矩形
	        drawCircular('canvas', 'gray', 100, 100, 100, true, 5);画圆形
			drawDashLine('canvas', 'black', 0, 0, 200, 200, 1, 3);画虚线
	    }
	*/

	module.exports = {
		drawImage:function(canvas_id,url,x,y,loadedImageFunction,width,height,sx,sy,sw,sh){
			var c = document.getElementById(canvas_id);
	    	var cxt = c.getContext("2d");
			var img = new Image();
	    	img.src = url;
	    	img.onload = function(event) {
	    		if(width&&height){
	                if(sx){
	                    cxt.drawImage(img,sx,sy,sw,sh, x, y, width, height);
	                }else{
	                    cxt.drawImage(img, x, y, width, height);
	                }
	    		}else{
	    			cxt.drawImage(img, x, y);
	    		}
	    		if(loadedImageFunction){
	            	loadedImageFunction();
	            }
	    	}
	        img.onerror= function(){
	            __webpack_require__(11)({ev: __webpack_require__(13).ImageLoadFail,imageUrl: url});
	        };
		},
	    createRotateElementCanvas: function(oriSourceCanvas, rotate) {
	        // 声明两个中间canvas，一个是存储根据旋转放大后尺寸的canvas(未旋转)，一个是存储旋转后的最终canvas，防止在同一canvas上操作造成叠影
	        var sourceScaleCanvas = document.createElement("canvas"),
	            sourceScaleCtx = sourceScaleCanvas.getContext("2d");
	        var sourceRotateCanvas = document.createElement("canvas"),
	            sourceRotateCtx = sourceRotateCanvas.getContext("2d");

	        // 获取旋转后的放大尺寸
	        var sCanvasSize = this.getCanvasRotateSize(oriSourceCanvas, rotate);

	        // 放大canvas和旋转canvas的尺寸设置，如果旋转后的尺寸要比原来的小，则使用原来的尺寸
	        sourceScaleCanvas.width = sCanvasSize.width < oriSourceCanvas.width ? oriSourceCanvas.width : sCanvasSize.width;
	        sourceScaleCanvas.height = sCanvasSize.height < oriSourceCanvas.height ? oriSourceCanvas.height : sCanvasSize.height;
	        sourceRotateCanvas.width = sCanvasSize.width < oriSourceCanvas.width ? oriSourceCanvas.width : sCanvasSize.width;
	        sourceRotateCanvas.height = sCanvasSize.height < oriSourceCanvas.height ? oriSourceCanvas.height : sCanvasSize.height;

	        // 获取canvas尺寸的中心点，即中点
	        var xpos = sCanvasSize.width > oriSourceCanvas.width ? sCanvasSize.width / 2 : oriSourceCanvas.width / 2;
	        var ypos = sCanvasSize.height > oriSourceCanvas.height ? sCanvasSize.height / 2 : oriSourceCanvas.height / 2;
	        // 如果放大canvas的顶点如果小于0，则表示尺寸比原来小，保持为0
	        var top = xpos - oriSourceCanvas.width / 2 < 0 ? 0 : xpos - oriSourceCanvas.width / 2;
	        var left = ypos - oriSourceCanvas.height / 2 < 0 ? 0 : ypos - oriSourceCanvas.height / 2;

	        // 清空canvas，为了修复bug ASH-5178
	        sourceScaleCtx.clearRect(0, 0, sourceScaleCanvas.width, sourceScaleCanvas.height);
	        sourceRotateCtx.clearRect(0, 0, sourceRotateCanvas.width, sourceRotateCanvas.height);

	        // 原图片做中心旋转
	        sourceScaleCtx.drawImage(oriSourceCanvas, top, left);
	        sourceRotateCtx.translate(xpos, ypos);
	        sourceRotateCtx.rotate(rotate * Math.PI / 180);
	        sourceRotateCtx.translate(-xpos, -ypos);
	        sourceRotateCtx.drawImage(sourceScaleCanvas, 0, 0);

	        // 返回中心旋转canvas
	        return sourceRotateCanvas;
	    },
	    drawRotateCanvas: function(options){
	        // 解options
	        var tarCanvasId = options.tarCanvasId,
	            sourceCanvasId = options.sourceCanvasId,
	            x = options.x,
	            y = options.y,
	            width = options.width,
	            height = options.height,
	            sx = options.sx,
	            sy = options.sy,
	            sw = options.sw,
	            sh = options.sh,
	            rotate = parseInt(options.rotate) || 0;

	        var tarCanvas = document.getElementById(tarCanvasId),
	            tarCtx = tarCanvas.getContext("2d"),
	            sourceCanvas = document.getElementById(sourceCanvasId);

	        if(sourceCanvas){
	            var sourceCtx = sourceCanvas.getContext("2d");
	            var rotateCanvas = this.createRotateElementCanvas(sourceCanvas, rotate);
	            var sx = sx || 0,
	                sy = sy || 0,
	                sw = sw || rotateCanvas.width,
	                sh = sh || rotateCanvas.height,
	                x = x || 0,
	                y = y || 0,
	                w = width || rotateCanvas.width,
	                h = height || rotateCanvas.height;

	            if(sw > 0 && sh > 0) {
	                x = x - (rotateCanvas.width - sourceCanvas.width) / 2;
	                y = y - (rotateCanvas.height - sourceCanvas.height) / 2;
	                tarCtx.drawImage(rotateCanvas,sx,sy,sw,sh,x,y,w,h);
	            };
	        }
	    },
	    drawCanvas : function(tarCanvasId,sourceCanvasId,x,y,width,height,sx,sy,sw,sh){
	        var tarCanvas = document.getElementById(tarCanvasId),
	            tarCtx = tarCanvas.getContext("2d"),
	            sourceCanvas = document.getElementById(sourceCanvasId);

	        if(sourceCanvas){
	            var sourceCtx = sourceCanvas.getContext("2d"),
	                sx = sx || 0,
	                sy = sy || 0,
	                sw = sw || sourceCanvas.width,
	                sh = sh || sourceCanvas.height,
	                x = x || 0,
	                y = y || 0,
	                w = width || sourceCanvas.width,
	                h = height || sourceCanvas.height;

	            if(sw > 0 && sh > 0) {
	                tarCtx.drawImage(sourceCanvas,sx,sy,sw,sh,x,y,w,h);
	            };
	        }
	    },
		drawText:function(canvas_id,text,x,y,color,fontSize,fontFamily){
			var c = document.getElementById(canvas_id);
	    	var cxt = c.getContext("2d");
	    	cxt.textBaseline="top";
	    	var oldColor=cxt.fillStyle;
	    	cxt.fillStyle=color;
	    	cxt.font=fontSize+" "+fontFamily;
			cxt.fillText(text,x,y);
	    	cxt.fillStyle=oldColor;
		},
		drawLine:function(canvas_id,color,fromX,fromY,toX,toY,lineWidth){
			var c = document.getElementById(canvas_id);
	    	var cxt = c.getContext("2d");
	    	var oldColor=cxt.strokeStyle;
	    	cxt.strokeStyle=color;
	    	var oldLineWidth=cxt.lineWidth;
	    	if(lineWidth){
	    		cxt.lineWidth=lineWidth;
	    	}else{
	    		cxt.lineWidth=1;
	    	}

			cxt.beginPath();
	    	cxt.moveTo(fromX, fromY);
	        cxt.lineTo(toX, toY);
	        cxt.closePath();
	        cxt.stroke();
	        cxt.strokeStyle=oldColor;
	        cxt.lineWidth=oldLineWidth;
		},
		drawDashedLine:function(canvas_id, color, fromX, fromY, toX, toY, lineWidth, dashLen){
			var c = document.getElementById(canvas_id);
	        var cxt = c.getContext("2d");
	        var oldColor = cxt.strokeStyle;
	        cxt.strokeStyle = color;
	        var oldLineWidth = cxt.lineWidth;
	        if (lineWidth) {
	            cxt.lineWidth = lineWidth;
	        } else {
	            cxt.lineWidth = 1;
	        }
	        if(!dashLen){
	        	dashLen=5;
	        }
	        cxt.beginPath();
	        var beveling = this.getBeveling(toX-fromX,toY-fromY);
		    var num = Math.floor(beveling/dashLen);

	        var x1,y1,x2,y2;
			for(var i = 0 ; i < num; i++)
			{
	            x1=fromX+(toX-fromX)/num*i;
	            y1=fromY+(toY-fromY)/num*i;
	            x2=fromX+(toX-fromX)/num*(i+1);
	            y2=fromY+(toY-fromY)/num*(i+1);
				cxt[i%2 == 0 ? 'moveTo' : 'lineTo'](fromX+(toX-fromX)/num*i,fromY+(toY-fromY)/num*i);
			}
	        if(num%2 != 0){
	            cxt['lineTo'](x2,y2);
	        }

	        cxt.closePath();
	        cxt.stroke();
	        cxt.strokeStyle = oldColor;
	        cxt.lineWidth = oldLineWidth;
		},
		getBeveling:function(x, y) {
	        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
	    },
		drawRect:function(canvas_id,color,x,y,width,height,isStroke,lineWidth){
			var c = document.getElementById(canvas_id);
	    	var cxt = c.getContext("2d");
	    	if(isStroke){

	    		var oldLineWidth=cxt.lineWidth;
		    	if(lineWidth){
		    		cxt.lineWidth=lineWidth;
		    	}else{
		    		cxt.lineWidth=1;
		    	}
	    		var oldColor=cxt.strokeStyle;
		    	cxt.strokeStyle=color;
				cxt.beginPath();
		    	cxt.moveTo(x, y);
		        cxt.strokeRect(x,y,width,height);
		        cxt.closePath();
		        cxt.stroke();
		        cxt.strokeStyle=oldColor;
		        cxt.lineWidth=oldLineWidth;
	    	}else{
	    		var oldColor=cxt.fillStyle;
		    	cxt.fillStyle=color;
				cxt.beginPath();
		    	cxt.moveTo(x, y);
		        cxt.fillRect(x,y,width,height);
		        cxt.closePath();
		        cxt.fillStyle=oldColor;
	    	}
		},
		drawCircular:function(canvas_id, color, x, y, width, isStroke, lineWidth){
			var c = document.getElementById(canvas_id);
	        var cxt = c.getContext("2d");
	        if (isStroke) {

	        	var oldLineWidth = cxt.lineWidth;
		        if (lineWidth) {
		            cxt.lineWidth = lineWidth;
		        } else {
		            cxt.lineWidth = 1;
		        }
		        var oldColor = cxt.strokeStyle;
		        cxt.strokeStyle = color;
		        cxt.moveTo(x, y);
		        cxt.beginPath();
		        cxt.arc(x, y, width,0,Math.PI*2);
		        cxt.closePath();
		        cxt.stroke();
		        cxt.strokeStyle = oldColor;
				cxt.lineWidth = oldLineWidth;
			}else{

				var oldColor = cxt.fillStyle;
	            cxt.fillStyle = color;

	            cxt.moveTo(x, y);
	            cxt.beginPath();
	            cxt.arc(x, y, width,0,Math.PI*2);
	            cxt.closePath();
	            cxt.fill();
	            cxt.fillStyle = oldColor;
	        }
		},

	    clear:function(canvas_id,x,y,w,h){
	        var c=document.getElementById(canvas_id),
	            ctx=c.getContext("2d"),
	            x = x || 0,
	            y = y || 0,
	            w = w || c.width,
	            h = h || c.height;
	        ctx.clearRect(x,y,w,h);
	    },
	    getImageData:function(canvas_id,x,y,w,h){
	        var c=document.getElementById(canvas_id),
	            ctx=c.getContext("2d")
	            x = x || 0,
	            y = y || 0,
	            w = w || c.width,
	            h = h || c.height;
	        return ctx.getImageData(x,y,w,h);
	    },
	    fillImageData:function(canvas_id,imgData,x,y,w,h){
	        var c=document.getElementById(canvas_id),
	            ctx=c.getContext("2d"),
	            w = w || c.width,
	            h = h || c.height,
	            x = x || 0,
	            y = y || 0;
	        ctx.putImageData(imgData,x,y,0,0,w,h);
	    },
	    createImageData : function(canvas_id,w,h){
	        var c=document.getElementById(canvas_id),
	            ctx=c.getContext("2d"),
	            w = w || c.width,
	            h = h || c.height;
	        return ctx.createImageData(w,h);
	    },
	    getClient : function(canvas_id){
	        var c = document.getElementById(canvas_id);
	        return {
	            width : c.width,
	            height : c.height,
	            context : c.getContext("2d")
	        }
	    },
	    imageDataVRevert : function(sourceData,newData){ //pixel vertical revert
	        for(var i=0,h=sourceData.height;i<h;i++){
	            for(j=0,w=sourceData.width;j<w;j++){
	                newData.data[i*w*4+j*4+0] = sourceData.data[(h-i)*w*4+j*4+0];
	                newData.data[i*w*4+j*4+1] = sourceData.data[(h-i)*w*4+j*4+1];
	                newData.data[i*w*4+j*4+2] = sourceData.data[(h-i)*w*4+j*4+2];
	                newData.data[i*w*4+j*4+3] = sourceData.data[(h-i)*w*4+j*4+3];
	            }
	        }
	        return newData;
	    },
	    imageDataHRevert : function(sourceData,newData){ //pixel horizontal revert
	        for(var i=0,h=sourceData.height;i<h;i++){
	            for(j=0,w=sourceData.width;j<w;j++){
	                newData.data[i*w*4+j*4+0] = sourceData.data[i*w*4+(w-j)*4+0];
	                newData.data[i*w*4+j*4+1] = sourceData.data[i*w*4+(w-j)*4+1];
	                newData.data[i*w*4+j*4+2] = sourceData.data[i*w*4+(w-j)*4+2];
	                newData.data[i*w*4+j*4+3] = sourceData.data[i*w*4+(w-j)*4+3];
	            }
	        }
	        return newData;
	    },
	    canvasToBase64 : function(canvas_id){
	        var canvas = document.getElementById(canvas_id);
	        return canvas.toDataURL("image/jpeg");
	    },
	    wrapBorder : function(canvas_id,direction,length){ //pixel beveling
	        var canvas = document.getElementById(canvas_id),
	            tmpCanvas = document.createElement("canvas"),
	            tctx = tmpCanvas.getContext("2d"),
	            W = canvas.width,
	            H = canvas.height,
	            length = length || 0.5, // <=0.5
	            direction = direction || 'right',
	            params = {'top':[1,0,-length,length,0,H/2],'right':[-length,length,0,1,W/2,-W/2]};
	        console.log(W,H)
	        if(W>H){
	            tmpCanvas.width = W + H / 2;
	            tmpCanvas.height = H;
	        }else{
	            tmpCanvas.width = W;
	            tmpCanvas.height = H + W / 2;
	        }
	        CanvasRenderingContext2D.prototype.transform.apply(tctx,params[direction]);
	        if(W>H){
	            tctx.drawImage(canvas,H/2,0);
	        }else{
	            tctx.drawImage(canvas,0,W/2);
	        }
	        return tctx.getImageData(0,0,tmpCanvas.width,tmpCanvas.height);
	    },
	    setSize : function(canvas_id,setting){
	        var canvas = document.getElementById(canvas_id);
	        setting.width && (canvas.width=setting.width);
	        setting.height && (canvas.height=setting.height);
	    },
	    fillEmptyDataWithColor : function(imgData,rgb,width,height){
	        for(var i=0;i<imgData.width*imgData.height;i++){
	            if(imgData.data[4*i+3]===0){
	                imgData.data[4*i] = rgb.r;
	                imgData.data[4*i+1] = rgb.g;
	                imgData.data[4*i+2] = rgb.b;
	                imgData.data[4*i+3] = 255;
	            }
	        }
	        return imgData;
	    },
	    replaceColor : function(imageData,x,y,sourceColor,w,h,replaceColor){ //replace or delete color in area
	        var x = ~~(x || 0),
	            y = ~~(y || 0),
	            w = x + w || imageData.width,
	            h = y + h || imageData.height;
	        if(x<0 || y<0 || w>imageData.width || h>imageData.height){
	            throw new Error("error params!");
	        }
	        for(var j=y;j<h;j++){
	            for(var i=x;i<w;i++){
	                var index = j * imageData.width + i,
	                    r = imageData.data[4*index],
	                    g = imageData.data[4*index+1],
	                    b = imageData.data[4*index+2];
	                if(r==sourceColor.r && g==sourceColor.g && b==sourceColor.b){
	                    if(replaceColor){
	                        imageData.data[4*index] = replaceColor.r;
	                        imageData.data[4*index+1] = replaceColor.g;
	                        imageData.data[4*index+2] = replaceColor.b;
	                        imageData.data[4*index+3] = 255;
	                    }else{
	                        imageData.data[4*index+3] = 0;
	                    }
	                }
	            }
	        }
	        return imageData;
	    },
	    resizeImage : function(canvasId,w,h){
	        var canvas = document.getElementById(canvasId),
	            ctx = canvas.getContext("2d"),
	            tmpCanvas = document.createElement("canvas"),
	            tctx = tmpCanvas.getContext("2d"),
	            w = w || canvas.width,
	            h = h || canvas.height;
	        if(w !== canvas.width || h !== canvas.height){
	            var ratio;
	            if(w>h){
	                ratio = canvas.width / w;
	                h = canvas.height / ratio;
	            }else if(w===h){
	                if(canvas.width>canvas.height){
	                    ratio = canvas.width / w;
	                    h = canvas.height / ratio;
	                }else{
	                    ratio = canvas.height / h;
	                    w = canvas.width / ratio;
	                }
	            }else{
	                ratio = canvas.height / h;
	                w = canvas.width / ratio;
	            }
	        }
	        tmpCanvas.width = w;
	        tmpCanvas.height = h;
	        tctx.drawImage(canvas,0,0,w,h);
	        return tmpCanvas.toDataURL("image/png");
	    },
	    getCanvasRotateSize: function(canvas, rotateDeg) {
	        var points = this.getCanvasRotatePoint(canvas, rotateDeg);
	        var maxX = 0, maxY = 0;

	        points.forEach(function(point) {
	            maxX = point.x > maxX ? point.x : maxX;
	            maxY = point.y > maxY ? point.y : maxY;
	        });

	        return {
	            width: maxX * 2,
	            height: maxY * 2
	        }
	    },
	    getCanvasRotatePoint: function(canvas, rotateDeg) {
	        var canvasRadius = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height) / 2;
	        var posX = 1, posY = 1, offsetDeg = 0, points = [];

	        for(var i = 0; i < 4; i++) {
	            switch (i) {
	                case 0: posX = -1; posY = 1; offsetDeg = 360; break;
	                case 1: posX = 1; posY = 1; offsetDeg = 0; break;
	                case 2: posX = 1; posY = -1; offsetDeg = 180; break;
	                case 3: posX = -1; posY = -1; offsetDeg = 180; break;
	            }

	            var oriPoint = {
	                x: canvas.width / 2 * posX,
	                y: canvas.height / 2 * posY
	            }
	            var oriPoint2CenterDeg = Math.atan(oriPoint.y / oriPoint.x) / Math.PI * 180 + offsetDeg;
	            var point2CenterRadian = (oriPoint2CenterDeg + rotateDeg) / 180 * Math.PI;

	            points.push({
	                x: Math.cos(point2CenterRadian) * canvasRadius,
	                y: Math.sin(point2CenterRadian) * canvasRadius
	            })
	        }

	        return points;
	    },
	    // 这是给 flushMountPrint 增加的 画圆角和 画额外阴影的方法。通用性不一定好。
	    drawBorderRadius: function(canvasId,radius,fillColor){
	        var canvas = document.getElementById(canvasId),
	            ctx = canvas.getContext("2d"),
	            width = canvas.width || 0,
	            height = canvas.height || 0;
	            // 左上圆角
	            ctx.fillStyle= fillColor || "#fff";
	            ctx.beginPath();
	            ctx.moveTo(0,0);           // 创建开始点
	            ctx.lineTo(radius,0);          // 创建水平线
	            ctx.arcTo(0,0,0,radius,radius); // 创建弧
	            ctx.lineTo(0,0);         // 创建垂直线
	            ctx.fill();
	            ctx.closePath();
	            // 右上圆角
	            // ctx.fillStyle= "red";
	            ctx.beginPath();
	            ctx.moveTo(width,0);           // 创建开始点
	            ctx.lineTo(width-radius,0);          // 创建水平线
	            ctx.arcTo(width,0,width,radius,radius); // 创建弧
	            ctx.lineTo(width,0);         // 创建垂直线
	            ctx.fill();
	            ctx.closePath();
	            // 左下圆角
	            ctx.beginPath();
	            ctx.moveTo(0,height);           // 创建开始点
	            ctx.lineTo(0,height-radius);          // 创建水平线
	            ctx.arcTo(0,height,radius,height,radius); // 创建弧
	            ctx.lineTo(0,height);         // 创建垂直线
	            ctx.fill();
	            ctx.closePath();
	            // 右下圆角
	            ctx.fillStyle="black";
	            ctx.beginPath();
	            ctx.moveTo(width,height);           // 创建开始点
	            ctx.lineTo(width-radius,height);          // 创建水平线
	            ctx.arcTo(width,height,width,height-radius,radius); // 创建弧
	            ctx.lineTo(width,height);         // 创建垂直线
	            ctx.fill();
	            ctx.closePath();

	            ctx.fillStyle="rgba(0,0,0,0.6)";
	            ctx.beginPath();
	            ctx.moveTo(width-radius,0);
	            ctx.arcTo(width,0,width,radius,radius);
	            ctx.lineTo(width,radius/3);
	            ctx.lineTo(width-radius,0);
	            ctx.fill();
	            ctx.closePath();

	    },
	    resizeImageWithShadow: function(canvasId,w,h,radiu){
	        var canvas = document.getElementById(canvasId),
	            ctx = canvas.getContext("2d"),
	            tmpCanvas = document.createElement("canvas"),
	            tctx = tmpCanvas.getContext("2d"),
	            w = canvas.width,
	            h = canvas.height;

	        var tmpCanvasWidth = w + 20;
	        var tmpCanvasHeight = h + 20;
	        // radiu = radiu / ratio;
	        tmpCanvas.width = tmpCanvasWidth;
	        tmpCanvas.height = tmpCanvasHeight;
	        tctx.fillStyle = 'white';
	        tctx.fillRect(0,0,tmpCanvasWidth,tmpCanvasHeight);
	        tctx.shadowBlur=1;
	        tctx.shadowOffsetX=3;
	        tctx.shadowOffsetY=2;
	        tctx.fillStyle="black";
	        tctx.shadowColor="rgba(0,0,0,0.8)";
	       // tctx.fillStyle="rgba(0,0,0,0.8)";
	        tctx.beginPath();
	        tctx.moveTo(10+radiu,tmpCanvasHeight-10);
	        tctx.arcTo(10,tmpCanvasHeight-10,10,tmpCanvasHeight-10-radiu,radiu);
	        tctx.lineTo(10+radiu,10);
	        tctx.arcTo(tmpCanvasWidth-10,10,tmpCanvasWidth-10,10+radiu/2,radiu);
	        tctx.lineTo(tmpCanvasWidth-10,tmpCanvasHeight-10-radiu);
	        tctx.arcTo(tmpCanvasWidth-10,tmpCanvasHeight-10,tmpCanvasWidth-10-radiu,tmpCanvasHeight-10,radiu);
	        tctx.lineTo(10+radiu/1.5,tmpCanvasHeight-10);
	        tctx.fill();
	        tctx.closePath();
	        tctx.shadowBlur=0;
	        tctx.shadowColor="transparents";
	        tctx.shadowOffsetX=0;
	        tctx.shadowOffsetY=0;
	        tctx.drawImage(canvas,10,10,w,h);

	        return tmpCanvas.toDataURL("image/png");
	    },
	    replaceColorOutOfArea: function(imageData,x,y,sourceColor,w,h,replaceColor) {
	        var x = ~~(x || 0),
	            y = ~~(y || 0),
	            w = x + w || imageData.width,
	            h = y + h || imageData.height,
	            canvasWidth = imageData.width,
	            canvasHeight = imageData.height;
	        if(x<0 || y<0 || w>imageData.width || h>imageData.height){
	            throw new Error("error params!");
	        }
	        for(var j=0;j<canvasHeight;j++){
	            for(var i=0;i<canvasWidth;i++){
	                var rowInArea = i > x && i < w;
	                var columnInArea = j > y && j < h ;
	                if(rowInArea && columnInArea)continue;
	                var index = j * imageData.width + i,
	                    r = imageData.data[4*index],
	                    g = imageData.data[4*index+1],
	                    b = imageData.data[4*index+2];
	                var isRMatched = r > sourceColor.r -10 && r < sourceColor.r + 10;
	                var isGMatched = g > sourceColor.g -10 && g < sourceColor.g + 10;
	                var isBMatched = b > sourceColor.b -10 && b < sourceColor.b + 10;
	                if(isRMatched && isGMatched && isBMatched){
	                    if(replaceColor){
	                        imageData.data[4*index] = replaceColor.r;
	                        imageData.data[4*index+1] = replaceColor.g;
	                        imageData.data[4*index+2] = replaceColor.b;
	                        imageData.data[4*index+3] = 255;
	                    }else{
	                        imageData.data[4*index+3] = 0;
	                    }
	                }
	            }
	        }
	        return imageData;
	    }
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	(function(){function t(t,a,i,r){function h(){G = "object" == typeof i ? i:a.src || r ? u:document.createElement("canvas"),G.width = s,G.height = f,J = G.getContext("2d")}function n(t){if(t){var e,a = J.getImageData(0,0,s,f),i = a.data;for(e = 0;it>e;e+= 4) i[e] = t[e] * rt | 0,i[e+1] = t[e+1] * rt | 0,i[e+2] = t[e+2] * rt | 0,i[e+3] = t[e+3] * rt | 0;return delete t,a}return J.getImageData(0,0,s,f)}function o(t,e,a,i,r){return.5 *(i - e+(2 * e - 5 * a+4 * i - r+(3 *(a - i)+r - e) * t) * t) * t+a}a ||(a = t.input,i = t.output,r = t.inputRemovable,t.scale &&(t = t.scale));var u,d;if(a.src) if(u = document.createElement("canvas"),null!= a.naturalWidth) u.width = a.naturalWidth,u.height = a.naturalHeight;else if(null!= a.runtimeStyle){var l = a.runtimeStyle,c = l.width,g = l.height;l.width = "auto",l.height = "auto",u.width = a.width,u.height = a.height,l.width = c,l.height = g}else{var c = a.width,g = a.height;a.removeAttribute &&(a.removeAttribute("width"),a.removeAttribute("height")),u.width = a.width,u.height = a.height,a.width = c,a.height = g}else u = a;d = u.getContext("2d"),a.src && d.drawImage(a,0,0);var s,f,rat,m = u.width,w = u.height,p = d.getImageData(0,0,m,w).data;if(!m ||!w) return!1;(a.src || r) && u.clearRect(0,0,m,w);if(m>w){rat = t.width / m;s = t.width;f = Math.ceil(w * rat)}else{rat = t.height / w;s = Math.ceil(m * rat);f = t.height}var v,b,y,x,D,I,A,j,R,k,C,E,F,L,S,U,W,H,X,Y,q,z,B,G,J,K,M,N,O,P,Q,T,V,Z,$,_ = s << 2,tt = m << 2,et = 0,at = 0,it = _ * f,rt = 255.99 / 255,ht = s / m,nt = f / w,ot = ht * nt;if(ht>1 || nt>1) for(h(),K = n(),M = K.data,x = 0;f>x;x++) for(b = x / nt,R = 0 | b,z = b - R,O = R * tt,N = 1>R ? O:O - tt,w - 2>R ?(P = O+tt,Q =(R+2) * tt) :P = Q = R>w - 2 ? O:O+tt,y = 0;s>y;y++,at+= 4) v = y / ht,j = 0 | v,B = v - j,V = j << 2,T = 1>j ? V:V - 4,m - 2>j ?(Z = V+4,$ = V+8) :Z = $ = j>m - 2 ? V:V+4,H = o(z,o(B,p[N+T],p[N+V],p[N+Z],p[N+$]),o(B,p[O+T],p[O+V],p[O+Z],p[O+$]),o(B,p[P+T],p[P+V],p[P+Z],p[P+$]),o(B,p[Q+T],p[Q+V],p[Q+Z],p[Q+$])) * rt | 0,++T,++V,++Z,++$,X = o(z,o(B,p[N+T],p[N+V],p[N+Z],p[N+$]),o(B,p[O+T],p[O+V],p[O+Z],p[O+$]),o(B,p[P+T],p[P+V],p[P+Z],p[P+$]),o(B,p[Q+T],p[Q+V],p[Q+Z],p[Q+$])) * rt | 0,++T,++V,++Z,++$,Y = o(z,o(B,p[N+T],p[N+V],p[N+Z],p[N+$]),o(B,p[O+T],p[O+V],p[O+Z],p[O+$]),o(B,p[P+T],p[P+V],p[P+Z],p[P+$]),o(B,p[Q+T],p[Q+V],p[Q+Z],p[Q+$])) * rt | 0,M[at] = H>= 0 ? 256>H ? H:255 :0,M[at+1] = X>= 0 ? 256>X ? X:255 :0,M[at+2] = Y>= 0 ? 256>Y ? Y:255 :0,++T,++V,++Z,++$,q = o(z,o(B,p[N+T],p[N+V],p[N+Z],p[N+$]),o(B,p[O+T],p[O+V],p[O+Z],p[O+$]),o(B,p[P+T],p[P+V],p[P+Z],p[P+$]),o(B,p[Q+T],p[Q+V],p[Q+Z],p[Q+$])) * rt | 0,M[at+3] = q>= 0 ? 256>q ? q:255 :0;else{if(e.Float32Array) W = new Float32Array(it);else for(W = [],at = 0;it>at;++at) W[at] = 0;for(b = 0;w>b;b++) for(x = b * nt,A = 0 | x,D = A * _,U =!!((A -(x+nt | 0)) *(w - 1 - b)) << 1,U &&(F = A+1 - x,L = x+nt - A - 1),v = 0;m>v;v++,et+= 4) switch(y = v * ht,I = 0 | y,at = D+(I << 2),S =!!((I -(y+ht | 0)) *(m - 1 - v)),S &&(C = I+1 - y,E = y+ht - I - 1),H = p[et],X = p[et+1],Y = p[et+2],q = p[et+3],S+U){case 0:W[at]+= H * ot,W[at+1]+= X * ot,W[at+2]+= Y * ot,W[at+3]+= q * ot;break;case 1:k = C * nt,W[at]+= H * k,W[at+1]+= X * k,W[at+2]+= Y * k,W[at+3]+= q * k,k = E * nt,W[at+4]+= H * k,W[at+5]+= X * k,W[at+6]+= Y * k,W[at+7]+= q * k;break;case 2:k = ht * F,W[at]+= H * k,W[at+1]+= X * k,W[at+2]+= Y * k,W[at+3]+= q * k,k = ht * L,at+= _,W[at]+= H * k,W[at+1]+= X * k,W[at+2]+= Y * k,W[at+3]+= q * k;break;default:k = C * F,W[at]+= H * k,W[at+1]+= X * k,W[at+2]+= Y * k,W[at+3]+= q * k,k = E * F,W[at+4]+= H * k,W[at+5]+= X * k,W[at+6]+= Y * k,W[at+7]+= q * k,k = C * L,at+= _,W[at]+= H * k,W[at+1]+= X * k,W[at+2]+= Y * k,W[at+3]+= q * k,k = E * L,W[at+4]+= H * k,W[at+5]+= X * k,W[at+6]+= Y * k,W[at+7]+= q * k}delete p,h(),K = n(W)}if(J.putImageData(K,0,0),"string" == typeof i){if("png" === i || "jpeg" === i){var ut;return ut = r && a.src ? a:new Image,ut.width = s,ut.height = f,ut.src = G.toDataURL("image/"+i,1),ut}if("png-src" === i || "jpeg-src" === i) return G.toDataURL("image/"+i.split("-")[0],1)}return G}var e = this; true ?("undefined"!= typeof module && module.exports &&(exports = module.exports = t),exports.scale = t):e.scale = t}).call(this);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {var specXml = Store.spec.specXml;
	module.exports = {
	    getVersion:function(){
	        return $(specXml).find("product-spec").attr('version');
	    },
	    getDPI: function() {
	        return parseInt($(specXml).find("dpi").text());
	    },
	    getImageQualityBufferPercent: function() {
	        return parseInt($(specXml).find("imageQualityBufferPercent").text());
	    },
	    //通过类型获取option的值
	    getOptions: function(type) {
	        var options = $(specXml).find('optionGroup[id=' + type + ']').find('option');
	        var array = [];
	        for (var i = 0; i < options.length; i++) {
	            var o = {};
	            var names = options.eq(i).get(0).attributes;
	            for (var j = 0; j < names.length; j++) {
	                o[names[j].name] = names[j].value;
	            }
	            var title = options.eq(i).find('title').text();
	            if (title != "") {
	                o['title'] = title;
	            }

	            array.push(o);
	        };
	        return array;
	    },
	    //通过类型和参数获取option map的值
	    //paramsList是对象数组，对象key为type，value为相关id
	    getOptionsMap: function(type, paramsList) {
	        var optionMapKeyPattern = $(specXml).find("configurableOptionMap").find('optionMap[id=' + type + ']').attr('keyPattern').toString();
	        var optionMaps = $(specXml).find("configurableOptionMap").find('optionMap[id=' + type + ']').find('entry');
	        var value=this.getIsPattern(optionMapKeyPattern,optionMaps,paramsList);
	        if(value){
	        	return value.attr('value');
	        }else{
	        	return null;
	        }

	    },
	    //通过类型和参数获取默认属性defaultValue的值
	    getOptionsMapDefaultValue:function(type,paramsList){
	        var optionMapKeyPattern = $(specXml).find("configurableOptionMap").find('optionMap[id=' + type + ']').attr('keyPattern').toString();
	        var optionMaps = $(specXml).find("configurableOptionMap").find('optionMap[id=' + type + ']').find('entry');
	        var value=this.getIsPattern(optionMapKeyPattern,optionMaps,paramsList);
	        if(value){
	            return value.attr('defaultValue');
	        }else{
	            return null;
	        }
	    },
	    //通过类型和参数获取parameter的值
	    //paramsList是对象数组，对象key为type，value为相关id
	    getParameter: function(type, paramsList) {
	        var parameterMapKeyPattern = $(specXml).find('parameter[id=' + type + ']').attr('keyPattern').toString();
	        var parameterMaps = $(specXml).find('parameter[id=' + type + ']').find('entry');

	        var value=this.getIsPattern(parameterMapKeyPattern,parameterMaps,paramsList);
	        if(value){
	        	var object = {};
	            var names = value.get(0).attributes;
	            for (var j = 0; j < names.length; j++) {
	                object[names[j].name] = names[j].value;
	            }

	        	return object;
	        }else{
	        	return null;
	        }


	    },
	    getVariable:function(type, paramsList) {
	        var variableKeyPattern = $(specXml).find('variable[id=' + type + ']').attr('keyPattern').toString();
	        var variableMaps = $(specXml).find('variable[id=' + type + ']').find('entry');

	        var value=this.getIsPattern(variableKeyPattern,variableMaps,paramsList);
	        if(value){
	        	var object = {};
	            var names = value.get(0).attributes;
	            for (var j = 0; j < names.length; j++) {
	                object[names[j].name] = names[j].value;
	            }

	        	return object;
	        }else{
	        	return null;
	        }


	    },
	    //传入的参数是否匹配
	    getIsPattern:function(optionMapKeyPattern,optionMaps,paramsList){
	    	var keyPatternList = optionMapKeyPattern.split("-");
	        //if(paramsList.length===keyPatternList.length){
	        for (var i = 0; i < optionMaps.length; i++) {
	            var key = optionMaps.eq(i).attr("key");
	            var targetKeyPatternList = key.split("-");
	            var value = optionMaps.eq(i);
	            var isPatterns = [];
	            for (var j = 0; j < targetKeyPatternList.length; j++) {
	                var id = keyPatternList[j];
	                var target = targetKeyPatternList[j];
	                if (target === "*") {
	                    isPatterns.push(true);
	                } else {
	                    for (var k = 0; k < paramsList.length; k++) {
	                        if (paramsList[k].key === id) {
	                            var isArrayTarget = /\[/.test(target);
	                            var paramValue = paramsList[k].value;
	                            if (isArrayTarget) {
	                                var targetArray = target.substr(1,target.length -2).split(',');
	                                var trimedTargetArray = targetArray.map(function(item){return item.trim()});
	                                if(trimedTargetArray.indexOf(paramValue) !== -1) {
	                                    isPatterns.push(true);
	                                }
	                            } else {
	                                if (target === paramValue) {
	                                    isPatterns.push(true);
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	            var isPattern = true;
	            for (var n = 0; n < isPatterns.length; n++) {
	                if (isPatterns[n] === false) {
	                    isPattern = false;
	                }
	            }
	            if (isPatterns.length === keyPatternList.length && isPattern) {
	                return value;
	            }
	        }
	        return null;
	        /*}else{
	        	return false;
	        }*/
	    },
	    //获取所有option的id列表
	    getOptionIds:function(){
	    	var list=[];
	    	var optionGroup = $(specXml).find('optionGroup');
	    	for (var i = 0; i < optionGroup.length; i++) {
	    		list.push(optionGroup.eq(i).attr('id'));
	    	}
	    	return list;
	    },
	    //获取所有option map的id列表
	    getOptionMapIds:function(){
	    	var list=[];
	    	var option = $(specXml).find("configurableOptionMap").find('optionMap');
	    	for (var i = 0; i < option.length; i++) {
	    		list.push(option.eq(i).attr('id'));
	    	}
	    	return list;
	    },
	    //通过id获取optionMap
	    getOptionMapById:function(id){

	        return $(specXml).find("configurableOptionMap").find('optionMap[id=' + id + ']').find('entry');
	    },
	    getCategoryByProduct:function(product){
	        var entrys=this.getOptionMapById('product');
	        for (var i = 0; i < entrys.length; i++) {
	            var values=entrys.eq(i).attr('value');
	            var valueArray=values.split(',');
	            for (var j = 0; j < valueArray.length; j++) {
	                if(valueArray[j]===product){
	                    return entrys.eq(i).attr('key');
	                }
	            }
	        }

	        return 'none';
	    },
	    //通过option map的id获取keypattern
	    getOptionMapKeyPatternById:function(type){
	    	return $(specXml).find("configurableOptionMap").find('optionMap[id=' + type + ']').attr('keyPattern').toString();;
	    },
	    //获取所有Parameter的id列表
	    getParameterIds:function(){
	    	var list=[];
	    	var option = $(specXml).find('parameter');
	    	for (var i = 0; i < option.length; i++) {
	    		list.push(option.eq(i).attr('id'));
	    	}
	    	return list;
	    },
	    //通过Parameter的id获取keypattern
	    getParameterKeyPatternById:function(type){
	    	return $(specXml).find('parameter[id=' + type + ']').attr('keyPattern').toString();;
	    },

	    //通过Parameter的id获取keypattern
	    getVariableKeyPatternById:function(type){
	        return $(specXml).find('variable[id=' + type + ']').attr('keyPattern').toString();;
	    },

	    getDisableOptionsMap: function(type, paramsList) {
	        if($(specXml).find("disableOptionMap").find('optionMap[id=' + type + ']').attr('keyPattern')){
	            var optionMapKeyPattern = $(specXml).find("disableOptionMap").find('optionMap[id=' + type + ']').attr('keyPattern').toString();
	            var optionMaps = $(specXml).find("disableOptionMap").find('optionMap[id=' + type + ']').find('entry');
	            var value=this.getIsPattern(optionMapKeyPattern,optionMaps,paramsList);
	            if(value){
	                return value.attr('value');
	            }else{
	                return null;
	            }
	        }else{
	            return null;
	        }


	    },
	    getDisableOptionMapKeyPatternById:function(type){
	        return $(specXml).find("disableOptionMap").find('optionMap[id=' + type + ']').attr('keyPattern').toString();;
	    },
	    getDisableOptionIds:function(){
	        var list=[];
	        var option = $(specXml).find("disableOptionMap").find('optionMap');
	        for (var i = 0; i < option.length; i++) {
	            list.push(option.eq(i).attr('id'));
	        }
	        return list;
	    },
	    getDisableOptionValues:function(product){
	        var list=[];
	        var option = $(specXml).find("disableOptionMap").find('optionMap').find('entry');
	        for (var i = 0; i < option.length; i++) {
	            if(option.eq(i).attr('key').indexOf(product)!=-1){
	                list.push(option.eq(i).attr('value'));
	            }
	            
	        }
	        return list;
	    },
	    getAllSize : function(){
	        var type = 'size',
	            keyPatterns = this.getOptionMapKeyPatternById(type).split("-"),
	            params = [],
	            res;
	        var item = { key : 'product', value : 'print'};
	        params.push(item);
	        return this.getOptionsMap(type,params).split(",");
	    },
	    getAllPaper : function(size){
	        var type = 'paper',
	            keyPatterns = this.getOptionMapKeyPatternById(type).split("-"),
	            params = [],
	            res,
	            currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var item = { key : 'size', value : size};
	        params.push(item);
	        return this.getOptionsMap(type,params).split(",");
	    },
	    getElementById: function (id) {
	        return $(specXml).find('#' + id);
	    },
	    getOptionNameById: function(type, id) {
	        var options = this.getOptions(type);
	        var itemName = '';
	        options.some(function(item){
	            if(item.id === id) {
	                itemName = item.name || item.title;
	                return true;
	            }
	        });
	        return itemName;
	    },
	    getAvailableOptions : function(type, resetParams){
	        var paramsList = __webpack_require__(19).getParamsList();
	        resetParams = resetParams || [];

	        if(!Array.isArray(resetParams)) {
	            resetParams = [resetParams];
	        }

	        paramsList = paramsList.map(function(paramObj) {

	            // 用filter代替find方法
	            var resetParam = resetParams.filter(function(resetParamObj) {
	                return resetParamObj.key === paramObj.key;
	            });

	            if(resetParam.length > 0) {
	                paramObj = resetParam[0];
	            }

	            return paramObj;
	        });
	        return this.getOptionsMap(type, paramsList).split(",");
	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {module.exports = {

	    getFrameBaseSize: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var product = currentProject.product;
	        var frameStyle = currentProject.frameStyle;
	        var size = currentProject.size;
	        var sizeObject = __webpack_require__(18).getParameter('frameBaseSize', [{ key: 'product', value: product }, { key: 'frameStyle', value: frameStyle }, { key: 'size', value: size }]);
	        var object = {};
	        var rotated = currentProject.rotated;
	        if (rotated) {
	            object.width = sizeObject.heightInInch * __webpack_require__(18).getDPI();
	            object.height = sizeObject.widthInInch * __webpack_require__(18).getDPI();
	        } else {
	            object.width = sizeObject.widthInInch * __webpack_require__(18).getDPI();
	            object.height = sizeObject.heightInInch * __webpack_require__(18).getDPI();
	        }

	        return object;
	    },
	    getCanvasBorderThickness: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var product = currentProject.product;
	        var frameStyle = currentProject.frameStyle;
	        var canvasBorderSize = currentProject.canvasBorderSize;
	        var sizeObject = __webpack_require__(18).getParameter('canvasBorderThickness', [{ key: 'product', value: product }, { key: 'canvasBorderSize', value: canvasBorderSize },{ key: 'frameStyle', value: frameStyle }]);
	        var object = {};
	        var rotated = currentProject.rotated;
	        if (rotated) {
	            object.top = parseInt(sizeObject.left);
	            object.bottom = parseInt(sizeObject.right);
	            object.left = parseInt(sizeObject.top);
	            object.right = parseInt(sizeObject.bottom);
	        }else{
	            object.top = parseInt(sizeObject.top);
	            object.bottom = parseInt(sizeObject.bottom);
	            object.left = parseInt(sizeObject.left);
	            object.right = parseInt(sizeObject.right);
	        }

	        return object;
	    },
	    getFrameBorderThickness: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var product = currentProject.product;
	        var frameStyle = currentProject.frameStyle;
	        var sizeObject = __webpack_require__(18).getParameter('frameBorderThickness', [{ key: 'product', value: product }, { key: 'frameStyle', value: frameStyle }]);
	        var object = {};
	        var rotated = currentProject.rotated;
	        if (rotated) {
	            object.top = parseInt(sizeObject.left);
	            object.bottom = parseInt(sizeObject.right);
	            object.left = parseInt(sizeObject.top);
	            object.right = parseInt(sizeObject.bottom);
	        }else{
	            object.top = parseInt(sizeObject.top);
	            object.bottom = parseInt(sizeObject.bottom);
	            object.left = parseInt(sizeObject.left);
	            object.right = parseInt(sizeObject.right);
	        }

	        return object;
	    },
	    getBleed: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var product = currentProject.product;
	        var size = currentProject.size;
	        var frameStyle = currentProject.frameStyle;
	        var sizeObject = __webpack_require__(18).getParameter('bleed', [{ key: 'product', value: product },{ key: 'frameStyle', value: frameStyle },{ key: 'size', value: size }]);
	        var object = {};
	        var rotated = currentProject.rotated;
	        if (rotated) {
	            object.top = parseInt(sizeObject.left);
	            object.bottom = parseInt(sizeObject.right);
	            object.left = parseInt(sizeObject.top);
	            object.right = parseInt(sizeObject.bottom);
	        }else{
	            object.top = parseInt(sizeObject.top);
	            object.bottom = parseInt(sizeObject.bottom);
	            object.left = parseInt(sizeObject.left);
	            object.right = parseInt(sizeObject.right);
	        }
	        return object;
	    },
	    getBoardInFrame: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var product = currentProject.product;
	        var frameStyle = currentProject.frameStyle;
	        var size = currentProject.size;
	        var sizeObject = __webpack_require__(18).getParameter('boardInFrame', [{ key: 'product', value: product }, { key: 'frameStyle', value: frameStyle }, { key: 'size', value: size }]);
	        var object = {};
	        var rotated = currentProject.rotated;
	        if (rotated) {
	            object.top = parseInt(sizeObject.left);
	            object.bottom = parseInt(sizeObject.right);
	            object.left = parseInt(sizeObject.top);
	            object.right = parseInt(sizeObject.bottom);
	        }else{
	            object.top = parseInt(sizeObject.top);
	            object.bottom = parseInt(sizeObject.bottom);
	            object.left = parseInt(sizeObject.left);
	            object.right = parseInt(sizeObject.right);
	        }
	        return object;
	    },
	    getBoardInMatting: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var product = currentProject.product;
	        var size = currentProject.size;
	        var matte = currentProject.matte;
	        var frameStyle = currentProject.frameStyle;
	        var sizeObject = __webpack_require__(18).getParameter('boardInMatting', [{ key: 'product', value: product }, { key: 'frameStyle', value: frameStyle }, { key: 'size', value: size }, { key: 'matte', value: matte }]);
	        var object = {};
	        var rotated = currentProject.rotated;
	        if (rotated) {
	            object.top = parseInt(sizeObject.left);
	            object.bottom = parseInt(sizeObject.right);
	            object.left = parseInt(sizeObject.top);
	            object.right = parseInt(sizeObject.bottom);
	        }else{
	            object.top = parseInt(sizeObject.top);
	            object.bottom = parseInt(sizeObject.bottom);
	            object.left = parseInt(sizeObject.left);
	            object.right = parseInt(sizeObject.right);
	        }
	        return object;
	    },
	    getMatteSize: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var size = currentProject.size;
	        var matte = currentProject.matte;
	        var product = currentProject.product;
	        var frameStyle = currentProject.frameStyle;
	        var sizeObject = __webpack_require__(18).getParameter('matteSize', [{ key: 'product', value: product }, { key: 'frameStyle', value: frameStyle }, { key: 'size', value: size }, { key: 'matte', value: matte }]);
	        var object = {};
	        var rotated = currentProject.rotated;
	        if (rotated) {
	            object.top = parseInt(sizeObject.left);
	            object.bottom = parseInt(sizeObject.right);
	            object.left = parseInt(sizeObject.top);
	            object.right = parseInt(sizeObject.bottom);
	        }else{
	            object.top = parseInt(sizeObject.top);
	            object.bottom = parseInt(sizeObject.bottom);
	            object.left = parseInt(sizeObject.left);
	            object.right = parseInt(sizeObject.right);
	        }
	        return object;
	    },
	    getMatteStyleColor: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var matteStyle = currentProject.matteStyle;
	        var sizeObject = __webpack_require__(18).getParameter('matteStyleColor', [{ key: 'matteStyle', value: matteStyle }]);
	        if (sizeObject  &&  sizeObject.color === "0") {
	            return 0;
	        } else {
	            return 16777215;
	        }
	    },
	    getInitProjectXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var base = this.getBaseInfoXml();
	        var option = this.getOptionXml();
	        var frameBoard = this.getFrameBoardXml();
	        var matteLayer = this.getMatteLayerXml();
	        var photoLayer = this.getPhotoLayerXml();
	        var elements = this.getIntiElementXml();
	        var images = this.getImagesXml();

	        ($(base).find('photoFrame')).append(option.firstChild.cloneNode(true));
	        ($(frameBoard).find('frameBoard')).append(matteLayer.firstChild.cloneNode(true));
	        ($(photoLayer).find('photosLayer')).append(elements.firstChild.cloneNode(true));
	        ($(frameBoard).find('frameBoard')).append(photoLayer.firstChild.cloneNode(true));
	        ($(base).find('photoFrame')).append(frameBoard.firstChild.cloneNode(true));
	        ($(base).find('project')).append(images.firstChild.cloneNode(true));

	        return __webpack_require__(20).xmlToString(base);
	    },
	    getCurrentProjectXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var base = this.getBaseInfoXml();
	        var option = this.getOptionXml();
	        var frameBoard = this.getFrameBoardXml();
	        var matteLayer = this.getMatteLayerXml();
	        var photoLayer = this.getPhotoLayerXml();
	        var elements = this.getElementsXml();
	        var images = this.getImagesXml();

	        ($(base).find('photoFrame')).append(option.firstChild.cloneNode(true));
	        if(currentProject.matte!=="none"){
	            ($(frameBoard).find('frameBoard')).append(matteLayer.firstChild.cloneNode(true));
	        }
	        ($(photoLayer).find('photosLayer')).append(elements.firstChild.cloneNode(true));
	        ($(frameBoard).find('frameBoard')).append(photoLayer.firstChild.cloneNode(true));
	        ($(base).find('photoFrame')).append(frameBoard.firstChild.cloneNode(true));
	        ($(base).find('project')).append(images.firstChild.cloneNode(true));

	        return __webpack_require__(20).xmlToString(base);
	    },
	    getOptionXml: function(index) {
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index];
	        var s = '<spec version="' + __webpack_require__(18).getVersion() + '">';

	        var optionIds = __webpack_require__(18).getOptionIds();
	        for (var i = 0; i < optionIds.length; i++) {
	            s += '<option id="' + optionIds[i] + '" value="' + currentProject[optionIds[i]] + '"/>';
	        };

	        s += '</spec>';

	        return __webpack_require__(20).stringToXml(s);
	    },
	    getElementsXml: function(index) {
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index];
	        var currentCanvas = Store.pages[index].canvas;
	        var elememts = currentCanvas.params;
	        var s = '<elements>';

	        for (var i = 0; i < elememts.length; i++) {

	            var x = elememts[i].x;
	            var y = elememts[i].y;
	            var width = elememts[i].width;
	            var height = elememts[i].height;
	            var px = x / currentCanvas.oriWidth;
	            var py = y / currentCanvas.oriHeight;
	            var ph = height / currentCanvas.oriHeight;
	            var pw = width / currentCanvas.oriWidth;
	            var rot = elememts[i].rotate;
	            var dep = elememts[i].dep;
	            var imageid = elememts[i].imageId;
	            var imgRot = elememts[i].imageRotate;
	            var imgFlip = false;
	            var cropPX = parseFloat(elememts[i].cropPX),
	                cropPY = parseFloat(elememts[i].cropPY),
	                cropPW = parseFloat(elememts[i].cropPW),
	                cropPH = parseFloat(elememts[i].cropPH);
	            console.log(elememts[i]);
	            if(elememts[i].elType==='text'){

	                s += '<element type="TextElement" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + dep + '" color="' + elememts[i].fontColor + '" fontSize="' + parseFloat(elememts[i].fontSize) / currentCanvas.oriHeight + '" fontFamily="' + encodeURIComponent(elememts[i].fontFamily) + '" fontWeight="' + elememts[i].fontWeight + '" textAlign="' + elememts[i].textAlign + '" ><![CDATA[' + encodeURIComponent(elememts[i].text) + ']]></element>';

	            }else if(elememts[i].elType==='logo'){

	                s += '<element type="LogoElement" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + dep + '" imageid="' + imageid + '" imgRot="' + imgRot + '" imgFlip="' + imgFlip + '" cropLUX="' + cropPX.toString() + '" cropLUY="' + cropPY.toString() + '" cropRLX="' + (cropPX + cropPW) + '" cropRLY="' + (cropPY + cropPH).toString() + '" />';

	            }else if(elememts[i].elType==='image'){

	            	s += '<element type="PhotoElement" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + dep + '" imageid="' + imageid + '" imgRot="' + imgRot + '" imgFlip="' + imgFlip + '" cropLUX="' + cropPX.toString() + '" cropLUY="' + cropPY.toString() + '" cropRLX="' + (cropPX + cropPW) + '" cropRLY="' + (cropPY + cropPH).toString() + '" />';
	            }

	        }
	        s += '</elements>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getIntiElementXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var photoLayer = this.getPhotoLayer();

	        var width = photoLayer.width;
	        var height = photoLayer.height;
	        var s = '<elements>' +
	/*            '<element type="PhotoElement" x="0" y="0" width="' + width + '" height="' + height + '" px="0" py="0" pw="1" ph="1" rot="0" dep="0" imageid="" imgRot="0" imgFlip="false" cropLUX="0" cropLUY="0" cropRLX="1" cropRLY="1" />' +
	*/            '</elements>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getBaseInfoXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var s = '<project schemaVersion="2.0" clientId="web-h5">' +
	            '<guid>' + Store.projectId + '</guid>' +
	            '<userId>' + Store.userSettings.userId + '</userId>' +
	            '<artisan>' + Store.userSettings.userName + '</artisan>' +
	            '<title><![CDATA[' + Store.title + ']]></title>' +
	            '<description></description>' +
	            '<createdDate></createdDate>' +
	            '<updatedDate></updatedDate>' +
	            '<uiSetting>' +
	            '<templateStrip>' +
	            '<showTemplatePanel>false</showTemplatePanel>' +
	            '<autoLayout>false</autoLayout>' +
	            '</templateStrip>' +
	            '</uiSetting>' +
	            '<photoFrame>' +
	            '</photoFrame>' +
	            '</project>';

	        return __webpack_require__(20).stringToXml(s);
	    },
	    getFrameBoardXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var rotated = currentProject.rotated;

	        var frameBaseSize = this.getFrameBaseSize();


	        var frameBorderThickness = this.getFrameBorderThickness();
	        var frameBorderThicknessTop = frameBorderThickness.top;
	        var frameBorderThicknessBottom = frameBorderThickness.bottom;
	        var frameBorderThicknessLeft = frameBorderThickness.left;
	        var frameBorderThicknessRight = frameBorderThickness.right;

	        var canvasBorderThickness = this.getCanvasBorderThickness();
	        var canvasBorderThicknessTop = canvasBorderThickness.top;
	        var canvasBorderThicknessBottom = canvasBorderThickness.bottom;
	        var canvasBorderThicknessLeft = canvasBorderThickness.left;
	        var canvasBorderThicknessRight = canvasBorderThickness.right;

	        var boardInFrame = this.getBoardInFrame();
	        var boardInFrameTop = boardInFrame.top;
	        var boardInFrameBottom = boardInFrame.bottom;
	        var boardInFrameLeft = boardInFrame.left;
	        var boardInFrameRight = boardInFrame.right;

	        var boardInMatting = this.getBoardInMatting();
	        var boardInMattingTop = boardInMatting.top;
	        var boardInMattingBottom = boardInMatting.bottom;
	        var boardInMattingLeft = boardInMatting.left;
	        var boardInMattingRight = boardInMatting.right;

	        var width = frameBaseSize.width+canvasBorderThicknessLeft+canvasBorderThicknessRight;
	        var height = frameBaseSize.height+canvasBorderThicknessTop+canvasBorderThicknessBottom;
	        var borderColor=Store.bgColor+"";
	        if(isNaN(borderColor)){
	            borderColor="0";
	        }
	        var s = '<frameBoard rotated="' + rotated + '" height="' + height + '" width="' + width + '" frameBorderThicknessTop="' + frameBorderThicknessTop + '" frameBorderThicknessBottom="' + frameBorderThicknessBottom + '" frameBorderThicknessLeft="' + frameBorderThicknessLeft + '" frameBorderThicknessRight="' + frameBorderThicknessRight + '" canvasBorderThicknessTop="' + canvasBorderThicknessTop + '" canvasBorderThicknessBottom="' + canvasBorderThicknessBottom + '" canvasBorderThicknessLeft="' + canvasBorderThicknessLeft + '" canvasBorderThicknessRight="' + canvasBorderThicknessRight + '" boardInFrameTop="' + boardInFrameTop + '" boardInFrameBottom="' + boardInFrameBottom + '" boardInFrameLeft="' + boardInFrameLeft + '" boardInFrameRight="' + boardInFrameRight + '" boardInMattingTop="' + boardInMattingTop + '" boardInMattingBottom="' + boardInMattingBottom + '" boardInMattingLeft="' + boardInMattingLeft + '" boardInMattingRight="' + boardInMattingRight + '" canvasBorderColor="'+borderColor+'"></frameBoard>';

	        return __webpack_require__(20).stringToXml(s);
	    },
	    getMatteLayerXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var id = currentProject.matte;
	        var color = this.getMatteStyleColor();

	        var matteSize = this.getMatteSize();
	        var matteTop = matteSize.top;
	        var matteBottom = matteSize.bottom;
	        var matteLeft = matteSize.left;
	        var matteRight = matteSize.right;
	        var s = '<matteLayer id="' + id + '" x="0" y="0" px="0" py="0" matteTop="' + matteTop + '" matteBottom="' + matteBottom + '" matteLeft="' + matteLeft + '" matteRight="' + matteRight + '" depth="1" color="' + color + '"/>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getPhotoLayerXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var photoLayer = this.getPhotoLayer();

	        var bleed = this.getBleed();
	        var bleedTop = bleed.top;
	        var bleedBottom = bleed.bottom;
	        var bleedLeft = bleed.left;
	        var bleedRight = bleed.right;

	        var x = photoLayer.x;
	        var y = photoLayer.y;
	        var px = photoLayer.px;
	        var py = photoLayer.py;
	        var pw = photoLayer.pw;
	        var ph = photoLayer.ph;
	        var width = photoLayer.width;
	        var height = photoLayer.height;
	        console.log('color',Store.bgColor);
	        var tplGuid=currentProject.tplGuid;
	        var tplSuitId=currentProject.tplSuitId;
	        var s='';
	        if(tplGuid&&tplSuitId){

	            s = '<photosLayer x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" bleedTop="' + bleedTop + '" bleedBottom="' + bleedBottom + '" bleedLeft="' + bleedLeft + '" bleedRight="' + bleedRight + '" tplGuid="' + tplGuid + '" tplSuitId="' + tplSuitId + '"></photosLayer>';

	        }else{
	            s = '<photosLayer x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" bleedTop="' + bleedTop + '" bleedBottom="' + bleedBottom + '" bleedLeft="' + bleedLeft + '" bleedRight="' + bleedRight + '"></photosLayer>';

	        }
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getImagesXml: function() {
	        var s = '<images>';
	        for (i = 0; i < Store.imageList.length; i++) {
	            s += '<image id="' + Store.imageList[i].id + '" guid="' + Store.imageList[i].guid + '" encImgId="' + Store.imageList[i].encImgId + '" order="' + i + '" name="' + encodeURIComponent(Store.imageList[i].name) + '" width="' + Store.imageList[i].width + '" height="' + Store.imageList[i].height + '" shotTime="' + Store.imageList[i].shotTime + '"/>';
	        };
	        s += '</images>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getPhotoLayer: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var object = {};
	        var rotated = currentProject.rotated;

	        var frameBaseSize = this.getFrameBaseSize();

	        var frameBorderThickness = this.getFrameBorderThickness();
	        var frameBorderThicknessTop = frameBorderThickness.top;
	        var frameBorderThicknessBottom = frameBorderThickness.bottom;
	        var frameBorderThicknessLeft = frameBorderThickness.left;
	        var frameBorderThicknessRight = frameBorderThickness.right;

	        var canvasBorderThickness = this.getCanvasBorderThickness();
	        var canvasBorderThicknessTop = canvasBorderThickness.top;
	        var canvasBorderThicknessBottom = canvasBorderThickness.bottom;
	        var canvasBorderThicknessLeft = canvasBorderThickness.left;
	        var canvasBorderThicknessRight = canvasBorderThickness.right;

	        var boardInFrame = this.getBoardInFrame();
	        var boardInFrameTop = boardInFrame.top;
	        var boardInFrameBottom = boardInFrame.bottom;
	        var boardInFrameLeft = boardInFrame.left;
	        var boardInFrameRight = boardInFrame.right;

	        var boardInMatting = this.getBoardInMatting();
	        var boardInMattingTop = boardInMatting.top;
	        var boardInMattingBottom = boardInMatting.bottom;
	        var boardInMattingLeft = boardInMatting.left;
	        var boardInMattingRight = boardInMatting.right;

	        var bleed = this.getBleed();
	        var bleedTop = bleed.top;
	        var bleedBottom = bleed.bottom;
	        var bleedLeft = bleed.left;
	        var bleedRight = bleed.right;

	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var product = currentProject.product;
	        var size = currentProject.size;
	        var matte = currentProject.matte;
	        var product = currentProject.product;
	        var frameStyle = currentProject.frameStyle;
	        var sizeObject = __webpack_require__(18).getParameter('matteSize', [{ key: 'product', value: product }, { key: 'frameStyle', value: frameStyle }, { key: 'size', value: size }, { key: 'matte', value: matte }]);

	        var matteTop = parseInt(sizeObject.top);
	        var matteBottom = parseInt(sizeObject.bottom);
	        var matteLeft = parseInt(sizeObject.left);
	        var matteRight = parseInt(sizeObject.right);

	        var floatBgSize = __webpack_require__(18).getParameter('floatBgSize', [{ key: 'product', value: product }, { key: 'size', value: size }]);
	        var floatBgTop = floatBgSize ? parseInt(floatBgSize.top) : 0;
	        var floatBgLeft = floatBgSize ? parseInt(floatBgSize.left) : 0;
	        var floatBgRight = floatBgSize ? parseInt(floatBgSize.right) : 0;
	        var floatBgBottom = floatBgSize ? parseInt(floatBgSize.bottom) : 0;

	        var baseWidth = frameBaseSize.width+canvasBorderThicknessLeft+canvasBorderThicknessRight;
	        var baseHeight = frameBaseSize.height+canvasBorderThicknessTop+canvasBorderThicknessBottom;

	        var x = 0;
	        var y = 0;
	        var width = 0;
	        var height = 0;
	        if (currentProject.rotated) {
	            x = matteBottom - bleedBottom - boardInMattingBottom + floatBgBottom /*- canvasBorderThicknessBottom*/;
	            y = matteLeft - bleedLeft - boardInMattingLeft + floatBgLeft /*- canvasBorderThicknessLeft*/;
	            width = baseWidth + bleedTop + bleedBottom - matteTop - matteBottom + boardInMattingTop + boardInMattingBottom - floatBgTop - floatBgBottom;
	            height = baseHeight + bleedLeft + bleedRight - matteLeft - matteRight + boardInMattingLeft + boardInMattingRight - floatBgLeft - floatBgRight;
	        } else {
	            x = matteLeft - bleedLeft - boardInMattingLeft + floatBgLeft /*- canvasBorderThicknessLeft*/;
	            y = matteTop - bleedTop - boardInMattingTop + floatBgTop /*- canvasBorderThicknessTop*/;
	            width = baseWidth + bleedLeft + bleedRight - matteLeft - matteRight + boardInMattingLeft + boardInMattingRight - floatBgLeft - floatBgRight;
	            height = baseHeight + bleedTop + bleedBottom - matteTop - matteBottom + boardInMattingTop + boardInMattingBottom - floatBgTop - floatBgBottom;
	        }
	        var px = x / baseWidth;
	        var py = y / baseHeight;
	        var pw = width / baseWidth;
	        var ph = height / baseHeight;

	        object.x = x;
	        object.y = y;
	        object.width = width;
	        object.height = height;
	        object.px = px;
	        object.py = py;
	        object.pw = pw;
	        object.ph = ph;

	        return object;
	    },

	    getFrameBorderAsset:function(){
	    	var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        return __webpack_require__(18).getVariable('frameBorderAsset',[{key:'product',value:currentProject.product},{key:'color',value:currentProject.color}]);
	    },
	    isSupportMatte:function(){
	    	var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var matte = __webpack_require__(18).getVariable('availableOperation',[{key:'product',value:currentProject.product},{key:'frameStyle',value:currentProject.frameStyle}]);
	        return matte.supportMatte==="true"?true:false;
	    },
	    isSupportGlass:function(){
	    	var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var matte = __webpack_require__(18).getVariable('availableOperation',[{key:'product',value:currentProject.product},{key:'frameStyle',value:currentProject.frameStyle}]);
	        return matte.supportGlassStyle==="true"?true:false;
	    },

	    //poster产品

	    getBaseSize:function(index){
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index];
	        var product = currentProject.product;
	        var size = currentProject.size;
	        var sizeObject = __webpack_require__(18).getParameter('baseSize',[{key:'product',value:product},{key:'size',value:size}]);
	        var object = {};
	        var rotated = currentProject.rotated;
	        if (rotated) {
	            object.width = sizeObject.heightInInch * __webpack_require__(18).getDPI();
	            object.height = sizeObject.widthInInch * __webpack_require__(18).getDPI();
	        } else {
	            object.width = sizeObject.widthInInch * __webpack_require__(18).getDPI();
	            object.height = sizeObject.heightInInch * __webpack_require__(18).getDPI();
	        }
	        return object;
	    },
	     getPageBleed: function(index) {
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index];
	        var product = currentProject.product;
	        var size = currentProject.size;
	        var sizeObject = __webpack_require__(18).getParameter('pageBleed', [{ key: 'product', value: product },{ key: 'size', value: size }]);
	        var object = {};
	        var rotated = currentProject.rotated;
	        if (rotated) {
	            object.top = parseInt(sizeObject.left);
	            object.bottom = parseInt(sizeObject.right);
	            object.left = parseInt(sizeObject.top);
	            object.right = parseInt(sizeObject.bottom);
	        }else{
	            object.top = parseInt(sizeObject.top);
	            object.bottom = parseInt(sizeObject.bottom);
	            object.left = parseInt(sizeObject.left);
	            object.right = parseInt(sizeObject.right);
	        }
	        return object;
	    },
	    getProuctCode:function(){
	        var length=Store.projectSettings.length;
	        var str = '|';
	        for(var i=0;i<length;i++){
	            var product = Store.projectSettings[i].product;
	            if(str.indexOf("|"+product+"|") < 0) {
	                str += product + '|';
	            };
	        }
	        return str.substring(1,str.length-1);
	    },
	    getPosterBaseInfoXml:function(){
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var product = currentProject.product;
	        var s = '<project schemaVersion="3.0" createAuthor="web-h5|1.0|1" clientId="web-h5" productCode="'+this.getProuctCode()+'" categoryCode="'+Store.category+'">' +
	            '<guid>' + Store.projectId + '</guid>' +
	            '<userId>' + Store.userSettings.userId + '</userId>' +
	            '<artisan>' + Store.userSettings.userName + '</artisan>' +
	            '<title><![CDATA[' + Store.title + ']]></title>' +
	            '<description/>' +
	            '<createdDate></createdDate>' +
	            '<updatedDate></updatedDate>' +
	            '<products>' +
	            '</products>' +
	            '</project>';

	        return __webpack_require__(20).stringToXml(s);
	    },

	    getPosterInitProjectXml: function() {

	        var base = this.getPosterBaseInfoXml();
	        // var product=this.getInitProductXml();
	        var product=this.getInitPosterXml();
	        var images = this.getImagesXml();

	        ($(base).find('products')).append(product.firstChild.cloneNode(true));
	        ($(base).find('project')).append(images.firstChild.cloneNode(true));

	        return __webpack_require__(20).xmlToString(base);
	    },
	    getInitPosterXml: function() {
	        var s='';
	        var projectLength = Store.projectSettings.length;
	        for(var i=0;i<projectLength;i++){
	             var currentProject = Store.projectSettings[i];
	             s += '<product type="'+currentProject.product+'">';
	             var option = this.getOptionXml(i);
	             s +=__webpack_require__(20).xmlToString(option);
	             s +='<productSetting/>';
	             s +='<contents>';
	             var contentXml=this.getInitPosterContentXml();
	             s +=__webpack_require__(20).xmlToString(contentXml);
	             s +='</contents>';
	             s += '</product>';
	        }
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getInitPosterContentXml: function() {
	        var currentProject = Store.projectSettings[0];
	        var content = this.getContent(0);
	        var rotated = currentProject.rotated;
	        var tplGuid="null";
	        var tplSuitId="null";
	        var s = '<content width="' + content.width + '" height="' + content.height + '" bleedTop="' + content.bleedTop + '" bleedBottom="' + content.bleedBottom + '" bleedLeft="' + content.bleedLeft + '" bleedRight="' + content.bleedRight + '" type="front"  tplGuid="'+tplGuid+'" tplSuitId="'+tplSuitId+'" rotated="'+rotated+'">';
	        s+="<elememts>";
	        s+='<element type="PhotoElement" x="0" y="0" width="' + content.width + '" height="' + content.height + '" px="0" py="0" pw="1" ph="1" rot="0" dep="0" imageid="" imgRot="0" imgFlip="false" cropLUX="0" cropLUY="0" cropRLX="1" cropRLY="1" />';
	        s+="</elememts>";
	        s+='</content>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getPosterCurrentProjectXml:function(){

	        var base = this.getPosterBaseInfoXml();
	        var product=this.getProductXml();
	        var images = this.getImagesXml();

	        ($(base).find('products')).append(product.firstChild.cloneNode(true));
	        ($(base).find('project')).append(images.firstChild.cloneNode(true));

	        return __webpack_require__(20).xmlToString(base);
	    },
	    getContent: function(index) {
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index];
	        var object = {};
	        var rotated = currentProject.rotated;

	        var baseSize = this.getBaseSize();

	        var baseWidth = baseSize.width;
	        var baseHeight = baseSize.height;

	        var bleed = this.getPageBleed();
	        var bleedTop = bleed.top;
	        var bleedBottom = bleed.bottom;
	        var bleedLeft = bleed.left;
	        var bleedRight = bleed.right;


	        var width = baseWidth+bleedLeft+bleedRight;
	        var height = baseHeight+bleedTop+bleedBottom;

	        var object={};
	        object.width=width;
	        object.height=height;
	        object.bleedTop=bleedTop;
	        object.bleedBottom=bleedBottom;
	        object.bleedLeft=bleedLeft;
	        object.bleedRight=bleedRight;

	        return object;
	    },
	    getProductXml:function(){
	        var s='';
	        var projectLength = Store.projectSettings.length;
	        for(var i=0;i<projectLength;i++){
	             var currentProject = Store.projectSettings[i];
	             s += '<product type="'+currentProject.product+'">';
	             var option = this.getOptionXml(i);
	             s +=__webpack_require__(20).xmlToString(option);
	             s +='<productSetting/>';
	             s +='<contents>';
	             var contentXml=this.getContentXml(i);
	             s +=__webpack_require__(20).xmlToString(contentXml);
	             s +='</contents>';
	             s += '</product>';
	        }
	        return __webpack_require__(20).stringToXml(s);

	    },
	    getInitProductXml:function(){
	        var s='';
	        var projectLength = Store.projectSettings.length;
	        for(var i=0;i<projectLength;i++){
	             var currentProject = Store.projectSettings[i];
	             s += '<product type="'+currentProject.product+'">';
	             var option = this.getOptionXml(i);
	             s +=__webpack_require__(20).xmlToString(option);
	             s +='<productSetting/>';
	             s +='<contents>';
	             var contentXml=this.getInitContentXml();
	             s +=__webpack_require__(20).xmlToString(contentXml);
	             s +='</contents>';
	             s += '</product>';
	        }
	        return __webpack_require__(20).stringToXml(s);

	    },
	    getContentXml:function(index){
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index];
	        var content = this.getContent(index);
	        var rotated = currentProject.rotated;
	        var tplGuid=currentProject.tplGuid;
	        var tplSuitId=currentProject.tplSuitId;
	        var s = '<content width="' + content.width + '" height="' + content.height + '" bleedTop="' + content.bleedTop + '" bleedBottom="' + content.bleedBottom + '" bleedLeft="' + content.bleedLeft + '" bleedRight="' + content.bleedRight + '" type="front"  tplGuid="'+tplGuid+'" tplSuitId="'+tplSuitId+'" rotated="'+rotated+'">';
	        var elements = this.getElementsXml(index);
	        s+=__webpack_require__(20).xmlToString(elements);
	        s+='</content>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getInitContentXml:function(){
	        var currentProject = Store.projectSettings[0];
	        var content = this.getContent(0);
	        var rotated = currentProject.rotated;
	        var tplGuid="null";
	        var tplSuitId="null";
	        var s = '<content width="' + content.width + '" height="' + content.height + '" bleedTop="' + content.bleedTop + '" bleedBottom="' + content.bleedBottom + '" bleedLeft="' + content.bleedLeft + '" bleedRight="' + content.bleedRight + '" type="front"  tplGuid="'+tplGuid+'" tplSuitId="'+tplSuitId+'" rotated="'+rotated+'">';
	        s+="<elememts>";
	        s+="</elememts>";
	        s+='</content>';
	        return __webpack_require__(20).stringToXml(s);
	    },

	    //Phone Case产品

	    getPhonecaseBaseSize : function(index){
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index],
	            product = currentProject.product,
	            deviceType = currentProject.deviceType,
	            dpi = __webpack_require__(18).getDPI(),
	            sizeObject = __webpack_require__(18).getParameter('baseSizeInInch',[{key:'product',value:product},{key:'deviceType',value:deviceType}]),
	            object = {};
	        object.width = sizeObject.width * dpi;
	        object.height = sizeObject.height * dpi;
	        return object;
	    },

	    getPhonecaseSide : function(index){
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index],
	            product = currentProject.product,
	            deviceType = currentProject.deviceType,
	            dpi = __webpack_require__(18).getDPI(),
	            sizeObject = __webpack_require__(18).getParameter('sideInInch',[{key:'product',value:product},{key:'deviceType',value:deviceType}]),
	            object = {};
	        object.top = sizeObject.top*dpi;
	        object.bottom = sizeObject.bottom*dpi;
	        object.left = sizeObject.left*dpi;
	        object.right = sizeObject.right*dpi;
	        return object;
	    },

	    getPhonecaseEdge : function(index){
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index],
	            product = currentProject.product,
	            deviceType = currentProject.deviceType,
	            dpi = __webpack_require__(18).getDPI(),
	            sizeObject = __webpack_require__(18).getParameter('edgeInInch',[{key:'product',value:product},{key:'deviceType',value:deviceType}]),
	            object = {};
	        object.top = sizeObject.top*dpi;
	        object.bottom = sizeObject.bottom*dpi;
	        object.left = sizeObject.left*dpi;
	        object.right = sizeObject.right*dpi;
	        return object;
	    },

	    getPhonecaseBleed : function(index){
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index],
	            product = currentProject.product,
	            deviceType = currentProject.deviceType,
	            dpi = __webpack_require__(18).getDPI(),
	            sizeObject = __webpack_require__(18).getParameter('bleedInInch',[{key:'product',value:product},{key:'deviceType',value:deviceType}]),
	            object = {};
	        object.top = sizeObject.top*dpi;
	        object.bottom = sizeObject.bottom*dpi;
	        object.left = sizeObject.left*dpi;
	        object.right = sizeObject.right*dpi;
	        return object;
	    },

	    getPhonecaseForeground : function(index){
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index],
	            product = currentProject.product,
	            deviceType = currentProject.deviceType,
	            sizeObject = __webpack_require__(18).getVariable('foreground',[{key:'product',value:product},{key:'deviceType',value:deviceType}]),
	            object = {};
	        object.width = sizeObject.width;
	        object.height = sizeObject.height;
	        object.top = sizeObject.paddingTop;
	        object.right = sizeObject.paddingRight;
	        object.left = sizeObject.paddingLeft;
	        object.bottom = sizeObject.paddingBottom;
	        return object;
	    },

	     getPhonecaseBaseInfoXml:function(){
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var product = currentProject.product;
	        var s = '<project schemaVersion="2.0" createAuthor="web-h5|1.0|1" clientId="web-h5" product="'+Store.product+'" productType="'+Store.projectType+'">' +
	            '<guid>' + Store.projectId + '</guid>' +
	            '<userId>' + Store.userSettings.userId + '</userId>' +
	            '<artisan>' + Store.userSettings.userName + '</artisan>' +
	            '<title><![CDATA[' + Store.title + ']]></title>' +
	            '<description/>' +
	            '<createdDate></createdDate>' +
	            '<updatedDate></updatedDate>' +
	            '<endpointToken></endpointToken>' +
	            '<phoneCase>' +
	            '</phoneCase>' +
	            '</project>';

	        return __webpack_require__(20).stringToXml(s);
	    },

	    getPhonecasePhotoLayerXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var photoLayer = this.getPhonecasePhotoLayer();

	        var bleed = this.getPhonecaseBleed();
	        var bleedTop = bleed.top;
	        var bleedBottom = bleed.bottom;
	        var bleedLeft = bleed.left;
	        var bleedRight = bleed.right;

	        var x = photoLayer.x;
	        var y = photoLayer.y;
	        var px = photoLayer.px;
	        var py = photoLayer.py;
	        var pw = photoLayer.pw;
	        var ph = photoLayer.ph;
	        var width = photoLayer.width;
	        var height = photoLayer.height;
	        console.log('color',Store.bgColor);
	        var s = '<photosLayer x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" bleedTop="' + bleedTop + '" bleedBottom="' + bleedBottom + '" bleedLeft="' + bleedLeft + '" bleedRight="' + bleedRight + '"></photosLayer>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getPhonecasePhotoLayer: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var object = {};

	        var BaseSize = this.getPhonecaseBaseSize();

	        var baseWidth = BaseSize.width;
	        var baseHeight = BaseSize.height;

	        var side = this.getPhonecaseSide();
	        var sideTop = side.top;
	        var sideBottom = side.bottom;
	        var sideLeft = side.left;
	        var sideRight = side.right;

	        var edge = this.getPhonecaseEdge();
	        var edgeTop = edge.top;
	        var edgeBottom = edge.bottom;
	        var edgeLeft = edge.left;
	        var edgeRight = edge.right;

	        var bleed = this.getPhonecaseBleed();
	        var bleedTop = bleed.top;
	        var bleedBottom = bleed.bottom;
	        var bleedLeft = bleed.left;
	        var bleedRight = bleed.right;

	        var x = 0;
	        var y = 0;
	        var width = 0;
	        var height = 0;
	        x = -(sideLeft+edgeLeft+bleedLeft);
	        y = -(sideTop+edgeTop+bleedTop);
	        width = baseWidth + sideLeft + sideRight + edgeLeft + edgeRight + bleedLeft + bleedRight;
	        height = baseHeight + sideTop + sideBottom + edgeTop + edgeBottom + bleedTop + bleedBottom;
	        var px = x / baseWidth;
	        var py = y / baseHeight;
	        var pw = width / baseWidth;
	        var ph = height / baseHeight;

	        object.x = x;
	        object.y = y;
	        object.width = width;
	        object.height = height;
	        object.px = px;
	        object.py = py;
	        object.pw = pw;
	        object.ph = ph;

	        return object;
	    },
	    getPhonecaseInitProjectXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var base = this.getPhonecaseBaseInfoXml();
	        var option = this.getOptionXml();
	        var face = this.getFaceXml();
	        var photoLayer = this.getPhonecasePhotoLayerXml();
	        var elements = this.getPhonecaseInitElemntsXml();
	        var images = this.getImagesXml();

	        ($(base).find('phoneCase')).append(option.firstChild.cloneNode(true));
	        ($(base).find('phoneCase')).append(face.firstChild.cloneNode(true));
	        ($(base).find('face')).append(photoLayer.firstChild.cloneNode(true));
	        ($(base).find('photosLayer')).append(elements.firstChild.cloneNode(true));
	        ($(base).find('project')).append(images.firstChild.cloneNode(true));

	        return __webpack_require__(20).xmlToString(base);
	    },
	    getPhonecaseCurrentProjectXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var base = this.getPhonecaseBaseInfoXml();
	        var option = this.getOptionXml();
	        var face = this.getFaceXml();
	        var photoLayer = this.getPhonecasePhotoLayerXml();
	        var elements = this.getElementsXml();
	        var images = this.getImagesXml();

	        ($(base).find('phoneCase')).append(option.firstChild.cloneNode(true));
	        ($(base).find('phoneCase')).append(face.firstChild.cloneNode(true));
	        ($(base).find('face')).append(photoLayer.firstChild.cloneNode(true));
	        ($(base).find('photosLayer')).append(elements.firstChild.cloneNode(true));
	        ($(base).find('project')).append(images.firstChild.cloneNode(true));

	        return __webpack_require__(20).xmlToString(base);
	    },

	    getPhonecaseInitElemntsXml : function(){
	        var photolayer = this.getPhonecasePhotoLayer();
	        var s = '<elements>';
	        var x = 0;
	        var y = 0;
	        var width = photolayer.width;
	        var height = photolayer.height;
	        var px = x / photolayer.width;
	        var py = y / photolayer.height;
	        var ph = height / photolayer.height;
	        var pw = width / photolayer.width;
	        var rot = 0;
	        var dep = 0;
	        var imageid = '';
	        var imgRot = false;
	        var imgFlip = false;
	        var cropPX = 0,
	            cropPY = 0,
	            cropPW = 1,
	            cropPH = 1;
	        s += '<element type="PhotoElement" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + dep + '" imageid="' + imageid + '" imgRot="' + imgRot + '" imgFlip="' + imgFlip + '" cropLUX="' + cropPX + '" cropLUY="' + cropPY + '" cropRLX="' + (cropPX + cropPW) + '" cropRLY="' + (cropPY + cropPH) + '" />';
	        s += '</elements>';
	        return __webpack_require__(20).stringToXml(s);
	    },

	    getFaceXml:function(){
	        var BaseSize = this.getPhonecaseBaseSize();
	        var baseWidth = BaseSize.width;
	        var baseHeight = BaseSize.height;

	        var side = this.getPhonecaseSide();
	        var sideTop = side.top;
	        var sideBottom = side.bottom;
	        var sideLeft = side.left;
	        var sideRight = side.right;

	        var edge = this.getPhonecaseEdge();
	        var edgeTop = edge.top;
	        var edgeBottom = edge.bottom;
	        var edgeLeft = edge.left;
	        var edgeRight = edge.right;
	        var s='';
	        var projectLength = Store.projectSettings.length;
	        for(var i=0;i<projectLength;i++){
	             var currentProject = Store.projectSettings[i];
	             s += '<face width="'+baseWidth+'" height="'+baseHeight+'" sideLeft="'+sideLeft+'" sideTop="'+sideTop+'" sideRight="'+sideRight+'" sideBottom="'+sideBottom+'" edgeLeft="'+edgeLeft+'" edgeTop="'+edgeTop+'" edgeRight="'+edgeRight+'" edgeBottom="'+edgeBottom+'">';
	             s += '</face>';
	        }
	        return __webpack_require__(20).stringToXml(s);
	    },

	     getPhonecaseContent: function(index) {
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index];
	        var object = {};

	        var baseSize = this.getPhonecaseBaseSize();

	        var baseWidth = baseSize.width;
	        var baseHeight = baseSize.height;

	        var side = this.getPhonecaseSide();
	        var sideTop = side.top;
	        var sideBottom = side.bottom;
	        var sideLeft = side.left;
	        var sideRight = side.right;

	        var edge = this.getPhonecaseEdge();
	        var edgeTop = edge.top;
	        var edgeBottom = edge.bottom;
	        var edgeLeft = edge.left;
	        var edgeRight = edge.right;

	        var bleed = this.getPhonecaseBleed();
	        var bleedTop = bleed.top;
	        var bleedBottom = bleed.bottom;
	        var bleedLeft = bleed.left;
	        var bleedRight = bleed.right;

	        var foreground = this.getPhonecaseForeground();

	        var width = baseWidth+bleedLeft+bleedRight + edgeLeft + edgeRight + sideLeft + sideRight;
	        var height = baseHeight+bleedTop+bleedBottom + edgeTop + edgeBottom + sideTop + sideBottom;

	        var realWidth = foreground.width - foreground.left - foreground.right;
	        var realHeight = foreground.height - foreground.top - foreground.bottom;

	        var ratio = baseWidth / realWidth;
	        var bgWidth = foreground.width * ratio;
	        var bgHeight = foreground.height * ratio;

	        object.bgWidth=bgWidth;
	        object.bgHeight=bgHeight;
	        object.width = width;
	        object.height = height;
	        object.x = foreground.left * ratio - bleedLeft - sideLeft - edgeLeft;
	        object.y = foreground.top * ratio - bleedTop - sideTop - edgeTop;
	        object.bleedTop=bleedTop;
	        object.bleedBottom=bleedBottom;
	        object.bleedLeft=bleedLeft;
	        object.bleedRight=bleedRight;
	        object.sideTop=sideTop;
	        object.sideBottom=sideBottom;
	        object.sideLeft=sideLeft;
	        object.sideRight=sideRight;
	        object.edgeTop=edgeTop;
	        object.edgeBottom=edgeBottom;
	        object.edgeLeft=edgeLeft;
	        object.edgeRight=edgeRight;
	        return object;
	    },

	    //WallArts
	    getWallArtsInitProjectXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var base = this.getBaseInfoXml();
	        var option = this.getOptionXml();
	        var frameBoard = this.getFrameBoardXml();
	        var matteLayer = this.getMatteLayerXml();
	        var photoLayer = this.getPhotoLayerXml();
	        var elements = this.getWallArtsIntiElementXml();
	        var images = this.getImagesXml();

	        ($(base).find('photoFrame')).append(option.firstChild.cloneNode(true));
	        ($(frameBoard).find('frameBoard')).append(matteLayer.firstChild.cloneNode(true));
	        ($(photoLayer).find('photosLayer')).append(elements.firstChild.cloneNode(true));
	        ($(frameBoard).find('frameBoard')).append(photoLayer.firstChild.cloneNode(true));
	        ($(base).find('photoFrame')).append(frameBoard.firstChild.cloneNode(true));
	        ($(base).find('project')).append(images.firstChild.cloneNode(true));

	        return __webpack_require__(20).xmlToString(base);
	    },
	    getWallArtsIntiElementXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var photoLayer = this.getPhotoLayer();

	        var width = photoLayer.width;
	        var height = photoLayer.height;
	        var s = '<elements>' +
	            '<element type="PhotoElement" x="0" y="0" width="' + width + '" height="' + height + '" px="0" py="0" pw="1" ph="1" rot="0" dep="0" imageid="" imgRot="0" imgFlip="false" cropLUX="0" cropLUY="0" cropRLX="1" cropRLY="1" />' +
	            '</elements>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getPrintInitProjectXml: function() {
	        return __webpack_require__(20).xmlToString(this.getPrintInitXml());
	    },
	    getPrintInitXml:function(){

	        var s = '<project schemaVersion="1" createAuthor="web-h5|1.0|1" clientId="web-h5" product="'+Store.baseProject.product+'" productType="'+Store.projectType+'" baseSize="'+Store.baseProject.size+'" basePaper="'+Store.baseProject.paper+'">' +
	            '<guid>'+ Store.projectId +'</guid>' +
	            '<userId>' + Store.userSettings.userId + '</userId>' +
	            '<artisan>' + Store.userSettings.userName + '</artisan>' +
	            '<title><![CDATA[' + Store.title + ']]></title>' +
	            '<description/>' +
	            '<createdDate></createdDate>' +
	            '<updatedDate></updatedDate>' +
	            '<endpointToken></endpointToken>' +
	            '<prints>' +
	            '</prints>' +
	            '<images>' +
	            '</images>' +
	            '</project>';

	        return __webpack_require__(20).stringToXml(s);

	    },
	    getPrintBaseProjectXml:function(){
	        var s = '<project schemaVersion="1" createAuthor="web-h5|1.0|1" clientId="web-h5" product="'+Store.baseProject.product+'" productType="'+Store.projectType+'" baseSize="'+Store.baseProject.size+'" basePaper="'+Store.baseProject.paper+'">' +
	            '<guid>'+ Store.projectId +'</guid>' +
	            '<userId>' + Store.userSettings.userId + '</userId>' +
	            '<artisan>' + Store.userSettings.userName + '</artisan>' +
	            '<title><![CDATA[' + Store.title + ']]></title>' +
	            '<description/>' +
	            '<createdDate></createdDate>' +
	            '<updatedDate></updatedDate>' +
	            '<endpointToken></endpointToken>' +
	            '</project>';

	        return __webpack_require__(20).stringToXml(s);
	    },
	    getPrintProjectXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var base = this.getPrintBaseProjectXml();
	        var content = this.getPrintContentXml();
	        var images = this.getImagesXml();

	        ($(base).find('project')).append(content.firstChild.cloneNode(true));
	        ($(base).find('project')).append(images.firstChild.cloneNode(true));

	        return __webpack_require__(20).xmlToString(base);
	    },
	    getPrintContentXml:function(){

	        var currentProjects = Store.projectSettings;
	        var currentPages = Store.pages;
	        var s="";
	        s+='<prints>';
	        for (var i = 0 ;i <currentPages.length; i++) {
	            var currentCanvas=currentPages[i].canvas;
	            var elememts = currentCanvas.params;
	            var currentProject=currentProjects[i];

	            s+='<print id="'+__webpack_require__(21).guid()+'" quantity="'+currentProject.quantity+'" imageId="'+elememts[0].imageId+'">';
	                s+='<spec version="'+__webpack_require__(18).getVersion()+'">';
	                    s+='<option id="paper" value="'+currentProject.paper+'"/>';
	                    s+='<option id="size" value="'+currentProject.size+'"/>';
	                    if(typeof(currentProject.surfaceType) != 'undefined' && currentProject.surfaceType !== 'undefined'){
	                        s+='<option id="surfaceType" value="'+currentProject.surfaceType+'"/>';
	                    }

	                s+='</spec>';
	                var baseSize=this.getPrintBaseSize({'size':currentProject.size,'rotated':currentProject.rotated});
	                var bleed=this.getPrintBleed(currentProject.size);
	                var borderLength = currentPages[i].canvas.borderLength ? currentPages[i].canvas.borderLength : 0;
	                var borderColor = currentPages[i].canvas.borderColor ? currentPages[i].canvas.borderColor : 'none';
	                s+='<content id="'+__webpack_require__(21).guid()+'" width="'+baseSize.width+'" height="'+baseSize.height+'" bleedTop="'+bleed.top+'" bleedBottom="'+bleed.bottom+'" bleedLeft="'+bleed.left+'" bleedRight="'+bleed.right+'" borderLength="'+borderLength+'" borderColor="'+borderColor+'">';
	                    s+='<elements>';
	                        var x = elememts[0].x;
	                        var y = elememts[0].y;
	                        var width = elememts[0].width;
	                        var height = elememts[0].height;
	                        var px = x / currentCanvas.oriWidth;
	                        var py = y / currentCanvas.oriHeight;
	                        var ph = height / currentCanvas.oriHeight;
	                        var pw = width / currentCanvas.oriWidth;
	                        var rot = elememts[0].rotate;
	                        var dep = elememts[0].dep;
	                        var imageid = elememts[0].imageId;
	                        var imgRot = elememts[0].imageRotate;
	                        var imgFlip = false;
	                        var cropPX = elememts[0].cropPX,
	                            cropPY = elememts[0].cropPY,
	                            cropPW = elememts[0].cropPW,
	                            cropPH = elememts[0].cropPH;
	                        if(elememts[0].elType==='text'){

	                            s += '<element type="TextElement" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + dep + '" color="' + elememts[0].fontColor + '" fontSize="' + parseFloat(elememts[0].fontSize) / currentCanvas.oriHeight + '" fontFamily="' + encodeURIComponent(elememts[0].fontFamily) + '" fontWeight="' + elememts[0].fontWeight + '" textAlign="' + elememts[0].textAlign + '" ><![CDATA[' + encodeURIComponent(elememts[0].text) + ']]></element>';

	                        }else if(elememts[0].elType==='logo'){

	                            s += '<element type="LogoElement" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + dep + '" imageid="' + imageid + '" imgRot="' + imgRot + '" imgFlip="' + imgFlip + '" cropLUX="' + cropPX + '" cropLUY="' + cropPY + '" cropRLX="' + (cropPX + cropPW) + '" cropRLY="' + (cropPY + cropPH) + '" />';

	                        }else if(elememts[0].elType==='image'){

	                            s += '<element type="PhotoElement" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + dep + '" imageid="' + imageid + '" imgRot="' + imgRot + '" imgFlip="' + imgFlip + '" cropLUX="' + cropPX + '" cropLUY="' + cropPY + '" cropRLX="' + (cropPX + cropPW) + '" cropRLY="' + (cropPY + cropPH) + '" />';
	                        }

	                    s+='</elements>';
	                s+='</content>';
	            s+='</print>';
	        };
	        s+='</prints>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getRemarkProjectXml : function(){
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var base = this.getPrintBaseProjectXml();
	        var content = this.getRemarkContentXml();
	        var images = this.getImagesXml();

	        ($(base).find('project')).append(content.firstChild.cloneNode(true));
	        ($(base).find('project')).append(images.firstChild.cloneNode(true));

	        return __webpack_require__(20).xmlToString(base);
	    },
	    getRemarkContentXml : function(){
	        var currentProjects = Store.projectSettings;
	        var currentPages = Store.pages;
	        var remarkPages = [];
	        for(var i=0;i<currentProjects.length;i++){
	            if(Store.selectedSize){
	                if(Store.selectedPaper){
	                    if(currentProjects[i].size===Store.selectedSize && currentProjects[i].paper===Store.selectedPaper){
	                        remarkPages.push(currentPages[i]);
	                        remarkPages[remarkPages.length-1].oid = i;
	                    }
	                }else{
	                    if(currentProjects[i].size===Store.selectedSize){
	                        remarkPages.push(currentPages[i]);
	                        remarkPages[remarkPages.length-1].oid = i;
	                    }
	                }
	            }else{
	                if(Store.selectedPaper){
	                    if(currentProjects[i].paper===Store.selectedPaper){
	                        remarkPages.push(currentPages[i]);
	                        remarkPages[remarkPages.length-1].oid = i;
	                    }
	                }
	            }
	        }
	        if(remarkPages.length===0){
	            remarkPages = currentPages;
	            for(var i=0;i<remarkPages.length;i++){
	                remarkPages[i].oid = i;
	            }
	        }
	        var s="";
	        s+='<prints>';
	        for (var i = 0 ;i <remarkPages.length; i++) {
	            var currentCanvas=remarkPages[i].canvas;
	            var elememts = currentCanvas.params;
	            var currentProject=currentProjects[remarkPages[i].oid];

	            s+='<print id="'+remarkPages[i].guid+'" quantity="'+currentProject.quantity+'" imageId="'+elememts[0].imageId+'">';
	                s+='<spec version="'+__webpack_require__(18).getVersion()+'">';
	                    s+='<option id="paper" value="'+currentProject.paper+'"/>';
	                    s+='<option id="size" value="'+currentProject.size+'"/>';
	                    if(typeof(currentProject.surfaceType) != 'undefined' && currentProject.surfaceType !== 'undefined'){
	                        s+='<option id="surfaceType" value="'+currentProject.surfaceType+'"/>';
	                    }
	                s+='</spec>';
	                var baseSize=this.getPrintBaseSize({'size':currentProject.size,'rotated':currentProject.rotated});
	                var bleed=this.getPrintBleed(currentProject.size);
	                var borderLength = currentPages[i].canvas.borderLength ? currentPages[i].canvas.borderLength : 0;
	                var borderColor = currentPages[i].canvas.borderColor ? currentPages[i].canvas.borderColor : 'none';
	                s+='<content id="'+currentCanvas.guid+'" width="'+baseSize.width+'" height="'+baseSize.height+'" bleedTop="'+bleed.top+'" bleedBottom="'+bleed.bottom+'" bleedLeft="'+bleed.left+'" bleedRight="'+bleed.right+'" borderLength="'+borderLength+'" borderColor="'+borderColor+'">';
	                    s+='<elements>';
	                        var x = elememts[0].x;
	                        var y = elememts[0].y;
	                        var width = elememts[0].width;
	                        var height = elememts[0].height;
	                        var px = x / currentCanvas.oriWidth;
	                        var py = y / currentCanvas.oriHeight;
	                        var ph = height / currentCanvas.oriHeight;
	                        var pw = width / currentCanvas.oriWidth;
	                        var rot = elememts[0].rotate;
	                        var dep = elememts[0].dep;
	                        var imageid = elememts[0].imageId;
	                        var imgRot = elememts[0].imageRotate;
	                        var imgFlip = false;
	                        var cropPX = elememts[0].cropPX,
	                            cropPY = elememts[0].cropPY,
	                            cropPW = elememts[0].cropPW,
	                            cropPH = elememts[0].cropPH;
	                        if(elememts[0].elType==='text'){

	                            s += '<element type="TextElement" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + dep + '" color="' + elememts[0].fontColor + '" fontSize="' + parseFloat(elememts[0].fontSize) / currentCanvas.oriHeight + '" fontFamily="' + encodeURIComponent(elememts[0].fontFamily) + '" fontWeight="' + elememts[0].fontWeight + '" textAlign="' + elememts[0].textAlign + '" ><![CDATA[' + encodeURIComponent(elememts[0].text) + ']]></element>';

	                        }else if(elememts[0].elType==='logo'){

	                            s += '<element type="LogoElement" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + dep + '" imageid="' + imageid + '" imgRot="' + imgRot + '" imgFlip="' + imgFlip + '" cropLUX="' + cropPX + '" cropLUY="' + cropPY + '" cropRLX="' + (cropPX + cropPW) + '" cropRLY="' + (cropPY + cropPH) + '" />';

	                        }else if(elememts[0].elType==='image'){

	                            s += '<element type="PhotoElement" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + dep + '" imageid="' + imageid + '" imgRot="' + imgRot + '" imgFlip="' + imgFlip + '" cropLUX="' + cropPX + '" cropLUY="' + cropPY + '" cropRLX="' + (cropPX + cropPW) + '" cropRLY="' + (cropPY + cropPH) + '" />';
	                        }

	                    s+='</elements>';
	                s+='</content>';
	            s+='</print>';
	        };
	        s+='</prints>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getPrintBaseSize:function(param){
	        var size,rotated;
	        if(!param.size){
	            size=Store.baseProject.size;
	        }else{
	            size=param.size;
	        }
	        if(!param.rotated){
	            rotated=false;
	        }else{
	            rotated=param.rotated;
	        }
	        var sizeObject = __webpack_require__(18).getParameter('printsBaseSize',[{key:'product',value:'print'},{key:'size',value:size}]);
	        var object = {};
	        if (rotated) {
	            object.width = sizeObject.heightInInch * __webpack_require__(18).getDPI();
	            object.height = sizeObject.widthInInch * __webpack_require__(18).getDPI();
	        } else {
	            object.width = sizeObject.widthInInch * __webpack_require__(18).getDPI();
	            object.height = sizeObject.heightInInch * __webpack_require__(18).getDPI();
	        }
	        return object;
	    },
	    getPrintBleed: function(size) {
	        if(!size){
	            size=Store.baseProject.size;
	        }
	        var sizeObject = __webpack_require__(18).getParameter('bleed', [{ key: 'size', value: size }]);
	        var object = {};
	        object.top = parseInt(sizeObject.left);
	        object.bottom = parseInt(sizeObject.right);
	        object.left = parseInt(sizeObject.top);
	        object.right = parseInt(sizeObject.bottom);
	        return object;
	    },


	    //  cards 产品
	    getCardSpread: function(index) {
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index];
	        var object = {};

	        var baseSize = this.getCardBaseSize();

	        var baseWidth = baseSize.width;
	        var baseHeight = baseSize.height;

	        var bleed = this.getPageBleed();
	        var bleedTop = bleed.top;
	        var bleedBottom = bleed.bottom;
	        var bleedLeft = bleed.left;
	        var bleedRight = bleed.right;

	        var width = baseWidth+bleedLeft+bleedRight;
	        var height = baseHeight+bleedTop+bleedBottom;

	        var object={};
	        object.width=width;
	        object.height=height;
	        object.bleedTop=bleedTop;
	        object.bleedBottom=bleedBottom;
	        object.bleedLeft=bleedLeft;
	        object.bleedRight=bleedRight;

	        return object;
	    },
	    getCardBaseSize: function(index) {
	         if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index];
	        var product = currentProject.product;
	        var size = currentProject.size;
	        var orientation = currentProject.orientation;
	        var sizeObject = __webpack_require__(18).getParameter('baseSize',[{key:'product',value:product},{key:'size',value:size},{key:'orientation',value:orientation}]);
	        var object = {};

	        object.width = sizeObject.widthInInch * __webpack_require__(18).getDPI();
	        object.height = sizeObject.heightInInch * __webpack_require__(18).getDPI();

	        return object;
	    },
	    getCardCurrentProjectXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var base = this.getCardsBaseProjectXml();
	        var content = this.getCardsContentXml();
	        var images = this.getImagesXml();
	        var decorations = this.getDecorationXml();

	        ($(base).find('project')).append(content.firstChild.cloneNode(true));
	        ($(base).find('project')).append(images.firstChild.cloneNode(true));
	        ($(base).find('project')).append(decorations.firstChild.cloneNode(true));

	        return __webpack_require__(20).xmlToString(base);
	    },
	    getCardsBaseProjectXml: function() {
	        if(Store.isPortal){Store.deletedPhoto = 'false'}
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var product = currentProject.product;
	        var s = '<project schemaVersion="1" clientId="web-h5" productType="'+ currentProject.product +'">' +
	                '<guid>' + Store.projectId + '</guid>' +
	                '<userId>' + Store.userSettings.userId + '</userId>' +
	                '<artisan>' + Store.userSettings.userName + '</artisan>' +
	                '<title><![CDATA[' + Store.title + ']]></title>' +
	                '<description/>' +
	                '<createdDate></createdDate>' +
	                '<updatedDate></updatedDate>' +
	                '<deletedPhoto>'+ Store.deletedPhoto +'</deletedPhoto>'+
	                '</project>';

	        return __webpack_require__(20).stringToXml(s);
	    },
	    getCardsContentXml: function() {
	        var projectLength = Store.projectSettings.length;
	        var s = '<card id="'+ Store.cardId +'">';
	        for( var i =0; i < projectLength; i++ ) {
	            var currentProject = Store.projectSettings[i];
	            var option = this.getOptionXml(i);
	            s += __webpack_require__(20).xmlToString(option);
	            var contentXml = this.getCardContentXml(i);
	            s += __webpack_require__(20).xmlToString(contentXml);
	            var cardSetting = this.getCardSettingXml(i);
	            s += __webpack_require__(20).xmlToString(cardSetting);
	        }
	        s += '</card>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getCardSettingXml: function(index) {
	         var s = ' <cardSetting >';
	             s +=  '<styleId value="'+ Store.cardSetting.styleId +'"/>';
	             s +=  '<festival value="'+ Store.cardSetting.festival +'"/>';
	             s +=  '</cardSetting>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getCardContentXml: function(index) {
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        };
	        var currentProject = Store.projectSettings[index];
	        var pages = Store.pages;
	        var bleed = this.getPageBleed();
	        var s = '<spreads>';
	        var content = this.getCardSpread(index);
	        for(var j =0; j < pages.length; j++ ){
	            var currentPage = pages[j];
	            s += '<spread id="'+ currentPage.id +'" width="'+ currentPage.width +'" height="'+ currentPage.height +'" bleedTop="'+ bleed.top +'" bleedBottom="'+ bleed.bottom +'" bleedLeft="'+ bleed.left +'" bleedRight="'+ bleed.right +'" type="'+ currentPage.type +'" month="0" year="0" tplGuid="'+ currentPage.tplGuid +'" pageNumber="'+ currentPage.pageNumber +'" styleId="'+ currentPage.styleId +'" styleItemId="'+ currentPage.styleItemId +'" w="'+ currentPage.width +'" h="'+ currentPage.height +'">'
	            var elements = this.getCardElementsXml(j);
	            s += __webpack_require__(20).xmlToString(elements);
	            s+='</spread>';
	        }
	        s += '</spreads>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getCardElementsXml: function(index) {
	        if(!index){
	            index=Store.currentSelectProjectIndex;
	        }
	        var currentProject = Store.projectSettings[index];
	        var currentCanvas = Store.pages[index].canvas;
	        var elememts = currentCanvas.params;
	        var s = '<elements>';

	        for (var i = 0; i < elememts.length; i++) {

	            var x = elememts[i].x;
	            var y = elememts[i].y;
	            var width = elememts[i].width;
	            var height = elememts[i].height;
	            var px = x / currentCanvas.oriWidth;
	            var py = y / currentCanvas.oriHeight;
	            var ph = height / currentCanvas.oriHeight;
	            var pw = width / currentCanvas.oriWidth;
	            var rot = elememts[i].rotate;
	            var dep = elememts[i].dep;
	            var imageid = elememts[i].imageId;
	            var imgRot = elememts[i].imageRotate;
	            var imgFlip = false;
	            var cropPX = elememts[i].cropPX,
	                cropPY = elememts[i].cropPY,
	                cropPW = elememts[i].cropPW,
	                cropPH = elememts[i].cropPH;
	            var decorationid = elememts[i].decorationid;
	            var decorationtype = elememts[i].decorationtype;
	            var styleGuid = elememts[i].styleGuid;
	            var styleId = elememts[i].styleId;
	            var styleItemId = elememts[i].styleItemId;
	            var styleImageId = elememts[i].styleImageId;
	            var isFamilyName = elememts[i].isFamilyName || "false";
	            var textAlign = elememts[i].textAlign || "left";
	            var textVAlign = elememts[i].textVAlign || "top";
	            var lineSpacing = elememts[i].lineSpacing || "1";
	            var fontColor = elememts[i].fontColor;
	                fontColor = (typeof(fontColor) == 'string' && fontColor.indexOf('#') > -1)?__webpack_require__(7).hexToDec(fontColor):fontColor;

	            var addtionalAttrKeys = ['tagName','tagType','mandatory','constant','isEdit','isDisableRemind','order'];
	            var addtionalAttrValues = [];
	            addtionalAttrKeys.forEach(function(item){
	                if(item in elememts[i] && ((typeof elememts[i][item]) != 'undefined') &&  elememts[i][item] != 'undefined'){
	                    addtionalAttrValues.push(' ' + item + '="' + elememts[i][item] + '"');
	                }
	            });
	            var addtionalAttrString = addtionalAttrValues.join('');

	            if(elememts[i].elType==='style'){

	                s += '<element type="CalendarStyleElement" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + dep + '" styleId ="' + styleId + '" styleItemId ="'+ styleItemId +'" styleGuid ="'+ styleGuid +'" imageId="'+ styleImageId +'"  />';

	            }else if(elememts[i].elType==='text'){

	                s += '<element type="TextElement" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + dep + '" color="' + fontColor + '" fontSize="' + parseFloat(elememts[i].fontSize) / currentCanvas.oriHeight + '" fontFamily="' + encodeURIComponent(elememts[i].fontFamily) + '" fontWeight="' + elememts[i].fontWeight + '" textAlign="' + textAlign + '" textVAlign="' + textVAlign+ '" lineSpacing="' + lineSpacing + '" isFamilyName="'+ isFamilyName +'"'+ addtionalAttrString +' ><![CDATA[' + encodeURIComponent(elememts[i].text) + ']]></element>';

	            }else if(elememts[i].elType==='image'){

	                s += '<element type="PhotoElement" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + dep + '" imageid="' + imageid + '" imgRot="' + imgRot + '" imgFlip="' + imgFlip + '" cropLUX="' + cropPX + '" cropLUY="' + cropPY + '" cropRLX="' + (cropPX + cropPW) + '" cropRLY="' + (cropPY + cropPH) + '" />';
	            }else if(elememts[i].elType==='decoration'){
	                if(!isNaN(x)&&!isNaN(y)&&!isNaN(width)&&!isNaN(height))
	                s += '<element type="DecorationElement" x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + dep + '" decorationid="' + decorationid + '" decorationtype="' + decorationtype + '" />';
	            }
	        }
	        s += '</elements>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getDecorationXml: function() {
	        var s = '<decorations>';
	        for( var i = 0; i < Store.allDecorationList.length; i++ ){
	            if( Store.allDecorationList[i].count ){
	                var item = Store.allDecorationList[i];
	                s += '<decoration guid="'+ item.guid +'" name="'+ item.name +'" type="'+ item.type +'" count="'+ item.count +'" displayRatio="'+ item.displayRatio +'" width="'+ item.width +'" height="'+ item.height +'"/>'
	            }
	        };
	        s += '</decorations>';
	        return __webpack_require__(20).stringToXml(s);
	    },
	    getCardInitXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        Store.cardId = __webpack_require__(21).guid();
	        var s = '<project schemaVersion="1" clientId="web-h5" productType="'+ currentProject.product +'">' +
	                '<guid>' + Store.projectId + '</guid>' +
	                '<userId>' + Store.userSettings.userId + '</userId>' +
	                '<artisan>' + Store.userSettings.userName + '</artisan>' +
	                '<title><![CDATA[' + Store.title + ']]></title>' +
	                '<description/>' +
	                '<createdDate></createdDate>' +
	                '<updatedDate></updatedDate>' +
	                '<deletedPhoto>false</deletedPhoto>'+
	                '<card id="'+ Store.cardId +'">' +
	                    '<spec version="1.0">' +
	                      '<option id="size" value="'+ currentProject.size +'"/>' +
	                      '<option id="paper" value="'+ currentProject.paper +'"/>' +
	                      '<option id="product" value="'+ currentProject.product +'"/>' +
	                      '<option id="orientation" value="'+ currentProject.orientation +'"/>' +
	                      '<option id="trim" value="'+ currentProject.trim +'"/>' +
	                    '</spec>'
	        var contentString = this.getCardContentInitString()
	        s += contentString ;
	        s += '<cardSetting>' +
	                '<styleId value="'+ Store.styleId +'"/>' +
	                '<festival value="'+ Store.festival +'"/>' +
	             '</cardSetting>' +
	             '</card>' +
	            '<images></images>'+
	            '<decorations></decorations>' +
	            '</project>';
	        return s;
	    },
	    getCardContentInitString: function() {
	        var product = Store.projectSettings[Store.currentSelectProjectIndex].product;
	        var spread = this.getCardSpread();
	        var spread = __webpack_require__(19).getCardSpread();
	        var orientation = Store.projectSettings[Store.selectedIdx].orientation;
	        var product = Store.projectSettings[Store.selectedIdx].product;
	        var coverWidth = product === "FD" && orientation=="PO"?spread.width/2:spread.width;
	        var coverHeight = product === "FD" && orientation=="LA"?spread.height/2:spread.height;
	        var s = '<spreads>';
	        s += '<spread id="'+__webpack_require__(21).guid()+'" width="'+ coverWidth +'" height="'+ coverHeight +'" bleedTop="'+ spread.bleedTop +'" bleedBottom="'+ spread.bleedBottom +'" bleedLeft="'+ spread.bleedLeft +'" bleedRight="'+ spread.bleedRight +'" type="frontPage" month="0" year="0" tplGuid="null" pageNumber="0" styleId="'+ Store.styleId +'" styleItemId="0" w="'+ coverWidth +'" h="'+ coverHeight +'">' +
	                '<elements>' +
	                    '<element type="CalendarStyleElement" x="0" y="0" width="'+ coverWidth +'" height="'+ coverHeight +'" px="0" py="0" pw="1" ph="1" rot="0" dep="-999" styleId="'+ Store.styleId +'" styleItemId="0" styleGuid="'+ Store.styleGuid +'" imageId="0" />'+
	                '</elements>' +
	              '</spread>' +
	              '<spread id="'+__webpack_require__(21).guid()+'" width="'+ coverWidth +'" height="'+ coverHeight +'" bleedTop="'+ spread.bleedTop +'" bleedBottom="'+ spread.bleedBottom +'" bleedLeft="'+ spread.bleedLeft +'" bleedRight="'+ spread.bleedRight +'" type="backPage" month="0" year="0" tplGuid="null" pageNumber="1" styleId="'+ Store.styleId +'" styleItemId="1" w="'+ coverWidth +'" h="'+ coverHeight +'">' +
	                '<elements>' +
	                    '<element type="CalendarStyleElement" x="0" y="0" width="'+ coverWidth +'" height="'+ coverHeight +'" px="0" py="0" pw="1" ph="1" rot="0" dep="-999" styleId="'+ Store.styleId +'" styleItemId="1" styleGuid="'+ Store.styleGuid +'" imageId="1" />'+
	                '</elements>' +
	              '</spread>'
	        if( product === "FD" ){
	            s += '<spread id="'+__webpack_require__(21).guid()+'" width="'+ spread.width +'" height="'+ spread.height +'" bleedTop="'+ spread.bleedTop +'" bleedBottom="'+ spread.bleedBottom +'" bleedLeft="'+ spread.bleedLeft +'" bleedRight="'+ spread.bleedRight +'" type="insidePage" month="0" year="0" tplGuid="null" pageNumber="2" styleId="'+ Store.styleId +'" styleItemId="2" w="'+ spread.width +'" h="'+ spread.height +'">' +
	                    '<elements>' +
	                    '</elements>' +
	                  '</spread>'
	        }
	        s += '</spreads>';
	        return s;
	    },
	    getPadcaseBaseInfoXml:function(){
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var product = currentProject.product;
	        var s = '<project schemaVersion="2.0" createAuthor="web-h5|1.0|1" clientId="web-h5" product="'+Store.product+'" productType="'+Store.projectType+'">' +
	            '<guid>' + Store.projectId + '</guid>' +
	            '<userId>' + Store.userSettings.userId + '</userId>' +
	            '<artisan>' + Store.userSettings.userName + '</artisan>' +
	            '<title><![CDATA[' + Store.title + ']]></title>' +
	            '<description/>' +
	            '<createdDate></createdDate>' +
	            '<updatedDate></updatedDate>' +
	            '<endpointToken></endpointToken>' +
	            '<padCase>' +
	            '</padCase>' +
	            '</project>';

	        return __webpack_require__(20).stringToXml(s);
	    },
	    getPadcaseInitProjectXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var base = this.getPadcaseBaseInfoXml();
	        var option = this.getOptionXml();
	        var face = this.getFaceXml();
	        var photoLayer = this.getPhonecasePhotoLayerXml();
	        var elements = this.getPhonecaseInitElemntsXml();
	        var images = this.getImagesXml();

	        ($(base).find('padCase')).append(option.firstChild.cloneNode(true));
	        ($(base).find('padCase')).append(face.firstChild.cloneNode(true));
	        ($(base).find('face')).append(photoLayer.firstChild.cloneNode(true));
	        ($(base).find('photosLayer')).append(elements.firstChild.cloneNode(true));
	        ($(base).find('project')).append(images.firstChild.cloneNode(true));

	        return __webpack_require__(20).xmlToString(base);
	    },
	    getPadcaseCurrentProjectXml: function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var base = this.getPadcaseBaseInfoXml();
	        var option = this.getOptionXml();
	        var face = this.getFaceXml();
	        var photoLayer = this.getPhonecasePhotoLayerXml();
	        var elements = this.getElementsXml();
	        var images = this.getImagesXml();

	        ($(base).find('padCase')).append(option.firstChild.cloneNode(true));
	        ($(base).find('padCase')).append(face.firstChild.cloneNode(true));
	        ($(base).find('face')).append(photoLayer.firstChild.cloneNode(true));
	        ($(base).find('photosLayer')).append(elements.firstChild.cloneNode(true));
	        ($(base).find('project')).append(images.firstChild.cloneNode(true));

	        return __webpack_require__(20).xmlToString(base);
	    },
	    // 获取当前项目的projectSettings，如果当前项目不存在，获取baseProject的settings
	    getProjectSettings: function() {
	        var projectSettings = {};
	        var optionIds = __webpack_require__(18).getOptionIds();
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];

	        if(!currentProject) {
	            currentProject = Store.baseProject;
	        }

	        var projectSettingKeys = Object.keys(currentProject).filter(function(projectKey) {
	            return optionIds.some(function(optionId) {
	                return projectKey === optionId;
	            });
	        });

	        projectSettingKeys.forEach(function(settingKey) {
	            projectSettings[settingKey] = currentProject[settingKey];
	        });

	        return projectSettings;
	    },
	    // 获取当前项目的paramsList
	    getParamsList: function() {
	        var projectSettings = this.getProjectSettings();

	        return Object.keys(projectSettings).map(function(settingKey) {
	            return {
	                key: settingKey,
	                value: projectSettings[settingKey]
	            }
	        });
	    },
	    getSizedBgBorderParams: function(canvasId) {
	        var canvasDom = document.getElementById(canvasId);
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	        var foreground = currentCanvas.foreground;
	        var oriBgWidth = currentCanvas.oriBgWidth;
	        var oriBgHeight = currentCanvas.oriBgHeight;
	        var oriWidth = currentCanvas.oriWidth;
	        var oriHeight = currentCanvas.oriHeight;
	        var ratio = canvasDom.width / oriBgWidth;
	        var replaceX = Math.floor(foreground.left * ratio);
	        var replaceY = Math.floor(foreground.top * ratio);
	        var replaceWidth = Math.floor(oriWidth * ratio);
	        var replaceHeight = Math.floor(oriHeight * ratio);

	        return {
	            x: replaceX,
	            y: replaceY,
	            width: replaceWidth,
	            height: replaceHeight
	        }
	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {module.exports={

	    xmlToString:function(doc){
	    	
	           
	        return  new XMLSerializer().serializeToString(doc);
	       
	    },
	    stringToXml:function(s){
	        /*if("ActiveXObject" in window){
	            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	            xmlDoc.async = false;
	            xmlDoc.loadXML(s);
	        }else{
	            parser = new DOMParser();
	            xmlDoc = parser.parseFromString( s,"text/xml") ;
	        }*/

	        var xml = $.parseXML(s); 
	        return xml;
	    }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {module.exports = {
		getIsShowProjectInfoView:function(){
			var bool=false;
			if(Store.checkFailed){
				return false;
			}
			if(Store.projectInfo.isInCart||Store.projectInfo.isOrdered||Store.projectInfo.isInMarket){
				bool = true;
			}
			if(Store.fromCart&&Store.projectInfo.isInCart&&!Store.projectInfo.isOrdered){
				bool = false;
			}
			return bool;
		},
		getProjectInfoViewText:function(){
			if(!Store.projectInfo.isInMarket){
				return 'Your current project was already ordered or added to cart. You need to save your additional changes into a new project.';
			}else{
				return 'This item was already posted to sale. You need to save your additional changes into a new project.';
			}
		},
		getProjectOrderText: function(){
			if(!Store.projectInfo.isOrdered){
				return 'Please select at least one image before placing your order.';
			}
		},
		checkInvalid:function(value){
	    	return(/^[a-zA-Z 0-9\d_\s\-]+$/.test(value));
	        //return(/^[A-Za-z0-9_@ \-`~!#$$%^&*\(\)+=\]\[\{\}|\\;':",.\>\<?)\/]+$/.test(value));
		},
		guid:function() {
	    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	        return v.toString(16);
	    });
	  },
	  getQueryString: function (parameters) {
	    var qs = '';
	    for(var key in parameters) {
	      var value = parameters[key];
	      qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
	    }
	    if (qs.length > 0){
	      qs = qs.substring(0, qs.length-1); //chop off last "&"
	    }
	    return qs;
	  },
	  getEncImgId: function (imageId) {
	    return Store.imageList.filter(function (image) {
	      return image.id === imageId;
	    })[0].encImgId;
	  },
	  isIncludeDisableOption:function(){

	  	var SpecManage = __webpack_require__(18);
	    var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	    var product = currentProject.product;
	    var tempOptions = SpecManage.getDisableOptionValues(product);
	    var disableOptionValues=[];
	    tempOptions.forEach(function(value,index,array){
	      disableOptionValues=disableOptionValues.concat(value.split(','));
	　　});
	    for(var value in tempOptions){
	      console.log(value);
	    }
	    var bool=false;
	    for(var key in currentProject){
	      if(disableOptionValues.indexOf(currentProject[key])!=-1){
	        return true;
	      }
	    }
	    return false;
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {module.exports = {
	    initProjectXml: function() {
	        var specData = __webpack_require__(23).analyseSpec({ product: Store.projectSettings[Store.currentSelectProjectIndex].product, size: Store.projectSettings[Store.currentSelectProjectIndex].size });
	        console.log(specData);
	        var base = specData.base;
	        var background = specData.background;
	        var logo = specData.logo;
	        var xml = '<project clientId="web-h5" createAuthor="web-h5|1.0|1">' +
	            '<guid>' + Store.projectId + '</guid>' +
	            '<userId>' + Store.userSettings.userId + '</userId>' +
	            '<artisan/>' +
	            '<title><![CDATA[' + Store.title + ']]></title>' +
	            '<description/>' +
	            '<createdDate/>' +
	            '<updatedDate></updatedDate>' +
	            '<tshirts>' +
	            '<tshirt id="tshirt-1">' +
	            '<spec version="1.0">' +
	            '<option id="product" value="' + Store.projectSettings[Store.currentSelectProjectIndex].product + '" />' +
	            '<option id="color" value="' + Store.projectSettings[Store.currentSelectProjectIndex].color + '" />' +
	            '<option id="size" value="' + Store.projectSettings[Store.currentSelectProjectIndex].size + '" />' +
	            '<option id="measure" value="' + Store.projectSettings[Store.currentSelectProjectIndex].measure + '" />' +
	            '</spec>' +
	            '<tshirtSetting>' +
	            '<setting id="count" value="1" />' +
	            '<setting id="pages" value="true,false"/>'+
	            '</tshirtSetting>' +
	            '<contents>' +
	            '<content type="front" width="' + base.width + '" hight="' + base.height + '">' +
	            '<elements>' +
	                '<element type="PhotoElement" elType="image" x="0" y="0" width="' + base.width + '" height="' + base.height + '" px="0" py="0" pw="1" ph="1" rot="0" dep="0" imageid="" imgRot="0" imgFlip="false" cropLUX="0" cropLUY="0" cropRLX="1" cropRLY="1" />' +
	            /*'<element type="LogoElement"  elType="logo" x="' + logo.x + '" y="' + logo.y + '" width="' + logo.width + '" height="' + logo.height + '" px="' + logo.x / base.width + '" py="' + logo.y / base.height + '" pw="' + logo.width / base.width + '" ph="' + logo.height / base.height + '" rot="0" dep="1" imageid="" imgRot="0" imgFlip="false" cropLUX="0" cropLUY="0" cropRLX="1" cropRLY="1" />' +*/
	            '</elements>' +
	            '</content>' +
	            '<content type="back" width="' + base.width + '" hight="' + base.height + '">' +
	            '<elements>' +
	            /*'<element type="PhotoElement" elType="image" x="0" y="0" width="' + base.width + '" height="' + base.height + '" px="0" py="0" pw="1" ph="1" rot="0" dep="0" imageid="" imgRot="0" imgFlip="false" cropLUX="0" cropLUY="0" cropRLX="1" cropRLY="1" />' +*/
	            '</elements>' +
	            '</content>' +
	            '</contents>' +
	            '</tshirt>' +
	            '</tshirts>' +
	            '<images/>' +
	            '</project>';
	        return xml;
	    },
	    getCurrentProjectXml: function() {
	        __webpack_require__(24).syncProjectData();
	        console.log(Store.currentSelectProjectIndex);
	        console.log(Store.projectSettings[Store.currentSelectProjectIndex].product);
	        console.log(Store.projectSettings[Store.currentSelectProjectIndex].size);
	        var specData = __webpack_require__(23).analyseSpec({ product: Store.projectSettings[Store.currentSelectProjectIndex].product, size: Store.projectSettings[Store.currentSelectProjectIndex].size });
	        console.log(specData);
	        var base = specData.base;
	        var background = specData.background;
	        var logo = specData.logo;
	        var xml = '<project clientId="web-h5" createAuthor="web-h5|1.0|1">' +
	            '<guid>' + Store.projectId + '</guid>' +
	            '<userId>' + Store.userSettings.userId + '</userId>' +
	            '<artisan/>' +
	            '<title><![CDATA[' + Store.title + ']]></title>' +
	            '<description/>' +
	            '<createdDate/>' +
	            '<updatedDate></updatedDate>' +
	            '<tshirts>';

	        var projects = Store.projectSettings;
	        for (var i = 0; i < projects.length; i++) {
	            var projectItem = projects[i];
	            xml += '<tshirt id="tshirt-' + i + '">' +
	                '<spec version="1.0">' +
	                '<option id="product" value="' + projectItem.product + '" />' +
	                '<option id="color" value="' + projectItem.color + '" />' +
	                '<option id="size" value="' + projectItem.size + '" />' +
	                '<option id="measure" value="' + projectItem.measure + '" />' +
	                '</spec>' +
	                '<tshirtSetting>' +
	                '<setting id="count" value="' + projectItem.count + '" />';
	            var hasFront=false;
	            var frontPage=Store.projects[i].pages[0];
	            for (var u = 0; u < frontPage.canvas.params.length; u++) {
	                //if (backPage.canvas.elements[u] != undefined) {
	                    var ele = frontPage.canvas.params[u];
	                    if (ele.elType === 'logo' || ele.elType === 'image') {
	                        if(ele.imageId!=""){
	                            hasFront=true;
	                        }
	                    }else if(ele.elType === 'text'){
	                        hasFront=true;
	                    }
	                //}
	            }
	            var hasBack=false;
	            var backPage=Store.projects[i].pages[1];
	            for (var u = 0; u < backPage.canvas.params.length; u++) {
	                //if (backPage.canvas.elements[u] != undefined) {
	                    var ele = backPage.canvas.params[u];
	                    if (ele.elType === 'logo' || ele.elType === 'image') {
	                        if(ele.imageId!=""){
	                            hasBack=true;
	                        }
	                    }else if(ele.elType === 'text'){
	                        hasBack=true;
	                    }
	                //}
	            }
	            xml += '<setting id="pages" value="' + hasFront + ','+hasBack+'" />';
	            xml +='</tshirtSetting>' +
	                '<contents>';
	            var pages = Store.projects[i].pages;
	            for (var k = 0; k < pages.length; k++) {
	                var type = (k === 0) ? 'front' : 'back';
	                xml += '<content type="' + type + '" width="' + base.width + '" hight="' + base.height + '">';
	                var content = pages[k].canvas;
	                xml += '<elements>';
	                for (var j = 0; j < content.params.length; j++) {

	                    //if (content.elements[j] == undefined) {
	                        console.log('spread which not inited');
	                        var el = content.params[j];

	                        var W = el.width,
	                            H = el.height,
	                            OX = el.x,
	                            OY = el.y;

	                        var px = OX / content.oriWidth,
	                            py = OY / content.oriHeight,
	                            pw = W / content.oriWidth,
	                            ph = H / content.oriHeight,
	                            rot = el.rotate;

	                        if (content.params[j].elType === 'logo' || content.params[j].elType === 'image') {
	                            var cropPX = el.cropPX,
	                                cropPY = el.cropPY,
	                                cropPW = el.cropPW,
	                                cropPH = el.cropPH;

	                            cropPX < 0 ? cropPX = 0 : cropPX;
	                            cropPX > 1 ? cropPX = 1 : cropPX;
	                            cropPY < 0 ? cropPY = 0 : cropPY;
	                            cropPY > 1 ? cropPY = 1 : cropPY;
	                            cropPW < 0 ? cropPW = 0 : cropPW;
	                            cropPW > 1 ? cropPW = 1 : cropPW;
	                            cropPH < 0 ? cropPH = 0 : cropPH;
	                            cropPH > 1 ? cropPH = 1 : cropPH;
	                        };

	                   /* } else {
	                        var el = content.elements[j],
	                            transEl = content.trans[j],
	                            ratio = content.ratio;

	                        var wDot = transEl.attrs.size.x * transEl.attrs.scale.x,
	                            hDot = transEl.attrs.size.y * transEl.attrs.scale.y,
	                            W = wDot / ratio,
	                            H = hDot / ratio,
	                            OX = (transEl.attrs.x + transEl.attrs.translate.x - (wDot - transEl.attrs.size.x) / 2) / ratio,
	                            OY = (transEl.attrs.y + transEl.attrs.translate.y - (hDot - transEl.attrs.size.y) / 2) / ratio,
	                            rot = transEl.attrs.rotate || 0;


	                        var px = OX / content.oriWidth,
	                            py = OY / content.oriHeight,
	                            pw = W / content.oriWidth,
	                            ph = H / content.oriHeight;

	                        if (content.params[j].elType === 'logo' || content.params[j].elType === 'image') {
	                            if (Math.abs(el.imageRotate) === 90) {
	                                // special rotate
	                                var cWidth = el.imageHeight,
	                                    cHeight = el.imageWidth;
	                            } else {
	                                var cWidth = el.imageWidth,
	                                    cHeight = el.imageHeight;
	                            };

	                            var cropPX = el.cropX / cWidth,
	                                cropPY = el.cropY / cHeight,
	                                cropPW = el.cropW / cWidth,
	                                cropPH = el.cropH / cHeight;

	                            if (cWidth === '' || cHeight === '') {
	                                cropPX = 0;
	                                cropPY = 0;
	                                cropPW = 1;
	                                cropPH = 1;
	                            };

	                            cropPX < 0 ? cropPX = 0 : cropPX;
	                            cropPX > 1 ? cropPX = 1 : cropPX;
	                            cropPY < 0 ? cropPY = 0 : cropPY;
	                            cropPY > 1 ? cropPY = 1 : cropPY;
	                            cropPW < 0 ? cropPW = 0 : cropPW;
	                            cropPW > 1 ? cropPW = 1 : cropPW;
	                            cropPH < 0 ? cropPH = 0 : cropPH;
	                            cropPH > 1 ? cropPH = 1 : cropPH;
	                        };
	                    }*/



	                    if (content.params[j].elType === 'text') {

	                        xml += '<element type="TextElement" elType="' + el.elType + '" x="' + OX + '" y="' + OY + '" width="' + W + '" height="' + H + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + el.dep + '" color="' + el.fontColor + '" fontSize="' + parseFloat(el.fontSize) / content.oriHeight + '" fontFamily="' + encodeURIComponent(el.fontFamily) + '" fontWeight="' + el.fontWeight + '" textAlign="' + el.textAlign + '" >' + encodeURIComponent(el.text) + '</element>';
	                    } else if (content.params[j].elType === 'logo') {
	                        xml += '<element type="LogoElement" elType="' + el.elType + '" x="' + OX + '" y="' + OY + '" width="' + W + '" height="' + H + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + el.dep + '" imageid="' + el.imageId + '" imgRot="' + (el.imageRotate || 0) + '" imgFlip="false" cropLUX="' + cropPX + '" cropLUY="' + cropPY + '" cropRLX="' + (cropPX + cropPW) + '" cropRLY="' + (cropPY + cropPH) + '"/>';

	                    } else {
	                        // image element
	                        xml += '<element type="PhotoElement" elType="' + el.elType + '" x="' + OX + '" y="' + OY + '" width="' + W + '" height="' + H + '" px="' + px + '" py="' + py + '" pw="' + pw + '" ph="' + ph + '" rot="' + rot + '" dep="' + el.dep + '" imageid="' + el.imageId + '" imgRot="' + (el.imageRotate || 0) + '" imgFlip="false" cropLUX="' + cropPX + '" cropLUY="' + cropPY + '" cropRLX="' + (cropPX + cropPW) + '" cropRLY="' + (cropPY + cropPH) + '"/>';
	                    };

	                }
	                xml += '</elements>';
	                xml += '</content>';

	            }


	            xml += '</contents>' +
	                '</tshirt>';
	        }
	        xml += '</tshirts>' +
	            '<images>';
	            for(i = 0; i < Store.imageList.length; i++) {
	                    xml += '<image id="'+ Store.imageList[i].id +'" guid="'+ Store.imageList[i].guid +'" encImgId="'+ Store.imageList[i].encImgId +'" order="'+ i +'" name="'+ Store.imageList[i].name +'" width="'+ Store.imageList[i].width +'" height="'+ Store.imageList[i].height +'" shotTime="'+ Store.imageList[i].shotTime +'"/>';
	                };
	        xml +='</images>'+
	            '</project>';
	        return xml;
	    },
	    saveNewProject: function(obj) {
	        // var xml = require('ProjectManage').getWallArtsInitProjectXml();
	        var projectJson = __webpack_require__(36).initProjectJson();
	        var skuJson = __webpack_require__(29).getNewPrintSkuJson(projectJson);
	        Store.createdDate = __webpack_require__(30).formatDateTime(new Date());
	        // Store.projectXml = xml;
	        Store.projectJson = projectJson;
	        /*Store.watches.isProjectLoaded = true;
	        Store.isNewInsertProject = true;*/
	        __webpack_require__(37).insertProject(obj,projectJson,skuJson);
	    },
	    saveOldProject: function(obj,callback) {
	        var projectJson = __webpack_require__(36).getCurrentProjectJson();
	        var skuJson = __webpack_require__(29).getNewPrintSkuJson(projectJson);
	        if(callback && typeof callback==="function"){
	            __webpack_require__(37).saveProject(obj,projectJson,skuJson,callback);
	        }else{
	            __webpack_require__(37).saveProject(obj,projectJson,skuJson);
	        }
	    },
	    handledSaveOldProject: function(obj,eventName) {
	        var projectJson = __webpack_require__(36).getCurrentProjectJson();
	        var skuJson = __webpack_require__(29).getNewPrintSkuJson(projectJson);
	        __webpack_require__(37).handledSaveProject(obj,projectJson,skuJson,eventName);
	    },
	    getOldProject: function() {
	        if(Store.isPreview){
	            __webpack_require__(37).getNewPrintProject('Share');
	        }else if(Store.isRemark) {
	            __webpack_require__(37).getNewPrintProject('Portal');
	        }else{
	            __webpack_require__(37).getNewPrintProject();
	        }
	    },
	    getProjectOrderedState: function(obj) {
	        __webpack_require__(9).getProjectOrderedState(obj);
	    },
	    addOrUpdateAlbum: function(title, dispatchObj, dispatchEventName) {
	        __webpack_require__(9).addOrUpdateAlbum(title, dispatchObj, dispatchEventName);
	    },
	    newProject:function(color,measure,count){
	        var PrjConstructor = __webpack_require__(14);
	        var project = PrjConstructor();
	        project.product = Store.baseProject.product;
	        project.size = Store.baseProject.size;
	        project.paper = Store.baseProject.paper;
	        project.color = Store.baseProject.color;
	        project.canvasBorder = Store.baseProject.canvasBorder;
	        project.canvasBorderSize = Store.baseProject.canvasBorderSize;
	        project.frameStyle = Store.baseProject.frameStyle;
	        project.rotated = true;
	        project.orientation = "Landscape";
	        project.quantity = 1;
	        return project;
	    },
	    orderProject: function(obj) {
	        var xml = __webpack_require__(19).getCurrentProjectXml();
	        console.log(xml);
	        var thumbnailPX=0;
	        var thumbnailPY=0;
	        var thumbnailPW=1;
	        var thumbnailPH=1;
	        __webpack_require__(9).orderProject(obj,xml,thumbnailPX,thumbnailPY,thumbnailPW,thumbnailPH);
	    },
	    cloneProject: function(obj,title) {
	        var oldTitle=Store.title;
	        Store.title=title;
	        var projectJson = __webpack_require__(36).getCurrentProjectJson();
	        projectJson.project.guid = '';
	        var skuJson = __webpack_require__(29).getNewPrintSkuJson(projectJson);
	        // var xml = require('ProjectManage').getCurrentProjectXml();

	        __webpack_require__(37).cloneProject(obj,oldTitle,title,projectJson,skuJson);
	        // require('ProjectService').cloneProject(obj,oldTitle,title,xml, thumbnailPX, thumbnailPY, thumbnailPW, thumbnailPH);

	    },
	    setDefaultValue: function(){
	        var SpecManage = __webpack_require__(18);
	        var optionIds = SpecManage.getOptionIds();
	        var Prj = Store.baseProject;

	        // 在选项id列表中去除product
	        optionIds = optionIds.filter(function(optionId) {
	            return optionId !== 'product';
	        });

	        optionIds.forEach(function(optionId) {
	            var defaultValue = SpecManage.getOptionsMapDefaultValue(optionId, [{"key":"product","value":Prj.product}]);
	            Prj[optionId] = Prj[optionId] === 'none' || !Prj[optionId] ? defaultValue : Prj[optionId];
	        });
	    },
	    createProject: function(obj,title) {
	        var oldTitle=Store.title;
	        Store.title=title;
	        var PrjConstructor = __webpack_require__(14);
	        var Prj = PrjConstructor();
	        var UtilParam = __webpack_require__(10);
	        Prj.product = UtilParam.getUrlParam('product')||'none';
	        Prj.rotated = true;
	        Store.projectSettings.length=0;
	        Store.projects.length=0;
	        Store.imageList.length=0;
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	        __webpack_require__(33).deleteImage(0);
	        Store.vm.$broadcast('notifyRefreshScreenshot');
	        Store.projectSettings.push(Prj);
	        this.setDefaultValue();
	        var projectJson = __webpack_require__(36).initProjectJson();
	        var skuJson = __webpack_require__(29).getNewPrintSkuJson(projectJson);
	        Store.createdDate = __webpack_require__(30).formatDateTime(new Date());
	        Store.projectJson = projectJson;
	        __webpack_require__(37).createProjectSuccess(obj,oldTitle,title,projectJson,skuJson);
	    },
	    changeProjectTitle: function(title, dispatchObj, dispatchEventName) {
	        __webpack_require__(9).changeProjectTitle(title, dispatchObj, dispatchEventName);
	    },
	    getMainProjectImages:function(obj,projectId,imageId){
	        __webpack_require__(9).getMainProject(obj,projectId,imageId);
	    },
	    getMyPhotoImages: function(obj,userId, shouldApplyImages){
	        __webpack_require__(9).getMyPhotoImages(obj,userId, shouldApplyImages);
	    },
	    initProjectSettings: function() {
	        var projectJson = Store.projectJson.project;
	        var optionIds = __webpack_require__(18).getOptionIds();

	        optionIds.forEach(function(optionId) {
	            if(projectJson.pages.length >= 1) {
	                Store.baseProject[optionId] = projectJson.pages[0].spec[optionId];
	            } else {
	                Store.baseProject[optionId] = projectJson.summary.defaultSetting[optionId];
	            }
	        });

	        Store.projectSettings = [];

	        projectJson.pages.forEach(function(currentPage) {
	            var PrjConstructor = __webpack_require__(14);
	            var Prj = PrjConstructor();
	            var spec = currentPage.spec;
	            var specKeys = Object.keys(spec);
	            for (var i = 0; i < specKeys.length; i++) {
	                var itemKey = specKeys[i];
	                Prj[itemKey]=spec[itemKey];
	            }
	            Prj.quantity = parseInt(spec.quantity) || 1;
	            Prj.rotated = Prj.orientation === 'Landscape' ? true : false;
	            Store.projectSettings.push(Prj);
	        });
	    },
	    transformOldProjectToNew: function() {
	        var projectJson = Store.projectJson.project;
	        var optionIds = __webpack_require__(18).getOptionIds();

	        if(projectJson.spec) {
	            projectJson.pages[0].spec = projectJson.spec;
	        }
	    },
	    upgradeProject: function() {

	        Store.baseProject["size"] = "11X14";
	        for(var i = 0; i < Store.pages.length; i++ ) {
	            Store.projectSettings[i].size = "11X14";
	            var currentCanvas = Store.pages[i].canvas;
	            var frameBaseSize = __webpack_require__(29).getLMCBaseSize(i);
	            var bleedSize = __webpack_require__(29).getLMCBleedSize(i);
	            var photoLayer = __webpack_require__(29).getLMCPhotoLayer(i);
	            var canvasBorder = __webpack_require__(29).getLMCCanvasBorder(i);
	            var pageWith = photoLayer.width;
	            var pageHeight = photoLayer.height;

	            currentCanvas.realBleedings = bleedSize;
	            currentCanvas.frameBaseSize = frameBaseSize;
	            currentCanvas.canvasBordeThickness = canvasBorder;
	            currentCanvas.mirrorSize = { top: currentCanvas.canvasBordeThickness.top + currentCanvas.realBleedings.top, right: currentCanvas.canvasBordeThickness.right + currentCanvas.realBleedings.right, bottom: currentCanvas.canvasBordeThickness.bottom + currentCanvas.realBleedings.bottom, left: currentCanvas.canvasBordeThickness.left + currentCanvas.realBleedings.left };
	            currentCanvas.photoLayer = photoLayer;
	            currentCanvas.foreground = __webpack_require__(24).getForeground(currentCanvas.frameBaseSize, {left:0,top:0,right:0,bottom:0},currentCanvas.photoLayer,i);
	            currentCanvas.oriWidth = currentCanvas.photoLayer.width;
	            currentCanvas.oriHeight = currentCanvas.photoLayer.height;
	            currentCanvas.oriBgWidth = currentCanvas.foreground.width;
	            currentCanvas.oriBgHeight = currentCanvas.foreground.height;
	            var foreground = __webpack_require__(24).getForegroundVariable(i);
	            currentCanvas.oriX = foreground.left * currentCanvas.foreground.ratioX - currentCanvas.realBleedings.left - currentCanvas.canvasBordeThickness.left;
	            currentCanvas.oriY = foreground.top * currentCanvas.foreground.ratioY - currentCanvas.realBleedings.top - currentCanvas.canvasBordeThickness.top;
	            Store.mirrorLength = currentCanvas.canvasBordeThickness.top;
	            var oldW=currentCanvas.params[0].width;
	            var oldH=currentCanvas.params[0].height;
	            currentCanvas.params[0].width = currentCanvas.photoLayer.width-canvasBorder.left-canvasBorder.right-bleedSize.left-bleedSize.right;
	            currentCanvas.params[0].height = currentCanvas.photoLayer.height-canvasBorder.top-canvasBorder.bottom-bleedSize.top-bleedSize.bottom;
	            if (currentCanvas.params[0].imageId) {
	                var imageId=currentCanvas.params[0].imageId;

	                var imageDetail = __webpack_require__(25).getImageDetail(imageId);

	                if(Math.abs(currentCanvas.params[0].imageRotate) === 90) {
	                    var cWidth = currentCanvas.params[0].imageHeight,
	                        cHeight = currentCanvas.params[0].imageWidth;
	                }
	                else {
	                    var cWidth = currentCanvas.params[0].imageWidth,
	                        cHeight = currentCanvas.params[0].imageHeight;
	                };

	                var defaultCrops = __webpack_require__(35).getConformCrop(cWidth, cHeight, currentCanvas.params[0].cropPX,currentCanvas.params[0].cropPY,currentCanvas.params[0].cropPW,currentCanvas.params[0].cropPH,oldW,oldH,currentCanvas.params[0].width, currentCanvas.params[0].height);

	                var px = defaultCrops.px,
	                    py = defaultCrops.py,
	                    pw = defaultCrops.pw,
	                    ph = defaultCrops.ph;

	                currentCanvas.params[0].cropX = imageDetail.width * px;
	                currentCanvas.params[0].cropY = imageDetail.height * py;
	                currentCanvas.params[0].cropW = imageDetail.width * pw;
	                currentCanvas.params[0].cropH = imageDetail.height * ph;

	                currentCanvas.params[0].cropPX = px;
	                currentCanvas.params[0].cropPY = py;
	                currentCanvas.params[0].cropPW = pw;
	                currentCanvas.params[0].cropPH = ph;
	            }
	      }
	    },
	    getTotalPageNum: function(){
	      var pageNum = 0;
	      Store.pages.forEach(function(item){
	        if(!item.isDeleted){
	           pageNum++;
	        }
	      });
	      return pageNum;
	    },
	    saveProjectOnly: function(obj){
	        var projectJson = __webpack_require__(36).getCurrentProjectJson();
	        var skuJson = __webpack_require__(29).getNewPrintSkuJson(projectJson);
	        __webpack_require__(37).saveProjectOnly(obj,projectJson,skuJson);
	    }

	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {module.exports = {
	    analyseSpec: function(obj) {
			//console.log(obj);
	        if (obj && obj.size && obj.product /*&& obj.color && obj.measure*/) {
	        	//console.log(obj.size,obj.product);
	        	var size=obj.size;
	        	var product=obj.product;
	        	var color=obj.color;
	        	var measure=obj.measure;

	        	var baseX=0;
	        	var baseY=0;
	        	var baseWidth=0;
	        	var baseHeight=0;
	        	var backgroundWidth=0;
	        	var backgroundHeight=0;
	        	var logoX=0;
	        	var logoY=0;
	        	var logoWidth=0;
	        	var logoHeight=0;

	        	var parser = new DOMParser();
				//var specXml = parser.parseFromString(Store.spec.specXml, "text/xml"); 
				var specXml = Store.spec.specXml;
				var baseSizeEntry = $(specXml).find('parameter[id="baseSize"]').find('entry');
		        for (var i = 0; i < baseSizeEntry.length; i++) {
		            if(baseSizeEntry.eq(i).attr('key').indexOf(product+"-"+size) !== -1) {
		            	baseX=baseSizeEntry.eq(i).attr('x');
		            	baseY=baseSizeEntry.eq(i).attr('y');
		            	baseWidth=baseSizeEntry.eq(i).attr('widthInInch')*300;
		            	baseHeight=baseSizeEntry.eq(i).attr('heightInInch')*300;
		            	break;
		            }
		        };
		        var backgroundEntry = $(specXml).find('parameter[id="backgroundSize"]').find('entry');
		        for (var i = 0; i < backgroundEntry.length; i++) {
		            if(backgroundEntry.eq(i).attr('key').indexOf(product+"-"+size) !== -1) {
		            	
		            	backgroundWidth=backgroundEntry.eq(i).attr('width');
		            	backgroundHeight=backgroundEntry.eq(i).attr('height');
		            	break;
		            }
		        };
		        var logoEntry = $(specXml).find('parameter[id="logoArea"]').find('entry');
		        for (var i = 0; i < logoEntry.length; i++) {
		            if(logoEntry.eq(i).attr('key').indexOf(product+"-"+size) !== -1) {
		            	logoX=logoEntry.eq(i).attr('x');
		            	logoY=logoEntry.eq(i).attr('y');
		            	logoWidth=logoEntry.eq(i).attr('width');
		            	logoHeight=logoEntry.eq(i).attr('height');
		            	break;
		            }
		        };
		        var base={x:baseX,y:baseY,width:baseWidth,height:baseHeight};
		        var background={width:backgroundWidth,height:backgroundHeight};
		        var logo={x:logoX,y:logoY,width:logoWidth,height:logoHeight};
		        console.log(base);
		        console.log(background);
		        console.log(logo);
	        	return {
	        		base: base,
	        		background: background,
	        		logo: logo
	        	};
	        }
	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {var UtilMath = __webpack_require__(7);
	var ImageListManage = __webpack_require__(25);
	var ParamsManage = __webpack_require__(26);
	var ProjectManage = __webpack_require__(19);
	var SpecController = __webpack_require__(23);
	var WarnController = __webpack_require__(27);
	var ImageService = __webpack_require__(28);
	var JsonProjectManage = __webpack_require__(29);

	var Vue = __webpack_require__(31);
	var CompPhotoElement = Vue.component('photo-element');
	var CompTextElement = Vue.component('text-element');

	module.exports = {
	    createElement: function(idx,pageIdx, ratio, extraName, obj) {
	        // var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	        var currentCanvas = Store.pages[pageIdx].canvas;

	        if (currentCanvas.params[idx].elType === 'text') {
	            var el = new CompTextElement();
	        } else {
	            var el = new CompPhotoElement();
	        };
	        // el.$set('url','../../static/img/close-normal.svg');
	        // el.$set('result',this.bindValues[i]);
	        el.init(idx, pageIdx, ratio, extraName);
	        el.$mount().$appendTo("#container" + pageIdx + extraName);

	        if(extraName){
	            currentCanvas.centerElements.push(el);
	        } else {
	            currentCanvas.elements.push(el);
	        }
	    },

	    editElement: function(idx, obj) {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        // remove trash canvas element
	        currentCanvas.elements[idx].$destroy(true);

	        if (currentCanvas.params[idx].elType === 'text') {
	            var el = new CompTextElement();
	        } else {
	            var el = new CompPhotoElement();
	        };
	        // el.$set('url','../../static/img/close-normal.svg');
	        // el.$set('result',this.bindValues[i]);
	        el.init(idx);
	        el.$mount().$appendTo("#container");

	        currentCanvas.elements.splice(idx, 1, el);
	    },

	    deleteElement: function(idx, elementId,pageIdx) {
	        var useIndex = (typeof pageIdx !== 'undefined') ? pageIdx : Store.currentSelectProjectIndex;
	        var currentCanvas = Store.pages[useIndex].canvas;
	        for (var i = 0; i < currentCanvas.elements.length; i++) {
	            if (currentCanvas.elements[i].id === elementId) {
	                currentCanvas.elements[i].$destroy(true);
	                currentCanvas.elements.splice(i, 1);
	                break;
	            }
	        }
	    },

	    // init new element
	    // initElement: function(idx, obj) {
	    // 	// init data and draw element
	    // 	this.initElementData(idx);
	    //
	    // 	if(!Store.isPreview) {
	    // 		// set handlers
	    // 		this.initElementHandles(idx);
	    //
	    // 		// set transforms
	    // 		this.initElementTransform(idx, obj);
	    //
	    // 		// add dragging evnets
	    // 		this.initElementDragEvent(idx);
	    //
	    // 		// add warn tips
	    // 		this.initWarnTip(idx);
	    // 	};
	    // },

	    // prepare canvas element data model
	    initElementData: function(idx) {
	        // console.log('index is ' + idx + ' in initElementData');
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        if (currentCanvas.params[idx].elType === 'background' || currentCanvas.params[idx].elType === 'image' || currentCanvas.params[idx].elType === 'logo') {
	            // add image element
	            var loadImageUrl = '../../static/img/blank.png';
	            // var loadImageUrl = '';
	            if (currentCanvas.params[idx].imageId !== '') {
	                // already initialized, read old cropped image
	                var px = currentCanvas.params[idx].cropPX,
	                    py = currentCanvas.params[idx].cropPY,
	                    pw = currentCanvas.params[idx].cropPW,
	                    ph = currentCanvas.params[idx].cropPH,
	                    width = currentCanvas.params[idx].width * currentCanvas.ratio / pw,
	                    height = currentCanvas.params[idx].height * currentCanvas.ratio / ph;


	                var UtilProject = __webpack_require__(21);
	                var encImgId = UtilProject.getEncImgId(currentCanvas.params[idx].imageId);
	                var qs = UtilProject.getQueryString({
	                  encImgId: encImgId,
	                  px: px,
	                  py: py,
	                  pw: pw,
	                  ph: ph,
	                  width: Math.round(width),
	                  height: Math.round(height),
	                  rotation: currentCanvas.params[idx].imageRotate
	                });

	                loadImageUrl = '/imageBox/liveUpdateCropImage.ep?' + qs;
	            };

	            currentCanvas.elements.$set(idx, currentCanvas.paper.image(loadImageUrl, currentCanvas.params[idx].x * currentCanvas.ratio, currentCanvas.params[idx].y * currentCanvas.ratio, currentCanvas.params[idx].width * currentCanvas.ratio, currentCanvas.params[idx].height * currentCanvas.ratio));
	        } else if (currentCanvas.params[idx].elType === 'text') {
	            var fontViewSize = Math.round(UtilMath.getTextViewFontSize(currentCanvas.params[idx].fontSize));
	            var fontUrl = '../../static/img/blank.png';

	            if (fontViewSize > 0) {
	                if (currentCanvas.params[idx].text === '') {
	                    if (Store.isPreview) {
	                        fontUrl = '../../static/img/blank.png';
	                    } else {
	                        fontUrl = Store.domains.productBaseUrl + "/product/text/textImage?text=" + encodeURIComponent('Enter text here') + "&font=" + encodeURIComponent(currentCanvas.params[idx].fontFamily) + "&fontSize=" + fontViewSize + "&color=" + currentCanvas.params[idx].fontColor + "&align=left";
	                    };
	                } else {
	                    fontUrl = Store.domains.productBaseUrl + "/product/text/textImage?text=" + encodeURIComponent(currentCanvas.params[idx].text) + "&font=" + encodeURIComponent(currentCanvas.params[idx].fontFamily) + "&fontSize=" + fontViewSize + "&color=" + currentCanvas.params[idx].fontColor + "&align=left";
	                };
	            } else {
	                fontUrl = '../../static/img/blank.png';
	            };

	            currentCanvas.elements.$set(idx, currentCanvas.paper.image(fontUrl, currentCanvas.params[idx].x * currentCanvas.ratio, currentCanvas.params[idx].y * currentCanvas.ratio, currentCanvas.params[idx].width * currentCanvas.ratio, currentCanvas.params[idx].height * currentCanvas.ratio));

	            currentCanvas.elements[idx].fontFamily = currentCanvas.params[idx].fontFamily;
	            currentCanvas.elements[idx].fontSize = currentCanvas.params[idx].fontSize;
	            currentCanvas.elements[idx].fontWeight = currentCanvas.params[idx].fontWeight;
	            currentCanvas.elements[idx].textAlign = currentCanvas.params[idx].textAlign;
	            currentCanvas.elements[idx].fontColor = currentCanvas.params[idx].fontColor;
	            currentCanvas.elements[idx].text = currentCanvas.params[idx].text;
	        };
	        currentCanvas.elements[idx].node.id = 'element-' + idx;

	        // record the dep value and index value, current visual width, height
	        currentCanvas.elements[idx].elType = currentCanvas.params[idx].elType;
	        currentCanvas.elements[idx].idx = idx;
	        currentCanvas.elements[idx].dep = currentCanvas.params[idx].dep;
	        // console.log('set element ' + idx + ' dep into ' + currentCanvas.params[idx].dep + ' now');
	        currentCanvas.elements[idx].vWidth = currentCanvas.params[idx].width * currentCanvas.ratio;
	        currentCanvas.elements[idx].vHeight = currentCanvas.params[idx].height * currentCanvas.ratio;
	        currentCanvas.elements[idx].sourceImageUrl = currentCanvas.params[idx].url || '';
	        currentCanvas.elements[idx].imageId = currentCanvas.params[idx].imageId || '';
	        currentCanvas.elements[idx].imageRotate = currentCanvas.params[idx].imageRotate || 0;;

	        // get image detail
	        var imageDetail = ImageListManage.getImageDetail(currentCanvas.elements[idx].imageId);

	        if (imageDetail) {
	            currentCanvas.elements[idx].imageGuid = imageDetail.guid;
	            currentCanvas.elements[idx].imageWidth = imageDetail.width;
	            currentCanvas.elements[idx].imageHeight = imageDetail.height;

	            if (Math.abs(currentCanvas.elements[idx].imageRotate) === 90) {
	                // rotated specially
	                var cWidth = currentCanvas.elements[idx].imageHeight,
	                    cHeight = currentCanvas.elements[idx].imageWidth;
	            } else {
	                var cWidth = currentCanvas.elements[idx].imageWidth,
	                    cHeight = currentCanvas.elements[idx].imageHeight;
	            };
	            // adding the crop settings to element
	            currentCanvas.elements[idx].cropX = cWidth * currentCanvas.params[idx].cropPX;
	            currentCanvas.elements[idx].cropY = cHeight * currentCanvas.params[idx].cropPY;
	            currentCanvas.elements[idx].cropW = cWidth * currentCanvas.params[idx].cropPW;
	            currentCanvas.elements[idx].cropH = cHeight * currentCanvas.params[idx].cropPH;
	        } else {
	            currentCanvas.elements[idx].imageGuid = '';
	            currentCanvas.elements[idx].imageWidth = '';
	            currentCanvas.elements[idx].imageHeight = '';

	            currentCanvas.elements[idx].cropX = 0;
	            currentCanvas.elements[idx].cropY = 0;
	            currentCanvas.elements[idx].cropW = 1;
	            currentCanvas.elements[idx].cropH = 1;
	        };

	        //   // paint warn tip
	        //   currentCanvas.warns[idx] = {
	        //   	isActive: false,
	        //   	el: ''
	        //   };
	        //   if((currentCanvas.params[idx].elType === 'background' || currentCanvas.params[idx].elType === 'image' || currentCanvas.params[idx].elType === 'logo') && imageDetail) {
	        //    var cropWidth = imageDetail.width * pw,
	        //    	cropHeight = imageDetail.height * ph;
	        //    console.log(imageDetail.width)
	        //    var params = require("ParamsManage").getParamsValueByElement(idx);
	        //    var scaleW = params.width / cropWidth,
	        //    	scaleH = params.height / cropHeight,
	        //    	scale = Math.max(scaleW, scaleH);
	        //    console.log(scale)

	        //    if(scale>Store.warnSettings.resizeLimit){
	        //    	WarnController.createElement(idx);
	        //    }else{
	        //    	WarnController.deleteElement(idx);
	        //    	currentCanvas.warns[idx].isActive = false;
	        //    }
	        //    WarnController.showBeforeElements();
	        // }

	    },



	    // init element handles
	    initElementHandles: function(idx) {
	        var _this = this;
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        // if(idx > 0) {

	        // set double click handle
	        if (currentCanvas.elements[idx].elType === 'text') {
	            currentCanvas.elements[idx]
	                .dblclick(function() {
	                    // var that = this;
	                    // _this.$dispatch('dispatchModifyText', that.idx);
	                    Store.watches.isChangeThisText = true;
	                });
	        } else {
	            currentCanvas.elements[idx]
	                .dblclick(function() {
	                    Store.watches.isCropThisImage = true;
	                });
	        };

	        // set handle of clicking
	        currentCanvas.elements[idx]
	            .attr({ cursor: 'move' })
	            // .mouseover(function() {
	            // 	// show bbox
	            // 	currentCanvas.trans[idx].setOpts({ draw: ['bbox'] });
	            // })
	            // .mouseout(function() {
	            // 	// hide bbox
	            // 	currentCanvas.trans[idx].setOpts({ draw: false });
	            // })
	            .click(function() {
	                var that = this;

	                _this.changeClickDepth({ idx: that.idx });
	            });
	        // }
	        // else if(idx === 0) {
	        //   currentCanvas.elements[idx]
	        //   	// .attr({ cursor: 'move' })
	        //   	.click(function() {
	        //    	var that = this;
	        //    	// that.toFront();

	        //    	// save the selected image index into store
	        //    	currentCanvas.selectedIdx = that.idx;
	        //    	_this.highlightSelection();

	        //   	// // change the dep value after toFront
	        //   	// for(var j = 0;j < currentCanvas.elements.length; j++) {
	        //   	// 	if(currentCanvas.elements[j].dep > that.dep ) {
	        //   	// 		currentCanvas.elements[j].dep--;
	        //   	// 	};
	        // 			// };
	        // 			// that.dep = currentCanvas.elements.length - 1;

	        //   	// // apply the change
	        //   	// currentCanvas.trans[that.idx].apply();
	        //   });
	        // };
	    },

	    // init element transforms
	    initElementTransform: function(idx, obj) {
	        var _this = this;
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        // prepare options
	        if (currentCanvas.params[idx].elType === 'image' || currentCanvas.params[idx].elType === 'logo') {
	            var options = {
	                drag: ['self'],
	                rotate: false,
	                scale: ['bboxCorners'],
	                keepRatio: true,
	                snap: { rotate: 1, scale: 1, drag: 1 },
	                // draw: ['bbox'],
	                draw: false,
	                range: { scale: [0, 99999] },
	                idx: idx
	            };
	        } else if (currentCanvas.params[idx].elType === 'text') {
	            var options = {
	                drag: ['self'],
	                rotate: false,
	                scale: ['bboxCorners'],
	                keepRatio: true,
	                snap: { rotate: 0, scale: 1, drag: 1 },
	                draw: false,
	                range: { scale: [0, 99999] },
	                idx: idx

	            };
	        };

	        // if(idx > 0) {
	        // Add freeTransform with options and callback
	        currentCanvas.trans.$set(idx, currentCanvas.paper.freeTransform(currentCanvas.elements[idx], options, function(img, events) {
	            // console.log(img.attrs);
	            //console.log(events);
	            if (events[0] === 'scale start' || events[0] === 'rotate start') {

	                // _this.changeClickDepth({ idx: img.opts.idx });
	                _this.showSpineLines();

	                WarnController.deleteElement(idx);

	            } else if (events[0] === 'drag start') {
	                Store.ctrls.isDragStarted = true;
	                // Store.ctrls.lastTranEvent = '';

	                _this.showSpineLines();
	                // console.log(currentCanvas.elements, currentCanvas.warns)
	                // console.log(currentCanvas, currentCanvas.warns[idx]);
	                WarnController.deleteElement(idx);

	            } else if (events[0] === 'drag end' || (Store.ctrls.isDragStarted && events[0] === 'apply' && Store.ctrls.lastTranEvent === 'init')) {
	                // console.log('drag end');
	                console.info('index' + idx);
	                Store.ctrls.isDragStarted = false;
	                Store.ctrls.lastTranEvent = '';
	                _this.changeClickDepth({ idx: img.opts.idx });
	                _this.hideSpineLines();
	                if (currentCanvas.warns[idx] && currentCanvas.warns[idx].isActive) {
	                    WarnController.createElement(idx);
	                }
	                WarnController.showBeforeElements();
	                console.info('index' + idx)
	            } else if (events[0] === 'scale end' || events[0] === 'rotate end') {
	                // console.log('should sync params now');
	                var newParams = ParamsManage.getParamsValueByElement(img.opts.idx);

	                if (currentCanvas.params[img.opts.idx].elType === 'text') {
	                    console.log('resize text');
	                    if (newParams.fontSize < UtilMath.getPxByInch(0.3)) {
	                        newParams.fontSize = UtilMath.getPxByInch(0.3);
	                    } else if (newParams.fontSize > UtilMath.getPxByInch(16)) {
	                        newParams.fontSize = UtilMath.getPxByInch(16);
	                    };
	                    obj.editText(newParams, img.opts.idx);
	                } else {
	                    currentCanvas.params.splice(img.opts.idx, 1, newParams);
	                    _this.editElement(img.opts.idx);
	                    _this.highlightSelection(img.opts.idx);
	                    _this.spineLinesToTop();
	                    _this.hideSpineLines();
	                };

	            } else if (events[0] === 'apply') {
	                var params = __webpack_require__(26).getParamsValueByElement(idx);

	                if (params.x < -params.width || params.y < -params.height || params.x > currentCanvas.oriWidth || params.y > currentCanvas.oriHeight) {
	                    console.info(params);
	                    params.x = 0;
	                    params.y = 0;
	                    if (params.elType === "text") {
	                        var TextController = __webpack_require__(32);
	                        TextController.editText(params, idx);
	                    } else if (params.elType === "image" || params.elType === "logo") {
	                        var ImageController = __webpack_require__(33);
	                        ImageController.editImage(params, idx);
	                    }

	                }
	            }


	            // showLegendText(img.opts.idx);

	            // save the tran event for back up
	            Store.ctrls.lastTranEvent = events[0] || '';
	        }));

	        currentCanvas.trans[idx].attrs.rotate = currentCanvas.params[idx].rotate;
	        // currentCanvas.trans[idx].hideHandles();
	        currentCanvas.trans[idx].apply();
	        // }
	        // else {
	        // 	// set bg element's tran into nothing
	        // 	currentCanvas.trans.$set(idx, '');
	        // };
	    },

	    // init element dragging events
	    initElementDragEvent: function(idx) {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        // add dragging event listeners to image
	        if (currentCanvas.params[idx].elType === 'background' || currentCanvas.params[idx].elType === 'image' || currentCanvas.params[idx].elType === 'logo') {
	            // ## in fact, this code only valid for added images because background was covered by bleeding layer, the real event for background is binded on bleeding layer

	            if (navigator.userAgent.indexOf('Trident') !== -1) {
	                // fit for IE
	                // on dragging over
	                $('#element-' + idx).attr('ondragover', 'event.preventDefault();');

	                // on dropping
	                $('#element-' + idx).attr('ondrop', 'asFn.fnOndrop(event);');
	            } else {
	                // on dragging over
	                document.getElementById('element-' + idx).ondragover = function(ev) {
	                    ev.preventDefault();
	                };

	                document.getElementById('element-' + idx).ondrop = function(ev) {
	                    var obj = { ev: ev, newAdded: false, isBg: false };
	                    Store.dropData.ev = obj.ev;
	                    Store.dropData.newAdded = obj.newAdded;
	                    Store.dropData.isBg = obj.isBg;

	                    // _this.handleOndrop(obj);
	                    console.log("frop")
	                    Store.watches.isOnDrop = true;
	                };
	            };


	            // document.getElementById('element-' + idx).ondrop = function(ev) {
	            // 	ev.preventDefault();

	            // 	var imageId = store.dragData.imageId,
	            // 			sourceImageUrl = store.dragData.sourceImageUrl,
	            // 			// imageId = ev.dataTransfer.getData('imageId'),
	            // 			// sourceImageUrl = ev.dataTransfer.getData('sourceImageUrl'),
	            // 			// imageWidth = ev.dataTransfer.getData('imageWidth'),
	            // 			// imageHeight = ev.dataTransfer.getData('imageHeight'),
	            // 			idx = parseInt(ev.target.id.split('-')[1]);

	            // 	currentCanvas.elements[idx].imageId = imageId;

	            // 	var imageDetail = ImageListManage.getImageDetail(imageId);

	            // 	if(imageDetail) {
	            // 		currentCanvas.elements[idx].imageGuid = imageDetail.guid;
	            // 		currentCanvas.elements[idx].imageWidth = imageDetail.width;
	            // 		currentCanvas.elements[idx].imageHeight = imageDetail.height;
	            // 	};

	            // 	var defaultCrops = UtilCrop.getDefaultCrop(currentCanvas.elements[idx].imageWidth, currentCanvas.elements[idx].imageHeight, currentCanvas.elements[idx].vWidth, currentCanvas.elements[idx].vHeight);

	            // 	var px = defaultCrops.px,
	            // 			py = defaultCrops.py,
	            // 			pw = defaultCrops.pw,
	            // 			ph = defaultCrops.ph,
	            // 			width = currentCanvas.elements[idx].vWidth / pw,
	            // 			height = currentCanvas.elements[idx].vHeight / ph;

	            // 	// adding the crop settings to element
	            // 	currentCanvas.elements[idx].cropX = imageDetail.width * px;
	            // 	currentCanvas.elements[idx].cropY = imageDetail.height * py;
	            // 	currentCanvas.elements[idx].cropW = imageDetail.width * pw;
	            // 	currentCanvas.elements[idx].cropH = imageDetail.height * ph;

	            // 	currentCanvas.elements[idx].imageRotate = 0;

	            // 	$('#element-' + idx).attr('href', '/imageBox/liveUpdateCropImage.ep?imageId=' + imageId + '&px=' + px + '&py=' + py + '&pw=' + pw + '&ph=' + ph + '&width=' + Math.round(width) + '&height=' + Math.round(height));
	            // 	// $.ajax({
	            // 	// 	url: '/imageBox/liveUpdateCropImage.ep',
	            // 	// 	type: 'get',
	            // 	// 	data: 'imageId=' + imageId + '&px=' + px + '&py=' + py + '&pw=' + pw + '&ph=' + ph + '&width=' + Math.round(width) + '&height=' + Math.round(height)
	            // 	// }).done(function(result) {
	            // 	// 	$('#element-0').attr('href', result);
	            // 	// });
	            // 	// var newImageSize = _this.stecheTo(imageWidth, imageHeight, currentCanvas.elements[idx].vWidth, currentCanvas.elements[idx].vHeight);

	            // 	// front-end testing
	            // 	// $('#element-0').attr('href', store.elementDragged.attributes.src.value);

	            // 	currentCanvas.elements[idx].sourceImageUrl = sourceImageUrl;

	            // 	ImageListManage.freshImageUsedCount();
	            // 	_this.freshImageList();
	            // };
	        };
	    },

	    // init warn tip
	    initWarnTip: function(idx) {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	        var imageDetail = ImageListManage.getImageDetail(currentCanvas.elements[idx].imageId);
	        // paint warn tip
	        currentCanvas.warns[idx] = {
	            isActive: false,
	            el: ''
	        };
	        if ((currentCanvas.params[idx].elType === 'background' || currentCanvas.params[idx].elType === 'image' || currentCanvas.params[idx].elType === 'logo') && imageDetail) {
	            var cropWidth = imageDetail.width * currentCanvas.params[idx].cropPW,
	                cropHeight = imageDetail.height * currentCanvas.params[idx].cropPH;
	            console.log(imageDetail.width)
	            var params = __webpack_require__(26).getParamsValueByElement(idx);
	            var scaleW = params.width / cropWidth,
	                scaleH = params.height / cropHeight,
	                scale = Math.max(scaleW, scaleH);
	            console.log(scale)

	            if (scale > Store.warnSettings.resizeLimit) {
	                WarnController.createElement(idx);
	            } else {
	                WarnController.deleteElement(idx);
	                currentCanvas.warns[idx].isActive = false;
	            }
	            WarnController.showBeforeElements();
	        }
	    },

	    createBackLayer: function() {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        currentCanvas.elementBg = currentCanvas.paper.rect(0.5, 0.5, currentCanvas.width, currentCanvas.height);
	        currentCanvas.elementBg.attr({ fill: 'rgba(255, 255, 255, 0)', stroke: 'rgba(10, 10, 10, 0)' });
	        currentCanvas.elementBg.node.id = 'element-bg';
	    },

	    // create bleedings
	    createBleeding: function() {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        var bleedingRibbonLeft = currentCanvas.paper.rect(0, 0, currentCanvas.bleedings.left * currentCanvas.ratio, currentCanvas.height);
	        bleedingRibbonLeft.attr({ fill: 'rgba(255, 255, 255, .6)', stroke: 'rgba(255, 255, 255, 0)' });
	        var bleedingRibbonTop = currentCanvas.paper.rect(currentCanvas.bleedings.left * currentCanvas.ratio, 0, (currentCanvas.oriWidth - currentCanvas.bleedings.left - currentCanvas.bleedings.right) * currentCanvas.ratio, currentCanvas.bleedings.top * currentCanvas.ratio);
	        bleedingRibbonTop.attr({ fill: 'rgba(255, 255, 255, .6)', stroke: 'rgba(255, 255, 255, .2)' });
	        var bleedingRibbonBottom = currentCanvas.paper.rect(currentCanvas.bleedings.left * currentCanvas.ratio, (currentCanvas.oriHeight - currentCanvas.bleedings.bottom) * currentCanvas.ratio, (currentCanvas.oriWidth - currentCanvas.bleedings.left - currentCanvas.bleedings.right) * currentCanvas.ratio, currentCanvas.bleedings.bottom * currentCanvas.ratio);
	        bleedingRibbonBottom.attr({ fill: 'rgba(255, 255, 255, .6)', stroke: 'rgba(255, 255, 255, 0.2)' });
	        var bleedingRibbonRight = currentCanvas.paper.rect((currentCanvas.oriWidth - currentCanvas.bleedings.right) * currentCanvas.ratio, 0, currentCanvas.bleedings.right * currentCanvas.ratio, currentCanvas.height);
	        bleedingRibbonRight.attr({ fill: 'rgba(255, 255, 255, .6)', stroke: 'rgba(255, 255, 255, 0)' });

	        var bleedingInner = currentCanvas.paper.rect(currentCanvas.bleedings.left * currentCanvas.ratio, currentCanvas.bleedings.top * currentCanvas.ratio, (currentCanvas.oriWidth - currentCanvas.bleedings.left - currentCanvas.bleedings.right) * currentCanvas.ratio, (currentCanvas.oriHeight - currentCanvas.bleedings.top - currentCanvas.bleedings.bottom) * currentCanvas.ratio);
	        bleedingInner.attr({ fill: 'rgba(255, 255, 255, 0)', stroke: '#646464' });
	        bleedingInner.node.id = 'element-bg';
	    },

	    // create outer line
	    createOuterLine: function() {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        currentCanvas.outerLine = currentCanvas.paper.path('M0.5 0.5L' + (currentCanvas.width) + ' 0.5L' + (currentCanvas.width) + ' ' + (currentCanvas.height) + 'L0.5 ' + (currentCanvas.height) + 'L0.5 0.5');
	        currentCanvas.outerLine.attr({ stroke: '#7b7b7b' });
	    },

	    // create inner line (e.g. for logo area)
	    createInnerLine: function() {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	            prj = Store.projectSettings[Store.currentSelectProjectIndex];

	        var specData = SpecController.analyseSpec({ size: prj.size, product: prj.product });
	        var logoX = specData.logo.x * currentCanvas.ratio,
	            logoY = specData.logo.y * currentCanvas.ratio,
	            logoWidth = specData.logo.width * currentCanvas.ratio,
	            logoHeight = specData.logo.height * currentCanvas.ratio;

	        currentCanvas.innerLine = currentCanvas.paper.path('M' + logoX + ' ' + logoY + 'L' + (logoX + logoWidth) + ' ' + logoY + 'L' + (logoX + logoWidth) + ' ' + (logoY + logoHeight) + 'L' + logoX + ' ' + (logoY + logoHeight) + 'L' + logoX + ' ' + logoY);
	        currentCanvas.innerLine.attr({ stroke: '#7b7b7b', 'stroke-dasharray': '-' });
	    },

	    // create inner line
	    createCenterLine: function() {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	            centerX = currentCanvas.width / 2;

	        // NOTE: we think when center line exists, spine lines do not, thus we use spineLeft element instead
	        currentCanvas.spineLeft = currentCanvas.paper.path('M' + centerX + ' 0L' + centerX + ' ' + currentCanvas.height);
	        currentCanvas.spineLeft.attr({ stroke: '#7b7b7b', 'stroke-dasharray': '-' });
	    },

	    // create spine lines
	    createSpineLine: function() {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        // NOTE: for now, we think spine cannot be 0 width and must be in cover page
	        if (currentCanvas.oriSpineWidth !== 0) {
	            var spineWidth = currentCanvas.oriSpineWidth * currentCanvas.ratio,
	                spineLeftX = (currentCanvas.width - spineWidth) / 2,
	                spineRightX = spineLeftX + spineWidth;

	            currentCanvas.spineLeft = currentCanvas.paper.path('M' + spineLeftX + ' 0L' + spineLeftX + ' ' + currentCanvas.height);
	            currentCanvas.spineLeft.attr({ stroke: '#646464', 'stroke-dasharray': '-' });
	            currentCanvas.spineRight = currentCanvas.paper.path('M' + spineRightX + ' 0L' + spineRightX + ' ' + currentCanvas.height);
	            currentCanvas.spineRight.attr({ stroke: '#646464', 'stroke-dasharray': '-' });
	        };
	    },

	    changeClickDepth: function(oParams) {
	        if (oParams && oParams.idx != undefined) {
	            var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	            // save the selected image index into store
	            currentCanvas.selectedIdx = oParams.idx;
	            // currentCanvas.elements[oParams.idx].toFront();
	            // console.log('click ON - set element ' + oParams.idx + ' to front');

	            // change the dep value after toFront
	            this.changeDepthValue({ idx: oParams.idx, targetDepth: currentCanvas.elements.length - 1 })
	            this.freshElementDepth();
	            // this.spineLinesToTop();

	            // apply the change
	            currentCanvas.trans[oParams.idx].apply();

	            this.highlightSelection(oParams.idx);
	        };
	    },

	    sendToBack: function(oParams) {
	        if (oParams && oParams.idx != undefined) {
	            // var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	            // currentCanvas.selectedIdx = currentCanvas.elements.length - 1;
	            // currentCanvas.elements[oParams.idx].toBack();

	            this.changeDepthValue({ idx: oParams.idx, targetDepth: 0 });
	            // this.freshElementDepth();
	            //
	            // if(currentCanvas.elementBg) {
	            // 	currentCanvas.elementBg.toBack();
	            // };

	            // this.spineLinesToTop();

	            // currentCanvas.trans[oParams.idx].apply();

	            // this.blurSelection(oParams.idx);
	            // console.log('after apply', currentCanvas.elements[oParams.idx], currentCanvas.trans[oParams.idx]);
	        };
	    },

	    // change the dep value we hold for further depth controlling
	    changeDepthValue: function(oParams) {
	        if (oParams && oParams.idx != undefined && oParams.targetDepth != undefined) {
	            var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	                currentDepth = currentCanvas.params[oParams.idx].dep,
	                targetDepth = oParams.targetDepth;

	            if (targetDepth === currentDepth) {
	                return;
	            } else if (targetDepth > currentDepth) {
	                // pop up
	                for (var i = 0; i < currentCanvas.params.length; i++) {
	                    if (currentCanvas.params[i].dep > currentDepth && currentCanvas.params[i].dep <= targetDepth) {
	                        currentCanvas.params[i].dep--;
	                    };
	                };
	                currentCanvas.params[oParams.idx].dep = targetDepth;
	            } else {
	                // sink down
	                for (var i = 0; i < currentCanvas.params.length; i++) {
	                    if (currentCanvas.params[i].dep < currentDepth && currentCanvas.params[i].dep >= targetDepth) {
	                        currentCanvas.params[i].dep++;
	                    };
	                };
	                currentCanvas.params[oParams.idx].dep = targetDepth;
	            };
	        };
	    },

	    // change real elements' depth by depth value we have
	    freshElementDepth: function() {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        // NOTE: we loop all elements and pick out dep value to push into a new array
	        // Then we sort this new array, next, we can change element(by index) to top for each of them in sequence
	        // e.g. index --  0  1  2  3
	        // their depth--  2  3  0  1
	        // after sorting the new array is like [{idx: 2, dep: 0}, {idx: 3, dep: 1}, {idx: 0, dep: 2}, {idx: 1, dep: 3}]
	        var depthAry = [];
	        for (var i = 0; i < currentCanvas.elements.length; i++) {
	            depthAry.push({
	                idx: i,
	                dep: currentCanvas.elements[i].dep
	            });
	        };
	        // sort array by depth value ASC
	        depthAry.sort(function(a, b) {
	            return a.dep - b.dep });
	        // now change the depth(we only need to change depth from second one, leave the first on bottom...)
	        for (i = 1; i < depthAry.length; i++) {
	            currentCanvas.elements[depthAry[i].idx].toFront();

	            // warn tip toFront
	            if (currentCanvas.warns[depthAry[i].idx] && currentCanvas.warns[depthAry[i].idx].el) {
	                currentCanvas.warns[depthAry[i].idx].el.toFront();
	            };
	        };

	        this.spineLinesToTop();
	    },

	    // fresh depth
	    freshDepth: function(removedIdx) {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	            fromDepth = currentCanvas.params[removedIdx].dep;

	        for (var i = 0; i < currentCanvas.params.length; i++) {
	            if (currentCanvas.params[i].dep > fromDepth) {
	                currentCanvas.params[i].dep--;
	            };
	        };
	    },

	    // fresh index
	    freshIdx: function(fromIdx) {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        for (var i = 0; i < currentCanvas.elements.length; i++) {
	            if (currentCanvas.elements[i].idx > fromIdx) {
	                currentCanvas.elements[i].idx--;

	                // for now, we need to change the dom element id as well
	                currentCanvas.elements[i].node.id = 'element-' + (i - 1);
	                // $('#element-'+ i).attr('id', 'element-' + (i - 1));
	            };
	        };
	    },

	    // make spine lines always top
	    spineLinesToTop: function() {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        if (currentCanvas.innerLine !== '') {
	            currentCanvas.innerLine.toFront();
	        };
	        if (currentCanvas.spineLeft !== '') {
	            currentCanvas.spineLeft.toFront();
	        };
	        if (currentCanvas.spineRight !== '') {
	            currentCanvas.spineRight.toFront();
	        };
	    },

	    showSpineLines: function() {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        if (currentCanvas.outerLine !== '') {
	            currentCanvas.outerLine.show();
	        };
	        if (currentCanvas.innerLine !== '') {
	            currentCanvas.innerLine.show();
	        };
	        if (currentCanvas.spineLeft !== '') {
	            currentCanvas.spineLeft.show();
	        };
	        if (currentCanvas.spineRight !== '') {
	            currentCanvas.spineRight.show();
	        };
	    },

	    hideSpineLines: function() {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        if (currentCanvas.outerLine !== '') {
	            currentCanvas.outerLine.hide();
	        };
	        if (currentCanvas.innerLine !== '') {
	            currentCanvas.innerLine.hide();
	        };
	        if (currentCanvas.spineLeft !== '') {
	            currentCanvas.spineLeft.hide();
	        };
	        if (currentCanvas.spineRight !== '') {
	            currentCanvas.spineRight.hide();
	        };
	    },

	    // highlight selection
	    highlightSelection: function(idx) {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        idx ? idx : idx = currentCanvas.selectedIdx;

	        for (var i = 0; i < currentCanvas.trans.length; i++) {
	            currentCanvas.trans[i].setOpts({ draw: false });
	        };

	        if (currentCanvas.elements[idx].elType === 'image' || currentCanvas.elements[idx].elType === 'logo') {
	            var options = {
	                drag: ['self'],
	                rotate: false,
	                scale: ['bboxCorners'],
	                keepRatio: true,
	                snap: { rotate: 1, scale: 1, drag: 1 },
	                draw: ['bbox'],
	                // draw: false,
	                range: { scale: [0, 99999] },
	                idx: idx
	            };
	        } else {
	            var options = {
	                drag: ['self'],
	                rotate: false,
	                // scale: false,
	                scale: ['bboxCorners'],
	                keepRatio: true,
	                snap: { rotate: 0, scale: 1, drag: 1 },
	                draw: ['bbox'],
	                range: { scale: [0, 99999] },
	                idx: idx

	                // rotate: [],
	                //    // keepRatio: true,
	                // scale: [],
	                // snap: { rotate: 0, scale: 0, drag: 1 },
	                // draw: 'bbox',
	                // drag: 'self',
	                // idx: idx
	            };
	        };
	        currentCanvas.trans[idx].setOpts(options);
	        currentCanvas.trans[idx].apply();

	        // fix bbox style
	        if (true) {
	            $('rect.handle.bbox.index-0').css('cursor', 'nw-resize');
	            $('rect.handle.bbox.index-1').css('cursor', 'ne-resize');
	            $('rect.handle.bbox.index-2').css('cursor', 'se-resize');
	            $('rect.handle.bbox.index-3').css('cursor', 'sw-resize');
	        };

	    },

	    blurSelection: function(idx) {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        idx ? idx : idx = currentCanvas.selectedIdx;

	        currentCanvas.trans[idx].setOpts({ draw: false });
	    },

	    // get default positions about new element based on where user dropped element
	    // NOTE: this function provides REAL params, not view params
	    getDefaultNewElementPosition: function(oData) {
	        if (oData) {
	            oData.x = oData.x || 0;
	            oData.y = oData.y || 0;

	            var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	                fullWidth = currentCanvas.width / currentCanvas.ratio,
	                fullHeight = currentCanvas.height / currentCanvas.ratio,
	                limitedWidth = limitedHeight = 150 / currentCanvas.ratio,
	                targetX = oData.x / currentCanvas.ratio,
	                targetY = oData.y / currentCanvas.ratio;
	            // get the suitable element width and height
	            var imageId = Store.dragData.imageId,
	                imageDetail = ImageListManage.getImageDetail(imageId),
	                elWidth, elHeight;

	            // // check if user drop image into logo area(in cover page, page index 0)
	            // if(Store.selectedPageIdx === 0 && this.isInLogoArea(targetX, targetY)) {
	            // 	// fit image into logo area(meet type)
	            // 	var specData = SpecController.analyseSpec({ product: Store.projectSettings[Store.currentSelectProjectIndex].product, size: Store.projectSettings[Store.currentSelectProjectIndex].size });
	            // 	var logoData = specData.logo;
	            //
	            // 	if(imageDetail) {
	            // 		elWidth = imageDetail.width;
	            // 		elHeight = imageDetail.height;
	            // 	}
	            // 	else {
	            // 		// some errors occured... but to be robust, we consider it and set the new element width, height based on logo width, logo height
	            // 		elWidth = logoData.width;
	            // 		elHeight = logoData.height;
	            // 	};
	            //
	            // 	// fix element width, height value
	            // 	var divElement = elWidth / elHeight,
	            // 			divLogo = logoData.width / logoData.height;
	            // 	if(divElement >= divLogo) {
	            // 		// width will meet the limit at first
	            // 		var resizeRatio = logoData.width / elWidth;
	            //
	            // 		elWidth = elWidth * resizeRatio;
	            // 		elHeight = elHeight * resizeRatio;
	            // 	}
	            // 	else {
	            // 		// height will meet the limit at first
	            // 		var resizeRatio = logoData.height / elHeight;
	            //
	            // 		elWidth = elWidth * resizeRatio;
	            // 		elHeight = elHeight * resizeRatio;
	            // 	};
	            //
	            // 	// get element x, y positions by resized elWidth, elHeight
	            // 	var elX = logoData.x + (logoData.width - elWidth) / 2,
	            // 			elY = logoData.y + (logoData.height - elHeight) / 2;
	            //
	            // 	return {
	            // 		x: elX,
	            // 		y: elY,
	            // 		width: elWidth,
	            // 		height: elHeight
	            // 	};
	            // }
	            // else {
	            // normal case
	            if(imageDetail) {
	            elWidth = imageDetail.width;
	            elHeight = imageDetail.height;
	            //elWidth = fullWidth;
	            //elHeight = fullHeight;
	             }
	            else {
	            	// some errors occured... but to be robust, we consider it and set the new element width, height based on fullWidth, fullHeight
	            	elWidth = fullWidth / 3;
	            	elHeight = fullHeight / 3;
	            };

	            // fix element width, height value
	            var divElement = elWidth / elHeight,
	            		// divCanvas = fullWidth / fullHeight;
	            		divCanvas = limitedWidth / limitedHeight;
	            if(divElement >= divCanvas) {
	            	// width will meet the limit at first
	            	var resizeRatio = limitedWidth / elWidth;
	            }
	            else {
	            	// height will meet the limit at first
	            	var resizeRatio = limitedHeight / elHeight;
	            };
	            elWidth *= resizeRatio;
	            elHeight *= resizeRatio;
	            // if(divElement >= divCanvas) {
	            // 	// width will meet the limit at first
	            // 	if(elWidth > (fullWidth * 4 / 5)) {
	            // 		// width is too large, resize by width
	            // 		var resizeRatio = (fullWidth * 4 / 5) / elWidth;
	            //
	            // 		elWidth = elWidth * resizeRatio;
	            // 		elHeight = elHeight * resizeRatio;
	            // 	};
	            // }
	            // else {
	            // 	// height will meet the limit at first
	            // 	if(elHeight > (fullHeight * 4 / 5)) {
	            // 		// height is too large, resize by height
	            // 		var resizeRatio = (fullHeight * 4 / 5) / elHeight;
	            //
	            // 		elWidth = elWidth * resizeRatio;
	            // 		elHeight = elHeight * resizeRatio;
	            // 	};
	            // };

	            // // fix element x, y positions if needed (e.g. the target position is too close to the edges of canvas)
	            // // NOTE: in fact, this situation only happens next to right, bottom edge
	            // if(targetX > (fullWidth * 19 / 20)) {
	            // 	targetX -= fullWidth / 20;
	            // };
	            // if(targetY > (fullHeight * 19 / 20)) {
	            // 	targetY -= fullHeight / 20;
	            // };
	            var fixedX = Store.dragData.cursorX / currentCanvas.ratio,
	            		fixedY = Store.dragData.cursorY / currentCanvas.ratio;
	            console.log(fixedX, fixedY);
	            targetX -= fixedX;
	            targetY -= fixedY;

	            /*return {
	                x: 0,
	                y: 0,
	                width: elWidth,
	                height: elHeight
	            };*/
	            return {
	                    x: targetX,
	                    y: targetY,
	                    width: elWidth,
	                    height: elHeight
	            };
	            // };
	        } else {
	            return {
	                x: 0,
	                y: 0,
	                width: 300,
	                height: 300
	            };
	        };
	    },

	    // // check if position is in logo area(in real size)
	    // isInLogoArea: function(targetX, targetY) {
	    // 	if(targetX != null && targetY != null) {
	    // 		var specData = SpecController.analyseSpec({ product: Store.projectSettings[Store.currentSelectProjectIndex].product, size: Store.projectSettings[Store.currentSelectProjectIndex].size });
	    // 		var logoData = specData.logo;
	    //
	    // 		if(targetX >= logoData.x && targetX <= (logoData.x + logoData.width) && targetY >= logoData.y && targetY <= (logoData.y + logoData.height)) {
	    // 			// in logo area
	    // 			return true;
	    // 		}
	    // 		else {
	    // 			return false;
	    // 		};
	    // 	}
	    // 	else {
	    // 		return false;
	    // 	};
	    // },

	    // init canvas data -- main
	    initCanvasData: function() {
	        if (Store.projectSettings && Store.projectJson) {

	            var projectJson = Store.projectJson;
	            this.initImageList(projectJson.project);
	            this.initProject(projectJson.project);

	        };
	    },

	    // init image list
	    initImageList: function(projectJson) {
	        if (projectJson) {
	            var imgCount = projectJson.images.length;

	            Store.imageList = [];
	            if (imgCount > 0) {
	                for (var i = 0; i < imgCount; i++) {
	                    var imageItem = projectJson.images[i];
	                    delete imageItem.dep;
	                    imageItem['usedCount'] = 0;
	                    Store.imageList.push(imageItem);
	                };

	                // NOTE: for now, to fit for legacy data without encImgId, we use ajax to fecthing again
	                if(!projectJson.images[0].encImgId) {
	                  ImageService.getEncImageIds();
	                };

	                // push in url now
	                for (i = 0; i < imgCount; i++) {
	                  Store.imageList[i].url = Store.domains.uploadUrl + '/upload/UploadServer/PicRender?qaulityLevel=0&puid=' + Store.imageList[i].encImgId + '&rendersize=fit';
	                };
	            };
	        };
	    },

	    // init project
	    initProject: function(projectJson) {
	        var _this = this;
	        if (projectJson) {
	            Store.projects[0] = {};
	            Store.projects[0].pages = [];
	            for (var k = 0; k < projectJson.pages.length; k++) {
	                var currentPage = projectJson.pages[k];

	                Store.projects[0].pages.push({
	                    type: 'Page',
	                    name: '',
	                    guid: currentPage.id,
	                    isDeleted: false,
	                    canvas: {
	                        oriWidth: 0, // real size
	                        oriHeight: 0,
	                        oriX: 0,
	                        oriY: 0,
	                        oriBgWidth: 0,
	                        oriBgHeight: 0,
	                        oriSpineWidth: 0,
	                        realBleedings: {},
	                        frameBaseSize: {},
	                        frameBorderThickness: {},
	                        boardInFrame: {},
	                        boardInMatting: {},
	                        mattingSize: {},
	                        expendSize: {},
	                        foreground: {},
	                        mirrorSize: {},
	                        photoLayer: {},
	                        params: [], // all elements params/settings from backend
	                        pageItems: [],
	                        centerElements: []
	                    }
	                });

	                var currentCanvas = Store.projects[0].pages[k].canvas;

	                if(Store.projectSettings[Store.currentSelectProjectIndex].product) {
	                    // new print
	                    currentCanvas.realBleedings = JsonProjectManage.getLMCBleedSize(k);
	                    currentCanvas.frameBaseSize = JsonProjectManage.getLMCBaseSize(k);
	                    currentCanvas.canvasBordeThickness = JsonProjectManage.getLMCCanvasBorder(k);
	                    currentCanvas.mirrorSize = { top: currentCanvas.canvasBordeThickness.top + currentCanvas.realBleedings.top, right: currentCanvas.canvasBordeThickness.right + currentCanvas.realBleedings.right, bottom: currentCanvas.canvasBordeThickness.bottom + currentCanvas.realBleedings.bottom, left: currentCanvas.canvasBordeThickness.left + currentCanvas.realBleedings.left };
	                    currentCanvas.photoLayer = JsonProjectManage.getLMCPhotoLayer(k);
	                    currentCanvas.foreground = _this.getForeground(currentCanvas.frameBaseSize, {left:0,top:0,right:0,bottom:0},currentCanvas.photoLayer,k);
	                    currentCanvas.oriWidth = currentCanvas.photoLayer.width;
	                    currentCanvas.oriHeight = currentCanvas.photoLayer.height;
	                    currentCanvas.oriBgWidth = currentCanvas.foreground.width;
	                    currentCanvas.oriBgHeight = currentCanvas.foreground.height;
	                    var foreground = _this.getForegroundVariable();
	                    currentCanvas.oriX = foreground.left * currentCanvas.foreground.ratioX - currentCanvas.realBleedings.left - currentCanvas.canvasBordeThickness.left;
	                    currentCanvas.oriY = foreground.top * currentCanvas.foreground.ratioY - currentCanvas.realBleedings.top - currentCanvas.canvasBordeThickness.top;
	                    Store.mirrorLength = currentCanvas.canvasBordeThickness.top;
	                  
	                };

	                // get elements' size params
	                var paramsCount = currentPage.elements.length;
	                for (var j = 0; j < paramsCount; j++) {
	                    var currentElement = currentPage.elements[j];
	                    var imgId = currentElement.imageid || '',
	                        imageDetail = ImageListManage.getImageDetail(imgId),
	                        sourceImageUrl = '';

	                    imageDetail !== '' ? sourceImageUrl = Store.domains.uploadUrl + '/upload/UploadServer/PicRender?qaulityLevel=0&puid=' + imageDetail.encImgId + '&rendersize=fit' : sourceImageUrl;
	                    var ox = currentElement.x || 0,
	                        oy = currentElement.y || 0,
	                        ow = currentElement.width || 0,
	                        oh = currentElement.height || 0;
	                    var px=currentElement.px || 0;
	                    var py=currentElement.py || 0;
	                    var pw=currentElement.pw || 0;
	                    var ph=currentElement.ph || 0;
	                    ox=px*currentCanvas.photoLayer.width;
	                    oy=py*currentCanvas.photoLayer.height;
	                    ow=pw*currentCanvas.photoLayer.width;
	                    oh=ph*currentCanvas.photoLayer.height;
	                    var elType = '';
	                    if (currentElement.type === 'PhotoElement') {
	                        elType = 'image';
	                    } else if (currentElement.type === 'TextElement') {
	                        elType = 'text';
	                    };

	                    currentCanvas.params.push({
	                        id: j,
	                        elType: elType,
	                        // url: sourceImageUrl,
	                        url: '',
	                        isRefresh: false,
	                        text: decodeURIComponent(currentElement.text) || '',
	                        // x: currentCanvas.oriWidth * (parseFloat($(sXml).find('frameBoard').eq(k).find('elements').eq(i).find('element').eq(j).attr('px')) || 0),
	                        x: ox,
	                        // y: currentCanvas.oriHeight * (parseFloat($(sXml).find('frameBoard').eq(k).find('elements').eq(i).find('element').eq(j).attr('py')) || 0),
	                        y: oy,
	                        // width: currentCanvas.oriWidth * (parseFloat($(sXml).find('frameBoard').eq(k).find('elements').eq(i).find('element').eq(j).attr('pw')) || 0),
	                        width: ow,
	                        // height: currentCanvas.oriHeight * (parseFloat($(sXml).find('frameBoard').eq(k).find('elements').eq(i).find('element').eq(j).attr('ph')) || 0),
	                        height: oh,
	                        rotate: currentElement.rot,
	                        dep: currentElement.dep,
	                        imageId: imgId,
	                        imageGuid: imageDetail.guid || '',
	                        imageWidth: imageDetail.width || '',
	                        imageHeight: imageDetail.height || '',
	                        imageRotate: currentElement.imgRot || 0,
	                        // imageFlip: ,
	                        cropPX: Number(currentElement.cropLUX) || 0,
	                        cropPY: Number(currentElement.cropLUY) || 0,
	                        cropPW: Number(currentElement.cropRLX - currentElement.cropLUX) || 1,
	                        cropPH: Number(currentElement.cropRLY - currentElement.cropLUY) || 1,
	                        fontFamily: decodeURIComponent(currentElement.fontFamily) || '',
	                        fontSize: currentCanvas.oriHeight * currentElement.fontSize || 0,
	                        fontWeight: currentElement.fontWeight || '',
	                        textAlign: currentElement.textAlign || '',
	                        fontColor: currentElement.color || '',
	                        style: {
	                            brightness: currentElement.style && currentElement.style.brightness ? currentElement.style.brightness : 0
	                        }
	                    });
	                };

	                // robust enhancement for wrong depth value from other ends
	                currentCanvas.params.sort(function(a, b) {
	                    return a.dep - b.dep;
	                });

	                // fix the depth value
	                for(j = 0; j < currentCanvas.params.length; j++) {
	                    currentCanvas.params[j].dep = j;
	                };
	            };

	        };
	    },

	    // load project params into pages setting
	    loadProjectIntoPages: function(idx) {
	        idx != undefined && idx != null ? idx : idx = Store.currentSelectProjectIndex;
	        Store.pages = [];

	        // var pickedProject = Store.projects[idx];
	        var pickedProject = Store.projects[0];

	        for (var i = 0; i < pickedProject.pages.length; i++) {
	            Store.pages.push({
	                type: pickedProject.pages[i].type || '',
	                name: '',
	                isDeleted: false,
	                guid:pickedProject.pages[i].guid || '',
	                canvas: {
	                    isInited: false,
	                    width: 0, // canvas width
	                    height: 0, // canvas height
	                    x: 0,
	                    y: 0,
	                    bgWidth: 0,
	                    bgHeight: 0,
	                    ratio: 1, // view size / real size,  eg. ratio = width / oriWidth
	                    oriWidth: pickedProject.pages[i].canvas.oriWidth, // real size
	                    oriHeight: pickedProject.pages[i].canvas.oriHeight,
	                    oriX: pickedProject.pages[i].canvas.oriX,
	                    oriY: pickedProject.pages[i].canvas.oriY,
	                    oriBgWidth: pickedProject.pages[i].canvas.oriBgWidth,
	                    oriBgHeight: pickedProject.pages[i].canvas.oriBgHeight,
	                    oriSpineWidth: pickedProject.pages[i].canvas.oriSpineWidth,
	                    bleedings: {}, // bleeding sizes
	                    realBleedings: pickedProject.pages[i].canvas.realBleedings,
	                    frameBaseSize: pickedProject.pages[i].canvas.frameBaseSize,
	                    frameBorderThickness: pickedProject.pages[i].canvas.frameBorderThickness,
	                    canvasBordeThickness: pickedProject.pages[i].canvas.canvasBordeThickness,
	                    boardInFrame: pickedProject.pages[i].canvas.boardInFrame,
	                    boardInMatting: pickedProject.pages[i].canvas.boardInMatting,
	                    mattingSize: pickedProject.pages[i].canvas.mattingSize,
	                    expendSize: pickedProject.pages[i].canvas.expendSize,
	                    foreground: pickedProject.pages[i].canvas.foreground,
	                    mirrorSize: pickedProject.pages[i].canvas.mirrorSize,
	                    photoLayer: pickedProject.pages[i].canvas.photoLayer,
	                    selectedIdx: 0, // the image index in params which was selected
	                    params: pickedProject.pages[i].canvas.params.slice(0), // all elements params/settings from backend
	                    elements: [], // svg current saved elements params/settings, with extra data
	                    outerLine: '', // to store the outer line element
	                    innerLine: '', // to store the inner line element
	                    bleedingRibbonLeft: '', // to store the left bleeding element
	                    bleedingRibbonRight: '', // to store the right bleeding element
	                    bleedingRibbonTop: '', // to store the top bleeding element
	                    bleedingRibbonBottom: '', // to store the bottom bleeding element
	                    spineLeft: '', // to store the left spine element
	                    spineRight: '', // to store the right spine element
	                    elementBg: '', // to store the bg element
	                    pageItems: [],
	                    centerElements: []
	                }
	            });

	            // 给工厂的预览页面添加 根据页面 guid 选择当前下标的功能。
	            if(Store.isPreview && Store.selectedPageGuid && pickedProject.pages[i].guid === Store.selectedPageGuid){
	                setTimeout(function(i){
	                    Store.selectedPageIdx = i;
	                    Store.currentSelectProjectIndex = i;
	                },300,i);
	            }
	        };
	    },

	    // sync project data
	    syncProjectData: function(nProjectIdx) {
	        // target is sync pages setting back into project params
	        nProjectIdx != undefined && nProjectIdx != null ? nProjectIdx : nProjectIdx = Store.currentSelectProjectIndex;

	        for (var j = 0; j < Store.pages.length; j++) {
	            var currentCanvas = Store.pages[j].canvas;

	            // if(currentCanvas.elements.length == 0 && currentCanvas.params.length > 0) {
	            // 	// meet a page which not inited yet
	            // 	// do nothing
	            // }
	            // else {
	            // 	// reset trash params values
	            // 	currentCanvas.params = [];
	            //
	            // 	for(var i = 0; i < currentCanvas.elements.length; i++) {
	            // 		var newParams = ParamsManage.getParamsValueByElement(i, j);
	            //
	            // 		currentCanvas.params.push(newParams);
	            // 	};
	            // };

	            Store.projects[nProjectIdx].pages[Store.selectedPageIdx].canvas.params = [];
	            Store.projects[nProjectIdx].pages[Store.selectedPageIdx].canvas.params = currentCanvas.params.slice(0);

	            // // NOTE: for t-shirt, we need to sync data into ALL project params
	            // for(i = 0; i < Store.projectSettings.length; i++) {
	            // 	if(i > Store.projects.length - 1) {
	            // 		// missing a new added project
	            // 		this.createProjectData();
	            // 	}
	            // 	else {
	            // 		Store.projects[i].pages[j].canvas.params = [];
	            // 		Store.projects[i].pages[j].canvas.params = currentCanvas.params.slice(0);
	            // 	};
	            // };
	        };

	    },

	    createProjectData: function() {
	        Store.projects.push(Store.projects[0]);
	    },

	    freshPageData: function(pageIdx) {
	        var useIndex = (typeof pageIdx !== 'undefined') ? pageIdx : Store.currentSelectProjectIndex;

	        var currentCanvas = Store.pages[useIndex].canvas,
	            _this = this;

	        if(Store.projectSettings[useIndex].product) {
	          currentCanvas.realBleedings = JsonProjectManage.getLMCBleedSize(useIndex);
	          currentCanvas.frameBaseSize = JsonProjectManage.getLMCBaseSize(useIndex);
	          currentCanvas.photoLayer = JsonProjectManage.getLMCPhotoLayer(useIndex);
	          currentCanvas.foreground = _this.getForeground(currentCanvas.frameBaseSize, currentCanvas.expendSize,currentCanvas.photoLayer,useIndex);
	          currentCanvas.oriWidth = currentCanvas.photoLayer.width;
	          currentCanvas.oriHeight = currentCanvas.photoLayer.height;
	          currentCanvas.oriBgWidth = currentCanvas.foreground.width;
	          currentCanvas.oriBgHeight = currentCanvas.foreground.height;
	          var foreground = _this.getForegroundVariable();
	          currentCanvas.oriX = foreground.left * currentCanvas.foreground.ratioX - currentCanvas.realBleedings.left - currentCanvas.canvasBordeThickness.left;
	          currentCanvas.oriY = foreground.top * currentCanvas.foreground.ratioY - currentCanvas.realBleedings.top - currentCanvas.canvasBordeThickness.top;
	          Store.mirrorLength = currentCanvas.mirrorSize.top;
	        }
	    },
	    autoLayout : function(){
	        if(Store.autoLayout){
	            var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	                imgParams = [],
	                imgNums = 0,
	                hImgNum = 0,
	                vImgNum = 0,
	                fitTpl;
	            for(var i=0;i<currentCanvas.params.length;i++){
	                var item = currentCanvas.params[i];
	                if(item.elType==='image'){
	                    imgParams.push(item);
	                    if(item.width>item.height){
	                        hImgNum++;
	                    }else{
	                      vImgNum++;
	                    }
	                }
	            }
	            imgNums = imgParams.length;
	            fitTpl = this.getFitTemplate(imgNums,hImgNum,vImgNum);
	            if(fitTpl){
	                Store.imagesIndex = fitTpl.imageNum;
	                __webpack_require__(34).getTemplateItemInfo(fitTpl.guid,fitTpl.designSize);
	                Store.projectSettings[Store.currentSelectProjectIndex].tplGuid = fitTpl.guid;
	                Store.projectSettings[Store.currentSelectProjectIndex].tplSuitId = fitTpl.suitId;
	            }
	        }
	    },
	    fixRotatePhotoElement: function(pageIdx) {
	        var useIndex = (typeof pageIdx !== 'undefined') ? pageIdx : Store.currentSelectProjectIndex;

	        var currentCanvas = Store.pages[useIndex].canvas;

	        for (var i = 0; i < currentCanvas.params.length; i++) {
	            console.log(currentCanvas.params[i].width / currentCanvas.oriWidth, currentCanvas.params[i].height / currentCanvas.oriHeight);
	            //if (currentCanvas.params[i].width / currentCanvas.oriWidth > 0.95 && currentCanvas.params[i].height / currentCanvas.oriHeight > 0.95) {
	                console.log("in fix");
	                var temp = currentCanvas.params[i].width;
	                currentCanvas.params[i].width = currentCanvas.params[i].height;
	                currentCanvas.params[i].height = temp;
	                if (currentCanvas.params[i].imageId) {
	                    var imageId=currentCanvas.params[i].imageId;

	                    var imageDetail = __webpack_require__(25).getImageDetail(imageId);

	                    if(Math.abs(currentCanvas.params[i].imageRotate) === 90) {
	                        var cWidth = currentCanvas.params[i].imageHeight,
	                            cHeight = currentCanvas.params[i].imageWidth;
	                    }
	                    else {
	                        var cWidth = currentCanvas.params[i].imageWidth,
	                            cHeight = currentCanvas.params[i].imageHeight;
	                    };

	                    var defaultCrops = __webpack_require__(35).getDefaultCrop(cWidth, cHeight, currentCanvas.params[i].width, currentCanvas.params[i].height);

	                    var px = defaultCrops.px,
	                        py = defaultCrops.py,
	                        pw = defaultCrops.pw,
	                        ph = defaultCrops.ph;

	                    currentCanvas.params[i].cropX = imageDetail.width * px;
	                    currentCanvas.params[i].cropY = imageDetail.height * py;
	                    currentCanvas.params[i].cropW = imageDetail.width * pw;
	                    currentCanvas.params[i].cropH = imageDetail.height * ph;

	                    currentCanvas.params[i].cropPX = px;
	                    currentCanvas.params[i].cropPY = py;
	                    currentCanvas.params[i].cropPW = pw;
	                    currentCanvas.params[i].cropPH = ph;
	                }
	            //};
	        };
	    },
	    fixResizePhotoElement: function(pageIdx) {

	        var useIndex = (typeof pageIdx !== 'undefined') ? pageIdx : Store.currentSelectProjectIndex;

	        var currentCanvas = Store.pages[useIndex].canvas;
	        var realBleedings = JsonProjectManage.getLMCBleedSize(useIndex);
	        var frameBaseSize = JsonProjectManage.getLMCBaseSize(useIndex);
	        var canvasBordeThickness = JsonProjectManage.getLMCCanvasBorder(useIndex);
	        var mirrorSize = { top: canvasBordeThickness.top + realBleedings.top, right: canvasBordeThickness.right + realBleedings.right, bottom: canvasBordeThickness.bottom + realBleedings.bottom, left: canvasBordeThickness.left + realBleedings.left };
	        var photoLayer = JsonProjectManage.getLMCPhotoLayer(useIndex);
	        
	        currentCanvas.params[0].width = photoLayer.width-2*mirrorSize.left;
	        currentCanvas.params[0].height = photoLayer.height-2*mirrorSize.top;
	        currentCanvas.params[0].x = mirrorSize.left;
	        currentCanvas.params[0].y = mirrorSize.top;
	        var imageId=currentCanvas.params[0].imageId;


	        var imageDetail = __webpack_require__(25).getImageDetail(imageId);
	        var defaultCrops = __webpack_require__(35).getDefaultCrop(currentCanvas.params[0].imageWidth, currentCanvas.params[0].imageHeight, currentCanvas.params[0].width, currentCanvas.params[0].height);
	        
	        var px = defaultCrops.px,
	            py = defaultCrops.py,
	            pw = defaultCrops.pw,
	            ph = defaultCrops.ph;

	        currentCanvas.params[0].cropX = imageDetail.width * px;
	        currentCanvas.params[0].cropY = imageDetail.height * py;
	        currentCanvas.params[0].cropW = imageDetail.width * pw;
	        currentCanvas.params[0].cropH = imageDetail.height * ph;

	        currentCanvas.params[0].cropPX = px;
	        currentCanvas.params[0].cropPY = py;
	        currentCanvas.params[0].cropPW = pw;
	        currentCanvas.params[0].cropPH = ph;

	    },
	    getTemplateParams:function(xml){
	        var params=[];
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	        var himage=[];
	        var vimage=[];
	        var texts=[];
	        console.log('0',currentCanvas.params);
	        for (var i = 0; i < currentCanvas.params.length; i++) {
	            console.log(currentCanvas.params[i]);
	            if(currentCanvas.params[i].elType==="image"&&currentCanvas.params[i].imageId){
	                if(currentCanvas.params[i].width>currentCanvas.params[i].height){
	                    vimage.push({id:currentCanvas.params[i].imageId,guid:currentCanvas.params[i].imageGuid,width:currentCanvas.params[i].imageWidth,height:currentCanvas.params[i].imageHeight,rotate:currentCanvas.params[i].imageRotate});
	                }else{
	                    himage.push({id:currentCanvas.params[i].imageId,guid:currentCanvas.params[i].imageGuid,width:currentCanvas.params[i].imageWidth,height:currentCanvas.params[i].imageHeight,rotate:currentCanvas.params[i].imageRotate});
	                }
	            }else if(currentCanvas.params[i].elType==="text"){
	                texts.push(currentCanvas.params[i]);
	            }


	        };
	        console.log('1',vimage);
	        console.log('2',himage);
	        console.log('3',texts);
	        var elementArr=[];
	        for(var i=0;i<$(xml).find('element').length;i++){
	            var element=$(xml).find('element').eq(i);
	            var object={};
	            object.px=parseFloat(element.attr('px'));
	            object.py=parseFloat(element.attr('py'));
	            object.pw=parseFloat(element.attr('pw'));
	            object.ph=parseFloat(element.attr('ph'));
	            object.dep=parseFloat(element.attr('dep'));
	            elementArr.push(object);
	        }
	        elementArr.sort(function(a,b){
	            return a.dep-b.dep});

	        for(var i=0;i<elementArr.length;i++){

	            var element=elementArr[i];
	            var elementX=element.px*currentCanvas.oriWidth;
	            var elementY=element.py*currentCanvas.oriHeight;
	            var elementW=element.pw*currentCanvas.oriWidth;
	            var elementH=element.ph*currentCanvas.oriHeight;
	            var imageObject=this.shiftTemplateSuitImage(himage,vimage,elementW,elementH);
	            var imageId="";
	            var imageGuid="";
	            var imageWidth=0;
	            var imageHeight=0;
	            var imageRotate=0;
	            if(imageObject){
	                imageId=imageObject.id;
	                imageGuid=imageObject.guid;
	                imageWidth=imageObject.width;
	                imageHeight=imageObject.height;
	                imageRotate=imageObject.rotate;
	            }

	            if(Math.abs(imageRotate) === 90) {
	                // special rorate
	                var cWidth = imageHeight,
	                        cHeight = imageWidth;
	            }
	            else {
	                var cWidth = imageWidth,
	                        cHeight = imageHeight;
	            };
	            console.log("crop",cWidth, cHeight, elementW, elementH);
	            var cropObject=__webpack_require__(35).getDefaultCrop(cWidth, cHeight, elementW, elementH);
	            var newImageParams = {
	                id: i,
	                elType: 'image',
	                url: '',
	                isRefresh: false,
	                x: elementX,
	                y: elementY,
	                width: elementW,
	                height: elementH,
	                rotate: 0,
	                dep: i,
	                imageId: imageId,
	                imageGuid:imageGuid,
	                imageRotate:imageRotate,
	                imageWidth:imageWidth,
	                imageHeight:imageHeight,
	                cropPX: cropObject.px,
	                cropPY: cropObject.py,
	                cropPW: cropObject.pw,
	                cropPH: cropObject.ph

	            };
	            params.push(newImageParams);

	        }

	        if(texts.length>0){
	            var dep=params.length;
	            for(var u=0;u<texts.length;u++){
	                var textItem=texts[u];
	                textItem.id=dep;
	                textItem.dep=dep;
	                params.push(textItem);
	                dep++;
	            }
	        }
	        console.log(params);
	        return params;
	    },
	    shiftTemplateSuitImage:function(himage,vimage,width,height){
	        var imageObject = null;
	        if(width>height){
	            imageObject = vimage.shift();
	        }else{
	            imageObject = himage.shift();
	        }

	        if(typeof(imageObject) == "undefined"){
	            if(width>height){
	                imageObject = himage.shift();
	            }else{
	                imageObject = vimage.shift();
	            }
	        }
	        if(typeof(imageObject) == "undefined"){
	            imageObject=null;
	        }
	        return imageObject;
	    },


	    getTemplateBySize : function(size){
	        var tpls = [];
	        for(var i=0;i<Store.templateList.length;i++){
	            if(Store.templateList[i].designSize===size){
	                tpls.push(Store.templateList[i]);
	            }
	        }
	        return tpls;
	    },

	    getTemplateByGuid : function(guid){
	        for(var i=0;i<Store.templateList.length;i++){
	            if(Store.templateList[i].guid===guid){
	                return Store.templateList[i];
	            }
	        }
	    },

	    getFitTemplate : function(imgsNum,hImgNum,vImgNum){
	        var size = Store.projectSettings[Store.currentSelectProjectIndex].size,
	            rotated = Store.projectSettings[Store.currentSelectProjectIndex].rotated,
	            tpls = [],
	            fitTpls = [],
	            optionalTpls = [];
	        if(rotated){
	            size = size.split('X')[1]+'X'+size.split('X')[0];
	        }
	        tpls = this.getTemplateBySize(size);
	        if(tpls.length>0){
	            for(var index in tpls){
	                if(tpls[index].imageNum == imgsNum && tpls[index].isCoverDefault && tpls[index].isCoverDefault ==='true'){
	                    return tpls[index];
	                }
	            }
	        }
	        for(var index in tpls){
	            var tpl = tpls[index];
	            if(imgsNum == tpl.imageNum){
	                if(hImgNum == tpl.horizontalNum){
	                    fitTpls.push(tpl);
	                }else if(vImgNum == tpl.verticalNum){
	                    fitTpls.push(tpl);
	                }
	                else {
	                    optionalTpls.push(tpl);
	                }
	            }
	        }

	        if(fitTpls.length){
	            if(fitTpls.length===1){
	                return fitTpls[0];
	            }else{
	                var rindex = Math.floor(Math.random()*fitTpls.length);
	                return fitTpls[rindex];
	            }
	        }else{
	            /*if(tpls.length>0){
	                if(tpls.length===1){
	                    return tpls[0];
	                }else{
	                    var rindex = Math.floor(Math.random()*fitTpls.length);
	                    return tpls[rindex];
	                }
	            }*/
	            if(optionalTpls.length){
	                var rindex = Math.floor(Math.random()*optionalTpls.length);
	                return optionalTpls[rindex];
	            }
	        }
	    },
	    getMattImageSize : function(){
	        var type = 'matteSize',
	            SpecManage = __webpack_require__(18),
	            keyPatterns = SpecManage.getParameterKeyPatternById(type).split("-"),
	            params = [],
	            res,
	            currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        for(var i=0,l=keyPatterns.length;i<l;i++){
	            var key = currentProject[keyPatterns[i]];
	            if(key){
	                var item = { key : keyPatterns[i], value : key};
	                params.push(item);
	            }
	        }
	        res = SpecManage.getParameter(type,params);
	        if(currentProject.rotated){
	            var width = parseFloat(res.rWidth);
	            var height = parseFloat(res.rHeight);
	        }
	        else {
	            var width = parseFloat(res.width);
	            var height = parseFloat(res.height);
	        }
	        if(res){
	            return {
	                width : width,
	                height : height,
	            }
	        }else{
	            return null;
	        }
	    },
	    getForegroundVariable : function(projectIdx){
	        var useIndex = (typeof projectIdx) !== 'undefined' ? projectIdx : Store.currentSelectProjectIndex;
	        var type = 'foreground',
	                SpecManage = __webpack_require__(18),
	                keyPatterns = SpecManage.getVariableKeyPatternById(type).split("-"),
	                params = [],
	                res,
	                currentProject = Store.projectSettings[useIndex];
	        for(var i=0,l=keyPatterns.length;i<l;i++){
	            var key = currentProject[keyPatterns[i]];
	            if(key){
	                var item = { key : keyPatterns[i], value : key};
	                params.push(item);
	            }
	        }
	        res = SpecManage.getVariable(type,params);
	        if(currentProject.rotated){
	            var width = parseFloat(res.rWidth);
	            var height = parseFloat(res.rHeight);
	            var left = parseFloat(res.rPaddingLeft);
	            var right = parseFloat(res.rPaddingRight);
	            var top = parseFloat(res.rPaddingTop);
	            var bottom = parseFloat(res.rPaddingBottom);
	        }
	        else {
	            var width = parseFloat(res.width);
	            var height = parseFloat(res.height);
	            var left = parseFloat(res.paddingLeft);
	            var right = parseFloat(res.paddingRight);
	            var top = parseFloat(res.paddingTop);
	            var bottom = parseFloat(res.paddingBottom);
	        }
	        if(res){
	            return {
	                width : width,
	                height : height,
	                left : left,
	                right : right,
	                top : top,
	                bottom : bottom,
	            }
	        }else{
	            return null;
	        }
	     },
	    getForeground : function(frameBaseSize, expendSize,photoLayer,projectIdx){
	           var foreground = this.getForegroundVariable(projectIdx);
	            if(foreground){
	                var ratioX = frameBaseSize.width / (foreground.width - foreground.left - foreground.right),
	                    realBgWidth =  ratioX * foreground.width,
	                    ratioY = frameBaseSize.height / (foreground.height - foreground.top - foreground.bottom),
	                    realBgHeight = ratioY * foreground.height,
	                    realX = photoLayer.x + foreground.left * ratioX,
	                    realY = photoLayer.y + foreground.top * ratioY;
	                return {
	                    width: realBgWidth,
	                    height: realBgHeight,
	                    x : realX,
	                    y : realY,
	                    ratioX : ratioX,
	                    ratioY : ratioY,
	                    left: foreground.left * ratioX,
	                    top: foreground.top * ratioY,
	                    right: foreground.right * ratioX,
	                    bottom: foreground.bottom * ratioY
	                };
	            }else{
	                return {
	                    width: frameBaseSize.width,
	                    height: frameBaseSize.height,
	                    x : photoLayer.x,
	                    y : photoLayer.y,
	                    left: 0,
	                    top: 0,
	                    right: 0,
	                    bottom: 0
	                };
	            }
	        },

	        changeBorderToMirror: function(isWrap,isOptionChange) {
	            /*if(Store.projectSettings[Store.currentSelectProjectIndex]['product']==='frameCanvas'){
	                return;
	            }*/
	            var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	            var photoLayer = JsonProjectManage.getLMCPhotoLayer(Store.selectedPageIdx);
	            var borderThickness = JsonProjectManage.getLMCCanvasBorder(Store.selectedPageIdx);
	            var realBleedings = JsonProjectManage.getLMCBleedSize(Store.selectedPageIdx);
	            if(currentCanvas.params.length===1 && currentCanvas.params[0].elType==="image"){
	                var left = borderThickness.left + realBleedings.left,
	                    top = borderThickness.top + realBleedings.top;
	                if(isWrap){
	                    if(currentCanvas.params[0].width==photoLayer.width || ((photoLayer.width - currentCanvas.params[0].width) <= 2*left) || isOptionChange){
	                        currentCanvas.params[0].width = photoLayer.width;
	                        currentCanvas.params[0].x=0;
	                    }
	                    if(currentCanvas.params[0].height==photoLayer.height || ((photoLayer.height - currentCanvas.params[0].height) <= 2*top) || isOptionChange){
	                        currentCanvas.params[0].height = photoLayer.height;
	                        currentCanvas.params[0].y=0;
	                    }

	                }else{
	                    if(currentCanvas.params[0].width==photoLayer.width || ((photoLayer.width - currentCanvas.params[0].width) <= 2*left) || isOptionChange){
	                        currentCanvas.params[0].width = photoLayer.width-2*left;
	                        currentCanvas.params[0].x=left;
	                    }
	                    if(currentCanvas.params[0].height==photoLayer.height || ((photoLayer.height - currentCanvas.params[0].height) <= 2*top) || isOptionChange){
	                        currentCanvas.params[0].height = photoLayer.height-2*top;
	                        currentCanvas.params[0].y=top;
	                    }

	                    if (currentCanvas.params[0].imageId) {
	                        if(Math.abs(currentCanvas.params[0].imageRotate) === 90) {

	                            var cWidth = currentCanvas.params[0].imageHeight,
	                                cHeight = currentCanvas.params[0].imageWidth;
	                        }
	                        else {
	                            var cWidth = currentCanvas.params[0].imageWidth,
	                                cHeight = currentCanvas.params[0].imageHeight;
	                        };
	                        if(!Store.firstRender){
	                            var defaultCrops = __webpack_require__(35).getDefaultCrop(cWidth, cHeight, currentCanvas.params[0].width, currentCanvas.params[0].height);

	                            var px = defaultCrops.px,
	                                py = defaultCrops.py,
	                                pw = defaultCrops.pw,
	                                ph = defaultCrops.ph;

	                            currentCanvas.params[0].cropX = cWidth * px;
	                            currentCanvas.params[0].cropY = cHeight * py;
	                            currentCanvas.params[0].cropW = cWidth * pw;
	                            currentCanvas.params[0].cropH = cHeight * ph;

	                            currentCanvas.params[0].cropPX = px;
	                            currentCanvas.params[0].cropPY = py;
	                            currentCanvas.params[0].cropPW = pw;
	                            currentCanvas.params[0].cropPH = ph;
	                        }
	                        Store.firstRender = false;
	                    }
	                }
	            }

	        }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {

	module.exports = {
		// get image detail
		getImageDetail: function(sImageId) {
			if(sImageId) {
				for(var i = 0; i < Store.imageList.length; i++) {
					if(Store.imageList[i].id === sImageId) {
						return Store.imageList[i];
					};
				};
			}
			else {
				return '';
			};
		},

		// fresh image used count
		freshImageUsedCount: function() {
			// var _this = this,
			// 		store = _this.sharedStore;

			// count image used
			var usedIdAry = [],				// [ 'id1', 'id2', ... ]
					usedCountAry = [];		// [ 1, 2, ... ]
			for(var i = 0; i < Store.pages.length; i++) {
				var currentCanvas = Store.pages[i].canvas;

				for(var j = 0; j < currentCanvas.params.length; j++) {
					if(currentCanvas.elements[j] && currentCanvas.elements[j].imageId != undefined && currentCanvas.elements[j].imageId !== '') {
						// inited, fetch data based on elements
						var el = currentCanvas.elements[j];
					}
					else {
						// not inited, fetch data based on params
						var el = currentCanvas.params[j];
					};

					// used image !
					if(el.imageId && el.imageId !== '') {
						if($.inArray(el.imageId, usedIdAry) === -1) {
							// new image id
							usedIdAry.push(el.imageId);
							usedCountAry.push(1);
						}
						else {
							// image id used already, count ++
							var idx = $.inArray(el.imageId, usedIdAry);

							usedCountAry[idx]++;
						};
					};
				};
			};

			// init image list
			for(i = 0; i < Store.imageList.length; i++) {
				Store.imageList[i].usedCount = 0;

				// check if used
				for(j = 0; j < usedIdAry.length; j++) {
					if(usedIdAry[j] === Store.imageList[i].id) {
						Store.imageList[i].usedCount = usedCountAry[j];
						break;
					};
				};
			};

		},
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {var UtilMath = __webpack_require__(7);

	//
	module.exports = {
	    // calculate new params value by element
	    getParamsValueByElement: function(idx, nPageIdx) {
	        nPageIdx != undefined && nPageIdx != null ? nPageIdx : nPageIdx = Store.selectedPageIdx;
	        var currentCanvas = Store.pages[nPageIdx].canvas;

	        if (idx != undefined && idx != null) {
	            // pass in element idx
	            // if(i === 0) {
	            // 	// background image, no trans, with different data model from those with trans
	            // 	var W = currentCanvas.elements[i].attrs.width / currentCanvas.ratio,
	            // 			H = currentCanvas.elements[i].attrs.height / currentCanvas.ratio,
	            // 			OX = currentCanvas.elements[i].attrs.x / currentCanvas.ratio,
	            // 			OY = currentCanvas.elements[i].attrs.y / currentCanvas.ratio,
	            // 			ROT = 0;
	            // }
	            // else {
	            // if(currentCanvas.elType === 'text') {
	            // 	// text element use view width and height
	            // 	var wDot = currentCanvas.trans[idx].attrs.size.x * currentCanvas.trans[idx].attrs.scale.x,
	            // 			hDot = currentCanvas.trans[idx].attrs.size.y * currentCanvas.trans[idx].attrs.scale.y,
	            // 			W = wDot,
	            // 			H = hDot;
	            // }
	            // else {
	            var wDot = currentCanvas.trans[idx].attrs.size.x * currentCanvas.trans[idx].attrs.scale.x,
	                hDot = currentCanvas.trans[idx].attrs.size.y * currentCanvas.trans[idx].attrs.scale.y,
	                W = wDot / currentCanvas.ratio,
	                H = hDot / currentCanvas.ratio;
	            // };
	            var OX = (currentCanvas.trans[idx].attrs.x + currentCanvas.trans[idx].attrs.translate.x - (wDot - currentCanvas.trans[idx].attrs.size.x) / 2) / currentCanvas.ratio,
	                OY = (currentCanvas.trans[idx].attrs.y + currentCanvas.trans[idx].attrs.translate.y - (hDot - currentCanvas.trans[idx].attrs.size.y) / 2) / currentCanvas.ratio,
	                ROT = currentCanvas.trans[idx].attrs.rotate;
	            // };

	            if (Math.abs(currentCanvas.elements[idx].imageRotate) === 90) {
	                // special rotate
	                var cWidth = currentCanvas.elements[idx].imageHeight,
	                    cHeight = currentCanvas.elements[idx].imageWidth;
	            } else {
	                var cWidth = currentCanvas.elements[idx].imageWidth,
	                    cHeight = currentCanvas.elements[idx].imageHeight;
	            };

	            // calculate font size again
	            if (currentCanvas.elements[idx].elType === 'text') {
	                var finalFontSize = currentCanvas.elements[idx].fontSize * currentCanvas.trans[idx].attrs.scale.x;
	            } else {
	                var finalFontSize = currentCanvas.elements[idx].fontSize;
	            };

	            return {
	                elType: currentCanvas.elements[idx].elType,
	                url: currentCanvas.elements[idx].sourceImageUrl,
	                text: currentCanvas.elements[idx].text,
	                x: OX,
	                y: OY,
	                width: W,
	                height: H,
	                rotate: ROT,
	                dep: currentCanvas.elements[idx].dep,
	                imageId: currentCanvas.elements[idx].imageId,
	                imageRotate: currentCanvas.elements[idx].imageRotate || 0,
	                cropPX: currentCanvas.elements[idx].cropX / cWidth || 0,
	                cropPY: currentCanvas.elements[idx].cropY / cHeight || 0,
	                cropPW: currentCanvas.elements[idx].cropW / cWidth || 1,
	                cropPH: currentCanvas.elements[idx].cropH / cHeight || 1,
	                fontFamily: currentCanvas.elements[idx].fontFamily || '',
	                fontSize: parseFloat(finalFontSize) || '',
	                fontWeight: currentCanvas.elements[idx].fontWeight || '',
	                textAlign: currentCanvas.elements[idx].textAlign || '',
	                fontColor: currentCanvas.elements[idx].fontColor || ''
	            };
	        } else {
	            // no idx
	            return '';
	        };
	    },

	    getCropParamsByElement: function(idx, nPageIdx) {
	        nPageIdx != undefined && nPageIdx != null ? nPageIdx : nPageIdx = Store.selectedPageIdx;
	        var currentCanvas = Store.pages[nPageIdx].canvas;

	        if (idx != undefined && idx != null) {
	            var wDot = currentCanvas.trans[idx].attrs.size.x * currentCanvas.trans[idx].attrs.scale.x,
	                hDot = currentCanvas.trans[idx].attrs.size.y * currentCanvas.trans[idx].attrs.scale.y,
	                W = wDot / currentCanvas.ratio,
	                H = hDot / currentCanvas.ratio;
	            var OX = (currentCanvas.trans[idx].attrs.x + currentCanvas.trans[idx].attrs.translate.x - (wDot - currentCanvas.trans[idx].attrs.size.x) / 2) / currentCanvas.ratio,
	                OY = (currentCanvas.trans[idx].attrs.y + currentCanvas.trans[idx].attrs.translate.y - (hDot - currentCanvas.trans[idx].attrs.size.y) / 2) / currentCanvas.ratio,
	                ROT = currentCanvas.trans[idx].attrs.rotate;

	            if (Math.abs(currentCanvas.elements[idx].imageRotate) === 90) {
	                // special rotate
	                var cWidth = currentCanvas.elements[idx].imageHeight,
	                    cHeight = currentCanvas.elements[idx].imageWidth;
	            } else {
	                var cWidth = currentCanvas.elements[idx].imageWidth,
	                    cHeight = currentCanvas.elements[idx].imageHeight;
	            };

	            // calculate font size again
	            if (currentCanvas.elements[idx].elType === 'text') {
	                var finalFontSize = currentCanvas.elements[idx].fontSize * currentCanvas.trans[idx].attrs.scale.x;
	            } else {
	                var finalFontSize = currentCanvas.elements[idx].fontSize;
	            };

	            var cropPX = currentCanvas.elements[idx].cropX/cWidth;
	  			var cropPY = currentCanvas.elements[idx].cropY/cHeight;
	  			var cropPW = currentCanvas.elements[idx].cropW/cWidth;
	  			var cropPH = currentCanvas.elements[idx].cropH/cHeight;

	            var width = W;
	            var height = H;
	            var cropLUX = cropPX;
	            var cropRLX = cropPX + cropPW;
	            var cropLUY = cropPY;
	            var cropRLY = cropPY + cropPH;
	            var viewRatio = height / width;
	            var photoImageW = cWidth;
	            var photoImageH = cHeight;
	            var oldHWAspectRatio = (cropRLY - cropLUY) / (cropRLX - cropLUX);
	            var cropCenterX = cropLUX + (cropRLX - cropLUX) / 2;
	            var cropCenterY = cropLUY + (cropRLY - cropLUY) / 2;
	            var oldCropX = cropLUX * photoImageW;
	            var oldCropY = cropLUY * photoImageH;
	            var oldCropW = (cropRLX - cropLUX) * photoImageW;
	            var oldCropH = (cropRLY - cropLUY) * photoImageH;
	            var oldCropCenterX = cropCenterX * photoImageW;
	            var oldCropCenterY = cropCenterY * photoImageH;

	            var cropUnitsPercentX = (cropRLX - cropLUX) * photoImageW / width;
				var cropUnitsPercentY = (cropRLY - cropLUY) * photoImageH / height;


	            /*var newCropW;
	            var newCropH;

	            if (viewRatio > oldHWAspectRatio) {
	                newCropH = oldCropH * photoImageH;
	                newCropW = newCropH / viewRatio;
	            } else {
	                newCropW = oldCropW * photoImageW;
	                newCropH = viewRatio * newCropW;
	            }

	            if (newCropW > photoImageW) {
	                newCropW = photoImageW;
	            }
	            if (newCropH > photoImageH) {
	                newCropH = photoImageH;
	            }

	            var resultX;
	            var resultY;
	            var resultW;
	            var resultH;
	            if (newCropW * viewRatio > newCropH) {
	                resultH = newCropH;
	                resultW = newCropH / viewRatio;
	            } else {
	                resultW = newCropW;
	                resultH = newCropW * viewRatio;
	            }

	            resultX = oldCropCenterX - resultW / 2;
	            resultX = resultX > 0 ? resultX : 0;
	            if (resultX + resultW > photoImageW) {
	                resultX = resultX - (resultX + resultW - photoImageW);
	                resultX = resultX > 0 ? resultX : 0;
	            }

	            resultY = oldCropCenterY - resultH / 2;
	            resultY = resultY > 0 ? resultY : 0;
	            if (resultY + resultH > photoImageH) {
	                resultY = resultY - (resultY + resultH - photoImageH);
	                resultY = resultY > 0 ? resultY : 0;
	            }
	            var resultCropLUX = resultX / photoImageW;
	            var resultCropLUY = resultY / photoImageH;
	            var resultCropRLX = (resultX + resultW) / photoImageW;
	            var resultCropRLY = (resultY + resultH) / photoImageH;*/

	            var newCropW = width * cropUnitsPercentX;
					var newCropH = height * cropUnitsPercentY;
					if(newCropW > photoImageW){
						newCropW = photoImageW;
					}
					if(newCropH > photoImageH){
						newCropH = photoImageH;
					}

					var resultX;
					var resultY;
					var resultW;
					var resultH;
					if(newCropW * viewRatio > newCropH){
						resultH = newCropH;
						resultW = newCropH / viewRatio;
					}else{
						resultW = newCropW;
						resultH = newCropW * viewRatio;
					}

					resultX = oldCropCenterX - resultW/2;
					resultX = resultX > 0 ? resultX : 0;
					if(resultX + resultW > photoImageW){
						resultX = resultX - (resultX + resultW - photoImageW);
						resultX = resultX > 0 ? resultX : 0;
					}

					resultY = oldCropCenterY - resultH/2;
					resultY = resultY > 0 ? resultY : 0;
					if(resultY + resultH > photoImageH){
						resultY = resultY - (resultY + resultH - photoImageH);
						resultY = resultY > 0 ? resultY : 0;
					}

	            var object = {
	                elType: currentCanvas.elements[idx].elType,
	                url: currentCanvas.elements[idx].sourceImageUrl,
	                text: currentCanvas.elements[idx].text,
	                x: OX,
	                y: OY,
	                width: W,
	                height: H,
	                rotate: ROT,
	                dep: currentCanvas.elements[idx].dep,
	                imageId: currentCanvas.elements[idx].imageId,
	                imageRotate: currentCanvas.elements[idx].imageRotate || 0,
	                cropPX: resultX / photoImageW|| 0,
	                cropPY: resultY / photoImageH|| 0,
	                cropPW: resultW / photoImageW|| 1,
	                cropPH: resultH / photoImageH|| 1,
	                fontFamily: currentCanvas.elements[idx].fontFamily || '',
	                fontSize: parseFloat(finalFontSize) || '',
	                fontWeight: currentCanvas.elements[idx].fontWeight || '',
	                textAlign: currentCanvas.elements[idx].textAlign || '',
	                fontColor: currentCanvas.elements[idx].fontColor || ''
	            };
	            return object;
	        } else {
	            return '';
	        };
	    },

	    // get final cropped image url by crop params
	    getCropImageUrl: function(idx, nPageIdx, ratio) {
	      nPageIdx != undefined && nPageIdx != null ? nPageIdx : nPageIdx = Store.selectedPageIdx;
	      var currentCanvas = Store.pages[nPageIdx].canvas;
	      var viewRatio = ratio ? ratio : currentCanvas.ratio;

	  		if(idx != undefined && idx != null && (currentCanvas.params[idx].elType === 'background' || currentCanvas.params[idx].elType === 'image' || currentCanvas.params[idx].elType === 'logo' || currentCanvas.params[idx].elType === 'PhotoElement')) {
	  			var loadImageUrl = '../../static/img/blank.png';
	  			// var loadImageUrl = '';
	  			if(currentCanvas.params[idx].imageId !== '') {
	  				// already initialized, read old cropped image
	  				var currentElement = currentCanvas.params[idx],
	              px = Math.abs(currentElement.cropPX.toFixed(8)),
	  						py = Math.abs(currentElement.cropPY.toFixed(8)),
	  						pw = Math.abs(currentElement.cropPW.toFixed(8)),
	  						ph = Math.abs(currentElement.cropPH.toFixed(8)),
	  						width = currentElement.width * viewRatio / pw,
	  						height = currentElement.height * viewRatio / ph,
	              brightness = currentElement.style && currentElement.style.brightness ? currentElement.style.brightness : 0;

	          var UtilProject = __webpack_require__(21);
	          var encImgId = UtilProject.getEncImgId(currentCanvas.params[idx].imageId);
	          var qs = UtilProject.getQueryString({
	            encImgId: encImgId,
	            px: px,
	            py: py,
	            pw: pw,
	            ph: ph,
	            width: Math.ceil(width),
	            height: Math.ceil(height),
	            rotation: currentCanvas.params[idx].imageRotate,
	            brightness: brightness
	          });

	  				loadImageUrl = '/imgservice/op/crop?' + qs;
	  			};

	  			return loadImageUrl;
	  		}
	      else {
	        return '';
	      };
	    },
	    getCropDecorationUrl: function(idx,nPageIdx){
	      nPageIdx != undefined && nPageIdx != null ? nPageIdx : nPageIdx = Store.selectedPageIdx;
	      var currentCanvas = Store.pages[nPageIdx].canvas;

	      if(idx != undefined && idx != null && (currentCanvas.params[idx].elType === 'background' || currentCanvas.params[idx].elType === 'decoration' || currentCanvas.params[idx].elType === 'logo' || currentCanvas.params[idx].elType === 'DecorationElement')) {
	        var loadDecorationUrl = '../../static/img/blank.png';
	        // var loadDecorationUrl = '';
	        if(currentCanvas.params[idx].decorationid !== '' ) {
	          // already initialized, read old cropped image
	          // var px = currentCanvas.params[idx].cropPX,
	          //     py = currentCanvas.params[idx].cropPY,
	          //     pw = currentCanvas.params[idx].cropPW,
	          //     ph = currentCanvas.params[idx].cropPH,
	          //     width = currentCanvas.params[idx].width * currentCanvas.ratio / pw,
	          //     height = currentCanvas.params[idx].height * currentCanvas.ratio / ph;
	          var imageGuid = currentCanvas.params[idx].decorationid;
	          loadDecorationUrl = Store.domains.baseUrl+'/artwork/png/1000/'+imageGuid+'.png';
	        };

	        return loadDecorationUrl;
	      }
	      else {
	        return '';
	      };
	    },

	    // get final font image by params
	    getFontImageUrl: function() {

	    },

	    //
	  	getShiftValue: function(currentCanvas, nPageIdx) {
	      nPageIdx != undefined && nPageIdx != null ? nPageIdx : nPageIdx = Store.selectedPageIdx;
	      currentCanvas = currentCanvas || Store.pages[nPageIdx].canvas;
	      // var currentCanvas = Store.pages[nPageIdx].canvas;

	  		if(Store.project2.matte !== 'none') {
	        var shiftedX = -1 * (currentCanvas.boardInMatting.left + currentCanvas.realBleedings.left);
	  			var shiftedY = -1 * (currentCanvas.boardInMatting.top + currentCanvas.realBleedings.top);
	        var shiftedXDot = -1 * (currentCanvas.boardInMatting.right + currentCanvas.realBleedings.right);
	  			var shiftedYDot = -1 * (currentCanvas.boardInMatting.bottom + currentCanvas.realBleedings.bottom);
	  		}
	  		else {
	  			// without matting
	  			var shiftedX = -1 * (currentCanvas.boardInFrame.left + currentCanvas.realBleedings.left);
	  			var shiftedY = -1 * (currentCanvas.boardInFrame.top + currentCanvas.realBleedings.top);
	        var shiftedXDot = -1 * (currentCanvas.boardInFrame.right + currentCanvas.realBleedings.right);
	  			var shiftedYDot = -1 * (currentCanvas.boardInFrame.bottom + currentCanvas.realBleedings.bottom);
	  		};

	      return {
	        x: shiftedX,
	        y: shiftedY,
	        xDot: shiftedXDot,    // shifted x, y on the other side( right , bottom)
	        yDot: shiftedYDot
	      };
	  	},

	    // get fixed positions by shifting 获取迁移坐标系新位置
	  	getShiftPosition: function(oriX, oriY, oriWidth, oriHeight, shiftX, shiftY) {
	  		if(oriX != null && oriY != null && oriWidth != null && oriHeight != null) {
	  			shiftX = shiftX || 0;
	  			shiftY = shiftY || 0;

	  			var newX = oriX + shiftX,
	  					newY = oriY + shiftY;

	  			return {
	  				x: newX,
	  				y: newY,
	  				width: oriWidth,
	  				height: oriHeight
	  			};
	  		}
	  		else {
	  			return {
	  				x: 0,
	  				y: 0,
	  				width: 0,
	  				height: 0
	  			};
	  		};
	  	},

	  	getUnshiftPosition: function(idx) {
	      if(idx != undefined && idx != null) {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        var shiftX = -1 * this.getShiftValue().x,
	            shiftY = -1 * this.getShiftValue().y,
	            shiftXDot = -1 * this.getShiftValue().xDot,
	            shiftYDot = -1 * this.getShiftValue().yDot;

	        var x = currentCanvas.params[idx].x || 0,
	            y = currentCanvas.params[idx].y || 0,
	            w = currentCanvas.params[idx].width || 0,
	            h = currentCanvas.params[idx].height || 0,
	            fullW = currentCanvas.oriWidth || 0,
	            fullH = currentCanvas.oriHeight || 0,
	            px, py, pw, ph;
	        //     px = parseFloat(currentCanvas.params[idx].px) || 0,
	        //     py = parseFloat(currentCanvas.params[idx].py) || 0,
	        //     pw = parseFloat(currentCanvas.params[idx].pw),
	        //     ph = parseFloat(currentCanvas.params[idx].ph);

	        // fix values
	        x += shiftX;
	        y += shiftY;
	        px = x / (fullW + shiftX + shiftXDot);
	        py = y / (fullH + shiftY + shiftYDot);
	        pw = w / (fullW + shiftX + shiftXDot);
	        ph = h / (fullH + shiftY + shiftYDot);
	        px < 0 ? px = 0 : px;
	        px > 1 ? px = 1 : px;
	        py < 0 ? py = 0 : py;
	        py > 1 ? py = 1 : py;
	        pw < 0 ? pw = 0 : pw;
	        pw > 1 ? pw = 1 : pw;
	        ph < 0 ? ph = 0 : ph;
	        ph > 1 ? ph = 1 : ph;

	        return {
	          x: x,
	          y: y,
	          px: px,
	          py: py,
	          pw: pw,
	          ph: ph
	        };
	      }
	      else {
	        console.fail('idx is invalid in getUnshiftPosition() [ParamsManage]')
	        return '';
	      };
	    },

	    getIndexById: function(id,pageIdx) {
	      var pageIdx = pageIdx || Store.selectedPageIdx;
	      if(id != undefined && id != null && id !== '') {
	        var currentCanvas = Store.pages[pageIdx].canvas;

	        for(var i = 0; i < currentCanvas.params.length; i++) {
	          if(currentCanvas.params[i].id === id) {
	            return i;
	          };
	        };

	        // loop ends and no matching
	        return -1;
	      }
	      else {
	        // wrong
	        return -1;
	      };
	    },

	    getIndexByDep: function(dep) {
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	      for(var i = 0; i < currentCanvas.params.length; i++) {
	        if(currentCanvas.params[i].dep === dep) {
	          return i;
	        };
	      };

	      return 0;
	    },

	    getFrontElementIndex: function() {
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	      // for the front element, it's depth is the same with params count - 1
	      return this.getIndexByDep(currentCanvas.params.length - 1);
	    },

	    // NOTE: this function provides VIEW size, only valid for marketplace seller flow product for now
	    getBorderHiddenSize: function() {
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	      var leftLimit = topLimit = rightLimit = bottomLimit = 0;

	      if(Store.isCanvas) {
	        // canvas
	        leftLimit = (currentCanvas.canvasBordeThickness.left + currentCanvas.realBleedings.left) * currentCanvas.ratio;
	        rightLimit = (currentCanvas.canvasBordeThickness.right + currentCanvas.realBleedings.right) * currentCanvas.ratio;
	        topLimit = (currentCanvas.canvasBordeThickness.top + currentCanvas.realBleedings.top) * currentCanvas.ratio;
	        bottomLimit = (currentCanvas.canvasBordeThickness.bottom + currentCanvas.realBleedings.bottom) * currentCanvas.ratio;
	      }
	      else {
	        // frame
	        var frameBoardWidth = currentCanvas.frameBaseSize.width * currentCanvas.ratio,    // board的宽度
	            frameBoardHeight = currentCanvas.frameBaseSize.height * currentCanvas.ratio,
	            frameLeft = Math.abs(currentCanvas.x),    // 照片板超出board的左部的尺寸
	            frameTop = Math.abs(currentCanvas.y);

	        // prepare leftLimit, rightLimit
	        if(currentCanvas.width > frameBoardWidth) {
	          // photoLayer比较大
	          if(Store.projectSettings[Store.currentSelectProjectIndex].matte && Store.projectSettings[Store.currentSelectProjectIndex].matte !== 'none') {
	            // 有matte的情况
	            leftLimit = frameLeft + currentCanvas.boardInMatting.left * currentCanvas.ratio;
	            rightLimit = currentCanvas.width - frameBoardWidth - frameLeft + currentCanvas.boardInMatting.right * currentCanvas.ratio;
	          }
	          else {
	            // 没matte的情况
	            leftLimit = frameLeft + currentCanvas.boardInFrame.left * currentCanvas.ratio;
	            rightLimit = currentCanvas.width - frameBoardWidth - frameLeft + currentCanvas.boardInFrame.right * currentCanvas.ratio;
	          };
	        }
	        else {
	          // frameBoard比较大
	          if(Store.projectSettings[Store.currentSelectProjectIndex].matte && Store.projectSettings[Store.currentSelectProjectIndex].matte !== 'none') {
	            // 有matte的情况
	            leftLimit = currentCanvas.boardInMatting.left * currentCanvas.ratio + currentCanvas.realBleedings.left * currentCanvas.ratio;
	            rightLimit = currentCanvas.boardInMatting.right * currentCanvas.ratio + currentCanvas.realBleedings.right * currentCanvas.ratio;
	          }
	          else {
	            // 没matte的情况
	            leftLimit = currentCanvas.boardInFrame.left * currentCanvas.ratio + currentCanvas.realBleedings.left * currentCanvas.ratio;
	            rightLimit = currentCanvas.boardInFrame.right * currentCanvas.ratio + currentCanvas.realBleedings.right * currentCanvas.ratio;
	          };
	        };

	        // prepare topLimit, bottomLimit
	        if(currentCanvas.height > frameBoardHeight) {
	          // photoLayer比较大
	          if(Store.projectSettings[Store.currentSelectProjectIndex].matte && Store.projectSettings[Store.currentSelectProjectIndex].matte !== 'none') {
	            // 有matte的情况
	            topLimit = frameTop + currentCanvas.boardInMatting.top * currentCanvas.ratio;
	            bottomLimit = currentCanvas.height - frameBoardHeight - frameTop + currentCanvas.boardInMatting.bottom * currentCanvas.ratio;
	          }
	          else {
	            // 没matte的情况
	            topLimit = frameTop + currentCanvas.boardInFrame.top * currentCanvas.ratio;
	            bottomLimit = currentCanvas.height - frameBoardHeight - frameTop + currentCanvas.boardInFrame.bottom * currentCanvas.ratio;
	          };
	        }
	        else {
	          // frameBoard比较大
	          if(Store.projectSettings[Store.currentSelectProjectIndex].matte && Store.projectSettings[Store.currentSelectProjectIndex].matte !== 'none') {
	            // 有matte的情况
	            topLimit = currentCanvas.boardInMatting.top * currentCanvas.ratio + currentCanvas.realBleedings.top * currentCanvas.ratio;
	            bottomLimit = currentCanvas.boardInMatting.bottom * currentCanvas.ratio + currentCanvas.realBleedings.bottom * currentCanvas.ratio;
	          }
	          else {
	            // 没matte的情况
	            topLimit = currentCanvas.boardInFrame.top * currentCanvas.ratio + currentCanvas.realBleedings.top * currentCanvas.ratio;
	            bottomLimit = currentCanvas.boardInFrame.bottom * currentCanvas.ratio + currentCanvas.realBleedings.bottom * currentCanvas.ratio;
	          };
	        };
	      };

	      return {
	        left: leftLimit,
	        top: topLimit,
	        right: rightLimit,
	        bottom: bottomLimit
	      };
	    },
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {var UtilMath = __webpack_require__(7);
	var ImageListManage = __webpack_require__(25);
	var ParamsManage = __webpack_require__(26);
	var SpecController = __webpack_require__(23);

	module.exports = {
		createElement : function(idx){
			this.initElement(idx);
		},
		editElement : function(idx){
			this.deleteElement(idx);
			this.initElement(idx);
		},
		deleteElement : function(idx){
			// console.log('delete warn', idx);
			var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
			if(currentCanvas.warns[idx]){
			 currentCanvas.warns[idx].el && currentCanvas.warns[idx].el.remove();
			 currentCanvas.warns[idx].el = '';
			}
			this.showBeforeElements();
		},
		initElement : function(idx){
			var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
			 	warnTipUrl = '../../static/img/warn_big_icon.png',
			 	params = __webpack_require__(26).getParamsValueByElement(idx);

			currentCanvas.warns[idx].isActive = true;
			currentCanvas.warns[idx].el = currentCanvas.paper.image(warnTipUrl, params.x * currentCanvas.ratio + 5, (params.y + params.height) * currentCanvas.ratio - 15,Store.warnSettings.warnImageWidth,Store.warnSettings.warnImageHeight);
			currentCanvas.warns[idx].el.node.id = 'warn-tip-' + idx;
			$('#warn-tip-' + idx).attr("title",Store.warnSettings.resizeWarnMsg);
		},
		showBeforeElements : function(){
			var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,warns = currentCanvas.warns;
			warns.map(function(warn){
				warn.el && warn.el.toFront();
			})
		},
		refreshLaterTips : function(idx){
			var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
			for(var i=idx,l=currentCanvas.warns.length;i<l;i++){
				if(currentCanvas.warns[i] && currentCanvas.warns[i].isActive){
					currentCanvas.warns[i].el.node.id = 'warn-tip-' + i;
					// this.deleteElement(i);
					// this.initElement(i);
				}
			}
		}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {module.exports = {
	    getEncImageIds: function() {
	      if(Store.imageList.length > 0) {
	        var sOriImageIds = '';

	        for(var i = 0; i < Store.imageList.length; i++) {
	          if(i === 0) {
	            // the first loop
	            sOriImageIds += Store.imageList[i].id;
	          }
	          else {
	            // normal case
	            sOriImageIds += ',' + Store.imageList[i].id;
	          };
	        };

	        if(sOriImageIds) {
	          $.ajax({
	              url: '/userid/getEncImgIds',
	              type: 'post',
	              async: false,
	              data: {
	                imageIds: sOriImageIds
	              }
	          }).done(function(dResult) {
	            if (dResult) {
	              if($(dResult).find('result').attr('state') === 'success') {
	                // success
	                for(var j = 0; j < Store.imageList.length; j++) {
	                  for(var k = 0; k < $(dResult).find('image').length; k++) {
	                    if(Store.imageList[j].id == $(dResult).find('image').eq(k).attr('id')) {
	                      Store.imageList[j].encImgId = $(dResult).find('image').eq(k).attr('encImgId') || '';
	                      break;
	                    };
	                  };
	                };
	              }
	              else {
	                // service respond error code
	                console.warn('Error: ' + $(dResult).find('errorInfo').text() || 'invalid ajax permission');
	              };
	            }
	            else {
	              // server respond nothing
	              console.warn('Error: server returns nothing when getEncImageIds');
	            };
	          }).fail(function(dResult) {
	            // server error, do nothing...
	            console.warn('Error: server error when getEncImageIds');
	          });
	        };
	      }
	      else {
	        // no image found, do nothing...

	      };

	    }

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {var UtilDateFormat = __webpack_require__(30);

	module.exports = {
	  initProjectJson: function() {
	    var optionIds = __webpack_require__(18).getOptionIds();
	    var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	    var specVersion = $(Store.spec.specXml).find('product-spec').attr('version');
	    var specObject = {};
	    for (var i = 0; i < optionIds.length; i++) {
	      specObject[optionIds[i]] = currentProject[optionIds[i]];
	    };
	    var defaultPages = [this.initPage()];
	    return {
	      project: {
	        guid: '',
	        version: specVersion,
	        clientId: 'web-h5',
	        createAuthor: 'web-h5|1.1|1',
	        userId: Store.userSettings.userId,
	        artisan: Store.userSettings.userName,
	        createdDate: UtilDateFormat.formatDateTime(new Date()),
	        updatedDate: UtilDateFormat.formatDateTime(new Date()),
	        summary: {
	        },
	        spec: specObject,
	        pages: defaultPages,
	        images: []
	      }
	    };
	  },

	  initNewPrintProjectJson: function() {
	    var optionIds = __webpack_require__(18).getOptionIds();
	    var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	    var specVersion = $(Store.spec.specXml).find('product-spec').attr('version');
	    var defaultSetting = {};
	    var defaultPages = [];
	    for (var i = 0; i < optionIds.length; i++) {
	      defaultSetting[optionIds[i]] = currentProject[optionIds[i]];
	    };
	    return {
	      project: {
	        version: specVersion,
	        clientId: 'web-h5',
	        createAuthor: 'web-h5|1.1|1',
	        userId: Store.userSettings.userId,
	        artisan: Store.userSettings.userName,
	        createdDate: UtilDateFormat.formatDateTime(new Date()),
	        updatedDate: UtilDateFormat.formatDateTime(new Date()),
	        summary: {
	          defaultSetting: defaultSetting
	        },
	        pages: defaultPages,
	        images: []
	      }
	    };
	  },

	  getCurrentProjectJson: function() {
	    var optionIds = __webpack_require__(18).getOptionIds();
	    var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	    var specVersion = $(Store.spec.specXml).find('product-spec').attr('version');
	    var specObject = {};
	    for (var i = 0; i < optionIds.length; i++) {
	      specObject[optionIds[i]] = currentProject[optionIds[i]];
	    };
	    var pages = this.getPages();
	    var images = this.getImages();
	    return {
	      project: {
	        guid: Store.projectId,
	        version: specVersion,
	        clientId: 'web-h5',
	        createAuthor: 'web-h5|1.1|1',
	        userId: Store.userSettings.userId,
	        artisan: Store.userSettings.userName,
	        createdDate: Store.createdDate,
	        updatedDate: UtilDateFormat.formatDateTime(new Date()),
	        summary: {
	        },
	        spec: specObject,
	        pages: pages,
	        images: images
	      }
	    };
	  },
	  getSkuJson: function() {
	    var userSettings = Store.userSettings;
	    var optionIds = __webpack_require__(18).getOptionIds();
	    var specVersion = $(Store.spec.specXml).find('product-spec').attr('version');
	    var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];

	    var skuJson = {
	      project: {
	        "version": specVersion,
	        "clientId": "web-h5",
	        "createAuthor": "web-h5|1.1|1",
	        "userId": userSettings.userId,
	        "artisan": userSettings.userName,
	      }
	    };
	    for (var i = 0; i < optionIds.length; i++) {
	      skuJson['project'][optionIds[i]] = currentProject[optionIds[i]];
	    };
	    return skuJson;
	  },
	  getBaseSize: function(pageIdx) {
	    var useIndex = (typeof pageIdx !== 'undefined') ? pageIdx : Store.currentSelectProjectIndex;
	    var currentProject = Store.projectSettings[useIndex];
	    var size = currentProject.size;
	    var product = currentProject.product;
	    var orientation = currentProject.orientation;
	    var sizeObject = __webpack_require__(18).getParameter('baseSizeInInch', [{ key: 'product', value: product }, { key: 'size', value: size }, { key: 'orientation', value: orientation }]);

	    return {
	      width: sizeObject.width * __webpack_require__(18).getDPI(),
	      height: sizeObject.height * __webpack_require__(18).getDPI()
	    };
	  },
	  getBleedSize: function(pageIdx) {
	    var useIndex = (typeof pageIdx !== 'undefined') ? pageIdx : Store.currentSelectProjectIndex;
	    var currentProject = Store.projectSettings[useIndex];
	    var DPI = __webpack_require__(18).getDPI();
	    var size = currentProject.size;
	    var product = currentProject.product;
	    var bleedObject = __webpack_require__(18).getParameter('bleedInInch', [{ key: 'product', value: product }, { key: 'size', value: size }]);

	    return {
	      top: bleedObject.top * DPI,
	      right: bleedObject.right * DPI,
	      bottom: bleedObject.bottom * DPI,
	      left: bleedObject.left * DPI
	    }
	  },
	  getLMCBaseSize: function(pageIdx) {
	    var useIndex = (typeof pageIdx !== 'undefined') ? pageIdx : Store.currentSelectProjectIndex;
	    var currentProject = Store.projectSettings[useIndex];
	    var size = currentProject.size;
	    var product = currentProject.product;
	    var frameStyle = currentProject.frameStyle;
	    var orientation = currentProject.orientation;
	    var sizeObject = __webpack_require__(18).getParameter('frameBaseSize', [{ key: 'product', value: product }, { key: 'frameStyle', value: frameStyle },{ key: 'size', value: size },{ key: 'orientation', value: orientation }]);

	    return {
	      width: parseFloat(sizeObject.widthInInch) * __webpack_require__(18).getDPI(),
	      height: parseFloat(sizeObject.heightInInch) * __webpack_require__(18).getDPI()
	    };
	  },
	  getLMCBleedSize: function(pageIdx) {
	    var useIndex = (typeof pageIdx !== 'undefined') ? pageIdx : Store.currentSelectProjectIndex;
	    var currentProject = Store.projectSettings[useIndex];
	    var size = currentProject.size;
	    var product = currentProject.product;
	    var bleedObject = __webpack_require__(18).getParameter('bleed', [{ key: 'product', value: product }, { key: 'size', value: size }]);

	    return {
	      top: parseFloat(bleedObject.top),
	      right: parseFloat(bleedObject.right),
	      bottom: parseFloat(bleedObject.bottom),
	      left: parseFloat(bleedObject.left)
	    }
	  },
	  getLMCCanvasBorder:function(pageIdx){
	    var useIndex = (typeof pageIdx !== 'undefined') ? pageIdx : Store.currentSelectProjectIndex;
	    var currentProject = Store.projectSettings[useIndex];
	    var size = currentProject.size;
	    var product = currentProject.product;
	    var frameStyle = currentProject.frameStyle;
	    var canvasBorderSize = currentProject.canvasBorderSize;
	    var canvasBorderObject = __webpack_require__(18).getParameter('canvasBorderThickness', [{ key: 'product', value: product }, { key: 'frameStyle', value: frameStyle } , { key: 'canvasBorderSize', value: canvasBorderSize } ]);

	    return {
	      top: parseFloat(canvasBorderObject.top),
	      right: parseFloat(canvasBorderObject.right),
	      bottom: parseFloat(canvasBorderObject.bottom),
	      left: parseFloat(canvasBorderObject.left)
	    }
	  },
	  getCanvasBorder: function() {
	    // var useIndex = (typeof pageIdx !== 'undefined') ? pageIdx : Store.currentSelectProjectIndex;
	    // var currentProject = Store.projectSettings[useIndex];
	    // var size = currentProject.size;
	    // var product = currentProject.product;
	    // var frameStyle = currentProject.frameStyle;
	    // var canvasBorderSize = currentProject.canvasBorderSize;
	    // var canvasBorderObject = require('SpecManage').getParameter('canvasBorderThickness', [{ key: 'product', value: product }, { key: 'frameStyle', value: frameStyle } , { key: 'canvasBorderSize', value: canvasBorderSize } ]);

	    return {
	      top: 0,
	      right: 0,
	      bottom: 0,
	      left: 0
	    }
	  },
	  getLMCPhotoLayer: function(pageIdx) {
	      var useIndex = (typeof pageIdx !== 'undefined') ? pageIdx : Store.currentSelectProjectIndex;
	      var currentProject = Store.projectSettings[useIndex];
	      var orientation = currentProject.orientation;
	      var object = {};

	      var frameBaseSize = this.getLMCBaseSize(useIndex);

	      var canvasBorderThickness = this.getLMCCanvasBorder(useIndex);
	      var canvasBorderThicknessTop = canvasBorderThickness.top;
	      var canvasBorderThicknessBottom = canvasBorderThickness.bottom;
	      var canvasBorderThicknessLeft = canvasBorderThickness.left;
	      var canvasBorderThicknessRight = canvasBorderThickness.right;



	      var bleed = this.getLMCBleedSize(useIndex);
	      var bleedTop = bleed.top;
	      var bleedBottom = bleed.bottom;
	      var bleedLeft = bleed.left;
	      var bleedRight = bleed.right;

	      var baseWidth = frameBaseSize.width+canvasBorderThicknessLeft+canvasBorderThicknessRight;
	      var baseHeight = frameBaseSize.height+canvasBorderThicknessTop+canvasBorderThicknessBottom;

	      var x = 0;
	      var y = 0;
	      var width = 0;
	      var height = 0;
	      if (currentProject.orientation === 'Portrait') {
	          x = -bleedBottom;
	          y = -bleedLeft;
	          width = baseWidth + bleedTop + bleedBottom ;
	          height = baseHeight + bleedLeft + bleedRight ;
	      } else {
	          x = -bleedLeft;
	          y = -bleedTop;
	          width = baseWidth + bleedLeft + bleedRight;
	          height = baseHeight + bleedTop + bleedBottom;
	      }
	      var px = x / width;
	      var py = y / height;
	      var pw = width / width;
	      var ph = height / height;

	      object.x = x;
	      object.y = y;
	      object.width = width;
	      object.height = height;
	      object.px = px;
	      object.py = py;
	      object.pw = pw;
	      object.ph = ph;

	      return object;
	  },
	  getLMCDefaultElement: function(pageIdx) {
	      var useIndex = (typeof pageIdx !== 'undefined') ? pageIdx : Store.currentSelectProjectIndex;
	      var photoLayer=this.getLMCPhotoLayer(useIndex);
	      var canvasBorder=this.getLMCCanvasBorder(useIndex);
	      var bleed=this.getLMCBleedSize(useIndex);
	      var x=bleed.left+canvasBorder.left;
	      var y=bleed.top+canvasBorder.top;
	      var width=photoLayer.width-canvasBorder.left-canvasBorder.right-bleed.left-bleed.right;
	      var height=photoLayer.height-canvasBorder.top-canvasBorder.bottom-bleed.top-bleed.bottom;
	      return {
	          "id": __webpack_require__(21).guid(),
	          "type": "PhotoElement",
	          "elType": "image",
	          "x": x,
	          "y": y,
	          "width": width,
	          "height": height,
	          "px": x/photoLayer.width,
	          "py": y/photoLayer.height,
	          "pw": width/photoLayer.width,
	          "ph": height/photoLayer.height,
	          "imgFlip": false,
	          "rot": 0,
	          "imgRot": 0,
	          "encImgId": "",
	          "imageid": "",
	          "dep": 0,
	          "cropLUX": 0,
	          "cropLUY": 0,
	          "cropRLX": 1,
	          "cropRLY": 1,
	          "lastModified": UtilDateFormat.formatDateTime(new Date())
	      }

	  },
	  getDefaultElement: function(pageWith, pageHeight) {

	      return {
	          "id": __webpack_require__(21).guid(),
	          "type": "PhotoElement",
	          "elType": "image",
	          "x": 0,
	          "y": 0,
	          "width": pageWith,
	          "height": pageHeight,
	          "px": 0,
	          "py": 0,
	          "pw": 1,
	          "ph": 1,
	          "imgFlip": false,
	          "rot": 0,
	          "imgRot": 0,
	          "encImgId": "",
	          "imageid": "",
	          "dep": 0,
	          "cropLUX": 0,
	          "cropLUY": 0,
	          "cropRLX": 1,
	          "cropRLY": 1,
	          "lastModified": UtilDateFormat.formatDateTime(new Date())
	      }
	  },
	  initPage: function() {
	    var baseSize = this.getBaseSize();
	    var bleedSize = this.getBleedSize();
	    var pageWith = baseSize.width + bleedSize.left + bleedSize.right;
	    var pageHeight = baseSize.height + bleedSize.top + bleedSize.right;
	    var defaultElements = [this.getDefaultElement(pageWith, pageHeight)];
	    return {
	      "id": __webpack_require__(21).guid(),
	      "width": pageWith,
	      "height": pageHeight,
	      "type": "Page",
	      "bleed": bleedSize,
	      "elements": defaultElements,
	      "backend": {
	          "isPrint": true
	      }
	    }
	  },
	  getPhotoLayer: function(pageIdx) {
	    var useIndex = (typeof pageIdx !== 'undefined') ? pageIdx : Store.currentSelectProjectIndex;
	    var currentProject = Store.projectSettings[useIndex];
	    var orientation = currentProject.orientation;

	    var baseSize = this.getBaseSize(useIndex);
	    var bleedSize = this.getBleedSize();
	    var pageWith = baseSize.width + bleedSize.left + bleedSize.right;
	    var pageHeight = baseSize.height + bleedSize.top + bleedSize.right;

	    var x = 0;
	    var y = 0;
	    var width = 0;
	    var height = 0;
	    if (currentProject.orientation === 'Portrait') {
	        x = -bleedSize.bottom;
	        y = -bleedSize.left;
	        width = baseSize.width + bleedSize.left + bleedSize.right;
	        height = baseSize.height + bleedSize.top + bleedSize.right;
	    } else {
	        x = -bleedSize.left;
	        y = -bleedSize.top;
	        width = baseSize.width + bleedSize.left + bleedSize.right;
	        height = baseSize.height + bleedSize.top + bleedSize.right;
	    }

	    return {
	      x: x,
	      y: y,
	      width: width,
	      height: height,
	      px: x / baseSize.width,
	      py: y / baseSize.height,
	      pw: width / baseSize.width,
	      ph: height / baseSize.height
	    }
	  },
	  getPages: function() {
	    var pages = [];
	    var bleedSize = this.getBleedSize();
	    var photoLayer = this.getPhotoLayer();
	    var pageWith = photoLayer.width;
	    var pageHeight = photoLayer.height;
	    var elements = this.getElements();

	    for(var i = 0; i < Store.pages.length; i++ ) {
	        pages.push({
	          "width": pageWith,
	          "height": pageHeight,
	          "type": "Page",
	          "bleed": bleedSize,
	          "elements": this.getElements(i),
	          "backend": {
	            "isPrint": true
	          }
	        })
	    }
	    return pages;
	  },
	  getImages: function() {
	    var images = [];
	    for(var i = 0; i < Store.imageList.length; i++) {
	      var item = Store.imageList[i];
	      images.push({
	        id: item.id,
	        guid: item.guid,
	        encImgId: item.encImgId,
	        order: i,
	        name: encodeURIComponent(item.name),
	        width: item.width,
	        height: item.height,
	        shotTime: item.shotTime
	      });
	    }
	    return images;
	  },
	  getElements: function(index) {
	    var useIndex = (typeof index !== 'undefined') ? index : Store.currentSelectProjectIndex;
	    // if(!index){
	    //   index=Store.currentSelectProjectIndex;
	    // }
	    var currentProject = Store.projectSettings[useIndex];
	    var currentCanvas = Store.pages[useIndex].canvas;
	    var elements = currentCanvas.params;
	    var outputElements = [];

	    for (var i = 0; i < elements.length; i++) {
	      var currentElement = elements[i];
	      var elementObj = {
	        x: currentElement.x,
	        y: currentElement.y,
	        px: currentElement.x / currentCanvas.oriWidth,
	        py: currentElement.y / currentCanvas.oriHeight,
	        width: currentElement.width,
	        height: currentElement.height,
	        pw: currentElement.width / currentCanvas.oriWidth,
	        ph: currentElement.height / currentCanvas.oriHeight,
	        dep: currentElement.dep,
	        rot: currentElement.rotate
	      };
	      switch(currentElement.elType) {
	        case 'text':
	          {
	            elementObj.type = "TextElement";
	            elementObj.color = currentElement.fontColor;
	            elementObj.text = encodeURIComponent(currentElement.text);
	            elementObj.fontWeight = currentElement.fontWeight;
	            elementObj.textAlign = currentElement.textAlign;
	            elementObj.fontFamily = encodeURIComponent(currentElement.fontFamily);
	            elementObj.fontSize = parseFloat(currentElement.fontSize)  / currentCanvas.oriHeight;
	          }
	          break;
	        case 'image':
	          {
	            var encImgId = currentElement.encImgId;
	            if (!encImgId) {
	              Store.imageList.some(function(img){
	                if(img.id == currentElement.imageId) {
	                  encImgId = img.encImgId;
	                  return true;
	                }
	              })
	            }
	            elementObj.type = "PhotoElement";
	            elementObj.imageid = currentElement.imageId;
	            elementObj.encImgId = encImgId;
	            elementObj.imgRot = currentElement.imageRotate;
	            elementObj.imgFlip = false;
	            elementObj.cropLUX = parseFloat(currentElement.cropPX).toString();
	            elementObj.cropLUY = parseFloat(currentElement.cropPY).toString();
	            elementObj.cropRLX = (parseFloat(currentElement.cropPX) + parseFloat(currentElement.cropPW)).toString();
	            elementObj.cropRLY = (parseFloat(currentElement.cropPY) + parseFloat(currentElement.cropPH)).toString();
	            elementObj.style = {
	              brightness: currentElement.style && currentElement.style.brightness ? currentElement.style.brightness : 0,
	              "effectId": 0,
	              "opacity": 100
	            }
	            elementObj.border = {
	              size: 0,
	              "color": "#000000",
	              "opacity": 100
	            }
	          }
	          break;
	      }
	      outputElements.push(elementObj);
	    }
	    return outputElements;
	  },

	  getPrintBaseSize:function(params){
	    var rotated = false;
	    var paramsList = __webpack_require__(19).getParamsList();
	    if(params.size){
	        paramsList = paramsList.map(function(param) {
	            if(param.key === 'size') {
	                param.value = params.size;
	            }

	            return param;
	        });
	    }
	    if(params.rotated){
	        rotated = params.rotated;
	    }
	    var sizeObject = __webpack_require__(18).getParameter('baseSizeInInch', paramsList);
	    var object = {};
	    if (rotated) {
	        object.width = sizeObject.heightInInch * __webpack_require__(18).getDPI();
	        object.height = sizeObject.widthInInch * __webpack_require__(18).getDPI();
	    } else {
	        object.width = sizeObject.widthInInch * __webpack_require__(18).getDPI();
	        object.height = sizeObject.heightInInch * __webpack_require__(18).getDPI();
	    }
	    return object;
	  },

	  getPrintBleed: function(params) {
	    var rotated = false;
	    var DPI = __webpack_require__(18).getDPI();
	    var paramsList = __webpack_require__(19).getParamsList();

	    paramsList = paramsList.map(function(param) {
	        if(param.key === 'size') {
	            if(params && params.size){
	                param.value = params.size;
	            } else {
	                param.value = Store.baseProject.size;
	            }
	        }

	        return param;
	    });

	    if(params.rotated){
	        rotated = params.rotated;
	    }

	    var sizeObject = __webpack_require__(18).getParameter('bleedInInch', paramsList);
	    var object = {};
	    object.top = parseInt(sizeObject.top * DPI);
	    object.bottom = parseInt(sizeObject.bottom * DPI);
	    object.left = parseInt(sizeObject.left * DPI);
	    object.right = parseInt(sizeObject.right * DPI);

	    if(rotated) {
	      object.top = parseInt(sizeObject.left * DPI);
	      object.bottom = parseInt(sizeObject.right * DPI);
	      object.left = parseInt(sizeObject.top * DPI);
	      object.right = parseInt(sizeObject.bottom * DPI);
	    }
	    return object;
	  },

	  getPrintCornerRadius: function(params) {
	    var DPI = __webpack_require__(18).getDPI();
	    var paramsList = __webpack_require__(19).getParamsList();

	    paramsList = paramsList.map(function(param) {
	        if(param.key === 'size') {
	            if(params && params.size){
	                param.value = params.size;
	            } else {
	                param.value = Store.baseProject.size;
	            }
	        }

	        return param;
	    });

	    var cornerRadius = __webpack_require__(18).getParameter('cornerRadiusInInch', paramsList).value;
	    cornerRadius = (cornerRadius - 0) * DPI;

	    return cornerRadius;
	  },

	  getNewPrintCurrentProjectJson: function() {
	    var optionIds = __webpack_require__(18).getOptionIds();
	    var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	    var specVersion = $(Store.spec.specXml).find('product-spec').attr('version');
	    var defaultSetting = {};
	    for (var i = 0; i < optionIds.length; i++) {
	      defaultSetting[optionIds[i]] = Store.baseProject[optionIds[i]];
	    };
	    var pages = this.getNewPrintPages();
	    var images = this.getImages();
	    return {
	      project: {
	        guid: Store.projectId,
	        version: specVersion,
	        clientId: 'web-h5',
	        createAuthor: 'web-h5|1.1|1',
	        userId: Store.userSettings.userId,
	        artisan: Store.userSettings.userName,
	        createdDate: Store.createdDate,
	        updatedDate: UtilDateFormat.formatDateTime(new Date()),
	        summary: {
	          defaultSetting: defaultSetting
	        },
	        pages: pages,
	        images: images
	      }
	    };
	  },

	  getNewPrintPages: function() {
	    var pages = [];
	    var currentProjects = Store.projectSettings;
	    var currentPages = Store.pages;
	    var optionIds = __webpack_require__(18).getOptionIds();

	    for (var i = 0 ;i < currentPages.length; i++) {
	      var currentCanvas = currentPages[i].canvas;
	      var elements = this.getNewPrinteElements(currentCanvas, currentCanvas.params);
	      var currentProject = currentProjects[i];

	      var pageId = currentPages[i].guid || __webpack_require__(21).guid();
	      var quantity = currentProject.quantity;
	      var specVersion = __webpack_require__(18).getVersion();
	      var specObject = {};
	      var type = 'Print';
	      for (var j = 0; j < optionIds.length; j++) {
	        specObject[optionIds[j]] = currentProject[optionIds[j]];
	      };
	      specObject.quantity = quantity;

	      var baseSize=this.getPrintBaseSize({size: currentProject.size, rotated: currentProject.rotated});
	      var bleed = this.getPrintBleed({size: currentProject.size, rotated: currentProject.rotated});
	      var borderLength = currentPages[i].canvas.borderLength ? currentPages[i].canvas.borderLength : 0;
	      var borderColor = currentPages[i].canvas.borderColor ? currentPages[i].canvas.borderColor : 'none';

	      pages.push({
	        id: pageId,
	        spec: specObject,
	        width: baseSize.width + bleed.left + bleed.right,
	        height: baseSize.height + bleed.top + bleed.bottom,
	        type: type,
	        bleed: bleed,
	        border: {
	          color: borderColor,
	          size: borderLength
	        },
	        elements: elements,
	        backend: {
	          isPrint: true
	        }
	      });
	    }

	    return pages;
	  },

	  getNewPrinteElements: function(currentCanvas, params) {
	    var elements = params.map(function(param) {

	      var id = param.guid || __webpack_require__(21).guid();
	      var x = param.x;
	      var y = param.y;
	      var width = param.width;
	      var height = param.height;
	      var px = x / currentCanvas.oriWidth;
	      var py = y / currentCanvas.oriHeight;
	      var ph = height / currentCanvas.oriHeight;
	      var pw = width / currentCanvas.oriWidth;
	      var rot = param.rotate;
	      var dep = param.dep;
	      var imageid = param.imageId;
	      var imgRot = param.imageRotate;
	      var imgFlip = false;
	      var cropPX = param.cropPX,
	          cropPY = param.cropPY,
	          cropPW = param.cropPW,
	          cropPH = param.cropPH;
	      var brightness = param.style && param.style.brightness ? param.style.brightness : 0;

	      var theImage = Store.imageList.filter(function(image) {
	        return image.id === param.imageId;
	      });

	      var element = {
	        id: id,
	        x: x,
	        y: y,
	        width: width,
	        height: height,
	        px: px,
	        py: py,
	        pw: pw,
	        ph: ph,
	        rot: rot,
	        dep: dep
	      }
	      if(param.elType==='text'){
	        element.type = 'TextElement';
	        element.color = param.fontColor;
	        element.fontSize = parseFloat(param.fontSize) / currentCanvas.oriHeight;
	        element.fontFamily = encodeURIComponent(param.fontFamily);
	        element.fontWeight = param.fontWeight;
	        element.textAlign = param.textAlign;
	        element.text = encodeURIComponent(param.text);
	      }else if(param.elType==='logo'){
	        element.type = 'LogoElement';

	      }else if(param.elType==='image'){
	        element.type = 'PhotoElement';
	        element.imageid = imageid;
	        element.imgFlip = imgFlip;
	        element.imgRot = imgRot;
	        element.encImgId = theImage.length ? theImage[0].encImgId : '';
	        element.cropLUX = cropPX;
	        element.cropLUY = cropPY;
	        element.cropRLX = (cropPX + cropPW);
	        element.cropRLY = (cropPY + cropPH);
	        element.style = {
	          brightness: brightness,
	          effectId: 0,
	          opacity: 100
	        };
	        element.border = {
	          "size": 0,
	          "color": "#000000",
	          "opacity": 100
	        }
	      }

	      return element;
	    });

	    return elements;
	  },
	  getNewPrintSkuJson: function(projectJson) {
	    var projects = projectJson.project.pages;
	    var specVersion = projectJson.project.version;
	    var clientId = projectJson.project.clientId;
	    var createAuthor = projectJson.project.createAuthor;
	    var userId = projectJson.project.userId;
	    var artisan = projectJson.project.artisan;
	    var skuJson = {};

	    var defaultSetting = projectJson.project.summary.defaultSetting;
	    var isLittlePrintBox = defaultSetting ? defaultSetting.product === 'LPP' : false;
	    var isLSCProduct = defaultSetting ? defaultSetting.product === 'LSC' : false;

	    var optionIds = __webpack_require__(18).getOptionIds();

	    if(projects.length === 0) {
	      defaultSetting.id = 'defaultSetting';
	      defaultSetting.version = specVersion;
	      defaultSetting.clientId = clientId;
	      defaultSetting.createAuthor = createAuthor;
	      defaultSetting.userId = userId;
	      defaultSetting.artisan = artisan;
	      defaultSetting.quantity = 1;

	      skuJson = {
	        defaultSetting: defaultSetting
	      };
	    }

	    projects.forEach(function(project) {
	      if((isLittlePrintBox || isLSCProduct) && Object.keys(skuJson).length > 0) return;

	      skuJson[project.id] = {
	        id: project.id,
	        version: specVersion,
	        clientId: clientId,
	        createAuthor: createAuthor,
	        userId: userId,
	        artisan: artisan,
	        quantity: project.spec.quantity
	      };

	      for (var i = 0; i < optionIds.length; i++) {
	        skuJson[project.id][optionIds[i]] = project.spec[optionIds[i]];
	      };
	    });

	    return skuJson;
	  },

	  getNewPrintRemarkPages: function() {
	    var currentProjects = Store.projectSettings;
	    var currentPages = Store.pages;
	    var remarkPages = [];
	    var pages = [];
	    var optionIds = __webpack_require__(18).getOptionIds();

	    for(var i=0;i<currentProjects.length;i++){
	      if(Store.selectedSize){
	        if(Store.selectedPaper){
	          if(currentProjects[i].size===Store.selectedSize && currentProjects[i].paper===Store.selectedPaper){
	            remarkPages.push(currentPages[i]);
	            remarkPages[remarkPages.length-1].oid = i;
	          }
	        }else{
	          if(currentProjects[i].size===Store.selectedSize){
	            remarkPages.push(currentPages[i]);
	            remarkPages[remarkPages.length-1].oid = i;
	          }
	        }
	      }else{
	        if(Store.selectedPaper){
	          if(currentProjects[i].paper===Store.selectedPaper){
	            remarkPages.push(currentPages[i]);
	            remarkPages[remarkPages.length-1].oid = i;
	          }
	        }
	      }
	    }
	    if(remarkPages.length===0){
	      remarkPages = currentPages;
	      for(var i=0;i<remarkPages.length;i++){
	        remarkPages[i].oid = i;
	      }
	    }

	    for (var i = 0 ;i <remarkPages.length; i++) {
	      var currentCanvas=remarkPages[i].canvas;
	      var elements = this.getNewPrinteElements(currentCanvas, currentCanvas.params);
	      var currentProject=currentProjects[remarkPages[i].oid];

	      var pageId = remarkPages[i].guid || __webpack_require__(21).guid();
	      var quantity = currentProject.quantity;
	      var specVersion = __webpack_require__(18).getVersion();
	      var specObject = {};
	      var type = 'Print';
	      for (var j = 0; j < optionIds.length; j++) {
	        specObject[optionIds[j]] = currentProject[optionIds[j]];
	      };

	      specObject.quantity = quantity;

	      var baseSize=this.getPrintBaseSize({size: currentProject.size, rotated: currentProject.rotated});
	      var bleed = this.getPrintBleed({size: currentProject.size});
	      var borderLength = remarkPages[i].canvas.borderLength ? remarkPages[i].canvas.borderLength : 0;
	      var borderColor = remarkPages[i].canvas.borderColor ? remarkPages[i].canvas.borderColor : 'none';

	      if(quantity) {
	        pages.push({
	          id: pageId,
	          spec: specObject,
	          width: baseSize.width,
	          height: baseSize.height,
	          type: type,
	          quantity: quantity,
	          bleed: bleed,
	          border: {
	            color: borderColor,
	            size: borderLength
	          },
	          elements: elements,
	          backend: {
	            isPrint: true
	          }
	        });
	      }
	    };

	    return pages;
	  },

	  getNewPrintRemarkProject : function(){
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        var projectJson = this.getNewPrintCurrentProjectJson();
	        var pages = this.getNewPrintRemarkPages();
	        var images = this.getImages();

	        projectJson.project.pages = pages;
	        projectJson.project.images = images;

	        return projectJson;
	    }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {
	  formatDate: function(date) {
	    var d = new Date(date);
	    var year = d.getFullYear();
	    var month = String(d.getMonth() + 1);
	    var day = String(d.getDate());

	    if (month.length < 2) month = '0' + month;
	    if (day.length < 2) day = '0' + day;

	    return [year, month, day].join('-');
	  },

	  formatTime: function(date) {
	    var d = new Date(date);
	    var hours = String(d.getHours());
	    var minutes = String(d.getMinutes());
	    var seconds = String(d.getSeconds());

	    if (hours.length < 2) hours = '0' + hours;
	    if (minutes.length < 2) minutes = '0' + minutes;
	    if (seconds.length < 2) seconds = '0' + seconds;

	    return [hours, minutes, seconds].join(':');
	  },

	  formatDateTime: function(date) {
	    if (!date) return '';
	    return this.formatDate(date) + " " + this.formatTime(date);
	  }
	}


/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {

	var UtilMath = __webpack_require__(7);
	var CanvasController = __webpack_require__(24);
	// controller -- text
	module.exports = {

		createText: function(oData) {
			var _this = this;

			if(oData) {
				// prepare text image width and height
				var fontViewSize = Math.round(UtilMath.getTextViewFontSize(oData.fontSize));
				if(fontViewSize > 0) {
				  // valid text size
				  var img = new Image();
				  if(oData.text === '') {
				    img.src = Store.domains.productBaseUrl+"/product/text/textImage?text="+encodeURIComponent('Enter text here')+"&font="+encodeURIComponent(oData.fontFamily)+"&fontSize="+fontViewSize+"&color="+oData.fontColor+"&align=left";
				  }
				  else {
				    img.src = Store.domains.productBaseUrl+"/product/text/textImage?text="+encodeURIComponent(oData.text)+"&font="+encodeURIComponent(oData.fontFamily)+"&fontSize="+fontViewSize+"&color="+oData.fontColor+"&align=left";
				  };

				  if(img.complete) {
				    _this.addTextInParams(oData, img.width, img.height);
				    return;
				  }
				  img.onload = function () {
				    _this.addTextInParams(oData, img.width, img.height);
				  };
				}
				else {
				  // invalid text size
				  // NOTE: we create a very small size text image for text which cannot display on screen(to keep an element in canvas anyhow)
				  _this.addTextInParams(oData, 1, 1);
				};


			};
		},

		editText: function(oData, idx) {
			var _this = this;

			if(oData && idx != undefined && idx != null) {
				var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	      var fontViewSize = Math.round(UtilMath.getTextViewFontSize(oData.fontSize));
	      if(fontViewSize > 0) {
	        // valid text size
	        var img = new Image();
	        if(oData.text === '') {
	          img.src = Store.domains.productBaseUrl+"/product/text/textImage?text="+encodeURIComponent('Enter text here')+"&font="+encodeURIComponent(oData.fontFamily)+"&fontSize="+fontViewSize+"&color="+oData.fontColor+"&align=left";
	        }
	        else {
	          img.src = Store.domains.productBaseUrl+"/product/text/textImage?text="+encodeURIComponent(oData.text)+"&font="+encodeURIComponent(oData.fontFamily)+"&fontSize="+fontViewSize+"&color="+oData.fontColor+"&align=left";
	        };

	        if(img.complete) {
	          _this.changeTextInParams(oData, img.width, img.height, idx);
	          return;
	        }
	        img.onload = function () {
	          _this.changeTextInParams(oData, img.width, img.height, idx);
	        };
	      }
	      else {
	        // invalid text size
	        // NOTE: we create a very small size text image for text which cannot display on screen(to keep an element in canvas anyhow)
	        _this.changeTextInParams(oData, 1, 1, idx);
	      };
			};

		},

		deleteText: function(idx) {
			if(idx != undefined && idx != null) {
				this.removeTextFromParams(idx);
				Store.vm.$broadcast('notifyRefreshScreenshot');
			};
		},

		// update params
		addTextInParams: function(oData, nImageWidth, nImageHeight) {
			var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
			var element_index = currentCanvas.params.length;

			oData.width = nImageWidth / currentCanvas.ratio;
			oData.height = nImageHeight  / currentCanvas.ratio;
			oData.dep = element_index;

			currentCanvas.params.push(oData);

			// // NOTE: t-shirt special fitting
			// for(var i = 0; i < Store.projects.length; i++) {
			// 	currentCanvas = Store.projects[i].pages[Store.selectedPageIdx].canvas;

			// 	currentCanvas.params.push(oData);
			// };

			// NOTE: for item which last added, its' index is the same with depth
			this.createTextElement(element_index);
		},

		changeTextInParams: function(oData, nImageWidth, nImageHeight, idx) {
			var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

			oData.width = nImageWidth  / currentCanvas.ratio;
			oData.height = nImageHeight  / currentCanvas.ratio;

			currentCanvas.params.splice(idx, 1, oData);

			// // NOTE: t-shirt special fitting
			// for(var i = 0; i < Store.projects.length; i++) {
			// 	currentCanvas = Store.projects[i].pages[Store.selectedPageIdx].canvas;

			// 	currentCanvas.params.splice(idx, 1, oData);
			// };

			// NOTE: for item which last added, its' index is the same with depth
			this.editTextElement(idx);
		},

		removeTextFromParams: function(idx) {
			var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

			// fresh depth
			CanvasController.freshDepth(idx);

			var elementId = currentCanvas.params[idx].id;
			currentCanvas.params.splice(idx, 1);

			// // NOTE: t-shirt special fitting
			// for(var i = 0; i < Store.projects.length; i++) {
			// 	var currentCanvas = Store.projects[i].pages[Store.selectedPageIdx].canvas;

			// 	currentCanvas.params.splice(idx, 1);
			// };

			this.deleteTextElement(idx, elementId);
		},

		// create text element in canvas
		createTextElement: function(idx) {
			var _this = this;
			CanvasController.createElement(idx, _this);
	    CanvasController.spineLinesToTop();
		},

		editTextElement: function(idx) {
			var _this = this;
			CanvasController.editElement(idx, _this);
	    CanvasController.spineLinesToTop();
		},

		deleteTextElement: function(idx, elementId) {
			var _this = this;
			CanvasController.deleteElement(idx, elementId);
	    CanvasController.spineLinesToTop();
		}
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {
	var CanvasController = __webpack_require__(24);
	// controller -- image
	module.exports = {

		createImage: function(oData) {
			if(oData) {
				this.addImageInParams(oData);
			};
		},

		editImage: function(oData, idx) {
			if(oData && idx != undefined && idx != null) {
	      this.changeImageInParams(oData, idx);
			};

		},

		deleteImage: function(idx,removeImageOnly) {
			if(idx != undefined && idx != null) {
				this.removeImageFromParams(idx,removeImageOnly);
				Store.vm.$broadcast('notifyRefreshScreenshot');
			};
		},

		// update params
		addImageInParams: function(oData) {
			var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
			var element_index = currentCanvas.params.length;

			currentCanvas.params.push(oData);

			// // NOTE: t-shirt special fitting
			// for(var i = 0; i < Store.projects.length; i++) {
			// 	var currentCanvas = Store.projects[i].pages[Store.selectedPageIdx].canvas;
			// 	var element_index = currentCanvas.params.length;

			// 	currentCanvas.params.push(oData);
			// };

			// NOTE: for item which last added, its' index is the same with depth
			this.createImageElement(element_index);
		},

		changeImageInParams: function(oData, idx) {
			var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

			currentCanvas.params.splice(idx, 1, oData);

			// // NOTE: t-shirt special fitting
			// for(var i = 0; i < Store.projects.length; i++) {
			// 	var currentCanvas = Store.projects[i].pages[Store.selectedPageIdx].canvas;

			// 	currentCanvas.params.splice(idx, 1, oData);
			// };

			// NOTE: for item which last added, its' index is the same with depth
			this.editImageElement(idx);
		},

		removeImageFromParams: function(idx,removeImageOnly) {
			var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

			// fresh depth
			CanvasController.freshDepth(idx);

			var elementId = currentCanvas.params[idx].id;
			if(!removeImageOnly){
				currentCanvas.params.splice(idx, 1);

				// // NOTE: t-shirt special fitting
				// for(var i = 0; i < Store.projects.length; i++) {
				// 	var currentCanvas = Store.projects[i].pages[Store.selectedPageIdx].canvas;

				// 	currentCanvas.params.splice(idx, 1);
				// };

				this.deleteImageElement(idx, elementId);
			}else{
				currentCanvas.params[idx].imageId = '';
				currentCanvas.params[idx].url = '';
				currentCanvas.params[idx].sourceImageUrl = '';
				currentCanvas.params[idx].imageGuid= '';
				currentCanvas.params[idx].imageWidth= '';
				currentCanvas.params[idx].imageHeight= '';
				currentCanvas.params[idx].imageRotate= 0;
				currentCanvas.params[idx].cropPX= 0;
				currentCanvas.params[idx].cropPY= 0;
				currentCanvas.params[idx].cropPW= 1;
				currentCanvas.params[idx].cropPH= 1;
				currentCanvas.params[idx].isRefresh = true;
			}
		},

		// create image element in canvas
		createImageElement: function(idx) {
			CanvasController.createElement(idx);
	    CanvasController.spineLinesToTop();
		},

		editImageElement: function(idx) {
			CanvasController.editElement(idx);
	    CanvasController.spineLinesToTop();
		},

		deleteImageElement: function(idx, elementId) {
			CanvasController.deleteElement(idx, elementId);
	    CanvasController.spineLinesToTop();
		}
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {module.exports = {
		loadAllTemplateList:function(productType,size,isApplyLayout){
			var _this=this;
			var size1=size;
			var size2=size.split('X')[1]+'X'+size.split('X')[0];
			var left=size.split('X')[0];
			var right=size.split('X')[1];
	    var url = Store.domains.baseUrl +'/template/global/list?designSize='+size1+'&imageNum=0&autoRandomNum='+__webpack_require__(7).getRandomNum()+'&webClientId=1&productType='+productType;
	    if(Store.projectType === 'CR' && Store.isPortal != 'true'){
	      url = Store.domains.baseUrl +'/template/global/getTemplateListByProductInfo?category=CARD&product=V2_FOLDEDCARD&size='+size1+'&usePosition=inside&orientation=' + Store.projectSettings[Store.selectedIdx].orientation;
	    };

			$.ajax({
	            url: url,
	            type: 'get',
	            dataType: 'xml',
	            async: false
	        }).done(function(result) {
	        	if (result && $(result).find('result').attr('state') === 'success') {
	        		var templateArr=_this.analysisTemplateXml(result);
		            Store.templateList=templateArr;
		            if(left!==right){
		            	$.ajax({
				            url: Store.domains.baseUrl +'/template/global/list?designSize='+size2+'&imageNum=0&autoRandomNum='+__webpack_require__(7).getRandomNum()+'&webClientId=1&productType='+productType,
				            type: 'get',
				            dataType: 'xml',
				            async: false
				        }).done(function(result) {
				        	if (result && $(result).find('result').attr('state') === 'success') {
				        		var templateArr2=_this.analysisTemplateXml(result);
			            		Store.templateList=Store.templateList.concat(templateArr2);
								// console.log(Store.templateList);
								if(isApplyLayout){
									Store.watches.isApplyLayout=true;
								}

							}

				        });
		            }else{
		            	if(isApplyLayout){
		            		Store.watches.isApplyLayout=true;
		            	}

		            }

				}
	        });
		},
		getTemplateItemInfo:function(id,size){
			$.ajax({
	            url: Store.domains.baseUrl +'/template/global/item/guid/'+id+'/size/'+size+'/viewData?webClientId=1&autoRandomNum='+__webpack_require__(7).getRandomNum(),
	            type: 'get',
	            dataType: 'xml',
	            async: false
	        }).done(function(result) {
	        	if (result) {
	        		Store.vm.$dispatch('dispatchTemplateItemInfo', result);
	        	}

	        });

		},
		getTemplateItemUrl:function(id,size){
	    if(!(Store.projectType === 'CR')){
	  		if(size.split('X')[0]===size.split('X')[1]){
	  			size='8X8';
	  		}
	    }
			return Store.domains.layoutTemplateServerBaseUrl+'/TemplateThumbnail/'+size+'/'+id+'.jpg?size='+size;
		},
		analysisTemplateXml:function(xml){
			var arr=[];
			for (var i = 0; i < $(xml).find('template').length; i++) {

	            var template = $(xml).find('template').eq(i);
	            var object={};
	            for (var j = 0; j < $(template).children().length; j++) {
	            	var element=$(template).children().eq(j);
	            	object[element[0].nodeName]=element.text();
	            }
	            object.url=this.getTemplateItemUrl(object.guid,object.designSize);
	            /*if(object.guid==="87752b67-de65-11e4-b786-0247f132c068"){
	            	object.isCoverDefault='true';
	            }*/
	            arr.push(object);
	        }
	        return arr;
		}



	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 35 */
/***/ function(module, exports) {

	
	// util -- crop image
	module.exports = {
		// get default crop params
		getDefaultCrop: function(imageWidth, imageHeight, targetWidth, targetHeight) {
			if(imageWidth && imageHeight && targetWidth && targetHeight) {
				var imageX = imageWidth / imageHeight,
						targetX = targetWidth / targetHeight,
						px, py, pw, ph;

				if(imageX > targetX) {
					// horizonal image + portrait target container
					var finalHeight = imageHeight,
							finalWidth = finalHeight * targetX,
							paddingSize = (imageWidth - finalWidth) / 2;

					px = paddingSize / imageWidth;
					py = 0;
					pw = finalWidth / imageWidth;
					ph = 1;
				}
				else {
					// portrait image + horizonal target container
					var finalWidth = imageWidth,
							finalHeight = finalWidth / targetX,
							paddingSize = (imageHeight - finalHeight) / 2;

					px = 0;
					py = paddingSize / imageHeight;
					pw = 1;
					ph = finalHeight / imageHeight;
				};

				return {
					px: Math.abs(px.toFixed(8)),
					py: Math.abs(py.toFixed(8)),
					pw: Math.abs(pw.toFixed(8)),
					ph: Math.abs(ph.toFixed(8))
				};
			}
			else {
				// wrong params, crop whole image
				return { px: 0, py: 0, pw: 1, ph: 1 };
			}
		},
		getConformCrop: function(imageWidth, imageHeight,cropPX,cropPY,cropPW,cropPH,currentWidth,currentHeight,targetWidth,targetHeight){
			var cropx=cropPX*imageWidth;
			var cropy=cropPY*imageHeight;
			var cropw=cropPW*imageWidth;
			var croph=cropPH*imageHeight;
			var targetCropW=targetWidth*cropw/currentWidth;
			var targetCropH=targetHeight*croph/currentHeight;
			
			var w,h;
			if((targetCropW-cropw)<(targetCropH-croph)){
				w=cropw;
				h=w/targetCropW*targetCropH;
			}else{
				h=croph;
				w=h/targetCropH*targetCropW;
			}
			targetCropW=w;
			targetCropH=h;

			var differW=(targetCropW-cropw)/2;
			var differH=(targetCropH-croph)/2;
			var targetCropX=cropx-differW;
			var targetCropY=cropy-differH;
			var targetCropRX=targetCropX+targetCropW;
			var targetCropRY=targetCropY+targetCropH;

			if(targetCropX<0){
				targetCropX=0;
			}

			if(targetCropY<0){
				targetCropY=0;
			}

			if(targetCropRX>imageWidth){
				targetCropX=imageWidth-targetCropW;
			}

			if(targetCropRY>imageHeight){
				targetCropY=imageHeight-targetCropH;
			}

			if( targetCropW>imageWidth || targetCropH>imageHeight){

				if((targetCropW-cropw)>(targetCropH-croph)){
					w=cropw;
					h=w/targetCropW*targetCropH;
				}else{
					h=croph;
					w=h/targetCropH*targetCropW;
				}
				targetCropW=w;
				targetCropH=h;

				differW=(targetCropW-cropw)/2;
				differH=(targetCropH-croph)/2;
				targetCropX=cropx-differW;
				targetCropY=cropy-differH;
			}
			
			
			return {px:targetCropX/imageWidth,py:targetCropY/imageHeight,pw:targetCropW/imageWidth,ph:targetCropH/imageHeight};

		},

		// get rotated angle
		getRotatedAngle: function(nCurrentAngle, nDegree) {
			if(nCurrentAngle != undefined && nCurrentAngle != null) {
				// valid degree now is 0 | 90 | 180 | -90
				nDegree = parseFloat(nDegree) || 90;

				nCurrentAngle += nDegree;
				// degree value fix
				nCurrentAngle > 180 ? nCurrentAngle -= 360 : nCurrentAngle;
				nCurrentAngle < -90 ? nCurrentAngle += 360 : nCurrentAngle;

				return nCurrentAngle;
			}
			else {
				return 0;
			};
		},

		// steche function (for front end cropping)
		stecheTo: function(sourceW, sourceH, tarW, tarH, type) {
			/* for now, disable slice type */
			// type = type || 'meet';			// type --> 'meet'/'slice'
			type = 'meet';
			var divisionSource = sourceW / sourceH,
					divisionTar = tarW / tarH,
					scale = 1;

			if(divisionSource > divisionTar) {
				if(type === 'slice') {
					// adjust by height
					scale = tarH / sourceH;
				}
				else {
					// adjust by width
					scale = tarW / sourceW;
				};
			}
			else {
				if(type === 'slice') {
					// adjust by width
					scale = tarW / sourceW;
				}
				else {
					// adjust by height
					scale = tarH / sourceH;
				};
			};

			// return final container size
			return { width: sourceW * scale, height: sourceH * scale };
		},
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, Store) {var UtilDateFormat = __webpack_require__(30);

	module.exports = {
	  initProjectJson: function() {
	    var optionIds = __webpack_require__(18).getOptionIds();
	    var specVersion = $(Store.spec.specXml).find('product-spec').attr('version');
	    var defaultSetting = {};

	    return {
	      project: {
	        version: specVersion,
	        clientId: 'web-h5',
	        createAuthor: 'web-h5|1.1|1',
	        userId: Store.userSettings.userId,
	        artisan: Store.userSettings.userName,
	        createdDate: UtilDateFormat.formatDateTime(new Date()),
	        updatedDate: UtilDateFormat.formatDateTime(new Date()),
	        summary: {
	          defaultSetting: Store.baseProject
	        },
	        pages: [],
	        images: []
	      }
	    };
	  },

	  initPage: function() {
	    var baseSize = __webpack_require__(29).getLMCBaseSize();
	    var bleedSize = __webpack_require__(29).getLMCBleedSize();
	    var canvasBorder = __webpack_require__(29).getLMCCanvasBorder();
	    var pageWith = baseSize.width + bleedSize.left + bleedSize.right;
	    var pageHeight = baseSize.height + bleedSize.top + bleedSize.right;
	    //var defaultElements = [require('JsonProjectManage').getDefaultElement(pageWith, pageHeight)];
	    var defaultElements = [__webpack_require__(29).getLMCDefaultElement()];

	    // 获取初始化page的spec
	    var optionIds = __webpack_require__(18).getOptionIds();
	    var currentProject = Store.projectSettings[Store.currentSelectProjectIndex] || Store.baseProject;
	    var specObject = {};
	    for (var i = 0; i < optionIds.length; i++) {
	      specObject[optionIds[i]] = currentProject[optionIds[i]];
	    };
	    specObject.quantity = 1;

	    return {
	      "id": __webpack_require__(21).guid(),
	      "width": pageWith,
	      "height": pageHeight,
	      "type": "Page",
	      "bleed": bleedSize,
	      "canvasBorder": canvasBorder,
	      "spec": specObject,
	      "elements": defaultElements,
	      "backend": {
	          "isPrint": true
	      }
	    }
	  },
	  getCurrentProjectJson: function() {
	    var optionIds = __webpack_require__(18).getOptionIds();
	    var defaultSetting = {};
	    for (var i = 0; i < optionIds.length; i++) {
	      defaultSetting[optionIds[i]] = Store.baseProject[optionIds[i]];
	    };
	    var specVersion = $(Store.spec.specXml).find('product-spec').attr('version');
	    var pages = this.getPages();
	    var images = __webpack_require__(29).getImages();
	    return {
	      project: {
	        guid: Store.projectId,
	        version: specVersion,
	        clientId: 'web-h5',
	        createAuthor: 'web-h5|1.1|1',
	        userId: Store.userSettings.userId,
	        artisan: Store.userSettings.userName,
	        createdDate: Store.createdDate,
	        updatedDate: UtilDateFormat.formatDateTime(new Date()),
	        summary: {
	          defaultSetting: defaultSetting
	        },
	        pages: pages,
	        images: images
	      }
	    };
	  },

	  getPages: function() {
	    var pages = [];

	    for(var i = 0; i < Store.pages.length; i++ ) {
	      if(Store.pages[i].isDeleted || Store.projectSettings[i].quantity === 0)continue;

	      var bleedSize = __webpack_require__(29).getLMCBleedSize(i);
	      var photoLayer = __webpack_require__(29).getLMCPhotoLayer(i);
	      var canvasBorder = __webpack_require__(29).getLMCCanvasBorder(i);
	      var pageWith = photoLayer.width;
	      var pageHeight = photoLayer.height;
	      var elements = __webpack_require__(29).getElements(i);

	      // 获取page的spec
	      var optionIds = __webpack_require__(18).getOptionIds();
	      var currentProject = Store.projectSettings[i];
	      var specObject = {};
	      for (var j = 0; j < optionIds.length; j++) {
	        specObject[optionIds[j]] = currentProject[optionIds[j]];
	      };
	      specObject.quantity = currentProject.quantity;
	      var pageId = Store.pages[i].guid || __webpack_require__(21).guid();

	      pages.push({
	        "id": pageId,
	        "width": pageWith,
	        "height": pageHeight,
	        "type": "Page",
	        "spec": specObject,
	        "bleed": bleedSize,
	        "canvasBorder": canvasBorder,
	        "elements": __webpack_require__(29).getElements(i),
	        "backend": {
	          "isPrint": true
	        }
	      })
	    }
	    return pages;
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(1)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {module.exports ={
	    insertProject: function(obj,projectJson,skuJson) {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex] || Store.baseProject;
	        var product = currentProject.product;
	        var url = Store.domains.baseUrl + '/general/json/' + Store.userSettings.userId + '/project/' + product;
	        var projectJson = JSON.stringify(projectJson);
	        var title = Store.title;
	        var crossSell = Store.mainProjectUid ? 'cart' : '';
	        var skuJson = JSON.stringify(skuJson);
	        $.ajax({
	            url: url,
	            type: 'post',
	            dataType: 'json',
	            data: { projectJson: projectJson,skuJson: skuJson,crossSell:crossSell,mainProjectUid:Store.mainProjectUid,removeCart:Store.fromCart,isFromMarketplace : Store.isFromMarketplace, requestKey: __webpack_require__(10).getJSONRequestKey(), title: title }
	        }).done(function(result) {
	            if (result && result.errorCode == '200') {
	                console.log('new project successfully' + result);
	                Store.projectId = result.data.guid || __webpack_require__(10).getUrlParam("initGuid") || '';
	                // window.history.replaceState({}, 'LittleRoundBlock', '?initGuid=' + result.data.guid + '&webClientId=1');
	                //require('CanvasController').initCanvasData();
	                Store.watches.isProjectLoaded = true;
	                Store.isNewInsertProject = true;
	                // Store.isPrjSaved=true;
	            } else {
	                //require('CanvasController').initCanvasData();
	                if(result.errorCode == "-103"){
	                  setTimeout(function(){obj.$dispatch('dispatchShowProjectChooseWindow');});
	                }
	            };
	        });
	    },
	    saveProject: function(obj,projectJson,skuJson,callback) {
	      var currentProject = Store.projectSettings[Store.currentSelectProjectIndex] || Store.baseProject;
	      var product = currentProject.product;
	      var url = Store.domains.baseUrl + '/general/json/' + Store.userSettings.userId + '/project/' +　Store.projectId　+ '/' + product;
	      var title = Store.title;
	      var projectString = JSON.stringify(projectJson);
	      var skuString = JSON.stringify(skuJson);
	      var _this = this;

	      $.ajax({
	          url: url,
	          type: 'post',
	          dataType: 'json',
	          data: { projectJson: projectString,skuJson: skuString,removeCart:Store.fromCart, requestKey: __webpack_require__(10).getJSONRequestKey(), isFromMarketplace : Store.isFromMarketplace,title: title }
	      }).done(function(result) {
	          if (result && result.errorCode == '200') {
	              Store.projectJson = projectJson;
	              _this.uploadCoverImage(obj, callback);
	              // if(callback && typeof callback==="function"){
	              //     callback();
	              // }else{
	              //     obj.$dispatch('dispatchShowPopup', { type: 'save', status: 0});
	              // }
	              Store.isPrjSaved=true;
	              Store.isProjectSavePending = false;
	          }else if(result){
	           if(result.errorCode=="-108"){
	              obj.$dispatch('dispatchShowPopup', { type: 'save', status: -4});
	              Store.vm.$broadcast('notifyCloseWindow');
	            }else if(result.errorCode=="-111"){
	              obj.$dispatch('dispatchShowPopup', { type: 'login', status: 0});
	            }else{
	              obj.$dispatch('dispatchShowPopup', { type: 'save', status: -1});
	            }
	          }else {
	            obj.$dispatch('dispatchShowPopup', { type: 'save', status: -1});
	        };
	      });
	    },
	    saveProjectOnly: function(obj,projectJson,skuJson){
	      var currentProject = Store.projectSettings[Store.currentSelectProjectIndex] || Store.baseProject;
	      var product = currentProject.product;
	      var url = Store.domains.baseUrl + '/general/json/' + Store.userSettings.userId + '/project/' +　Store.projectId　+ '/' + product;
	      var title = Store.title;
	      var projectString = JSON.stringify(projectJson);
	      var skuString = JSON.stringify(skuJson);
	      var _this = this;

	      $.ajax({
	          url: url,
	          type: 'post',
	          dataType: 'json',
	          data: { projectJson: projectString,skuJson: skuString,removeCart:Store.fromCart, requestKey: __webpack_require__(10).getJSONRequestKey(), isFromMarketplace : Store.isFromMarketplace,title: title }
	      }).done(function(result) {
	          if (result && result.errorCode == '200') {
	              Store.projectJson = projectJson;
	              Store.isPrjSaved=true;
	              Store.isProjectSavePending = false;
	          }
	      });
	    },
	    handledSaveProject: function(obj,projectJson,skuJson,eventName) {
	      var currentProject = Store.projectSettings[Store.currentSelectProjectIndex] || Store.baseProject;
	      var product = currentProject.product;
	      var url = Store.domains.baseUrl + '/general/json/' + Store.userSettings.userId + '/project/' +　Store.projectId　+ '/' + product;
	      var title = Store.title;
	      var projectString = JSON.stringify(projectJson);
	      var skuString = JSON.stringify(skuJson);
	      var _this = this;

	      $.ajax({
	          url: url,
	          type: 'post',
	          dataType: 'json',
	          data: { projectJson: projectString,skuJson: skuString,removeCart:Store.fromCart, requestKey: __webpack_require__(10).getJSONRequestKey(), isFromMarketplace : Store.isFromMarketplace,title: title }
	      }).done(function(result) {
	          if (result && result.errorCode == '200') {
	              Store.projectJson = projectJson;
	              Store.isPrjSaved=true;
	              _this.uploadCoverImage(null, function(){
	                obj.$dispatch(eventName,'success');
	              });
	          }else if(result){
	            if(result.errorCode=="-108"){
	              obj.$dispatch('dispatchShowPopup', { type: 'save', status: -4});
	              Store.vm.$broadcast('notifyCloseWindow');
	            }else if(result.errorCode=="-111"){
	              obj.$dispatch('dispatchShowPopup', { type: 'login', status: 0});
	            }else{
	              obj.$dispatch('dispatchShowPopup', { type: 'save', status: -1});
	            }
	          };
	      });
	    },
	    getShareProject:function(){

	        var _this = this;
	        $.ajax({
	            url: Store.domains.uploadUrl + '/upload/Preview/GetPhotobookXmlByProjectId?projectId='+ encodeURIComponent(Store.projectId),
	            type: 'get',
	            dataType: 'json',
	            data: 'webClientId=1&autoRandomNum=' + __webpack_require__(7).getRandomNum()
	        }).done(function(result) {
	            if (result) {
	                Store.projectJson = result;
	                Store.projectId = result.project.guid || __webpack_require__(10).getUrlParam("initGuid") || '';
	                Store.createdDate = result.project.createdDate;
	                Store.projectSettings.length=0;
	                var PrjConstructor = __webpack_require__(14);
	                var Prj = PrjConstructor();
	                var spec = result.project.spec;
	                var specKeys = Object.keys(spec);
	                for (var i = 0; i < specKeys.length; i++) {
	                  var itemKey = specKeys[i];
	                  Prj[itemKey]=spec[itemKey];
	                }
	                Prj.rotated = Prj.orientation === 'Landscape' ? true : false;
	                Store.projectSettings.push(Prj);
	                Store.watches.isProjectLoaded = true;
	            }
	        });

	    },
	    getProject: function() {
	        var _this = this;
	        $.ajax({
	            url: Store.domains.baseUrl + '/userid/' + Store.userSettings.userId + '/project/' + Store.projectId,
	            type: 'get',
	            dataType: 'json',
	            data: 'webClientId=1&autoRandomNum=' + __webpack_require__(7).getRandomNum()
	        }).done(function(result) {
	            if (result) {
	                Store.projectJson = result;
	                Store.projectId = result.project.guid || __webpack_require__(10).getUrlParam("initGuid");
	                Store.createdDate = result.project.createdDate;
	                Store.projectSettings.length=0;
	                var PrjConstructor = __webpack_require__(14);
	                var Prj = PrjConstructor();
	                var spec = result.project.spec;
	                var specKeys = Object.keys(spec);
	                for (var i = 0; i < specKeys.length; i++) {
	                  var itemKey = specKeys[i];
	                  Prj[itemKey]=spec[itemKey];
	                }
	                Prj.rotated = Prj.orientation === 'Landscape' ? true : false;
	                Store.projectSettings.push(Prj);
	                Store.watches.isProjectLoaded = true;
	            }
	        });
	    },
	    uploadCoverImage: function(obj, callback) {
	        var project = Store.projectJson.project;
	        var encodeimage = '';

	        if(project.pages.length === 0) {
	            encodeimage = Store.emptyImage;
	        } else {
	            encodeimage = __webpack_require__(9).getScreenshot().replace("data:image/jpeg;base64,","").replace("data:image/png;base64,","");
	        }

	        var url = Store.domains.uploadUrl + '/upload/servlet/UploadCoverImgServlet';
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex] || Store.baseProject;
	        var product = currentProject.product;
	        $.ajax({
	            url: url,
	            type: 'post',
	            dataType: 'text',
	            data: {projectid:Store.projectId,encodeimage:encodeimage,projectType:product,webClientId:1,autoRandomNum:__webpack_require__(7).getRandomNum()}
	        }).done(function(result) {
	        if(callback && typeof callback==="function"){
	            callback();
	        }else{
	            obj && obj.$dispatch('dispatchShowPopup', { type: 'save', status: 0});
	        }
	        });
	    },
	    cloneProject:function(obj,oldTitle,newTitle,projectJson,skuJson){
	        var _this = this;
	        var timestamp = (new Date()).valueOf();
	        $.ajax({
	            url: '/userid/' + Store.userSettings.userId + '/addOrUpdateAlbum',
	            type: 'get',
	            data: 'timestamp=' + timestamp + '&albumId=&albumName=' + newTitle + '&webClientId=' + Store.webClientId + '&autoRandomNum=' + __webpack_require__(7).getRandomNum()
	        }).done(function(result) {
	            if (result) {
	                if ($(result).find('resultData').attr('state') == 'success') {
	                    Store.userSettings.albumId = $(result).find('albumId').text() || '';
	                    var currentProject = Store.projectSettings[Store.currentSelectProjectIndex] || Store.baseProject;
	                    var product = currentProject.product;
	                    var url = Store.domains.baseUrl + '/general/json/' + Store.userSettings.userId + '/project/' + product;
	                    var title = Store.title;
	                    var crossSell = Store.mainProjectUid ? 'cart' : '';
	                    var projectString = JSON.stringify(projectJson);
	                    var skuString = JSON.stringify(skuJson);
	                    $.ajax({
	                        url: url,
	                        type: 'post',
	                        dataType: 'json',
	                        data: { projectJson: projectString,skuJson: skuString,crossSell:crossSell,mainProjectUid:Store.mainProjectUid,removeCart:Store.fromCart,isFromMarketplace : Store.isFromMarketplace, requestKey: __webpack_require__(10).getJSONRequestKey(), title: title }
	                    }).done(function(result) {
	                        if (result && result.errorCode == '200') {
	                           Store.projectId = result.data.guid || __webpack_require__(10).getUrlParam("initGuid") || '';
	                           Store.isPrjSaved=true;
	                           Store.vm.$broadcast('notifyHideCloneWindow');
	                           __webpack_require__(9).getProjectOrderedState(obj);
	                           __webpack_require__(9).getProjectInfo();
	                           _this.uploadCoverImage(obj);

	                           var url = window.location.href;
	                           var prefix = url.split('index.html?')[0];
	                           window.history.pushState({}, '', prefix + 'index.html?initGuid=' + Store.projectId + '&webClientId=1');
	                        } else {
	                            var failedString = 'Clone failed';
	                            Store.title=oldTitle;
	                            Store.vm.$broadcast('notifyShowInvalidTitle',failedString);
	                        };
	                    });
	                }else if($(result).find('resultData').attr('state') == 'fail'){
	                    var errorCode = $(result).find('errorCode').text();
	                    var errorString;
	                    Store.title=oldTitle;
	                    if(errorCode === "1"){
	                        errorString= "Title existed, please pick another one.";
	                    }else if(errorCode === "2"){
	                        errorString = "Please input new project name";
	                    }else{
	                        errorString = "Save project name failed. errorInfo："+$(result).find('errorInfo').text();
	                    }
	                    Store.vm.$broadcast('notifyShowInvalidTitle',errorString);
	                }
	            }
	        });
	    },
	    createProjectSuccess:function(obj,oldTitle,newTitle,projectJson,skuJson){
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex] || Store.baseProject;
	        var product = currentProject.product;
	        var url = Store.domains.baseUrl + '/general/json/' + Store.userSettings.userId + '/project/' + product;
	        var title = Store.title;
	        var crossSell = Store.mainProjectUid ? 'cart' : '';
	        var projectString = JSON.stringify(projectJson);
	        var skuString = JSON.stringify(skuJson);
	        Store.errCode = true;
	        $.ajax({
	            url: url,
	            type: 'post',
	            dataType: 'json',
	            data: { projectJson: projectString,skuJson: skuString,crossSell:crossSell,mainProjectUid:Store.mainProjectUid,removeCart:Store.fromCart,isFromMarketplace : Store.isFromMarketplace, requestKey: __webpack_require__(10).getJSONRequestKey(), title: title }
	        }).done(function(result) {
	            if(result){
	                if (result && result.errorCode == '200') {
	                    var successString = 'Create and saved successfully';
	                    Store.projectId = result.data.guid || __webpack_require__(10).getUrlParam("initGuid") || '';
	                    Store.watches.isProjectLoaded = true;
	                    Store.vm.$broadcast('notifyHideNewProjectWindow');
	                    __webpack_require__(9).getProjectInfo();
	                } else {
	                    var failedString = 'Create failed';
	                    Store.title=oldTitle;
	                    Store.vm.$broadcast('notifyShowNewProjectInvalidTitle',failedString);
	                };
	            }
	        });
	    },
	    getNewPrintProject:function(projectType){
	        var _this = this;

	        switch(projectType) {
	            case 'Share':
	                url = Store.domains.uploadUrl + '/upload/Preview/GetPhotobookXmlByProjectId?projectId='+ encodeURIComponent(Store.projectId);
	                break;
	            case 'Portal':
	                url = Store.domains.portalBaseUrl + '/portal/projectProcess/getProjectById.ep?projectId='+ encodeURIComponent(Store.projectId);
	                break;
	            case 'Local':
	                url = './assets/data/project.json';
	                dataType = undefined;
	                break;
	            case 'OldProject':
	            default:
	                url = Store.domains.baseUrl + '/userid/' + Store.userSettings.userId + '/project/' + Store.projectId;
	                break;
	        }

	        $.ajax({
	            url: url,
	            type: 'get',
	            data: 'webClientId=1&autoRandomNum=' + __webpack_require__(7).getRandomNum(),
	            complete: function(res) {
	                var isJSON = __webpack_require__(38).isJSON(res.responseText);
	                var result = {};
	                var canBeRemark = true;

	                if(isJSON) {
	                    result = JSON.parse(res.responseText);
	                    Store.projectJson = result;
	                } else {
	                    var xml = __webpack_require__(20).stringToXml(res.responseText);

	                    // AR和LPR项目没有ID，因此无法被remake
	                    canBeRemark = $(xml).find('content').eq(0).attr('id');

	                    result = __webpack_require__(22).transformProjectXmlToJson(xml);
	                    Store.projectJson = result;
	                }

	                Store.projectId = result.project.guid || __webpack_require__(10).getUrlParam("initGuid") || '';
	                Store.createdDate = result.project.createdDate;
	                Store.projectSettings.length = [];

	                // 如果是用户打开项目 或者 是remake界面并且能够被remake的情况下，进行render页面
	                if(!Store.isRemark || (Store.isRemark && canBeRemark)) {
	                    Store.watches.isProjectLoaded = true;
	                } else {
	                    alert('This project cannot be remaked by user. Please connect engineer to remake.');
	                }
	            }
	        });
	    },

	    saveRemarkProject : function(successCallback,failedCallback){
	        var remarkProjectJson = __webpack_require__(29).getNewPrintRemarkProject();
	        var remarkSkuJson = __webpack_require__(29).getNewPrintSkuJson(remarkProjectJson);
	        var url = Store.domains.portalBaseUrl + '/portal/h5-client/newPrintsRemake.ep';
	        $.ajax({
	            url: url,
	            type: 'post',
	            data: {
	                projectId: Store.projectId,
	                remarkProjectJson: JSON.stringify(remarkSkuJson),
	                orderNumber: Store.orderNumber,
	                timestamp:Store.timestamp,
	                token:Store.token,
	                pUser:Store.pUser
	            },
	            statusCode: {
	                '504': function() {
	                    Store.vm.$dispatch("dispatchShowPopup", { type : 'checkFailed', status : 0 ,info:"Response timeout."});
	                }
	            },
	            error: function(result) {
	                console.log(result)
	                Store.vm.$dispatch("dispatchShowPopup", { type : 'checkFailed', status : 0 ,info:"An Error has happened, please connect with engineer and check the status."});
	            }
	        }).done(function(result) {
	            console.log(result);

	            if(result && result.status === 'success'){
	                successCallback && successCallback();
	                Store.vm.$dispatch("dispatchShowPopup", { type : 'checkFailed', status : 0 ,info:"Reprint successfully"});
	            }else{
	                failedCallback && failedCallback();
	                Store.vm.$dispatch("dispatchShowPopup", { type : 'checkFailed', status : 0 ,info:"Failed to reprint, please try again later."});
	            }
	        });
	    },
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = {
	  isJSON: function (str, pass_object) {
	    if (pass_object && isObject(str)) return true;

	    // if (!isString(str)) return false;

	    str = str.replace(/\s/g, '').replace(/\n|\r/, '');

	    if (/^\{(.*?)\}$/.test(str))
	      return /"(.*?)":(.*?)/g.test(str);

	    if (/^\[(.*?)\]$/.test(str)) {
	      return str.replace(/^\[/, '')
	        .replace(/\]$/, '')
	        .replace(/},{/g, '}\n{')
	        .split(/\n/)
	        .map(function (s) { return isJSON(s); })
	        .reduce(function (prev, curr) { return !!curr; });
	    }

	    return false;
	  }
	}

	function isString (x) {
	  return Object.prototype.toString.call(x) === '[object String]';
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {var DrawManage = __webpack_require__(16);
	module.exports = {  
	template: '<div class="bed-page-loading" v-show="sharedStore.isPageLoadingShow">'+
				'<div class="shadow-bg" style="z-index:1500;background-color:rgba(248, 248, 248, 1)"></div>'+
				'<div class="box-page-loading  fix-center" style="z-index:1501;width:96px;height:96px;border-radius:12px;border:1px solid #969696;">'+
					'<div style="font-size: 0;width: 28px;height: 28px;margin: 25px auto 8px;">'+
						'<img style="width: 50px;height: 50px;margin: -11px 0 0 -11px;" src="data:image/gif;base64,R0lGODdhZABkAMQAAAAAABcXFxwcHCQkJCwsLDQ0NDs7O0RERE1NTVVVVVtbW2NjY2pqanR0dH19fYWFhYqKipKSkpqamqOjo////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBwAVACwAAAAAZABkAAAF/2AljmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvBk8lZl06vcW31e2Woo+IpiWReN9zbKHp6b31+JngmgntvBX0Fh4CJgnMVhZBuJYqUIo4liCSCEZuVfZ6RI5qjpHYjnxWpY4Yolq2nr5NjB7oHKbQimCKwJhARxVi7urIlpSkReqInxdJYBsi6KI80xNLGWdbXOdvcXt+8NdzFEGHVyDbo6rm77tNn4Oeq+Pn6TuX2OQ8AAwakgqCgwYMGcQCEwLChwwdSEEosqNChRYYQo0xEqEOgx4H7QoocuSNBAhsOHLusMalAwUkaKVOSYdnyJcyYMsEkaFnT5k2cKrnQdOkTJdCgWIbuPNGyRYMTR5FW2ckTxYKrClY02IoCaNKaKRRgJbGAAQkGW592jUlG7NWzDOKSSKtW1dUFWUfElTuXqyq3C0rsNdvX76a7efXuNUH38FjBi0s0nnM3sInBJyavQXwCM+O0lN92jvy57pm7KDxnNq1PNcnRDCy/Tk14tu3buHPr3s27t+/fwIMLH068uPHjyJMrX868+ZMQACH5BAkHABUALBkAGQAyADIAAAX/YCWOZGmOx3GubOuKafrO9BmrdU4i7M0aBp0JQeTZYisgUFgqrnymgpLZdJqgJWWQurOSsCMtt0q8IrPTcbf8PYfT6lHRiHKLxPE1vRLb3uE1CQoJCSxeMDgiUksrE44nCpGRhUNsLIt+JBKOnJCSgyeWP5kjnJ0rhJKEeRWmpy2DqpRUro+Bn7M6tUypoEyuY6tctqzFxsfIXJ/LCgusERES0tHTEhUL2Nna2Apx1NLg4RLN29vdceLp1pLckQuRz9XyEhHJ9vf49gwMahBq+wycUYEGjQnAfQKZEIzgr8aCgwHHQFhY0MVDiM8oNjwBkR+VByso1jMBMWGJBihbaTyAAPLExIUc97FAmXKEAwckVrJkAVMHzQYlbuIcAaGoi405fpIQOlRE0Z3GlC4VWkJnS1ZSbVLNWfRqnKxab5p46pUL2LBNR1jNc1YE0xNr1dBc8RYu1DE1T9QdWzbZ3nx0twJmIZhKCAAh+QQJBwAVACwZABkAMgAyAAAF/2AljmRpjklyrmzriomiqG9tm/F876SysDmaCYHgrRYLxSq4IhaNJWTyxBw6oSUfkioTjpxPLEmqLFVJYHFWiuuW0uoom3QWwePjOcz9veLXWyh8dkQuBisMDD9HehUpaH4nB5MHJomXK1plTYUnBpSTJguXmCYyL2EloJOHJ6SleKuhLq+KarKVNrVislCjiYtGn5Rqo7e5f8nKy8zJDc/QDQzPywUG1gXW1wUV0d7QDHgG4+Tl5N/o4ubrh+jRyezl3M309fb3FQ5xExNxDv9i+AmE8q+gPigCB94wWFBNQoUtGAL885AfC4kHSTx4EPDhCYknHkCA8EKCyRMSPGSWMMhiJMkWJk+ugLiyhciRJCLoLBFTArObHHPqfCmi58+RQUdAGMozprKbREfo3NlUJh6gJqZGLer0KtITSyNs5SohAp6vYJlm7SoG6wmtK9iqSWoi7Fiy+Ozic6F3b0uqakIAACH5BAkHABUALBkAGQAyADIAAAX/YCWOZGmODHOubOuKS6q+dG3Ks62LTcPiq4Vwd+r5TsCTcEE0GY+lZGnJbJKeSJlyaS1ho9qSgtu9Gm/h0XhY9p5JUphQ0Xb2wCnSulo331FpFUt0Ow6GDixGORUMfBVrhCcJCQoJJoeGK28seyuUCpWXmJlONKAnlaCVliejpHWTqpMurohlsbI2rreyrDqYXZ+zXa9Nw33IycrLfQ/Oz9DOyAjU1dbUDxDa29wQD3XX4djd3dJt4uEi0dDKB+7v78zy8/T1JBFt7mUR/Phd8EQg9ONXBt4BAzYEDvRnxaA+FwsjQEDm8MCKiBOtFFjhEGGJhSskiGR4woDJFQYMY5rol/GESJEkJkwgYfIkx3g7XkqIKXPmiJoeUTbRyVMmzZrLiBb1+RMpsggvTfRkKqKA0z5Kl5oAijWq1J4mrJrc2OYlyRFTS161krVEWrVBu8Bc8XarTXp17dEFq7eF0TYhAAAh+QQJBwAVACwZABkAMgAyAAAF/2AljmRpik56rmzroqnzzvQZy3VOPtB6s42G7sR7+GKroHBY4kGMpp9JuWTuIM8ocqq0NrG9kpRE9Zqc0NFYVDZ/s6R1pe2+wmGqET0XZoHjeXpdOhGFESxogGSDJwyOJ4aFfV9pJ4wlC46akJGHRF6amysQnZ51oY4LL6WTQ5mhqjWdXq+iOqSFtLZWrUOPdcDBwsPEIhESyMfIy6ZuCs8L0NHPFcvW18AKC9vc3dHX4BLNVtre5tXK17nA08/u7sXx8vP0IxMTZgkJZvf9VgnP9DHp548JQHf7ahAs+O+gAoAvFt4Lpg9hwhMSTxgw8AIBghMOqZlYKEHjxgIuPGR+NBFSAcaJKzYaQDniwIESKllUvFhDJscRBmzeHKFypTCfJYQOJZrzqMykQnE2BYYUqk0TRYNVJaEU61QzW7lG9eqxjkyaVpdKNWolrNirJ7KC/Xmi6wq28uzWY6F37wq4ZkIAACH5BAkHABUALBkAGQAyADIAAAX/YCWOZGmOUQSdbOu+FZSucG2bsnrvpOSzqVSLxjP5JMAg6wGBPIqlY+SUI5aYVmglcqTOTtinttct5abXpng8OiJLQTSp6WRHy6Nqum6///JKJGF9fm8oQiODLQ4sE44tbi90iw6VJo6YhmSaLGonlaCMl5iPWg9rI6GgLaSYhBWqli+tpVqxoja0tqpQrWOrbLW2r8TFxsdsBQbLzM0Grw3R0tMNFc7Xy33U29HY130M3NTWzAXKBsrF4tHI7e7v7gcHbAwLbPLyz1ALDP32RfjwjelHkMGNgALH8Cto8AVCea8Y1mNh4CELBDAUKDgh8R8JhPpMIBjpQsGCBRs5ZBY0EbDFSJIjEiQgcfJki4UUX7wkkUDjzBE1UxZ7iTGmT5o1jREt0VPBT6BJiS3lebRE0FdTqTo1UdOjnaxGt3I9KXQM2LBPSZi0+RWmiaZp1bJtywLuzbLI7MJzoXdvC5l9QgAAIfkECQcAFQAsGQAZADIAMgAABf9gJY5kaY7TdK5s64pp+s70Gat1Phr8erMSie7EM/hiq2BwWCoaTT+TUsgkFYoFKFKqrDaLWllp6jVhS1GSMlL+9khpEbntfsK28u7QTgSj8BVzOQeEByxOcDh5SysQEY8mhYR8JH4rEUFsJ4+cZpKEK1lVjpyQJ5+gdBWkpS+ohl6ljxA1Bp9lsrQ6kridXqmxqsLDxMXFr8CqD8vMzCII0NHS0XTLENfY2Q/T3NDV2eDX293Sws3nzsbq6+ztFQkJZQ4OZfAKCvFV8/ND9vf5+vbxo5Hg3j+AAQXSa+EPH0J5CheaaFjwxL0ZDU5ElDiioMEVC0IqcNGg5AqFE/9jsVAgksQCBiQYlMx4ct8QliFjMthJYiZNYiEXjByxk2dPk8RwLihRFOZRpMKCDiVa1ITPqC2ZVi1xlU7QpSaanuhaRuoJsVZnes15dmvan16CrkA7Fq46uu7m7gSbl4XRMiEAADs=" />'+
						// '<img src="assets/img/Loading.png" class="loading-animation" style="width: 36px;height: 36px;margin: -1px 0 0 -1px;"/>'+
					'</div>'+
					'<span class="font-light" style="margin-left: 23px;font-size: 12px;color:#7b7b7b;">Loading...</span>'+
				'</div>'+
			'</div>',
			data: function() {
				return {
					privateStore: {
						els: '',
						printPreviewpram: {
							width: 96,
							height: 96,
							selector: '.box-page-loading'
						},
					},
					sharedStore: Store,
					isPageShow : true
				};
			},
			computed: { 
				windowZindex: function(){
					var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
							elementTotal = currentCanvas.params.length || 0;

					return (elementTotal + 15) * 100;
				}
			},
			methods: { 
				
			},
			events: {
				
			},
			created: function() {
				
			},
			ready: function(){
				// var _this = this;
				// _this.$watch('sharedStore.isPageLoadingShow', function() {
			 //      if(_this.sharedStore.isPageLoadingShow) {
			 //       		setTimeout(function(){
			 //       			_this.isPageShow = false;
			 //       		},0)
			 //      }
			 //    });
		  	}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {var Vue = __webpack_require__(31);
	var ScreenshotController = __webpack_require__(15);
	var OptionConfig = __webpack_require__(41);
	var CompTitle = Vue.extend(__webpack_require__(42));

	module.exports = {
	    mixins: [
	        __webpack_require__(9)
	    ],
	    // template: '#t-header',
	    // fit for IE10, IE11, <template> not supported in html, thus put it here
	    template: '<div class="bed-header" v-on:click="blurFocus">' +
	                '<div style="display: inline-block; height: 38px;">' +
	                  '<div id="logo" v-on:click="handleLogoClicked()" style="margin-left: 30px;float: left;cursor: pointer;width:100px;" title="Home"><img src="../../static/img/new-logo-white.svg" height="16" width="79" draggable="false" alt="Logo" style="display:block;margin: 11px 20px 11px 0;" /></div>' +
	                  '<title-edit></title-edit>'+
	                //   '<div style="float:left;height:50px;line-height:50px;padding:5px 0 0 30px;color:#ccc;font-size:12px;" class="font-medium"><span v-bind:style="priceStyle" style="padding-left:15px;">${{oriPrice}}</span><span v-show="typeof trialPrice !==\'undefined\'" style="padding-left:5px; font-size:14px;color:#fff">${{trialPrice}}</span></div>'+
	                '</div>' +
	                '<div style="float: right; height: 38px;margin-top: 0px;">' +
	                  /*'<span class="menu-item" v-on:click="handleOptions()" style="height: 38px;line-height: 38px;margin-right: 40px;">Options</span>' +*/
	                  /*'<span class="menu-item" v-on:click="handleDownloadSpec()" style="height: 38px;line-height: 38px;margin-right: 40px;">Spec</span>' +*/
	                  /*'<span class="menu-item" v-on:click="handleHelp()" style="height: 38px;line-height: 38px;margin-right: 40px;">Help</span>' +*/
	                  /*'<span class="menu-item" v-on:click="handleClone()" style="height: 38px;line-height: 38px;margin-right: 40px;">Clone Project</span>' +*/
	                  '<span class="menu-item" v-show="sharedStore.isRemark" style="height: 38px;line-height: 38px;margin-right: 40px;"> <input type="checkbox" id="reprint-all" style="vertical-align:middle;" v-model="sharedStore.isReprintAll"/> <label for="reprint-all">Reprint All</label></span>' +
	                  '<span id="reprintButton" class="menu-item" v-show="sharedStore.isRemark" v-on:click="handlePrint()" style="height: 38px;line-height: 38px;margin-right: 40px;">Reprint</span>' +

	                  '<span class="menu-item" v-show="false" v-on:click="handlePreview()" style="height: 38px;line-height: 38px;margin-right: 40px;">Preview</span>' +
	                  '<span v-show="!sharedStore.fromCart && !sharedStore.isRemark" id="saveButton" class="menu-item" v-on:click="handleSave()" style="height: 38px;line-height: 38px;margin-right: 40px;">Save</span>' +

	                  '<span id="saleButton" v-show="!sharedStore.isRemark" v-if="isInMarket" class="menu-item" v-on:click="handlePostToSale()" style="height: 38px;line-height: 38px;margin-right: 40px;">Post to Marketplace</span>' +
	                  '<span id="orderButton" v-show="!sharedStore.isRemark" v-if="!isInMarket" class="menu-item" v-on:click="handleOrder()" style="height: 38px;line-height: 38px;margin-right: 40px;">{{orderLabel}}</span>' +
	                '</div>' +
	                '<div v-on:click="handleHideHelp()" v-show="sharedStore.isShowHelp" style="position: fixed;width: 100%;height: 100%;top: 0px;" v-bind:style="{zIndex: windowZindex-2}"></div>'+
	                '<div class="help-popup" v-show="sharedStore.isShowHelp" v-bind:style="{zIndex: windowZindex-1}">' +
	                  '<span class="poptip-arrow-top" style="left:50%;"><em class="poptip-arrow-top-em">◆</em><i class="poptip-arrow-top-i">◆</i></span>' +
	                  '<div class="help-item" v-on:click="handleFAQ()">FAQ</div>' +
	                  '<div class="help-item" style="margin-top: 0px;" v-on:click="handleContactUs()">Contact Us</div>' +

	                '</div>' +


	              '</div>',
	    data: function() {
	        return {
	            privateStore: {},
	            sharedStore: Store,
	            prj:{

	            },
	        };
	    },
	    computed: {

	        // product text, e.g.  Image Box
	        // productText: function() {
	        //     switch (this.sharedStore.projectSettings[Store.currentSelectProjectIndex].product) {
	        //         case 'TS':
	        //             return 'T-Shirt';
	        //             break;
	        //         default:
	        //             return '[ERR PRODUCT]';
	        //     };
	        // },
	        orderLabel: function() {
	            if (this.sharedStore.fromCart||this.sharedStore.checkFailed) {
	                return 'Submit';
	            } else {
	                return 'Order';
	            }
	        },
	        windowZindex: function() {
	            var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	                    elementTotal = currentCanvas.params.length || 0;

	            return (elementTotal + 10) * 100;
	        },
	        isInMarket:function(){
	            if(Store.isShowPostToSale){
	                return true;
	            }
	            return false;
	        },
	        prj: function(){
	            var prj = this.sharedStore.projectSettings[Store.currentSelectProjectIndex];
	            return prj;
	        },
	    },
	    components: {
	        'title-edit': CompTitle
	    },
	    methods: {
	        handleFAQ: function() {
	            window.open("/support.html#/Software", "_blank");
	            this.sharedStore.isShowHelp = false;
	        },
	        handleContactUs: function() {
	            this.$dispatch('dispatchShowContactUsWindow');
	            this.sharedStore.isShowHelp = false;
	        },
	        handleHelp: function() {
	            this.sharedStore.isShowHelp = !this.sharedStore.isShowHelp;
	        },
	        handleDownloadSpec: function() {
	        	Store.isPopSave=false;
	            window.open("assets/data/14X16SPEC_TS.zip", "_parent");
	        },
	        handleLogoClicked: function() {
	            // Store.isLogoClicked = true;
	            this.$dispatch("dispatchShowPopup", { type: 'logo', status: -1 });
	        },
	        // handle preview
	        handlePreview: function() {

	            var _this = this;
	            if(__webpack_require__(21).getIsShowProjectInfoView()){
	                //Store.isPopSave=false;
	                // var url = "preview.html?initGuid=" + Store.projectId + "&isPreview=true";
	                // var a = document.createElement('a');
	                // a.setAttribute('href', url);
	                // a.setAttribute('target', '_blank');
	                // a.setAttribute('id', 'preview_a');
	                // if (!document.getElementById('preview_a')) {
	                //     document.body.appendChild(a);
	                // }
	                // a.click();
	                Store.isInnerPreviewShow = true;
	            }else{
	                __webpack_require__(22).handledSaveOldProject(this, 'dispatchPreviewSave');
	            }
	            __webpack_require__(11)({ev: __webpack_require__(13).ClickPreview});
	        },

	        // handle save data
	        handleSave: function(isNew, isRedirect, isDisableMsg) {
	            var _this = this;
	            if(__webpack_require__(21).getIsShowProjectInfoView()){

	                var text=__webpack_require__(21).getProjectInfoViewText();
	                this.$dispatch("dispatchShowPopup", { type : 'saveAs', status : 0 ,info:text});

	            }else{
	                __webpack_require__(22).saveOldProject(_this);
	            }
	            __webpack_require__(11)({ev: __webpack_require__(13).ClickSave});
	        },

	        // handle order(add to cart)
	        handleOrder: function() {
	            var _this = this;
	            var checkPageInfo = this.checkImageNumber();
	            if(Store.checkFailed){
	                __webpack_require__(22).saveOldProject(_this,function(){
	                    __webpack_require__(9).updateCheckStatus();
	                });
	            }else{
	                if(__webpack_require__(21).getIsShowProjectInfoView()){
	                    var text=__webpack_require__(21).getProjectInfoViewText();
	                    this.$dispatch("dispatchShowPopup", { type : 'saveAs', status : 0 ,info:text});
	                }else{
	                    if(checkPageInfo.emptyPageNum || checkPageInfo.pageNum === 0){
	                        var confirmString = ' You added ' + checkPageInfo.pageNum + (checkPageInfo.pageNum > 1 ? ' canvases' : ' canvas') +', but ' + checkPageInfo.emptyPageNum +
	                        (checkPageInfo.emptyPageNum <= 1 ? ' canvas has ' : ' canvases have ') +
	                        'no images. Would you like to continue?';
	                        this.$dispatch("dispatchShowPopup", { type : 'orderConfirm', status : 0, message: confirmString});
	                    } else {

	                        var isUpgrade = true;
	                        for (var i = 0; i < Store.projectSettings.length; i++) {
	                            if(Store.projectSettings[i].size==="11X14" && !Store.pages[i].isDeleted){
	                                isUpgrade = false;
	                            }
	                        };
	                        if(!isUpgrade){
	                            Store.isPageLoadingShow = true;
	                            __webpack_require__(11)(this.getClickOrderTracker());
	                            __webpack_require__(22).saveOldProject(_this,function(){
	                                Store.isPrjSaved=true;
	                                Store.isPopSave = false;
	                                window.location = '/' + Store.orderType + '/addShoppingCart.html?projectGUID=' + Store.projectId + '&quantity=1';
	                            });
	                        }else{
	                            this.$dispatch("dispatchShowUpgradWindow");
	                        }
	                        
	                    }
	                }

	            }
	        },
	        getClickOrderTracker: function() {
	            var canvasNumber = {
	                ev: __webpack_require__(13).ClickOrder
	            };

	            Store.projectSettings.forEach(function(projectSetting, idx) {
	                if(!Store.pages[idx].isDeleted) {
	                    if(canvasNumber[projectSetting.size]) {
	                        canvasNumber[projectSetting.size]++;
	                    } else {
	                        canvasNumber[projectSetting.size] = 1;
	                    }
	                }
	            });

	            return canvasNumber;
	        },
	        checkImageExist:function(){
	            var currentCanvas = Store.pages[Store.currentSelectProjectIndex].canvas;
	            var elememts = currentCanvas.params;


	            for (var i = 0; i < elememts.length; i++) {
	                if(elememts[i].elType==='image'&&elememts[i].imageId){
	                    return true;
	                }
	            }
	            return false;

	        },
	        checkImageNumber: function(){
	            var pageNum = 0, emptyPageNum = 0;
	            this.sharedStore.pages.forEach(function(item){
	                if(!item.isDeleted){
	                    pageNum++;
	                    var currentCanvas = item.canvas;
	                    var elememts = currentCanvas.params;
	                    var hasImage = elememts.some(function(element){
	                        return (element.elType==='image' && element.imageId);
	                    });
	                    if(!hasImage){emptyPageNum++}
	                }
	            });
	            return {
	                pageNum: pageNum,
	                emptyPageNum: emptyPageNum
	            }
	        },
	        handleOptions: function() {
	            this.$dispatch('dispatchShowOptionsWindow');
	        },
	        redirectHome: function() {
	            window.location = '/';
	            alert("in");
	        },
	        handlePostToSale:function(){
	            var _this = this;

	            if(__webpack_require__(21).getIsShowProjectInfoView()){
	                var text=__webpack_require__(21).getProjectInfoViewText();
	                this.$dispatch("dispatchShowPopup", { type : 'saveAs', status : 0 ,info:text});

	            }else{

	                if(Store.userSettings.ordered==="true"){
	                    Store.isPopSave=false;
	                    window.location = "/marketplace-listing-info.html?projectId="+Store.projectId;
	                }else{
	                    __webpack_require__(22).saveOldProject(_this,function(){
	                        Store.isPopSave=false;
	                        window.location = "/marketplace-listing-info.html?projectId="+Store.projectId;
	                    });

	                };


	            }



	        },
	        handleClone:function(){
	            this.$dispatch('dispatchShowCloneWindow');
	        },
	        handleHideHelp:function(){
	            this.sharedStore.isShowHelp = false;
	        },

	        blurFocus: function() {
	          this.$dispatch('dispatchClearScreen');
	          // this.sharedStore.isLostFocus = true;
	        },
	        enableReprint:function(){
	            $('#reprintButton').css('pointer-events','auto');
	            $('#reprintButton').css('opacity',1);

	        },
	        disableReprint:function(){
	            $('#reprintButton').css('pointer-events','none');
	            $('#reprintButton').css('opacity',0.4);
	        },

	        handlePrint : function(){
	            this.disableReprint();
	            __webpack_require__(43).saveRemarkProject(this.disableReprint,this.enableReprint);
	        },
	    },
	    events: {
	        notifyPreviewSave: function(result) {
	            console.log("save-" + result);
	            if (result === "success") {
	                //window.open("preview.html?initGuid=" + Store.projectId + "&isPreview=true", "_blank");
	                //Store.isPopSave=false;
	                // var url = "preview.html?initGuid=" + Store.projectId + "&isPreview=true";
	                // var a = document.createElement('a');
	                // a.setAttribute('href', url);
	                // a.setAttribute('target', '_blank');
	                // a.setAttribute('id', 'preview_a');
	                // if (!document.getElementById('preview_a')) {
	                //     document.body.appendChild(a);
	                // }
	                // a.click();
	                Store.isInnerPreviewShow = true;
	            } else {
	                this.$dispatch('dispatchShowPopup', { type: 'save', status: -1 });
	            }

	        },
	        notifyResetProjectInfo:function(isShow){
	            if(isShow){
	                $('#saveButton').css('pointer-events','auto');
	                $('#saveButton').css('opacity',1);
	                $('#saleButton').css('pointer-events','auto');
	                $('#saleButton').css('opacity',1);
	                /*$('#orderButton').css('pointer-events','auto');
	                $('#orderButton').css('opacity',1);*/
	            }else{
	                $('#saveButton').css('pointer-events','none');
	                $('#saveButton').css('opacity',0.4);
	                $('#saleButton').css('pointer-events','none');
	                $('#saleButton').css('opacity',0.4);
	                /*$('#orderButton').css('pointer-events','none');
	                $('#orderButton').css('opacity',0.4);*/
	            }

	        },
	        notifyOrderContinue:function(){
	            if(Store.baseProject.size==="11X14" || Store.projectSettings.length === 0){
	                Store.isPageLoadingShow = true;
	                __webpack_require__(22).saveOldProject(this,function(){
	                    Store.isPrjSaved=true;
	                    Store.isPopSave = false;
	                    window.location = '/' + Store.orderType + '/addShoppingCart.html?projectGUID=' + Store.projectId + '&quantity=1';
	                });
	            } else {
	                this.$dispatch("dispatchShowUpgradWindow");
	            }
	        }
	    },
	    ready: function(){
	        var _this = this;
	        _this.$watch('sharedStore.watches.isProjectComplete',function(){
	            if(_this.sharedStore.watches.isProjectComplete){
	                var currentProject = _this.sharedStore.projectSettings[Store.currentSelectProjectIndex] || Store.baseProject;
	                var product = currentProject.product;
	                var mapList = __webpack_require__(18).getOptions('product');
	                for (idx in mapList) {
	                    var item = mapList[idx];
	                    if (item.id == product) {
	                        Store.productTitle = item.title;
	                    }
	                }
	            }
	        })
	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = {
		//加入新产品时需要在这个文件中加入相关产品的option选项参数
	    wallartsConfigList:[
	    	{product:'contemporary',optionIds:[{type:'product',title:'Product',showHr:'true'},{type:'frameStyle',title:'Style',showHr:'true'},{type:'color',title:'Color',showHr:'true'},{type:'matteStyle',title:'Matting',showHr:'true'},{type:'size',title:'Size',showHr:'true'},{type:'paper',title:'Print',showHr:'true',paperAlt:['Rich colors and fine texture','High-gloss metal sheen','High-contrast pop style']},{type:'glassStyle',title:'Glass'}]},
	    	{product:'classicFrame',optionIds:[{type:'product',title:'Product',showHr:'true'},{type:'frameStyle',title:'Style',showHr:'true'},{type:'color',title:'Color',showHr:'true'},{type:'matteStyle',title:'Matting',showHr:'true'},{type:'size',title:'Size',showHr:'true'},{type:'paper',title:'Print',showHr:'true',paperAlt:['Rich colors and fine texture','High-gloss metal sheen','High-contrast pop style']},{type:'glassStyle',title:'Glass'}]},
	    	{product:'rusticFrame',optionIds:[{type:'product',title:'Product',showHr:'true'},{type:'frameStyle',title:'Style',showHr:'true'},{type:'color',title:'Color',showHr:'true'},{type:'matteStyle',title:'Matting',showHr:'true'},{type:'size',title:'Size',showHr:'true'},{type:'paper',title:'Print',showHr:'true',paperAlt:['Rich colors and fine texture','High-gloss metal sheen','High-contrast pop style']},{type:'glassStyle',title:'Glass'}]},
	    	{product:'metal',optionIds:[{type:'product',title:'Product',showHr:'true'},{type:'frameStyle',title:'Style',showHr:'true'},{type:'color',title:'Color',showHr:'true'},{type:'matteStyle',title:'Matting',showHr:'true'},{type:'size',title:'Size',showHr:'true'},{type:'paper',title:'Print',showHr:'true',paperAlt:['Rich colors and fine texture','High-gloss metal sheen','High-contrast pop style']},{type:'glassStyle',title:'Glass'}]},
	    	{product:'canvas',optionIds:[{type:'product',title:'Product',showHr:'true'},{type:'canvasBorderSize',title:'Frame Thickness',showHr:'true'},{type:'size',title:'Size'}]},
	    	{product:'frameCanvas',optionIds:[{type:'product',title:'Product',showHr:'true'},{type:'color',title:'Color',showHr:'true'},{type:'size',title:'Size',showHr:'true'},{type:'frameStyle',title:'Style',hide:'true'}]},
	    	{product:'flushMountCanvas',optionIds:[{type:'product',title:'Product',showHr:'true'},{type:'frameStyle',title:'Style',showHr:'true'},{type:'color',title:'Color',showHr:'true'},{type:'size',title:'Size'}]},
	        {product:'mountPrint',optionIds:[{type:'paper',title:'Paper',showHr:'true',paperAlt:['Rich colors and fine texture','High-gloss metal sheen','High-contrast pop style']},{type:'size',title:'Size'}]},
	        {product:'acrylicPrint',optionIds:[{type:'paper',title:'Paper',showHr:'true',paperAlt:['Rich colors and fine texture','High-gloss metal sheen','High-contrast pop style']},{type:'size',title:'Size'}]},
	        {product:'metalPrint',optionIds:[{type:'metalType',title:'Print Surface',showHr:'true'},{type:'finish',title:'Finish',showHr:'true'},{type:'size',title:'Size'}]},
	        {product:'woodPrint',optionIds:[{type:'finish',title:'Print Options',showHr:'true'},{type:'size',title:'Size'}]},
	        {product:'table_crystalPlaque',optionIds:[{type:'product',title:'Product',showHr:'true'},{type:'size',title:'Size'}]},
	        {product:'table_metalPlaque',optionIds:[{type:'product',title:'Product',showHr:'true'},{type:'metalType',title:'Print Surface',showHr:'true'},{type:'finish',title:'Finish',showHr:'true'},{type:'size',title:'Size'}]},
	        {product:'table_woodPlaque',optionIds:[{type:'product',title:'Product',showHr:'true'},{type:'finish',title:'Print Options',showHr:'true'},{type:'size',title:'Size'}]},
	        {product:'table_metalCube',optionIds:[{type:'product',title:'Product',showHr:'true'},{type:'color',title:'Color',showHr:'true'},{type:'size',title:'Size'}]},
	        {product:'table_modernFrame',optionIds:[{type:'product',title:'Product',showHr:'true'},{type:'color',title:'Color',showHr:'true'},{type:'size',title:'Size'}]},
	        {product:'table_classicFrame',optionIds:[{type:'product',title:'Product',showHr:'true'},{type:'color',title:'Color',showHr:'true'},{type:'size',title:'Size'}]},
	        {product:'floatFrame',optionIds:[{type:'frameStyle',title:'Style',showHr:'true'},{type:'color',title:'Color',showHr:'true'},{type:'size',title:'Size',showHr:'true'},{type:'paper',title:'Print',showHr:'true',paperAlt:['Rich colors and fine texture','High-gloss metal sheen','High-contrast pop style']}]},
	    ],
	    posterConfigList:[
	        {product:'PO',optionIds:[{type:'size',title:'Size',showHr:'true'},{type:'paper',title:'Paper'}]},
	        {product:'LPR',optionIds:[{type:'size',title:'Size',showHr:'true'},{type:'paper',title:'Paper'}]},
	        {product:'AR',optionIds:[{type:'size',title:'Size',showHr:'true'},{type:'paper',title:'Paper'}]}
	    ],
	    cardsConfigList:[
	        {product:'FT',optionIds:[{type:'paper',title:'Paper',showHr:'true'},{type:'trim',title:'Trim',showHr:'true'}]},
	        {product:'FD',optionIds:[{type:'paper',title:'Paper',showHr:'true'},{type:'trim',title:'Trim',showHr:'true'}]}
	    ],
	    colorUrlMap:[
	    	{key:'blackFM',url:'../../static/img/colors/Modernframe-Black.jpg'},
	    	{key:'whiteFM',url:'../../static/img/colors/Modernframe-White.jpg'},
	    	{key:'mapleFM',url:'../../static/img/colors/Modernframe-Maple.jpg'},
	    	{key:'espressoFM',url:'../../static/img/colors/Modernframe-Espresso.jpg'},
	    	{key:'metalBlack',url:'../../static/img/colors/Metal-Black.jpg'},
			{key:'metalSilver',url:'../../static/img/colors/Metal-Sliver.jpg'},
			{key:'metalGold',url:'../../static/img/colors/Metal-Gold.jpg'},
	    	{key:'gold',url:'../../static/img/colors/Classic-Curve-Baroque.jpg'},
	    	{key:'blackTT',url:'../../static/img/colors/Modernframe-Black.jpg'},
	    	{key:'whiteTT',url:'../../static/img/colors/Modernframe-White.jpg'},
	    	{key:'espressoTT',url:'../../static/img/colors/Modernframe-Espresso.jpg'},
	    	{key:'mapleTT',url:'../../static/img/colors/Modernframe-Maple.jpg'},
	    	{key:'blackCV',url:'../../static/img/colors/Modernframe-Black.jpg'},
	    	{key:'whiteCV',url:'../../static/img/colors/Modernframe-White.jpg'},
	    	{key:'mapleCV',url:'../../static/img/colors/Modernframe-Maple.jpg'},
	    	{key:'espressoCV',url:'../../static/img/colors/Modernframe-Espresso.jpg'},
	    	{key:'greyFM',url:'../../static/img/colors/Ruatic-Grey.jpg'},
	    	{key:'brownFM',url:'../../static/img/colors/Ruatic-Brown.jpg'},
	    	{key:'blackCurve',url:'../../static/img/colors/Classic-Curve-Black.jpg'},
	    	{key:'whiteCurve',url:'../../static/img/colors/Classic-Curve-White.jpg'},
	    	{key:'espressoCurve',url:'../../static/img/colors/Classic-Curve-Espresso.jpg'},
	    	{key:'mapleCurve',url:'../../static/img/colors/Classic-Curve-Maple.jpg'}
	    ]
	}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {module.exports = {
	  template:'<div class="bed-title">'+
	              '<div v-show="!privateStore.isEditingTitle">'+
	                '<p class="box-title" style="float: left;color:#fff">' +
	                  // '{{ sharedStore.title }}, {{sharedStore.projectSettings[sharedStore.currentSelectProjectIndex].size}}, {{productText}}' +
	                  '{{ sharedStore.title }}' +
	                '</p>' +
	                '<img v-show="!sharedStore.projectInfo.isInCart && !sharedStore.projectInfo.isOrdered" class="title-edit-icon" title="Click to edit title" v-on:click="handleShowEdit" src="assets/img/title-edit.svg" />'+
	              '</div>'+
	              '<div v-show="privateStore.isEditingTitle">'+
	                  '<div class="box-title-edit">'+
	                      '<input class="title-edit" type="text" maxlength="50" v-model="privateStore.title" v-on:keyUp="handleInputKeyEvent"/>' +
	                      '<img class="icon-done" v-on:click="handleTitleEditDone" src="assets/img/title-done.svg" />'+
	                      '<img class="icon-delete" v-on:click="handleTitleDelete" src="assets/img/title-delete.svg" />'+
	                  '</div>'+
	                  '<span v-show="privateStore.isTitleInvalid" class="title-warn" style="z-index: 1;">{{privateStore.InvalidText}}</span>'+
	              '</div>' +
	            '</div>',
	  data:function() {
	    return {
	      privateStore:{
	        isEditingTitle: false,
	        isTitleInvalid: false,
	        InvalidText: '',
	        title: ''
	      },
	      sharedStore: Store,
	    }
	  },
	  methods:{
	    handleInputKeyEvent: function(event) {
	      // alert(event.keyCode);
	      switch(event.keyCode) {
	        case 27:
	        this.privateStore.isEditingTitle = false;
	        this.privateStore.isTitleInvalid = false;
	        break;
	        case 13:
	        this.handleTitleEditDone();
	      }
	    },
	    handleShowEdit: function() {
	      this.privateStore.title = this.sharedStore.title;
	      this.privateStore.isEditingTitle = true;
	      setTimeout(function(){
	        $('.title-edit').focus();
	      },0)
	    },
	    handleTitleEditDone: function() {
	      var title = this.privateStore.title;
	      if (!title.trim()) {
	        this.privateStore.isTitleInvalid = true;
	        this.privateStore.InvalidText = "Title is required"
	      } else if (!(/^[a-zA-Z 0-9\d_\s\-]+$/.test(title))){
	        this.privateStore.isTitleInvalid = true;

	        this.privateStore.InvalidText = "Only letters, numbers, blank space, - (hyphen) and _ (underscore) are allowed in the title"

	      } else if (title !== this.sharedStore.title){
	        __webpack_require__(22).changeProjectTitle(this.privateStore.title,this,'dispatchUpdateAlbumResponse');
	      } else if(title === this.sharedStore.title) {
	        this.privateStore.isEditingTitle = false;
	      }
	    },
	    handleTitleDelete: function() {
	      this.privateStore.isEditingTitle = false;
	      this.privateStore.isTitleInvalid = false;
	    }
	  },
	  events:{
	     notifyUpdateAlbumResponse:function(isValid,text){
	        this.privateStore.isTitleInvalid=isValid;
	        if(this.privateStore.isTitleInvalid){
	            this.privateStore.InvalidText= "Please use a name you haven't used before";
	        }else{
	            this.privateStore.isEditingTitle = false;
	            this.sharedStore.title = this.privateStore.title;
	            __webpack_require__(22).handledSaveOldProject(this);
	        }
	    }
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {module.exports = {
	    saveRemarkProject : function(successCallback,failedCallback){
	        var remarkProjectJson = __webpack_require__(44).getCurrentProjectJson();

	        if(!remarkProjectJson.project.pages.length) {
	            Store.vm.$dispatch("dispatchShowPopup", { type : 'checkFailed', status : 0 ,info:"Please select one block at least."});
	            return failedCallback && failedCallback();
	        }

	        var remarkSkuJson = __webpack_require__(29).getNewPrintSkuJson(remarkProjectJson);

	        var url = Store.domains.portalBaseUrl + '/portal/h5-client/newPrintsRemake.ep';
	        $.ajax({
	            url: url,
	            type: 'post',
	            data: {
	                projectId: Store.projectId,
	                remarkProjectJson: JSON.stringify(remarkSkuJson),
	                orderNumber: Store.orderNumber,
	                timestamp:Store.timestamp,
	                token:Store.token,
	                pUser:Store.pUser
	            }
	        }).done(function(result) {
	            console.log(result);

	            if(result && result.status === 'success'){
	                successCallback && successCallback();
	                Store.vm.$dispatch("dispatchShowPopup", { type : 'checkFailed', status : 0 ,info:"Reprint successfully"});
	            }else{
	                failedCallback && failedCallback();
	                Store.vm.$dispatch("dispatchShowPopup", { type : 'checkFailed', status : 0 ,info:"Failed to reprint, please try again later."});

	            }
	        });
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, Store) {var UtilDateFormat = __webpack_require__(30);

	module.exports = {
	  initProjectJson: function() {
	    var optionIds = __webpack_require__(18).getOptionIds();
	    var specVersion = $(Store.spec.specXml).find('product-spec').attr('version');
	    var defaultSetting = {};

	    return {
	      project: {
	        version: specVersion,
	        clientId: 'web-h5',
	        createAuthor: 'web-h5|1.1|1',
	        userId: Store.userSettings.userId,
	        artisan: Store.userSettings.userName,
	        createdDate: UtilDateFormat.formatDateTime(new Date()),
	        updatedDate: UtilDateFormat.formatDateTime(new Date()),
	        summary: {
	          defaultSetting: Store.baseProject
	        },
	        pages: [],
	        images: []
	      }
	    };
	  },

	  initPage: function() {
	    var baseSize = __webpack_require__(29).getLMCBaseSize();
	    var bleedSize = __webpack_require__(29).getLMCBleedSize();
	    var canvasBorder = __webpack_require__(29).getLMCCanvasBorder();
	    var pageWith = baseSize.width + bleedSize.left + bleedSize.right;
	    var pageHeight = baseSize.height + bleedSize.top + bleedSize.right;
	    //var defaultElements = [require('JsonProjectManage').getDefaultElement(pageWith, pageHeight)];
	    var defaultElements = [__webpack_require__(29).getLMCDefaultElement()];

	    // 获取初始化page的spec
	    var optionIds = __webpack_require__(18).getOptionIds();
	    var currentProject = Store.projectSettings[Store.currentSelectProjectIndex] || Store.baseProject;
	    var specObject = {};
	    for (var i = 0; i < optionIds.length; i++) {
	      specObject[optionIds[i]] = currentProject[optionIds[i]];
	    };
	    specObject.quantity = 1;

	    return {
	      "id": __webpack_require__(21).guid(),
	      "width": pageWith,
	      "height": pageHeight,
	      "type": "Page",
	      "bleed": bleedSize,
	      "canvasBorder": canvasBorder,
	      "spec": specObject,
	      "elements": defaultElements,
	      "backend": {
	          "isPrint": true
	      }
	    }
	  },
	  getCurrentProjectJson: function() {
	    var optionIds = __webpack_require__(18).getOptionIds();
	    var defaultSetting = {};
	    for (var i = 0; i < optionIds.length; i++) {
	      defaultSetting[optionIds[i]] = Store.baseProject[optionIds[i]];
	    };
	    var specVersion = $(Store.spec.specXml).find('product-spec').attr('version');
	    var pages = this.getPages();
	    var images = __webpack_require__(29).getImages();
	    return {
	      project: {
	        guid: Store.projectId,
	        version: specVersion,
	        clientId: 'web-h5',
	        createAuthor: 'web-h5|1.1|1',
	        userId: Store.userSettings.userId,
	        artisan: Store.userSettings.userName,
	        createdDate: Store.createdDate,
	        updatedDate: UtilDateFormat.formatDateTime(new Date()),
	        summary: {
	          defaultSetting: defaultSetting
	        },
	        pages: pages,
	        images: images
	      }
	    };
	  },

	  getPages: function() {
	    var pages = [];

	    for(var i = 0; i < Store.pages.length; i++ ) {
	      if(Store.pages[i].isDeleted || Store.projectSettings[i].quantity === 0)continue;

	      var bleedSize = __webpack_require__(29).getLMCBleedSize(i);
	      var photoLayer = __webpack_require__(29).getLMCPhotoLayer(i);
	      var canvasBorder = __webpack_require__(29).getLMCCanvasBorder(i);
	      var pageWith = photoLayer.width;
	      var pageHeight = photoLayer.height;
	      var elements = __webpack_require__(29).getElements(i);

	      // 获取page的spec
	      var optionIds = __webpack_require__(18).getOptionIds();
	      var currentProject = Store.projectSettings[i];
	      var specObject = {};
	      for (var j = 0; j < optionIds.length; j++) {
	        specObject[optionIds[j]] = currentProject[optionIds[j]];
	      };
	      specObject.quantity = currentProject.quantity;
	      var pageId = Store.pages[i].guid || __webpack_require__(21).guid();

	      pages.push({
	        "id": pageId,
	        "width": pageWith,
	        "height": pageHeight,
	        "type": "Page",
	        "spec": specObject,
	        "bleed": bleedSize,
	        "canvasBorder": canvasBorder,
	        "elements": __webpack_require__(29).getElements(i),
	        "backend": {
	          "isPrint": true
	        }
	      })
	    }
	    return pages;
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(1)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {// component -- CompImageUpload
	module.exports = {
		// template: '#t-image-upload',
		template: '<div class="bed-image-upload" v-show="sharedStore.isImageUploadShow">' +
		 // v-show="sharedStore.isImageUploadShow
								'<div class="shadow-bg" v-bind:style="{zIndex: windowZindex-1}"></div>' +
								'<div class="box-image-upload" v-bind:style="{ zIndex: windowZindex }" style="width:655px;height:480px;">' +
									'<div style="height: 40px:line-height: 40px;">' +
										// '<div v-on:click="hideImageUpload()" style="width: 40px;height: 40px;line-height: 40px;margin-left: 585px;font-size: 20px;text-align: center;cursor: pointer;" title="close"><i class="fa fa-close"></i></div>' +
										'<div style="width: 40px;height: 40px;margin-left: 600px;font-size: 20px;"><img src="../../static/img/close-normal.svg" width="16" height="16" v-on:click="hideImageUpload(true)" onmouseover="this.src = \'../../static/img/close-hover.svg\'" onmouseout="this.src = \'../../static/img/close-normal.svg\'" alt="close" title="close" style="margin-top: 24px; margin-left: 14px; cursor: pointer;" /></div>' +
									'</div>' +
									'<div style="margin: 0 40px;position:relative;">' +
										'<div class="font-title t-left">Upload Images</div>' +
										'<div v-show="isWarnMessageShow && !(sharedStore.maxPageNum && !sharedStore.isUploading)" class="font-light" style="position:absolute;top: 33px;font-size:12px;color:#de3418;">{{warnMessage}}</div>'+
									'</div>' +
									'<div style="margin: 30px 40px 0;">' +
										'<div class="upload-row-title">' +
											'<span class="upload-status-head">File</span>' +
											'<span class="upload-status-sub">File Progress</span>' +
										'</div>' +
									'</div>' +
									'<div id="box-upload-list" style="margin: 0 20px 0 40px;height: 230px; overflow: auto;position:relative;">' +
									// '<div id="box-upload-list" style="margin: 0 40px;height: 220px; overflow-y: scroll;">' +
									'</div>' +
									'<div style="margin: 24px 40px;height:40px;position:relative;">' +
										'<div style="float:left;line-height:38px;">'+
											'<span class="font-normal" style="font-size:12px;color:#7B7B7B;">{{sharedStore.successfullyUploaded}} Complete</span>' +
											'<span style="margin-left: 15px;color:#de3418;font-size:12px;" v-show="sharedStore.errorUploaded">{{sharedStore.errorUploaded}} Failed</span>' +
										'</div>'+
										'<div v-show="sharedStore.maxPageNum && !sharedStore.isUploading && sharedStore.maxPageNum > sharedStore.pages.length" style="position:absolute;right:1px;top:-30px;background-color:#3a3a3a;color:#fff;font-size:12px;padding:4px 10px;box-shadow:0 2px 4px 0 rgba(0,0,0,.13);">'+
											'{{remainTip}}'+
											'<div style="position:absolute;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:5px solid #3a3a3a;left:78%;bottom:-5px;transform:translateX(-50%);"></div>'+
										'</div>'+
										'<div style="float:right;">' +
											'<div class="button-white t-center" :style="addMoreStyle" v-on:click="handleUploadClick(true)" style="width: 160px;height: 40px;line-height: 40px;display: inline-block;font-size: 14px;">Add More Photos</div>' +
											// '<div class="button t-center" v-on:click="handleSaveAndHideUpload()" style="width: 160px;height: 40px;line-height: 40px;margin-left: 23px;display: inline-block;font-size: 14px;">Cancel All</div>' +
										'</div>' +
										'<input type="file" name="" id="multi-files" multiple accept="{{sharedStore.uploadAcceptType}}" v-on:change="handleDoUpload()" style="display: none;" />' +
										'<input type="file" name="" id="single-files"  accept="image/*" v-on:change="handleDoUpload()" style="display: none;" />' +
										// '<input type="file" name="" id="single-files" multiple accept="{{sharedStore.uploadAcceptType}}" v-on:change="handleDoUpload()" style="display: none;" />' +

									'</div>' +
								'</div>' +
							'</div>',
		data: function() {
			return {
				privateStore: {
					els: '',
					uploadWindowParams: {
						width: 655,
						height: 480,
						selector: '.box-image-upload'
					},
					uploadParams: {
						fileSelector: '#multi-files'
					},
					firstUpload : false,
					single : null
				},
				sharedStore: Store,
				isWarnMessageShow: false
			};
		},
		computed: {
			windowZindex: function() {
				var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
						elementTotal = currentCanvas.params.length || 0;

				return (elementTotal + 10) * 100;
			},
			warnMessage: function(){
				return 'You can only upload '+ Store.maxPageNum +' images per pack in total.';
			},
			remainTip: function() {
				return 'Still need to upload '+ (Store.maxPageNum - Store.pages.length) +' photo(s), click here to continue';
			},
			addMoreStyle: function() {
				var isDisabled = this.sharedStore.maxPageNum && (this.sharedStore.isUploading || this.sharedStore.maxPageNum <= this.sharedStore.pages.length)
				return {
					color: isDisabled ? '#ccc' : '#000',
					borderColor: isDisabled ? '#ccc' : 'rgba(203, 203, 203, 1)',
					cursor: isDisabled ? 'not-allowed' : 'pointer'
				}
			}
		},
		methods: {

			// show image upload box
			showImageUpload: function() {
				var UtilWindow = __webpack_require__(46);

				UtilWindow.setPopWindowPosition(this.privateStore.uploadWindowParams);
				this.sharedStore.isImageUploadShow = true;
			},

			// do hiding image upload box
			hideImageUpload: function(isFromCancel, isAutoHide) {
				if(!isFromCancel){
					Store.cancelByX = true;
				}
				if(this.sharedStore.filesCountInQueue+this.sharedStore.errorExt >= this.sharedStore.filesTotalInQueue) {
					// all files uploaded
					$(this.privateStore.uploadParams.fileSelector).val('');
					this.sharedStore.isImageUploadShow = false;
					if(isFromCancel){
						__webpack_require__(11)({ev: __webpack_require__(13).CloseMonitor,auto: !!isAutoHide});
					}
				}
				else {
					this.$dispatch("dispatchShowPopup", { type: 'cancelUpload', status: -1 });
					// // files not uploaded yet
					// if(window.confirm('Undeliveried images will be lost if you stop uploading, would you like to continue?')) {
					// 	// for(var i=0;i<this.sharedStore.uploadProgress.length;i++){
					// 	// 	if(this.sharedStore.uploadProgress!=='Done'){
					// 	// 		this.cancelItem(i);
					// 	// 	}
					// 	// }
					// 	this.sharedStore.isImageUploadShow = false;
					// 	return true;
					// }
					// else {
					// 	return false;
					// };
				};
				this.isWarnMessageShow = false;
			},

			// handle upload button click
			handleUploadClick: function(noClear,isSingle) {
				if(this.sharedStore.maxPageNum && (this.sharedStore.isUploading || (this.sharedStore.maxPageNum <= this.sharedStore.pages.length) &&　!(typeof(Store.watchData.replacePageId) == "number")))return;
				// if(this.sharedStore.filesCountInQueue >= this.sharedStore.filesTotalInQueue) {
					// reset trush DOM at first

					if(!noClear){
						this.resetImageUploadDom();
						Store.uploadProgress.length = 0;
						Store.successfullyUploaded = 0;
						Store.errorUploaded = 0;
						Store.cancelledUpload.length = 0;
						Store.oriImageIds = [];
						Store.oriImageNames = [];
						Store.currentUploadCount = 0;
						Store.filesTotal = 0;
						Store.prevFilesTotal = [];
						Store.prevFilesTotal = 0;
						Store.filesTotalInQueue = 0;
						Store.filesCountInQueue = 0;
					}else{
						__webpack_require__(11)({ev: __webpack_require__(13).AddMorePhotos});
					}
					Store.currentSuccessUpload = 0;
					Store.currentErrorUpload = 0;
					Store.errorExt = 0;
					$(this.privateStore.uploadParams.fileSelector).val('');
					if(isSingle || this.privateStore.single){
						this.privateStore.uploadParams.fileSelector = "#single-files";
						$('#single-files').trigger('click');
						// this.privateStore.single = true;
					}else{
						this.privateStore.uploadParams.fileSelector = "#multi-files";
						$('#multi-files').trigger('click');
					}
				// }
				// else {
				// 	this.$dispatch("dispatchShowPopup", { type : 'upload', status : -1})
				// };

			},

			handleDoUpload: function() {
				var UploadService = __webpack_require__(47),
					files = document.querySelector(this.privateStore.uploadParams.fileSelector).files;
				if(files.length){
					// 如果产品有最大张数张数限制的时候， 显示已经移除多余文件的提示语。
					if(Store.maxPageNum && (Store.pages.length + files.length > Store.maxPageNum) &&　!(typeof(Store.watchData.replacePageId) == "number")) {
							this.isWarnMessageShow = true;
					}

					__webpack_require__(11)({ev: __webpack_require__(13).FinishPhotoSelect,chooseTimes:++Store.chooseTimes,chooseCount:files.length});
					if(this.privateStore.firstUpload){
						UploadService(this, this.privateStore.uploadParams,true);
						this.privatedStore.firstUpload = false;
					}else{
						UploadService(this, this.privateStore.uploadParams);
					}
					this.sharedStore.startUploadTime = new Date();
					__webpack_require__(11)({ev: __webpack_require__(13).StartUpload});
					this.sharedStore.isUploading = true;
				}
				this.showImageUpload();
			},

			// handle save and hide upload box
			handleSaveAndHideUpload: function(isAutoHide) {
				if(this.sharedStore.filesCountInQueue >= this.sharedStore.filesTotalInQueue) {
					// all files uploaded
					//TODO:
					this.$dispatch('dispatchSaveProject', true);	// isDisableMsg

					if(this.sharedStore.maxPageNum && this.sharedStore.pages.length < this.sharedStore.maxPageNum){
						return;
					}

					this.hideImageUpload(true, isAutoHide);

					Store.cancelByX = false;

					// Store.vm.$broadcast("notifyAddNewUploadedImgIntoPages");

					Store.isLostFocus = true;
					setTimeout(function(){
							Store.watchData.replacePageId = null;
					})
				}
				else {
					// files not uploaded yet
					// if(window.confirm('Undeliveried images will be lost if you stop uploading, would you like to continue?')) {
					// 	this.sharedStore.filesTotalInQueue = 0;
					// 	this.sharedStore.filesCountInQueue = 0;
					// 	// TODO:
					// 	this.$dispatch('dispatchSaveProject', true);	// isDisableMsg

					// 	this.hideImageUpload(true);
					// 	return true;
					// }
					// else {
					// 	return false;
					// };
					Store.vm.$broadcast("notifyShowPopup",{type:"cancelUpload",status:-1});
				};
			},

			refreshImageUploadDom : function(){
				$("#box-upload-list").find(".new-add-upload-row").remove();
				for(var i=0;i<this.sharedStore.uploadProgress.length;i++){
					if(!this.sharedStore.uploadProgress[i] || !this.sharedStore.uploadProgress[i].percent){
						continue;
					}
					this.initImageUploadDom(i,this.getImageName(this.sharedStore.uploadProgress[i].imgId));
					if(this.sharedStore.uploadProgress[i].percent==="Done"){
						$("#delete-"+i).hide();
					}
					if(this.sharedStore.uploadProgress[i].percent.toString().indexOf("Only")>=0 || (this.sharedStore.uploadProgress[i].info && this.sharedStore.uploadProgress[i].info.toString().indexOf("Failed")>=0)){
						$('#retry-'+i).show();
						$('#progress-c-'+i).hide();
						$("#delete-"+i).hide();
						$("#status-"+i).css("width","310")
					}
				}
			},
			getImageName : function(imgId){
				for(var i=0;i<Store.oriImageNames.length;i++){
					var item = Store.oriImageNames[i];
					if(item.imgId===imgId){
						return item.filename;
					}
				}
			},
			// init image upload dom
			initImageUploadDom: function(idx, sFileName) {
				var displayFileName = sFileName;
				// remove subfix
				// displayFileName = displayFileName.substr(0, displayFileName.length - 4);

				if(displayFileName.length > 15) {
					displayFileName = displayFileName.substr(0, 12) + '...' + displayFileName.substr(displayFileName.length - 3);
				};

				if(idx < 5) {
					// use old inited dom
					$('#upload-row-item-' + idx + ' .upload-status-head').text(displayFileName).attr('title', sFileName);

					var statusCont = '<span id="progress-c-'+idx+'" style="display: inline-block;position:relative;vertical-align:middle; top: 0; left: 10px;width: 341px;height: 10px; border-radius: 5px; background-color: white;">' +
															'<span id="progress-'+ idx +'" style="display: inline-block;width: 1px; height: 10px; border-radius: 5px; background-color: #ccc;">&nbsp;</span>' +
														'</span>' +
														'<span id="status-'+ idx +'" style="position: relative;vertical-align: middle; left: 26px;display:inline-block;;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">0%</span>'+
														'<span id="error-tip-'+idx+'"></span>'+
														'<div style="display:none;position:absolute;right:7px;top:0;text-decoration:none;color:#de3418;" class="upload-retry" id="retry-'+idx+'">Failed</div>';
														// '<img src="../../static/img/close-normal.svg" width="10" height="10" alt="Delete" title="Delete" style="margin-top: 24px;margin-left: 25px;cursor: pointer;position:absolute;top:-10px;right:7px;" class="cancel-progress" id="delete-'+idx+'">';
					$('#upload-row-item-' + idx + ' .upload-status-sub').html(statusCont);
				}
				else {
					// append new dom
					var uploadStatusCont =	'<div class="upload-row-item new-add-upload-row" style="overflow:hidden;" id="upload-row-item-'+ idx +'">' +
																		'<span class="upload-status-head" style="float:left;display:inherit;" title="'+ sFileName +'">'+ displayFileName +'</span>' +
																		'<span class="upload-status-sub" style="position:relative;">' +
																			'<span id="progress-c-'+idx+'" style="display: inline-block;vertical-align:middle;position:relative; top: 0; left: 10px;width: 341px;height: 10px; border-radius: 5px; background-color: white;">' +
																				'<span id="progress-'+ idx +'" style="display: inline-block;width: 1px; height: 10px; border-radius: 5px; background-color: #ccc;">&nbsp;</span>' +
																			'</span>' +
																			'<span id="status-'+ idx +'" style="position: relative;vertical-align: middle; left: 26px;display:inline-block;;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">0%</span>' +
																			'<span id="error-tip-'+idx+'"></span>'+
																			'<div style="display:none;position:absolute;right:7px;top:0;text-decoration:none;color:#de3418;" class="upload-retry" id="retry-'+idx+'">Failed</div>'+
																			// '<img src="../../static/img/close-normal.svg" class="cancel-progress" width="10" height="10" alt="Delete" title="Delete" style="margin-top: 24px;margin-left: 25px;cursor: pointer;position:absolute;top:-10px;right:7px;" id="delete-'+idx+'">' +
																		'</span>' +
																	'</div>';
					$('#box-upload-list').append(uploadStatusCont);
				};
			},

			// reset image upload dom
			resetImageUploadDom: function() {
				var cont = '';

				for(var i = 0; i < 5; i++) {
					cont += '<div class="upload-row-item" style="overflow:hidden;" id="upload-row-item-'+ i +'">' +
										'<span class="upload-status-head" style="float:left;display:inherit;">&nbsp</span>' +
										'<span class="upload-status-sub" style="position:relative;">' +
											'&nbsp' +
										'</span>' +
									'</div>';
				};

				$('#box-upload-list').html(cont);

				// clear trash files
				$('#multi-files').val('');

				// reset files count
				this.sharedStore.filesTotalInQueue = 0;
				this.sharedStore.filesCountInQueue = 0;
			},

			// update progress
			updateUploadProgress: function() {
				for(var i = 0; i < this.sharedStore.uploadProgress.length; i++) {
					if(this.sharedStore.uploadProgress[i] && this.sharedStore.uploadProgress[i].percent === 'Done') {
						$('#status-' + i).text('Done').css('color','#7a7a7a');
						$('#progress-' + i).css('width', 341).css('background-color', '#393939').attr('title', '');
						// if(["PR","PO","CLO"].indexOf(Store.projectType)<0){
						if(["PR","CLO","flushMountPrint"].indexOf(Store.projectType)<0){

							if(Store.pages && Store.pages[Store.selectedPageIdx].canvas){
								var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
								if( currentCanvas.params.length && currentCanvas.params[currentCanvas.selectedIdx] && currentCanvas.params[currentCanvas.selectedIdx].elType ==="image" && currentCanvas.params[currentCanvas.selectedIdx].imageId===''){
									this.$dispatch('dispatchSingleImageUploadComplete',Store.oriImageIds[i]);
								}
								if(Store.projectType === 'CR'){
									var photoElementCount = 0;
									var imageid = '';
									var indexId = 0;
									// 获取当前页的 photoElement数量 和 imageid
									for(var j =0; j < currentCanvas.params.length;j++){
										if (currentCanvas.params[j].elType === 'image') {
											photoElementCount ++;
											imageid = currentCanvas.params[j].imageId;
											indexId=currentCanvas.params[j].id;
										};
									}
									if(photoElementCount === 1 && !imageid){
										currentCanvas.selectedIdx=indexId;
										this.$dispatch('dispatchSingleImageUploadComplete',Store.oriImageIds[i]);
									}
								}
							}
						}
					}
					else if(this.sharedStore.uploadProgress[i] && this.sharedStore.uploadProgress[i].percent === 'Error') {
						$('#status-' + i).text('Error').css('color','#7a7a7a');
						$('#progress-' + i).css('width', 341).css('background-color', '#de3418').attr('title', this.sharedStore.uploadProgress[i].info);
					}
					else if(this.sharedStore.uploadProgress[i]){
						if(this.sharedStore.uploadProgress[i].percent.toString().indexOf("Only")>=0 || (this.sharedStore.uploadProgress[i].info && this.sharedStore.uploadProgress[i].info.toString().indexOf("Failed")>=0)){
							$('#status-' + i).text(this.sharedStore.uploadProgress[i].percent).css('color','#de3418').css("width","310").css('left','10px').css('font-size','12px').css('font-style','italic').attr('title', this.sharedStore.uploadProgress[i].info);
							// $('#progress-' + i).css('width', 341).css('background-color','#de3418').attr('title', this.sharedStore.uploadProgress[i].info);
						}else{
							$('#status-' + i).text(this.sharedStore.uploadProgress[i].percent + '%').css('color','#7a7a7a');;
							$('#progress-' + i).css('width', this.sharedStore.uploadProgress[i].percent * 3.41).css('background-color', '#ccc');
						}
					}
					// else if(this.sharedStore.uploadProgress[i] && this.sharedStore.uploadProgress[i].percent.toString().indexOf("Only")>=0) {
					// 	$('#status-' + i).text(this.sharedStore.uploadProgress[i].percent).css('color','#de3418').css("width","310").css('left','10px').css('font-size','12px').css('font-style','italic').attr('title', this.sharedStore.uploadProgress[i].info);
					// 	$('#progress-' + i).css('width', 341).css('background-color','#de3418').attr('title', this.sharedStore.uploadProgress[i].info);

					// }
					// else if(this.sharedStore.uploadProgress[i]) {
					// 	$('#status-' + i).text(this.sharedStore.uploadProgress[i].percent + '%').css('color','#7a7a7a');;
					// 	$('#progress-' + i).css('width', this.sharedStore.uploadProgress[i].percent * 3.41).css('background-color', '#ccc');
					// };
				};
			},
			isWindowOpen:function(){
				return Store.isImageUploadShow;
			},
			cancelItem : function(id){
				if(Store.cancelledImgIds.indexOf(Store.oriImageIds[id])<0){
					Store.cancelledUpload.push(id);
					Store.cancelledImgIds.push(Store.oriImageIds[id]);
				}
				$("#upload-row-item-"+id).hide();
				if(this.sharedStore.uploadProgress[id].xhr){
					this.sharedStore.uploadProgress[id].xhr.abort();
				}

				this.sharedStore.filesCountInQueue++;
				if(Store.cancelledUpload.length===Store.filesTotal){
					this.sharedStore.uploadProgress.length = 0;
					this.handleSaveAndHideUpload();
					this.sharedStore.isUploading = false;
					Store.vm.$broadcast("notifyHidePopup");
				}
			}
		},
		events: {
			// notify show image upload window
			notifyShowImageUpload: function(isSingle) {
				// this.showImageUpload();
				this.handleUploadClick(null,isSingle);
			},
			notifyCancelItem : function(id){
				this.cancelItem(id);
			}
		},
		created: function() {
			var _this = this;
			_this.$watch('sharedStore.uploadProgress', _this.updateUploadProgress, { deep: true });
		},
		ready : function(){
			var _this = this;
			Store.cancelledImgIds = [];
			// $("#box-upload-list").on("click",".cancel-progress",function(){
			// 	var __this = $(this),
			// 		id = __this.attr("id").match(/delete-(\d*)/)[1];
			// 	_this.cancelItem(id);
			// 	require('trackerService')({ev: require('trackerConfig').CancelSingleFile});
			// })
			// $("#box-upload-list").on("click",".upload-retry",function(){
			// 	Store.moveTop = 0;
			// 	var __this = $(this),
			// 		id = __this.attr("id").match(/retry-(\d*)/)[1],
			// 		UploadService = require('UploadService');
			// 	$("#progress-c-"+id).show();
			// 	$("#delete-"+id).show();
			// 	$("#status-"+id).css("width","auto");
			// 	$("#retry-"+id).hide();
			// 	Store.errorUploaded--;
			// 	Store.retryId = +id;
			// 	Store.uploadProgress[Store.retryId].percent = 0;
			// 	UploadService(_this, _this.privateStore.uploadParams);
			// })
		}
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, Store) {
	module.exports = {

		// handle box position ( center ) before showing it
		setPopWindowPosition: function(oParams) {
			if(oParams && oParams.width && oParams.height && oParams.selector) {
				var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
				    height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
				    newLeft = (width - oParams.width)/2  > 0 ? (width - oParams.width)/2 : 0 ,
				    newTop = (height - oParams.height)/2 > 0 ? (height - oParams.height)/2 : 0;

				$(oParams.selector).css('left', newLeft).css('top', newTop);
			};
		},

		// init image list size
		initImageListSize: function(oParams) {
			if(oParams && oParams.selector) {
				var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
				    height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
				    newHeight = height - 208;

				newHeight = newHeight < 200 ? 200 : newHeight;

				$(oParams.selector).css('height', newHeight);
			};
		},

		initImageListSizeWithCards: function(oParams) {
			if(oParams && oParams.selector) {
				var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
				    height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
				    newHeight = height - 40 - 34 - 41 - 28 - 20 - 3;

				newHeight = newHeight < 200 ? 200 : newHeight;

				$(oParams.selector).css('height', newHeight);
			};
		},

		initImageListSizeWithWallArts: function(oParams) {
			if(oParams && oParams.selector) {
				var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
				    height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
				    newHeight = height - 215 + 40;

				newHeight = newHeight < 200 ? 200 : newHeight;

				$(oParams.selector).css('height', newHeight);
			};
		},


		initImageListSizeWithCase: function(oParams) {
			if(oParams && oParams.selector) {
				var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
				    height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
				    newHeight = height - 264;

				newHeight = newHeight < 200 ? 200 : newHeight;

				$(oParams.selector).css('height', newHeight);
			};
		},
		initImageListSizeWithPadCase: function(oParams) {
			if(oParams && oParams.selector) {
				var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
				    height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
				    newHeight = height - 240;

				newHeight = newHeight < 200 ? 200 : newHeight;

				$(oParams.selector).css('height', newHeight);
			};
		},
		initImageListSizeWithLRB: function(oParams) {
			if(oParams && oParams.selector) {
				var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
				    height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
				    newHeight = height - 40 - 35 - 10 - 32 - 10;

				newHeight = newHeight < 200 ? 200 : newHeight;

				$(oParams.selector).css('height', newHeight);
			};
		},
		initDecorationListSize: function(oParams) {
			if(oParams && oParams.selector) {
				var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
				    height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
				    newHeight = height - 208;

				newHeight = newHeight < 200 ? 200 : newHeight;

				$(oParams.selector).css('height', newHeight);
			};
		},
		// init tshirt project item list size
		getProjectListSize: function(oParams) {
			// if(oParams && oParams.selector) {
				var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
				    height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
				    newHeight = height - 122;

				newHeight = newHeight < 200 ? 200 : newHeight;

				// $(oParams.selector).css('height', newHeight);
				return newHeight;
			// };
		},

		// get canvas box limit
		getBoxLimit: function(listTabWidth) {
			listTabWidth = listTabWidth || 340;
			var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
					height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
					boxWidth = width - listTabWidth - 20,
					boxHeight = height - 50 - 2 - 80 * 2;

			boxWidth > 0 ? boxWidth : boxWidth = 0;
			boxHeight > 0 ? boxHeight : boxHeight = 0;
			return { width: boxWidth, height: boxHeight };
		},

		getCardBoxLimit: function(listTabWidth, offsetBottom) {
			listTabWidth = listTabWidth || 340;
			var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
					height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
					boxWidth = width - listTabWidth - 20,
					boxHeight = height - 50 - 2 - 80 * 2 - offsetBottom;

			boxWidth > 0 ? boxWidth : boxWidth = 0;
			boxHeight > 0 ? boxHeight : boxHeight = 0;
			return { width: boxWidth, height: boxHeight };
		},

		getBoxLimitWithCase : function(){
			var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
					height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
					boxWidth = width - 380 - 20 - 30 * 2,			// list tab, scroll, margin
					boxHeight = height - 50 - 30 - 2;

			boxWidth > 0 ? boxWidth : boxWidth = 0;
			boxHeight > 0 ? boxHeight : boxHeight = 0;
			return { width: boxWidth, height: boxHeight };
		},


		getBoxBgSize : function(){
			var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
					height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
					boxWidth = width - 340 - 20,
					boxHeight = height - 50 - 2;

			boxWidth > 0 ? boxWidth : boxWidth = 0;
			boxHeight > 0 ? boxHeight : boxHeight = 0;
			return { width: boxWidth, height: boxHeight };
		},

		// get preview canvas box limit
		getPreviewBoxLimit: function(isWithoutBottomPanel) {
			isWithoutBottomPanel = isWithoutBottomPanel || false;
			var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
					height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
					boxWidth = width - 50,
					boxHeight = height - 30 - 60;

			isWithoutBottomPanel ? boxHeight: boxHeight -= 80;

			boxWidth > 0 ? boxWidth : boxWidth = 0;
			boxHeight > 0 ? boxHeight : boxHeight = 0;
			return { width: boxWidth, height: boxHeight };
		},

		// get canvas box limit with template
		getBoxLimitWithTmpl: function() {
			var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
				height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
				boxWidth = width - 340 - 20 - 30 * 2,   // imagelist, scroll bar, margin
				boxHeight = height - 50 - 2 - 80 * 2;	// header, kept space, action panel

			// check if app is with template
			if(Store.isWithTemplate) {
				boxHeight -= 40;
				if(Store.isChangeTmplExpanded) {
					boxHeight -= 155;
				};
			};

			boxWidth > 0 ? boxWidth : boxWidth = 0;
			boxHeight > 0 ? boxHeight : boxHeight = 0;
			return { width: boxWidth, height: boxHeight };
		},

		getOptionHeight : function(){
			var height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight);

			return height - 80 - 60 -4;
		},

		getWallArtsOptionHeight : function(){
			var height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight);

			return height - 50 - 44 - 2;
		},

		getPadCaseOptionHeight : function(){
			var height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight);
			console.log(height - 80 - 200);
			return height - 80 - 90;
		},

		getPrintBoxLimit : function(){
			if(Store.limitWidth) {
				return {
					width: Store.limitWidth,
					height: Store.limitWidth
				}
			}

			var width = screen.availWidth,
			perWidth = (width - 6*40 - 2 * 30 - 6*5) / 6 - 20;
			// perWidth = perWidth < 235 ? 235 : (perWidth-20);
			perWidth = perWidth < 235 ? 235 : perWidth;
			return {
				width: perWidth,
				height : perWidth
			}
		},

		getPrintPreviewBoxLimit: function() {
			var width = screen.availWidth,
				perWidth = (width - 4*20 - 2 * 50) / 4;
			perWidth = perWidth >=458 ? 458 : perWidth - 20;
			perWidth = perWidth < 235 ? 235 : perWidth;
			return {
				width: perWidth,
				height : perWidth
			}
		},
		getCenterPreviewBoxLimit: function(isWithoutBottomPanel) {
			isWithoutBottomPanel = isWithoutBottomPanel || false;
			var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
					height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
					boxWidth = width,
					boxHeight = height - 30 - 60;

			isWithoutBottomPanel ? boxHeight: boxHeight -= 80;

			boxWidth > 0 ? boxWidth : boxWidth = 0;
			boxHeight > 0 ? boxHeight : boxHeight = 0;
			return { width: boxWidth, height: boxHeight };
		},
		// 获取盒子的宽高。宽高需要去除的值外部传入。
		getBoxWH: function(desWidth, desHeight) {
			var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
					height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
					boxWidth = desWidth ? (width - desWidth) : width,
					boxHeight = desHeight ? (height - desHeight) : height;

					boxWidth > 0 ? boxWidth : boxWidth = 0;
					boxHeight > 0 ? boxHeight : boxHeight = 0;
					return { width: boxWidth, height: boxHeight };
		}
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(1)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {// do uploading
	module.exports = function(_this, oParams,firstUpload) {
		if(_this && oParams && oParams.fileSelector) {
			var fileEl = document.querySelector(oParams.fileSelector),
					files = fileEl.files;
			files = Array.prototype.slice.call(files);
			files.sort(function(item){
				if(item.type.indexOf('jpeg') !== -1 || item.type.indexOf('png') !== -1 || item.type.indexOf('jpg') !== -1){
					return true;
				}
				return false;
			})
			if(Store.retryId>=0){
				files = [];
				files.push(Store.errorUploadedFiles[Store.errorUploadedFiles.length-1-Store.retryId]);
			}

			// 如果产品有最大张数张数限制的时候， 上传的文件多余所需文件时，自动移除多余的图片。
			if(Store.maxPageNum && (Store.pages.length + files.length > Store.maxPageNum) &&　!(typeof(Store.watchData.replacePageId) == "number")) {
					files.length = Store.maxPageNum - Store.pages.length;
			}

			if(files.length > 0) {
				// request valid image ids before upload
				$.ajax({
					url: Store.domains.uploadUrl + '/upload/UploadServer/GetBatchImageIds',
					type: 'get',
					// dataType: '',
					data: 'imageIdCount=' + files.length
				}).done(function(idResult) {
					if(idResult) {
						var xmlStr = idResult,
								idCount = $(xmlStr).find('id').length;
						if(Store.retryId<0){
							Store.prevFilesTotal = Store.filesTotal;
							Store.filesTotal = Store.filesTotal ? Store.filesTotal + idCount : idCount;
						}
						for(var i = 0; i < idCount; i++) {
							// change the count and total
							Store.filesTotalInQueue = idCount;
							Store.filesCountInQueue = 0;

							var currentId = $(xmlStr).find('id').eq(i).text();
							// save into Store as backup
							var xhr = new XMLHttpRequest();
							if(Store.retryId<=0){
								Store.oriImageIds.push(currentId);
								Store.uploadProgress.push({ percent: 0, imgId : currentId,xhr : xhr });
							}


							if(files[i].name.toLowerCase().indexOf('.jpeg') !== -1 || files[i].name.toLowerCase().indexOf('.png') !== -1 || files[i].name.toLowerCase().indexOf('.jpg') !== -1){
								// upload image and save image info
							(function(i,currentId,xhr) {
								// if(files[i].type.indexOf('jpeg') === -1 && files[i].type.indexOf('png') === -1) {
								// 	// invalid
								// };

								var formData = new FormData();

								formData.append('uid', Store.userSettings.userId);
								formData.append('timestamp', Store.userSettings.uploadTimestamp);
								formData.append('token', Store.userSettings.token);
								formData.append('albumId', Store.userSettings.albumId);
								formData.append('albumName', Store.title);
								var file = files[i];
								formData.append('Filename', file.name);
								formData.append('filename', file);

								Store.oriImageNames.push({filename:file.name,imgId:currentId});

								var	url = Store.domains.uploadUrl + '/upload/UploadServer/uploadImg?imageId=' + currentId;

								var index = i;
								if(!firstUpload){
									index += Store.prevFilesTotal;
								}
								if(Store.retryId>=0){
									index = Store.retryId;
								}

								// $('#progress-' + i).attr('title', '');
								xhr.upload.onprogress = function(event) {
									if(event.loaded && event.total) {
										// browser support XHR load progress
										if(_this.isWindowOpen()) {
											var loaded = event.loaded,
													total = event.total,
													percent = Math.floor(loaded / total * 100);
											percent >= 99 && (percent = 99);
											console.log('percent',percent,i);
											for(var j=0;j<Store.uploadProgress.length;j++){
												var item = Store.uploadProgress[j];
												if(item.imgId===currentId){
													index = j;
													break;
												}
											}
											Store.uploadProgress.$set(index, { percent: percent, imgId : currentId, xhr : xhr });
											// Store.uploadProgress[i].percent = percent;

											// $('#status-' + i).text(percent + '%');
											// $('#progress-' + i).css('width', percent * 3).css('background-color', '#ccc');
										}
										else {
											// user closed upload window, abandon xhr handles
											xhr.onload = null;
											xhr.error = null;
											xhr.upload.onprogress = null;
										};
									}
									else {
										// XHR load progress not supported
										// TODO:  use wave progress?
									};
								};
								xhr.onreadystatechange = function() {
									if(xhr.readyState == 4){
										//上传图片过大时，处理方法
										if (xhr.status == 413) {
										// console.log("upload complete");
										// console.log(xhr);
										// console.log("response: " + xhr.responseText);

											Store.errorUploaded++;
											Store.filesCountInQueue ++;
											Store.errorExt++;
											// console.log("errorExt",Store.errorExt);
											Store.uploadProgress.$set(index, { percent: "File exceeds maximum size of 100M",imgId : currentId, info: "Failed: File exceeds maximum size of 100M" || 'Upload failed!' });
											$('#retry-'+index).show();
											$('#progress-c-'+index).hide();
											$("#delete-"+index).hide();
											var errorItem = Store.uploadProgress.splice(index,1);
											Store.uploadProgress.unshift(errorItem[0]);
											if(Store.filesCountInQueue==idCount){
												Store.vm.$dispatch('dispatchSaveProject', true);	// isDisableMsg
												Store.vm.$broadcast("notifyAddNewUploadedImgIntoPages");
												Store.isLostFocus = true;
											}
											_this.refreshImageUploadDom();

								 		}
									}

								}
								xhr.onload = function(event) {
									var result = this.responseText;
									console.log(result);
									if(Store.cancelledImgIds.indexOf($(result).find('id').text())>=0){
										return;
									}
									// console.log('upload' + i + ' successfully!');
									Store.filesCountInQueue ++;
									for(var j=0;j<Store.uploadProgress.length;j++){
										var item = Store.uploadProgress[j];
										if(item.imgId===currentId){
											index = j;
											break;
										}
									}

									if(result && result.indexOf('state="success"') !== -1) {
										console.log('done');
										Store.uploadProgress.$set(index, { percent: 'Done',imgId : currentId, xhr : xhr });
										$("#delete-"+index).hide();
										Store.currentUploadCount++;

										Store.successfullyUploaded++;
										Store.currentSuccessUpload++;
										if(Store.filesTotal===(Store.successfullyUploaded+Store.errorUploaded)){
											var spendTime = -1;
											if(Store.startUploadTime){
													spendTime = new Date - Store.startUploadTime;
													Store.startUploadTime = 0;
											}
											Store.isUploading = false;
											__webpack_require__(11)({ev: __webpack_require__(13).UploadComplete,uploadTimes:++Store.uploadTimes,success:Store.currentSuccessUpload,failed:Store.currentErrorUpload,spendTime: spendTime});
										}
										if(Store.retryId>=0){
											Store.errorUploaded--;
										}
										// $('#status-' + i).text('Done');
										// $('#progress-' + i).css('width', 300).css('background-color', '#393939');
										Store.imageList.push({
											id: $(result).find('id').text(),
											guid: $(result).find('guid').text() || '',
											// url: asFn.getImageUrl($(result).find('id').text()),
											encImgId: $(result).find('encImgId').text() || '',
											url: Store.domains.uploadUrl + '/upload/UploadServer/PicRender?qaulityLevel=0&puid=' + $(result).find('encImgId').text() + '&rendersize=fit',
											name: $(result).find('name').text(),
											width: parseFloat($(result).find('width').text()) || 0,
											height: parseFloat($(result).find('height').text()) || 0,
											shotTime: $(result).find('shotTime').text()	|| '',
											createTime: file.lastModified,
											uploadTime: new Date($(result).find('insertTime').text()).valueOf() || 0,
											usedCount: 0
										});
										if(typeof(Store.newUploadedImg) == "undefined"){
											Store.newUploadedImg=[];
										}
										Store.newUploadedImg.push({
											id: $(result).find('id').text(),
											guid: $(result).find('guid').text() || '',
											// url: asFn.getImageUrl($(result).find('id').text()),
											encImgId: $(result).find('encImgId').text() || '',
											url: Store.domains.uploadUrl + '/upload/UploadServer/PicRender?qaulityLevel=0&puid=' + $(result).find('encImgId').text() + '&rendersize=fit',
											name: $(result).find('name').text(),
											width: parseFloat($(result).find('width').text()) || 0,
											height: parseFloat($(result).find('height').text()) || 0,
											shotTime: $(result).find('shotTime').text()	|| '',
											createTime: file.lastModified,
											uploadTime: new Date($(result).find('insertTime').text()).valueOf() || 0,
											usedCount: 0
										});

										Store.vm.$broadcast("notifyAddNewUploadedImgIntoPages");

										if(Store.successfullyUploaded==Store.filesTotal){
											_this.handleSaveAndHideUpload(true);
											Store.vm.$broadcast("notifyHidePopup");
											// require('trackerService')({ev: require('trackerConfig').CloseMonitor,auto:true});
										}
										// else if(Store.filesTotal===(Store.successfullyUploaded+Store.errorUploaded)){
										// 	Store.vm.$broadcast("notifyAddNewUploadedImgIntoPages");
										// }
										// vm.broadcastImageList();
										// Store.watches.flagImageList = true;
										Store.retryId = -1;
										console.log(Store.imageList);
										_this.$dispatch('dispatchImageList');
										// TEST: display image testing

									}
									else if(result && result.indexOf('state="fail"') !== -1) {
										if(Store.cancelledImgIds.indexOf($(result).find('id').text())>=0){
											if(Store.retryId>=0){
												Store.retryId = -1;
											}
											return;
										}
										Store.errorUploaded++;
										if(Store.retryId<0){
											Store.currentUploadCount++;
											Store.currentErrorUpload++;
											if(Store.filesTotal===(Store.successfullyUploaded+Store.errorUploaded)){
												Store.isUploading = false;
												__webpack_require__(11)({ev: __webpack_require__(13).UploadComplete,uploadTimes:++Store.uploadTimes,success:Store.currentSuccessUpload,failed:Store.currentErrorUpload});
											}
											var errorItem = Store.uploadProgress.splice(index,1);
											Store.uploadProgress.unshift(errorItem[0]);
											// var errorImageId = Store.oriImageIds.splice(index,1);
											// Store.oriImageIds.unshift(errorImageId[0]);
											// var errorImageName = Store.oriImageNames.splice(index,1);
											// Store.oriImageNames.unshift(errorImageName[0]);
											Store.errorUploadedFiles.push(file);
											if(Store.filesCountInQueue==idCount){
												Store.vm.$dispatch('dispatchSaveProject', true);	// isDisableMsg
												Store.vm.$broadcast("notifyAddNewUploadedImgIntoPages");
												Store.isLostFocus = true;
											}
											_this.refreshImageUploadDom();
										}
										var idx = Store.retryId>=0 ? Store.retryId : 0;
										Store.uploadProgress.$set(idx, { percent: $(result).find('errorInfo').text(),imgId : currentId, xhr : xhr, info:"Failed: "+$(result).find('errorInfo').text() || 'Upload failed!' });
										Store.retryId = -1;
										$('#retry-'+idx).show();
										$('#progress-c-'+idx).hide();
										$("#delete-"+idx).hide();
										// $('#progress-' + i).css('width', 300).css('background-color', '#de3418').attr('title', 'Incorrect image format!');
									};
								};
								xhr.onerror = function(e) {
									// upload failed
									console.log('err');

									Store.errorUploaded++;
									Store.currentUploadCount++;
									Store.currentErrorUpload++;
									Store.filesCountInQueue ++;
									Store.uploadProgress.$set(index, { percent: "File exceeds maximum size of 100M",imgId : currentId, info: "Failed: File exceeds maximum size of 100M" || 'Upload failed!' });
									$('#retry-'+index).show();
									$('#progress-c-'+index).hide();
									$("#delete-"+index).hide();
									var errorItem = Store.uploadProgress.splice(index,1);
									Store.uploadProgress.unshift(errorItem[0]);
									if(Store.filesCountInQueue==idCount){
										Store.vm.$dispatch('dispatchSaveProject', true);	// isDisableMsg
										Store.vm.$broadcast("notifyAddNewUploadedImgIntoPages");
										Store.isLostFocus = true;
									}
									_this.refreshImageUploadDom();
								};


								xhr.open('post', url, true);
								xhr.send(formData);

								if(Store.retryId<0){
									_this.initImageUploadDom(index, file.name);
								}
							})(i,currentId,xhr);

							}else{
								//上传图片格式不符合时
								index = i;
								index += Store.prevFilesTotal;

								Store.errorUploaded++;
								Store.errorExt++;
								// console.log("errorExt",Store.errorExt);
								Store.oriImageNames.push({filename:files[i].name,imgId:currentId});

								_this.initImageUploadDom(index, files[i].name);

								$('#retry-'+index).show();
								$('#progress-c-'+index).hide();
								$("#delete-"+index).hide();

								Store.uploadProgress.$set(index, { percent: "Only .jpg .jpeg and .png files are supported",imgId : currentId, info: "Only .jpg .jpeg and .png files are supported" || 'Upload failed!' });

								var errorItem = Store.uploadProgress.splice(index,1);
								Store.uploadProgress.unshift(errorItem[0]);

								_this.refreshImageUploadDom();

							}

						};
					};
				});

			};
		};

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {
	// component -- CompImageUpload
	module.exports = {
		// template: '#t-image-upload',
		template: '<div class="bed-image-upload" v-show="sharedStore.isSingleImageUploadShow">' +
								'<div class="shadow-bg" v-bind:style="{zIndex: windowZindex-1}"></div>' +
								'<div class="box-single-image-upload" v-bind:style="{ zIndex: windowZindex }">' +
									'<div style="height: 40px:line-height: 40px;">' +
										// '<div v-on:click="hideImageUpload()" style="width: 40px;height: 40px;line-height: 40px;margin-left: 585px;font-size: 20px;text-align: center;cursor: pointer;" title="close"><i class="fa fa-close"></i></div>' +
										'<div style="width: 40px;height: 40px;margin-left: 600px;font-size: 20px;"><img src="../../static/img/close-normal.svg" width="16" height="16" v-on:click="hideSingleImageUpload()" onmouseover="this.src = \'../../static/img/close-hover.svg\'" onmouseout="this.src = \'../../static/img/close-normal.svg\'" alt="close" title="close" style="margin-top: 24px; margin-left: 4px; cursor: pointer;" /></div>' +
									'</div>' +
									'<div style="margin: 0 40px;">' +
										'<div class="font-title t-left">Upload Images</div>' +
									'</div>' +
									'<div style="margin: 30px 40px 0;">' +
										'<div class="upload-row-title">' +
											'<span class="upload-status-head">File</span>' +
											'<span class="upload-status-sub">File Progress</span>' +
										'</div>' +
									'</div>' +
									'<div id="box-single-upload-list" style="margin: 0 40px;height: 230px; overflow: auto;">' +
									'</div>' +
									'<div style="margin-top: 20px;">' +
										'<div class="button-white t-center" v-on:click="handleUploadClick()" style="width: 260px;height: 40px;line-height: 40px;margin-left: 95px;display: inline-block;font-size: 14px;">Select Images</div>' +
										'<div class="button t-center" v-on:click="handleSingleSaveAndHideUpload()" style="width: 160px;height: 40px;line-height: 40px;margin-left: 23px;display: inline-block;font-size: 14px;">Done</div>' +
										'<input type="file" name="" id="single-files" accept="image/jpeg,image/png,image/x-png" v-on:change="handleDoUpload()" style="display: none;" />' +
									'</div>' +
								'</div>' +
							'</div>',
		data: function() {
			return {
				privateStore: {
					els: '',
					uploadWindowParams: {
						width: 640,
						height: 460,
						selector: '.box-single-image-upload'
					},
					imageListObj : {},
					uploadParams: { fileSelector: '#single-files' }
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
		},
		methods: {

			// show image upload box
			showImageUpload: function() {
				var UtilWindow = __webpack_require__(46);

				UtilWindow.setPopWindowPosition(this.privateStore.uploadWindowParams);
				this.resetImageUploadDom();
				this.sharedStore.isSingleImageUploadShow = true;
			},

			// do hiding image upload box
			hideSingleImageUpload: function() {
				if(this.sharedStore.filesCountInQueue >= this.sharedStore.filesTotalInQueue) {
					// all files uploaded
					this.sharedStore.isSingleImageUploadShow = false;
					if(this.sharedStore.filesCountInQueue>0){
						this.$dispatch('dispatchSingleImageUploadComplete',Store.oriImageIds[0]);
					};

				}
				else {
					// files not uploaded yet
					if(window.confirm('Undeliveried images will be lost if you stop uploading, would you like to continue?')) {
						this.sharedStore.isSingleImageUploadShow = false;
						return true;
					}
					else {
						return false;
					};
				};

			},

			// handle upload button click
			handleUploadClick: function() {
				if(this.sharedStore.filesCountInQueue >= this.sharedStore.filesTotalInQueue) {
					// reset trush DOM at first
					// this.resetImageUploadDom();

					$('#single-files').trigger('click');
				}
				else {
					this.$dispatch("dispatchShowPopup", { type : 'upload', status : -1})
				};

			},

			handleDoUpload: function() {
				if($('#single-files').val()){
					var UploadController = __webpack_require__(49);
					UploadController(this.privateStore.imageListObj, this.privateStore.uploadParams);
				}
			},

			// handle save and hide upload box
			handleSingleSaveAndHideUpload: function() {
				if(this.sharedStore.filesCountInQueue >= this.sharedStore.filesTotalInQueue) {
					// all files uploaded
					//TODO:
					this.$dispatch('dispatchSaveProject', true);	// isDisableMsg

					this.hideSingleImageUpload();

					Store.isLostFocus = true;
				}
				else {
					// files not uploaded yet
					if(window.confirm('Undeliveried images will be lost if you stop uploading, would you like to continue?')) {
						this.sharedStore.filesTotalInQueue = 0;
						this.sharedStore.filesCountInQueue = 0;
						this.hideSingleImageUpload();
						// TODO:
						this.$dispatch('dispatchSaveProject', true);	// isDisableMsg

						return true;
					}
					else {
						return false;
					};
				};

			},

			// init image upload dom
			initImageUploadDom: function(idx, params) {
				var displayFileName = params.filename;
				// remove subfix
				displayFileName = displayFileName.substr(0, displayFileName.length - 4);

				if(displayFileName.length > 10) {
					displayFileName = displayFileName.substr(0, 7) + '...' + displayFileName.substr(displayFileName.length - 3);
				};

				if(idx < 5) {
					// use old inited dom
					$('#single-upload-row-item-' + idx + ' .upload-status-head').text(displayFileName).attr('title', params);

					var statusCont = '<span style="display: inline-block;position:relative; top: 13px; left: 10px;width: 300px;height: 10px; border-radius: 5px; background-color: white;">' +
															'<span id="single-progress-'+ idx +'" style="display: inline-block;width: 1px; height: 10px; border-radius: 5px; background-color: #ccc;">&nbsp;</span>' +
														'</span>' +
														'<span id="single-status-'+ idx +'" style="position: relative; left: 15px;">0%</span>';
					$('#single-upload-row-item-' + idx + ' .upload-status-sub').html(statusCont);
				}
				else {
					// append new dom
					var uploadStatusCont =	'<div class="upload-row-item" id="single-upload-row-item-'+ idx +'">' +
																		'<span class="upload-status-head" title="'+ params +'">'+ displayFileName +'</span>' +
																		'<span class="upload-status-sub">' +
																			'<span style="display: inline-block;position:relative; top: 13px; left: 10px;width: 300px;height: 10px; border-radius: 5px; background-color: white;">' +
																				'<span id="single-progress-'+ idx +'" style="display: inline-block;width: 1px; height: 10px; border-radius: 5px; background-color: #ccc;">&nbsp;</span>' +
																			'</span>' +
																			'<span id="single-status-'+ idx +'" style="position: relative; left: 15px;">0%</span>' +
																		'</span>' +
																	'</div>';
					$('#box-single-upload-list').append(uploadStatusCont);
				};
			},

			// reset image upload dom
			resetImageUploadDom: function() {
				var cont = '';

				for(var i = 0; i < 5; i++) {
					cont += '<div class="upload-row-item" id="single-upload-row-item-'+ i +'">' +
										'<span class="upload-status-head">&nbsp</span>' +
										'<span class="upload-status-sub">' +
											'&nbsp' +
										'</span>' +
									'</div>';
				};

				$('#box-single-upload-list').html(cont);

				// clear trash files
				$('#single-files').val('');

				// reset files count
				this.sharedStore.filesTotalInQueue = 0;
				this.sharedStore.filesCountInQueue = 0;
			},

			// update progress
			updateSingleUploadProgress: function() {
				for(var i = 0; i < this.sharedStore.uploadProgress.length; i++) {
					if(this.sharedStore.uploadProgress[i].percent === 'Done') {
						$('#single-status-' + i).text('Done');
						$('#single-progress-' + i).css('width', 300).css('background-color', '#393939').attr('title', '');
					}
					else if(this.sharedStore.uploadProgress[i].percent === 'Error') {
						$('#single-status-' + i).text('Error');
						$('#single-progress-' + i).css('width', 300).css('background-color', '#de3418').attr('title', this.sharedStore.uploadProgress[i].info);
					}
					else {
						$('#single-status-' + i).text(this.sharedStore.uploadProgress[i].percent + '%');
						$('#single-progress-' + i).css('width', this.sharedStore.uploadProgress[i].percent * 3).css('background-color', '#ccc');
					};
				};
			},
			isWindowOpen:function(){
				return Store.isSingleImageUploadShow;
			}
		},
		events: {
			// notify show image upload window
			notifyShowSingleImageUpload: function(obj) {
				this.privateStore.imageListObj = obj;
				if(this.sharedStore.filesCountInQueue>=this.sharedStore.filesTotalInQueue){
					Store.oriImageIds=[];
					Store.uploadProgress = [];
					$('#single-files').val('');
				}
				// this.showImageUpload();
				this.handleUploadClick();
			}
		},
		created: function() {
			// var _this = this;
			// _this.$watch('sharedStore.uploadProgress', _this.updateSingleUploadProgress, { deep: true });
		}
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, Store) {
	// do uploading
	module.exports = function(_this, oParams) {
		if(_this && oParams && oParams.fileSelector) {
			var fileEl = document.querySelector(oParams.fileSelector),
					files = fileEl.files;
			if(files.length > 0) {
				// request valid image ids before upload
				$.ajax({
					url: Store.domains.uploadUrl + '/upload/UploadServer/GetBatchImageIds',
					type: 'get',
					// dataType: '',
					data: 'imageIdCount=' + files.length
				}).done(function(idResult) {
					if(idResult) {
						var xmlStr = idResult,
								idCount = $(xmlStr).find('id').length;

						Store.oriImageIds = [];
						if(!Store.newUploadedImg){
							Store.newUploadedImg = [];
						}
						Store.newUploadedImg.length = 0;
						for(var i = 0; i < idCount; i++) {
							// change the count and total
							Store.filesTotalInQueue = idCount;
							Store.filesCountInQueue = 0;

							var currentId = $(xmlStr).find('id').eq(i).text();
							// save into Store as backup
							Store.oriImageIds.push(currentId);

							Store.uploadProgress.push({ percent: 0 });

							// upload image and save image info
							(function(i) {
								// if(files[i].type.indexOf('jpeg') === -1 && files[i].type.indexOf('png') === -1) {
								// 	// invalid
								// };

								var formData = new FormData();

								formData.append('uid', Store.userSettings.userId);
								formData.append('timestamp', Store.userSettings.uploadTimestamp);
								formData.append('token', Store.userSettings.token);
								formData.append('albumId', Store.userSettings.albumId);
								formData.append('albumName', Store.title);
								var file = files[i];
								// console.log(file);
								formData.append('Filename', file.name);
								formData.append('filename', file);

								var xhr = new XMLHttpRequest(),
										url = Store.domains.uploadUrl + '/upload/UploadServer/uploadImg?imageId=' + currentId;

								// $('#progress-' + i).attr('title', '');
								xhr.upload.onprogress = function(event) {
									if(event.loaded && event.total) {
											var loaded = event.loaded,
													total = event.total,
													percent = Math.floor(loaded / total * 100);
											percent >= 99 && (percent = 99);
											console.log('percent',percent,i);
											Store.uploadProgress.$set(i, { percent: percent });
									}
									else {
										// XHR load progress not supported
										// TODO:  use wave progress?
									};
								};

								xhr.onload = function(event) {
									// console.log('upload' + i + ' successfully!');
									Store.filesCountInQueue ++;

									var result = this.responseText;
									if(result && result.indexOf('state="success"') !== -1) {
										console.log('done');
										Store.imageList.push({
											id: $(result).find('id').text(),
											guid: $(result).find('guid').text() || '',
											// url: asFn.getImageUrl($(result).find('id').text()),
											encImgId: $(result).find('encImgId').text() || '',
											url: Store.domains.uploadUrl + '/upload/UploadServer/PicRender?qaulityLevel=0&puid=' + $(result).find('encImgId').text() + '&rendersize=fit',
											name: $(result).find('name').text(),
											width: parseFloat($(result).find('width').text()) || 0,
											height: parseFloat($(result).find('height').text()) || 0,
											shotTime: $(result).find('shotTime').text()	|| '',
											usedCount: 0
										});
										Store.newUploadedImg.push({
											id: $(result).find('id').text(),
											guid: $(result).find('guid').text() || '',
											// url: asFn.getImageUrl($(result).find('id').text()),
											encImgId: $(result).find('encImgId').text() || '',
											url: Store.domains.uploadUrl + '/upload/UploadServer/PicRender?qaulityLevel=0&puid=' + $(result).find('encImgId').text() + '&rendersize=fit',
											name: $(result).find('name').text(),
											width: parseFloat($(result).find('width').text()) || 0,
											height: parseFloat($(result).find('height').text()) || 0,
											shotTime: $(result).find('shotTime').text()	|| '',
											usedCount: 0
										});
										Store.uploadProgress.$set(i, { percent: 'Done' });
									}
									else if(result && result.indexOf('state="fail"') !== -1) {
										Store.uploadProgress.$set(i, { percent: 'Error', info: $(result).find('errorInfo').text() || 'Upload failed!' });
										// $('#status-' + i).text('Error');
										// $('#progress-' + i).css('width', 300).css('background-color', '#de3418').attr('title', 'Incorrect image format!');
									};
								};

								xhr.onerror = function(e) {
									// upload failed
									console.log('err');
									Store.filesCountInQueue ++;
								};


								xhr.open('post', url, true);
								xhr.send(formData);
								_this.initImageUploadDom(i, {filename:file.name});
							})(i);
						};
					};
				});

			};
		};

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(1)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {
	var Vue = __webpack_require__(31);

	var CompImageList = Vue.extend(__webpack_require__(51));
	// Vue.component('image-list', CompImageList);

	// var CompProjectItemList = Vue.extend(require('../components/CompProjectItemList.js'));
	// Vue.component('project-item-list', CompProjectItemList);
	// component -- list tab
	module.exports = {
		template:   '<div class="bed-list-tab" v-show="!sharedStore.isPreview" v-on:click="blurFocus" style="border-right: 1px solid rgba(232, 232, 232, 1);border-top: 1px solid rgba(232, 232, 232, 1);">' +
						'<div style="height: 34px;">' +
							// '<div class="t-center" v-bind:class="list0Class" v-on:click="handleChangeTab(0)" style="width: 189px;border-right:1px solid rgba(232, 232, 232, 1);">Options</div>' +
							// '<div class="t-center" v-bind:class="list1Class" v-on:click="handleChangeTab(1)" style="width: 189px;">Images</div>' +
							// '<div class="t-center" v-bind:class="list2Class" v-on:click="handleChangeTab(2)" style="width: 126px;">Layouts</div>' +
							'<div class="t-center" v-bind:class="list1Class" v-on:click="handleChangeTab(1)" style="width: 140px; border-right: 1px solid rgba(232, 232, 232, 1);">Photos</div>' +
							'<div class="t-center" v-bind:class="list2Class" style="width: 139px;cursor: default;"></div>' +
						'</div>' +
						// '<option-list v-show="privateStore.currentView === \'option-list\'"></option-list>' +
						'<image-list v-show="privateStore.currentView === \'image-list\'"></image-list>' +
						'<layout-list v-show="privateStore.currentView === \'layout-list\'"></layout-list>' +
					'</div>',
		data: function() {
			return {
				privateStore: {
					currentView: 'image-list'
				},
				sharedStore: Store
			};
		},
		computed: {
			list0Class: function() {
				if(this.privateStore.currentView === 'option-list') {
					return 'list-tab-selected';
				}
				else {
					return 'list-tab';
				};
			},

			list1Class: function() {
				if(this.privateStore.currentView === 'image-list') {
					return 'list-tab-selected';
				}
				else {
					return 'list-tab';
				};
			},
			list2Class: function() {
				if(this.privateStore.currentView === 'layout-list') {
					return 'list-tab-selected';
				}
				else {
					return 'list-tab';
				};
			}
		},
		components: {
			'image-list': CompImageList,
			// 'project-item-list': CompProjectItemList
		},
		methods: {
			handleChangeTab: function(nTabNum) {
				switch(nTabNum) {
					case 0:
						this.privateStore.currentView = 'option-list';
						break;
					case 1:
						this.privateStore.currentView = 'image-list';
						break;
					case 2:
						this.privateStore.currentView = 'layout-list';
						break;
				};
			},

			blurFocus: function() {
	      this.$dispatch('dispatchClearScreen');
	      // this.sharedStore.isLostFocus = true;
	    },
		}
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {// component -- image list
	module.exports = {
		// template: '#t-image-list',
		template:   '<div style="text-align: center;" v-on:click="blurFocus">' +
						'<div class="button" v-on:click="triggerImageUpload()" style="width: 260px;height: 32px;line-height: 32px;margin: 10px auto 0px;font-size: 13px;">Add Photos</div>' +
						'<div id="list-image" v-bind:style="{overflow: newImageList.length ? \'auto\': \'\' }">' +
							'<div class="list-image-container">' +
								'<div v-show="newImageList.length" class="item-image" v-for="item in newImageList" v-on:mouseover="handleShowDeleteIcon($index)" v-on:mouseout="handleHideDeleteIcon($index)">'+
									'<div class="wrap-image">'+
										'<div class="loaded-image">'+
											'<img class="preview-image" id="ori-image-{{ $index }}" :imageid="item.id" :imageurl="item.url" :src="item.previewUrl" :alt="item.name" draggable="true"/>'+
											'<div class="box-preview-image" v-bind:style="{opacity: item.usedCount > 0? 1: 0 }" draggable="false">' +
												'<span>{{ item.usedCount }}</span>' +
											'</div>'+
											'<div>'+
												'<img class="icon-delete" id="icon-delete-{{ $index }}" src="./assets/img/delete.svg" v-on:click="handleDeleteImage($index)" v-show="item.usedCount <= 0" alt="delete" title="delete" style=" opacity: 0; cursor: pointer;" draggable="false"/>'+
												'<img class="icon-delete" src="./assets/img/delete.svg" v-else alt="delete" style=" opacity: 0; cursor: pointer;" draggable="false"/>' +
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>'+
								'<div style="clear: both;"></div>' +
							'</div>' +

							'<div v-show="!newImageList.length" class="item-empty" v-on:click="triggerImageUpload()">'+
								'<div class="item-empty-arrow"></div>'+
								'<div class="item-empty-title">Click here to select photo(s)</div>'+
								// '<div class="item-empty-content">We will autofill photos you select</div>'+
							'</div>'+

						'</div>'+
					'</div>',

		data: function() {
			return {
				privateStore: {
					imageList: [],
					isHideUsed: false,
					imageListParams: {
						selector: '#list-image'
					},
				},
				sharedStore: Store
			};
		},
		computed: {
			newImageList: function() {
				var newAry = [];

				// init image list
				for(var i = 0; i < this.sharedStore.imageList.length; i++) {
					if(this.privateStore.isHideUsed === false || (this.privateStore.isHideUsed === true && this.sharedStore.imageList[i].usedCount <= 0)) {
						newAry.push(this.sharedStore.imageList[i]);
						// newAry[i].previewUrl = 'http://img350' + this.sharedStore.imageList[i].url;
						newAry[newAry.length - 1].previewUrl = this.sharedStore.imageList[i].url + '350';
						newAry[newAry.length - 1].imageTip = this.chopImageTip(this.sharedStore.imageList[i].name, this.sharedStore.imageList[i].width, this.sharedStore.imageList[i].height);
						// newAry[i].usedCount = 0;

					};
				};
				var item =this.selected ;

				if(newAry && newAry.length>0){
					switch(item){
						case 'uploadTimeN2O':
							newAry.sort(function(prev,next){
								return next.uploadTime - prev.uploadTime;
							});
							break;

						case'uploadTimeO2N':
							newAry.sort(function(prev,next){
								return prev.uploadTime - next.uploadTime;
							});
							break;

						case 'createTimeN2O':
						 	newAry.sort(function(prev,next){
						 		return next.createTime - prev.createTime;
							});
						 	break;

						case 'createTimeO2N':
						 	newAry.sort(function(prev,next){
						 		return prev.createTime - next.createTime;
							});
						 	break;

						case 'nameA2Z':
							newAry.sort(function(prev,next){
								return prev.name.localeCompare(next.name);
							});
							break;

						case 'nameZ2A':
						    newAry.sort(function(prev,next){
						    	return next.name.localeCompare(prev.name);
							});
							break;
					}
				}
				this.bindImageDragEvent();
				return newAry;
			},
			isImageListShow: function(){
				if(this.sharedStore.imageList.length > 0){
					return true;
				}else{
					return false;
				}
			}

		},
		methods: {

			// init image list size
			// initImageListSize: function() {
			// 	var width = window.innerWidth || (window.document.documentElement.clientWidth || window.document.body.clientWidth),
			// 	    height = window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight),
			// 	    newHeight = height - 280;

			// 	newHeight < 400 ? newHeight = 400 : newHeight;

			// 	$('#list-image').css('height', newHeight);
			// },

			//
			// triggerImageUpload: function() {
			// 	var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
			// 	Store.vm.$broadcast("notifyShowImageUpload");
			// },
			triggerImageUpload: function(isCloudClick) {
				//clear error image upload dom
				for(var i = 0; i < this.sharedStore.uploadProgress.length; i++) {
					if(this.sharedStore.uploadProgress[i].percent === 'Error'){
						$('#single-upload-row-item-'+ i ).remove();
					}
				}
				if(this.sharedStore.isSingleUploadButton){
					Store.vm.$broadcast("notifyShowImageUpload",true);
					// this.sharedStore.isShowUploadButton = false;
				}else{
					Store.vm.$broadcast("notifyShowImageUpload");
				}

				// 处理是点击 add photos 还是 点击 云上传执行的 埋点。
				if (!isCloudClick) {
					__webpack_require__(11)({ev: __webpack_require__(13).AddPhotos});
				}
			},
			// chop image tip
			chopImageTip: function(sImageName, nImageWidth, nImageHeight) {
				sImageName = sImageName || '';
				nImageWidth = nImageWidth || 0;
				nImageHeight = nImageHeight || 0;

				// the final patten is like  Image name (1400x900)
				var sizePart = '',
						namePart = '',
						sizeStr = '',
						nameStr = '';

				// prepare size part at first
				if(nImageWidth > 0 && nImageHeight > 0) {
					// change size part only if width and height are valid
					sizeStr = sizePart = ' (' + nImageWidth + 'x' + nImageHeight + ')';
				};

				// chop name if needed
				if((sImageName.length + sizePart.length) > 20) {
					// image tip will be too long
					if(sizePart.length > 14) {
						// size part is too long
						// NOTE: this happens rarely, but to be robust, we consider it and change the patten as  Image name (12345x123...)
						var sizeNumPart = nImageWidth + 'x' + nImageHeight;

						sizeStr = ' (' + sizeNumPart.substr(0, 9) + '...)';

						if(sImageName.length > 6) {
							// name part is also too long
							var fitLength = 6,
									prefixLength = fitLength - 4;

							namePart = sImageName;
							nameStr = namePart.substr(0, prefixLength) + '...' + namePart.substr(namePart.length - 3);
						}
						else {
							// normal name part + long size part
							nameStr = namePart = sImageName;
						};
					}
					else {
						// name part is too long, chop the name then
						var fitLength = 20 - sizePart.length,
								prefixLength = fitLength - 4;

						namePart = sImageName;
						nameStr = namePart.substr(0, prefixLength) + '...' + namePart.substr(namePart.length - 3);
					};
				}
				else {
					// no chopping needed
					nameStr = namePart = sImageName;
				};

				return {
					// longTip: namePart + sizePart,
					// shortTip: nameStr + sizeStr
					longTip: namePart,
					shortTip: nameStr
				};
			},

			// handle hide used toggle
			handleHideUsedToggle: function() {

			},

			// show delete icon
			handleShowDeleteIcon: function(idx) {
				$('#icon-delete-' + idx).css('opacity', 1);
			},

			// hide delete icon
			handleHideDeleteIcon: function(idx) {
				$('#icon-delete-' + idx).css('opacity', 0);
			},

			// delete image
			handleDeleteImage: function(imageIdx) {
				if(imageIdx != undefined) {
					var imageId = $('#ori-image-' + imageIdx).attr('imageid') || '';

					if(imageId !== '') {
						for(var i = 0; i < this.sharedStore.imageList.length; i++) {
							if(imageId == this.sharedStore.imageList[i].id) {
								this.sharedStore.imageList.splice(i, 1);
								break;
							};
						};
					};
				};
			},

			// bind image dragging handles
			bindImageDragEvent: function() {
				var _this = this;
					// Store.isImageDrag = true;
				// binding dragging listeners when view synced
				_this.$nextTick(function() {

					console.log('binding events now')
					for(var i = 0; i < $('.item-image').length; i++) {

						// on dragging start
						$('.item-image')[i].ondragstart = function(ev) {
							Store.isImageDrag = true;
							console.log('trigger event now ' + $(ev.target).attr('imageid'));
							_this.$dispatch('dispatchShowSpineLines');

							_this.sharedStore.elementDragged = ev.target;
							// console.log($(ev.target).attr('guid'));
							_this.sharedStore.dragData.imageId = $(ev.target).attr('imageid');
							_this.sharedStore.dragData.sourceImageUrl = $(ev.target).attr('imageurl');
							_this.sharedStore.dragData.cursorX = ev.offsetX || 0;
							_this.sharedStore.dragData.cursorY = ev.offsetY || 0;
							_this.sharedStore.dragData.isFromList = true;
							_this.sharedStore.operateMode = 'drag';
							// ev.dataTransfer.setData('imageId', $(ev.target).attr('imageid'));
							// ev.dataTransfer.setData('sourceImageUrl', $(ev.target).attr('imageurl'));
							// ev.dataTransfer.setData('imageGuid', $(ev.target).attr('guid'));
							// ev.dataTransfer.setData("imageWidth", $(ev.target).attr('owidth'));
							// ev.dataTransfer.setData("imageHeight", $(ev.target).attr('oheight'));
							// ev.dataTransfer.setData("imageWidth", ev.target.width);
							// ev.dataTransfer.setData("imageHeight", ev.target.height);
						};

						// on dragging end
						$('.item-image')[i].ondragend = function(ev) {
							console.log('dragging ends now');
							_this.sharedStore.dragData.isFromList = false;
							_this.sharedStore.operateMode = 'idle';
							_this.$dispatch('dispatchHideSpineLines');
						};
					};
				});
			},
			blurFocus: function() {
		      this.$dispatch('dispatchClearScreen');
		      this.sharedStore.isTotalPriceShow = false;
		    },
		},
		events: {

			// notify the broadcast from parent instance
			notifyImageList: function() {
				console.log('notify image list event');
				var UtilWindow = __webpack_require__(46);

				UtilWindow.initImageListSizeWithLRB(this.privateStore.imageListParams);

				//this.bindImageDragEvent();
			},
			notifyTriggerImageUpload : function(){
				this.triggerImageUpload(true);
			}
		},
		created: function() {


		}
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {
	var ParamsManage = __webpack_require__(26);
	// component -- handle

	module.exports = {
	  template: '<div class="box-handle" id="handles-{{pagedd}}{{ id }}{{main}}" v-bind:style="{ opacity: isShowHandles? 1: 0 }" title="{{ handleTitle }}">' +
	              '<!-- center layer -->' +
	              '<div class="handle-center-layer" draggable="true"></div>' +
	              '<!-- top left corner handle -->' +
	              '<div class="handle-icon" id="" style="top: -4px; left: -4px;" v-if="isCornerHandles"></div>' +
	              '<div class="handle handle-corner handle-top-left" id="" draggable="true" style="top: -4px; left: -4px;" v-if="isCornerHandles"></div>' +
	              '<!-- top side handle -->' +
	              '<div class="handle-icon" id="" style="top: -4px; left: {{ halfLeft }};" v-if="isSideHandles"></div>' +
	              '<div class="handle handle-side handle-top-side" id="" draggable="true" style="top: -4px; left: {{ halfLeft }};" v-if="isSideHandles"></div>' +
	              '<!-- top right corner handle -->' +
	              '<div class="handle-icon" id="" style="top: -4px; right: -4px;" v-if="isCornerHandles"></div>' +
	              '<div class="handle handle-corner handle-top-right" id="" draggable="true" style="top: -4px; right: -4px;" v-if="isCornerHandles"></div>' +
	              '<!-- right side handle -->' +
	              '<div class="handle-icon" id="" style="top: {{ halfTop }}; right: -4px;" v-if="isSideHandles"></div>' +
	              '<div class="handle handle-side handle-right-side" id="" draggable="true" style="top: {{ halfTop }}; right: -4px;" v-if="isSideHandles"></div>' +
	              '<!-- bottom right corner handle -->' +
	              '<div class="handle-icon" id="" style="bottom: -4px; right: -4px;" v-if="isCornerHandles"></div>' +
	              '<div class="handle handle-corner handle-bottom-right" id="" draggable="true" style="bottom: -4px; right: -4px;" v-if="isCornerHandles"></div>' +
	              '<!-- bottom side handle -->' +
	              '<div class="handle-icon" id="" style="bottom: -4px; left: {{ halfLeft }};" v-if="isSideHandles"></div>' +
	              '<div class="handle handle-side handle-bottom-side" id="" draggable="true" style="bottom: -4px; left: {{ halfLeft }};" v-if="isSideHandles"></div>' +
	              '<!-- bottom left corner handle -->' +
	              '<div class="handle-icon" id="" style="bottom: -4px; left: -4px;" v-if="isCornerHandles"></div>' +
	              '<div class="handle handle-corner handle-bottom-left" id="" draggable="true" style="bottom: -4px; left: -4px;" v-if="isCornerHandles"></div>' +
	              '<!-- left side handle -->' +
	              '<div class="handle-icon" id="" style="top: {{ halfTop }}; left: -4px;" v-if="isSideHandles"></div>' +
	              '<div class="handle handle-side handle-left-side" id="" draggable="true" style="top: {{ halfTop }}; left: -4px;" v-if="isSideHandles"></div>' +
	            '</div>',
	  props: [
	    'pagedd',
	    'id',
	    'main',
	    'isCornerHandles',
	    'isSideHandles',
	    'isShowHandles'
	  ],
	  data: function() {
	    return {

	    };
	  },
	  computed: {
	    halfLeft: function() {
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	      var idx = ParamsManage.getIndexById(this.id);

	      return ((currentCanvas.params[idx].width / 2) * currentCanvas.ratio - 4) + 'px';
	    },

	    halfTop: function() {
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	      var idx = ParamsManage.getIndexById(this.id);

	      return ((currentCanvas.params[idx].height / 2) * currentCanvas.ratio - 4) + 'px';
	    },
	    handleTitle: function() {
	      // not bg, must be image, imageId must be ''
	      if(this.id !== 'bg') {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	        var idx = ParamsManage.getIndexById(this.id);

	        if(currentCanvas.params[idx].elType === 'image' && currentCanvas.params[idx].imageId === '') {
	          return 'Click to add a photo';
	        };
	      };

	      return '';
	    }
	  },
	  methods: {
	    bindHandleEvents: function(pageIdx, id,main) {
	      this.bindLayerEvents(pageIdx, id,main);

	      if(this.isCornerHandles) {
	        this.bindCornerEvents(pageIdx, id,main);
	      };

	      if(this.isSideHandles) {
	        this.bindSideEvents(pageIdx, id,main);
	      };

	    },

	    bindLayerEvents: function(pageIdx, id,main) {
	      var _this = this;
	      if(id != null) {
	        var handle = document.getElementById('handles-' + pageIdx + id + main),
	            centerLayer = handle.querySelector('.handle-center-layer');
	        var isInDragging = false;

	        var oriX, oriY, nowX, nowY;
	        var centerMouseMove,centerMouseUp;
	        if(id === 'bg') {
	          centerLayer.ondrop = function(ev) {
	            ev.preventDefault();

	            if(!isInDragging && Store.dragData.isFromList) {
	              console.log('drop', ev);
	              _this.$dispatch('dispatchDrop', { id: _this.id, x: ev.offsetX || ev.layerX || 0, y: ev.offsetY || ev.layerY || 0 });
	            };
	          };
	          centerLayer.ondragover = function(ev) {
	            ev.preventDefault();
	            if(!isInDragging) {
	            };
	          };
	          centerLayer.onclick = function(ev) {
	            console.log('click', ev);
	          };
	          centerLayer.ondblclick = function(ev) {
	            console.log('dbclick', ev);
	          };
	          centerLayer.onmouseover = function(ev) {
	          };
	          centerLayer.onmouseout = function(ev) {
	          };
	        }
	        else {
	          centerLayer.onmousedown = function(ev) {
	            ev.preventDefault();
	            isInDragging = true;

	            oriX = ev.screenX || 0;
	            oriY = ev.screenY || 0;
	            Store.operateMode = 'drag';
	            _this.$dispatch('dispatchDragStart');
	            centerMouseMove=function(ev){
	              ev.preventDefault();
	              nowX = ev.screenX || 0;
	              nowY = ev.screenY || 0;
	              var movedX = nowX - oriX,
	                  movedY = nowY - oriY;
	              if(nowX === 0 && nowY === 0) {
	                movedX = movedY = 0;
	              }
	              else {
	                oriX = nowX;
	                oriY = nowY;
	              };
	              Store.operateMode = 'drag';
	              _this.$dispatch('dispatchMove', { x: movedX, y: movedY });
	            }

	            centerMouseUp=function(ev){

	              ev.preventDefault();
	              document.removeEventListener('mouseup',centerMouseUp);
	              document.removeEventListener('mousemove',centerMouseMove);
	              isInDragging = false;

	              nowX = ev.screenX || 0;
	              nowY = ev.screenY || 0;
	              console.log(ev, nowX, nowY);
	              var movedX = nowX - oriX,
	                  movedY = nowY - oriY;
	              if(nowX === 0 && nowY === 0) {
	                movedX = movedY = 0;
	              }
	              else {
	                oriX = nowX;
	                oriY = nowY;
	              };
	              if(Math.abs(movedX) > 8 || Math.abs(movedY) > 8) {
	                movedX = 0;
	                movedY = 0;
	              };
	              _this.$dispatch('dispatchMove', { x: movedX, y: movedY });
	              _this.$dispatch('dispatchDragEnd');
	              Store.operateMode = 'idle';
	            }
	            document.addEventListener('mouseup',centerMouseUp);
	            document.addEventListener('mousemove',centerMouseMove);
	          };
	          centerLayer.ondrop = function(ev) {
	            ev.preventDefault();

	            if(!isInDragging && Store.dragData.isFromList) {
	              console.log('drop', ev);
	              _this.$dispatch('dispatchDrop', { id: _this.id, x: ev.offsetX || ev.layerX || 0, y: ev.offsetY || ev.layerY || 0 });
	            };
	          };;
	          centerLayer.ondragover = function(ev) {
	            ev.preventDefault();
	            if(!isInDragging) {
	              _this.$dispatch('dispatchDragOver');
	            };
	          };
	          centerLayer.onclick = function(ev) {
	            ev.stopPropagation();
	            console.log('click', ev);
	            _this.$dispatch('dispatchClick', { id: _this.id, x: ev.offsetX || ev.layerX || 0, y: ev.offsetY || ev.layerY || 0 });
	          };
	          centerLayer.ondblclick = function(ev) {
	            console.log('dbclick', ev);
	            _this.$dispatch('dispatchDblClick');
	          };
	          centerLayer.onmouseover = function(ev) {
	            _this.$dispatch('dispatchMouseOver');
	          };
	          centerLayer.onmouseout = function(ev) {
	            _this.$dispatch('dispatchMouseOut');
	          };
	        };

	        // bind document event for key press here
	        // NOTE: in fact, this event should be binded only once, but it's with no side effect, we consider it and ignore the rebindings for it...
	        document.onkeypress = function(ev) {
	          console.log('key press', ev);
	        };
	      };
	    },

	    bindCornerEvents: function(pageIdx, id,main) {
	      if(id != null) {
	        var _this = this;
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        var handle = document.getElementById('handles-' + pageIdx + id+ main),
	            corners = handle.querySelectorAll('.handle-corner');

	        var oriX, oriY, nowX, nowY;
	        var cornerMouseMove,cornerMouseUp;
	        for(var i in corners) {
	          var item = corners[i];

	          item.onmousedown = function(ev) {
	            ev.stopPropagation();
	            ev.preventDefault();
	            oriX = ev.screenX || 0;
	            oriY = ev.screenY || 0;
	            // console.log(oriX, oriY);

	            Store.operateMode = 'scale';
	            _this.$dispatch('dispatchScaleStart');
	            var className=ev.target.className;
	            cornerMouseMove=function(ev){
	              // console.log('drag', ev);
	              ev.preventDefault();
	              nowX = ev.screenX || 0;
	              nowY = ev.screenY || 0;
	              var movedX = nowX - oriX,
	                  movedY = nowY - oriY;
	              // value fix for jumping drag...
	              if(nowX === 0 && nowY === 0) {
	                // jumping happens
	                movedX = movedY = 0;
	              }
	              else {
	                oriX = nowX;
	                oriY = nowY;
	              };

	              // console.log(movedX, movedY);
	              var idx = ParamsManage.getIndexById(_this.id);
	              if(className.indexOf('top-left') !== -1) {
	                // need to dispatch move as well
	                // top left handle, fix moved value by X

	                var fixedMovedY = movedX * currentCanvas.params[idx].height / currentCanvas.params[idx].width;
	                _this.$dispatch('dispatchMove', { x: movedX, y: fixedMovedY });
	                _this.$dispatch('dispatchScale', { width: -1 * movedX, height: -1 * fixedMovedY });
	              }
	              else if(className.indexOf('top-right') !== -1) {
	                // need to dispatch move as well
	                // top left handle, fix moved value by X
	                var fixedMovedY = movedX * currentCanvas.params[idx].height / currentCanvas.params[idx].width;
	                _this.$dispatch('dispatchMove', { x: 0, y: -1 * fixedMovedY });
	                _this.$dispatch('dispatchScale', { width: movedX, height: fixedMovedY });
	              }
	              else if(className.indexOf('bottom-left') !== -1) {
	                // need to dispatch move as well
	                // top left handle, fix moved value by X
	                var fixedMovedY = movedX * currentCanvas.params[idx].height / currentCanvas.params[idx].width;
	                _this.$dispatch('dispatchMove', { x: movedX, y: 0 });
	                _this.$dispatch('dispatchScale', { width: -1 * movedX, height: -1 * fixedMovedY });
	              }
	              else if(className.indexOf('bottom-right') !== -1) {
	                // only resize
	                // bottom right handle, fix moved value by X
	                var fixedMovedY = movedX * currentCanvas.params[idx].height / currentCanvas.params[idx].width;
	                _this.$dispatch('dispatchScale', { width: movedX, height: fixedMovedY });
	              };
	              Store.operateMode = 'scale';
	            }

	            cornerMouseUp=function(ev){
	              ev.preventDefault();
	              document.removeEventListener('mousemove',cornerMouseMove);
	              document.removeEventListener('mouseup',cornerMouseUp);
	              nowX = ev.screenX || 0;
	              nowY = ev.screenY || 0;
	              var movedX = nowX - oriX,
	                  movedY = nowY - oriY;
	              // value fix for jumping drag...
	              if(nowX === 0 && nowY === 0) {
	                // jumping happens
	                movedX = movedY = 0;
	              }
	              else {
	                oriX = nowX;
	                oriY = nowY;
	              };

	              // console.log(movedX, movedY);
	              var idx = ParamsManage.getIndexById(_this.id);
	              if(className.indexOf('top-left') !== -1) {
	                // need to dispatch move as well
	                // top left handle, fix moved value by X
	                var fixedMovedY = movedX * currentCanvas.params[idx].height / currentCanvas.params[idx].width;
	                _this.$dispatch('dispatchMove', { x: movedX, y: fixedMovedY });
	                _this.$dispatch('dispatchScaleEnd', { width: -1 * movedX, height: -1 * fixedMovedY });
	              }
	              else if(className.indexOf('top-right') !== -1) {
	                // need to dispatch move as well
	                // top left handle, fix moved value by X
	                var fixedMovedY = movedX * currentCanvas.params[idx].height / currentCanvas.params[idx].width;
	                _this.$dispatch('dispatchMove', { x: 0, y: -1 * fixedMovedY });
	                _this.$dispatch('dispatchScaleEnd', { width: movedX, height: fixedMovedY });
	              }
	              else if(className.indexOf('bottom-left') !== -1) {
	                // need to dispatch move as well
	                // top left handle, fix moved value by X
	                var fixedMovedY = movedX * currentCanvas.params[idx].height / currentCanvas.params[idx].width;
	                _this.$dispatch('dispatchMove', { x: movedX, y: 0 });
	                _this.$dispatch('dispatchScaleEnd', { width: -1 * movedX, height: -1 * fixedMovedY });
	              }
	              else if(className.indexOf('bottom-right') !== -1) {
	                // only resize
	                // bottom right handle, fix moved value by X
	                var fixedMovedY = movedX * currentCanvas.params[idx].height / currentCanvas.params[idx].width;
	                _this.$dispatch('dispatchScaleEnd', { width: movedX, height: fixedMovedY });
	              };
	              Store.operateMode = 'idle';
	            }
	            document.addEventListener('mousemove',cornerMouseMove);
	            document.addEventListener('mouseup',cornerMouseUp);
	          };

	          item.onclick = function(ev) {
	            ev.stopPropagation();
	            console.log('cornerClick', ev);
	            _this.$dispatch('dispatchCornerClick');
	          };
	        };
	      };
	    },

	    bindSideEvents: function(pageIdx, id,main) {
	      if(id != null) {
	        var _this = this;
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	        var handle = document.getElementById('handles-' + pageIdx + id + main),
	            sides = handle.querySelectorAll('.handle-side');

	        var oriX, oriY, nowX, nowY;
	        var sideMouseMove,sideMouseUp;

	        for(var i in sides) {
	          var item = sides[i];

	          item.onmousedown = function(ev) {
	            ev.preventDefault();
	            ev.stopPropagation();
	            var className=ev.target.className;
	            oriX = ev.screenX || 0;
	            oriY = ev.screenY || 0;

	            Store.operateMode = 'scale';
	            _this.$dispatch('dispatchScaleStart');

	            sideMouseMove=function(ev){
	              ev.preventDefault();
	              nowX = ev.screenX || 0;
	              nowY = ev.screenY || 0;
	              var movedX = nowX - oriX,
	                  movedY = nowY - oriY;
	              // value fix for jumping drag...
	              if(nowX === 0 && nowY === 0) {
	                // jumping happens
	                movedX = movedY = 0;
	              }
	              else {
	                oriX = nowX;
	                oriY = nowY;
	              };

	              // console.log('moved:', movedX, movedY);

	              if(className.indexOf('top') !== -1) {
	                // need to dispatch move as well
	                // top side handle, fix moved value by Y
	                var fixedMovedX = 0;
	                _this.$dispatch('dispatchMove', { x: fixedMovedX, y: movedY })
	                _this.$dispatch('dispatchScale', { width: -1 * fixedMovedX, height: -1 * movedY })
	              }
	              else if(className.indexOf('left') !== -1) {
	                // need to dispatch move as well
	                // top side handle, fix moved value by X
	                var fixedMovedY = 0;
	                _this.$dispatch('dispatchMove', { x: movedX, y: fixedMovedY })
	                _this.$dispatch('dispatchScale', { width: -1 * movedX, height: -1 * fixedMovedY })
	              }
	              else if(className.indexOf('right') !== -1) {
	                // only resize
	                // right side handle, fix moved value by X
	                var fixedMovedY = 0;
	                _this.$dispatch('dispatchScale', { width: movedX, height: fixedMovedY })
	              }
	              else if(className.indexOf('bottom') !== -1) {
	                // bottom side handle, fix moved value by Y
	                var fixedMovedX = 0;
	                // console.log('dispatch', fixedMovedX, movedY);
	                _this.$dispatch('dispatchScale', { width: fixedMovedX, height: movedY })
	              };
	              Store.operateMode = 'scale';
	            }

	            sideMouseUp=function(ev){
	              ev.preventDefault();
	              document.removeEventListener('mousemove',sideMouseMove);
	              document.removeEventListener('mouseup',sideMouseUp);
	              nowX = ev.screenX || 0;
	              nowY = ev.screenY || 0;
	              var movedX = nowX - oriX,
	                  movedY = nowY - oriY;
	              // value fix for jumping drag...
	              if(nowX === 0 && nowY === 0) {
	                // jumping happens
	                movedX = movedY = 0;
	              }
	              else {
	                oriX = nowX;
	                oriY = nowY;
	              };

	              // console.log('moved:', movedX, movedY);

	              if(className.indexOf('top') !== -1) {
	                // need to dispatch move as well
	                // top side handle, fix moved value by Y
	                var fixedMovedX = 0;
	                _this.$dispatch('dispatchMove', { x: fixedMovedX, y: movedY })
	                _this.$dispatch('dispatchScaleEnd', { width: -1 * fixedMovedX, height: -1 * movedY })
	              }
	              else if(className.indexOf('left') !== -1) {
	                // need to dispatch move as well
	                // top side handle, fix moved value by X
	                var fixedMovedY = 0;
	                _this.$dispatch('dispatchMove', { x: movedX, y: fixedMovedY })
	                _this.$dispatch('dispatchScaleEnd', { width: -1 * movedX, height: -1 * fixedMovedY })
	              }
	              else if(className.indexOf('right') !== -1) {
	                // only resize
	                // right side handle, fix moved value by X
	                var fixedMovedY = 0;
	                _this.$dispatch('dispatchScaleEnd', { width: movedX, height: fixedMovedY })
	              }
	              else if(className.indexOf('bottom') !== -1) {
	                // bottom side handle, fix moved value by Y
	                var fixedMovedX = 0;
	                // console.log('dispatch', fixedMovedX, movedY);
	                _this.$dispatch('dispatchScaleEnd', { width: fixedMovedX, height: movedY })
	              };
	              Store.operateMode = 'idle';
	            }
	            document.addEventListener('mousemove',sideMouseMove);
	            document.addEventListener('mouseup',sideMouseUp);

	          };

	          item.onclick = function(ev) {
	            ev.stopPropagation();
	            console.log('sideClick', ev);
	            _this.$dispatch('dispatchSideClick');
	          };
	        };
	      };
	    },


	  },
	  ready: function() {
	    var _this = this;
	    this.bindHandleEvents(this.pagedd, this.id, this.main);

	    _this.$watch('pagedd', function() {
	        this.bindHandleEvents(this.pagedd, this.id, this.main);
	    });

	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {var ParamsManage = __webpack_require__(26);
	// component -- bar

	module.exports = {
	  template: '<div class="box-bar"  v-bind:style="{left: boxLeft + \'px\', top: boxTop + \'px\', zIndex: windowZindex }" style="width:122px;">' +
	              '<!-- image bars -->' +
	              // '<span class="button" v-show="type === \'image\'" v-on:click="handleRotate(-90)" title="Rotate left" style="display: inline-block;width: 35px; height: 30px; margin-right: 1px; border-top-left-radius: 15px;border-bottom-left-radius: 15px;">' +
	              //   '<img draggable="false" src="../../static/img/bar-rotate-left.png" alt="RF" style="width: 20px; height: 20px; margin-top: 5px; margin-left: 3px;" />' +
	              // '</span>' +
	               '<span class="button" v-show="type === \'image\' && hasImage" v-on:click="handleEditImage()" title="Click to Edit image" style="display: inline-block;width:100%; height: 26px;line-height: 26px;padding-left: 8px;text-align:left;font-size:12px;border-radius: 5px 5px 0 0;">' +
	                'Edit Image'+
	                // '<img draggable="false" src="../../static/img/bar-crop.png" alt="CR" style="width: 20px; height: 20px; margin-top: 5px; margin-left: 3px;" />' +
	              '</span>' +
	              '<span class="button" v-show="type === \'image\' && hasImage" v-on:click="handleRotate(90)" title="Rotate image" style="display: inline-block;width:100%; height: 26px;line-height: 26px;padding-left: 8px;text-align:left;font-size:12px;border-top: 1px solid #7b7b7b;">' +
	                'Rotate Image' +
	                // '<img draggable="false" src="../../static/img/bar-rotate-right.png" alt="RR" style="width: 20px; height: 20px; margin-top: 5px;" />' +
	              '</span>' +
	              // '<span class="button" v-show="type === \'image\'" v-on:click="handleHCenterImage()" title="Move To Center" style="display: inline-block;width: 30px; height: 30px; margin-right: 1px;">' +
	              //   '<img draggable="false" src="../../static/img/bar-aligncenter.png" alt="AC" style="width: 20px; height: 20px; margin-top: 5px;" />' +
	              // '</span>' +
	              // '<span class="button"  v-show="type === \'image\'" v-on:click.stop="handleLayer()" title="Layer" style="display: inline-block;width: 30px; height: 30px; margin-right: 1px;">' +
	              //   '<img draggable="false" src="../../static/img/bar-layer.png" alt="LAYER" style="width: 20px; height: 20px; margin-top: 5px;" />' +
	              // '</span>' +
	              '<span class="button" v-show="type === \'image\' && hasImage" v-on:click="handleRemoveImage()" title="Delete image or layer" style="display: inline-block;width: 100%; height: 26px;padding-left: 8px;line-height: 26px;text-align:left;font-size:12px;border-radius: 0 0 5px 5px;border-top: 1px solid #7b7b7b;">' +
	                'Remove Image' +
	                // '<img draggable="false" src="../../static/img/bar-delete.png" alt="DEL" style="width: 20px; height: 20px; margin-top: 5px; margin-right: 3px;" />' +
	              '</span>' +
	              // '<!-- text bars -->' +
	              // '<span class="button" v-show="type === \'text\'" v-on:click="handleEditText()" title="Edit" style="display: inline-block;width: 35px; height: 30px; margin-right: 1px; border-top-left-radius: 15px;border-bottom-left-radius: 15px;">' +
	              //   '<img draggable="false" src="../../static/img/bar-edit.png" alt="ET" style="width: 20px; height: 20px; margin-top: 5px; margin-left: 3px;" />' +
	              // '</span>' +
	              // '<span class="button" v-show="type === \'text\'" v-on:click="handleHCenterText()" title="Move To Center" style="display: inline-block;width: 30px; height: 30px; margin-right: 1px;">' +
	              //   '<img draggable="false" src="../../static/img/bar-aligncenter.png" alt="AC" style="width: 20px; height: 20px; margin-top: 5px;" />' +
	              // '</span>' +
	              // '<span class="button" v-show="type === \'text\'" v-on:click.stop="handleLayer()" title="layer" style="display: inline-block;width: 30px; height: 30px; margin-right: 1px;">' +
	              //   '<img draggable="false" src="../../static/img/bar-layer.png" alt="LAYER" style="width: 20px; height: 20px; margin-top: 5px;" />' +
	              // '</span>' +
	              // '<span class="button" v-show="type === \'text\'" v-on:click="handleRemoveText()" title="Remove" style="display: inline-block;width: 35px; height: 30px; margin-right: 1px; border-top-right-radius: 15px;border-bottom-right-radius: 15px;">' +
	              //   '<img draggable="false" src="../../static/img/bar-delete.png" alt="DEL" style="width: 20px; height: 20px; margin-top: 5px; margin-right: 3px;" />' +
	              // '</span>' +
	              // '<subbar-panel v-bind:idx="idx"></subbar-panel>' +
	            '</div>',
	  data: function() {
	    return {
	      // boxWidth: 165,
	      boxHeight: 30,
	      id : 0,
	      sharedStore : Store
	    };
	  },
	  computed: {
	    boxWidth: function() {
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	      if(currentCanvas.params[currentCanvas.selectedIdx].elType === 'image') {
	        return 134;
	      }
	      else if(currentCanvas.params[currentCanvas.selectedIdx].elType === 'text') {
	        return 105;
	      }
	      else {
	        return 0;
	      };
	    },

	    idx : function(){
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	      return currentCanvas.selectedIdx;
	    },

	    hasImage : function(){
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

	      if(currentCanvas.params[this.idx].imageId) {
	        return true;
	      }
	      else {
	        return false;
	      };
	    },

	    boxLeft: function() {
	      // var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	      //     idx = currentCanvas.selectedIdx,
	      //     parentEl = currentCanvas.params[idx];
	      // this.width = parentEl.width * currentCanvas.ratio;
	      // var extendSize = -1 * (this.width - this.boxWidth) / 2;

	      // if((parentEl.x * currentCanvas.ratio - extendSize) < 0) {
	      //   // over left side
	      //   // return (this.width - this.boxWidth) / 2 + Math.abs(parentEl.x * currentCanvas.ratio - extendSize);
	      //   return 4;
	      // }
	      // else if((parentEl.x * currentCanvas.ratio + this.width + extendSize) > currentCanvas.width) {
	      //   // over right side
	      //   // return (this.width - this.boxWidth) / 2 - Math.abs(parentEl.x * currentCanvas.ratio + this.width + extendSize - currentCanvas.width);
	      //   var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	      //   return currentCanvas.width - this.boxWidth - 4;
	      // }
	      // else {
	      //   // normal case
	      //   return (this.width - this.boxWidth) / 2 + parentEl.x * currentCanvas.ratio;
	      // };

	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	          idx = currentCanvas.selectedIdx,
	          parentEl = currentCanvas.params[idx],
	          ProjectManage = __webpack_require__(19);
	          var ratio = this.sharedStore.barPosition.ratio;

	      if(parentEl.x * ratio > this.sharedStore.barPosition.x){
	        return parentEl.x * ratio;

	      }else if(-currentCanvas.x + currentCanvas.oriBgWidth * ratio - 130 < this.sharedStore.barPosition.x){
	        return this.sharedStore.barPosition.x - 130;

	      }else if(currentCanvas.oriWidth * ratio - 130 < this.sharedStore.barPosition.x){
	        return currentCanvas.oriWidth * ratio - 130;

	      }else{
	        return this.sharedStore.barPosition.x;
	      }
	      // return this.sharedStore.barPosition.x;

	    },

	    boxTop: function() {
	      // var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	      //     idx = currentCanvas.selectedIdx,
	      //     parentEl = currentCanvas.params[idx];
	      // this.height = parentEl.height * currentCanvas.ratio;
	      // if((parentEl.y * currentCanvas.ratio + this.height + this.boxHeight + 4) >= (currentCanvas.height - 10)) {
	      //   // cannot show downside bar
	      //   // if(parentEl.y * currentCanvas.ratio > (this.boxHeight + 10)) {
	      //   //   // can show on topside
	      //   //   return (this.height + 4);
	      //   // }
	      //   // else {
	      //     // show bottom as fixed...
	      //     // var hiddenInBottom = parentEl.y * currentCanvas.ratio + this.height - (currentCanvas.height - 10);
	      //     // return hiddenInBottom + 4;
	      //     return currentCanvas.height - this.boxHeight - 4;

	      //     // return (this.height - this.boxHeight) / 2;
	      //   // };
	      // }
	      // else {
	      //   // return (0 - this.boxHeight - 4);
	      //   return parentEl.y * currentCanvas.ratio + parentEl.height * currentCanvas.ratio + 4;
	      // };
	      //
	      //
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	          idx = currentCanvas.selectedIdx,
	          parentEl = currentCanvas.params[idx],
	          ProjectManage = __webpack_require__(19);
	      var ratio = this.sharedStore.barPosition.ratio;

	      if(parentEl.y * ratio > this.sharedStore.barPosition.y){
	        return parentEl.y * ratio;

	      } else if(currentCanvas.oriHeight * ratio - 80 < this.sharedStore.barPosition.y){
	        return this.sharedStore.barPosition.y - 80;

	      }else if(-currentCanvas.oriY * ratio + currentCanvas.oriBgHeight * ratio - 80 < this.sharedStore.barPosition.y){
	        return this.sharedStore.barPosition.y - 80;

	      }else{
	        return this.sharedStore.barPosition.y;
	      }
	    },

	    windowZindex: function() {
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	          elementTotal = currentCanvas.params.length || 0;

	      return (elementTotal + 10) * 100;
	    },

	    type : function(){
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	        return currentCanvas.params[currentCanvas.selectedIdx].elType ? currentCanvas.params[currentCanvas.selectedIdx].elType : '';
	    }
	  },
	  methods: {
	     handleRemoveImage: function() {
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	          idx = currentCanvas.selectedIdx;

	      Store.watchData.removeElementIdx = idx;
	      Store.watchData.removeElementType = 'image';
	      Store.watches.isRemoveElement = true;
	      var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	      __webpack_require__(11)({ev: __webpack_require__(13).ClickRemoveImage,orientation:currentProject.orientation});
	      // Store.vm.$broadcast('notifyDeleteElement', { idx: idx, type: 'image' });
	    },

	    handleRotate: function(nDegree) {
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	          idx = currentCanvas.selectedIdx;

	      Store.vm.$broadcast('notifyRotateImage', { idx: idx, nDegree: nDegree });
	      var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	      __webpack_require__(11)({ev: __webpack_require__(13).ClickRotateImage,orientation:currentProject.orientation});
	    },

	    handleEditImage: function() {
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	          idx = currentCanvas.selectedIdx;

	      Store.watchData.cropImageIdx = idx;
	      Store.watches.isCropThisImage = true;
	      var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	      __webpack_require__(11)({ev: __webpack_require__(13).ClickCropImage,orientation:currentProject.orientation});
	    },
	    handleLayer : function(){
	      this.sharedStore.isEditLayerShow = !this.sharedStore.isEditLayerShow;
	    },
	    handleEditText: function() {
	      Store.watches.isChangeThisText = true;
	    },
	    handleRemoveText: function() {
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	          idx = currentCanvas.selectedIdx;

	      Store.watchData.removeElementIdx = idx;
	      Store.watchData.removeElementType = 'text';
	      Store.watches.isRemoveElement = true;

	      // Store.vm.$broadcast('notifyDeleteElement', { idx: idx, type: 'text' });
	    },

	  },
	  events: {

	  },
	  ready : function(){
	    // if(this.type === 'image') {
	    //     this.boxWidth = 165;
	    //   }
	    //   else if(this.type === 'text') {
	    //     this.boxWidth = 105;
	    //   };
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {module.exports = {
	    /*mixins: [
	            require('CompElementEvent')
	    ],*/
	    template: '<div style="position:absolute; box-sizing: border-box;" @click="changePageIdx" v-bind:style="usedStyle">' +
	                    // '<div v-show="!sharedStore.isPreview && sharedStore.isShowProgress && sharedStore.selectedPageIdx === this.pageIdx" style="position: absolute;z-index:2;left:0;top: 0;width:100%;height:100%;background:#f5f5f5;">'+
	                    '<div v-show="!sharedStore.isPreview && isShowLoading" style="position: absolute;z-index:2;left:0;top: 0;width:100%;height:100%;background:#f5f5f5;">'+
	                            '<img src="assets/img/Loading.gif" width="36px" height="36px" title="uploading" alt="uploading" style="position:absolute;top:50%;left:50%;margin:-18px 0 0 -18px;">' +
	                    '</div>' +
	                    '<img v-bind:src="photoSrc" style="position:absolute;left:0;top:0;opacity:0.2;" v-bind:style="{width: Math.ceil(elementData.width*ratio) + \'px\',height: Math.ceil(elementData.height*ratio) + \'px\'}" v-show="backImgShow" @load="hideLoading" />'+
	                    '<canvas id="photoElementCanvas{{pageIdx}}{{id}}{{extraName}}" style="position:absolute;top:0;left:0;" width="{{width}}" height="{{height}}"></canvas>'+
	                    '<div v-if="extraName && !sharedStore.isPreview"  style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;"  v-show="isShowUploadButton" >' +
	                        '<img src="../../static/img/upload-icon.svg" width="{{uploadIconSize.width}}" height="{{ uploadIconSize.width * 150/181 }}" style="display:block;margin:0 auto;"/>'+
	                        '<span v-show="width > 100" class="add-photo-text font-light" v-show="isClickTipShow">Click to add a photo</span>' +
	                    '</div>' +
	                    '<warntip-element v-bind:id="id" v-bind:pagedd="pageIdx" v-bind:main="extraName" v-if="!sharedStore.isPreview" v-bind:ratio="ratio" v-bind:width="elementData.width*ratio" v-bind:height="elementData.height*ratio" v-bind:x="elementData.x*ratio" v-bind:y="elementData.y*ratio"></warntip-element>'+
	                    /*'<handle v-if="!sharedStore.isPreview"  v-bind:id="id" v-bind:is-Show-Handles="isShowHandle" v-bind:is-Corner-Handles="isCornerHandles" v-bind:is-Side-Handles="isSideHandles"></handle>'+*/
	                    '<handle v-if="!sharedStore.isPreview"  v-bind:pagedd="pageIdx" v-bind:id="id" v-bind:main="extraName" v-bind:is-Show-Handles="isShowHandle" v-bind:is-Corner-Handles="false" v-bind:is-Side-Handles="false"></handle>'+
	                    // '<bar-panel v-if="!sharedStore.isPreview&&isShowHandle" v-bind:id="id" v-bind:width="elementData.width*ratio" v-bind:height="elementData.height*ratio"></bar-panel>' +
	              '</div>',
	    data: function() {
	        return {
	            sharedStore: Store,
	            elementData:Object,
	            ratio:0,
	            id:0,
	            isCornerHandles:true,
	            isSideHandles:true,
	            imageData:null,
	            photoSrc:'',
	            type: 'image',
	            pageIdx: 0,
	            extraName: '',
	            backImgShow:false,
	            isElementHovered: false,
	            isClickTipShow: true,
	            isShowLoading: true
	        };
	    },
	    computed: {
	        isShowHandle:function(){
	             var currentCanvas = Store.pages[this.pageIdx].canvas;
	             if(currentCanvas.selectedIdx===__webpack_require__(26).getIndexById(this.id) && !Store.isLostFocus){
	                return true;
	             }else{
	                return false;
	             }
	        },
	        bgColor:function(){
	            if(this.elementData.imageId || Store.isPreview){
	                return 'rgba(255,255,255,0)';
	            }else{
	                // return '#f5f5f5';
	                return '#fff';
	            }
	        },
	        addPhotoTextFontsize: function(){
	            var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	            var orientation = currentProject.orientation;
	            return orientation === 'Landscape' ? '18px' : '12px';
	        },
	        width : function(){
	            return Math.ceil(this.elementData.width*this.ratio);
	        },

	        height : function(){
	            return Math.ceil(this.elementData.height*this.ratio);
	        },

	        usedStyle: function() {
	          if(this.sharedStore.isPreview) {
	            var borderStyle = '1px solid rgba(255, 255, 255, 0)';
	          }
	          else if(this.isElementHovered){
	            var borderStyle = '1px solid #7b7b7b';
	          }
	          else {
	            var borderStyle = '1px solid #d6d6d6';
	          };

	          return {
	            backgroundColor: this.bgColor,
	            left: this.elementData.x * this.ratio + 'px',
	            top: this.elementData.y * this.ratio + 'px',
	            width: Math.ceil(this.elementData.width * this.ratio) + 'px',
	            height: Math.ceil(this.elementData.height * this.ratio) + 'px',
	            // border: borderStyle,
	            zIndex: (this.elementData.dep + 1) * 100
	          };
	        },

	        isShowUploadButton:function(){
	            if(this.elementData.imageId){
	                return false;
	            }else{
	                return true;
	            }
	        },
	        uploadIconSize:function(){
	            var currentCanvas = Store.pages[this.pageIdx].canvas;
	          /*  var ProjectManage = require("ProjectManage");
	            var baseSize = ProjectManage.getPhonecaseBaseSize();*/
	            var o={};
	            o.width=currentCanvas.oriWidth * this.ratio *0.17;
	            o.height=currentCanvas.oriWidth * this.ratio*0.17;
	            var temp=Math.floor(Math.min(this.elementData.width*this.ratio, this.elementData.height*this.ratio)) - 2;
	            temp < 1 ? temp = 1 : temp;
	            if(o.width>temp){
	                o.width=temp;
	                o.height=temp;
	            }
	            if(o.width<50){
	                o.width=50;
	                o.height=50;
	            }
	            return o;
	        },
	        isClickTipShow: function() {
	            var currentCanvas = Store.pages[this.pageIdx].canvas;
	            return currentCanvas.width > 150;
	        }
	    },
	    methods: {
	        init:function(idx, pageIdx, ratio, extraName){


	            this.pageIdx = pageIdx;
	            this.ratio=ratio;
	            var currentCanvas = Store.pages[this.pageIdx].canvas;
	            this.elementData=currentCanvas.params[idx];
	            this.id=this.elementData.id;
	            this.extraName = extraName;
	            // this.ratio=currentCanvas.ratio;


	        },
	        destroy:function(){

	        },
	        refreshImage:function(url){
	            var _this = this;
	            __webpack_require__(16).clear("photoElementCanvas"+this.pageIdx+this.id+this.extraName);
	            __webpack_require__(16).drawImage("photoElementCanvas"+this.pageIdx+this.id+this.extraName, url, 0, 0,function(){
	                // if(_this.sharedStore.projectSettings[Store.currentSelectProjectIndex].product==="canvas"){
	                   if(_this.sharedStore.selectedPageIdx === _this.pageIdx){
	                        if(_this.extraName) {
	                            _this.sharedStore.isShowProgress = false;
	                            _this.sharedStore.isSwitchLoadingShow = false;
	                        }
	                    } else {
	                        _this.sharedStore.isShowProgress = false;
	                        /*_this.sharedStore.isSwitchLoadingShow = false;*/
	                    }
	                    if(!_this.extraName) {
	                        Store.vm.$broadcast("notifyRefreshItemMirror",_this.pageIdx,_this.ratio);
	                    }
	                    Store.vm.$broadcast("notifyRefreshScreenshot", _this.pageIdx,_this.ratio);
	                    
	                    setTimeout(function(){
	                        Store.vm.$broadcast("notifyRefreshItemMirror",_this.pageIdx,_this.ratio,_this.extraName);
	                    },100);

	                     

	                // }
	            },Math.ceil(this.elementData.width*this.ratio),Math.ceil(this.elementData.height*this.ratio));
	            this.photoSrc=url;

	        },
	        onDragOver:function(){

	        },
	        setCrop:function(){

	            if (Math.abs(this.elementData.imageRotate) === 90) {

	                var cWidth = __webpack_require__(25).getImageDetail(this.elementData.imageId).height,
	                    cHeight = __webpack_require__(25).getImageDetail(this.elementData.imageId).width;
	            } else {
	                var cWidth = __webpack_require__(25).getImageDetail(this.elementData.imageId).width,
	                    cHeight = __webpack_require__(25).getImageDetail(this.elementData.imageId).height;
	            };

	            var cropPX = this.elementData.cropPX;
	            var cropPY = this.elementData.cropPY;
	            var cropPW = this.elementData.cropPW;
	            var cropPH = this.elementData.cropPH;
	            //console.log(this.elementData.cropPX,this.elementData.cropPY,this.elementData.cropPW,this.elementData.cropPH);
	            var width = this.elementData.width;
	            var height = this.elementData.height;
	            var cropLUX = cropPX;
	            var cropRLX = cropPX + cropPW;
	            var cropLUY = cropPY;
	            var cropRLY = cropPY + cropPH;
	            var viewRatio = height / width;
	            var photoImageW = cWidth;
	            var photoImageH = cHeight;
	            var oldHWAspectRatio = (cropRLY - cropLUY) / (cropRLX - cropLUX);
	            var cropCenterX = cropLUX + (cropRLX - cropLUX) / 2;
	            var cropCenterY = cropLUY + (cropRLY - cropLUY) / 2;
	            var oldCropX = cropLUX * photoImageW;
	            var oldCropY = cropLUY * photoImageH;
	            var oldCropW = (cropRLX - cropLUX) * photoImageW;
	            var oldCropH = (cropRLY - cropLUY) * photoImageH;
	            var oldCropCenterX = cropCenterX * photoImageW;
	            var oldCropCenterY = cropCenterY * photoImageH;

	            var cropUnitsPercentX = (cropRLX - cropLUX) * photoImageW / width;
	            var cropUnitsPercentY = (cropRLY - cropLUY) * photoImageH / height;

	            var newCropW = width * cropUnitsPercentX;
	            var newCropH = height * cropUnitsPercentY;
	            if(newCropW > photoImageW){
	                newCropW = photoImageW;
	            }
	            if(newCropH > photoImageH){
	                newCropH = photoImageH;
	            }

	            var resultX;
	            var resultY;
	            var resultW;
	            var resultH;
	            if(newCropW * viewRatio > newCropH){
	                resultH = newCropH;
	                resultW = newCropH / viewRatio;
	            }else{
	                resultW = newCropW;
	                resultH = newCropW * viewRatio;
	            }

	            resultX = oldCropCenterX - resultW/2;
	            resultX = resultX > 0 ? resultX : 0;
	            if(resultX + resultW > photoImageW){
	                resultX = resultX - (resultX + resultW - photoImageW);
	                resultX = resultX > 0 ? resultX : 0;
	            }

	            resultY = oldCropCenterY - resultH/2;
	            resultY = resultY > 0 ? resultY : 0;
	            if(resultY + resultH > photoImageH){
	                resultY = resultY - (resultY + resultH - photoImageH);
	                resultY = resultY > 0 ? resultY : 0;
	            }

	            this.elementData.cropPX=resultX / photoImageW|| 0;
	            this.elementData.cropPY=resultY / photoImageH|| 0;
	            this.elementData.cropPW=resultW / photoImageW|| 1;
	            this.elementData.cropPH=resultH / photoImageH|| 1;

	            //console.log(this.elementData.cropPX,this.elementData.cropPY,this.elementData.cropPW,this.elementData.cropPH);
	        },
	        setIndex:function(){
	            var currentCanvas = Store.pages[this.pageIdx].canvas;
	            currentCanvas.selectedIdx=__webpack_require__(26).getIndexById(this.id);

	            Store.isLostFocus = false;

	            // console.log("dispatchDepthFront");
	            // Store.watchData.changeDepthIdx=require("ParamsManage").getIndexById(this.id);
	            // Store.watches.isChangeDepthFront=true;

	        },
	        refreshImageById:function(imageId){
	            //console.log("refreshImageById",imageId);
	            Store.dropData.isBg=false;
	            Store.dropData.newAdded=false;
	            Store.dropData.idx=__webpack_require__(26).getIndexById(this.id);
	            Store.watches.isOnDrop=true;
	            /*this.elementData.imageId=imageId;
	            this.setCrop();
	            this.refreshImage(require("ParamsManage").getCropImageUrl(require("ParamsManage").getIndexById(this.id)));*/

	        },

	        cacuBarPosition : function(oParams){
	            var currentCanvas = Store.pages[this.pageIdx].canvas,
	                idx = __webpack_require__(26).getIndexById(oParams.id),
	                el = currentCanvas.params[idx];
	            // 为了让第二次点击可以触发 编辑图片的选项，向左和向上偏移两个像素。
	            this.sharedStore.barPosition.x = el.x * this.ratio + oParams.x - 2;
	            this.sharedStore.barPosition.y = el.y * this.ratio + oParams.y - 2;
	            this.sharedStore.barPosition.ratio = this.ratio;

	        },
	        setImageById:function(imageId){
	            var currentCanvas = Store.pages[this.pageIdx].canvas;
	            var idx = currentCanvas.selectedIdx;
	            Store.dropData.isBg=false;
	            Store.dropData.newAdded=false;
	            Store.dragData.imageId=imageId;
	            Store.dragData.sourceImageUrl=currentCanvas.params[idx].url;
	            Store.dropData.idx=__webpack_require__(26).getIndexById(this.id);
	            //Store.watches.isOnDrop=true;
	        },
	        changePageIdx: function(){
	            if(!this.extraName){
	                this.sharedStore.selectedPageIdx = this.pageIdx;
	                this.sharedStore.currentSelectProjectIndex = this.pageIdx;
	                __webpack_require__(11)({ev: __webpack_require__(13).SwitchBlocksByNav});
	            }
	        },
	        hideLoading: function() {
	            this.isShowLoading = false;
	        }
	    },
	    events: {

	        refreshHandler:function(url){
	            this.refreshImage(__webpack_require__(26).getCropImageUrl(__webpack_require__(26).getIndexById(this.id,this.pageIdx)));
	        },
	        /*dispatchScaleEnd:function(data){
	            this.backImgShow=false;
	            var width=this.elementData.width+data.width/this.ratio;
	            if(width>=300){
	                this.elementData.width+=data.width/this.ratio;
	            }
	            var height=this.elementData.height+data.height/this.ratio;
	            if(height>=300){
	                this.elementData.height+=data.height/this.ratio;
	            }

	            this.setCrop();
	            this.refreshImage(require("ParamsManage").getCropImageUrl(require("ParamsManage").getIndexById(this.id)));
	        },*/
	        /*dispatchScaleStart:function(){
	             this.setIndex();
	             require("DrawManage").clear("photoElementCanvas"+this.id);
	             this.backImgShow=true;
	             //this.imageData=require("DrawManage").getImageData("photoElementCanvas"+this.id);
	        },*/
	        dispatchClick:function(oParams){
	            /*if(!this.extraName){
	                this.sharedStore.selectedPageIdx = this.pageIdx;
	                this.sharedStore.currentSelectProjectIndex = this.pageIdx;
	                return;
	            }*/
	            this.setIndex();
	            this.cacuBarPosition(oParams);
	            this.sharedStore.isEditLayerShow = false;
	            if(this.isShowUploadButton){
	                __webpack_require__(11)({ev: __webpack_require__(13).ClickCloudUploadImage});
	                Store.watchData.replacePageId=this.pageIdx;
	                Store.vm.$broadcast("notifyTriggerImageUpload");
	            }
	            // if(this.sharedStore.projectSettings[Store.currentSelectProjectIndex].product==="canvas"){
	                // Store.vm.$dispatch("dispatchRefreshScreenshot");
	            // }
	        },
	        /*dispatchMove:function(data){
	            this.setIndex();
	            // if(this.sharedStore.projectSettings[Store.currentSelectProjectIndex].product==="canvas"){
	                Store.vm.$dispatch("dispatchRefreshScreenshot");
	            // }
	        },*/
	        dispatchDblClick:function(){
	            this.sharedStore.selectedPageIdx = this.pageIdx;
	            this.sharedStore.currentSelectProjectIndex = this.pageIdx;

	            setTimeout(function() {
	                var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	                idx = currentCanvas.selectedIdx;
	          
	                Store.watchData.cropImageIdx = idx;
	                Store.watches.isCropThisImage = true;
	                var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	                __webpack_require__(11)({ev: __webpack_require__(13).ClickCropImage,orientation:currentProject.orientation});
	            });

	            // console.log("dispatchDblClick");
	            // Store.watchData.cropImageIdx=require("ParamsManage").getIndexById(this.id);
	            // Store.watches.isCropThisImage = true;
	        },
	        dispatchDrop:function(event){
	            //console.log(event);
	            //console.log(Store.dragData);
	            if(this.elementData.imageId){
	                Store.dropData.idx=__webpack_require__(26).getIndexById(this.id);
	                Store.watches.isReplaceImage=true;
	                //Store.vm.$broadcast('notifyAddOrReplaceImage',{id:event.id,x:event.x+this.elementData.x*this.ratio,y:event.y+this.elementData.y*this.ratio});

	                this.refreshImageById(Store.dropData.imageId);
	            }else{
	                Store.dropData.isBg=false;
	                Store.dropData.newAdded=false;
	                Store.dropData.idx=__webpack_require__(26).getIndexById(this.id);
	                Store.watches.isOnDrop=true;
	                /*this.elementData.imageId=Store.dragData.imageId;
	                this.setCrop();
	                this.refreshImage(require("ParamsManage").getCropImageUrl(require("ParamsManage").getIndexById(this.id)));*/
	            }

	        },
	        /*dispatchScale:function(data){

	            var width=this.elementData.width+data.width/this.ratio;
	            if(width>=300){
	                this.elementData.width+=data.width/this.ratio;
	            }
	            var height=this.elementData.height+data.height/this.ratio;
	            if(height>=300){
	                this.elementData.height+=data.height/this.ratio;
	            }


	        }*/

	        dispatchMouseOver: function() {
	          this.isElementHovered = true;
	        },

	        dispatchMouseOut: function() {
	          this.isElementHovered = false;
	        },
	    },
	    created:function(){
	    },
	    ready:function(){

	        var _this=this;
	        if(this.elementData.imageId){
	            this.refreshImage(__webpack_require__(26).getCropImageUrl(__webpack_require__(26).getIndexById(this.id,this.pageIdx), this.pageIdx, this.ratio));
	        }else{
	            setTimeout(function(){
	                _this.sharedStore.isSwitchLoadingShow = false;
	            },300)
	        }
	        this.$watch('elementData.isRefresh',function(){
	            if(_this.elementData.isRefresh){
	                // 下面的列表中接收不到这个变量的变化，直接通知刷新下方列表中的 container。
	                _this.sharedStore.pages[_this.pageIdx].canvas.pageItems[0].handleRepaint();
	                console.log("refreshUrl");
	                if(_this.pageIdx === _this.sharedStore.selectedPageIdx) {
	                    _this.refreshImage(__webpack_require__(26).getCropImageUrl(__webpack_require__(26).getIndexById(_this.id,_this.pageIdx), _this.pageIdx, _this.ratio));
	                }
	                // _this.elementData.isRefresh=false;
	                setTimeout(function(){
	                    _this.elementData.isRefresh=false;
	                },100);
	            }
	        })
	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {var UtilMath = __webpack_require__(7);
	module.exports = {
	    mixins: [
	            __webpack_require__(56)
	    ],
	    template: '<div style="position:absolute;cursor:move;" v-bind:style="{left:elementData.x*ratio + \'px\',zIndex: ( elementData.dep + 1 ) * 100, top:elementData.y*ratio + \'px\',width: elementData.width*ratio + \'px\',height:elementData.height*ratio + \'px\'}">' +
	                '<canvas id="textElementCanvas{{id}}" width="{{elementData.width*ratio}}px" height="{{elementData.height*ratio}}px" style="position:absolute;top:0;left:0;"></canvas>'+
	                '<img v-bind:src="textSrc" style="position:absolute;left:0;top:0;"v-bind:style="{width: elementData.width*ratio + \'px\',height:elementData.height*ratio + \'px\'}" v-show="backImgShow" />'+
	                '<handle v-if="!sharedStore.isPreview" v-bind:id="id" v-bind:is-Show-Handles="isShowHandle" v-bind:is-Corner-Handles="isCornerHandles" v-bind:is-Side-Handles="isSideHandles"></handle>'+


	            '</div>',
	    data: function() {
	        return {
	            privateStore: {},
	            sharedStore: Store,
	            elementData:Object,
	            ratio : 0,
	            lastSize : 0,
	            fontRatio : 0,
	            textSrc : '',
	            limitHeight : [],
	            limitSize : [],
	            allow : true,
	            backImgShow : false,
	            isCornerHandles:true,
	            isSideHandles:false,
	            imageRatio : 0,
	            type:'text',
	            id:0
	        };
	    },
	    computed: {
	        isShowHandle:function(){
	             var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	             if(currentCanvas.selectedIdx === __webpack_require__(26).getIndexById(this.id) && !Store.isLostFocus){
	                return true;
	             }else{
	                return false;
	             }
	        }
	    },
	    methods: {
	        init:function(idx){
	            var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	            this.elementData=currentCanvas.params[idx];
	            this.ratio=currentCanvas.ratio;
	            this.id=this.elementData.id;
	            this.lastSize = Math.round(UtilMath.getTextViewFontSize(currentCanvas.params[idx].fontSize));
	        },
	        destroy:function(){

	        },
	        refreshText:function(){
	            var img=new Image(),
	                _this = this,
	                url = _this.getTextImageUrl()
	                currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	            img.src = url;
	            img.onload = function ()
	            {
	                _this.elementData.width = this.width;
	                _this.elementData.height = this.height;
	                _this.imageRatio = this.width / this.height;
	                currentCanvas.params[__webpack_require__(26).getIndexById(_this.id)].width = this.width/_this.ratio;
	                currentCanvas.params[__webpack_require__(26).getIndexById(_this.id)].height = this.height/_this.ratio;
	                if(!_this.fontRatio){
	                    _this.fontRatio = currentCanvas.params[__webpack_require__(26).getIndexById(_this.id)].height / Math.round(UtilMath.getTextViewFontSize(currentCanvas.params[__webpack_require__(26).getIndexById(_this.id)].fontSize));
	                }
	                if(!_this.limitHeight.length){
	                    _this.limitHeight.push(_this.limitSize[0]*_this.fontRatio);
	                    _this.limitHeight.push(_this.limitSize[1]*_this.fontRatio);
	                }
	                __webpack_require__(16).drawImage("textElementCanvas"+ (_this.id), url, 0, 0,null,this.width,this.height);
	            }
	            _this.textSrc = url;
	        },
	        getTextImageUrl : function(){
	            var idx = __webpack_require__(26).getIndexById(this.id),
	                currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	                fontUrl = '../../static/img/blank.png',
	                fontViewSize = 0,
	                size = 0;
	            size = Math.round(__webpack_require__(7).getTextViewFontSize(currentCanvas.params[idx].fontSize));
	            if(!this.fontRatio || this.lastSize !== size || !this.allow){
	                fontViewSize = size;
	                this.allow = true;
	            }else{
	                currentCanvas.params[idx].fontSize = (this.elementData.height / this.fontRatio) / this.ratio;
	                fontViewSize = Math.round(__webpack_require__(7).getTextViewFontSize(currentCanvas.params[idx].fontSize));
	            }
	            this.lastSize = fontViewSize;
	            if(fontViewSize>0){
	                if(currentCanvas.params[idx].text===''){
	                    if(Store.isPreview) {
	                        fontUrl = '../../static/img/blank.png';
	                    }
	                    else {
	                        fontUrl = Store.domains.productBaseUrl+"/product/text/textImage?text="+encodeURIComponent('Enter text here')+"&font="+encodeURIComponent(currentCanvas.params[idx].fontFamily)+"&fontSize="+fontViewSize+"&color="+currentCanvas.params[idx].fontColor+"&align=left";
	                    }
	                }else{
	                    fontUrl = Store.domains.productBaseUrl+"/product/text/textImage?text="+encodeURIComponent(currentCanvas.params[idx].text)+"&font="+encodeURIComponent(currentCanvas.params[idx].fontFamily)+"&fontSize="+fontViewSize+"&color="+currentCanvas.params[idx].fontColor+"&align=left";
	                }
	            }
	            return fontUrl;
	        },
	        onDoubleClick:function(event){

	        },
	        onDragOver:function(){

	        },
	        setIndex:function(){
	            var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	            currentCanvas.selectedIdx = __webpack_require__(26).getIndexById(this.id);

	            Store.isLostFocus = false;

	            Store.watchData.changeDepthIdx=__webpack_require__(26).getIndexById(this.id);
	            Store.watches.isChangeDepthFront=true;
	        },
	        getlimitHeight : function(){

	        },
	        setLimitSize : function(){
	            var minSize = UtilMath.getTextViewFontSize(UtilMath.getPxByInch(0.3)),
	                maxSize = UtilMath.getTextViewFontSize(UtilMath.getPxByInch(16));
	            this.limitSize.push(minSize)
	            this.limitSize.push(maxSize)
	        }
	    },
	    events: {
	        dispatchRefresh : function(){
	            this.refreshText();
	        },
	         dispatchScaleEnd:function(data){
	            var curWidth = this.elementData.width + data.width/this.ratio,
	                curHeight = this.elementData.height + data.height/this.ratio;
	            // console.log(curHeight,this.limitHeight)
	            if(curHeight<=this.limitHeight[0]){
	                this.elementData.width = this.limitHeight[0] * this.imageRatio;
	                this.elementData.height = this.limitHeight[0];
	            }else if(curHeight>=this.limitHeight[1]){
	                this.elementData.width = this.limitHeight[1] * this.imageRatio;
	                this.elementData.height = this.limitHeight[1];
	            }else{
	                this.elementData.width = curWidth;
	                this.elementData.height = curHeight;
	            }
	            this.refreshText();
	            this.backImgShow = false;
	        },
	        dispatchScaleStart:function(){
	            this.setIndex();
	             __webpack_require__(16).clear("textElementCanvas"+this.id);
	             this.backImgShow = true;
	        },
	        dispatchClick : function(){
	            this.setIndex();
	        },
	        dispatchMove:function(data){
	            this.setIndex();
	            Store.vm.$broadcast("notifyRefreshScreenshot");
	        },
	        dispatchDblClick : function(){
	            this.sharedStore.watches.isChangeThisText = true;
	        },
	        dispatchScale : function(data){
	            var curWidth = this.elementData.width + data.width/this.ratio,
	                curHeight = this.elementData.height + data.height/this.ratio;
	            // console.log(curHeight,this.limitHeight)
	            if(curHeight<=this.limitHeight[0]){
	                this.elementData.width = this.limitHeight[0] * this.imageRatio;
	                this.elementData.height = this.limitHeight[0];
	            }else if(curHeight>=this.limitHeight[1]){
	                this.elementData.width = this.limitHeight[1] * this.imageRatio;
	                this.elementData.height = this.limitHeight[1];
	            }else{
	                this.elementData.width = curWidth;
	                this.elementData.height = curHeight;
	            }
	        }
	    },
	    created:function(){
	    },
	    ready:function(){
	        this.setLimitSize();
	        this.refreshText();
	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {module.exports = {
	    methods:{
	        fixPosition:function(){
	            var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	            var borderHiddenSize=__webpack_require__(26).getBorderHiddenSize();
	            var top = borderHiddenSize.top;
	            var bottom = borderHiddenSize.bottom;
	            var left = borderHiddenSize.left;
	            var right = borderHiddenSize.right;

	            if(Store.projectSettings[Store.currentSelectProjectIndex].canvasBorder==="image"){

	                if(this.elementData.x*this.ratio+this.elementData.width*this.ratio<left&&this.elementData.y*this.ratio+this.elementData.height*this.ratio<top){
	                    this.elementData.x=0;
	                    this.elementData.y=0;
	                }
	                if(this.elementData.x*this.ratio>currentCanvas.width-right&&this.elementData.y*this.ratio+this.elementData.height*this.ratio<top){
	                    this.elementData.x=currentCanvas.width/this.ratio-this.elementData.width;
	                    this.elementData.y=0;
	                }
	                if(this.elementData.x*this.ratio+this.elementData.width*this.ratio<left&&this.elementData.y*this.ratio>currentCanvas.height-bottom){
	                    this.elementData.x=0;
	                    this.elementData.y=currentCanvas.height/this.ratio-this.elementData.height;
	                }
	                if(this.elementData.x*this.ratio>currentCanvas.width-right&&this.elementData.y*this.ratio>currentCanvas.height-bottom){
	                    this.elementData.x=currentCanvas.width/this.ratio-this.elementData.width;
	                    this.elementData.y=currentCanvas.height/this.ratio-this.elementData.height;
	                }
	                top = 0;
	                bottom = 0;
	                left = 0;
	                right = 0;
	               
	            }
	            if(this.elementData.x*this.ratio<-this.elementData.width*this.ratio+left){
	                this.elementData.x=0;
	                if(this.elementData.y*this.ratio<-this.elementData.height*this.ratio*0.8){
	                    this.elementData.y=0;
	                }
	            }

	            if(this.elementData.y*this.ratio<-this.elementData.height*this.ratio+top){
	                this.elementData.y=0;
	                if(this.elementData.x*this.ratio<-this.elementData.width*this.ratio*0.8){
	                    this.elementData.x=0;
	                }
	            }


	            
	            if(this.elementData.x*this.ratio>currentCanvas.width-right){
	                this.elementData.x=currentCanvas.width/this.ratio-this.elementData.width;
	                if(this.elementData.y*this.ratio>currentCanvas.height*0.8){
	                    this.elementData.y=currentCanvas.height/this.ratio-this.elementData.height;
	                }
	            }
	            if(this.elementData.y*this.ratio>currentCanvas.height-bottom){
	                this.elementData.y=currentCanvas.height/this.ratio-this.elementData.height;
	                if(this.elementData.x*this.ratio>currentCanvas.width*0.8){
	                    this.elementData.x=currentCanvas.width/this.ratio-this.elementData.width;
	                }
	            }
	        }
	    },
		events: {
			
	        dispatchRotate:function(){

	        },
	        dispatchMove:function(data){

	            this.elementData.x+=data.x/this.ratio;
	            this.elementData.y+=data.y/this.ratio;
	        },
	        dispatchDragEnd:function(){
	        	this.fixPosition();
	        },
	        dispatchScaleEnd:function(){
	        	this.fixPosition();
	        },
	        dispatchCornerClick:function(){
	            this.setIndex();
	            Store.isEditLayerShow = false;
	        },
	        dispatchSideClick:function(){
	            this.setIndex();
	            Store.isEditLayerShow = false;
	        }
	        
		}
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {var DrawManage = __webpack_require__(16);
	var ProjectManage = __webpack_require__(19);

	module.exports = {
	  template: '<canvas id="screenshot" v-bind:style="{ left: mirrorLeft + \'px\', top: mirrorTop + \'px\' }" style="display:none;position:absolute;"></canvas>' +
	  '<canvas id="real-screenshot" v-bind:style="{ left: mirrorLeft + \'px\', top: mirrorTop + \'px\' }" style="display:none;position:absolute;"></canvas>',
	  data: function() {
	    return {
	      privateStore : {
	          ratio : 0,
	          timer : null,
	          isInitScreenshotSaved: false,
	          isLocked: false
	      },
	      sharedStore : Store
	    };
	  },
	  computed: {
	      width : function(){
	          var currentCanvas = this.sharedStore.pages[this.sharedStore.selectedPageIdx].canvas;
	          return currentCanvas.bgWidth;
	      },
	      height : function(){
	          var currentCanvas = this.sharedStore.pages[this.sharedStore.selectedPageIdx].canvas;
	          return currentCanvas.bgHeight;
	      },

	      mirrorLeft: function() {
	        var currentCanvas = this.sharedStore.pages[this.sharedStore.selectedPageIdx].canvas;

	        return 0;
	      },

	      mirrorTop: function() {
	        var currentCanvas = this.sharedStore.pages[this.sharedStore.selectedPageIdx].canvas;

	        return 0;
	      }
	  },
	  methods: {
	      createScreenshot : function(pageIdx){
	          var currentCanvas = Store.pages[pageIdx].canvas,
	              params = currentCanvas.params;
	          // this.privateStore.ratio = currentCanvas.ratio;
	          var container = $("#container"+pageIdx+"Main"),screenshot = $("#screenshot").get(0);
	          screenshot.width = container.width();
	          screenshot.height = container.height();
	          params = this.sortByDepth(params.slice(0));
	          this.drawElems(params, pageIdx);
	          this.$dispatch("notifyRefreshItemMirror",pageIdx,currentCanvas.ratio,"Main");
	      },
	      createRealScreenShot : function(pageIdx){
	          var currentCanvas = Store.pages[pageIdx].canvas,
	              params = currentCanvas.params;
	          //this.privateStore.ratio = currentCanvas.ratio;
	          var screenshot = $("#real-screenshot").get(0);
	          screenshot.width = currentCanvas.oriBgWidth * this.privateStore.ratio;
	          screenshot.height = currentCanvas.oriBgHeight * this.privateStore.ratio;
	          params = this.sortByDepth(params.slice(0));
	          DrawManage.drawRect("real-screenshot","#fff",0,0,screenshot.width,screenshot.height);
	          this.drawBackLayer();
	          this.copyScreenshot(pageIdx);
	          if(this.sharedStore.isCanvas){
	            this.draw3DBorder(pageIdx);
	          }
	          this.drawLayer(pageIdx);
	          this.isLocked = false;
	      },
	      refreshScreenshot : function(pageIdx){
	          var pageIdx = pageIdx || 0;
	          DrawManage.clear("screenshot");
	          this.createScreenshot(pageIdx);
	      },
	      sortByDepth : function(arr){
	          return arr.sort(function(a,b){
	              return a.dep > b.dep;
	          });
	      },
	      drawElems : function(params, pageIdx){
	        var currentCanvas = Store.pages[pageIdx].canvas;
	        for(var i=0,len=params.length;i<len;i++){
	            var item = params[i],
	            sourceId = (item.elType==="text"?"textElementCanvas":"photoElementCanvas")+ pageIdx +item.id + 'Main';
	            DrawManage.drawCanvas("screenshot",sourceId,(item.x)*this.privateStore.ratio,(item.y)*this.privateStore.ratio);
	            //DrawManage.drawCanvas("screenshot",sourceId,0,0);
	        }
	      },
	      drawMatte : function(){
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	        DrawManage.drawCanvas("real-screenshot","matting-part",(currentCanvas.foreground.left + currentCanvas.expendSize.left) * currentCanvas.ratio,(currentCanvas.foreground.top + currentCanvas.expendSize.top) * currentCanvas.ratio);
	        /*DrawManage.drawCanvas("real-screenshot","matting-part-up",(currentCanvas.foreground.left + currentCanvas.expendSize.left) * currentCanvas.ratio,(currentCanvas.foreground.top + currentCanvas.expendSize.top) * currentCanvas.ratio);
	        DrawManage.drawCanvas("real-screenshot","matting-part-right",(currentCanvas.oriBgWidth - currentCanvas.foreground.right - currentCanvas.mattingSize.right - currentCanvas.expendSize.right) * currentCanvas.ratio,(currentCanvas.foreground.top + currentCanvas.expendSize.top) * currentCanvas.ratio);
	        DrawManage.drawCanvas("real-screenshot","matting-part-down",(currentCanvas.foreground.left + currentCanvas.expendSize.left) * currentCanvas.ratio,(currentCanvas.oriBgHeight - currentCanvas.foreground.bottom - currentCanvas.mattingSize.bottom - currentCanvas.expendSize.bottom) * currentCanvas.ratio);
	        DrawManage.drawCanvas("real-screenshot","matting-part-left",(currentCanvas.foreground.left + currentCanvas.expendSize.left) * currentCanvas.ratio,(currentCanvas.foreground.top + currentCanvas.expendSize.top) * currentCanvas.ratio);*/
	      },
	      copyScreenshot : function(pageIdx){
	          var currentCanvas = Store.pages[pageIdx].canvas;
	          DrawManage.drawCanvas("real-screenshot","screenshot",currentCanvas.oriX * this.privateStore.ratio ,currentCanvas.oriY * this.privateStore.ratio);
	          //DrawManage.drawCanvas("real-screenshot","photoElementCanvas"+ pageIdx +"0Main",currentCanvas.oriX * this.privateStore.ratio ,currentCanvas.oriY * this.privateStore.ratio);
	      },
	      draw3DBorder : function(pageIdx){
	          var currentCanvas = Store.pages[pageIdx].canvas;
	          if(this.sharedStore.isCanvas){
	            DrawManage.drawCanvas("real-screenshot","mirror-right"+pageIdx+"Main",(currentCanvas.oriX + currentCanvas.oriWidth-currentCanvas.canvasBordeThickness.right-currentCanvas.realBleedings.top) * this.privateStore.ratio, (currentCanvas.oriY-currentCanvas.canvasBordeThickness.top/2+currentCanvas.realBleedings.top/2) * this.privateStore.ratio);
	            DrawManage.drawCanvas("real-screenshot","mirror-top"+pageIdx+"Main",currentCanvas.oriX * this.privateStore.ratio,currentCanvas.oriY * this.privateStore.ratio);
	          }else{
	            DrawManage.drawCanvas("real-screenshot","mirror-right",$("#screenshot").width()+this.mirrorLeft,-this.mirrorLeft/2);
	            DrawManage.drawCanvas("real-screenshot","mirror-top",0,0);
	          }
	      },
	      drawLayer : function(pageIdx){
	        var currentCanvas = this.sharedStore.pages[pageIdx].canvas;
	        DrawManage.drawCanvas("real-screenshot","bg-part"+pageIdx+"Main",0,0,currentCanvas.oriBgWidth * this.privateStore.ratio ,currentCanvas.oriBgHeight * this.privateStore.ratio);
	      },
	      drawBackLayer : function(){
	        var currentCanvas = this.sharedStore.pages[this.sharedStore.selectedPageIdx].canvas;
	        DrawManage.drawCanvas("real-screenshot","bg-layer",0,0,currentCanvas.bgWidth,currentCanvas.bgHeight);
	      },
	      getFirstIndex: function() {
	        var firstIndex = 0;
	        this.sharedStore.pages.some(function(item,index){
	            if(!item.isDeleted){
	                firstIndex = index;
	                return true;
	            }
	        });
	        return firstIndex;
	      },
	  },
	  events: {
	      notifyRefreshScreenshot : function(pageIdx, ratio){
	        if(/*this.sharedStore.isPreview ||*/this.getFirstIndex() !== pageIdx || this.isLocked)return;
	        var _this = this;
	        _this.isLocked = true;
	        _this.privateStore.ratio = ratio || 1;
	        _this.privateStore.timer && clearTimeout(_this.privateStore.timer);
	        _this.privateStore.timer = setTimeout(function(){
	          _this.refreshScreenshot(pageIdx);
	          if(_this.sharedStore.isNewInsertProject) {
	              _this.$dispatch('dispatchSaveScreenshotDelay', 500);
	              _this.sharedStore.isNewInsertProject = false;
	          }
	        },100);
	      },
	      notifyRefreshRealScreenshot : function(pageIdx,ratio){
	        if(/*this.sharedStore.isPreview ||*/this.getFirstIndex() !== pageIdx)return;
	        console.log("ratio",ratio);
	        //if(this.sharedStore.isPreview)return;
	        this.privateStore.ratio = ratio || 1;
	        this.createRealScreenShot(pageIdx);

	        Store.beforeUpgradeScreenshot = __webpack_require__(15).convertScreenshotToBase64();
	      },

	      notifySaveScreenshot: function() {
	          if(!this.privateStore.isInitScreenshotSaved) {
	            __webpack_require__(22).saveOldProject(this, function() {});
	            this.privateStore.isInitScreenshotSaved = true;
	          }
	      }
	  },
	  ready: function() {
	    var _this = this;

	    // _this.$watch('width', function() {
	    //   _this.refreshScreenshot();
	    // });

	    // _this.$watch('height', function() {
	    //   _this.refreshScreenshot();
	    // });

	    var screenshot = document.getElementById("real-screenshot");
	    screenshot.width = Store.screenshotSize.width;
	    screenshot.height = Store.screenshotSize.height;
	    __webpack_require__(16).drawRect("real-screenshot","#fff",0,0,Store.screenshotSize.width,Store.screenshotSize.height);

	    var emptyImage = new Image();
	    var editUrl = window.location.href;
	    var prefix = editUrl.split('index.html?')[0];
	    emptyImage.src = prefix + '/assets/img/noimage_pc.png';
	    emptyImage.onload = function() {
	        var canvas = document.createElement("canvas");
	        canvas.width = emptyImage.width;
	        canvas.height = emptyImage.height;
	        var ctx = canvas.getContext("2d");
	        ctx.drawImage(emptyImage, 0, 0, emptyImage.width, emptyImage.height);
	        Store.emptyImage = canvas.toDataURL("image/png").replace("data:image/png;base64,","");
	    }
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {var DrawManage = __webpack_require__(16);
	var ProjectManage = __webpack_require__(19);
	var UtilMath = __webpack_require__(7);
	module.exports = {
	  template: '<div v-show="sharedStore.isCanvas" class="box-mirror{{idx}}{{main}}">'+
	                '<canvas id="mirror-top{{idx}}{{main}}" height="{{ vMirrorLength+1 }}px" width="{{ w  }}px" v-bind:style="{top: top + \'px\', left: left +\'px\', zIndex: windowZindex}" style="position:absolute;"></canvas>'+
	                '<canvas id="mirror-right{{idx}}{{main}}" width="{{ vMirrorLength+1 }}px" height="{{ h  }}px" v-bind:style="{top : vMirrorLength/2 + top - vMirrorLength +  \'px\', left: rLeft +\'px\', zIndex: windowZindex-1}" style="position:absolute;background:#f0f0f0;"></canvas>'+
	            '</div>',
	  data: function() {
	    return {
	      sharedStore : Store,
	      borderShow : false,
	      mirrorShow : false,
	      mirrorPageIdx:0,
	      mirrorPageRatio:0,
	      extraName:''
	    };
	  },
	  props:[
	    "ratio",
	    "idx",
	    "main"
	  ],

	  computed: {
	      w : function(){
	          var currentCanvas =  Store.pages[this.idx].canvas;
	          return currentCanvas.oriWidth * this.ratio;
	      },
	      h : function(){
	          var currentCanvas =  Store.pages[this.idx].canvas;
	          return currentCanvas.oriHeight * this.ratio;
	      },
	      left : function(){
	        var currentCanvas =  Store.pages[this.idx].canvas;

	        return currentCanvas.oriX * this.ratio;
	      },
	      top : function(){
	        var currentCanvas =  Store.pages[this.idx].canvas;

	        return (currentCanvas.oriY+currentCanvas.realBleedings.top) * this.ratio;
	      },
	      rLeft : function(){
	          var currentCanvas =  Store.pages[this.idx].canvas;

	          return (currentCanvas.oriX + currentCanvas.frameBaseSize.width) * this.ratio + this.vMirrorLength ;
	      },

	      vMirrorLength: function() {
	        var currentCanvas =  Store.pages[this.idx].canvas;

	        return (currentCanvas.realBleedings.top+currentCanvas.canvasBordeThickness.top) * this.ratio;
	      },

	      windowZindex: function() {
	        var currentCanvas = Store.pages[this.idx].canvas,
	            elementTotal = currentCanvas.params.length || 0;

	        return (elementTotal + 9) * 100;
	      },


	  },
	  methods: {
	      createMirror : function(){
	          var w = this.w,
	              h = this.h,
	              currentCanvas = Store.pages[this.idx].canvas,
	              screenshot = $("#photoElementCanvas"+this.mirrorPageIdx+"0"+this.extraName),
	              imageData,oldData,newData,mLength;
	          var screenshotName="photoElementCanvas"+this.mirrorPageIdx+"0"+this.extraName;

	          /*if(this.extraName){
	            screenshot = $("#photoElementCanvas"+this.mirrorPageIdx+this.extraName);
	            screenshotName = "photoElementCanvas"+this.mirrorPageIdx+this.extraName;
	          }*/
	          mLength = this.sharedStore.mirrorLength * this.mirrorPageRatio;
	          // console.log('mLength', this.sharedStore.mirrorLength);
	          imageData = DrawManage.getImageData(screenshotName,0,0,screenshot.get(0).width,screenshot.get(0).height);
	          DrawManage.fillImageData(screenshotName,imageData);
	          var w = screenshot.get(0).width, h = screenshot.get(0).height;
	          if(this.sharedStore.isMirrorBorder){
	              //draw mirror
	              //top
	              imageData = DrawManage.getImageData(screenshotName,0,0,w,mLength);
	              newData = DrawManage.createImageData("mirror-top"+this.mirrorPageIdx+this.extraName,w,mLength);
	              newData = DrawManage.imageDataVRevert(imageData,newData);
	              DrawManage.fillImageData("mirror-top"+this.mirrorPageIdx+this.extraName,newData,mLength,0,w,mLength);
	              //right
	              imageData = DrawManage.getImageData(screenshotName,w - mLength,0,mLength,h);
	              //newData = DrawManage.createImageData("mirror-right"+this.mirrorPageIdx,mLength,h);
	              DrawManage.fillImageData("mirror-right"+this.mirrorPageIdx+this.extraName,imageData,0,mLength,mLength,h);
	              $("#overlay-top,#overlay-bottom").width = this.w;
	              $("#overlay-left,#overlay-right").height = this.h;
	          }else if(this.sharedStore.isColorBorder){
	              var color = UtilMath.decToHex(this.sharedStore.bgColor);
	              //fill with color
	              DrawManage.drawRect("mirror-top"+this.mirrorPageIdx+this.extraName,color,0,0,w-mLength,mLength);

	              DrawManage.drawRect("mirror-right"+this.mirrorPageIdx+this.extraName,color,0,0,mLength,h);

	              $("#overlay-top,#overlay-bottom").width = this.w;
	              $("#overlay-left,#overlay-right").height = this.h;
	          }else{
	              $("#overlay-top,#overlay-bottom").width = this.w;
	              $("#overlay-left,#overlay-right").height = this.h;
	              var rBorderData = DrawManage.getImageData(screenshotName,w - mLength,0,mLength,h),
	                  tBOrderData = DrawManage.getImageData(screenshotName,0,0,w-mLength,mLength);
	                newData = DrawManage.createImageData("mirror-right"+this.mirrorPageIdx+this.extraName,mLength,Math.floor(h-mLength/2));
	                newData = DrawManage.imageDataHRevert(rBorderData,newData);
	                DrawManage.fillImageData("mirror-right"+this.mirrorPageIdx+this.extraName,newData,0,mLength-this.vMirrorLength,mLength,h);
	                DrawManage.fillImageData("mirror-top"+this.mirrorPageIdx+this.extraName,tBOrderData,0,0,w,mLength);
	          }
	          imageData = DrawManage.wrapBorder("mirror-top"+this.mirrorPageIdx+this.extraName,"top");
	          DrawManage.clear("mirror-top"+this.mirrorPageIdx+this.extraName);
	          DrawManage.fillImageData("mirror-top"+this.mirrorPageIdx+this.extraName,imageData,0,0,imageData.width,imageData.height);
	          imageData = DrawManage.wrapBorder("mirror-right"+this.mirrorPageIdx+this.extraName,"right");
	          DrawManage.clear("mirror-right"+this.mirrorPageIdx+this.extraName);
	          DrawManage.fillImageData("mirror-right"+this.mirrorPageIdx+this.extraName,imageData,-1,1,imageData.width,imageData.height);
	          Store.vm.$broadcast("notifyRefreshRealScreenshot",this.idx,this.ratio);
	      },
	      refreshMirror : function(){
	          DrawManage.clear("mirror-top"+this.mirrorPageIdx+this.extraName);
	          DrawManage.clear("mirror-right"+this.mirrorPageIdx+this.extraName);
	          this.createMirror();
	      },
	      clearMirror : function(idx){
	          if(this.extraName){
	            DrawManage.clear("mirror-top"+idx+this.extraName);
	            DrawManage.clear("mirror-right"+idx+this.extraName);
	          }
	          
	      }

	  },
	  events: {
	      notifyRefreshMirror : function(){
	        this.refreshMirror();
	      },
	      notifyClearMirror : function(idx){
	        this.clearMirror(idx);
	      },

	      notifyRefreshItemMirror: function(idx,ratio,extraName){
	        this.mirrorPageIdx=idx;
	        this.mirrorPageRatio=ratio;
	        if(extraName){
	          this.extraName=extraName;
	        }else{
	          this.extraName="";
	        }
	        this.refreshMirror();
	      }
	  },
	  ready: function() {
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {
	var ProjectManage = __webpack_require__(19);

	var DrawManage = __webpack_require__(16);

	var OptionConfig = __webpack_require__(41);
	// component -- background

	module.exports = {
	  template: '<!-- background -->' +
	              '<canvas id="bg-part{{idx}}{{main ? \'Main\':\'\'}}" v-bind:style="{zIndex:Zindex}" v-bind:width="width" v-bind:height="height" style="position: absolute; left: 0; top: 0;width: 100%;height:100%;background-size:cover;background-position: 50% 50%;pointer-events: none;"></canvas>' +
	              '<canvas id="bg-layer" v-bind:width="width" v-bind:height="height" style="display:none;position: absolute; left: 0; top: 0;width: 100%;height:100%;background-size:cover;background-position: 50% 50%;pointer-events: none;"></canvas>'+
	              '<img v-bind:src="imageUrl" v-bind:style="{zIndex:Zindex}" style="display:none;position: absolute; left: 0; top: 0;width:100%;height:100%;pointer-events: none;" />'+
	              '<!-- mattings -->' +
	              '<canvas id="matting-part" v-show="!sharedStore.isCanvas" v-bind:style="{ zIndex: mattingZindex,top : matteTop, left : matteLeft}" style="position: absolute;pointer-events:none; "></canvas>',
	  props: [
	    'idx',
	    'main',
	    'ratio',
	    'width',
	    'height'
	  ],
	  data: function() {
	    return {
	      upLeft: 0,
	      upTop: 0,
	      rightRight: 0,
	      rightTop: 0,
	      downLeft: 0,
	      downBottom: 0,
	      leftLeft: 0,
	      leftTop: 0,
	      timer : null,
	      imageUrl: '',
	      sharedStore: Store
	    };
	  },
	  computed: {
	    mattingZindex: function() {
				var currentCanvas = Store.pages[this.idx].canvas,
						elementTotal = currentCanvas.params.length || 0;

				return (elementTotal + 2) * 100;
			},

	    bgZindex: function() {
	      var currentCanvas = Store.pages[this.idx].canvas,
	          elementTotal = currentCanvas.params.length || 0;

	      return (elementTotal + 3) * 100;
	    },

	    Zindex: function() {
	      var currentCanvas = Store.pages[this.idx].canvas,
	          elementTotal = currentCanvas.params.length || 0;

	      return (elementTotal + 9) * 101;
	    },

	    matteLeft : function(){
	      var currentCanvas = Store.pages[this.idx].canvas;
	      var ratio = currentCanvas.ratio,
	          padding = currentCanvas.foreground.left + currentCanvas.expendSize.left;
	      return ratio * padding + 'px';
	    },

	    matteRight : function(){
	      var currentCanvas = Store.pages[this.idx].canvas;
	      var ratio = currentCanvas.ratio,
	          padding = currentCanvas.foreground.right + currentCanvas.expendSize.right;
	      return ratio * padding + 'px';
	    },

	    matteTop : function(){
	      var currentCanvas = Store.pages[this.idx].canvas;
	      var ratio = currentCanvas.ratio,
	          padding = currentCanvas.foreground.top + currentCanvas.expendSize.top;
	      return ratio * padding + 'px';
	    },

	    matteBottom : function(){
	      var currentCanvas = Store.pages[this.idx].canvas;
	      var ratio = currentCanvas.ratio,
	          padding = currentCanvas.foreground.bottom + currentCanvas.expendSize.bottom;
	      return ratio * padding + 'px';
	    },
	  },
	  methods: {
	    initBg: function() {
	      var currentCanvas = Store.pages[this.idx].canvas;
	      // if(this.sharedStore.cycleLock){
	      //   this.sharedStore.queueKey = true;
	      //   return;
	      // }else{
	      //   this.sharedStore.cycleLock = true;
	      // }
	      // console.log('refresh background');
	      if(Store.projectSettings[Store.currentSelectProjectIndex].matte && Store.projectSettings[Store.currentSelectProjectIndex].matte !== 'none') {
	        this.initMatting();
	      }
	      else {
	        this.idleMatting();
	      };

	      var _this = this,curImage = _this.currentBgImage();
	      var currentCanvas = Store.pages[this.idx].canvas;
	      DrawManage.clear("bg-part"+ this.idx + this.main);
	      DrawManage.drawImage("bg-part"+ this.idx + this.main,curImage.src,0,0,function(){
	        if(_this.main){
	           //Store.vm.$broadcast("notifyRefreshScreenshot", _this.idx, _this.ratio);
	          //Store.vm.$broadcast("notifyRefreshRealScreenshot", _this.idx, _this.ratio);
	        }
	        _this.sharedStore.cycleLock = false;
	        _this.sharedStore.isBgLoaded = false;
	        if(_this.sharedStore.queueKey){
	            _this.sharedStore.queueKey = false;
	            _this.initBg();
	        }
	        if(!Store.isProjectUpgrade){
	          Store.isPageLoadingShow = false;
	        }
	        
	        _this.imageUrl = curImage.src;
	        // setTimeout(function(){$(".bed-page-loading").css("display","none");},0)
	      },currentCanvas.oriBgWidth*this.ratio,currentCanvas.oriBgHeight*this.ratio);
	    },

	    currentBgImage : function(){
	        var bg = {},
	            key = '',
	            currentProject = Store.projectSettings[this.idx],
	            size = currentProject['size'].toLowerCase(),
	            product  = currentProject['product'],
	            prefix = this.getPrefix(),
	            bgSrc = '',
	            rotated = currentProject.rotated;
	        if(rotated){
	          size = size.split("x")[1]+"x"+size.split("x")[0];
	        }
	        if(product === 'woodPrint'){
	          prefix  += currentProject['finish'] + "/";
	        }else{
	          prefix  += size + "/";
	        }
	        if(this.main){
	          bg.src = prefix + size + ".png?version=23";
	        }else{
	          bg.src = prefix + size + "_white.png?version=23";
	        }

	        if(bgSrc){
	          bg.layer = prefix + bgSrc;
	        }
	        if(this.sharedStore.projectSettings[Store.currentSelectProjectIndex]['matte']==='M'){
	            var matteStyle = this.sharedStore.projectSettings[Store.currentSelectProjectIndex]['matteStyle'].replace("matteStyle","");
	            if(matteStyle!=="none"){
	                bg.mattePath = 'assets/img/matting/' + size + '/' + matteStyle + ".png";
	            }
	        }
	        return bg;
	    },

	    getPrefix : function(){
	      var type = 'foreground',
	          SpecManage = __webpack_require__(18),
	          currentProject = Store.projectSettings[this.idx],
	          keyPatterns = SpecManage.getVariableKeyPatternById(type).split("-"),
	          cur = keyPatterns.indexOf("size"),
	          path = 'assets/img/types/';
	      keyPatterns.splice(cur,1);
	      for(var i=0;i<keyPatterns.length;i++){
	        var value = currentProject[keyPatterns[i]];
	        if(value && value.toLowerCase()!=="none"){
	          if(keyPatterns[i] === "canvasBorderSize" && currentProject.product != "littleModernCanvas"){
	            continue;
	          }
	          path += value + "/";
	        }
	      }
	      return path;
	    },

	    idleMatting: function() {
	      var _this = this;
	      var currentCanvas = Store.pages[this.idx].canvas;
	      var el = document.getElementById('matting-part');
	      el.width = el.height = 0;
	    },

	    initMatting: function() {
	      var _this = this;
	      var currentCanvas = Store.pages[this.idx].canvas;
	       if(this.sharedStore.mattCycleLock){
	        this.sharedStore.mattQueueKey = true;
	        return;
	      }else{
	        this.sharedStore.mattCycleLock = true;
	      }
	      var el = document.getElementById('matting-part'),
	          ctx = el.getContext('2d'),
	          mattImgSize = __webpack_require__(24).getMattImageSize(),
	          width = (currentCanvas.oriBgWidth - currentCanvas.foreground.left -currentCanvas.foreground.right - currentCanvas.expendSize.left - currentCanvas.expendSize.right) * currentCanvas.ratio,
	          height = (currentCanvas.oriBgHeight - currentCanvas.foreground.top -currentCanvas.foreground.bottom - currentCanvas.expendSize.top - currentCanvas.expendSize.bottom) * currentCanvas.ratio,
	          bgImage = this.currentBgImage();
	      el.width = width;
	      el.height = height;
	      if(bgImage.mattePath){
	          var im = new Image();
	          im.onload = function(){
	              ctx.drawImage(im,0,0,mattImgSize.width,mattImgSize.height,0,0,width,height);
	              // Store.isMattLoaded = true;
	              _this.sharedStore.mattCycleLock = false;
	              _this.sharedStore.isMattLoaded = false;
	              if(_this.sharedStore.mattQueueKey){
	                 _this.sharedStore.mattQueueKey = false;
	                 _this.initMatting();
	              }
	          }
	          im.src = bgImage.mattePath;
	      }
	    },

	    initBgImage: function() {
	      var _this = this;
	      var currentCanvas = Store.pages[this.idx].canvas;
	      var imageUrl = ProjectManage.getFrameBorderAsset();

	      var elUp = document.getElementById('bg-part-up'),
	          elRight = document.getElementById('bg-part-right'),
	          elDown = document.getElementById('bg-part-down'),
	          elLeft = document.getElementById('bg-part-left'),
	          canvasUp = elUp.getContext('2d'),
	          canvasRight = elRight.getContext('2d'),
	          canvasDown = elDown.getContext('2d'),
	          canvasLeft = elLeft.getContext('2d');
	      var borderUp = currentCanvas.frameBorderThickness.top * currentCanvas.ratio,
	          borderRight = currentCanvas.frameBorderThickness.right * currentCanvas.ratio,
	          borderDown = currentCanvas.frameBorderThickness.bottom * currentCanvas.ratio,
	          borderLeft = currentCanvas.frameBorderThickness.left * currentCanvas.ratio;
	      var expendUp = (currentCanvas.frameBorderThickness.top - currentCanvas.boardInFrame.top) * currentCanvas.ratio,
	          expendRight = (currentCanvas.frameBorderThickness.right - currentCanvas.boardInFrame.right) * currentCanvas.ratio,
	          expendDown = (currentCanvas.frameBorderThickness.bottom - currentCanvas.boardInFrame.bottom) * currentCanvas.ratio,
	          expendLeft = (currentCanvas.frameBorderThickness.left - currentCanvas.boardInFrame.left) * currentCanvas.ratio;
	      elUp.width = elDown.width =  _this.width + expendLeft + expendRight;
	      elUp.height = borderUp;
	      elRight.width = borderRight;
	      elRight.height = elLeft.height =  _this.height + expendUp + expendDown;
	      elDown.height = borderDown;
	      elLeft.width = borderLeft;

	      this.upLeft = this.downLeft = this.leftLeft = -1 * expendLeft;
	      this.upTop = this.rightTop = this.leftTop = -1 * expendUp;
	      this.rightRight = -1 * expendRight;
	      this.downBottom = -1 * expendDown;

	      canvasUp.clearRect(-1, -1, elUp.width + 2, elUp.height + 2);
	      canvasUp.beginPath();
	      canvasUp.moveTo(0, 0);
	      canvasUp.lineTo(_this.width + expendLeft + expendRight, 0);
	      canvasUp.lineTo(_this.width + expendLeft + expendRight - borderRight, borderUp);
	      canvasUp.lineTo(borderLeft, borderUp);
	      canvasUp.closePath();
	      canvasUp.stroke();
	      canvasUp.clip();
	      var imageUp = new Image();
	      imageUp.src = imageUrl.assetUpUrl;
	      imageUp.onload = function() {
	        canvasUp.drawImage(imageUp, 0, 0, _this.width + expendLeft + expendRight, borderUp);
	      };

	      canvasRight.clearRect(-1, -1, elRight.width + 2, elRight.height + 2);
	      canvasRight.beginPath();
	      canvasRight.moveTo(borderRight, 0);
	      canvasRight.lineTo(borderRight, _this.height + expendUp + expendDown);
	      canvasRight.lineTo(0, _this.height + expendUp + expendDown - borderDown);
	      canvasRight.lineTo(0, borderUp);
	      canvasRight.closePath();
	      canvasRight.stroke();
	      canvasRight.clip();
	      var imageRight = new Image();
	      imageRight.src = imageUrl.assetRightUrl;
	      imageRight.onload = function() {
	        canvasRight.drawImage(imageRight, 0, 0, borderRight, _this.height + expendUp + expendDown);
	      };

	      canvasDown.clearRect(-1, -1, elDown.width + 2, elDown.height + 2);
	      canvasDown.beginPath();
	      canvasDown.moveTo(0, borderDown);
	      canvasDown.lineTo(_this.width + expendLeft + expendRight, borderDown);
	      canvasDown.lineTo(_this.width + expendLeft + expendRight - borderRight, 0);
	      canvasDown.lineTo(borderLeft, 0);
	      canvasDown.closePath();
	      canvasDown.stroke();
	      canvasDown.clip();
	      var imageDown = new Image();
	      // imageDown.src = '/template-resources/images/bigNewPhotoFrame/baroque_gold_down.jpg';
	      imageDown.src = imageUrl.assetDownUrl;
	      imageDown.onload = function() {
	        canvasDown.drawImage(imageDown, 0, 0, _this.width + expendLeft + expendRight, borderDown);
	      };

	      canvasLeft.clearRect(-1, -1, elLeft.width + 2, elLeft.height + 2);
	      canvasLeft.beginPath();
	      canvasLeft.moveTo(0, 0);
	      canvasLeft.lineTo(0, _this.height + expendUp + expendDown);
	      canvasLeft.lineTo(borderLeft, _this.height + expendUp + expendDown - borderDown);
	      canvasLeft.lineTo(borderLeft, borderUp);
	      canvasLeft.closePath();
	      canvasLeft.stroke();
	      canvasLeft.clip();
	      var imageLeft = new Image();
	      // imageLeft.src = '/template-resources/images/bigNewPhotoFrame/baroque_gold_left.jpg';
	      imageLeft.src = imageUrl.assetLeftUrl;
	      imageLeft.onload = function() {
	        canvasLeft.drawImage(imageLeft, 0, 0, borderLeft, _this.height + expendUp + expendDown);
	      };
	    },

	    initBgLines: function() {
	      var _this = this;
	      var currentCanvas = Store.pages[this.idx].canvas;
	      var foreground = __webpack_require__(24).getForegroundVariable();
	      // var imageUrl = ProjectManage.getFrameBorderAsset();

	      var elUp = document.getElementById('bgline-part-up'),
	          elRight = document.getElementById('bgline-part-right'),
	          elDown = document.getElementById('bgline-part-down'),
	          elLeft = document.getElementById('bgline-part-left'),
	          canvasUp = elUp.getContext('2d'),
	          canvasRight = elRight.getContext('2d'),
	          canvasDown = elDown.getContext('2d'),
	          canvasLeft = elLeft.getContext('2d');
	      var borderUp = currentCanvas.frameBorderThickness.top * currentCanvas.ratio,
	          borderRight = currentCanvas.frameBorderThickness.right * currentCanvas.ratio,
	          borderDown = currentCanvas.frameBorderThickness.bottom * currentCanvas.ratio,
	          borderLeft = currentCanvas.frameBorderThickness.left * currentCanvas.ratio;
	      var expendUp = (currentCanvas.frameBorderThickness.top - currentCanvas.boardInFrame.top + foreground.top ) * currentCanvas.ratio,
	          expendRight = (currentCanvas.frameBorderThickness.right - currentCanvas.boardInFrame.right + foreground.right) * currentCanvas.ratio,
	          expendDown = (currentCanvas.frameBorderThickness.bottom - currentCanvas.boardInFrame.bottom + foreground.bottom) * currentCanvas.ratio,
	          expendLeft = (currentCanvas.frameBorderThickness.left - currentCanvas.boardInFrame.left + foreground.left) * currentCanvas.ratio;
	      elUp.width = elDown.width =  _this.width + expendLeft + expendRight;
	      elUp.height = borderUp;
	      elRight.width = borderRight;
	      elRight.height = elLeft.height =  _this.height + expendUp + expendDown;
	      elDown.height = borderDown;
	      elLeft.width = borderLeft;

	      this.upLeft = this.downLeft = this.leftLeft = -1 * expendLeft;
	      this.upTop = this.rightTop = this.leftTop = -1 * expendUp;
	      this.rightRight = -1 * expendRight;
	      this.downBottom = -1 * expendDown;

	      canvasUp.clearRect(-1, -1, elUp.width + 2, elUp.height + 2);
	      canvasUp.beginPath();
	      canvasUp.moveTo(0, 0);
	      canvasUp.lineTo(borderLeft, Math.floor(borderUp));
	      canvasUp.lineTo(_this.width + expendLeft + expendRight - borderRight, Math.floor(borderUp));
	      canvasUp.lineTo(_this.width + expendLeft + expendRight, 0);
	      canvasUp.stroke();

	      canvasRight.clearRect(-1, -1, elRight.width + 2, elRight.height + 2);
	      canvasRight.beginPath();
	      canvasRight.moveTo(0, borderUp);
	      canvasRight.lineTo(0, _this.height + expendUp + expendDown - borderDown);
	      canvasRight.stroke();

	      canvasDown.clearRect(-1, -1, elDown.width + 2, elDown.height + 2);
	      canvasDown.beginPath();
	      canvasDown.moveTo(0, borderDown);
	      canvasDown.lineTo(borderLeft, 0);
	      canvasDown.lineTo(_this.width + expendLeft + expendRight - borderRight, 0);
	      canvasDown.lineTo(_this.width + expendLeft + expendRight, borderDown);
	      canvasDown.stroke();

	      canvasLeft.clearRect(-1, -1, elLeft.width + 2, elLeft.height + 2);
	      canvasLeft.beginPath();
	      canvasLeft.moveTo(Math.floor(borderLeft), borderUp);
	      canvasLeft.lineTo(Math.floor(borderLeft), _this.height + expendUp + expendDown - borderDown);
	      canvasLeft.stroke();
	    },
	  },
	  events: {
	    notifyRefreshBackground: function() {
	      this.initBg();
	    },

	    notifyChangeBgImage: function() {
	    },

	    notifyChangeMatting: function() {
	      this.initMatting();
	    }
	  },
	  ready: function() {
	     var _this = this;

	    _this.$watch('width', function() {
	        _this.initBg();
	    });

	    _this.$watch('height', function() {
	        _this.initBg();
	    });

	    /*_this.$watch('sharedStore.isBgLoaded', function() {
	      if(_this.sharedStore.isBgLoaded){
	          _this.sharedStore.cycleLock = false;
	          _this.sharedStore.isBgLoaded = false;
	          if(_this.sharedStore.queueKey){
	              _this.sharedStore.queueKey = false;
	              _this.initBg();
	          }
	      }
	    });*/

	   /* _this.$watch('sharedStore.isMattLoaded', function() {s
	      if(_this.sharedStore.isMattLoaded){
	          _this.sharedStore.mattCycleLock = false;
	          _this.sharedStore.isMattLoaded = false;
	          if(_this.sharedStore.mattQueueKey){
	              _this.sharedStore.mattQueueKey = false;
	              _this.initMatting();
	          }
	      }
	    });*/
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {var Vue = __webpack_require__(31);

	var CompActionPanel = Vue.extend(__webpack_require__(61));
	// Vue.component('action-panel', CompActionPanel);

	var CompActionPanelBottom = Vue.extend(__webpack_require__(62));
	// Vue.component('action-panel-bottom', CompActionPanelBottom);

	var CompContainer = Vue.extend(__webpack_require__(63));
	// Vue.component('operation-area', CompContainer);

	var JsonProjectManage = __webpack_require__(29);
	var CanvasController = __webpack_require__(24);

	// module -- dashboard
	module.exports = {
	  template: '<div v-on:click="blurFocus()" v-bind:style="usedStyle">' +
	              '<!-- action panel component -->' +
	              '<action-panel style="display:none;" v-if="!sharedStore.isPreview && !sharedStore.isRemark"></action-panel>' +
	              '<!-- operation area -->' +
	              '<div v-show="sharedStore.isPreview" id="main-container-wrap" style="position:relative;">'+
	                  '<operation-area key="centerContainer" v-bind:idx="sharedStore.selectedPageIdx"  main="Main"></operation-area>' +
	                  '<div @click="changeSelectedProject(-1)" style="width:44px;height:100%;position:absolute;top:0;left:0;">'+
	                      '<span :class="{disabled: isFirstUsefullPage}" class="changePageIcon left" />'+
	                  '</div>'+
	                  '<div @click="changeSelectedProject(+1)" style="width:44px;height:100%;position:absolute;top:0;right:0;">'+
	                      '<span :class="{disabled: isLastUsefullPage}" class="changePageIcon right" />'+
	                  '</div>'+
	              '</div>'+
	              '<action-panel-bottom></action-panel-bottom>' +
	              '<div v-show="!sharedStore.isPreview" style="height:100%;border-left:1px solid #d6d6d6;box-sizing:border-box;overflow-x:hidden;overflow-y:auto;">'+
	                  '<div style="display:inline-block;position:relative;width:100%;height:100%px;padding:34px 16px 0 16px;box-sizing:border-box;">'+
	                      '<price-item></price-item>' +
	                      // '<operation-area center="" v-for="page in sharedStore.pages"></operation-area>' +
	                      '<div v-show="!sharedStore.isPreview && totalPageNum < 1000 && !sharedStore.checkFailed && !sharedStore.isRemark" class="add-photo-button" id="add-photos" @click="addProject">'+
	                          '<div style="position: absolute;width: 280px; height: 280px;border: 1px solid #b6b6b6;background-color: #f6f6f6;border-style:dashed;bottom:14px;left: 50%;transform: translateX(-50%);">'+
	                            '<div style="position: absolute;width:100%;left: 0;top: 50%;transform:translate(0,-50%); text-align:center;">'+
	                                // '<img src="assets/img/add-normal.svg" width="59px" height="44px" ommouseover="this.src=\'assets/img/add-hover.svg\'"  ommouseout="this.src=\'assets/img/add-normal.svg\'" style="display:block;margin:0 auto;margin-bottom: 25px;">'+
	                                '<span class="font-light" style="font-size:24px;color:#3a3a3a;">+ Add </span>'+
	                            '</div>'+
	                          '</div>'+
	                      '</div>' +
	                  '</div>'+
	              '</div>'+
	              '<screenshot-element></screenshot-element>' +
	            '</div>',
	  data: function() {
	    return {
	      privateStore: {
	        first: 0,
	        pages: []
	      },
	      sharedStore : Store
	    };
	  },
	  computed: {
	    usedStyle: function() {
	      if(this.sharedStore.isPreview) {
	        return {};
	      }
	      else {
	        return {
	          position: 'absolute',
	          top: '38px',
	          bottom: '0',
	          left: '0px',
	          right: 0,
	          overflow : 'hidden'
	        };
	      };
	    },

	    // to determine if change page action items should be shown
	    shouldChangePageShow: function() {
	        if (this.sharedStore.isChangePageShow) {
	            return true;
	        } else {
	            return false;
	        };
	    },
	    isFirstUsefullPage: function(){
	        var isFirstUsefullPage = true;
	        for(var i =0; i < this.sharedStore.selectedPageIdx; i++){
	          if(!this.sharedStore.pages[i].isDeleted){
	              isFirstUsefullPage = false;
	          }
	        }
	        return isFirstUsefullPage;
	    },
	    isLastUsefullPage: function(){
	      var isLastUsefullPage = true;
	      for(var i =this.sharedStore.selectedPageIdx + 1; i < this.sharedStore.pages.length; i++){
	        if(!this.sharedStore.pages[i].isDeleted){
	            isLastUsefullPage = false;
	        }
	      }
	      return isLastUsefullPage;
	    },
	    totalPageNum: function(){
	      var pageNum = 0;
	      this.sharedStore.pages.forEach(function(item){
	        if(!item.isDeleted){
	           pageNum++;
	        }
	      });
	      return pageNum;
	    }
	  },
	  components: {
			'action-panel': CompActionPanel,
	    'action-panel-bottom': CompActionPanelBottom,
			'operation-area': CompContainer
		},
	  methods: {
	    showItem: function(reload) {
	      var _this = this;
	      var showIndex = 1;
	      if ((_this.privateStore.first++) == 0) {
	        // require("CanvasController").loadProjectIntoPages();
	      }
	      if (reload) {
	        _this.privateStore.pages.length = 0;
	      }
	      // console.log("pages", _this.sharedStore.pages);
	      for (var i = 0; i < _this.sharedStore.pages.length; i++) {
	        var guid = _this.sharedStore.pages[i].guid;

	        if(_this.privateStore.pages.indexOf(guid) === -1) {
	          (function(i, guid) {
	            if(!_this.sharedStore.pages[i].isDeleted){
	                var el = new CompContainer();
	                el.setId(i,'',showIndex);
	                el.$mount().$before("#add-photos");
	                _this.privateStore.pages.push(guid);

	                _this.$nextTick(function() {
	                  el.initCanvas();
	                  _this.sharedStore.pages[i].canvas.pageItems.push(el);
	                })
	                showIndex ++;
	            }
	          })(i, guid);
	        }
	      }

	      // var centerEl = new CompContainer();
	      // centerEl.setId(this.sharedStore.selectedPageIdx, 'Mains');
	      // centerEl.$mount().$appendTo("#main-container-wrap");
	      // _this.$nextTick(function() {
	      //   centerEl.initCanvas();
	      //   _this.sharedStore.pages[0].canvas.pageItems.push(centerEl);
	      // })

	    },
	    clearItemElement: function() {
	      this.privateStore.pages.length = 0;
	      for (var i = 0; i < this.sharedStore.pages.length; i++) {
	        var currentCanvas = this.sharedStore.pages[i].canvas;
	        if (currentCanvas.pageItems.length) {
	          currentCanvas.pageItems[0].$destroy(true);
	          currentCanvas.pageItems.length = 0;
	          currentCanvas.elements[0].$destroy(true);
	          currentCanvas.elements.length = 0;
	        }
	      }
	    },
	    blurFocus: function() {
	      this.$dispatch('dispatchClearScreen');
	      // this.sharedStore.isLostFocus = true;
	    },
	    addProject: function() {
	        var that = this;
	        __webpack_require__(11)({ev: __webpack_require__(13)['ClickAddPhotos']});

	        Store.vm.$broadcast("notifyShowImageUpload");
	    },
	   
	    deleteProject: function(pageIdx){
	        var firstVisiablePageIdx = 0;

	        // this.clearItemElement();
	        this.sharedStore.projectSettings[pageIdx].isDeleted = true;
	        this.sharedStore.pages[pageIdx].isDeleted = true;
	        // 这一步是为了避免 图片 计数的逻辑错误。
	        this.sharedStore.pages[pageIdx].canvas.params[0].imageId = '';

	        this.sharedStore.pages.some(function(item,index){
	          if(!item.isDeleted){
	            firstVisiablePageIdx = index;
	            return true;
	          }
	        });
	        this.$dispatch('dispatchSaveProject');
	        if(this.sharedStore.selectedPageIdx === pageIdx) {
	           this.sharedStore.selectedPageIdx = firstVisiablePageIdx;
	           this.sharedStore.currentSelectProjectIndex = firstVisiablePageIdx;
	        }

	        this.showItem();
	    },
	    freshItemIndexes: function() {
	      for (var i = 0; i < this.sharedStore.pages.length; i++) {
	        this.sharedStore.pages[i].idx = i;
	      };
	    },
	    // broadcast change page
	    broadcastChangePage: function(nPageNum) {
	        Store.vm.$broadcast('notifyChangePage', nPageNum);
	    },
	    changeSelectedProject: function(num){
	      if(this.sharedStore.isSwitchLoadingShow)return;
	      var pageLength = this.sharedStore.pages.length;
	      var selectedIdx = this.sharedStore.selectedPageIdx;
	      var terminalIndex = selectedIdx;
	      do{
	        terminalIndex += num;
	      }while(this.sharedStore.pages[terminalIndex] && this.sharedStore.pages[terminalIndex].isDeleted)
	      if (terminalIndex >= 0 && terminalIndex < pageLength) {
	        var trackerKey = this.sharedStore.isPreview ? "SwitchBlocksInPreview" : "SwitchBlocks";
	        this.sharedStore.selectedPageIdx = terminalIndex;
	        this.sharedStore.currentSelectProjectIndex = terminalIndex;
	        __webpack_require__(11)({ev: __webpack_require__(13)[trackerKey], isFromFactory: this.sharedStore.isFromFactory});
	      }
	    },
	    getRatio: function(foreground) {
	      var size = Store.baseProject.size;
	      var objWidth = foreground.width;
	      var objHeight = foreground.height;

	      var wX = Store.boxLimit[size].width / objWidth,
	          hX = Store.boxLimit[size].height / objHeight;

	      var ratio = wX > hX ? hX : wX;

	      return ratio;
	    },
	    fillImageIntoBlankPage: function(imgArray){
	      var imageDetail = imgArray[0];
	      var _this = this;

	      var PrjConstructor = __webpack_require__(14);
	      var project = PrjConstructor();
	      project.product = Store.baseProject.product;
	      project.size = Store.baseProject.size;
	      project.paper = Store.baseProject.paper;
	      project.color = Store.baseProject.color;
	      project.canvasBorder = Store.baseProject.canvasBorder;
	      project.canvasBorderSize = Store.baseProject.canvasBorderSize;
	      project.frameStyle = Store.baseProject.frameStyle;
	      project.rotated = imageDetail.width > imageDetail.height ? true : false;
	      project.orientation = imageDetail.width > imageDetail.height ? "Landscape" : "Portrait";
	      project.quantity = 1;

	      this.sharedStore.projectSettings.push(project);
	      var length = this.sharedStore.projectSettings.length;
	      var bleeding = JsonProjectManage.getLMCBleedSize(length - 1);
	      var frameBaseSize = JsonProjectManage.getLMCBaseSize(length - 1);
	      var photoLayer = JsonProjectManage.getLMCPhotoLayer(length - 1);
	      var foreground = CanvasController.getForeground(frameBaseSize, { left: 0, top: 0, right: 0, bottom: 0 }, photoLayer, length - 1);
	      var canvasBordeThickness = JsonProjectManage.getLMCCanvasBorder(length - 1);
	      var fg = CanvasController.getForegroundVariable();
	      var oriX = fg.left * foreground.ratioX - bleeding.left - canvasBordeThickness.left;
	      var oriY = fg.top * foreground.ratioY - bleeding.top - canvasBordeThickness.top;
	      var mirrorSize = { top: canvasBordeThickness.top + bleeding.top, right: canvasBordeThickness.right + bleeding.right, bottom: canvasBordeThickness.bottom + bleeding.bottom, left: canvasBordeThickness.left + bleeding.left };
	      var elementWidth = photoLayer.width - mirrorSize.left - mirrorSize.right;
	      var elementHeight = photoLayer.height - mirrorSize.top - mirrorSize.bottom;
	      var defaultCrops = __webpack_require__(35).getDefaultCrop(imageDetail.width, imageDetail.height, elementWidth, elementHeight);
	      var photoElement = {};
	      var px = defaultCrops.px,
	          py = defaultCrops.py,
	          pw = defaultCrops.pw,
	          ph = defaultCrops.ph,
	          width = elementWidth * this.getRatio(foreground) / pw,
	          height = elementHeight * this.getRatio(foreground) / ph;

	      photoElement.cropX = imageDetail.width * px;
	      photoElement.cropY = imageDetail.height * py;
	      photoElement.cropW = imageDetail.width * pw;
	      photoElement.cropH = imageDetail.height * ph;

	      photoElement.cropPX = px;
	      photoElement.cropPY = py;
	      photoElement.cropPW = pw;
	      photoElement.cropPH = ph;

	      photoElement.width = elementWidth;
	      photoElement.height = elementHeight;
	      photoElement.x = mirrorSize.left;
	      photoElement.y = mirrorSize.top;
	      var UtilProject = __webpack_require__(21);
	      var encImgId = UtilProject.getEncImgId(imageDetail.id);
	      var qs = UtilProject.getQueryString({
	          encImgId: encImgId,
	          px: px,
	          py: py,
	          pw: pw,
	          ph: ph,
	          width: Math.round(width),
	          height: Math.round(height)
	      });

	      photoElement.url = '/imageBox/liveUpdateCropImage.ep?' + qs;
	      var encImgId = UtilProject.getEncImgId(imageDetail.id);
	      this.sharedStore.pages.push({
	          type: 'Page',
	          name: '',
	          isDeleted: false,
	          guid: __webpack_require__(21).guid(),
	          canvas: {
	              oriWidth: photoLayer.width, // real size
	              oriHeight: photoLayer.height,
	              oriX: oriX,
	              oriY: oriY,
	              oriBgWidth: foreground.width,
	              oriBgHeight: foreground.height,
	              oriSpineWidth: 0,
	              realBleedings: bleeding,
	              frameBaseSize: frameBaseSize,
	              frameBorderThickness: {},
	              canvasBordeThickness: canvasBordeThickness,
	              boardInFrame: {},
	              boardInMatting: {},
	              mattingSize: {},
	              expendSize: {},
	              foreground: foreground,
	              mirrorSize: mirrorSize,
	              photoLayer: photoLayer,
	              elements: [],
	              pageItems: [],
	              centerElements: [],
	              params: [{
	                  id: 0,
	                  elType: 'image',
	                  url: photoElement.url,
	                  isRefresh: false,
	                  x: photoElement.x,
	                  y: photoElement.y,
	                  width: photoElement.width,
	                  height: photoElement.height,
	                  rotate: 0,
	                  dep: 0,
	                  imageId: imageDetail.id,
	                  imageGuid: imageDetail.guid,
	                  imageWidth: imageDetail.width,
	                  imageHeight: imageDetail.height,
	                  imageRotate: 0,
	                  cropPX: photoElement.cropPX,
	                  cropPY: photoElement.cropPY,
	                  cropPW: photoElement.cropPW,
	                  cropPH: photoElement.cropPH,
	                  style: {
	                      brightness: 0
	                  }
	              }]
	          }

	      });

	      Store.mirrorLength = mirrorSize.top;
	      // 显示loading
	      Store.isShowProgress = true;

	      // this.clearItemElement();
	      this.showItem();
	      this.$dispatch('dispatchSaveProject');
	      setTimeout(function() {
	          $("#add-photos")[0].scrollIntoView(false);
	          _this.sharedStore.vm.$broadcast('notifyRepaintCenterContainer');
	          /*if (that.sharedStore.pages[that.sharedStore.selectedPageIdx].canvas.params[0].imageId) {
	              that.sharedStore.selectedPageIdx = that.sharedStore.projectSettings.length - 1;
	              that.sharedStore.currentSelectProjectIndex = that.sharedStore.projectSettings.length - 1;
	          }*/
	      });
	    },
	    replacePageImage: function(imgs) {
	      var _this = this;
	      var useIndex = Store.watchData.replacePageId;
	      var imageDetail = Array.isArray(imgs) && imgs[0];

	      var currentProject = Store.projectSettings[useIndex];
	      var orientation = currentProject.orientation;
	      var currentPage = Store.pages[useIndex];
	      var currentCanvas = currentPage.canvas;

	      var photoElement = currentCanvas.params[currentCanvas.selectedIdx];
	      this.sharedStore.isShowProgress = true;
	        photoElement.imageId = imageDetail.id;
	        photoElement.imageRotate = 0;
	        photoElement.imageGuid = imageDetail.guid;
	        photoElement.imageWidth = imageDetail.width;
	        photoElement.imageHeight = imageDetail.height;

	        if ( (imageDetail.width > imageDetail.height && orientation === 'Portrait')
	          || (imageDetail.height > imageDetail.width && orientation === 'Landscape')
	        ) {
	          // setTimeout(function(){
	            // _this.sharedStore.isSwitchLoadingShow = true;
	            currentProject.rotated=!currentProject.rotated;
	            currentProject.orientation = currentProject.orientation === "Landscape" ? "Portrait" : "Landscape";
	            CanvasController.fixRotatePhotoElement(useIndex);
	            CanvasController.freshPageData(useIndex);
	          //   _this.sharedStore.vm.$broadcast('notifyRepaintCenterContainer');
	          //   _this.sharedStore.pages[useIndex].canvas.pageItems[0].handleRepaint();
	          // })
	        } {
	            var defaultCrops = __webpack_require__(35).getDefaultCrop(photoElement.imageWidth, photoElement.imageHeight, photoElement.width, photoElement.height);
	            var px = defaultCrops.px,
	                py = defaultCrops.py,
	                pw = defaultCrops.pw,
	                ph = defaultCrops.ph,
	                width = photoElement.width * currentCanvas.ratio / pw,
	                height = photoElement.height * currentCanvas.ratio / ph;

	            // adding the crop settings to element
	            photoElement.cropX = imageDetail.width * px;
	            photoElement.cropY = imageDetail.height * py;
	            photoElement.cropW = imageDetail.width * pw;
	            photoElement.cropH = imageDetail.height * ph;

	            photoElement.cropPX = px;
	            photoElement.cropPY = py;
	            photoElement.cropPW = pw;
	            photoElement.cropPH = ph;

	            var UtilProject = __webpack_require__(21);
	            var encImgId = UtilProject.getEncImgId(imageDetail.id);
	            var qs = UtilProject.getQueryString({
	              encImgId: encImgId,
	              px: px,
	              py: py,
	              pw: pw,
	              ph: ph,
	              width: Math.round(width),
	              height: Math.round(height)
	            });

	            photoElement.url = '/imageBox/liveUpdateCropImage.ep?' + qs;
	            // photoElement.isRefresh = true;
	            // _this.sharedStore.pages[index].canvas.pageItems[0].handleRepaint();
	            // photoElement.sourceImageUrl = sourceImageUrl;
	        }

	        setTimeout(function(index, elementIndex){
	            _this.sharedStore.vm.$broadcast('notifyRepaintCenterContainer');
	            _this.sharedStore.pages[index].canvas.pageItems[elementIndex].handleRepaint();
	        },100,Store.watchData.replacePageId,currentCanvas.selectedIdx)

	      Store.watchData.replacePageId = null;
	    }
	  },
	  events: {
	    notifyShowItem: function(reload) {
	      this.showItem(reload);
	    },
	    notifyRefreshItems: function(reload) {
	      this.clearItemElement();
	      this.showItem(true);
	    },
	    notifyDeleteProject: function(pageIdx){
	      this.deleteProject(pageIdx);

	      var currentProject = Store.projectSettings[pageIdx];
	      __webpack_require__(11)({ev: __webpack_require__(13)['ClickDeleteCanvas'], orientation: currentProject.orientation === "Landscape" ? "Landscape" : "Portrait"});
	    },
	    notifyAddNewUploadedImgIntoPages: function() {
	      if(!(typeof(Store.watchData.replacePageId) == "number")) {
	        console.log(this.sharedStore.newUploadedImg[0]);
	        this.fillImageIntoBlankPage(this.sharedStore.newUploadedImg);
	      } else {
	        this.replacePageImage(this.sharedStore.newUploadedImg);
	      }
	      this.sharedStore.newUploadedImg.length=0;
	    }
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {
	// component -- action panel
	module.exports = {
		template: '<div class="bed-actionpanel-top">' +
								'<div style="height: 66px;text-align: center;">' +
									'<div class="button action-item" style="margin: 30px 40px 20px 0; width: 120px;height: 28px;line-height: 28px;border-radius: 14px;text-align: center;font-size: 12px; font-weight: 500;display:none;" v-on:click="handleAddText()">Add Text</div>' +
									// '<div v-show="showRotate" class="button action-item" style="margin: 30px 0 20px 0; width: 120px;height: 28px;line-height: 28px;border-radius: 14px;text-align: center;font-size: 12px; font-weight: 500;" v-on:click="handleRotate()">Rotate</div>' +
									'<div v-show="showRotate" v-bind:class="{button:rotated,\'button-white\':!rotated}" class="action-item font-normal" style="border:1px solid #393939;margin: 30px 0 10px 0; width: 120px;height: 24px;line-height: 24px;border-radius: 14px 0 0 14px ;text-align: center;font-size: 12px;" v-on:click="handleRotate(\'H\')">Landscape</div>' +
									'<div v-show="showRotate" v-bind:class="{button:!rotated,\'button-white\':rotated}" class="action-item font-normal" style="border:1px solid #393939;;margin: 30px 0 10px 0; width: 120px;height: 24px;line-height: 24px;border-radius: 0 14px 14px 0;text-align: center;font-size: 12px;" v-on:click="handleRotate(\'V\')">Portrait</div>' +
									'<div class="button action-item" style="margin-top: 30px; margin-bottom: 20px; width: 120px;height: 28px;line-height: 28px;border-radius: 14px;text-align: center;font-size: 12px; font-weight: 500;display:none;" id="show-edit-matt" v-on:click="handleEdit()">Setting</div>' +
								'</div>' +
							'</div>',
		data: function() {
			return {
				privateStore: {
					showRotate : true
				},
				sharedStore: Store,
				rotated : ''
			};
		},
		computed : {
			rotated: function(){
				return this.sharedStore.projectSettings[this.sharedStore.currentSelectProjectIndex].rotated;
			},
			showRotate : function() {
				var currentProject = Store.projectSettings[Store.currentSelectProjectIndex],
					currentSize    = currentProject.size;
				if(currentSize.split("X")[0] === currentSize.split("X")[1]){
					return false;
				}else{
					return true;
				};
			}
		},
	  methods: {
	    handleAddText: function() {
	      this.$dispatch("dispatchShowAddText");
	    },

			handleRotate: function(direction) {
				var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
				if((currentProject.rotated && currentProject.orientation === "Landscape" && direction === "V")
					|| (!currentProject.rotated && currentProject.orientation === "Portrait" && direction === "H")
				){
					this.sharedStore.isSwitchLoadingShow = true;
					currentProject.rotated=!currentProject.rotated;
					currentProject.orientation = currentProject.orientation === "Landscape" ? "Portrait" : "Landscape";
					__webpack_require__(11)({ev: __webpack_require__(13).SwitchOrientation,orientation: currentProject.orientation === "Landscape" ? "Landscape" : "Portrait"});
					this.$dispatch("dispatchRotate");
					this.sharedStore.pages[Store.selectedPageIdx].canvas.pageItems[0].handleRepaint();
					//this.$dispatch("dispatchRotateTemplate");
				}
			},

			handleEdit: function() {
				this.$dispatch("dispatchShowMattingGlassEdit");
			}
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {
	// component -- action panel
	module.exports = {
		template: '<div v-show="false" v-bind:style="topStyle" class="bed-actionpanel-bottom">' +
	                '<div style="height: 34px;text-align: center;">' +
	                  '<div class="action-item" v-on:click="changePage(currentPage !== \'Front\')" v-bind:style="{ marginTop:marginTop }" style="cursor: pointer;background:#f6f6f6;border:1px solid #d6d6d6; width: 140px;height: 22px;line-height: 22px;border-radius: 4px;overflow:hidden;">' +
	                    '<span style="width:20px;margin-right: 6px;margin-top:6px;font-size: 0px;">'+
	                        '<img src="./assets/img/icon/fresh.svg" height="10" alt="Change Page" title="Change Page" />' +
	                    '</span>' +
	                    '<span class="font-book" style="font-size:12px;color:#7b7b7b;">{{ currentPage }}</span>'+
	                  '</div>' +
	                '</div>' +
	              '</div>',
		data: function() {
			return {
				privateStore: {},
				sharedStore: Store
			};
		},
		computed: {
	      marginTop: function() {
	        // return this.sharedStore.isPreview?'0':'10px';
	        return 0;
	      },
	      currentPage: function() {
	        if(this.sharedStore.isFrontPage){
	        	return 'Front';
	        }
	        return 'Back';
	      },
	      topStyle: function() {
	        if(this.sharedStore.isPreview){
	            return{
	                position: 'relative',
	                top: '0px',
	                zIndex: 99999
	            }
	        }else{
	            return{
	                top: '0'
	            }
	        }
	      },
	  },
	  methods: {
			changePage: function(toFrontPage) {
				var isFrontPage = this.sharedStore.isFrontPage;
	      var trackerKey = this.sharedStore.isPreview ? 'SwitchSideInPreview' : 'SwitchSide';
	      if(isFrontPage && !toFrontPage){
					this.sharedStore.isFrontPage = false;
	        __webpack_require__(11)({ev: __webpack_require__(13)[trackerKey],side: 'back', isFromFactory: this.sharedStore.isFromFactory});
				};
				if(!isFrontPage && toFrontPage){
					this.sharedStore.isFrontPage = true;
	        __webpack_require__(11)({ev: __webpack_require__(13)[trackerKey],side: 'front', isFromFactory: this.sharedStore.isFromFactory});
				};
			}
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {var Vue = __webpack_require__(31);
	var CompOption = Vue.extend(__webpack_require__(64));
	var UtilCrop = __webpack_require__(35);
	var UtilWindow = __webpack_require__(46);
	var ImageListManage = __webpack_require__(25);
	var ParamsManage = __webpack_require__(26);
	// var ProjectManage = require('ProjectManage');
	// var SpecController = require('SpecController');
	var CanvasController = __webpack_require__(24);
	var ImageController = __webpack_require__(33);
	// var TextController = require('TextController');
	// var WarnController = require("WarnController");

	// component -- container

	module.exports = {
	  template: '<div class="flip-container" v-bind:style="topStyle" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" style="position:relative;">'+
	                '<span v-if="sharedStore.isPreview" class="preview-blockName font-normal" >{{previewBlockIndex}} / {{totalPageNum}}</span>'+
	                /*'<span v-if="!main" class="blockName font-light" v-bind:class="{active: idx == sharedStore.selectedPageIdx}">Canvas {{showIndex}}</span>'+*/
	                '<div v-if="main &&　sharedStore.isSwitchLoadingShow && !sharedStore.isPageLoadingShow" style="width: 98px;height: 98px;background: #fff;border: 1px solid #7b7b7b;border-radius: 12px;position: absolute;top: 50%;left: 50%;margin: -42.5px 0 0 -42.5px;z-index: 9999;text-align: center;">'+
	                    '<img src="assets/img/Loading.gif" width="50px" height="50px" title="Switching" alt="Switching" style="margin-top:15px;">' +
	                    '<span class="font-light" style="position: relative;top: -8px;color: #7d7d7d;font-size: 12px;">Loading...</span>'+
	                '</div>'+
	                '<div class="flipper" v-bind:style="flipperStyle" style="margin: 0 auto;">'+
	                    '<div v-show="!main || isFrontPageShow" id="box-canvasbg{{idx}}{{main ? \'Main\' : \'\'}}" v-bind:style="frontPageStyle" style="position: absolute;overflow: hidden;z-index:2;">' +
	                      // '<img v-bind:src="bgPath" draggable="false" alt="Background image is missing :(" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%;" />' +
	                      '<div style="position: relative;width: 100%; height: 100%; overflow: hidden;">' +
	                        '<div class="bed-operation" id="container{{idx}}{{main ? \'Main\' : \'\'}}" v-bind:style="{ top: privateStore.canvasTop + \'px\', left: privateStore.canvasLeft + \'px\', cursor: !sharedStore.isPreview ? \'pointer\' : \'default\' }" style="position: relative; overflow: hidden;background: #f0f0f0;">' +
	                          '<bar-panel v-show="!sharedStore.isPreview && isShowHandle && main"></bar-panel>'+
	                          '<handle v-if="!sharedStore.isPreview" v-bind:id="privateStore.handleId" v-bind:main="main" v-bind:is-Show-Handles="privateStore.isShowHandle" v-bind:is-Corner-Handles="privateStore.isCornerHandles" v-bind:is-Side-Handles="privateStore.isSideHandles" />'+
	                        '</div>' +
	                      '</div>' +
	                      '<bg-layer v-show="!sharedStore.isCanvas" v-bind:idx="idx" v-bind:ratio="privateStore.ratio" v-bind:main="main" v-bind:width="Math.floor(privateStore.operationWidth)" v-bind:height="Math.floor(privateStore.operationHeight)"></bg-layer>' +
	                      // '<screenshot-element  v-show="sharedStore.isCanvas" v-bind:width="privateStore.operationWidth" v-bind:height="privateStore.operationHeight"></screenshot-element>' +
	                      '<mirror-element v-bind:idx="idx" v-bind:main="main" v-bind:ratio="privateStore.ratio" v-show="sharedStore.isCanvas"></mirror-element>' +
	                    '</div>'+
	                    /*'<div v-bind:style="backPageStyle" style="position: absolute;overflow: hidden;background-size:100% 100%;transform: rotateY(180deg);z-index:1;">'+
	                      '<img v-if="privateStore.isShowBackLogo" src="assets/img/back-logo.svg" v-bind:style="backLogoStyle">'+
	                    '</div>'+*/
	                    '<div class="flip-remark" v-if="!main && sharedStore.isRemark">' +
	                      '<input type="checkbox" v-el:remark-input @click="onToggleRemark">' +
	                    '</div>' +
	                '</div>'+
	                '<option-element v-if="!main" v-bind:id="idx" v-bind:opacity="opacity" style="box-sizing:border-box; width:290px;"></option-element>' +
	            '</div>',
	  props: ['main', 'idx'],
	  data: function() {
	    return {
	      privateStore: {
	        ratio: 1,
					operationWidth: 0,
					operationHeight: 0,
					operationPaddingTop: 0,
					operationPaddingLeft: 0,
					canvasTop: 0,
					canvasLeft: 0,
	        handleId: 'bg',
	        isShowHandle: true,
	        isCornerHandles: false,
	        isSideHandles: false,
	        oriLogoImage: {
	          width: 86,
	          height: 32,
	          bottom: 82
	        },
	        isShowBackLogo: false,
	        hoverShowDeleteIcon: false
				},
	      idx: 0,
				sharedStore: Store,
	      isFrontPageShow: true,
	      isCategoryCanvas : false,
	      containerRotateAngel: Store.isFrontPage ? 0 : -180
	    };
	  },
	  computed: {
	    backLogoStyle: function() {
	      var oriLogoImage = this.privateStore.oriLogoImage;
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	      var width = oriLogoImage.width * currentCanvas.foreground.ratioX * currentCanvas.ratio;
	      var height = oriLogoImage.height * currentCanvas.foreground.ratioY * currentCanvas.ratio;
	      var bottom = oriLogoImage.bottom * currentCanvas.foreground.ratioY * currentCanvas.ratio;
	      var left = this.privateStore.operationWidth / 2 - width / 2;

	      return {
	        width: width + 'px',
	        height: height + 'px',
	        bottom: bottom + 'px',
	        position: 'absolute',
	        left: left + 'px',
	        margin: '0 auto'
	      }
	    },
	    containerRotateAngel: function() {
	      return this.sharedStore.isFrontPage || !this.main ? 0 : -180;
	    },
	    flipperStyle: function(){

	      if(this.sharedStore.isPreview){
	        return {
	           width: this.privateStore.operationWidth + (this.main ? 2 * this.operationPaddingRight : 0) + 'px',
	           height: this.privateStore.operationHeight + 'px',
	           opacity: this.opacity,
	           position: 'relative',

	        }

	      }else{
	        return {
	           width: this.privateStore.operationWidth + (this.main ? 2 * this.operationPaddingRight : 0) + 'px',
	           height: this.privateStore.operationHeight + 'px',
	           transform: 'translateX(-50%)',
	           opacity: this.opacity,
	           position: 'absolute',
	           bottom: '30px',
	           left: '50%'

	        }

	      }
	      
	    },
	    backfaceVisibility: function() {
	      var nAgt = navigator.userAgent;
	      var isIE = (nAgt.indexOf('MSIE') != -1) || (nAgt.indexOf('Trident/') != -1);
	      if (isIE) {
	        return undefined;
	      }
	      return 'hidden';
	    },
	    frontPageStyle: function(){
	      return {
	         width: Math.floor(this.privateStore.operationWidth) + 'px',
	         height: Math.floor(this.privateStore.operationHeight) + 'px',
	         margin: this.main ? (this.operationMarginTop + 'px ' + this.privateStore.operationPaddingRight + 'px 0 ' + this.operationMarginLeft  + 'px') : 0,
	         opacity: this.opacity,
	         backfaceVisibility: this.backfaceVisibility
	      }
	    },
	    backPageStyle: function() {
	      var nAgt = navigator.userAgent;
	      var isIE = (nAgt.indexOf('MSIE') != -1) || (nAgt.indexOf('Trident/') != -1);
	      return {
	        width: this.privateStore.operationWidth + 'px',
	        height: this.privateStore.operationHeight + 'px',
	        margin: this.main ? (this.operationMarginTop + 'px ' + this.privateStore.operationPaddingRight + 'px 0 ' + this.operationMarginLeft  + 'px') : 0,
	        opacity: this.opacity,
	        backgroundImage: this.backPageUrl ? 'url(' + this.backPageUrl + ')' : undefined,
	        backfaceVisibility: isIE ? undefined : 'hidden'
	      }
	    },

	    operationMarginTop: function() {

				return this.privateStore.operationPaddingTop;
			},

			operationMarginLeft: function() {
				return this.privateStore.operationPaddingLeft;
			},

	    backPageUrl: function() {
	      if (this.sharedStore.watches.isProjectLoaded) {
	        var type = 'foreground',
	            SpecManage = __webpack_require__(18),
	            currentProject = Store.projectSettings[Store.currentSelectProjectIndex],
	            keyPatterns = SpecManage.getVariableKeyPatternById(type).split("-"),
	            cur = keyPatterns.indexOf("size"),
	            size = currentProject['size'].toLowerCase(),
	            rotated = currentProject.rotated,
	            path = 'assets/img/types/';
	        keyPatterns.splice(cur,1);
	        for(var i=0;i<keyPatterns.length;i++){
	          var value = currentProject[keyPatterns[i]];
	          if(value && value.toLowerCase()!=="none"){
	            path += value + "/";
	          }
	        }
	        if(rotated){
	          size = size.split("x")[1]+"x"+size.split("x")[0];
	        }
	        return path + size + '/' + size + '_back.png?version=21'
	      }
	    },

	    opacity : function(){
	        if(this.main && this.sharedStore.isSwitchLoadingShow){
	          return "0";
	        }else{
	          return "1";
	        }
	    },

	    isShowHandle:function(){
	         var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	         if(!Store.isLostFocus){
	            return true;
	         }else{
	            return false;
	         }
	    },
	    windowZindex: function() {
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	          elementTotal = currentCanvas.params.length || 0;
	      return (elementTotal + 10) * 100 -10;
	    },
	    topStyle: function(){
	        if(this.sharedStore.isPreview){
	            return{
	                display: this.main ? 'block' : 'inline-block',
	                margin: this.main ? '' : '0 8px',
	                width: this.privateStore.operationWidth + (this.main ? (this.operationMarginLeft + this.privateStore.operationPaddingRight) : 0) + 'px',
	                height: this.privateStore.operationHeight + 'px',
	            }
	        }else if(this.sharedStore.isRemark) {
	          return{
	              display: this.main ? 'block' : 'inline-block',
	              margin: this.main ? '66px 0 0 0' : '0 8px',
	              width: this.privateStore.operationWidth + (this.main ? 2 * this.operationMarginLeft : 0) + 'px',
	              height: this.privateStore.operationHeight + 'px'
	          }
	        }else{
	            var currentPage = Store.pages[this.idx];

	            return{
	                display: currentPage.isDeleted ? 'none' : 'block',
	                margin: this.main ? '' : '0 8px 40px 8px',
	                /*width: this.privateStore.operationWidth + (this.main ? (this.operationMarginLeft + this.privateStore.operationPaddingRight) : 0) + 'px',
	                height: this.privateStore.operationHeight + 'px'*/
	                width: "450px",
	                height: "478px",
	                float : "left"
	            }
	        }
	    },
	    isShowDeleteIcon: function(){
	        var visiablePageNum = 0;
	        this.sharedStore.pages.forEach(function(item){
	           if(!item.isDeleted){visiablePageNum++};
	        });
	        return visiablePageNum > 1;
	    },
	    previewBlockIndex: function(){
	      var blockIndex = 0;
	      for(var i=0; i <= this.sharedStore.selectedPageIdx; i++){
	        if(!this.sharedStore.pages[i].isDeleted){
	          blockIndex++;
	        }
	      }
	      return blockIndex;
	    },
	    totalPageNum: function(){
	      var pageNum = 0;
	      this.sharedStore.pages.forEach(function(item){
	        if(!item.isDeleted){
	           pageNum++;
	        }
	      });
	      return pageNum;
	    }
		},
	  methods: {
	    setId : function(idx, main, showIndex){
	      this.idx = idx;
	      this.main = main;
	      this.showIndex = showIndex;
	    },
	    onMouseEnter: function(){
	      this.toogleDeleteIcon(true);

	      if(!this.sharedStore.isHoverShowOption)return;
	      this.opacity = 100;
	    },
	    onMouseLeave: function(){
	      this.toogleDeleteIcon(false);

	      if(!this.sharedStore.isHoverShowOption)return;
	      this.opacity = 0;
	    },
	    initCanvas: function() {
				var _this = this,
						store = _this.sharedStore,
						currentCanvas = store.pages[this.idx].canvas;

				// if(!Store.isPreview) {
				// 	if(currentCanvas.isInited) {
				// 		// already initialized, write back/sync params(ONLY current actived page!!)
				// 		_this.syncParamsData();
				// 	}
				// 	else {
				// 		// not initialized, proceed to read params only
				// 		currentCanvas.isInited = true;
				// 	};
				// };

				if(Store.pages.length > 1) {
					Store.isChangePageShow = true;
				};

				_this.initWindow();

	      // $('.bed-operation').css('width', currentCanvas.width).css('height', currentCanvas.height);
	      $('#container' + this.idx +  (this.main ? 'Main' : '')).css('width', currentCanvas.oriWidth*this.privateStore.ratio).css('height', currentCanvas.oriHeight*this.privateStore.ratio);
	      var extraName = this.main ? 'Main' : '';

				for(var i = 0; i < currentCanvas.params.length; i++) {
				  // init element
	        CanvasController.createElement(i,this.idx,this.privateStore.ratio, extraName);
				};
	      // select the front element
	      currentCanvas.selectedIdx = ParamsManage.getFrontElementIndex();

				ImageListManage.freshImageUsedCount();

				// CanvasController.freshElementDepth();

				// CanvasController.hideSpineLines();
			},

	    clearCanvas: function(pageIdx) {
	      var useIndex = (typeof pageIdx !== 'undefined') ? pageIdx : Store.currentSelectProjectIndex;
	      // var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	      var currentCanvas = Store.pages[useIndex].canvas;

	      for(var i = currentCanvas.params.length - 1; i >= 0; i--) {
	        var elementId = currentCanvas.params[i].id;
	        CanvasController.deleteElement(i, elementId,useIndex);
	      };
	    },
	    clearCenterElement: function(){
	      for (var j = 0; j < Store.pages.length; j++) {
	          var canvas = Store.pages[j].canvas;
	          for (var i = 0; i < canvas.centerElements.length; i++) {
	                  canvas.centerElements[i].$destroy(true);
	                  canvas.centerElements.splice(i, 1);
	          }
	      }
	    },

	    initWindow: function() {
	      var _this = this,
	          store = _this.sharedStore,
	          currentCanvas = store.pages[this.idx].canvas;

	      // get the canvas size params
	      if(store.isPreview) {
	        var boxLimit = UtilWindow.getBoxWH(0,150);
	      }
	      else {
	        var boxLimit = UtilWindow.getBoxWH(280,236);
	      };
	      var setting = store.projectSettings[this.idx];
	      if(!this.main){
	        // if(setting.size === '8X10'){
	        //   boxLimit.width = 330;
	        //   boxLimit.height = 330;
	        // }else{
	        //   boxLimit.width = 440;
	        //   boxLimit.height = 440;
	        // }

	        boxLimit.width = Store.boxLimit[setting.size].width;
	        boxLimit.height = Store.boxLimit[setting.size].height;
	        
	      }

	      // console.log("cur",currentCanvas)
	      if(boxLimit.width > 0 && boxLimit.height > 0) {
	        var objWidth = currentCanvas.oriBgWidth;
	        var objHeight = currentCanvas.oriBgHeight;
	        var expendLeft = 0;
	        var expendTop = 0;
	        var wX = boxLimit.width / objWidth,
	            hX = boxLimit.height / objHeight;
	        if(wX > hX) {
	          // resize by height
	          this.privateStore.ratio = hX;
	          if(!this.main) {
	            currentCanvas.ratio = hX;
	            currentCanvas.width = currentCanvas.oriWidth * currentCanvas.ratio;
	            currentCanvas.height = currentCanvas.oriHeight * currentCanvas.ratio;
	            currentCanvas.x = currentCanvas.oriX * currentCanvas.ratio;
	            currentCanvas.y = currentCanvas.oriY * currentCanvas.ratio;
	            currentCanvas.bgWidth = currentCanvas.oriBgWidth * currentCanvas.ratio;
	            currentCanvas.bgHeight = currentCanvas.oriBgHeight * currentCanvas.ratio;
	          }

	          // when resize by height, the canvas view width is smaller than boxLimit.width, we should make it align center anyway
	          // _this.privateStore.operationPaddingLeft = (boxLimit.width - currentCanvas.oriBgWidth * this.privateStore.ratio) / 2;
	          //  为了让上传 云朵居中做的处理。
	          _this.privateStore.operationPaddingLeft = (boxLimit.width - currentCanvas.oriWidth * this.privateStore.ratio) / 2 - (currentCanvas.oriX * this.privateStore.ratio);
	          _this.privateStore.operationPaddingRight = (boxLimit.width) / 2 - ((currentCanvas.oriBgWidth - currentCanvas.oriWidth /2 - currentCanvas.oriX) * this.privateStore.ratio);
	        }
	        else {
	          // resize by width
	          this.privateStore.ratio = wX;
	          if(!this.main) {
	            currentCanvas.ratio = wX;
	            currentCanvas.width = currentCanvas.oriWidth * currentCanvas.ratio;
	            currentCanvas.height = currentCanvas.oriHeight * currentCanvas.ratio;
	            currentCanvas.x = currentCanvas.oriX * currentCanvas.ratio;
	            currentCanvas.y = currentCanvas.oriY * currentCanvas.ratio;
	            currentCanvas.bgWidth = currentCanvas.oriBgWidth * currentCanvas.ratio;
	            currentCanvas.bgHeight = currentCanvas.oriBgHeight * currentCanvas.ratio;
	          }

	          _this.privateStore.operationPaddingLeft = 0 + expendLeft * this.privateStore.ratio;
	        };

	        _this.privateStore.operationPaddingTop = 0 + expendTop * this.privateStore.ratio;
	        _this.privateStore.operationWidth = currentCanvas.oriBgWidth * this.privateStore.ratio;
	        _this.privateStore.operationHeight = currentCanvas.oriBgHeight * this.privateStore.ratio;
	        _this.privateStore.canvasTop = currentCanvas.oriY * this.privateStore.ratio;
	        _this.privateStore.canvasLeft = currentCanvas.oriX * this.privateStore.ratio;

	      }
	      else {
	        // Window size is too small
	        if(store.isPreview) {
	          console.log('Window size is too small!');
	        }
	        else {
	          alert('Window size is too small!');
	        };
	      };
	    },

	    handleOndrop: function(obj) {
	      this.sharedStore.isShowProgress = true;
	      var _this = this,
	          store = _this.sharedStore,
	          currentCanvas = store.pages[store.selectedPageIdx].canvas;

	      Store.isLostFocus = true;
	      // obj = { isBg: true/false }
	      if(obj) {
	        var newAdded = obj.newAdded,
	            isBg = obj.isBg;

	        var imageId = store.dragData.imageId,
	            sourceImageUrl = store.dragData.sourceImageUrl,
	            // imageId = ev.dataTransfer.getData('imageId'),
	          // 	sourceImageUrl = ev.dataTransfer.getData('sourceImageUrl'),
	            // imageWidth = ev.dataTransfer.getData('imageWidth'),
	            // imageHeight = ev.dataTransfer.getData('imageHeight'),
	            idx;

	        if(newAdded) {
	          // adding new element
	          idx = currentCanvas.params.length - 1;
	        }
	        else if(isBg) {
	          idx = 0;
	        }
	        else {
	          idx = obj.idx;
	        };

	        currentCanvas.params[idx].imageId = imageId;
	        currentCanvas.params[idx].imageRotate = 0;

	        var imageDetail = ImageListManage.getImageDetail(imageId);
	        if(imageDetail) {
	          currentCanvas.params[idx].imageGuid = imageDetail.guid;
	          currentCanvas.params[idx].imageWidth = imageDetail.width;
	          currentCanvas.params[idx].imageHeight = imageDetail.height;
	        }

	        var currentProject = Store.projectSettings[Store.selectedPageIdx];
	        var orientation = currentProject.orientation;
	        // 根据图片的宽高进行 模版的自动调整。
	        if ( (imageDetail.width > imageDetail.height && orientation === 'Portrait')
	          || (imageDetail.height > imageDetail.width && orientation === 'Landscape')
	        ) {
	          var _this = this;
	          setTimeout(function(){
	            _this.sharedStore.isSwitchLoadingShow = true;
	            currentProject.rotated=!currentProject.rotated;
	            currentProject.orientation = currentProject.orientation === "Landscape" ? "Portrait" : "Landscape";
	            _this.$dispatch("dispatchRotate");
	            // _this.sharedStore.vm.$broadcast('notifyRefreshItems');
	            _this.sharedStore.pages[Store.selectedPageIdx].canvas.pageItems[0].handleRepaint();
	            _this.$dispatch("dispatchRotateTemplate");
	          })
	        } else {

	            var defaultCrops = UtilCrop.getDefaultCrop(currentCanvas.params[idx].imageWidth, currentCanvas.params[idx].imageHeight, currentCanvas.params[idx].width, currentCanvas.params[idx].height);
	            var px = defaultCrops.px,
	                py = defaultCrops.py,
	                pw = defaultCrops.pw,
	                ph = defaultCrops.ph,
	                width = currentCanvas.params[idx].width * currentCanvas.ratio / pw,
	                height = currentCanvas.params[idx].height * currentCanvas.ratio / ph;

	            // adding the crop settings to element
	            currentCanvas.params[idx].cropX = imageDetail.width * px;
	            currentCanvas.params[idx].cropY = imageDetail.height * py;
	            currentCanvas.params[idx].cropW = imageDetail.width * pw;
	            currentCanvas.params[idx].cropH = imageDetail.height * ph;

	            currentCanvas.params[idx].cropPX = px;
	      			currentCanvas.params[idx].cropPY = py;
	      			currentCanvas.params[idx].cropPW = pw;
	      			currentCanvas.params[idx].cropPH = ph;

	            var UtilProject = __webpack_require__(21);
	            var encImgId = UtilProject.getEncImgId(imageId);
	            var qs = UtilProject.getQueryString({
	              encImgId: encImgId,
	              px: px,
	              py: py,
	              pw: pw,
	              ph: ph,
	              width: Math.round(width),
	              height: Math.round(height)
	            });

	            currentCanvas.params[idx].url = '/imageBox/liveUpdateCropImage.ep?' + qs;
	            currentCanvas.params[idx].isRefresh = true;

	            currentCanvas.params[idx].sourceImageUrl = sourceImageUrl;
	        }

	        ImageListManage.freshImageUsedCount();
	        _this.freshImageList();
	        // _this.$dispatch('dispatchChangeWarn');

	      };
	    },

	    freshImageList: function() {
	      this.$dispatch('dispatchImageList');
	    },

	    addImage: function(oParams) {
	      if(oParams && oParams.id != undefined && oParams.id != null) {
	        oParams.x = oParams.x || 0;
	        oParams.y = oParams.y || 0;
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	        var defaultImagePositions = CanvasController.getDefaultNewElementPosition({ x: oParams.x, y: oParams.y });
	        if(currentCanvas.params.length) {
	          var newId = parseInt(currentCanvas.params[currentCanvas.params.length - 1].id) + 1
	        }
	        else {
	          var newId = 0;
	        };

	        // create a new image element at first
	        var newImageParams = {
	          id: newId,
	          elType: 'image',
	          url: '',
	          isRefresh: false,
	          x: defaultImagePositions.x,
	          y: defaultImagePositions.y,
	          width: defaultImagePositions.width,
	          height: defaultImagePositions.height,
	          rotate: 0,
	          dep: currentCanvas.params.length,
	          imageId: '',
	          cropPX: 0,
	          cropPY: 0,
	          cropPW: 1,
	          cropPH: 1
	        };

	        ImageController.createImage(newImageParams);

	        // now push in the image automatically
	        var obj = { newAdded: true, isBg: false };
	        // Store.dropData.ev = obj.ev;
	        Store.dropData.newAdded = obj.newAdded;
	        Store.dropData.isBg = obj.isBg;

	        Store.watches.isOnDrop = true;
	        CanvasController.autoLayout();
	      };
	    },

	    removeImage: function(idx) {
	      ImageController.deleteImage(idx,true);

	      ImageListManage.freshImageUsedCount();
	      this.freshImageList();
	    },

	    removeText: function(idx) {
	      TextController.deleteText(idx);
	    },

	    refreshCanvas: function() {
	      this.$broadcast('notifyRefreshBackground');
	      // Store.vm.$broadcast('notifyRefreshBackground');


	      this.clearCanvas();
	      this.freshImageList();
	      this.initCanvas();
	    },

	    // 解决FireFox未彻底清除canvas问题
	    refreshCanvasWithDelay: function() {
	      var _this = this;

	      setTimeout(function() {
	        _this.$broadcast('notifyRefreshBackground');

	        // _this.clearCanvas();
	        _this.clearCenterElement();
	        _this.freshImageList();
	        _this.initCanvas();
	      }, 2000);
	    },
	    handleDeleteProject: function(){
	      var currentCanvas = this.sharedStore.pages[this.idx].canvas;
	      var hasImage = currentCanvas.params.some(function(element){
	          return (element.elType==='image' && element.imageId);
	      });
	      if(hasImage) {
	          this.sharedStore.vm.$dispatch("dispatchShowPopup", { type : 'deleteProject', status : 0, pageIdx: this.idx,message:"This operation will delete this canvas, would you like to continue?" });
	      } else {
	          this.sharedStore.vm.$broadcast('notifyDeleteProject', this.idx);
	      }
	      __webpack_require__(11)({ev: __webpack_require__(13)['RemoveBlock'], hasImage: hasImage});
	    },
	    handleRepaint: function(){
	        this.clearCanvas(this.idx);
	        this.freshImageList();
	        this.initCanvas();
	    },
	    onToggleRemark: function(event) {
	      Store.projectSettings[this.idx].quantity = Store.projectSettings[this.idx].quantity === 1 ? 0 : 1;
	      this.$els.remarkInput.checked = Store.projectSettings[this.idx].quantity === 1;
	    },
	    toogleDeleteIcon: function(isShow){
	        this.privateStore.hoverShowDeleteIcon = isShow;
	    }
	  },
	  events: {
	    // 旋转后重刷参��?+ 重绘

	    notifyRotate: function() {
	      CanvasController.fixRotatePhotoElement();
	      CanvasController.changeBorderToMirror(false,true);
	      CanvasController.freshPageData();
	      this.clearCenterElement();
	      this.initCanvas();

	    },

	    notifyRepaintProject: function() {
	      if(!this.main)return;
	      CanvasController.freshPageData();

	      this.refreshCanvas();
	    },

	    notifyPaint: function() {
	      CanvasController.loadProjectIntoPages();

	      this.freshImageList();
	      // this.clearCanvas();
	    	if(Store.pages.length !== 0) {
	        this.initCanvas();
	      } else {
	        Store.isPageLoadingShow = false;
	      }
	    },

	    // respond broadcast repaint
	    notifyRepaint: function(oldIdx) {
	    	if(oldIdx != undefined && oldIdx != null) {
	    		// user select another project
	    		if(!Store.isPreview) {
		    		// CanvasController.syncProjectData(oldIdx);
	    		};
	    	};

	    	// if(Store.pages.length > 0 && Store.pages[Store.selectedPageIdx].canvas.paper) {
	    	// 	Store.pages[Store.selectedPageIdx].canvas.paper.remove();
	    	// };
	      this.clearCanvas();

	    	// CanvasController.loadProjectIntoPages();

	    	this.freshImageList();
	      this.initCanvas();
	    },

	    notifyRepaintCenterContainer: function(){
	      if(!this.main)return;
	      this.clearCenterElement();
	      this.freshImageList();
	      this.initCanvas();
	    },

	    notifyRefreshCanvas: function() {
	      this.refreshCanvas();
	    },

	    notifyRemoveImage: function(idx) {
	      this.removeImage(idx);
	    },

	    notifyAddImage: function(oParams) {
	      this.addImage(oParams);
	    },

	    // capture dispatch depth to front
	    dispatchDepthFront: function(idx) {
	      // console.log('should change depth:', idx);
	      if(idx != undefined && idx != null) {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	        CanvasController.changeDepthValue({ idx: idx, targetDepth: currentCanvas.params.length - 1 });
	      };
	    },

	    dispatchDrop: function(oParams) {
	      this.addImage(oParams);
	    },
	    notifyApplyTemplate:function(xml){
	      // this.clearCanvas();
	      this.clearCenterElement();
	      var currentCanvas = Store.pages[this.idx].canvas;
	      currentCanvas.params=CanvasController.getTemplateParams(xml);
	      // this.sharedStore.pages[Store.selectedPageIdx].canvas.pageItems[0].handleRepaint();
	      this.initCanvas();
	    }
	  },
	  components: {
	    'option-element' : CompOption
	  },
	  ready: function() {
	    var _this = this;

	    _this.$watch('sharedStore.watches.isChangeDepthFront', function() {
				if(_this.sharedStore.watches.isChangeDepthFront) {
					_this.sharedStore.watches.isChangeDepthFront = false;
	        var idx = _this.sharedStore.watchData.changeDepthIdx;
	        _this.sharedStore.watchData.changeDepthIdx = '';

	        // console.log('should change depth:', idx);
	        if(idx != null && idx !== '') {
	          var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	          CanvasController.changeDepthValue({ idx: idx, targetDepth: currentCanvas.params.length - 1 });
	        };
				};
			});

	    _this.$watch('sharedStore.watches.isOnDrop', function() {
	      if(_this.sharedStore.watches.isOnDrop) {
	        _this.sharedStore.watches.isOnDrop = false;
	        _this.handleOndrop(_this.sharedStore.dropData);
	      };
	    });

	    _this.$watch('sharedStore.watches.isProjectComplete', function() {
	      if(_this.sharedStore.watches.isProjectComplete) {
	       var Prj = _this.sharedStore.projectSettings[_this.sharedStore.currentSelectProjectIndex] || Store.baseProject;
	          if(Prj.category==="categoryCanvas"){
	              _this.isCategoryCanvas = true;
	          }else{
	              _this.isCategoryCanvas = false;
	          };

	          if(Prj.product==="LSC"){
	              _this.privateStore.isShowBackLogo = true;
	          }
	      };
	    });

	    _this.$watch('sharedStore.isReprintAll', function() {
	      if(!_this.main) {
	        Store.projectSettings[_this.idx].quantity = Store.isReprintAll ? 1 : 0;
	        _this.$els.remarkInput.checked = Store.isReprintAll;
	      }
	    });

	    _this.$watch('sharedStore.watches.isRemoveElement', function() {
				if(_this.sharedStore.watches.isRemoveElement) {
					_this.sharedStore.watches.isRemoveElement = false;
	        var idx = _this.sharedStore.watchData.removeElementIdx,
	            type = _this.sharedStore.watchData.removeElementType;
	        _this.sharedStore.watchData.removeElementIdx = '';
	        _this.sharedStore.watchData.removeElementType = '';

	        if(idx != null && idx !== '') {
	          if(type === 'image') {
	            _this.removeImage(idx);
	          }
	          else {
	            _this.removeText(idx);
	          };
	        };
				};
			});

	    _this.$watch('sharedStore.isFrontPage', function() {
	      if(_this.sharedStore.isFrontPage) {
	        _this.isFrontPageShow = true;
	      } else {
	        setTimeout(function(){
	          _this.isFrontPageShow = false;
	        }, 150);
	      }
	    });

	    if(this.main){
	      _this.$watch('idx', function() {
	        if(this.sharedStore.watches.isProjectLoaded){
	            //_this.$dispatch("dispatchClearMirror",_this.idx);
	            _this.sharedStore.isSwitchLoadingShow = true;
	            _this.clearCenterElement();
	            _this.freshImageList();
	            _this.initCanvas();
	        }
	      });
	    }

	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {module.exports = {
	  template:
	    '<div class="item-option" v-bind:style="containerStyle" style="position: absolute; bottom: 4px;left: 50%;transform: translateX(-50%);" v-show="!sharedStore.isPreview">' +
	      '<div v-if="!sharedStore.isRemark" class="option-list-item" @click="handleEdit()">' +
	        '<img style="width: 16.8px; height: 16.8px; cursor: pointer;" src="./assets/img/edit.svg" />' +
	        '<div class="tool-tip">Edit Image<div class="tool-tip-triangle"></div></div>' +
	      '</div>' +
	      '<div v-if="!sharedStore.isRemark" class="option-list-item" @click="handleRotate()">' +
	        '<img style="width: 23.8px; height: 23.8px; position: relative; top: -3px; cursor: pointer;" src="./assets/img/rotate.svg" />' +
	        '<div class="tool-tip">Rotate Canvas<div class="tool-tip-triangle"></div></div>' +
	      '</div>' +
	      '<div v-if="!sharedStore.isRemark" class="option-list-item" @click="handleDelete()">' +
	        '<img style="width: 13.9px; height: 13.9px; cursor: pointer; position: relative; top: 1px;" src="./assets/img/remove.svg" />' +
	        '<div class="tool-tip">Delete Canvas<div class="tool-tip-triangle"></div></div>' +
	      '</div>' +

	      '<div class="size-dropdown-container">' +
	        '<div class="tool-tip">Switch Size<div class="tool-tip-triangle"></div></div>' +
	        '<div class="size-dropdown-value">{{prj.size}}<span class="triangle-down"></span></div>' +
	        '<select class="size-dropdown" @change="changeSize($event)" v-model="prj.size">' +
	          '<option v-for="size in allSize" :value="size.id" style="font-size:15px;">{{ size.title }}</option>' +
	        '</select>' +
	      '</div>' +
	    '</div>',
	  props: ['id', 'opacity'],
	  data: function() {
	    return {
	      privateStore: {
	        quantity: 1,
	      },
	      allSize: [],
	      sharedStore: Store,
	      prj: {
	        size: '',
	        paper: '',
	        quantity: 0,
	      }
	    };
	  },
	  computed: {
	      prj: function() {
	          var prj = this.sharedStore.projectSettings[this.id];
	          this.privateStore.quantity = prj.quantity;
	          return prj;
	      },
	      price: function() {
	          return this.sharedStore.projectSettings[this.id].price;
	      },
	      containerStyle: function() {
	        return {
	          opacity: this.opacity,
	          width: '240px',
	          boxSizing: 'border-box',
	        }
	      },
	      buttonStyle: function(){
	        return {
	          float: 'left',
	          width: '25%',
	          textAlign: 'center',
	          position: 'relative',
	        }
	      }
	  },
	  methods: {
	    changePageIdx: function() {
	      this.sharedStore.selectedPageIdx = this.id;
	      this.sharedStore.currentSelectProjectIndex = this.id;
	    },

	    changeSize: function(event) {
	      // 更新pageIdx
	      this.changePageIdx();

	      var selectedSize = event.target.value;
	      
	      //  更新完成后，改变尺寸
	      setTimeout(function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        currentProject.size = selectedSize;
	        
	        __webpack_require__(24).freshPageData(Store.currentSelectProjectIndex);
	        __webpack_require__(24).fixResizePhotoElement();

	        Store.pages[Store.selectedPageIdx].canvas.pageItems[0].handleRepaint();
	        Store.vm.$broadcast('notifyRepaintCenterContainer');

	        __webpack_require__(11)({ev: __webpack_require__(13).SwitchSize,size: selectedSize});
	      });
	    },

	    handleEdit: function() {
	      this.changePageIdx();

	      setTimeout(function() {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	        idx = currentCanvas.selectedIdx;
	  
	        Store.watchData.cropImageIdx = idx;
	        Store.watches.isCropThisImage = true;
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        __webpack_require__(11)({ev: __webpack_require__(13).ClickCropImage,orientation:currentProject.orientation});
	      });
	    },

	    handleRotate: function() {
	      // 更新pageIdx
	      this.changePageIdx();

	      // 更新完成后，旋转canvas
	      setTimeout(function() {
	        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	        currentProject.rotated = !currentProject.rotated;
	        currentProject.orientation = currentProject.orientation === "Landscape" ? "Portrait" : "Landscape";

	        Store.vm.$dispatch("dispatchRotate");
	        Store.pages[Store.selectedPageIdx].canvas.pageItems[0].handleRepaint();
	        __webpack_require__(11)({ev: __webpack_require__(13).SwitchOrientation,orientation: currentProject.orientation === "Landscape" ? "Landscape" : "Portrait"});
	      });
	    },

	    handleDelete: function(){
	      this.changePageIdx();

	      setTimeout(function() {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	        var hasImage = currentCanvas.params.some(function(element){
	          return (element.elType==='image' && element.imageId);
	        });
	        if(hasImage) {
	          Store.vm.$dispatch("dispatchShowPopup", { type : 'deleteProject', status : 0, pageIdx: Store.selectedPageIdx,message:"This operation will delete this canvas, would you like to continue?" });
	        } else {
	          Store.vm.$broadcast('notifyDeleteProject', Store.selectedPageIdx);
	        }
	      });
	    },
	    
	    fixList: function(type, oriAry) {
	        if (type && oriAry) {
	            var mapList = __webpack_require__(18).getOptions(type);
	            var newAry = [];
	            for (var i = 0; i < oriAry.length; i++) {
	                for (var j = 0; j < mapList.length; j++) {
	                    if (oriAry[i] === mapList[j].id) {
	                        var nid = oriAry[i];
	                        var SpecManage = __webpack_require__(18);
	                        var keyPatterns = SpecManage.getOptionMapKeyPatternById(type).split("-");
	                        var params = [];
	                        var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	                        for (var v = 0, q = keyPatterns.length; v < q; v++) {
	                            var key = currentProject[keyPatterns[v]];
	                            if (key) {
	                                var item = {
	                                    key: keyPatterns[v],
	                                    value: key
	                                };
	                                params.push(item);
	                            }
	                        }
	                        var res = SpecManage.getDisableOptionsMap(type, params);
	                        var resArray;
	                        if (res != null) {
	                            resArray = res.split(",")
	                        }
	                        var inDisableArray = false;
	                        for (var tt in Store.disableArray) {
	                            if (Store.disableArray[tt].value == oriAry[i]) {
	                                inDisableArray = true;
	                            }
	                        }
	                        if (inDisableArray || !res || (resArray && resArray.indexOf(nid) == -1)) {
	                            newAry.push({
	                                id: oriAry[i],
	                                title: mapList[j].name || mapList[j].title || ''
	                            });
	                        }

	                        break;
	                    };
	                };
	            };

	            return newAry;
	        };
	    },
	  },
	  events: {
	  },
	  ready: function() {
	      var _this = this;

	      this.changeSize = this.changeSize.bind(this);

	      _this.allSize = __webpack_require__(18).getAvailableOptions('size');
	      _this.allSize = _this.fixList("size", _this.allSize);

	      _this.$watch("sharedStore.isReprintAll",function(){
	          var prj = this.sharedStore.projectSettings[this.id];

	          if(!_this.sharedStore.isReprintAll){
	              prj.quantity = 0;
	              _this.privateStore.quantity = 0;
	          }else{
	              prj.quantity = _this.sharedStore.initQuantitys[_this.id] ;
	              _this.privateStore.quantity = _this.sharedStore.initQuantitys[_this.id];
	          }
	      });
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {
	var Jcrop = __webpack_require__(66);

	var UtilCrop = __webpack_require__(35);
	var UtilWindow = __webpack_require__(46);
	var ImageListManage = __webpack_require__(25);
	var ImageController = __webpack_require__(33);
	var CanvasController = __webpack_require__(24);

	// component -- image crop
	module.exports = {
		// template: '#t-image-crop',
		template: '<div class="bed-image-crop" v-show="sharedStore.isImageCropShow">' +
								'<div class="shadow-bg" v-bind:style="{ zIndex: windowZindex-1 }"></div>' +
								'<div class="box-image-crop" v-bind:style="{ zIndex: windowZindex }">' +
									'<div style="height: 40px:line-height: 40px;">' +
										// '<div v-on:click="hideImageCrop()" style="width: 40px;height: 40px;line-height: 40px;margin-left: 700px;font-size: 20px;text-align: center;cursor: pointer;" title="close"><i class="fa fa-close"></i></div>' +
										'<div style="width: 40px;height: 40px;margin-left: 700px;font-size: 20px;"><img src="../../static/img/close-normal.svg" width="16" height="16" v-on:click="hideImageCrop()" onmouseover="this.src = \'../../static/img/close-hover.svg\'" onmouseout="this.src = \'../../static/img/close-normal.svg\'" alt="close" title="close" style="margin-top: 24px; margin-left: 4px; cursor: pointer;" /></div>' +
									'</div>' +
									'<div style="margin: 0 40px;">' +
										'<div class="font-title t-left">Edit Image</div>' +
										'<div class="font-desc t-left">Image - {{ imageName }}</div>' +
									'</div>' +
									'<div style="margin: 30px auto 20px;width: 680px;">' +
										'<div id="box-crop">' +
											'<img id="image-tobecrop" src="" />' +
										'</div>' +
									'</div>' +
									'<div style="height: 46px;">' +
										// '<span class="button-circle" v-on:click="handleSendToBack()" style="display: inline-block; margin-left: 231px;height:46px;" title="send to back">' +
										// 	'<img src="../../static/img/send_to_back.png" onmouseover="this.src = \'../../static/img/send_to_back_hover.png\';" onmouseout="this.src = \'../../static/img/send_to_back.png\';" width="46" height="46" alt="send to back" />' +
										// '</span>' +
										'<span class="button-circle" v-on:click="doRotate(-90) | debounce" style="display: inline-block; margin-left: 291px;height:46px;" title="rotate left">' +
											'<img src="../../static/img/rotate_left.png" onmouseover="this.src = \'../../static/img/rotate_left_hover.png\';" onmouseout="this.src = \'../../static/img/rotate_left.png\';" width="46" height="46" alt="rotate left" />' +
										'</span>' +
										'<span class="button-circle" v-on:click="doRotate(90) | debounce" style="display: inline-block; margin-left: 70px;" title="rotate right">' +
											'<img src="../../static/img/rotate_right.png" onmouseover="this.src = \'../../static/img/rotate_right_hover.png\';" onmouseout="this.src = \'../../static/img/rotate_right.png\';" width="46" height="46" alt="rotate right" />' +
										'</span>' +
									'</div>' +
									'<div style="height: 20px;">' +
										// '<span style="display: inline-block; width: 96px; height: 20px; line-height: 20px; text-align: center; margin-left: 206px; font-size: 12px; color: #7a7a7a;">Send to back</span>' +
										'<span style="display: inline-block; width: 46px; height: 20px; line-height: 20px; text-align: center; margin-left: 291px; font-size: 12px; color: #7a7a7a;">- 90°</span>' +
										'<span style="display: inline-block; width: 46px; height: 20px; line-height: 20px; text-align: center; margin-left: 70px; font-size: 12px; color: #7a7a7a;">+ 90°</span>' +
									'</div>' +
									'<div class="button" v-on:click="doImageCrop()" style="display: inline-block; width: 160px;height: 40px;line-height: 40px;margin:25px 0 0 290px;text-align: center;font-size: 14px;" title="Click to crop image">Done</div>' +
									// '<span class="button-text" v-show="privateStore.isRemoveButtonShow" style="display: inline-block; position: relative; top: 10px; margin-left: 20px;" v-on:click="handleRemoveImage()">Remove</span>' +
								'</div>' +
							'</div>',
		data: function() {
			return {
				privateStore: {
					jcrop_api: '',
					isCanRotate: false,
					cropWindowParams: {
						width: 740,
						height: 698,
						selector: '.box-image-crop'
					},
					isRemoveButtonShow: true,
				},
				init : [],
				sharedStore: Store,
				firstTime : true,
				selectedIdx: '',
				isChangeCrop: false
			};
		},
		computed: {
			windowZindex: function() {
				var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
						elementTotal = currentCanvas.params.length || 0;

				return (elementTotal + 10) * 100;
			},
		},
		methods: {

			// do hiding image crop box
			hideImageCrop: function() {
				this.selectedIdx = '';
				this.sharedStore.isImageCropShow = false;
			},

			handleSendToBack: function() {
				var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;

				CanvasController.sendToBack({ idx: currentCanvas.selectedIdx });
				this.hideImageCrop();
			},

			// do rotate
			doRotate: function(nDegree) {
				if(this.privateStore.isCanRotate) {


					var _this = this,
							store = _this.sharedStore,
							currentCanvas = store.pages[store.selectedPageIdx].canvas;

					var idx = this.selectedIdx !== ''?this.selectedIdx:currentCanvas.selectedIdx;

					// valid degree now is 0 | 90 | 180 | -90
					var newDegree = UtilCrop.getRotatedAngle(currentCanvas.params[idx].imageRotate, nDegree);
					currentCanvas.params[idx].imageRotate = newDegree;

					if(Math.abs(currentCanvas.params[idx].imageRotate) === 90) {
						// special rorate
						var cWidth = currentCanvas.params[idx].imageHeight,
								cHeight = currentCanvas.params[idx].imageWidth;
					}
					else {
						var cWidth = currentCanvas.params[idx].imageWidth,
								cHeight = currentCanvas.params[idx].imageHeight;
					};

					var defaultCrops = UtilCrop.getDefaultCrop(cWidth, cHeight, currentCanvas.params[idx].width, currentCanvas.params[idx].height);

					var px = defaultCrops.px,
							py = defaultCrops.py,
							pw = defaultCrops.pw,
							ph = defaultCrops.ph,
							width = currentCanvas.params[idx].width * currentCanvas.ratio / pw,
							height = currentCanvas.params[idx].height * currentCanvas.ratio / ph;

					// adding the crop settings to element
					currentCanvas.params[idx].cropX = cWidth * px;
					currentCanvas.params[idx].cropY = cHeight * py;
					currentCanvas.params[idx].cropW = cWidth * pw;
					currentCanvas.params[idx].cropH = cHeight * ph;

					currentCanvas.params[idx].cropPX = px;
					currentCanvas.params[idx].cropPY = py;
					currentCanvas.params[idx].cropPW = pw;
					currentCanvas.params[idx].cropPH = ph;

					// activate refreshing element
					currentCanvas.params[idx].isRefresh = true;

					_this.triggerImageCrop();

					__webpack_require__(11)({ev: __webpack_require__(13).ClickRotateImage,orientation: width < height ? "Portrait" : "Landscape"});
				}
			},

			// button triggered that to crop the selected image
			triggerImageCrop: function(idx) {
				var store = this.sharedStore,
						currentCanvas = store.pages[store.selectedPageIdx].canvas;
				if(this.selectedIdx !== ''){
					currentCanvas.selectedIdx = this.selectedIdx;
				}
				idx != null && idx !== '' ? idx : idx = currentCanvas.selectedIdx;

				if(currentCanvas.params[idx].imageId) {

					// set image, and init jcrop
					this.handleCropInit(idx);

					// handle image crop box position
					UtilWindow.setPopWindowPosition(this.privateStore.cropWindowParams);

					store.isImageCropShow = true;
				};
			},

			// set image and init crop
			handleCropInit: function(idx) {
				var _this = this,
						store = _this.sharedStore,
						currentCanvas = store.pages[store.selectedPageIdx].canvas;

			    _this.privateStore.isCanRotate = false;

				idx != null && idx !== '' ? idx : idx = currentCanvas.selectedIdx;


				var imageDetail = ImageListManage.getImageDetail(currentCanvas.params[idx].imageId);
				// var cWidth = imageDetail.width,
				// 		cHeight = imageDetail.height;
				// if(!this.init[idx]){
				// 	currentCanvas.params[idx].cropX = cWidth * currentCanvas.params[idx].cropPX;
			  //   currentCanvas.params[idx].cropY = cHeight * currentCanvas.params[idx].cropPY;
			  //   currentCanvas.params[idx].cropW = cWidth * currentCanvas.params[idx].cropPW;
			  //   currentCanvas.params[idx].cropH = cHeight * currentCanvas.params[idx].cropPH;
			  //   currentCanvas.params[idx].imageWidth = imageDetail.width;
			  //   currentCanvas.params[idx].imageHeight = imageDetail.height;
			  //   // currentCanvas.params[idx].vWidth = currentCanvas.params[idx].width * currentCanvas.ratio;
		    // 	// currentCanvas.params[idx].vHeight = currentCanvas.params[idx].height * currentCanvas.ratio;
		    // 	this.init[idx] = true;
				// }

				_this.imageName = imageDetail.name || '';
				// console.log(_this.imageName);

				if(Math.abs(currentCanvas.params[idx].imageRotate) === 90) {
					// image rotated specially, calculate width as height, height as width
					var width = currentCanvas.params[idx].imageHeight,
							height = currentCanvas.params[idx].imageWidth;
				}
				else {
					// normal case
					var width = currentCanvas.params[idx].imageWidth,
							height = currentCanvas.params[idx].imageHeight;
				};

				// adding the crop settings to element
	    	currentCanvas.params[idx].cropX = width * currentCanvas.params[idx].cropPX;
	    	currentCanvas.params[idx].cropY = height * currentCanvas.params[idx].cropPY;
	    	currentCanvas.params[idx].cropW = width * currentCanvas.params[idx].cropPW;
	    	currentCanvas.params[idx].cropH = height * currentCanvas.params[idx].cropPH;

				// var px = currentCanvas.params[idx].cropX / width,
				// 		py = currentCanvas.params[idx].cropY / height,
				// 		pw = currentCanvas.params[idx].cropW / width,
				// 		ph = currentCanvas.params[idx].cropH / height,
				// 		tWidth = currentCanvas.params[idx].width * currentCanvas.ratio / pw,
				// 		tHeight = currentCanvas.params[idx].height * currentCanvas.ratio / ph;

				var viewBoxWidth = 680,
						viewBoxHeight = 400;
				if(this.privateStore.cropWindowParams.height>window.innerHeight){
					viewBoxHeight = window.innerHeight - 300;
				}
				var vX = viewBoxWidth / viewBoxHeight,
						imageX = width / height;

				if(vX > imageX) {
					// height meet
					store.cropImageRatio = viewBoxHeight / height;
				}
				else {
					// width meet
					store.cropImageRatio = viewBoxWidth / width;
				};

				// calculate margin left, margin top of crop image preview
				var previewImageWidth = width * store.cropImageRatio,
						previewImageHeight = height * store.cropImageRatio,
						marginLeft = (viewBoxWidth - previewImageWidth) / 2,
						marginTop = (viewBoxHeight - previewImageHeight) / 2;
				// console.log(store.cropImageRatio, previewImageWidth, previewImageHeight, marginLeft, marginTop);

				$('#box-crop').css('margin-left', marginLeft).css('padding-top', marginTop);

				if(_this.privateStore.jcrop_api !== '') {
					_this.privateStore.jcrop_api.destroy()
				};

				var UtilProject = __webpack_require__(21);
	      var encImgId = UtilProject.getEncImgId(currentCanvas.params[idx].imageId);
	      var qs = UtilProject.getQueryString({
	        encImgId: encImgId,
	        px: 0,
	        py: 0,
	        pw: 1,
	        ph: 1,
	        width: Math.round(previewImageWidth),
	        height: Math.round(previewImageHeight),
	        rotation: currentCanvas.params[idx].imageRotate
	      });

				$('#image-tobecrop')
					.attr('src', '/imageBox/liveUpdateCropImage.ep?' + qs)
					.attr('width', previewImageWidth)
					.attr('height', previewImageHeight)
					.css('width', previewImageWidth)
					.css('height', previewImageHeight)
					.Jcrop({
						aspectRatio: currentCanvas.params[idx].width / currentCanvas.params[idx].height,
						setSelect: [currentCanvas.params[idx].cropX * store.cropImageRatio, currentCanvas.params[idx].cropY  * store.cropImageRatio, (currentCanvas.params[idx].cropX + currentCanvas.params[idx].cropW) * store.cropImageRatio, (currentCanvas.params[idx].cropY + currentCanvas.params[idx].cropH) * store.cropImageRatio],
						bgColor: 'black',
						allowSelect: false,
						bgOpacity: 0.4,
						onSelect: function(c) {
							if(_this.sharedStore.isImageBorder && _this.sharedStore.projectSettings[_this.sharedStore.selectedPageIdx].product  === "canvas"){
								var currentSize   = store.projectSettings[store.selectedPageIdx].size,
								    currentCanvas = _this.sharedStore.pages[store.selectedPageIdx].canvas,
								    bigSize       = Math.max(currentSize.split("X")[0],currentSize.split("X")[1]),
								    // bigSize       = require("UtilMath").getInchByPx(Math.max(currentCanvas.frameBaseSize.width,currentCanvas.frameBaseSize.height)),
								    borderThicknessInchTop =  __webpack_require__(7).getInchByPx(currentCanvas.mirrorSize.top || 0),
								    borderThicknessInchRight =  __webpack_require__(7).getInchByPx(currentCanvas.mirrorSize.right || 0),
								    borderThicknessInchBottom =  __webpack_require__(7).getInchByPx(currentCanvas.mirrorSize.bottom || 0),
								    borderThicknessInchLeft =  __webpack_require__(7).getInchByPx(currentCanvas.mirrorSize.left || 0),
								    bigSizeRatioTop  = borderThicknessInchTop/(bigSize + 2 * borderThicknessInchTop),
								    bigSizeRatioRight  = borderThicknessInchRight/(bigSize + 2 * borderThicknessInchRight),
								    bigSizeRatioBottom  = borderThicknessInchBottom/(bigSize + 2 * borderThicknessInchBottom),
								    bigSizeRatioLeft  = borderThicknessInchLeft/(bigSize + 2 * borderThicknessInchLeft),
								    realTopBorderWidth = Math.max(c.w,c.h)*bigSizeRatioTop - 2 + "px",
								    realRightBorderWidth = Math.max(c.w,c.h)*bigSizeRatioRight - 2 + "px",
								    realBottomBorderWidth = Math.max(c.w,c.h)*bigSizeRatioBottom - 2 + "px",
								    realLeftBorderWidth = Math.max(c.w,c.h)*bigSizeRatioLeft - 2 + "px";
								if(!_this.firstTime){
									$(".t-border").css('height',realTopBorderWidth);
									$(".r-border").css('width',realRightBorderWidth);
									$(".b-border").css('height',realBottomBorderWidth);
									$(".l-border").css('width',realLeftBorderWidth);
								};
								store.cropParams = { x: c.x, y: c.y, w: c.w, h: c.h,realTop:realTopBorderWidth,realRight:realRightBorderWidth,realBottom:realBottomBorderWidth,realLeft:realLeftBorderWidth};
								_this.firstTime = false;
							}else{
								store.cropParams = { x: c.x, y: c.y, w: c.w, h: c.h};
							}

							if(_this.privateStore.isCanRotate) {
								_this.isChangeCrop = true;
							}
						}
					}, function(){
						_this.privateStore.jcrop_api = this;
						_this.privateStore.isCanRotate = true;
						_this.isChangeCrop = false;
						if(_this.sharedStore.isImageBorder  && _this.sharedStore.projectSettings[_this.sharedStore.selectedPageIdx].product === "canvas"){
							var rl = $($(".jcrop-vline")[0]),
							tBorder = $("<div />").css({
								'position' : 'absolute',
								'width' : '100%',
								'top' : '1px',
								'left' : 0,
								'border-bottom' : '1px solid #000'
							}).addClass("t-border"),
							rBorder = $("<div />").css({
								'position' : 'absolute',
								'height' : '100%',
								'top' : 0,
								'right' : '1px',
								'border-left' : '1px solid #000'
							}).addClass("r-border"),
							bBorder = $("<div />").css({
								'position' : 'absolute',
								'width' : '100%',
								'bottom' : '1px',
								'left' : 0 ,
								'border-top' : '1px solid #000'
							}).addClass("b-border"),
							lBorder = $("<div />").css({
								'position' : 'absolute',
								'height' : '100%',
								'top' : 0,
								'left' : '1px',
								'border-right' : '1px solid #000'
							}).addClass("l-border");
							rl.after(tBorder);
							rl.after(rBorder);
							rl.after(bBorder);
							rl.after(lBorder);
							$(".t-border").css('height',store.cropParams.realTop);
							$(".r-border").css('width',store.cropParams.realRight);
							$(".b-border").css('height',store.cropParams.realBottom);
							$(".l-border").css('width',store.cropParams.realLeft);
							$(".t-border,.r-border,.b-border,.l-border").css('background','rgba(255,255,255,0.5)');
						}
					});

			},

			// do crop image
			doImageCrop: function() {
				var _this = this,
						store = _this.sharedStore,
						currentCanvas = store.pages[store.selectedPageIdx].canvas;

				var idx = currentCanvas.selectedIdx;

				if(Math.abs(currentCanvas.params[idx].imageRotate) === 90) {
					// image rotated specially, calculate width as height, height as width
					var width = currentCanvas.params[idx].imageHeight,
							height = currentCanvas.params[idx].imageWidth;
				}
				else {
					// normal case
					var width = currentCanvas.params[idx].imageWidth,
							height = currentCanvas.params[idx].imageHeight;
				};

				var imageId = currentCanvas.params[idx].imageId,
						px = (store.cropParams.x / store.cropImageRatio) / width,
						py = (store.cropParams.y / store.cropImageRatio) / height,
						pw = (store.cropParams.w / store.cropImageRatio) / width,
						ph = (store.cropParams.h / store.cropImageRatio) / height,
						tWidth = currentCanvas.params[idx].width * currentCanvas.ratio / pw,
						tHeight = currentCanvas.params[idx].height * currentCanvas.ratio / ph;
				if(pw>1)pw=1;
				if(ph>1)ph=1;
				if(this.isChangeCrop) {
				// write back to element
					currentCanvas.params[idx].cropX = store.cropParams.x / store.cropImageRatio;
					currentCanvas.params[idx].cropY = store.cropParams.y / store.cropImageRatio;
					currentCanvas.params[idx].cropW = store.cropParams.w / store.cropImageRatio;
					currentCanvas.params[idx].cropH = store.cropParams.h / store.cropImageRatio;

					currentCanvas.params[idx].cropPX = px;
					currentCanvas.params[idx].cropPY = py;
					currentCanvas.params[idx].cropPW = pw;
					currentCanvas.params[idx].cropPH = ph;
				}

				currentCanvas.params[idx].isRefresh = true;

				// var url = '/imageBox/liveUpdateCropImage.ep?imageId=' + imageId + '&px=' + px + '&py=' + py + '&pw=' + pw + '&ph=' + ph + '&width=' + Math.round(tWidth) + '&height=' + Math.round(tHeight) + '&rotation=' + currentCanvas.params[idx].imageRotate;
				// require("DrawManage").drawImage("photoElementCanvas"+ (idx), url, 0, 0,null,currentCanvas.params[idx].width * currentCanvas.ratio,currentCanvas.params[idx].height * currentCanvas.ratio);

				_this.hideImageCrop();
			},

			// remove image
			handleRemoveImage: function() {
				var currentCanvas = this.sharedStore.pages[this.sharedStore.selectedPageIdx].canvas;

				ImageController.deleteImage(currentCanvas.selectedIdx);
				ImageListManage.freshImageUsedCount();
				this.sharedStore.isImageCropShow = false;
			}
		},
		props: ['imageName'],
		events: {
			notifyImageCrop: function() {
				this.triggerImageCrop();
			},

			notifyRotateImage: function(oParams) {
				var _this = this,
						store = _this.sharedStore,
						currentCanvas = store.pages[store.selectedPageIdx].canvas;

				oParams.idx != undefined && oParams.idx != null && oParams.idx !== '' ? oParams.idx : oParams.idx = currentCanvas.selectedIdx;
				oParams.nDegree != undefined && oParams.nDegree != null ? oParams.nDegree : oParams.nDegree = 0;

				var idx = oParams.idx,
						nDegree = oParams.nDegree;

				// valid degree now is 0 | 90 | 180 | -90
				var newDegree = UtilCrop.getRotatedAngle(currentCanvas.params[idx].imageRotate, nDegree);
				currentCanvas.params[idx].imageRotate = newDegree;

				if(Math.abs(currentCanvas.params[idx].imageRotate) === 90) {
					// special rorate
					var cWidth = currentCanvas.params[idx].imageHeight,
							cHeight = currentCanvas.params[idx].imageWidth;
				}
				else {
					var cWidth = currentCanvas.params[idx].imageWidth,
							cHeight = currentCanvas.params[idx].imageHeight;
				};


				var defaultCrops = UtilCrop.getDefaultCrop(cWidth, cHeight, currentCanvas.params[idx].width , currentCanvas.params[idx].height);


				var px = defaultCrops.px,
						py = defaultCrops.py,
						pw = defaultCrops.pw,
						ph = defaultCrops.ph,
						width = currentCanvas.params[idx].width * currentCanvas.ratio / pw,
						height = currentCanvas.params[idx].height * currentCanvas.ratio / ph;

				// adding the crop settings to element
				currentCanvas.params[idx].cropX = cWidth * px;
				currentCanvas.params[idx].cropY = cHeight * py;
				currentCanvas.params[idx].cropW = cWidth * pw;
				currentCanvas.params[idx].cropH = cHeight * ph;

				currentCanvas.params[idx].cropPX = px;
				currentCanvas.params[idx].cropPY = py;
				currentCanvas.params[idx].cropPW = pw;
				currentCanvas.params[idx].cropPH = ph;

				// activate refreshing element
				currentCanvas.params[idx].isRefresh = true;
			},
			notifyFreshCrop: function() {
				var _this = this,
						store = _this.sharedStore,
						currentCanvas = store.pages[store.selectedPageIdx].canvas;
				var idx = currentCanvas.selectedIdx;
				if(Math.abs(currentCanvas.params[idx].imageRotate) === 90) {
						// special rorate
						var cWidth = currentCanvas.params[idx].imageHeight,
								cHeight = currentCanvas.params[idx].imageWidth;
					}
					else {
						var cWidth = currentCanvas.params[idx].imageWidth,
								cHeight = currentCanvas.params[idx].imageHeight;
					};

					var defaultCrops = UtilCrop.getDefaultCrop(cWidth, cHeight, currentCanvas.params[idx].width, currentCanvas.params[idx].height);

					var px = defaultCrops.px,
							py = defaultCrops.py,
							pw = defaultCrops.pw,
							ph = defaultCrops.ph,
							width = currentCanvas.params[idx].width * currentCanvas.ratio / pw,
							height = currentCanvas.params[idx].height * currentCanvas.ratio / ph;

					// adding the crop settings to element
					currentCanvas.params[idx].cropX = cWidth * px;
					currentCanvas.params[idx].cropY = cHeight * py;
					currentCanvas.params[idx].cropW = cWidth * pw;
					currentCanvas.params[idx].cropH = cHeight * ph;

					currentCanvas.params[idx].cropPX = px;
					currentCanvas.params[idx].cropPY = py;
					currentCanvas.params[idx].cropPW = pw;
					currentCanvas.params[idx].cropPH = ph;
			},
		},
		created: function() {
			var _this = this;

			_this.$watch('sharedStore.watches.isCropThisImage', function() {
				if(_this.sharedStore.watches.isCropThisImage) {
					var idx = _this.sharedStore.watchData.cropImageIdx;

					_this.selectedIdx  = idx;

					_this.sharedStore.watches.isCropThisImage = false;
					_this.sharedStore.watchData.cropImageIdx = '';
					_this.triggerImageCrop(idx);
				};
			});
		}
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 66 */,
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {
	var slider = __webpack_require__(68);
	var UtilWindow = __webpack_require__(46);
	var UtilMath = __webpack_require__(7);
	var ParamsManage = __webpack_require__(26);
	var TextController = __webpack_require__(32);
	// component -- text editor
	module.exports = {
	  // template: '#t-text-editor',
	  template: '<div v-show="sharedStore.isTextEditorShow">' +
	              '<div class="shadow-bg" v-bind:style="{zIndex: windowZindex-1}"></div>' +
	              '<div class="box-text-editor" style="overflow:hidden" v-bind:style="{ zIndex: windowZindex}">' +
	                '<div style="height: 40px:line-height: 40px;">' +
	                  '<div style="width: 40px;height: 40px;margin-left: 610px;font-size: 20px;"><img src="../../static/img/close-normal.svg" width="16" height="16" v-on:click="handleHideTextEditorView()" onmouseover="this.src = \'../../static/img/close-hover.svg\'" onmouseout="this.src = \'../../static/img/close-normal.svg\'" alt="close" title="close" style="margin-top: 22px; margin-left: 33px; cursor: pointer;" /></div>' +
	                '</div>' +
	                '<div style="margin: 0 40px;">' +
	                  '<div class="font-title t-left">Text Editor</div>' +
	                '</div>' +
	                '<div style="margin: 50px 0 0 40px; width: 604px;">' +
	                  '<div class="box-textarea">' +
	                    '<textarea class="font-textarea" id="textArea" placeholder="Enter text here" style="height: 80px; width: 578px; line-height: 35px; background-color: #f5f5f5;" v-model="privateStore.inputTextEditorTxt"></textarea>' +
	                  '</div>' +
	                  '<div style="margin-top: 30px;">' +
	                    '<span style="position: relative;display: inline-block; width: 300px;">' +
	                      '<label class="options-label font-label" style="height: 35px; line-height: 35px;">Font Family:</label>' +
	                      '<select class="input font-select" v-model="privateStore.selectFontFamily" style="width: 200px;border-width:2px;border-color:rgb(161,195,250);"></select>' +
	                      '<label class="options-label font-label" v-on:click="handleFontFamilyClick"  type="text" style="position: absolute; width: 177px;height: 35px; line-height: 35px;right:10px;top:0;">{{displayFontFamily}}</label>'+
	                      '<div v-show="privateStore.isShowFontFamilySelect" style="position:absolute;width: 200px;height:403px;border: 1px solid rgb(161,195,250);left: 100px;z-index: 200;background-color: rgb(245,245,245);bottom: -145px;">'+
	                        '<div class="fontFamilySelect" v-on:click="handleSelectFontFamily(item.id)" style="height:20px" v-for="item in sharedStore.fontList"><img v-bind:src="item.imageUrl" style="padding-left: 10px;" height="16"/></div>'+
	                      '</div>'+
	                    '</span>' +
	                    '<span style="display: inline-block; width: 300px;margin-left: 4px;">' +
	                      '<label class="options-label font-label" style="height: 35px; line-height: 35px;margin-left:4px;width:90px;">Font Style:</label>' +
	                      '<select class="input font-select" id="fontStyleSelect" v-model="privateStore.selectFontStyle" style="width: 202px;">' +
	                        '<option v-for="item in privateStore.fontStyleList" value="{{item.fontFamily}}">{{item.displayName}}</option>' +
	                      '</select>' +
	                    '</span>' +
	                  '</div>' +
	                  '<div style="margin-top: 20px;">' +
	                    '<span style="position: relative; display: inline-block; width: 304px;">' +
	                      '<label class="options-label font-label" style="height: 35px; line-height: 35px;">Font Size:</label>' +
	                      '<!-- pop-out fake select button -->' +
	                      '<select class="input font-select" style="position: absolute; display: inline-block; width: 200px; right: 10px; top: 0;"></select>' +
	                      '<input class="input font-input" id="fontSizeText" type="text" v-on:blur="handleTextBlur()" v-on:focus="handleTextFocus()"  style="position: absolute; width: 177px; height: 33px; right: 10px; top: 0; background-color: rgba(245, 245, 245, 0);" value="{{displayFontSize}}"/>' +
	                      '<input class="input font-input" type="text" style="width: 181px; height: 33px;">' +
	                      '<div v-show="privateStore.isFontsizeSliderShow" style="position: absolute; display: inline-block; width: 140px; left: 100px; top: 37px; padding: 0 8px; border-radius: 4px; background-color: #e6e6e6; box-shadow: 0 2px 3px 1px #cbcbcb;">' +
	                        '<input type="text" id="as-slide-fontsize" data-slider-id="asFontsizeSlider" data-slider-min="0.3" data-slider-max="16" data-slider-step="0.1" data-slider-value="{{ privateStore.selectedInchFontSize }}" data-slider-handle="custom" data-slider-tooltip="hide" v-model="privateStore.selectedInchFontSize" />' +
	                      '</div>' +
	                    '</span>' +
	                    '<span style="display: inline-block; width: 300px;">' +
	                      '<label class="options-label font-label" style="height: 35px; line-height: 35px;margin-left:4px;width:90px;">Font Color:</label>' +
	                      '<select class="input font-select" id="fontColorSelect" v-model="privateStore.selectFontColor" style="width: 202px;">' +
	                        '<option value="0">Black</option>' +
	                        '<option value="6712688">Gray</option>' +
	                        '<option value="13289166">Light Gray</option>' +
	                        '<option value="16711422">White</option>' +
	                        '<option value="10497843">Cardinal</option>' +
	                        '<option value="16711680">Red</option>' +
	                        '<option value="16042184">Pink</option>' +
	                        '<option value="15690240">Orange</option>' +
	                        '<option value="14202129">Gold</option>' +
	                        '<option value="16776960">Yellow</option>' +
	                        '<option value="5679643">Green</option>' +
	                        '<option value="13158">Navy</option>' +
	                      '</select>' +
	                    '</span>' +
	                  '</div>' +
	                '</div>' +
	                '<div class="texteditor-button">' +
	                  '<div id="texteditor-submitButton" class="button t-center" v-on:click="handleText()" style="width: 160px;height: 40px;line-height: 40px;display: inline-block; margin-left: 258px;font-size: 14px;">{{ privateStore.submitButtonLabel }}</div>' +
	                '</div>' +
	                '<div v-show="privateStore.isShowFontFamilySelect" style="width:100%;height:100%;position: absolute;top: 50px;" v-on:click="handleNoSelectFontFamily"></div>'+
	              '</div>' +
	            '</div>',
	  data: function() {
	    return {
	      privateStore: {
	        fontStyleList: [],
	        selectFontFamily: 'font_arial',
	        selectFontStyle: 'Arial Narrow',
	        selectFontColor: 0,
	        selectedInchFontSize: 2,
	        submitButtonLabel: 'Done',
	        isFontsizeSliderShow: false,
	        isEdit: false,
	        isRemoveButtonShow: false,
	        textWindowParams: {
	          width: 680,
	          height: 420,
	          selector: '.box-text-editor'
	        },
	         isShowFontFamilySelect:false
	      },
	      sharedStore: Store
	    };
	  },
	  computed: {
	    selectedPxFontSize: function() {
	      var inch = this.privateStore.selectedInchFontSize;
	      var px = UtilMath.getPxByInch(inch);

	      return Math.round(px);
	    },

	    displayFontSize: function() {
	      return this.privateStore.selectedInchFontSize + " in.";
	    },

	    windowZindex: function() {
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	          elementTotal = currentCanvas.params.length || 0;

	      return (elementTotal + 10) * 100;
	    },
	    displayFontFamily:function(){
	      for (var i = 0; i < this.sharedStore.fontList.length; i++) {
	        if(this.sharedStore.fontList[i].id===this.privateStore.selectFontFamily){
	          return this.sharedStore.fontList[i].displayName;
	        }
	      };
	      return "";
	    }
	  },
	  methods: {
	    handleShowTextEditor: function() {
	      UtilWindow.setPopWindowPosition(this.privateStore.textWindowParams);
	      this.sharedStore.isTextEditorShow = true;
	      this.resetSumbitButton();
	    },

	    handleShowFontsizeSlider: function() {
	      this.privateStore.isFontsizeSliderShow = true;
	    },

	    handleTextBlur: function() {
	      var fontSize = parseFloat($("#fontSizeText").val().replace(" in.", ""));
	      if(isNaN(fontSize)){
	        fontSize = this.privateStore.selectedInchFontSize;
	      };

	      // size value fix
	      if(fontSize < 0.3) {
	        fontSize = 0.3;
	      }
	      else if(fontSize > 16) {
	        fontSize = 16;
	      };

	      $("#fontSizeText").val(fontSize + " in.");
	      this.privateStore.selectedInchFontSize = fontSize;
	      $("#as-slide-fontsize").slider('setValue', fontSize);

	      this.privateStore.isFontsizeSliderShow = false;
	    },

	    handleTextFocus: function() {
	      $("#fontSizeText").val($("#fontSizeText").val().replace(" in.", ""));
	      this.privateStore.isFontsizeSliderShow = true;
	    },

	    handleHideTextEditorView: function() {
	      this.sharedStore.isTextEditorShow = false;
	      this.resetView();
	    },

	    handleFontFamilyChange: function() {
	      this.resetFontStyle();
	    },

	    handleText: function() {
	      var _this = this,
	          currentCanvas = this.sharedStore.pages[this.sharedStore.selectedPageIdx].canvas;
	      var element_index = 0;
	      var color = '' + this.privateStore.selectFontColor;
	      var size = this.selectedPxFontSize;
	      if(!this.privateStore.isEdit) {
	        // add new text
	        var element_id = 0;
	        var len = currentCanvas.params.length;
	        if(len){
	            element_id = currentCanvas.params[len-1].id+1;
	        }
	        var textParams = {
	          id : element_id,
	          elType: 'text',
	          text: $("#textArea").val(),
	          x: 500,
	          y: 500,
	          width: 2000,
	          height: 500,
	          rotate: 0,
	          dep: element_index,
	          fontFamily: this.privateStore.selectFontStyle,
	          fontSize: size,
	          fontWeight: 'normal',
	          textAlign: 'left',
	          fontColor: color,
	          isRefresh : false
	        };
	        TextController.createText(textParams);
	      }
	      else {
	        // change text
	        var oldTextParams = currentCanvas.params[currentCanvas.selectedIdx];
	        var textParams = {
	          id : oldTextParams.id,
	          elType: 'text',
	          text: $("#textArea").val(),
	          x: oldTextParams.x,
	          y: oldTextParams.y,
	          width: oldTextParams.width,
	          height: oldTextParams.height,
	          rotate: oldTextParams.rotate,
	          dep: oldTextParams.dep,
	          fontFamily: this.privateStore.selectFontStyle,
	          fontSize: size,
	          fontWeight: 'normal',
	          textAlign: 'left',
	          fontColor: color,
	          isRefresh : false
	        };
	        element_index = currentCanvas.selectedIdx;
	        TextController.editText(textParams, element_index);
	      };

	      this.sharedStore.isTextEditorShow = false;
	      this.resetView();
	    },

	    handleRemoveText: function() {
	      var currentCanvas = this.sharedStore.pages[this.sharedStore.selectedPageIdx].canvas;

	      TextController.deleteText(currentCanvas.selectedIdx);

	      this.sharedStore.isTextEditorShow=false;
	      this.resetView();
	    },

	    resetFontStyle:function() {
	      var fontFamilyId=this.privateStore.selectFontFamily;
	      var fontFamily;
	      for (var i = 0; i < this.sharedStore.fontList.length; i++) {
	        if(this.sharedStore.fontList[i].id==fontFamilyId){
	          fontFamily=this.sharedStore.fontList[i];
	          break;
	        }
	      }
	      this.privateStore.fontStyleList=fontFamily.fonts;
	      this.privateStore.selectFontStyle=this.privateStore.fontStyleList[0].fontFamily;
	    },

	    initView: function(idx) {
	      var currentCanvas = this.sharedStore.pages[this.sharedStore.selectedPageIdx].canvas;

	      if(idx != undefined && idx != null) {
	        // idx passed in

	      }
	      else {
	        idx = currentCanvas.selectedIdx;
	      };

	      

	      this.privateStore.isEdit = true;
	      this.privateStore.isRemoveButtonShow = true;
	      var params = currentCanvas.params[idx];
	      var fontFamily = params.fontFamily;
	      var fontSize = params.fontSize;
	      var fontColor = params.fontColor;
	      var text = params.text;

	      var fontFamilyName = '';
	      var fontStyleName = '';

	      for (var i = 0; i < this.sharedStore.fontList.length; i++) {
	        var fontFamily_node=this.sharedStore.fontList[i];
	        var fontFamily_id=fontFamily_node['id'];
	        var fontFamily_name=fontFamily_node['name'];
	        var fontFamily_displayName=fontFamily_node['displayName'];
	        for(var j = 0;j<fontFamily_node.fonts.length;j++){
	          var font=fontFamily_node.fonts[j];
	          var fontStyle_id=font['fontFamily'];
	          var displayName=font['displayName'];
	          if(fontFamily==fontStyle_id) {
	            fontFamilyName=fontFamily_id;
	            fontStyleName=fontStyle_id;
	          };
	        };
	      };
	      if(fontFamilyName){
	      this.privateStore.selectFontFamily = fontFamilyName;
	      }
	      this.resetFontStyle();
	      this.privateStore.selectFontStyle = fontStyleName;
	      $("#textArea").val(text);
	      var fontInchSize = parseFloat(UtilMath.getInchByPx(fontSize).toFixed(1));
	      $("#fontSizeText").val(fontInchSize + " in.");

	      this.privateStore.selectedInchFontSize = fontInchSize;
	      $("#as-slide-fontsize").slider('setValue', fontInchSize);

	      this.privateStore.selectFontColor = fontColor;
	      this.handleShowTextEditor();
	    },

	    resetView:function(){
	      $("#textArea").val("");
	      this.privateStore.selectFontFamily='font_arial';
	      this.privateStore.selectFontStyle='Arial Narrow';
	      this.privateStore.selectFontColor=0;
	      $("#fontSizeText").val('2 in.');
	      this.privateStore.selectedInchFontSize = 2;
	      $("#as-slide-fontsize").slider('setValue', 2);
	      this.resetFontStyle();
	    },

	    getTextFamily: function(){
	      var _this = this;

	      $.ajax({
	        url: './assets/data/fonts.xml',
	        type: 'get',
	        dataType: 'xml'
	      }).done(function(result) {
	        if (result) {
	          for (var i = 0; i < $(result).find('fontFamily').length; i++) {
	            var fontFamily={};
	            var fontFamily_node=$(result).find('fontFamily').eq(i);
	            var fontFamily_id=fontFamily_node.attr('id');
	            var fontFamily_name=fontFamily_node.attr('name');
	            var fontFamily_displayName=fontFamily_node.attr('displayName');
	            fontFamily.id=fontFamily_id;
	            fontFamily.name=fontFamily_name;
	            fontFamily.displayName=fontFamily_displayName;
	            fontFamily.fonts=[];
	            fontFamily.imageUrl="assets/img/fonts/"+fontFamily_id+".png";
	            for(var j = 0;j<fontFamily_node.find("font").length;j++) {
	              var font=fontFamily_node.find("font").eq(j);
	              var font_id=font.attr('id');
	              var font_displayName=font.attr('displayName');
	              var font_fontFamily=font.attr('fontFamily');
	              var font_fontFace=font.attr('fontFace');
	              var font_weight=font.attr('weight');
	              var font_isDefault=font.attr('isDefault');
	              fontFamily.fonts[j]={fontFamily:font_fontFamily,displayName:font_displayName};
	            }

	            Store.fontList.push(fontFamily);
	          }
	          _this.privateStore.fontStyleList=Store.fontList[0].fonts;
	        }
	      });
	    },
	    handleFontFamilyClick:function(){
	      this.privateStore.isShowFontFamilySelect=true;
	    },
	    handleNoSelectFontFamily:function(){
	      this.privateStore.isShowFontFamilySelect=false;
	    },
	    handleSelectFontFamily:function(fontId){
	      this.privateStore.isShowFontFamilySelect=false;
	      this.privateStore.selectFontFamily=fontId;
	      this.resetFontStyle();
	    },
	    resetSumbitButton:function(){
	      if($("#textArea").val().length>0) {
	          
	          $('#texteditor-submitButton').css('pointer-events','auto');
	          $('#texteditor-submitButton').css('opacity',1);
	      }else{
	          $('#texteditor-submitButton').css('pointer-events','none');
	          $('#texteditor-submitButton').css('opacity',0.4);
	      }
	    }
	  },
	  ready: function() {
	    this.getTextFamily();

	    $('#as-slide-fontsize').slider({
	      // formatter: function(value) {
	      //  return 'Current value: ' + value;
	      // }
	    });
	  },
	  events: {
	    notifyModifyText: function(idx) {
	      this.initView(idx);
	    },

	    notifyShowAddText: function() {
	      this.handleShowTextEditor();

	      this.privateStore.isEdit = false;
	      this.privateStore.isRemoveButtonShow = false;
	      this.resetView();
	      this.resetSumbitButton();
	    }
	  },
	  created: function() {
	    var _this = this;

	    _this.$watch('sharedStore.watches.isChangeThisText', function() {
	      if(_this.sharedStore.watches.isChangeThisText) {
	        _this.sharedStore.watches.isChangeThisText = false;
	          _this.initView();
	      };
	    });

	    _this.$watch('privateStore.inputTextEditorTxt', function() {
	      _this.resetSumbitButton();
	    });
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 68 */,
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {module.exports={
	    props: ['measure','id','num'],
	    template: '<div style="display: inline-block;margin-right:40px;margin-bottom:20px">' +
	                '<label style="display:inline-block;width:40px;text-align:right;color:#7b7b7b;font-size:14px;">{{measure}}:</label>' +
	                '<a style="margin-left: 5px;width: 26px;height: 26px;" href="javascript:" v-on:click="numDown()"><img style="position: relative;top:6px;" src="assets/img/down.png" draggable="false"></a>'+
	                '<div  v-bind:class="{ \'firefox-order\': privateStore.isFireFox}" style="position:relative;display:inline-block;background:#f4f4f4;width:30px;height:26px;margin-left:4px;bottom:7px;"><input v-on:blur="handleTextBlur()" style="position:relative;display:block;width:100%;text-align:center;color:#7b7b7b;font-size:14px;top:5px;background:transparent;border-style:none" v-model="num"/></div>'+
	                '<a style="margin-left: 3px;width: 26px;height: 26px;" href="javascript:" v-on:click="numUp()"><img style="position: relative;top:6px;" src="assets/img/up.png" draggable="false" ></a>'+
				  '</div>',
	    data: function() {
	        return {
	            privateStore: {
	                isFireFox:false
	            },
	            sharedStore: Store
	        };
	    },
	    methods: {
	        numUp:function(){
	            this.num++;
	            if(this.num>99999){
	                this.num=99999;
	            }
	        },
	        numDown:function(){
	            this.num--;
	            if(this.num<0){
	                this.num=0;
	            }
	        },
	        handleTextBlur: function() {
	            var num = Math.round(this.num);
	            if(isNaN(num)){
	                num = 1;
	            };

	            // size value fix
	            if(num < 0) {
	                num = 0;
	            }else if(num > 99999) {
	                num = 99999;
	            };
	            this.num=num;
	        }
	    },
	    ready: function() {

	        var userAgent = navigator.userAgent;
	        if (userAgent.indexOf("Firefox") != -1) {
	            this.privateStore.isFireFox=true;
	        }
	    },
	    events: {
	    }

	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {module.exports = {
	    template: '<div  v-show="sharedStore.isOrderViewShow">' +
	        '<div class="shadow-bg"></div>' +
	        '<div id="order-window" class="box-order" style="overflow-x: hidden; overflow-y: hidden;" v-bind:style="{width: privateStore.width + \'px\',height: privateStore.height + \'px\', zIndex: windowZindex }" >' +
	        '<div style="height: 40px:line-height: 40px;">' +
	        '<div id="closeButton" style="width: 40px;height: 40px;margin-left: 610px;font-size: 20px;"><img src="../../static/img/close-normal.svg" width="16" height="16" v-on:click="handleHideOptionsView()" onmouseover="this.src = \'../../static/img/close-hover.svg\'" onmouseout="this.src = \'../../static/img/close-normal.svg\'" alt="close" title="close" style="margin-top: 24px; margin-left: 4px; cursor: pointer;" /></div>' +
	        '</div>' +
	        '<div style="margin: 0 40px;">' +
	        '<div class="font-title t-left">Select Your Quantity</div>' +
	        '</div>' +
	        '<div style="width:100%;height:320px;overflow:hidden;overflow-y: auto;margin: 40px 0px 0px 0px;" >' +
	        '<div style="display:inline-block;width:100%;margin-left:30px;margin-top:14px;margin-bottom:14px" v-for="item in newImageList">' +
	        '<span style="display:inline-block;">' +
	        '<img class="order-project-image" style="width:auto;" v-bind:class="{ \'order-select-image\': item.isEmpty}"  id="project-item-{{ $index }}" :imageid="item.id" :imageurl="item.url" :src="item.previewUrl" :alt="item.color"/>' +
	        '</span>' +
	        '<div style="position:relative;display:inline-block;width:530px;bottom:19px">' +
	        '<measure-option v-for="measure in item.measures"  v-bind:measure="measure.measure" v-bind:id="item.id" v-bind:num.sync="measure.num"></measure-option>' +
	        '</div>' +
	        '</div>' +

	        '</div>' +


	        '<div style="width: 180px;text-align: center;height: 40px;line-height: 40px;margin:0 auto;font-size: 14px;color:red;" v-show="privateStore.isShowEmptyLabel">Please select quantity</div>' +

	        '<div>' +
	        '<div id="submitButton" class="button t-center" v-on:click="handleSubmitOrder()" style="width: 160px;height: 40px;line-height: 40px;margin:0 auto;font-size: 14px;">Order</div>' +
	        '</div>' +
	        '</div>' +
	        '</div>',
	    data: function() {
	        return {
	            privateStore: {
	                width: 670,
	                height: 550,
	                selector: '#order-window',
	                measure: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
	                isShowEmptyLabel: false
	            },
	            sharedStore: Store
	        };
	    },
	    computed: {
	        newImageList: function() {
	            //一个颜色只有一条数据
	            var colors = [];
	            var itemList = [];
	            for (var i = 0; i < this.sharedStore.projectSettings.length; i++) {
	                var color = this.sharedStore.projectSettings[i].color;
	                var count = this.sharedStore.projectSettings[i].count;
	                var measure = this.sharedStore.projectSettings[i].measure;
	                if (colors.indexOf(color) == -1) {
	                    colors.push(color);
	                    var assets = this.getColorAssets(color);
	                    var colorObject = { id: i, name: color, color: color, isEmpty: false, url: assets.backgroundImage, previewUrl: assets.backgroundImage };
	                    var measures = [];
	                    for (var k = 0; k < this.privateStore.measure.length; k++) {
	                        var measure_object = new Object();
	                        var measure_count = 0;
	                        if (this.privateStore.measure[k] === measure) {
	                            measure_count = count;
	                        };
	                        measure_object.measure = this.privateStore.measure[k];
	                        measure_object.num = measure_count;
	                        measures.push(measure_object);

	                    }
	                    colorObject.measures = measures;
	                    itemList.push(colorObject);
	                } else {
	                    for (var j = 0; j < itemList.length; j++) {
	                        if (color === itemList[j].color) {
	                            for (var u = 0; u < itemList[j].measures.length; u++) {
	                                if (itemList[j].measures[u].measure === measure) {
	                                    itemList[j].measures[u].num = count;
	                                }
	                            }
	                        }
	                    }
	                }


	            }
	            return itemList;
	        },

	        windowZindex: function() {
	          var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	              elementTotal = currentCanvas.params.length || 0;

	          return (elementTotal + 10) * 100;
	        },
	    },
	    methods: {
	        handleHideOptionsView: function() {

	            this.sharedStore.isOrderViewShow = false;
	            this.initOrders();
	        },
	        handleSubmitOrder: function() {
	            var isAllEmpty = false;
	            var measureList = [];

	            for (var i = 0; i < this.newImageList.length; i++) {
	                var isEmpty = true;
	                for (var j = 0; j < this.newImageList[i].measures.length; j++) {
	                    if (this.newImageList[i].measures[j].num !== 0) {
	                        isEmpty = false;
	                        measureList.push({ color: this.newImageList[i].color, measure: this.newImageList[i].measures[j].measure, count: this.newImageList[i].measures[j].num });
	                    }

	                }
	                this.newImageList[i].isEmpty = isEmpty;
	                if (isEmpty) {

	                    isAllEmpty = true;
	                }

	            }
	            if (isAllEmpty) {
	                this.privateStore.isShowEmptyLabel = true;
	            } else {
	                this.privateStore.isShowEmptyLabel = false;
	                var newProjectObjects = [];
	                this.sharedStore.projectSettings = [];
	                for (var i = 0; i < measureList.length; i++) {
	                    var measureObject = measureList[i];
	                    var project = __webpack_require__(22).newProject(measureObject.color, measureObject.measure, measureObject.count);
	                    this.sharedStore.projectSettings.push(project);
	                }
	                this.disabledSubmitButton();
	                __webpack_require__(22).orderProject(this);

	            }
	        },
	        handleCanelOptions: function() {
	            this.sharedStore.isOrderViewShow = false;
	            this.initOrders();
	        },
	        initOrders: function() {
	            this.privateStore.isShowEmptyLabel = false;
	        },
	        getColorAssets: function(type) {
	            for (var i = 0; i < this.sharedStore.colorOptionList.length; i++) {
	                if (this.sharedStore.colorOptionList[i].type === type) {
	                    return this.sharedStore.colorOptionList[i];
	                }
	            }
	        },
	        disabledSubmitButton:function(){
	            $('#submitButton').css('pointer-events','none');
	            $('#submitButton').css('opacity',0.4);
	            $('#closeButton').css('pointer-events','none');
	            $('#closeButton').css('opacity',0.4);
	        },
	        abledSubmitButton:function(){
	            $('#submitButton').css('pointer-events','auto');
	            $('#submitButton').css('opacity',1);
	            $('#closeButton').css('pointer-events','auto');
	            $('#closeButton').css('opacity',1);
	        }

	    },
	    ready: function() {
	        this.initOrders();

	    },
	    events: {
	        notifyShowOrderWindow: function() {
	            console.log('showOrderWindow');
	            var utilWindow = __webpack_require__(46);
	            utilWindow.setPopWindowPosition({ width: this.privateStore.width, height: this.privateStore.height, selector: this.privateStore.selector });
	            this.sharedStore.isOrderViewShow = true;
	            this.initOrders();
	            this.abledSubmitButton();
	        },
	        notifyReorder : function(){
	            __webpack_require__(22).orderProject(this);
	        }
	    }

	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {module.exports = {
	    mixins: [
	        __webpack_require__(9)
	    ],
	    // template: '#t-header',
	    // fit for IE10, IE11, <template> not supported in html, thus put it here
	    template: '<div class="preview-bed-header">' +
	                // '<div style="display: inline-block; height: 50px;">' +
	                //   '<div id="logo" v-on:click="handleLogoClicked()" style="margin-left: 40px;float: left;"/><img src="../../static/img/new-logo.svg" height="15" alt="Logo" style="margin: 20px 20px 10px 0;" /></div>' +
	                //   '<div class="box-title" style="float: left;">' +
	                //     'My {{ productText }}' +
	                //   '</div>' +
	                // '</div>' +
	                '<div style="float: right; height: 48px;margin-top: 2px;">' +
	                  // '<div style="width: 60px;height: 40px;margin-left: 610px;font-size: 20px;"><img src="../../static/img/close-normal.svg" width="16" height="16" v-on:click="handleCloseView()" onmouseover="this.src = \'../../static/img/close-hover.svg\'" onmouseout="this.src = \'../../static/img/close-normal.svg\'" alt="close" title="close" style="margin-top: 16px; margin-right: 60px; cursor: pointer;" /></div>' +
	                '</div>' +
	                '<div v-if="sharedStore.isOrderedPreview" class="preview-back-tip">Your current project has ordered or is in the cart.</div>'+
	                // '<div v-if="sharedStore.isShowPreviewBack" class="preview-back-link"><a href="/shopping-cart.html">Click here to go to shopping cart</a></div>'+
	              '</div>',
	    data: function() {
	        return {
	            privateStore: {},
	            sharedStore: Store
	        };
	    },
	    computed: {

	        productText: function() {
	            switch (this.sharedStore.projectSettings[Store.currentSelectProjectIndex].category) {
	                case 'categoryFrame':
	                    return 'Frame';
	                    break;
	                case 'categoryCanvas':
	                    return 'Canvas';
	                    break;
	                default:
	                    return '[ERR PRODUCT]';
	            };
	        }
	    },
	    methods: {
	        handleCloseView: function() {
	            var userAgent = navigator.userAgent;
	            window.close();
	        }
	    },
	    events: {

	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {module.exports = {
	    template: '<div v-show="sharedStore.isShowContactUs">' +
	        '<div class="shadow-bg"></div>' +
	        '<div id="contactUsWindow" class="box-order" v-bind:style="{width: privateStore.width + \'px\',height: privateStore.height + \'px\', zIndex: windowZindex }">' +
	        '<div style="height: 40px:line-height: 40px;">' +
	        '<div style="width: 40px;height: 40px;margin-left: 610px;font-size: 20px;"><img src="../../static/img/close-normal.svg" draggable="false" width="16" height="16" v-on:click="handleHideView()" onmouseover="this.src = \'../../static/img/close-hover.svg\'" onmouseout="this.src = \'../../static/img/close-normal.svg\'" alt="close" title="close" style="margin-top: 24px; margin-left: 4px; cursor: pointer;" /></div>' +
	        '</div>' +
	        '<div style="margin: 0 40px;">' +
	        '<div class="font-title t-left">Contact Us</div>' +
	        '</div>' +
	        '<div style="margin: 50px 40px 0; width: 570px;">' +
	        '<label class="options-label font-label" style="height: 35px; line-height: 35px;width: 100%;">Have a question?</label>' +

	        '<div class="box-textarea">' +
	        '<textarea v-model="privateStore.question" class="font-textarea"  style="height: 80px; width: 533px; line-height: 35px; background-color: #f5f5f5;" placeholder="{{privateStore.marks[0]}}"></textarea>' +
	        '</div>' +

	        '</div>' +
	        '<div style="margin: 60px 40px 0; width: 570px;">' +
	        '<label class="options-label font-label" style="height: 35px; line-height: 35px;width: 100%;">Have a feature request?</label>' +

	        '<div class="box-textarea">' +
	        '<textarea v-model="privateStore.featureRequest" class="font-textarea" style="height: 80px; width: 533px; line-height: 35px; background-color: #f5f5f5;" placeholder="{{privateStore.marks[1]}}"></textarea>' +
	        '</div>' +

	        '</div>' +
	        '<div style="margin: 60px 40px 0; width: 570px;">' +
	        '<label class="options-label font-label" style="height: 35px; line-height: 35px;width: 100%;">Want to report a bug?</label>' +

	        '<div class="box-textarea">' +
	        '<textarea v-model="privateStore.bug" class="font-textarea" style="height: 80px; width: 533px; line-height: 35px; background-color: #f5f5f5;" placeholder="{{privateStore.marks[2]}}"></textarea>' +
	        '</div>' +

	        '</div>' +


	        '<div class="texteditor-button" style="margin-top: 50px;">' +
	        '<div id="emptyLabel" style="width: 200px;text-align: center;height: 40px;line-height: 40px;font-size: 14px;color:red;margin-left:auto;margin-right:auto;opacity:0;">Please enter something.</div>' +

	        '<div>' +
	        '<div class="button t-center" v-on:click="submit" style="width: 160px;height: 40px;line-height: 40px;display: inline-block; margin-left: 245px;font-size: 14px;">Done</div>' +
	        '</div>' +
	        '</div>' +
	        '</div>',
	    data: function() {
	        return {
	            privateStore: {
	                width: 655,
	                height: 655,
	                question:'',
	                featureRequest:'',
	                bug:'',
	                selector: '#contactUsWindow',
	                marks: ['input your question here', 'input your feature request here', 'input the bug description here']
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
	    },
	    methods: {
	        handleHideView: function() {
	            this.sharedStore.isShowContactUs = false;
	        },
	        checkWords: function(event) {
	          for (var i = 0; i < this.privateStore.marks.length; i++) {userAgent:
	            if(event.target.value === this.privateStore.marks[i]){
	              event.target.value = '';
	            }
	          };
	        },
	        submit:function(){
	          if(this.privateStore.question.trim()===""&&this.privateStore.featureRequest.trim()===""&&this.privateStore.bug.trim()===""){
	            $("#emptyLabel").css('opacity', 1);
	          }else{
	            var question=this.privateStore.question;
	            var featureRequest=this.privateStore.featureRequest;
	            var bug=this.privateStore.bug;
	            var os=navigator.platform;
	            var browser='[appName:'+navigator.appName+';userAgent:'+navigator.userAgent+';appVersion:'+navigator.appVersion+']';
	            __webpack_require__(9).sentContactUs(this,question, featureRequest, bug,os,browser);
	            this.sharedStore.isShowContactUs = false;
	            this.privateStore.question="";
	            this.privateStore.featureRequest="";
	            this.privateStore.bug="";
	          }

	        }
	    },
	    ready: function() {},
	    events: {
	        notifyShowContactUsWindow: function() {
	            console.log('ShowContactUsWindow');
	            var utilWindow = __webpack_require__(46);
	            utilWindow.setPopWindowPosition({ width: this.privateStore.width, height: this.privateStore.height, selector: this.privateStore.selector });
	            this.sharedStore.isShowContactUs = true;
	            $("#emptyLabel").css('opacity', 0);
	        }
	    },
	    created: function() {}
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {var UtilMath = __webpack_require__(7);

	module.exports = {
	  // template: '#t-image-upload',
	  template: '<div class="bed-matting-change" v-show="privateStore.isMattingChangeShow">'+
	              '<div class="shadow-bg" v-bind:style="{zIndex:windowZindex}"></div>'+
	              '<div class="box-matting-change fix-center" v-bind:style="{zIndex:windowZindex}" style="background-color: #fff;width: 520px;padding-bottom: 30px;overflow:visible" >'+
	                '<div style="height: 40px:line-height: 40px;">'+
	                  '<div style="width: 40px;height: 40px;margin-left: 480px;font-size: 20px;"><img src="../../static/img/close-normal.svg" width="16" height="16" v-on:click="hideMattingChange" onmouseover="this.src = \'../../static/img/close-hover.svg\'" onmouseout="this.src = \'../../static/img/close-normal.svg\'" alt="close" title="close" style="margin-top: 24px; margin-left: 4px; cursor: pointer;" /></div>' +
	                '</div>'+
	                '<div style="margin: 0 30px;">'+
	                  '<div class="font-normal t-center" style="font-size: 20px;color: #3a3a3a;">Matting requires the glass frame option</div>'+
	                '</div>'+
	                '<div class="font-light t-center" style="margin:14px 100px 24px;font-size:14px;color:#7b7b7b;line-height:1.5;">Option for matting will also change your frame from \"glassless\" to \"glass\".</div>'+
	                '<div style="margin: 24px 0 0; text-align:center;">'+
	                  '<div class="button-white t-center" v-on:click="hideMattingChange" style="margin-right: 40px;border: 1px solid #7b7b7b;text-align: center;width: 135px;height: 40px;line-height: 40px;display: inline-block;font-size: 14px;">Cancel</div>'+
	                  '<div class="button-white t-center" v-on:click="handleMattingChange" style="border: 1px solid #7b7b7b;text-align: center;width: 135px;height: 40px;line-height: 40px;display: inline-block;font-size: 14px;">OK</div>'+
	                '</div>'+
	              '</div>'+
	            '</div>',
	  data: function() {
	    return {
	      privateStore: {
	        id:'',
	        value:'',
	        isMattingChangeShow: false
	      },
	      sharedStore: Store
	    };
	  },
	  computed: {
	    windowZindex: function() {
	      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	        elementTotal = currentCanvas.params.length || 0;
	      return (elementTotal + 99) * 100;
	    }
	  },
	  methods: {
	    hideMattingChange: function() {
	      this.privateStore.isMattingChangeShow = false;
	      this.$dispatch("dispatchOptionItemSelect",'matteStyle','none');
	    },
	    handleMattingChange: function() {
	      this.privateStore.isMattingChangeShow = false;
	      this.sharedStore.isSwitchLoadingShow = true;
	      this.$dispatch("dispatchOptionItemSelect",'matteStyle',this.privateStore.value);
	    }
	  },
	  events: {
	    notifyShowMattingChange: function(id,value) {
	      this.privateStore.id = id;
	      this.privateStore.value = value;
	      this.privateStore.isMattingChangeShow = true;
	    }
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {
	module.exports = {

	    template: '<div style="margin-top:10px;width:16px;z-index:100;position: fixed;right:200px;top:40px;">' +
	                '<div style="min-height:130px" id="project-div-{{item.id}}" v-on:click="projectItemClick(item.id)" v-for="item in newImageList">' +
	                    '<div style="height:130px;margin-top:30px">' +
	                        '<span style="display:inline-block;margin-left:0;margin-top:30px">' +
	                        '<img class="preview-project-image" style="border: 1px solid rgba(250, 250, 250, 1);" id="project-item-{{ item.id }}" :imageid="item.id" :imageurl="item.url" :src="item.previewUrl" :alt="item.color"/>' +
	                        '</span>' +
	                    '</div>' +
	                '</div>' +
	            '</div>',
	    data: function() {
	        return {
	            privateStore: {
	                selectedColor: []
	            },
	            sharedStore: Store
	        };
	    },
	    computed: {
	        newImageList: function() {
	            //一个颜色只有一条数据
	            var colors = [];

	            var itemList = [];
	            for (var i = 0; i < this.sharedStore.projectSettings.length; i++) {
	                var color = this.sharedStore.projectSettings[i].color;
	                if (colors.indexOf(color) == -1) {
	                    colors.push(color);
	                    var assets = this.getColorAssets(color);
	                    var colorObject = { id: i, name: color, color: color, url: assets.backgroundImage, previewUrl: assets.backgroundImage };
	                    itemList.push(colorObject);
	                }


	            }
	            this.sharedStore.itemListNum=itemList.length;
	            return itemList;
	        }
	    },
	    methods: {
	        projectItemClick: function(index) {

	            this.sharedStore.currentSelectProjectIndex = index;
	            for (var i = 0; i < this.sharedStore.projectSettings.length; i++) {
	                if (i == index) {
	                    $("#project-item-" + index).css('border-color', '#7b7b7b');
	                } else {
	                    $("#project-item-" + i).css('border-color', '#ffffff');
	                }
	            }

	        },
	        getColorAssets: function(type) {
	            for (var i = 0; i < this.sharedStore.colorOptionList.length; i++) {
	                if (this.sharedStore.colorOptionList[i].type === type) {
	                    return this.sharedStore.colorOptionList[i];
	                }
	            }
	        }

	    },
	    events: {},
	    ready: function() {
	        setTimeout(function(){
	            $("#project-item-0").css('border-color', '#7b7b7b');
	        },300);
	        
	    }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {module.exports = {
	    template :  '<div>' +
	        	        '<div class="shadow-bg" v-show="privateStore.showCenter" v-bind:style="{zIndex: windowZindex-1}" style="z-index:9999999999"></div>' +
	            	    '<div id="popup-window" v-show="privateStore.showCenter"  style="z-index:9999999999" class="box-popup" v-bind:style="{width: privateStore.width + \'px\',height: privateStore.height + \'px\', zIndex: windowZindex }" >' +
	                        '<div v-show="privateStore.showcloseButton" style="height: 50px;line-height: 50px;">' +
	                            '<div style="width: 40px;height: 40px;float: right;font-size: 20px;"><img src="../../static/img/close-normal.svg" width="16" height="16" v-on:click="handleHidePopup" onmouseover="this.src = \'../../static/img/close-hover.svg\'" onmouseout="this.src = \'../../static/img/close-normal.svg\'" alt="close" title="close" style=" cursor: pointer;" /></div>' +
	                        '</div>' +
	            	    	'<div style="line-height: 25px;padding:10px 10px 0;text-align:center;color: #3a3a3a;font-size:16px;">{{{ privateStore.msg }}}</div>' +
	            	        '<div class="popup-button" style="margin-top:35px;text-align:center;">' +
	                	        '<div v-if="privateStore.confirm" class="button t-center" v-on:click="handleOkPopup" style="width: 160px;height: 40px;line-height: 40px;margin:0 auto;font-size: 14px;">{{ privateStore.texts[0] }}</div>' +
	                    	        '<template v-else>' +
	                                    '<div class="button t-center" v-on:click="handleNowPopup" style="display:inline-block;width: 160px;height: 40px;line-height: 40px;font-size: 14px;">{{ privateStore.b2 }}</div>' +
	                    	        	'<div class="button t-center button-white" v-if="privateStore.b1" v-on:click="handleLaterPopup" style="display:inline-block;width: 160px;height: 40px;line-height: 40px;margin-left: 20px;font-size: 14px;border:1px solid #7b7b7b;color: #393939">{{ privateStore.b1 }}</div>' +
	                    	        	// '<div class="button t-center" v-on:click="handleNowPopup" style="display:inline-block;width: 160px;height: 40px;line-height: 40px;margin-left: 20px;font-size: 14px;">{{ privateStore.b2 }}</div>' +
	                    	        '</template>'+
	                	        '</div>' +
	                        '</div>' +
	            	    '</div>' +
	                    '<div class="PopWindowTop" id="pop-window-top" v-bind:class="{show: privateStore.isTopPopShow, leave: privateStore.isTopPopLeave}" v-bind:style="{left: privateStore.isTopPopOut ? \'-1000px\' : null}">' +
	                        '<div v-show="privateStore.showcloseButton" class="PopWindowTop__close" v-on:click="handleHideTopPopup">×</div>' +
	                        '<div style="height:100%;">' +
	                            '<img :src="privateStore.image" v-if="sharedStore.saveImage" style="height:83%;padding: 15px;float: left;">' +
	                            '<span class="PopWindowTop__message">{{ privateStore.topMsg }}</span>' +
	                        '</div>' +
	                    '</div>'+
	        	    '</div>',
		 data: function() {
	        return {
	            privateStore: {
	            	params : '',
	                width : 470,
	                height : 206,
	                tWidth : 358,
	                tHeight : 130,
	                confirm : true,
	                showCenter : false,
	                showTop: false,
	                isTopPopAnimate: false,
	                isTopPopShow: false,
	                isTopPopLeave: false,
	                isTopPopOut: true,
	                image : null,
	                texts : ["OK","Try Later","Try Now","Continue","Save","Replace","Place on top","Sure","Cancel","Don't Save","Save as","Add"],
	                b1 : "Try Later",
	                b2 : "Try Now",
	                showcloseButton : true,
	                msg : '',
	                topMsg : '',
	                selector : '#popup-window',
	                addparams : '',
	                isConfirmOnlyOnce: false,
	                isConfirmButtonClicked: false
	            },
	            sharedStore: Store
	        };
	    },
	    computed: {
	      windowZindex: function() {
	        var currentCanvas = Store.pages[Store.selectedPageIdx].canvas,
	            elementTotal = currentCanvas.params.length || 0;

	        return (elementTotal + 12) * 100;
	      },
	      popWindowLeft: function(){
	        if(Store.isShowPostToSale){
	            return '43%';
	        }
	        return '64%';
	      },
	      showTop: {
	          get: function() {
	            return this.privateStore.showTop;
	          },
	          set: function(showTop) {
	              var _this = this;
	              this.privateStore.showTop = showTop;

	              // 正在执行动画时，不触发设定
	              if(!this.privateStore.isTopPopAnimate) {

	                if(showTop) {
	                    this.privateStore.isTopPopLeave = false;
	                    this.privateStore.isTopPopShow = true;
	                    this.privateStore.isTopPopAnimate = true;
	                    this.privateStore.isTopPopOut = false;
	                    setTimeout(function() {
	                        _this.privateStore.isTopPopAnimate = false;
	                    }, 300);
	                } else {
	                    this.privateStore.isTopPopShow = false;
	                    this.privateStore.isTopPopLeave = true;
	                    this.privateStore.isTopPopAnimate = true;
	                    setTimeout(function() {
	                        _this.privateStore.isTopPopLeave = false;
	                        _this.privateStore.isTopPopAnimate = false;
	                        _this.privateStore.isTopPopOut = true;
	                    }, 300);
	                }
	              }
	          }
	      }
	    },
	    methods : {

	    	handleNowPopup : function(){
	    		var type = this.privateStore.type;
	            var isConfirmOnlyOnce = this.privateStore.isConfirmOnlyOnce;

	            if(isConfirmOnlyOnce && this.privateStore.isConfirmButtonClicked) return;

	    		if(type==="order"){
	    			this.$dispatch("dispatchReorder");
	    		}else if(type==="logo"){
	              Store.isPopSave=false;
	              if(__webpack_require__(21).getIsShowProjectInfoView()){

	                this.$dispatch('dispatchShowCloneWindow');
	              }else{

	                __webpack_require__(22).handledSaveOldProject(this,'dispatchRedirectHome');
	              }

	            }else if(type==="replace"){
	                var store = this.sharedStore,idx = store.pages[store.selectedPageIdx].canvas.elements.length,
	                    imageId = store.dragData.imageId;
	                store.shouldNewImage = true;
	                this.$dispatch("dispatchAddImage",this.privateStore.addparams);
	            }else if(type==="delete"){
	                var idx=this.privateStore.addparams.idx;
	                var type=this.privateStore.addparams.type;
	                this.sharedStore.watchData.removeElementIdx=idx;
	                this.sharedStore.watchData.removeElementType=type;
	                this.sharedStore.watches.isRemoveElement=true;
	            }else if(type==="saveAs"){
	                this.$dispatch('dispatchShowCloneWindow');
	            }else if(type==='cancelUpload'){
	                for(var i=0;i<this.sharedStore.uploadProgress.length;i++){
	                      Store.vm.$broadcast("notifyCancelItem",i);
	                 }
	                 this.sharedStore.uploadProgress.length = 0;
	                 if(Store.cancelByX){
	                    __webpack_require__(11)({ev: __webpack_require__(13).CancelAllFilesByXClicked});
	                }else{
	                    __webpack_require__(11)({ev: __webpack_require__(13).CancelAllFilesClicked});
	                }

	                 this.sharedStore.isImageUploadShow = false;
	            }else if(type==='login'){
	                window.open("/sign-in.html", "_blank");
	            }else if(type==='orderBlankProductToCart') {
	                this.$dispatch('dispatchOrderToCart');
	            }else if (type === 'printPageLimitTip') {
	                Store.vm.$broadcast('notifyShowImageUpload');
	            }

	            this.privateStore.isConfirmButtonClicked = true;

	            if(!isConfirmOnlyOnce) {
	                this.handleHidePopup();
	                this.initOptions();
	            }
	            if(type==='textFormIncomplete') {
	                this.$dispatch('dispatchOrderToCart');
	                __webpack_require__(11)({ev: __webpack_require__(13)['CheckIncompleteFieldsContinue']});
	            }
	    	},

	    	handleLaterPopup : function(){
	            var _this = this;
	    		var type = this.privateStore.type;
	    		if(type==="order"){
	    			//...
	    		}else if(type==="logo"){
	                Store.isPopSave=false;
	                this.redirectHome();
	            }else if(type==="replace"){
	                var idx = this.sharedStore.dropData.idx,
	                    imageId = this.sharedStore.dragData.imageId;
	                var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	                currentCanvas.elements[idx].refreshImageById(imageId);
	            } else if(type==="textFormIncomplete") {
	                Store.isOrderClicked = true;
	                Store.vm.$broadcast('notifyTextFormRemindIncomplete');
	                __webpack_require__(11)({ev: __webpack_require__(13)['CheckIncompleteFieldsCancel']});
	            } else if(type==='emptyLRBBlock'){
	                __webpack_require__(22).saveOldProject(_this,function(){
	                    Store.isPrjSaved=true;
	                    Store.isPopSave = false;
	                    window.location = '/' + Store.orderType + '/addShoppingCart.html?projectGUID=' + Store.projectId + '&quantity=1';
	                });
	            } else if(type==='deleteProject'){
	                this.sharedStore.vm.$broadcast('notifyDeleteProject', this.privateStore.params.pageIdx);
	            } else if(type==='orderConfirm'){
	                Store.vm.$broadcast('notifyOrderContinue');
	            }
	    		this.handleHidePopup();
	    		this.initOptions();
	    	},

	    	handleOkPopup : function(){
	            var type = this.privateStore.type;
	    		if(type==="order"){
	    			//...
	    		}
	    		this.handleHidePopup();
	    		this.initOptions();
	    	},

	        handleHidePopup : function(){
	            // this.sharedStore.isPopupShow = false;
	            // this.privateStore.showTop = false;
	            this.privateStore.showCenter = false;
	        },

	         handleHideTopPopup : function(){
	            // this.sharedStore.isPopupShow = false;
	            this.showTop = false;
	        },

	    	initOptions : function(){
	    		this.sharedStore.isPopupShow=false;
	            this.privateStore.confirm = true;
	            this.privateStore.msg = '';
	            this.privateStore.showcloseButton = true;
	            this.privateStore.showCenter = false;
	            this.showTop = false;
	            this.privateStore.b1 = this.privateStore.texts[1];
	            this.privateStore.b2 = this.privateStore.texts[2];

	    	},

	        redirectHome : function(){
	            location.href = "/";
	        },

	        strategies : function(){
	        	var _this = this,oldHeight=_this.privateStore.height;
	            _this.privateStore.height=206;
	        	return  {
	            	'order' : function(status){
	            		if(status==-1){
	            			_this.privateStore.confirm = false;
			                _this.privateStore.b1 = _this.privateStore.texts[1];
			                _this.privateStore.b2 = _this.privateStore.texts[2];
			    			_this.setMsg('Unable to add to cart, please try again.');
	            		}
	            	},
	            	'save' : function(status){
	            		// _this.privateStore.confirm = true;
		    			if(status==0){
	                        _this.privateStore.height = oldHeight;
	                        _this.setTopMsg('Saved successfully!');
	                        _this.showTop = true;
	                        _this.privateStore.image = _this.getImageSelected();
	                        return true;
	                    }else if(status==-1){
	                        _this.privateStore.msg = 'Unable to save, please try again.';
	                    }else if(status==-2){
	                        _this.privateStore.msg = 'Project Title already Exists';
	                    }else if(status==-3){
	                        _this.privateStore.height=246;
	                        _this.privateStore.msg = "This item was already ordered, you can't modify it anymore. Please create a new project if you want to modify.";
	                    }else if(status==-4){
	                        _this.privateStore.height=246;
	                        _this.privateStore.msg = "This item was already ordered or added to cart. You need to save your additional changes into a new project.";
	                    }else if(status==-5){
	                        _this.privateStore.height=206;
	                        _this.privateStore.msg = 'Project is already published!';
	                    }
	            	},
	            	'preview' : function(status){
	            		if(status==-1){
	            			_this.privateStore.confirm = true;
							_this.setMsg('Preview failed, please try again.');
	            		}
	            	},
	            	'upload' : function(status){
	            		if(status==-1){
	            			_this.privateStore.confirm = true;
	            			_this.setMsg('Please wait for the upload to finish.');
	            		}
	            	},
	            	'contact' : function(status){
	            		if(status==0){
		                    _this.privateStore.confirm = true;
		                    _this.setMsg('Submit successfully.\nMany thanks for your feedback.');
		                }else{
		                    _this.privateStore.confirm = true;
		                    _this.setMsg('Send failed, you may try again later');
		                }
	            	},
	            	'spec' : function(status){
	            		if(status==-1){
	            			_this.privateStore.confirm = true;
	            			_this.setMsg('Request api service failed');
	            		}
	            	},
	            	'logo' : function(status){
	            		if(status==-1){
	                        _this.privateStore.height=232;
	                        _this.privateStore.width=510;
	                        _this.privateStore.b1 = _this.privateStore.texts[9];
	                        _this.privateStore.b2 = _this.privateStore.texts[4];
	                        _this.privateStore.confirm = false;
	                        _this.setMsg('This will take you to home page.<br/>Please select an option before continuing.');
	                    }
	            	},
	                'replace' : function(status){
	                    if(status==-1){
	                        _this.privateStore.b1 = _this.privateStore.texts[5];
	                        _this.privateStore.b2 = _this.privateStore.texts[6];
	                        _this.privateStore.confirm = false;
	                        _this.setMsg('How do you want to handle this image? ');
	                    }
	                },
	                'isOrder' : function(status){
	                    if(status==-1){
	                        _this.privateStore.height=250;
	                        _this.privateStore.confirm = true;
	                        _this.setMsg('This item was already ordered, you can not modify it anymore.Please create a new project if you want to modify.');
	                    }
	                },
	                'delete' :function(status){
	                    if(status==-1){
	                        _this.privateStore.b1 = _this.privateStore.texts[8];
	                        _this.privateStore.b2 = _this.privateStore.texts[7];
	                        _this.privateStore.confirm = false;
	                        _this.setMsg('Current element will  be removed from workbench, please confirm? ');
	                    }
	                },
	                'clone' :function(status){
	                    _this.privateStore.confirm = true;
	                    _this.setMsg(_this.privateStore.params.info);

	                },
	                'saveAs' :function(status){
	                    _this.privateStore.height=236;
	                    _this.privateStore.b1 = _this.privateStore.texts[8];
	                    _this.privateStore.b2 = _this.privateStore.texts[10];
	                    _this.privateStore.confirm = false;
	                    _this.setMsg(_this.privateStore.params.info);
	                },
	                printSaveAs : function(status){
	                    if(status == -1){
	                        _this.privateStore.height=200;
	                    }else{
	                        _this.privateStore.height=236;
	                    }
	                    _this.privateStore.confirm = true;
	                    _this.setMsg(_this.privateStore.params.info);


	                },
	                'checkFailed':function(status){
	                     _this.privateStore.height=250;
	                     _this.privateStore.confirm = true;
	                     _this.setMsg(_this.privateStore.params.info);
	                },
	                'imageNotExist':function(status){
	                    _this.privateStore.confirm = true;
	                    _this.setMsg('Please drag and drop your photo onto the canvas before placing your order.');
	                },
	                'cancelUpload' : function(){
	                    _this.privateStore.b1 = _this.privateStore.texts[8];
	                    _this.privateStore.b2 = _this.privateStore.texts[3];
	                    _this.privateStore.confirm = false;
	                    _this.setMsg('Your image has not been uploaded.<br />What do you want to do?');
	                },
	                'login':function(){
	                    _this.privateStore.height=260;
	                    _this.privateStore.b1 = _this.privateStore.texts[8];
	                    _this.privateStore.b2 = "Log In";
	                    _this.setMsg('Your session has timed out. You must log in again to continue. Clicking Log In will open a new window. Once successfully logged in, you may return to this window to continue editing.');
	                    _this.privateStore.confirm = false;
	                },
	                'notify': function(status){
	                    if(status == -1){
	                        _this.privateStore.height=206;
	                        _this.privateStore.msg = 'Please Fill All Layouts First!';
	                    }
	                },
	                'woodPrintAlert': function(status){
	                    if(status == 0){
	                        _this.privateStore.height=240;
	                        _this.privateStore.confirm = true;
	                        _this.privateStore.msg = 'The available options for print surface have changed. The print surface of your project has been upgraded to the nearest available option.';
	                    }
	                },
	                'orderBlankProductToCart' :function(status){
	                    _this.privateStore.b1 = _this.privateStore.texts[8];
	                    _this.privateStore.b2 = _this.privateStore.texts[3];
	                    _this.privateStore.confirm = false;
	                    _this.privateStore.isConfirmOnlyOnce = true;
	                    _this.setMsg('Do you really want to add a blank product to your cart?');
	                },
	                'textFormIncomplete' :function(status){
	                    var infoLength = Object.keys(status).reduce(function(length, key) {
	                        if(!status[key]) {
	                            return length + 1;
	                        }
	                        return length;
	                    }, 0);
	                    var msg =
	                        '<div style="position:relative;top:-20px;text-align:left;padding:0 30px;height:' + (55 + 25 * infoLength) +'px;line-height:24px;font-size:14px;">' +
	                            '<h3 style="font-size:24px;color:#3A3A3A;margin-bottom:11px;margin-top:0;">Review</h3>' +
	                            '<div>Please review the following before ordering:' +
	                                (!status.isAllEdited ? '<br>- One or more expected fields have not been filled out.' : '') +
	                                (!status.isAllSizeSuitable ? '<br>- One or more text is too big and will be cut off.' : '') +
	                                '<div style="margin-bottom: 7px;"></div>' +
	                                'Do you wish to continue anyway?' +
	                            '</div>' +
	                        '</div>';

	                    _this.privateStore.height = 241 + 25 * infoLength;
	                    _this.privateStore.width = 500;
	                    _this.privateStore.b1 = _this.privateStore.texts[8];
	                    _this.privateStore.b2 = _this.privateStore.texts[3];
	                    _this.privateStore.confirm = false;
	                    // _this.privateStore.isConfirmOnlyOnce = true;
	                    _this.setMsg(msg);
	                },
	                printPageLimitTip: function() {
	                    var pageNum =  _this.sharedStore.pages.length;
	                    var lessPages = _this.sharedStore.maxPageNum - pageNum;
	                    var endWord = lessPages > 1 ? ' photos' : ' photo';
	                    _this.privateStore.height = 240;
	                    _this.privateStore.b2 = _this.privateStore.texts[11];
	                    _this.privateStore.b1 = '';
	                    _this.privateStore.confirm = false;
	                    _this.setMsg(
	                        'The Little Prints Pack you are ordering can contain up to ' + _this.sharedStore.maxPageNum +
	                        ' photos. Currently it contains only ' + pageNum +
	                        (pageNum <= 1 ? ' photo. ' : ' photos. ') +
	                        'Please add ' + lessPages + endWord);

	                },
	                'disableInfo':function(status){
	                     _this.privateStore.height=250;
	                     _this.privateStore.confirm = true;
	                     _this.setMsg('The option of this product is no longer offered by manufacturer.Please create a new project and experience the latest version.');

	                },
	                emptyLRBBlock: function(){
	                    var pageNum =  _this.privateStore.params.pageNum;
	                    var emptyPageNum = _this.privateStore.params.emptyPageNum;
	                    _this.privateStore.b2 = _this.privateStore.texts[8];
	                    _this.privateStore.b1 = _this.privateStore.texts[3];
	                    _this.privateStore.confirm = false;
	                    _this.setMsg(
	                        ' You added ' + pageNum + (pageNum > 1 ? ' blocks' : ' block') +', but ' + emptyPageNum +
	                        (emptyPageNum <= 1 ? ' block has ' : ' blocks have ') +
	                        'no image. Would you like to continue?');
	                },
	                deleteProject: function(){
	                    var message =  _this.privateStore.params.message;
	                    _this.privateStore.b2 = _this.privateStore.texts[8];
	                    _this.privateStore.b1 = _this.privateStore.texts[3];
	                    _this.privateStore.confirm = false;
	                    if(message){
	                        _this.setMsg(message);

	                    }else{
	                        _this.setMsg('This operation will delete this block, would you like to continue?');

	                    }

	                },
	                alertMessage: function() {
	                    _this.privateStore.b2 = _this.privateStore.texts[0];
	                    _this.privateStore.b1 = '';
	                    _this.privateStore.height = _this.privateStore.params.height;
	                    _this.setMsg(_this.privateStore.params.message);
	                },
	                orderConfirm: function(){
	                    var message =  _this.privateStore.params.message;
	                    _this.privateStore.height=_this.privateStore.params.height?_this.privateStore.params.height:206;
	                    _this.privateStore.b2 = _this.privateStore.texts[8];
	                    _this.privateStore.b1 = _this.privateStore.texts[3];
	                    _this.privateStore.confirm = false;
	                    _this.setMsg(message);
	                }
	            }
	        },

	    	showPopup: function(params) {
	    		this.privateStore.params = params;
	            if(params.type!=='save'){
	                this.privateStore.type = params.type;
	            }
		        this.checkType(params);
	            if(this.privateStore.showCenter){
	                var utilWindow=__webpack_require__(46);
	                utilWindow.setPopWindowPosition({width:this.privateStore.width,height:this.privateStore.height,selector:this.privateStore.selector});
	            }
		        this.sharedStore.isPopupShow = true;
	            this.privateStore.isConfirmButtonClicked = false;
	    	},

	    	checkType : function(params){
	            if(!this.strategies()[params.type](params.status)){
	            	this.privateStore.showCenter = true;
	            }else{
	                this.showTop = true;
	            }
	    	},

	        getImageSelected : function(){
	            if(this.sharedStore.projectSettings[this.sharedStore.currentSelectProjectIndex] && this.sharedStore.projectSettings[this.sharedStore.currentSelectProjectIndex].color && this.sharedStore.selectedPageIdx != null) {
	                return './assets/img/'+ this.sharedStore.projectSettings[this.sharedStore.currentSelectProjectIndex].color +'-'+ this.sharedStore.selectedPageIdx +'.png';
	            };
	        },

	        setMsg : function(msg){
	            this.privateStore.msg = msg;
	        },

	        setTopMsg : function(msg){
	            this.privateStore.topMsg = msg;
	        }
	    },
	    events : {
	    	notifyShowPopup : function(params){
	            var _this = this;
	            this.showPopup(params);
	            if(_this.showTop){
	                setTimeout(function(){
	                    _this.handleHideTopPopup();
	                },2000);
	            }
	    	},
	        notifyHidePopup : function(){
	            this.handleHidePopup();
	            this.handleHideTopPopup();
	        },
	        notifyRedirectHome : function(){
	            this.redirectHome();
	        },
	        notifyAddOrReplaceImage : function(params){
	            this.showPopup({type:'replace',status:-1});
	            this.privateStore.addparams = params
	        },
	        notifyDeleteElement:function(params){
	            //var index=params.idx;
	            //var type=params.type;
	            this.showPopup({type:'delete',status:-1});
	            this.privateStore.addparams = params
	        }
	    },
	    ready : function(){
	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {module.exports = {
	    template: '<div v-show="sharedStore.isShowClone">' +
	                '<div class="shadow-bg" v-bind:style="{zIndex: windowZindex-1}"></div>' +
	                '<div id="cloneWindow" class="box-order" v-bind:style="{width: privateStore.width + \'px\',height: privateStore.height + \'px\', zIndex: windowZindex }">' +
	                  '<div style="height: 40px:line-height: 40px;">' +
	                    '<div style="width: 40px;height: 40px;margin-left: 610px;font-size: 20px;"><img src="../../static/img/close-normal.svg" draggable="false" width="16" height="16" v-on:click="handleHideView()" onmouseover="this.src = \'../../static/img/close-hover.svg\'" onmouseout="this.src = \'../../static/img/close-normal.svg\'" alt="close" title="close" style="margin-top: 24px; margin-left: 4px; cursor: pointer;" /></div>' +
	                '</div>' +
	                '<div style="margin: 0 40px;">' +
	                '<div class="font-title t-left">Clone Project</div>' +
	                '</div>' +
	                '<div style="margin: 40px 40px 0; width: 570px;">' +
	                '<label class="options-label font-label" style="height: 35px; line-height: 35px;width: 100%;">Please input new project name</label>' +
	                '<div class="box-textarea">' +
	                '<input id="clone_title" type="text" v-model="privateStore.title" class="font-textarea"  style="width: 533px;height:35px; line-height: 35px; background-color: #f5f5f5;" placeholder="{{privateStore.marks[0]}}" v-on:blur="handleTitleInputBlur()" v-on:focus="handleTitleInputFocus()" maxlength="50"></textarea>' +
	                '</div>' +
	                '</div>' +
	                '<div class="texteditor-button" style="margin-top: 0px;">' +
	                '<div id="emptyInfo" v-show="privateStore.isProjectNameInvalid" style="width: auto;text-align: center;height: 30px;line-height: 30px;font-size: 14px;color:red;margin-left:auto;margin-right:auto;">{{privateStore.invalidateTitle}}</div>' +
	                '<div style="text-align: center; margin-top:25px;">' +
	                '<div class="button t-center button-white" v-on:click="cancel" style="width: 160px;height: 40px;line-height: 40px;display: inline-block; font-size: 14px; margin-right: 26px;border: 1px solid #ccc;color: #393939;">Cancel</div>' +
	                '<div class="button t-center" v-on:click="submit" style="width: 160px;height: 40px;line-height: 40px;display: inline-block; font-size: 14px;">Clone</div>' +
	                '</div>' +
	                '</div>' +
	              '</div>',
	    data: function() {
	        return {
	            privateStore: {
	                width: 655,
	                height: 318,
	                title: '',
	                selector: '#cloneWindow',
	                marks: ['input new name here'],
	                invalidateTitle: 'Please input new project name. ',
	                isProjectNameInvalid: false
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
	    },
	    methods: {
	        handleHideView: function() {
	            this.sharedStore.isShowClone = false;
	            this.privateStore.title = '';
	        },
	        submit: function() {
	            if (!this.privateStore.title || this.privateStore.title.trim() === "") {
	                this.privateStore.invalidateTitle = "Please input new project name";
	                this.privateStore.isProjectNameInvalid = true;

	            } else if (!__webpack_require__(21).checkInvalid(this.privateStore.title)) {
	                this.privateStore.invalidateTitle = "Only letters, numbers, blank space, - (hyphen) and _ (underscore) are allowed in the title.";
	                this.privateStore.isProjectNameInvalid = true;
	            } else {
	                this.privateStore.isProjectNameInvalid = false;
	                __webpack_require__(22).cloneProject(this, this.privateStore.title);
	                //this.sharedStore.isShowClone = false;
	                this.privateStore.title = '';

	            }

	        },
	        cancel: function() {
	            this.sharedStore.isShowClone = false;
	            this.privateStore.title = '';
	        },
	        handleTitleInputBlur: function() {
	            this.privateStore.title = this.replaceInvalidString(this.privateStore.title);

	            if (!this.privateStore.title || this.privateStore.title.trim() === "") {
	                this.privateStore.invalidateTitle = "Please input new project name";
	                this.privateStore.isProjectNameInvalid = true;
	                return;
	            }
	            if (!__webpack_require__(21).checkInvalid(this.privateStore.title)) {
	                this.privateStore.invalidateTitle = "Only letters, numbers, blank space, - (hyphen) and _ (underscore) are allowed in the title.";
	                this.privateStore.isProjectNameInvalid = true;
	            } else {
	               this.privateStore.isProjectNameInvalid = false;
	            }
	        },
	        handleTitleInputFocus: function(){
	            this.privateStore.invalidateTitle = '';
	        },
	        replaceInvalidString: function(value) {
	            var start_ptn = /<\/?[^>]*>/g;
	            var end_ptn = /[ | ]*\n/g;
	            var space_ptn = /&nbsp;/ig;
	            return value.replace(start_ptn, "").replace(end_ptn, "").replace(space_ptn, "").replace(/(^\s+)|(\s+$)/g, "");
	        }
	    },
	    ready: function() {},
	    events: {
	        notifyShowCloneWindow: function() {

	            var utilWindow = __webpack_require__(46);
	            utilWindow.setPopWindowPosition({ width: this.privateStore.width, height: this.privateStore.height, selector: this.privateStore.selector });
	            this.sharedStore.isShowClone = true;
	            this.privateStore.isProjectNameInvalid = false;
	        },
	        notifyHideCloneWindow: function() {
	            this.sharedStore.isShowClone = false;
	        },
	        notifyShowInvalidTitle: function(title) {
	            this.privateStore.invalidateTitle = title;
	            this.privateStore.isProjectNameInvalid = true;
	        }
	    },
	    created: function() {}
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {
	// module -- inner preview

	module.exports = {
	  template: '<div id="frame" v-show="sharedStore.isInnerPreviewShow" style="position: fixed; z-index: 9999999; left: 0; top: 0; width: 100%; height: 100%; background-color: white;">' +
	              '<img src="../../static/img/close-normal.svg" width="16" height="16" v-on:click="handleHidePreview()" onmouseover="this.src = \'../../static/img/close-hover.svg\'" onmouseout="this.src = \'../../static/img/close-normal.svg\'" alt="close" title="close" style="position: absolute; top: 18px; right: 44px; cursor: pointer;" />' +
	              // '<iframe v-bind:src="privateStore.previewUrl" frameborder="0" scrolling="auto" style="width: 100%; height: 100%;">' +
	              // '</iframe>' +
	            '</div>',
	  data: function() {
			return {
				privateStore: {
	        previewUrl: '',
	        orderedPreview: false
				},
				sharedStore: Store
			};
		},
	  computed: {
	    // previewUrl: function() {
	    //   var editUrl = window.location.href;
	    //   var prefix = editUrl.split('index.html?')[0];
	    //
	    //   editUrl = prefix + 'preview.html?initGuid=' + Store.projectId + '&isPreview=true&source=self';
	    //
	    //   return editUrl;
	    // },
	  },
	  events: {
	    notifyOrderedPreview: function() {
	      this.sharedStore.isInnerPreviewShow = true;
	      this.privateStore.orderedPreview = true;
	    }
	  },
	  methods: {
	    handleHidePreview: function() {
	      if(!this.privateStore.orderedPreview) {
	        this.sharedStore.isInnerPreviewShow = false;
	      } else {
	        location.href = '/my-projects.html';
	      }
	    },
	  },
	  ready: function() {
	    var _this = this;

	    _this.$watch('sharedStore.isInnerPreviewShow', function() {
	      if(_this.sharedStore.isInnerPreviewShow) {
	        if(document.getElementById("inner-preview")){
	          document.getElementById("frame").removeChild(document.getElementById("inner-preview"));
	        }
	        var editUrl = window.location.href;
	        var prefix = editUrl.split('index.html?')[0];
	        var orderedPreview = _this.privateStore.orderedPreview ? '&orderedPreview=true' : '';
	        var blockIndex = -1;
	        for(var i=0; i <= this.sharedStore.selectedPageIdx; i++){
	          if(!this.sharedStore.pages[i].isDeleted){
	            blockIndex++;
	          }
	        }
	        if(blockIndex <= 0){blockIndex = 0;}
	        editUrl = prefix + 'preview.html?initGuid=' + Store.projectId + '&isPreview=true&source=self' + orderedPreview+'&selectedPageIdx=' + blockIndex;
	        _this.privateStore.previewUrl = editUrl;
	        var iframe = document.createElement('iframe');
	        iframe.src = editUrl;
	        iframe.id = 'inner-preview';
	        iframe.style.width = '100%';
	        iframe.style.height = '100%';
	        document.getElementById("frame").appendChild(iframe);

	      }
	      else {
	        _this.privateStore.previewUrl = '';
	      };
	    });

	  }

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {module.exports = {
	    template: '<div v-show="isShow" style="width:340px;margin:37px 0 35px 35px;overflow:hidden;" v-bind:style="{height:itemHeight}">'+
	                '<div style="width:200px;font-size:14px;font-weight:600;margin:0 0 -11px 5px">{{title}}</div>'+
	                '<div style="width:310px;overflow:hidden;">'+
	                    '<p v-for="item in options"  v-show="!isColor" v-bind:style="{minWidth:minWidth}" style="float: left;height:20px;font-size:13px;margin:15px 0 0 0;"><input type="radio" id={{item.id}} value={{item.id}} v-model="selected"  v-on:change="optionChange" ><label for="{{item.id}}" title="{{item.paperAlt}}" v-bind:class="{ \'radio-pressed\': (selected===item.id), \'radio-normal\': (selected!==item.id) }" style="cursor:pointer;">{{item.title.trim()}}</label></p>'+
	                    '<p v-for="item in options" v-show="isColor"  style="float: left;width:40px;height:40px;margin:28px 12px 11px 0;margin-left:0px;cursor:pointer;"><img :src="item.url" id={{item.id}} v-bind:class="{ \'image-selected\': (selected===item.id), \'image-no-selected\': (selected!==item.id) }" title="{{item.title.trim()}}" v-on:click="optionChange"></p>'+
	                '</div>'+
	              '</div>'+
	              '<hr v-show="isShowHr" style="width:96%" color="#DEDEDE" size="1"/>',
	    props: [
	        'id',
	        'title',
	        'options',
	        'selected',
	        'line',
	        'item'

	    ],
	    data: function() {
	        return {
	            privateStore: {
	            },
	            sharedStore: Store
	        };
	    },
	    computed: {
	        isColor:function(){
	            if(this.id==='color'){

	                return true;
	            }
	            return false;
	        },
	        minWidth: function(){
	            if(this.title === "Frame Thickness"){
	                return "100%";
	            }else{
	                return "135px";
	            }
	        },
	        itemHeight:function(){
	            if(this.item){
	                return '0px';
	            }
	            return 'auto';
	        },
	        isShow:function(){
	            var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	            if(this.id=="matteStyle"||this.id=="glassStyle"){
	                if(currentProject.paper==="CP"||currentProject.paper==="MP"){
	                        return false;
	                }
	            }
	            if(Store.isFromMarketplace && currentProject.category==="categoryCanvas" && this.id === "product")return false;
	            return this.shouldShowOptions();
	        },
	        isShowHr:function(){
	            if(this.line&&this.isShow){
	                return true;
	            }
	            return false;
	        }
	    },
	    methods: {
	        optionChange:function(event){
	            this.sharedStore.isSwitchLoadingShow = true;
	            var optionId=event.target.id;
	            console.log(optionId);
	            this.selected=optionId;
	            this.submitData();
	            /*for(var i=0;i<this.options.length;i++){
	                console.log(this.options[i].id===optionId);
	                if(this.options[i].id===optionId){
	                    this.options[i].selected=true;
	                }else{
	                    this.options[i].selected=false;
	                }
	            }*/
	        },

	        // 当options列表里面有且一个none选项时，不显示options
	        shouldShowOptions: function() {
	            var hasNone = this.options.some(function(option){
	                return option.id === 'none';
	            })
	            return !(hasNone && this.options.length === 1);
	        },

	        submitData: function(){
	        /*  由于用户在 coating 封面时将matting 从 none 改为 black或 white 会同时更改
	        用户的纸张类型，所以在用户执行此操作时弹出提示框提醒用户会同时修改为 glass，
	        用户可自行决定是否继续执行当前操作  */
	          var projectSetting = Store.projectSettings[Store.currentSelectProjectIndex];
	          if(this.id ==='matteStyle' && this.selected !== 'none' && projectSetting.glassStyle === 'coating'){
	            this.$dispatch("dispatchShowMattingChange",this.id,this.selected);
	          }else{
	            // 正常逻辑下的 事件派发，直接将事件发送给 option 组件， option 组件进行下一步处理。
	            this.$dispatch("dispatchOptionItemSelect",this.id,this.selected);
	          };
	        },
	    },
	    events: {


	    },
	    created: function() {


	    },

	    ready : function(){

	    }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {var CanvasController = __webpack_require__(24);
	var UtilCrop = __webpack_require__(35);
	module.exports={
		template:'<div style="width:380px;overflow-x:hidden;overflow-y:auto;background-color:rgb(246,246,247)" v-bind:style="{ height: privateStore.minHeight + \'px\' }">'+
	                '<template-item v-for="item in numTemplatelist" v-bind:imagenum="item.key" v-bind:templatelist="item.list"></template-item>'+
	             '</div>',
		data: function() {
	        return {
	            privateStore: {
	                minHeight:500
	            },
	            sharedStore: Store
	        };
	    },
	    computed: {
	        numTemplatelist:function(){
	            var arr=[];
	            var maxNum=0;
	            var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	            var size;
	            if(currentProject.rotated){
	                size=currentProject.size.split('X')[1]+'X'+currentProject.size.split('X')[0];
	            }else{
	                size=currentProject.size;
	            }
	            for(var i in this.sharedStore.templateList){
	                if(parseInt(this.sharedStore.templateList[i].imageNum)>maxNum){
	                    maxNum = parseInt(this.sharedStore.templateList[i].imageNum);
	                }
	            }
	            for(var j=1;j<=maxNum;j++){
	                var numArr=[];
	                var key=j;
	                for(var k in this.sharedStore.templateList){
	                    if(this.sharedStore.templateList[k].imageNum==j){
	                        var object=new Object();
	                        object.imageNum=this.sharedStore.templateList[k].imageNum;
	                        object.guid=this.sharedStore.templateList[k].guid;
	                        object.suitId=this.sharedStore.templateList[k].suitId;
	                        object.url=this.sharedStore.templateList[k].url;
	                        object.rotateTemplateGuid=this.sharedStore.templateList[k].rotateTemplateGuid;
	                        object.designSize=this.sharedStore.templateList[k].designSize;
	                        if(this.sharedStore.templateList[k].designSize===size){
	                            numArr.push(object);
	                        }

	                    }
	                }

	                arr.push({key:key,list:numArr});
	            }
	            return arr;
	        }
	    },
	    methods: {
	        resetImageCrop: function() {
	            var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	            var idx = currentCanvas.selectedIdx;

	            if(Math.abs(currentCanvas.params[idx].imageRotate) === 90) {
	                // special rorate
	                var cWidth = currentCanvas.params[idx].imageHeight,
	                        cHeight = currentCanvas.params[idx].imageWidth;
	            }
	            else {
	                var cWidth = currentCanvas.params[idx].imageWidth,
	                        cHeight = currentCanvas.params[idx].imageHeight;
	            };

	            var defaultCrops = UtilCrop.getDefaultCrop(cWidth, cHeight, currentCanvas.params[idx].width, currentCanvas.params[idx].height);

	            var px = defaultCrops.px,
	                    py = defaultCrops.py,
	                    pw = defaultCrops.pw,
	                    ph = defaultCrops.ph,
	                    width = currentCanvas.params[idx].width * currentCanvas.ratio / pw,
	                    height = currentCanvas.params[idx].height * currentCanvas.ratio / ph;

	            // adding the crop settings to element
	            currentCanvas.params[idx].cropX = cWidth * px;
	            currentCanvas.params[idx].cropY = cHeight * py;
	            currentCanvas.params[idx].cropW = cWidth * pw;
	            currentCanvas.params[idx].cropH = cHeight * ph;

	            currentCanvas.params[idx].cropPX = px;
	            currentCanvas.params[idx].cropPY = py;
	            currentCanvas.params[idx].cropPW = pw;
	            currentCanvas.params[idx].cropPH = ph;
	        }
	    },
	    events: {
	        notifyImageList: function() {

	            this.privateStore.minHeight = __webpack_require__(46).getOptionHeight();
	        }

	    },
	    created: function() {


	    },

	    ready : function(){
	        var _this=this;
	        this.privateStore.minHeight = __webpack_require__(46).getOptionHeight();
	        _this.$watch("sharedStore.watches.isApplyLayout",function(){
	            if(_this.sharedStore.watches.isApplyLayout){
	                var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	                __webpack_require__(24).autoLayout();
	                var type = Store.projectSettings[Store.currentSelectProjectIndex].canvasBorder;
	                if(Store.projectSettings[Store.currentSelectProjectIndex].category === "categoryCanvas"){
	                    if(type==="mirror"){
	                        CanvasController.changeBorderToMirror();
	                    }else if(type==="image"){
	                        CanvasController.changeBorderToMirror(true);
	                    }else if(type==="color"){
	                        CanvasController.changeBorderToMirror();
	                    }
	                }

	                if(Store.projectSettings[Store.currentSelectProjectIndex].category === 'categoryTableTop') {
	                // if(Store.projectSettings[Store.currentSelectProjectIndex].category === 'categoryTableTop' && Store.templateList.length === 0) {
	                    var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
	                    var idx = currentCanvas.selectedIdx;
	                    this.elementData = currentCanvas.params[idx];
	                    this.elementData.width = currentCanvas.width / currentCanvas.ratio;
	                    this.elementData.height = currentCanvas.height / currentCanvas.ratio;
	                    _this.resetImageCrop();
	                }
	                _this.$dispatch("dispatchRepaintProject");
	                _this.$dispatch("dispatchRefreshScreenshot");
	                _this.sharedStore.watches.isApplyLayout = false;
	            }
	        })
	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {module.exports={
		template:'<div style="display:table;margin: 37px 0 -16px 40px;">'+
					'<div style="font-size:14px;font-weight:600;">{{imagenum}} {{imageTitle}}</div>'+
					'<div style="width:340px;display:table;margin:0;">'+
						'<div v-for="item in templatelist" style="float: left;margin:0 14px 14px 0;"><img :src="item.url" id="{{item.guid}}" v-bind:width="imageWidth" v-bind:class="{ \'template-selected\': (selected===item.guid), \'template-no-selected\': (selected!==item.guid) }" v-on:click="optionChange"></div>'+
					'</div>'+
				 '</div>',
		props:[
			'imagenum',
			'templatelist'
		],
		data: function() {
	        return {
	            privateStore: {
	            },
	            sharedStore: Store
	        };
	    },
	    computed: {
	    	imageTitle:function(){
	    		if(this.imagenum==1){
	    			return 'Photo';
	    		}
	    		return 'Photos';
	    	},
	    	selected:function(){
	    		var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	    		return currentProject.tplGuid;
	    	},
	        imageWidth:function(){
	            var currentProject = Store.projectSettings[Store.currentSelectProjectIndex];
	            var widthSize,heightSize;
	            if(currentProject.rotated){
	                widthSize=parseInt(currentProject.size.split('X')[1]);
	                heightSize=parseInt(currentProject.size.split('X')[0]);
	            }else{
	                widthSize=parseInt(currentProject.size.split('X')[0]);
	                heightSize=parseInt(currentProject.size.split('X')[1]);
	            }
	            if(widthSize/heightSize>=1.5){
	                return 140+"px";
	            }

	            if(widthSize/heightSize<=1/1.5){
	                return 60+"px";
	            }

	            return 87+"px";
	        }
	    },
	    methods: {
	        optionChange:function(event){
	            var optionId=event.target.id;
	            var designSize;
	            var suitId;
	            for(var i in this.templatelist){
	                if(this.templatelist[i].guid===optionId){
	                    designSize=this.templatelist[i].designSize;
	                    suitId=this.templatelist[i].suitId;
	                }
	            }
	            this.$dispatch('dispatchApplyTemplate',optionId,suitId,designSize);
	        }
	    },
	    events: {

	        
	    },
	    created: function() {


	    },

	    ready : function(){
	        
	    }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {module.exports = {
	    template: '<div>' +
	                    '<div class="shadow-bg" v-show="privateStore.isShowCartReturn" v-bind:style="{zIndex: windowZindex-1}"></div>' +
	                    '<div id="cartReturnWindow" v-show="privateStore.isShowCartReturn" class="box-popup" v-bind:style="{width: privateStore.width + \'px\',height: privateStore.height + \'px\', zIndex: windowZindex }" >' +
	                        '<div style="font-size: 24px;margin: 40px 45px 54px 45px;color: #3a3a3a;">What would you like to do?</div>'+
	                        '<div style="margin: 40px 45px 54px 45px;">'+
	                            '<div>'+
	                                '<input id="currentItem" name="cartRerutnItem" type="radio" value="current" v-model="privateStore.selected"><label for="currentItem" style="font-size:18px;color: #3a3a3a;">Edit current project</label>'+
	                                '<div style="font-size:14px;color: #7b7b7b;margin: 10px 0 0 22px;height: 50px;"></div>'+
	                            '</div>'+
	                            '<div>'+
	                                '<input id="cloneItem" name="cartRerutnItem" type="radio" value="clone" v-model="privateStore.selected"><label for="cloneItem" style="font-size:18px;color: #3a3a3a;">Clone current project</label>'+
	                                '<div style="font-size:14px;color: #7b7b7b;margin: 10px 0 0 22px;height: 50px;">Create a copy of the current project to edit.</div>'+
	                            '</div>'+
	                            '<div>'+
	                                '<input id="newItem"  name="cartRerutnItem" type="radio" value="new" v-model="privateStore.selected"><label for="newItem" style="font-size:18px;color: #3a3a3a;">Create a new blank project</label>'+
	                                
	                            '</div>'+
	                        '</div>'+
	                        '<div class="popup-button" style="margin-top:35px;text-align:center;">' +
	                            '<div class="button t-center" v-on:click="optionChange()" style="display:inline-block;width: 160px;height: 40px;line-height: 40px;font-size: 14px;">Continue</div>' +
	                        '</div>' +
	                    '</div>' +
	                '</div>',
	    data: function() {
	        return {
	            privateStore: {
	                width:580,
	                height:450,
	                selector: '#cartReturnWindow',
	                selected:'current',
	                isShowCartReturn:false

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
	    },
	    methods: {
	        optionChange:function(){
	            switch(this.privateStore.selected){
	                case 'current':
	                this.privateStore.isShowCartReturn = false;
	                return;
	                case 'clone':
	                Store.fromCart=false;
	                this.privateStore.isShowCartReturn = false;
	                this.$dispatch('dispatchShowCloneWindow');
	                return;
	                case 'new':
	                Store.fromCart=false;
	                Store.watches.isProjectLoaded=false;
	                this.privateStore.isShowCartReturn = false;
	                this.$dispatch('dispatchShowNewProjectWindow');
	                return;

	            }
	        }
	    },
	    events: {
	        notifyShowCartReturnWindow: function() {

	            var utilWindow = __webpack_require__(46);
	            utilWindow.setPopWindowPosition({ width: this.privateStore.width, height: this.privateStore.height, selector: this.privateStore.selector });
	            this.privateStore.isShowCartReturn = true;
	        }
	    },
	    created:function(){
	    },
	    ready:function(){
	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {module.exports = {
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

	            var quantity = __webpack_require__(22).getTotalPageNum() || 1;
	            var price=this.privateStore.oriPrice* quantity;
	            return "8X10 $"+ price.toFixed(2);
	        },
	        upgradeTitle:function(){
	            var quantity = __webpack_require__(22).getTotalPageNum() || 1;
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
	            __webpack_require__(11)({ev: __webpack_require__(13).Upgrade8x10,size: this.sharedStore.projectSettings[0].size,product: this.sharedStore.projectSettings[0].product,timestamp:new Date()-0});
	            Store.isPageLoadingShow = true;
	            __webpack_require__(22).saveOldProject(this,function(){
	                Store.isPrjSaved=true;
	                Store.isPopSave = false;
	                window.location = '/' + Store.orderType + '/addShoppingCart.html?projectGUID=' + Store.projectId + '&quantity=1';
	            });
	            this.privateStore.isShowUpgrade = false;
	        },
	        upgrade:function(){
	            __webpack_require__(11)({ev: __webpack_require__(13).Upgrade11x14,size: this.sharedStore.projectSettings[0].size,product: this.sharedStore.projectSettings[0].product,timestamp:new Date()-0});
	            // 先取截图，后升级保存，防止截图处于canvas中间状态
	            Store.isProjectUpgrade = true;
	            
	            Store.isPageLoadingShow = true;
	            __webpack_require__(22).upgradeProject();
	            
	            __webpack_require__(22).saveOldProject(this,function(){
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

	            var utilWindow = __webpack_require__(46);
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {var ProjectService = __webpack_require__(9);
	module.exports = {
	    template: '<div v-show="privateStore.isShowCreateProject">' +
	                '<div class="shadow-bg" v-bind:style="{zIndex: windowZindex-1}"></div>' +
	                '<div id="newProjectWindow" class="box-order" v-bind:style="{width: privateStore.width + \'px\',height: privateStore.height + \'px\', zIndex: windowZindex }">' +
	                  '<div style="height: 40px:line-height: 40px;">' +
	                    '<div style="width: 40px;height: 40px;margin-left: 610px;font-size: 20px;"><img src="../../static/img/close-normal.svg" draggable="false" width="16" height="16" v-on:click="handleHideView()" onmouseover="this.src = \'../../static/img/close-hover.svg\'" onmouseout="this.src = \'../../static/img/close-normal.svg\'" alt="close" title="close" style="margin-top: 24px; margin-left: 4px; cursor: pointer;" /></div>' +
	                '</div>' +
	                '<div style="margin: 0 40px;">' +
	                '<div class="font-title t-left">Create a new project</div>' +
	                '</div>' +
	                '<div style="margin: 40px 40px 0; width: 570px;">' +
	                '<label class="options-label font-label" style="height: 35px; line-height: 35px;width: 100%;">Please input new project name</label>' +
	                '<div class="box-textarea">' +
	                '<input id="new_project_title" type="text" v-model="privateStore.title" class="font-textarea"  style="width: 533px;height:35px; line-height: 35px; background-color: #f5f5f5;" placeholder="{{privateStore.marks[0]}}" v-on:blur="handleTitleInputBlur()" maxlength="50"></textarea>' +
	                '</div>' +
	                '</div>' +
	                '<div class="texteditor-button" style="margin-top: 0px;">' +
	                '<div id="new_project_emptyInfo" style="width: auto;text-align: center;height: 30px;line-height: 30px;font-size: 14px;color:red;margin-left:auto;margin-right:auto;visibility:hidden;">{{privateStore.invalidateTitle}}</div>' +
	                '<div style="text-align: center;margin-top:25px;">' +
	                '<div class="button t-center button-white" v-on:click="cancel" style="width: 160px;height: 40px;line-height: 40px;display: inline-block; font-size: 14px; margin-right: 26px;border: 1px solid #ccc;color: #393939;">Cancel</div>' +
	                '<div class="button t-center" v-on:click="submit" style="width: 160px;height: 40px;line-height: 40px;display: inline-block; font-size: 14px;">Done</div>' +
	                '</div>' +
	                '</div>' +
	              '</div>',
	    data: function() {
	        return {
	            privateStore: {
	                width: 655,
	                height: 318,
	                title: '',
	                selector: '#newProjectWindow',
	                marks: ['input new name here'],
	                invalidateTitle: 'Please input new project name. ',
	                isShowCreateProject:false
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
	    },
	    methods: {
	        handleHideView: function() {
	            this.privateStore.isShowCreateProject = false;
	            this.privateStore.title = '';
	        },
	        submit: function() {
	            var _this = this;
	            if (!this.privateStore.title || this.privateStore.title.trim() === "") {
	                this.privateStore.invalidateTitle = "Please input new project name";
	                $("#new_project_emptyInfo").css("visibility", "visible");

	            } else{
	                if(this.privateStore.title === Store.title){
	                    var errorString = "Title existed, please pick another one.";
	                    Store.vm.$broadcast('notifyShowNewProjectInvalidTitle',errorString);
	                }else if (!__webpack_require__(21).checkInvalid(this.privateStore.title)) {
	                    this.privateStore.invalidateTitle = "Only letters, numbers, blank space, - (hyphen) and _ (underscore) are allowed in the title.";
	                    $("#new_project_emptyInfo").css("visibility", "visible");
	                } else {
	                    __webpack_require__(9).createProjectAddOrUpdateAlbum(_this.privateStore.title,Store.title,function(title){
	                        $("#new_project_emptyInfo").css("visibility", "hidden");
	                        __webpack_require__(22).createProject(_this, title);
	                        _this.privateStore.title = '';
	                    },function(){
	                        // var errorString = "Title existed, please pick another one.";
	                        // Store.vm.$broadcast('notifyShowNewProjectInvalidTitle',errorString);
	                    })            
	                }
	            }   

	        },
	        cancel: function() {
	            this.privateStore.isShowCreateProject = false;
	        },
	        handleTitleInputBlur: function() {
	            this.privateStore.title = this.replaceInvalidString(this.privateStore.title);

	            if (!this.privateStore.title || this.privateStore.title.trim() === "") {
	                this.privateStore.invalidateTitle = "Please input new project name";
	                $("#new_project_emptyInfo").css("visibility", "visible");
	                return;
	            }
	            if (!__webpack_require__(21).checkInvalid(this.privateStore.title)) {
	                this.privateStore.invalidateTitle = "Only letters, numbers, blank space, - (hyphen) and _ (underscore) are allowed in the title.";
	                $("#new_project_emptyInfo").css("visibility", "visible");
	            } else {
	                $("#new_project_emptyInfo").css("visibility", "hidden");
	            }
	        },
	        replaceInvalidString: function(value) {
	            var start_ptn = /<\/?[^>]*>/g;
	            var end_ptn = /[ | ]*\n/g;
	            var space_ptn = /&nbsp;/ig;
	            return value.replace(start_ptn, "").replace(end_ptn, "").replace(space_ptn, "").replace(/(^\s+)|(\s+$)/g, "");
	        }
	    },
	    ready: function() {
	      
	    },
	    events: {
	        notifyShowNewProjectWindow: function() {

	            var utilWindow = __webpack_require__(46);
	            utilWindow.setPopWindowPosition({ width: this.privateStore.width, height: this.privateStore.height, selector: this.privateStore.selector });
	            this.privateStore.isShowCreateProject = true;
	            $("#new_project_emptyInfo").css("visibility", "hidden");
	        },
	        notifyHideNewProjectWindow: function() {
	            this.privateStore.isShowCreateProject = false;
	        },
	        notifyShowNewProjectInvalidTitle: function(title) {
	            this.privateStore.invalidateTitle = title;
	            $("#new_project_emptyInfo").css("visibility", "visible");
	        }
	    },
	    created: function() {}
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, $) {var ParamsManage = __webpack_require__(26);
	var ImageListManage = __webpack_require__(25);

	module.exports = {
	    template: '<div id="warnTipElement-{{pagedd}}{{ id }}{{main}}" v-show="scale > warnTipLimit" v-bind:style="{ height:  (privateStore.height) + \'px\', bottom: bottom + \'px\', left: left + \'px\', zIndex: windowZindex }" style="position: absolute;">' +
	                  '<img src="../../static/img/warn_big_icon.svg" width="{{ privateStore.width }}px" height="{{ privateStore.height }}px" alt="" title="{{ warnTipMsg }}" /> {{ privateStore.warnTipContent }}' +
	              '</div>',
	    props: [
	        'id',
	        'pagedd',
	        'ratio',
	        'main',
	        'width',
	        'height',
	        'x',
	        'y'
	    ],
	    data: function() {
	        return {
	            privateStore: {
	                width: 18,
	                height: 18,
	                warnTipContent : '',
	                margin : Store.warnTipMargin || 90,
	                scale : 1
	            },
	            sharedStore : Store,
	            pagedd: 0,
	            main: '',
	            ratio: 1

	        };
	    },
	    computed: {
	        warnTipLimit:function(){
	            return this.sharedStore.warnTipLimit || 200;
	        },
	        scale: function() {
	            var currentCanvas = this.sharedStore.pages[this.pagedd].canvas,
	                idx = ParamsManage.getIndexById(this.id),
	                params = currentCanvas.params[idx],
	                imageDetail = ImageListManage.getImageDetail(params.imageId),
	                cropWidth = imageDetail.width * currentCanvas.params[idx].cropPW,
	                // cropHeight = imageDetail.height * currentCanvas.params[idx].cropPH,
	                frameWidth = this.width / this.ratio;
	                // scaleW = this.width / currentCanvas.ratio / cropWidth;
	                // scaleH = this.height / currentCanvas.ratio / cropHeight;

	            if(cropWidth < frameWidth) {
	                var scaleW = (frameWidth - cropWidth) / cropWidth * 100;
	            }
	            else {
	              var scaleW = 0;
	            };

	            return Math.round(scaleW);
	        },

	        bottom : function(){
	            var currentCanvas = this.sharedStore.pages[this.pagedd].canvas;
	            var offset = this.privateStore.margin * this.ratio

	            // 如果store里面有设置warnTipBottom，直接重置warnTipBottom作为bottom
	            if(this.sharedStore.warnTipBottom) {
	                return this.sharedStore.warnTipBottom;
	            }

	            if(this.sharedStore.isCanvas){
	                var offsetY = (currentCanvas.photoLayer.height - Math.abs(currentCanvas.photoLayer.y) - currentCanvas.canvasBordeThickness.top) * this.ratio;
	                if(this.y + this.height > offsetY){
	                    offset += this.y + this.height - offsetY;
	                }
	                return offset;
	            }

	            // 不同产品的WarnTip bottom值
	            switch(this.sharedStore.projectSettings[this.pagedd]['product']) {
	                case 'frameCanvas':
	                case 'acrylicPrint':
	                case 'metalPrint':
	                case 'woodPrint':
	                case 'LRB':
	                case 'LSC':
	                case 'mountPrint': {
	                    var offsetY = (currentCanvas.photoLayer.height - Math.abs(currentCanvas.photoLayer.y)) * this.ratio;

	                    if(this.y + this.height > offsetY){
	                        offset += this.y + this.height - offsetY;
	                    }
	                    return offset;
	                }
	            }
	        },

	        left : function(){
	            var currentCanvas = this.sharedStore.pages[this.pagedd].canvas;
	            var offset = this.privateStore.margin* this.ratio;

	            // 如果store里面有设置warnTipLeft，直接重置warnTipLeft作为left
	            if(this.sharedStore.warnTipLeft) {
	                return this.sharedStore.warnTipLeft;
	            }

	            if(this.sharedStore.isCanvas){
	                var offsetX = (Math.abs(currentCanvas.photoLayer.x) + currentCanvas.canvasBordeThickness.left) * this.ratio;
	                if(this.x < offsetX){
	                    offset += offsetX - this.x;
	                }
	                return offset;
	            }

	            switch(this.sharedStore.projectSettings[this.pagedd]['product']) {
	                case 'frameCanvas':
	                case 'flushMountCanvas':
	                case 'acrylicPrint':
	                case 'metalPrint':
	                case 'woodPrint':
	                case 'LRB':
	                case 'LSC':
	                case 'mountPrint': {
	                    var offsetX = Math.abs(currentCanvas.photoLayer.x) * this.ratio;
	                    if(this.x < offsetX){
	                        offset += offsetX - this.x;
	                    }

	                    return offset;
	                }
	            }
	        },

	        mirrorLength : function(){
	            var currentCanvas = this.sharedStore.pages[this.pagedd].canvas;

	            return currentCanvas.ratio * this.sharedStore.mirrorLength;
	        },

	        windowZindex: function() {
	          var currentCanvas = this.sharedStore.pages[this.pagedd].canvas,
	              idx = ParamsManage.getIndexById(this.id),
	              parentEl = currentCanvas.params[idx];

	          return (parentEl.dep + 1) * 100 + 80;
	        },

	        warnTipMsg: function() {
	            // console.log("scale",this.scale)
	            /*var Prj = Store.projectSettings[Store.currentSelectProjectIndex];
	            if(Prj.category==="categoryCanvas"){*/
	                /*return 'Image is enlarged ' + this.scale + '% beyond original size, most images print well up to ' +
	                    (this.sharedStore.warnTipLimit || 200) +'% beyond original size.';*/

	                return 'Photo has low resolution and may looks poor in print.';
	            /*}else{
	                return 'Image is enlarged ' + this.scale + '% beyond original size, most images print well up to 50% beyond original size.';
	            }*/

	        },
	    },
	    methods: {
	        hideWarnTip : function(idx){
	            $("#warnTipElement-" + idx).hide();
	        },
	        showWarnTip : function(idx){
	            $("#warnTipElement-" + idx).show();
	        },
	    },
	    events: {
	       notifyShowWarnTip : function(){
	            var idx = ParamsManage.getIndexById(this.id);
	            this.showWarnTip(idx);
	       },
	       notifyHideWarnTip : function(){
	            var idx = ParamsManage.getIndexById(this.id);
	            this.hideWarnTip(idx);
	       }
	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {var notSettingKeys = [
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
				var productOptionMaps = __webpack_require__(18).getOptions('product');
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
	            __webpack_require__(9).getCanvasPrice(product, options, userId);
			},
			
			getAllSizePrice: function() {
				if(Store.watches.isSpecLoaded && Store.watches.isProjectLoaded) {
					var _this = this;
					var product = Store.baseProject.product;
					var userId = _this.sharedStore.userSettings.userId;
					__webpack_require__(18).getOptions('size').map(function(size) {
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
						__webpack_require__(9).getLMCPrice(product, size, options, userId);
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store) {var CanvasController = __webpack_require__(24);
	module.exports = {
		events: {
			// child instance dispatch image upload
			dispatchImageUpload: function() {
				this.$broadcast('notifyShowImageUpload');
			},

			// child instance dispatch image list
			dispatchImageList: function() {
				this.$broadcast('notifyImageList');
			},

			dispatchImageCrop: function() {
				this.$broadcast('notifyImageCrop');
			},

			dispatchShowAddText: function() {
			  this.$broadcast('notifyShowAddText');
			},

			dispatchAddText: function(idx) {
				this.$broadcast('notifyAddText', idx);
			},

			dispatchShowMattingGlassEdit : function(){
				this.$broadcast("notifyShowMattingGlassEdit");
			},

			dispatchModifyText: function(idx) {
			  this.$broadcast('notifyModifyText', idx);
			},

			dispatchResetCanvas: function() {
			  this.$broadcast('notifyResetCanvas');
			},

			dispatchShowSpineLines: function() {
				this.$broadcast('notifyShowSpineLines');
			},

			dispatchHideSpineLines: function() {
				this.$broadcast('notifyHideSpineLines');
			},

			dispatchShowOptionWindow: function() {
				this.$broadcast('notifyShowOptionWindow');
			},

			dispatchUpdateAlbumResponse: function(isValid,text) {
				this.$broadcast('notifyUpdateAlbumResponse',isValid,text);
			},

			dispatchShowOrderWindow: function() {
				this.$broadcast('notifyShowOrderWindow');
			},

			dispatchShowContactUsWindow:function(){
				this.$broadcast('notifyShowContactUsWindow');
			},

			dispatchPreviewSave:function(result){
				this.$broadcast('notifyPreviewSave',result);
			},

			dispatchShowPopup : function(params){
				this.$broadcast('notifyShowPopup',params)
			},

			dispatchReorder : function(params){
				this.$broadcast("notifyReorder",params);
			},

			dispatchRedirectHome : function(){
				this.$broadcast("notifyRedirectHome");
			},

			dispatchShowWarnTip : function(idx){
				this.$broadcast("notifyShowWarnTip",idx);
			},

			dispatchHideWarnTip : function(idx){
				this.$broadcast("notifyHideWarnTip",idx);
			},

			dispatchShowOptionsWindow : function(){
				this.$broadcast("notifyShowOptionsWindow");
			},

			dispatchRotate : function(){
				this.$broadcast("notifyRotate");
			},

			dispatchRepaintProject: function() {
				this.$broadcast('notifyRepaintProject');
			},

			dispatchAddImage : function(params){
				this.$broadcast("notifyAddImage",params);
			},

			dispatchRefreshMirror : function(){
				this.$broadcast("notifyRefreshMirror");
			},
			dispatchClearMirror : function(idx){
				this.$broadcast("notifyClearMirror",idx);
			},


			dispatchRefreshBorder : function(type){
				this.$broadcast("notifyRefreshBorder",type);
			},

			dispatchRefreshScreenshot : function(){
				this.$broadcast("notifyRefreshScreenshot");
			},

			dispatchShowEditBorder : function(){
				this.$broadcast("notifyShowEditBorder");
			},

			dispatchShowBorder : function(){
				this.$broadcast("notifyShowBorder");
			},
			dispatchShowCloneWindow:function(){
				this.$broadcast("notifyShowCloneWindow");
			},
			dispatchCanvasPriceChange:function(){
				this.$broadcast("notifyCanvasPriceChange");
			},
			dispatchResetProjectInfo:function(){

				if(__webpack_require__(21).getIsShowProjectInfoView()){
					//this.$broadcast("notifyResetProjectInfo",false);
					var text=__webpack_require__(21).getProjectInfoViewText();
					/*this.$dispatch("dispatchShowPopup", { type : 'saveAs', status : 0 ,info:text});*/

				}else{
					this.$broadcast("notifyResetProjectInfo",true);
				}
			},
			dispatchOptionItemSelect:function(id,value){
				this.$broadcast("notifyOptionItemSelect",id,value);
			},
			dispatchShowMattingChange:function(id,value){
				this.$broadcast("notifyShowMattingChange",id,value)
			},

			// some system actions
			dispatchClearScreen: function(isFullClear) {
				isFullClear ? isFullClear = true : isFullClear = false;

				if(isFullClear) {
					// full screen clearing
				}
				else {
					// half screen clearing
				};

				// common screen clearing
				// 1. blur action focus
				Store.isLostFocus = true;
			},
			dispatchSingleImageUploadComplete:function(imageId){
		      var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
			  var idx = currentCanvas.selectedIdx;
			  if(currentCanvas.elements[idx]) {
				currentCanvas.elements[idx].setImageById(imageId);
			  }
			},
			dispatchApplyTemplate:function(templateId,suitId,designSize){
				__webpack_require__(34).getTemplateItemInfo(templateId,designSize);
				Store.projectSettings[Store.currentSelectProjectIndex].tplGuid = templateId;
				Store.projectSettings[Store.currentSelectProjectIndex].tplSuitId = suitId;
				if(Store.projectSettings[Store.currentSelectProjectIndex].category==='categoryCanvas'){
					if(this.sharedStore.isImageBorder){
		                CanvasController.changeBorderToMirror(true);
		            }else{
		                CanvasController.changeBorderToMirror();
		            }
				}
	            this.$broadcast("notifyFreshCrop");
	            this.$dispatch("dispatchRepaintProject");
	            this.$dispatch("dispatchRefreshScreenshot");
	            this.$broadcast("notifyFreshCrop");
			},
			dispatchTemplateItemInfo:function(xml){
				console.log(xml);
				this.$broadcast("notifyApplyTemplate",xml);
			},
			dispatchRotateTemplate:function(){

				if(Store.projectSettings[Store.currentSelectProjectIndex].category === 'categoryTableTop') {
				// if(Store.projectSettings[Store.currentSelectProjectIndex].category === 'categoryTableTop' && Store.templateList.length === 0) {

					var currentCanvas = Store.pages[Store.selectedPageIdx].canvas;
					var idx = currentCanvas.selectedIdx;
					this.elementData = currentCanvas.params[idx];
					this.elementData.width = currentCanvas.width / currentCanvas.ratio;
					this.elementData.height = currentCanvas.height / currentCanvas.ratio;
					this.$broadcast("notifyFreshCrop");
					this.$dispatch("dispatchRepaintProject");

				} else {

					var currentGuid=Store.projectSettings[Store.currentSelectProjectIndex].tplGuid;
					for(var i in Store.templateList){
						if(currentGuid===Store.templateList[i].guid){
							var rotateTemplateGuid=Store.templateList[i].rotateTemplateGuid;
							for(var j in Store.templateList){
								if(Store.templateList[j].guid===rotateTemplateGuid){
									this.$dispatch("dispatchApplyTemplate",Store.templateList[j].guid,Store.templateList[j].suidId,Store.templateList[j].designSize);
									return;
								}
							}
						}
					}

				}

				__webpack_require__(24).autoLayout();

			},
			dispatchRefreshScreenshot : function(){
				this.$broadcast("notifyRefreshScreenshot");
			},
			dispatchShowProjectChooseWindow:function(){
				Store.fromCart=true;
				Store.watches.isProjectLoaded=false;
				Store.isPageLoadingShow = false;
				__webpack_require__(9).getProjectIdByTitle(Store.title);
				this.$broadcast("notifyShowCartReturnWindow");

			},
			dispatchGetProjectIdByTitleSuccess:function(){
				//Store.fromCart=true;
				//Store.projectId="131412";
				//Store.watches.isProjectLoaded=false;
				if (Store.userSettings.userId !== '' && Store.projectId !== '') {

	                __webpack_require__(9).getProjectInfo();
		            __webpack_require__(22).getOldProject();

	            };
			},
			dispatchShowNewProjectWindow:function(){
				this.$broadcast("notifyShowNewProjectWindow");
			},
			dispatchSaveScreenshotDelay: function(delayMs) {
				var _this = this;
				var initGuid = __webpack_require__(10).getUrlParam("initGuid");

				if(Store.isNewProject) {
					setTimeout(function() {
						_this.$broadcast("notifySaveScreenshot");
					}, delayMs);
				}
			},
			dispatchOrderedPreview: function() {
				var hasProjectId = !!Store.projectId;
				var isProjectLocked = Store.projectInfo.isOrdered || Store.projectInfo.isInCart;
				var isNotCheckFailed = !Store.checkFailed;
				var isNotPreview = !Store.isPreview;
				var isNotRemake = !Store.isRemark;
				var isNotFromCart = !Store.fromCart;

				if(hasProjectId && isProjectLocked && isNotCheckFailed && isNotPreview && isNotRemake && isNotFromCart) {
					this.$broadcast("notifyOrderedPreview");
					Store.isPreview = true;
				}
			},
			dispatchShowUpgradWindow:function(){

				this.$broadcast("notifyShowUpgradWindow");

			},
			dispatchSaveProject: function() {
				__webpack_require__(22).saveProjectOnly(this);
			}
		}
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Store, global) {
	module.exports = {
		methods: {
			handleResize: function() {
				// console.log('resize');
				if(Store.ctrls.tcResize !== '') {
					// in pending
					clearTimeout(Store.ctrls.tcResize);
					Store.ctrls.tcResize = '';
				}
				else {
					// already loose
				};

				Store.ctrls.tcResize = setTimeout(function() {
					Store.watches.flagRepaint = true;
					clearTimeout(Store.ctrls.tcResize);
					Store.ctrls.tcResize = "";
				}, 500);
			},
		},
		events: {
			// notify resize
			resize: function() {
				this.handleResize();
			}
		},
		created: function() {
			var _this = this;
	    // fix v-on:resize
	    global.window.addEventListener('resize', function() {
	      _this.$emit('resize');
	    });


	    _this.$watch('sharedStore.watches.flagRepaint', function() {
	    	if(_this.sharedStore.watches.flagRepaint) {
					_this.sharedStore.watches.flagRepaint = false;

					if(Store.isImageCropShow){
						Store.vm.$broadcast("notifyImageCrop");
					}
					// console.log('should repaint');
					if(Store.watches.isSpecLoaded && Store.watches.isProjectLoaded) {
						// _this.$broadcast('notifyRefreshCanvas', Store.currentSelectProjectIndex);
						_this.$broadcast('notifyRepaintCenterContainer', Store.currentSelectProjectIndex);
					};
				};
			});

	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), (function() { return this; }())))

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, Store) {var productType={book:1,frame:2,poster:9,cards:5,phonecase:10};
	module.exports = {

	    loadSpec: function(obj) {
	        //this.loadLocalSpec();
	        var _this = this;
	        $.ajax({
	            url: Store.domains.productBaseUrl + '/product/spec/product-spec?productType=7',
	            type: 'get',
	            dataType: 'text'
	        }).done(function(specInfoResult) {
	            specInfoResult = $.parseXML(specInfoResult);
	            if (specInfoResult && $(specInfoResult).find('resultData').attr('state') === 'success') {
	                var specUrl = $(specInfoResult).find('availableVersionPath').text();
	                //specUrl=specUrl.replace("artisanstate","zno");
	                $.ajax({
	                    url: specUrl,
	                    type: 'get',
	                    dataType: 'text'
	                }).done(function(specResult) {
	                    specResult = $.parseXML(specResult);
	                    _this.parseSpecXml(specResult);
	                });
	            } else {
	                //been.showMsg('Request api service failed', 'default', 'Message',null,null,'ok');
	                obj.$dispatch("dispatchShowPopup", { type : 'spec', status : 0})
	            }
	        });

	    },
	    loadLocalSpec: function() {
	        var _this = this;
	        $.ajax({
	            url: './assets/data/spec.xml?requestKey='+__webpack_require__(10).getRequestKey(),
	            type: 'get',
	            dataType: 'text'
	        }).done(function(specResult) {
	            specResult = $.parseXML(specResult);
	            Store.spec.specXml = specResult;
	            Store.watches.isSpecLoaded = true;
	        });
	    },
	    parseSpecXml: function(specXml) {
	        Store.spec.specXml = specXml;
	        //console.log(Store.spec.specXml);
	        //console.log('***************************************');
	        var products = $(specXml).find('optionGroup[id="product"]').find('option');
	        for (var i = 0; i < products.length; i++) {
	            //console.log(products.eq(i).attr('id'));
	            //console.log(products.eq(i).find("title").text());
	            Store.spec.products.push({ id: products.eq(i).attr('id'), title: products.eq(i).find("title").text() });
	        };
	        var sizes = $(specXml).find('optionGroup[id="size"]').find('option');
	        for (var i = 0; i < sizes.length; i++) {
	            Store.spec.sizes.push({ id: sizes.eq(i).attr('id'), name: sizes.eq(i).attr('name'), default: sizes.eq(i).attr('default') });
	        };
	        var colors = $(specXml).find('optionGroup[id="color"]').find('option');
	        for (var i = 0; i < colors.length; i++) {
	            Store.spec.colors.push({ id: colors.eq(i).attr('id'), name: colors.eq(i).attr('name') });
	        };
	        var measures = $(specXml).find('optionGroup[id="measure"]').find('option');
	        for (var i = 0; i < measures.length; i++) {
	            Store.spec.measures.push({ id: measures.eq(i).attr('id'), name: measures.eq(i).attr('name') });
	        };
	        //require('SpecController').analyseSpec({size:'14X16',product:'TS'});
	        Store.watches.isSpecLoaded = true;

	    },
	    loadProductSpec:function(type,callFunction){
	        var _this = this;
	        $.ajax({
	            url: Store.domains.productBaseUrl + '/product/spec/product-spec?productType='+productType[type],
	            type: 'get',
	            dataType: 'text'
	        }).done(function(specInfoResult) {

	             specInfoResult = $.parseXML(specInfoResult);
	             console.log(specInfoResult);

	            if (specInfoResult && $(specInfoResult).find('resultData').attr('state') === 'success') {
	                var specUrl = $(specInfoResult).find('availableVersionPath').text();
	                $.ajax({
	                    url: specUrl,
	                    type: 'get',
	                    dataType: 'text'
	                }).done(function(specResult) {
	                    specResult = $.parseXML(specResult);
	                    Store.spec.specXml = specResult;
	                    callFunction();
	                    Store.watches.isSpecLoaded = true;
	                });
	            } else {
	               console.log("load spec failed");
	            }
	        });
	    }


	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(1)))

/***/ }
]);