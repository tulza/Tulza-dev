export const getTagColor = (tag: string) => {
  switch (tag.toLowerCase()) {
    case 'react':
      return 'aqua'; //blue
    case 'tailwind':
    case 'typescript':
      return 'blue'; //lightblue
    case 'html/css':
      return 'red'; //red
    case 'unity':
    case 'framer motion':
    case 'figma':
      return 'gray'; //gray
    case 'javascript':
    case 'python':
      return 'yellow'; //yellow
    case 'post api':
    case 'rest api':
    case 'turtle graphics':
      return 'green'; //green
    case 'c#':
    case 'responsive':
      return 'purple'; //purple
    case 'storybook':
      return 'pink'; //purple

    default:
      return 'white'; //white
  }
};
