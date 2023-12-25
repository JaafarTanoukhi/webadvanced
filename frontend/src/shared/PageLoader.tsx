export default function PageLoader({isOn}:{isOn:boolean}){
    if(isOn) return (<div className="loader border-t-2 rounded-full border-gray-500 bg-violet-300 animate-spin
    aspect-square w-8 flex justify-center items-center text-violet-700 font-Rob">AJ</div>)
}