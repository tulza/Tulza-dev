import { cn } from '@lib/utils';
import React, { HTMLAttributes } from 'react';

interface SectionSplitProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const SectionSplit = ({ children, ...props }: SectionSplitProps) => {
  return (
    <>
      <div
        {...props}
        className={cn(
          'absolute z-10 grid h-[120px] w-dvw -translate-y-[100%] place-items-center bg-gradient-to-t from-background to-transparent',
          props.className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default SectionSplit;
