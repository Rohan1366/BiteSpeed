import { Button, styled } from "@mui/material";
import { MessageOutlined } from "@mui/icons-material";

function MessageButton() {
  const TxtButton = styled(Button)({
    color: "#646cff",
    borderColor: "#646cff",
    padding: "20px 40px",
    flexDirection: "column",
  });
  return (
    <TxtButton
      variant="outlined"
      startIcon={<MessageOutlined />}
      size="large"
      sx={{ mt: 3 }}
    >
      Message
    </TxtButton>
  );
}

export default MessageButton;
