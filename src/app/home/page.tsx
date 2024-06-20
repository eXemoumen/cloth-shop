"use client";
import { motion, AnimatePresence,useInView,useScroll,useMotionTemplate } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store";
import Image from "next/image";
import Costum from "../custmizer/page";
import CustomButton from "../components/CustonButon";
import Link from "next/link";
import CanvasModel from "../Canvas/page";
import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
// import { Shopping } from "@/components/shopcards";

const Main = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      <div className="h-screen w-screen flex max-sm:flex-col">
        {snap.intro && (
          <motion.section className="home " {...slideAnimation("left")}>
            <motion.header {...slideAnimation("down")}>
              <img src="./next.svg" alt="" className="w-8 h-8 object-contain" />
            </motion.header>

            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text max-sm:text-6xl">
                  LETS <br className="xl:block hidden" /> DO IT
                </h1>
              </motion.div>
              <motion.div
                {...headContainerAnimation}
                className="flex flex-col gap-6"
              >
                <p className="max-w-md font-normal text-gray-600 text-base">
                  Create your unique and exclusive shirt with our brand-new 3D
                  customization tool. <strong>Unleash your imagination</strong>{" "}
                  and define your own style.
                </p>
                <Link href={"custmizer"}>
                  <CustomButton
                    type="filled"
                    title="custom "
                    handleClick={() => (state.intro = false)}
                    customStyles="w-fit px-4 py-2.5 font-bold text-small"
                  />
                </Link>
                <Link href={""}>
                  <Button size="lg" className="mt-6">
                    Shop Now
                  </Button>
                </Link>
                <Link href={"/admin"}>
                  <Button size="lg" className="mt-6">
                   add prodcut
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.section>
        )}
        <motion.div
          className="w-[50%] h-screen absolute right-0 max-sm:w-[100%] max-sm: "
          {...slideAnimation("right")}
        >
          <CanvasModel />
        </motion.div>
      </div>{" "}
      <div className="">
        <motion.section {...slideAnimation}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Card />
          </motion.div>
        </motion.section>
      </div>
    </AnimatePresence>
  );
};

export default Main;
