import { useState } from "react"

export interface Item {
    userId: number
    id: number
    title: string
    completed: boolean
}

interface ItemProps {
    item: Item
}

export const ListItem: React.FC<ItemProps> = ({ item }: ItemProps) => {
    const [checked, setChecked] = useState(false)
    const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }
  return (
    <li className={`border-[0.5px] border-gray-200 min-h-[4rem]
    my-0.5 flex
    ${checked ? 'bg-sky-50' : ' bg-gray-50'}`}>
        <div className={`w-16 min-h-full  shrink-0 relative ${checked ? 'bg-blue-500' : 'bg-gray-100'}`}>
       
            <input onChange={handleChangeEvent} type="checkbox" className="min-h-full min-w-full opacity-0" />  
            {checked ? 
                <div className="flex justify-center items-center min-h-full pointer-events-none absolute text-2xl inset-0">👌</div>
                : undefined}
             </div>
        <p className="font-light px-3 py-2 leading-4">
           {item.title || "lorem ipsum"}
        </p>
    </li>
  )
}
