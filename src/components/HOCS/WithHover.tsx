import React from 'react';

interface WithHoverProps<T> {
  Element: T & { hover: boolean } & React.FC;
}

export function withHover<T>({ Element }: WithHoverProps<T>) {
  return () => {
    // const [hover, setHover] = useState(false);
    // return <Element hover={hover} />;
  };
}
