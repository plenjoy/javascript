/**
 * Created by plenjoy-home on 2016/10/3.
 */
import { combineReducers } from 'redux';
import todos from './todoReducer';
import filter from './filterReducer';
// reducer合成器, 用于分别处理不同的reducer.
export default combineReducers({
    todos,
    filter
});
