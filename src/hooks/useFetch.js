import { useEffect,useState } from "react";

function useFetch(url){
  const [data,setData] =useState(null)
  const [isPending,setIsPending] =useState(false)
  const [error,setError] =useState (null)


useEffect(()=>{
    const getData =async ()=>{
      setIsPending(true)
       try{
        const req =await fetch(url)
        if(!req.ok){
            throw new Error ("404 Page not found.Maybe it's on vaction?")
        }
        const response =await req.json()
        setData(response)
        setIsPending(false)
       }catch(error){
        console.log(error.message);
        setError(error.message)
       }
    }

    getData()
},[url])
 return {data,isPending,error}
}

export {useFetch}