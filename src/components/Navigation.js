import { Box, Grid, Input, styled, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeBtn from "../assets/HomeBtn.svg";
import Search from "../assets/search.svg";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const [searchValue, setSeachValue] = useState("");
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      console.log(searchValue);
      // search 하기
    }
  };

  useEffect(() => {
    if (!searchRef.current) return;

    if (location.pathname === "/") {
      searchRef.current.style.visibility = "hidden";
    } else {
      searchRef.current.style.visibility = "visible";
    }
  }, [location.pathname]);
  return (
    <Container container spacing={2}>
      <Grid size={{ md: 5 }}>
        <Box
          component="img"
          src={HomeBtn}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </Grid>
      <Grid
        size={{ md: 7 }}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <SearchContainer ref={searchRef}>
          <Box component="img" src={Search} />
          <SearchInput
            value={searchValue}
            onChange={(e) => setSeachValue(e.target.value)}
            onKeyDown={handleEnterPress}
            placeholder="search"
            disableUnderline
          />
        </SearchContainer>
        <NavBtn variant="caption">Home</NavBtn>
        <NavBtn variant="caption">Forcast</NavBtn>
        <NavBtn variant="caption">Contact</NavBtn>
      </Grid>
    </Container>
  );
}

const Container = styled(Grid)`
  height: 90px;
  border-bottom: 1px solid rgba(51, 51, 51, 0.12);
  padding: 0 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchContainer = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;

  > img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
  }
`;

const SearchInput = styled(Input)`
  width: 26vw;
  min-width: 200px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 29px;
  border: 0.6px solid #d5d5d5;
  padding-left: 45px;
`;

const NavBtn = styled(Typography)`
  cursor: pointer;
`;
