import React, { Component } from 'react'
import { Tabs } from 'antd';
import TabsMust from "./TabsMust"
import TabsNew from "./TabsNew"

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

export default class ContentTabs extends Component {
    render() {
        return (
            <div className="tabs">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="必买推荐" key="1">
                        <TabsMust/>
                    </TabPane>
                    <TabPane tab="本周新品" key="2">
                        <TabsNew/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
