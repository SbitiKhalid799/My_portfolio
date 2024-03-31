export default function Home(props){
    const {them} = props;
    return(
        <div className="w-100 container">
        <h4 className="my-2 Hometitle d-flex align-items-center justify-content-left">
            {them === "clear"?
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPxJREFUSEvt07tKBDEUBuBvn8LCwgvaKCJYKpZ2lj6OvS9ja2cnWgk2qyCCl8LCp1ADM5AdspMTcbtNM8yQ/N9J5mRiwWOy4HwtwAqu8I1TfEWKiwIp/A6bXegrDiNIBEjhN9jGRwes4QXHNaQG5JV/4qgDbrGK6k7GgFJ4voMQMg8YC+//bTqmKlICIuFhZAi0hIeQHMi7JS3ewHuk17GOt27uTHf1QHo+YD8LrHXY0E4XsB9T7KWXHLjHwT8B178NcJIDeTV9JX/dwcy6UsgSWB7R3KtXbI5SFz1iJ3iDh9OesJt/LAFnuMBWI/KMc1zWgMbc8emtt7UZ/wERZUUZyr5HKAAAAABJRU5ErkJggg=="/>
                    :
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARRJREFUSEvtlLFOwzAURc/9CgaGAoIFhJAYixi7deRz2PmZrmxsFUxILC0SQoJ26NCveMiRE6XBjZ8R3eolSvR8jp99HbHjoR3zcQvM7AB4BAwYS1p7FucSRPgLcBKhX8DQI8kKInwKnAHLKBgAn8BtTtIr6Kx8BdxEwTNwCGQ72SpIwSVVHZhZ6MAlSQr64PXBeiW/BB54iWRDUAL3ShpBJy1h/rGkhSfrZnYEfMfajXRVAjMLzzfgqgZKyka4LTezcAHrMZN0GV7aglfg+p8ET5JGjSC1kr920J2XSlHV6l7QnGU3hnUa9lvUt0Vz4NxzgxM175Iu2t9TMb0DHoDTQskHcC9p0isohGbLi/43WVqi4AcdgqsZWC8YwQAAAABJRU5ErkJggg=="/>                   
                    }
                    <span className="mx-2">Home</span> 
            </h4>
        </div>
    )
}