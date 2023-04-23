import { useState } from "react"
import { Card, Grid, Select, MenuItem } from "@mui/material"
import Layout from "../../../components/Layout"
import Navbar from "../../../components/Navbar"
import SoftBox from "../../../components/SoftBox"
import SoftInput from "../../../components/SoftInput"
import SoftTypography from "../../../components/SoftTypography"
import SoftButton from "../../../components/SoftButton"
import ShowCaseStudyTest from './quiz'

// Data 
import { testTribes } from "../testData";

function CreateResearcher() {
  const [name, setName] = useState('')
  const [qualifications, setQualifications] = useState('')
  const [community, setCommunity] = useState({})
  const [purpose, setPurpose] = useState('')
  const [showScore, setShowScore] = useState(false)

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
              variant="h5"
              sx={{ mt: 5, mb: 2 }}
            >
              {'Case Study: '}
            </SoftTypography>
            <SoftTypography
              variant="h5"
              sx={{ mt: 2, mb: 2 }}
            >
              {'A group of researchers from a university is interested in studying the effects of climate change on a rural community in Southeast Asia. The community relies on rice farming, fishing, and forestry for their livelihoods. The researchers plan to conduct interviews with community members, collect data on crop yields, and measure the water quality of local rivers. The researchers have obtained permission from the national government to conduct their study and have provided the community with some compensation for their time and assistance.'}
            </SoftTypography>
            <ShowCaseStudyTest showScore={showScore} />

            <SoftButton onClick={() => setShowScore(true)} variant="gradient" color="info" fullWidth sx={{ mt: 5 }}>
              {'Submit Application'}
            </SoftButton>
          </SoftBox>
        </Card>
      </SoftBox>
    </Layout>
  )
}

export default CreateResearcher
