const CoffeeCard = ({ coffee }) => {
  console.log(coffee);
  const { coffee_name, quantity, supplier, taste, category, details, photo } =
    coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">Name: {coffee_name}</h2>
        <p>
          <span className="font-bold">Quantity:</span>
          {quantity}
        </p>
        <p>
          {" "}
          <span className="font-bold">Supplier:</span> {supplier}
        </p>
        <p>
          {" "}
          <span className="font-bold">Taste:</span> {taste}
        </p>
        <p>
          {" "}
          <span className="font-bold">Category:</span> {category}
        </p>
        <p>
          {" "}
          <span className="font-bold">Details:</span> {details}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
