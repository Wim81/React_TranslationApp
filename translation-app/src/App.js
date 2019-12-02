import React, { Component } from 'react';
import LanguageSelect from './components/LanguageSelect';
import LanguageSwitch from './components/LanguageSwitch';
import LanguageTextarea from './components/LanguageTextarea';
import ResetButton from './components/ResetButton';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
      languageOrigin: 'nl',
      languageResult: 'en',
      textOrigin: '',
      textResult: '',
      reset: false
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
      const prevLanguageOrig = this.state.languageOrigin;
      const prevLanguageResult = this.state.languageResult;
      const prevTextOrig = this.state.textOrigin;
      const prevTextResult = this.state.textResult;
      this.setState({
          languageOrigin: prevLanguageResult,
          languageResult: prevLanguageOrig,
          textOrigin: prevTextResult,
          textResult: prevTextOrig
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

    resetTexts = () => {
        this.setState({reset: true});
    };

    componentDidUpdate(prevProps, prevState) {
        let newOutput = '';

        if (this.state.reset === true ) {
            this.setState({textOrigin: '', textResult: '', reset: false});
        } else if (this.state.textOrigin === '' && this.state.textResult === '') {
            // no action
        } else if (prevState.textOrigin === this.state.textOrigin && prevState.languageResult === this.state.languageResult) {
            // no action
        } else if ( this.state.textOrigin === '' ) {
            this.setState({textResult: ''});
        } else {
            let newInput = this.state.textOrigin;
            //API call
            newOutput = axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191116T174127Z.03cac877ca84e4c6.3ae9da568e4fdec7a0c1b30c0f0dcb857f7ece6b&text=' + newInput + '&lang=' + this.state.languageOrigin + '-' + this.state.languageResult)
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
                <LanguageSelect
                    classes="language-origin"
                    value={langOrig}
                    changed={this.updateOriginalLanguage}>
                    {this.languageOptions}
                </LanguageSelect>

              <LanguageSwitch clicked={this.switchLanguagesHandler} />

                <LanguageSelect
                    classes="language-result"
                    value={langResult}
                    changed={this.updateResultLanguage}>
                    {this.languageOptions}
                </LanguageSelect>
            </div>
            <div className="texts">

                <LanguageTextarea
                    classes="text-origin"
                    changed={this.updateOriginalText}
                    value={this.state.textOrigin}
                    disabled={false} />
                <LanguageTextarea
                    classes="text-result"
                    changed={null}
                    value={this.state.textResult}
                    disabled="disabled" />

            </div>
            <div className="api-ref">
              <a href="http://translate.yandex.com/" target="_blank" rel="noopener noreferrer">Powered By Yandex</a>
            </div>
              <ResetButton clicked={this.resetTexts} />
          </div>
      );
  }
}

export default App;
