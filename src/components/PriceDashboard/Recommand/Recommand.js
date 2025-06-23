import React, { useEffect, useRef, useState } from "react";
import { Horizontal, Vertical } from "../../../style/CommunalStyle";
import { Box, Button, Typography } from "@mui/material";
import { recommandInfo } from "../../../utils/common";
import Grade from "../../../assets/Grade.svg";
import NonGrade from "../../../assets/NonGrade.svg";
import NonImg from "../../../assets/NonImg.png";
import { useNavigate } from "react-router-dom";
import LeftBtn from "../../../assets/LeftBtn.svg";
import RightBtn from "../../../assets/RightBtn.svg";

const mock_data = [
  {
    marketImage:
      "https://cdn.ccdn.co.kr/news/photo/202203/752446_326271_1714.jpg",
    marketName: "청송사과",
    marketReview: 1,
    marketExplaination: "이 사과 맛나요",
    marketUrl: "https~~~",
  },
  {
    marketImage:
      "https://cdn.ccdn.co.kr/news/photo/202203/752446_326271_1714.jpg",
    marketName: "청송사과",
    marketReview: 2,
    marketExplaination: "이 사과 맛나요",
    marketUrl: "https~~~",
  },
  {
    marketImage:
      "https://cdn.ccdn.co.kr/news/photo/202203/752446_326271_1714.jpg",
    marketName: "청송사과",
    marketReview: 3,
    marketExplaination: "이 사과 맛나요",
    marketUrl: "https~~~",
  },
  {
    marketImage:
      "https://cdn.ccdn.co.kr/news/photo/202203/752446_326271_1714.jpg",
    marketName: "청송사과",
    marketReview: 4,
    marketExplaination: "이 사과 맛나요",
    marketUrl: "https~~~",
  },
];

export default function Recommand() {
  const [marketList, setMarketList] = useState([]);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 375;
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setMarketList(mock_data);
  }, []);
  return (
    <Vertical sx={{ position: "relative" }}>
      <Horizontal sx={{ mb: "43px" }}>
        <Typography variant="title" sx={{ marginRight: "30px" }}>
          {recommandInfo.title}
        </Typography>
        <Typography variant="caption">{recommandInfo.subtitle}</Typography>
      </Horizontal>
      <Horizontal
        sx={{
          overflowX: "auto",
          width: "calc(100% + 50px)",
          marginLeft: "-25px",
        }}
        ref={scrollRef}
      >
        {marketList.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </Horizontal>
      <NavigateBtn
        position="left"
        onClick={() => scroll("left")}
        img={LeftBtn}
      />
      <NavigateBtn
        position="right"
        onClick={() => scroll("right")}
        img={RightBtn}
      />
    </Vertical>
  );
}

const Item = (props) => {
  const {
    marketImage,
    marketName,
    marketReview,
    marketExplaination,
    marketUrl,
  } = props;
  const navigate = useNavigate();
  return (
    <Vertical
      sx={{
        border: "1px solid black",
        width: "340px",
        flexShrink: "0",
        mr: "35px",
      }}
    >
      <Box
        component="img"
        src={marketImage === null ? NonImg : marketImage}
        sx={{ height: "280px" }}
      />
      <Typography variant="title">{marketName}</Typography>
      <StarRating rating={marketReview} />
      <Typography variant="caption">{marketExplaination}</Typography>
      <Button onClick={() => navigate(`${marketUrl}`)}>더 알아보기</Button>
    </Vertical>
  );
};

const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <Box display="flex" alignItems="center">
      {Array.from({ length: totalStars }, (_, i) =>
        i < rating ? (
          <Box component="img" src={Grade} key={i} />
        ) : (
          <Box component="img" src={NonGrade} key={i} />
        )
      )}
    </Box>
  );
};

const NavigateBtn = ({ img, position, onClick }) => {
  return (
    <Box
      component="img"
      src={img}
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        cursor: "pointer",
        zIndex: 3,
        ...(position === "left" ? { left: "-20px" } : { right: "-20px" }),
      }}
    />
  );
};
