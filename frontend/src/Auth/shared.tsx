export function Input({placeholder,type="text",className}:{placeholder?:string,type?:string,className?:string}){
    return (<div className={`w-full flex justify-around items-center p-2`}>
    <input placeholder={placeholder} type={type} className={`bg-white/50 ${className||`w-3/4`}  md:bg-white placeholder:text-violet-500 placeholder:text-sm text-violet-500 py-3 px-5 focus:text-violet-500 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md hover:outline hover:outline-offset-1 hover:outline-violet-300`}></input>
  </div>)
}

export function FormSeperator({text}:{text:string}){
    return (<div className="flex items-center justify-between my-4">
    <span className="w-3/5 border-b dark:border-gray-600 md:w-1/4" />
    <div className="text-xs text-gray-500 uppercase dark:text-gray-400 ">{text}</div>
    <span className="w-3/5 border-b dark:border-gray-600 md:w-1/4" />
  </div>)
}