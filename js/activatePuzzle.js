/**
 * MIT License

Copyright (c) 2017 deepakshajan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

var options = {
				   solution: 			[[null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	 'R',	 'H',	 'I',	 'N',	 'O',	 'C',    'E',    'R',    'O',    'S',   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,    'L',   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	 'G',	 'I',	 'R',	 'A',	 'F',	 'F',    'E',   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,    'P',   null,   null,   null,   null,    'H',   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	 'M',	null,	null,	null,    'H',   null,   null,   null,    'D',    'O',    'G',   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	 'O',	null,	null,	null,    'A',   null,   null,    'C',   null,    'R',   null,   null,   null,   null,   null],
		                                [null,	null,	null,	 'P',	 'E',	 'N',	 'G',	 'U',	 'I',    'N',   null,   null,    'A',   null,    'S',   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	 'K',	null,	null,	null,    'T',    'U',    'R',    'T',    'L',    'E',   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	 'Z',	 'E',	 'B',	 'R',	 'A',   null,   null,    'A',   null,    'I',   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	 'Y',	null,	null,	null,   null,   null,    'B',   null,    'O',   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,    'B',   null,    'N',   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,    'I',   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	 'A',	 'L',	 'L',	 'I',    'G',    'A',    'T',    'O',    'R',   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]],


		            index: 				[[null,  null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,      1,   null,   null,   null,   null,   null,      2,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,      3,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,     10,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,      5,   null,   null,   null,   null,   null,   null,   null,      6,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,      7,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,    '8',   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,      9,   null,      4,   null,     11,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,     12,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,     13,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]],

		         questions_across: [	  "1. Big animal that has one horn",
		                                  "3. This animal has a very long neck",
		                                  "6. Man's best friend",
		                                  "8. Lives in the cold and waddles",
		                                  "9. Slow moving and has a shell",
		                                  "12. Striped animal that looks like a horse",
		                                  "13. Can swim under water and walk on land and has a big bite"],

		         questions_down: [		 "2. This animal has a long trunk",
		                                 "4. This animal likes to eat carrots and sugar cuubes",
		                                 "5. This animal loves bananas",
		                                 "7. Some say this anmal has nine lives",
		                                 "10. Has big ears and likes to hop",
		                                 "11. King of the jungle"]

	};


		cwp_nmsp.activateCWP(document.getElementById("myPuzzle"),false,options);