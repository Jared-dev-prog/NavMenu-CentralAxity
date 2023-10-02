import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ItemByMenu from "./ItemByMenu";
import styles from "./NavMenuCentralAxity.module.scss";
// import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
// import { NAME_LIST } from "./constants/routes";
var NavMenuCentralAxity = function (props) {
    var listMenu = props.listMenu;
    console.log(listMenu);
    return (React.createElement("nav", { className: styles.nav_content },
        React.createElement("ul", { className: styles.nav }, listMenu !== undefined
            ? listMenu.map(function (itemMenu, index) { return (React.createElement(ItemByMenu, { key: index, Title: itemMenu.Title, Link: itemMenu.Link, childrenList: itemMenu.children })); })
            : "")));
};
export default NavMenuCentralAxity;
//# sourceMappingURL=NavMenuCentralAxity.js.map