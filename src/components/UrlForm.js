import { memo, useState } from "react";
import LoadingIcon from "./LoadingIcon";
//import LoadingIcon2 from "./LoadingIcon2";

const UrlForm = () => {
  const [url, setUrl] = useState(""); //給input用的
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [resultUrl, setResultUrl] = useState({}); ////原始值為JSON object, this one is for the result
  const shortenUrl = `https://api.shrtco.de/v2/shorten?url=${url}`; // endpoint
  const validateUrl = () => {
    if (url.indexOf("http") === 0 || url.indexOf("www") === 0) {
      setError(false); //如果輸入進去的網址是這兩個開頭就不是error
    } else {
      setError(true);
    }
  };

  //下面開始是submit出去一連串動作
  async function handleSubmit(e) {
    e.preventDefault(); //prevent what's supposed to happen
    setLoading(true); // 先loading
    validateUrl(); //去檢查你輸入的是否為網址
    try {
      let response = await fetch(shortenUrl); //先等回應
      let result = await response.json(); //將回應結果轉成json物件
      console.log(result);
      setResultUrl(result); //結果轉成resultUrl
      setLoading(false); //停止loading
    } catch {
      //block of code to handle error
      setError(true); //上面不成功的話設定顯示error
      setLoading(false); //上面不成功的話也不會loading
    }
  }

  return (
    <div className="mt-10 sm:mt-12">
      <form onSubmit={handleSubmit}>
        <div className="sm:flex">
          <div className="min-w-0 flex-1">
            <label htmlFor="url" className="sr-only">
              URL Input : this is the label for input
            </label>
            <input
              type="url"
              name="url"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              placeholder="put your link here..."
              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-100 focus:ring-offset-gray-100"
            />
            {console.log(url)}
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              className="block py-3 px-4 h-12 rounded-md shadow bg-gradient-to-r from-red-400 to-yellow-200 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700  blur focus:blur focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-pink-300 focus:ring-offset-gray-400"
            >
              {loading ? <LoadingIcon /> : "Submit!"}
            </button>
          </div>
        </div>
      </form>

      {error && ( // 這邊開始是"form"的下面
        <p className="mt-3 text-md font-bold text-red-700 sm:mt-4">
          Please enter a valid URL.
        </p>
      )}
      {resultUrl.ok ? (
        <>
          <div className="mt-5 flex flex-col items-center justify-center rounded-md bg-white py-4">
            <p className="mt-3 text-base text-gray-900 sm:mt-4">
              Link Created!!
            </p>
            <a
              href={resultUrl.result.full_short_link} //從result的json object中選一個
              className="text-xl mt-2 text-green-500 hover:text-green-600 hover:underline"
            >
              {resultUrl.result.short_link}
            </a>
          </div>
        </>
      ) : (
        <p className="mt-3 text-sm text-gray-300 sm:mt-4">
          This website uses shrtcode API and by using it you agree to their
          Terms of Service.
        </p>
      )}
    </div>
  );
};

export default memo(UrlForm);
