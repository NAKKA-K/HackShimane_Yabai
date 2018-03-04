import * as React from "react";
import * as ReactDOM from "react-dom";

import {EventsAPI} from "./components/Events";
import { Hello } from "./components/Hello";
import { Wait } from "./components/Wait";
import { Error } from "./components/Error";

ReactDOM.render(<Wait/>, document.getElementById("eventAll"));

const request_url = "./api/events";
const requester = new XMLHttpRequest();
requester.open('GET', request_url);
requester.onreadystatechange = () => {
    if (requester.readyState != 4) {
        // 読み込み中
    } else if (requester.status != 200) {
        ReactDOM.render(<Error content="イベント一覧の読み込みに失敗しました"/>,document.getElementById("eventAll"));
    } else {
        const result = JSON.parse(requester.responseText);
        ReactDOM.render(<EventsAPI data={result}/>, document.getElementById("eventAll"));
    }
};

requester.send(null);
