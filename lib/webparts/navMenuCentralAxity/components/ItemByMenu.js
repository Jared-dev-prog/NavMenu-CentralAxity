import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
var ItemByMenu = function (props) {
    var Title = props.Title, Link = props.Link, childrenList = props.childrenList;
    console.log("item 2 ", Title, Link, childrenList);
    var handleRedirect = function (url) {
        window.open(url);
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: "", onClick: function () { return handleRedirect(Link); }, role: "button", "data-bs-toggle": "dropdown", "aria-expanded": "false" }, Title),
        React.createElement("div", { className: "" }, childrenList !== undefined
            ? childrenList.map(function (itemMenu, index) { return (React.createElement("div", { className: "dropdown-item", key: index, onClick: function () { return handleRedirect(itemMenu.Link); } }, itemMenu.Title)); })
            : "")));
};
export default ItemByMenu;
//# sourceMappingURL=ItemByMenu.js.map