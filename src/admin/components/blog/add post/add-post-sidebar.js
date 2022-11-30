// @mui
import { Stack, Button, InputAdornment, Grid, Typography, Container, FormLabel, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SaveIcon from '@mui/icons-material/Save';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { createTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
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
        <Container >
            
                <Card>
                    <CardHeader 
                        title= { <Typography variant="h6" gutterBottom>
                            Actions
                        </Typography>}
                        
                    />
                    <CardContent>
                        <Grid  direction="column" container spacing={6} >
                        <Grid item direction="row" xs={2}>
                    <Stack direction={{ xs: 'row', sm: 'row' }} spacing={8}>
                        <Chip b sx={{ m: 0, minWidth: 60 }} icon={<FlagIcon />} label="Status: " />

                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                            >

                                <MenuItem value={10}>Draft</MenuItem>
                                <MenuItem value={20}>Completed</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Grid>
                <Grid item direction="row" xs={2}>
                    <Stack direction={{ xs: 'row', sm: 'row' }} spacing={7}>
                        <Chip b sx={{ m: 0, minWidth: 60 }} icon={<VisibilityIcon />} label="Visibility: " />

                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-simple-select-filled-label">Visibility</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                            >

                                <MenuItem value={10}>Public</MenuItem>
                                <MenuItem value={20}>Private</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Grid>
                <Grid item direction="row" xs={2}>
                    <Stack direction={{ xs: 'row', sm: 'row' }} spacing={6}>
                        <Chip b sx={{ m: 0, minWidth: 60 }} icon={<CalendarTodayIcon />} label="Schedule: " />

                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-simple-select-filled-label">Schedule</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                            >
                                <MenuItem value={10}>Now</MenuItem>
                                <MenuItem value={20}>Completed</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Grid>
                <Grid item direction="row" xs={2}>
                    <Stack direction={{ xs: 'row', sm: 'row' }} spacing={5}>
                        <Chip b sx={{ m: 0, minWidth: 60 }} icon={<AutoStoriesIcon />} label="Readability: " />

                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-simple-select-filled-label">Readability</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                            >

                                <MenuItem value={10}>Ok</MenuItem>
                                <MenuItem value={20}>No</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Grid>
                <Grid item direction="row" xs={2}>
                    <Stack direction={{ xs: 'row', sm: 'row' }} spacing={6}>
                        <Button variant="outlined" color="primary" startIcon={<SaveIcon />}>
                            Save Draft
                        </Button>
                        <Button variant="contained" color="primary" tartIcon={<FileCopyIcon />}>
                            Publish
                        </Button>
                    </Stack>
                </Grid>

                        </Grid>

                    </CardContent>
                </Card>
        </Container>
    );
}
