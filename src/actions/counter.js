import * as TestService from '../services/test';

export const INCREMENT = 'INCREMENT';
export const GET_TEST_DATA = 'GET_TEST_DATA';

export function increment(num:Number) {
    return {
        type: INCREMENT,
        num: num
    }
}


export function getTestData(data) {
    return {
        type: GET_TEST_DATA,
        data: data
    }
}


export function fetchTest() {
    return dispatch => {
        TestService.get()
            .then(data=> {
                dispatch(getTestData(data));
            })
    }
}