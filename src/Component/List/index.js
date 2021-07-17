import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const List = (props) => {
    return(
        <ListGroup variant="flush">
            <ListGroup.Item>
                <Row>
                    <Col><img src={props.imgList} alt='img' /></Col>    
                    <Col>{props.nameList}</Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default List 