import Product from "./Product";

const ProductList = (props) => {
  return (
    <div className="product-list">
      {props.data.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
