import React, { useState } from 'react';

const ArmaTuPC = () => {
  const [productos, setProductos] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  function addToTable() {
    var nameInput = document.getElementById("name");
    var priceInput = document.getElementById("price");
    var quantityInput = document.getElementById("quantity");

    var name = nameInput.value;
    var price = priceInput.value;
    var quantity = quantityInput.value;
    var priceNum = parseFloat(price);
    var quantityNum = parseFloat(quantity);

    if (isNaN(priceNum) || isNaN(quantityNum) || priceNum <= 0 || quantityNum <= 0) {
      alert("El precio y la cantidad deben ser números positivos.");
      return;
    }

    if (name !== "" && price !== "" && quantity !== "") {
      var newProduct = {
        name: name,
        price: price,
        quantity: quantity
      };

      setProductos([...productos, newProduct]);

      nameInput.value = "";
      priceInput.value = "";
      quantityInput.value = "";
    } else {
      alert("Por favor, complete todos los campos.");
    }
  }

  function editProduct(product) {
    var nameInput = document.getElementById("name");
    var priceInput = document.getElementById("price");
    var quantityInput = document.getElementById("quantity");

    nameInput.value = product.name;
    priceInput.value = product.price;
    quantityInput.value = product.quantity;

    setEditingProduct(product);
  }

  function saveEdit() {
    var nameInput = document.getElementById("name");
    var priceInput = document.getElementById("price");
    var quantityInput = document.getElementById("quantity");

    var updatedName = nameInput.value;
    var updatedPrice = priceInput.value;
    var updatedQuantity = quantityInput.value;
    var priceNum = parseFloat(updatedPrice);
    var quantityNum = parseFloat(updatedQuantity);

    if (isNaN(priceNum) || isNaN(quantityNum) || priceNum <= 0 || quantityNum <= 0) {
      alert("El precio y la cantidad deben ser números positivos.");
      return;
    }

    if (updatedName !== "" && updatedPrice !== "" && updatedQuantity !== "") {
      var updatedProducts = productos.map((product) =>
        product === editingProduct
          ? { ...product, name: updatedName, price: updatedPrice, quantity: updatedQuantity }
          : product
      );

      setProductos(updatedProducts);

      nameInput.value = "";
      priceInput.value = "";
      quantityInput.value = "";
      setEditingProduct(null);
    } else {
      alert("Por favor, complete todos los campos.");
    }
  }

  function deleteProduct(product) {
    var updatedProducts = productos.filter((p) => p !== product);
    setProductos(updatedProducts);
  }

  function exportData() {
    var jsonData = JSON.stringify(productos);
    var dataBlob = new Blob([jsonData], { type: "application/json" });
    var downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(dataBlob);
    downloadLink.download = "data.json";
    downloadLink.click();
  }

  function importData() {
    var fileInput = document.getElementById("fileInput");
    var file = fileInput.files[0];

    if (file) { // Verifica si se seleccionó un archivo
      var reader = new FileReader();
      reader.onload = function (e) {
        var jsonData = e.target.result;
        var data = JSON.parse(jsonData);

        setProductos(data);
      };

      reader.readAsText(file);
    } else {
      alert("Por favor, seleccione un archivo JSON.");
    }
  }

  return (
    <section id="armadopc">
      <h1 className="mb-4">Arma tu PC</h1>

      <form id="myForm">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre de Producto:</label>
          <input type="text" id="name" name="name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio:</label>
          <input type="number" id="price" name="price" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Cantidad:</label>
          <input type="number" id="quantity" name="quantity" className="form-control" required />
        </div>
        <button type="button" className="btn btn-primary" onClick={editingProduct ? saveEdit : addToTable}>Agregar</button>
      </form>

      <button type="button" className="btn btn-secondary mt-2" onClick={exportData}>Exportar JSON</button>
      <input type="file" id="fileInput" className="file-input" accept=".json" />
      <button type="button" className="btn btn-secondary mt-2" onClick={importData}>Importar JSON</button>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nombre de Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Editar / Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => editProduct(product)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteProduct(product)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ArmaTuPC;
