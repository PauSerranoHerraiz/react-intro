import moviesArr from "../data/movies.json"

function MovieList() {

    return (
        <div>
            <h2>This is Movielist</h2>

            {moviesArr.map((element, i, arr) => {
                return (
                    <div key={element.id} className="box">
                        <p>{element.title}</p>
                        <p>{element.rating}</p>
                    </div>
                )
            })}
        </div>
    )

}

export default MovieList