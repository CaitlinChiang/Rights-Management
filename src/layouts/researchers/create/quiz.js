import { useState } from 'react'
import PropTypes from "prop-types"
import {
  FormControl,
  RadioGroup,
  Grid,
  FormControlLabel,
  Radio
} from '@mui/material'
import SoftTypography from "../../../components/SoftTypography"

// Data 
import { testQuiz } from "./testData";

function ShowCaseStudyTest({ showScore }) {
  const [answers, setAnswers] = useState([])

  const handleAnswer = (value, index) => {
    const ans = [...answers]
    ans[index] = value
    setAnswers(ans)
  }

  const displayScore = () => {
    const sum = answers.reduce((accumulator, currentValue) => {
      if (parseInt(currentValue) === 1) {
        return accumulator + parseInt(currentValue)
      } else {
        return accumulator
      }
    }, 0)
    
    return sum
  }

  return (
    <>
      {testQuiz?.map((e, index) => {
        return (
          <>
            <SoftTypography variant={'h6'} sx={{ mt: 5 }}>
              {e.question}
            </SoftTypography>

            <FormControl component="fieldset">
              <RadioGroup onChange={(e) => handleAnswer(e.target.value, index)}>
                {e.choices.map((c, indexC) => {
                  return (
                    <Grid container spacing={0} key={indexC}>
                      <Grid item xs={1}>
                        <FormControlLabel
                          value={c.value}
                          control={<Radio />}
                          sx={{ ml: 1 }}
                        />
                      </Grid> 
                      <Grid item xs={11}>
                        <SoftTypography variant="h6">
                          {c.label}
                        </SoftTypography>
                      </Grid> 
                    </Grid>
                  )
                })}
              </RadioGroup>
            </FormControl>
          </>
        )
      })}
        
      {showScore && (
        <SoftTypography>
          {'Score: ' + displayScore()}
        </SoftTypography>
      )}
    </>
  )
}

ShowCaseStudyTest.propTypes = {
  showScore: PropTypes.bool
}

export default ShowCaseStudyTest
