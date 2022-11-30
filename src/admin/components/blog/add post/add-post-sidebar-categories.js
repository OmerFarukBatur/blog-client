// @mui
import { Stack, Button, InputAdornment, Grid, Typography, Container, FormLabel, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

import { createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';


export default function AddPostSidebarCategories() {

    return (
        <Container >

            <Card>
                <CardHeader
                    title={<Typography variant="h6" gutterBottom>
                        Categories
                    </Typography>}

                />
                <CardContent>
                    <Grid direction="column" container >
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
                            {[0, 1, 2, 3, 4].map((sectionId) => (
                                <li key={`section-${sectionId}`}>
                                    <ul>
                                        <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                                        {[0, 1, 2].map((item) => (
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

                </CardContent>
            </Card>
        </Container>
    );
}
