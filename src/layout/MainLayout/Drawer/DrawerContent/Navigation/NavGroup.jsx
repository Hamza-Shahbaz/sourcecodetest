import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// material-ui
import { Box, Divider, List, Typography } from "@mui/material";

// project import
import NavItem from "./NavItem";
import NavCollapse from "./NavCollapse";

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
  const menu = useSelector((state) => state.menu);
  const { drawerOpen } = menu;

  const navCollapse = item.children?.map((menuItem) => {
    switch (menuItem.type) {
      case "collapse":
        return <NavCollapse key={menuItem.id} menu={menuItem} level={1} />;
      case "item":
        return <NavItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return (
          <Typography key={menuItem.id} variant="h6" color="error" align="center">
            Fix - Group Collapse or Items
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        subheader={
          item.title &&
          item.groupTitleVisible === true && (
            <Box sx={{ display: "flex", justifyContent: "space-around", mb: 1.5 }}>
              <Typography variant="subtitle2" color="textSecondary">
                {item.title}
              </Typography>
              {/* only available in paid version */}
            </Box>
          )
        }
        sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
      >
        {navCollapse}
      </List>
      {item.groupDivider === true && <Divider />}
    </>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object,
};

export default NavGroup;