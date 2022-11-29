// @mui
import { Stack, IconButton, InputAdornment, Grid, Typography, Container, FormLabel, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
// components
import { FormProvider, RHFTextField } from '../../hook-form';

const theme = createTheme({
    components: {
        MuiIcon: {
            styleOverrides: {
                root: {
                    // Match 24px = 3 * 2 + 1.125 * 16
                    boxSizing: 'content-box',
                    padding: 3,
                    fontSize: '1.125rem',
                },
            },
        },
    },
});


// ----------------------------------------------------------------------

export default function AddPostSidebar() {

    return (
        <Container>
            <Grid  bgcolor={'whitesmoke'} direction="column" container spacing={6} >
                <Grid item direction="row" xs={2}>
                    <Typography variant="h6" gutterBottom>
                        Actions
                    </Typography>
                </Grid>

                <Grid item direction="row" xs={2}>
                    <Stack direction={{ xs: 'row', sm: 'row' }} spacing={6}>
                        <Chip b sx={{ m: 0, minWidth: 60 }} icon={<FlagIcon />} label="Status: " />

                        <FormControl variant="filled" sx={{ m: 0, minWidth: 80 }}>
                            <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"

                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Grid>
                <Grid item direction="row" xs={2}>
                    <RHFTextField name="firstName" label="Ad" />
                    <RHFTextField name="lastName" label="Soyad" />
                </Grid>
                <Grid item direction="row" xs={2}>
                    <RHFTextField name="firstName" label="Ad" />
                    <RHFTextField name="lastName" label="Soyad" />
                </Grid>
                <Grid item direction="row" xs={2}>
                    <RHFTextField name="firstName" label="Ad" />
                    <RHFTextField name="lastName" label="Soyad" />
                </Grid>
                <Grid item direction="row" xs={2}>
                    <RHFTextField name="firstName" label="Ad" />
                    <RHFTextField name="lastName" label="Soyad" />
                </Grid>
            </Grid>
        </Container>
    );
}
