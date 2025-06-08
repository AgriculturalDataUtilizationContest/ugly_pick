import { Box, Grid, styled, Tab, Tabs } from "@mui/material";
import { useState } from "react";

function TabContents(props) {
  const { children, value, index } = props;

  return <div>{value === index && <Box sx={{ p: 3 }}>{children}</Box>}</div>;
}

export default function PriceDashboard() {
  const [tabListValue, setTabList] = useState(0);

  const handleChange = (event, newValue) => {
    setTabList(newValue);
  };

  return (
    <Container container spacing="30px">
      <Grid size={{ md: 3 }} sx={{ border: "1px solid black" }}>
        이건 왼쪽
      </Grid>
      <Grid size={{ md: 9 }}>
        이건 오른쪽
        <Tabs
          value={tabListValue}
          onChange={handleChange}
          sx={{ maxWidth: "700px" }}
        >
          <CustomTab label="가격 비교" value={0} />
          <CustomTab label="가격 예측" value={1} />
          <CustomTab label="이슈 톡톡" value={2} />
          <CustomTab label="농산물 추천" value={3} />
        </Tabs>
        <TabContents value={tabListValue} index={0}>
          Item One
        </TabContents>
        <TabContents value={tabListValue} index={1}>
          Item Two
        </TabContents>
        <TabContents value={tabListValue} index={2}>
          Item Three
        </TabContents>
      </Grid>
    </Container>
  );
}

const Container = styled(Grid)`
  display: flex;
  flex-direction: row;
  padding: 25px 60px;
  .MuiTabs-indicator {
    height: 4px;
    bottom: 4px;
  }
`;

const CustomTab = styled(Tab)`
  margin: 0 auto 0 0;
`;
