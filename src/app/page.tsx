import Image from "next/image";
import Main from "./home/page";
import CanvasModel from "./Canvas/page";
import Costum from "./custmizer/page";
import Shopping from "@/components/shopcards";
export default function Home() {
  return (
    <main className="app transition-all ease-in">
      <Main></Main>
     <Shopping/>
     
    </main>
  );
}
