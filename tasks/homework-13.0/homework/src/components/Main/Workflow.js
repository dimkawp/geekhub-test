import React, { Component } from 'react';
import Preloader from './Preloader';
import TopMenu from './Menu/TopMenu';
import SideMenu from './Menu/SideMenu';
import ToDo from './Workfolow/ToDo';
import InProgress from './Workfolow/InProgress';
import Completed from './Workfolow/Completed';
import Test from './Workfolow/Test';

import random from 'lodash/random';
import uniqueId from 'lodash/uniqueId';
import uniq from 'lodash/uniq';
import Sortable from 'react-sortablejs';


class Workflow extends Component {
    //JQ
    componentDidMount() {
        const $ = window.$;
    }
  constructor(props) {
    super(props);
    this.state = {
        toggleDropWorkSet: false,
        toDoArray: ['Text1', 'Text2', 'Text3'],
        inProgressArray: ['Text4', 'Text5', 'Text6', 'Text7'],
        completedArray: ['Text8', 'Text9', 'Text10', 'Text11'],
        test1: [{id: 1,title: 'title1',description: 'text1'},{id: 2,title: 'title2',description: 'text2'},{id: 3,title: 'title3',description: 'text3'}],
        test2: [{id: 1,title: 'title21',description: 'text21'},{id: 2,title: 'title22',description: 'text22'},{id: 3,title: 'title23',description: 'text23'}],
        test3: [{id: 1,title: 'title321',description: 'text321'},{id: 2,title: 'title322',description: 'text322'},{id: 3,title: 'title323',description: 'text323'}]
    };
  }

  dropWorkBtn = (e) => {
    let val = e.target.value;
    console.log(e.target.value);
    if (val === 'Text1') {
        this.setState({
            toggleDropWorkSet: !this.state.toggleDropWorkSet
        })
        console.log(this.state.toggleDropWorkSet);

    }
    else {
        console.log(this.state.toggleDropWorkSet);
    }
    
  }

render() {
    const toDoArray = this.state.toDoArray.map((val, key) => (
      <div className="item" key={uniqueId()} data-id={val}>
        <div className="preview">N</div>
        <div className="description">
          <p>{val}</p>
          <span className={val}><i></i>data</span>
        </div>
        <div className="itemControl">   
        <button className="dropWorkBtn" onClick={this.dropWorkBtn} value={val}></button>
        </div>
      </div>
    ));
    let toDoArrayCount = toDoArray.length;
    
    const inProgressArray = this.state.inProgressArray.map((val, key) => (
        <div className="item" key={uniqueId()} data-id={val}>
            <div className="preview">N</div>
            <div className="description">
            <p>{val}</p>
            <span className={val}><i></i>data</span>
            </div>
            <div className="itemControl">   
            <button className="dropWorkBtn" onClick={this.dropWorkBtn} value={val}></button>
            </div>
        </div>
    ));
    let inProgressArrayCount = inProgressArray.length;

    const completedArray = this.state.completedArray.map((val, key) => (
        <div className="item" key={uniqueId()} data-id={val}>
            <div className="preview">N</div>
            <div className="description">
                <p>{val}</p>
                <span className={val}><i></i>data</span>
            </div>
            <div className="itemControl">   
            <button className="dropWorkBtn" onClick={this.dropWorkBtn} value={val}></button>
            </div>
      </div>
    ));
    let completedArrayCount = completedArray.length;


    return (
      <div className="wrapper home">
        <Preloader />
        <SideMenu />
        <section id="mainContent">
          <TopMenu />
          <div className="content">
            <div className="workFlowComponents">
                <div className="toDo col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="header">
                        <h3>To Do <span>{"("+toDoArrayCount+")"}</span></h3>
                    </div>
                    <div className="addItem"></div>
                    <Sortable
                          options={{
                              animation: 150,
                              group: {
                                  name: 'shared',
                                  pull: true,
                                  put: true
                              }
                          }}
                          className="items"
                          ref="group-left"
                          onChange={(items) => {
                              this.setState({ toDoArray: items });
                          }}
                      >
                        {toDoArray}
                    </Sortable>
                </div>
                <div className="InProgress col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="header">
                        <h3>InProgress <span>{"("+inProgressArrayCount+")"}</span></h3>
                    </div>
                    <div className="addItem"></div>
                    <Sortable
                          options={{
                              animation: 150,
                              group: {
                                  name: 'shared',
                                  pull: true,
                                  put: true
                              }
                          }}
                          className="items"
                          ref="group-left"
                          onChange={(items) => {
                              this.setState({ inProgressArray: items });
                          }}
                      >
                          {inProgressArray}
                    </Sortable>
                </div>
                <div className="Completed col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="header">
                        <h3>Completed <span>{"("+completedArrayCount+")"}</span></h3>
                    </div>
                    <div className="addItem"></div>
                    <Sortable
                          options={{
                              animation: 150,
                              group: {
                                  name: 'shared',
                                  pull: true,
                                  put: true
                              }
                          }}
                          className="items"
                          ref="group-left"
                          onChange={(items) => {
                              this.setState({ completedArray: items });
                          }}
                      >
                          {completedArray}
                    </Sortable>
                </div>

            </div>
          </div>
        </section>
      </div>
    );
}

}

export default Workflow;
