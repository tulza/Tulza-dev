import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <>
      <div className="absolute flex w-full justify-center gap-8 p-8">
        <NavButton name="/" />
        <NavButton name="home" />
      </div>
    </>
  );
};

const NavButton = ({ name }: { name: string }) => {
  return (
    <Link to={`${name}`}>
      <motion.div whileHover="hover">
        <motion.div
          className="outline-6 rounded-full border-4 border-background bg-element p-4 px-8 font-bold shadow-lg shadow-background outline outline-element"
          variants={{ hover: { y: 10, borderColor: "var(--white)" } }}
        >
          <code>{name}</code>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Navigation;
