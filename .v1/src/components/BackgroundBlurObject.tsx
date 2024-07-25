import clsx from "clsx";

const BackgroundBlurObject = ({ className }: { className: string }) => {
  return (
    <div
      className={clsx(
        "absolute z-10 aspect-[2.5] w-[50%] rotate-[25deg] rounded-full bg-Blob blur-[150px]",
        `${className}`,
      )}
    />
  );
};

export default BackgroundBlurObject;
