import { Link } from "react-router-dom"

function RecipiesList({recipies}) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {recipies.map((recipe)=>{
            return(
          <div key ={recipe.id} className="card w-80  bg-base-100 shadow-xl">
                 <figure>
                    <img src="{recipe.image}" alt="Shoes" className=" h-[200px] w-full object-cover md:h-auto" />
                 </figure>
          <div className="card-body">
              <h2 className="card-title">{recipe.title}</h2>
              <p className="line-lamp-3">{recipe.method}</p>
          <div className="card-actions ">
              <Link to={`/singleRecipe/${recipe.id}`} className="btn  btn-primary w-full btn-sm md:btn-md">Read Mare</Link>
            </div>
          </div>
        </div>
            )
        })}
    </div>
  )
}

export default RecipiesList