// @mui
import { Stack, Button, InputAdornment, Grid, Typography, Container, FormLabel, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SaveIcon from '@mui/icons-material/Save';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

export default function AddPostSidebar() {

    return (
        <Container >

            <Card>
                <CardHeader
                    title={<Typography variant="h6" gutterBottom>
                        Actions
                    </Typography>}

                />
                <CardContent>
                    <Grid direction="column" container spacing={6} >
                        <Grid item direction="row" xs={2}>
                            <Stack direction={{ xs: 'row', sm: 'row' }} spacing={8}>
                                <Chip b sx={{ m: 0, minWidth: 60 }} icon={<FlagIcon />} label="Status: " />

                                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                    >

                                        <MenuItem value="Draft">Draft</MenuItem>
                                        <MenuItem value="Completed">Completed</MenuItem>
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

                                        <MenuItem value="Public">Public</MenuItem>
                                        <MenuItem value="Private">Private</MenuItem>
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

                                        <MenuItem value="Ok">Ok</MenuItem>
                                        <MenuItem value="No">No</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Grid>
                        <Grid item direction="column" container >
                            <List
                                sx={{
                                    width: '100%',
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                    position: 'relative',
                                    overflow: 'auto',
                                    maxHeight: 300,
                                    '& ul': { padding: 0 },
                                }}
                                subheader={<li />}

                            >
                                <ListSubheader>
                                    <Typography variant="h6" gutterBottom>
                                        Categories
                                    </Typography>
                                </ListSubheader>
                                {[0].map((sectionId) => (
                                    <li key={`section-${sectionId}`}>
                                        <ul>

                                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                                                <ListItem key={`item-${sectionId}-${item}`}>
                                                    <ListItemIcon>
                                                        <Checkbox
                                                            edge="start"
                                                            tabIndex={-1}
                                                            disableRipple
                                                            inputProps={{ 'aria-labelledby': sectionId }}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText primary={`Item ${item}`} />
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </List>

                        </Grid>
                        <Grid item>
                            <TextField
                                placeholder='New category'
                                InputProps={{
                                    endAdornment: <Button size='small' style={{width:20,height:20}} variant="outlined"  color="primary"  startIcon={<AddIcon />}/>
                                }}
                            />
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
