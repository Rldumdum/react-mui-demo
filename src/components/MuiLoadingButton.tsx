import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loadingIndicator="Loading..." variant="outlined">
        FetchData
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
        FetchData
      </LoadingButton>
      <LoadingButton
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Save
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Save
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoadingButton;
