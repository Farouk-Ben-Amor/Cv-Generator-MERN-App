import { Dropdown, Button } from "antd";
import "../resources/defaultlayout.css";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';


function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("cvgenerator-user"));
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: (
        <Link to='/home'>Home</Link>
      ),
    },
    {
      key: "2",
      label: <Link to='/profile'>Profile</Link>
    },
    {
      key: "3",
      label: (
        <span
          onClick={() => {
            localStorage.removeItem("cvgenerator-user");
            navigate("/login");
          }}>
          Logout
        </span>
      ),
    },
  ];

  return (
    <div className='layout'>
      <div className='header'>
        <h1 onClick={()=> navigate('/home')} style={{cursor:'pointer'}} >CV Generator</h1>
        <Dropdown menu={{ items }} placement='bottomLeft'>
          <Button icon={<UserOutlined/>} > {user.username} </Button>
        </Dropdown>
      </div>
      <div className='content' style={{overflow:'scroll'}} >{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
