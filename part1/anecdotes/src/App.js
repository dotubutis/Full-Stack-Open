import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [allVotes, setAll] = useState(Array(7).fill(0));

  const randomQuoteHandler = () => {
    let randomNum = Math.floor(Math.random() * 7);
    setSelected(randomNum);
  };

  const voteHandler = (props) => {
    const copy = [...allVotes];
    copy[selected] += 1;
    setAll(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {allVotes[selected]} votes</p>
      <br />
      <button onClick={voteHandler}>vote</button>
      <button onClick={randomQuoteHandler}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[allVotes.indexOf(Math.max(...allVotes))]}</p>
    </div>
  );
};

export default App;