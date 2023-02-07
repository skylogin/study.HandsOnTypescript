import React, { useRef } from 'react';
import { AppState } from './store/AppState';
import { useSelector } from 'react-redux';

const UserDisplay = React.memo(() => {
  const renderCount = useRef(0);
  console.log("renders UserDisplay", renderCount.current++);
  const user = useSelector((state: AppState) => state.user);

  if(user){
    return (
      <>
        <div>
          <label>username: </label>
          {user.username}
        </div>
        <div>
          <label>email: </label>
          {user.email}
        </div>
        <div>
          <label>city: </label>
          {user.city}
        </div>
      </>
    )
  } else{
    return null;
  }
});

export default UserDisplay;