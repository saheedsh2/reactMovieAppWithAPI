const useGenres = (selectedGenres) => {
    if(selectedGenres.length < 1) return "";

    const GeneresIds = selectedGenres.map((g) => g.id);
    return GeneresIds.reduce((acc, curr) => acc + "," + curr);

    

}

export default useGenres;