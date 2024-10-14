import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/storeContent";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {  // Destructure category from props
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2> {/* Small fix in the text */}
      <div className="food-display-list">
        {food_list.map((item, index) => {
          {console.log(category, item.category);}
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}  // Fixed spelling error (discription)
                price={item.price}
                image={item.image}
              />
            );
          }
          return null; // Add a return statement to handle the case when category does not match
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
