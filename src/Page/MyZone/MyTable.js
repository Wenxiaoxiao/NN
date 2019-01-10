import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,Link,Switch
} from 'react-router-dom';
import { Breadcrumb,Layout,Icon,Table,Menu, Tabs,Card} from 'antd';
import './index.css';
import Api from '../../Base/api';
import Fetch from'../../Base/base';
import Common  from'../../Base/common';
// 表格组件
class MyTable extends Component {
    state = {
      // 表格内容描述
      tabDescription: '',
      // 表列描述
      columns: [],
      // 表数据
      data: [],
    }
    
    // 任务列表请求
    // taskFetch() {
    //   // this.setState
    //   Fetch('',{param:'task'}).then((res) => {
    //     if (res && res.data.length > 0) {
    //       this.setState({
    //         dataSource: [{
    //           key: '1',
    //           id: 1,
    //           name: 'John Brown',
    //           endDate: '2018-08-09',
    //           status: '激活',
    //           stage: '测试完成',
    //         }, {
    //           key: '2',
    //           id: 2,
    //           name: 'Jim Green',
    //           endDate: '2018-08-09',
    //           status: '激活',
    //           stage: '测试完成',
    //         }, {
    //           key: '3',
    //           id: 3,
    //           name: 'Joe Black',
    //           endDate: '2018-08-09',
    //           status: '激活',
    //           stage: '测试完成',
    //         }]
    //       })
    //     }
    //   })
    // }
    componentDidMount() {
      console.log(" 测试："+JSON.stringify(this.props.dataSource))   
    }
  
    render() {
      let {tabDescription,columns,dataSource} = this.props;
      return (
        <Card title={tabDescription} style={{ background: '#fff', padding: 24}}>
          <Table pagination={{pageSize:2,pageSizeOptions:'2'}} columns={columns} dataSource={dataSource} bordered={true}/>
        </Card>
      )
    }
  }
  export default MyTable;