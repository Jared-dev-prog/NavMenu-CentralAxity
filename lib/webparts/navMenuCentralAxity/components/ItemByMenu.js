import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
var ItemByMenu = function (props) {
    var Title = props.Title, Link = props.Link, childrenList = props.childrenList;
    console.log("item ", Title, Link, childrenList);
    return React.createElement("div", null, "hello word");
};
export default ItemByMenu;
//# sourceMappingURL=ItemByMenu.js.map