import * as React from "react";
import { ItemMenuView } from "./INavMenuCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./NavMenuCentralAxity.module.scss";

import styles from "./NavMenuCentralAxity.module.scss";

const ItemByMenu: React.FC<ItemMenuView> = (props) => {
  const { Title, Link, childrenList, abrirPagNueva } = props;
  const handleRedirect = (url: string, typeOpen: boolean): void => {
    const type = typeOpen ? "_blank" : "_self";
    window.open(url, type);
  };
  return (
    <li>
      <span
        className={childrenList.length !== 0 ? styles.title : ""}
        onClick={() => handleRedirect(Link, abrirPagNueva)}
      >
        {Title}
      </span>
      <ul className={childrenList.length !== 0 ? styles.dropdown : ""}>
        {childrenList !== undefined
          ? childrenList.map((itemMenu, index) => (
              <div
                key={index}
                onClick={() =>
                  handleRedirect(itemMenu.Link, itemMenu.AbrirPagNueva)
                }
              >
                <li className={""}>
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
