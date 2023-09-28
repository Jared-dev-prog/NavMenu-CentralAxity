import * as React from "react";
import { INavMenuCentralAxityProps } from "./INavMenuCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import styles from "./NavMenuCentralAxity.module.scss";
import ItemByMenu from "./ItemByMenu";
const NavMenuCentralAxity: React.FC<INavMenuCentralAxityProps> = (props) => {
  const { listMenu } = props;
  return (
    <nav className={styles.nav_content}>
      <ul className={styles.nav}>
        {listMenu !== undefined
          ? listMenu.map((itemMenu, index) => (
              <ItemByMenu
                key={index}
                Title={itemMenu.Title}
                Link={itemMenu.Link}
                childrenList={itemMenu.children}
              />
            ))
          : ""}
      </ul>
    </nav>
  );
};

export default NavMenuCentralAxity;
