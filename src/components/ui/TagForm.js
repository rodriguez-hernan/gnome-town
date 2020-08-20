import React from 'react'
import { Form } from 'react-bootstrap';

const TagForm = ({ onParamChange, tags }) => {
    return (
        <Form className="mb-4">
            <Form.Group xs="auto" className="ml-2">
            {tags.map( tag => {
                return (
                    <Form.Check
                        key={tag}
                        onChange={onParamChange}
                        inline
                        value={tag}
                        name="professions"
                        label={tag}
                        type="checkbox"
                        className="mb-2"
                    />
                )
            })}
            </Form.Group>
        </Form>
    )
}

export default TagForm;

