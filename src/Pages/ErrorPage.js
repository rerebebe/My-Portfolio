function ErrorPage() {
  return (
    <div className="py-20">
      <div className="lg:grid lg:grid-cols-2 mx-auto max-w-7xl lg:px-8 lg:gap-8 justify-center ">
        <h1 className="text-white text-6xl mt-4 font-extrabold sm:text-6xl lg:mt-6 tracking-tight lg:py-24 mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6">
          <span className="block">Error!!</span>
          <span>Page Not Found!!</span>
        </h1>
        <div className="mx-auto max-w-md px-6 mt-4 mr-5 sm:max-w-2xl sm:mx-auto sm:px-6 lg:py-20 justify-center">
          <img src="/crying.png" alt="This is a unicorn." />
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
