import TribeLocked from "./locked";
import TribeMoreDetails from './show'

// data
import { userTestData } from "./testData";

function TribeMore() {
  if (userTestData?.locked === true) {
    return <TribeLocked />
  } else {
    return <TribeMoreDetails />
  }
}

export default TribeMore
