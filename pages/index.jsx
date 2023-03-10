import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Shirts from "./Shops/Shirts";
import StudyBuddy from "./Shops/StudyBuddy";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div class="relative">
        <div className="fixed top-0 left-0 right-0">
          <NavBar />
        </div>
        <div>
          <Shirts />
          <StudyBuddy />
        </div>
      </div>
    </>
  );
}
