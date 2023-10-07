import * as React from "react";
import axios from "axios";
import { SnackbarProvider, useSnackbar } from "notistack";

function MyApp(prop) {
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => () => {
    enqueueSnackbar("Succesfully added " + prop.prop.name + " to cart! ", {
      variant,
    });
    console.log(prop.prop);
    const dataToSend = {
      productName: prop.prop,
    };
    axios
      .post("http://localhost:3002/addCart", dataToSend)
      .then((response) => {
        console.log(response.data.message); // This will print "Data received successfully" from the server.
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <React.Fragment>
      <button
        onClick={handleClickVariant("success")}
        className="btn alpha-button"
      >
        Add to Cart
      </button>
    </React.Fragment>
  );
}

export default function AddtoCart(prop) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp prop={prop.prop} />
    </SnackbarProvider>
  );
}
