import { Drawer, Toolbar } from "@mui/material";
import MessageButton from "../ui/MessageButton";

const drawerWidth = 400;

function Sidebar() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          marginBlockStart: "50px",
        },
        position: "relative",
      }}
      variant="permanent"
      anchor="right"
    >
      <Toolbar variant="dense" sx={{ mb: 5 }}>
        <div onDragStart={(event) => onDragStart(event, "custom")} draggable>
          <MessageButton />
        </div>
      </Toolbar>
    </Drawer>
  );
}

export default Sidebar;
