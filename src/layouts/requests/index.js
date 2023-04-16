import { useState, useEffect } from "react"
import { Card, Checkbox } from "@mui/material"
import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"
import SoftBox from "../../components/SoftBox"
import SoftTypography from "../../components/SoftTypography"
import Table from "../../components/Table"

// Data
import { testRequests } from "./testData"

function RequestsTable() {
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
    <Layout>
      <Navbar />

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
    </Layout>
  );
}

export default RequestsTable
