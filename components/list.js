import Search from "./search";
import React, { useState } from "react";

export default (props) => {
    const [count, setCount] = useState("");

    const onTodoChange = (value) => {
        console.log(value)
        setCount(value);
    }

    return (
        <div>
            <label style={{ display: 'block' }}>Filtrar</label>
            <input type="search" value={count} onChange={e => onTodoChange(e.target.value)} />
            <ListItem {...props} filter={count} />
        </div>
    );
};

const ListItem = (props) => {
    console.log(props.filter)
    const filter = parseInt(props.filter)
    return (
        <ul>
            {
                props.filter === "" ? props.items.map((item, index) => (
                    <li key={index}>hi {item.id}</li>
                )) : props.items.filter(
                    (query) => {
                        return query.id === filter
                    }
                ).map((item, index) => (
                    <li key={index}>hi {item.id}</li>
                ))}
        </ul>
    );
};
