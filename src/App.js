import React, { Component } from 'react';
import { Popular, ReposGrid } from './components';
import { fetchPopRepos } from './utils/api';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.updateLang = this.updateLang.bind(this);
    this.state = {
      selectedLang: 'All',
      repos: null
    }
  }
  componentDidMount() {
    this.updateLang(this.state.selectedLang);
    document.title = `Populare Repos | ${this.state.selectedLang}`
  }
  componentWillReceiveProps(nextProps) {
    document.title = `Populare Repos | ${this.state.selectedLang}`
  }
  
  
  updateLang(lang) {
    this.setState({ 
      selectedLang: lang,
      repos: null
  });
    fetchPopRepos(lang)
      .then(repos => this.setState({repos}))
  }
  render() {
    return (
      <div className='App'>
        <Popular updateLang={this.updateLang}
                 selectedLang={this.state.selectedLang}
                  />
         {!this.state.repos ? <p>Loading...</p> :
            <ReposGrid repos={this.state.repos}/>
        }         
      </div>
    );
  }
}

export default App;