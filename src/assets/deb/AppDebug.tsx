import { MotionValue, useMotionValueEvent } from 'framer-motion';

const AppDebug = ({ ...props }: any) => {
  console.log(props);
  return (
    <div className="fixed left-4 top-4 z-[9999] bg-black/50 p-4 px-8">
      <p className="text-center">DEBUGGER</p>
      <hr />
      <br />
      {Object.keys(props).map((key) => {
        if (props[key] instanceof MotionValue) {
          useMotionValueEvent(props[key], 'change', () => {
            console.log(key, props[key].get());
          });
        }

        return (
          <p key={key}>
            {key}: {props[key] + ''}
          </p>
        );
      })}
    </div>
  );
};

export default AppDebug;
