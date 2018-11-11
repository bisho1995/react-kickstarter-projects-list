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
            <div className="card-image">
              <img
                src="https://materializecss.com/images/sample-1.jpg"
                alt=""
              />
              <div className="card-title">
                {props.title}
                <br />
                {props.type} | {props.by}
              </div>
              <div className="darkOverlay" />
            </div>
            <div className="card-content">
              <div>
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
              </div>
              <hr />
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
                <Grid item xs>
                  <span className="right">
                    <Icon className="expired-icon">access_time</Icon> Expired
                  </span>
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
