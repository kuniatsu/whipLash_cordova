(()=>{
    bt.addEventListener('click',()=>{
        console.dir(taskList);
    });
    bt2.addEventListener('click',()=>{nextTask()});
    bt3.addEventListener('click',()=>{deleteEndTask()});
    bt4.addEventListener('click',()=>{timeCount(document.getElementById('timer'))});
    // document.querySelectorAll('.task').forEach((task)=>{
    //     task.addEventListener('click',(e)=>{
    //         let strikethroughFlg = checkClass(e.target,"strikethrough");
    //         if(strikethroughFlg){
    //             task.classList.remove('strikethrough');
    //         }else{
    //             task.classList.add('strikethrough');
    //         }
    //     });
    // });

    bt5.addEventListener('click',()=>{        
        start();
    });
    bt6.addEventListener('click',()=>{
        stop();
    });

    bt7.addEventListener('click',()=>{previousTask()});
    bt8.addEventListener('click',()=>{back2()});
    bt9.addEventListener('click',()=>{next2()});
    bt10.addEventListener('click',()=>{initTime()});
    bt11.addEventListener('click',()=>{
        makeWs();
        ws.setSelectorInnerText('li:not(#inputTaskList)',"task");
    });
    
    document.querySelectorAll('.listIcon').forEach((icon)=>{
        icon.addEventListener('click',(e)=>{
            // console.log("hamburger");
        });
    });
    
    bt12.addEventListener('click',()=>{
        ani = new Newton(animationBox,timer);
        // ani.changeAnimationBox();
        ani.start();
    });
    
    bt13.addEventListener('click',()=>{
        ani.toggle();
    });

    bt14.addEventListener('click',()=>{
        let obj = new Newton(animationBox,timer);
        console.log(obj.getName());

    });

    alertbt.addEventListener('click',()=>{
        console.log("click to alertbt");
        alert("test");
    });

    keepAwake_id.addEventListener('click',()=>{
        console.log("click to keepAwake");
        alert("keepAwake_id");
        if(window.plugins !== undefined){
            console.log("window.plugins !== undefined");
            window.plugins.insomnia.keepAwake();
        }else{
            console.dir(window);
            console.dir(window.plugins);
        }
    });

    allowSleep_id.addEventListener('click',()=>{
        console.log("click to allowSleep");
        alert("allowSleep_id");
        if(window.plugins !== undefined){
            console.log("window.plugins !== undefined");
            window.plugins.insomnia.allowSleepAgain();
        }else{
            console.dir(window);
            console.dir(window.plugins);
        }
    });

    keepAwake_id2.addEventListener('click',()=>{
        keepAwake();
    });

    allowSleep_id2.addEventListener('click',()=>{
        allowSleep();
    });

    talk_id.addEventListener('click',()=>{
        var a = getTitle();
        talk(a);
    });

})();