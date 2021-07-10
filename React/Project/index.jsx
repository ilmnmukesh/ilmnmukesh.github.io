const datas=[{
    "name": "Web Chat App",
    "framework": "Django",
    "link": "https://mukesh28.pythonanywhere.com",
    "source":"https://github.com/ilmnmukesh/web-chat-django",
    "descirption": "In this Project, I have used to Design Chat app using Firebase and host in pythonanywhere",
    "image": [
        "React/Image/Chat/home1.png",
        "React/Image/Chat/login1.png"
    ]
}]
const Project=()=>{
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