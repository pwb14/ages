import { connect } from "react-redux";
import { addArticle } from "../actions/index";
import ArticleForm from "./ArticleForm";


const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => {
      dispatch(addArticle(article));
    }
  };
};

export const ArticleFormContainer = connect(null, mapDispatchToProps)(ArticleForm);
