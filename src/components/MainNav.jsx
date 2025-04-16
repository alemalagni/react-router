import { Link, NavLink } from 'react-router-dom'

export default function MainNav() {
    return (
        <nav>
            <Link to="/">HomePage</Link>
            <NavLink to="/AboutUs">Chi Siamo</NavLink>
            <NavLink to="/PostList">Lista dei post</NavLink>
        </nav>
    );
}