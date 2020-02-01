import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import AddTask from "./AddTask";
import BasicTimePicker from "./BasicTimePicker";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import SaveIcon from "@material-ui/icons/Save";

import Theme from "../Theme";

const paperTheme = createMuiTheme({
    ...Theme.colorTheme,

    overrides: {
        MuiPaper: {
            root: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",

                minWidth: "20rem",
                minHeight: "auto",

                padding: "2rem",
            }
        }
    },
});

const defaultTheme = createMuiTheme({
    ...Theme.colorTheme,
});

class NewTaskModalForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            open: false,
        };
    }

    handleOpen() {
        this.setState({
            open: true
        });
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    render() {
        console.log(paperTheme);
        return (
            <div>
                <AddTask
                    handleClick={this.handleOpen}
                />

                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                >

                    <ThemeProvider
                        theme={paperTheme}
                    >
                        <Paper>
                            <form>
                                <Typography
                                    align="center"
                                    gutterBottom
                                >
                                    ADD NEW TASK
                                </Typography>
                                <TextField
                                    fullWidth
                                    required
                                    label="Task Title"
                                    variant="outlined"
                                />

                                <br/>
                                <br/>

                                <TextField
                                    fullWidth
                                    required
                                    label="Task Description"
                                    variant="outlined"
                                />

                                <br/>
                                <br/>

                                <ThemeProvider theme={defaultTheme}>
                                    <BasicTimePicker />
                                </ThemeProvider>

                                <br/>
                                <br/>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    fullWidth
                                    disableRipple
                                    startIcon={<SaveIcon />}
                                >
                                    Confirm
                                </Button>
                            </form>
                        </Paper>

                    </ThemeProvider>

                </Modal>
            </div>
        );
    }
}

export default NewTaskModalForm;
