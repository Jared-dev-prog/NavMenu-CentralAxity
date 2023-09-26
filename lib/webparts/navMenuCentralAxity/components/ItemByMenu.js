import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NavMenuCentralAxity.module.scss";
var ItemByMenu = function (props) {
    var Title = props.Title, Link = props.Link, childrenList = props.childrenList;
    console.log("item ", Title, Link, childrenList);
    return (React.createElement("li", { className: styles.navMenuCentralAxity },
        React.createElement("div", null, Title),
        React.createElement("div", null, childrenList !== undefined
            ? childrenList.map(function (itemMenu, index) { return (React.createElement("div", { key: index },
                "--",
                itemMenu.Title)); })
            : "")));
};
export default ItemByMenu;
//# sourceMappingURL=ItemByMenu.js.map