import { Link } from "react-router-dom";
import Placeholder from "../../assets/imgs/LoginPageBackground.jpg";

export default function Collection() {
    return (
        <div className="w-11/12 bg-violet-500 font-Rob m-5">
            <div className="w-full min-h-96 m-2 border bg-slate-200">
                <div className="bg-slate-50 p-5">
                    <div className="font-Rob text-start text-3xl text-indigo-600">My Collection</div>
                </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-10 p-5 mt-10">
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
            </div>
        </div>
    )

}

export function Card({ Username = "Username", Description = "Description",id }: { Username?: string, Description?: string,id:string }) {
    return (
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-violet-gray-500 bg-clip-border text-white shadow-lg shadow-violet-gray-500/40 bg-gradient-to-r from-violet-500 to-violet-600">
                <img className="cover m-auto" src={Placeholder}></img>
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {Username}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {Description}
                </p>
            </div>
            <div className="p-6 pt-0">
                <Link to={`/portfolio/${id}`} data-ripple-light="true" type="button" className="select-none rounded-lg bg-violet-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    View Portfolio
                </Link>
            </div>
        </div>)
}