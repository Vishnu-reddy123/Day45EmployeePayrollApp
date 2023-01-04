window.addEventListener('DOMContentLoaded',(even) => {
    createInnerHtml();
    });
    const createInnerHtml=() =>{
        const headerHtml="<th>Profile</th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
        let innerHtml = `${headerHtml}`;
        let empPayrollList=createEmployeePayrollJSON();
        for(const empPayrollData of empPayrollList){
            innerHtml = `${innerHtml}
                <tr>
                <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                    <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="./profilePic/delete-black-18dp.svg">
                    <img name="${empPayrollData._id}" onclick="update(this)" alt="edit" src="./profilePic/create-black-18dp.svg">
                </td>
                </tr>
        `;
        }
        document.querySelector('#display').innerHTML=innerHtml;
    }
    const createEmployeePayrollJSON=()=>{
        let empPayrollList =[
            {
                _name: "Sandhya",
                _gender:"Female",
                _department: ["ENGINEER","HR"],
                _salary: "300000",
                _startDate: "3 August 2022",
                _notes: "",
                _profilePic: "./profilePic/Ellipse -1.png"
            },
            {
                _name: "James",
                _gender:"male",
                _department: ["FINANCE","ENGINEER","HR"],
                _salary: "500000",
                _startDate: "22 March 2019",
                _notes: "",
                _profilePic: "./profilePic/Ellipse -2.png"   
            },
            {
                _name: "Clarke",
                _gender:"Male",
                _department: ["ENGINEER","HR"],
                _salary: "400000",
                _startDate: "9 Mar 2020",
                _notes: "",
                _profilePic: "./profilePic/Ellipse -3.png"
            }
        ];
        return empPayrollList;
    }
    const getDeptHtml=(deptList) => {
        let deptHtml='';
        for(const dept of deptList){
            deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div`
        }
        return deptHtml;
    }