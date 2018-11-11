import React from "react";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="projectCard">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <div>
                <b>{props.title}</b>
                <br />
                {props.type} | <i>{props.by}</i>
                <hr />
              </div>
              <p>{props.blurb}</p>
              <p>
                <Icon className="icon-money">attach_money</Icon>{" "}
                {props.amt_pledged}
              </p>
              <p>
                <Icon className="icon-money">attach_money</Icon>{" "}
                {props.percentage_funded}
              </p>
            </div>
            <hr />
            <Grid container spacing={24}>
              <Grid item xs>
                <Icon className="location-icon">location_on</Icon>{" "}
                {props.location}
              </Grid>
              <Grid item xs>
                <span className="right">
                  <Icon>access_time</Icon>
                  {props.end_time}
                </span>
              </Grid>
            </Grid>
            <div className="card-action">
              <Grid container spacing={24} className="card-action-grid">
                <Grid item xs>
                  <a
                    href="https://materializecss.com/cards.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Project <Icon>arrow_forward</Icon>
                  </a>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
