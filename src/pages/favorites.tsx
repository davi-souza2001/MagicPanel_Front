import Bar from "../components/Bar";
import TableFavorite from "../components/TableFavorite";

interface Favorites {

}

export default function Favorites(props: Favorites) {
    return (
        <>
            <Bar />
            <TableFavorite/>
        </>
    )
}
