import * as Yup from 'yup';

const AddConfigurationSchema = Yup.object().shape({
  postStatus: Yup.string().nullable(false),
  visibility: Yup.string().nullable(false),
  readability: Yup.string().nullable(false)
});


export default AddConfigurationSchema;