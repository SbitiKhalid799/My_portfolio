export default function Project(props){
    const {them} = props;
    return(
        <div className="w-100 container">
        <h4 className="my-2 Hometitle d-flex align-items-center justify-content-left">

        {them === "clear"?
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALpJREFUSEvllUsKwkAQRN+cwoUgSBZ6Gy/jJjfQC+Ug2bgTBRfeQjEkkBGbKiIBE2fb3fW6a36JkVcaWR8F2AEHYBs0cgL2QBU1qgB3YCGmPAPFUMCjLYwaUXFpkRJQ8Qyg/HbPQ7Yv/dFvwNJVcfelD5DjmvBMZ54A0wmZ1rjzySJZaSaEAHWpOn2V93sA0xn+4JiqJ1xZFVp0BVaq2oxfgPX7PXi9pkdgY4pEaTVQdr/ct3bIXqYPeALxuikZaMVsGwAAAABJRU5ErkJggg=="/>
                    :
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMZJREFUSEvllUEKwkAMRd8/hQtBEBd6Gy/jxhvohTyIG3ei4MJbRFqoWNuZBOugaLfzk5f8ZDqi8KfC+ckCzGwJbIBFopADsJK0SxXqAa7AyOnyKGn2KsCqQEm9hZhZ9ryOzVXnJfDOW4CA39F9aM3l3oGZXYBxNEt0Lo8A188I/Nm2HwREbIhomtXuWBQJjmiSAO9SNck93fcBIrZUmj9Y09Tw3mHRGZhEEzm6k6Rp3990C8wHQvbAunnlPvsmD+ykDi/ewQ3bvokZuRyp8QAAAABJRU5ErkJggg=="/>
                    }
                    <span className="mx-2">Project</span> 
        </h4>
        </div>
    )
}