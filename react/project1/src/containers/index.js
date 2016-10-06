import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set, get } from 'lodash';
import qs from 'qs';

import './index.scss';

class App extends Component {
    constructor(props) {
        super(props);

        // 定义一些初始化值.
        this.state = {
            /*modalSwitches: {
                // options设置弹框
                options: false,
                // 登录弹框
                login: false,
                // 点击 logo 回到主页的弹框
                redirectHomeModalShow: false,
                // header 中点击 options 时修改当前 project 参数的弹框
                optionsModalShow: false,
                // 预览弹框
                preview: false
            },
            projectId: null,

            spreads: [{
                id: 'UNIQUE-0',
                type: 'coverPage',
                bgColor: '#f6f6f6',
                width: 9165.354330708662,
                height: 3673.228346456693,
                bleedTop: 35.43307086614173,
                bleedBottom: 35.43307086614173,
                bleedLeft: 35.43307086614173,
                bleedRight: 35.43307086614173,
                spineThicknessWidth: 826.7716535433071,
                wrapSize: 330.7086614173228,
                textInCenter: 'CLICK_TO_ADD_PHOTO'
            }, {
                id: 'UNIQUE-1',
                type: 'innerPage',
                bgColor: '#f6f6f6',
                width: 4051.1811023622045,
                height: 3106.299212598425,
                bleedTop: 35.43307086614173,
                bleedBottom: 35.43307086614173,
                bleedLeft: 35.43307086614173,
                bleedRight: 35.43307086614173,
                spineThicknessWidth: 0,
                wrapSize: 177.1653543307087,
                textInCenter: 'CLICK_TO_ADD_PHOTO'
            }]*/
        };
    }

    componentWillMount() {
        const queryStringObj = qs.parse(window.location.search.substr(1));
        /*this.setState({
            projectId: queryStringObj.projectId
        });*/
        console.log(queryStringObj);
    }

    /**
     * 显示或关闭modal
     * @param {string} type 待关闭的modal在state中key的值(this.state.modalSwitches).
     * @param {bool} status true/false, modal是显示还是关闭
     */
   /* toggleModal(type, status) {
        let state = set(this.state, `modalSwitches.${type}`, status);
        this.setState(state);
    }*/

    /*handleLogin() {
        // 隐藏login弹框
        this.toggleModal.bind(this, 'login', false);
    }*/

    render() {
        const {
            translations,
            boundSpecActions,
            boundProjectActions,
            boundLoginActions,
            boundEnvActions,
            boundSystemActions,
            boundNotifyActions,
            boundUploadedImagesActions,
            userInfo,
            uploading,
            project,
            optionMap,
            setting,
            userId,
            uploadingImages,
            uploadedImages,
            notify,
            confirmData,
            boundPriceActions,
            price
        } = this.props;

        const { projectId } = this.state;
        /*const redirectHomeTip = (
            <div className="homepage-text">
            This will take you to home page.
        <br/>
        Please select an option before continuing.
        </div>
    );*/


        return (
            <div className="app">
                <h1>abc</h1>
            </div>
    );
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
const mapStateToProps = state => ({
    /*optionMap: get(state, 'project.optionMap'),
    setting: get(state, 'project.setting'),
    userId: get(state, 'system.env.userInfo.userId'),
    uploadingImages: state.system.images.uploading,
    uploadedImages: state.system.images.uploaded,
    notify: state.system.notify,
    confirmData: state.system.confirmData,
    price: state.system.price*/
});

const mapDispatchToProps = dispatch => ({
   /* boundSpecActions: bindActionCreators(specActions, dispatch),
    boundProjectActions: bindActionCreators(projectActions, dispatch),
    boundLoginActions: bindActionCreators(loginActions, dispatch),
    boundEnvActions: bindActionCreators(envActions, dispatch),
    boundUploadedImagesActions: bindActionCreators(uploadedImagesActions, dispatch),
    boundSystemActions: bindActionCreators(systemActions, dispatch),
    boundPriceActions: bindActionCreators(priceActions, dispatch)*/
});

export default connect(mapStateToProps, mapDispatchToProps)(App);