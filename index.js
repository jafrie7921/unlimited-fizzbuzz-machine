"use strict";

// < < < URM > > > 

class Urm {
	constructor(registers = []) {
		this.registers = registers;
		this.prints = [];
		this.instructions = 0;
		this.checks = 0;
	}

	add(n) {
		++this.instructions;
		this.fitRegisters(n);
		this.registers[n] += 1;
	}

	sub(n) {
		++this.instructions;
		this.fitRegisters(n);
		if(this.registers[n] > 0) {
			this.registers[n] -= 1;
		}
	}

	isZero(n) {
		++this.checks;
		return this.registers[n] === 0;
	}

	printRegisters() {
		this.prints.push(				
				{
registers: [...this.registers],
instructions: this.instructions,
checks: this.checks,
}
);
		}

fitRegisters(n) {
	while(this.registers.length <= n){
		this.registers.push(0);		
	}
}
}

class Program { 
	constructor() {}

	execute(urm) {}

	canFinish() {
		return false;
	}

	hasSn(n) {
		return false;
	}
}

class Add extends Program {
	constructor(register) {
		super();
		this.register = register;
	}

	execute(urm) {
		urm.add(this.register);
	}

	canFinish() {
		return true;
	}

	hasSn(n) {
		return false;
	}
}

class Substract extends Program {
	constructor(register) {
		super();
		this.register = register;
	}

	execute(urm) {
		urm.sub(this.register);
	}

	canFinish() {
		return true;
	}

	hasSn(n) {
		return n === this.register;
	}
}

class Composition extends Program {
	constructor(p,q) {
		super();
		this.p = p;
		this.q = q;
	}

	execute(urm) {
		this.p.execute(urm);
		this.q.execute(urm);
	}

	canFinish() {
		return this.p.canFinish() && this.q.canFinish();
	}

	hasSn(n) {
		return this.p.hasSn(n) || this.q.hasSn(n);
	}
}

class Iteration extends Program {
	constructor(program, register) {
		super();
		this.program = program;
		this.register = register;
	}

	execute(urm) {
		while(!urm.isZero(this.register)) {
			this.program.execute(urm);
		}
	}

	canFinish() {
		return this.program.hasSn(this.register);
	}

	hasSn(n) {
		return this.program.hasSn(n);
	}
}

class Print extends Program {
	constructor(){
		super();
	}

	execute(urm) {
		urm.printRegisters();
	}

	canFinish() {
		return true;
	}

	hasSn(n) {
		return false;
	}
}

// < < < PARSING > > > 

function parseNumber(str) {
	const number = parseInt(str);
	const rest = str.slice(`${number}`.length);
	return [number, rest];
}

function expect(ch, str) {
	return	str[0] === ch ? str.slice(1) : "";
}

function parseProgram(str) {
	const curr = str[0];
	let rest = str.slice(1);
	let program;
	let register;
	switch(curr) {
		case "A":
			[register, rest] = parseNumber(rest);
			program = new Add(register); 
			break;
		case "S": 
			[register, rest] = parseNumber(rest);
			program = new Substract(register);
			break;
		case "(":
			let p;
			[p, rest] = parseProgram(rest);
			rest = expect(")", rest);
			[register, rest] = parseNumber(rest);
			program = new Iteration(p, register);
			break;
		case "P":
			program = new Print();
			break;
	}
	if (rest[0] === ";") {
		let q;
		[q, rest] = parseProgram(rest.slice(1));
		program = new Composition(program, q);
	}
	return [program, rest];
}

// < < < RENDERING > > > 

function runUrm() {
	const code = document.getElementById("code").value
		.replaceAll("\n\r", "\n")
		.replaceAll(" ", "")
		.split("\n").map(it => it.replace(/#.*$/i, "")).join("") // Remove comments
		.replaceAll("\n", "");

	const program = parseProgram(code)[0];
	if(!program.canFinish()){
		window.alert("The program cannot stop!");
		return;
	}

	const start = document.getElementById("input").value;
	const inputs = start === "" ? ["0"] : start.replaceAll("\n\r", "\n")
		.split("\n")
		.filter(it => it.length);

	const results = inputs.map(input => {
			const registers = input.split(" ").map(it => +it);
			const urm = new Urm(registers);
			program.execute(urm);
			const header = "<tr>" + "<th>#Instructions</th><th>#Checks</th>"  + [... new Array(urm.registers.length).keys()].map(it => `<th>R${it}</th>`).join("") + "</tr>"; 
			const content = urm.prints.map(print => "<tr>" + `<td>${print.instructions}</td><td>${print.checks}</td>`  + print.registers.map(reg => `<td>${reg}</td>`).join("") + "</tr>").join("");

			return "<table>" + header + content + "</table>";
			});

	const result = document.getElementById("result");
	result.innerHTML = results.join("");

}

