import React, {useState, useEffect} from 'react'

function ItemTooltip({item}) {
  const [attribute, setAttribute] = useState({name: '', value: ''});

  useEffect(() => {
    switch(item.resourcetype){
      case 'Armor':
        setAttribute({name: 'Armor Value', value: item.armor_value})
        break
      case 'Weapon':
        setAttribute({name: 'Damage', value: item.damage})
        break
      default:
        setAttribute({name: 'Value', value: item.value});
    }
  }, [item])
  
  return (
    <div className='item-tooltip'>
      {attribute.name}  {attribute.value}
    </div>
  )
}

export default ItemTooltip
