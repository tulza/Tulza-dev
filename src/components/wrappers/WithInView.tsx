import { HTMLMotionProps, m, useInView, UseInViewOptions } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

interface withInViewProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  options?: UseInViewOptions;
}

export const WithInView = ({ children, options, ...props }: withInViewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const InView = useInView(ref, options);
  return (
    <m.div {...props} ref={ref} animate={InView ? 'animate' : 'initial'} >
      {children}
    </m.div>
  );
};
