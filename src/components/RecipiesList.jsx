import { Link } from "react-router-dom"
import {IoTrashOutline} from "react-icons/io5"
import { data } from "autoprefixer"
import { useState } from "react"



function RecipiesList({recipies,deleteRecipie}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 mr-4 mb-5">
        {recipies.map((recipe) => {
            return(
        <div key={recipe.id} className="card  bg-base-100 shadow-xl">
           <figure>
              <img className="h-[200px] w-full object-cover md:h-auto" src={recipe.image} alt="food" />
          </figure>
     <div className="card-body">
           <h2 className="card-title">{recipe.title}</h2>
           <p className="line-clamp-3">{recipe.method}</p>
      <div className="card-actions flex-nowrap items-center ">
           <Link className="btn btn-sm md:btn-md btn-primary " to={`/singleRecipe/${recipe.id}`}>
             Read more
           </Link>
           <button onClick={()=>deleteRecipie(recipe.id)} className="btn btn-secondary">
             <IoTrashOutline/>
           </button>
      </div>
  </div>
</div>
    
    )
    })}
    </div>
  )
}

export default RecipiesList