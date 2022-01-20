import React, { useEffect, useState } from "react";
function Valid() {
  const [fromdate, setfromdate] = useState("");
  const [todate, settodate] = useState("");
  const [errorfrom, seterrorfrom] = useState(false);
  const [errorto, seterrorto] = useState(false);
  const [future, setfuture] = useState(false);

  const date = new Date();

  const from = (e) => {
    let fromval = new Date(e.target.value);
    setfromdate(fromval);
  };

  useEffect(() => {
    if (fromdate !== "") {
      if (fromdate > date) {
        seterrorfrom(true);
        setfuture(false);
        console.log(errorfrom);
      } else {
        seterrorfrom(false);

        console.log(errorfrom);
      }
    }
    setfromdate(fromdate);
  }, [fromdate]);

  const to = (e) => {
    const toval = new Date(e.target.value);
    settodate(toval);
  };
  useEffect(() => {
    if (todate !== "") {
      if (todate > date) {
        setfuture(false);

        seterrorto(true);
        console.log(errorto);
      } else {
        seterrorto(false);

        console.log(errorto);
      }
    }
    settodate(todate);
  }, [todate]);

  const validate = () => {
    if (fromdate > todate) {
      setfuture(false);
      alert("From date cannot be greater than to date");

      console.log(date);
    } else {
      setfuture(true);
    }
  };

  return (
    <div>
      <h1> Bank statement </h1>
      <div
        style={{
          backgroundColor: "black",
          width: "40%",
          margin: "auto",
          padding: "30px",
          color: "white",
        }}
      >
        FROM DATE : <input type="date" onChange={from} />
        TO DATE : <input onChange={to} type="date" />
      </div>
      {errorfrom ? <p> FROM date cannot be future date </p> : null}
      {errorto ? <p> to date cannot be future date </p> : null}

      {todate && fromdate && todate < date && fromdate < date ? (
        <button
          style={{
            padding: "10px 20px 10px 20px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "lightgreen",
          }}
          onClick={validate}
        >
          enter
        </button>
      ) : null}
      {future && <p> valid date </p>}
    </div>
  );
}

export default Valid;
