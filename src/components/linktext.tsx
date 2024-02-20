"use client";

import { useState } from "react";

const LinkText: React.FC<{ children: string }> = ({ children }) => {
  const [isHover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="text-right cursor-pointer mb-10"
    >
      {children}
      <br />
      <div
        className={`float-right border-t-2 transition-all ${
          isHover ? "w-44" : "w-0"
        }`}
      ></div>
    </div>
  );
};

export default LinkText;
