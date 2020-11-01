import React, { Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className="header-background" title="Portfolio" scroll>
                <Navigation>
                    <Link to="/" >Početna</Link>
                    <Link to="/resume">Životopis</Link>
                    <Link to="/projects">Projekti</Link>
                    <Link to="/contact">Kontakt</Link>
                </Navigation>
            </Header>
            <Drawer title="Menu">
                <Navigation>
                    <Link to="/">Početna</Link>
                    <Link to="/resume">Životopis</Link>
                    <Link to="/projects">Projekti</Link>
                    <Link to="/contact">Kontakt</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
    );
  }
  
}

export default App;
