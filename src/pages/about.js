import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div>
      <img src="/img/avatar.jpg" className="about-image"/>
      <p>I am happiest when I am challenged, and I enjoy building things and constantly learning.</p>

      <p>I have experience with HTML/CSS and most of the modern day Javascript stack. This includes core Javascript, jQuery, Node, Angular, and React, in addition to build tools like Webpack and Gulp. I think test driven development is important.</p>

      <p>Outside of programming my two main passions are Brazilian Jujitsu and playing music. Much like programming, the learning never really stops with these two activities. I train at Renzo Gracie Portland and Portland Judo. To me, grappling is a way to exercise my mind and body, and be part of a larger community. Some of my best friends have been made through training.</p>

      <p>Music is also a big part of my life, I play irish and old time music on guitar, banjo, and flute. I released a solo cd in 2010, play a lot of music with friends, and perform occasionally at house concerts and other events around the Northwest.</p>

      <p>Since 2006 I have been a lucky resident of Portland. The culture of coffee shops, food, music, and activities is a perfect fit.</p>
      </div>
    );
  }
}

export default About ;