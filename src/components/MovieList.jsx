import moviesArr from "../data/movies.json"

function MovieList() {
    let message = ''
    if (moviesArr.length > 0) {
        message = 'List of movies'
    }
    else {
        message = 'Sorry, no movies to display'
    }
    return (
        <div>
            <h2>{message}</h2>

            {moviesArr.map((element, i, arr) => {
                return (
                    <div key={element.id} className="box">

                        {element.imgURL
                            ? <img src={element.imgURL} alt="" />
                            : <p>NO IMAGE</p>}

                        <p>{element.title}</p>
                        <p>{element.rating}</p>
                        {element.rating >= 7 && <p className="badge">RECOMMENDED!</p>}
                        { }

                    </div>
                )
            })}
        </div>
    )

}

export default MovieList