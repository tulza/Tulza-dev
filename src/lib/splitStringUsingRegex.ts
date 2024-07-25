export const splitStringUsingRegex = (input: string) => {
  const letters: string[] = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(input)) != null) {
    letters.push(match[0]);
  }
  return letters;
};
