import React from 'react'
import {Form, Button} from "react-bootstrap"

function NewBeer(props) {
    let {btnSubmit} = props
    
    return (
        <div>
            <Form onSubmit={btnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" placeholder="tagline" name="tagline" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="description" name="description"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control type="text" placeholder="first_brewed" name="first_brewed" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Brewer Tips</Form.Label>
                    <Form.Control type="text" placeholder="brewers_tips" name="brewers_tips"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Attenuation level</Form.Label>
                    <Form.Control type="number" placeholder="attenuation_level" name="attenuation_level"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control type="text" placeholder="contributed_by" name="contributed_by" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>
    )
}

export default NewBeer
