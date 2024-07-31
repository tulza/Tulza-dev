export const ContactLinkButton = ({
  image,
  link,
  label,
}: {
  link: string;
  label: string;
  image: string;
}) => {
  return (
    <a
      target="_blank"
      href={link}
      className="bg-gray flex cursor-pointer items-center gap-4 rounded-xl p-2 outline outline-1"
    >
      <img src={image} className="aspect-square h-[30px] sm:h-[50px]" />
      <p>{label}</p>
    </a>
  );
};
