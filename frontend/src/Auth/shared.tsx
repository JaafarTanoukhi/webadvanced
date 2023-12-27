import { ErrorMessage, Field } from "formik"

export function FormInput({name,placeholder,type="text",className,size="base"}:{name:string,placeholder?:string,type?:string,className?:string,size?:"sm"|"base"|"lg"}){
  return (
      <div className={`flex flex-col gap-1 ${className??'w-full'}`}>
        <Field placeholder={placeholder} type={type} name={name} className={`bg-white/50 w-full  md:bg-white placeholder:text-violet-500 placeholder:text-sm text-violet-500 ${size==='sm'?"py-1 px-3":size==='base'?"py-2 px-5":"py-3 px-7"} focus:text-violet-500 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md hover:outline hover:outline-offset-1 hover:outline-violet-300`}></Field>
        <div className="text-red-600 font-Rob text-xs">
        <ErrorMessage name={name}></ErrorMessage>
        </div>
      </div>
    )
}

export function FormSeperator({text}:{text:string}){
    return (<div className="flex items-center justify-between my-4">
    <span className="w-3/5 border-b dark:border-gray-600 md:w-1/4" />
    <div className="text-xs text-gray-500 uppercase dark:text-gray-400 ">{text}</div>
    <span className="w-3/5 border-b dark:border-gray-600 md:w-1/4" />
  </div>)
}

export function FormButton({type="button",children}:{type?:"button" | "submit" | "reset" | undefined,children:string}){
return (<button type={type} className="px-6 py-2 w-full bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110 hover:border-2 hover:border-violet-300">{children}</button>)
}