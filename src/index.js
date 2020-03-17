import React from "react";
import { render } from "react-dom";
import { Button } from "./Button";
import { Title } from "./Title";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "JP You are a rockstar",
      author: "JP",
      count: 0,
      color: "Black"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch(`https://type.fit/api/quotes`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data[this.state.count].text,
          count: this.state.count + 1,
          author: data[this.state.count].author,
          color: color[Math.floor(Math.random() * color.length)]
        });
      });
  }
  render() {
    return (
      <div className="container" style={{ backgroundColor: this.state.color }}>
        <Title />
        <h3 id="quote">"{this.state.quote}"</h3>
        <p id="paragraph">-{this.state.author}-</p>
        <div>
          <Button onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

let color = ["#CD5C5C", "#F08080", "#FA8072", "#E9967A"];
render(<Quote />, document.getElementById("root"));
