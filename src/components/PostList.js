import React, { Component } from 'react';

import './PostList.css';
import Post from './Post';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg'
        },
        date: '07 Sep 2019',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, suscipit.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Fernando Augusto',
          avatar: 'https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg'
        },
        date: '06 Sep 2019',
        content: 'Hello world',
        comments: [
          {
            id: 1,
            author: {
              name: 'John Doe',
              avatar: 'https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg'
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: 'Marie Doe',
              avatar: 'https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg'
            },
            content: "Conteúdo do comentário"
          },
        ],
      },
    ]
  }

  render() {
    return (
      <section>
        {this.state.posts.map(post => <Post key={post.id} data={post}/>)}
      </section>
    )
  }
} 