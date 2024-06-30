import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import styled from 'styled-components';

function createAlert() {
  alert('hello, i show here now...');
}

const pStyle = {
  fontSize: '2em', color: 'red'
}

const Paragraph = styled.p`font-size: 1em color: navy`;

function App() {
    return (
      <div className="App">
        
        <Header info="This is message" myNumber="6" />
        
          <p style={pStyle}>Main Conten</p>
          <Paragraph> Sit dolor ullamco officia mollit anim aute 
            proident duis irure mollit aliquip commodo anim fugiat.Reprehenderit mollit nostrud proident dolore do amet. Adipisicing ex anim occaecat fugiat cillum et tempor commodo occaecat cupidatat. 
             Lorem ad in reprehenderit consequat exercitation cupidatat mollit dolor. Incididunt 
             laborum aliquip enim ipsum proident quis irure consequat sit. Ut adipisicing in aliquip
              amet consectetur est magna laborum pariatur pariatur ex. Sint adipisicing occaecat consectetur officia. Excepteur consectetur esse sunt cillum
               nulla do fugiat cupidatat exercitation velit exercitation fugiat cupidatat.aboris et nostrud officia in id Lorem ad nisi. 
               Deserunt veniam commodo commodo cupidatat. Laboris sint officia exercitation officia
                et eiusmod ullamco laboris sunt est. </Paragraph>
        
        <Footer trademark="page by Giva" myalert={createAlert} />
        
      </div>
    );
    
  }

export default App;
