window.addEventListener('DOMContentLoaded',(even) => {
    createInnerHtml();
    });
    const createInnerHtml=() =>{
        const innerHtml=`
        <tr>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Start Date</th>
                    <th>Actions</th>
                </tr>
                <tr>
                <td><img class="profile" alt="" src="./profilePic/Ellipse -6.png"></td>
                <td>Vishnu Reddy</td>
                <td>Male</td>
                <td><div class="dept-label">Java Developer</div>
                <div class="dept-label">Engineer</div></td>
                <td>450000</td>
                <td>1 Dec 2021</td>
                <td>
                    <img id="1" onclick="remove(this)" alt="delete" src="C:\Users\VISHNU VARDHAN REDDY\Downloads\delete-black-18dp.svg">
                    <img id="1" onclick="update(this)" alt="edit" src="C:\Users\VISHNU VARDHAN REDDY\Downloads\create-black-18dp.svg">
                </td>
                </tr>
        `;
        document.querySelector('#display').innerHTML=innerHtml;
    }