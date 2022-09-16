import './App.css';

const App = () => (
  <div className="inline-block text-3xl font-bold p-4 m-4 border rounded-full">
    Hello{' '}
    <a
      className="text-blue-600 hover:underline"
      href="https://webpack.js.org/concepts/module-federation/"
    >
      Module Federation
    </a>{' '}
    Remote App!
  </div>
);

export default App;
