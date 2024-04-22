import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();

  return (
    <div className="m-10">
      <h1 className="text-3xl text-center text-purple-600">
        Hot hot cold coffee : {coffees.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
