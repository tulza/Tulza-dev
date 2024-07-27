import { HTMLMotionProps, m } from 'framer-motion';
import { ChevronRight, Repeat } from 'lucide-react';
import { useState } from 'react';

type DropDir = 'up' | 'down';
interface ThemeButtonProps extends HTMLMotionProps<'button'> {
  direction?: DropDir;
}

// const ThemeButton = ({ direction = 'down', ...props }: ThemeButtonProps) => {
//   const [open, setOpen] = useState(false);
//   const handleToggle = () => setOpen(!open);
//   return (
//     <>
//       <m.button
//         {...props}
//         className="from-background to-secondary border-secondary relative inset-2 rounded-full border bg-gradient-to-b p-1.5"
//         whileHover="hover"
//         onClick={handleToggle}
//       >
//         <p className="flex w-min items-center gap-2 pl-2">
//           <m.span
//             //   variants={open ? {} : arrowVariant(direction)}
//             animate={open && direction == 'down' ? { rotate: 90 } : { rotate: 0 }}
//           >
//             <ChevronRight />
//           </m.span>
//           <span className="bg-background rounded-full p-2 px-4">Theme</span>
//         </p>
//       </m.button>
//     </>
//   );
// };

const themeVariant = {
  hover: {
    background: 'linear-gradient(0deg, hsl(var(--background)), hsl(var(--secondary)))',
    transition: { repeat: Infinity, duration: 0.5, ease: 'easeInOut' },
  },
  unhover: {
    background: 'linear-gradient(360deg, hsl(var(--background)), hsl(var(--secondary)))',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const ThemeButton = ({ ...props }: ThemeButtonProps) => {
  return (
    <>
      <m.button
        {...props}
        className="rounded-full bg-black p-1"
        animate="unhover"
        whileHover="hover"
      >
        <m.div className="grid place-items-center rounded-full p-1.5" variants={themeVariant}>
          <div className="sw-full rounded-full bg-black p-1.5 px-8">Theme</div>
        </m.div>
      </m.button>
    </>
  );
};

export default ThemeButton;
