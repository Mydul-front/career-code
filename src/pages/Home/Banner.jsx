import React from "react";
import { motion } from "motion/react";
import team1 from '../../assets/dev1.jpg';
import team2 from '../../assets/dev2.jpg';


const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col justify-center lg:flex-row-reverse">
        <div className="flex-1 justify-center">
          <motion.img
            src={team1}
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="max-w-sm rounded-t-4xl rounded-r-4xl border-l-6 border-b-8 border-white shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [150, 100, 150] }}
            transition={{ duration: 10, delay: 2, repeat: Infinity }}
            className="max-w-sm rounded-t-4xl rounded-r-4xl border-l-6 border-b-8 border-white shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ rotate: 360 }}
            transition={{
              repeatType: "loop",
              duration: 15,
            }}
            className="text-5xl font-bold"
          >
            Leatest{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#ff9f33 ", "#33ffb5"],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              job
            </motion.span>{" "}
            for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
