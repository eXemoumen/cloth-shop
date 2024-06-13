"use client";
import { motion, AnimatePresence } from "framer-motion";
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

const Main = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence >
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img src="./next.svg" alt="" className="w-8 h-8 object-contain" />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
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
              <Link href={'custmizer'}>
                <CustomButton
                  type="filled"
                  title="custom "
                  handleClick={() => (state.intro = false)}
                  customStyles="w-fit px-4 py-2.5 font-bold text-small"
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Main;
