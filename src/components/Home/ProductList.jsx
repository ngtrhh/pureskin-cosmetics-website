import Product from "./Product";

const ProductList = (props) => {
  return (
    <div className="product-mobile">
      {props.data.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
