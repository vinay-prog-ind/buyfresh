import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({ children, to }) {
  const classname = "text-sm text-blue-500 hover:text-blue-700 hover:underline";

  const navigate = useNavigate();
  if (to === "-1")
    return (
      <button className={classname} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  else if (to)
    return (
      <button className={classname} onClick={() => navigate(to)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={classname}>
      {children}
    </Link>
  );
}
