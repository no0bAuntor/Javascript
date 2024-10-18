import React from "react";

export default function List(props) {
  const type = props.type;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;<b>{item.rating}</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{type}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
