import { HTMLMotionProps, m } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [index, setIndex] = useState();
  return (
    <div className="absolute top-10 z-10 flex w-full items-center justify-center">
      <div className="flex items-center gap-12 border-b p-6 text-xl backdrop-blur-md">
        <p className="textStroke text-4xl font-bold">&lt;a/&gt;</p>:
        <div className="flex gap-2">
          <NavButton label="About me" />
          <NavButton label="Project" />
          <NavButton label="Contacts" />
          <NavButton label="Resume" />
        </div>
        :
        <button className="flex w-32 items-center gap-2 rounded-full bg-black/80 p-4 outline outline-1">
          Theme <ChevronDown />
        </button>
      </div>
    </div>
  );
};

interface NavButtonProps extends HTMLMotionProps<'button'> {
  label: string;
  link?: string;
}

const NavButton = ({ label, ...props }: NavButtonProps) => (
  <div className="relative flex w-min flex-col items-center gap-2">
    <m.button
      {...props}
      className="relative grid place-items-center overflow-hidden whitespace-nowrap rounded-full p-4 px-8"
      whileHover="hover"
    >
      <div className="absolute bottom-0 left-0 -z-10 h-full w-full origin-bottom bg-black/20" />
      <m.div
        className="absolute -z-10 h-full w-full origin-center bg-black/30"
        initial={{ scaleY: 0 }}
        variants={{ hover: { scaleY: 1 } }}
        transition={{ duration: 0.25 }}
      />
      {label}
    </m.button>
    <div className="absolute bottom-0 h-2 w-2 rounded-md bg-white"></div>
  </div>
);
export default Navigation;
