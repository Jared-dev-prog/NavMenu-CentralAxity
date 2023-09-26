import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
var NavMenuCentralAxity = function (props) {
    var listMenu = props.listMenu;
    console.log("listMenu 1", listMenu);
    return (React.createElement("div", null,
        React.createElement("nav", null, listMenu !== undefined
            ? "".concat(listMenu.map(function (itemMenu, index) { return (React.createElement("ul", { key: index },
                React.createElement("ul", null, "hello"))); }))
            : "")));
};
export default NavMenuCentralAxity;
//# sourceMappingURL=NavMenuCentralAxity.js.map