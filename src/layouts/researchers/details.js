import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";

function TribeDetails({ etymology, history, culture, education, economy }) {    
  const [etymologyVal, setEtymology] = useState('')
  const [historyVal, setHistory] = useState('')
  const [cultureVal, setCulture] = useState('')
  const [educationVal, setEducation] = useState('')
  const [economyVal, setEconomy] = useState('')

  useEffect(() => {
    setEtymology(etymology)
    setHistory(history)
    setCulture(culture)
    setEducation(education)
    setEconomy(economy)
  }, [etymology, history, culture, education, economy])

  return (
    <Card id="delete-account">
      <SoftBox pt={3} px={2} pb={2}>
        <SoftTypography
          variant="h5"
        >
          {'Etymology'}
        </SoftTypography>
        <SoftInput
          value={etymologyVal}
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
          value={historyVal}
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
          value={cultureVal}
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
          value={educationVal}
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
          value={economyVal}
          multiline
          sx={{ mt: 2 }}
          onChange={(e) => setEconomy(e.target.value)}
        />
      </SoftBox>
    </Card>
  );
}

TribeDetails.propTypes = {
  etymology: PropTypes.string.isRequired,
  history: PropTypes.string.isRequired,
  culture: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  economy: PropTypes.string.isRequired
};

export default TribeDetails;
