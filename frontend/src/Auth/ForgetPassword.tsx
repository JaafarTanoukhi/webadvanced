import { Input } from "./shared";

export default function ForgetPassword(){
    return <>
    <div className="w-1/4 h-1/4 bg-violet-200 font-Rob">
        <div className="w-full h-full bg-slate-50 m-2">
        <div className="w-full h-1/4 p-5 text-start whitespace-nowrap text-3xl font-extrabold font-Rob text-violet-600">Forgot Your Password?</div>
        <p className="px-5 py-2">Just enter your email and we will send you a link to recover your password</p>
        <hr></hr>
        <div className="flex px-5 py-2 justify-around items-center">
        <Input className="w-full bg-violet-50" placeholder="Email"></Input>
        <button type="submit" className="px-8 py-3 bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110 hover:border-2 hover:border-violet-300">Send</button>
        </div>
        </div>
    </div>
    </>
}