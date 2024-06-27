import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
   const coffee = useLoaderData()
   const {_id,name,quantity,supplier,available,taste,details,photo} = coffee

   const handleUpdateCoffee = e=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value
    const quantity= form.quantity.value
    const supplier= form.supplier.value
    const available= form.available.value
    const taste = form.taste.value
    const details = form.details.value
    const photo= form.photo.value

    const newUpdateCoffee={name,quantity,supplier,available,taste,details,photo}
    console.log(newUpdateCoffee)
    fetch(`http://localhost:5000/coffee/${_id}`,{
  method:'PUT',
  headers:{
    'content-type': 'application/json',
  },
  body:JSON.stringify(newUpdateCoffee)
})
.then(res=> res.json())
.then(data => {
  console.log('inside data',data)
  if (data.modifiedCount>0){
    Swal.fire({
        title: 'success!',
        text: 'yes! New coffee added',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      form.reset()
   
  }
})
}

    return (
        <div className="bg-lime-100">
        <h1 className="text-2xl font-bold p-6">Update Coffee: {name} </h1>
           <form onSubmit={handleUpdateCoffee}>
           <div className="p-2 ">
            <input type="text" placeholder="Coffee Name" defaultValue={name} name="name" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Quantity" defaultValue={quantity} name="quantity" className="input input-bordered w-full max-w-xs" />
            </div>
            
            <div className="p-2 ">
            <input type="text" placeholder="Supplier" defaultValue={supplier} name="supplier" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Available Coffee" defaultValue={available} name="available" className="input input-bordered w-full max-w-xs" />
            </div>
            
            <div className="p-2 ">
            <input type="text" placeholder="Taste" name="taste" defaultValue={taste} className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Details" name="details" defaultValue={details} className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
            <input type="text" placeholder="Photo Url" defaultValue={photo} name="photo" className="input input-bordered w-2/4 " />
            </div>
            <div className="p-4">
            <input type="submit" placeholder="Update coffee" className=" bg-stone-400 w-1/3 rounded-btn p-3 input-bordered " />
            </div>
           </form>
        </div>
    );
};

export default UpdateCoffee;