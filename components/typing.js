import React, { useState, useEffect } from "react";

const TYPING_SPEED = 120;
const DELETING_SPEED = 30;

const initialState = {
  text: "",
  message: "",
  isDeleting: false,
  messageIndex: 0,
  typingSpeed: TYPING_SPEED
};

export function Typer({ messages, heading }) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let timer;
    const handleType = () => {
      setState((state) => ({
        ...state,
        text: state.isDeleting
          ? state.message.substring(0, state.text.length - 1)
          : state.message.substring(0, state.text.length + 1),
        typingSpeed: state.isDeleting ? TYPING_SPEED : DELETING_SPEED
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();

    return () => clearTimeout(timer);
  }, [state.isDeleting]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((state) => ({
          ...state,
          isDeleting: true
        }));
      }, 500);
    } else if (state.isDeleting && state.text === "") {
      setState((state) => ({
        ...state,
        isDeleting: false,
        messageIndex: state.messageIndex + 1,
        message: messages[Number(state.messageIndex) % Number(messages.length)]
      }));
    }
  }, [state.text, state.message, state.isDeleting, state.messages]);

  return (
    <h1>
      {heading}&nbsp;
      <span>{state.text}</span>
      <span id="cursor" />
    </h1>
  );
}


