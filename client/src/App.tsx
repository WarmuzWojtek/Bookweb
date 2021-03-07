import { Theme } from './Theme';
import { Button } from './Components/Button/Button';

function App() {
  return (
    <Theme>
      <Button
        onClick={() => {
          console.log('test');
        }}
      >
        Button
      </Button>
    </Theme>
  );
}

export default App;
