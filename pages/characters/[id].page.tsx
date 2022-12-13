import { getCharacter } from "dh-marvel/services/marvel/marvel.service";

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: 
                { id: "1009196" } }],
        fallback: true
    };
}

export async function getStaticProps({ params }: any) {
    const data = await getCharacter(params.id)
    return {
        props: {
            data
        }
    }
}

export default function characterDetals(props:any) {
    const id = props
    console.log(id.data)
    return (
        <h1>oi</h1>
    )       
}