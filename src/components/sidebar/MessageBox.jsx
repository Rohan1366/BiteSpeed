import {
  Box,
  Divider,
  Drawer,
  IconButton,
  TextareaAutosize,
  Toolbar,
  Typography,
} from "@mui/material";
import { KeyboardBackspaceOutlined } from "@mui/icons-material";
import styled from "@emotion/styled";

const drawerWidth = 350;

const StyledTextArea = styled(TextareaAutosize)(
  ({ theme }) => `
        width: 320px;
        height:200px
        border-radius: 10px 12px 0px 10px;
        border: 1px solid lightgrey;
        box-shadow: 0px 2px 2px lightgrey; 
        background-color: white;
        color: black;
        padding-top: 15px       
       
`
);

function MessageBox({
  nodeLabel,
  setNodeLabel,
  setSelectedNodeId,
  nodes,
  setNodes,
}) {
  const onHandleIconClick = () => {
    setSelectedNodeId(null);
    const updatedNodes = nodes.map((node) => {
      return {
        ...node,
        selected: false,
      };
    });

    setNodes(updatedNodes);
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
      <Toolbar variant="dense">
        <Box sx={{ flexGrow: 1 }}>
          <IconButton onClick={onHandleIconClick}>
            <KeyboardBackspaceOutlined />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography sx={{ fontWeight: "bold", color: "darkslategrey" }}>
            Message
          </Typography>
        </Box>
      </Toolbar>
      <Divider sx={{ backgroundColor: "grey" }} />
      <Toolbar variant="dense">
        <Typography sx={{ color: "grey" }}>Text</Typography>
      </Toolbar>
      <Toolbar variant="dense" sx={{ mb: 3 }}>
        <StyledTextArea
          minRows={3}
          onChange={(evt) => setNodeLabel(evt.target.value)}
          value={nodeLabel}
          maxLength={800}
        ></StyledTextArea>
      </Toolbar>
      <Divider sx={{ backgroundColor: "grey" }} />
    </Drawer>
  );
}

export default MessageBox;
