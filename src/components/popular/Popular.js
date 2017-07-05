import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./popular.css";

class Popular extends Component {
  render() {
    const langs = ["All", "JS", "Ruby", "Java", "Python", "Swift"];
    const { updateLang, selectedLang } = this.props;
    return (
      <CSSTransitionGroup
        transitionName="example"
        transitionAppearTimeout={800}
        transitionEnter={false}
        transitionLeave={false}
        transitionAppear={true}
        component="ul"
        className="lang-list"
      >
        {langs.map(lang =>
          <li
            style={lang === selectedLang ? { color: "red" } : null}
            key={lang}
            onClick={() => updateLang(lang)}
          >
            {lang}
          </li>
        )}
      </CSSTransitionGroup>
    );
  }
}

export default Popular;
