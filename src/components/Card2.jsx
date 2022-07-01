import React from "react";
import { motion } from "framer-motion";

const Card2 = () => {
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
            Kimaye Clone
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Kimaye Clone is online store selling Fruits and
        Vegitables.
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

export default Card2;
