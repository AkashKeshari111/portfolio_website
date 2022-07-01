import React from "react";
import { motion } from "framer-motion";

const Card = () => {
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
          src="data:image/png;base64,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"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="helo">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Pharmeasy Clone
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Pharmeasy is an online web application that provides
        online medicine and health related products.
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

export default Card;
