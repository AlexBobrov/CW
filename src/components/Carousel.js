import React from 'react';

import Card from '../components/Card';

import me from '../assets/images/me.jpg';
import inst from '../assets/images/inst.png';
import gallery from '../assets/images/gallery.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Instagram',
                    subTitle: 'My works there',
                    imgSrc: inst,
                    link: 'https://www.instagram.com/aflooe/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Afloo',
                    subTitle: 'VK page',
                    imgSrc: me,
                    link: 'https://vk.com/afloo',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Gallery',
                    subTitle: 'There are more pictures',
                    imgSrc: gallery,
                    link: '/gallery',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;