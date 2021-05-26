import React, { useEffect, useState } from "react";

const userdata = () => {
  const [userdata, setUserdata] = useState({});

useEffect(() => {
  
  fetch("https://api.airtable.com/v0/appGnInO2fkYUQc2f/recipes?api_key=keysTmOxkJA2tynqF")
    .then((res) => res.json())
    .then((data) => {
      setUserdata(data.records);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

  return (<div/>);
}

export default userdata;