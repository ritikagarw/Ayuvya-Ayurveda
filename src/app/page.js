import React from "react";
import { redirect } from "next/navigation";

const Main = () => {
  redirect("/feedback");
  return <div>Main</div>;
};

export default Main;
