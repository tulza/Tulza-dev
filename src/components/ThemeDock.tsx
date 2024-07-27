import { ThemeContext } from '@/App';
import { X } from 'lucide-react';
import { useContext } from 'react';

const ThemeDock = () => {
  const {} = useContext(ThemeContext);
  return (
    <div className="fixed z-50 h-dvh w-dvw bg-black/20">
      <div className="absolute right-0 z-10 flex h-full w-[300px] flex-col items-center bg-black">
        <div className="peer left-0 top-0 flex w-full cursor-pointer items-center justify-center border-b p-4 transition-colors hover:bg-white/20">
          <X className="absolute left-4 size-8" />
          <p className="text-xl font-bold">Themes</p>
        </div>
        <div className="flex h-full w-full flex-col justify-center">
          <div className="bg-background w-full border-l p-4">Default</div>
          <div className="w-full bg-black p-4">Xtra Dark</div>
          <div className="w-full bg-white p-4 text-black">Light</div>
          <div className="w-full bg-teal-900 p-4">Ocean</div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDock;
