import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
import { createPost } from '../../../../contracts/admin-http-service';
import {AddConfigurationSchema,AddNewCategorySchema} from './add-post-validation';
import { FormProvider } from '../../hook-form';


export default function AddPostSidebar({postTitlee='',editorData=''}) {
    const navigate = useNavigate();
    
    const [ postStatusValue, setPostStatusValue ] = useState('');
    const [ visibilityValue, setVisibilityValue ] = useState('');
    const [ readabilityValue, setReadabilityValue ] = useState('');
    const [ categoryValue, setCategoryValue ] = useState([]);

    const defaultValues = {
        postTitle: postTitlee,
        postText: editorData,
        postStatus: postStatusValue,
        visibility: visibilityValue,
        readability: readabilityValue,
        category: categoryValue       
    };  


    const handlePostStatus = (e) => {defaultValues.postStatus = e.target.value;
      e.preventDefault();
      setPostStatusValue(e.target.value);
      
    };

    const handleVisibility = (e) => {defaultValues.visibility = e.target.value;
        e.preventDefault();
        setVisibilityValue(e.target.value);
        
    };

    const handleReadability = (e) => {defaultValues.readability = e.target.value;
        e.preventDefault();
        setReadabilityValue(e.target.value);
        
    };

    const handleCategory = (value) => () => {
        const currentIndex = categoryValue.indexOf(value);
        const newChecked = [...categoryValue];
 
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
 
        setCategoryValue(newChecked);
    };

  
  const methods = useForm({
    resolver: yupResolver(AddConfigurationSchema),
    defaultValues,
  });  
  
  const {
    handleSubmit,
    formState: { isSubmittingConfiguration },
  } = methods;


  const defaultValuesNewCategory = {
    newCategory: '',
  };

  const methodsNewCategory = useForm({
    resolver: yupResolver(AddNewCategorySchema),
    defaultValuesNewCategory,
  });



/*   const {
    handleSubmit,
    formState: { isSubmittingNewCategory },
  } = methodsNewCategory; */

  const onSubmit = async () => {
    console.log(defaultValues);
    console.log(methods.getValues());
    
    if(methods.formState !== true){
        const response = await createPost(defaultValues);
        console.log(response);
    }    
     
   /* if (response.status === 200)
        onSubmitNewCategory()
      navigate('/login', { replace: true }); */
  };

  const onSubmitNewCategory = async () => {
    /* const response = await userRegister(methodsNewCategory.getValues());
    if (response.status === 200)
      navigate('/login', { replace: true }); */
  };

  
    return (
        <Container >

            <Card>
                <CardHeader
                    title={<Typography variant="h6" gutterBottom>
                        Actions
                    </Typography>}

                />
                <CardContent>
                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                    <Grid direction="column"  container spacing={3}>
                        <Grid container item  xs={2}  >
                            <Stack direction={{ xs: 'row', sm: 'row' }} spacing={9}>
                                <Chip  sx={{ m: 0, minWidth: 60 }} icon={<FlagIcon />} label="Status: " />

                                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id='postStatus'
                                        name="postStatus" 
                                        value={postStatusValue}     
                                        onChange={handlePostStatus}                          
                                    >

                                        <MenuItem value={'Draft'}>Draft</MenuItem>
                                        <MenuItem value={'Completed'}>Completed</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Grid>
                        <Grid container item  xs={2} >
                            <Stack direction={{ xs: 'row', sm: 'row' }} spacing={8} >
                                <Chip sx={{ m: 0, minWidth: 60 }} icon={<VisibilityIcon />} label="Visibility: " />

                                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-simple-select-filled-label">Visibility</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="visibility"
                                        name='visibility'
                                        value={visibilityValue}     
                                        onChange={handleVisibility}  
                                    >

                                        <MenuItem value="Public">Public</MenuItem>
                                        <MenuItem value="Private">Private</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Grid>

                        <Grid container item  xs={2} >
                            <Stack direction={{ xs: 'row', sm: 'row' }} spacing={6}>
                                <Chip sx={{ m: 0, minWidth: 60 }} icon={<AutoStoriesIcon />} label="Readability: " />

                                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-simple-select-filled-label">Readability</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="readability"
                                        name='readability'
                                        value={readabilityValue}     
                                        onChange={handleReadability}  
                                    >

                                        <MenuItem value="Ok">Ok</MenuItem>
                                        <MenuItem value="No">No</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Grid>
                        <Grid item  container>
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
                                                    <ListItemIcon onClick={handleCategory(item)}>
                                                        <Checkbox
                                                            name='category'
                                                            edge="start"
                                                            tabIndex={-1}
                                                            disableRipple
                                                            inputProps={{ 'aria-labelledby': sectionId }}
                                                            checked={categoryValue.indexOf(item) !== -1}
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
                                name='newCategory'
                                placeholder='New category'
                                InputProps={{
                                    endAdornment: <Button size='small' style={{width:20,height:20}} variant="outlined"  color="primary"  startIcon={<AddIcon />}/>
                                }}
                            />
                        </Grid>
                        <Grid container item  xs={2} >
                            <Stack direction={{ xs: 'row', sm: 'row' }} spacing={4}>
                                <Button type='submit' variant="outlined" color="primary" startIcon={<SaveIcon />}>
                                    Save Draft
                                </Button>
                                <Button variant="contained" color="primary" startIcon={<FileCopyIcon />}>
                                    Publish
                                </Button>
                            </Stack>
                        </Grid>

                    </Grid>
                    </FormProvider>
                </CardContent>
            </Card>
        </Container>
    );
}
