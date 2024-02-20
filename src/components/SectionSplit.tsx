import React, { ForwardedRef } from "react";

const SectionSplit = React.forwardRef(
  (_, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <>
        <div className="fade absolute z-10 flex h-[200px] w-full -translate-y-[50%] items-end sm:h-[400px]" />
        <div ref={ref} />
      </>
    );
  },
);

export default SectionSplit;
