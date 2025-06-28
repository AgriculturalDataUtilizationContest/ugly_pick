import React from "react";
import { NeviHomeWrapper } from "../NeviHomeWrapper";
import { Group2609212_4 } from "../../../../icons/Group2609212_4";
import "./style.css";

export const Container = () => {
  return (
    <NeviHomeWrapper
      className="container-instance"
      groupIcon={<Group2609212_4 className="group-2609212-4" />}
      nevi="home"
    />
  );
};