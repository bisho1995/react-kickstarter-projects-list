import React from "react";
import moment from "moment";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import "./style.scss";

function ProjectCard(props) {
  const now = moment(new Date());
  const end_date = moment(props.end_time);
  const diff_days = parseInt(moment.duration(now.diff(end_date)).asDays(), 10);
  return (
    <article className="projectCard">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <div>
                <b>{props.title}</b>
                <br />
                {props.type} | by <i>{props.by}</i>
                <hr />
              </div>
              <p>{props.blurb}</p>
              <p>
                <Icon className="icon-money">attach_money</Icon>{" "}
                <b>{props.amt_pledged}$</b> was pledged
              </p>
              <p>
                <Icon className="icon-money">attach_money</Icon>{" "}
                <b>{props.percentage_funded}%</b> of funds has been received
              </p>
            </div>
            <hr />
            <div className="container-fluid extra-information">
              <Grid container spacing={24}>
                <Grid item xs>
                  <span className="left center-align">
                    <Icon className="location-icon">location_on</Icon>
                    <br />
                    <b>{props.location}</b>
                  </span>
                </Grid>
                <Grid item xs>
                  <span className="right center-align">
                    <Icon>access_time</Icon>
                    <br />
                    {end_date < now
                      ? `Expired ${diff_days} day(s) ago`
                      : `After ${diff_days} day(s)`}
                  </span>
                </Grid>
              </Grid>
            </div>
            <div className="card-action center-align">
              <a
                href={`https://www.kickstarter.com/${props.url}`}
                target="_blank"
                className="center-align"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
