import { cn } from '@lib/utils';

const HighlightText = ({ text }: { text: string }) => {
  return (
    <p
      className={cn(
        'group relative p-2 text-white',
        'before:absolute before:-bottom-0 before:left-[10%] before:-z-10 before:h-[70%] before:w-full before:bg-black before:transition-all before:duration-500 hover:before:h-[20%]'
      )}
    >
      {text}
    </p>
  );
};

export default HighlightText;
