import React from 'react'

function ItemList(props) {
  console.log(props.full)
  return (
    <div className="item-list">
      {props.inventory.map(item => (
        <p>{item.name}   {!props.full && <span onClick={() => props.interact(item.id)}>X</span>}</p>
      ))}
    </div>
  )
}

export default ItemList
