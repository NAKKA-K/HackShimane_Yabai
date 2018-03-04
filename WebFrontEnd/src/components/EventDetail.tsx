import * as React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles.css";

// JSON API
export interface EventDetail {
    id: number;
    create_user_id: number;
    top_limit_under_limit: number;
    place: string;
    date: Date;
    title: string;
    detail: string;
    answer_limit: Date;
    invite_num: Array<number>;  // [行く, 行くかも, 保留, キャンセル]
    comments:Array<{id: number; name : string; comment : string;}>;
}

// JSON API -> finally
export interface EventDetailFinally {
    id: number;
    create_user_id : {name : string;};
    top_limit_under_limit: number;
    place: string;
    date: Date;
    title: string;
    detail: string;
    answer_limit: Date;
    invite_num: Array<number>;  // [行く, 行くかも, 保留, キャンセル]
    comments:Array<{id: number; name : string; comment : string;}>;
}

export class EventDetailAPI extends React.Component<{data : any}, {}> {
    render() {
        return (
            <div>
                {
                    this.props.data.map((index : any) => {
                        return (
                                <div key={index.id} className={styles.eventContent}>
                                    <h2>{index.title}</h2>
                                    <div>時間：{index.date.toLocaleDateString()}</div>
                                    <div>場所：{index.place}</div>
                                    <div>募集期間：{index.answer_limit.toLocaleDateString()}</div>
                                    <div>制限人数：{index.top_limit_under_limit}人</div>
                                    <div>現在の人数: 行く{index.invite_num[0]}人 行くかも{index.invite_num[1]}人 保留{index.invite_num[2]}人 キャンセル{index.invite_num[3]}人</div>
                                    <div>
                                        <h3>コメント一覧</h3>
                                        {
                                            index.comments.map((index2 : any) => {
                                                return (
                                                    <div className={styles.commentContent}>
                                                        <h4>{index2.name}</h4>
                                                        <div>{index2.comment}</div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                                );
                    })
                }
            </div>
        );
    }
}