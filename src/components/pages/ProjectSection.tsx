import HighlightedText from "@components/HighlightedText";

const ProjectSection = () => {
  return (
    <div className="flex h-[2000px] w-full flex-col items-center">
      <div className="flex h-[full] flex-col items-center pt-[10rem]">
        <HighlightedText
          text="Projects"
          highlight="var(--green)"
          className="bold my-10 text-3xl"
        />
        <div className="flex gap-4 lg:flex-col">
          <div className="flex h-[full] w-min gap-4 sm:flex-col lg:flex-row">
            <div className="h-[200px] w-[300px] rounded-xl outline outline-1"></div>
            <div className="h-[200px] w-[300px] rounded-xl outline outline-1"></div>
            <div className="h-[200px] w-[300px] rounded-xl outline outline-1"></div>
          </div>
          <div className="flex h-[full] w-min gap-4 sm:flex-col lg:flex-row">
            <div className="h-[200px] w-[300px] rounded-xl outline outline-1"></div>
            <div className="h-[200px] w-[300px] rounded-xl outline outline-1"></div>
            <div className="h-[200px] w-[300px] rounded-xl outline outline-1"></div>
          </div>
        </div>
      </div>
      {/* <div className="mt-20 space-y-8">
        <div className="flex divide-x-[1px] divide-white sm:w-[600px] lg:w-[1000px]">
          <div className="bold mr-2 w-[100px]">React</div>
          <div className="grid h-[60px] w-full gap-4">
            <div className="ml-2 h-full w-full bg-white" />
            <div className="ml-2 h-full w-full bg-white" />
          </div>
        </div>
        <div className="flex divide-x-[1px] divide-white sm:w-[600px] lg:w-[1000px]">
          <div className="bold mr-2 w-[100px]">Javascript</div>
          <div className="grid h-[60px] w-full gap-4">
            <div className="ml-2 h-full w-full bg-white" />
            <div className="ml-2 h-full w-full bg-white" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProjectSection;
