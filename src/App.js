import React from 'react';
import FormCookies from './components/FormCookies';
import ReposGit from './components/ReposGit';
import HeaderCookie from './components/HeaderCookie';
import { Heading } from '@chakra-ui/react'

function App() {

  const readCookie = (name) => {

    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {

      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }

    }

    return null;

  }

  return (
    <div className="App">
      <HeaderCookie read={readCookie} />
      <FormCookies />
      <Heading mb={10} style={{ textAlign: 'center' }}>Repositorios</Heading>
      <ReposGit read={readCookie} />
    </div>
  );
}

export default App;
