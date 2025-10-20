import { useState } from "react";
import "@fontsource/roboto-mono";

function CardBtn({ children, marginTop = 2, marginBottom = 2 }) {
  const [active, setActive] = useState(false);

  const triggerPulse = () => {
    setActive(true);
    setTimeout(() => setActive(false), 300);
  };

  return (
    <div
      onMouseEnter={triggerPulse}
      onClick={triggerPulse}
      className={`flex self-end my-2 py-[2px] max-w-25 px-[2px] rounded-3xl transition-all duration-500 mr-6  ${
        active ? "bg-amber-300 scale-[1.05]" : "bg-transparent scale-100"
      }`}
      style={{ marginTop: `${marginTop}em`, marginBottom: `${marginBottom}em` }}
    >
      <button className="bg-amber-300 px-2 py-1 rounded-2xl text-[0.9em] cursor-pointer hover:bg-amber-200 font-[Roboto_Mono] transition-all duration-500">
        {children}
      </button>
    </div>
  );
}

export default CardBtn;
