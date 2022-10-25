var inputVal=document.getElementById('inputVal');
var resultVal=document.getElementById('resultVal');

var inputType=document.getElementById('inputType');
var resultType=document.getElementById('resultType');
var inputTypeValue,resultTypeValue

inputVal.addEventListener("input",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

//result.value=input.value;
inputTypeValue=inputType.value;
resultTypeValue=resultType.value;


function myResult(){
inputTypeValue=inputType.value;
resultTypeValue=resultType.value;

if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){
	resultVal.value=Number(inputVal.value) * 0.001;
}else if(inputTypeValue === "meter" && resultTypeValue==="centimeter"){
	resultVal.value=Number(inputVal.value) * 100;
}else if(inputTypeValue === "meter" && resultTypeValue==="millimeter"){
	resultVal.value=Number(inputVal.value) * 1000;
}else if(inputTypeValue === "meter" && resultTypeValue==="meter"){
	resultVal.value=inputVal.value;
}

if(inputTypeValue === "kilometer" && resultTypeValue==="meter"){
	resultVal.value=Number(inputVal.value) * 1000;
}else if(inputTypeValue === "kilometer" && resultTypeValue==="centimeter"){
	resultVal.value=Number(inputVal.value) * 100000;
}else if(inputTypeValue === "kilometer" && resultTypeValue==="millimeter"){
	resultVal.value=Number(inputVal.value) * 1000000;
}else if(inputTypeValue === "kilometer" && resultTypeValue==="kilometer"){
	resultVal.value=inputVal.value;
}


if(inputTypeValue === "centimeter" && resultTypeValue==="meter"){
	resultVal.value=Number(inputVal.value) * 0.1;
}else if(inputTypeValue === "centimeter" && resultTypeValue==="kilometer"){
	resultVal.value=Number(inputVal.value) * 0.00001;
}else if(inputTypeValue === "centimeter" && resultTypeValue==="millimeter"){
	resultVal.value=Number(inputVal.value) * 10;
}else if(inputTypeValue === "centimeter" && resultTypeValue==="centimeter"){
	resultVal.value=inputVal.value;
}

if(inputTypeValue === "millimeter" && resultTypeValue==="meter"){
	resultVal.value=Number(inputVal.value) * 0.001;
}else if(inputTypeValue === "millimeter" && resultTypeValue==="kilometer"){
	resultVal.value=Number(inputVal.value) * 0.000001;
}else if(inputTypeValue === "millimeter" && resultTypeValue==="centimeter"){
	resultVal.value=Number(inputVal.value) * 0.1;
}else if(inputTypeValue === "millimeter" && resultTypeValue==="millimeter"){
	resultVal.value=inputVal.value;
}
}