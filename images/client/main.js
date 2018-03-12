import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  )
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('#app'));
  axios.get('https://api.imgur.com/3/gallery/hot/viral/0', {
    headers : {
      Authorization: 'Client-ID b73425d3a2b6960'
    }
  })
    .then(response => console.log('res: ', response))
    .catch(err => console.log('err:', err))
});