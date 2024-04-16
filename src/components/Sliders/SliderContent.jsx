export const SliderContent = (props) => {
    const { title, description, image, alt } = props;
    return (
       <div className="post-card">
          <div className="card">
             <img src={image} alt={alt} className="img-fluid" />
          
          </div>
       </div>
    );
 };