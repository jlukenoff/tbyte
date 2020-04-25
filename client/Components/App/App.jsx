/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState, Component } from "react";

import Card from "../Card/Card";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardData: {
        Winnie: {
          name: "Winnie",
          tasks: ["Task #1", "Task #2"],
          headerBgColor: "#8E6E95",
        },
        Bob: {
          name: "Bob",
          tasks: ["Task #1", "Task #2"],
          headerBgColor: "#39A59C",
        },
        Thomas: {
          name: "Thomas",
          tasks: ["Task #1", "Task #2"],
          headerBgColor: "#344859",
        },
        George: {
          name: "George",
          tasks: ["Task #1", "Task #2"],
          headerBgColor: "#E8741E",
        },
      },
    };

    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleTaskShift = this.handleTaskShift.bind(this);
  }

  componentDidMount() {
    const [previousCardData] = document.cookie
      .split(";")
      .filter((current) => current.startsWith("cardData="));

    if (!previousCardData) return;

    try {
      const dataString = previousCardData.split("cardData=")[1];
      const parsedCardData = JSON.parse(dataString);
      this.setState({ cardData: parsedCardData });
    } catch (e) {
      console.error("Error parsing card data", e);
    }
  }

  handleNewTask(value, name) {
    if (!value) return;
    const {
      state: { cardData },
    } = this;

    cardData[name].tasks.push(value);

    document.cookie = `cardData=${JSON.stringify(cardData)}`;

    this.setState({ cardData: { ...cardData } });
  }

  handleTaskShift(taskIndex, from, targetCardName) {
    const {
      state: { cardData },
    } = this;

    const [targetTask] = cardData[from].tasks.splice(taskIndex, 1);

    if (!targetTask) {
      console.error(`Error, no task found`);
    }

    cardData[targetCardName].tasks.push(targetTask);

    document.cookie = `cardData=${JSON.stringify(cardData)}`;

    this.setState({ cardData: { ...cardData } });
  }

  render() {
    const {
      state: { cardData },
      handleNewTask,
      handleTaskShift,
    } = this;

    const cardNames = Object.keys(cardData);

    return (
      <div
        css={css`
          display: flex;
          flex-flow: row nowrap;
          width: 100%;
        `}
      >
        {cardNames.map((name, i) => (
          <Card
            {...cardData[name]}
            handleNewTask={handleNewTask}
            leftNeighbor={i - 1 < 0 ? "" : cardNames[i - 1]}
            rightNeighbor={i + 1 >= cardNames.length ? "" : cardNames[i + 1]}
            key={name}
            handleTaskShift={handleTaskShift}
          />
        ))}
      </div>
    );
  }
}

export default App;
