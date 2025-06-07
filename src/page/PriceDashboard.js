import { Box, Grid, styled, Tab, Tabs } from "@mui/material";
import { useState } from "react";

function CustomTab(props) {
  const { children, value, index } = props;

  return <div>{value === index && <Box sx={{ p: 3 }}>{children}</Box>}</div>;
}

export default function PriceDashboard() {
  const [tabListValue, setTabList] = useState();

  const handleChange = (event, newValue) => {
    setTabList(newValue);
  };

  return (
    <Container container spacing="30px">
      <Grid size={{ md: 2.4 }} sx={{ border: "1px solid black" }}>
        이건 왼쪽
      </Grid>
      <Grid size={{ md: 9.6 }}>
        이건 오른쪽
        <Tabs value={tabListValue} onChange={handleChange}>
          <Tab label="가격 비교" value={0} />
          <Tab label="가격 예측" value={1} />
          <Tab label="이슈 톡톡" value={2} />
          <Tab label="농산물 추천" value={3} />
        </Tabs>
        <CustomTab value={tabListValue} index={0}>
          Item One
        </CustomTab>
        <CustomTab value={tabListValue} index={1}>
          Item Two
        </CustomTab>
        <CustomTab value={tabListValue} index={2}>
          Item Three
        </CustomTab>
      </Grid>
    </Container>
  );
}

const Container = styled(Grid)`
  display: flex;
  flex-direction: row;
  padding: 25px 60px;
`;
