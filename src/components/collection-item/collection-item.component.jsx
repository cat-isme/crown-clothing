import React from "react";
import { connect } from "react-redux";

import "./collection-item.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";
import {notificationAction} from '../../redux/notification/notification.reducer'

const CollectionItem = ({ item, addItem,notificationAction }) => {
  const { name, price, imageUrl } = item;

  const addNew = (item) => {
    addItem(item)
    notificationAction(`Add '${item.name}' to cart`,5000)

  }

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addNew(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  notificationAction : (message,time) => dispatch(notificationAction(message,time))
});


export default connect(null, mapDispatchToProps)(CollectionItem);
