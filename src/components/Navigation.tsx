import { HTMLMotionProps, m } from 'framer-motion';
import ThemeButton from './ThemeButton';

const Navigation = () => {
  return (
    <div className="absolute top-10 z-10 flex w-full select-none items-center justify-center">
      <div className="flex items-center gap-12 border-b p-6 text-lg backdrop-blur-md">
        <p className="textStroke text-4xl font-bold">&lt;a/&gt;</p>:
        <div className="flex gap-2">
          <NavButton label="About me" />
          <NavButton label="Projects" />
          <NavButton label="Contact" />
        </div>
        :
        <ThemeButton />
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
