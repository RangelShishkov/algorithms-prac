function matchingStrings(strings, queries) {
    
    let match = 0;
    let res = []
    
    for(let i = 0; i < queries.length; i++) {
        match = 0
        for(let n = 0; n < strings.length; n++){
            if(queries[i].includes(strings[n]) && queries[i].length == strings[n].length){
                match++
            }
        }
        res.push(match)
    }
    return res
    
}