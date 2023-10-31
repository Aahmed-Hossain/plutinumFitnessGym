import { Link } from 'react-router-dom';
import login from '../../assets/loginChef.jpg'

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);
    }
    return (
        <div className="hero">
      <img className='' src={login} alt="" />
    <div className="card-body border">
        <h1 className='text-5xl text-center font-bold text-white'>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Sign In"  className='bg-[#FF3811] py-2 rounded-md text-white font-semibold text-md'/>
        </div>
      </form>
      <h3 className='text-center text-white my-2'>New to car Doctor? <Link to={'/signup'} className='text-white font-bold hover:link'>  Sign Up</Link></h3>
    </div>
  </div>
    );
};

export default Login;