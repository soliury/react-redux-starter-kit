import { createReducer } from 'utils';
import * as actions from '../actions';


const initialState = {
    num: 0
};


export default createReducer(initialState, {
    [actions.INCREMENT]: (state, action) => {
        return {
            ...state,
            num: action.num + state.num
        }
    },


    [actions.GET_TEST_DATA]: (state, action)=> {
        return {
            ...state,
            data: action.data
        }
    }
});