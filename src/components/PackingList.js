import { useState } from "react";
import Item from "./Item.js"

export default function PackingList({items, onDeleteItems, onToggleItem, onClearItems}){ 
  const [sortBy,setSortBy]=useState('input')
  let sortedItems;
  if (sortBy==="input") sortedItems=items
  if (sortBy==='description') sortedItems=[...items].sort((a,b)=>a.description.localeCompare(b.description))
  if (sortBy==="packed") sortedItems=[...items].sort((a,b)=> Number(a.packed)- Number(b.packed))
  console.log(sortedItems)
  return <div className="list">
          <ul>
          {sortedItems.map(item=><Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToggleItem={onToggleItem}/>)}
          </ul>

          <div className="actions">
            <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}> 
              <option value="input">Sort by input order</option>
              <option value="description">Sort by description</option>
              <option value="packed">Sort by packed status</option>
            </select>
            <button onClick={onClearItems}>Clear list</button>
          </div>
        </div>
}