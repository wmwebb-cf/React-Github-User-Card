import React from 'react';
import axios from 'axios';
import './App.css';
import User from './components/User';
import Followers from './components/Followers';

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
        // console.log(res.data);
        this.setState({followers: res.data})
      })
      .catch(err => console.log(err))
  }
  render() {
    const attrU = this.state.usercard;
    
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <User image={`${attrU.avatar_url}`} name={attrU.name} userName={attrU.login} repos={attrU.public_repos} followers={attrU.followers} following={attrU.following} url={`${attrU.html_url}`} />
        <h2>Followers</h2>
        <div className='Followers'>
          {this.state.followers.map(follower => (
            <Followers image={`${follower.avatar_url}`} userName={follower.login} url={`${follower.html_url}`} key={follower.id}/>
          ))}
        </div>
      </div>
    );
  };
}

export default App;
