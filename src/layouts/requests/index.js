import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "examples/Tables/Table";
import Checkbox from "@mui/material/Checkbox";

// Data
import { testRequests } from "./requestsTestData";

function Requests() {
  const [data, setData] = useState([]) 

  useEffect(() => {
    setData(testRequests)
  }, [testRequests])

  const columns = [
    { name: "approve", align: "center" },
    { name: "onSite", align: "center" },
    { name: "name", align: "center" },
    { name: "community", align: "center" }
  ]

  const rows = data?.map((e) => {
    return {
      approve: <Checkbox />,
      onSite: <Checkbox />,
      name: e?.name,
      community: e?.community
    }
  })

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Public User Requests</SoftTypography>
          </SoftBox>
          <SoftBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={columns} rows={rows} />
          </SoftBox>
        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Requests;
