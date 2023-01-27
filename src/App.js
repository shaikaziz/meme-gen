import Header from './Header'
import FormMeme from './FormMeme';
import memesData from './memesData';

function App() {
    // const memes = memesData.map((meme) => {
    //     return <FormMeme
    //         {...meme}
    //     />
    // })
    return (
        <div className="App">
            <Header />
            <FormMeme/>
        </div>
    );
}

export default App;
