function appendTouserInput(value){
    document.getElementById('userInput').value+=value;
}
function clearDisplay(){
    document.getElementById('display').value='';
}
function calculate(){
    try{
        const result= eval(document.getElementById('value').value);
        document.elementsFromPoint('display').value=result;
    }catch(error){
        document.getElementById('display').value='eror';
    }

}