import * as Yup from 'yup';

const AddEditorSchema = Yup.object().shape({
    postText: Yup.string().required('Blog yazısı boş bırakılamaz!')
});

  const AddConfigurationSchema = Yup.object().shape({
    postStatus: Yup.string().nullable(false),
    visibility: Yup.string().nullable(false),
    readability: Yup.string().nullable(false),
    postTitleValue: Yup.string().nullable(false),
});

  const AddNewCategorySchema = Yup.object().shape({
    category: Yup.string().required('Lütfen yeni bir kategori giriniz!')
});

export {AddEditorSchema,AddConfigurationSchema,AddNewCategorySchema};