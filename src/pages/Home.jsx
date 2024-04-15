import RecipiesList from "../components/RecipiesList";
import{useFetch} from "../hooks/useFetch"


function Home() {
  const {data:recipies}=useFetch("http://localhost:3000/recipies")

  const deleteRecipie =(id)=>{
    fetch("http://localhost:3000/recipies/" +id,{
      method:"DELETE"
    })
    .then((data)=>{
      return data.json()
    }).then((data)=>{
      setCheck (Math.random())
    })
    .catch((error) =>console.log(error))
  }


  return (
    <div>
     {recipies &&
      (<RecipiesList recipies={recipies} deleteRecipie={deleteRecipie}/>
    )}
    </div>
  )
}

export default Home