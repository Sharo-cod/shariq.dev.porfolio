import React, { useState, useRef } from "react";

const InvoiceAdd = () => {
  const [products, setProducts] = useState([]);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [total, setTotal] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [paidAmount, setPaidAmount] = useState(0);
  const invoiceRef = useRef();

  const handleCustomerDetailsChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    if (field === "quantity" || field === "price") {
      updatedProducts[index].totalPrice =
        updatedProducts[index].quantity * updatedProducts[index].price || 0;
    }
    setProducts(updatedProducts);
    calculateTotal(updatedProducts);
  };

  const addProductRow = () => {
    setProducts([
      ...products,
      { productName: "", quantity: 0, price: 0, totalPrice: 0 },
    ]);
  };

  const calculateTotal = (products) => {
    const total = products.reduce((sum, product) => sum + product.totalPrice, 0);
    setTotal(total);
  };

  const handleGenerateInvoice = () => {
    if (!customerDetails.name || !customerDetails.address || !customerDetails.phone) {
      alert("Please fill out all customer details.");
      return;
    }

    const printWindow = window.open("", "_blank");
    const invoiceContent = invoiceRef.current.innerHTML;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Invoice</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            th, td {
              border: 1px solid #ccc;
              padding: 8px;
            }
            th {
              background-color: #f3f3f3;
            }
            .summary {
              width: 300px;
              float: right;
              margin-top: 20px;
            }
            .summary div {
              display: flex;
              justify-content: space-between;
              margin-bottom: 6px;
            }
            @page {
              size: A4;
              margin: 10mm;
            }
          </style>
        </head>
        <body>
          ${invoiceContent}
          <script>
            window.onload = function() {
              setTimeout(() => { window.print(); window.close(); }, 100);
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="px-6 md:px-24 py-10 font-sans">
      {/* Printable Invoice */}
      <div ref={invoiceRef} className="mb-10">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Invoice - Wood Company</h1>
          <p className="text-gray-600">Phone no: 03441896295</p>
          <hr className="border-t border-gray-400 my-3" />
        </div>

        <table className="w-full mb-6 text-sm">
          <tbody>
            <tr>
              <td className="py-2"><strong>Name:</strong> {customerDetails.name}</td>
              <td className="py-2"><strong>Phone:</strong> {customerDetails.phone}</td>
            </tr>
            <tr>
              <td colSpan="2" className="py-2">
                <strong>Address:</strong> {customerDetails.address}
              </td>
            </tr>
            <tr>
              <td className="py-2"><strong>Date:</strong> {date}</td>
              <td className="py-2">
                <strong>Payment Status:</strong>
                <span
                  className={`ml-2 font-semibold ${
                    paymentStatus === "Pending"
                      ? "text-red-600"
                      : paymentStatus === "Partially Paid"
                      ? "text-orange-500"
                      : "text-green-600"
                  }`}
                >
                  {paymentStatus}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-3 py-2">Product Name</th>
              <th className="border border-gray-300 px-3 py-2">Quantity</th>
              <th className="border border-gray-300 px-3 py-2">Price</th>
              <th className="border border-gray-300 px-3 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={i}>
                <td className="border border-gray-300 px-3 py-2">{p.productName}</td>
                <td className="border border-gray-300 px-3 py-2">{p.quantity}</td>
                <td className="border border-gray-300 px-3 py-2">{p.price}</td>
                <td className="border border-gray-300 px-3 py-2">{p.totalPrice.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="float-right w-64 mt-6 text-sm">
          <div className="flex justify-between mb-2">
            <span>Total Amount:</span>
            <span>ر.ق{total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Paid Amount:</span>
            <span>ر.ق{paidAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Remaining:</span>
            <span>ر.ق{(total - paidAmount).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Editable Form */}
      <div className="border-t pt-8">
        <h2 className="text-lg font-semibold mb-4">Customer Details</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={customerDetails.name}
              onChange={handleCustomerDetailsChange}
              className="w-full border-b border-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={customerDetails.phone}
              onChange={handleCustomerDetailsChange}
              className="w-full border-b border-gray-400 focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={customerDetails.address}
            onChange={handleCustomerDetailsChange}
            className="w-full border-b border-gray-400 focus:outline-none"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block font-medium">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border-b border-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-medium">Payment Status</label>
            <select
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value)}
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none"
            >
              <option>Pending</option>
              <option>Partially Paid</option>
              <option>Fully Paid</option>
            </select>
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-4">Products</h2>
        <table className="w-full border-collapse border border-gray-300 text-sm mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-3 py-2">Product Name</th>
              <th className="border border-gray-300 px-3 py-2">Quantity</th>
              <th className="border border-gray-300 px-3 py-2">Price</th>
              <th className="border border-gray-300 px-3 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={i}>
                <td className="border border-gray-300 px-3 py-2">
                  <input
                    type="text"
                    value={product.productName}
                    onChange={(e) =>
                      handleProductChange(i, "productName", e.target.value)
                    }
                    className="w-full border-none bg-transparent focus:outline-none"
                  />
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) =>
                      handleProductChange(i, "quantity", parseFloat(e.target.value) || 0)
                    }
                    className="w-full border-none bg-transparent focus:outline-none"
                  />
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  <input
                    type="number"
                    value={product.price}
                    onChange={(e) =>
                      handleProductChange(i, "price", parseFloat(e.target.value) || 0)
                    }
                    className="w-full border-none bg-transparent focus:outline-none"
                  />
                </td>
                <td className="border border-gray-300 px-3 py-2 text-right">
                  {product.totalPrice.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={addProductRow}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Product
        </button>

        <div className="mt-6 w-full md:w-1/3 ml-auto">
          <div className="flex justify-between mb-2">
            <span>Total Amount:</span>
            <span>ر.ق{total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Paid Amount:</span>
            <input
              type="number"
              value={paidAmount}
              onChange={(e) => setPaidAmount(parseFloat(e.target.value) || 0)}
              className="w-24 border-b border-gray-400 focus:outline-none text-right"
            />
          </div>
          <div className="flex justify-between font-semibold">
            <span>Remaining:</span>
            <span>ر.ق{(total - paidAmount).toFixed(2)}</span>
          </div>
          <button
            onClick={handleGenerateInvoice}
            className="w-full mt-4 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Generate Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceAdd;
