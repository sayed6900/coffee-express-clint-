import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,newCoffee,setNewCoffee }) => {
  const {_id, name, quantity, supplier, available, taste, details, photo } = coffee;

    const handleDelete = _id =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
            fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            if(data.deletedCount >0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Coffee has been deleted.",
                    icon: "success"
                  });
                  const remainingCoffee= newCoffee.filter(cof => cof._id !== _id )
                  setNewCoffee(remainingCoffee)
            }
        })
            }
          });
    }

  return (
    (<div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-52 w-40" src={photo} alt="Coffee Pic" />
        </figure>
        <div className="text-justify pl-8">
          <h2 className="card-title">{name} </h2>
          <p>Details: {details} </p>
          <p>Taste: {taste} </p>
          <p>Available Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <div className=" pt-8 justify-start">
            <button className="btn"> Order Now</button>
          </div>
        </div>
        {/* Buttons */}
        <div className="grid grid-cols-1 pl-20">
          <button className="btn btn-active">View</button>
          <Link to={`/updateCoffee/${_id}`} >
          <button className="btn btn-outline">Edit</button>
          </Link>
          <button onClick={()=> handleDelete(_id)} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>)
  );
};

export default CoffeeCard;
