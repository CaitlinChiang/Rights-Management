import { useState, useEffect } from "react";
import { Card, Checkbox } from "@mui/material"
import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import SoftBox from "../../../components/SoftBox"
import SoftTypography from "../../../components/SoftTypography"
import Table from "../../../components/Table"

// Data
import { testApplicants } from "../testData";

function ResearchApplicants() {
  const [data, setData] = useState([]) 

  useEffect(() => {
    setData(testApplicants)
  }, [testApplicants])

  const columns = [
    { name: "approve", align: "center" },
    { name: "interview", align: "center" },
    { name: "name", align: "center" },
    { name: "community", align: "center" }
  ]

  const rows = data?.map((e) => {
    return {
      approve: <Checkbox />,
      interview: <Checkbox />,
      name: e?.name,
      community: e?.community
    }
  })

  return (
    <Layout>
      <Navbar />

      <SoftBox py={3}>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Research Applicants</SoftTypography>
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
    </Layout>
  );
}

export default ResearchApplicants;
