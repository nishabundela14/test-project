import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import archive from '../images/archive.svg';
import trash from '../images/trash.svg';

const List = ({data, fetchArchiveStatusAPI}) => {
    return (
        <>
            <Container fluid className="left list">
                <Row className="tableHead">
                        <Col>Candidate</Col>
                        <Col>Role</Col>
                        <Col>Last Communication</Col>
                        <Col>Salary</Col>
                        <Col>Sent By</Col>
                        <Col></Col>
                        <Col></Col>
                </Row>
                {
                    data.map((item) => {
                        const today = new Date(Date.now()).toLocaleDateString();
                        if (item.last_comms.date_time){
                            let tzone = 'am';
                            const date = new Date(item.last_comms.date_time).toLocaleDateString();
                            let hour = new Date(item.last_comms.date_time).getHours();
                            let min = new Date(item.last_comms.date_time).getMinutes();
                            if (hour > 12){
                                hour = hour - 12;
                                tzone = 'pm';
                            }
                            if (hour.toString().length === 1){
                                hour = '0' + hour;
                            }
                            if (min.toString().length === 1){
                                min = '0' + min;
                            }
                            const time = `${hour}:${min}${tzone}`;
                            if (today === date) {
                                item.last_comms.received_date = time;
                            } else{
                                item.last_comms.received_date = date;
                            }
                        }
                       return <Row className="tableData" key={item.candidate}>
                            <Col className={item.last_comms.unread ? 'unread' : ''}><img src={item.image} alt="user" className="user-img"/><span>{item.candidate}</span></Col>
                            <Col className={item.last_comms.unread ? 'unread' : ''}>{item.role}</Col>
                            <Col><span className={item.last_comms.unread ? 'unread' : ''}>{item.last_comms.description}</span> <span className="last-comm">{item.last_comms.received_date}</span> </Col>
                            <Col className="salary">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR',maximumSignificantDigits: 3 }).format(item.salary)}</Col>
                            <Col className={item.last_comms.unread ? 'unread' : ''}>{item.sent_by}</Col>
                            <Col><div className={item.archived ? 'archivedText archive' : 'archivedText unarchive'}><span className="dot"></span>{item.archived ? 'Archived' : 'Active'}</div></Col>
                            <Col>{
                                item.archived ?
                                <button onClick={() => fetchArchiveStatusAPI(item.candidate)}><img src={archive} alt="archive"/></button>
                                : <button onClick={() => fetchArchiveStatusAPI(item.candidate)}><img src={trash} alt="trash"/></button>
                            }</Col>
                        </Row>
                    })
                }
                
            </Container>
        </>
    )
}

export default List
