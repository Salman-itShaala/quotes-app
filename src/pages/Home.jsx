import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "../slice/quoteSlice";

const Home = () => {
  const dispatch = useDispatch();

  const quoteState = useSelector((state) => state.quotes);

  useEffect(() => {
    if (quoteState.status === "idle") {
      dispatch(getQuotes());
    }
  }, [quoteState.status, dispatch]);

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className="min-h-[100vh] w-full bg-zinc-200 text-slate-900 dark:bg-zinc-900 dark:text-slate-100 p-4">
      <div className="h-60 w-full relative">
        <img
          src="https://images.pexels.com/photos/3041347/pexels-photo-3041347.jpeg?cs=srgb&dl=pexels-rickyrecap-3041347.jpg&fm=jpg"
          alt="Motivational image"
          className="w-full h-full object-cover rounded-lg"
        />
        <button
          onClick={() => toggleTheme()}
          className="border border-slate-800 px-4 py-2 rounded-sm absolute top-2 left-2 bg-slate-400"
        >
          Change theme
        </button>
      </div>
      <div className="flex flex-col w-1/2 gap-8 pt-8">
        {quoteState.quotes.slice(0, 10).map((quote) => {
          return (
            // todo --> add QuoteCard component
            //    <QuoteCard />
            <div className="dark:bg-slate-800 bg-slate-400 p-4 rounded-md shadow-md shadow-slate-600">
              <p className="w-full text-2xl ">{quote.quote}</p>
              <p className="text-end dark:text-slate-400 text-slate-700 pt-2">
                - {quote.author}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function QuoteCard() {
  return (
    <div className="dark:bg-slate-800 bg-slate-400 p-4 rounded-md shadow-md shadow-slate-600">
      <p className="w-full text-2xl ">{quote.quote}</p>
      <p className="text-end dark:text-slate-400 text-slate-700 pt-2">
        - {quote.author}
      </p>
    </div>
  );
}

export default Home;
