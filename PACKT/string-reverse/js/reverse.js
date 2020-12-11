function reverse( str ){
    // Remove the trailling whitespace characters string
    str = String(str).trim()
    /**
     * @var result temp variable to hold resulting value
     * @var index to keep track of current string index
     * @var chr to store the current character
     * @var isStart to keep track of whether the next non-whitespace character is at the start of a sentence
     */
    const result = "", index = str.length -1, isStart = true 
    const  chr = ""
    while( index >= 0 ){
       chr = str[index] 
       if( isStart && chr != " "){
           chr = chr.toUpperCase()
           isStart = false
       }else{
           chr = chr.toLowerCase()
       }
        if(chr ==" . "){
            isStart = true;
            if(index == str.length - 1){
                index--;
                continue;
            }else{
            result = result.substr(0, result.length-1) +". ";
            index--;
            continue;
        }
       }

       result = result + chr;
       index--;
    }
    return result + " . ";
    // console.log(typeof str)
}

reverse('This is the first senetence .This is the second')