const getdata=async ()=>{
    const apiUrl = "http://localhost:8080/erp/getAll";
        return await fetch(apiUrl)
        .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
        });
}
let count=0;
function fun(){
    count=0;
    let data=getdata(); 
    data.then((d) => {
        d.forEach((k,y) => {
            let a=`
                <div class="box">
                <img src="https://source.unsplash.com/random/200x200?sig=${count++}" alt="">
                <h1>${(k.studentName).toUpperCase()}</h1>
                <table>
                    <tr>
                        <th>Father's Name</th>
                        <td>${k.fatherName}</td>
                    </tr>
                    <tr>
                        <th>Mother's name</th>
                        <td>${k.motherName}</td>
                    </tr>
                    <tr>
                        <th>Course</th>
                        <td>${k.course}</td>
                    </tr>
                    <tr>
                        <th>D O B</th>
                        <td>${k.dob}</td>
                    </tr>
                    <tr>
                        <th>Phone no</th>
                        <td>${k.phoneNo}</td>
                    </tr>
                    <tr>
                        <th>University</th>
                        <td>${k.university}</td>
                    </tr>
                    <tr>
                        <th>Student id</th>
                        <td>${k.studentId}</td>
                    </tr>
                    <tr>
                        <th>College id</th>
                        <td>${k.collegeId}</td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td>${k.password}</td>
                    </tr>
                </table>
                </div>
                `
                document.getElementsByClassName("container-m")[0].innerHTML+=a;
        });
      }).catch((error) => {
        console.error("Error fetching student information:", error);
      });
}