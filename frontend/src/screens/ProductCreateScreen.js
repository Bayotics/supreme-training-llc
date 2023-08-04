import React, { useContext, useEffect, useReducer, useState, useRef} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Store } from '../Store';
import { getError } from '../utils';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Button from 'react-bootstrap/Button';
import MenuBar from '../components/tiptap.jsx';


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true, successDelete: false };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        loadingDelete: false,
        successDelete: true,
      };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false, successDelete: false };

    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
};
export default function ProductCreateScreen() {
  const navigate = useNavigate();

  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, loadingUpdate, loadingUpload, loadingDelete, successDelete}, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [courseOutline, setCourseOutline]  = useState('')
  const [dateFrom, setDateFrom]  = useState('')
  const [dateTo, setDateTo]  = useState('')
  const [attendee, setAttendee]  = useState('')
  const [duration, setDuration]  = useState('')
  const [modeOfTraining, setModeOfTraining]  = useState('')
  const [timeFrom, setTimeFrom]  = useState('')
  const [timeTo, setTimeTo]  = useState('')
  const [whatYouWillLearn, setWhatYouWillLearn]  = useState('')

  const categoriesList = [
    "", "(ISC)² (International Information System Security Certification Consortium)", "AWS", "Axelos",
    "Checkpoint", "Cisco", "Cloud computing ",
    "Phones and tablets","CompTIA (Computing Technology Industry Association)",
    "Computer security ",
    "DevOps ", "EC-Council", "Information Management", "ISACA (Information Systems Audit and Control Association) ", 
    "Management",
    "Microsoft", "Oracle", "PMI (Project Management Institute) ","Red Hat ", "VMware", "others",
  ]
  categoriesList.sort();
  const modeList = ['', 'virtual class', 'physical class'];
  modeList.sort();
  const submitHandler = async (e) => {
    console.log("Form is working")
    e.preventDefault();
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.post(
        `/api/products`,
        {
          title: title,
          price: price,
          image: image,
          images: images,
          category: category,
          brand: brand,
          countInStock: countInStock,
          description: description,
          longDescription: description,
          courseOutline: courseOutline,
          dateFrom: dateFrom,
          dateTo: dateTo,
          attendee: attendee,
          duration: duration,
          modeOfTraining: modeOfTraining,
          timeFrom: timeFrom,
          timeTo: timeTo,
          whatYouWillLearn: whatYouWillLearn
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      toast.success('Course updated successfully');
      navigate('/admin/products');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPDATE_FAIL' });
    }
  };
  const uploadFileHandler = async (e, forImages) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const { data } = await axios.post('/api/upload', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: 'UPLOAD_SUCCESS' });

      if (forImages) {
        setImages([...images, data.secure_url]);
      } else {
        setImage(data.secure_url);
      }
      toast.success('Image uploaded successfully. click Update to apply it');
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
    }
  };
  const deleteFileHandler = async (fileName, f) => {
    console.log(fileName, f);
    console.log(images);
    console.log(images.filter((x) => x !== fileName));
    setImages(images.filter((x) => x !== fileName));
    toast.success('Image removed successfully. click Update to apply it');
  };
  const cancelHandler = () => {
    navigate(`/admin/products`)
  }
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      const textboxValue = editorRef.current.getContent();
      setAttendee(textboxValue)
      console.log(textboxValue);
      console.log(attendee)
    }
  };
 const editorRefOutline = useRef(null);
  const logOutline = () => {
    if (editorRefOutline.current) {
      const textboxValueOutline = editorRefOutline.current.getContent();
      setCourseOutline(textboxValueOutline)
      console.log(textboxValueOutline);
      console.log(courseOutline)
    }
  };
  const editorReflearn = useRef(null);
  const loglearn  = () => {
    if (editorReflearn.current) {
      const textboxValuelearn  = editorReflearn.current.getContent();
      setWhatYouWillLearn(textboxValuelearn)
      console.log(textboxValuelearn);
      console.log(whatYouWillLearn)
    }
  };
    const test = (e) => {
      e.preventDefault()
      console.log(attendee)
    }
  return (
    <Container className="small-container">
      <Helmet>
        <title>Create a new Course</title>
      </Helmet>
      <h1>Create a new Course</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price in ₦</Form.Label>
            <Form.Control
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image File</Form.Label>
            <Form.Control
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imageFile">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" onChange={uploadFileHandler} />
            {loadingUpload && <LoadingBox></LoadingBox>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="additionalImage">
            <Form.Label>Additional Images</Form.Label>
            {images.length === 0 && <MessageBox>No image</MessageBox>}
            <ListGroup variant="flush">
              {images.map((x) => (
                <ListGroup.Item key={x}>
                  {x}
                  <Button variant="light" onClick={() => deleteFileHandler(x)}>
                    <i className="fa fa-times-circle"></i>
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="additionalImageFile">
            <Form.Label>Upload Aditional Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => uploadFileHandler(e, true)}
            />
            {loadingUpload && <LoadingBox></LoadingBox>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as = "select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {categoriesList.map((e) => {
                return(
                  <option key = {e}>{e}</option>
                )
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="countInStock">
            <Form.Label>Count In Stock</Form.Label>
            <Form.Control
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
              required
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="duration">
            <Form.Label>Duration (in hours)</Form.Label>
            <Form.Control
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="longDescription">
            <Form.Label>Long Description</Form.Label>
            
            <Form.Control
              className='long-input'
              placeholder='More details about the course. e.g intro, background, etc'
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dateFrom">
            <Form.Label>Date From</Form.Label>
            <input type="date" id="dateFrom" name="dateFrom"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dateTo">
            <Form.Label>Date to</Form.Label>
            <input type="date" id="dateTo" name="dateTo" 
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="timeFrom">
            <Form.Label>Start Time</Form.Label>
             <input type="time" id="timeFrom" name="timeFrom"
              value={timeFrom}
              onChange={(e) => setTimeFrom(e.target.value)}
              required
             />
          </Form.Group>
          <Form.Group className="mb-3" controlId="timeTo">
            <Form.Label>End Time</Form.Label>
            <input type="time" id="timeTo" name="timeTo" 
              value={timeTo} 
              onChange={(e) => setTimeTo(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="courseOutline">
            <Form.Label>Course Outline</Form.Label>
            <Editor
                apiKey='wiws7jycfr7rujok7lvtm1xpyo2akb2nzwbjkp8gedoqbamz'
                onInit={(evt, editor) => editorRefOutline.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
              />
              <button onClick={logOutline}>Save</button>
              {/* <Form.Control
                className='long-input'
                id="courseOutline-input"
                value={courseOutline} 
                onChange={(e) => setCourseOutline(e.target.value)}
                required/> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="timeTo">
            <Form.Label>Who Should attend?</Form.Label>
              {/* <Form.Control
                className='long-input'
                id="attendee-input"
                 value={attendee} 
              onChange={(e) => setAttendee(e.target.value)}
              required/> */}
              <Editor
                      apiKey='wiws7jycfr7rujok7lvtm1xpyo2akb2nzwbjkp8gedoqbamz'
                      onInit={(evt, editor) => editorRef.current = editor}
                      initialValue="<p>Type here</p>"
                      init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                          'bold italic forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | bullist numlist outdent indent | ' +
                          'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                      }}
                    />
                    <button onClick={log}>Save</button>
              {/* <MenuBar 
                value={attendee} 
                onChange={(e) => setAttendee(e.target.value)}
                required/> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="whatYouWillLearn">
            <Form.Label>What you will learn</Form.Label>
             <Editor
                      apiKey='wiws7jycfr7rujok7lvtm1xpyo2akb2nzwbjkp8gedoqbamz'
                      onInit={(evt, editor) => editorReflearn.current = editor}
                      initialValue="<p>Type here.</p>"
                      init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                          'bold italic forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | bullist numlist outdent indent | ' +
                          'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                      }}
                    />
                    <button onClick={loglearn}>Save</button>
              {/* <Form.Control
                className='long-input'
                id="courseOutline-input"
                value={whatYouWillLearn} 
                onChange={(e) => setWhatYouWillLearn(e.target.value)}
                required /> */}
                     
              {/* <MenuBar 
              value={whatYouWillLearn} 
              onChange={(e) => setWhatYouWillLearn(e.target.value)}
              required/> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="modeOfTraining">
            <Form.Label>Mode of training</Form.Label>
            <Form.Control
              as = "select"
              value={modeOfTraining}
              onChange={(e) => setModeOfTraining(e.target.value)}
              required
            >
              {modeList.map((e) => {
                return(
                  <option key = {e}>{e}</option>
                )
              })}
            </Form.Control>
          </Form.Group>
          <div className="mb-3">
            <Button disabled={loadingUpdate} type="submit">
              Create
            </Button>
            {loadingUpdate && <LoadingBox></LoadingBox>}

            <Button
            type="button"
            variant="danger"
            onClick={cancelHandler}
          >
            Cancel
          </Button>
          </div>
        </Form>
    </Container>
  );
}