import { useState } from "react"
import { Card, Grid, Select, MenuItem } from "@mui/material"
import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import SoftBox from "../../../components/SoftBox"
import SoftInput from "../../../components/SoftInput"
import SoftTypography from "../../../components/SoftTypography"
import SoftButton from "../../../components/SoftButton"

// Data 
import { testTribes } from "../testData";

function CreateResearcher() {
  const [name, setName] = useState('')
  const [qualifications, setQualifications] = useState('')
  const [community, setCommunity] = useState({})
  const [purpose, setPurpose] = useState('')
  const [response, setResponse] = useState('')

  return (
    <Layout>
      <Navbar />

      <SoftBox mt={4}>
        <Card sx={{ padding: 2 }}>
          <SoftBox mb={2} mt={2}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                <SoftTypography
                  variant="h6"
                >
                  {'Name'}
                </SoftTypography>
              </Grid>
              <Grid item xs={12} md={10}>
                <SoftInput value={name} onChange={(e) => setName(e.target.value)} placeholder={'Please indicate full name.'} />
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ mt: 2 }}>
              <Grid item xs={12} md={2}>
                <SoftTypography
                  variant="h6"
                >
                  {'Qualifications'}
                </SoftTypography>
              </Grid>
              <Grid item xs={12} md={10}>
                <SoftInput value={qualifications} onChange={(e) => setQualifications(e.target.value)} placeholder={'What are your qualifications?'} />
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ mt: 2 }}>
              <Grid item xs={12} md={2}>
                <SoftTypography
                  variant="h6"
                >
                  {'Community'}
                </SoftTypography>
              </Grid>
              <Grid item xs={12} md={10}>
                <Select
                  labelId="my-select-label"
                  value={community}
                  onChange={(e) => setCommunity(e.target.value)}
                >
                  {testTribes?.map((option) => (
                    <MenuItem key={option?.name} value={option?.name}>
                      {option?.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ mt: 2 }}>
              <Grid item xs={12} md={2}>
                <SoftTypography
                  variant="h6"
                >
                  {'Purpose'}
                </SoftTypography>
              </Grid>
              <Grid item xs={12} md={10}>
                <SoftInput value={purpose} onChange={(e) => setPurpose(e.target.value)} placeholder={'Why do you wish to apply as a researcher?'} />
              </Grid>
            </Grid>

            <SoftTypography
              variant="h6"
              sx={{ mt: 5, mb: 2 }}
            >
              {'Case Study: '}
            </SoftTypography>
            <SoftTypography
              variant="h6"
              sx={{ mt: 2, mb: 2 }}
            >
              {'In tincidunt eu mi id dignissim. Suspendisse potenti. Morbi porttitor ex lectus, at porttitor ante rhoncus in. Maecenas in massa justo. Vivamus lacus leo, dapibus vel felis non, pretium feugiat mauris. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sit amet facilisis sem. Phasellus congue sem dignissim consequat volutpat. In euismod suscipit quam, ac ornare metus tincidunt quis.'}
            </SoftTypography>
            <SoftInput value={response} multiline onChange={(e) => setResponse(e.target.value)} placeholder={'Type response to the case study here.'} />

            <SoftButton variant="gradient" color="info" fullWidth sx={{ mt: 5 }}>
              {'Submit Application'}
            </SoftButton>
          </SoftBox>
        </Card>
      </SoftBox>
    </Layout>
  )
}

export default CreateResearcher
