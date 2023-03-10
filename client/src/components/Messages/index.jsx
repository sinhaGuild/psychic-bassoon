import React, { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ScrollToBottom from './ScrollToBottom';
import Message from './Message';

const Messages = ({ messages }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollableRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const scrollable = scrollableRef.current;
      const hasScrollbar = scrollable.scrollHeight > scrollable.clientHeight;
      setShowScrollButton(hasScrollbar);
    }, 650);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowScrollButton(false);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollableRef.current;
    const diff = Math.abs(scrollHeight - scrollTop);
    const bottom =
      diff === clientHeight || (diff <= clientHeight + 25 && diff >= clientHeight - 25);
    if (bottom) {
      setShowScrollButton(false);
    } else {
      setShowScrollButton(true);
    }
  };

  let timeoutId = null;
  const debouncedHandleScroll = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(handleScroll, 100);
  };

  const scrollHandler = (e) => {
    e.preventDefault();
    scrollToBottom();
  };

  return (
    <div
      className="flex-1 overflow-y-auto "
      ref={scrollableRef}
      onScroll={debouncedHandleScroll}
    >
      {/* <div className="flex-1 overflow-hidden"> */}
      <div className="h-full dark:gpt-dark-gray">
        <div className="flex h-full flex-col items-center text-sm dark:gpt-dark-gray">
          {messages.map((message, i) => (
            <Message
              key={i}
              sender={message.sender}
              text={message.text}
              last={i === messages.length - 1}
              error={message.error ? true : false}
              scrollToBottom={i === messages.length - 1 ? scrollToBottom : null}
            />
          ))}
          <CSSTransition
            in={showScrollButton}
            timeout={400}
            classNames="scroll-down"
            unmountOnExit={false}
            // appear
          >
            {() => showScrollButton && <ScrollToBottom scrollHandler={scrollHandler} />}
          </CSSTransition>

          <div
            className="group h-32 w-full flex-shrink-0 dark:border-gray-900/50 dark:gpt-dark-gray md:h-48"
            ref={messagesEndRef}
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Messages;
