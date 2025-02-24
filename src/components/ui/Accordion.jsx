import { useContext, useRef } from "react"
import { createContext } from "react"
import { useEffect, useState } from "react"
import { FaChevronDown } from "react-icons/fa"

const AccordionContext = createContext()

const Accordion = ({ children, value, onChange, ...props }) => {
    const [selected, setSelected] = useState(value)

    useEffect(() =>{
        onChange?.(selected)
    }, [selected])

  return (
    <ul {...props} className="space-y-4">
        <AccordionContext.Provider value={{ selected, setSelected }}>
            {children}
        </AccordionContext.Provider>
    </ul>
)
}

export function AccordionItem({ children, value, trigger, ...props }) {
    const {selected, setSelected} = useContext(AccordionContext)
    const open = selected === value

    const ref = useRef(null)

    return(
        <li className="border rounded-md" {...props}>
            <header role="button" onClick={() => setSelected(open ? null : value)}
            className="flex justify-between gap-3 items-center p-4 font-medium text-black select-none"
            >
                {trigger}
                <FaChevronDown className={`text-base text-[#C0993A] transition-transform ${open?"rotate-180" : ""}`}/>
            </header>
            <div 
                className="overflow-y-hidden transition-all duration-300 ease-in-out" 
                style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
            >
                <div className="pt-2 p-4 text-gray-700" ref={ref}>{children}</div>
            </div>
        </li>
    )
}

export default Accordion