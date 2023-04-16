import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function TribeDetails({ etymology, history, culture, education, economy }) {  
  return (
    <Card id="delete-account">
      <SoftBox pt={3} px={2} pb={2}>
        <SoftTypography
          variant="h5"
        >
          {'Etymology'}
        </SoftTypography>
        <SoftTypography
          variant="h6"
          color="text"
          sx={{ mt: 2 }}
        >
          {etymology}
        </SoftTypography>

        <SoftTypography
          variant="h5"
          sx={{ mt: 5 }}
        >
          {'History'}
        </SoftTypography>
        <SoftTypography
          variant="h6"
          color="text"
          sx={{ mt: 2 }}
        >
          {history}
        </SoftTypography>

        <SoftTypography
          variant="h5"
          sx={{ mt: 5 }}
        >
          {'Culture'}
        </SoftTypography>
        <SoftTypography
          variant="h6"
          color="text"
          sx={{ mt: 2 }}
        >
          {culture}
        </SoftTypography>

        <SoftTypography
          variant="h5"
          sx={{ mt: 5 }}
        >
          {'Education'}
        </SoftTypography>
        <SoftTypography
          variant="h6"
          color="text"
          sx={{ mt: 2 }}
        >
          {education}
        </SoftTypography>

        <SoftTypography
          variant="h5"
          sx={{ mt: 5 }}
        >
          {'Economy'}
        </SoftTypography>
        <SoftTypography
          variant="h6"
          color="text"
          sx={{ mt: 2 }}
        >
          {economy}
        </SoftTypography>
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
