import * as React from "react";
// import styles from './NavMenuCentralAxity.module.scss';
import { INavMenuCentralAxityProps } from "./INavMenuCentralAxityProps";
import "bootstrap/dist/css/bootstrap.min.css";

const NavMenuCentralAxity: React.FC<INavMenuCentralAxityProps> = (props) => {
  return (
    <div>
      Hello world!{" "}
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  );
};

export default NavMenuCentralAxity;
