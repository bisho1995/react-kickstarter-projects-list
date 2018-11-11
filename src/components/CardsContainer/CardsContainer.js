import React from "react";
import ProjectCard from "../ProjectCard";
import "./CardsContainer.css";

export default function CardsContainer(props) {
  const listItms = props.data.map(card => (
    <div className="ProjectCard" key={card["s.no"]}>
      <ProjectCard
        title={card.title}
        type={card.type}
        by={card.by}
        location={card.location}
        end_time={card["end.time"]}
        amt_pledged={card["amt.pledged"]}
        percentage_funded={card["percentage.funded"]}
        blurb={card.blurb}
      />
    </div>
  ));
  return (
    <div className="container">
      <div className="project-cards-container">{listItms}</div>
    </div>
  );
}