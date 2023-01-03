import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Button, Grid, Typography, Container, Select, MenuItem, InputLabel, FormControl, Fab } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SaveIcon from '@mui/icons-material/Save';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createCategory, createPost, getAllCategory } from '../../../../contracts/admin-http-service';
import AddConfigurationSchema  from './add-post-validation';
import { FormProvider } from '../../hook-form';



export default function AddPostSidebar({ postTitleValue = '', editorData = '' }) {
    const navigate = useNavigate();

    const [postStatusValue, setPostStatusValue] = useState('');
    const [visibilityValue, setVisibilityValue] = useState('');
    const [readabilityValue, setReadabilityValue] = useState('');
    const [categoryValue, setCategoryValue] = useState([]);

    const [newCategoryValue, setNewCategoryValue] = useState('');

    const [categoriesValues, setCategoriesValue] = useState([]);

    const defaultValues = {
        postTitle: postTitleValue,
        postText: editorData,
        postStatus: postStatusValue,
        visibility: visibilityValue,
        readability: readabilityValue,
        category: categoryValue
    };


    const handlePostStatus = (e) => {
        defaultValues.postStatus = e.target.value;
        e.preventDefault();
        setPostStatusValue(e.target.value);

    };

    const handleVisibility = (e) => {
        defaultValues.visibility = e.target.value;
        e.preventDefault();
        setVisibilityValue(e.target.value);

    };

    const handleReadability = (e) => {
        defaultValues.readability = e.target.value;
        e.preventDefault();
        setReadabilityValue(e.target.value);

    };

    const handleCategory = (id) => () => {
        const currentIndex = categoryValue.indexOf(id);
        const newChecked = [...categoryValue];

        if (currentIndex === -1) {
            newChecked.push(id);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCategoryValue(newChecked);
    };

    const handleNewCategory = (e) => {
        e.preventDefault();
        setNewCategoryValue(e.target.value);
      };


    const methods = useForm({
        resolver: yupResolver(AddConfigurationSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isSubmittingConfiguration },
    } = methods;


    const onSubmit = async () => {
        if (defaultValues.category.length > 0 && defaultValues.postText.length > 7 && defaultValues.postTitle !== '') {
            const response = await createPost(defaultValues);
            if (response.status === 200) {
                toast("Kayıt işlemi başarıyla gerçekleştirilmiştir.",{
                    position: 'top-right',
                    type: 'success',
                    delay: 5000
                });

                navigate('/baselayout/blog', { replace: true });
            }else{
                toast("Kayıt işlemi sırasında beklenmedik bir hata oluştu..",{
                    position: 'top-right',
                    type: 'error',
                    delay: 5000
                });
            }
        }

        /* if (response.status === 200)
             onSubmitNewCategory()
           navigate('/login', { replace: true }); */
    };

    let datas = [];

    useEffect(() => {
        getAllCategories();
        
      }, []);

    const getAllCategories = async() =>{
        datas = await getAllCategory();
        setCategoriesValue(datas.data.categories);
    }


    const addCategory = async () => {
        if (newCategoryValue !== '') {
            const response = await createCategory({categoryName:newCategoryValue});
            if(response.data.message === 'Kategori başarıyla eklenmiştir.'){
                    toast(response.data.message,{
                    position: 'bottom-right',
                    type: 'success',
                    delay: 1000
                });
                await getAllCategories();
            }else{
                toast(response.data.message,{
                    position: 'bottom-right',
                    type: 'error',
                    delay: 1000                    
                });
                await getAllCategories();
            }  
               
        }
    }


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
                        <Grid direction="column" container spacing={3}>
                            <Grid container item xs={2}  >
                                <Stack direction={{ xs: 'row', sm: 'row' }} spacing={9}>
                                    <Chip sx={{ m: 0, minWidth: 60 }} icon={<FlagIcon />} label="Status: " />

                                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} size="small">
                                        <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id='postStatus'
                                            name="postStatus"
                                            value={postStatusValue}
                                            onChange={handlePostStatus}
                                            required
                                        >

                                            <MenuItem value={'Draft'}>Draft</MenuItem>
                                            <MenuItem value={'Completed'}>Publish</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>
                            </Grid>
                            <Grid container item xs={2} >
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
                                            required
                                        >

                                            <MenuItem value="Public">Public</MenuItem>
                                            <MenuItem value="Private">Private</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>
                            </Grid>

                            <Grid container item xs={2} >
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
                                            required
                                        >

                                            <MenuItem value="Ok">Ok</MenuItem>
                                            <MenuItem value="No">No</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>
                            </Grid>
                            <Grid item container>
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

                                        {categoriesValues.map(({id,categoryName},index) => (
                                                <ListItem key={`item-${sectionId}-${index}`} >
                                                    <ListItemIcon onClick={handleCategory(id)}>
                                                        <Checkbox
                                                            name='category'
                                                            edge="start"
                                                            tabIndex={-1}
                                                            disableRipple
                                                            inputProps={{ 'aria-labelledby': sectionId }}
                                                            checked={categoryValue.indexOf(id) !== -1}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText primary={categoryName} />
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
                                    value={newCategoryValue}
                                    onChange={handleNewCategory}
                                    InputProps={{
                                        endAdornment: <Fab onClick={addCategory} size='small' variant="outlined" color="primary"  ><AddIcon/> </ Fab>
                                    }}
                                />
                            </Grid>
                            <Grid item  >
                                <Stack style={{ alignItems:'center'}} spacing={4}>
                                    <Button type='submit' variant="outlined" color="primary" size='large' style={{width:240}} startIcon={<SaveIcon />}>
                                        Save
                                    </Button>                                    
                                </Stack>
                            </Grid>

                        </Grid>
                    </FormProvider>
                    <ToastContainer />
                </CardContent>
            </Card>
        </Container>
    );
}
