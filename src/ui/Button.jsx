import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const classname = `inline-block rounded-full bg-yellow-400 
  px-4 py-3 font-semibold uppercase tracking-wide 
  text-stone-800 transition-colors duration-300  
  hover:bg-yellow-300 focus:bg-yellow-300 
  focus:outline-none focus:ring 
  focus:ring-yellow-300 focus:ring-offset-2 
  disabled:cursor-not-allowed sm:px-6 sm:py-4`;

  const base = `text-sm inline-block rounded-full bg-yellow-400 
     font-semibold uppercase tracking-wide 
    text-stone-800 transition-colors duration-300  
    hover:bg-yellow-300 focus:bg-yellow-300 
    focus:outline-none focus:ring 
    focus:ring-yellow-300 focus:ring-offset-2 
    disabled:cursor-not-allowed `;
  const secondary = `text-sm inline-block rounded-full border-2 border-stone-300  
     font-semibold uppercase tracking-wide 
    text-stone-500 transition-colors duration-300  
    hover:bg-stone-300 focus:bg-stone-300 
    focus:outline-none focus:ring 
    focus:ring-stone-300 focus:ring-offset-2 
    disabled:cursor-not-allowed md:px-5.5 md:py-3.5 px-3.5 py-2.5`;
  const soldOut = ` 
     font-semibold uppercase tracking-wide md:px-5 md:py-2.5 px-4 py-2 `;

  const styles = {
    primary: base + "md:px-6 md:py-4 px-4 py-3",
    small: base + "md:px-5 md:py-2.5 px-4 py-2 text-xs",
    secondary,
    soldOut,
    round:
      base + `rounded-full md:px-3.5 md:py-2 px-2.5 py-1 text-sm bg-stone-300`,
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
