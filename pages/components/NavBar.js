import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-cyan-900 h-14 text-white space-x-4 flow-root pt-4">
      <ul>
        <div className="flex justify-between items-center px-4 w-96 float-left">
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
        </div>

        <div className="flex justify-between items-center px-4 w-60 float-right">
          <li>
            <Link href="/">
              <FaShoppingCart />
            </Link>
          </li>
          <li>
            <Link href="/">Login</Link>
          </li>
          <li>
            <Link href="/">Register</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
