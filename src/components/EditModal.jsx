import React, { useState } from "react";
import {Button, Modal, Form, Col} from "react-bootstrap";
import {getAllProducts, patchProduct} from "../api"

const EditModal = ({
  setProducts,
  product,
  setEditMode,
}) => {
  const [id] = useState(product.id);
  const [name, setName] = useState(product.name);
  const [img_url, setImgUrl] = useState(product.img_url);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [inventory, setInventory] = useState(product.inventory);
  const [category, setCategory] = useState(product.category);
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setEditMode(false);
  };

  const handleEditProduct = async (event) => {
    event.preventDefault();
    try {
      await patchProduct(id, img_url, name, description, price, inventory, category);
      let updatedProducts = await getAllProducts();
      setProducts(updatedProducts.products);
      handleClose()
    } catch (err) {
      throw err;
    }
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
      <form noValidate autoComplete="off" onSubmit={handleEditProduct}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Product</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onInput={(event) => {
                setName(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onInput={(event) => {
                setDescription(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              value={img_url}
              onInput={(event) => {
                setImgUrl(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  value={price}
                  onInput={(event) => {
                    setPrice(event.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Inventory</Form.Label>
                <Form.Control
                  type="number"
                  value={inventory}
                  onInput={(event) => {
                    setInventory(event.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  defaultValue="Select..."
                  as="select"
                  title="Category"
                  value={category}
                  onInput={(event) => {
                    setCategory(event.target.value);
                  }}
                >
                  <option>Select...</option>
                  <option>Shoes</option>
                  <option>Hats</option>
                  <option>Accessories</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" >
            Save Changes
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default EditModal;
