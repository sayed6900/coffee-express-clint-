
import Swal from 'sweetalert2'
const AddCoffee = () => {


    const handleAddCoffee = e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const quantity= form.quantity.value
        const supplier= form.supplier.value
        const available= form.available.value
        const taste = form.taste.value
        const details = form.details.value
        const photo= form.photo.value

        const newCoffee={name,quantity,supplier,available,taste,details,photo}
        console.log(newCoffee)
        fetch('http://localhost:5000/coffee',{
      method:'POST',
      headers:{
        'content-type': 'application/json',
      },
      body:JSON.stringify(newCoffee)
    })
    .then(res=> res.json())
    .then(data => {
      console.log('inside data',data)
      if (data.insertedId){
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
        <h1 className="text-2xl font-bold p-6">Add New Coffee</h1>
           <form onSubmit={handleAddCoffee}>
           <div className="p-2 ">
            <input type="text" placeholder="Coffee Name" name="name" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered w-full max-w-xs" />
            </div>
            
            <div className="p-2 ">
            <input type="text" placeholder="Supplier" name="supplier" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Available Coffee" name="available" className="input input-bordered w-full max-w-xs" />
            </div>
            
            <div className="p-2 ">
            <input type="text" placeholder="Taste" name="taste" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Details" name="details" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
            <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered w-2/4 " />
            </div>
            <div className="p-4">
            <input type="submit" placeholder="Add coffee" className=" bg-stone-400 w-1/3 rounded-btn p-3 input-bordered " />
            </div>
           </form>
        </div>
    );
};

export default AddCoffee;