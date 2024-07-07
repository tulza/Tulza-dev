import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { GithubIcon, GithubIconLM, linkIntact, linkIntactLM } from "@svg/index";
import { noImage } from "@/assets/indexProjectImage";
import { getTagColor } from "@styles/tagsColor";
import { ThemeContext } from "@/App";

type CardProps = {
  image?: string;
  title: string;
  tags: string[];
  githubLink?: string;
  pageLink?: string;
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
  const { theme } = useContext(ThemeContext);

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
      className="border-1 relative select-none overflow-hidden rounded-xl border"
      onMouseEnter={() => setfocus(true)}
      onMouseLeave={() => setfocus(false)}
    >
      <img src={image} style={{ height: cardHeight }} />
      <div>
        <motion.div
          initial={{ y: "0%" }}
          animate={isFocus ? { y: "-120%" } : { y: "0%" }}
          className="absolute top-0 ml-1 mt-1 rounded-lg bg-cardTagBg p-1 outline outline-1"
        >
          {title}
        </motion.div>
        <div className="absolute right-0 top-0 mr-1 mt-1 space-y-2">
          {!!pageLink && (
            <motion.a
              target="_blank"
              href={pageLink}
              whileHover={hoverScaleButton}
              className="grid aspect-square w-[30px] cursor-pointer place-items-center rounded-lg bg-cardTagBg p-1 outline outline-1"
            >
              <img
                src={theme == "light" ? linkIntactLM : linkIntact}
                className="w-[20px]"
              ></img>
            </motion.a>
          )}
          {!!githubLink && (
            <motion.a
              target="_blank"
              href={githubLink}
              whileHover={hoverScaleButton}
              className="grid aspect-square w-[30px] cursor-pointer place-items-center rounded-xl bg-cardTagBg p-1 outline outline-1"
            >
              <img
                src={theme == "light" ? GithubIconLM : GithubIcon}
                className="w-[20px]"
              ></img>
            </motion.a>
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
              style={{ color: `var(--tag_${getTagColor(elem)})` }}
              className="h-full whitespace-nowrap rounded-md bg-black px-1 outline outline-1"
              key={elem}
            >
              {elem}
            </div>
          ))}
          {tagIsOverflow &&
            tags.map((elem) => (
              <div
                style={{ color: `var(--tag_${getTagColor(elem)})` }}
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
