import { useTheme } from '@/App';
import GradientButton from '@components/GradientButton';
import { PencilLine } from 'lucide-react';

const ThemeButton = () => {
  const { toggleThemeSheet } = useTheme();
  return (
    <>
      <GradientButton onClick={toggleThemeSheet} childprops={{ className: 'px-8' }}>
        Themes
        <PencilLine />
      </GradientButton>
    </>
  );
};

export default ThemeButton;
