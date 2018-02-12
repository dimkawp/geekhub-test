import React, { Component } from 'react';

class Detail extends Component {
    render() {
      return (
        <section id="detail">
            <div className="detail-block container">
                <div className="item col-sm-12 col-xl-4">
                    <div className="img"></div>
                    <article>
                        <header>
                            <h3>Our Team</h3>
                        </header>
                        <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                        <button>our team</button>
                    </article>
                </div>
                <div className="item col-sm-12 col-xl-4">
                    <div className="img"></div>
                    <article>
                        <header>
                            <h3>Careers</h3>
                        </header>
                        <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                        <button>join team</button>
                    </article>
                </div>
                <div className="item col-sm-12 col-xl-4">
                    <div className="img"></div>
                    <article>
                        <header>
                            <h3>Services</h3>
                        </header>
                        <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                        <button>Full services</button>
                    </article>
                </div>
            </div>
        </section>
        
      );
    }
  }

export default Detail;