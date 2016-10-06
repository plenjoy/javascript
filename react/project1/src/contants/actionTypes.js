// action类型: 添加新的todo项
export const ADD_TODO = 'ADD_TODO';

// action类型: 完成一个todo项
export const COMPLETE_TODO = 'COMPLETE_TODO';

// action类型: 搜索和过滤todo项列表
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// action类型: 发送一个ajax请求
export const API_REQUEST = 'API_REQUEST';

// action类型: 接受到一个ajax响应
export const API_SUCCESS = 'API_SUCCESS';

// action类型: ajax请求失败时.
export const API_FAILURE = 'API_FAILURE';

// action类型: 获取spec数据.
export const GET_SPEC_DATA = 'GET_SPEC_DATA';

// action类型: 获取product数据.
export const GET_PROJECT_DATA = 'GET_PROJECT_DATA';

// 修改项目设置参数
export const CHANGE_PROJECT_SETTING = 'CHANGE_PROJECT_SETTING';

// 创建绘图元素
export const CREATE_ELEMENT = 'CREATE_ELEMENT';

// 更新绘图元素的属性
export const UPDATE_ELEMENT = 'UPDATE_ELEMENT';

// 删除元素
export const DELETE_ELEMENT = 'DELETE_ELEMENT';

// 初始化spread的状态
export const INIT_SPREAD_ARRAY = 'INIT_SPREAD_ARRAY';

// action类型: 显示modal
export const SHOW_MODAL = 'SHOW_MODAL';

// action类型: 关闭modal
export const CLOSED_MODAL = 'CLOSED_MODAL';

// action类型: 关闭alert
export const CLOSED_ALERT = 'CLOSED_ALERT';

// action类型: 显示alert
export const SHOW_ALERT = 'SHOW_ALERT';

// action类型：添加上传图片列表
export const ADD_IMAGES = 'ADD_IMAGES';

// action类型：更新ImageId
export const UPDATE_IMAGEID = 'UPDATE_IMAGEID';

// action类型：更新percent
export const UPDATE_PERCENT = 'UPDATE_PERCENT';

// action类型：上传成功
export const UPLOAD_COMPLETE = 'UPLOAD_COMPLETE';

// action类型：清空上传图片列表
export const CLEAR_IMAGES = 'CLEAR_IMAGES';

// action类型： 取消指定图片上传
export const DELETE_IMAGE = 'DELETE_IMAGE';

// action类型： 重新排序上传成功的图片
export const SORT_IMAGE = 'SORT_IMAGE';

// action类型： 将上传失败的图片放到第一个
export const ERROR_TO_FIRST = 'ERROR_TO_FIRST';

// action类型： 重新上传指定图片
export const RETRY_IMAGE = 'RETRY_IMAGE';

// aciton类型： 更新指定字段数据
export const UPDATE_FIELDS = 'UPDATE_FIELDS';

// action类型: 登录成功
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// action类型: 登录失败
export const LOGIN_FAIL = 'LOGIN_FAIL';

// action类型：弹出右上角提示框
export const SHOW_NOTIFY = 'SHOW_NOTIFY';

// action 类型：关闭右上角提示框
export const HIDE_NOTIFY = 'HIDE_NOTIFY';

// action 类型：弹出中间确认弹框
export const SHOW_CONFIRM = 'SHOW_CONFIRM';

// action 类型：关闭中间确认弹框
export const HIDE_CONFIRM = 'HIDE_CONFIRM';
