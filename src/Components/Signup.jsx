import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {

    const {createUser}= useContext(AuthContext)

    const handleSignUp = e =>{
        e.preventDefault()
        const form= e.target
        const email= form.email.value;
        const password= form.password.value;
        console.log(password,email)
        createUser(email,password)
        .then(result => {
            console.log(result.user)
            //new user has been created
            const createdAt = result.user?.metadata?.creationTime

            const user ={email,createdTime: createdAt}
            fetch('http://localhost:5000/user',{
      method:'POST',
      headers:{
        'content-type': 'application/json',
      },
      body:JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data => {
      console.log('inside data',data)
      if (data.insertedId){
        Swal.fire({
            title: 'success!',
            text: 'yes! New User of coffee added',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          form.reset()
         }
    })
        })
        .catch(error=>{
            console.error(error)
        })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">SignUp now!</h1>
          
        </div>
        <div className="card  w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
