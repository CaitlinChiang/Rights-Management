import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia"
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function TribeAbout({ image, title, description, researcher, action, viewOnly }) {
  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <CardMedia
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </SoftBox>

      <SoftBox pt={3} pb={2} px={2}>
        <SoftBox mb={2}>
          <SoftTypography
            variant="h5"
            fontWeight="bold"
          >
            {title}
          </SoftTypography>
          <SoftTypography
            variant="h6"
            color="text"
            fontWeight="bold"
            sx={{ mt: 5 }}
          >
            {description}
          </SoftTypography>
          <SoftTypography
            variant="h6"
            color="text"
            fontWeight="bold"
            sx={{ mt: 2 }}
          >
            {'Assigned Researcher: ' + researcher}
          </SoftTypography>

          {!viewOnly && (
            <SoftButton
              sx={{ mt: 3 }}
              component="a"
              href={action?.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              color={action?.color}
            >
              {action?.label}
            </SoftButton>
          )}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

TribeAbout.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  researcher: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  viewOnly: PropTypes.bool
};

export default TribeAbout;
