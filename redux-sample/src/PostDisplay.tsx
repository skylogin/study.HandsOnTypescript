import React, { useRef } from 'react';
import { AppState } from './store/AppState';
import { useSelector } from 'react-redux';

const PortDisplay = React.memo(() => {
  const renderCount = useRef(0);
  console.log("renders PortDisplay", renderCount.current++);
  const post = useSelector((state: AppState) => state.post);

  if(post){
    return (
      <>
        <div>
          <label>title: </label>
          {post.title}
        </div>
        <div>
          <label>body: </label>
          {post.body}
        </div>
      </>
    )
  } else{
    return null;
  }
});

export default PortDisplay;