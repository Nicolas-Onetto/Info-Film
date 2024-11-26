import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import btn_flecha from "./../assets/btn_flecha.png";

function Home({ data }) {
    let [windows, setwindows] = useState(0);
    let content_img_btn_left = useRef([]);
    let content_img_btn_right = useRef([]);
    let content_film_popular = useRef({});
    let content_film_action = useRef({});
    let content_film_science_fiction = useRef({});
    let content_film_drama = useRef({});
    let content_films_data = useRef([])
    let [position, setposition] = useState(0);
    let [flag, setflag] = useState(-1);
    let [direccion, setdireccion] = useState(0);
    let [max_content_films, set_max_content_films] = useState(0)
    
    useEffect(()=>{
        let ActualizarWindows = ()=>{
            setwindows(window.innerWidth);
            let inter = content_films_data.current[0].getBoundingClientRect()
            set_max_content_films(inter.width)
        }
        window.addEventListener("resize", ActualizarWindows)
    },[])
    useEffect(()=>{
        console.log(windows)
        let inter = content_films_data.current[0].getBoundingClientRect()
        set_max_content_films(inter.width)
        console.log(max_content_films)
    },[windows])


    useEffect(() => {
        let ModPosition = ()=>{

        }

        if(flag!=-1)
        {
            switch(flag)
            {
                case 0:
                    console.log(flag)
                    console.log(direccion)
                    setposition((255*direccion)+position)
                    break;
                case 1:
                    console.log(flag)
                    console.log(direccion)
                    break;
                case 2:
                    console.log(flag)
                    console.log(direccion)
                    break;
                case 3:
                    console.log(flag)
                    console.log(direccion)
                    break;
            }
            setflag(-1);
        }
        
    }, [flag]);

    /*let ModLocation = (direccion, categoryIndex, content_films_data, content_film)=>{
        let elemento
        elemento = Object.values(content_film.current)
        setposition(position + direccion*280);
        console.log("position = " +position)
        elemento.forEach((value)=>{
            value.style.transform = `translateX(${position}px)`;
        })
        console.log(content_film)
    }*/


    return (
        <>
            <header>
                <form action="#" method="post">
                    <input type="text" className="name-search" />
                    <Link to="/search">
                        <button type="submit" id="search">
                            Search
                        </button>
                    </Link>
                </form>
            </header>
            <div className="content-class-films">
                {data.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="content-films-data" ref={(el)=>(content_films_data.current[categoryIndex]=el)}>
                        <div className="title-class">
                            <h1 className="class-title">{category?.name}</h1>
                        </div>
                        <div className="content-add-btn">
                            <div className="content-btn">
                                <img
                                    className="btn-left"
                                    src={btn_flecha}
                                    alt="btn-izquierda"
                                    ref={(el) => (content_img_btn_left.current[categoryIndex] = el)}
                                    onClick={()=>{setflag(categoryIndex); setdireccion(-1)}}                                />
                            </div>
                            <div className="content-films">
                                {category?.movie?.map((value, movieIndex) => (
                                    <div
                                        key={value.id}
                                        className={`content-film ${movieIndex}`}
                                        ref={(el) => {
                                            switch (categoryIndex) {
                                                case 0:
                                                    content_film_popular.current[value.id] = el;
                                                    break;
                                                case 1:
                                                    content_film_action.current[value.id] = el;
                                                    break;
                                                case 2:
                                                    content_film_science_fiction.current[value.id] = el;
                                                    break;
                                                case 3:
                                                    content_film_drama.current[value.id] = el;
                                                    break;
                                                default:
                                                    break;
                                            }
                                        }}
                                    >
                                        <div className="content-header-film">
                                            <div className="content-header-portada">
                                                <img
                                                    src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                                                    alt={value.title}
                                                />
                                            </div>
                                            <div className="content-header-title">
                                                <h3 className="title-film">{value.title}</h3>
                                            </div>
                                        </div>
                                        <div className="content-time">
                                            <h4>{value.release_date}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="content-btn">
                                <img
                                    className="btn-right"
                                    src={btn_flecha}
                                    alt="btn-derecha"
                                    ref={(el) => (content_img_btn_right.current[categoryIndex] = el)}
                                    onClick={()=>{setflag(categoryIndex); setdireccion(1)}}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
