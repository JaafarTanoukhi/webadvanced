import { Link } from "react-router-dom";
import { FormSeperator, Input } from "./shared";
import { Formik,Form } from "formik";
import Yup from 'yup'

export default function Login() {
  return (
    <>
      <div className="w-1/4 bg-violet-300 font-Rob">
        <div className="w-full h-full m-2 border bg-slate-100">
          <div className="w-full mt-5 h-1/4 p-2 text-center text-7xl font-black font-Rob text-violet-500">LOGIN</div>
          <hr className="mb-5"></hr>
          <div className="flex justify-center gap-2 items-start flex-col">
            <Formik>
              <Form>
            <Input placeholder="Username or Email"></Input>
            <Input placeholder="Password" type="password"></Input>
              </Form>
            </Formik>
          </div>
          <div className="text-center m-5 font-medium text-violet-950">
            <Link className="opacity-20 hover:opacity-100" to={"/auth/forgetpassword"}>
              Can't remember my password?
            </Link>
          </div>
          <div className="flex justify-center items-center m-2">
            <button type="submit" className="px-6 py-2 w-3/4 bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110 hover:border-2 hover:border-violet-300">Submit</button>
          </div>
          <FormSeperator text="I Don't Have An Account"></FormSeperator>
          <div className="flex justify-center items-center">
            <Link className="w-full h-full my-8 flex justify-center items-center" to={"/auth/register"}>
          <button className="px-6 py-2 w-3/4 bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110 hover:border-2 hover:border-violet-300">Register Account</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
