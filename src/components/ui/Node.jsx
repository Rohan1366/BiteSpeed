import { memo, useCallback } from "react";
import {
  Handle,
  Position,
  getConnectedEdges,
  useNodeId,
  useStore,
} from "reactflow";
import { WhatsApp, MessageRounded } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

const selector = (nodeId) => (s) => {
  const node = s.nodeInternals.get(nodeId);
  const connectedEdges = getConnectedEdges([node], s.edges);
  return connectedEdges.filter((e) => e.source === nodeId).length < 1;
};

const handleStyle = {
  width: 8,
  height: 8,
  background: "darkslategrey",
};

function Node({ data, selected }) {
  const nodeId = useNodeId();

  const isConnectable = useStore(useCallback(selector(nodeId)));

  return (
    <>
      <Handle type="target" position={Position.Left} style={handleStyle} />

      <Card
        sx={{
          minWidth: 420,
          minHeight: 90,
          borderRadius: "10px",
          border: selected ? "1px solid steelblue" : "0px",
        }}
        elevation={7}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#ADD8E6", height: 25, width: 25 }}>
              <MessageRounded style={{ color: "black", fontSize: 25 }} />
            </Avatar>
          }
          action={
            <IconButton sx={{ bgcolor: "white", height: 50, width: 50 }}>
              <WhatsApp style={{ color: "#25D366", fontSize: 25 }} />
            </IconButton>
          }
          title="Send Message"
          titleTypographyProps={{
            color: "darkslategray",
            fontWeight: "bold",
            fontSize: "18px",
            fontFamily: "sans-serif",
          }}
          sx={{ bgcolor: "#ADD8E6", height: 45 }}
        />
        <Divider />

        <CardContent sx={{ mt: 0, maxWidth: 350, overflow: "hidden" }}>
          <Typography
            sx={{
              fontFamily: "sans-serif",
              color: "darkslategray",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
            }}
          >
            {data.label}
          </Typography>
        </CardContent>
      </Card>

      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        style={handleStyle}
      />
    </>
  );
}

export default memo(Node);
