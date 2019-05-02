import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { productId: "", qty: 0, isCart: true };
  }

  addToCart = pid =>
    this.setState(state => ({ productId: pid, qty: state.qty + 1 }));

  removeCart = () => this.setState({ isCart: false });

  render() {
    return (
      <div>
        <button onClick={() => this.addToCart(1)}>Add to Cart</button>
        <button onClick={() => this.addToCart(2)}>Add to Cart</button>
        <button onClick={() => this.addToCart(3)}>Add to Cart</button>
        {this.state.isCart && (
          <Cart productId={this.state.productId} qty={this.state.qty} />
        )}
        {!this.state.isCart && <h3>Cart has been removed</h3>}
        <button onClick={this.removeCart}>Remove Cart</button>
      </div>
    );
  }
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { qty: this.props.qty };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.qty !== state.qty) {
      return { qty: props.qty };
    }
    return null;
  }

  componentDidMount() {
    console.log("Invoked immediately after component render");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.qty !== nextProps.qty) {
      console.log("should component update");
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.productId !== prevProps.productId) {
      console.log("component updated");
    }
  }

  componentWillUnmount() {
    console.log("component is unmounted and destroyed");
  }

  render() {
    return (
      <div>
        <h2>Cart Items ({this.state.qty})</h2>
      </div>
    );
  }
}

export default Product;
