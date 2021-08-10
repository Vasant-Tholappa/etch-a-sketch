
const container = document.querySelector(".container");

let allElements;

function grid_type(n)
{
    let i=0;
    
    while(i<n*n)
    {
        const oneElement = document.createElement('div');
        oneElement.setAttribute('class', 'gridElement'); 
        oneElement.setAttribute('id', "div" + i); 
        container.appendChild(oneElement);
        i++;
    }
    allElements = document.querySelectorAll(".gridElement");
    allElements.forEach(element => {
        element.addEventListener("mouseover", () => {
            
            element.style.backgroundColor = "purple";
        });
    });

    let z = 800/n;
    
    

    container.style.gridTemplateColumns = "repeat(" + n + ", " + z + "px)";
    container.style.gridTemplateRows = "repeat(" + n + ", " + z + "px)"; 
}


grid_type(16);


const change = document.querySelector(".change");

const btn = document.createElement('button');
btn.setAttribute('id', "btn1"); 
btn.textContent = 'Dimension Changer'; 
change.appendChild(btn);


function rem(D)
{
    
    allElements.forEach(element => {
        element.remove();
    });

    grid_type(D);
}

btn.addEventListener("click", () => {

    let D = prompt("Enter a number 'D' for a Grid of DxD Dimensions");
    
    
    if(!(D === "" || D === null) && D<=100)
    rem(D);

    else if(D > 100)
    alert("Your dimension size must not exceed 100!");

    else if(D === "")
    alert("Please enter the required dimension.");
    
});