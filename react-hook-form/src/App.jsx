import React from 'react'
import { useForm } from "react-hook-form"

const App = () => {

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  const handleFormSubmit = async (data) => {
    await new Promise((res)=> setTimeout(res, 5000))
    console.log(data);
  }

  return (

    <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label htmlFor="">first name</label>
        <input {...register('firstName', { required: 'First name is required', minLength: { value: 3, message: "min len should be 3" }, maxLength: { value: 10, message: "Max length should be 10" } })} type="text" placeholder='enter your name' />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label htmlFor="">last name</label>
        <input {...register('lastName', {pattern: {value: /^[A-Za-z]+$/i, message: "last name is not as per rules"}})} type="text" placeholder='enter your name' />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <button  type='submit' disabled={isSubmitting}>{isSubmitting ? "submitting" : "submit"}</button>
    </form>

  )
}

export default App