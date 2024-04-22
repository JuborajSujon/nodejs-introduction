import { useLoaderData } from "react-router-dom";

const Home = () => {
  const coffees = useLoaderData();

  console.log(coffees);
  return (
    <div>
      <h1 className="text-3xl text-purple-600">
        Hot hot cold coffee : {coffees.length}
      </h1>
    </div>
  );
};

export default Home;
