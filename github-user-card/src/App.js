import React from 'react';
import axios from 'axios';
import './App.css';
import User from './components/User';

class App extends React.Component {
  state = {
      usercard: [],
      followers: []
    }
  
  componentDidMount() {
    axios
      .get('https://api.github.com/users/wmwebb-cf')
      .then(res => {
        //console.log(res.data);
        this.setState({usercard: res.data})
      })
      .catch(err => console.log(err))
    axios
      .get('https://api.github.com/users/wmwebb-cf/followers')
      .then(res => {
        console.log(res.data);
        this.setState({followers: res.data})
      })
      .catch(err => console.log(err))
  }
  render() {
    const attr = this.state.usercard;
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <User image={`${attr.avatar_url}`} name={attr.name} userName={attr.login} repos={attr.public_repos} followers={attr.followers} following={attr.following} />
      </div>
    );
  };
}

export default App;
