import {ContentWrapper, MainWrapper} from "./app/style/global.styled.js";

import React from "react";

import {CustomRouter} from "./app/index.js";
import {Navigation} from "./widgets/index.js";


function App() {

  return (
  <React.Fragment>
    <MainWrapper>
      <Navigation />
      <ContentWrapper>
        <CustomRouter />
      </ContentWrapper>
    </MainWrapper>
  </React.Fragment>
  )
}

export default App
