import { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { AbilityNames } from "src/configs/g_constants/allConstants";
import { useAbility } from "src/configs/g_hooks/useAbility";
import { Button, TextField } from "@mui/material";
import Searchbar from "src/configs/g_components/Searchbar";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";

import GTable from "src/configs/g_components/g_table/Table/g_table";
import UserRow from "src/configs/g_components/g_table/Rows/UserRow";
import { useQuery } from "@tanstack/react-query";
import UserController from "./controller";

const User = () => {
  const userController = new UserController();
  const { data, isPending } = useQuery({
    queryKey: ["all-user"],
    queryFn: userController.getUsers,
  });
  console.log(data);

  const [filterData, setFilteredData] = useState<Array<any>>([]);
  const TABLE_HEAD = [
    { label: "Sr no.", align: "left" },
    { label: "name", align: "left" },
    { label: "phone", align: "left" },
    { label: "status", align: "center" },
    { label: "action", align: "right" },
  ];
  const ability = useAbility();
  console.log(ability, "log");

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item xs={3}>
                <Searchbar data={[]} setFilteredData={setFilteredData} />
              </Grid>
              <Grid item xs={9}>
                <Link href={"/user/addEdit"}>
                  <Button sx={{ float: "right" }} variant="contained">
                    <AddIcon fontSize="small" /> Add User
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Grid item xs={12} sx={{ my: 4 }}>
          <GTable
            headData={TABLE_HEAD}
            data={data}
            row={UserRow}
            isLoading={isPending}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

User.acl = {
  subject: AbilityNames.ACL_PAGE,
};

export default User;
