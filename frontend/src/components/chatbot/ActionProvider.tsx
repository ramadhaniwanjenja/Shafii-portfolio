import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }: any) => {
  const showHelp = () => {
    const botMessage = createChatBotMessage(
      "I can help with: 'schedule a meeting', 'show projects', or ask me anything!"
    );
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const scheduleMeeting = () => {
    const botMessage = createChatBotMessage(
      "Please visit the contact page to book a meeting: /contact"
    );
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const showProjects = () => {
    const botMessage = createChatBotMessage(
      "Check out my projects here: /projects"
    );
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleUnknown = () => {
    const botMessage = createChatBotMessage(
      "Sorry, I didn’t understand that. Type 'help' for options."
    );
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            showHelp,
            scheduleMeeting,
            showProjects,
            handleUnknown,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;