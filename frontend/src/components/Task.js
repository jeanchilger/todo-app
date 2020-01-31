import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardHeader
                    titleTypographyProps={{color:"primary"}}
                    title={ this.props.title }
                />
                    <Typography
                        align="center"
                        gutterBottom
                        variant="h4"
                    >

                    </Typography>

                <CardContent>

                    <Typography
                        color="miau"
                    >
                        { this.props.description }
                    </Typography>

                    <Typography
                        variant="subtitle2"
                    >
                    { this.props.time }
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

Task.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}

export default Task;
