import React, { useEffect, useState } from 'react'
import "./index.css"


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [visiblityHandle, setvisiblityHandle] = useState(false)
  console.log(visiblityHandle, "check");

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("saved");
    return saved ? JSON.parse(saved) : [
      {
        userName: "Hamza",
        userImage: "https://avatars.githubusercontent.com/u/241596615?v=4",
        userEmail: "hamza@gmail.com",
        userDepartment: "IT"
      },
      {
        userName: "Syed Muhammad",
        userImage: "https://avatars.githubusercontent.com/u/242596902?v=4",
        userEmail: "muhammad@gmail.com",
        userDepartment: "HR"
      },
      {
        userName: "Kashan Adnan",
        userImage: "https://avatars.githubusercontent.com/u/181986639?v=4",
        userEmail: "fullstackdevkashan@gmail.com",
        userDepartment: "IT"
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(data));
  }, [data]);

  const [userName, setUserName] = useState("")
  const [userImage, setUserImage] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userDepartment, setUserDepartment] = useState("")

  function addNewUsers() {
    setData([...data, { userName, userImage, userEmail, userDepartment }])
  }
  // SVG Code insert using google
  const PlusIcon = ({ size = 24, color = 'currentColor', ...props }) => {
    return (
      <svg
        xmlns="http://w3.org"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    );
  };

  const CrossIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }) => {
    return (
      <svg
        xmlns="http://w3.org"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    );
  };
  function editAll() {
    data.map((users, index) => (
      users.userName = prompt(`${users.userName} ${index + 1} User`),
      setData([...data,])
    ))
  }

  return (

    <div className='main' style={{ backgroundColor: darkMode ? "black" : "white" }}>
      <nav style={{ backgroundColor: darkMode ? "#4F4C47" : "black" }}>
        <p>HC</p><span>Hamza's Company</span>
        <button onClick={() => setvisiblityHandle(!visiblityHandle)}>{visiblityHandle? <CrossIcon /> : <PlusIcon />  }</button>
        <div className="toggle">
          <button className="day" onClick={() => setDarkMode(!darkMode)} style={{ transform: darkMode ? "translate(40px)" : "translate(0px)", transition: "1s" }}>{darkMode ? <img src="https://img.icons8.com/ios_filled/512/sun--v3.png" alt="" /> : <img src="https://www.svgrepo.com/show/381213/dark-mode-night-moon.svg" alt="" />}</button>
        </div>
      </nav>



      <div>
        {/* Form  */}
        <div className="form" style={{ display: visiblityHandle ? "flex" : "none" }}>
          <h2>Add Employee</h2>
          <input type="url" onChange={(e) => setUserImage(e.target.value)} value={userImage} placeholder='Enter Image URL' />
          <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} placeholder='Enter Employee Name' />
          <input type="email" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} placeholder='Enter Employee Email' />
          <input type="text" onChange={(e) => setUserDepartment(e.target.value)} value={userDepartment} placeholder='Enter Employee Department' />

          <button onClick={addNewUsers}><PlusIcon /></button>

        </div>
        {/* Form  */}

        <div className="cards">{
          data.map((users) => (
            <div className="card">
              <div className="card-top">
                <p>HC</p><span>Hamza's Company</span>
              </div>
              <div className="card-bottom">
                <div className="left">
                  <div className="name"><h3>Name: </h3> <span>{users.userName}</span></div>
                  <div className="email"><h3>Email: </h3> <span>{users.userEmail}</span></div>
                  <div className="dep"><h3>Department: </h3> <span>{users.userDepartment}</span></div>
                  <div className="btns">
                    <button className='delete'>Delete</button>
                    <button className='edit' onClick={editAll}>Edit Name</button>
                  </div>
                </div>
                <div className="right">
                  <img src={users.userImage} alt="employeeImg" />
                </div>
              </div>
            </div>
          ))
        }</div>
      </div >
    </div>
  )
}

export default App