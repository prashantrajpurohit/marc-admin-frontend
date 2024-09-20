import axi from "src/configs/api/AxiosInterseptor";
import { userPayload } from "./addEdit";
import { ApiUrl } from "src/configs/api/apiUrls";

class UserController {
  userAdd = async ({ payload }: { payload: userPayload }) => {
    let result = await axi.post(ApiUrl.USER_ADD, payload);
    return result;
  };
}
export default UserController;
