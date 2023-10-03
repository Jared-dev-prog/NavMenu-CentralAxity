import * as React from "react";
import { INavMenuCentralAxityProps } from "./INavMenuCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ItemByMenu from "./ItemByMenu";
import styles from "./NavMenuCentralAxity.module.scss";
import { mergeStyles } from "office-ui-fabric-react";
import { FontIcon } from "@fluentui/react/lib/Icon";

const NavMenuCentralAxity: React.FC<INavMenuCentralAxityProps> = (props) => {
  const { listMenu } = props;
  const [width, setWidth] = React.useState(window.innerWidth);
  const [viewMenuResponse, setViewMenuResponse] = React.useState(0);
  const iconClass = mergeStyles({
    fontSize: 50,
    height: 50,
    width: 50,
    margin: "0 25px",
    color: "white",
  });
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  const changeViewMenuResponse = () => {
    setViewMenuResponse(1);
  };
  React.useEffect(() => {
    window.removeEventListener("resize", handleResize);
  }, [window.addEventListener("resize", handleResize)]);

  return (
    <>
      {width > 768 ? (
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
      ) : viewMenuResponse === 0 ? (
        <div
          className={styles.contentMenuResponse}
          onClick={() => changeViewMenuResponse()}
        >
          <FontIcon
            aria-label="Compass"
            iconName="BulletedListText"
            className={iconClass}
          />
        </div>
      ) : (
        <div className={styles.contentIndexMenu}>
          <div className={styles.navResponsive}>
            <p>Menu responsivo</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NavMenuCentralAxity;
