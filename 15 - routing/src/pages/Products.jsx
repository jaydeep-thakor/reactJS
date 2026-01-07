import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt a omnis assumenda enim accusamus doloribus pariatur! Quo labore aperiam numquam asperiores recusandae sequi amet tempore rerum odit adipisci, laboriosam assumenda cupiditate expedita reiciendis omnis quaerat molestiae voluptates maxime reprehenderit iusto officiis ipsum a error? Incidunt ratione culpa voluptatibus, repudiandae pariatur in fugiat fugit, beatae perferendis, similique consequatur! Dicta, explicabo. Expedita, assumenda! Optio magni commodi id voluptates amet dicta dolore, non nostrum, sapiente cupiditate dignissimos quam neque illum consequatur fuga ut saepe. Temporibus ab delectus laudantium qui placeat pariatur assumenda voluptates ad illum. Adipisci quis ipsa incidunt ea reiciendis temporibus!
      <Link to="/product/men">men</Link>
        <Link to="/product/women">women</Link>
        <Link to="/product/kids">kids</Link>

        <Outlet/>
    </div>
  )
}

export default Products