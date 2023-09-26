import * as React from "react";
import { INavMenuCentralAxityProps } from "./INavMenuCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ItemByMenu from "./ItemByMenu";
const NavMenuCentralAxity: React.FC<INavMenuCentralAxityProps> = (props) => {
  const { listMenu } = props;
  return (
    <div className="listMenu">
      <nav>
        <div className="d-flex flex-wrap ">
          {listMenu !== undefined
            ? listMenu.map((itemMenu, index) => (
                <ul key={index}>
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
    // <li className="nav-item dropdown">
    //   <a
    //     className="nav-link dropdown-toggle"
    //     href="#"
    //     role="button"
    //     data-bs-toggle="dropdown"
    //     aria-expanded="false"
    //   >
    //     Dropdown
    //   </a>

    //   <ul className="dropdown-menu">
    //     <li>
    //       <a className="dropdown-item" href="#">
    //         Action
    //       </a>
    //     </li>

    //     <li>
    //       <a className="dropdown-item" href="#">
    //         Another action
    //       </a>
    //     </li>

    //     <li>
    //       <hr className="dropdown-divider" />
    //     </li>

    //     <li>
    //       <a className="dropdown-item" href="#">
    //         Something else here
    //       </a>
    //     </li>
    //   </ul>
    // </li>
  );
};

export default NavMenuCentralAxity;
