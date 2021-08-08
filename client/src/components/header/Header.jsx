import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">DIY</span>
        <span className="headerTitleLg">Corner</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/6435/hands-girl-painting-spring-6435.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
