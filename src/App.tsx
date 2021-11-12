import React from 'react';

import 'antd/dist/antd.css';
import { Layout } from 'antd';

import './App.css';
import AuthArea from './view/base/authArea';
import Aside from './view/base/aside';


function App() {
  const {Header, Sider, Content} = Layout;

  return (
    <div className="App">
      <Layout>
        <Sider><Aside/></Sider>
        <Layout>
          <Header>
            <AuthArea userName="Phong"/>
          </Header>
          <Content>Content</Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
