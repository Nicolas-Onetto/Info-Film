import {useEffect, useState, useRef} from "react";
import {Link} from "react-router-dom"
//import {Link} from "react-router-dom"
import btn_flecha from "./../assets/btn_flecha.png";

function Home({data}){
    let content_img_btn_left = useRef([]);
    let content_img_btn_right = useRef([]);
    let content_film = useRef([]);
    let content_films_data = useRef([]);
    console.log(data)
    
    return(
        <>
            <header>
                <form action="#" method="post">
                    <input type="text" className="name-search" />
                    <Link to="/search">
                        <button type="sublime" id="search">Search</button>
                    </Link>
                </form>
            </header>
            <div className="content-class-films">
                <div className="content-films-data">
                    <div className="title-class">
                        <h1 class="class-title">{data[0]?.name}</h1>    
                    </div>
                    <div className="content-add-btn">
                        <div className="content-btn">
                            <img className="btn-left" src={btn_flecha} alt="btn-izquierda" />
                        </div>
                        <div className="content-films">
                            {data[0]?.movie?.map((value, i)=>(
                                <>
                                    <div key={i} className="content-film">
                                        <div className="content-header-film">
                                            <div className="content-header-portada">
                                                <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt="" />
                                            </div>
                                            <div className="content-header-title">
                                                <h3 className="title-film">{value.title}</h3>    
                                            </div>
                                        </div>
                                        <div className="content-time">
                                            <h4>{value.release_date}</h4>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className="content-btn">
                            <img className="btn-right" src={btn_flecha} alt="btn-derecha" />
                        </div>   
                    </div>    
                </div>
                <div className="content-films-data next">
                    <div className="title-class">
                        <h1 class="class-title">{data[1]?.name}</h1>    
                    </div>
                    <div className="content-add-btn">
                        <div className="content-btn">
                            <img className="btn-left" src={btn_flecha} alt="btn-izquierda" />
                        </div>
                        <div className="content-films">
                            {data[1]?.movie?.map((value, i)=>(
                                <>
                                    <div key={i} className="content-film">
                                        <div className="content-header-film">
                                            <div className="content-header-portada">
                                                <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt="" />
                                            </div>
                                            <div className="content-header-title">
                                                <h3 className="title-film">{value.title}</h3>    
                                            </div>
                                        </div>
                                        <div className="content-time">
                                            <h4>{value.release_date}</h4>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className="content-btn">
                            <img className="btn-right" src={btn_flecha} alt="btn-derecha" />
                        </div>   
                    </div>    
                </div>
                <div className="content-films-data next">
                    <div className="title-class">
                        <h1 class="class-title">{data[2]?.name}</h1>    
                    </div>
                    <div className="content-add-btn">
                        <div className="content-btn">
                            <img className="btn-left" src={btn_flecha} alt="btn-izquierda" />
                        </div>
                        <div className="content-films">
                            {data[2]?.movie?.map((value, i)=>(
                                <>
                                    <div key={i} className="content-film">
                                        <div className="content-header-film">
                                            <div className="content-header-portada">
                                                <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt="" />
                                            </div>
                                            <div className="content-header-title">
                                                <h3 className="title-film">{value.title}</h3>    
                                            </div>
                                        </div>
                                        <div className="content-time">
                                            <h4>{value.release_date}</h4>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className="content-btn">
                            <img className="btn-right" src={btn_flecha} alt="btn-derecha" />
                        </div>   
                    </div>    
                </div>
                <div className="content-films-data next">
                    <div className="title-class">
                        <h1 class="class-title">{data[3]?.name}</h1>    
                    </div>
                    <div className="content-add-btn">
                        <div className="content-btn">
                            <img className="btn-left" src={btn_flecha} alt="btn-izquierda" />
                        </div>
                        <div className="content-films">
                            {data[3]?.movie?.map((value, i)=>(
                                <>
                                    <div key={i} className="content-film">
                                        <div className="content-header-film">
                                            <div className="content-header-portada">
                                                <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt="" />
                                            </div>
                                            <div className="content-header-title">
                                                <h3 className="title-film">{value.title}</h3>    
                                            </div>
                                        </div>
                                        <div className="content-time">
                                            <h4>{value.release_date}</h4>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className="content-btn">
                            <img className="btn-right" src={btn_flecha} alt="btn-derecha" />
                        </div>   
                    </div>    
                </div>
            </div>
        </>
    );
}

export default Home;