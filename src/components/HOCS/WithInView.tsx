import { HTMLMotionProps, m as motion, useInView, UseInViewOptions } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

interface withInViewProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  options?: UseInViewOptions;
}

export const WithInView = ({ children, options, ...props }: withInViewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const InView = useInView(ref, options);
  return (
    <motion.div {...props} ref={ref} animate={InView ? 'animate' : 'initial'}>
      {children}
    </motion.div>
  );
};
