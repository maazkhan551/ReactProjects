import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        GitHub profile Name: {data.name}<br/><br/>
        GitHuB Bio: {data.bio}<br/><br/>
        Github followers: {data.followers}
      </div>
    </div>
  );
}

export default Github;
export const InfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/maazkhan551");
  return response.json();
};
