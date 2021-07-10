const Project=()=>{
    React.useEffect(()=>{
        $(".nav-link").removeClass("active")
        $("[data-rb-event-key='projects']").addClass('active')
    })
    return(
        <div className="container" style={{paddingTop:100}}>
                <div className="row">
        {datas.map((data)=>(            
                <Card className="col-lg-6">
                    <Card.Img variant="top" image={data.image}  as={Caro}  />
                    <Card.Body>
                        <h3>{data.name} using <span>{data.framework}</span></h3>
                        <Card.Text>
                            {data.descirption}
                        </Card.Text>
                        <Card.Text className="text-center">
                            <a href={data.source} target="_blank" className="btn btn-sm btn-purple">See Code</a>
                            <a href={data.link} target="_blank" className="btn btn-sm btn-purple">See Project</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
        ))}
        
        </div>
    </div>
    )
}