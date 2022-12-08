import React, { useState, useEffect } from "react";
//import { getSingleItemFromAPI } from "../mockService/mockService";
import { getSingleItemFromAPI } from "../../services/firebase";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackMsg, setFeedbackMsg] = useState(null);

  let params = useParams();
  let id = params.id;

  useEffect(() => {
    getSingleItemFromAPI(id)
      .then((itemsDB) => {
        console.log("then:", itemsDB);
        setProduct(itemsDB);
      })
      .catch((error) => {
        setFeedbackMsg(`Error: ${error.message}`);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading)
    return (
        <Loader />
    );

  return (
    <div>
      {feedbackMsg ? (
        <span style={{ backgroundColor: "red" }}>{feedbackMsg}</span>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
