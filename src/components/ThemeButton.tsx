import { useTheme } from '@/App';
import { motion } from 'framer-motion';
import { PencilLine } from 'lucide-react';

const themeVariant = {
  hover: {
    background: 'linear-gradient(0deg, hsl(var(--background)), hsl(var(--secondary)))',
    transition: { repeat: Infinity, duration: 1, ease: 'easeInOut' },
  },
  unhover: {
    background: 'linear-gradient(360deg, hsl(var(--background)), hsl(var(--secondary)))',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};
const ThemeButton = () => {
  const { toggleThemeSheet } = useTheme();
  return (
    <>
      <motion.button
        className="rounded-full bg-black p-1 text-white"
        animate="unhover"
        whileHover="hover"
        onClick={toggleThemeSheet}
      >
        <motion.div className="grid place-items-center rounded-full p-1.5" variants={themeVariant}>
          <div className="sw-full flex gap-2 rounded-full bg-black p-1.5 px-8">
            Themes
            <PencilLine />
          </div>
        </motion.div>
      </motion.button>
    </>
  );
};

export default ThemeButton;
