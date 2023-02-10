import React, { useEffect, useState } from "react";
import './SideBarMenus.css';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRegistered,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import { AppState } from "../../store/AppState"
import { UserProfileSetType } from "../../store/user/Reducer";

import Registration from "../auth/Registration";

const SideBarMenus = () => {
  const [showRegister, setShowRegister] = useState(false);

  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        userName: "testUser",
      },
    });
  }, [dispatch]);

  
  const onClickToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">{user?.userName}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span onClick={onClickToggleRegister} className="menu-name">register</span>
          <Registration
            isOpen={showRegister}
            onClickToggle={onClickToggleRegister}
          />
        </li>
      </ul>
    </>
  );
};

export default SideBarMenus;