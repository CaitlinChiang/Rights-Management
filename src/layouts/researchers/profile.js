import { useEffect, useState } from "react";
import Card from '@mui/material/Card'
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

//data 
import { researcherAboutData, testTribes } from "./testTribes";

function ResearcherProfile() {
  const { name, qualifications, community, purpose, response } = researcherAboutData

  const [nameVal, setName] = useState('')
  const [qualificationsVal, setQualifications] = useState('')
  const [communityVal, setCommunity] = useState({})
  const [purposeVal, setPurpose] = useState('')
  const [responseVal, setResponse] = useState('')

  useEffect(() => {
    setName(name)
    setQualifications(qualifications)
    setCommunity(community)
    setPurpose(purpose)
    setResponse(response)
  }, [researcherAboutData])

  return (
    <DashboardLayout>
      <DashboardNavbar />

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
                  {nameVal}
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
                  {qualificationsVal}
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
                  value={communityVal}
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
                  {purposeVal}
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
              {responseVal}
            </SoftTypography>
          </SoftBox>
        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

export default ResearcherProfile;
