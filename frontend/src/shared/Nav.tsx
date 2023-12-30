import { Link } from "react-router-dom";

export default function Nav(){
    return (<>
    <div className="p-2 w-11/12 flex justify-center items-center">
        <div className="w-full flex justify-center items-center gap-10">
            <Link to={'/feed'}>
            <div className="px-6 py-2  bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110 hover:border-2 hover:border-violet-300">Home</div>
            </Link>
            <Link to={'/collection'}>
            <div className="px-6 py-2  bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110 hover:border-2 hover:border-violet-300">My Collection</div>
            </Link>
            <Link to={'/canvas'}>
                <div className="px-6 py-2  bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110 hover:border-2 hover:border-violet-300">Create New Portfolio</div>
                </Link>
            
             </div>
             <div className="w-11/12 flex justify-end items-center">
             <Link to={'/account'}>
            <div className="px-6 py-2  bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110 hover:border-2 hover:border-violet-300">My Account</div>
            </Link>
             </div>
    </div>
    </>
    )
}