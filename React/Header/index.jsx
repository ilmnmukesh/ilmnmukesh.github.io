const Header=()=>{
    const font={
        "font-family": `Pacifico` ,
        "color":"grey",
        "font-size":20,
        "font-weight":"400"
    }
    const brand={
        "font-family": "italic",
        color: "blue",
        "font-size":28
    }
    
    return (

        <Navbar collapseOnSelect fixed="top" expand="sm" varient="light" className="bg-sm-white">
            <Container>                
                <Navbar.Brand style={brand} className="purple-text">ilmnmukesh</Navbar.Brand>
                <Navbar.Toggle float="right" aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse  id="responsive-navbar-nav " >
                    <Nav className="ml-auto mx-5" defaultActiveKey="home" >
                        <Nav.Link  style={font} eventKey="home" href="/#home">
                            <i class="fa fa-home" aria-hidden="true"></i> Home</Nav.Link>
                        <Nav.Link  style={font} eventKey="info" href="/#info">
                            <i class="fa fa-info" aria-hidden="true"></i> Info</Nav.Link>
                        <Nav.Link  style={font} eventKey="social" href="/#social">
                            <i class="fa fa-user" aria-hidden="true"></i> Social</Nav.Link>
                        <Nav.Link eventKey="projects" >
                            <Link to="/projects"  style={font}>
                            <i class="fa fa-user" aria-hidden="true"></i> Projects
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}