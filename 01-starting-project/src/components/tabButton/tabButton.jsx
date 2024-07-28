import  './tabButton.css'
export default function TabButton(props){
    
    return (
    <li>
        <button {...props} className={props.isSelected ? 'active':undefined}>
            {props.children}
        </button>
    </li> 
);
    
}  