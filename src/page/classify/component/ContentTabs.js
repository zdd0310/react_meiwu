import React, { Component } from 'react'
import { Tabs } from 'antd';
import TabsMust from "./TabsMust"

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

export default class ContentTabs extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="必买推荐" key="1">
                    <TabsMust/>
                </TabPane>
                <TabPane tab="本周新品" key="2">
                    Content of Tab Pane 2
                </TabPane>
            </Tabs>
        )
    }
}
