let data = [
    {
      "emp_id": 1,
      "Name": "Ronaldo",
      "DOB": "12/12/2000",
      "Designation": "CEO",
      "Country": "U.S."
    },
    {
      "emp_id": 2,
      "Name": "Messi",
      "DOB": "3/7/1992",
      "Designation": "CTO",
      "Country": " "
    },
    {
      "emp_id": 3,
      "Name": "Robert",
      "DOB": "26/02/1992",
      "Designation": "Software Developer",
      "Country": null
    },
    {
      "emp_id": 4,
      "Name": "Neymar",
      "DOB": "",
      "Designation": "Software Engineer",
      "Country": "New Zealand"
    },
    {
      "emp_id": 5,
      "Name": "Kevin",
      "DOB": "30/06/1988",
      "Designation": "Software Developer",
      "Country": " "
    },
    {
      "emp_id": 6,
      "Name": "Erling",
      "DOB": "15/08/1978",
      "Designation": "Web Designer",
      "Country": "U.S."
    },
    {
      "emp_id": 7,
      "Name": "Kylian",
      "DOB": "20/10/1975",
      "Designation": "Full Stack Developer",
      "Country": "U.S."
    },
    {
      "emp_id": 8,
      "Name": "Trent",
      "DOB": "11/10/1998",
      "Designation": "Full Stack Developer"
    },
    {
      "emp_id": 9,
      "Name": "Luka",
      "DOB": "12/12/2002",
      "Designation": "Full Stack Mobile Developer"
    },
    {
      "emp_id": 10,
      "Name": "Dhruv",
      "DOB": "29/08/1981",
      "Designation": "Director",
      "Country": "India"
    }]

function getData(){
    let row = ""
    for(let emp of data) {
        row += `<tr>
                    <td>${emp.emp_id}</td
                    <td>${emp.DOB}</td
                    <td>${emp.Designation}</td
                    <td>${if ("Country" == "")
                    }}</td
               </tr>`
      
    }
    
}