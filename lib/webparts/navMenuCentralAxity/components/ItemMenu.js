import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
var ItemByMenu = function (props) {
    var Title = props.Title, Link = props.Link;
    console.log("item", Link);
    return React.createElement("div", null,
        Title,
        " ");
};
export default ItemByMenu;
//# sourceMappingURL=ItemMenu.js.map