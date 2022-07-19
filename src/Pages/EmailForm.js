import { memo, useState } from "react";
import LoadingIcon from "../components/LoadingIcon";

const EmailForm = () => {
  const [mail, setEmail] = useState(""); //給input用的
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="mt-10 sm:mt-10">
      <form
        action="https://formsubmit.co/c9356d0ddb3ecaa7aacc08ebc627c26e"
        method="POST"
      >
        <div className="sm:flex">
          <div className="min-w-0 flex-1 text-white text-md">
            <label htmlFor="email">Email:</label>
            <input
              type="hidden"
              name="_autoresponse"
              value="your custom message"
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Your E-mail ..."
              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-100 focus:ring-offset-gray-100"
              required
            />
            <label htmlFor="message">message:</label>
            <textarea
              type="text"
              name="message"
              placeholder="say something to me!"
              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-100 focus:ring-offset-gray-100"
              required
            />
          </div>
          <div className="mt-10 sm:mt-28 sm:ml-3">
            <button
              type="submit"
              className="block py-3 px-4 h-12 rounded-md shadow bg-gradient-to-r from-indigo-400 to-pink-300 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700 blur focus:blur focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-pink-300 focus:ring-offset-gray-400"
            >
              {loading ? <LoadingIcon /> : "Contact me!"}
            </button>
          </div>
        </div>
      </form>

      {error && ( // 這邊開始是"form"的下面
        <p className="mt-3 text-md font-bold text-red-700 sm:mt-4">
          Please enter a valid E-mail.
        </p>
      )}
    </div>
  );
};

export default memo(EmailForm);
