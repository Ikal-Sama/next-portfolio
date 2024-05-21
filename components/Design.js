import { DesignCard } from "./DesignCard";

const Design = () => {
  return (
    <section className="my-20 container" id="projects">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center  gap-2">
          <h1 className="text-2xl font-bold">Recent Design</h1>
          <div className="dot"></div>
        </div>
        <p className=" text-zinc-500 text-lg mb-10">
          My recent design projects i made through out my web developement
          career.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <DesignCard />
      </div>
    </section>
  );
};

export default Design;
