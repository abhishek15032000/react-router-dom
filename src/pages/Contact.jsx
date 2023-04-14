import React from 'react'
import {Form,redirect,useActionData} from 'react-router-dom';
function Contact() {
  const data=useActionData();
  return (
    <div> 
         <h3>Contact Us</h3>
         <Form method="post" action="/help/contact">
               <label>
                   <span>Your email:</span>
                   <input type="email" name="email" required/>
               </label>
               <label>
                  <span>Your message:</span>
                  <textarea name="message" required style={{color:"black"}}></textarea>
               </label>
               <button>Submit</button>
               {data && data.error && <p>{data.error}</p>}
         </Form>
    </div>
  )
}

export const getFormData= async ({request})=>{
     const data=await request.formData();
     console.log(data);
     const submission={
      email:data.get('email'),
      message:data.get('message')
     }
     console.log(submission);
     if(submission.message.length<10){
      return {error:"Message must be over 10 characters long "}
     }
     return redirect('/');
}

export default Contact