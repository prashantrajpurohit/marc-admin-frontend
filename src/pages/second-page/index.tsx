// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const SecondPage = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Area Address" />

          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField size="small" fullWidth label="Full Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  rows={1.5}
                  multiline
                  label="Address"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="City" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="Pincode" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="State" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="Distance" />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Inter State"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label=" Bill Amount not R/off"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Area Address" />

          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField size="small" fullWidth label="Contact Person" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  rows={1.5}
                  multiline
                  label="Deliver Address"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="Mobile" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="Web Address" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="Telephone" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="Email" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="Bill Prefix" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="Bill Postfix" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Area Address" />

          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField size="small" fullWidth label="OP. BAL" />
              </Grid>

              <Grid item xs={4}>
                <TextField size="small" fullWidth label="DR_CR" />
              </Grid>
              <Grid item xs={4}>
                <TextField size="small" fullWidth label="MAX_LIMIT" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="GST NO." />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="I.E.C NO." />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="UDHYAM" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="AGENT/BROKER" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="2 AGENT" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="Under Bs Group" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="Party Type" />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  size="small"
                  fullWidth
                  label="Sale Purchase Multiple"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Area Address" />

          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField size="small" fullWidth label="GP RATE" />
              </Grid>
              <Grid item xs={4}>
                <TextField size="small" fullWidth label="INTEREST RATE" />
              </Grid>
              <Grid item xs={4}>
                <TextField size="small" fullWidth label="DEP. RATE" />
              </Grid>
              <Grid item xs={4}>
                <TextField size="small" fullWidth label="ADDL. DEP. RATE" />
              </Grid>
              <Grid item xs={4}>
                <TextField size="small" fullWidth label="ASS. VALUE RATE" />
              </Grid>
              <Grid item xs={4}>
                <TextField size="small" fullWidth label="MRP % RATE" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Area Address" />

          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <TextField size="small" fullWidth label="TDS RATE" />
              </Grid>
              <Grid item xs={3}>
                <TextField size="small" fullWidth label="TDR RATE" />
              </Grid>
              <Grid item xs={3}>
                <TextField size="small" fullWidth label="TCS R/OFF RATE" />
              </Grid>
              <Grid item xs={3}>
                <TextField size="small" fullWidth label="LESS RATE" />
              </Grid>

              <Grid item xs={6}>
                <TextField size="small" fullWidth label="FIRM STATUS" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="PAN" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="EXIM CODE" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="PAN" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="AADHAAR NO." />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="TDS[194Q]" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Area Address" />

          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="Relating unit" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="head office" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="first bank name" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="Bank Acc name" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="Bank IFSC code." />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="2 Bank" />
              </Grid>
              <Grid item xs={4}>
                <TextField size="small" fullWidth label="Bank NO." />
              </Grid>
              <Grid item xs={4}>
                <TextField size="small" fullWidth label="DUE AFTER DAYS" />
              </Grid>
              <Grid item xs={4}>
                <TextField size="small" fullWidth label="GRACE DAYS." />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="Bank IFS." />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="TRANSPORT DOC." />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="DOC THROUGH" />
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" fullWidth label="CUSTOM POINT" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SecondPage;
