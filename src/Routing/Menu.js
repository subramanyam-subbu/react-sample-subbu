import { Link } from 'react-router-dom';

export default function Menu()
{
    return <div>
        
        <Link to="/">Home</Link>
        <Link to="about1">About</Link>
        <Link to="contact">Contact</Link>

        <Link to="products">Products</Link>
        <br></br>
        <MenuContent/>
    </div>
}

export function MenuContent()
{
    return <h1>This is Menu Content Page</h1>
}