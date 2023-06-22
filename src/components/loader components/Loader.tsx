import React from 'react';
import '../../styles/loading-p.scss'

const Loading = () => {
  return (
    <div className="loading">
    <div className="logo"></div>
    <div className="dots animate">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  </div>
  )
}

export default Loading
