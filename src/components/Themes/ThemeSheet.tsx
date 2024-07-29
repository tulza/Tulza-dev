import { useTheme } from '@/App';
import { ThemeManager } from '@/entities/ThemeManager';
import { cn } from '@lib/utils';
import { motion, Variants } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import { useLayoutEffect, useState } from 'react';

const sheetVariants: Variants = {
  open: { x: '5%' },
  close: { x: '110%' },
};

const themes = ['Original', 'Dark', 'Light', 'Ocean'];

const ThemeSheet = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const { openTheme: isOpen, toggleThemeSheet } = useTheme();

  useLayoutEffect(() => {
    const savedTheme = ThemeManager.getSavedTheme();
    if (savedTheme) {
      handleSetTheme(savedTheme);
    }
  });

  const handleSetTheme = (theme: string) => {
    ThemeManager.setTheme(theme);
    setSelectedTheme(theme);
  };
  return (
    <>
      {/* modal */}
      <div
        className={cn(
          'fixed z-40 h-dvh w-dvw select-none transition-colors duration-200',
          isOpen ? 'bg-black/50' : 'pointer-events-none bg-transparent'
        )}
        onClick={toggleThemeSheet}
      />
      {/* Sheet */}
      <motion.div
        className="fixed right-0 z-50 flex h-full w-[300px] select-none flex-col items-center bg-black"
        initial="close"
        animate={isOpen ? 'open' : 'close'}
        variants={sheetVariants}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        onAnimationComplete={() => {}}
      >
        <div
          className="peer left-0 top-0 flex w-full cursor-pointer items-center justify-center border-b p-4 transition-colors hover:bg-white/20"
          onClick={toggleThemeSheet}
        >
          <X className="absolute left-4 size-8 stroke-white" />
          <p className="text-xl font-bold text-white">Change themes</p>
        </div>
        <div className="flex h-full w-full flex-col justify-center">
          {themes.map((theme, i) => (
            <div className="relative h-min" key={theme}>
              <ThemeButton
                label={theme}
                key={theme}
                onClick={() => handleSetTheme(theme)}
                style={{
                  backgroundColor: `hsl(var(--background-${i}))`,
                  color: `hsl(var(--foreground-${i}))`,
                }}
              />
              {theme === selectedTheme && (
                <motion.div
                  layoutId="selectedThemeBar"
                  className="absolute left-0 top-0 z-50 grid h-full w-1 place-items-center bg-foreground"
                >
                  <ChevronRight />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

interface ThemeButtonProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
}
const ThemeButton = ({ label, children, ...props }: ThemeButtonProps) => {
  return (
    <div
      {...props}
      className="relative w-full cursor-pointer bg-background p-4 pl-8 hover:saturate-200"
    >
      {children}
      {label}
    </div>
  );
};

export default ThemeSheet;
