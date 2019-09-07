import React from 'react';

import Comment from './Comment';

import './Post.css';

export default function Post({ data }) {
  return(
    <article>
      <div className="title">
        <img src={data.author.avatar} alt={data.author.name}/>
        
        <div>
          <strong>{data.author.name}</strong>
          <span>{data.date}</span>
        </div>
      </div>

      <div className="content">
        <p>{data.content}</p>
      </div>

      <hr/>

      {data.comments.map(comment => <Comment key={comment.id} data={comment}/>)}
    </article>
  )
}