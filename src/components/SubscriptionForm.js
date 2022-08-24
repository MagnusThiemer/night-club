import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import * as yup from 'yup';
import { useEffect, useState } from 'react';

const SubscriptionForm = () => {
  const schema = yup.object({
    email: yup.string().email('Please enter a valid email').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/, 'Please enter a valid email address').required('Please enter a valid email address'),
  }).required()

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [isSuccessful, setIsSuccessful] = useState(false)

  const onSubmit = async (data) => {
    let myForm = document.getElementById("subscribeForm");
    let formData = new FormData(myForm);
    fetch("http://localhost:4000/newsletters", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => {
      setIsSuccessful(true)
    })
  }

  return ( 
    <>
    <form action="POST" className="flex justify-center gap-6 mb-6" onSubmit={handleSubmit(onSubmit)} id='subscribeForm'>
      <input 
        type="text" 
        className="border-b-2 border-b-white text-white bg-black w-60 py-4 focus:border-none"
        {...register('email')}
        placeholder='Email'
        id='email'
        onChange={() => {setIsSuccessful(false)}}
        />
      <button className="text-white py-4 px-8 border-y-2 border-y-white border-x-transparent">Subscribe</button>
    </form>
    {errors.email && <p className='text-white text-center'>{errors.email.message}</p>}
    {isSuccessful && <p className='text-white text-center'>Thank you for subscribing to our newsletter!</p>}
    </>
   );
}
 
export default SubscriptionForm;