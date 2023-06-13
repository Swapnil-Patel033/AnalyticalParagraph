import * as actionTypes from '../Constants/constants';


const initialState = {
    Counter: 1

};


const incrementHendal = (state, action) => {
    return {
        ...state,
        Counter: state.Counter + 1,
    };
};

const decrementHendal = (state, action) => {
    return {
        ...state,
        Counter: state.Counter - 1,
    };
};



const allReducers = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.INCREMENT: return incrementHendal(state, action); // incrementHendal

        case actionTypes.DECREMENT: return decrementHendal(state, action); // decrementHendal

        default: return state;
    }
};


export default allReducers;