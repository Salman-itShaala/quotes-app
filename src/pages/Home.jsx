import React from "react";

const Home = () => {
  return (
    <div className="min-h-[100vh] w-full bg-zinc-200 text-slate-900 dark:bg-zinc-900 dark:text-slate-100 p-4">
      <div className="h-60 w-full">
        <img
          src="https://images.pexels.com/photos/3041347/pexels-photo-3041347.jpeg?cs=srgb&dl=pexels-rickyrecap-3041347.jpg&fm=jpg"
          alt="Motivational image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col w-1/2 gap-8 pt-8 ">
        <div className="dark:bg-slate-800 bg-slate-400 p-4 rounded-md shadow-md shadow-slate-600">
          <p className="w-full text-2xl ">
            If You Can'T Make It Good, At Least Make It Look Good.
          </p>
          <p className="text-end dark:text-slate-400 text-slate-700 pt-2">
            - Bill Gates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
