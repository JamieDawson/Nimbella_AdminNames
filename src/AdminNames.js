async function _command(text, secrets = {}) {
    var names = [
       "@Jamie Dawson", 
       "@Test_Admin_101",
       "@Test_Admin_202"
    ]
      
    var fullSentence = "`Admins you can contact are :`"
    var x = names.toString();
    
    for (var i = 0; i < names.length; i++){
       fullSentence = fullSentence.concat(names[i]).concat(" ");
    }
    
      return {
        response_type: 'in_channel', // or `ephemeral` for private response
        text: fullSentence
      };
    }
    
    const main = async ({__secrets = {}, text, ...params}) => ({body: await _command(params, text, __secrets)});
    module.exports = main;