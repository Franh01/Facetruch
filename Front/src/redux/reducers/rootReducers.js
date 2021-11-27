import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import exportIdReducer from './exportIdReducer';

const rootReducers = combineReducers({
    postsReducer,
    exportIdReducer
});

export default rootReducers;