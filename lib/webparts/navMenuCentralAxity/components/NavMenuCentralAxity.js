import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ItemByMenu from "./ItemByMenu";
import styles from "./NavMenuCentralAxity.module.scss";
import { mergeStyles } from "office-ui-fabric-react";
import { FontIcon } from "@fluentui/react/lib/Icon";
var NavMenuCentralAxity = function (props) {
    var listMenu = props.listMenu;
    var _a = React.useState(window.innerWidth), width = _a[0], setWidth = _a[1];
    var _b = React.useState(0), viewMenuResponse = _b[0], setViewMenuResponse = _b[1];
    var iconClass = mergeStyles({
        fontSize: 50,
        height: 50,
        width: 50,
        margin: "0 25px",
        color: "white",
    });
    var handleResize = function () {
        setWidth(window.innerWidth);
    };
    var changeViewMenuResponse = function () {
        setViewMenuResponse(1);
    };
    React.useEffect(function () {
        window.removeEventListener("resize", handleResize);
    }, [window.addEventListener("resize", handleResize)]);
    return (React.createElement(React.Fragment, null, width > 768 ? (React.createElement("nav", { className: styles.nav_content },
        React.createElement("ul", { className: styles.nav }, listMenu !== undefined
            ? listMenu.map(function (itemMenu, index) { return (React.createElement(ItemByMenu, { key: index, Title: itemMenu.Title, Link: itemMenu.Link, childrenList: itemMenu.children, abrirPagNueva: itemMenu.AbrirPagNueva })); })
            : ""))) : viewMenuResponse === 0 ? (React.createElement("div", { className: styles.contentMenuResponse, onClick: function () { return changeViewMenuResponse(); } },
        React.createElement(FontIcon, { "aria-label": "Compass", iconName: "BulletedListText", className: iconClass }))) : (React.createElement("div", { className: styles.contentIndexMenu },
        React.createElement("div", { className: styles.navResponsive },
            React.createElement("p", null, "Menu responsivo"))))));
};
export default NavMenuCentralAxity;
//# sourceMappingURL=NavMenuCentralAxity.js.map