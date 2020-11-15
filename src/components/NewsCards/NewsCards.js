import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import NewsCard from "./NewsCard/NewsCard";
import "./NewsCards.css";

const infoCards = [
  {
    color: "#A49CF4",
    title: " Latest News",
    info:
      "CNN, Wired,Bitcoin, PlayStation 5, Smartphones, BBC News, Business, Entertainment, General, Health",
    text: "Give me the latest news",
  },
  {
    color: "#FFA49C",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#FFC58C",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#8EE7B2",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  // const classes = useStyles();

  if (!articles.length) {
    return (
      <div className="cont">
        <Grow in>
          <Grid
            className="container"
            container
            alignItems="stretch"
            spacing={3}
          >
            {infoCards.map((infoCard) => (
              <Grid item xs={12} sm={6} md={4} lg={3} className="infoCard">
                <div
                  className="card"
                  style={{ backgroundColor: infoCard.color }}
                >
                  <Typography variant="h3" component="h3">
                    {infoCard.title}
                  </Typography>

                  {infoCard.info ? (
                    <Typography variant="h6" component="h6" className="mid">
                      <strong>{infoCard.title.split(" ")[2]}:</strong>{" "}
                      {infoCard.info}
                    </Typography>
                  ) : null}

                  <Typography variant="h5" component="h5">
                    Try saying: <br /> <b>{infoCard.text}</b>
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grow>
      </div>
    );
  }

  return (
    <Grow in>
      <Grid className="container" container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
