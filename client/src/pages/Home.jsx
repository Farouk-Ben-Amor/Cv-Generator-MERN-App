import { useNavigate } from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout'
import templateimg from '../resources/tem/template1.png'
import templateimg2 from '../resources/tem/templ2.png'
function Home() {
  const navigate = useNavigate()
  const templates = [
    {
      title : "Simple Resume",
      image : templateimg
    },
    {
      title : "Simple2 Resume",
      image : templateimg2
    },
  ] 
  return (
        <DefaultLayout>
          <div className="row home">
            {templates.map((template,index)=> {
              return (
                <div className="col-md-4" key={index} > 
                  <div className="template">
                    <img src={template.image} height="400" style={{width:'100%'}} />
                    <div className="text">
                      <p> {template.title} </p>
                      <button onClick={()=>navigate(`/templates/${index+1}`)} >TRY</button>
                    </div>
                  </div>
                </div>
              )
            }) }
          </div>
        </DefaultLayout>
  )
}

export default Home