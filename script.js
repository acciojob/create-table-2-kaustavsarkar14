function createTable() {
    //Write your code here
	  const table = document.getElementById('myTable')
		const row = prompt("input number of rows")
		const col = prompt("input number of columns")
	for(let i=0; i<row; i++){
		const tr = document.createElement('tr')
		for(let j=0; j<col; j++){
			const td = document.createElement('td')
			td.innerText = `Row-${i} Column-${j}`
			tr.appendChild(td)
		}
		table.appendChild(tr)
	}
}
