import { FaQuoteRight } from "react-icons/fa";

function Quote({ top = -1 }) {
  return (
    <span
      className="absolute flex items-center justify-center right-[1rem] bg-neutral-300 w-[2.3rem] h-[2.3rem] rounded-3xl"
      style={{ top: `${top}rem` }}
    >
      <FaQuoteRight />
    </span>
  );
}

export default Quote;
