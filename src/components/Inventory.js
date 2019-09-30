import React, {useState} from 'react'
import ItemCard from './ItemCard'

function ItemList(props) {
  // const [hover, setHover] = useState(false);

  // console.log(props.full)
  return (
    <div className="item-list">
      {props.inventory.map(item => (
        <>
          <ItemCard full={props.full} item={item} interact={props.interact} />
          {/* <p>{item.name}   {!props.full && <span onClick={() => props.interact(item.id)}>X</span>}</p> */}
        </>
      ))}
    </div>
  )
}

export default ItemList
