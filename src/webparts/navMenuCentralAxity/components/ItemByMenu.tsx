import * as React from "react";
import { ItemMenuView } from "./INavMenuCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const ItemByMenu: React.FC<ItemMenuView> = (props) => {
  const { Title, Link, childrenList } = props;
  console.log("item 2 ", Title, Link, childrenList);
  const handleRedirect = (url: string): void => {
    window.open(url);
  };
  return (
    <div>
      <div
        className={""}
        onClick={() => handleRedirect(Link)}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        {Title}
      </div>
      <div className={""}>
        {childrenList !== undefined
          ? childrenList.map((itemMenu, index) => (
              <div
                className="dropdown-item"
                key={index}
                onClick={() => handleRedirect(itemMenu.Link)}>
                {itemMenu.Title}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default ItemByMenu;
