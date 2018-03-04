import * as React from "react";
import CSSModules from "react-css-modules";
import Styles from "./styles.css";

export class Wait extends React.Component<{}, {}> {
    render() {
        return <div className={Styles.waitContent}>Wait for a moment...</div>;
    }
}