import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Button, notification, Space } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const cc = Math.floor(Math.random() * 9245682945102465);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api")
      .then((response) => {
        setData(response.data.results[0]);
        let date = new Date(response.data.results[0].dob.date);
        setMomentdate(date);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const refreshdata = () =>
    axios.get("https://randomuser.me/api").then((response) => {
      setData(response.data.results[0]);
      let date = new Date(response.data.results[0].dob.date);
      setMomentdate(date);
      openNotificationWithIcon("success");
    });
  const [momentdate, setMomentdate] = useState("");

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Random User",
      description: "Random user generated.",
    });
  };

  return (
    <div className="justify-center  overflow-hidden h-full w-full flex">
      {data.name && (
        <div className=" w-5/12 h-full text-center justify-center flex-col flex">
          <div className="w-full flex justify-center">
            <img
              src={data.picture.large}
              className="w-40 rounded-full border-2 border-white shadow-md hover:border-yellow-400 transition"
            ></img>
          </div>

          <div className=" w-full grid grid-cols-12">
            <div className=" col-span-4 w-full h-60 border-2 border-gray-200 rounded shadow-lg mr-2 mt-2 bg-pink-700 hover:border-pink-400 transition">
              <h1 className="text-white font-bold border-b p-2">
                Person Informations
              </h1>
              <ul className="text-center text-white mt-3 text-4xl">
                <li>
                  Name : {data.name.first} {data.name.last}
                </li>
                <li>
                  Gender:
                  <i
                    className={`fa ml-1 ${
                      data.gender === "male" ? "fa-mars" : "fa-venus"
                    }`}
                  ></i>{" "}
                  {data.gender}{" "}
                </li>
                <li>Cell: {data.cell}</li>
                <li>
                  Birthday: {moment(momentdate).format("MMM Do YY")} -{" "}
                  {data.dob.age} years old
                </li>
              </ul>
            </div>
            <div className=" col-span-4 border-gray-200 border-2 rounded ml-2 mt-2 shadow-lg bg-blue-500 hover:border-blue-400 transition">
              <h1 className="text-white font-bold border-b p-2">
                Country Informations
              </h1>
              <ul className="text-center text-white mt-3 text-4xl">
                <li>Country : {data.location.country}</li>
                <li>City: {data.location.city}</li>
                <li>State: {data.location.state}</li>
                <li>Street: {data.location.street.name}</li>
              </ul>
            </div>
            <div className="col-span-4 ml-2 mt-2 border-gray-200 border-2 shadow-lg transition hover:border-green-400 rounded bg-green-700">
              <h1 className="text-white font-bold border-b transition p-2">
                Internet Informations
              </h1>
              <ul className="text-center text-white mt-3 text-4xl">
                <li>Email: {data.email}</li>
                <li>Username: {data.login.username}</li>
                <li>Password: {data.login.password}</li>
                <li>CC: {cc}</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex justify-center">
            {" "}
            <Button
              onClick={() => refreshdata()}
              className="mt-2 w-40 font-semibold hover:bg-indigo-800 transition hover:text-white"
            >
              Generate New Person
            </Button>
          </div>
          <div className="">
            <Link to="./Profile">
              <Button className="mt-2 w-40 font-semibold hover:bg-indigo-800 transition hover:text-white">
                Generate Profile Card
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
