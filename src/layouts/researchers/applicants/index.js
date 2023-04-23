import { useState, useEffect } from "react";
import { Card, Checkbox, IconButton } from "@mui/material"
import FileOpenIcon from '@mui/icons-material/FileOpen'
import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import SoftBox from "../../../components/SoftBox"
import SoftTypography from "../../../components/SoftTypography"
import Table from "../../../components/Table"
import SoftButton from "../../../components/SoftButton"
import {
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material'

// Data
import { testApplicants } from "../testData";

function ResearchApplicants() {
  const [data, setData] = useState([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    setData(testApplicants)
  }, [testApplicants])

  const columns = [
    { name: "approve", align: "center" },
    { name: "interview", align: "center" },
    { name: "name", align: "center" },
    { name: "community", align: "center" },
    { name: "response", align: "center" }
  ]

  const rows = data?.map((e) => {
    return {
      approve: <Checkbox />,
      interview: <Checkbox />,
      name: e?.name,
      community: e?.community,
      response: (
        <IconButton
          onClick={() => {
            setOpenModal(true)
          }}
        >
          <FileOpenIcon />
        </IconButton>
      )
    }
  })

  return (
    <Layout>
      <Navbar />

      <Dialog
        fullWidth
        maxWidth={'lg'}
        onClose={() => setOpenModal(false)}
        open={Boolean(openModal)}
        PaperProps={{ style: { borderRadius: 20 } }}
      >
        <DialogTitle>
          <Typography variant={'h3'}>{'Case Study Response'}</Typography>
        </DialogTitle>
        <DialogContent>
          <Collapse in={Boolean(testApplicants[0].response)}>{testApplicants[0].response}</Collapse>
        </DialogContent>
        <DialogActions disableSpacing>
          <SoftButton
            color={'secondary'}
            onClick={() => setOpenModal(false)}
            sx={{ marginRight: 2 }}
            variant={'outlined'}
          >
            {'Close'}
          </SoftButton>
        </DialogActions>
      </Dialog>

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

export default ResearchApplicants
