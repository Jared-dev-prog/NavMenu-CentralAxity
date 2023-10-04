import * as React from "react";
import { INavMenuCentralAxityProps } from "./INavMenuCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ItemByMenu from "./ItemByMenu";
import styles from "./NavMenuCentralAxity.module.scss";

const NavMenuCentralAxity: React.FC<INavMenuCentralAxityProps> = (props) => {
  const { listMenu } = props;
  const [width, setWidth] = React.useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.removeEventListener("resize", handleResize);
  }, [window.addEventListener("resize", handleResize)]);

  return (
    <>
      {width > 820 ? (
        <nav className={styles.nav_content}>
          <ul className={styles.nav}>
            {listMenu !== undefined
              ? listMenu.map((itemMenu, index) => (
                  <ItemByMenu
                    key={index}
                    Title={itemMenu.Title}
                    Link={itemMenu.Link}
                    childrenList={itemMenu.children}
                    abrirPagNueva={itemMenu.AbrirPagNueva}
                  />
                ))
              : ""}
          </ul>
        </nav>
      ) : (
        <div className={styles.none} />
      )}
    </>
  );
};

export default NavMenuCentralAxity;
