import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffee_name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffee = {
      coffee_name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // console.log(coffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="w-3/4 mx-auto p-10 md:p-24 bg-[#f4f3f0] space-y-4">
      <h2 className="text-4xl text-center">Add Coffee</h2>
      <p className=" text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt
        quisquam veritatis velit vel aliquid dolorum similique minus iure porro
        unde ipsam, voluptate consectetur doloremque dolores amet nihil,
        consequatur natus?
      </p>
      <form onSubmit={handleSubmit}>
        {/* form name and quantity row */}

        <div className="md:flex items-center gap-2">
          <div className="form-control w-full">
            <label htmlFor="name" className="label">
              <span className="label-text text-lg">Coffe Name</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter Coffee Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label htmlFor="quantity" className="label">
              <span className="label-text text-lg">Avaiable Quantity</span>
            </label>
            <input
              id="quantity"
              type="text"
              name="quantity"
              placeholder="Enter Available Quantity"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* form supplier and taste row */}
        <div className="md:flex items-center gap-2">
          <div className="form-control w-full">
            <label htmlFor="supplier" className="label">
              <span className="label-text text-lg">Supplier Name</span>
            </label>
            <input
              id="supplier"
              type="text"
              name="supplier"
              placeholder="Enter Supplier Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label htmlFor="taste" className="label">
              <span className="label-text text-lg">Taste</span>
            </label>
            <input
              id="taste"
              type="text"
              name="taste"
              placeholder="Enter Taste"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* form category and details row */}
        <div className="md:flex items-center gap-2">
          <div className="form-control w-full">
            <label htmlFor="category" className="label">
              <span className="label-text text-lg">Category</span>
            </label>
            <input
              id="category"
              type="text"
              name="category"
              placeholder="Enter Category Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label htmlFor="details" className="label">
              <span className="label-text text-lg">Details</span>
            </label>
            <input
              id="details"
              type="text"
              name="details"
              placeholder="Enter Available Quantity"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* form photo url */}
        <div className="md:flex items-center gap-2">
          <div className="form-control w-full">
            <label htmlFor="photo" className="label">
              <span className="label-text text-lg">Photo URL</span>
            </label>
            <input
              id="photo"
              type="text"
              name="photo"
              placeholder="Enter Photo URL"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* submit */}
        <div className="mt-8">
          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-primary w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
