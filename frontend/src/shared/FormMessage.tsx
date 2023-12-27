import { useState } from "react";

type FormMessageProps={
    error?:string,
    success?:string,
    default?:string
}

type Message={
    className:string
    message:string,
}

const errorClassName="font-Rob font-semibold text-red-600"
const successClassName="font-Rob font-semibold text-green-600"
const defaultClassName="font-Rob font-semibold text-black"

export default function useFormMessage(props?:FormMessageProps){
    const [currentMessage,setCurrentMessage]=useState<Message>({className:defaultClassName,message:props?.default??""})

    function setError(){setCurrentMessage({className:errorClassName,message:props?.error??"Submission Failed"})}
    function setSuccess(){setCurrentMessage({className:successClassName,message:props?.success??"Submission Successfull"})}
    function setDefault(){setCurrentMessage({className:defaultClassName,message:props?.default??""})}

    return {setError:setError,setSuccess:setSuccess,setDefault:setDefault,
    render:<div className={currentMessage.className}>{currentMessage.message}</div>
    }
}