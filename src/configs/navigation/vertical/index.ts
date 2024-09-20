import { AbilityNames } from "src/configs/g_constants/allConstants";
import { VerticalNavItemsType } from "../../g_types/types";

const navigation = (): VerticalNavItemsType => {
  const shortcontent = [
    {
      title: "Home",
      path: "/home",
      icon: "tabler:smart-home",
    },
    {
      title: "Second Page",
      path: "/second-page",
      icon: "tabler:mail",
    },
    {
      path: "/user",
      action: "read",
      subject: "acl-page",
      title: "Users",
      icon: "tabler:shield",
    },
    {
      action: "read",
      subject: AbilityNames.ROLE_PAGE,
      title: "Role",
      icon: "tabler:users-plus",
      children: [
        {
          path: "/role",
          action: "read",
          subject: AbilityNames.ROLE_PAGE,
          title: "Role",
        },
        {
          path: "/tile-options",
          action: "read",
          subject: AbilityNames.ROLEOPTION_PAGE,
          title: "Role Options",
        },
      ],
    },
  ];

  return shortcontent;
};

export default navigation;
