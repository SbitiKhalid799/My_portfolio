import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

export default function Contact(props){
    const {them} = props;
    const sr = ScrollReveal({
        distance:"40px",
        reset :true,
        duration:1000 
      })
    useEffect(()=>{
        sr.reveal('.Email,.Name,.Hometitle,.Message,.Send',{delay:200,origin:"bottom"})
      },[])
    return(
        <div className="w-100 container">
        <h4 className="my-2 Hometitle d-flex align-items-center justify-content-left">
        {them === "clear"?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEu11b0uREEYgOFnuQUkEpHo0LgGhQuQqNyARiEUCipsg0Si0ChUCtdA4RI0egoi4QokfnbkrMjZ2d0Z55xTf/O+33w/Z1oa/loN88UEK9jDXAX5LRbD+ZjgHvMV4N2jP+yY4KsG+C87V7CPsyKBdewMSCb7Bps4KQGD4KCPpEcwrDTjeCvBJvFclyDAXkqwMbymCrpx/W6yjcMSbBWXdQkCp41TjGIJR52mT6QKhvUgd3qzmxwEj3goTDOYrmtMr3CBa3wW0JGiTGtYjoiS9uC9M5phoc6H1GcLx6WYpBLtFo1NqX9Ywo0/gUmCKTyl0LGAu0GC2B7kvBehJx+5gsTko2FJTW5E0PiDE57M8N+frZD+TbEj0RetArf3aM6U/Ev8DavcMBm78qY2AAAAAElFTkSuQmCC"/>
                    :
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT9JREFUSEu1lr8uBFEUh78fr4BkE5Ho0HgGxT6AROUFNFsIhYIK2yDZRKFRqBSegcIjaPQURMITSDicNRObmdmZO3tnbn3O7zv3/LnnipaPWtYnBzCzDeAQWI6A30tac/8iwCOwEiE+dJU01C4CWKx4DOAIuEgC6AH744KZ5AY7kgajgmbmgOMiSA5gZlWpmZX0kQF0gNemAB1JbxnADPAeBEiNSm6yJ+kkA9gErpsCuE4fOAemgS5w+lv0uSBAQA1qde8kRXbAM/CUkBaBhaba9Aa4Am4lfbuomU0ladoC1rOg0Dn4BHqSLsvyY2a7wNmoTWiKDiR5YSuPmfkQbqeGoYB5SS+V6n8pWwUexgKK5iCNIhDgNfmqBQgRbqqLarPKuqj1heMr09/9pdph/zvcSfKnJL/RIkQLXVv/VfwAZYiHGY1LSfkAAAAASUVORK5CYII="/>
                    }
                    <span className="mx-2">Contact</span> 
        <div>
        </div>
        </h4>
            <form action="" className=" w-100 h-100  d-flex align-items-center justify-content-center">
                <div className="row formulaire">
                    <div className="col-md-6 col-12 Name">
                     <label className="txt my-1">Name :</label>
                     <input className='input-1 txt' type="text" />
                    </div>

                    <div className="col-md-6 col-12 Email">
                     <label className="txt my-1">Email :</label>
                     <input className="input-1 txt" type="email" />
                    </div>

                    <div className="col-12 Message">
                     <label className="txt my-1">Message :</label>
                     <br />
                     <textarea className="input-1 txt" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="col-12 text text-center Send" >
                        <button type='submit' className="dwnCV">Send message</button>
                    </div>
                </div>
            </form>
        </div>
    )
}