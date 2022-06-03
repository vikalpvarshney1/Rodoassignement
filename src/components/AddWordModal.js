import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withSnackbar } from "notistack";
import {handleAddWord} from "../Redux/action"


class AddWordModal extends Component {
  state = {
    input: "",
    isDuplicate: false,
    loading: false,
  };

  setInput(input) {
    this.setState({ input });
  }


  handleAddBtn(e) {
    e.preventDefault();
    this.setState({ loading: true });
    this.props
      .handleAddWord(this.state.input)
      .then((res) => {
      
        this.props.enqueueSnackbar(`${this.state.input} added Successfully please add new word `, {
          variant: "success",
          autoHideDuration: 3000,
        });
        this.setState({ input: "", loading: false });
        this.props.handleClose();
        console.log(res);
      })
      .catch((err) => {
        this.props.enqueueSnackbar(`${this.state.input} already Exists please add new words`, {
          variant: "error",
          autoHideDuration: 3000,
        });
        this.setState({ input: "", loading: false });
        console.log(err);
      });
  }

  render() {
    const { open, handleClose } = this.props;
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" color="tert">Add To Dictionary</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="word"
            label="New Word"
            type="Text"
            onKeyUp={(e) => this.setInput(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary">
            Cancel
          </Button>
          <Button onClick={this.handleAddBtn.bind(this)} color="primary">
            {this.state.loading ? <CircularProgress size={30} /> : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = (words) => {
  return {
    words,
  };
};

export default connect(mapStateToProps, { handleAddWord })(
  withSnackbar(AddWordModal)
);
