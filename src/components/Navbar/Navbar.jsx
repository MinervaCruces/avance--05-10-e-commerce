import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{ backgroundColor: 'transparent' }}>
            <ul className="flex">
                <li className="mx-[15px] text-[14px] font-medium leading-[20px] uppercase text-[rgb(71,17,93)] transition duration-300 ease-linear hover:text-[rgb(180,101,233)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-medium leading-[20px] uppercase text-[rgb(71,17,93)] transition duration-300 ease-linear hover:text-[rgb(180,101,233)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/products">Tienda</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-medium leading-[20px] uppercase text-[rgb(71,17,93)] transition duration-300 ease-linear hover:text-[rgb(180,101,233)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/about">Nosotros</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-medium leading-[20px] uppercase text-[rgb(71,17,93)] transition duration-300 ease-linear hover:text-[rgb(180,101,233)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}
