import React from "react";
import "App.css";
import VisualizerContainer from "containers/VisualizerContainer";
import CodeContainer from "containers/CodeContainer";
import { Grid } from "@material-ui/core";
import { NNStateProvider } from "state/NNState";

function MainColumnContainer() {
  return (
    <Grid container style={{ height: "100%" }}>
      <Grid item className="visualizerContainer">
        <VisualizerContainer />
      </Grid>
      <Grid item className="outerContainer codeContainer">
        <NNStateProvider>
          <CodeContainer />
        </NNStateProvider>
      </Grid>
    </Grid>
  );
}

export default MainColumnContainer;
