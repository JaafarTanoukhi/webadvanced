import { Form, Formik, FormikHelpers } from "formik";
import { FormButton, FormInput } from "./shared";
import * as Yup from 'yup'
import { useAuth } from "../Providers/AccountProvider";
import useFormMessage from "../shared/FormMessage";

export default function ForgetPassword() {
    const { SendRecoverEmail } = useAuth();
    const formMessage=useFormMessage();

    async function Submit(values: { email: string }, props: FormikHelpers<{ email: string }>) {
        const response = await SendRecoverEmail(values);
        if (response.ok) {
            formMessage.setSuccess();
            props.resetForm();
        }
        else{formMessage.setError();}

        props.setSubmitting(false);
    }
    return <>
        <div className="bg-violet-200 font-Rob">
            <div className="w-full h-full bg-slate-50 m-2">
                <div className="w-full h-1/4 p-5 text-start whitespace-nowrap text-3xl font-extrabold font-Rob text-violet-600">Forgot Your Password?</div>
                <p className="px-5 py-2">Just enter your email and we will send you a link to recover your password</p>
                <hr></hr>
                <div className="px-5 py-2">
                {formMessage.render}
                </div>
                <Formik initialValues={{ email: "" }} validationSchema={Yup.object().shape({ email: Yup.string().email("Please input a valid email").required("Please input a valid email") })} onSubmit={Submit}>
                    <Form>
                        
                        <div className="flex px-5 py-2 justify-around gap-2 items-center">
                            <div className="w-3/4">
                            <FormInput name="email" placeholder="Email"></FormInput>
                            </div>
                            <div className="w-1/4">
                            <FormButton type="submit">Submit</FormButton>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    </>
}