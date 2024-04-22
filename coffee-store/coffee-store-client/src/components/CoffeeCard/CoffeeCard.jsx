import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const {
    _id,
    coffee_name,
    quantity,
    supplier,
    taste,
    category,
    details,
    photo,
  } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
          <button onClick={() => handleDelete(_id)} className="btn btn-accent">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
