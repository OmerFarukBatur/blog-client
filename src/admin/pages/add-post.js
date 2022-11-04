import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../assert/css/blog/add-blog.css";
// components
import Page from '../components/common/Page';
import Iconify from '../components/common/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../components/blog';
// mock
import POSTS from '../../contracts/blog';



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



  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Add New Post
          </Typography>
        </Stack>

        <Stack mb={5} alignItems="center" justifyContent="space-between">
            <Editor  
                toolbarClassName="rdw-storybook-custom-option" 
                wrapperClassName="rdw-storybook-wapper"
                editorClassName="rdw-storybook-editor"
                toolbar={{ 
                  image: { uploadCallback: _uploadCallback, }
                  
                }}
                >

            </Editor>
        </Stack>
      </Container>
    </Page>
  );
}


