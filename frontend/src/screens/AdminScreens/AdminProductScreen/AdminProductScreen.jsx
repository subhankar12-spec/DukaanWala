import { React, useState } from 'react';
import { createProduct } from '../../../redux/actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, TextField, Button } from '@mui/material';
import Header from '../../../components/Header';

const AdminProductScreen = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set('name', name);
    myForm.set('price', price);
    myForm.set('description', description);
    myForm.set('category', category);
    myForm.set('Stock', Stock);
    console.log('working bokachoda');

    images.forEach((image) => {
      myForm.append('images', image);
    });
    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  return (
    <Box m="20px">
      <Header title="Add Products" subtitle="Fill the following details" />
      <form>
        <Box display="grid" gap="10px">
          <TextField
            fullWidth
            type={'text'}
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="name"
            sx={{ gridColumn: 'span 2' }}
          />
          <TextField
            fullWidth
            type={'text'}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            placeholder="description"
            sx={{ gridColumn: 'span 2' }}
          />
          <TextField
            fullWidth
            type={'text'}
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            variant="outlined"
            placeholder="price"
            margin="normal"
          />
          <TextField
            fullWidth
            type={'text'}
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            placeholder="category"
            margin="normal"
          />
          <Box sx={{ display: 'flex' }}>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={createProductImagesChange}
              multiple
            />

            <Button
              variant="contained"
              color="warning"
              sx={{ marginTop: 3 }}
              onClick={createProductSubmitHandler}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default AdminProductScreen;
