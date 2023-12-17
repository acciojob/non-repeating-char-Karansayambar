function firstNonRepeatedChar(str) {
	let arr = new Array(256).fill(0);
	for(let i = 0; i < str.length; i++){
		let c = str.charCodeAt(i);
		arr[c]++;
	}
	let res = -1;
	let flag = true;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === 1){
			res = i;
			flag = false;
			break;
		}
	}
	 if (!flag) {
        return String.fromCharCode(res);
    } else {
        return "";
    }
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));