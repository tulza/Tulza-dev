import clsx from "clsx";

const BackgroundBlurObject = ({ className }: { className: string }) => {
  return (
    <div
      className={clsx(
        "bg-Blob absolute z-10 aspect-[2.5] w-[50%] rotate-[25deg] rounded-full blur-[150px]",
        `${className}`,
      )}
    />
  );
};

export default BackgroundBlurObject;
