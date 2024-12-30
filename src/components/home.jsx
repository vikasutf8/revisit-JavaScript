import { useRef } from "react"
import { z}from 'zod'
export default function Home(){
    const userSchema =z.Object({
        username :z.String()
    })
    // const inputRef =useRef();
    return(
        <>
            <main>
               <form onSubmit={
                (e)=>{
                    e.preventDefault();
                    // console.log(inputRef.current?.value)
                    const formdata =new FormData(e.currentTarget)
                    const formValues =Object.fromEntries(formdata)
                    // clg(formValues)
                    const result = userSchema.safeParse(formValues)
                    if(result.success)result.data.username
                }
               }>
               <input  
            //    ref={inputRef}
                type="text" 
                name="username"/>
               </form>
            </main>
        </>
    )
}