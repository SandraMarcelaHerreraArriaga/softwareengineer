import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp
} from "@material-ui/core";
import headerImage from "../../dummy_data/images/SandraHerrera.png";
import SandraIcon from "../../dummy_data/images/SandraHerreraIcon.png";
import WaveBorder from "../../../shared/components/WaveBorder";

const styles = theme => ({

  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2)
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],

  },
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(4)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3)
    }
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important"
    }
  },
  waveBorder: {
    paddingTop: theme.spacing(1),
  }
});

function HeadSection(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div>
          <Box display="flex" justifyContent="center" className="row">

            <div className={classNames(classes.containerFix, "container")}>
              <Box justifyContent="space-around" className="row">
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <Hidden smDown>
                    <Grid item md={12}>
                      <img
                        src={SandraIcon}
                        className={classes.image}
                        alt="Sandra Herrera"
                        style={{ borderRadius: theme.spacing(15), backgroundColor: null }}
                      />
                      <Typography variant="h4" align="center">Software Engineer</Typography>

                    </Grid>
                  </Hidden>
                </Box>
              </Box>
            </div>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
