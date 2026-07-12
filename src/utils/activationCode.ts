const characters =
"ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function generateActivationCode(){

    let result="";

    for(let i=0;i<12;i++){

        result +=
        characters.charAt(
            Math.floor(
                Math.random()*characters.length
            )
        );

    }

    return result;

}