import {useState} from "react";

export default function BuildEl() {
    const [color,setColor] = useState('white');
    const Click = () => color === 'white'? setColor('red'): setColor('white')
    return(
        <button style={{borderLeft: 'none', borderTop: 'none', borderRight: '1px solid black', borderBottom: '1px solid black', width: '50px', height: '50px', display: 'inline-block', boxSizing: 'border-box', padding: '0', margin:'0', backgroundColor: `${color}`}} onClick={Click}>

        </button>
    )
}