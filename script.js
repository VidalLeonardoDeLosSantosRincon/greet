(function(){
    let text = "Hello Coders! 👋",
    box = document.getElementById("greet-box");
    greeting = document.getElementById("greeting"),
    msg = document.getElementById("message"),
    msgText = `I'm new here 😇, I hope you enjoy this little contribution 🖥️.\
    And remember, "if you can imagine it 💭, you can program it 🤖."`,
    bye = document.getElementById("bye"),
    byeText = "Thanks for watching!, have a nice day 🍻",
    i = 0;

    let toWriteSomething = (_element,_text) =>{
      
        let t = setInterval(()=>{
            
            _element.innerHTML+= _text[i];
            i++;
            if(i===(_text.length)){
                clearInterval(t);
                if(msg.innerHTML.trim()===""){
                    i = 0;
                    setTimeout(()=>{
                        toWriteSomething(msg,msgText);
                    },1000);
                }else{
                    if(bye.innerHTML.trim()===""){
                        i = 0;
                        setTimeout(()=>{
                            toWriteSomething(bye,byeText);
                        },1000);
                    } 
                }
            }
            box.scrollTop = msg.offsetTop;
        },200);
    };
    toWriteSomething(greeting,text);
    
})();