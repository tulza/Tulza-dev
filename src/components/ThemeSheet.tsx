import { useTheme } from '@/App';
import { cn } from '@lib/utils';
import { m, Variants } from 'framer-motion';
import { X } from 'lucide-react';

const sheetVariants: Variants = {
  open: { x: '5%' },
  close: { x: '110%' },
};

const ThemeSheet = () => {
  const { openTheme: isOpen, handleToggleTheme } = useTheme();
  return (
    <>
      {/* modal */}
      <div
        className={cn(
          'fixed z-40 h-dvh w-dvw select-none transition-colors duration-200',
          isOpen ? 'bg-black/50' : 'pointer-events-none bg-transparent'
        )}
        onClick={handleToggleTheme}
      />
      {/* Sheet */}
      <m.div
        className="fixed right-0 z-50 flex h-full w-[300px] select-none flex-col items-center bg-black"
        initial="close"
        animate={isOpen ? 'open' : 'close'}
        variants={sheetVariants}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        onAnimationComplete={() => {
          // handleToggleTheme();
        }}
      >
        <div
          className="peer left-0 top-0 flex w-full cursor-pointer items-center justify-center border-b p-4 transition-colors hover:bg-white/20"
          onClick={handleToggleTheme}
        >
          <X className="absolute left-4 size-8" />
          <p className="text-xl font-bold">Themes</p>
        </div>
        <div className="flex h-full w-full flex-col justify-center">
          <div className="bg-background w-full border-l p-4">Default</div>
          <div className="w-full bg-black p-4">Xtra Dark</div>
          <div className="w-full bg-white p-4 text-black">Light</div>
          <div className="w-full bg-teal-900 p-4">Ocean</div>
        </div>
      </m.div>
    </>
  );
};

export default ThemeSheet;
