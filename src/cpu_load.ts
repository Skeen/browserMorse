import {Component, Input} from '@angular/core';

@Component({
	selector: 'cpu_load',
	templateUrl: 'cpu_load.html'
})

//var morse = require('morse-node').create("ITU");

export class CPULoader
{
	private input = "sos";
	private morse = require('morse-node').create("ITU");
	
	constructor()
	{
		
	}

	public calibrate()
	{
		
	}


	public read()
	{
		
	}

	public load(time: number)
	{
		var start = performance.now();
		//console.log(start);
		while(true)
		{
			var end = performance.now();
			if(end - start > 1000 * time)
				break;
		}
	
	}

	public onSubmit()
	{
		this.send(this.input);
	}

	public send(input: string)
	{
		var encoded = this.morse.encode(input);
		console.log('Sending : ' + input);
		console.log('Encoded : ' + encoded);
		setTimeout(this.sendOne.bind(this,encoded), 10000);
	}

	public sendOne(input: string)
	{
		if(!input || input.length === 0)
		{
			return;
		}
		var timeout: number = 99999;

		console.log('Sending Char : ' + input.charAt(0));
		
		switch(input.charAt(0))
		{
			case '.':
				this.load(1);
				timeout = 1000;
            	break;
        	case '-':
				this.load(3);
				timeout = 1000;
            	break;
        	case ' ':
				//this.sleep(3);
				timeout = 4000;
           		break;
   			case '/':
				//this.sleep(5);
				timeout = 8000;
           		break;
		}
		
		var next = input.substring(1);
		setTimeout(this.sendOne.bind(this,next), timeout);
	}

	/*
	public morse(input: string)
	{
		var encoded = morse.encode(input);

		for (var x = 0; x < encoded.length; x++)
		{
    		var c = encoded.charAt(x);
    		console.log("Outputting:", c);

    		switch(c)
    		{
        		case '.':
            		this.load(1);
            		break;
        		case '-':
            		this.load(3);
            		break;
        		case ' ':
            		this.sleep(3);
            		break;
   				case '/':
            		this.sleep(5);
            		break;
    		}
    		this.sleep(1);
		}
	}
	
	private sleep(n: number)
	{
		await this.delay(n);
	}

	private delay(n: number)
	{
		return new Promise(resolve => setTimeout(resolve, n));
		}
		*/
}
