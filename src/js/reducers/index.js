import { combineReducers } from "redux";
import articles from "./ArticlesReducer";

// const initialState = {
//     loading: false,
//     articles: [],
//     error: null
// };

const rootReducer = combineReducers({
  articles
})

export default rootReducer;