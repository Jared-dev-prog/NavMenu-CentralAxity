import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./NavMenuCentralAxity.module.scss";
import styles from "./NavMenuCentralAxity.module.scss";
var ItemByMenu = function (props) {
    var Title = props.Title, Link = props.Link, childrenList = props.childrenList, abrirPagNueva = props.abrirPagNueva;
    var handleRedirect = function (url, typeOpen) {
        var type = typeOpen ? "_blank" : "_self";
        window.open(url, type);
    };
    return (React.createElement("li", null,
        React.createElement("span", { className: childrenList.length !== 0 ? styles.title : "", onClick: function () { return handleRedirect(Link, abrirPagNueva); } }, Title),
        React.createElement("ul", { className: childrenList.length !== 0 ? styles.dropdown : "" }, childrenList !== undefined
            ? childrenList.map(function (itemMenu, index) { return (React.createElement("div", { key: index, onClick: function () {
                    return handleRedirect(itemMenu.Link, itemMenu.AbrirPagNueva);
                } },
                React.createElement("li", { className: "" },
                    React.createElement("span", { className: styles.text_color_black }, itemMenu.Title)))); })
            : "")));
};
export default ItemByMenu;
//# sourceMappingURL=ItemByMenu.js.map