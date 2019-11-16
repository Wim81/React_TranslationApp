import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
      languageOrigin: 'nl',
      languageResult: 'en',
      textOrigin: '',
      textResult: ''
  };

  languages = [
      { code: 'nl', name: 'Dutch' },
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'French' },
      { code: 'de', name: 'German' },
      { code: 'es', name: 'Spanish' }
  ];

  languageOptions = this.languages.map( language => {
      return(
          <option key={language.code} value={language.code}>{language.name}</option>
      );
  });

  switchLanguagesHandler = () => {
      console.log("time to switch");
  }

  render() {
      const langOrig = this.state.languageOrigin;
      const langResult = this.state.languageResult;

      return (
          <div className="App">
            <h1 className="title">{this.props.title}</h1>
            <div className="languages">
              <select className="language-select language-origin" value={langOrig}>
                  {this.languageOptions}
              </select>
              <div className="language-switch-wrapper">
                <button className="language-switch" onClick={this.switchLanguagesHandler}>
                    <i class="fas fa-exchange-alt"></i>
                </button>
              </div>
              <select className="language-select language-result" value={langResult}>
                  {this.languageOptions}
              </select>
            </div>
            <div className="texts">
              <textarea className="text-origin"/>
              <textarea className="text-result" disabled="disabled"/>
            </div>
            <div className="api-ref">
              <a href="http://translate.yandex.com/" target="_blank" rel="noopener noreferrer">Powered By Yandex</a>
            </div>
            <div className="reset">
              <button className="reset-btn">Reset</button>
            </div>
          </div>
      );
  }
}

export default App;
