import "./topbar.css"

export default function TopBar() {
  return (
    <>
    <div className="top">
      <div className="topLeft">
      <i className="topicons fa-brands fa-square-facebook"></i>
      <i className="topicons fa-brands fa-linkedin"></i>
      <i className="topicons fa-brands fa-square-twitter"></i>
      <i className="topicons fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">LogOut</li>
          
        </ul>

      </div>
      <div className="topRight">
<img className="topImage" src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1714997576/h909rzqubhswniwe2gkn.jpg" alt="image" />
      <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    
    </>
  )
}
