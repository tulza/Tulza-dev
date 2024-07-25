export const IntroTextVariant = {
  initial: { x: "-100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export const AboutMeTextVariant = {
  initial: { opacity: 0, x: "30%" },
  animate: { opacity: 1, x: 0 },
};

export const waveAnimVariant = {
  Visible: { rotate: [0, 25, -25, 25, -25, 0] },
  Invisible: { rotate: 0 },
};

export const AboutMenuFocus = {
  focus: { opacity: 1 },
  unfocused: { opacity: 0.5 },
};
export const AboutItemFocus = {
  focus: { opacity: 1 },
  unfocused: { opacity: 0.5 },
};
