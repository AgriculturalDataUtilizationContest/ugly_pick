import React from "react";
import { useNavigate } from "react-router-dom";
import { Group2609212_4 } from "../../../../icons/Group2609212_4";
import { Group } from "../../../../components/Group";
import "./style.css";

export const NeviHomeWrapper = ({
  nevi,
  className,
  searchTerm = "",
  groupIcon = <Group2609212_4 className="group-2609212-4-instance" />,
}) => {
  const navigate = useNavigate();

  const handleForecastClick = () => {
    if (searchTerm.trim()) {
      navigate(`/forecast?query=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate("/forecast");
    }
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div className={`nevi-home-wrapper ${className}`}>
      <div className="frame-33">
        <div className="item-link" onClick={() => navigate("/")}>
          HOME
        </div>

        <div className="text-wrapper-25" onClick={handleForecastClick} style={{ cursor: "pointer" }}>
          FORECAST
        </div>

        <div className="text-wrapper-25" onClick={handleSearchClick} style={{ cursor: "pointer" }}>
          SEARCH
        </div>
      </div>

      <Group
        divClassName="group-5"
        divClassName1="group-5"
        divClassNameOverride="group-5"
        frameClassName="group-4"
        frameClassNameOverride="group-6"
        icon="icon-3"
        iconClassName="group-3"
        override={groupIcon}
      />
    </div>
  );
};

