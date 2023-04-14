import React from 'react'
import {useLoaderData,Outlet} from 'react-router-dom'
function Carrers() {
  const data=useLoaderData();
  console.log(data);
  return (
    <>
        <div>Carrers</div>
        <div>
            {
                data.map(({title})=>{
                    return (<div>
                          {title}
                    </div>)
                })
            }
        </div>
        <div>
            <Outlet/>
        </div>
    </>
  )
}

export const LoaderFunction=async ()=>{
   const res=await fetch("http://localhost:4000/careers");
   return res.json();
}

export default Carrers