import { EXPORT_ID } from "../actions/actionTypes/actionTypes";

const initialState = {    
    id: 0,
};

const exportIdReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case EXPORT_ID:
            return {
                id: payload
            }
        default:
            return state;
    }
}

export default exportIdReducer;