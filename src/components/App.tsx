import React from 'react';

import { ThemeProvider } from '@material-ui/core';

import { PageComponent } from 'components/PageComponent';

import { theme } from 'styles/theme';

export const App = (): JSX.Element => {
  return (
    // Here we can see external libraries which are typed (@types packages) we have errors
    // when passing values not defined as valid agruments, in this case to the Mui conmtext provider.
    // (this 'notAValidProp' isn't doing anything!)
    <ThemeProvider theme={theme} notAValidProp={{ size: 100 }}>
      {/*
        'Ctrl' and click PageComponent below, we are navigator to the file.
        We also now have more context to what the page component is, its props and
        tasks like refactoring or examing all references to the component.
      */}
      <PageComponent />
    </ThemeProvider>
  );
};
