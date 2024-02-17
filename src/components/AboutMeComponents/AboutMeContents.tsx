import { ScreenProfileContext } from "@/App";
import { useContext, useRef, useState } from "react";
import AboutCard from "@components/AboutMeComponents/AboutCard";
import AboutMenu from "@components/AboutMeComponents/AboutMenu";
import { motion } from "framer-motion";
import { AboutItemFocus } from "@/Framer/Variants";

const AboutMeContents = () => {
  const isDesktop = useContext(ScreenProfileContext);

  //for getting menu container height
  const contentRef = useRef(null);
  //menu elem ref, for each item
  const DetailsRef1 = useRef(null);
  const DetailsRef2 = useRef(null);
  const DetailsRef3 = useRef(null);
  const DetailsRef4 = useRef(null);
  const itemsRef = [DetailsRef1, DetailsRef2, DetailsRef3, DetailsRef4];
  const [focus, setFocus] = useState(0);
  return (
    <div
      ref={contentRef}
      className="relative flex h-min w-[300px] justify-between gap-4 sm:w-[650px] lg:w-[1000px]"
    >
      {isDesktop && (
        <AboutMenu
          parentRef={contentRef}
          itemsRef={itemsRef}
          focus={focus}
          setFocus={setFocus}
          itemsTitle={[
            "Highschool",
            "GamJam",
            "University Of Auckland",
            "WebDev Journey",
          ]}
        />
      )}
      {/* mb-[56px] is magic number to get perfect alignment */}
      <div className="mb-[56px] w-full divide-y divide-[#585858] rounded-xl bg-[#252525] px-6 py-4 outline outline-1 outline-[#585858] sm:px-12">
        <motion.div
          variants={AboutItemFocus}
          initial="unfocused"
          animate={focus == 0 ? "focus" : isDesktop ? "unfocused" : "focus"}
        >
          <AboutCard
            ref={DetailsRef1}
            titleElem={
              <>
                2020-2022 <br />
                <span className="text-lime-200">Otago Bayfield Highschool</span>
              </>
            }
            text={[
              "During my first senior year of highschool, I took my first computer science class during highschool and ever since has taken a liking to it.",
              "During the course of rest of highschool years, I've created many basic terminal programs in C# later creating unity games, and volunteered to become a technical support student.",
            ]}
          />
        </motion.div>
        <motion.div
          variants={AboutItemFocus}
          initial="unfocused"
          animate={focus == 1 ? "focus" : isDesktop ? "unfocused" : "focus"}
        >
          <AboutCard
            ref={DetailsRef2}
            titleElem={
              <>
                July 2022 <br />
                <span className="text-green">Otago GameJam Participant</span>
              </>
            }
            text={[
              "I applied to play in a GameJam and worked with a team of 4 from my highschool.",
              "during this 48 hour event to create a game with Unity and C# where i had help create UI assets and design stage layout",
            ]}
          />
        </motion.div>
        <motion.div
          variants={AboutItemFocus}
          initial="unfocused"
          animate={focus == 2 ? "focus" : isDesktop ? "unfocused" : "focus"}
        >
          <AboutCard
            ref={DetailsRef3}
            titleElem={
              <>
                2023-2024
                <br />
                <span className="text-blue">
                  Studying at University of Auckland
                </span>
              </>
            }
            text={[
              "In early 2023, I moved to Auckland with my family and began my studies at the University of Auckland, majoring in Computer science BSc.",
              "In my first year, studied computer theory and math, learnt to programmed in python, and learnt basic data structures such as stack, queues, binary tree, and hashtables",
            ]}
          />
        </motion.div>
        <motion.div
          variants={AboutItemFocus}
          initial="unfocused"
          animate={focus == 3 ? "focus" : isDesktop ? "unfocused" : "focus"}
        >
          <AboutCard
            ref={DetailsRef4}
            titleElem={
              <>
                2023-2024
                <br />
                <span className="text-cyan-300">My WebDev journey</span>
              </>
            }
            text={[
              "Between my school breaks I've set a goal to become better at web development, because of my passion on designing which have led me to start mimic components from front end mentor challenges.",
              "Ever since I have tried to keep up my work ethics by working something to improve my skills every day which have led up to this website.",
              "During my first few weeks I have worked with html/css/javascript and later adapted to using React, Framer motion, and then Typescript.",
            ]}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeContents;
