/*global beforeEach afterEach*/
var expect = require('../lib/expect');





(function(){
	"use strict";
	describe("this meta test", function(){
		it("exists", function(){
			expect([]).to.be.an('array');
		});
		it("will fail as expected.", function(){
			var dood = "raditude";
			expect(dood).to.be.ok();
		});
	});



})();


