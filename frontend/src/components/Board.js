import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';


import AddTask from "./AddTask";
import Task from "./Task";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Theme from "../Theme";

const cardTheme = createMuiTheme({
    overrides: {
        MuiCard: {
            root: {
                minHeight: "20rem",
                maxHeight: "20rem",
                backgroundColor: Theme.colors.light,
            }
        },

        MuiCardHeader: {
            root: {
                backgroundColor: Theme.colors.secondaryDark,
            },
        },

        MuiCardContent: {
            root: {
                minHeight: "20rem",
                maxHeight: "20rem",
            }
        },

        MuiTypography: {
            colorPrimary: {
                color: Theme.colors.primary,
            }
        }
    }
});

const addTaskTheme = createMuiTheme({
    overrides: {
        MuiCard: {
            root: {
                minHeight: "20rem",
                maxHeight: "20rem",
            }
        },

        MuiCardActionArea: {
            root: {
                minHeight: "20rem",
                maxHeight: "20rem",
                backgroundColor: Theme.colors.secondaryDark,
                paddingTop: "6rem",
            }
        },

        MuiTypography: {
            colorPrimary: {
                color: Theme.colors.primary,
            }
        },

        MuiAvatar: {
            colorDefault: {
                backgroundColor: Theme.colors.primary,
                color: Theme.colors.secondaryDark,
            }
        }
    }
});

class Board extends React.Component {

    constructor(props) {
        super(props);

        this.taskCards = [];
        this.buildTaskCards();
    }

    buildTaskCards() {
        for (let i=0; i < this.props.data.length; i++) {
            this.taskCards.push(
                <Grid
                    item
                    md={3}
                    sm={4}
                >
                    <Task
                        {...this.props.data[i]}
                    />
                </Grid>
            );
        }
    }

    render() {

        return (
            <Container>
                <Grid
                    container
                    justify="center"
                    spacing={3}
                >

                    <Grid
                        item
                        md={3}
                        sm={4}
                    >
                        <ThemeProvider
                            theme={addTaskTheme}
                        >

                                <AddTask />
                        </ThemeProvider>
                    </Grid>

                    <ThemeProvider
                        theme={cardTheme}
                    >
                        { this.taskCards }
                    </ThemeProvider>

                </Grid>
            </Container>


        );
    }
}

Task.propTypes = {
    // data: PropTypes.string.isRequired,
}

export default Board;
