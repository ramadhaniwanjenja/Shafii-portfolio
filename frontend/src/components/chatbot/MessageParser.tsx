import React from "react";

const MessageParser = ({ children, actions }: any) => {
  const parse = (message: string) => {
    const msg = message.toLowerCase();
    if (msg.includes("help")) {
      actions.showHelp();
    } else if (msg.includes("schedule") || msg.includes("meeting")) {
      actions.scheduleMeeting();
    } else if (msg.includes("projects")) {
      actions.showProjects();
    } else {
      actions.handleUnknown();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;