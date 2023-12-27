import { Link } from "react-router-dom";
import { FormSeperator, FormInput, FormButton } from "./shared";
import { Formik,Form, FormikHelpers } from "formik";
import * as Yup from 'yup'
import { SignInCredentials, useAuth } from "../Providers/AccountProvider";
import PageLoader from "../shared/PageLoader";

export default function Login() {
  const {SignIn}=useAuth();
  
  async function Submit(values:SignInCredentials,props:FormikHelpers<SignInCredentials>){
    await SignIn(values);
    props.setSubmitting(false);
    props.resetForm();
  }

  return (
    <>
      <div className="w-96 bg-violet-300 font-Rob">
        <div className="w-full h-full m-2 border bg-slate-100">
          <div className="w-full mt-5 text-center text-6xl font-black font-Rob text-violet-500">LOGIN</div>
          <hr className="mb-5"></hr>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={Submit}>
              {(props)=>(
                <Form>
                  <PageLoader isOn={props.isSubmitting}></PageLoader>
                  <div className="flex justify-center gap-2 items-start flex-col px-5 py-2">
                <FormInput name="username_email" placeholder="Username or Email"></FormInput>
            <FormInput name="password" placeholder="Password" type="password"></FormInput>
          <div className="w-full text-center m-2 font-medium text-violet-950">
            <Link className="opacity-20 hover:opacity-100" to={"/auth/forgetpassword"}>
              Can't remember my password?
            </Link>
          </div>
          <div className="flex justify-center items-center w-full">
            <FormButton type="submit">Login</FormButton>
          </div>
            </div>
            </Form>
            )}
            </Formik>
          <FormSeperator text="I Don't Have An Account"></FormSeperator>
          <div className="flex justify-center items-center px-5 py-4">
            <Link className="w-full flex justify-center items-center" to={"/auth/register"}>
          <FormButton>Register Account</FormButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const initialValues:SignInCredentials={
  username_email: "",
  password: ""
}

const validationSchema=Yup.object().shape({
  username_email:Yup.string().required("Please Input a valid username or email"),
  password:Yup.string().required("Please input a valid password")
})