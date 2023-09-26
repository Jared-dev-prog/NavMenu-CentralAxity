import * as React from "react";
import { INavMenuCentralAxityProps } from "./INavMenuCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";

const NavMenuCentralAxity: React.FC<INavMenuCentralAxityProps> = (props) => {
  const { listMenu } = props;
  console.log("listMenu 1", listMenu);
  return (
    <div>
      <nav>
        {listMenu !== undefined
          ? `${listMenu.map((itemMenu, index) => (
              <ul key={index}>
                <ul>hello</ul>
              </ul>
            ))}`
          : ""}
      </nav>
    </div>
  );
};

export default NavMenuCentralAxity;
