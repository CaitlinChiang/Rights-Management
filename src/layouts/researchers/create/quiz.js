import { useState } from 'react'
import PropTypes from "prop-types"
import {
  FormGroup,
  Grid,
  FormControlLabel,
  Radio
} from '@mui/material'
import SoftTypography from "../../../components/SoftTypography"

// Data 
import { testQuiz } from "./testData";

function ShowCaseStudyTest({ showScore }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

  const handleAnswer = (value) => {
    setScore(score + value)
    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <>
      {testQuiz?.map((e, index) => {
        return (
          <>
            <SoftTypography variant={'h6'} sx={{ mt: 5 }}>
              {e.question}
            </SoftTypography>

            {e.choices.map((c, indexC) => {
              return (
                <Grid container spacing={0} key={indexC}>
                  <Grid item xs={1}>
                    <FormGroup key={index}>
                      <FormControlLabel
                        key={indexC}
                        value={c.value}
                        control={<Radio />}
                        sx={{ ml: 1 }}
                        onChange={() => handleAnswer(c.value)}
                      />  
                    </FormGroup>
                  </Grid> 
                  <Grid item xs={11}>
                    <SoftTypography variant="h6">
                      {c.label}
                    </SoftTypography>
                  </Grid> 
                </Grid>
              )
            })}
          </>
        )
      })}
        
      {showScore && (
        <SoftTypography>
          {'Score: ' + score}
        </SoftTypography>
      )}
    </>
  )
}

ShowCaseStudyTest.propTypes = {
  showScore: PropTypes.bool
}

export default ShowCaseStudyTest
