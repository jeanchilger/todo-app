import React from "react";
import ReactDOM from "react-dom";

import Board from "./Board";

const data = [
    {
        "title": "Study math",
        "description": "Math must be studied",
        "time": "22:00",
    },

    {
        "title": "Clean house",
        "description": "The house gets dirty sometimes",
        "time": "13:00",
    },

    {
        "title": "Watch Friends",
        "description": "First finish this tv show, then fulfil anime list",
        "time": "15:00",
    },
]

class App extends React.Component {
    render() {
        return (
            <div>
                <Board
                    data={data}
                />
            </div>
        );
    }
}

export default App;
