import React from "react";
import { ModelContainerStyled, LinkFormMini, Form } from "../style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Tags from "./Tags";

const ModelContainer = props => {
  return (
    <ModelContainerStyled tabIndex={1}>
      <LinkFormMini>
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
                  value={props.state.linkTitle}
                  variant="outlined"
                  onChange={event =>
                    props.onChange("linkTitle", event.target.value)
                  }
                />
                <TextField
                  id="addlink-url"
                  label="URL"
                  type="url"
                  margin="normal"
                  fullWidth
                  value={props.state.url}
                  variant="outlined"
                  onChange={event => props.onChange("url", event.target.value)}
                />
                <h3>Tags</h3>
                <Tags
                  tagsView={props.state.tags}
                  onTagInputChange={tags => props.onChange("tags", tags)}
                />

                <Button
                  aria-label="Add link"
                  fullWidth
                  type="submit"
                  style={{ padding: "14px 0", borderRadius: 12, marginTop: 8 }}
                  color="secondary"
                  variant="outlined"
                >
                  <AddIcon /> Add Link
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </LinkFormMini>
    </ModelContainerStyled>
  );
};

export default ModelContainer;
