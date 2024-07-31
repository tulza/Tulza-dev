import { useTheme } from '@/App';
import GradientButton from '@components/GradientButton';
import { MotionStyle } from 'framer-motion';
import { PencilLine } from 'lucide-react';

const ThemeButton = ({ className, style }: { className?: string; style?: MotionStyle }) => {
  const { toggleThemeSheet } = useTheme();
  return (
    <>
      <GradientButton
        onClick={toggleThemeSheet}
        className={className}
        childprops={{ className: 'px-8' }}
        style={style}
      >
        Themes
        <PencilLine />
      </GradientButton>
    </>
  );
};

export default ThemeButton;
