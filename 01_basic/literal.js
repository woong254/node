fetch("http://192.168.0.83/HelloJSP/mock.json")
  .then((Response) => Response.json())
  .then((data) => {
    //console.log(data);
    // 'Male' => 출력
    // 'Female' => 출력
    ["Male", "Female"].forEach((gender) => {
      console.log(
        `${gender} => ${data
          .filter((ele) => ele.gender == `${gender}`)
          .map((ele) => ele.first_name)
          .join(",")}`
      );
    });
  })
  .catch(console.log);
