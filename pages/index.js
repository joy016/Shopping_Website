import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Shirts from "./Shops/Shirts";
import StudyBuddy from "./Shops/StudyBuddy";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <Shirts />
      <StudyBuddy />
    </>
  );
}
