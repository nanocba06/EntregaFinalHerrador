import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";
import { ItemQuantitySelector } from "../components/ItemQuantitySelector/ItemQuantitySelector";
import { LoaderComponent} from "../components/LoaderComponent/LoaderComponent"

export const Item = () => {

    const { productId } = useParams();
    const { product, loading, error } = useSingleProduct(productId);

    return (

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <Card key={product.id} style={{ width: "30rem", margin: "3rem" }}>
        <Card.Img style={{height: "27rem"}} variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <ItemQuantitySelector />
      </Card>
      )}
    </div>
    )
}