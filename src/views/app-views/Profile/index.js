import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Button } from "antd/lib/radio";
import { Link } from "react-router-dom";
import { matchesPattern } from "@babel/types";

const Profile = () => {
  const [data, setData] = useState({});
  const fakedata = [
    {
      id: 1,
      job: "Engineer",
    },
    {
      id: 2,
      job: "Baker",
    },
    {
      id: 3,
      job: "Dentist",
    },
    {
      id: 4,
      job: "Driver",
    },
    {
      id: 5,
      job: "Electrician",
    },
    {
      id: 6,
      job: "Farmer",
    },
    {
      id: 7,
      job: "Jeweller",
    },
    {
      id: 8,
      job: "Hairdresser",
    },
  ];
  console.log(fakedata);
  const fakedata2 = fakedata[Math.floor(Math.random() * fakedata.length)];

  useEffect(() => {
    axios
      .get("https://randomuser.me/api")
      .then((response) => {
        setData(response.data.results[0]);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const refreshdata = () =>
    axios.get("https://randomuser.me/api").then((response) => {
      setData(response.data.results[0]);
    });

  return (
    <div class="h-full    bg-gray-300  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
      {data.name && (
        <div class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
          <div class=" h-32 overflow-hidden">
            <img
              className="w-full bg-cover"
              src="https://picsum.photos/640/410"
              alt=""
            />
          </div>
          <div class="flex justify-center px-5  -mt-12">
            <img
              class="h-32 w-32 bg-white p-2 rounded-full   "
              src={data.picture.large}
              alt=""
            />
          </div>
          <div class=" ">
            <div class="text-center px-14">
              <h2 class="text-gray-800 text-3xl font-bold">
                {data.name.first} {data.name.last}
              </h2>
              <p class="text-gray-400 mt-2">@{data.login.username}</p>
              <p class="mt-2 text-gray-600">
                Hello! I'm {data.name.first}. {data.dob.age} years old. I'm from{" "}
                {data.location.country}, living in {data.location.city}. I am a{" "}
                {fakedata2.job}.
              </p>
            </div>
            <hr class="mt-6" />
            <div class="flex  bg-gray-50 ">
              <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <p>
                  <span class="font-semibold">
                    {Math.floor(Math.random() * 7000)}
                  </span>{" "}
                  Followers
                </p>
              </div>
              <div class="border"></div>
              <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <p>
                  {" "}
                  <span class="font-semibold">
                    {Math.floor(Math.random() * 7000)}{" "}
                  </span>{" "}
                  Following
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
