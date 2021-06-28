import React from "react";
import { Col, Row, Form } from "react-bootstrap";

const output = (props) => {
  const data = props.list.map((data) => {
    return (
      <Row key={data.index} 
      >
        <Col></Col>
        {data.type === 0 ? (
          <Col
            style={{
              backgroundColor: "#48BEFF",
              height: "10vh",
              padding: "10px",
            }}
          >
            <span style= {{marginLeft: "3cm"}}>{data.index}</span> 
            <span style= {{marginLeft: "2cm"}}>{data.email}</span>
            <span style= {{marginLeft: "2cm"}}>{data.fullName}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet1}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet2}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet3}</span>
          </Col>
        ) : null}
        {data.type === 1 ? (
          <Col
            style={{
              backgroundColor: "#3DFAFF",
              height: "10vh",
              padding: "10px",
            }}
          >
             <span style= {{marginLeft: "3cm"}}>{data.index}</span> 
            <span style= {{marginLeft: "2cm"}}>{data.email}</span>
            <span style= {{marginLeft: "2cm"}}>{data.fullName}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet1}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet2}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet3}</span>
          </Col>
        ) : null}
        {data.type === 2 ? (
          <Col
            style={{
              backgroundColor: "#43C59E",
              height: "10vh",
              padding: "10px",
            }}
          >
            {data.index}
            <span style= {{marginLeft: "3cm"}}>{data.index}</span> 
            <span style= {{marginLeft: "2cm"}}>{data.email}</span>
            <span style= {{marginLeft: "2cm"}}>{data.fullName}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet1}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet2}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet3}</span>
          </Col>
        ) : null}
        {data.type === 3 ? (
          <Col
            style={{
              backgroundColor: "#3D706B",
              height: "10vh",
              padding: "10px",
            }}
          >
            <span style= {{marginLeft: "3cm"}}>{data.index}</span> 
            <span style= {{marginLeft: "2cm"}}>{data.email}</span>
            <span style= {{marginLeft: "2cm"}}>{data.fullName}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet1}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet2}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet3}</span>
          </Col>
        ) : null}
        {data.type === 4 ? (
          <Col
            style={{
              backgroundColor: "#14453D",
              height: "10vh",
              padding: "10px",
            }}
          >
            <span style= {{marginLeft: "3cm"}}>{data.index}</span> 
            <span style= {{marginLeft: "2cm"}}>{data.email}</span>
            <span style= {{marginLeft: "2cm"}}>{data.fullName}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet1}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet2}</span>
            <span style= {{marginLeft: "2cm"}}>{data.wallet3}</span>
          </Col>
        ) : null}
       
        
      </Row>
    );
  });
  return (
    <div>
      <Form>{data}</Form>
    </div>
  );
};

export default output;
