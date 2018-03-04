import * as React from "react";
import * as ReactDOM from "react-dom";

import { EventDetailAPI } from "./components/EventDetail";
import { Hello } from "./components/Hello";
import { Wait } from "./components/Wait";
import { Error } from "./components/Error";

ReactDOM.render(<Wait/>, document.getElementById("eventDetail"));

const args = new URL(document.URL)
const eventId = args.searchParams.get('eventId');

if (eventId == null) {
    ReactDOM.render(<Error content={"イベント情報の読み込みに失敗しました"}/>,document.getElementById("eventDetail"));
} else {
    const request_url = "./api/events/" + eventId + "/";
    const requester = new XMLHttpRequest();
    requester.open('GET', request_url);
    requester.onreadystatechange = () => {
        if (requester.readyState != 4) {
            // 読み込み中
        } else if (requester.status != 200) {
            ReactDOM.render(<Error content={"イベントID\"" + eventId + "\"のイベント情報の読み込みに失敗しました"}/>,document.getElementById("eventDetail"));
        } else {
            const result = JSON.parse(requester.responseText);
            ReactDOM.render(<EventDetailAPI data={result} />, document.getElementById("eventDetail"));
        }
    };

    requester.send(null);
}