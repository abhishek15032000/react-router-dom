import React from 'react'
import {useLoaderData} from 'react-router-dom';
function CarrersDetails() {
  // const {id}=useParams()
  const data=useLoaderData();
  return (
    <div>CarrersDetails
        <h1>Carrer Details for {data.title}</h1>
        <p>starting Salary : {data.salary}</p>
        <p>Location:{data.location}</p>
        <div className="details">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem ea saepe corporis cum praesentium quasi cupiditate nostrum, maiores impedit laudantium fugit earum sequi dicta odit minima sit? Rerum unde inventore earum voluptatibus in qui maxime a corrupti, suscipit nisi placeat optio laboriosam, ab iusto et odio amet dolorum ipsam.</p>
        </div>
    </div>
  )
}

export const CarrerLoaderDetails= async ({params})=>{
    const {id}=params;
    const res=await fetch("http://localhost:4000/careers/"+id);
    return res.json();
}

export default CarrersDetails;