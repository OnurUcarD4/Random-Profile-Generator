import axios from "axios";
import React from "react";
import { useEffect } from "react";

const Index = () => {
  const token = "9d9533ec-15f7-4a78-9bf0-6a14956fb0da";
  useEffect(() => {
    axios
      .get(
        "https://public-api.tracker.gg/v2/csgo/standard/search?platform=steam&query=76561198008049283",
        {
          headers: {
            "TRN-Api-Key": "9d9533ec-15f7-4a78-9bf0-6a14956fb0da",
            Accept: "application/json",
            "Accept-Encoding": "gzip",
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <div className="h-full    bg-gray-300  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
      dsadasdasfasfafdasd
    </div>
  );
};

export default Index;
