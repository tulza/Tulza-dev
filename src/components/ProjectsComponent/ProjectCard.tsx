import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GithubIcon, linkIntact } from "@/assets/indexImage";
import { noImage } from "@/assets/indexProjectImage";
import { getTagColor } from "@styles/tagsColor";

type CardProps = {
  image?: string;
  title: string;
  tags: string[];
  githubLink?;
  pageLink?;
};

const ProjectCard = ({
  image = noImage,
  title,
  tags = [],
  githubLink,
  pageLink,
}: CardProps) => {
  const cardWidth = 300;
  const cardHeight = 200;
  const [isFocus, setfocus] = useState(false);
  const [tagIsOverflow, setTagOverflow] = useState(false);
  const hoverScaleButton = { scale: 1.1 };
  const tagContainerRef = useRef(null);

  // config
  const tagScrollDuration = 10;

  useEffect(() => {
    if (!tagContainerRef.current) return;
    const { offsetWidth } = tagContainerRef.current;
    if (offsetWidth > cardWidth) {
      setTagOverflow(true);
    }
  }, []);

  return (
    <div
      style={{ width: cardWidth, height: cardHeight }}
      className="relative select-none overflow-hidden rounded-xl outline outline-1"
      onMouseEnter={() => setfocus(true)}
      onMouseLeave={() => setfocus(false)}
    >
      <img src={image} style={{ height: cardHeight }} />
      <div>
        <motion.div
          initial={{ y: "0%" }}
          animate={isFocus ? { y: "-120%" } : { y: "0%" }}
          className="absolute top-0 ml-1 mt-1 rounded-lg bg-black p-1 outline outline-1"
        >
          {title}
        </motion.div>
        <div className="absolute right-0 top-0 mr-1 mt-1 space-y-2">
          {pageLink && (
            <motion.div
              whileHover={hoverScaleButton}
              className="grid aspect-square w-[30px] cursor-pointer place-items-center rounded-lg bg-black p-1 outline outline-1"
            >
              <img src={linkIntact} className="w-[20px]"></img>
            </motion.div>
          )}
          {githubLink && (
            <motion.div
              whileHover={hoverScaleButton}
              className="grid aspect-square w-[30px] cursor-pointer place-items-center rounded-xl bg-black p-1 outline outline-1"
            >
              <img src={GithubIcon} className="w-[20px]"></img>
            </motion.div>
          )}
        </div>
      </div>
      <motion.div
        className="absolute flex h-[40px] w-full items-center rounded-t-lg bg-[#1] py-2 outline outline-1 backdrop-blur-lg"
        initial={{ y: "-100%" }}
        animate={isFocus ? { y: "1%" } : { y: "-100%" }}
        transition={{
          ease: "easeInOut",
          duration: 0.2,
        }}
      >
        {/* tags */}
        <motion.div
          className="flex gap-2  pl-2"
          ref={tagContainerRef}
          initial={{ x: "0%" }}
          animate={tagIsOverflow ? { x: "-50%" } : {}}
          transition={{
            duration: tagScrollDuration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {tags.map((elem) => (
            <div
              style={{ color: `var(--${getTagColor(elem)})` }}
              className="h-full whitespace-nowrap rounded-md bg-black px-1 outline outline-1"
              key={elem}
            >
              {elem}
            </div>
          ))}
          {tagIsOverflow &&
            tags.map((elem) => (
              <div
                style={{ color: `var(--${getTagColor(elem)})` }}
                className="h-full whitespace-nowrap rounded-md bg-black px-1 outline outline-1"
                key={elem}
              >
                {elem}
              </div>
            ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
