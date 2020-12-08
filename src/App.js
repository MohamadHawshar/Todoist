import React from 'react';
import {Header} from './components/layouts/header';
import {Content} from './components/layouts/Content';
import {ProjectProvider,SelectedProjectProvider} from './context';
import './App.scss';
function App() {
  return (
    <SelectedProjectProvider>
      <ProjectProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectProvider>
    </SelectedProjectProvider>
  );
}

export default App;
