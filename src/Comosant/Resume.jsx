export default function Resume(props){
    const {them} = props;
    return(
        <div className="w-100 container">
        <h4 className="my-2 Hometitle d-flex align-items-center justify-content-left">

        {them === "clear"?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAN9JREFUSEvtlkEOATEUhr85hQURbDiBhQVu4DxuwIVsha2dFRZCYuMUqHSSUW1fO6MJiVnOvL7v9f1/Xycj8ZMlzo8NMAFmQM8D3wFj4CoVaANcgLq0ENgDIwliA9x0clf78u8q7AgMfJAqgBPQAg7A0AWpAmgAa6Dj20kVgFpbA1ZA1wUJAZiaFDUwvbAB+sWXZQBLbVGX0V5yhgACHPsMsbrvKwC+nqvK8yJL7yA54K/BWwdiDtZHRP49Dc5AM7RsI06N8LY0i9SVOdcTMoazBaaPYbeQADFJxdjkfxV3PzQ9GVWa3fYAAAAASUVORK5CYII="/>
                    :
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvtlj0OwjAMRp9PwQBCwAInYGAAbsB5uAFciBXBysYEDKhILJzCkKpFKCRNfxSxkDF1/OrPX9wKkZdEzs8XQFUXwAoYFcBPwFxEHqEXdAHuQDt0EDgDsxDEBVCTXESc8qlq+jxbV2BSBGkCSIAecAGmPkgTQAfYAwPAW0ltgJFQVVvADhj6IEFArnneE6sHthcOIjL+3KwD2BqL+lxmmyMIKGHXNMSuND/3e0BA8/d9qV1BdMC/B0EX/XvgkugGdMu6x4pLRKQfmkXmk7nOJmQVzhFYvobdphBQJWOZ2Oh/FU8bJr4ZjbIKagAAAABJRU5ErkJggg=="/>
                    }
                    <span className="mx-2">Resume</span> 
        </h4>
        </div>
    )
}