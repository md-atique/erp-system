import React, { useState } from 'react';
import ProductList from './ProductManagement/ProductList';
import ProductForm from './ProductManagement/ProductForm';
import ProductEditForm from './ProductManagement/ProductEditForm';

function ProductsPage() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product A', category: 'Category A', price: '$10', stockQuantity: 100 },
        { id: 2, name: 'Product B', category: 'Category B', price: '$20', stockQuantity: 150 },
        { id: 3, name: 'Product C', category: 'Category C', price: '$30', stockQuantity: 200 },
        { id: 4, name: 'Product D', category: 'Category D', price: '$40', stockQuantity: 250 },
        { id: 5, name: 'Product E', category: 'Category E', price: '$50', stockQuantity: 300 },
        { id: 6, name: 'Product F', category: 'Category F', price: '$60', stockQuantity: 350 },
        { id: 7, name: 'Product G', category: 'Category G', price: '$70', stockQuantity: 400 },
        { id: 8, name: 'Product H', category: 'Category H', price: '$80', stockQuantity: 450 },
        { id: 9, name: 'Product I', category: 'Category I', price: '$90', stockQuantity: 500 },
        { id: 10, name: 'Product J', category: 'Category J', price: '$100', stockQuantity: 550 },
      ]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const handleAddProduct = (newProduct) => {
        setProducts([...products, { ...newProduct, id: Date.now() }]);
    };

    const handleEditProduct = (editedProduct) => {
        const updatedProducts = products.map(product =>
            product.id === editedProduct.id ? editedProduct : product
        );
        setProducts(updatedProducts);
        setIsEditing(false);
        setEditingProduct(null);
    };

    const handleDeleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    const handleEditButtonClick = (product) => {
        setIsEditing(true);
        setEditingProduct(product);
    };

    const handleCloseEditForm = () => {
        setIsEditing(false);
        setEditingProduct(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="pt-2 text-2xl text-gray-700 font-bold">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Add Product Form */}
                <div className="md:col-span-full mt-6">
                    <ProductForm onSubmit={handleAddProduct} />
                </div>
            </div>
            {/* Products List */}
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-4">
                <h2 className="text-lg text-gray-500 font-bold mb-2">Products List</h2>
                <ProductList
                    products={products}
                    onEdit={handleEditButtonClick}
                    onDelete={handleDeleteProduct}
                />
            </div>
            {/* Edit Product Form */}
            {isEditing && (
                <div className="mt-4">
                    <h2 className="text-lg text-gray-500 font-bold mb-2">Edit Product</h2>
                    <ProductEditForm product={editingProduct} onSubmit={handleEditProduct} onClose={handleCloseEditForm} />
                </div>
            )}
        </div>
    );
}

export default ProductsPage;








// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ProductList from './ProductManagement/ProductList';
// import ProductForm from './ProductManagement/ProductForm';
// import ProductEditForm from './ProductManagement/ProductEditForm';

// function ProductsPage() {
//     const [products, setProducts] = useState([
//         { id: 1, name: 'Product A', category: 'Category A', price: '$10', stockQuantity: 100 },
//         { id: 2, name: 'Product B', category: 'Category B', price: '$20', stockQuantity: 150 },
//     ]);
//     const [isEditing, setIsEditing] = useState(false);
//     const [editingProduct, setEditingProduct] = useState(null);

//     const handleAddProduct = (newProduct) => {
//         setProducts([...products, { ...newProduct, id: Date.now() }]);
//     };

//     const handleEditProduct = (editedProduct) => {
        
//         const updatedProducts = products.map(product =>
//             product.id === editedProduct.id ? editedProduct : product
//         );
//         setProducts(updatedProducts);
//         setIsEditing(false);
//         setEditingProduct(null);
//     };

//     const handleDeleteProduct = (productId) => {
//         setProducts(products.filter(product => product.id !== productId));
//     };

//     const handleEditButtonClick = (product) => {
//         setIsEditing(true);
//         setEditingProduct(product);
//     };

//     const handleCloseEditForm = () => {
//         setIsEditing(false);
//         setEditingProduct(null);
//     };

//     return (
//         <div className="container  p-4 m-2">
//             <h1 className='pt-2 text-2xl items-center text-gray-700 font-bold'>Products</h1>
//             {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-3"> */}
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
//                 {/* Product Form */}
//                 <div>
//                     <h2 className="text-lg text-gray-500 font-bold mb-2">Add Product</h2>
//                     <ProductForm onSubmit={handleAddProduct} />
//                 </div>
//                 {/* Product List */}
//                 <div>
//                     <h2 className="text-lg text-gray-500 font-bold mb-2">Products List</h2>
//                     <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//                         <ProductList
//                             products={products}
//                             onEdit={handleEditButtonClick}
//                             onDelete={handleDeleteProduct}
//                         />
//                     </div>
//                 </div>
//             </div>
//             {/* Edit Product Form */}
//             {isEditing && (
//                 <div className="mt-4">
//                     <h2 className="text-xl font-bold mb-2">Edit Product</h2>
//                     <ProductEditForm product={editingProduct} onSubmit={handleEditProduct} onClose={handleCloseEditForm} />
//                 </div>
//             )}
//             <Link to="/" className="underline"> go to dashboard</Link>
//         </div>
//     );
// }

// export default ProductsPage;
