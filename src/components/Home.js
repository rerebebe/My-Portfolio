import { memo } from "react";
import UrlForm from "./UrlForm";

const Home = () => {
  return (
    <div className="py-20">
      <div className="lg:grid lg:grid-cols-2 mx-auto max-w-7xl lg:px-8 lg:gap-8 justify-center">
        <div className="lg:py-24 mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6">
          <h1 className="text-white text-4xl mt-4 font-extrabold sm:text-6xl lg:mt-6 tracking-tight">
            <span className="block">Link</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-beige-400 block">
              Shortner
            </span>
          </h1>
          <p className="text-white text-base text-gray-300 sm:mt-5 mt-3">
            Put in the link down below and it can be shortened! A practice built
            with React, Tailwind, and shrtcode API.
          </p>
          <UrlForm />
        </div>
        <div className="ImgAnime">
          <div className="mx-12 max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 mt-12 lg:relative">
            <img src="/lightbulb-png-836.png" alt="This is a lightBulb." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
// memo works as a higher order component, and you can simply just wrap your functional component export with it. Every time your application updates, memo will automatically perform a shallow comparison of props to determine if they've changed, and if the component needs to re-render.
