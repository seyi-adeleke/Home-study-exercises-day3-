class StringSplosion{
    constructor(stringArgument){
        this._stringArgument = stringArgument;
    }
    manipulate(){
        if(typeof (this._stringArgument) !== "string"){
            return null;
        }

        let stringArray = [];
        for(var letter = 1;letter<=this._stringArgument.length;letter++){
            let currentLetter = this._stringArgument.substr(0, letter);
            stringArray.push(currentLetter);
        }
        return stringArray.join('');

    }
}
module.exports = StringSplosion;