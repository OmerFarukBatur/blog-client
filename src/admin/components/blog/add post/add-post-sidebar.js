import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Grid, Typography, Container, Select, MenuItem, InputLabel, FormControl, Fab, Chip, Card, CardContent, CardHeader, TextField } from '@mui/material';
import { Flag, Visibility, AutoStories, Save, Add, Category, UploadFile } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FileUpload from 'react-mui-fileuploader';

import { createCategory, createPost, getAllCategory } from '../../../../contracts/admin-http-service';
import AddConfigurationSchema from './add-post-validation';
import { FormProvider } from '../../hook-form';





export default function AddPostSidebar({ postTitleValue = '', editorData = '' }) {
    const navigate = useNavigate();

    const [postStatusValue, setPostStatusValue] = useState('');
    const [visibilityValue, setVisibilityValue] = useState('');
    const [readabilityValue, setReadabilityValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');

    const [newCategoryValue, setNewCategoryValue] = useState('');

    const [categoriesValues, setCategoriesValue] = useState([]);

    const [filesValue, setFilesValue] = useState([]);

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

    const handleCategory = (e) => {
        defaultValues.category = e.target.value;
        e.preventDefault();
        setCategoryValue(e.target.value);

    };

    const handleNewCategory = (e) => {
        e.preventDefault();
        setNewCategoryValue(e.target.value);
    };

    const handleFilesChange = (files) => {
        setFilesValue([...files]);
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
        if (defaultValues.postText.length > 7 && defaultValues.postTitle !== '' && filesValue.length > 0) {
            const response = await createPost(defaultValues);
            if (response.status === 200) {
                toast(response.data.message, {
                    position: 'bottom-right',
                    type: 'success',
                    delay: 1000
                });
                navigate('/baselayout/blog', { replace: true });
            } else {
                toast(response.data.message, {
                    position: 'bottom-right',
                    type: 'error',
                    delay: 1000
                });
            }
        }
    };

    let datas = [];

    useEffect(() => {
        getAllCategories();
    }, []);

    const getAllCategories = async () => {
        datas = await getAllCategory();
        setCategoriesValue(datas.data.categories);
    }


    const addCategory = async () => {
        if (newCategoryValue !== '') {
            const response = await createCategory({ categoryName: newCategoryValue });
            if (response.data.message === 'Kategori başarıyla eklenmiştir.') {
                toast(response.data.message, {
                    position: 'bottom-right',
                    type: 'success',
                    delay: 1000
                });
                await getAllCategories();
            } else {
                toast(response.data.message, {
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
                                    <Chip sx={{ m: 0, minWidth: 60 }} icon={<Flag />} label="Status: " />

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

                                            <MenuItem value={'false'}>Draft</MenuItem>
                                            <MenuItem value={'true'}>Publish</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>
                            </Grid>
                            <Grid container item xs={2} >
                                <Stack direction={{ xs: 'row', sm: 'row' }} spacing={8} >
                                    <Chip sx={{ m: 0, minWidth: 60 }} icon={<Visibility />} label="Visibility: " />

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
                                    <Chip sx={{ m: 0, minWidth: 60 }} icon={<AutoStories />} label="Readability: " />

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
                            <Grid container item xs={2}>


                                <Stack direction={{ xs: 'row', sm: 'row' }} spacing={7}>
                                    <Chip sx={{ m: 0, minWidth: 60 }} icon={<Category />} label="Category: " />

                                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} size="small">
                                        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="category"
                                            name='category'
                                            value={categoryValue}
                                            onChange={handleCategory}
                                            required
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {
                                                categoriesValues.map(({ id, categoryName }) => (
                                                    <MenuItem key={id} value={id}>{categoryName}</MenuItem>
                                                ))
                                            }

                                        </Select>
                                    </FormControl>
                                </Stack>

                            </Grid>
                            <Grid item>
                                <TextField
                                    name='newCategory'
                                    placeholder='New category'
                                    value={newCategoryValue}
                                    onChange={handleNewCategory}
                                    InputProps={{
                                        endAdornment: <Fab onClick={addCategory} size='small' variant="outlined" color="primary"  ><Add /> </ Fab>
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <FileUpload imageSrc={'../../../assert/image/blogdefault.png'} value={filesValue} onFilesChange={handleFilesChange} acceptedType={'image/*'} allowedExtensions={['png', 'jpg', 'jpeg']}  > </FileUpload>
                            </Grid>
                            <Grid item  >
                                <Stack style={{ alignItems: 'center' }} spacing={4}>
                                    <LoadingButton type='submit' variant="outlined" color="primary" size='large' style={{ width: 240 }} startIcon={<Save />} loading={isSubmittingConfiguration}>
                                        Save
                                    </LoadingButton>
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
