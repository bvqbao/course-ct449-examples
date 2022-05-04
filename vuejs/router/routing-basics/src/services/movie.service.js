class MovieService {
    constructor() {
        this.movies = {
            "dunkirk-blurb": {
                title: "Dunkirk",
                descr:
                    "Miraculous evacuation of Allied soldiers from Belgium, Britain, Canada, and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, during the Battle of France in World War II.",
            },
            "interstellar-blurb": {
                title: "Interstellar",
                descr:
                    "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
            },
            "the-dark-knight-rises-blurb": {
                title: "The Dark Knight Rises",
                descr:
                    "Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
            },
        };
    }

    get(id) {
        return this.movies[id];
    }
}

export default new MovieService();
