import { Link } from "react-router-dom";
import { FormSeperator, FormInput, FormButton } from "./shared";
import { Form, Formik, FormikHelpers } from "formik";
import { RegisterCredentials, useAuth } from "../Providers/AccountProvider";
import * as Yup from "yup";
import PageLoader from "../shared/PageLoader";

export default function Register() {
  const { RegisterAccount } = useAuth();

  async function Submit(values: RegisterCredentials, props: FormikHelpers<RegisterCredentials>) {
    await RegisterAccount(values);
    props.setSubmitting(false);
  }

  return <div className="w-auto bg-violet-300 font-Rob">
      <div className="w-full m-2 border bg-slate-100">
        <div className="w-full m-3 p-2 text-start whitespace-nowrap text-4xl font-bold font-Rob text-violet-600">Register Account</div>
        <hr className="mb-3"></hr>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={Submit}>
          {(props) => (
            <Form>
              <PageLoader isOn={props.isSubmitting}></PageLoader>
              <div className="flex flex-col justify-center items-center gap-2 px-5 py-2">
                <div className="flex w-full justify-around items-center gap-2">
                  <FormInput name="firstname" placeholder="First Name"></FormInput>
                  <FormInput name="lastname" placeholder="Last Name"></FormInput>
                </div>
                  <FormInput size="lg" name="birthdate" className="w-1/2" type="date"></FormInput>

                <FormInput name="email" placeholder="Email" type="email"></FormInput>
                <FormInput name="username" placeholder="Username"></FormInput>
                <FormInput name="password" placeholder="Password" type="password"></FormInput>
              <div className="flex justify-center items-center">
                <FormButton type="submit">Register Account</FormButton>
              </div>
              </div>
            </Form>
          )}
        </Formik>
        <FormSeperator text="I Already Have An Account"></FormSeperator>
        <div className="flex justify-center items-center">
          <Link className="w-full flex justify-center items-center px-5 py-3" to={"/auth/login"}>
            <FormButton>Go To Login</FormButton>
          </Link>
        </div>
      </div>
    </div>
}


const initialValues: RegisterCredentials = {
  firstname: "",
  lastname: "",
  birthdate: "",
  email: "",
  username: "",
  passsword: ""
}

const validationSchema = Yup.object().shape({
  firstname: Yup.string().trim().required('First name is required'),
  lastname: Yup.string().trim().required('Last name is required'),
  birthdate: Yup.date().nullable().required('Birthdate is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  username: Yup.string().trim().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    ),
});
