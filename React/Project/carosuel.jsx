const Caro=({image})=>{
    return (
        
        <Carousel fade
            nextIcon={<i class="fa fa-forward    "></i>}
            nextLabel ="" 
            prevIcon={<i class="fa fa-backward    "></i>}
            prevLabel=""
            className="mt-3 d-flex"
            >
            {image.map((image)=>(
                <Carousel.Item>
                    <img
                    className="img-fluid w-100"
                    src={image}
                    />
                </Carousel.Item>
            ))}
            
        </Carousel>
    )


}