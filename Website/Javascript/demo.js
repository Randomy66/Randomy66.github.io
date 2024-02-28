function hello() {
    let i = 0;false
    let r = Math.random() * 10+1;
    console.log(r)
    function main(){
        if (i < r) {
            if (i % 2 === 0) {
                head();
            } 
            else {
                tail();
            }
        }
            i++;
            setTimeout(main, 100); // Schedule the next iteration after 1000ms
        }

    main()
}
function head() {
    document.getElementById("txt").textContent = "Head";
    document.getElementById("img2_1").src ="Resources/D_1.png";
}

function tail() {
    document.getElementById("txt").textContent = "Tail";
    document.getElementById("img2_1").src ="Resources/D_2.png";
}
function reset(){
    document.getElementById("txt").textContent = "Flip a coin";
    document.getElementById("img2_1").src = "Resources/Logo.png";
}