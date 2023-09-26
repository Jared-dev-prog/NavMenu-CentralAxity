import * as React from "react";
import { ItemMenuView } from "./INavMenuCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NavMenuCentralAxity.module.scss";

const ItemByMenu: React.FC<ItemMenuView> = (props) => {
  const { Title, Link, childrenList } = props;
  console.log("item ", Title, Link, childrenList);
  return (
    <li className={styles.navMenuCentralAxity}>
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
