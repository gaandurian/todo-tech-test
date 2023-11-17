import { Item, ListItem } from "./ListItem"

interface VerticalListProps {
    filteredListValues: Item[]
}

export const VerticalList: React.FC<VerticalListProps> = ({ filteredListValues }) => {

  return (
    <div>
        <ul>
            {filteredListValues.map((item) => (
                <ListItem key={item.id} 
                item={item}  />

            ))}
           
        </ul>
    </div>
  )
}
