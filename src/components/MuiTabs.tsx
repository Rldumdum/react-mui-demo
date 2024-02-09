import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MuiTabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Item One"
              value="1"
              icon={<FavoriteIcon />}
              iconPosition="start"
            />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
        <TabPanel value="4">Panel Four</TabPanel>
        <TabPanel value="5">Panel Five</TabPanel>
        <TabPanel value="6">Panel Six</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MuiTabs;
