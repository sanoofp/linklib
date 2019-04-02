import React from "react";
import { ModelContainerStyled, AddLinkForm, Form } from "../style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const ModelContainer = props => {
  return (
    <ModelContainerStyled tabIndex={1}>
      <AddLinkForm>
        <div className="container h-100">
          <div className="row h-100">
            <Form className="col-md-8 mx-auto">
              <form onSubmit={props.handleSubmit} noValidate autoComplete="off">
                <h1 className="display-5">Add Link</h1>
                <TextField
                  id="addlink-title"
                  label="Link Title"
                  type="text"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  onChange={event => props.onChange("linkTitle", event.target.value)}
                />
                <TextField
                  id="addlink-url"
                  label="URL"
                  type="url"
                  margin="normal"
                  fullWidth
                  value={props.url}
                  variant="outlined"
                  onChange={event => props.onChange("url", event.target.value)}
                />
                <Button fullWidth type="submit" style={{padding: "14px 0", borderRadius: 12, marginTop: 8}} color="secondary" variant="outlined"><AddIcon /> Add Link</Button>
              </form>
            </Form>
          </div>
        </div>
      </AddLinkForm>
    </ModelContainerStyled>
  );
};

export default ModelContainer;