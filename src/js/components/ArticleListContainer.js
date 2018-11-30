import React, { Component } from "react";
import { connect } from "react-redux";
import ArticleList from "./ArticleList";
import { SERVER_URL } from "../../settings";
import PropTypes from 'prop-types';
import axios from "axios";


class ArticleListContainer extends Component {
	constructor() {
        super();
        this.state = {articles: []}
    }

    componentDidMount() {
    	console.log("in here")
    	axios.get(SERVER_URL + "/articles/")
		.then(res => {
			console.log(res);
			this.setState({
				articles: res.data
			})
		})
		.catch(err => {
			console.log(err);
		});
	}

	render(){
		return(
			<div>
				<ArticleList articles={this.state.articles}/>
			</div>
		)
	}
}

function mapStateToProps(state){
  return {articles: state.articles};
}

export default connect(mapStateToProps, null)(ArticleListContainer);

// PeopleList.propTypes = {
//     fetchPeople: PropTypes.func.isRequired,
//     people: PropTypes.array
// }
