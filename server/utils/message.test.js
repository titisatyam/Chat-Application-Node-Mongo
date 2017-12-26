var expect = require('expect');

var {generateMessage} = require('./message');

describe('genrateMessage',() => {

    it('should genrate a correct message object',()=>{
        var from = 'Jen';
        var text = 'some Message';
        var message = generateMessage(from ,text);

        expect(message.createAt).toBe("number");
        expect(message).toInclude({from,text});
    });
})