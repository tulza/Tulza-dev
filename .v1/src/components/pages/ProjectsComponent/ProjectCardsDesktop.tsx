import CardsIndex from "./CardsIndex";

const ProjectCardsDesktop = () => {
  return (
    <div className="flex gap-4 lg:flex-col">
      <div className="flex h-[full] w-min gap-4 sm:flex-col lg:translate-x-[5%] lg:flex-row">
        <CardsIndex index={0} />
        <CardsIndex index={1} />
        <CardsIndex index={2} />
      </div>
      <div className="flex h-[full] w-min gap-4 sm:flex-col lg:-translate-x-[5%] lg:flex-row">
        <CardsIndex index={3} />
        <CardsIndex index={4} />
        <CardsIndex index={5} />
      </div>
    </div>
  );
};

export default ProjectCardsDesktop;
