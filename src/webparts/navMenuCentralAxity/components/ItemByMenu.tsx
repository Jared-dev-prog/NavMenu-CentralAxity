import * as React from "react";
import { ItemMenuView } from "./INavMenuCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemByMenu: React.FC<ItemMenuView> = (props) => {
  const { Title, Link, childrenList } = props;
  console.log("item 2 ", Title, Link, childrenList);
  return (
    <li>
      <div>{Title}</div>
      <div>
        {childrenList !== undefined
          ? childrenList.map((itemMenu, index) => (
              <div key={index}>--{itemMenu.Title}</div>
            ))
          : ""}
      </div>
    </li>
  );
};

export default ItemByMenu;
