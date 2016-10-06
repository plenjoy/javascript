/**
 * Created by plenjoy-home on 2016/10/6.
 */
import 'isomorphic-fetch';
import { template } from 'lodash';
import { API_REQUEST, API_SUCCESS, API_FAILURE } from '../contants/actionTypes';
import x2jsInstance from '../../../common/xml2js';

function callApi(apiPattern, request) {
    const fullUrl = template(apiPattern.name)(apiPattern.params);
    let option = {};

    if (request) {
        option = {
            method: 'post'
            // headers: {
            //   Accept: 'application/json',
            //   'Content-Type': 'application/json'
            // },
            // body: JSON.stringify(request)
        };
    }

    return fetch(fullUrl, option)
            .then(response => response.text().then(text => ({ text, response })))
.then(({ text, response }) => {
        if (!response.ok) {
        return Promise.reject(response);
    }
    let outObj = null;
    try {
        outObj = JSON.parse(text);
    } catch (e) {
        outObj = x2jsInstance.xml2js(text);
    } finally {
        return outObj;
    }
});
}

export const CALL_API = Symbol('Call API');

export default store => next => (action) => {
    const callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    const { apiPattern, request } = callAPI;


    next({
        apiPattern,
        type: API_REQUEST,
        request
    });

    return callApi(apiPattern, request).then(
            (response) => {
            next({
                apiPattern,
                type: API_SUCCESS,
                response
            });
    return response;
},
    (result) => {
        next({
            apiPattern,
            type: API_FAILURE,
            result
        });
        return result;
    }
);
};
