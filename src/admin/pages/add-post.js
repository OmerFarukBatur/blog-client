import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography, TextField } from '@mui/material';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { convertToHTML, convertFromHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../assert/css/blog/add-blog.css";

import 'react-quill/dist/quill.snow.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import Page from '../components/common/Page';
// mock
import { AddEditorSchema } from '../components/blog/add post/add-post-validation';
import { FormProvider, RHFTextField } from '../components/hook-form';
import AddPostSidebar from '../components/blog/add post/add-post-sidebar';








// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------


export default function AddNewPost() {

  /* const _uploadCallback = (file, callback) => {
    console.log(file);
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader();
      console.log(reader);
      reader.onloadend = async () => {
        const formdata = new FormData();
        formdata.append("file", file);
        console.log(formdata.get('file').name);

        resolve({ data: { link: URL.createObjectURL(file) } });

      };
      reader.readAsDataURL(file);
    });
  }; */

  const [postTextValue, setPostTextValue] = useState(() => EditorState.createEmpty());
  const [postTitleValue, setPostTitleValue] = useState('');

  const handlePostTitle = (e) => {
    e.preventDefault();
    setPostTitleValue(e.target.value);
  };

  const navigate = useNavigate();


  return (
    <Page title="Dashboard: Blog">


      <Container maxWidth='xl'>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Add New Post
          </Typography>
        </Stack>

        <Grid justifyContent="space-between" container  >
          
            <Grid style={{ backgroundColor: "white" }} item xs={9} >
              <Stack direction={{ xs: 'column', sm: 'column' }} justifyContent="space-between" >
                <TextField size='medium' style={{width:1090,marginBottom:10}} name="postTitle" label="Post Title" variant='outlined' value={postTitleValue} onChange={handlePostTitle} />
                <Editor
                  toolbarClassName="rdw-storybook-custom-option"
                  wrapperClassName="rdw-storybook-wapper"
                  editorClassName="rdw-storybook-editor"
                  editorState={postTextValue}
                  onEditorStateChange={setPostTextValue}                  
                  toolbar={{
                    inline: { inDropdown: false },
                    list: { inDropdown: false },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: false },
                    history: { inDropdown: false },

                  }}
                />
              </Stack>
            </Grid>
          
          <Grid item xs={3} >
            <Grid item >
              <AddPostSidebar postTitleValue={postTitleValue} editorData={convertToHTML(postTextValue.getCurrentContent())} />
            </Grid>
          </Grid>
        </Grid>
      </Container>

    </Page>
  );
}


