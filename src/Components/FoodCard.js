export default function FoodCard({foodData}){
    return(
        <a className="block w-32 h-40" href={foodData?.action.link}>
            <img className="w-full h-full object-cover" 
                 src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId} 
                 alt={foodData?.action.text} />
        </a>
    )
}
// export default function FoodCard({ foodData }) {
//   return (
//     <a 
//       className="block w-38 h-40 sm:w-28 sm:h-28 md:w-24 md:h-40 rounded-lg overflow-hidden hover:scale-95 transition-transform duration-200 hover:shadow-lg"
//       href={foodData?.action.link}
//       aria-label={foodData?.action.text}
//     >
//       <img 
//         className="w-full h-full object-cover"
//         src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}
//         alt={foodData?.action.text}
//         loading="lazy"
//       />
//     </a>
//   );
// }