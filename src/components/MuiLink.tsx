import { Stack, Link, Typography } from "@mui/material";
const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant='body2'>Link</Link>
      <Link href="#" color="secondary" underline="none">
        Secondary
      </Link>
    </Stack>
  );
};

export default MuiLink;
