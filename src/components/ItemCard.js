import React, {useState} from 'react';
import ItemTooltip from './ItemTooltip';

function ItemCard({item, full, interact}) {
  const [hover, setHover] = useState(false);

  return (
    <div className='item-card'>
      <p onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{item.name}   {!full && <span onClick={() => interact(item.id)}>X</span>}</p>
      {hover && <ItemTooltip  item={item} />}
    </div>
  )
}

export default ItemCard
