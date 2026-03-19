import { Card, Stack, Typography } from "@mui/material";
import { generateDataArray } from "../../utils/cardGenerator";
import { use } from "react";
import { AppContext } from "../../context/sliderContext";

export const CardList = () => {
    const { sliderValue } = use(AppContext);
    const list = generateDataArray(sliderValue);
    return <Stack gap={1} alignItems="center" marginTop={4} direction='row' flexWrap='wrap' justifyContent='center'>
        {list.map((item) => (
            <Card sx={{ padding: 1, border: '1px solid black', borderRadius: 1, width: '50px' }} key={item.id}>
                <Typography variant="body2">
                    {item.name}
                </Typography>
            </Card>
        ))}
    </Stack>
}