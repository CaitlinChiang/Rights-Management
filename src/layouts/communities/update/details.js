import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Card } from "@mui/material"
import SoftBox from "../../../components/SoftBox"
import SoftTypography from "../../../components/SoftTypography"
import SoftInput from "../../../components/SoftInput"

function CommunityUpdateDetails(community) {    
  const [etymology, setEtymology] = useState('')
  const [history, setHistory] = useState('')
  const [culture, setCulture] = useState('')
  const [education, setEducation] = useState('')
  const [economy, setEconomy] = useState('')

  useEffect(() => {
    setEtymology(community.community.etymology)
    setHistory(community.community.history)
    setCulture(community.community.culture)
    setEducation(community.community.education)
    setEconomy(community.community.economy)
  }, [community])

  return (
    <Card id="delete-account">
      <SoftBox pt={3} px={2} pb={2}>
        <SoftTypography
          variant="h5"
        >
          {'Etymology'}
        </SoftTypography>
        <SoftInput
          value={etymology}
          multiline
          sx={{ mt: 2 }}
          onChange={(e) => setEtymology(e.target.value)}
        />

        <SoftTypography
          variant="h5"
          sx={{ mt: 5 }}
        >
          {'History'}
        </SoftTypography>
        <SoftInput
          value={history}
          multiline
          sx={{ mt: 2 }}
          onChange={(e) => setHistory(e.target.value)}
        />

        <SoftTypography
          variant="h5"
          sx={{ mt: 5 }}
        >
          {'Culture'}
        </SoftTypography>
        <SoftInput
          value={culture}
          multiline
          sx={{ mt: 2 }}
          onChange={(e) => setCulture(e.target.value)}
        />

        <SoftTypography
          variant="h5"
          sx={{ mt: 5 }}
        >
          {'Education'}
        </SoftTypography>
        <SoftInput
          value={education}
          multiline
          sx={{ mt: 2 }}
          onChange={(e) => setEducation(e.target.value)}
        />

        <SoftTypography
          variant="h5"
          sx={{ mt: 5 }}
        >
          {'Economy'}
        </SoftTypography>
        <SoftInput
          value={economy}
          multiline
          sx={{ mt: 2 }}
          onChange={(e) => setEconomy(e.target.value)}
        />
      </SoftBox>
    </Card>
  );
}

CommunityUpdateDetails.propTypes = { community: PropTypes.any }

export default CommunityUpdateDetails
