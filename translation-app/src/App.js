import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
      const prevOrig = this.state.languageOrigin;
      const prevResult = this.state.languageResult;
      this.setState({
          languageOrigin: prevResult, languageResult: prevOrig
      });
  };

    updateOriginalLanguage = (e) => {
        this.setState({languageOrigin: e.target.value});
    };

    updateResultLanguage = (e) => {
        this.setState({languageResult: e.target.value});
    };

    updateOriginalText = (e) => {
        this.setState({textOrigin: e.target.value});
    };

    componentDidUpdate(prevProps, prevState) {
        let newOutput = '';
        if (prevState.textOrigin === this.state.textOrigin) {
            // no action
        } else if ( this.state.textOrigin === '' ) {
            this.setState({textResult: ''});
        } else {
            let newInput = this.state.textOrigin;
            //API call
            newOutput = axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191116T174127Z.03cac877ca84e4c6.3ae9da568e4fdec7a0c1b30c0f0dcb857f7ece6b&text=' + newInput + '&lang=en-nl')
                .then(response => {
                    this.setState({textResult: response.data.text[0]});
                    return (response.data.text[0]);
                })
                .catch(error => console.log(error));
        }
    };

  render() {
      const langOrig = this.state.languageOrigin;
      const langResult = this.state.languageResult;

      return (
          <div className="App">
            <h1 className="title">{this.props.title}</h1>
            <div className="languages">
              <select className="language-select language-origin" value={langOrig} onChange={this.updateOriginalLanguage}>
                  {this.languageOptions}
              </select>
              <div className="language-switch-wrapper">
                <button className="language-switch" onClick={this.switchLanguagesHandler}>
                    <i className="fas fa-exchange-alt"></i>
                </button>
              </div>
              <select className="language-select language-result" value={langResult} onChange={this.updateResultLanguage}>
                  {this.languageOptions}
              </select>
            </div>
            <div className="texts">
              <textarea className="text-origin" onChange={this.updateOriginalText}/>
              <textarea className="text-result" disabled="disabled" value={this.state.textResult}/>
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
