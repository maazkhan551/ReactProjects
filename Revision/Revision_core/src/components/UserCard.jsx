import React, { useState } from "react";

function UserCard({name,description,image}) {
  const [follow,setFollow] = useState("follow")
  return (
    <div className="flex w-100 h-100 mx-none my-30 flex-col bg-green-100">
      <div className="bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oLZErfypWCU5_3iES3Kl-PhbB6Xds5sM7g&s)] w-full h-40"></div>
      <div className="mx-40 -mt-10">
        <img src={image} alt="image" height={100} width={120} className="rounded-[60px]"/>
      </div>
      <div className="text-center">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <button onClick={()=>follow=="follow" ? setFollow("Unfollow"):setFollow("follow")} className="mx-30 my-5 w-44 px-4 py-2 bg-linear-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
        {follow}
</button>
    </div>
  );
}

export default UserCard;
