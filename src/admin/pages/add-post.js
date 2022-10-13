import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
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
  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Add New Post
          </Typography>
        </Stack>

        <Stack mb={5} alignItems="center" justifyContent="space-between">
            <Editor  toolbarClassName="toolbarClassName" 
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName" editorStyle={{backgroundColor:"silver"}} >

            </Editor>
        </Stack>
      </Container>
    </Page>
  );
}