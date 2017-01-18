import * as React from "react";
import * as ReactDOM from "react-dom";

import { Watch } from "./components/Watch";

ReactDOM.render(
    <div>
        <h1>Current time is: </h1>
        <Watch />
    </div>,
    document.getElementById("example")
);