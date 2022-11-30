import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../assert/css/blog/add-blog.css";

import 'react-quill/dist/quill.snow.css';

import ReactQuill from 'react-quill';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { addPost } from '../../contracts/admin-http-service';

// components
import Page from '../components/common/Page';
import Iconify from '../components/common/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../components/blog';
// mock
import POSTS from '../../contracts/blog';
import AddPostSchema from '../components/blog/add post/add-post-validation';
import { FormProvider, RHFTextField } from '../components/hook-form';
import AddPostSidebar from '../components/blog/add post/add-post-sidebar';
import AddPostSidebarCategories from '../components/blog/add post/add-post-sidebar-categories';







// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------


export default function AddNewPost() {

  const _uploadCallback = (file, callback) => {
    console.log(file);
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader();
      console.log(reader);
      reader.onloadend = async () => {
        const formdata = new FormData();
        formdata.append("file", file);
        console.log(formdata.get('file').name);

        resolve({ data: { link: URL.createObjectURL(file) } });

        /* const res = await uploadFile(form_data);
        setValue("thumbnail", res.data);
        resolve({ data: { link: process.env.REACT_APP_API_URL + res.data } }); */
      };
      reader.readAsDataURL(file);
    });
  };

  const navigate = useNavigate();

  const defaultValues = {
    postText: ''
  };

  const methods = useForm({
    resolver: yupResolver(AddPostSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    const response = await addPost(methods.getValues());
    console.log(response);
    // if (response.status === 200)
    //   navigate('/login', { replace: true });
  };



  return (
    <Page title="Dashboard: Blog">

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth='xl' >
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Add New Post
            </Typography>
          </Stack>

          <Grid justifyContent="space-between" container spacing={2}>
            <Grid item xs={9} >
              <Stack direction={{ xs: 'column', sm: 'column' }} justifyContent="space-between" spacing={3}>
                <RHFTextField name="firstName" label="Your Post Title" />
                <Editor
                  toolbarClassName="rdw-storybook-custom-option"
                  wrapperClassName="rdw-storybook-wapper"
                  editorClassName="rdw-storybook-editor"
                  toolbar={{
                    image: { uploadCallback: _uploadCallback, },
                    inline: { inDropdown: false },
                    list: { inDropdown: false },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: false },
                    history: { inDropdown: false },
                  }}
                />
              </Stack>
            </Grid>
            <Grid direction="column" item xs={3}>
              <Grid item >
                <AddPostSidebar />
              </Grid>
              <Grid item marginTop={2}>
                <AddPostSidebarCategories />
              </Grid>

            </Grid>

          </Grid>

          {/* <Stack mb={5} alignItems="center" justifyContent="space-between">
            <ReactQuill
              style={{ height: 600, width: 1300 }}
              theme="snow"

              placeholder="Type..."
            />
          </Stack> */}

          <Stack marginTop={5} mb={5} alignItems="center">
            <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
              Kaydet
            </LoadingButton>
          </Stack>

        </Container>
      </FormProvider>

    </Page>
  );
}


