import React from "react";

function Section({ children, title }) {
  return (
    <div className="Section w-full flex flex-col items-center row-gap">
      <div className="titles w-full flex flex-col items-start justify-start padding-x">
        {title.sub && <h5 className="title tertiary">{title.sub}</h5>}
        {title.main && <h2 className="title primary">{title.main}</h2>}
      </div>
      <div className="Section-wrapper w-full">{children}</div>
    </div>
  );
}

export default Section;
