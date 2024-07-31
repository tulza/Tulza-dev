import ThemeButton from '../Themes/ThemeButton';
import { Navigator } from './Navigations';

const NavigationBar = () => {
  return (
    <div className="absolute top-10 z-10 flex w-full select-none items-center justify-center text-foreground">
      <div className="flex items-center gap-12 border-b border-foreground p-6 text-lg backdrop-blur-md">
        <p className="textStroke text-4xl font-bold">&lt;a/&gt;</p>
        <p>:</p>
        <Navigator />
        <p>:</p>
        <ThemeButton />
      </div>
    </div>
  );
};

export default NavigationBar;
