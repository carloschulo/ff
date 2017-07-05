import React, { Component } from "react";
import { connect } from "react-redux";
import { Popular, ReposGrid } from "./components";
import { fetchPopRepos } from "./utils/api";
import "./App.css";

import { getRepo, getRepoData } from "./actions/repos";

class App extends Component {
  static propType = {
    repos: React.PropTypes.string.isRequired,
    repoData: React.PropTypes.array.isRequired,
    getRepo: React.PropTypes.func.isRequired,
    getRepoData: React.PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.updateLang = this.updateLang.bind(this);
    this.state = {
      selectedLang: "All",
      repos: null
    };
  }
  componentDidMount() {
    this.updateLang(this.state.selectedLang);
    document.title = `Populare Repos | ${this.props.repos}`;
  }
  componentWillUpdate(nextProps, nextState) {
    // console.log('np', nextProps, 'ns',nextState);
    // document.title = `Populare Repos | ${nextState.selectedLang}`;
    document.title = `Populare Repos | ${this.props.repos}`;
  }

  updateLang(lang) {
    this.props.getRepo(lang);
    this.setState({
      selectedLang: lang,
      repos: null
    });
    fetchPopRepos(lang).then(repos => {
      this.setState({ repos });
      this.props.getRepoData({ repos });
    });
  }
  render() {
    return (
      <div className="App">
        <Popular updateLang={this.updateLang} selectedLang={this.props.repos} />
        {!this.state.repos
          ? <p>Loading...</p>
          : <ReposGrid repos={this.props.repoData} />}
      </div>
    );
  }
}

export default connect(
  state => ({
    repos: state.repos,
    repoData: state.repoData
  }),
  {
    getRepo,
    getRepoData
  }
)(App);
