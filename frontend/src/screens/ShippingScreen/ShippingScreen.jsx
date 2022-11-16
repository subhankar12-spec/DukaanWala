import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ShippingScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { saveShippingInfo } from '../../redux/actions/cartActions';
import { useNavigate } from 'react-router-dom';

const ShippingScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingInfo } = cart;
  const shippingDetailsDefault = {
    fullName: shippingInfo.fullName,
    phoneNo: shippingInfo.phoneNo,
    address: shippingInfo.address,
    city: shippingInfo.city,
    state: shippingInfo.state,
    postalCode: shippingInfo.postalCode,
    country: shippingInfo.country,
  };
  const [shippingDetails, setShippingDetails] = useState(
    shippingDetailsDefault
  );
  const onChangeFunc = (e) => {
    console.log(e.target);
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    console.log(shippingDetails);
    e.preventDefault();

    dispatch(saveShippingInfo(shippingDetails));
    navigate('/order');
    // ctxDispatch({
    //   type: 'SAVE_SHIPPING_ADDRESS',
    //   payload: {
    //     fullName,
    //     address,
    //     city,
    //     postalCode,
    //     country,
    //     location: shippingAddress.location,
    //   },
    // });
    // localStorage.setItem(
    //   'shippingAddress',
    //   JSON.stringify({
    //     fullName,
    //     address,
    //     city,
    //     postalCode,
    //     country,
    //     location: shippingAddress.location,
    //   })
    // );
    // navigate('/payment');
  };
  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>
      <Row className="checkout-steps">
        <Col className={'step1' ? 'active' : ''}>Sign-In</Col>
        <Col className={'step2' ? 'active' : ''}>Shipping</Col>
        <Col className={'' ? 'active' : ''}>Payment</Col>
        <Col className={'' ? 'active' : ''}>Place Order</Col>
      </Row>
      <div className="container small-container">
        <h1 className="my-3">Shipping Address</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name="fullName"
              value={shippingDetails.fullName}
              onChange={(e) => onChangeFunc(e)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phoneNo">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="phoneNo"
              value={shippingDetails.phoneNo}
              onChange={(e) => onChangeFunc(e)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              value={shippingDetails.address}
              onChange={(e) => onChangeFunc(e)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              value={shippingDetails.city}
              onChange={(e) => onChangeFunc(e)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="city">
            <Form.Label>State</Form.Label>
            <Form.Control
              name="state"
              value={shippingDetails.state}
              onChange={(e) => onChangeFunc(e)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              name="postalCode"
              value={shippingDetails.postalCode}
              //   value={postalCode}
              onChange={(e) => onChangeFunc(e)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              name="country"
              value={shippingDetails.country}
              // value={country}
              onChange={(e) => onChangeFunc(e)}
              required
            />
          </Form.Group>
          {/* <div className="mb-3">
            <Button
              id="chooseOnMap"
              type="button"
              variant="light"
              onClick={() => navigate('/map')}
            >
              Choose Location On Map
            </Button>
            {shippingAddress.location && shippingAddress.location.lat ? (
              <div>
                LAT: {shippingAddress.location.lat}
                LNG:{shippingAddress.location.lng}
              </div>
            ) : (
              <div>No location</div>
            )}
          </div> */}

          <div className="mb-3">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ShippingScreen;
