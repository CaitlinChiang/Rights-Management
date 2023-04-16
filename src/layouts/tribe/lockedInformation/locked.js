import { useState } from "react";
import { Card, Checkbox, Grid, FormControlLabel } from "@mui/material"
import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import SoftBox from "../../../components/SoftBox"
import SoftInput from "../../../components/SoftInput"
import SoftTypography from "../../../components/SoftTypography"

function LockedInformation() {
  const [access, setAccess] = useState(false)
  const [purpose, setPurpose] = useState('')

  return (
    <Layout>
      <Navbar />

      <SoftBox mt={4}>
        <Card sx={{ padding: 2 }}>
          <SoftTypography
            variant="h5"
          >
            {'🔒 Locked Section'}
          </SoftTypography>

          <FormControlLabel
            sx={{ marginTop: 2, pl: 1.5 }}
            label={'Request Access'}
            control={
              <Checkbox checked={access} onChange={() => setAccess(!access)} />
            }
          />

          <SoftBox mb={2} mt={2}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={1}>
                <SoftTypography
                  variant="h6"
                >
                  {'Purpose'}
                </SoftTypography>
              </Grid>
              <Grid item xs={12} md={11}>
                <SoftInput value={purpose} onChange={(e) => setPurpose(e.target.value)} placeholder={'Write here the purpose for requesting of access'} />
              </Grid>
            </Grid>
          </SoftBox>
        </Card>
      </SoftBox>
    </Layout>
  )
}

export default LockedInformation
