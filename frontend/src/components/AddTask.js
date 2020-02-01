import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import AddIcon from "@material-ui/icons/Add";

class AddTask extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardActionArea
                    onClick={this.props.handleClick}
                    disableRipple
                >
                    <CardContent>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                            <Grid
                                item
                                sm={4}
                            >
                                <Avatar>
                                    <AddIcon
                                        fontSize="large"
                                    />
                                </Avatar>
                            </Grid>
                        </Grid>

                        <Typography
                            align="center"
                            variant="subtitle1"
                            color="primary"
                        >
                            NEW TASK
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default AddTask;
