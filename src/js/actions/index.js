import axios from "axios";
import { SERVER_URL } from "../../settings";

import {
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAILURE,
  ADD_ARTICLE_STARTED,
  DELETE_ARTICLE
} from './ActionTypes';

const addArticleSuccess = article => ({
    type: ADD_ARTICLE_SUCCESS,
    payload: {
      ...article
    }
});

const addArticleStarted = () => ({
    type: ADD_ARTICLE_STARTED
});

const addArticleFailure = error => ({
    type: ADD_ARTICLE_FAILURE,
    payload: {
      error
    }
});

export function addArticle({ name, content }) {
	return (dispatch) => {
		dispatch(addArticleStarted());
		axios.post(SERVER_URL + "/articles/", {
			name,
			content
		})
		.then(res => {
			dispatch(addArticleSuccess(res.data));
		})
		.catch(err => {
			dispatch(addArticleFailure(err.message));
		});
	};
};

