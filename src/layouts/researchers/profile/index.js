import { useEffect, useState } from "react";
import { Card, Grid, Select, MenuItem } from "@mui/material"
import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import SoftBox from "../../../components/SoftBox";
import SoftTypography from "../../../components/SoftTypography"

// Data 
import { researcherAboutData, testTribes } from "../testData"

function ResearcherProfile() {
  const [name, setName] = useState('')
  const [qualifications, setQualifications] = useState('')
  const [community, setCommunity] = useState(null)
  const [purpose, setPurpose] = useState('')
  const [response, setResponse] = useState('')

  useEffect(() => {
    setName(researcherAboutData.name)
    setQualifications(researcherAboutData.qualifications)
    setCommunity(researcherAboutData.community)
    setPurpose(researcherAboutData.purpose)
    setResponse(researcherAboutData.response)
  }, [researcherAboutData])

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
                <SoftTypography
                  variant="h6"
                >
                  {name}
                </SoftTypography>
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
                <SoftTypography
                  variant="h6"
                >
                  {qualifications}
                </SoftTypography>
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
                  disabled
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
                <SoftTypography
                  variant="h6"
                >
                  {purpose}
                </SoftTypography>
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

            <SoftTypography
              variant="h6"
              sx={{ mt: 5, mb: 2 }}
            >
              {'Case Study Response: '}
            </SoftTypography>
            <SoftTypography
              variant="h6"
            >
              {response}
            </SoftTypography>
          </SoftBox>
        </Card>
      </SoftBox>
    </Layout>
  )
}

export default ResearcherProfile
