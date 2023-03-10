import React from 'react';
import { useSelector } from 'react-redux';

export default function SubmitButton({ submitMessage }) {
  const { isSubmitting, disabled } = useSelector((state) => state.submit);
  const clickHandler = (e) => {
    e.preventDefault();
    submitMessage();
  };

  if (isSubmitting) {
    return (
      <button className="absolute bottom-1.5 right-1 rounded-md p-1 text-gray-500 hover:bg-gray-100 disabled:bottom-0.5 disabled:hover:bg-transparent dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:disabled:hover:bg-transparent md:bottom-2.5 md:right-2 md:disabled:bottom-1">
        <div className="text-2xl">
          <span >·</span>
          <span className="blink">·</span>
          <span className="blink2">·</span>
        </div>
      </button>
    );
  }
  return (
    <button
      onClick={clickHandler}
      disabled={disabled}
      className="absolute bottom-1.5 right-1 rounded-md p-1 text-gray-500 hover:bg-gray-100 disabled:hover:bg-transparent dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:disabled:hover:bg-transparent md:bottom-2.5 md:right-2"
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-1 h-4 w-4"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="22"
          y1="2"
          x2="11"
          y2="13"
        />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    </button>
  );
}

{
  /* <div class="text-2xl"><span class="">·</span><span class="">·</span><span class="invisible">·</span></div> */
}
