import React from "react";

class ShopItemClass extends React.Component {
  render() {
    const brand = this.props.item.brand
    const title = this.props.item.title
    const description = this.props.item.description
    const descriptionFull = this.props.item.descriptionFull
    const currency = this.props.item.currency;
    const price = this.props.item.price;
    
    return (
      <>
        <div className="main-content">
          <h2>{brand}</h2>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <div className="description">{descriptionFull}</div>
          <div className="highlight-window mobile">
            <div className="highlight-overlay"></div>
          </div>
          <div className="divider"></div>
          <div className="purchase-info">
            <div className="price">
              {currency + price}
            </div>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </>
    );
  }
}

export default ShopItemClass;
