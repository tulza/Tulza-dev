import data from "./dataExp.json";
import { getTagColor } from "@styles/tagsColor";
import { motion } from "framer-motion";
import InViewWrapper from "@components/Wrapper/InViewWrapper";

const GraphBlock = () => {
  const keys = Object.keys(data);
  return (
    <>
      <div className="mb-4 flex justify-evenly">
        <div className="flex">
          <div className="diagonal-background-blue-16 mr-2 aspect-square h-full outline outline-2 outline-[var(--skill-experience)]" />
          Experience
        </div>
        <div className="flex">
          <div className="diagonal-background-orange-16 mr-2 aspect-square h-full outline outline-2 outline-[var(--skill-confidence)]" />
          Confidence
        </div>
      </div>
      <InViewWrapper className="flex" once>
        <div className="flex flex-col justify-end gap-4">
          {keys.map((elem: string) => (
            <div
              className="h-12 text-right"
              key={elem}
              style={{ color: `var(--tag_${getTagColor(elem)})` }}
            >
              {elem}
            </div>
          ))}
        </div>
        <div className="ml-4 w-[1px] bg-white"></div>
        <div className="ml-2 flex flex-col gap-4">
          {keys.map((elem: string, index: number) => {
            return (
              <div
                className="grid h-12 w-[220px] gap-2 sm:w-[400px] lg:w-[600px]"
                key={elem}
              >
                <motion.div
                  className="diagonal-background-blue-16 w-full rounded-sm border-2"
                  style={{ borderColor: "var(--skill-experience)" }}
                  transition={{ duration: 2, delay: index * 0.1 }}
                  initial={{ width: 0 }}
                  variants={{
                    Visible: {
                      width: `${data[elem as keyof typeof data].experience}%`,
                    },
                  }}
                />
                <motion.div
                  className="diagonal-background-orange-16 border-1 w-full rounded-sm border-2"
                  style={{ borderColor: "var(--skill-confidence)" }}
                  transition={{ duration: 2, delay: index * 0.1 }}
                  initial={{ width: 0 }}
                  variants={{
                    Visible: {
                      width: `${data[elem as keyof typeof data].confidence}%`,
                    },
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="w-[1px] bg-white" /> {/*line*/}
      </InViewWrapper>
    </>
  );
};

export default GraphBlock;
