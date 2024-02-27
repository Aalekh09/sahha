const getdata=async ()=>{
    const apiUrl = "http://192.168.1.19:8080/erp/getAll";
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
function fun(){
    let data=getdata(); 
    data.then((d) => {
        d.forEach((k,y) => {
            let a=`
                <div class="box">
                <img src="#" alt="">
                <h1>${k.studentName}</h1>
                <table>
                    <tr>
                        <th>father's name</th>
                        <td>${k.fatherName}</td>
                    </tr>
                    <tr>
                        <th>mother's name</th>
                        <td>${k.motherName}</td>
                    </tr>
                    <tr>
                        <th>course</th>
                        <td>${k.course}</td>
                    </tr>
                    <tr>
                        <th>dob</th>
                        <td>${k.dob}</td>
                    </tr>
                    <tr>
                        <th>phone no</th>
                        <td>${k.phoneNo}</td>
                    </tr>
                    <tr>
                        <th>university</th>
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
                        <th>password</th>
                        <td>${k.password}</td>
                    </tr>
                </table>
                </div>
                `
                document.getElementsByTagName("body")[0].innerHTML+=a;
        });
      }).catch((error) => {
        console.error("Error fetching student information:", error);
      });
}