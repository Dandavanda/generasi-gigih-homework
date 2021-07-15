import './App.css';
import data from './data';
import Card from './Component/Card';
import Form from './Component/Form';


function App() {
  return (
    <div className="App">
      <h1>Create Playlist</h1>
      <Form />
      <Card image={data.album.images[0].url} title={data.album.name} artis={data.album.artists[0].name}/>
    </div>
  );
}

export default App;
