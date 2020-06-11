import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Alexandr. I love photography. I photograph people, animals, the whole world around.</p>

                <p>My dream is to one day start collaboration with National Geographic (currently working on some ideas).</p>

                <p>I'm constantly learning new things. currently those things include gaining more experience with photography</p>

                <p>I have several pages with work. You can check it out in my Instagram <a href="https://www.instagram.com/aflooe" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage.</p>

            </Content>
        </div>
    );

}

export default AboutPage;