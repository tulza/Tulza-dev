import { v4 as uuidv4 } from "uuid";

type AboutProps = {
  title?: string;
  titleElem?: React.ReactNode;
  text: string | string[];
};

const AboutCard = ({ title, text, titleElem }: AboutProps) => {
  if (typeof text == "string") {
    text = [text];
  }

  return (
    <div className="w-full pb-12 pt-4">
      <p className="bold mb-4 text-[1.2rem] sm:text-xl">
        {titleElem ? titleElem : title}
      </p>
      <div className="space-y-2 text-[0.9rem] sm:text-base">
        {text.map((item) => {
          return <p key={uuidv4()}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default AboutCard;
