import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  // isUser will be either true or false
  const isUser = username === message.username;
  /* 
  // this is adding class of message and IF isUser is true, adding the
      "message__user" class to this component too, ie. only the person who is
      "logged in" going to have this class
  */
  return (
    <div ref={ref}>
      <Card className={`message ${isUser && "message__user"}`}>
        <CardContent
          className={isUser ? "message__userCard" : "message__guestCard"}
        >
          <Typography variant="h5" component="h2">
            {!isUser && `${message.username || "Unknown User"}: `}{" "}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
