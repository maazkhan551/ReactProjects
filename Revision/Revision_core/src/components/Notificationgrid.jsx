import React, { useState } from "react";

function Notificationgrid({image,name,action,response,time}) {
    const [see,setSeen] = useState(false)
  return (
    <>
      <div onClick={()=>setSeen(true)} className={`flex ${see ? `bg-white`:`bg-[hsl(211,68%,94%)]`} bg-[hsl(211,68%,94%)] p-2.5 m-2 hover:cursor-pointer`}>
        <img
          src={image}
          alt=""
          height={35}
          width={35}
          className="rounded-[25px] mr-2.5"
        />
        <div>
          <span className="font-bold">{name}</span> {action}{" "}
          <span className="text-[hsl(219,12%,42%)] font-bold">
            {response}
          </span>
          <p className="text-[hsl(219,12%,42%)]">{time}{" "}ago</p>
        </div>
      </div>
    </>
  );
}

export default Notificationgrid;
