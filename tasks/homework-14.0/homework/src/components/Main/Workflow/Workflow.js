import React, { Component } from 'react';
import './Workflow.css';
//components
import HeaderMenu from '../Menu/HeaderMenu';
import SideMenu from "../Menu/SideMenu";
import Quened from './Quened';
import Planning from './Planning';
import Design from './Design';
import Development from './Development';
import Testing from './Testing';
import Completed from './Completed';

class Workflow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Quened:
            [
                'Wordpress theme1 / Symu.co / 2500',
                'Wordpress theme2 / Google / 3500',
                'Wordpress theme3 / Google / 500',
                'Wordpress theme4 / Symu.co / 1500'
            ],
            Design:
            [
                'Wordpress theme1 / Symu.co / 2500',
                'Wordpress theme2 / Symu.co / 3500',
                'Wordpress theme3 / Google / 500',
                'Wordpress theme4 / Symu.co / 1500'
            ],
            Planning:
            [
                'Wordpress theme1 / Symu.co / 2500',
                'Wordpress theme2 / Symu.co / 3500',
                'Wordpress theme3 / Symu.co / 500',
                'Wordpress theme4 / Symu.co / 1500'
            ],
            Development:
            [
                'Wordpress theme1 / Symu.co / 2100',
                'Wordpress theme2 / Symu.co / 3200',
                'Wordpress theme3 / Symu.co / 550',
                'Wordpress theme4 / Symu.co / 1200'
            ],
            Testing:
            [
                'Wordpress theme1 / Symu.co / 100',
                'Wordpress theme2 / Symu.co / 200',
                'Wordpress theme3 / Symu.co / 50',
                'Wordpress theme4 / Symu.co / 200'
            ],
            Completed:
            [
                'Wordpress theme1 / Google / 1100',
                'Wordpress theme2 / Symu.co / 2200',
                'Wordpress theme3 / Symu.co / 520',
                'Wordpress theme4 / Symu.co / 2200'
            ],
        }
    }
    quenedMoveToValue = (val) => {
        this.state.Quened.push(val);
        this.setState(this.state);
        this.state;
    };
    designMoveToValue = (val) => {
        this.state.Design.push(val);
        this.setState(this.state);
        this.state;
    };
    planningMoveToValue = (val) => {
        this.state.Planning.push(val);
        this.setState(this.state);
        this.state;
    };
    developmentMoveToValue = (val) => {
        this.state.Development.push(val);
        this.setState(this.state);
        this.state;
    };
    testingMoveToValue = (val) => {
        this.state.Testing.push(val);
        this.setState(this.state);
        this.state;
    };
    completedMoveToValue = (val) => {
        this.state.Completed.push(val);
        this.setState(this.state);
        this.state;
    };

    render() {
        console.log('workflowComponent');
        return (
            <div className="wrapper">
                <HeaderMenu />
                <section id="mainContent">
                    <SideMenu />
                    <section id="workflow">
                        <div className="workflowHeader">
                            <div className="title">
                                <h3>All Projects (358) <span>Workflow</span></h3>
                            </div>
                            <div className="select">
                                <span>Show projects:</span>
                                <select name="" id="">
                                    <option value="">value 1</option>
                                    <option value="">value 2</option>
                                </select>
                            </div>
                        </div>
                        <div className="workflowBlock">
                            <div className="columns">
                              <Quened
                                  value={this.state.Quened}
                                  designMoveToValue={this.designMoveToValue}
                                  planningMoveToValue={this.planningMoveToValue}
                                  developmentMoveToValue={this.developmentMoveToValue}
                                  testingMoveToValue={this.testingMoveToValue}
                                  completedMoveToValue={this.completedMoveToValue}
                              />
                            </div>
                            <div className="columns">
                                <Planning
                                    value={this.state.Planning}
                                    quenedMoveToValue={this.quenedMoveToValue}
                                    designMoveToValue={this.designMoveToValue}
                                    developmentMoveToValue={this.developmentMoveToValue}
                                    testingMoveToValue={this.testingMoveToValue}
                                    completedMoveToValue={this.completedMoveToValue}
                                />
                            </div>
                            <div className="columns">
                                <Design
                                    value={this.state.Design}
                                    quenedMoveToValue={this.quenedMoveToValue}
                                    planningMoveToValue={this.planningMoveToValue}
                                    developmentMoveToValue={this.developmentMoveToValue}
                                    testingMoveToValue={this.testingMoveToValue}
                                    completedMoveToValue={this.completedMoveToValue}
                                />
                            </div>
                            <div className="columns">
                                <Development
                                    value={this.state.Development}
                                    quenedMoveToValue={this.quenedMoveToValue}
                                    designMoveToValue={this.designMoveToValue}
                                    planningMoveToValue={this.planningMoveToValue}
                                    testingMoveToValue={this.testingMoveToValue}
                                    completedMoveToValue={this.completedMoveToValue}
                                />
                            </div>
                            <div className="columns">
                                <Testing
                                    value={this.state.Testing}
                                    quenedMoveToValue={this.quenedMoveToValue}
                                    designMoveToValue={this.designMoveToValue}
                                    planningMoveToValue={this.planningMoveToValue}
                                    developmentMoveToValue={this.developmentMoveToValue}
                                    completedMoveToValue={this.completedMoveToValue}
                                />
                            </div>
                            <div className="columns">
                                <Completed
                                    value={this.state.Completed}
                                    quenedMoveToValue={this.quenedMoveToValue}
                                    designMoveToValue={this.designMoveToValue}
                                    planningMoveToValue={this.planningMoveToValue}
                                    developmentMoveToValue={this.developmentMoveToValue}
                                    testingMoveToValue={this.testingMoveToValue}
                                />
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

export default Workflow;