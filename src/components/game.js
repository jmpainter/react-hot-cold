import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import GuessSection from "./guess-section";
import StatusSection from "./status-section";
import InfoSection from "./info-section";
import { makeGuess, restartGame, generateAuralUpdate } from "../redux/actions";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  restartGame() {
    this.props.dispatch(restartGame());
  }

  makeGuess(guess) {
    this.props.dispatch(makeGuess(guess));
    const { feedback } = this.props;
    // We typically wouldn't touch the DOM directly like this in React
    // but this is the best way to update the title of the page,
    // which is good for giving screen-reader users
    // instant information about the app.
    document.title = feedback ? `${feedback} | Hot or Cold` : "Hot or Cold";
  }

  generateAuralUpdate() {
    this.props.dispatch(generateAuralUpdate());
  }

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} auralStatus={auralStatus} />
          <InfoSection />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: state.auralStatus,
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);
