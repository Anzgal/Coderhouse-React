import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {
  getItemsFromAPI,
  getItemsFromAPIByCategory,
  exportItemsToFirestore,
} from "../services/firebase";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function ItemListContainer(props) {
  const [productsList, setProductsList] = useState([]);
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryid } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (categoryid) {
      getItemsFromAPIByCategory(categoryid)
        .then((itemsDB) => {
          setProductsList(itemsDB);
        })
        .catch((error) => {
          setFeedbackMsg(error.message);
        })
        .finally(() => setIsLoading(false));
    } else {
      getItemsFromAPI()
        .then((itemsDB) => {
          console.log("ITEMS", itemsDB);
          setProductsList(itemsDB);
        })
        .finally(() => setIsLoading(false));
    }
  }, [categoryid]);

  if (isLoading) return <Loader color="blue" size={128} />;

  return <ItemList feedbackMsg={feedbackMsg} productsList={productsList} />;
}
export default ItemListContainer;
