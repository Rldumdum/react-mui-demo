import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableData.map(row => (
              <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border : 0}}}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align='center'>{row.email}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const tableData = [
  {
    id: 1,
    first_name: "Bailey",
    last_name: "Imort",
    email: "bimort0@gizmodo.com",
    gender: "Male",
    ip_address: "75.163.48.54",
  },
  {
    id: 2,
    first_name: "Alidia",
    last_name: "Lamey",
    email: "alamey1@youtube.com",
    gender: "Female",
    ip_address: "219.140.252.169",
  },
  {
    id: 3,
    first_name: "Heddi",
    last_name: "Ripping",
    email: "hripping2@ftc.gov",
    gender: "Female",
    ip_address: "213.222.41.69",
  },
  {
    id: 4,
    first_name: "Fons",
    last_name: "Barr",
    email: "fbarr3@google.pl",
    gender: "Male",
    ip_address: "139.83.149.22",
  },
  {
    id: 5,
    first_name: "Madlin",
    last_name: "Fenck",
    email: "mfenck4@weebly.com",
    gender: "Female",
    ip_address: "36.52.74.120",
  },
  {
    id: 6,
    first_name: "Emeline",
    last_name: "Broadfoot",
    email: "ebroadfoot5@washington.edu",
    gender: "Female",
    ip_address: "132.137.187.88",
  },
  {
    id: 7,
    first_name: "Salomo",
    last_name: "Werner",
    email: "swerner6@godaddy.com",
    gender: "Male",
    ip_address: "162.139.197.76",
  },
  {
    id: 8,
    first_name: "Janie",
    last_name: "Fliege",
    email: "jfliege7@cbslocal.com",
    gender: "Female",
    ip_address: "219.51.94.102",
  },
  {
    id: 9,
    first_name: "Corbie",
    last_name: "Pidgin",
    email: "cpidgin8@naver.com",
    gender: "Male",
    ip_address: "173.70.25.177",
  },
  {
    id: 10,
    first_name: "Burlie",
    last_name: "McCreath",
    email: "bmccreath9@ox.ac.uk",
    gender: "Male",
    ip_address: "252.216.14.147",
  },
];

export default MuiTable;
