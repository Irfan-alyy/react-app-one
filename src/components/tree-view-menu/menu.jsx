import React, { useState, useEffect } from "react";

import data from "../../assets/data";
import MenuList from "./menu-list";

const TreeView = () => {
  return <>{data.length && <MenuList list={data} />}</>;
};

export default TreeView;
