import React, { useState } from "react";
import Mudassar from "../assets/Mudassar.jpg";
import Notificationgrid from "./Notificationgrid";
import Maaz from "../assets/Maaz.jpg";
function Notification() {
  return (
    <>
      <div className="w-200 bg-white">
        <div className="flex w-200 justify-between p-2.5">
          <div className="font-bold">
            Notification{" "}
            <span className="bg-blue-900 p-0.5 rounded-xs text-white">3</span>
          </div>
          <div>Marks all as read</div>
        </div>
      <Notificationgrid
        image={Maaz}
        name="Maaz Ahmad"
        action="following you"
        response="view profile"
        time="2 hour"
      />
      <Notificationgrid
        image={Mudassar}
        name="Mudassar Ijaz"
        action="has Birthday"
        response="send him BirthDay wish"
        time= "2 days"
      />
       </div>
    </>
  );
}
export default Notification;
