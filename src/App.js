import React from 'react';
import './App.css';
import Stack from './component/stack';

function App() {
  return (
    <div style = {{
      backgroundImage: `url("https://media.istockphoto.com/vectors/simple-background-vector-id1042172390?k=6&m=1042172390&s=612x612&w=0&h=8lrIVfGvUZ3GTPnqL-nYoB6sNCa423TY2IBmcULHzco=")`
  }}className="App">
    <Stack />
    </div>
  //   <div className="App">
  //   <ThemeProvider theme={customTheme}>
  //   <SearchAppBar/>
  //   <SignInOutContainer/>
  //   </ThemeProvider>
  // </div>
  );
}

export default App;
