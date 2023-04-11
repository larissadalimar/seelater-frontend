import styled from "styled-components";
import { PageStyle } from "../assets/styles/PageStyle";
import Card from "../components/Card";

export default function Feed(){

    return(
        <PageStyle>
        <SearchNavbar>
            <div>
                <h2 className="see-later-title">See Later</h2>
            </div>
            <div>
            <input className="search" placeholder="Search"></input>
            </div>
        </SearchNavbar>
        <Cards>
            <Card/>
        </Cards>
        </PageStyle>
    );
}

const SearchNavbar = styled.nav`
    position: fixed;
    top: 0;
    rigth: 0;
    width: 100%;
    height: 20%;
    min-height: 40px;


    border-bottom: solid 0.25mm gray;

    .see-later-title {
        font-size: 25px;
        text-align: center;
    }

    > div {
        width: 80%;
        height: 40%;
    }

    .search{
        width: 90%;
        border: solid 1px gray;
        border-radius: 30px;
        height: 100%;
        padding-left: 10%;
    }

    

    textarea:focus, input:focus{
        outline: none;
    }

    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction:column;

    padding: 5%;
    box-sizing: border-box;
`;

const Cards = styled.div`

    position: absolute;
    top: 21%;

    width: 100%;
    min-height: 80vh;
    height: 80%;
    display: flex;
    flex-direction:column;
    align-items: center;
`