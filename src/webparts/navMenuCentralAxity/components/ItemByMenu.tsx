import * as React from "react";
import { ItemMenuView } from "./INavMenuCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import styles from "./NavMenuCentralAxity.module.scss";

const ItemByMenu: React.FC<ItemMenuView> = (props) => {
  const { Title, Link, childrenList } = props;
  console.log("item 2 ", Title, Link, childrenList);
  const handleRedirect = (url: string): void => {
    window.open(url);
  };
  return (
    <li>
      <span className={styles.text_color_white}>{Title}</span>
      <ul className={styles.dropdown}>
        {childrenList !== undefined
          ? childrenList.map((itemMenu, index) => (
              <div
                className="dropdown-item"
                key={index}
                onClick={() => handleRedirect(itemMenu.Link)}
              >
                <li className={styles.hover_black}>
                  <span className={styles.text_color_black}>
                    {itemMenu.Title}
                  </span>
                </li>
              </div>
            ))
          : ""}
      </ul>
    </li>
  );
};

export default ItemByMenu;
