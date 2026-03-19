import { Card, IconButton, Stack, Typography } from "@mui/material";
import { use } from "react";
import { AppContext } from "../../context/sliderContext";
import { Close } from "@mui/icons-material";

export const CardList = () => {
    const { list, deleteCardById } = use(AppContext);

    const handleDelete = (id: string) => {
        deleteCardById(id);
    };

    return (
        <Stack gap={1} alignItems="center" marginTop={4} direction="row" flexWrap="wrap" justifyContent="center">
            {list.map((item) => (
                <Card
                    sx={{
                        padding: 1,
                        border: "1px solid black",
                        borderRadius: 1,
                        width: "50px",
                        textAlign: "center",
                        position: "relative",
                    }}
                    key={item.id}
                >
                    <Typography variant="body2" sx={{ marginTop: "8px" }}>
                        {item.name}
                    </Typography>
                    <IconButton
                        size="small"
                        aria-label="delete"
                        onClick={() => handleDelete(item.id)}
                        sx={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            padding: "2px",
                            "&:hover": { backgroundColor: "salmon", color: "white" },
                        }}
                    >
                        <Close fontSize="small" sx={{ width: "16px", height: "16px" }} />
                    </IconButton>
                </Card>
            ))}
        </Stack>
    );
};