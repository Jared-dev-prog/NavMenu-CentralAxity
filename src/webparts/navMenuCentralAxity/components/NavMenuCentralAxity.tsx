import * as React from "react";
import { INavMenuCentralAxityProps } from "./INavMenuCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ItemByMenu from "./ItemByMenu";
import styles from "./NavMenuCentralAxity.module.scss";
const NavMenuCentralAxity: React.FC<INavMenuCentralAxityProps> = (props) => {
  const { listMenu } = props;
  return (
    <div className={styles.navMenuCentralAxity}>
      <nav>
        <div className="d-flex flex-wrap">
          {listMenu !== undefined
            ? listMenu.map((itemMenu, index) => (
                <ul key={index} className={styles.item_Menu}>
                  <ItemByMenu
                    Title={itemMenu.Title}
                    Link={itemMenu.Link}
                    childrenList={itemMenu.children}
                  />
                </ul>
              ))
            : ""}
        </div>
      </nav>
    </div>
  );
};

export default NavMenuCentralAxity;
