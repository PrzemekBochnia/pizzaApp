import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";


const AvailableMeals =()=>{
     
  const[meals,setMeals] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const[error,setError] = useState();


  useEffect(()=>{
    const fetchPizzas = async() =>{
      const response = await fetch('https://pizza-app-c1b1f-default-rtdb.firebaseio.com/pizzas.json');

      if(!response.ok){
        throw new Error('Something went wrong!')
      }
      const responseData = await response.json();

      const loadedPizzas = [];

      for(const key in responseData) {
        loadedPizzas.push({
          id: key, 
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
          });
        }
          setMeals(loadedPizzas);
          setIsLoading(false);
      };

      
        fetchPizzas().catch((error)=>{
          setIsLoading(false);
          setError(error.message);
        });  
    },[]);

    if(isLoading){
      return(
        <section className={classes.MealsLoading}>
          <p>Loading...</p>
        </section>
      )
    };
    if(error){
      return(
        <section className={classes.MealsError}>
          <p>{error}</p>
        </section>
      )
    }

    const mealsList = meals.map(meal =>
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
        )

    return(
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
  };
export default AvailableMeals;
