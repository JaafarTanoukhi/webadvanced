import { Link } from "react-router-dom";
import { FormSeperator, Input } from "./shared";

export default function Register(){
    return   <>
    <div className="w-1/2 bg-violet-300 font-Rob">
      <div className="w-full h-full m-2 border bg-slate-100">
        <div className="w-full m-5 h-1/4 p-2 text-start whitespace-nowrap text-7xl font-bold font-Rob text-violet-600">Register Account</div>
        <hr className="mb-5"></hr>
        <div className="flex gap-2 flex-col">
            <div className="flex w-full justify-around items-center">
        <Input placeholder="First Name"></Input>
          <Input placeholder="Last Name"></Input>
            </div>
            <div className="flex w-full justify-around items-center">
          <Input className="w-1/2 p-2" type="date"></Input>
            </div>
          
          <Input placeholder="Email" type="email"></Input>
          <Input placeholder="Username"></Input>
          <Input placeholder="Password" type="password"></Input>
        </div>
        <div className="flex justify-center items-center m-2">
          <button type="submit" className="px-6 py-2 w-3/4 bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110 hover:border-2 hover:border-violet-300">Submit</button>
        </div>
        <FormSeperator text="I Already Have An Account"></FormSeperator>
        <div className="flex justify-center items-center">
          <Link className="w-full h-full my-8 flex justify-center items-center" to={"/auth/login"}>
        <button className="px-6 py-2 w-3/4 bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110 hover:border-2 hover:border-violet-300">Go To Login</button>
          </Link>
        </div>
      </div>
    </div>
  </>
}

