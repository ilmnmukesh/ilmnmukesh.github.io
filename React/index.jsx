const Tab = ReactBootstrap.Tab
const App=()=>{
    const bg={
        backgroundImage: "url(./static/images/IMG_2489-min.JPG)",
        height: "100%",
        backgroundSize: "cover",
        opacity: 0.2,
        zIndex: -1
    }
    return (
        <div >  
            <div >            
                <Header/>
                <Intro/>
                <Info/>
                <Footer/>          
            </div>
        </div>
    );
}
ReactDOM.render(<App />, document.querySelector('#app'));