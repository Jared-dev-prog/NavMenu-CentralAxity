import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ItemByMenu from "./ItemByMenu";
var NavMenuCentralAxity = function (props) {
    var listMenu = props.listMenu;
    return (React.createElement("div", { className: "listMenu" },
        React.createElement("nav", null,
            React.createElement("div", { className: "d-flex flex-wrap " }, listMenu !== undefined
                ? listMenu.map(function (itemMenu, index) { return (React.createElement("ul", { key: index },
                    React.createElement(ItemByMenu, { Title: itemMenu.Title, Link: itemMenu.Link, childrenList: itemMenu.children }))); })
                : "")))
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
//# sourceMappingURL=NavMenuCentralAxity.js.map