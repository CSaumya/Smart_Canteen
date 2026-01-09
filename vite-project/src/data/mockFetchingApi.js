import FoodData from "./foodData";


// Get/snacks (mock api endpoint)
export const fetchSnacks = async (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (category) {
        resolve(FoodData.filter((item) => item.category === category));
      } else {
        resolve(FoodData);
      }
    }, 500);
  });
};
