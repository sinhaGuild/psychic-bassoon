import React from 'react';
// import Clipboard from '../svg/Clipboard';
import EditIcon from '../svg/EditIcon';

export default function HoverButtons({ user }) {
  return (

      <div className="visible mt-2 flex justify-center gap-3 self-end text-gray-400 md:gap-4 lg:absolute lg:top-0 lg:right-0 lg:mt-0 lg:translate-x-full lg:gap-1 lg:self-center lg:pl-2">
        {user && (
          <button className="rounded-md p-1 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
            <EditIcon />
          </button>
        )}
        {/* <button className="rounded-md p-1 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
          <Clipboard />
        </button> */}
      </div>
  );
}