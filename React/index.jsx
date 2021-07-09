const Default=()=>{
    return(
        <div>
            <Intro/>
            <Info/>
            <Footer/> 
        </div>
    )
}
const App=()=>{
    const bg={
        backgroundImage: "url(./static/images/IMG_2489-min.JPG)",
        height: "100%",
        backgroundSize: "cover",
        opacity: 0.2,
        zIndex: -1
    }
    const scrollFunc=()=>{
        $(window).scroll(()=>{
            if($("#social").offset().top+100<=$(window).scrollTop()+$(window).height()){
                $(".nav-link").removeClass("active")
                $("a[href='/#social']").addClass("active")
            }
            else if($("#info").offset().top-200<=$(window).scrollTop()){
                $(".nav-link").removeClass("active")
                $("a[href='/#info']").addClass("active")
            }else{
                $(".nav-link").removeClass("active")
                $("a[href='/#home']").addClass("active")
            }
        })
    }
    React.useEffect(()=>{
        scrollFunc()
    }, [])
    return (
        <div >  
            <div > 
                <ReactRouterDOM.BrowserRouter>
                
                    <Header/>
                    <ReactRouterDOM.Switch>
                        <Route exact path="/" component={Default}/>            
                        <Route path="/projects" component={Project}/>            
                    </ReactRouterDOM.Switch>  
                      
                </ReactRouterDOM.BrowserRouter>           
            </div>
        </div>
    );
}
ReactDOM.render(<App />, document.querySelector('#app'));