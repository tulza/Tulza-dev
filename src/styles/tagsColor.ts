export const getTagColor = (tag: string) => {
  const convertedtag = String(tag).toLowerCase();
  switch (convertedtag) {
    case "react":
      return "blue"; //blue
    case "tailwind":
      return "lightblue"; //lightblue
    case "html/css":
      return "red"; //red
    case "unity":
    case "framer motion":
      return "gray"; //gray
    case "javascript":
    case "python":
      return "yellow"; //yellow
    case "post api":
    case "rest api":
    case "turtle graphics":
      return "green"; //green
    case "c#":
    case "responsive":
      return "purple"; //purple

    default:
      return "white"; //white
  }
};
