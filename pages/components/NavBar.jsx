import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-cyan-900 h-14 text-white space-x-4 flow-root pt-4">
      <ul>
        <div className="flex justify-between items-center px-4 w-96 float-left">
          <li>
            <Link href="/" class="hover:text-green-300">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/" class="hover:text-green-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/home/MainHome" class="hover:text-green-300">
              About
            </Link>
          </li>
        </div>

        <div className="flex justify-between items-center px-4 w-60 float-right">
          <li>
            <Link href="/" class="hover:text-green-300">
              <FaShoppingCart />
            </Link>
          </li>
          <li>
            <Link href="/account/Login" class="hover:text-green-300">
              Login
            </Link>
          </li>
          <li>
            <Link href="/" class="hover:text-green-300">
              Register
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
