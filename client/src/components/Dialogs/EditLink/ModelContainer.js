import React from "react";
import { ModelContainerStyled, LinkFormMini, Form } from "../style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import EditRounded from "@material-ui/icons/EditRounded";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tags from "../AddLink/Tags";

const ModelContainer = props => {
  return (
    <ModelContainerStyled tabIndex={1}>
      <LinkFormMini>
        <div className="container h-100">
          <div className="row h-100">
            <Form className="col-md-8 mx-auto text-center">
              <form onSubmit={props.handleSubmit} autoComplete="off">
                <h1 className="display-5">Edit Link</h1>
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <TextField
                    disabled
                    margin="normal"
                    label="Link ID"
                    defaultValue={props.editLink._id}
                    variant="outlined"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox 
                        value="public_link" 
                        checked={props.editLink.public_link}
                        onChange={event => props.onChange("public_link", event.target.checked)}
                      />
                    }
                    label="Public Link"
                    />
                </div>
                <TextField
                  id="addlink-title"
                  label="Link Title"
                  margin="normal"
                  type="text"
                  value={props.editLink.linkTitle}
                  fullWidth
                  variant="outlined"
                  onChange={event => props.onChange("linkTitle", event.target.value)}
                />
                <TextField
                  margin="normal"
                  id="addlink-url"
                  label="URL"
                  type="url"
                  fullWidth
                  value={props.editLink.url}
                  variant="outlined"
                  onChange={event => props.onChange("url", event.target.value)}
                />

                <h3>Tags</h3>

                <Tags tagsView={props.editLink.tags} onTagInputChange={tags => props.onChange("tags", tags)} />

                <Button aria-label="Save changes" fullWidth type="submit" style={{padding: "14px 0", borderRadius: 12, marginTop: 8}} color="secondary" variant="outlined"><EditRounded /> Save Changes</Button>
              </form>
            </Form>
          </div>
        </div>
      </LinkFormMini>
    </ModelContainerStyled>
  );
};

export default ModelContainer;
