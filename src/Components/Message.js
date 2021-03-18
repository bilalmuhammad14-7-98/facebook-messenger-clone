import React ,{ forwardRef }from "react";
import { CardContent, Card, Typography } from "@material-ui/core";

// import style from '../Styles/Style.module.css'
//  import style from "./App.css";
// import "./Work.css";
// import "./App.css";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username || 'Unknown User'} :`}{message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
    
  );
});

export default Message;
