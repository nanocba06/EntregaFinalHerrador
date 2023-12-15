import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px",
      }}
    >
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            style={{ width: "18rem", margin: 20, height: "550px" }}
          >
            <Link class="object-fit-cover" to={`/item/${product.id}`}><Card.Img variant="top" height={370} src={product.thumbnail} /></Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  )
}