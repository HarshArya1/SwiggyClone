// export default function Shimmer() {
//   return (
//     <div className="flex flex-wrap w-[90%] mt-20 mx-auto gap-8 justify-center px-10">
//       <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>
//        <div className="w-62 mb-1">
//         <div className="w-[250px] h-[151px] rounded-xl bg-gray-300 mx-auto"></div>
//         <div className=" mx-auto mt-2"></div>
//         <div className="w-full h-6 bg-gray-300"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//         <div className="w-full h-6 bg-gray-300 mt-2"></div>
//       </div>

//     </div>
//   );
// }

export default function Shimmer() {
  return (
    <div className="flex flex-wrap w-[90%] mt-20 mx-auto gap-8 justify-center px-10">
      {[...Array(12)].map((_, index) => (
        <div key={index} className="w-62 mb-1 animate-pulse">
          <div className="w-[250px] h-[151px] rounded-xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mx-auto"></div>
          <div className="w-full h-6 mt-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"></div>
          <div className="w-4/5 h-6 mt-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"></div>
          <div className="w-3/5 h-6 mt-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"></div>
          <div className="w-2/5 h-6 mt-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
}