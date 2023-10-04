import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ItemByMenu from "./ItemByMenu";
import styles from "./NavMenuCentralAxity.module.scss";
var NavMenuCentralAxity = function (props) {
    var listMenu = props.listMenu;
    var _a = React.useState(window.innerWidth), width = _a[0], setWidth = _a[1];
    var handleResize = function () {
        setWidth(window.innerWidth);
    };
    React.useEffect(function () {
        window.removeEventListener("resize", handleResize);
    }, [window.addEventListener("resize", handleResize)]);
    return (React.createElement(React.Fragment, null, width > 820 ? (React.createElement("nav", { className: styles.nav_content },
        React.createElement("ul", { className: styles.nav }, listMenu !== undefined
            ? listMenu.map(function (itemMenu, index) { return (React.createElement(ItemByMenu, { key: index, Title: itemMenu.Title, Link: itemMenu.Link, childrenList: itemMenu.children, abrirPagNueva: itemMenu.AbrirPagNueva })); })
            : ""))) : (React.createElement("div", { className: styles.none }))));
};
export default NavMenuCentralAxity;
//# sourceMappingURL=NavMenuCentralAxity.js.map