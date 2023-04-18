import { useState } from "react";

export function Calculator(props) {
    const [text, setText] = useState('');

    return <>
        <p>{text}</p>
        <input type='text' placeholder="Text" onChange={(event) => {
            setText(event.target.value);
        }}/>
    </>;
}