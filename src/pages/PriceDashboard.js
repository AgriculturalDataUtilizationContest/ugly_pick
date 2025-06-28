import { Box, Grid, styled, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import PriceCompare from "../components/PriceDashboard/Compare/PriceCompare";
import { pxToRem } from "../theme/typography";
import PricePredict from "../components/PriceDashboard/Predict/PricePredict";
import Recommand from "../components/PriceDashboard/Recommand/Recommand";
import GleePick from "../components/PriceDashboard/GleePick";
import IssueCheck from "../components/PriceDashboard/Issue/IssueCheck";

function TabContents(props) {
  const { children, value, index } = props;

  return <>{value === index && <TabContainer>{children}</TabContainer>}</>;
}

export default function PriceDashboard() {
  const [tabListValue, setTabList] = useState(0);

  const handleChange = (event, newValue) => {
    setTabList(newValue);
  };

  return (
    <Container container spacing="30px">
      <Grid size={{ md: 3 }}>
        <GleePick />
      </Grid>
      <Grid size={{ md: 9 }} sx={{ minHeight: "calc(100vh - 100px)" }}>
        <Tabs value={tabListValue} onChange={handleChange}>
          <CustomTab label="가격 비교" value={0} />
          <CustomTab label="가격 예측" value={1} />
          <CustomTab label="이슈 톡톡" value={2} />
          <CustomTab label="농산물 추천" value={3} />
        </Tabs>
        <TabContents value={tabListValue} index={0}>
          <PriceCompare />
        </TabContents>
        <TabContents value={tabListValue} index={1}>
          <PricePredict />
        </TabContents>
        <TabContents value={tabListValue} index={2}>
          <IssueCheck />
        </TabContents>
        <TabContents value={tabListValue} index={3}>
          <Recommand />
        </TabContents>
      </Grid>
    </Container>
  );
}

const Container = styled(Grid)`
  display: flex;
  flex-direction: row;
  padding: 25px 45px;
  .MuiTabs-indicator {
    height: 4px;
    bottom: 4px;
  }
`;

const TabContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.white,
  borderRadius: "8px",
  padding: "35px",
}));

const CustomTab = styled(Tab)`
  margin: 0 30px 0 0;
  font-size: ${pxToRem(18)};
  font-style: normal;
  font-weight: 700;
`;
