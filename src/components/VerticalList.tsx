import { Item, ListItem } from "./ListItem"

interface VerticalListProps {
    listValues: Item[]
}

export const VerticalList: React.FC<VerticalListProps> = ({ listValues }) => {

  return (
    <div>
        <ul>
            {listValues.map((item) => (
                <ListItem key={item.id} item={item}  />

            ))}
           
        </ul>
    </div>
  )
}
