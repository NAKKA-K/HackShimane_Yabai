import * as React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

// JSON API
export interface Event {
    id : number;
    title : string;
    date : Date;
}

export class EventsAPI extends React.Component<{ data : any}, {}> {
    render() {
        return (
            <div>
                {
                    this.props.data.map((index : any) => {
                        return (
                                <div key={index.id} className={styles.eventContent}>
                                    <h2>{index.title}</h2>
                                    <div>時間：{index.date.toLocaleDateString()}</div>
                                </div>
                                );
                    })
                }
            </div>
        );
    }
}