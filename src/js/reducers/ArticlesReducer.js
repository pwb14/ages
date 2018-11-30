import {
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAILURE,
  ADD_ARTICLE_STARTED,
  // DELETE_ARTICLE
} from "../actions/ActionTypes";

const initialArticles = [{name: "TEST", content: "TEST"}];

export default function articles(state = initialArticles, action) {
    switch (action.type) {
        case ADD_ARTICLE_STARTED:
            return {
                ...state
            };
        case ADD_ARTICLE_SUCCESS:
            return {
                ...state,
                error: null,
            };
        case ADD_ARTICLE_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
}