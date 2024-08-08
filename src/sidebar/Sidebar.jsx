import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://images.pexels.com/photos/45981/pexels-photo-45981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          excepturi nihil tempora, qui accusamus saepe amet,
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cenima</li>
        </ul>
      </div>
      <div className="sibarbarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebaricons fa-brands fa-square-facebook"></i>
          <i className="sidebaricons fa-brands fa-linkedin"></i>
          <i className="sidebaricons fa-brands fa-square-twitter"></i>
          <i className="sidebaricons fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
