/**
 * Test to see if a url contains passed paramaters.
 * @param {*} url 
 * @return {*} true if the url contains parammeters, otherwise false.
 */
function hasParameters(url = null){
    if (url !== null){
        return url.includes('?');
    }
    return false;
}

/**
 * Parses parameters located in a url string.
 * @param {*} url 
 */
function parseParameters(url = null){
    let params = null;
    if (url !== null){
        url = url.substring(url.lastIndexOf('?') + 1);
        if (url.length > 1){
            console.log(url);
            params = new Array(0);
            while(url.length > 1 && url.includes('=')){
                id = null;
                value = null;
                endIndex = url.indexOf('=');
                startIndex = 0;
                id = url.substring(startIndex,endIndex);
                startIndex = endIndex + 1;
                if (url.includes('&')){
                    endIndex = url.indexOf('&');
                    value = url.substring(startIndex,endIndex);
                    params.push({"key": id, "value": value});
                    url = url.substring(endIndex + 1);
                }
                else{
                    value = url.substring(startIndex);
                    params.push({"key": id, "value": value});
                    break;
                }
                
                
            }
        }
    }
    return params;
}

function logParamaters(params = null){
    if (params !== null){
        for (i = 1; i <= params.length; i++){
            console.log('param ' + i 
                    + '\nid: ' + params[i - 1]['id'] 
                    + ' \nValue: ' + params[i - 1]['value'] );
        }
    }
}