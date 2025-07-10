import { imageGridCards } from "../Utils/FoodData"
import FoodCard from "./FoodCard"

export default function FoodOption(){
    return(
        <div className="w-[80%] container mx-auto mt-10 overflow-x-auto pb-6 scrollbar-gap hidden-scroll transition-all smooth">
            <div className="grid grid-rows-2 grid-flow-col gap-8 w-max">
                {imageGridCards.map((foodData) => (
                    <FoodCard key={foodData.id} foodData={foodData} />
                ))}
            </div>
        </div>
    )
}
// import { imageGridCards } from "../Utils/FoodData";
// import FoodCard from "./FoodCard";

// export default function FoodOption() {
//   return (
//     <div className="w-full px-4 sm:px-6 md:w-[90%] lg:w-[80%] container mx-auto mt-6 md:mt-10 overflow-x-auto pb-6 hidden-scroll">
//       <div className="grid grid-rows-2 grid-flow-col gap-4 sm:gap-6 md:gap-8 w-max">
//         {imageGridCards.map((foodData) => (
//           <FoodCard key={foodData.id} foodData={foodData} />
//         ))}
//       </div>
//     </div>
//   );
// }
