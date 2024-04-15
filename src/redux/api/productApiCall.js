import { productActions } from "../product-slice";

export const fetchProductsByStorehouse = async (dispatch, id) => {
  try {
    const response = await fetch(
      `http://localhost:8080/products/storehouse/${id}`
    );
    const result = await response.json();
    dispatch(productActions.getProductsByStorehouse(result));
  } catch (error) {
    console.log(error);
  }
};

export const fetchOneProduct = async (dispatch, id) => {
  try {
    const response = await fetch(`http://localhost:8080/products/${id}`);
    const result = await response.json();
    dispatch(productActions.getOneProduct(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateOneProduct = async (id, body) => {
  try {
    const response = await fetch(`http://localhost:8080/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error);
  }
};

export const addOneProduct = async (dispatch, body) => {
  try {
    const response = await fetch("http://localhost:8080/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    dispatch(productActions.createOneProduct(result));
  } catch (error) {
    console.log(error);
  }
};

export const deleteOneProduct = async (dispatch, id) => {
  try {
    const response = await fetch(`http://localhost:8080/products/${id}`, {
      method: "DELETE",
    });

    dispatch(productActions.removeOneProduct(id));
  } catch (error) {
    console.log(error);
  }
};
