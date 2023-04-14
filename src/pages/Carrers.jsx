import React from 'react'
import {useLoaderData,Outlet,Link} from 'react-router-dom'
function Carrers() {
  const data=useLoaderData();
  console.log(data);
  return (
    <>
        <div>Carrers</div>
        <div>
            {
                data.map(data=>(
                    <Link to={data.id.toString()} key={data.id}>
                          <p>{data.title}</p>
                          <p>Based in {data.location}</p>
                    </Link>
                ))
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