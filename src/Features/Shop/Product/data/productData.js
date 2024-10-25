// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MDButton from "components/MDButton";

export default function data() {
  return {
    columns: [
      { Header: "name", accessor: "name", width: "45%", align: "left" },
      { Header: "unit", accessor: "unit", align: "left" },
      { Header: "price", accessor: "price", align: "center" },
      { Header: "category", accessor: "category", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        name: "Product 1",
        unit: "Number",
        price: "10000",
        category: "Main",
        action: (
          <Stack direction="row" spacing={2}>
            <MDButton variant="contained" color="info" startIcon={<DeleteIcon />}>
              View
            </MDButton>
            <MDButton variant="contained" color="warning" startIcon={<DeleteIcon />}>
              Edit
            </MDButton>
            <MDButton variant="contained" color="error" startIcon={<DeleteIcon />}>
              Delete
            </MDButton>
          </Stack>
        ),
      },
      {
        name: "Product 2",
        unit: "Number",
        price: "20000",
        category: "Main",
        action: (
          <Stack direction="row" spacing={2}>
            <MDButton variant="contained" color="info" startIcon={<DeleteIcon />}>
              View
            </MDButton>
            <MDButton variant="contained" color="warning" startIcon={<DeleteIcon />}>
              Edit
            </MDButton>
            <MDButton variant="contained" color="error" startIcon={<DeleteIcon />}>
              Delete
            </MDButton>
          </Stack>
        ),
      },
      {
        name: "Product 3",
        unit: "Number",
        price: "30000",
        category: "Main",
        action: (
          <Stack direction="row" spacing={2}>
            <MDButton variant="contained" color="info" startIcon={<DeleteIcon />}>
              View
            </MDButton>
            <MDButton variant="contained" color="warning" startIcon={<DeleteIcon />}>
              Edit
            </MDButton>
            <MDButton variant="contained" color="error" startIcon={<DeleteIcon />}>
              Delete
            </MDButton>
          </Stack>
        ),
      },
    ],
  };
}
