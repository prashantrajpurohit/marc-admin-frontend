import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import UserController from "./controller";

export interface userPayload {
  name: string;
  phone: string;
  is_active: boolean;
  password: string;
}
const defaultPayload: userPayload = {
  name: "",
  phone: "",
  is_active: true,
  password: "",
};
const UserAddEdit = () => {
  const userController = new UserController();
  const { mutate } = useMutation({ mutationFn: userController.userAdd });
  const [userPayload, setUserPayload] = useState<userPayload>(defaultPayload);
  function handleSubmit() {
    mutate({ payload: userPayload });
  }
  return (
    <Card>
      <CardContent>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <Typography variant="h6">Add User</Typography>
            </Grid>
            <Grid item xs={3}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      onChange={(e) =>
                        setUserPayload((pre) => ({
                          ...pre,
                          ["is_active"]: e.target.checked,
                        }))
                      }
                      checked={userPayload.is_active}
                    />
                  }
                  label="is Active"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <TextField
              name="name"
              size="small"
              fullWidth
              label="Name"
              value={userPayload.name}
              onChange={(e) =>
                setUserPayload((pre) => ({
                  ...pre,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="phone"
              size="small"
              fullWidth
              label="Phone"
              onChange={(e) =>
                setUserPayload((pre) => ({
                  ...pre,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="password"
              size="small"
              fullWidth
              label="Password"
              onChange={(e) =>
                setUserPayload((pre) => ({
                  ...pre,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              sx={{ float: "right" }}
              variant="contained"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserAddEdit;
