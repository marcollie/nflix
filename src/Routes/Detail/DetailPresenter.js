import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
`;

const Cover = styled.div`
    width: 30%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    height: 100%;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`;

const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 20px;
`;

const ItemContainer = styled.div`
    margin: 20px 0;
`;

const Item = styled.span`

`;

const Divider = styled.span`
    margin: 0 10px;
`;

const Imdb = styled.span`
    display: inline-block;
    width: 28px;
    height: 13px;
    background-image: url(${props => props.bgImage});
    background-size: cover;
`;

const Anchor = Imdb.withComponent("a");

const Overview = styled.p`
    font-size: 12px;
    opacity: 0.7;
    line-height: 1.5;
    width: 50%;
    margin-bottom: 20px;
`;

const Company = styled.div`
    position: absolute;
    width: 40%;
    height: 40%;
    background-color: black;
    opacity: 0.5;
`;

const DetailPresenter = ({ result, loading, error }) => (
    loading ? (
        <>
            <Helmet>
                <title>Loading | Nflix</title>
            </Helmet>
        <Loader />
        </>
    ) : (
            <Container>
                <Helmet>
                <title>
                    {result.original_title ? result.original_title : result.original_name} | Nflix
                </title>
            </Helmet>
                <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
                <Content>
                    <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noPosterSmall.png")}/>
                    <Data>
                    <Title>
                        {result.original_title ? result.original_title : result.original_name}
                    </Title>
                    <ItemContainer>
                        <Item>{result.release_date 
                            ? result.release_date.substring(0, 4) 
                            : result.first_air_date.substring(0, 4)}
                        </Item>
                        <Divider>•</Divider>
                        <Item>{result.runtime 
                            ? result.runtime 
                            : result.episode_run_time[0]} min
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                            {result.genres && 
                            result.genres.map((genre, index) =>
                                index === result.genres.length -1 
                                ? genre.name
                                : `${genre.name} / `
                            )}
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                            <Imdb bgImage={result.imdb_id ? `https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/375px-IMDB_Logo_2016.svg.png` : require("../../assets/imdbLogo.svg")}
                            >
                                <Anchor 
                                href={`https://www.imdb.com/title/${result.imdb_id}`}
                                target="_black"
                                >

                                </Anchor>
                            </Imdb>
                            
                        </Item>
                    </ItemContainer>
                    <Overview>{result.overview}</Overview>
                    <Company></Company>
                </Data>
                </Content>
            </Container>
        )
);

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;