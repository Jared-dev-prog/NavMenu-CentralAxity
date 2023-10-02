import * as React from "react";
import { INavMenuCentralAxityProps } from "./INavMenuCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import ItemByMenu from "./ItemByMenu";
import styles from "./NavMenuCentralAxity.module.scss";

// import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
// import { NAME_LIST } from "./constants/routes";

const NavMenuCentralAxity: React.FC<INavMenuCentralAxityProps> = (props) => {
  const { listMenu } = props;
  console.log(listMenu);

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
