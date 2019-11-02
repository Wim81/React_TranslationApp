import React, { Component } from 'react';
import './App.css';

class App extends Component {


  languages = [
      { code: 'nl', name: 'Dutch' },
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'French' },
      { code: 'de', name: 'German' },
      { code: 'es', name: 'Spanish' }
  ];

  languageOptions = this.languages.map( language => {
      return(
          <option value={language.code}>{language.name}</option>
      );
  });

  render() {
      return (
          <div className="App">
            <div className="languages">
              <select className="language-select language-origin">
                  {this.languageOptions}
              </select>
              <button className="language-switch">switch button</button>
              <select className="language-select language-result">
                  {this.languageOptions}
              </select>
            </div>
            <div className="texts">
              <textarea className="text-origin"/>
              <textarea className="text-result" disabled="disabled"/>
            </div>
            <div className="api-ref">
              <a href="http://translate.yandex.com/" target="_blank">Powered By Yandex</a>
            </div>
            <div className="reset">
              <button className="reset-btn">Reset</button>
            </div>
          </div>
      );
  }
}

export default App;
