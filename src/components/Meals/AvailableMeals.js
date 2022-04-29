import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";

const PIZZAS = [
    {
      id: 'm1',
      name: 'Prosciutto',
      description: 'tomato souce, mozzarella, ham',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Margherita',
      description: 'tomato souce, mozzarella',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Capricciosa',
      description: 'tomato souce, mozzarella, ham, mashrooms',
      price: 24.99,
    },
    {
      id: 'm4',
      name: 'Pepperoni',
      description: 'tomato souce, mozzarella, pepperoni',
      price: 25.99,
    },
    {
      id: '5m',
      name: 'Ricotta',
      description: 'tomato souce, mozzarella, spianata picante, ricotta, pepperoncino',
      price: 29.99,
    }
  ];

  const AvailableMeals =()=>{

    const mealsList = PIZZAS.map(meal =>
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
