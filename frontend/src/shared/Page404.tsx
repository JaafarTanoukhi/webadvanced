import Error404 from '../../assets/imgs/error-404.svg'
export default function Page404(){
    return <><div className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-600 text-gray-50 p-5">
  <div className="">
    <div className="group-hover:scale-110 w-full h-60 bg-violet-400 duration-500 p-10" ><img src={Error404}></img></div>
    <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
      <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-violet-900" />
      <span className="text-xl font-bold">Page Not Found!</span>
      <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
        Oops you might have followed a broken link. Click here to go back to the home page!
      </p>
    </div>
  </div>
</div>

    </>
}