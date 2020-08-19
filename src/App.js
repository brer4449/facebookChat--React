import React, { useState, useEffect } from "react";
import Message from "./Message";
import { FormControl, Input } from "@material-ui/core";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
// allows us to wrap the icon and treat it as an icon
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // useState = variable in REACT (short term memory)
  // useEffect = run code based on a condition in REACT

  // can have as many useEffects as you want
  useEffect(() => {
    // run code here...
    // if dependency [] is blank inside, this code runs ONCE when the app component loads
    setUsername(prompt("Please enter your name"));
  }, []); // condition

  useEffect(() => {
    // run once when the app component loads
    // name of our collection is "messages"
    // onSnapShot will run if there are ANY changes to our db (ie. if something new gets added to it, like a message)
    // the snapshot being passed in as an array of objects, it's the documents of our firebase db
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // docs is the list of documents, we're mapping through each doc and getting the username and message aka data() of each doc which is returned as an object ie. { username: "Qazi", message: "Sup?" }
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      // fire store is the database
      // wherever firebase is hosting our database, that's what time we want to use
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // all the logic to send a message goes here
    // spread operator, spread out all the current messages in messages State and append input
    // setMessages([...messages, { username: username, message: input }]); // don't want to manually setState, using firebase db to setMessages
    // clearing input
    setInput("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
          alt="fb messenger logo"
        />
        <h1>Hello World</h1>
        <h2>Welcome {username}</h2>
        <form className="app__form">
          <FormControl className="app__formControl">
            <Input
              className="app__input"
              placeholder="Enter a message..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <IconButton
              className="app__iconButton"
              disabled={!input}
              variant="contained"
              color="primary"
              type="submit"
              onClick={sendMessage}
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
        {/* messages themselves */}
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))}
        </FlipMove>
      </header>
    </div>
  );
}

export default App;
