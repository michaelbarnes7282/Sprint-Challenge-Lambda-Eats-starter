import React, { useState } from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import axios from 'axios'


export default function Form() {
  const { register, handleSubmit, errors } = useForm()
  const [post, setPost] = useState([])

  const onSubmit = data => {
    axios
      .post("https://reqres.in/api/users", data)
      .then(res => {
        setPost(res.data);
        console.log("success", post);
      })
        .catch(err => {
          console.log(err.res);
        });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Build Your Own Pizza</h1>

      <label>Name
        <input name="name" ref={register({required: "This is required", minLength: { value: 2, message: "Must be at least 2 letters."} })} />
      </label>
      <ErrorMessage errors={errors} name="name" as="p" />

      <br />

      <label>Size
        <select name="size" ref={register}>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
      </label>

      <h2>Toppings</h2>
      <div class="toppings">
      <label htmlFor="pepporoni">pepporoni</label>
      <input type="radio" name="pepporoni" ref={register} />
      <label htmlFor="pineapple">pineapple</label>
      <input type="radio" name="pineapple" ref={register} />
      <label htmlFor="veggie">veggie</label>
      <input type="radio" name="veggie" ref={register} />
      <label htmlFor="extra-cheese">extra cheese</label>
      <input type="radio" name="extra-cheese" ref={register} />
      </div>
    

      <br />

      <label>Special Instructions
        <textarea name="special" ref={register} />
      </label>

      <br />

      <div class="gluten">
      <h2>Gluten Free + $2</h2>
      <label class="switch">
        <input type="checkbox" name="gluten-free" ref={register}/>
        <span class="slider" />
      </label>
      </div>

      <input type="submit" value="Add To Order"/>


      <pre>{JSON.stringify(post, null, 2)}</pre>  
    </form>
  );
}