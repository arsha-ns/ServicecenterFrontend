import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { addWorkApi } from '../services/Api';


function WorkCreate({custId}) {


const[work,setWork]=useState({title:"",description:"",amount:""})

async function handleFormSubmit(){


    // console.log(work);

    let res= await addWorkApi(custId,work)

    console.log(res.data);

}

  return (
    <div className='border border-2 border-dark p-3 rounded'>

    <div className="row ">
        <h5 className='fw-bold text-center'>Add Work</h5>
        <div className="col-4">
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Work Title
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e)=>setWork({...work,title:e.target.value})}
                />
            </InputGroup>
        </div>
        <div className="col-4">
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Work Description
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e)=>setWork({...work,description:e.target.value})}
                />
            </InputGroup>
        </div>
        <div className="col-4">
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Amount
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e)=>setWork({...work,amount:e.target.value})}
                />
                <Button variant="secondary" id="button-addon2" onClick={handleFormSubmit}>
                    Add
                </Button>
            </InputGroup>
        </div>
    </div>

</div>
  )
}

export default WorkCreate