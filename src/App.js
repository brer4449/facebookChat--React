import React, { useState, useEffect } from "react";
import Message from "./Message";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
// import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Qazi", text: "Sup?" },
    { username: "Sonny", text: "Hey man" },
  ]);
  const [username, setUsername] = useState("");

  // useState = variable in REACT (short term memory)
  // useEffect = run code based on a condition in REACT

  useEffect(() => {
    // run code here...
    // if dependency [] is blank inside, this code runs ONCE when the app component loads
    setUsername(prompt("Please enter your name"));
  }, []); // condition

  const sendMessage = (event) => {
    event.preventDefault();
    // all the logic to send a message goes here
    // spread operator, spread out all the current messages in messages State and append input
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <h2>Welcome {username}</h2>
        <form>
          <FormControl>
            <InputLabel>Enter a message...</InputLabel>
            {/* Input field */}
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            {/* button  */}
            <Button
              disabled={!input}
              variant="contained"
              color="primary"
              type="submit"
              onClick={sendMessage}
            >
              Send Message
            </Button>
          </FormControl>
        </form>
        {/* messages themselves */}
        {messages.map((message) => (
          <Message username={username} message={message} />
        ))}
      </header>
    </div>
  );
}

export default App;
