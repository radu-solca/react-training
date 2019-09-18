import React from 'react';

import { storiesOf } from '@storybook/react';
import { action, decorate } from '@storybook/addon-actions';
const firstArg = decorate([args => args.slice(0, 1)]);

import Search, {SearchInput, SearchResults} from '../src/search';

storiesOf('Search', module)
  .add(
    'plain and simple', 
    () => <Search />
  );

storiesOf('SearchInput', module)
  .add(
    'with alert', 
    () => <SearchInput onSearchValueChange={(value) => alert(value)}/>
  )
  .add(
    'with action', 
    () => <SearchInput onSearchValueChange={firstArg.action('button-click')}/>
  );

storiesOf('SearchResults', module)
  .add(
    'with some text',
    () => <SearchResults searchValue="hello there"/>
  ).add(
    'with some emoji',
    () => <SearchResults searchValue="😀 😎 👍 💯"/>
  )

// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';


// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

