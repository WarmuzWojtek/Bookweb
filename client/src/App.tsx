import { BrowserRouter as Router } from 'react-router-dom';
import { Theme } from './Theme';
import { Button } from './Components/Button/Button';
import { Tag } from './Components/Tag/Tag';

function App() {
  return (
    <Router>
      <Theme>
        <Button onClick={() => {}}>Zobacz pełny opis</Button>
        <Tag url="api" text="Zobacz pelny opis"></Tag>
      </Theme>
    </Router>
  );
}

export default App;
