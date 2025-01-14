
let grid = Array.from({ length: 9 }, () => Array(9).fill(0)); //create grid
cleargrid();
console.log(grid);



function solve(){
    if(findemptyrow()==null && findemptycol()==null){
        console.log(findemptyrow() , findemptycol())
        return true;
    }
    let x=findemptyrow();
    let y=findemptycol();
    for(let i=1;i<=9;i++){
        if(ifSafe(x,y,i)){
            grid[x][y]=i;
            document.getElementById(`C${x}${y}`).innerHTML=i;
            if(solve()){
                return true;
            }
        grid[x][y]=0;
        document.getElementById(`C${x}${y}`).innerHTML=i;
        }
    }
    console.log(grid);
    return false;
    
}

function cleargrid(){
    for(x=0;x<9;x++){
    for(y=0;y<9;y++){
        if(document.getElementById(`C${x}${y}`)!= 0){
            document.getElementById(`C${x}${y}`).innerHTML=" ";
            grid[x][y]=0;
        }
        
    }}
    console.log(grid);

      
}

function giveInput(id){
    let userinput=prompt("Input number 1-9");
    const numpart=id.slice(1);
    let x=numpart[0];
    let y=numpart[1];
    console.log(x,y);
    while((userinput>9 || userinput<1) || !ifSafe(x,y,userinput) ){
        userinput=prompt("invalid number, please enter a number 1-9");
        
    }
    document.getElementById(id).innerHTML=userinput;
    let gridnumx=id.slice(1,2);
    let gridnumy=id.slice(2,3);
    grid[gridnumx][gridnumy]=userinput;
    console.log(grid);
    

}

function checkIfCorrect(){
    const val=45;
    let checker,checker1=0;
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            checker=grid[i][j]+checker;
            checker1=grid[j][i]+checker1;
        }
        if(checker!=45){
            return 0;
        }
    }
    return 1;
}
function ifSafe(row,col,num){

        for(j=0;j<9;j++){
            if(num == grid[row][j] || num==grid[j][col]){
                return false;
            }
        }
        
    let startRow = Math.floor(row / 3) * 3; 
    let startCol = Math.floor(col / 3) * 3; 
    
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (grid[i][j] == num) {
                return false;
            }
        }
    }
    
    return true;
}

function findemptyrow(){
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            if(grid[i][j]==0){
                return i;
            }
        
        }
    } return null;
}
function findemptycol(){
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            if(grid[i][j]==0){
                return j;
        }
        
        }
    } return null;
}
    


