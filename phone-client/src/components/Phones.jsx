import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();
  console.log(phones);
  return (
    <div>
      Phones : {phones.length}
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>
            <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phones;
