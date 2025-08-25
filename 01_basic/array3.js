fetch("http://192.168.0.83/HelloJSP/mock.json")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data); // map  A => A-1
    data
      .map((ele) => {
        //fn, ln => name
        const newELe = {
          no: ele.id,
          name: ele.first_name + " " + ele.last_name,
          email: ele.email,
          salay: ele.salay,
        };
        return newELe;
      })
      .forEach((ele) => console.log("이름: " + ele.name + " 번호: " + ele.no));
  })
  .catch(console.log);
