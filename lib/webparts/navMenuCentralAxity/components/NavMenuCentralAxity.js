import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ItemByMenu from "./ItemByMenu";
import styles from "./NavMenuCentralAxity.module.scss";
var NavMenuCentralAxity = function (props) {
    var listMenu = props.listMenu;
    return (React.createElement("div", { className: styles.navMenuCentralAxity },
        React.createElement("nav", null,
            React.createElement("div", { className: "d-flex flex-wrap" }, listMenu !== undefined
                ? listMenu.map(function (itemMenu, index) { return (React.createElement("ul", { key: index, className: styles.item_Menu },
                    React.createElement(ItemByMenu, { Title: itemMenu.Title, Link: itemMenu.Link, childrenList: itemMenu.children }))); })
                : ""))));
};
export default NavMenuCentralAxity;
//# sourceMappingURL=NavMenuCentralAxity.js.map