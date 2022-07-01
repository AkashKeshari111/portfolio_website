import React from "react";
import { motion } from "framer-motion";

const Card1 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a href="hello">
        <img
          class="rounded-t-lg w-full"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="helo">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Myntra Clone
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Myntra Clone is a online selling cloths and home
        decorative priducts
        </p>
        <a
          href="hello"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Card1;