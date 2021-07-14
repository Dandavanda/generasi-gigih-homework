import logo from './logo.svg';
import './App.css';
import data from './data';

function App() {
  return (
    <div className="App">
     <h1>Create Playlist</h1>
      <form>
        <div id="title">
          <label htmlFor="desc">Title</label> <br/>
          <input type="text" name="title"/>
        </div>
        <div id="desc">
          <label htmlFor="desc">Description</label> <br/>
          <input type="text" name="desc"/>
        </div>

        <button id="submit">Submit</button>
      </form>
      <div className ="container">
        <table>
          <tr>
            <td><img src={data.album.images[0].url} alt="Album1" className="img-poster"/></td>
            <td className="box-desc">
              <p>Track Title : {data.album.name}</p> 
              <p id="artis"> Artis : {data.album.artists[0].name}</p> 
              <button class="btn-select"> Select</button>
            </td>
          </tr>
        </table>
        
        
      </div>

      {console.log(data.album)}

    </div>
  );
}

export default App;
