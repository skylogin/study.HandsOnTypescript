import React, { FC } from "react";
import './ThreadCard.css';
import { Link, useHistory } from "react-router-dom";

import { faEye, faHeart, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import Thread from "../../../models/Thread";
import ThreadPointsBar from "../../points/ThreadPointsBar";


interface ThreadCardProps {
  thread: Thread;
}

const ThreadCard: FC<ThreadCardProps> = ({ thread }) => {
  const history = useHistory();
  const { width } = useWindowDimensions();

  const onClickShowThread = (e: React.MouseEvent<HTMLDivElement>) => {
    history.push("/thread/" + thread.id);
  };

  const getPoints = (thread: Thread) => {
    if(width <= 768){
      return (
        <label
          style={{
            marginRight: ".75em",
            marginTop: ".25em",
          }}
        >
          {thread.points || 0}
          <FontAwesomeIcon
            icon={faHeart}
            className="points-icon"
            style={{
              marginLeft: ".2em",
            }}
          />
        </label>
      )
    }
    return null;
  };

  const getResponses = (thread: Thread) => {
    if(width <= 768){
      return (
        <label 
          style={{
            marginRight: ".5em",
          }}
        >
          {thread && thread.threadItems && thread.threadItems.length}
          <FontAwesomeIcon
            icon={faReplyAll}
            className="points-icon"
            style={{
              marginLeft: ".25em",
              marginTop: "-.25em",
            }}
          />
        </label>
      );
    }
    return null;
  }

  return (
    <section className="panel threadcard-container">
      <div className="threadcard-txt-container">
        <div className="content-header">
          <Link
            to={`/categorythreads/${thread.category.id}`}
            className="link-txt"
          >
            <strong>{thread.category.name}</strong>
          </Link>
          <span className="username-header" style={{ marginLeft: ".5em" }}>
            {thread.userName}
          </span>
        </div>
        <div className="question">
          <div
            onClick={onClickShowThread}
            data-thread-id={thread.id}
            style={{ marginBottom: ".4em" }}
          >
            <strong>{thread.title}</strong>
          </div>
          <div
            className="threadcard-body"
            onClick={onClickShowThread}
            data-thread-id={thread.id}
          >
            <div>{thread.body}</div>
          </div>
          <div className="threadcard-footer">
            <span style={{ marginRight: ".5em" }}>
              <label>
                {thread.views}
                <FontAwesomeIcon icon={faEye} className="icon-lg" />
              </label>
            </span>
            <span>
              {getPoints(thread)}
              {getResponses(thread)}
            </span>
          </div>
        </div>
      </div>
      <ThreadPointsBar 
        points={thread?.points || 0}
        responseCount={
          thread && thread.threadItems && thread.threadItems.length
        }
      />
    </section>
  )
}

export default ThreadCard;