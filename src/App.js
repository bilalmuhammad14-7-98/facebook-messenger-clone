import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Icon,
} from "@material-ui/core";
import Message from "./Components/Message";
import db from "./Firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import messenger from "./Images/messenger.png";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <div className="img">
        <img src={messenger} />
      </div>

      <h1>WELCOME TO</h1>
      <h1>FACEBOOK MESSENGER</h1>
      <h2>Welcome {username || "Unknown User"}</h2>

      <form className="app__form">
        <FormControl classname="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message........"
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

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
