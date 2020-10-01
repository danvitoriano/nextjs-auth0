import React, { useState } from "react";

export default (props) => {
    const [count, setCount] = useState("");

    const onTodoChange = (value) => {
        console.log(value)
        setCount(value);
    }

    return (
        <>
            <label style={{ display: 'block' }}>Practice how you can use React components easily integrated with Next.js filtering this list:</label>
            <input className="form-control" type="number" value={count} onChange={e => onTodoChange(e.target.value)} />
            <ListItem {...props} filter={count} />
        </>
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
                    <li key={index}>{item.id}</li>
                ))}
        </ul>
    );
};
