import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../redux/actions/dataActions";
import "./DetailPage.css";

function DetailPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const { id } = useParams();
  const item = data.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  function handleClick(value, name) {
    navigate("/criteria", { state: { values: value, name: name } });
  }

  function renderPlainCriteria(criteria) {
    return criteria.text;
  }

  function renderVariableCriteria(criteria) {
    const renderValue = (variableEntry) => {
      if (variableEntry.default_value) {
        return (
          <span
            style={{
              color: "purple",
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => handleClick(variableEntry.default_value, item.name)}
          >
            ({variableEntry.default_value})
          </span>
        );
      } else if (variableEntry.values && variableEntry.values.length > 0) {
        return (
          <span
            style={{
              color: "purple",
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => handleClick(variableEntry.values, item.name)}
          >
            ({variableEntry.values[0]})
          </span>
        );
      } else {
        return null;
      }
    };

    return (
      <div>
        {criteria.text.split(/\$(\d+)/).map((part, index) => {
          if (index % 2 === 0) {
            return <span key={index}>{part}</span>;
          } else {
            const variableEntry = criteria.variable[`$${part}`];
            return variableEntry ? renderValue(variableEntry) : `$${part}`;
          }
        })}
      </div>
    );
  }

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="container">
      <Card>
        <div className="header">
          <p>{item?.name}</p>
          <p style={{ color: item.color }}>{item?.tag}</p>
        </div>
        <div className="body">
          {item?.criteria.map((criteria, index) => (
            <React.Fragment key={index}>
              {index > 0 && <p>and</p>}
              {criteria.type === "plain_text" && (
                <li>{renderPlainCriteria(criteria)}</li>
              )}
              {criteria.type === "variable" && (
                <li>{renderVariableCriteria(criteria)}</li>
              )}
            </React.Fragment>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default DetailPage;
