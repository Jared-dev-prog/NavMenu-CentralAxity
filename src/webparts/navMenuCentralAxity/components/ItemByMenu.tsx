import * as React from "react";
import { ItemMenuView } from "./INavMenuCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./NavMenuCentralAxity.module.scss";

import styles from "./NavMenuCentralAxity.module.scss";

const ItemByMenu: React.FC<ItemMenuView> = (props) => {
  const { Title, Link, childrenList } = props;
  console.log("item 2 ", Title, Link, childrenList);
  const handleRedirect = (url: string): void => {
    window.open(url);
  };
  return (
    <li>
      <span className={childrenList.length !== 0 ? styles.title : ""}>{Title}</span>
      <ul className={childrenList.length !== 0 ? styles.dropdown : ""}>
        {childrenList !== undefined
          ? childrenList.map((itemMenu, index) => (
              <div key={index} onClick={() => handleRedirect(itemMenu.Link)}>
                <li className={""}>
                  <span className={styles.text_color_black}>{itemMenu.Title}</span>
                </li>
              </div>
            ))
          : ""}
      </ul>
    </li>
  );
};

export default ItemByMenu;
