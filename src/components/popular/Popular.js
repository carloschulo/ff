import React, { Component } from 'react';
import './popular.css';

class Popular extends Component {
  render() {
    const langs = [
      'All',
      'JS',
      'Ruby',
      'Java',
      'Python',
      'Swift'
    ];
    const { updateLang, selectedLang } = this.props;
    return (
      <ul className='lang-list'>
        {langs.map(lang => 
          <li style={lang === selectedLang ? {color:'red'} : null}
              key={lang}
              onClick={()=> updateLang(lang)}
              >
              {lang}
          </li>
          )}
      </ul>
     
    );
  }
}

export default Popular;
