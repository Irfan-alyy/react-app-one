import React, { useState, useEffect } from "react";
import TreeView from "./menu";
import MenuList from "./menu-list";
import { FaPlus, FaMinus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayList, setDisplayList] = useState({});
  function handleToggle(currentLabel) {
    setDisplayList({
      ...displayList,
      [currentLabel]: !displayList[currentLabel],
    });
  }
  return (
    <>
      <li className="list-disc pl-10 pt-5">
        <div className="flex items-center gap-10">
          <p>{item.label}</p>
          {item.children && (
            <span onClick={() => handleToggle(item.label)}>
              {displayList[item.label] ? <FaMinus /> : <FaPlus />}
            </span>
          )}
        </div>

        {item && item.children && displayList[item.label] ? (
          <MenuList list={item.children} />
        ) : null}
      </li>
    </>
  );
};

export default MenuItem;
