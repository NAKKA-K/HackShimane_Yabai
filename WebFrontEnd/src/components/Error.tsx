import * as React from "react";
import CSSModules from "react-css-modules";
import Styles from "./styles.css";

export class Error extends React.Component<{content : string}, {}> {
    render() {
        return <div className={Styles.errorContent}>{this.props.content}</div>;
    }
}