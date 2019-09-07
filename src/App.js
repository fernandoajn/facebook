import React, { Component } from 'react';

import Header from './components/Header';

import './App.css';
import PostList from './components/PostList';

export default class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <PostList />
      </div>
    )
  }
}