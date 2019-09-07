import React from 'react';

import './Comment.css';

export default function Comment({ data }) {
  return (
    <div className="comment">
      <img src={data.author.avatar} alt={data.author.avatar}/>

      <div>
        <strong>{data.author.name}</strong>
        <p>{data.content}</p>
      </div>
    </div>
  )
}