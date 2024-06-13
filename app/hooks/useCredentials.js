"use client";
import { useEffect } from "react";
import axios from "axios";

const useCredentials = () => {
  useEffect(() => {
    axios
      .post("https://restapi12.rmscloud.com/authToken", {
        agentId: 15,
        agentPassword: "1h&29$vk449f8",
        clientId: 11281,
        clientPassword: "6k!Dp$N4",
        useTrainingDatabase: false,
        moduleType: ["distribution"],
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
};
export default useCredentials;
