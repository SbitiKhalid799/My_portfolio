import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
export default function About(props){
    const {them} = props;
    const sr = ScrollReveal({
        distance:"40px",
        reset :true,
        duration:1000 
      })
    useEffect(()=>{
        sr.reveal('.Hometitle,.t_1',{delay:200,origin:"bottom"})
      },[])
    return(
        <div className="w-100 container">
        <h4 className="my-2 Hometitle d-flex align-items-center justify-content-left">
        {them === "clear"?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAl5JREFUSEu11dmrjlEUBvDfkQwZLtwhUwohynClECVDhkgoQ8o8X1HIEHeuzBkuhBIXpkSUC+ONlEyZp39AMg9hL+2jc97e7wwXZ9fXt9+9197PWut51tpVmnhUNfH96gNoiWkYi4Hojj94g3u4hNP4WcnRugDGYV++tK5AX2AJrpYZVQLYnIy35AMPsRe38SqvdcVgbESvvLYWO4ogZQBxcQBE2CtwsA734/xy7OJfulfn+f8jRYCJOI8fGI2bDRTBpMTRmWw7HLeqz9UEaIen6Ig12FlyeR8sxCK0zftB8mGMwDo8yYIIJ2upKIjanw+9TXtbcQqfM9GRilVoUSGqUNQohPKm4FwR4AIm4B2CxLIRXkVke7JdmxT1rJTS9ehR40DwtrgIEBd3yeHFf4ANQ880v5O8u47jeF6CHOmdh6Up6r64iyFFgC9onX/fGkhu0Swi+pTU9D6pqUMR4GMmrj1iHiP0vywXXHBQc5TtxdkP+XzMa5Ec7PdOpT8gtYcH+aZoC2WKi7WyvUE5PY/RrwhwIklsJmpWZGMjiMrelng7lqp+bhFgDo5mEkPvvxvJQ3O8zAqckSVeK0VBcKQpJDo/af9IIwFW5jbxLKf5ezGC+B6Dy6kiv2IoHjUQJGyjGTbDyNRmblQiLtY3YHtWw+yk5yjASiMujHQcSp00JBpRRBFWVEb1xqbcKuL7NU7iIu7nVtEfk1OE01O37ZQVFZ10d9GTuh6cqOQDybvO9aQpHpwFuFZmV9+T2Sp5PRXjM3HdsrehlmgHV3A2PTy/KjlRH0ADOa5s1uQAfwESQHMZ5TZ2tAAAAABJRU5ErkJggg=="/>
                    :
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAApdJREFUSEvFlduLzVEUxz9fySXMgzcmtxQToph5UoiSSy6RhnJJYcZl8EQhl3jzhEGGB6FkHsYlEeXB9UVKbrlf5h+Qxp0se03bMec3v985Z9Rk1+nsfnvt9V1rfb9rbdHJS53sn4IAZtYdmA9MA8YAgwED3gL3gctAk6QfWYFmApjZdOBQdFoo0ZdAraRraUapAGa2IxjvjBceAQeBO8Dr+G0gMA7YBgyL3zZJ2psEaQdgZu7YATztdZIassI3M7+/FtgPreXeIMn3uZUHYGazgAvAd2CKpFuliMDMZgeOzkbbCZJu/7mXAzCzPsAzoB+wUdK+pHMzqwBWAquA3vG8CTgGTAQ2A09dEJI8yL8qMrNa4HC89C6c7QIaJX0yM1ePl2I90C0jK1fUZMCVN1fS+STARWAm0Aw4iWnLo/LM6iU1m1mvkPWiUNItwJA2Fxok1SQB3PGAqHf/d7DxwNCwvxuiuwGckvQipXRe3mXA6pD1COCepMokwGegp/8kfS2F3BQgz+hjUNP7oKa+SYCWSFyZJN9jZq7/Nd5wkpyD3Eo7M7My4APQIsn3eSQ7+8ND64+W9DAC+FhoXZKSkm53ZmZjvTzAE0kjkwCng8QWArmO/IcMvLN3B95OSlqaBFgCnACcxApJvzrCg5l1BV5FBVZLakwCOMFeJpfocknHOwhQF0fG81jmb3kAseZTgSuhI78AVZIelwJiZlVxGHYBJkm6meMuRWpbgT1RDYuDnr0BU5eZucNq4CjgEq2TVN/WOGtcb4+jwm3fAGeAS8CDOCpGAXOABUD/+Aj5JD2QjKTQg+OdfCREV16kTP7grJB0Pc2u2JPZI0Q9D5jhxAGDYrSuFtf7VeCcpJ9ZQfzfR78UBRWz+Q1sBOsZqGr9LwAAAABJRU5ErkJggg=="/>
                    }
                    <span className="mx-2">About</span> 
        </h4>
        <div className="div-aboute t_1">
            <p className=" txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus incidunt adipisci, sequi id ut qui velit voluptatibus iure deserunt quisquam architecto perferendis porro assumenda minus excepturi, veniam dolorum repellat.</p>
            <h4 className="my-2 Hometitle d-flex align-items-center justify-content-left">{them === "clear"?
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQZJREFUSEvV1b8uBFEUx/HPRk+lUklEYVVaGo14AI3an9YLCKHZVitEp/MARE2joEE8wRY6hUbB3mQj12R3Z+aaG3GaSSbn9/uee8/kNy2Zq5XZ3yjAOjZxhvPUQYYBVnDJ9wBLuEmBDALM4g7jkeEibpsABNMHTEdm75hEeNau+ARjuMZyweUE27Wd+4IYcISdAUYLuG8C8JlqUtA9Yw8X4X18gqYAwfcJ7X8LeMHub6/oDRNVdpa6g8fehPM5AVdYzQk4xVZOwD4OcwI2+jFeykhdcojzkFulFQPClzFXquADU3it0PsjKtbQwcwIYbcXLwc4rmJejIqqmlp9f/rTrzXpsOYvkk4rGUAxdzAAAAAASUVORK5CYII="/>                    :
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARVJREFUSEvVlatOA1EQQM8JHhQK1YQgAIUFU9PwARg0D8sPEAiYWiyB1OH4AAgaDAJMIXwBAofAIIZuQpptaenutjeEMTfZzJwz95FZSRwm5jNUEBGbwDbQUi+qNjJQEBEN4Aq6Daypt1UkPwQRsQDcA9M54Kp6N7YgIjLoI1DLwT6AWTVbS0d3BxExBdwA9T7KmbpbmvxdkBecAHsDQCvqwyQEURXSV/cMHKiX2ff8DiYlyLhP6tK/FbwA++Me0bs6U+TOqt5Bu9PhckrBtbqeUnCu7qQUHKrHKQVbaiuloKFmc2tk5F9RG1gcWQGfwJz6ViC3Z1RsAE1g/pfC1854OVJPi8B7RkXRgrJ5f/fTL9vpsPwvqzBkGUEuPtUAAAAASUVORK5CYII="/>                   
}
                    <span className="mx-2">Whate I Do !</span> 
        </h4>
        <div className="WhateIDo container">
            <div className="row d-flex align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 p-2">
                <div className="t_1">
                    <h5 className=" txt d-flex align-items-center justify-content-left">
                    {them === "clear"?
                                        <img  className="m-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAa1JREFUSEu11UuoTXEUx/HPYSTuVZSp150TKUndMGCg1PUWykwxM/CYu0KGGEpJ7h0YMPRIlGKAufIYk5KiO7jYq/67/u32Pvucw96j0/6v//qu9Vvrt09Px0+v4/xGBazGx0GKGwUwgfd4hc1tkFEAx3EbD7CnC8BNnMQFXOoC8A7rsA3P/gWwEgdxJUuyGN+xAEvwE2dxD5/rYE0z2IFZLMPhlCDuR9VP8QYb09ldfMMBPKlC6gBncBkLcR9Hiyp/pYvnMY3rOF3ELcIdTGE+dXMth+SACL6VZPmNSJbLE/ceYjeOpcRlrnO4mKSbKeQ6URZVAkLTF9iCH9iLRzWafsVyrMWHyvmuJOsYXmIr/pSAkCM2Il7GEPcVvx9XEpQG+4IVNfCdiOqXpmInc0DEVyWKtq9mifoZrFWivKDqkI8U85hDncGGGnIOydf0UGr9LdYjWn+egmOFh17TErQK+5NMpcHibDwZLN+gMNqnYYxWjd2eTBRdbGj7PDT5oN+9+LDFnt/AqS4ATQZrZQ36f/AamxoM1hcyKCCSrKlx73/roDVRU8AwHYwE+QvldVoZJFegJwAAAABJRU5ErkJggg=="/>
                                        :
                                        <img className="m-2"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAddJREFUSEu1lU2ITmEYhq+LlfwVZet3T6SkKQ0LFkr5H6HsFDuL+dkjZDkspaQZCwuWfhKlWBh75WdNSoosuPVO55tOZw7fN199Z/ue97me537u+xwZ8OOA69MXIMl69UMvzS0YkGQT8A54pe7oBukHcBq4DTxQDwwCcBM4C0yolwcBeAtsBobVZ30DkqwFjqlXO0WSLAW+AYuAZeqPJKPAlPqpDda6gyR7gHvAKmBEnSqXkwwDT4E36rYkI8Bd4CtwVH3ShMwDJLkAXAEWA/eBk+rPCjAOXAIm1fNJlgB3gIPAb2BUvV6HzAGql28VWYA/wHhdngrwENgPnFJL4dknyRhwsZJuGjjTaWoWkKRo+gLYCXwHDqmPmuMm+QKsBjaq7+vnSfZVsi4HXgJDajqAIkdxxFC1xMPq40aBTsA+q2ta4HuB0v3Kqtldc4BqiqJnXaIx9VpNhn8GrKtEjU6bSz6h/koyL2ALWnIDUrfpcXU6yQywBSijP6+mXrhNa5KsA44UmWoBK8crSsAaDipB+9hz0FoWuBsoIZpRt3b7PLTm4H+XkkxUPr+hnhsEoDVgvYB6+h8keQ1sbwtYN0hPgMoxG5rp7Va8nPcM6KVY3y7qt3i59xc++NIZDZHnzwAAAABJRU5ErkJggg=="/>                    
                                    }
                    <span className="mx-2">Front-end Development</span> 
                    </h5>
                    <p className="mx-3 pb-3 txt" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptas, nemo reiciendis excepturi soluta tenetur dolorum impedit voluptatibus non aperiam voluptatum voluptates expedita nulla dicta alias eligendi. Quod, molestias nisi!</p>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 p-2">
                <div className="t_1">
                    <h5 className="txt d-flex align-items-center justify-content-left">
                    {them === "clear"?
                    <img className="m-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAd9JREFUSEvF1U+IjlEUx/HPUBb+29tpIv8XhK00e4vZ2SghG7HBQiSJDcWCrSbLqVkpC+tBESKRhbIX+Zf8vWe67/R45z7Pe181OXU3z3Pu+d57zu+cO2KebWSe4+sCbMRl7GHGr9/3N37hLo7iRemwbYAjuIYFjU0lQO/3DxzAzX5ICbAD9xAnPJlBX1tSuRjHcB4BiVu/bPqWABPYh0sZUFOm6ziMKzg+CPAWqzGaQK9romMnpvEQ2wYBfubcL8xFrGGswPu8VnUBIqef8QnLaiI3fGLPkry+9L7316D1qhWwp9iEXVkkM1uagDXJYRJbkoLOpDSdqwjadLmIE3iMvXjTBAQomibsObYn5zZptnEjpVHkEMds7OYNQvdhr7D1HwBL8agLsDYFnsI6nM7NM0yWLuAU7qcsjCPkPme+jKUi3clOUfBh7Bk25BpGwecUOT6Eht+l9v+AlcNET6f/hkX4q39Ko6Kn58hp9ESNhe/HvJY3N5QAoaL1udBPaqJn1T1ApCZkPmslwA0cKg2uDlhv2F3Nb0MnIE4QzRJ9EeM6NkV+SxbpiHF9Ft9zJw8c1xHoIOJUtQ9OBN+feuBW/ym6nszNOU27WxQXjRmT93Z+A4qj/b8++pUC6nb7A1X0WhkWNN36AAAAAElFTkSuQmCC"/>                    :
<img className="m-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhJJREFUSEvFlU2ojVEUhp+XMuD6m5tJxPUzcMNUMjcwM1FCJjd3goFIEhOKAVPdDJWRMjD2U1fcSGSgzEUukp/Xec8953TOud939pe6WbUHX9/e61l7rXetLRbZtMj+qQXYHgeuAvsAxfqDsW3gD/AQmJT0uirYSoDtE8ANYEn3UA2g+/sXcETS7WHIAoDtXcBjIBGeDkjS96robC8HTgIXgUDGJb3p31sFmAYOAVckBVA02zeB48A1SVMlwAdgHbBB0rui91zV3g08AmYk7SwBfndyv1RSilg026uBT1mS1tYCOjn9CsxJWln03LfB9hywIkvSt544hqRXe9USzPYssBXYIykiaVuvyLbXtzbcBba30npO0oWS06HgLgOngOfAAUnvewDbAXXz/QqYqJNmHdR2UjoTcbQddxqz/wbRfewtsOMfAGPAs1GAjS3H94BNwFlJaZ7GZvsScAZ4AhyUFLkPziLb+1tFepBNklLwxmb7JbAlNZSUgg8WOV+2o+GPrfb/LGlNY+/zZ38Ay4CB/qkaFV09j0lKTxTNdvL/JUvSqv4DVYCoaHOn0C+K3uejnwCeArOSIvOeVQFuAceqBtcIiXaH3XVJkyVAIkizpC8yTXMo+V1gtpOOjOvzwM90cnFcd4p9FEhUTR+cOD8s6c5wFKOezG1JE7C3refqJzOT9z4wVTfa/9+j30Q9Tfb8Bd8U0hmcq9bjAAAAAElFTkSuQmCC"/>
}
<span className="mx-2">Back-end Development</span> 
                    </h5>
                    <p className="mx-3 pb-3 txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quos vel vitae explicabo praesentium, ad modi voluptatem incidunt, nisi beatae consequuntur! Neque possimus adipisci minima quia. Molestiae culpa officiis aliquam.</p>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 p-2">
                <div className="t_1">
                    <h5 className="txt d-flex align-items-center justify-content-left">
                {them === "clear"?
                <img className="m-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPdJREFUSEvd1EFKA0EQRuEvdxBcBITowtxB0SN4DXGrCN5ADyDu9Q7uAyEHcKMgiIILUfAKOg0zMLaR1NgJEmc7U+91/V1TPQt+egvm+1+CPZxiWBjbLY5wnTjtiJ7RL4Q35Q/YyAUf9dvSe/nCacP+RHCMS7x0iC7cwQHOcY9tvAYlYcEqJlUH67jDDt4CkrAgsZJkhM1asoX3GZJOghWMW4JIF2FBfvoIPDUXFuxXEV3U0ey2LrkB5Ek1Ix8WJMBh9UdeZRM0V0FgaL590qmDuQqesPYb4pSaRwzyZZfW9Vk9kiWeG5xMW9cl0B9rS1fzzEMtv+ATW+46Gabe0DYAAAAASUVORK5CYII="/>
                :
<img className="m-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQpJREFUSEvdlEFKA0EURF/dQXAREDQLcweDOYLXCNlGBG8QDyDukztkL4gHcGNACAouRMErlE7okXEcMj32JKCz7OHX+1X9+4sNf9qwPv8IYPsEmAC9xNjugVNJ80znKyLbz0AnUTwvX0rqlgFeHUhJ92L7m07RwfYBts+AqaSX2OiiHdgeAZfAA9CX9BoDaQLYBW4/HRwAC+BY0lsdJBqQCdnOINfAYYAcSXpfB2kK2AFuCoBaF9GAiu5rxYPruDG1PQSuQjSD/JLzDssx5e8n2kHoZgzMihPUKqBuYqr+N3LQNuAJ2PuNaEXNo6T98rLL1vVFGMkUzh1w/mNdpyiuq01azTFN/X3AB10arBkNSB67AAAAAElFTkSuQmCC"/>                    
}
<span className="mx-2">Full-stack Development</span> 
                </h5>
                <p className="mx-3 pb-3 txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dignissimos fugit quam pariatur voluptates accusamus. Praesentium sed eaque, saepe qui omnis commodi iste unde facere eius esse voluptatibus dolores quam?
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}