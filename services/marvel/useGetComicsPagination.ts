import { useState } from "react";
import { useQuery } from "react-query";
import { getComics } from "./marvel.service";

export function useGetComicsPagination() {
    const [page, setPage] = useState(1);

    const { data, isLoading } = useQuery(
        ["getComics", page],
        () => getComics(page, 12),
        {
            keepPreviousData: true
        }
    );

    const fetchPageComics = (page: number) => {
        setPage(page * 12);        
    }

    return {
        data,
        isLoading,
        fetchPageComics
    }
}