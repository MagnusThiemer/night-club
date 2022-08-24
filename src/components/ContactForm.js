import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import AddressBox from './AddressBox';

const ContactForm = () => {
  const [success, setSuccess] = useState(false)
  const schema = yup.object({
    name: yup.string().required('Please enter name').matches(/^[A-Za-zÀ-ÿ ]+$/, 'Name may only contain letters'),
    email: yup.string().required('Please enter email').email().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/, 'Invalid email'),
    comment: yup.string().required('Please enter a comment'),
  }).required()

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = () => {
    let myForm = document.getElementById("contactForm");
    let formData = new FormData(myForm);
    fetch("http://localhost:4000/contact_messages", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    setSuccess(true)
}

  return ( 
    <div className="flex flex-col md:flex-row gap-6">
      <form action="POST" className="flex flex-col flex-1 items-end" onSubmit={handleSubmit(onSubmit)} id='contactForm'>
        <input 
            {...register('name')}
            id="name2" 
            name="name" 
            type="text" 
            placeholder="Your name (required)" 
            onChange={() => setSuccess(false)}
            className="w-full bg-black border border-white text-white p-4"/>
        {errors.name && <p className='text-white'>{errors.name.message}</p>}
          <input 
            {...register('email')}
            id="email2" 
            name="email" 
            type="text" 
            placeholder="Your Email (required)" 
            onChange={() => setSuccess(false)}
            className="mt-6 w-full bg-black border border-white text-white p-4"/>
          {errors.email && <p className='text-white'>{errors.email.message}</p>}
          <input 
            {...register('website')}
            id="website2" 
            name="website" 
            type="text" 
            placeholder="Your Website" 
            onChange={() => setSuccess(false)}
            className="mt-6 w-full bg-black border border-white text-white p-4"/>
          <textarea 
            {...register('comment')}
            id="comment2" 
            name="comment" 
            type="text" 
            placeholder="Your comment (required)" 
            onChange={() => setSuccess(false)}
            className="mt-6 w-full bg-black border border-white text-white p-4 h-48"/>
          {errors.comment && <p className='text-white'>{errors.comment.message}</p>}
          <button className='mt-6 text-white py-4 px-8 border-y-2 border-y-white border-x-transparent max-w-2xl '>
            Submit
          </button>
          {success && <p className='text-white'>Thank you for your message</p>}
      </form>
      <div className='flex-1'>
        <AddressBox />
      </div>
    </div>
   );
}
 
export default ContactForm;