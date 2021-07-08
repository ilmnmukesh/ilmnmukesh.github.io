const Info=()=>{
    const font={
        "font-family": `Pacifico` ,
        "color":"grey",
        "font-size":40,
        "font-weight":"400"
    }
    const font_h2={
        fontFamily:`'Source Code Pro', monospace`,
        fontSize:32,
        fontWeight:"300"
    }
    const font_h3={
        fontFamily:`"Work Sans", Helvetica, sans-serif`,
        fontSize:25,
        fontWeight:"300"
    }
    return(
        <div id="info" className="ml-3 pl-md-5 ml-md-5 pb-5  " style={{marginTop:"150px", paddingTop:"100px"}}>
            <h1 style={font}>Skills</h1>
            <h2 className="mt-2" style={font_h2}>&emsp;&mdash;JavaScript</h2>
            <h3 className="mt-2" style={font_h3}>&emsp;&emsp;&emsp;&ndash;React</h3>
            <h3 className="mt-2" style={font_h3}>&emsp;&emsp;&emsp;&ndash;React Native</h3>
            <h3 className="mt-2" style={font_h3}>&emsp;&emsp;&emsp;&ndash;JQuery</h3>
            <h3 className="mt-2" style={font_h3}>&emsp;&emsp;&emsp;&ndash;Native JS</h3>
            <h2 className="mt-2" style={font_h2}>&emsp;&mdash;Python</h2>
            <h3 className="mt-2" style={font_h3}>&emsp;&emsp;&emsp;&ndash;Django</h3>
            <h3 className="mt-2" style={font_h3}>&emsp;&emsp;&emsp;&ndash;Django REST</h3>
            <h3 className="mt-2" style={font_h3}>&emsp;&emsp;&emsp;&ndash;Pandas, Numpy</h3>
            <h3 className="mt-2" style={font_h3}>&emsp;&emsp;&emsp;&ndash;Flask</h3>
            
        </div>
    )
}