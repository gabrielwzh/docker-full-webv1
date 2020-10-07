import React, { Component } from 'react';
// import ReactGA from 'react-ga';
// import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Particles from 'react-particles-js';
import particles from './Components/Particle.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

  //  ReactGA.initialize('UA-110570651-1');
  //  ReactGA.pageview(window.location.pathname);

  }
  

  // getMetaData(){
  //   $.ajax({
  //     url:'./metaData.json',
  //     dataType:'json',
  //     cache: false,
  //     success: function(data){
  //       this.setState({resumeData: data});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.log(err);
  //       alert(err);
  //     }
  //   });
  // }

  getMetaData() {
    fetch('/api/v1')
    .then(res => res.json())
    .then(resumeData => this.setState({resumeData}, () => console.log('Data fetched..', resumeData)));
  }

  componentDidMount(){
    this.getMetaData();
  }

  render() {
    return (
      <div className="App">
        <Particles params={particles} className="particle"/>
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
