import "./App.css";
import { ThemeProvider, colors, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MuiResponsiveness from "./components/MuiResponsiveness";
// import MuiMasonry from "./components/MuiMasonry";
// import MuiTimeline from "./components/MuiTimeline";
// import MuiDateRangePicker from "./components/MuiDateRangePicker";
// import MuiTabs from "./components/MuiTabs";
// import MuiPicker from "./components/MuiPicker";
// import MuiLoadingButton from "./components/MuiLoadingButton";
// import MuiSkeleton from "./components/MuiSkeleton";
// import MuiProgress from "./components/MuiProgress";
// import MuiDialog from "./components/MuiDialog";
// import MuiSnackbar from "./components/MuiSnackbar";
// import MuiAlert from "./components/MuiAlert";
// import MuiTable from "./components/MuiTable";
// import MuiTooltip from "./components/MuiTooltip";
// import MuiBadge from "./components/MuiBadge";
// import MuiChip from "./components/MuiChip";
// import MuiList from "./components/MuiList";
// import MuiAvatar from "./components/MuiAvatar";
// import MuiBottomNavigation from "./components/MuiBottomNavigation";
// import MuiSpeedDial from "./components/MuiSpeedDial";
// import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
// import MuiDrawer from "./components/MuiDrawer";
// import MuiLink from "./components/MuiLink";
// import MuiNavbar from "./components/MuiNavbar";
// import MuiImageList from "./components/MuiImageList";
// import MuiAccordion from "./components/MuiAccordion";
// import MuiCard from "./components/MuiCard";
// import MuiLayout from "./components/MuiLayout";
// import MuiAutocomplete from "./components/MuiAutocomplete";
// import MuiRating from "./components/MuiRating";
// import MuiSwitch from "./components/MuiSwitch";
// import MuiCheckbox from "./components/MuiCheckbox";
// import MuiRadioButton from "./components/MuiRadioButton";
// import MuiSelect from "./components/MuiSelect";
// import MuiTypography from "./components/MuiTypography";
// import MuiButton from "./components/MuiButton";
// import MuiTextField from "./components/MuiTextField";

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral : {
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          {/* <MuiTypography /> */}
          {/* <MuiButton /> */}
          {/* <MuiTextField/> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch/> */}
          {/* <MuiRating /> */}
          {/* <MuiAutocomplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList/> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert/> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiProgress /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiPicker /> */}
          {/* <MuiDateRangePicker /> */}
          {/* <MuiTabs/> */}
          {/* <MuiTimeline /> */}
          {/* <MuiMasonry /> */}
          <MuiResponsiveness />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
