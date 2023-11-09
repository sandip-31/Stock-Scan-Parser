import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { fetchData } from "../redux/actions/dataActions";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <div className="container">
      <Card>
        <div className="section">
          {data.map((item) => (
            <Link to={`/detail/${item.id}`} key={item.id} style={linkStyle}>
              <div key={item.id} className="row">
                <li>{item.name}</li>
                <p style={{ color: item.color }}>{item.tag}</p>
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Home;
