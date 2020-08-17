import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

function Message({ message, username }) {
  // isUser will be either true or false
  const isUser = username === message.username;
  return (
    // this is adding class of message and IF isUser is true, adding the "message__user" class to this component too, ie. only the person who is "logged in" going to have this class
    <Card className={`message ${isUser && "message__user"}`}>
      <CardContent
        className={isUser ? "message__userCard" : "message__guestCard"}
      >
        <Typography variant="h5" component="h2">
          {message.username}: {message.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
