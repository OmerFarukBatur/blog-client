import * as Yup from 'yup';

const AddPostSchema = Yup.object().shape({
    postText: Yup.string().required('Blog yazısı boş bırakılamaz!')
  });

  export default AddPostSchema;