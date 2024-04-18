import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();

  return (
    <div>
      <img src={phone.image} alt={phone.name} />
      <h2>{phone.name}</h2>
      <h3>{phone.price}</h3>
      <p>{phone.description}</p>
    </div>
  );
};

export default Phone;
